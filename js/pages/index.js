var taskList = new TaskList();
taskList.addEmptyTask();

$(function() {
	var taskListDom = $("#taskList");
	taskList.appendTasks(taskListDom);
});
