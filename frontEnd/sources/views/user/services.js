import axios from "axios";
import swal from 'sweetalert';
class services {
    onload = () => {    
        this.onLoadDataToTableUser();
        //Bắt sự kiện onchange
        {
        $$('userNameF').attachEvent('onChange', function () {
            $$('clearForm').enable();
            $$('userIsUse').enable();  
            $$('saveUser').enable();
        });
        $$('userBirthDate').attachEvent('onChange', function () {
            $$('clearForm').enable();
            $$('userIsUse').enable();  
            $$('saveUser').enable();
        });
        $$('userAdr').attachEvent('onChange', function () {
            $$('clearForm').enable();
            $$('userIsUse').enable();  
            $$('saveUser').enable();
        });
        $$('userMail').attachEvent('onChange', function () {
            $$('clearForm').enable();
            $$('userIsUse').enable();  
            $$('saveUser').enable();
        });
        $$('userPhone').attachEvent('onChange', function () {
            $$('clearForm').enable();
            $$('userIsUse').enable();  
            $$('saveUser').enable();
        });
        $$('userRoleF').attachEvent('onChange', function () {
            $$('clearForm').enable();
            $$('userIsUse').enable();  
            $$('saveUser').enable();
        });
        $$('userIsUse').attachEvent('onChange', function () {
            $$('clearForm').enable();
            $$('userIsUse').enable();  
            $$('saveUser').enable();
        });
        }
    }
    onLoadDataToTableUser = async () => {
        $$('tableUser').clearAll();

        let {data : respone} = await axios.get("http://localhost:2161/user-api/getAll");

        let convertObj = respone.map(e => {
            return {
                userId: e.idUser,
                userName: e.nameUser,
                userRole: e.roleName,
                userBirthDate: e.date,
                userAdr: e.adr,
                userMail: e.email,
                userPhone: e.phone,
                userIsUse: e.isUse,
                roleId: e.roleId
            }
        })

        $$('tableUser').parse(convertObj);
    }

    fillInForm = (e) => {
        this.clearBtn();

        $$('userIdF').setValue(e.userId);
        $$('userNameF').setValue(e.userName);
        $$('userBirthDate').setValue(e.userBirthDate);
        $$('userAdr').setValue(e.userAdr);
        $$('userMail').setValue(e.userMail);
        $$('userPhone').setValue(e.userPhone);
        $$('userRoleF').setValue(e.roleId);

        

        if (e.userIsUse == "Y") {
            $$('userIsUse').setValue(1);
        }
        else if (e.userIsUse == "N") {
            $$('userIsUse').setValue(0);
        }

        $$('tmp').setHTML("<img src='/img/user/" + e.userRole + ".png'></img>");

        $$('deleteUser').enable();
        $$('clearForm').enable();
        $$('userIsUse').enable();    
    }

    clearBtn = () => {
        $$('userIdF').setValue(null);
        $$('userNameF').setValue(null);
        $$('userBirthDate').setValue(null);
        $$('userAdr').setValue(null);
        $$('userMail').setValue(null);
        $$('userPhone').setValue(null);
        $$('userRoleF').setValue(null);
        $$('userIsUse').setValue(0);
        $$('tmp').setHTML("<img src='/img/user/star.png'></img>");

        $$('deleteUser').disable();
        $$('clearForm').disable();
        $$('userIsUse').disable();   
        $$('saveUser').disable();
    }

    deleteBtn = async () => {
        let id = $$('userIdF').getValue();
        
        swal({
            title: "Có chắc muốn xóa?",
            text: "Khi xóa sẽ không thể khôi phục được.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then(async (willDelete) => {
            if (willDelete) {
                await axios.delete("http://localhost:2161/user-api/deleteUserById?userId=" + id);
                swal("Đã xóa", {
                    icon: "success",
                    timer: 2000,
                    button: false
                });
                this.onLoadDataToTableUser();
            } 
            else {
                swal("Hủy xóa", {
                    icon: "success",
                    timer: 2000,
                    button: false
                });
            }
        });

        this.clearBtn();
    }

    saveBtn = async () => {
        let isUseTmp;

        if ($$('userIsUse').getValue() == 1) {
            isUseTmp = "Y";
        }
        else if ($$('userIsUse').getValue() == 0) {
            isUseTmp = "N";
        }

        let date = $$('userBirthDate').getValue();
        let dateD = date.getDate();
        let dateM = date.getMonth() + 1;
        let dateY = date.getFullYear();
        let dateA = "";
        if (dateM < 10) {
            dateA = dateA + dateY+ "-0" + dateM + "-" + dateD;
        }
        else {
            dateA = dateA + dateY+ "-" + dateM + "-" + dateD;
        }

        console.log(dateA);

        let userId = $$('userIdF').getValue();
        let userName = $$('userNameF').getValue();
        let userAdr = $$('userAdr').getValue();
        let userMail = $$('userMail').getValue();
        let userPhone = $$('userPhone').getValue();
        let roleId = $$('userRoleF').getValue();;

        let {data : test} = await axios.post("http://localhost:2161/user-api/saveUser", {
            "idUser":  userId,
            "nameUser": userName,
            "adr": userAdr,
            "email": userMail,
            "phone": userPhone,
            "image": "m",
            "date": dateA,
            "isUse": isUseTmp,
            "roleId": roleId
        });

        if (test) {
            swal("Thêm thành công", {
                icon: "success",
                timer: 2000,
                button: false
            });
        }
        else {
            swal("Cập nhật thành công", {
                icon: "success",
                timer: 2000,
                button: false
            });
        }

        this.onLoadDataToTableUser();
        this.clearBtn();
    }

    loadRole = async () =>{ 
        return await axios.get("http://localhost:2161/role-api/getRoleByIsUse")
        .then(function(response) {
            var options = response.data.map(function(item) {
                return { id: item.roleID, value: item.roleName };
            });
            options.unshift({id: 0, value: ""});
            return options;
        });
    }
}
export default new services();
