sap.ui.controller("sapui5test02.tableView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapui5test02.tableView
*/
	// added by Jerry 2016-06-02 - BEGIN
	onInit: function() {

		var oBus = sap.ui.getCore().getEventBus();
		oBus.subscribe("sapui5test02", "SelectionChanged",
				this.handleSectionChanged, this);
	},
	
	getOriginalData: function(){
		if( this._oTableOriginalData){
			return this._oTableOriginalData;
		}
		var oModel = new sap.ui.model.json.JSONModel();
		var that = this;
		oModel._ajax({
			  url: "sapui5test02/tableSampleData.json",
			  async: false,
			  dataType: 'json',
			  cache: true,
			  data: undefined,
			  headers: undefined,
			  type: "GET",
			  success: function(oData) {
				if (!oData) {
					jQuery.sap.log.fatal("The following problem occurred: No data was retrieved by service");
				}
				that._oTableOriginalData = oData.members;
			  },
			  error: function(XMLHttpRequest, textStatus, errorThrown){
				// TODO log error
			  }
			});
		return this._oTableOriginalData;
	},
	handleSectionChanged: function(sChannleId, sEventId, oEventData){
		this.filterTable(oEventData.selected);
	},
	
	filterTable: function(sSelectedFirstName){
		this.oView.oTable.getModel().setData(this.getFilteredJSONData(sSelectedFirstName));
	},
	
	getFilteredJSONData:function(sSelectedFirstName){
		var oldData = this.getOriginalData();
		if( sSelectedFirstName.trim() === ""){
			return {
				members: oldData
			};
		}
		var newData = {
			members: oldData.filter(function(currentValue,index,array){
				return currentValue.fName.toLowerCase() === this.sMatch;
			}, { sMatch: sSelectedFirstName.toLowerCase()})
		};
		return newData;

	}
	// added by Jerry 2016-06-02 - END

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapui5test02.tableView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapui5test02.tableView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapui5test02.tableView
*/
//	onExit: function() {
//
//	}

});