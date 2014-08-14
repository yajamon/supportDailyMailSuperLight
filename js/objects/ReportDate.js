function ReportDate ($obj) {
	this.element = $obj;
}

ReportDate.prototype.setByDate = function(dateObject) {
	var dateString = dateObject.format('%Y-%m-%d');
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
