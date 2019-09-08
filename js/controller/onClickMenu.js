APP.onClickMenu = (obj)=>{
	console.log('view menu click render');

	let data = obj.val;
	APP.model.onClickMenu(obj);
	
	$lib.rhtml(APP.view.header({day:data.day, fullDate:data.month+' '+data.date+', '+data.year+'.'}), APP.obj.header)
	$lib.rhtml(APP.view.content(data), APP.obj.content);
	return;

}