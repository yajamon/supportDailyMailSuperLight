function ManHour (value) {
	this.element = $('<input type="time">');
	this.element.addClass('manHour');
	this.element.val(value);
}

ManHour.prototype.append = function($obj) {
	$obj.append(manHour);
};
