function ReportDate ($obj) {
	this.element = $obj;
}

ReportDate.prototype.setByDate = function(dateObject) {
	var formatString = '%Y-%m-%d';
	var dateString = dateObject.format(formatString);
	this.element.val(dateString);
};

ReportDate.prototype.draw = function(out) {
	var dateString = this.element.val();
	dateString = dateString.replace(/-/g, '/');
	out.put(dateString);
};

ReportDate.prototype.setToday = function() {
	this.setByDate(new MyDate());
};
