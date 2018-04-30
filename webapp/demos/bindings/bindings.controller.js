sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function(Controller, History, JSONModel) {
	"use strict";

	return Controller.extend("training1-app.demos.bindings.bindings", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf training1-app.demos.mvc.view.view
		 */
		onInit: function() {

			this.model = new JSONModel({
				bonusDays: 10,
				bonusDays2: 0,
				date: new Date(),
				years: 10,
				companies: [{
					name: "Acme Inc.",
					city: "Belmont",
					state: "NH",
					county: "Belknap",
					revenue: "123214125.34"
				}, {
					name: "Beam Hdg.",
					city: "Hancock",
					state: "NH",
					county: "Belknap",
					revenue: "3235235235.23"
				}, {
					name: "Carot Ltd.",
					city: "Cheshire",
					state: "NH",
					county: "Sullivan",
					revenue: "Not Disclosed"
				}]
			});

			this.formModel = new JSONModel({
				personal: {
					name: "John The 1st",
					address: "Some address"
				},
				company: {
					name: "Company 1",
					address: "Some company address"
				}
			});

			this.getView().setModel(this.model);
			this.getView().setModel(this.formModel, "form");
		},
		
		dateFormatter: function(date) {
			return "formatted date - " + date.toString();
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf training1-app.demos.mvc.view.view
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf training1-app.demos.mvc.view.view
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf training1-app.demos.mvc.view.view
		 */
		//	onExit: function() {
		//
		//	}

		onNavBack: function(oEvent) {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				sap.ui.core.UIComponent.getRouterFor(this).navTo("appHome", {}, true /*no history*/ );
			}
		},

	});

});