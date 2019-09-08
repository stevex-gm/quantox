APP.createMenu = data=>{
	console.log('createMenu');
	APP.obj.menu = $lib.html({div:[], id:'menu'}, APP.root)[0];
	$lib.html(APP.view.menu(data.hash), APP.obj.menu);
	return;
}