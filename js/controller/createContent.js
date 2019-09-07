APP.createContent = data=>{
	console.log('createContent');
	APP.content = $lib.createObj({div:[], id:'content'}, APP.root)[0];
	$lib.createObj(APP.view.info({icon:'timer', title:'Activity', subtitle:'Average', result:APP.totalTime, big:true}), APP.content);
	$lib.createObj(APP.view.info({icon:'directions_run', title:'Steps', subtitle:'Total', result:APP.totalSteps}), APP.content);
	$lib.createObj(APP.view.info({icon:'whatshot', title:'Calories', subtitle:'Total Burned', result:APP.totalSteps*APP.step.burn}), APP.content);
}