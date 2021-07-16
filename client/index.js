const app = new Vue({
  el: '#app',
  data: {
    isLogin: true,
    message: 'Hello',
    todos: [],
    todo: {
      title: '',
      description: ''
    }
  },
  methods: {
    login () {

    },
    listTodo() {
      axios({
        method: "GET",
        url: 'http://localhost:3000/todos',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(({ data }) => {
          // console.log(data);
          this.todos = data
        })
        .catch((err) => {
          console.log(err);
        })
    },
    addTodo() {
      axios({
        method: "POST",
        url: 'http://localhost:3000/todos',
        headers: {
          'Content-Type': 'application/json'
        },
        data: this.todo
      })
        .then(() => {
          this.listTodo()
        })
        .catch((err) => {
          console.log(err);
        })
    },
    deleteTodo(id) {
      axios({
        method: "DELETE",
        url: 'http://localhost:3000/todos/' + id,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          this.listTodo()
        })
        .catch((err) => {
          console.log(err);
        })
    }
  },
  mounted () {
    this.listTodo()
  }
});
