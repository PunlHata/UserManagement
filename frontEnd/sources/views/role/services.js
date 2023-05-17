import axios from "axios";
import swal from 'sweetalert';
class services {
    onload = () => {
        this.onloadDataToTableRole();
        //Kiểm tra các thao tác trên các ô để bật các trạng thái thao tác của các nút
        $$('roleId').attachEvent('onChange', function(){
            if ($$('roleId').getValue() != '') {
                $$('clearRole').enable();
                $$('saveRole').enable();
                $$('isUse').enable()
                $$('deleteRole').enable();
            }
        });

        $$('roleName').attachEvent('onChange', function(){
            if ($$('roleName').getValue() != '') {
                $$('clearRole').enable();
                $$('saveRole').enable();
                $$('isUse').enable()
            }
        });
    }

    onloadDataToTableRole = async () =>{ 
        $$('tableRole').clearAll();
        // lấy dữu liệu từ api
        let {data: response} = await axios.get("http://localhost:2161/role-api/getAll");

        // >= Junior
        var convertObj = response.map(e =>{
            return {
                id: e.roleID,
                name: e.roleName,
                use: e.isUse
            }
        });
        // đổ dữ liệu vào bảng
        $$('tableRole').parse(convertObj);
    };
    // Đưa dữ liệu từ bảng vào form
    fillInForm = async (roleDetail) => {
        $$('roleId').setValue(roleDetail.id);
        $$('roleName').setValue(roleDetail.name);

        if (roleDetail.use == "Y") {
            $$('isUse').setValue(1);
        }
        else if (roleDetail.use == "N") {
            $$('isUse').setValue(0);
        }
    };
    // Nút clear
    clearForm = async () => {
        $$('roleId').setValue(null);
        $$('roleName').setValue(null);
        $$('isUse').setValue(null);
        // Sau khi xóa thì tắt trạng thái hoạt động
        $$('deleteRole').disable();
        $$('clearRole').disable();
        $$('saveRole').disable();
        $$('isUse').disable()
        
        this.onloadDataToTableRole();
    }
    // Nút save
    saveRole = async () => {
        let roleId = $$('roleId').getValue();
        let roleName = $$('roleName').getValue();
        let isUse = "N";     
        
        if ($$('isUse').getValue() == 1) {
            isUse = "Y";
        }
       
        // Kiểm tra lỗi form nếu không lỗi mới tiến hành call api
        if (roleName.trim().length == 0) {
            swal("Tên vai trò không được trống!", {
                icon: "error",
                buttons: false,
                timer: 2000,
            });
        }
        else {
            // Call api kết quả trả về TRUE nếu tiến hành cập nhật FALSE nếu tiến hành thêm role
            let {data : test} = await axios.post("http://localhost:2161/role-api/saveRole", {
                "roleID": roleId,
                "roleName": roleName,
                "isUse": isUse,
                "image": "",
                "description": ""
            });
            // Kiểm tra để đưa ra thông báo
            if (test) {
                swal("Đã cập nhật role!", {
                    icon: "success",
                    buttons: false,
                    timer: 2000,
                });
            }
            else {
                swal("Đã thêm role!", {
                    icon: "success",
                    buttons: false,
                    timer: 2000,
                });
            }
        }
        
        this.onloadDataToTableRole();
        this.clearForm();
    }
    // Nút delete 
    deleteRole = async () => {     
        let id = $$('roleId').getValue();

        await axios.delete("http://localhost:2161/role-api/deleteRoleById?roleId=" + id);

        swal("Đã xóa role!", {
            icon: "success",
            buttons: false,
            timer: 2000,
        });

        this.onloadDataToTableRole();
        this.clearForm();
    }
}
export default new services();
