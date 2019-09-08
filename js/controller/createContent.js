APP.createContent = data=>{
	console.log('createContent');
	APP.obj.content = $lib.html({div:[], id:'content'}, APP.root)[0];
	$lib.html(APP.view.info({icon:'timer', title:'Activity', subtitle:'Average', result:data.totalTime, big:true}), APP.obj.content);
	$lib.html(APP.view.info({icon:'directions_run', title:'Steps', subtitle:'Total', result:data.totalSteps}), APP.obj.content);
	$lib.html(APP.view.info({icon:'whatshot', title:'Calories', subtitle:'Total Burned', result:data.totalSteps*APP.step.burn}), APP.obj.content);
	return;
}