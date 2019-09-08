APP.createHeader = data=>{
	console.log('createHeader');
	APP.obj.header = $lib.html({div:[], id:'header'}, APP.root)[0];
	$lib.html(APP.view.welcome(), APP.obj.header);
	return;
}