function strict() {
	'use strict';
	x = 1;
	console.log(x);
}

const free = () => {
	x = 1; // global var i
	console.log(x);
};

strict();
