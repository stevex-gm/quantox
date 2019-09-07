APP.view.info = data=>{
	console.log('view info');
		return {div:[{div:[], class:'info', style:(data.big?'min-height:184px':'height:92px')},{div:[
			{...APP.view.icon(data), style:'float:left'},
			{div:[
				data.big?{tag:'div'}:{h1: data.result.toLocaleString(), class:'info-small-value'},
				{p: data.title, class:'info-title'},
				{p: data.subtitle, class:'info-subtitle'},
				data.big?{h1: data.result.toLocaleString(), class:'info-big-value'}:{div:''},
			], class:'info-text'}
			], class:'info-content'}]};
}