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

Task.prototype.update = function(params) {
    var subject_value = params.subject;
    var manHour_value = params.manHour;
    var content_value = params.content;
    this.subject.update(subject_value);
    this.manHour.update(manHour_value);
    this.content.update(content_value);
};
