$(document).ready(function () {
    console.log('ready');

});

function login() {
    var username1 = $("#firstInput").val(); //get value of 1-st input
    //by id
    var username2 = $("input[name='username']");
    var form = $("form[name='userForm']").find(username2);
    form.val(username1);

}

function showPwd() {
    var inp = $("input[name='userpassword']");
    var type = inp.attr("type");
    var btn = $("button[name='showpwd']");
    if (type === "password") {
        inp.attr("type", "text");
        btn.text("Скрыть пароль");
    }
    else {
        inp.attr("type", "password");
        btn.text("Показать пароль");
    }
    console.log(inp);
    // .attr("type")
}

// .append() - http://ruseller.com/jquery.php?id=28
// .before() - http://ruseller.com/jquery.php?id=35
// .addClass() - http://ruseller.com/jquery.php?id=19
// .removeClass() - http://ruseller.com/jquery.php?id=21
// .hasClass() - http://ruseller.com/jquery.php?id=20
// .attr() - http://ruseller.com/jquery.php?id=43
// .each() - http://jquerybook.ru/api/.each()-fn59.html