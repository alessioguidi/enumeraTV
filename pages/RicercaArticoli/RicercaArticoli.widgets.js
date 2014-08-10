RicercaArticoli.widgets = {
	serviceArticolo: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"articolo","service":"xhrService"}, {}, {
		input: ["wm.ServiceInput", {"type":"articoloInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"barcode.dataValue","targetProperty":"barcode"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}]
			}]
		}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"panelArticolo","targetProperty":"loadingDialog"}, {}]
		}]
	}],
	serviceGiacenze: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"giacenze","service":"xhrService"}, {"onResult":"serviceGiacenzeResult"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"panelGiacenze","targetProperty":"loadingDialog"}, {}]
		}],
		input: ["wm.ServiceInput", {"type":"giacenzeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"serviceArticolo.CODART","targetProperty":"codart"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}]
			}]
		}]
	}],
	designableDialog1: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget"}, {"onShow":"designableDialog1Show"}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			html1: ["wm.Html", {"html":"<textarea id=\"keyboard\" placeholder=\"Enter Text...\"></textarea>","minDesktopHeight":15}, {}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"black","height":"15px"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"Ricerca articolo"}, {}, {
			spacer4: ["wm.Spacer", {"height":"48px","width":"96px"}, {}],
			panel1: ["wm.Panel", {"desktopHeight":"37px","enableTouchHeight":true,"height":"37px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"80px","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
				barcode: ["wm.Text", {"caption":"Codice a barre","captionSize":"130px","dataValue":undefined,"desktopHeight":"30px","displayValue":"","height":"30px","styles":{},"width":"500px"}, {"onchange":"barcodeChange"}],
				buttonTastiera: ["wm.Button", {"_classes":{"domNode":["buttonDefault"]},"border":"0","desktopHeight":"40px","height":"40px","margin":"4","showing":false,"styles":{},"width":"80px"}, {"onclick":"designableDialog1.show"}]
			}],
			panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				panelArticolo: ["wm.FancyPanel", {"title":"Dati articolo"}, {}, {
					dataForm1: ["wm.DataForm", {"desktopHeight":"292px","fitToContentHeight":true,"height":"162px","isCompositeKey":false,"mobileHeight":"162px","type":"articoloResponse"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"serviceArticolo","targetProperty":"dataSet"}, {}]
						}],
						CODARTEditor1: ["wm.Text", {"caption":"Codice","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"CODART","height":"26px","required":undefined,"styles":{},"width":"100%"}, {}],
						DESCRIZIONEEditor1: ["wm.Text", {"caption":"Descrizione","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"DESCRIZIONE","height":"26px","required":undefined,"width":"100%"}, {}],
						BARCODEEditor1: ["wm.Text", {"caption":"Codice a barre","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"BARCODE","height":"26px","required":undefined,"width":"100%"}, {}],
						MARCAEditor1: ["wm.Text", {"caption":"Marca","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"MARCA","height":"26px","required":undefined,"width":"100%"}, {}],
						PREZZOEditor1: ["wm.Text", {"caption":"Prezzo","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"PREZZO","height":"26px","required":undefined,"tooltipDisplayTime":undefined,"width":"100%"}, {}],
						GIACENZA_UM1Editor1: ["wm.Text", {"caption":"Qta in negozio","captionSize":"120px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"GIACENZA_UM1","height":"26px","required":undefined,"width":"100%"}, {}]
					}]
				}],
				panelGiacenze: ["wm.FancyPanel", {"title":"Disponibile in questi punti vendita"}, {}, {
					dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"ROWID","title":"ROWID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGEID","title":"PAGEID","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PAGECOUNT","title":"PAGECOUNT","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"O2ASPID","title":"O2ASPID","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"COD_DEPOSITO","title":"COD_DEPOSITO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"COD_ART","title":"COD_ART","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"ADATA","title":"ADATA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"DESCR_NEGOZIO","title":"Punto vendita","width":"396px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"ID_NEGOZIO","title":"ID_NEGOZIO","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"LOCALITA","title":"LOCALITA","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"PROVINCIA","title":"Prov.","width":"38px","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"GIACENZA_UM1","title":"Qtà","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Punto vendita: \" + ${DESCR_NEGOZIO} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Prov.: \" + ${PROVINCIA}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Qtà: \" + ${GIACENZA_UM1}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"giacenzeResponse","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"serviceGiacenze","targetProperty":"dataSet"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}