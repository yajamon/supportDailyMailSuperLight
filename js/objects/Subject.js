function Subject (value) {
    this.value = value;
}

Subject.prototype.tojQueryObject = function() {
    var $object = $('<input type="text">');
    $object.addClass('subject');
    $object.val(this.value);
    return $object;
};

Subject.prototype.append = function($obj) {
    $obj.append(this.tojQueryObject());
};

Subject.prototype.draw = function(out) {
    out.put(this.value+"\n");
};
