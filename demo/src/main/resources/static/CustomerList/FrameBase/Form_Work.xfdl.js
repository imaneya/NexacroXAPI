(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(890,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCustomers", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"4\"/><Column id=\"name\" type=\"STRING\" size=\"16\"/><Column id=\"email\" type=\"STRING\" size=\"32\"/><Column id=\"phone\" type=\"STRING\" size=\"16\"/><Column id=\"comp_name\" type=\"STRING\" size=\"32\"/><Column id=\"department\" type=\"STRING\" size=\"32\"/><Column id=\"comp_phone\" type=\"STRING\" size=\"16\"/><Column id=\"comp_addr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDepartment", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"32\"/><Column id=\"value\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">Boardroom</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">Accounting</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">Personal</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">Human resources</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">Sales</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">Marketing</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">Engineering</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sttList","20","18","715","53",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Customer List Search");
            obj.set_font("bold 20px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Div("divCommand","17","71","854","83",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("#fff");
            obj.set_border("1px solid lightgray");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearch","16","15","566","50",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("0");
            this.divCommand.addChild(obj.name, obj);

            obj = new Button("btnSearch","592","19","64","46",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("1");
            obj.set_text("Search");
            this.divCommand.addChild(obj.name, obj);

            obj = new Button("btnSaveList","668","20","64","46",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("2");
            obj.set_text("Save");
            this.divCommand.addChild(obj.name, obj);

            obj = new Button("btnInitdata","747","20","64","46",null,null,null,null,null,null,this.divCommand.form);
            obj.set_taborder("3");
            obj.set_text("Initdata");
            this.divCommand.addChild(obj.name, obj);

            obj = new Grid("grdCustomers","20","181","852","295",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsCustomers");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"320\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"ID\"/><Cell col=\"1\" rowspan=\"2\" text=\"Name\"/><Cell col=\"2\" text=\"Email\"/><Cell col=\"3\" text=\"Company\"/><Cell row=\"1\" col=\"2\" text=\"Phone\"/><Cell row=\"1\" col=\"3\" text=\"Department\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:id\" textAlign=\"center\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:name\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:email\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:comp_name\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"bind:phone\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"bind:department\" displaytype=\"combotext\" combodataset=\"dsDepartment\" combocodecol=\"code\" combodatacol=\"value\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCommand.form
            obj = new Layout("default","",0,0,this.divCommand.form,function(p){});
            this.divCommand.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",890,490,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        // this.divCommand_btnSearch_onclick = function(obj:nexacro.Button,  e:nexacro.ClickEventInfo)
        // {
        //
        //      var id = "search";
        //      var url = "http://localhost:8080/CustomerList/sample.xml";
        //      var reqDs = "";
        //      var respDs = "dsCustomers=customers";
        //      var args = "";
        //      var callback = "received";
        //
        //      this.transaction(id, url, reqDs, respDs, args, callback);
        // }

        this.divCommand_btnSearch_onclick = function(obj,  e)
        {
             var id = "search";
             var url = "SvcList::search";
             var reqDs = "";
             var respDs = "dsCustomers=customers";
             var args = "";
             var callback = "search_received";

             this.transaction(id, url, reqDs, respDs, args, callback);
        }

        this.search_received = function(id, code, message)
        {
             if (code == 0) {
                var rowcount = this.dsCustomers.rowcount;
                this.alert(rowcount + " numbers of data have been found.");
                trace(rowcount + " numbers of data have been found.");
             } else {
                  this.alert("Error["+code+"]:"+message);
                  trace("Error["+code+"]:"+message);
             }
        }

        this.divCommand_btnInitdata_onclick = function(obj,e)
        {
             var id = "initdata";
             var url = "SvcList::initdata";
             var reqDs = "";
             var respDs = "";
             var args = "";
             var callback = "initdata_received";

             this.transaction(id, url, reqDs, respDs, args, callback);
        };

        this.initdata_received = function(id, code, message)
        {
             if (code == 0) {
                  this.alert(message);
                  trace(message);
             } else {
                  this.alert("Error["+code+"]:"+message);
                  trace("Error["+code+"]:"+message);
             }
        }

        this.divCommand_btnSaveList_onclick = function(obj,  e)
        {
             var id = "save_list";
             var url = "SvcList::save_list";
             var reqDs = "customers=dsCustomers";
             var respDs = "";
             var args = "";
             var callback = "save_list_received";

             this.transaction(id, url, reqDs, respDs, args, callback);
        }

        this.save_list_received = function(id, code, message)
        {
             if (code == 0) {
                  this.alert(message);
                  trace(message);
             } else {
                  this.alert("Error["+code+"]:"+message);
                  trace("Error["+code+"]:"+message);
             }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.Form_Work_onclick,this);
            this.divCommand.form.btnSearch.addEventHandler("onclick",this.divCommand_btnSearch_onclick,this);
            this.divCommand.form.btnSaveList.addEventHandler("onclick",this.divCommand_btnSaveList_onclick,this);
            this.divCommand.form.btnInitdata.addEventHandler("onclick",this.divCommand_btnInitdata_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
