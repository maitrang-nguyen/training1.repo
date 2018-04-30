sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("training1-app.controller.Home", {
		onMVCDemoPress: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("mvcDemo");
		},
		
		onNonMVCDemoPress: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("nonMvcDemo");
		},
		
		onModelDemoPress: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("modelDemo");
		},
		
		onBindingsDemoPress: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("bindingsDemo");
		},
		
		onModulesDemoPress: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("modulesDemo");
		},
		
		onValidationDemoPress: function() {
			sap.ui.core.UIComponent.getRouterFor(this).navTo("validationDemo");
		}
	});
});