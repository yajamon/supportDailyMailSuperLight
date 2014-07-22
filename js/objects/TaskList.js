function TaskList ($obj){
	this.tasks = [];
	this.element = $obj;
}

TaskList.prototype.add = function(task) {
	this.tasks.push(task);
};

TaskList.prototype.addEmptyTask = function() {
	var subject = new Subject('');
	var manHour = new ManHour('');
	var content = new Content('');
	var task = new Task(subject, manHour, content);
	this.tasks.push(task);

	this.refresh();
};

TaskList.prototype.appendTasks = function($obj) {
	var length = this.tasks.length;
	for(var index = 0; index < length; ++index){
		this.tasks[index].append($obj);
	}
};

TaskList.prototype.refresh = function() {
	this.element.empty();
	this.appendTasks(this.element);
};

TaskList.prototype.draw = function(out, manHourPrefix) {
	var length = this.tasks.length;
	for (var index = 0; index < length; index++) {
		this.tasks[index].draw(out, manHourPrefix);
	}
};