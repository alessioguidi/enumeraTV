dojo.declare("Sincro", wm.Page, {
start: function() {
document.addEventListener("deviceready", this.handleDeviceReady, false);
},
"preferredDevice": "desktop",
handleDeviceReady: function (event) {
// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
// navigator.splashscreen.hide();
document.addEventListener("backbutton", onBackButton, false);
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
var onSuccess = function(position) {
/*
app.deviceInformation.setData([{
"uuid":device.uuid,
"name":device.name,
"model":device.model,
"platform":device.platform,
"version":device.version,
"phonenumber":"-",
"latitude": position.coords.latitude,
"longitude": position.coords.longitude,
"altitude": position.coords.altitude,
"speed": position.coords.speed,
"gpstimestamp": position.timestamp,
"dataValue": 0}]);
//window.plugin.backgroundMode.disable();
app.serviceNotify.update();
*/
alert("ci sono");
};
// onError Callback receives a PositionError object
//
function onError(error) {
alert('code: '    + error.code    + '\n' +
'message: ' + error.message + '\n');
}
function onBackButton() {
//navigator.notification.confirm("Are you sure want to exit from App?", onConfirmExit, "Confirmation", "Yes,No");
app.confirmExit.update();
}
navigator.geolocation.watchPosition(onSuccess, onError,{
maximumAge: app.parGpsMaxAge.getValue("dataValue"),
timeout: app.parGpsTimeout.getValue("dataValue"),
enableHighAccuracy: false});
},
button1Click: function(inSender) {
// !! Assumes variable fileURL contains a valid URL to a path on the device,
//    for example, cdvfile://localhost/persistent/path/to/downloads/
var fileURL = "cdvfile://localhost/persistent/enumera/ciccio.txt";
var fileTransfer = new FileTransfer();
var uri = encodeURI("http://2.228.76.239/json/ciccio.txt");
fileTransfer.download(
uri,
fileURL,
function(entry) {
alert("download complete: " + entry.toURL());
$.getJSON(fileURL, function(json) {
app.varClienti.setData(json);
app.toastSuccess("Clienti sincronizzati con successso");
});
},
function(error) {
alert("download error source " + error.source);
alert("download error target " + error.target);
alert("upload error code" + error.code);
},
false,
{
headers: {
"Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
}
}
);
},
buttonClientiClick: function(inSender) {
$.getJSON("http://2.228.76.239/json/ciccio.txt", function(json) {
app.varClienti.setData(json);
app.toastSuccess("Clienti sincronizzati con successso");
});
},
button2Click: function(inSender) {
var fileURL = "cdvfile://localhost/persistent/enumera/clienti.txt";
//alert (JSON.stringify(this.serviceVariable1.getData()));
function writeSuccess(){
alert("Write Succeeded");
}
function writeFile() {
var writer = new FileWriter();
writer.onwrite = writeSuccess;
writer.writeAsText(fileURL, JSON.stringify(this.serviceVariable1.getData()), false);
}
writeFile();
},
_end: 0
});

Sincro.widgets = {
serviceVariable1: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"articolo","service":"xhrService","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"articoloInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
wire: ["wm.Wire", {"expression":"'123'","targetProperty":"barcode"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
button1: ["wm.Button", {"border":"1","caption":"Clienti","height":"80px","margin":"4"}, {"onclick":"button1Click"}],
buttonClienti: ["wm.Button", {"border":"1","caption":"Clienti","height":"80px","margin":"4","showing":false}, {"onclick":"buttonClientiClick"}],
button2: ["wm.Button", {"border":"1","height":"80px","margin":"4"}, {"onclick":"button2Click"}],
dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"ROWID","title":"ROWID","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"PAGEID","title":"PAGEID","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"PAGECOUNT","title":"PAGECOUNT","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"O2ASPID","title":"O2ASPID","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"CODART","title":"CODART","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"DESCRIZIONE","title":"DESCRIZIONE","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"COD_MARCA","title":"COD_MARCA","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"PREZZO","title":"PREZZO","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"GIACENZA_UM1","title":"GIACENZA_UM1","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"MARCA","title":"MARCA","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"BARCODE","title":"BARCODE","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"ROWID: \" + ${ROWID} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"PAGEID: \" + ${PAGEID}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"PAGECOUNT: \" + ${PAGECOUNT}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"O2ASPID: \" + ${O2ASPID}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"CODART: \" + ${CODART}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"DESCRIZIONE: \" + ${DESCRIZIONE}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"COD_MARCA: \" + ${COD_MARCA}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"PREZZO: \" + ${PREZZO}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"GIACENZA_UM1: \" + ${GIACENZA_UM1}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"MARCA: \" + ${MARCA}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"BARCODE: \" + ${BARCODE}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"articoloResponse","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"serviceVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}]
};

Sincro.prototype._cssText = '';
Sincro.prototype._htmlText = '';