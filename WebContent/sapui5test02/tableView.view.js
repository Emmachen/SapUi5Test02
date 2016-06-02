sap.ui.jsview("sapui5test02.tableView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5test02.tableView
	*/ 
	getControllerName : function() {
		return "sapui5test02.tableView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5test02.tableView
	*/ 
	createContent : function(oController) {
		//var tableData = {"members":[{"fName":"jerry","lName":"wang","gender":"male"},{"fName":"vicky","lName":"chen","gender":"female"},{"fName":"sara","lName":"zhang","gender":"female"}]};
		var oModel = new sap.ui.model.json.JSONModel("sapui5test02/tableSampleData.json");
		var oTable = new sap.ui.table.Table({columns:[
			new sap.ui.table.Column({
				label:new sap.ui.commons.Label({text:"fullName"}),
				template:new sap.ui.commons.TextView({text:
					{
					parts:[
					       {path:"fName"},
					       {path:"lName"},
					       {path:"gender"}],
					formatter:function(fName,lName,gender){
						if(fName&&lName&&gender){
							if(gender == "male"){
								return "Mr "+fName+" "+lName;
							}else{
								return "Mis "+fName + " "+lName;
							}
						}else{return null;}							
					}
					}
				})
			}),
			new sap.ui.table.Column({
				label:new sap.ui.commons.Label({text:"firstName"}),
				template:new sap.ui.commons.TextView({text:"{fName}"})				
			}),
			new sap.ui.table.Column({
				label:new sap.ui.commons.Label({text:"lastName"}),
				template:new sap.ui.commons.TextView({text:"{lName}"})				
			})]
		});
	
	oTable.setModel(oModel);
	oTable.bindRows("/members");
	this.oTable = oTable;
	return oTable;
	}

});
