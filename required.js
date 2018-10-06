document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});


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