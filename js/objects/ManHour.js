function ManHour (value) {
    this.value = value;
}

ManHour.prototype.tojQueryObject = function() {
    var $object = $('<input type="time">');
    $object.addClass('manHour');
    $object.val(this.value);
    return $object;
};

ManHour.prototype.draw = function(out) {
    var timeString = this.value;
    if (timeString == "") {
        timeString = "00:00";
    }

    var splitedArray = timeString.split(':');
    var hour = parseInt(splitedArray[0], 10);
    var minutes = parseInt(splitedArray[1], 10);

    hour = hour + (minutes/60);
    out.put(hour.toFixed(1)+'h\n');
};

ManHour.prototype.update = function(value) {
    this.value = value;
};
