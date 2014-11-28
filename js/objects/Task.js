function Task (subject, manHour, content) {
    this.subject = subject;
    this.manHour = manHour;
    this.content = content;
}

Task.prototype.append = function($obj) {
    var task = $('<div>');
    task.addClass('task');

    this.subject.append(task);
    this.manHour.append(task);
    this.content.append(task);

    var deleteButton = $('<input type="button">');
    deleteButton.addClass('delete');
    deleteButton.val('タスク削除');
    task.append(deleteButton);

    $obj.append(task);
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
