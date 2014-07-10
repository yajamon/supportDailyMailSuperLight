function MailSubject ($obj) {
	this.element = $obj;
}

MailSubject.prototype.clear = function() {
	this.element.val("");
};

MailSubject.prototype.put = function(putString) {
	var newString = this.element.val() + putString;
	this.element.val(newString);
};