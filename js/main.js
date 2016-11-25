var obj = {
    "row1": 2,
    "row2": true,
    "row3": "string",
    "test-1": 1,
    "row4": [],
    // "fnc": testFnc,
    // "fnc1": function (arg1) {
    //     console.log(arg1);
    // },
    "fnc5": true
};


document.addEventListener("DOMContentLoaded", function () {
    console.log("ready");

    var date = new Date();
    var currentDate = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDay(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };
    // console.log(date*1000);

    var array = [];


    // var res = array.reduce(function (sum, val) {
    //     sum += val;
    //     // console.log(val);
    //     return sum;
    // });
    // // console.log(res)

    for (var i = 0; i < 1000000; i++) {
        array.push(i);
        // console.log(obj[i]);
    }


    var startDate = new Date() * 1000;
    for (var i = 0; i < array.length; i++) {
        // array.push(i);
        // console.log(obj[i]);
    }
    var endDate = new Date() * 1000;
    // console.log({
    //     "startDate": startDate,
    //     "endDate": endDate,
    //     "arr": array,
    //     "result": endDate - startDate
    // });

    var newArry = [];
    var startForeach = new Date() * 1000;
    array.forEach(function (item, index, arr) {
        // newArry.push(item);
    });
    var endForeach = new Date() * 1000;
    // console.log({
    //     "startDate": startForeach,
    //     "endDate": endForeach,
    //     "arr": array,
    //     "result": endForeach - startForeach
    // });
    //
    var startForIn = new Date() * 1000;
    for (var i in array) {
        // console.log(obj[i]);
    }
    var endForIn = new Date() * 1000;
    // console.log({
    //     "startDate": startForIn,
    //     "endDate": endForIn,
    //     "arr": array,
    //     "result": endForIn - startForIn
    // });
    var i = 0;
    var startWhile = new Date() * 1000;
    while (i < array.length) {
        i++;
    }
    var endWhile = new Date() * 1000;


    var startDoWhile = new Date() * 1000;

    var i = 0;
    do {
        i++;
    }
    while (i < array.length);
    var endDoWhile = new Date() * 1000;
    console.log({
        "for": endDate - startDate,
        "foreach": endForeach - startForeach,
        "forIn": endForIn - startForIn,
        "while": endWhile - startWhile,
        "doWhile": endDoWhile - startDoWhile
    });


    // var startDate=new Date()*1000;

    // var endDate=new Date()*1000;


});


var arr = [];
var testVariable = "test";
var testVariable1 = 1.02;
var bool = true;
var array = ["string", 12321, true];
var varOfTestFunction = 4;

var testFnc = function (arg1) {
    console.log(arg1)
};


function test() {
    var varOfTestFunction = 1;
    // testFnc(varOfTestFunction);
    // alert(varOfTestFunction);
    // var arr=[];
    // arr.push(varOfTestFunction);
    // console.log(arr);
    // console.log(obj.row1);
    obj.fnc1(223213);
    // console.log();

}

var userData = {
    "login": "username",
    "password": "userpassword"
};

// function login() {
//     var username = document.getElementsByName("username")[0].value;
//     var password = document.getElementsByName("userpassword")[0].value;
//
//
//     if ((username === userData.login) && (password === userData.password)) {
//         alert("Авторизация прошла успешно");
//     }
//     else {
//         alert("Неправильный логин или пароль");
//     }
//
//     // var username = document.getElementById("username").value;
//     // var username = document.getElementsByName("username")[1].value;
//     // var username = document.getElementsByClassName("username")[0].value;
//     // var username = document.getElementsByTagName("input")[0].value;
//     // var form=document.getElementsByName("userForm")[0];
//     console.log({
//         "username": username,
//         "password": password
//     });
//
// }

function login() {
    var form = document.getElementsByName('userForm')[0];
    var elements = form.elements;
    console.log(elements);
    var username = elements[0].value;
    var password = elements[1].value;
    form.elements[0].attributes.style.nodeValue = "height: 90px";
    // var password=form.getElementsByName('password')[0].value;
    console.log({
        "username": username,
        "password": password
    });
}
function showPwd(input) {
    // console.log(input);
    var pwdField = document.getElementsByName('userpassword')[0];
    var btn = document.getElementsByName("showpwd")[0];
    if (pwdField.type === "password") {
        pwdField.type = "text";
        btn.textContent = "Скрыть пароль";
    }
    else {
        pwdField.type = "password";
        btn.textContent = "Показать пароль";
    }
    // pwdField.attributes.type.nodeValue="text";
}