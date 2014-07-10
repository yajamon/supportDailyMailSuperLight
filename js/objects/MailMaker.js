function MailMaker ($obj) {
	this.element = $obj;
	this.subject = new MailSubject();
	this.body = new MailBody();

	this.subject.append(this.element);
	this.body.append(this.element);
}
