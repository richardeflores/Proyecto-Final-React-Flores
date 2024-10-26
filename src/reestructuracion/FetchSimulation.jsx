const FetchSimulation = (dataBase, time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(dataBase);
			reject(new Error("Something is not working"));
		}, time);
	});
};

export default FetchSimulation;
