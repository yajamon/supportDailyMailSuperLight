var taskList = new TaskList();
taskList.addEmptyTask();

$(function() {
	var taskListDom = $("#taskList");
	taskList.appendTasks(taskListDom);

	// イベント登録
	$('#tasks').on('click', '.add', function(){
		taskList.addEmptyTask();
		taskListDom.empty();
		taskList.appendTasks(taskListDom);
	});
});
