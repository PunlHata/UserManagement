import { JetView } from "webix-jet";
import "../../styles/login_form.css";
import services from "./services";

export default class loginFormView extends JetView {
	config() {
		return {
			cols:[
                {
                    view: "datatable",
                    id: "tableRole",
                    columns:[
                        {
                            id: "id",
                            header: "ID",
                            editor: "text",
                            width: 300
                        },
                        {
                            id: "name",
                            header: "Tên vai trò",
                            editor: "text",
                            width: 300
                        },
                        {
                            id: "use",
                            header: "Hoạt động",
                            editor: "text",
                            width: 300
                        }
                    ],
                    resize: true,
                    autowidth: true,
                    autoheight: true,
                    select:true,
                    on:{
                        onItemClick: function(e) {
                            services.fillInForm(this.getItem(e));
                        }
                    }
                },
                {
                    view: "form",
                    name: "roleform",
                    id: "roleform",
                    fillspace: true,
                    resize: true,
                    elementsConfig:{
                        labelPosition: "top"
                    },
                    elements: [
                        {
                            view: "text",
                            label: "ID",
                            id: "roleId",
                            disabled: true
                        },
                        {
                            view: "text",
                            label: "Tên vai trò",
                            id: "roleName"
                        },
                        {
                            view: "switch",
                            label: "Hoạt động", 
                            id: "isUse",
                            labelWidth: 60,
                            value: 0,
                            onLabel: "Y",
                            offLabel: "N",
                            disabled: true
                        },
                        {
                            cols:[
                                {
                                    view: "button",
                                    label: "Save",
                                    id: "saveRole",
                                    click: services.saveRole,
                                    disabled: true                                            
                                },
                                {
                                    view: "button",
                                    label: "Clear",
                                    id: "clearRole",
                                    click: services.clearForm,
                                    disabled: true
                                },
                                {
                                    view: "button",
                                    label: "Delete",
                                    id: "deleteRole",
                                    click: services.deleteRole,
                                    disabled: true
                                }
                            ]
                        }
                    ]
                }
            ]
		};
	}
	init() {
        services.onload();
	}
}