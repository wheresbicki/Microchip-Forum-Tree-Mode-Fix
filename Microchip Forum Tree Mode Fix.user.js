// ==UserScript==
// @name         Microchip Forum Tree Mode Fix
// @namespace    MCHP
// @version      0.1
// @description  Trys to change the Microchip Thread view to Flat Mode.
// @author       Joe Wierzbicki
// @include      http://www.microchip.com/forums/*
// @grant        GM_getValue
// @grant        GM_setValue
//
// ==/UserScript==


var alreadyRun = GM_getValue("alreadyRun", false);
if ( ! alreadyRun) {
    GM_setValue ("alreadyRun", true);
   // alert ("This part of the script will run exactly once per install.");
    var url = window.location.toString();
    window.location = url.replace('tree=true', 'tree=false');
}


//Stuff that didn't work


//window.addEventListener('load', function() {
    // your code here
//
//}, false);

//var links,thisLink;
//links = document.evaluate("//a[@href]",
//    document,
//    null,
//    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
//    null);
//for (var i=0;i<links.snapshotLength;i++) {
//    var thisLink = links.snapshotItem(i);

//    thisLink.href = thisLink.href.replace('tree=true', 'tree=false');
//}

//var doStuff = "true";

//(function (){
//    function whatever() {
 //       if(doStuff == "true"){
 //           doStuff = "false";
//            var url = window.location.toString();
 //           window.location = url.replace('tree=true', 'tree=false');
//        }
//    }
//})();