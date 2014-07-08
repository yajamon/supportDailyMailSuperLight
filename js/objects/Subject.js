function Subject (value) {
	this.element = $('<input type="text">');
	this.element.addClass('subject');
	this.element.val(value);
}

Subject.prototype.append = function($obj) {
	$obj.append(this.element);
};
