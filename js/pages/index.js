$(function() {
	var taskListDom = $("#taskList");
	var taskList = new TaskList(taskListDom);
	var reportDate = new ReportDate($("#reportDate"));

	reportDate.setToday();

	taskList.addEmptyTask();

	// イベント登録
	$('#tasks').on('click', '.add', function(){
		taskList.addEmptyTask();
	});

	$("#make").on('click', function(){
		var workScheduleSubject = new MailSubject($('#workSchedule').find('.mailSubject'));
		var workScheduleBody = new MailBody($('#workSchedule').find('.mailBody'));

		workScheduleSubject.clear();
		reportDate.draw(workScheduleSubject);
		workScheduleSubject.put(' 作業予定');

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
		reportDate.draw(workReportSubject);
		workReportSubject.put(' 作業報告');

		workReportBody.clear();
		workReportBody.put('お疲れ様です。\n');
		workReportBody.put('\n');
		workReportBody.put('本日の作業内容をご報告いたします。\n');
		workReportBody.put('\n');
		workReportBody.put('【作業報告】\n');
		taskList.draw(workReportBody, '実工数：');
		workReportBody.put('以上、よろしくお願いいたします。');
	});
});
