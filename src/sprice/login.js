var form = document.querySelector('form');
form.onsubmit = function(evt) {
    evt.preventDefault();

    var username = document.querySelector('[name="user"]').value;
    var pw = document.querySelector('[name="passwd"]').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../api/denglu.php', true)

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var resp = JSON.parse(xhr.responseText)
            if (resp.success) {
                location.href = '../index.html'
            } else {
                document.querySelector('#cuo').style.display = 'block';
            }
        }
    }
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(`user=${username}&passwd=${pw}`);

}
}