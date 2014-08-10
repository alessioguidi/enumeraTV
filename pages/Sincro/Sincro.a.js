dojo.declare("Sincro", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
button1Click: function(inSender) {
// !! Assumes variable fileURL contains a valid URL to a path on the device,
//    for example, cdvfile://localhost/persistent/path/to/downloads/
var fileURL = "cdvfile://localhost/persistent/enumera/ciccio.json";
var fileTransfer = new FileTransfer();
var uri = encodeURI("http://2.228.76.239/ciccio.json");
fileTransfer.download(
uri,
fileURL,
function(entry) {
alert("download complete: " + entry.toURL());
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
_end: 0
});

Sincro.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
button1: ["wm.Button", {"border":"1","caption":"Clienti","height":"80px","margin":"4"}, {"onclick":"button1Click"}]
}]
};

Sincro.prototype._cssText = '';
Sincro.prototype._htmlText = '';