// File: MenuLabel.js
// Custom widget directory path: <user_projects>\common\packages\custom
// Dojo module: wm.packages.custom.MenuLabel
// Dojo widget declared: wm.custom.MenuLabel
// Standard widgets directory path: <program file>\studio\lib\wm\base\widget


// Declare Dojo package name 
dojo.provide("wm.packages.custom.MenuLabel")

// Declare Dojo files to import, e.g., widgets that we depend on 
dojo.require("wm.base.widget.Label")

// Declare Dojo widget name. This widget extends the Label widget
dojo.declare("wm.custom.MenuLabel",wm.Label, {
	// initialize widget variables
	labelBackground: "black",
	labelColor: "white",
	labelBorder: "grey",
	hoverBackground: "grey",
	hoverColor: "black",
	hoverBorder: "white",

	// initialize widget. Use Dojo connect to link javascript events 
	init: function() {
		this.inherited(arguments);
		this.connect(this.domNode, "onmouseover", this, "wmOnMouseOver");
		this.connect(this.domNode, "onmouseout", this, "wmOnMouseOut");
	},

	// for each variable, the set method is called by WM studio to set property
	setLabelBackground: function(inLabelBackground) {
		this.labelBackground = inLabelBackground;
		this.render();
	},
	setLabelColor: function(inLabelColor) {
		this.labelColor = inLabelColor;
		this.render();
	},
	setLabelBorder: function(inLabelBorder) {
		this.labelBorder = inLabelBorder;
		this.render();
	},
	setHoverBackground: function(inHoverBackground) {
		this.hoverBackground = inHoverBackground;
		this.render();
	},
	setHoverColor: function(inHoverColor) {
		this.hoverColor = inHoverColor;
		this.render();
	},
	setHoverBorder: function(inHoverBorder) {
		this.hoverBorder = inHoverBorder;
		this.render();
	},

	// render invokes css styling changes, then calls parent render
	render: function() {
		var newStyle = this.domNode.style;
		newStyle.backgroundColor = this.labelBackground;
		newStyle.color = this.labelColor;
		newStyle.border = "1px solid " + this.labelBorder;
		this.inherited(arguments);
	},

	// On mouseover event, change widget styling to hover values
	wmOnMouseOver: function() {
		var newStyle = this.domNode.style;
		newStyle.backgroundColor = this.hoverBackground;
		newStyle.color = this.hoverColor;
		newStyle.border = "1px solid " + this.hoverBorder;
	},

	// On mouseout event, revert to normal widget styling
	wmOnMouseOut: function() {
		this.render();
	}
});

// Add attributes to show in the WaveMaker Studio properties editor
wm.Object.extendSchema(wm.custom.MenuLabel, { 
	// meta data for WaveMaker studio - data type, grouping, display order
	labelBackground: { type: "String", group: "display", order: 110 },
	labelColor: { type: "String", group: "display", order: 120 },
	labelBorder: { type: "String", group: "display", order: 130 },
	hoverBackground: { type: "String", group: "display", order: 140 },
	hoverColor: { type: "String", group: "display", order: 150 },
	hoverBorder: { type: "String", group: "display", order: 160 },
	// For menus, we do not want the link property of the label to be displayed
	link: { ignore: 1 }
});