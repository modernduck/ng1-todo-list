angular.module('todo', ['myFactory'])
    .controller('MainController',['todoProvider', function(todoProvider){
        this.todos = todoProvider.getTodos();
    }  ] )
    .controller('AddController',['todoProvider', function(todoProvider){
        var addCtrl = this;
        addCtrl.addTodo = () => {
            console.log('called')
            todoProvider.createTodo(addCtrl.name, addCtrl.priority );
            delete addCtrl.name
            delete addCtrl.priority
        }
    }  ] )
