var Task = function(data){

    this.name = data.name;
    this.completed = false;
};

Task.prototype.completed = function(){
    console.info('completing task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function(){
    console.info('saving task:'+ this.name);
};

module.exports = Task;