// ==UserScript==
// @name         Questionable Content Image Resizer
// @namespace    QCIR
// @version      1.0
// @description  hotfix to the weird resizing of questionable content's images
// @author       Thierno Rignoux
// @match        *.questionablecontent.net/view.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('#container .row .small-2').appendChild(document.querySelector('[href*="privacy.php"]'));
    document.querySelector('#container .row .small-2').appendChild(document.querySelector('[href*="dord.png"]'));
})();
