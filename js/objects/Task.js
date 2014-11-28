function Task (subject, manHour, content) {
    this.subject = subject;
    this.manHour = manHour;
    this.content = content;
}

Task.prototype.tojQueryObject = function() {
    var $object = $('<div>');
    $object.addClass('task');

    var deleteButton = $('<input type="button">');
    deleteButton.addClass('delete');
    deleteButton.val('タスク削除');

    $object.append(
        this.subject.tojQueryObject(),
        this.manHour.tojQueryObject(),
        this.content.tojQueryObject(),
        deleteButton
    );

    return $object;
};

Task.prototype.append = function($obj) {
    $obj.append(this.tojQueryObject());
};

Task.prototype.draw = function(out, manHourPrefix) {
    if(manHourPrefix == null){
        manHourPrefix = '';
    }
    this.subject.draw(out);
    out.put(manHourPrefix);
    this.manHour.draw(out);
    this.content.draw(out);
    out.put('\n');
};
