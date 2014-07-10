
var today = new Date();
var todayString = today.getFullYear()+'-'+zeroPadding(today.getMonth()+1, 2)+'-'+zeroPadding(today.getDate());

function zeroPadding (string, length) {
	var zeros = '';
	for (var count = 0; count < length; count++) {
		zeros += '0';
	}
	var result = zeros + string;
	return result.substr(-length);
}

$(function() {
	var taskListDom = $("#taskList");
	var taskList = new TaskList(taskListDom);

	taskList.addEmptyTask();


	$('#reportDate').val(todayString);

	// イベント登録
	$('#tasks').on('click', '.add', function(){
		taskList.addEmptyTask();
	});
});
