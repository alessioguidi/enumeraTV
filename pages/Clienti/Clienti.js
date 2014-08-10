dojo.declare("Clienti", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "tablet",

	textRicercaChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        if (inDataValue == null){
            app.varClienti.setQuery({RAGIONE_SOC: "*"});
            
        }
        else  app.varClienti.setQuery({RAGIONE_SOC: "*" + inDataValue + "*"});
       
    },
	_end: 0
});