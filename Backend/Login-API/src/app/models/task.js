const mongoose = require('../../db');

const TaskSchema = new mongoose.Schema( {

  title: {
    type: String,
    require: true,
    unique: true
  },
  info: {
    type: String,
    require: true
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    require: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task; 