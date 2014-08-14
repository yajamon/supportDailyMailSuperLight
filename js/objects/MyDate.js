var MyDate = function (argument) {
	if (typeof argument === 'undefined') {
		this.date = new Date();
		return;
	}
	this.date = new Date(argument);
};

MyDate.prototype.format = function(formatString) {
	formatString = this.replaceYear(formatString);

	return formatString;
};

MyDate.prototype.replaceYear = function(formatString) {
	var year = this.date.getFullYear();
	return formatString.replace(/%Y/gi, year);
};
