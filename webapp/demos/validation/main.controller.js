sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel",
	"training1-app/demos/validation/EmailType",
	"sap/m/MessageBox"
], function(Controller, History, JSONModel, EmailType, MessageBox) {
	"use strict";

	return Controller.extend("training1-app.demos.validation.main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf training1-app.demos.mvc.view.view
		 */
		onInit: function() {

			this.model = new JSONModel({
				email: null,
				name: null
			});

			this.getView().setModel(this.model);
			sap.ui.getCore().getMessageManager().registerObject(this.getView(), true);
		},

		onSubmit: function() {
			// collect input controls
			var oView = this.getView();
			var aInputs = [
				oView.byId("nameInput"),
				oView.byId("emailInput")
			];
			var bValidationError = false;

			// check that inputs are not empty
			// this does not happen during data binding as this is only triggered by changes
			jQuery.each(aInputs, function (i, oInput) {
				var oBinding = oInput.getBinding("value");
				try {
					oBinding.getType().validateValue(oInput.getValue());
					oInput.setValueState("None"); // clear any previous error state
				} catch (oException) {
					oInput.setValueState("Error");
					bValidationError = true;
				}
			});

			// output result
			if (bValidationError) {
				MessageBox.alert("A validation error has occured. Complete your input first");
			}	
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