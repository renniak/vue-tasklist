const app = new Vue({
  el: "#app",
  data: {
    task: "",
    tasks: [],
  },
  methods: {
    addTask: function () {
      if(this.task) this.tasks.push(this.task)
      this.task = ""
    },
    clearAllTasks: function () {
      this.tasks.splice(0,this.tasks.length)
    }
  },
});
