
APP.view.menu = data=>{
	console.log('view menu');

	let menu = {div:[], class:'menu'};

	for (var key in data) {
		menu.div.push({ val:data[key], div:[
									{div:[], class:'menu-content'}, 
									{div:[{p:data[key].date, style:'padding-top:12px;'},
									{p:data[key].dayShort}
									], class:'menu-button-text'}]
					, class:'menu-button', onclick:`APP.onClickMenu(this)` });
	}

	menu.div.push({p:'', style:'clear:both;'});

	return menu;
}

