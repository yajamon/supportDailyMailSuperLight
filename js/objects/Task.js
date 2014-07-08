function Task (subject, manHour, content) {
	this.subject = subject;
	this.manHour = manHour;
	this.content = content;
}

Task.prototype.append = function($obj) {
	var task = $('<div>');
	task.addClass('task');

	this.subject.append(task);
	this.manHour.append(task);
	this.content.append(task);

	$obj.append(task);
};
