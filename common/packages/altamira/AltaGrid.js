
// Declare Dojo package name 
dojo.provide("wm.packages.altamira.AltaGrid");
wm.getComponentStructure("wm.DojoGrid"); 


// Declare Dojo widget name. This widget extends the Label widget
dojo.declare("wm.altamira.AltaGrid",wm.DojoGrid, {
	// Imposto i default
	selectFirstRow: true,

	// Init del controllo + link agli eventi 
	init: function() {
		this.inherited(arguments);
		this.connect(this.domNode, "onHeaderClick", this, "onHeaderClick");
	},
	
	
	// In caso di click sull'header colonna cambio orderby e rifaccio la query sul server se occorre
	onHeaderClick: function(evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
		this.dataSet.loadingDialog = this;
		
		if (this.dataSet.getTotalPages() > 1) {
		
			var direction = "asc:";
			var pos = cellNode.innerHTML.indexOf("GridSortUp");    
        
			if (pos > 0){
				direction = "desc:";   
			}
			this.dataSet.orderBy = direction + fieldId;
			this.dataSet.update();
		}
	},	
	_end: null

});