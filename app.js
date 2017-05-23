angular.module('todo', ['myFactory'])
    .controller('MainController',['todoProvider', function(todoProvider){
        var mainCtrl = this;
        mainCtrl.todos = todoProvider.getTodos();
        mainCtrl.deleteTodo = item => {
            todoProvider.deleteTodo(item.id);
        }
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
