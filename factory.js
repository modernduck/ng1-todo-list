var STORAGE_KEY = 'todo-list'

angular.module('myFactory', [])
    .factory('todoProvider' ,  () => {
        var todos = [
            {"id":123214, "name":"Get Milk", "priority":"Low" },
            {"id":123215, "name":"Send email", "priority":"High" },

        ];
        return {
            load:() => {
                //var loadData = 
                if(localStorage[STORAGE_KEY]){
                    todos = JSON.parse(localStorage[STORAGE_KEY])
                }
            },
            save: () => {
                localStorage[STORAGE_KEY] =  JSON.stringify(todos)
            },
            deleteTodo: id => {
                var index = todos.findIndex(item => {
                    return id == item.id
                })
                console.log(index)
                todos.splice(index, 1);
            },
            createTodo: (name, priority) => {
                var now = new Date();
                var obj = {
                    id:now.getTime(),
                    name:name,
                    priority:priority
                }
                todos.push(obj);
            },
            getTodos:() => {
                return todos
            }
        }

    })
