/*********
Add custom widgets to your WaveMaker project

Adding an entry in this file will include the custom widget in every project you build.

Example:
dojo.require("wm.packages.example.Button");

This example will cause WaveMaker to load the file Button.js from the  directory <user_projects>/common/packages/custom

To use a custom widget only in a particular project, add the dojo.require() statement to the JavaScript start function for that project.

**********/

// Dojo module: wm.packages.custom.MenuLabel
// Defined in MenuLabel.js using dojo.provide();
// Custom widget directory path: <user_projects>\common\packages\custom
dojo.require("wm.packages.altamira.AltaGrid");
dojo.require("wm.packages.altamira.AltaLookup");
dojo.require("wm.packages.altamira.AltaButton");
dojo.require("wm.packages.altamira.AltaText");
dojo.require("wm.packages.altamira.AltaLabel");
