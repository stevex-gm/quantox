APP.createHeader = data=>{
	console.log('createHeader');
	APP.header = $lib.createObj({div:[], id:'header'}, APP.root)[0];
	$lib.createObj(APP.view.welcome(), APP.header);
	APP.createMenu();
}