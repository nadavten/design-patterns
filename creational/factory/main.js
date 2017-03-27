var Task = require('./task');
var Repo = require('./taskRepo');
var Factory = require('./repoFactory');

var task1 = new Task({name:'task 1'});
var task2 = new Task({name:'task 2'});

var task3 = new Task(Repo.get(3));

var task4 = Factory.tasks.get(4);

task1.Completed();
task1.Save();
task2.Save();
task3.Save();
task4.Save();