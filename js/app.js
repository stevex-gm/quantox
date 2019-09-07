APP.start = async ()=>{
	console.log('start');

	if(!APP.hash) await APP.model.getFitnessData();
	$lib.replaceObj(null, APP.root);
	APP.createHeader();

}
