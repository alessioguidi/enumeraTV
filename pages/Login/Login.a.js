dojo.declare("Login", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
buttonLoginClick: function(inSender) {
if (this.textUser.getDataValue() != null){
app.serviceApp.update();
}
},
_end: 0
});

Login.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"enableTouchHeight":true,"height":"100%","horizontalAlign":"center","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
textUser: ["wm.Text", {"caption":"User","dataValue":"gb","desktopHeight":"30px","displayValue":"gb","height":"35px","required":true,"styles":{},"width":"90%"}, {}],
textPassword: ["wm.Text", {"caption":"Password","dataValue":"gb","desktopHeight":"30px","displayValue":"gb","height":"35px","password":true,"width":"90%"}, {}],
buttonLogin: ["wm.Button", {"_classes":{"domNode":["buttonDefault"]},"border":"1","borderColor":"#46ca5e","caption":"Enter","height":"80px","margin":"4","styles":{}}, {"onclick":"buttonLoginClick"}]
}]
}]
};

Login.prototype._cssText = '';
Login.prototype._htmlText = '';