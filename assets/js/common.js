const email = "VUVkRloyRklTbXhhYWpCcFlsZEdjR0pJVW5aUGJYQm9Zekl4Y0dKdFZrRlpWelZ1WWtkVmRWcEhWakpKYWpWeFdWaE9kR0ZYTld4UlIwWjFXako0YkV4dFVteGthbmQyV1ZRMFBRPT0=";
document.getElementById('show-email').addEventListener('click',function(event) {
  event.preventDefault();
  document.getElementById('email-contents').innerHTML = atob(atob(atob(email)));
});
