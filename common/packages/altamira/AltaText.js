
// Declare Dojo package name 
dojo.provide("wm.packages.altamira.AltaText");
wm.getComponentStructure("wm.Text"); 


// Declare Dojo widget name. This widget extends the Label widget
dojo.declare("wm.altamira.AltaText",wm.Text, {
	// Imposto i default


	// Init del controllo + link agli eventi 
	init: function() {
		this.inherited(arguments);
	},	
	_end: null

});