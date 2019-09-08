APP.model.onClickMenu = (obj)=>{

	let buttons = document.querySelectorAll('.menu-button');
	buttons.forEach(el=>el.style = '');
	obj.style = 'background:#fff; opacity:1; color:#00B6A3;';
	return;
	
}