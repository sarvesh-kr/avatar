// HCKME

window.onload =  function () {
    caller();
}

function caller() {
    textDiv();
    openButton();
}

function textDiv () {
    var text = document.createElement('div');
    text.id = 'text';
    document.querySelector("body").appendChild(text);


    var label = document.createElement('label');
    label.id = 'inText';
    label.innerHTML = 'ENTER YOUR NAME&nbsp;<sup>(.then click open)</sup><br>';
    document.querySelector("#text").appendChild(label);

    var textBox = document.createElement('input');
    textBox.id = 'userName';
    textBox.autofocus =true;
    textBox.placeholder = 'MINE IS HCKME';
    document.querySelector("#text").appendChild(textBox);
}

function openButton () {

    var buttonOpen = document.createElement('button');
    buttonOpen.id = 'buttonOpen';
    buttonOpen.innerHTML = 'Open';
    document.querySelector("body").appendChild(buttonOpen);
    buttonOpen.onclick = function () {
        openDiv();
    }
}

function closeDiv() {
    document.body.removeChild(inBody);
    caller();
}


function openDiv() {

    var userName = document.getElementById("userName").value;

    document.body.removeChild(text);
    document.body.removeChild(buttonOpen);

    var div = document.createElement('div');
    div.id = 'inBody';
    document.body.appendChild(div);

    var div1 = document.createElement('div');
    div1.id = 'inHead';
    div1.innerHTML = "<center><b>HCKME<b><sub>Avatar</sub></center>";
    document.querySelector("#inBody").appendChild(div1);

    var buttonClose = document.createElement('button');
    buttonClose.id = 'buttonClose';
    buttonClose.innerHTML = '🗴';
    document.querySelector("#inHead").appendChild(buttonClose);
    buttonClose.onclick = function () {
        closeDiv();
    }

    var div2 = document.createElement('div');
    div2.id = 'inScreen';
    document.querySelector("#inBody").appendChild(div2);
    div2.innerHTML += '&nbsp;Hi&nbsp;';
    div2.innerHTML += `${userName}`;
    div2.innerHTML += `,&nbsp;how's your day?<br>(Just right-click on it and save your AVATAR) <br> <img src="img.png" height="40%" width="40%" id="imgChange">`;
    if (userName!="") {
        document.getElementById("imgChange").src = `https://joeschmoe.io/api/v1/${userName}`;
    }
}