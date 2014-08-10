dojo.declare("Vendite", wm.Page, {
start: function() {
},
"preferredDevice": "tablet",
_end: 0
});

Vendite.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
layers1: ["wm.Layers", {}, {}, {
layerRicerca: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
fancyPanel2: ["wm.FancyPanel", {"height":"80px","innerLayoutKind":"left-to-right","title":"Filtri di ricerca"}, {}, {
altaLookupRcliente: ["wm.altamira.AltaLookup", {"caption":"Cliente","captionSize":"80px","dataType":"Cliente","desktopHeight":"35px","displayField":"RAGIONE_SOC","displayValue":"","height":"35px","width":"566px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.varClienti","targetProperty":"dataSet"}, {}]
}]
}],
dateRda: ["wm.Date", {"border":"0","caption":"Da data","captionSize":"80px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","width":"200px"}, {}],
dateRda1: ["wm.Date", {"border":"0","caption":"a data","captionSize":"60px","dataValue":undefined,"desktopHeight":"35px","displayValue":"","height":"35px","width":"200px"}, {}]
}],
list1: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"headerVisible":false,"height":"100%","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {}]
}],
layerTestata: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}],
layerRighe: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}]
}]
}]
};

Vendite.prototype._cssText = '';
Vendite.prototype._htmlText = '';