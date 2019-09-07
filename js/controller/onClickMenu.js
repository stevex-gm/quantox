APP.onClickMenu = (obj)=>{
	console.log('view menu click render');

	let data = obj.val;

	let buttons = document.querySelectorAll('.menu-button');
	buttons.forEach(el=>el.style = '');
	obj.style = 'background:#fff; opacity:1; color:#00B6A3;';
	
	$lib.replaceObj(APP.view.header({day:data.day, fullDate:data.month+' '+data.date+', '+data.year+'.'}), APP.header)
	$lib.replaceObj(APP.view.content(data), APP.content)
}