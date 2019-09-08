APP.start = function(){
	console.log('start');

	let data;

	return  async ()=>{

		if(!data) data = await APP.model.getFitnessData();

		$lib.rhtml(null, APP.root);

		APP.createHeader();
		APP.createMenu(data);
		APP.createContent(data);

	};

}();
