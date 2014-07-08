function Content (value) {
	this.element = $('<textarea>');
	this.element.addClass('content');
	this.element.val(value);
}

Content.prototype.append = function($obj) {
	$obj.append(this.element);
};
