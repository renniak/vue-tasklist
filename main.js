const app = new Vue({
  el: "#app",
  data: {
    newTask: {},
    tasks: [],
  },
  methods: {
    addTask: function () {
      if (this.newTask.name) {
        coleccion
          .add({
            name: this.newTask.name,
            isDone: false,
          })
          .then(() => this.$mount());
        this.newTask.name = "";
      }
    },
    updateTask: function (id) {
      const currentTask = this.tasks.find((task) => task.id == id);
      coleccion
        .doc(id)
        .set({ name: currentTask.data.name, isDone: !currentTask.data.isDone })
        .then(() => this.$mount);
    },
    clearCompletedTasks: function () {

    },
  },
  mounted() {
    console.log("Vue mounted");
    this.tasks = [];
    coleccion
      .get()
      .then((response) =>
        response.docs.map((item) =>
          this.tasks.push({ id: item.id, data: item.data() })
        )
      );
  },
});
