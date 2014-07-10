
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

	$("#make").on('click', function(){
		var reportDateStr = $('#reportDate').val();
		reportDateStr = reportDateStr.replace(/-/g, '/');

		var workScheduleSubject = new MailSubject($('#workSchedule').find('.mailSubject'));
		var workScheduleBody = new MailBody($('#workSchedule').find('.mailBody'));

		workScheduleSubject.clear();
		workScheduleSubject.put(reportDateStr+' 作業予定');

		workScheduleBody.clear();
		workScheduleBody.put('お疲れ様です。\n');
		workScheduleBody.put('\n');
		workScheduleBody.put('本日の作業予定をご報告いたします。\n');
		workScheduleBody.put('\n');
		workScheduleBody.put('【作業予定】\n');
		taskList.draw(workScheduleBody, '予定工数：');
		workScheduleBody.put('以上、よろしくお願いいたします。');

		var workReportSubject = new MailSubject($('#workReport').find('.mailSubject'));
		var workReportBody = new MailBody($('#workReport').find('.mailBody'));

		workReportSubject.clear();
		workReportSubject.put(reportDateStr+' 作業予定');

		workReportBody.clear();
		workReportBody.put('お疲れ様です。\n');
		workReportBody.put('\n');
		workReportBody.put('本日の作業内容をご報告いたします。\n');
		workReportBody.put('\n');
		workReportBody.put('【作業報告】\n');
		taskList.draw(workReportBody, '予定工数：');
		workReportBody.put('以上、よろしくお願いいたします。');
	});
});
