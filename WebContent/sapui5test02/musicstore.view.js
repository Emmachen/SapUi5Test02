sap.ui.jsview("sapui5test02.musicstore", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5test02.musicstore
	*/ 
	getControllerName : function() {
		return "sapui5test02.musicstore";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5test02.musicstore
	*/ 
	createContent : function(oController) {
		//data
		//var data = {results:[{artistName:"Modonna",trackName:"Halo"}]};
		//searchField
		
		var oSearchField = new sap.ui.commons.SearchField({
			search:[oController.onSearch,oController]
		});		
		//var oMod = new sap.ui.model.json.JSONModel("song/content.json");
		
		// searchTerm = "vicky";
		jQuery.sap.require("sap.ui.model.FilterOperator");
		// load the file has to if no model set first!
		var oFilter = new sap.ui.model.Filter("artistName", sap.ui.model.FilterOperator.EQ, 'vicky');
		
		//table
		var oTable = new sap.ui.table.Table({
			rows:{
				path:"/results",
				sorter:new sap.ui.model.Sorter("artistName"),				
				filters:[oFilter]
			},
			rowSelectionChange:[oController.onSelectionChange,oController]
		});
		//oTable.setModel(oMod);
		//add columns
		oTable.addColumn(new sap.ui.table.Column({
			label:new sap.ui.commons.Label({text:"Cover"}),
			template:new sap.ui.commons.Image({src:"{artworkUrl130}"})
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label:new sap.ui.commons.Label({text:"Title"}),
			template:new sap.ui.commons.TextView({text:"{trackName}"})
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label:new sap.ui.commons.Label({text:"Artist Name"}),
			template:new sap.ui.commons.TextView({text:"{artistName}"})
		}));
		
		
		//layout
		var oLayout = new sap.ui.layout.VerticalLayout({
			width:"100%"
		});
		
		//add controls to layout
		oLayout.addContent(oSearchField);
		oLayout.addContent(oTable);
		return oLayout;
	}

});
