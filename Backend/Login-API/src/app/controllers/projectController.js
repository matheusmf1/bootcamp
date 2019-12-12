// Necessario para o usuario fazer as requisições somente quando logado

const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Project = require('../models/project');
const Task = require('../models/task');

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

router.get( '/:projectId', async ( req, res ) => {
  try {

    const project = await Project.findById( req.params.projectId ).populate( ['user', 'tasks'] );
    // esse populate se chama igger loading, ou seja, o mongo procura pelos projetos e pelos usuarios de forma paralela

    if( !project )
      return res.status(404).send( { error: 'Project not found' } );

    return res.send( { project } );
    
  } catch (error) {
    res.status(400).send( { error: 'Error on loading project' } );
  }
});

router.post( '/', async ( req, res ) => {
  try {

    const { title, description, tasks } = req.body;

    const project = await Project.create( { title, description, user: req.userId } );
    // o userId será preenchido pelo middleware de autenticação

    await Promise.all( tasks.map( async task => {
      const projectTask = new Task( { ...task, project: project._id } ); //new Task cria mas não salva no momento, task.create cria e já salva

      // Como save é um método assincrono há duas formas de fazer

      // Usando callback da promise, porém como o map não espera terminar as tarefas, project save será executado.
     // projectTask.save().then( task => project.tasks.push( task ) ); 

      await projectTask.save();
      project.tasks.push( projectTask );
    }));

    await project.save();

    res.send( { project } );

  } catch (error) {
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

router.delete( '/:projectId', async ( req, res ) => {
  try {

    const project = await Project.findByIdAndDelete( req.params.projectId ).populate('user');
    // esse populate se chama igger loading, ou seja, o mongo procura pelos projetos e pelos usuarios de forma paralela

    return res.send( { ok: true } );
    
  } catch (error) {
    res.status(400).send( { error: 'Error on deleting project' } );
  }
});


module.exports = app => app.use( '/projects', router );