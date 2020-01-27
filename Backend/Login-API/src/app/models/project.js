const mongoose = require('../../db');

const ProjectSchema = new mongoose.Schema( {

  title: {
    type: String,
    require: true,
    unique: true
  },
  description: {
    type: String,
    require: true
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project; 