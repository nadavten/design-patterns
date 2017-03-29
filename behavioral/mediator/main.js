var Task = require('./task');

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

var mediator = function(){

    return {

        channels : {},
        
        subscribe: function(channel,context,callback){

            if(!this.channels[channel]){
                this.channels[channel] = [];
            }

            this.channels[channel].push({
                context:context,
                callback:callback,
            });
        },

        publish:function(channel){

            if(this.channels[channel]){

                var args = Array.prototype.slice.call(arguments,1);

                for (var index = 0; index < this.channels[channel].length; index++) {
                    var subscriber = this.channels[channel][index];

                    subscriber.callback.apply(subscriber.context,args);
                }
            }
        }
    }

}();

var task1 = new Task({
    name:'task 1'
});

mediator.subscribe('complete',notifyService,notifyService.update);
mediator.subscribe('complete',logService,logService.update);

task1.completed = function(){
    mediator.publish('complete',this); // this enter to args
    Task.prototype.completed.call(this);
}

task1.completed();