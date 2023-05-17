import { JetView } from "webix-jet";
import "../../styles/user.css";
import services from "./services";

export default class loginFormView extends JetView {
    config() {
        return {
            cols: [
                {
                    view: "datatable",
                    id: "tableUser",
                    columns: [
                        {
                            id: "userId",
                            header: "ID",
                            editor: "text",
                            width: 100
                        },
                        {
                            id: "userName",
                            header: "Tên người dùng",
                            editor: "text",
                            width: 300
                        },
                        {
                            id: "userRole",
                            header: "Vai trò",
                            editor: "text",
                            width: 300
                        }
                    ],
                    resize: true,
                    autowidth: true,
                    autoheight: true,
                    select: true,
                    on: {
                        onItemClick: function (e) {
                            services.fillInForm(this.getItem(e));
                        }
                    }
                },
                {
                    view: "form",
                    name: "userForm",
                    id: "UserForm",
                    fillspace: true,
                    resize: true,
                    elementsConfig: {
                        labelPosition: "top"
                    },
                    elements: [
                        {
                            id: "tmp",
                            view: "template",
                            template: "<img src='/img/user/star.png'></img>",
                            width: 400,
                            height: 73

                        },
                        {
                            view: "text",
                            label: "ID",
                            id: "userIdF",
                            disabled: true
                        },
                        {
                            view: "text",
                            label: "Tên người dùng",
                            id: "userNameF"
                        },
                        {
                            view: "datepicker",
                            label: "Ngày sinh",
                            id: "userBirthDate",
                            format: "%d/%m/%Y"
                        },
                        {
                            view: "text",
                            label: "Địa chỉ",
                            id: "userAdr"
                        },
                        {
                            view: "text",
                            label: "Mail",
                            id: "userMail"
                        },
                        {
                            view: "text",
                            label: "Số điện thoại",
                            id: "userPhone"
                        },
                        {
                            view: "select",
                            label: "Vai trò",
                            id: "userRoleF",
                            options: [],
                            on: {
                                onAfterRender: function () {
                                    if (!this.config.loaded) {
                                        this.config.loaded = true;
                                        services.loadRole()
                                            .then(function (options) {
                                                console.log(options);
                                                $$('userRoleF').define('options', options);
                                                $$('userRoleF').refresh();
                                            });
                                    }
                                }
                            }
                        },
                        {
                            view: "switch",
                            label: "Hoạt động",
                            id: "userIsUse",
                            labelWidth: 60,
                            value: 0,
                            onLabel: "Y",
                            offLabel: "N",
                            disabled: true
                        },
                        {
                            cols: [
                                {
                                    view: "button",
                                    label: "Save",
                                    id: "saveUser",
                                    click: services.saveBtn,
                                    disabled: true
                                },
                                {
                                    view: "button",
                                    label: "Clear",
                                    id: "clearForm",
                                    click: services.clearBtn,
                                    disabled: true
                                },
                                {
                                    view: "button",
                                    label: "Delete",
                                    id: "deleteUser",
                                    click: services.deleteBtn,
                                    disabled: true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
    init() {
        services.onload();
    }
}