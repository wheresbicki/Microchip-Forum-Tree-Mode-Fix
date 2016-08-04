// ==UserScript==
// @name         Microchip Forum Tree Mode Fix
// @namespace    MCHP
// @version      0.1
// @description  Trys to change the Microchip Thread view to Flat Mode.
// @author       Joe Wierzbicki
// @include      http://www.microchip.com/forums/*
// @exclude      http://www.microchip.com/forums/tm.aspx?tree=true&m=*&mpage=*
// @grant        GM_getValue
// @grant        GM_setValue
// @noframes
//
// ==/UserScript==

if(window.location.href.indexOf("tree=true") > -1) {
    var url = window.location.toString();
    window.location = url.replace('tree=true', 'tree=false');
}