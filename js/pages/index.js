$(function() {
	var taskListDom = $("#taskList");
	var taskList = new TaskList(taskListDom);
	var reportDate = new ReportDate($("#reportDate"));
	var workSchedule = new MailMaker($('#workSchedule'), new MailSubject('作業予定'), new MailBody());
	var workReport = new MailMaker($('#workReport'), new MailSubject('作業報告'), new MailBody());

	reportDate.setToday();

	taskList.addEmptyTask();

	// イベント登録
	$('#tasks').on('click', '.add', function(){
		taskList.addEmptyTask();
	});

	$("#make").on('click', function(){
		var workScheduleSubject = workSchedule.subject;
		var workScheduleBody = workSchedule.body;

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

		var workReportSubject = workReport.subject;
		var workReportBody = workReport.body;

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
