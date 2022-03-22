// ==UserScript==
// @name         1920.in Mail Spammer
// @namespace    https://github.com/kixxu/1920.in-mail-button-spammer
// @version      1.3.3.7
// @description  Userscript for spamming button on mail.1920.in
// @author       kixxu#5045
// @match        mail.1920.in
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     var clicker = function () {
		var e = document.querySelectorAll('button')[Math.random() * 100 >= 50 ? 0 : 1];
		if (e) {
			console.log("Clicked", e);
			e.click();
		}
	};
	window.setInterval(clicker, 300);
})();
