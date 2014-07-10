function MailSubject (title) {
	this.title = title;
	this.element = $('<input type="text">');
	this.element.addClass('mailSubject');
}

MailSubject.prototype.clear = function() {
	this.element.val("");
};

MailSubject.prototype.put = function(putString) {
	var newString = this.element.val() + putString;
	this.element.val(newString);
};

MailSubject.prototype.append = function($obj) {
	$obj.append(this.element);
};

MailSubject.prototype.make = function(reportDate) {
	this.clear();
	reportDate.draw(this);
	this.put(' '+ this.title);
};