function ManHour (value) {
	this.value = value;
}

ManHour.prototype.append = function($obj) {
	var manHour = $('<input type="time">');
	manHour.addClass('manHour');
	manHour.val(this.value);
	$obj.append(manHour);
};
