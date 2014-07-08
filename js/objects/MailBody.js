function MailBody ($obj) {
	this.element = $obj;
}

MailBody.prototype.clear = function() {
	this.element.val("");
};

MailBody.prototype.put = function(putString) {
	var newString = this.element.val() + putString + "\n";
	this.element.val(newString);
};