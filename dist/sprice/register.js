var usInput = document.querySelector('[name="user"]');
var form = document.querySelector('form')
usInput.onblur = function() {
    var username = document.querySelector('[name = "user"]').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `../api/checkuser.php?user=${username}`, true);

    xhr.onload = function() {
        if (this.status >= 200 && this.status < 300) {
            console.log(this.responseText);
            if (this.responseText === '存在') {
                document.querySelector('#cuo').style.display = 'block';
                document.querySelector('.btn').disabled = true;

            } else {
                document.querySelector('#cuo').style.display = 'block';
                document.querySelector('#cuo').innerHTML = '用户名可以使用'
                document.querySelector('.btn').disabled = false;
            }
        } else {
            console.error(this.status);
        }
    }
    xhr.send();
}

form.onsubmit = function(evt) {
    var username = document.querySelector('[name = "user"]').value;
    var pw = document.querySelector('[name = "passwd"]').value;
    evt.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('GEt', `../api/tianjia.php?user=${username}&passwd=${pw}`, true)
    xhr.onload = function() {
        if (this.status >= 200 && this.status < 300) {
            console.log(this.responseText)
            console.log(xhr.status)
            if (this.responseText === 'ok') {
                location.href = "./login.html"

            }
        } else {
            console.log(xhr.status)
        }
    }
    xhr.send();
}