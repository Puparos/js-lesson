$(document).ready(function () {
   console.log('ready')
});
function login() {
    var username1=$("#firstInput").val();//by id
    var username2=$("input[name='username']");
    var form=$("form[name='userForm']").find(username2);
    form.val(username1);
}
function showPassword() {
    var inp=$("input[name='userpassword']").attr("type");
    var type=inp.attr("type");
    var btn=$("button[name='showPwd']");
    if (type ==="password") {
        inp.attr("type", "text");
        btn.text("скрыть пароль");
    }
    else

}