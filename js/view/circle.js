
	APP.view.circle = function(data){
		console.log('view circle');
		let circle = {div:[{...APP.view.icon(data), class:'icon-circle'}], class:'circle'};
		circle.div.push({tag:'br'},{p:'Steps', style:'font-size:20px;'},{h1:data.result.toLocaleString()});
		return  circle;
	}