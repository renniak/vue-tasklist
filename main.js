const app = new Vue({
  el: "#app",
  data: {
    newTask: {},
    tasks: [],
  },
  methods: {
    addTask: function () {
      if (this.newTask.name) {
        this.tasks.push({ name: this.newTask.name, isDone: false });
        this.newTask.name = "";
        this.updateTasks();
      }
    },
    updateTasks: function () {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      console.log("tasks updated");
    },
    clearAllTasks: function () {
      this.tasks.splice(0, this.tasks.length);
    },
  },
  mounted() {
    if (localStorage.tasks)
      this.tasks = JSON.parse(localStorage.getItem("tasks"));
  },
});
