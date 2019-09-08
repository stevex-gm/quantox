APP.onClickMenu = (obj)=>{
	console.log('view menu click render');

	let data = obj.val;

	let buttons = document.querySelectorAll('.menu-button');
	buttons.forEach(el=>el.style = '');
	obj.style = 'background:#fff; opacity:1; color:#00B6A3;';
	
	$lib.rhtml(APP.view.header({day:data.day, fullDate:data.month+' '+data.date+', '+data.year+'.'}), APP.obj.header)
	$lib.rhtml(APP.view.content(data), APP.obj.content);
	return;
}