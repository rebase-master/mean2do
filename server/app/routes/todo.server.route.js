module.exports = function(app) {
    var todos = require('../controllers/todo.server.controller');
    //app.get('/', todo.render);

    app.route('/api/todos')
        .post(todos.create)
        .get(todos.list);

    app.route('/api/todos/:todoId')
        .get(todos.read)
        .delete(todos.destroy) // added delete method
        .put(todos.update);

    app.param('todoId', todos.todoByID);



}
