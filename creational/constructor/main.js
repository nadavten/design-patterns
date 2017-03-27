var Task = require('./task');

var task1 = new Task('task 1');
var task2 = new Task('task 2');

task1.Completed();
task1.Save();
task2.Save();