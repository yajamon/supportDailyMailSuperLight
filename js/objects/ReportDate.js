function ReportDate ($obj) {
	this.element = $obj;
}

ReportDate.prototype.setByDate = function(dateObject) {
	var year = dateObject.getFullYear();
	var month = dateObject.getMonth() + 1;
	var date = dateObject.getDate();

	if (month < 10) {
		month = '0' + month;
	}
	if (date < 10) {
		date = '0' + date;
	}

	var dateString = year+'-'+month+'-'+date;
	this.element.val(dateString);
};

ReportDate.prototype.draw = function(out) {
	var dateString = this.element.val();
	dateString = dateString.replace(/-/g, '/');
	out.put(dateString);
};

ReportDate.prototype.setToday = function() {
	this.setByDate(new Date());
};
