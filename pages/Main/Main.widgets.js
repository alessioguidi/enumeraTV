Main.widgets = {
	openRicercaArticolo: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire: ["wm.Wire", {"expression":"\"RicercaArticoli\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	openFidelity: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Fidelity\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	openEcommerce: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Ecommerce\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	openHome: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Home\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	openEventi: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire: ["wm.Wire", {"expression":"\"Ficorre\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	openVendite: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Vendite\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	openClienti: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Clienti\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	openSincro: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Sincro\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	loginPage: ["wm.PageDialog", {"border":"2","desktopHeight":"200px","height":"200px","hideControls":true,"mobileHeight":"200px","noEscape":true,"noMaxify":true,"noMinify":true,"pageName":"Login","title":"Login","width":"300px"}, {}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		toggleButtonPanel1: ["wm.ToggleButtonPanel", {"border":"0","borderColor":"","desktopHeight":"80px","height":"80px","horizontalAlign":"left","margin":"0","mobileHeight":"80px","padding":"4","styles":{},"verticalAlign":"top"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"toggleButtonHome","targetProperty":"currentButton"}, {}]
			}],
			toggleButtonHome: ["wm.ToggleButton", {"border":"1,1,1,1","borderColor":"#7c7b83","captionDown":"Home","captionUp":"Home","clicked":true,"height":"100%","imageIndex":0,"imageList":"app.imageListBasic","margin":"0","padding":"4,12","styles":{},"width":"100%"}, {"onclick":"openHome"}],
			toggleButtonVendite: ["wm.ToggleButton", {"border":"1,1,1,1","borderColor":"#7c7b83","captionDown":"Vendite","captionUp":"Vendite","height":"100%","imageIndex":1,"imageList":"app.imageListBasic","margin":"0","padding":"4,12","styles":{},"width":"100%"}, {"onclick":"openVendite"}],
			toggleButtonClienti: ["wm.ToggleButton", {"border":"1,1,1,1","borderColor":"#7c7b83","captionDown":"Clienti","captionUp":"Clienti","height":"100%","imageIndex":13,"imageList":"app.imageListBasic","margin":"0","padding":"4,12","width":"100%"}, {"onclick":"openClienti"}],
			toggleButtonArticoli: ["wm.ToggleButton", {"border":"1,1,1,1","borderColor":"#7c7b83","captionDown":"Articoli","captionUp":"Articoli","height":"100%","imageIndex":43,"imageList":"app.imageListBasic","margin":"0","padding":"4,12","width":"100%"}, {"onclick":"openEcommerce"}],
			toggleButtonSincro: ["wm.ToggleButton", {"border":"1","borderColor":"#7c7b83","captionDown":"Sincro","captionUp":"Sincro","height":"100%","imageIndex":23,"imageList":"app.imageListBasic","margin":"0","padding":"4,12","width":"100%"}, {"onclick":"openSincro"}]
		}],
		pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"Home","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}],
		panelFooter: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			label1: ["wm.Label", {"padding":"4"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"caption"}, {}]
				}]
			}]
		}]
	}]
}