
// Declare Dojo package name 
dojo.provide("wm.packages.altamira.AltaLabel");
wm.getComponentStructure("wm.Label"); 


// Declare Dojo widget name. This widget extends the Label widget
dojo.declare("wm.altamira.AltaLabel",wm.Label, {
	// Imposto i default


	// Init del controllo + link agli eventi 
	init: function() {
		this.inherited(arguments);
	},	
	_end: null

});