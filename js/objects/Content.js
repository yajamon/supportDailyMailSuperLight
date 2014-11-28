function Content (value) {
    this.element = $('<textarea>');
    this.element.addClass('content');
    this.element.val(value);
}

Content.prototype.append = function($obj) {
    $obj.append(this.element);
};

Content.prototype.draw = function(out) {
    out.put(this.element.val()+"\n");
};
