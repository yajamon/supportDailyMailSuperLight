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

TaskList.prototype.remove = function(index) {
	var deleteLength = 1;
	this.tasks.splice(index, deleteLength);
};

TaskList.prototype.appendTasks = function($obj) {
	var length = this.tasks.length;
	for(var index = 0; index < length; ++index){
		var hidden_index = $('<input type="hidden">');
		hidden_index.addClass('index');
		hidden_index.val(index);

		var up_button = $('<input type="button">');
		up_button.addClass('up');
		up_button.val('上へ');

		var down_button = $('<input type="button">');
		down_button.addClass('down');
		down_button.val('下へ');

		var task = this.tasks[index].tojQueryObject();
		task.append(hidden_index);
		task.append(up_button);
		task.append(down_button);

		$obj.append( task );
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

TaskList.prototype.update = function(index, params) {
	this.tasks[index].update(params);
};

TaskList.prototype.replace = function(from, to) {
	if (this.tasks[from] == null) {
		throw new Error('from index:'+from+' is no value');
	}
	if (this.tasks[to] == null) {
		throw new Error('to index:'+to+' is no value');
	}

	var temporary = this.tasks[to];
	this.tasks[to] = this.tasks[from];
	this.tasks[from] = temporary;
};
