function ManHour (value) {
	this.element = $('<input type="time">');
	this.element.addClass('manHour');
	this.element.val(value);
}

ManHour.prototype.append = function($obj) {
	$obj.append(this.element);
};

ManHour.prototype.draw = function(out) {
	out.put(this.element.val()+"\n");
};