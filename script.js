// ==UserScript==
// @name         Questionable Content Image Resizer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  hotfix to the weird resizing of questionable content's images
// @author       Thierno Rignoux
// @match        *.questionablecontent.net/view.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('#container .row .small-2').remove();
    document.querySelector('#container .row .small-10').classList.add("small-12");
    document.querySelector('#container .row .small-10').classList.remove("small-10");
})();
