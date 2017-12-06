// ==UserScript==
// @name         Better Moodle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Time saving plugin for Moodle
// @author       Dan-Adrian Necula
// @include      http://moodle.dc.ac.tuiasi.ro/
// @match        http://moodle.dc.ac.tuiasi.ro/
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @require      http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js
// @require      css           https://raw.githubusercontent.com/cr4zym4n/BetterMoodle/master/assets/styles.css
// @run-at       document-body
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        unsafeWindow
// @grant        window.close
// @grant        window.focus
// @grant        GM_addStyle
// ==/UserScript==

// Introduc tema in header pentru Jquery UI
var TheTheme = 'dark-hive';
$("head").append(
    '<link '
    + 'href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/themes/' + TheTheme + '/jquery-ui.min.css" '
    + 'rel="stylesheet" type="text/css">'
);
(function () {
    'use strict';
    console.log('Hello World');
    //$('head').append('<scriptsrc="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="crossorigin="anonymous"></script>');
    console.warn('Dayumn');
    //debugger;
    console.error('wat m8?');
    //debugger;
    $(".container-fluid").append('<button id="MainSettings" align="flex-end">Settings</button>\
    ');
    //<div id="gmOverlayDialog"><h1>Sample Dialog added using jQuery-UI</h1></div>\
    //--- Create Dialog

    function createDialog(title, text, options) {
        return $("<div class='dialog' title='" + title + "'><p>" + text + "</p>\
        <button> Test </button>\
        </div>")
            .dialog(options);
    }
    //--- Activate the dialog.
    $("#MainSettings").on("click", function () {
        var Pop = createDialog('New Dialog Adi', 'STUFF')
        //$("#gmOverlayDialog").dialog({
        Pop.dialog({
            modal: false,
            title: "Draggable, sizeable dialog",
            position: {
                my: "center",
                at: "center",
                of: document,
                collision: "fit"
            },
            width: 500,
            minWidth: 400,
            minHeight: 200,
            zIndex: 9999
        })
            .dialog("widget").draggable(); // TODO moveToTop
    });

})();