dojo.declare("Main", wm.Page, {
"preferredDevice": "desktop",
start: function() {
document.addEventListener("deviceready", this.handleDeviceReady, false);
/*
// ATTIVO IL TIMOUT IN CASO DI INATTIVITA RIMANDO ALLA HOME
var timeoutID;
function setup() {
this.addEventListener("mousemove", resetTimer, false);
this.addEventListener("mousedown", resetTimer, false);
this.addEventListener("keypress", resetTimer, false);
this.addEventListener("DOMMouseScroll", resetTimer, false);
this.addEventListener("mousewheel", resetTimer, false);
this.addEventListener("touchmove", resetTimer, false);
this.addEventListener("MSPointerMove", resetTimer, false);
startTimer();
}
setup();
function startTimer() {
// timeout a 30 secondi
timeoutID = window.setTimeout(goInactive, 90000);
}
function resetTimer(e) {
window.clearTimeout(timeoutID);
goActive();
}
function goInactive() {
main.toggleButtonHome.click()
}
function goActive() {
startTimer();
}
*/
// carico i combo delle date
function strPad(input, length, string) {
string = string || '0';
input = input + '';
return input.length >= length ? input : new Array(length - input.length + 1).join(string) + input;
}
// giorni
for (i = 0;
(i <= 30); i++) {
var data = {
"codice": strPad(i + 1, 2, "0")
};
app.variableGG.addItem(data, i)
}
// Mesi
for (i = 0;
(i <= 11); i++) {
var data = {
"codice": strPad(i + 1, 2, "0")
};
app.variableMM.addItem(data, i)
}
// anni
for (i = 0;
(i <= 100); i++) {
var data = {
"codice": strPad(i + 1900, 4, "0")
};
app.variableAA.addItem(data, i)
}
// anni futuri
var d = new Date();
var n = d.getFullYear();
for (i = 0;
(i <= 10); i++) {
var data = {
"codice": strPad(i + n, 4, "0")
};
app.variableAAfuturi.addItem(data, i)
}
},
handleDeviceReady: function (event) {
// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
// navigator.splashscreen.hide();
// document.addEventListener("backbutton", onBackButton, false);
/*
document.addEventListener("searchbutton", onSearch, false);
document.addEventListener("menubutton", onMenuButton, false);
document.addEventListener("online", onOnline, false);
document.addEventListener("offline", onOffline, false);
function onOnline() {
this.pictureNetwork.setImageIndex(49);
}
function onOffline() {
this.pictureNetwork.setImageIndex(50);
}
// Handle the backbutton
//
function onBackButton() {
alert("You hit the back button!");
}
// Handle the menubutton
//
function onMenuButton() {
alert("You hit the menu button!");
}
// Handle the searchbutton
//
function onSearchButton() {
alert("You hit the search button!");
}
*/
// load dei dati
function loadJSON(url) {
return jQuery.ajax({
url : url,
async : false,
dataType : 'json'
}).responseText;
}
var fileURL = "cdvfile://localhost/persistent/enumera/ciccio.txt";
var clientiLocal = loadJSON(fileURL);
if (clientiLocal){
alert ("Carico clienti");
app.varClienti.setData(clientiLocal);
}
function onBackButton() {
//navigator.notification.confirm("Are you sure want to exit from App?", onConfirmExit, "Confirmation", "Yes,No");
app.confirmExit.update();
}
},
button1Click: function(inSender) {
// load dei dati
function loadJSON(url) {
return jQuery.ajax({
url : url,
async : false,
dataType : 'json'
}).responseText;
}
var fileURL = "cdvfile://localhost/persistent/enumera/ciccio.txt";
var clientiLocal = loadJSON(fileURL);
if (clientiLocal){
alert ("Carico clienti");
alert(clientiLocal);
app.varClienti.setData(clientiLocal);
}
},
_end: 0
});

Main.widgets = {
openRicercaArticolo: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
wire: ["wm.Wire", {"expression":"\"RicercaArticoli\"","targetProperty":"pageName"}, {}]
}]
}]
}],
openFidelity: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Fidelity\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
openEcommerce: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
wire1: ["wm.Wire", {"expression":"\"Ecommerce\"","targetProperty":"pageName"}, {}]
}]
}]
}],
openHome: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Home\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
openEventi: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
wire: ["wm.Wire", {"expression":"\"Ficorre\"","targetProperty":"pageName"}, {}]
}]
}]
}],
openVendite: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Vendite\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
openClienti: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Clienti\"","targetProperty":"pageName"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
}]
}]
}],
openSincro: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
wire1: ["wm.Wire", {"expression":"\"Sincro\"","targetProperty":"pageName"}, {}]
}]
}]
}],
loginPage: ["wm.PageDialog", {"border":"2","desktopHeight":"200px","height":"200px","hideControls":true,"mobileHeight":"200px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"Login","title":"Login","width":"300px"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
toggleButtonPanel1: ["wm.ToggleButtonPanel", {"border":"0","borderColor":"","desktopHeight":"80px","height":"80px","horizontalAlign":"left","margin":"0","mobileHeight":"80px","padding":"4","styles":{},"verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"toggleButtonHome","targetProperty":"currentButton"}, {}]
}],
toggleButtonHome: ["wm.ToggleButton", {"border":"1,1,1,1","borderColor":"#7c7b83","captionDown":"Home","captionUp":"Home","clicked":true,"height":"100%","imageIndex":0,"imageList":"app.imageListBasic","margin":"0","padding":"4,12","styles":{},"width":"100%"}, {"onclick":"openHome"}],
toggleButtonVendite: ["wm.ToggleButton", {"border":"1,1,1,1","borderColor":"#7c7b83","captionDown":"Vendite","captionUp":"Vendite","height":"100%","imageIndex":1,"imageList":"app.imageListBasic","margin":"0","padding":"4,12","styles":{},"width":"100%"}, {"onclick":"openVendite"}],
toggleButtonClienti: ["wm.ToggleButton", {"border":"1,1,1,1","borderColor":"#7c7b83","captionDown":"Clienti","captionUp":"Clienti","height":"100%","imageIndex":13,"imageList":"app.imageListBasic","margin":"0","padding":"4,12","width":"100%"}, {"onclick":"openClienti"}],
toggleButtonArticoli: ["wm.ToggleButton", {"border":"1,1,1,1","borderColor":"#7c7b83","captionDown":"Articoli","captionUp":"Articoli","height":"100%","imageIndex":43,"imageList":"app.imageListBasic","margin":"0","padding":"4,12","width":"100%"}, {"onclick":"openEcommerce"}],
toggleButtonSincro: ["wm.ToggleButton", {"border":"1","borderColor":"#7c7b83","captionDown":"Sincro","captionUp":"Sincro","height":"100%","imageIndex":23,"imageList":"app.imageListBasic","margin":"0","padding":"4,12","width":"100%"}, {"onclick":"openSincro"}]
}],
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"Home","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}],
panelFooter: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
label1: ["wm.Label", {"padding":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"caption"}, {}]
}]
}],
button1: ["wm.Button", {"border":"1","caption":"Load","height":"100%","margin":"4","width":"80px"}, {"onclick":"button1Click"}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';