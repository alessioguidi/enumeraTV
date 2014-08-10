/*********
Add custom widgets to the WaveMaker Studio palette

The format of an entry is:
[ Tab, Name, Class, Module, Image ]
Tab: which palette accordian tab to put this widget into
Name: name to display in palette accordian
Class: Dojo name of custom widget (defined using dojo.declare())
Module: file name containing Dojo definition for widget (defined using dojo.provide())
Image: path to custom image for this widget (located under program files dir)

Example
[ "Example", "Example Button", "wm.example.Button", "wm.packages.example.Button", "images/wm/button.png", "A custom widget example"]

Add commas between each custom widgets entry, but not after the last entry.
*********/

[ "Altamira","Altamira Grid","wm.altamira.AltaGrid","wm.packages.altamira.AltaGrid", "", ""],
[ "Altamira","Altamira Lookup","wm.altamira.AltaLookup","wm.packages.altamira.AltaLookup", "", ""],
[ "Altamira","Altamira Button","wm.altamira.AltaButton","wm.packages.altamira.AltaButton", "", ""],
[ "Altamira","Altamira Text","wm.altamira.AltaText","wm.packages.altamira.AltaText", "", ""],
[ "Altamira","Altamira Label","wm.altamira.AltaLabel","wm.packages.altamira.AltaLabel", "", ""]
