
// Declare Dojo package name 
dojo.provide("wm.packages.altamira.AltaLookup");
wm.getComponentStructure("wm.Lookup"); 


// Declare Dojo widget name. This widget extends the Label widget
dojo.declare("wm.altamira.AltaLookup",wm.Lookup, {
	// Imposto i default


	// Init del controllo + link agli eventi 
	init: function() {
		this.inherited(arguments);
	},	
	_end: null

});