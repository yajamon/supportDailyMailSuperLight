function MailMaker ($obj, subject, body) {
	this.element = $obj;
	this.subject = subject;
	this.body = body;

	this.subject.append(this.element);
	this.body.append(this.element);
}

MailMaker.prototype.make = function(reportDate) {
	this.subject.make();
};
