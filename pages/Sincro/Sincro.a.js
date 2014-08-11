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
_end: 0
});

Sincro.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
button1: ["wm.Button", {"border":"1","caption":"Clienti","height":"80px","margin":"4"}, {"onclick":"button1Click"}],
buttonClienti: ["wm.Button", {"border":"1","caption":"Clienti","height":"80px","margin":"4","showing":false}, {"onclick":"buttonClientiClick"}]
}]
};

Sincro.prototype._cssText = '';
Sincro.prototype._htmlText = '';