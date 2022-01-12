sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                var userDetails = {
                    firstname: "Dummy",
                    lastname: "User",
                    email: "dummy.user@com",
                    name: "dummy.user@com",
                    displayName: "Dummy User (dummy.user@com)"
                };
                if (sap.ushell) {
                    var userInfo = sap.ushell.Container.getService("UserInfo");
                    userDetails.firstname = userInfo.getFirstName();
                    userDetails.lastname = userInfo.getLastName();
                    userDetails.email = userInfo.getEmail();
                    userDetails.name = userDetails.firstname + " " + userDetails.lastname;
                    userDetails.displayName = userInfo.getId();
                }
                this.getView().setModel(new JSONModel(userDetails), "userInfo");
                // var oModel = new JSONModel();
                // var mock = {
                //     firstname: "Dummy",
                //     lastname: "User",
                //     email: "dummy.user@com",
                //     name: "dummy.user@com",
                //     displayName: "Dummy User (dummy.user@com)"
                // };
                // oModel.loadData(this.getBaseURL() + "/user-api/currentUser");
                // oModel.dataLoaded()
                //     .then(() => {
                //         if (!oModel.getData().email) {
                //             oModel.setData(mock);
                //         }
                //         this.getView().setModel(oModel, "userInfo");
                //     })
                //     .catch(() => {
                //         oModel.setData(mock);
                //         this.getView().setModel(oModel, "userInfo");
                //     });
            },

            // getBaseURL: function () {
            //     var appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
            //     var appPath = appId.replaceAll(".", "/");
            //     var appModulePath = jQuery.sap.getModulePath(appPath);
            //     return appModulePath;
            // }
        });
    });
