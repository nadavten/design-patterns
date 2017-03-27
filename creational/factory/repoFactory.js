var repoFactory = function(){

    var repos = this;
    var repoList = [
        {name:'tasks',source:'./taskRepo.js'},
    ]

    repoList.forEach(function(repo){
        repos[repo.name] = require(repo.source)();
    });
}

module.exports = new repoFactory;