var Task = require('./task');

function ObserverList(){
    this.observerList = [];
}
ObserverList.prototype.add = function(obj){
    return this.observerList.push(obj);
}
ObserverList.prototype.get = function(index){
    return this.observerList[index];
}
ObserverList.prototype.count = function(){
    return this.observerList.length;
}
ObserverList.prototype.removeAt = function(index){
    this.observerList.splice(index,1);
}
ObserverList.prototype.indexOf = function(obj,startIndex){
    var i = startIndex;
    while (i<this.observerList.length) {
        if(this.observerList[i]===obj){
            return i;
        }
        i++;
    }

    return -1;
}


var NotifyService = function(){
    
    this.update = function(task){
        console.info('notify task: ' + task.name);
    }
}


var LoggingService = function(){
    
    this.update = function(task){
        console.info('log task: ' + task.name);
    }
}

var notifyService = new NotifyService();
var logService = new LoggingService();

var ObservableTask = function(data){
    Task.call(this,data);
    this.observers = new ObserverList();
}
ObservableTask.prototype.addObserver = function(observer){
    this.observers.add(observer);
}
ObservableTask.prototype.notify = function(context){
    var observersCount = this.observers.count();
    for (var index = 0; index < observersCount; index++) {
        this.observers.get(index)(context);
    }
}
ObservableTask.prototype.save = function(){
    Task.prototype.save.call(this);
    this.notify(this);
}
ObservableTask.prototype.removeObserver = function(observer){
    this.observers.removeAt(this.observers.indexOf(observer,0));
}


var task1 = new ObservableTask({name:'task 1'});

task1.addObserver(notifyService.update);
task1.addObserver(logService.update);

task1.save();

task1.removeObserver(logService.update);
task1.save();