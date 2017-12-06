// ==UserScript==
// @name        _Add stuff to a web page using jQuery UI.
// @include     https://stackoverflow.com/questions/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @require     http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js
// @grant       GM_addStyle
// ==/UserScript==

/*--- For this to work well, we must also add-in the jQuery-UI CSS.
    We add the CSS this way so that the embedded, relatively linked images load correctly.
    (Use //ajax... so that https or http is selected as appropriate to avoid "mixed content".)
*/
var TheTheme = 'dark-hive';
$("head").append (
    '<link '
  + 'href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/themes/'+TheTheme+'/jquery-ui.min.css" '
  + 'rel="stylesheet" type="text/css">'
);

//--- Add our custom dialog using jQuery.
$("body").append ('<div id="gmOverlayDialog"><h1>Sample Dialog added using jQuery-UI</h1></div>');

//--- Activate the dialog.
$("#gmOverlayDialog").dialog ( {
    modal:      false,
    title:      "Draggable, sizeable dialog",
    position:   {
           my: "top",
           at: "top",
           of: document,
           collision: "none"
    },
    width:      500,
    minWidth:   400,
    minHeight:  200,
    zIndex:     9999
} )
.dialog ("widget").draggable ();

