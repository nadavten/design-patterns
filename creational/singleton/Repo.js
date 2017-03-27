var repo = function(){

    var called = 0;

    console.info('init repo');

    return{    

        save : function(task){
            called++;

            console.info('saveing ' + task + 
            'called ' + called + ' times');
        }
    }
}

//saves function in module as singleton
module.exports = new repo; 