sap.ui.controller("sapui5test02.musicstore", {
	//doSearch	
	doSearch:function(){
		
	},
//onSelectionChange
	onSelectionChange:function(){
		
	},
//onSearch
	onSearch:function(oEvent){
		//get the search value
		var searchTerm = oEvent.getParameter("query");
		return searchTerm;
		//how to do the seach??????
		//var oFilter = new sap.ui.model.Filter("artistName",sap.ui.model.FilterOperator.Contains,searchTerm);
		
		//var url = "http://itunes.apple.com/search?term=" + searchTerm +"&country=FR&media=music&entity=song&callback=?";
		//this.model.setData(data);
	},
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapui5test02.musicstore
*/
	onInit: function() {
		this.model = new sap.ui.model.json.JSONModel("song/content.json");
		this.getView().setModel(this.model);
		//var data = {results:[{artistName:"Modonna",trackName:"Halo"}]};
		this.model.setData("song/content.json");
		//this.model.setData("/content.json");
		//how to load the local json file
		//this.model.loadData("/SapUi5/resources/content.json",false);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapui5test02.musicstore
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapui5test02.musicstore
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapui5test02.musicstore
*/
//	onExit: function() {
//
//	}

});