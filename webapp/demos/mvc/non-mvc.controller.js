sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function(Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("training1-app.demos.mvc.non-mvc", {

		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				sap.ui.core.UIComponent.getRouterFor(this).navTo("appHome", {}, true /*no history*/);
			}
		},
		
		onInit: function() {
		
		},
		
		calculateBonusDays: function() {
			
			// Tight coupling to the UI
			var input = this.getView().byId("inputYears");
			var label = this.getView().byId("labelDays");
			
			// Knowledge about the specific control and how to get its value
			var years = parseInt(input.getValue());
			var bonusDays = years * 0.5;
			label.setText(bonusDays);
		}

	});

});