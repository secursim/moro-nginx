sap.ui.define([], function () {
	"use strict";

	return {
		getUrl: function () {
			// return "/MOROCOLOR_HUB/";
			// return "https://morohubdevdng34zaaob.eu3.hana.ondemand.com/moro_hub/odata/";
			// return "http://java-app-quarkus.apps.poc-oc.poc.oc/moro_hub/odata/";
			var hostname = location.hostname;
			if (hostname.indexOf("webidetesting") > 0) {
				return "/MOROCOLOR_HUB/";
			} else {
				return "http://quarkus-sap-mes-gpa-sap-poc.apps.poc-oc.poc.oc/rest/";
			}
		}
	};
});