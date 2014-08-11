dojo.declare("Home", wm.Page, {
	start: function() {
		//main.toggleButtonPanel1.setCurrentButton("toggleButtonHome");
	},
	"preferredDevice": "desktop",

	button1Click: function(inSender) {

$.getJSON("http://2.228.76.239/json/ciccio.txt", function(json) {
    console.log(json); // this will show the info it in firebug console
    app.varClienti.setData(json);
});

	},
	_end: 0
});