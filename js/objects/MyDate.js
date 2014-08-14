var MyDate = function (argument) {
	if (typeof argument === 'undefined') {
		this.date = new Date();
		return;
	}
	this.date = new Date(argument);
};
