var Task = require('./task');

var task = new Task('task regular');
task.completed();
task.save();


// inheritnace
var UrgentTask = function(name,priority){
    Task.call(this,name);
    this.priority = priority;
}
UrgentTask.prototype = Object.create(Task.prototype);
//

var urgentTask = new UrgentTask('urgent task',1);
urgentTask.prototype.notify = function(){
    console.info('notifing..');
}

urgentTask.completed();

urgentTask.prototype.save = function(){
    this.notify();
    Task.prototype.save.call(this);
}
urgentTask.save();