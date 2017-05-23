angular.module('myFactory', [])
    .factory('todoProvider' ,  () => {
        var todos = [
            {"id":123214, "name":"Get Milk", "priority":"Low" },
            {"id":123215, "name":"Send email", "priority":"High" },

        ];
        return {
            getTodos:() => {
                return todos
            }
        }

    })
