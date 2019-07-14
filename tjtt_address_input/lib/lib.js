/**
 * Created by ntm on 2019/7/14.
 */

function onload() {
    var inputArray = document.getElementsByClassName("textField");
    console.log("length" + inputArray.length + inputArray[0]);
    console.log("yes:" + inputArray);
    var receiver = inputArray[0];
    var phoneNumber = inputArray[1];
    var address = inputArray[2];

    var confirm = document.getElementById("confirmBtn");

    confirm.onclick = function () {
        var string = "receiver:" +receiver.content + "phonenumber:" + phoneNumber.content + "address:" + address.content;
        alert(string);
    }
};

