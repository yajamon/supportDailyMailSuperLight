function TaskSaveManager (taskList) {
	this.taskList = taskList;
}

TaskSaveManager.prototype.stringify = function() {
	var tasks = this.taskList.tasks;
	var result = [];

	for (var index = 0; index < tasks.length; index++) {
		task = tasks[index];
		result[index] = {
			subject : task.subject.element.val(),
			manHour : task.manHour.element.val(),
			content : task.content.element.val(),
		};
	}

	return JSON.stringify(result);
};