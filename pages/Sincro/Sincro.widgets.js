Sincro.widgets = {
	serviceVariable1: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"articolo","service":"xhrService","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"articoloInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}],
				wire: ["wm.Wire", {"expression":"'123'","targetProperty":"barcode"}, {}]
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
{"show":true,"field":"CODART","title":"CODART","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"DESCRIZIONE","title":"DESCRIZIONE","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"COD_MARCA","title":"COD_MARCA","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"PREZZO","title":"PREZZO","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"GIACENZA_UM1","title":"GIACENZA_UM1","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"MARCA","title":"MARCA","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":true,"field":"BARCODE","title":"BARCODE","width":"100%","displayType":"String","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"ROWID: \" + ${ROWID} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"PAGEID: \" + ${PAGEID}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"PAGECOUNT: \" + ${PAGECOUNT}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"O2ASPID: \" + ${O2ASPID}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"CODART: \" + ${CODART}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"DESCRIZIONE: \" + ${DESCRIZIONE}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"COD_MARCA: \" + ${COD_MARCA}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"PREZZO: \" + ${PREZZO}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"GIACENZA_UM1: \" + ${GIACENZA_UM1}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"MARCA: \" + ${MARCA}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"BARCODE: \" + ${BARCODE}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"articoloResponse","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"serviceVariable1","targetProperty":"dataSet"}, {}]
			}]
		}]
	}]
}