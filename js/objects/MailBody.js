function MailBody () {
	this.element = $('<textarea>');
	this.element.addClass('mailBody');
}

MailBody.prototype.clear = function() {
	this.element.val("");
};

MailBody.prototype.put = function(putString) {
	var newString = this.element.val() + putString;
	this.element.val(newString);
};

MailBody.prototype.append = function($obj) {
	$obj.append(this.element);
};
