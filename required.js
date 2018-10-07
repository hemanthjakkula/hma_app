document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});

//for login
var login = function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'bob' && password === 'secret') {
    //ons.notification.alert('Congratulations!');
    window.location.href = "index.html";
  } else {
    ons.notification.alert('Incorrect username or password.');
  }
};

//for dropdown
function editSelects(event) {
  document.getElementById('choose-sel').removeAttribute('modifier');
  if (event.target.value == 'material' || event.target.value == 'underbar') {
    document.getElementById('choose-sel').setAttribute('modifier', event.target.value);
  }
}
function addOption(event) {
  const option = document.createElement('option');
  var text = document.getElementById('optionLabel').value;
  option.innerText = text;
  text = '';
  document.getElementById('dynamic-sel').appendChild(option);
}