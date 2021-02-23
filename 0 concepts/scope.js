const scope = (isVar = false) => {
	if (isVar) {
		let ok = true;
	}
	console.log(ok); // ok not defined
};

console.log(scope(true));
