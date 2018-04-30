sap.ui.define([
    "sap/ui/base/Object"
], function (Object) {
    "use strict";

    var DaysCalculator = Object.extend("training1-app.demos.modules.DaysCalculator", {
        constructor: function (bonusDaysPerYear) {
            Object.call(this);

            if (!bonusDaysPerYear) {
                throw new Error("url is required");
            }
            
            this.bonusDaysPerYear = 1.5;
        }
    });

    DaysCalculator.prototype.getBonusDays = function (yearsInCompnay) {
        return yearsInCompnay * this.bonusDaysPerYear;
    };

    return DaysCalculator;
});