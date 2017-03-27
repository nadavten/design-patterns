var Task = function(data){
    this.name = data.name;
    this.priority = data.priority;
    this.completed = data.completed;
    this.save = data.save;
    this.completeDate = data.completeDate;
}

var TaskServive = function(){
    return {
        
        complete:function(task){
            console.info('completing task: ' + task.name);
            task.completed = true;
        },

        setCompleteDate:function(task){
            task.completeDate = new Date();
            console.info('task '+task.name + ' completed on ' + task.completeDate);
        },

        notify:function(task){
            console.info('notify complete of ' + task.name);
        },

        save:function(task){
            console.info('save task: '+ task.name);
        }
    }
}

// the facade
var TaskWrapper = function(){
    return{
        completeAndNotify:function(task){
            TaskServive.complete(task);
            if(task.completed){
                TaskServive.setCompleteDate(task);
                TaskServive.notify(task);
                TaskServive.save(task);
            }
        }
    }
}();

var myTask = {
    name:'task 1',
    completed:false,
}

TaskWrapper.completeAndNotify(task);