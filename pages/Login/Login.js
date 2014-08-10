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