class Task{
  constructor(task){
    this.name = task;
    this.id = new Date().getTime();
    this.status = 0;
    return this;
  }
}
