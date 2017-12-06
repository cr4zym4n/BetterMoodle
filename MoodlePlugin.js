// ==UserScript==
// @name         Better Moodle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Time saving plugin for Moodle
// @author       Dan-Adrian Necula
// @include      http://moodle.dc.ac.tuiasi.ro/
// @match        http://moodle.dc.ac.tuiasi.ro/
// @require      http://code.jquery.com/jquery-3.2.1.min.js
// @run-at       document-body
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @grant        window.close
// @grant        window.focus
// ==/UserScript==

(function() {
    'use strict';
    console.log('Hello World');
    //$('head').append('<scriptsrc="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="crossorigin="anonymous"></script>');
    console.warn('Dayumn');
    //debugger;
    console.error('wat m8?');
    //debugger;
    $(".container-fluid").append("<button align='flex-end'>Settings</button>");
    
    
})();