angular.module('todo', ['myFactory'])
    .controller('MainController',['todoProvider', function(todoProvider){
        this.todos = todoProvider.getTodos();
    }  ] )
    .controller('AddController',['todoProvider', function(todoProvider){
        
    }  ] )
