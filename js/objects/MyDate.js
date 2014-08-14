var MyDate = function (argument) {
	if (typeof argument === 'undefined') {
		this.date = new Date();
		return;
	}
	this.date = new Date(argument);
};

MyDate.prototype.format = function(formatString) {
	formatString = this.replaceYear(formatString);
	formatString = this.replaceMonth(formatString);
	formatString = this.replaceDate(formatString);

	return formatString;
};

MyDate.prototype.replaceYear = function(formatString) {
	var year = this.date.getFullYear();
	return formatString.replace(/%Y/gi, year);
};

MyDate.prototype.replaceMonth = function(formatString) {
	var month = this.date.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}
	return formatString.replace(/%m/gi, month);
};

MyDate.prototype.replaceDate = function(formatString) {
	var date = this.date.getDate();
	if (date < 10) {
		date = '0' + date;
	}
	return formatString.replace(/%d/gi, date);
};
