function TaskSaveManager (taskList) {
	this.taskList = taskList;
}

TaskSaveManager.prototype.stringify = function() {
	var tasks = this.taskList.tasks;
	var result = [];

	for (var index = 0; index < tasks.length; index++) {
		task = tasks[index];
		result[index] = {
			subject : task.subject.value,
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

TaskSaveManager.prototype.updateTask = function(task) {
	var index = task.find('.index').val();

	this.taskList.update(index, {
		subject: task.find('.subject').val(),
		manHour: task.find('.manHour').val(),
		content: task.find('.content').val(),
	});
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
