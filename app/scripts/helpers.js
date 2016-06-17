(function(document) {
	'use strict';

	var app = document.querySelector('#app');

	function Helpers() {}

	Helpers.prototype.fixaddress = function(address) {
		function strStartsWith(str, prefix) {
			return str.indexOf(prefix) === 0;
		}
		if (!strStartsWith(address, '0x')) {
			return ('0x' + address);
		}
		return address;
	};

	Helpers.prototype.is = function(a, b) {
		if (b === undefined) {
			b = true;
		}
		return a === b;
	};

	app.helpers = new Helpers();

})(document);