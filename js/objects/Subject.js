function Subject (value) {
	this.value = value;
}

Subject.prototype.append = function($obj) {
	var subject = $('<input type="text">');
	subject.addClass('subject');
	subject.val(this.value);
	$obj.append(subject);
};
