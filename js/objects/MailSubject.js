function MailSubject ($obj) {
	this.element = $obj;
}

MailBody.prototype.clear = function() {
	this.element.val("");
};

MailBody.prototype.put = function(putString) {
	var newString = this.element.val() + putString;
	this.element.val(newString);
};