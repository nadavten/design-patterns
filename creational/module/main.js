var Task = require('./task');
var Repo = require('./taskRepo')

var task1 = new Task({name:'task 1'});
var task2 = new Task({name:'task 2'});

var task3 = new Task(Repo.get(1));

task1.Completed();
task1.Save();
task2.Save();
task3.Save();