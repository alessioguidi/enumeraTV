Sincro.widgets = {
	serviceClienti: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"enumera.readClienti","service":"xhrService"}, {"onSuccess":"serviceClientiSuccess"}, {
		input: ["wm.ServiceInput", {"type":"enumera.readClientiInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","verticalAlign":"top"}, {}, {
		button1: ["wm.Button", {"border":"1","caption":"Clienti","height":"80px","margin":"4"}, {"onclick":"button1Click"}],
		buttonClienti: ["wm.Button", {"border":"1","caption":"Clienti","height":"80px","margin":"4","showing":false}, {"onclick":"buttonClientiClick"}],
		button2: ["wm.Button", {"border":"1","height":"80px","margin":"4"}, {"onclick":"button2Click"}],
		dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"ROWID","title":"ROWID","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"PAGEID","title":"PAGEID","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"PAGECOUNT","title":"PAGECOUNT","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"O2ASPID","title":"O2ASPID","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"CODICE","title":"CODICE","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"TIPO","title":"TIPO","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"TIPO_SOGGETTO","title":"TIPO_SOGGETTO","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"RAGIONE_SOC","title":"RAGIONE_SOC","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"RAG_SOC_SUPP","title":"RAG_SOC_SUPP","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"INDIRIZZO","title":"INDIRIZZO","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"CAP","title":"CAP","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"CITTA","title":"CITTA","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"PROVINCIA","title":"PROVINCIA","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"STATO_ESTERO","title":"STATO_ESTERO","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"CODICE_FISCALE","title":"CODICE_FISCALE","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"PARTITA_IVA","title":"PARTITA_IVA","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"TELEFONO","title":"TELEFONO","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"FAX","title":"FAX","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"LINGUA","title":"LINGUA","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"NOTE","title":"NOTE","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"GRUPPO","title":"GRUPPO","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"EMAIL","title":"EMAIL","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"SITO_WEB","title":"SITO_WEB","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"DATA_CREAZIONE","title":"DATA_CREAZIONE","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"USER_CREAZIONE","title":"USER_CREAZIONE","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"CLASSE_ANAGRAFICA","title":"CLASSE_ANAGRAFICA","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"ANNULLATO","title":"ANNULLATO","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"STATO_COMMERCIALE","title":"STATO_COMMERCIALE","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"SALDO_CONTABILE","title":"SALDO_CONTABILE","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"ROWID: \" + ${ROWID} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"PAGEID: \" + ${PAGEID}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"PAGECOUNT: \" + ${PAGECOUNT}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"O2ASPID: \" + ${O2ASPID}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"CODICE: \" + ${CODICE}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"TIPO: \" + ${TIPO}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"TIPO_SOGGETTO: \" + ${TIPO_SOGGETTO}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"RAGIONE_SOC: \" + ${RAGIONE_SOC}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"RAG_SOC_SUPP: \" + ${RAG_SOC_SUPP}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"INDIRIZZO: \" + ${INDIRIZZO}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"CAP: \" + ${CAP}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"CITTA: \" + ${CITTA}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"Cliente","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"serviceClienti","targetProperty":"dataSet"}, {}]
			}]
		}]
	}]
}