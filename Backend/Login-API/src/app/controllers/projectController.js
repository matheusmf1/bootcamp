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

    const projects = await Project.find().populate( ['user', 'tasks'] );
    // esse populate se chama igger loading, ou seja, o mongo procura pelos projetos e pelos usuarios de forma paralela

    return res.send( { projects } );

  } catch (error) {
    res.status(400).send( { error: 'Error on loading projects' } );
  }
});

router.get( '/:project', async ( req, res ) => {
  try {

    const project = await Project.findOne( { title: req.params.project }).populate( ['tasks'] );
   
    if( !project )
      return res.status(404).send( { error: 'Project not found' } );

    return res.send( { project } );
    
  } catch (error) {
    res.status(400).send( { error: 'Error on loading project' } );
  }
});

router.post( '/', async ( req, res ) => {
  try {

    const { title, description } = req.body;
  
    const project = await new Project( { title, description } );
    const userProj = await User.findOne( { id: req.userId } ).select('+password');

    if ( userProj.projects.length !== 0 ) {

      checkProj = userProj.projects.forEach( async ( e ) => {  
        let check = await Project.findById( e );
       
        if ( check.title === title )
         return res.status(400).send( { error: 'Project already in this User'} );
       });

    }

    userProj.projects.push( project );
    
    await project.save();
    await userProj.save();

    res.status(200).send( { project } );
  } catch (error) {
    console.log(error);
    res.status(400).send( { error: 'Error creating new project' } )
  }
});

router.put( '/:projectId', async ( req, res ) => {
  try {

    const { title, description, tasks } = req.body;

    const project = await Project.findByIdAndUpdate( req.params.projectId, { 
      title, 
      description
    }, { new: true } );

    project.tasks = [];
    await Task.remove( { project: project._id } );

    await Promise.all( tasks.map( async task => {
      const projectTask = new Task( { ...task, project: project._id } );

      await projectTask.save();

      project.tasks.push( projectTask );
    }));

    await project.save();

    res.send( { project } );

  } catch (error) {
    res.status(400).send( { error: 'Error updating new project' } )
  }
});

router.delete( '/:project', async ( req, res ) => {
  try {

    const project = await Project.findOne( { title: req.params.project } ).populate( ['tasks'] );

    if ( !project )
      return res.status(404).send( { error: 'Project not found'} );

    const user = await User.findOne( { id: req.userId } ).select('+password');

    const userProj = user.projects.forEach( async ( proj, index, obj ) => {
     
      if ( proj.toString === project._id.toString ) {
        obj.splice( index, 1 );
        await user.save();
      }
    });

    const tasks = project.tasks.forEach( async ( t ) => {
      await Task.findOneAndDelete( { title: t.title } );
    });

    await Project.findOneAndDelete( { title: req.params.project } );
    
    return res.status(200).send( { ok: true } );
    
  } catch (error) {
    res.status(400).send( { error: 'Error on deleting project' } );
  }
});


module.exports = app => app.use( '/projects', router );