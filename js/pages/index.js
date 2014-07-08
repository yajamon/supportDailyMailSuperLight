

$(function() {
	var taskListDom = $("#taskList");
	var taskList = new TaskList(taskListDom);

	taskList.addEmptyTask();

	// イベント登録
	$('#tasks').on('click', '.add', function(){
		taskList.addEmptyTask();
	});
});
