APP.view.footer = function(data){
	console.log('view footer');
	return {
		div:[
			{div:[{p:'km'},{h1:(data.steps*APP.step.distance/1000).toFixed(1)}], class:'footer-data'},
			{div:[], class:'vertical-line'},
			{div:[{p:'cal'},{h1:(data.steps*APP.step.burn).toFixed(0)}], class:'footer-data'},
			{div:[], class:'vertical-line'},
			{div:[{p:'hours'},{h1:(data.steps*APP.step.time/60/60).toFixed(1)}], class:'footer-data'},
			{div:[], style:'clear:both'}
		], class:'footer'
	}
}