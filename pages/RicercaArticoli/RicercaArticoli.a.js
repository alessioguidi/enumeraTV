dojo.declare("RicercaArticoli", wm.Page, {
start: function() {
this.barcode.focus();
},
"preferredDevice": "desktop",
serviceGiacenzeResult: function(inSender, inDeprecated) {
this.barcode.setDataValue("");
},
barcodeChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
if (inDataValue != null) {
this.serviceArticolo.update();
}
},
designableDialog1Show: function(inSender) {
$('#keyboard').val("");
$('#keyboard').keyboard({
// *** choose layout ***
layout       : 'qwerty',
customLayout : { 'default': ['{cancel}'] },
position     : {
of : null, // optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
my : 'center top',
at : 'center top',
at2: 'center bottom' // used when "usePreview" is false (centers keyboard at bottom of the input/textarea)
},
// preview added above keyboard if true, original input/textarea used if false
usePreview   : true,
// if true, the keyboard will always be visible
alwaysOpen   : false,
// give the preview initial focus when the keyboard becomes visible
initialFocus : true,
// if true, keyboard will remain open even if the input loses focus.
stayOpen     : false,
// *** change keyboard language & look ***
display : {
'a'      : '\u2714:Conferma (Shift-Enter)', // check mark - same action as accept
'accept' : 'Conferma:Conferma (Shift-Enter)',
'alt'    : 'AltGr:Alternate Graphemes',
'b'      : '\u2190:Backspace',    // Left arrow (same as &larr;)
'bksp'   : 'Bksp:Backspace',
'c'      : '\u2716:Cancel (Esc)', // big X, close - same action as cancel
'cancel' : 'Cancel:Cancel (Esc)',
'clear'  : 'C:Clear',             // clear num pad
'combo'  : '\u00f6:Toggle Combo Keys',
'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
'e'      : '\u21b5:Enter',        // down, then left arrow - enter symbol
'enter'  : 'Enter:Enter',
'left'   : '\u2190',              // left arrow (move caret)
'lock'   : '\u21ea Lock:Caps Lock', // caps lock
'next'   : 'Next',
'prev'   : 'Prev',
'right'  : '\u2192',              // right arrow (move caret)
's'      : '\u21e7:Shift',        // thick hollow up arrow
'shift'  : 'Shift:Shift',
'sign'   : '\u00b1:Change Sign',  // +/- sign for num pad
'space'  : '&nbsp;:Space',
't'      : '\u21e5:Tab',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
'tab'    : '\u21e5 Tab:Tab'       // \u21b9 is the true tab symbol (left & right arrows)
},
// Message added to the key title while hovering, if the mousewheel plugin exists
wheelMessage : 'Use mousewheel to see other keys',
css : {
input          : 'ui-widget-content ui-corner-all', // input & preview
container      : 'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix', // keyboard container
buttonDefault  : 'ui-state-default ui-corner-all', // default state
buttonHover    : 'ui-state-hover',  // hovered button
buttonAction   : 'ui-state-active', // Action keys (e.g. Accept, Cancel, Tab, etc); replaces "actionClass"
buttonDisabled : 'ui-state-disabled' // used when disabling the decimal button {dec}
},
// *** Useability ***
// Auto-accept content when clicking outside the keyboard (popup will close)
autoAccept   : false,
// Prevents direct input in the preview window when true
lockInput    : false,
// Prevent keys not in the displayed keyboard from being typed in
restrictInput: false,
// Check input against validate function, if valid the accept button is clickable;
// if invalid, the accept button is disabled.
acceptValid  : true,
// Use tab to navigate between input fields
tabNavigation: false,
// press enter (shift-enter in textarea) to go to the next input field
enterNavigation : true,
// mod key options: 'ctrlKey', 'shiftKey', 'altKey', 'metaKey' (MAC only)
enterMod : 'altKey', // alt-enter to go to previous; shift-alt-enter to accept & go to previous
// if true, the next button will stop on the last keyboard input/textarea; prev button stops at first
// if false, the next button will wrap to target the first input/textarea; prev will go to the last
stopAtEnd : true,
// Set this to append the keyboard immediately after the input/textarea it is attached to.
// This option works best when the input container doesn't have a set width and when the
// "tabNavigation" option is true
appendLocally: false,
// Append the keyboard to a desired element. This can be a jQuery selector string or object
appendTo: 'body',
// If false, the shift key will remain active until the next key is (mouse) clicked on;
// if true it will stay active until pressed again
stickyShift  : true,
// Prevent pasting content into the area
preventPaste : false,
// Set the max number of characters allowed in the input, setting it to false disables this option
maxLength    : false,
// Mouse repeat delay - when clicking/touching a virtual keyboard key, after this delay the key
// will start repeating
repeatDelay  : 500,
// Mouse repeat rate - after the repeatDelay, this is the rate (characters per second) at which the
// key is repeated. Added to simulate holding down a real keyboard key and having it repeat. I haven't
// calculated the upper limit of this rate, but it is limited to how fast the javascript can process
// the keys. And for me, in Firefox, it's around 20.
repeatRate   : 20,
// resets the keyboard to the default keyset when visible
resetDefault : false,
// Event (namespaced) on the input to reveal the keyboard. To disable it, just set it to ''.
openOn       : 'focus',
// When the character is added to the input
keyBinding   : 'mousedown',
// combos (emulate dead keys : http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
// if user inputs `a the script converts it to à, ^o becomes ô, etc.
useCombos    : true,
// *** Methods ***
// Callbacks - add code inside any of these callback functions as desired
initialized : function(e, keyboard, el) {},
visible     : function(e, keyboard, el) {},
change      : function(e, keyboard, el) {},
beforeClose : function(e, keyboard, el, accepted) {},
accepted    : function(e, keyboard, el) {
//alert('The content "' + el.value + '" was accepted!');
// this.barcode.setDataValue(el.value);
main.pageContainer1.ricercaArticoli.barcode.setDataValue(el.value);
main.pageContainer1.ricercaArticoli.designableDialog1.hide();
},
canceled    : function(e, keyboard, el) {},
hidden      : function(e, keyboard, el) {},
switchInput : null, // called instead of base.switchInput
// this callback is called just before the "beforeClose" to check the value
// if the value is valid, return true and the keyboard will continue as it should
// (close if not always open, etc)
// if the value is not value, return false and the clear the keyboard value
// ( like this "keyboard.$preview.val('');" ), if desired
// The validate function is called after each input, the "isClosing" value will be false;
// when the accept button is clicked, "isClosing" is true
validate    : function(keyboard, value, isClosing) { return true; }
});
$('#keyboard').focus();
},
_end: 0
});

RicercaArticoli.widgets = {
serviceArticolo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"articolo","service":"xhrService"}, {}, {
input: ["wm.ServiceInput", {"type":"articoloInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"barcode.dataValue","targetProperty":"barcode"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}]
}]
}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panelArticolo","targetProperty":"loadingDialog"}, {}]
}]
}],
serviceGiacenze: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"giacenze","service":"xhrService"}, {"onResult":"serviceGiacenzeResult"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"panelGiacenze","targetProperty":"loadingDialog"}, {}]
}],
input: ["wm.ServiceInput", {"type":"giacenzeInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceArticolo.CODART","targetProperty":"codart"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}]
}]
}]
}],
designableDialog1: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget"}, {"onShow":"designableDialog1Show"}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
html1: ["wm.Html", {"html":"<textarea id=\"keyboard\" placeholder=\"Enter Text...\"></textarea>","minDesktopHeight":15}, {}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"black","height":"15px"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
fancyPanel1: ["wm.FancyPanel", {"title":"Ricerca articolo"}, {}, {
spacer4: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
panel1: ["wm.Panel", {"desktopHeight":"37px","enableTouchHeight":true,"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"80px","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
barcode: ["wm.Text", {"caption":"Codice a barre","captionSize":"130px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","styles":{},"width":"500px"}, {"onchange":"barcodeChange"}],
buttonTastiera: ["wm.Button", {"_classes":{"domNode":["buttonDefault"]},"border":"0","desktopHeight":"40px","height":"40px","margin":"4","showing":false,"styles":{},"width":"80px"}, {"onclick":"designableDialog1.show"}]
}],
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
panelArticolo: ["wm.FancyPanel", {"title":"Dati articolo"}, {}, {
dataForm1: ["wm.DataForm", {"desktopHeight":"292px","fitToContentHeight":true,"height":"162px","isCompositeKey":false,"mobileHeight":"162px","type":"articoloResponse"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceArticolo","targetProperty":"dataSet"}, {}]
}],
CODARTEditor1: ["wm.Text", {"caption":"Codice","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"CODART","height":"26px","required":undefined,"styles":{},"width":"100%"}, {}],
DESCRIZIONEEditor1: ["wm.Text", {"caption":"Descrizione","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"DESCRIZIONE","height":"26px","required":undefined,"width":"100%"}, {}],
BARCODEEditor1: ["wm.Text", {"caption":"Codice a barre","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"BARCODE","height":"26px","required":undefined,"width":"100%"}, {}],
MARCAEditor1: ["wm.Text", {"caption":"Marca","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"MARCA","height":"26px","required":undefined,"width":"100%"}, {}],
PREZZOEditor1: ["wm.Text", {"caption":"Prezzo","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"PREZZO","height":"26px","required":undefined,"tooltipDisplayTime":undefined,"width":"100%"}, {}],
GIACENZA_UM1Editor1: ["wm.Text", {"caption":"Qta in negozio","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"GIACENZA_UM1","height":"26px","required":undefined,"width":"100%"}, {}]
}]
}],
panelGiacenze: ["wm.FancyPanel", {"title":"Disponibile in questi punti vendita"}, {}, {
dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"ROWID","title":"ROWID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGEID","title":"PAGEID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGECOUNT","title":"PAGECOUNT","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"O2ASPID","title":"O2ASPID","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"COD_DEPOSITO","title":"COD_DEPOSITO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"COD_ART","title":"COD_ART","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ADATA","title":"ADATA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"DESCR_NEGOZIO","title":"Punto vendita","width":"396px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"ID_NEGOZIO","title":"ID_NEGOZIO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"LOCALITA","title":"LOCALITA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"PROVINCIA","title":"Prov.","width":"38px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"GIACENZA_UM1","title":"Qtà","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Punto vendita: \" + ${DESCR_NEGOZIO} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Prov.: \" + ${PROVINCIA}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Qtà: \" + ${GIACENZA_UM1}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"giacenzeResponse","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceGiacenze","targetProperty":"dataSet"}, {}]
}]
}]
}]
}]
}]
}]
};

RicercaArticoli.prototype._cssText = '';
RicercaArticoli.prototype._htmlText = '';