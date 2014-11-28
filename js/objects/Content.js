function Content (value) {
    this.value = value;
}

Content.prototype.tojQueryObject = function() {
    var $object = $('<textarea>');
    $object.addClass('content');
    $object.val(this.value);
    return $object;
};

Content.prototype.append = function($obj) {
    $obj.append(this.tojQueryObject());
};

Content.prototype.draw = function(out) {
    out.put(this.value+"\n");
};
