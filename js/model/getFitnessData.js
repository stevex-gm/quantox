APP.model.getFitnessData = async()=>{

	let stepsInfo = await $lib.api({api:APP.api});
	APP.totalSteps=0;
	APP.hash = {};

	stepsInfo.map(o=>{
		let monthYear = moment(o.timestamp).format('MMMDDYY');
		if(APP.hash[monthYear]){
			APP.hash[monthYear].steps = APP.hash[monthYear].steps + o.steps;
		} else {
			APP.hash[monthYear] = o;
			APP.hash[monthYear].day = moment(o.timestamp).format('dddd');
			APP.hash[monthYear].dayShort = moment(o.timestamp).format('ddd').toUpperCase();
			APP.hash[monthYear].date = moment(o.timestamp).format('DD');
			APP.hash[monthYear].month = moment(o.timestamp).format('MMMM');
			APP.hash[monthYear].year = moment(o.timestamp).format('YYYY');
		}
		APP.totalSteps += o.steps;
	});

	APP.totalTime = moment.utc(APP.totalSteps*APP.step.time*1000).format('H[h] mm[min]');

	return;
	
};