angular.module('myFactory', [])
    .factory('todoProvider' ,  () => {
        var todos = [
            {"id":123214, "name":"Get Milk", "priority":"Low" },
            {"id":123215, "name":"Send email", "priority":"High" },

        ];
        return {
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
