/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  export var describeTasksForPerson = function(assingnee: IPerson, taskCollection: Task[]): String[] {
    var descriptions : String[] = [];
    for(var task of taskCollection){
      if(task.assignedTo === assingnee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }
}
