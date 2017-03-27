var repo = function(){

    var db = {};

    return{
        get:function(id){
            console.info('getting task: ' + id);
            return {
                name:'new task from db';
            }
        },

        save : function(task){
            console.info('saving task : '+ task.name +' to db');
        }
    }
}

module.exports = repo();