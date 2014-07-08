function TaskList (){
	this.tasks = [];
}

TaskList.prototype.addEmptyTask = function() {
	var subject = new Subject('');
	var manHour = new ManHour('');
	var content = new Content('');
	var task = new Task(subject, manHour, content);
	this.tasks.push(task);
};

TaskList.prototype.appendTasks = function($obj) {
	var length = this.tasks.length;
	for(var index = 0; index < length; ++index){
		this.tasks[index].append($obj);
	}
};