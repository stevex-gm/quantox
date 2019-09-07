APP.view.header = (data={})=>{	
	console.log('view header');
	return {div:[{div:[], class:'header'},{div:[
				{i:'keyboard_arrow_left', class:'material-icons header-arrow', style:'position:relative;', onclick:APP.start},
				{div:[
					{h1:data.day||'Unknown Day', class:'header-day'},
					{p:data.fullDate||'Unknown Date', class:'header-full-date'}
				], class:'header-text'}]
		}], class:'header-bg-transparent'};

}