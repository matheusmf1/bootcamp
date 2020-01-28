// Necessario para o usuario fazer as requisições somente quando logado

const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Project = require('../models/project');
const Task = require('../models/task');
const User = require('../models/user');

const router = express.Router();

router.use( authMiddleware );


router.get( '/', async ( req, res ) => {
  try {

    const tasks = await Task.find(); 
    return res.status(200).send( { tasks } );

  } catch (error) {
    res.status(400).send( { error: 'Error on loading Tasks' } );
  }
});

router.get('/:task', async ( req, res ) => {
  try{

    const task = await Task.findOne( { title: req.params.task } );
   
    if ( !task )
      return res.status(404).send( { error: 'Task not found' } );

    res.status(200).send( { task } );

  } catch( err ) {
    console.log( err );
    return res.status(400).send( { error: 'Error on loading Task' } )
  }
});


router.post( '/', async ( req, res ) => {
  try {
    const { title, info, projectTitle } = req.body;
  
    const project = await Project.findOne( { title: projectTitle } );

    if ( !project ) 
      return res.status(404).send( { error: 'Project Does not Exists' } );

    const projTasks = project.tasks;
  
    if ( projTasks.length !== 0 ) {
      
      projTasks.forEach( async ( e ) => {

        let check = await Task.findById( e );
        if ( check.title === title )
            return res.status(400).send( { error: 'Task already in this User'} ); 
      });   
    }

    const task = await new Task( { title, info, project: project._id } );
    project.tasks.push( task );
    await task.save();
    await project.save();

    return res.status(200).json( { task } );

  } catch (error) {
    console.log( error );
    res.status(400).send( { error: 'Error creating new Task' } )
  }
});


router.put( '/:task', async ( req, res ) => {
  try {

    const { title, info } = req.body;

    const task = await Task.findOne( { title: req.params.task } );
    console.log('Task: ', task);

    if ( !task )
      return res.status(404).send( { error: 'Task not found' } );

    await task.updateOne( { title: title, info: info } );

    res.status(200).send( { ok: true } );

  } catch (error) {
    console.log( error );
    res.status(400).send( { error: 'Error updating task' } )
  }
});

router.delete( '/:task', async ( req, res ) => {
  try {

    const task = await Task.findOneAndDelete( { title: req.params.task } );

    if ( !task )
    return res.status(404).send( { error: 'Task not found' } );

    return res.send( { ok: true } );
    
  } catch (error) {
    res.status(400).send( { error: 'Error on deleting project' } );
  }
});


module.exports = app => app.use( '/task', router );