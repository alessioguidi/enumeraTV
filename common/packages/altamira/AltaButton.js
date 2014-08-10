
// Declare Dojo package name 
dojo.provide("wm.packages.altamira.AltaButton");
wm.getComponentStructure("wm.Button"); 


// Declare Dojo widget name. This widget extends the Label widget
dojo.declare("wm.altamira.AltaButton",wm.Button, {
	// Imposto i default


	// Init del controllo + link agli eventi 
	init: function() {
		this.inherited(arguments);
	},	
	_end: null

});