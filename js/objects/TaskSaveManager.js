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
			manHour : task.manHour.value,
			content : task.content.value,
		};
	}

	return JSON.stringify(result);
};

TaskSaveManager.prototype.parse = function(taskListString) {
	var parsed = JSON.parse(taskListString);
	for (var index = 0; index < parsed.length; index++) {
		var obj = parsed[index];
		var task = new Task(
			new Subject(obj.subject),
			new ManHour(obj.manHour),
			new Content(obj.content)
		);

		this.taskList.add(task);
	}
};

TaskSaveManager.prototype.save = function() {
	localStorage.setItem(
		'taskList',
		this.stringify()
	);
};

TaskSaveManager.prototype.load = function() {
	var taskListString = localStorage.getItem('taskList');

	if(!taskListString){
		// initialize
		this.taskList.addEmptyTask();
		return;
	}
	this.parse(taskListString);
};
