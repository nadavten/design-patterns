var repo = function(){

    return{

        tasks:{},
        commands:[],

        get:function(id){
            console.info('getting task: ' + id);
            return {
                name:'new task from db'
            }
        },

        save : function(task){
            this.tasks[task.id] = task;
            console.info('saving task : '+ task.name +' to db');
        },

        replay:function(){
            for (var index = 0; index < this.commands.length; index++) {
                var command = this.commands[index];
                
                this.executeNoLog(command.name,command.obj);
            }
        },

        executeNoLog : function(name){

            var args = Array.prototype.slice.call(arguments,1);

            if(this[name]){
                return this[name].apply(this,args);
            }
        },

        execute: function(name){

            var args = Array.prototype.slice.call(arguments,1);

            this.commands.push({
                name:name,
                obj:args[0]
            });

            if(this[name]){
                return this[name].apply(this,args);
            }
        }
    }
}();

repo.execute('save',{
    id:1,
    name:'task 1'
});
repo.execute('save',{
    id:2,
    name:'task 2'
});

console.log(repo.tasks);

repo.tasks = {};

console.log(repo.tasks);

repo.replay();

console.log(repo.tasks);