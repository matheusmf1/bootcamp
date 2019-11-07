document.getElementById('verifyForm').addEventListener('submit', (e) => {
  e.preventDefault();
  runCaptcha();
})

const runCaptcha = () => {

  grecaptcha.execute('6LfQhsEUAAAAAHDEZLdAba-Vv-x0VAQxBRGIlk16', {
    action: 'homepage'
  }).then(function (token) {
    //campos no form
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const captcha = token;

    sendData(firstName, lastName, captcha);
  });
}

const sendData = ((firstName, lastName, captcha) => {
  console.log('Passou2');
  const info = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    captcha: captcha
  });

  fetch('/verify', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: info
    }).then((res) => res.json())
    .then((data) => {
      alert('msg:' + data.msg + ', score: ' + data.score)
    });
});