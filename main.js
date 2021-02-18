const app = new Vue({
  el: "#app",
  data: {
    newTask: {},
    tasks: [
      { name: "this is task one", isDone: false },
      { name: "this is task two", isDone: false },
      { name: "this is task three", isDone: false },
    ],
  },
  methods: {
    addTask: function () {
      this.tasks.push({ name: this.newTask.name, isDone: false });
      this.newTask.name = "";
    },
    clearAllTasks: function () {
      this.tasks.splice(0,this.tasks.length)
    },
  },
});
