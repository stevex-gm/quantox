APP.view.content = function(data){
	console.log('view content');

	let text = {
				small:'Brilliant',
				big:'Forest Gump<br>is just a kid'
			}

	let content = {div:[], class:'content-white'};


	if(data.steps<1000){
		 text = {
				small:'No good',
				big:'Better do nothing!'
			}
	} else if(data.steps<2000){ text = {
				small:'Good',
				big:'Keep going!'
			}

	} else if(data.steps<3000){

			text = {
				small:'Very Good',
				big:'Keep going!'
			}

	} else if(data.steps<4000){

			text = {
				small:'Excellent',
				big:'Keep going!'
			}

	}

	content.div.push(	{div:[
						APP.view.circle({icon:'directions_run', result:data.steps}),
						{tag:'br'},
						{p:'', htm:text.small, style:'text-align:center; font-size:20px;'},
						{h1:'', htm:text.big, style:'text-align:center; letter-spacing: 2px;'},
						APP.view.footer(data)
						], style:'min-height:500px;'}
					);

	return content;
}