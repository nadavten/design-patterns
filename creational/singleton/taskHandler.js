var repo = require('./Repo');

var taskHandler = function(){
    return{
        save : function(){
            repo.save('task handler');
        }
    }
}

module.exports = taskHandler();