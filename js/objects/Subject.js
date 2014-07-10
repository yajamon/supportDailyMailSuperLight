function Subject (value) {
	this.element = $('<input type="text">');
	this.element.addClass('subject');
	this.element.val(value);
}

Subject.prototype.append = function($obj) {
	$obj.append(this.element);
};

Subject.prototype.draw = function(out) {
	out.put(this.element.val()+"\n");
};