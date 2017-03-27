var Task = function(data){
    this.name = data.name;
    this.flyWeight = FlyWeightFactory.get(data.project,data.priority,data.user,data.completed);
}

function FlyWeight(project,priority,user,completed){
    this.project = project;
    this.priority = priority;
    this.user = user;
    this.completed = completed;
}

var FlyWeightFactory = function(){

    var flyweights = {};

    return{
        get:function(project,priority,user,completed){

            if(!flyweights[project+priority+user+completed]){
                flyweights[project+priority+user+completed]= new FlyWeight(project,priority,user,completed);
            }
            return flyweights[project+priority+user+completed];
        },

        getCount:function(){
            var count=0;
            for (var f in flyweights) count++;
            return count;
        }
    }

}();

function TaskCollection(){
    var tasks = {};
    var count = 0;


    return{

        add : function(data){
            tasks[data.name] = new Task(data);
            count++;
        },

        get:function(name){
            return tasks[name];
        },

        getCount:function(){
            return count;
        }
    }
}

var tasks = new TaskCollection();

var projects = ['proj1','proj2','proj3','pro4'];
var priorities = [1,2,3,4,5];
var users = ['jane','john','dave'];
var completed = [true,false];

var initialMemeory = process.memoryUsage().headUsed;

for (var index = 0; index < 10000; index++) {
    tasks.add({
        name:'task '+index,
        priority:priorities[Math.floor(Math.random()*5)],
        project:projects[Math.floor(Math.random()*4)],
        user:users[Math.floor(Math.random()*3)],
        completed:completed[Math.floor(Math.random()*2)],
    });
}

var afterMemeory = process.memoryUsage().headUsed;
console.info('used memory : ' + (afterMemeory - initialMemeory)/1000000);
console.info('tasks: ' + tasks.getCount());
console.info('tasks: ' + FlyWeightFactory.getCount());