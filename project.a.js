wm.JsonRpcService.smdCache['runtimeService.smd'] = {
	"methods": [{
		"name": "delete",
		"operationType": null,
		"parameters": [{
			"name": "arg0",
			"type": "java.lang.String"
		}, {
			"name": "arg1",
			"type": "java.lang.String"
		}, {
			"name": "arg2",
			"type": "java.lang.Object"
		}],
		"returnType": null
	}, {
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getInternalRuntime",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.server.InternalRuntime"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getProperty",
		"operationType": null,
		"parameters": [{
			"name": "arg0",
			"type": "java.lang.Object"
		}, {
			"name": "arg1",
			"type": "java.lang.String"
		}, {
			"name": "arg2",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.Object"
	}, {
		"name": "getRuntimeAccess",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.RuntimeAccess"
	}, {
		"name": "getServiceEventNotifier",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
	}, {
		"name": "getServiceManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.ServiceManager"
	}, {
		"name": "getServiceWire",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.service.ServiceWire"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getTypeManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.TypeManager"
	}, {
		"name": "insert",
		"operationType": null,
		"parameters": [{
			"name": "arg0",
			"type": "java.lang.String"
		}, {
			"name": "arg1",
			"type": "java.lang.String"
		}, {
			"name": "arg2",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "read",
		"operationType": null,
		"parameters": [{
			"name": "arg0",
			"type": "java.lang.String"
		}, {
			"name": "arg1",
			"type": "java.lang.String"
		}, {
			"name": "arg2",
			"type": "java.lang.Object"
		}, {
			"name": "arg3",
			"type": "com.wavemaker.runtime.service.PropertyOptions"
		}, {
			"name": "arg4",
			"type": "com.wavemaker.runtime.service.PagingOptions"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "setInternalRuntime",
		"operationType": null,
		"parameters": [{
			"name": "internalRuntime",
			"type": "com.wavemaker.runtime.server.InternalRuntime"
		}],
		"returnType": null
	}, {
		"name": "setRuntimeAccess",
		"operationType": null,
		"parameters": [{
			"name": "runtimeAccess",
			"type": "com.wavemaker.runtime.RuntimeAccess"
		}],
		"returnType": null
	}, {
		"name": "setServiceEventNotifier",
		"operationType": null,
		"parameters": [{
			"name": "serviceEventNotifier",
			"type": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
		}],
		"returnType": null
	}, {
		"name": "setServiceManager",
		"operationType": null,
		"parameters": [{
			"name": "serviceManager",
			"type": "com.wavemaker.runtime.service.ServiceManager"
		}],
		"returnType": null
	}, {
		"name": "setTypeManager",
		"operationType": null,
		"parameters": [{
			"name": "typeManager",
			"type": "com.wavemaker.runtime.service.TypeManager"
		}],
		"returnType": null
	}, {
		"name": "update",
		"operationType": null,
		"parameters": [{
			"name": "arg0",
			"type": "java.lang.String"
		}, {
			"name": "arg1",
			"type": "java.lang.String"
		}, {
			"name": "arg2",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "runtimeService.json"
};
wm.JsonRpcService.smdCache['waveMakerService.smd'] = {
	"methods": [{
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getServerTimeOffset",
		"operationType": null,
		"parameters": null,
		"returnType": "int"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "remoteRESTCall",
		"operationType": null,
		"parameters": [{
			"name": "remoteURL",
			"type": "java.lang.String"
		}, {
			"name": "params",
			"type": "java.lang.String"
		}, {
			"name": "method",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.String"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "waveMakerService.json"
};
wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};
wm.Application.themeData['common.themes.wm_totem'] = {"wm.AppRoot":{"borderColor":"#7c7b83"},"wm.TabLayers":{"headerHeight":"27px"},"wm.Button":{"border":1,"width":"120px","desktopHeight":"80px","mobileHeight":"80px","borderColor":"#2087fc"},"wm.ToggleButton":{"border":1,"width":"120px","desktopHeight":"80px","mobileHeight":"80px","borderColor":"#2087fc"},"wm.PopupMenuButton":{"border":1,"width":"120px","desktopHeight":"80px","mobileHeight":"80px","borderColor":"#2087fc"},"wm.ToggleButtonPanel":{"borderColor":"#7c7b83","border":"0,0,0,0","padding":undefined,"buttonBorder":"1,1,1,1","buttonBorderColor":"#7c7b83","buttonMargins":"0","lastButtonBorder":"1","margin":"2"},"wm.Text":{"editorBorder":true},"wm.LargeTextArea":{"editorBorder":true},"wm.Number":{"editorBorder":true},"wm.Currency":{"editorBorder":true},"wm.SelectMenu":{"editorBorder":true},"wm.Lookup":{"editorBorder":true},"wm.FilteringLookup":{"editorBorder":true},"wm.Checkbox":{"editorBorder":true},"wm.RadioButton":{"editorBorder":true},"wm.RichText":{"editorBorder":true},"wm.CheckboxSet":{"editorBorder":true},"wm.RadioSet":{"editorBorder":true},"wm.ListSet":{"editorBorder":true},"wm.Slider":{"editorBorder":true},"wm.DojoGrid":{},"wm.List":{},"wm.DojoMenu":{"border":0},"wm.Date":{"editorBorder":true},"wm.Time":{"editorBorder":true},"wm.DateTime":{"editorBorder":true},"wm.Dialog":{},"wm.PageDialog":{},"wm.GenericDialog":{},"wm.DesignableDialog":{},"wm.ButtonBarPanel":{},"wm.FancyPanel":{"borderColor":"#c8c8c8","innerBorder":"1"},"wm.AccordionLayers":{},"wm.Bevel":{},"wm.Splitter":{},"wm.Toast":{"imgWidth":"30px","border":0},"wm.dijit.ProgressBar":{},"wm.dijit.Calendar":{"desktopHeight":"400px","mobileHeight":"360px","width":"400px"}};
dojo.declare("enumeraTV", wm.Application, {
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"hintDelay": 1500, 
	"i18n": false, 
	"isSecurityEnabled": false, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha3", 
	"projectVersion": 1, 
	"sessionExpirationHandler": "navigateToLogin", 
	"studioVersion": "6.7.0.RELEASE", 
	"tabletMain": "", 
	"theme": "common.themes.wm_totem", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		imageListBasic: ["wm.ImageList", {"colCount":65,"height":40,"iconCount":65,"url":"resources/images/imagelists/cosmo_basic.png","width":40}, {}], 
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		"granting.usersListResponse": ["wm.TypeDefinition", {}, {}, {
			O2USER: ["wm.TypeDefinitionField", {"fieldName":"O2USER"}, {}],
			O2PASSWORD: ["wm.TypeDefinitionField", {"fieldName":"O2PASSWORD"}, {}],
			AREA: ["wm.TypeDefinitionField", {"fieldName":"AREA"}, {}]
		}], 
		Cliente: ["wm.TypeDefinition", {}, {}, {
			ROWID: ["wm.TypeDefinitionField", {"fieldName":"ROWID","fieldType":"Number"}, {}],
			PAGEID: ["wm.TypeDefinitionField", {"fieldName":"PAGEID","fieldType":"Number"}, {}],
			PAGECOUNT: ["wm.TypeDefinitionField", {"fieldName":"PAGECOUNT","fieldType":"Number"}, {}],
			O2ASPID: ["wm.TypeDefinitionField", {"fieldName":"O2ASPID"}, {}],
			CODICE: ["wm.TypeDefinitionField", {"fieldName":"CODICE"}, {}],
			TIPO: ["wm.TypeDefinitionField", {"fieldName":"TIPO"}, {}],
			TIPO_SOGGETTO: ["wm.TypeDefinitionField", {"fieldName":"TIPO_SOGGETTO"}, {}],
			RAGIONE_SOC: ["wm.TypeDefinitionField", {"fieldName":"RAGIONE_SOC"}, {}],
			RAG_SOC_SUPP: ["wm.TypeDefinitionField", {"fieldName":"RAG_SOC_SUPP"}, {}],
			INDIRIZZO: ["wm.TypeDefinitionField", {"fieldName":"INDIRIZZO"}, {}],
			CAP: ["wm.TypeDefinitionField", {"fieldName":"CAP"}, {}],
			CITTA: ["wm.TypeDefinitionField", {"fieldName":"CITTA"}, {}],
			PROVINCIA: ["wm.TypeDefinitionField", {"fieldName":"PROVINCIA"}, {}],
			STATO_ESTERO: ["wm.TypeDefinitionField", {"fieldName":"STATO_ESTERO"}, {}],
			CODICE_FISCALE: ["wm.TypeDefinitionField", {"fieldName":"CODICE_FISCALE"}, {}],
			PARTITA_IVA: ["wm.TypeDefinitionField", {"fieldName":"PARTITA_IVA"}, {}],
			TELEFONO: ["wm.TypeDefinitionField", {"fieldName":"TELEFONO"}, {}],
			FAX: ["wm.TypeDefinitionField", {"fieldName":"FAX"}, {}],
			LINGUA: ["wm.TypeDefinitionField", {"fieldName":"LINGUA"}, {}],
			NOTE: ["wm.TypeDefinitionField", {"fieldName":"NOTE"}, {}],
			GRUPPO: ["wm.TypeDefinitionField", {"fieldName":"GRUPPO"}, {}],
			EMAIL: ["wm.TypeDefinitionField", {"fieldName":"EMAIL"}, {}],
			SITO_WEB: ["wm.TypeDefinitionField", {"fieldName":"SITO_WEB"}, {}],
			DATA_CREAZIONE: ["wm.TypeDefinitionField", {"fieldName":"DATA_CREAZIONE"}, {}],
			USER_CREAZIONE: ["wm.TypeDefinitionField", {"fieldName":"USER_CREAZIONE"}, {}],
			CLASSE_ANAGRAFICA: ["wm.TypeDefinitionField", {"fieldName":"CLASSE_ANAGRAFICA"}, {}],
			ANNULLATO: ["wm.TypeDefinitionField", {"fieldName":"ANNULLATO"}, {}],
			STATO_COMMERCIALE: ["wm.TypeDefinitionField", {"fieldName":"STATO_COMMERCIALE"}, {}],
			SALDO_CONTABILE: ["wm.TypeDefinitionField", {"fieldName":"SALDO_CONTABILE","fieldType":"Number"}, {}]
		}], 
		articoloResponse: ["wm.TypeDefinition", {}, {}, {
			ROWID: ["wm.TypeDefinitionField", {"fieldName":"ROWID","fieldType":"Number"}, {}],
			PAGEID: ["wm.TypeDefinitionField", {"fieldName":"PAGEID","fieldType":"Number"}, {}],
			PAGECOUNT: ["wm.TypeDefinitionField", {"fieldName":"PAGECOUNT","fieldType":"Number"}, {}],
			O2ASPID: ["wm.TypeDefinitionField", {"fieldName":"O2ASPID"}, {}],
			CODART: ["wm.TypeDefinitionField", {"fieldName":"CODART"}, {}],
			DESCRIZIONE: ["wm.TypeDefinitionField", {"fieldName":"DESCRIZIONE"}, {}],
			COD_MARCA: ["wm.TypeDefinitionField", {"fieldName":"COD_MARCA"}, {}],
			PREZZO: ["wm.TypeDefinitionField", {"fieldName":"PREZZO"}, {}],
			GIACENZA_UM1: ["wm.TypeDefinitionField", {"fieldName":"GIACENZA_UM1"}, {}],
			MARCA: ["wm.TypeDefinitionField", {"fieldName":"MARCA"}, {}],
			BARCODE: ["wm.TypeDefinitionField", {"fieldName":"BARCODE"}, {}]
		}], 
		categorieSport: ["wm.TypeDefinition", {}, {}, {
			codice: ["wm.TypeDefinitionField", {"fieldName":"codice"}, {}],
			descrizione: ["wm.TypeDefinitionField", {"fieldName":"descrizione"}, {}]
		}], 
		comuniReadResponse: ["wm.TypeDefinition", {}, {}, {
			ROWID: ["wm.TypeDefinitionField", {"fieldName":"ROWID","fieldType":"Number"}, {}],
			PAGEID: ["wm.TypeDefinitionField", {"fieldName":"PAGEID","fieldType":"Number"}, {}],
			PAGECOUNT: ["wm.TypeDefinitionField", {"fieldName":"PAGECOUNT","fieldType":"Number"}, {}],
			O2ASPID: ["wm.TypeDefinitionField", {"fieldName":"O2ASPID"}, {}],
			CODICE: ["wm.TypeDefinitionField", {"fieldName":"CODICE"}, {}],
			DENOMINAZIONE: ["wm.TypeDefinitionField", {"fieldName":"DENOMINAZIONE"}, {}],
			COD_ISTAT: ["wm.TypeDefinitionField", {"fieldName":"COD_ISTAT"}, {}],
			CAP: ["wm.TypeDefinitionField", {"fieldName":"CAP"}, {}],
			PREF_TELEFONICO: ["wm.TypeDefinitionField", {"fieldName":"PREF_TELEFONICO"}, {}],
			FLG_CAPOLUOGO: ["wm.TypeDefinitionField", {"fieldName":"FLG_CAPOLUOGO"}, {}],
			PROVINCIA: ["wm.TypeDefinitionField", {"fieldName":"PROVINCIA"}, {}],
			REGIONE: ["wm.TypeDefinitionField", {"fieldName":"REGIONE"}, {}],
			NAZIONE: ["wm.TypeDefinitionField", {"fieldName":"NAZIONE"}, {}],
			COD_CATASTALE: ["wm.TypeDefinitionField", {"fieldName":"COD_CATASTALE"}, {}],
			ABITANTI: ["wm.TypeDefinitionField", {"fieldName":"ABITANTI"}, {}],
			LINK: ["wm.TypeDefinitionField", {"fieldName":"LINK"}, {}]
		}], 
		giacenzeResponse: ["wm.TypeDefinition", {}, {}, {
			ROWID: ["wm.TypeDefinitionField", {"fieldName":"ROWID","fieldType":"Number"}, {}],
			PAGEID: ["wm.TypeDefinitionField", {"fieldName":"PAGEID","fieldType":"Number"}, {}],
			PAGECOUNT: ["wm.TypeDefinitionField", {"fieldName":"PAGECOUNT","fieldType":"Number"}, {}],
			O2ASPID: ["wm.TypeDefinitionField", {"fieldName":"O2ASPID"}, {}],
			COD_DEPOSITO: ["wm.TypeDefinitionField", {"fieldName":"COD_DEPOSITO"}, {}],
			COD_ART: ["wm.TypeDefinitionField", {"fieldName":"COD_ART"}, {}],
			GIACENZA_UM1: ["wm.TypeDefinitionField", {"fieldName":"GIACENZA_UM1"}, {}],
			ADATA: ["wm.TypeDefinitionField", {"fieldName":"ADATA"}, {}],
			ID_NEGOZIO: ["wm.TypeDefinitionField", {"fieldName":"ID_NEGOZIO"}, {}],
			DESCR_NEGOZIO: ["wm.TypeDefinitionField", {"fieldName":"DESCR_NEGOZIO"}, {}],
			LOCALITA: ["wm.TypeDefinitionField", {"fieldName":"LOCALITA"}, {}],
			PROVINCIA: ["wm.TypeDefinitionField", {"fieldName":"PROVINCIA"}, {}]
		}], 
		loginResponse: ["wm.TypeDefinition", {}, {}, {
			sessionName: ["wm.TypeDefinitionField", {"fieldName":"sessionName"}, {}],
			userName: ["wm.TypeDefinitionField", {"fieldName":"userName"}, {}],
			tokenStr: ["wm.TypeDefinitionField", {"fieldName":"tokenStr"}, {}],
			userArea: ["wm.TypeDefinitionField", {"fieldName":"userArea"}, {}],
			appName: ["wm.TypeDefinitionField", {"fieldName":"appName"}, {}],
			appTitle: ["wm.TypeDefinitionField", {"fieldName":"appTitle"}, {}],
			appCss: ["wm.TypeDefinitionField", {"fieldName":"appCss"}, {}]
		}], 
		provinceReadResponse: ["wm.TypeDefinition", {}, {}, {
			ROWID: ["wm.TypeDefinitionField", {"fieldName":"ROWID","fieldType":"Number"}, {}],
			PAGEID: ["wm.TypeDefinitionField", {"fieldName":"PAGEID","fieldType":"Number"}, {}],
			PAGECOUNT: ["wm.TypeDefinitionField", {"fieldName":"PAGECOUNT","fieldType":"Number"}, {}],
			O2ASPID: ["wm.TypeDefinitionField", {"fieldName":"O2ASPID"}, {}],
			CODICE: ["wm.TypeDefinitionField", {"fieldName":"CODICE"}, {}],
			DESCRIZIONE: ["wm.TypeDefinitionField", {"fieldName":"DESCRIZIONE"}, {}],
			COD_REGIONE: ["wm.TypeDefinitionField", {"fieldName":"COD_REGIONE"}, {}],
			COD_ZONA: ["wm.TypeDefinitionField", {"fieldName":"COD_ZONA"}, {}]
		}], 
		segmentoData: ["wm.TypeDefinition", {}, {}, {
			codice: ["wm.TypeDefinitionField", {"fieldName":"codice"}, {}]
		}], 
		tesseratoReadResponse: ["wm.TypeDefinition", {}, {}, {
			ROWID: ["wm.TypeDefinitionField", {"fieldName":"ROWID","fieldType":"Number"}, {}],
			PAGEID: ["wm.TypeDefinitionField", {"fieldName":"PAGEID","fieldType":"Number"}, {}],
			PAGECOUNT: ["wm.TypeDefinitionField", {"fieldName":"PAGECOUNT","fieldType":"Number"}, {}],
			O2ASPID: ["wm.TypeDefinitionField", {"fieldName":"O2ASPID"}, {}],
			CODICE: ["wm.TypeDefinitionField", {"fieldName":"CODICE"}, {}],
			GRUPPO: ["wm.TypeDefinitionField", {"fieldName":"GRUPPO"}, {}],
			COGNOME: ["wm.TypeDefinitionField", {"fieldName":"COGNOME"}, {}],
			NOME: ["wm.TypeDefinitionField", {"fieldName":"NOME"}, {}],
			INDIRIZZO: ["wm.TypeDefinitionField", {"fieldName":"INDIRIZZO"}, {}],
			CAP: ["wm.TypeDefinitionField", {"fieldName":"CAP"}, {}],
			COMUNE: ["wm.TypeDefinitionField", {"fieldName":"COMUNE"}, {}],
			PROV: ["wm.TypeDefinitionField", {"fieldName":"PROV"}, {}],
			CFISCALE: ["wm.TypeDefinitionField", {"fieldName":"CFISCALE"}, {}],
			TELEFONO: ["wm.TypeDefinitionField", {"fieldName":"TELEFONO"}, {}],
			CELLULARE: ["wm.TypeDefinitionField", {"fieldName":"CELLULARE"}, {}],
			DATANASCITA: ["wm.TypeDefinitionField", {"fieldName":"DATANASCITA"}, {}],
			EMAIL: ["wm.TypeDefinitionField", {"fieldName":"EMAIL"}, {}],
			TIPOCARD: ["wm.TypeDefinitionField", {"fieldName":"TIPOCARD"}, {}],
			DATAINI: ["wm.TypeDefinitionField", {"fieldName":"DATAINI"}, {}],
			DATAFINE: ["wm.TypeDefinitionField", {"fieldName":"DATAFINE"}, {}],
			CAT1: ["wm.TypeDefinitionField", {"fieldName":"CAT1"}, {}],
			CAT2: ["wm.TypeDefinitionField", {"fieldName":"CAT2"}, {}],
			CAT3: ["wm.TypeDefinitionField", {"fieldName":"CAT3"}, {}],
			CAT4: ["wm.TypeDefinitionField", {"fieldName":"CAT4"}, {}],
			CAT5: ["wm.TypeDefinitionField", {"fieldName":"CAT5"}, {}],
			CAT6: ["wm.TypeDefinitionField", {"fieldName":"CAT6"}, {}],
			CAT7: ["wm.TypeDefinitionField", {"fieldName":"CAT7"}, {}],
			CAT8: ["wm.TypeDefinitionField", {"fieldName":"CAT8"}, {}],
			CAT9: ["wm.TypeDefinitionField", {"fieldName":"CAT9"}, {}],
			CAT10: ["wm.TypeDefinitionField", {"fieldName":"CAT10"}, {}],
			CESSATA: ["wm.TypeDefinitionField", {"fieldName":"CESSATA"}, {}],
			DATAAGG_SC: ["wm.TypeDefinitionField", {"fieldName":"DATAAGG_SC"}, {}],
			ORAAGG_SC: ["wm.TypeDefinitionField", {"fieldName":"ORAAGG_SC"}, {}],
			VAL1: ["wm.TypeDefinitionField", {"fieldName":"VAL1"}, {}],
			VAL2: ["wm.TypeDefinitionField", {"fieldName":"VAL2"}, {}],
			VAL3: ["wm.TypeDefinitionField", {"fieldName":"VAL3"}, {}],
			VAL4: ["wm.TypeDefinitionField", {"fieldName":"VAL4"}, {}],
			VAL5: ["wm.TypeDefinitionField", {"fieldName":"VAL5"}, {}],
			VAL6: ["wm.TypeDefinitionField", {"fieldName":"VAL6"}, {}],
			VAL7: ["wm.TypeDefinitionField", {"fieldName":"VAL7"}, {}],
			SESSO: ["wm.TypeDefinitionField", {"fieldName":"SESSO"}, {}],
			ID_PROMOTER: ["wm.TypeDefinitionField", {"fieldName":"ID_PROMOTER"}, {}],
			TIPODOC: ["wm.TypeDefinitionField", {"fieldName":"TIPODOC"}, {}],
			NUMERODOC: ["wm.TypeDefinitionField", {"fieldName":"NUMERODOC"}, {}],
			SETTOREPROMO: ["wm.TypeDefinitionField", {"fieldName":"SETTOREPROMO"}, {}]
		}], 
		tesserato_creaResponse: ["wm.TypeDefinition", {}, {}, {
			status: ["wm.TypeDefinitionField", {"fieldName":"status"}, {}],
			errorCode: ["wm.TypeDefinitionField", {"fieldName":"errorCode"}, {}],
			message: ["wm.TypeDefinitionField", {"fieldName":"message"}, {}]
		}], 
		"enumera.readClienti": ["wm.XhrDefinition", {"parameters":{"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_anagrafiche_cli_for_R","hidden":true,"noEscape":false},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"Cliente","url":"http://2.228.76.239/enumerarpc.php"}, {}], 
		"granting.usersList": ["wm.XhrDefinition", {"parameters":{"prova":{"transmitType":"header","type":"String","defaultValue":"PROVA","hidden":true},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_users_R","hidden":true,"noEscape":false},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"nome":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"area":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"granting.usersListResponse","url":"http://localhost/wm_template/wm_template.php"}, {}], 
		"granting.usersUpdate": ["wm.XhrDefinition", {"parameters":{"":{"transmitType":"header","type":"String","defaultValue":"","hidden":true},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_users_U","hidden":true,"noEscape":false},"p_nomeutente":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"p_password":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"p_area":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"requestType":"POST","returnType":"Boolean","url":"http://localhost/wm_template/wm_template.php"}, {}], 
		articolo: ["wm.XhrDefinition", {"parameters":{"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_totem_articolo","hidden":true,"noEscape":false},"barcode":{"transmitType":"queryString","type":"String","defaultValue":"123","hidden":false,"noEscape":false},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"articoloResponse","url":"http://localhost/enumera/enumerarpc.php"}, {}], 
		comuniRead: ["wm.XhrDefinition", {"parameters":{"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_comuni_R","hidden":true,"noEscape":false},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cap":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"denominazione":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"comuniReadResponse","url":"http://localhost/enumera/enumerarpc.php"}, {}], 
		dialog1: ["wm.DesignableDialog", {"buttonBarId":"","containerWidgetId":"","desktopHeight":"300px","docked":true,"height":"300px","mobileHeight":"300px","modal":false,"showTitleButtonsWhenDocked":true,"title":"This is a dialog","width":"100%"}, {}], 
		giacenze: ["wm.XhrDefinition", {"parameters":{"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_totem_giacenze","hidden":true,"noEscape":false},"codart":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"giacenzeResponse","url":"http://localhost/enumera/enumerarpc.php"}, {}], 
		iscrizioneFicorre: ["wm.XhrDefinition", {"parameters":{"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_fidelity_ficorre","hidden":true,"noEscape":false},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cod_tessera":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"data_fine":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"taglia":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"tiporunner":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"assicurato":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"societa":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"scadenza_tesseramento":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"tesserato_creaResponse","url":"http://localhost/enumera/enumerarpc.php"}, {}], 
		login: ["wm.XhrDefinition", {"parameters":{"user":{"transmitType":"queryString","type":"String","defaultValue":"gb","hidden":false,"noEscape":false},"password":{"transmitType":"queryString","type":"String","defaultValue":"gb","hidden":false,"noEscape":false}},"returnType":"loginResponse","url":"http://2.228.76.239/enumerarpc.php"}, {}], 
		notificationError: ["wm.NotificationCall", {"operation":"toast"}, {}, {
			input: ["wm.ServiceInput", {"type":"toastInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"top right\"","targetProperty":"dialogPosition"}, {}],
					wire1: ["wm.Wire", {"expression":"\"Error\"","targetProperty":"cssClasses"}, {}]
				}]
			}]
		}], 
		provinceRead: ["wm.XhrDefinition", {"parameters":{"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_province_R","hidden":true,"noEscape":false},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"provinceReadResponse","url":"http://localhost/enumera/enumerarpc.php"}, {}], 
		serviceApp: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"login","service":"xhrService"}, {"onSuccess":"serviceAppSuccess"}, {
			input: ["wm.ServiceInput", {"type":"loginInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"[login].textUser.dataValue","targetProperty":"user"}, {}],
					wire1: ["wm.Wire", {"expression":undefined,"source":"[login].textPassword.dataValue","targetProperty":"password"}, {}]
				}]
			}]
		}], 
		serviceProvince: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"provinceRead","service":"xhrService"}, {}, {
			input: ["wm.ServiceInput", {"type":"provinceReadInputs"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"app.serviceApp.sessionName","targetProperty":"JXSESSNAME"}, {}]
				}]
			}]
		}], 
		tesseratoRead: ["wm.XhrDefinition", {"parameters":{"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_tesserati_R","hidden":true,"noEscape":false},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"email":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"codice":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"gruppo":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cognome":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"nome":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"datanascita":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"tesseratoReadResponse","url":"http://localhost/enumera/enumerarpc.php"}, {}], 
		tesserato_crea: ["wm.XhrDefinition", {"parameters":{"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_tesserati_C","hidden":true,"noEscape":false},"cognome":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"nome":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"gruppo":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"indirizzo":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cap":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"comune":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"prov":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cfiscale":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"telefono":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cellulare":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"datanascita":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"email":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"tipocard":{"transmitType":"queryString","type":"String","defaultValue":"13","hidden":true,"noEscape":false},"cat1":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cat2":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cat3":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cat4":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cat5":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cat6":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cat7":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cat8":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cat9":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cat10":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"tesserato_creaResponse","url":"http://localhost/enumera/enumerarpc.php"}, {}], 
		tesserato_modifica: ["wm.XhrDefinition", {"parameters":{"rpc_program":{"transmitType":"queryString","type":"String","defaultValue":"rpc_tesserato_U","hidden":true,"noEscape":false},"JXSESSNAME":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"indirizzo":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cap":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"comune":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"prov":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"cellulare":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false},"codice":{"transmitType":"queryString","type":"String","defaultValue":"","hidden":false,"noEscape":false}},"returnType":"tesseratoReadResponse","url":"http://localhost/enumera/enumerarpc.php"}, {}], 
		toastDialog: ["wm.Toast", {"border":"0","borderColor":"rgb(0,120,0)","content":"Your toast has popped up with a message indicating that you have finally been successful","corner":"tl","desktopHeight":"89px","duration":100000,"height":"89px","mobileHeight":"89px"}, {}], 
		varClienti: ["wm.Variable", {"isList":true,"json":"[{\"ROWID\":1,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"1\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"6.Società responsabilità limitata\",\"RAGIONE_SOC\":\"ALTEA S.R.L.\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Via Galileo Galilei, 36/B\",\"CAP\":\"95045\",\"CITTA\":\" MISTERBIANCO\",\"PROVINCIA\":\"CT\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"05031580870\",\"TELEFONO\":\"095/7557101\",\"FAX\":\"095/304971\",\"LINGUA\":\"0\",\"NOTE\":\"Nunzia per contabilità e ordini.\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"11-03-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":2,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"2\",\"TIPO\":\"Fornitore\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"I- INSTRUMENT CO. LTD.\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Rm 311, no.61 of Street33, Wende Road South, \",\"CAP\":\"\",\"CITTA\":\"YUEXIU DISCRICT, GUANGZHOU \",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"15\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"\",\"TELEFONO\":\"\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"11-03-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":3,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"3\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"AESSE CHIRURGICA SRL\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Via G. Giusti , 197\",\"CAP\":\"50041\",\"CITTA\":\" CALENZANO -FI-\",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"05149260480\",\"PARTITA_IVA\":\"05149260480\",\"TELEFONO\":\"0554251151\",\"FAX\":\"0554208732\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"info@aessechirurgica.it\",\"SITO_WEB\":\"www.aessechirurgica.it\",\"DATA_CREAZIONE\":\"11-03-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":4,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"4\",\"TIPO\":\"Fornitore\",\"TIPO_SOGGETTO\":\"2.Società semplice\",\"RAGIONE_SOC\":\"GOMMOS INTERNATIONAL\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"P.O. Gohadpur\",\"CAP\":\"\",\"CITTA\":\"SIALKOT PAKISTAN\",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"\",\"TELEFONO\":\"0092 52 4268004\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"14-03-2014\",\"USER_CREAZIONE\":\"root\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":5,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"5\",\"TIPO\":\"Fornitore\",\"TIPO_SOGGETTO\":\"6.Società responsabilità limitata\",\"RAGIONE_SOC\":\"MEDICAL DEVICE\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Via Artigianato, 6\",\"CAP\":\"52022\",\"CITTA\":\"MELETO - CAVRIGLIA\",\"PROVINCIA\":\"AR\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"04546220825\",\"TELEFONO\":\"055 9139149\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"17-03-2014\",\"USER_CREAZIONE\":\"root\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":6,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"6\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"CITTA\\\\' DELLA SALUTE S.C.R.L.\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Piazzale Donatello, 14\",\"CAP\":\"50132\",\"CITTA\":\"FIRENZE\",\"PROVINCIA\":\"FI\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"05915980485\",\"PARTITA_IVA\":\"05915980485\",\"TELEFONO\":\"055/5301507\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"AMMINISTRAZIONE PAGAMENTI SIG. FEDERIGHI 055/5301424 michele.federichi@lacittadellasalute.it\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"19-03-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":7,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"7\",\"TIPO\":\"Fornitore\",\"TIPO_SOGGETTO\":\"7.Società per azioni\",\"RAGIONE_SOC\":\"MONTEX SPA\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Via Meucci, 35\",\"CAP\":\"50041\",\"CITTA\":\"CALENZANO\",\"PROVINCIA\":\"FI\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"03235650482\",\"TELEFONO\":\"0558825498\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"19-03-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":8,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"8\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"2.Società semplice\",\"RAGIONE_SOC\":\"L.I.L.T. PRATO\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Via Catani, 26/3\",\"CAP\":\"59100\",\"CITTA\":\"PRATO\",\"PROVINCIA\":\"PO\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"01685160978\",\"PARTITA_IVA\":\"01685160978\",\"TELEFONO\":\"0574/572798\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"sig.ra chiara amministarzione 0574/572798 info@legatumoriprato.it\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"19-03-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":9,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"9\",\"TIPO\":\"Fornitore\",\"TIPO_SOGGETTO\":\"6.Società responsabilità limitata\",\"RAGIONE_SOC\":\"SURGIKA SRL\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Via 2 Giugno, 125\",\"CAP\":\"52025\",\"CITTA\":\"LEVANE\",\"PROVINCIA\":\"AR\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"01799470511\",\"TELEFONO\":\"0559180204\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"19-03-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":10,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"10\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"VILLA VERDE SRL\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Via Lelio Basso, 1\",\"CAP\":\"42123\",\"CITTA\":\"REGGIO EMILIA\",\"PROVINCIA\":\"RE\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"00294320353\",\"TELEFONO\":\"\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"19-03-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":11,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"11\",\"TIPO\":\"Fornitore\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"FRAGO INTERNATIONAL IMPEX\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Noragate Cantt Road\",\"CAP\":\"\",\"CITTA\":\"SIALKOT - PAKISTAN\",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"\",\"TELEFONO\":\"0092524587538\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"info@frago.com.pk\",\"SITO_WEB\":\"www.frago.com.pk\",\"DATA_CREAZIONE\":\"26-03-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":12,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"12\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"6.Società responsabilità limitata\",\"RAGIONE_SOC\":\"ALPHA TEK SRL\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Via Mattia Preti, 3\",\"CAP\":\"89123\",\"CITTA\":\"REGGIO CALABRIA\",\"PROVINCIA\":\"RC\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"01270510801\",\"PARTITA_IVA\":\"01270510801\",\"TELEFONO\":\"0965894294\",\"FAX\":\"0965311459\",\"LINGUA\":\"0\",\"NOTE\":\"SIG. DARIO FUSCO\\\\nPER CONTABILITA\\\\' SIG. CARMELO\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"26-03-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":13,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"13\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"HOSPITAL PICCOLE FIGLIE SRL\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"VIA PO, 1\",\"CAP\":\"43125\",\"CITTA\":\"PARMA\",\"PROVINCIA\":\"PR\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"02371460342\",\"PARTITA_IVA\":\"02371460342\",\"TELEFONO\":\"0521917711\",\"FAX\":\"0521969100\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"07-04-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":14,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"15\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"6.Società responsabilità limitata\",\"RAGIONE_SOC\":\"PROMEDICAL SRL\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Via del Redentore, 206\",\"CAP\":\"09042\",\"CITTA\":\"MONSERRATO\",\"PROVINCIA\":\"CA\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"03074340922\",\"TELEFONO\":\"3454213092\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"Manconi Massimo\\\\n\",\"GRUPPO\":\"\",\"EMAIL\":\"promedicalst@tiscali.it\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"17-04-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":15,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"16\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"ECO UNICA SRL\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"VIA ROMA, 58\",\"CAP\":\"50060\",\"CITTA\":\"LONDA\",\"PROVINCIA\":\"FI\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"06241280483\",\"TELEFONO\":\"\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"22-04-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":16,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"17\",\"TIPO\":\"Fornitore\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"INVIDIA MEDICAL GMBH & CO. KG\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Carl Benz Strasse 28 \",\"CAP\":\"D-78576\",\"CITTA\":\"EMMINGEN-LIPTINGEN/TUTTLINGEN\",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"1\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"DE270902654\",\"TELEFONO\":\"\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"03-05-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":17,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"18\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"MEDISCH SPECTRUM TWENTE\",\"RAG_SOC_SUPP\":\"CREDITEUREN ADMINISTRATIE\",\"INDIRIZZO\":\"POST BUS 50.000\",\"CAP\":\"7500 KA\",\"CITTA\":\"ENSCHEDE\",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"20\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"NL814360014B01\",\"TELEFONO\":\"\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"05-05-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":18,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"19\",\"TIPO\":\"Fornitore\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"SURGIMAX\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"P.O. BOX, 822 DEFENCE ROAD\",\"CAP\":\"\",\"CITTA\":\"SIALKOT, PAKISTAN\",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"\",\"TELEFONO\":\"\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"06-05-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":19,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"20\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"CASA DI CURA VILLA FIORITA S.R.L.\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"VIA DI CANTAGALLO, 56\",\"CAP\":\"59100\",\"CITTA\":\"PRATO\",\"PROVINCIA\":\"PO\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"84003870486\",\"PARTITA_IVA\":\"00336980974\",\"TELEFONO\":\"05744891103\",\"FAX\":\"05744891122\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"09-05-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":20,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"21\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"2.Società semplice\",\"RAGIONE_SOC\":\"QUARTA DR.SSA MICHELA\",\"RAG_SOC_SUPP\":\"MEDICO VETERINARIO\",\"INDIRIZZO\":\"\",\"CAP\":\"\",\"CITTA\":\"\",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"02517741209\",\"TELEFONO\":\"\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"michela.quarta@infinito.it\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"15-05-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":21,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"22\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"6.Società responsabilità limitata\",\"RAGIONE_SOC\":\"SURGICAL INSTRUMENTS TECHNOLOGY SRL\",\"RAG_SOC_SUPP\":\"ATT.NE SIG. INVERINIZZI\",\"INDIRIZZO\":\"Via di Tor Cervara, 258\",\"CAP\":\"00155\",\"CITTA\":\"ROMA\",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"10916551004\",\"TELEFONO\":\"062251223\",\"FAX\":\"062252505\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"15-05-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":22,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"23\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"CENTRO MEDICO CHIRURGICO ETRURIA\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Via Monteleone, 6\",\"CAP\":\"58100\",\"CITTA\":\"GROSSETO\",\"PROVINCIA\":\"GR\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"00940180532\",\"TELEFONO\":\"\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"CRISTINA BENEDETTI RESP. ORDINI\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"15-05-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":23,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"24\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"AELLE SURGERY SRL\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Via Raffaele Caravaglios, 33\",\"CAP\":\"80125\",\"CITTA\":\"NAPOLI\",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"05501461213\",\"TELEFONO\":\"0815930908\",\"FAX\":\"0816101637\",\"LINGUA\":\"0\",\"NOTE\":\"SIG. ATTILIO CAMALDO\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"26-05-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":24,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"25\",\"TIPO\":\"Fornitore\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"PHOENIX SRL\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"VIA L. DA VINCI 55\",\"CAP\":\"41038\",\"CITTA\":\"FIRENZE\",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"02501570366\",\"TELEFONO\":\"\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"09-06-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":25,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"26\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"ELLEBI MEDICAL SRL\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"59, Via Regina Margherita\",\"CAP\":\"89013\",\"CITTA\":\"GIOIA TAURO\",\"PROVINCIA\":\"RC\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"\",\"TELEFONO\":\"0966 57655\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"09-06-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":26,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"27\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"MEDIBERG SRL\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"VIA VEZZE, 16/18\",\"CAP\":\"24050\",\"CITTA\":\"CALCINATE\",\"PROVINCIA\":\"BG\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"01471280162\",\"TELEFONO\":\"0358854911\",\"FAX\":\"0354429074\",\"LINGUA\":\"0\",\"NOTE\":\"ANDREA PLEBANI\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"12-06-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":27,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"28\",\"TIPO\":\"Fornitore\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"PMI PEARL MELTING INDUSTRIES\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"1186-KOLLI LOHARON WEST\",\"CAP\":\"51310\",\"CITTA\":\"SIALKOT - PAKISTAN-\",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"\",\"TELEFONO\":\"+92-52-3532680\",\"FAX\":\"+92-52-3532705\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"Info@pearlmelting.com\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"12-06-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":28,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"29\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"ZARRA SIMONA \",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"VIALE UNGHERIA, 2\",\"CAP\":\"00041\",\"CITTA\":\"ALBANO LAZIALE\",\"PROVINCIA\":\"RM\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"\",\"TELEFONO\":\"\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"16-06-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":29,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"30\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"SIMONE GORI\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"VIA PANARO, 29\",\"CAP\":\"51031\",\"CITTA\":\"AGLIANA\",\"PROVINCIA\":\"PT\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"GROSMN79H01D612D\",\"PARTITA_IVA\":\"01741890477\",\"TELEFONO\":\"3455029114\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"18-06-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":30,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"31\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"6.Società responsabilità limitata\",\"RAGIONE_SOC\":\"NOVATEK SRL \",\"RAG_SOC_SUPP\":\"ATT.NE SIG. TORNATORE GIUSEPPE\",\"INDIRIZZO\":\"Via Convento del Carmine, 1\",\"CAP\":\"95030\",\"CITTA\":\"TRE MESTIERI ETNEO \",\"PROVINCIA\":\"CT\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"04767640875\",\"TELEFONO\":\"095 7415415\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"Sig. Tornatore Giuseppe\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"08-07-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":31,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"32\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"DEFARMA SPA\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"VIA VERGNANO 14\",\"CAP\":\"25125\",\"CITTA\":\"BRESCIA\",\"PROVINCIA\":\"BS\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"00367240173\",\"TELEFONO\":\"030/3544342\",\"FAX\":\"030/3544845\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"09-07-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":32,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"33\",\"TIPO\":\"Fornitore\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"MIQRAZ SURGICAL INDUSTRIES\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Airport Road, Tibbi Arayan, \",\"CAP\":\"\",\"CITTA\":\"P.O.BOX 1483 SIALKOT - PAKISTAN. \",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"\",\"TELEFONO\":\"0092-52-350701,  702 \",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"10-07-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":33,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"34\",\"TIPO\":\"Fornitore\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"MEDFLAIR INSTRUMENT CO. LTD\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"59-B, 61-B, Liaqat Ali Road, Small Industrial Estate, 51310\",\"CAP\":\"\",\"CITTA\":\"SIALKOT - PAKISTAN\",\"PROVINCIA\":\"\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"\",\"TELEFONO\":\"\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"Bilal Mughal\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"11-07-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":34,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"35\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"OPTARISTON OFTALMOLOGIA SRL\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"via modena, 26\",\"CAP\":\"00184\",\"CITTA\":\"ROMA\",\"PROVINCIA\":\"RM\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"03751551077\",\"TELEFONO\":\"06 4820700\",\"FAX\":\"06 4746379\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"14-07-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":35,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"36\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"1.Privato\",\"RAGIONE_SOC\":\"CLINICA VETERINARIA CROCE AZZURRA\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"PIAZZA MATTEOTTI, 44/A\",\"CAP\":\"50053\",\"CITTA\":\"EMPOLI\",\"PROVINCIA\":\"FI\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"\",\"PARTITA_IVA\":\"0402600488\",\"TELEFONO\":\"\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"CLIENTE DI GORI SIMONE\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"17-07-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100},{\"ROWID\":36,\"PAGEID\":1,\"PAGECOUNT\":1,\"O2ASPID\":\"SIME\",\"CODICE\":\"37\",\"TIPO\":\"Cliente\",\"TIPO_SOGGETTO\":\"9.Ditta individuale\",\"RAGIONE_SOC\":\"CAMIMAR DI RIZZO SIMONE\",\"RAG_SOC_SUPP\":\"\",\"INDIRIZZO\":\"Via Donizzetti, 72\",\"CAP\":\"50018\",\"CITTA\":\"SCANDICCI\",\"PROVINCIA\":\"FI\",\"STATO_ESTERO\":\"0\",\"CODICE_FISCALE\":\"RZZSMN69P23D612J\",\"PARTITA_IVA\":\"06465120480\",\"TELEFONO\":\"\",\"FAX\":\"\",\"LINGUA\":\"0\",\"NOTE\":\"\",\"GRUPPO\":\"\",\"EMAIL\":\"\",\"SITO_WEB\":\"\",\"DATA_CREAZIONE\":\"22-07-2014\",\"USER_CREAZIONE\":\"ilaria\",\"CLASSE_ANAGRAFICA\":\"\",\"ANNULLATO\":\"\",\"STATO_COMMERCIALE\":\"\",\"SALDO_CONTABILE\":100}]","type":"Cliente"}, {}], 
		variableAA: ["wm.Variable", {"isList":true,"json":"[]","type":"segmentoData"}, {}], 
		variableAAfuturi: ["wm.Variable", {"isList":true,"json":"[]","type":"segmentoData"}, {}], 
		variableGG: ["wm.Variable", {"isList":true,"json":"[]","type":"segmentoData"}, {}], 
		variableMM: ["wm.Variable", {"isList":true,"type":"segmentoData"}, {}]
	},
	_end: 0
});

enumeraTV.extend({
	serviceAppSuccess: function(inSender, inDeprecated) {
        
        if (this.serviceApp.getItem(0).getValue("sessionName") != null){
               main.loginPage.hide();
        }
        else {
            app.toastError("Login error");
        }
	},
	_end: 0
});
enumeraTV.prototype._css = 'html.WMApp body .labelTitoli {\
font-family: Arial, Helvetica, sans-serif;\
font-size: 18px;\
color: White;\
text-align: center;\
}\
html.WMApp body .buttonDefault {\
color: #ffffff;\
border: #46ca5e;\
background: #46ca5e;\
}\
';
