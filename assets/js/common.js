const email = "VUVkRloyRklTbXhhYWpCcFlsZEdjR0pJVW5aUGJVWnJXVmN4UVZsWE5XNWlSMVYxV2tkV01rbHFOV2hhUjBaMFVVZEdkVm95ZUd4TWJWSnNaR3AzZGxsVU5EMD0=";
document.getElementById('show-email').addEventListener('click',function(event) {
  event.preventDefault();
  document.getElementById('email-contents').innerHTML = atob(atob(atob(email)));
});
