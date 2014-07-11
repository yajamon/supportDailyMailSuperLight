function ManHour (value) {
	this.element = $('<input type="time">');
	this.element.addClass('manHour');
	this.element.val(value);
}

ManHour.prototype.append = function($obj) {
	$obj.append(this.element);
};

ManHour.prototype.draw = function(out) {
	var timeString = this.element.val();
	if (timeString == "") {
		timeString = "00:00";
	}

	var splitedArray = timeString.split(':');
	var hour = parseInt(splitedArray[0], 10);
	var minutes = parseInt(splitedArray[1], 10);

	hour = hour + (minutes/60);
	out.put(hour+'h\n');
};