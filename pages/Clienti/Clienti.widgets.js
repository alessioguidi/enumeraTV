Clienti.widgets = {
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		layers1: ["wm.Layers", {}, {}, {
			layerRicerca: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				panel1: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					textRicerca: ["wm.Text", {"caption":"text1","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px"}, {"onchange":"textRicercaChange"}]
				}],
				list1: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"columns":[
{"show":false,"field":"ROWID","title":"ROWID","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGEID","title":"PAGEID","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGECOUNT","title":"PAGECOUNT","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"O2ASPID","title":"O2ASPID","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"CODICE","title":"CODICE","width":"60px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"TIPO","title":"TIPO","width":"60px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"TIPO_SOGGETTO","title":"TIPO_SOGGETTO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"RAGIONE_SOC","title":"RAGIONE_SOC","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"RAG_SOC_SUPP","title":"RAG_SOC_SUPP","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"INDIRIZZO","title":"INDIRIZZO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"CAP","title":"CAP","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"CITTA","title":"CITTA","width":"120px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"PROVINCIA","title":"PROVINCIA","width":"60px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"STATO_ESTERO","title":"STATO_ESTERO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"CODICE_FISCALE","title":"CODICE_FISCALE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PARTITA_IVA","title":"PARTITA_IVA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"TELEFONO","title":"TELEFONO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"FAX","title":"FAX","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"LINGUA","title":"LINGUA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"NOTE","title":"NOTE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"GRUPPO","title":"GRUPPO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"EMAIL","title":"EMAIL","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"SITO_WEB","title":"SITO_WEB","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"DATA_CREAZIONE","title":"DATA_CREAZIONE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"USER_CREAZIONE","title":"USER_CREAZIONE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"CLASSE_ANAGRAFICA","title":"CLASSE_ANAGRAFICA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ANNULLATO","title":"ANNULLATO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"STATO_COMMERCIALE","title":"STATO_COMMERCIALE","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"SALDO_CONTABILE","title":"SALDO_CONTABILE","width":"80px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"CODICE: \" + ${CODICE} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"TIPO: \" + ${TIPO}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"RAGIONE_SOC: \" + ${RAGIONE_SOC}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"CITTA: \" + ${CITTA}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"PROVINCIA: \" + ${PROVINCIA}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}
],"headerVisible":false,"height":"100%","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false,"styles":{}}, {"onSelect":"layerDettaglio"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"app.varClienti.queriedItems","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			layerDettaglio: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"","verticalAlign":"top"}, {}, {
				dataForm1: ["wm.DataForm", {"captionSize":"200px","desktopHeight":"881px","fitToContentHeight":true,"height":"656px","isCompositeKey":false,"mobileHeight":"881px","readonly":true,"type":"Cliente"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"list1.selectedItem","targetProperty":"dataSet"}, {}]
					}],
					CODICEEditor1: ["wm.Text", {"caption":"CODICE","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"CODICE","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					TIPOEditor1: ["wm.Text", {"caption":"TIPO","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"TIPO","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					TIPO_SOGGETTOEditor1: ["wm.Text", {"caption":"TIPO_SOGGETTO","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"TIPO_SOGGETTO","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					RAGIONE_SOCEditor1: ["wm.Text", {"caption":"RAGIONE_SOC","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"RAGIONE_SOC","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					RAG_SOC_SUPPEditor1: ["wm.Text", {"caption":"RAG_SOC_SUPP","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"RAG_SOC_SUPP","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					INDIRIZZOEditor1: ["wm.Text", {"caption":"INDIRIZZO","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"INDIRIZZO","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					CAPEditor1: ["wm.Text", {"caption":"CAP","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"CAP","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					CITTAEditor1: ["wm.Text", {"caption":"CITTA","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"CITTA","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					PROVINCIAEditor1: ["wm.Text", {"caption":"PROVINCIA","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"PROVINCIA","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					STATO_ESTEROEditor1: ["wm.Text", {"caption":"STATO_ESTERO","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"STATO_ESTERO","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					CODICE_FISCALEEditor1: ["wm.Text", {"caption":"CODICE_FISCALE","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"CODICE_FISCALE","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					PARTITA_IVAEditor1: ["wm.Text", {"caption":"PARTITA_IVA","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"PARTITA_IVA","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					TELEFONOEditor1: ["wm.Text", {"caption":"TELEFONO","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"TELEFONO","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					FAXEditor1: ["wm.Text", {"caption":"FAX","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"FAX","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					LINGUAEditor1: ["wm.Text", {"caption":"LINGUA","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"LINGUA","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					NOTEEditor1: ["wm.Text", {"caption":"NOTE","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"NOTE","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					GRUPPOEditor1: ["wm.Text", {"caption":"GRUPPO","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"GRUPPO","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					EMAILEditor1: ["wm.Text", {"caption":"EMAIL","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"EMAIL","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					SITO_WEBEditor1: ["wm.Text", {"caption":"SITO_WEB","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"SITO_WEB","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					DATA_CREAZIONEEditor1: ["wm.Text", {"caption":"DATA_CREAZIONE","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"DATA_CREAZIONE","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					USER_CREAZIONEEditor1: ["wm.Text", {"caption":"USER_CREAZIONE","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"USER_CREAZIONE","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					CLASSE_ANAGRAFICAEditor1: ["wm.Text", {"caption":"CLASSE_ANAGRAFICA","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"CLASSE_ANAGRAFICA","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					ANNULLATOEditor1: ["wm.Text", {"caption":"ANNULLATO","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"ANNULLATO","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					STATO_COMMERCIALEEditor1: ["wm.Text", {"caption":"STATO_COMMERCIALE","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"STATO_COMMERCIALE","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}],
					SALDO_CONTABILEEditor1: ["wm.Number", {"border":"0","caption":"SALDO_CONTABILE","captionSize":"200px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"SALDO_CONTABILE","height":"35px","readonly":true,"required":undefined,"width":"100%"}, {}]
				}],
				Toolbar: ["wm.Panel", {"_classes":{"domNode":["toolbar"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"200px"}, {}, {
					mobileIconButton1: ["wm.MobileIconButton", {"border":"0","direction":"back","width":"200px"}, {"onclick":"app._onBack"}],
					buttonScadenze: ["wm.Button", {"border":"1","caption":"Scadenze aperte","height":"80px","margin":"4","width":"200px"}, {}],
					buttonDocumenti: ["wm.Button", {"border":"1","caption":"Documenti","height":"80px","margin":"4","width":"200px"}, {}],
					buttonMeeting: ["wm.Button", {"border":"1","caption":"Nuovo appuntamento","height":"80px","margin":"4","width":"200px"}, {}],
					buttonChiama: ["wm.Button", {"border":"1","caption":"Chiama","height":"80px","imageList":undefined,"margin":"4","width":"200px"}, {}]
				}]
			}]
		}]
	}]
}