function Content (value) {
	this.value = value;
}

Content.prototype.append = function($obj) {
	var content = $('<textarea>');
	content.addClass('content');
	content.val(this.value);
	$obj.append(content);
};
