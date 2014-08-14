function ReportDate ($obj) {
	this.element = $obj;
}

ReportDate.prototype.setByDate = function(dateObject) {
	var dateString = dateObject.format('%Y-%m-%d');
	this.element.val(dateString);
};

ReportDate.prototype.draw = function(out) {
	var date = new MyDate(this.element.val());
	var dateString = date.format('%Y/%m/%d');
	out.put(dateString);
};

ReportDate.prototype.setToday = function() {
	this.setByDate(new MyDate());
};
