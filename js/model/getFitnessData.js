APP.model.getFitnessData = async()=>{

	let stepsInfo = await $lib.api({api:APP.api});
	let totalSteps=0;
	let hash = {};

	stepsInfo.map(o=>{
		let monthYear = moment(o.timestamp).format('MMMDDYY');
		if(hash[monthYear]){
			hash[monthYear].steps = hash[monthYear].steps + o.steps;
		} else {
			hash[monthYear] = o;
			hash[monthYear].day = moment(o.timestamp).format('dddd');
			hash[monthYear].dayShort = moment(o.timestamp).format('ddd').toUpperCase();
			hash[monthYear].date = moment(o.timestamp).format('DD');
			hash[monthYear].month = moment(o.timestamp).format('MMMM');
			hash[monthYear].year = moment(o.timestamp).format('YYYY');
		}
		totalSteps += o.steps;
	});

	let totalTime = moment.utc(totalSteps*APP.step.time*1000).format('H[h] mm[min]');

	return {hash, totalSteps, totalTime};

};