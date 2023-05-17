class services {

    account = [
        {
            userName: "AnhDev",
            passWord: "123"
        },
        {
            userName: "FengYang",
            passWord: "Thanh"
        }
    ];
    checkLogin = () =>{
        let inValUserName = $$("UserName").getValue();
        let inValUserPassWord = $$("Password").getValue();
        for (const acc of this.account) {
            if(acc.userName === inValUserName && acc.passWord === inValUserPassWord){
                return true;
            }
        }
        return false;
    };
    btnLogin_click = () => {
        if(this.checkLogin()){
            window.location.assign("http://localhost:8080/#!/top/user");
        } else {
        }
    }
}
export default new services();