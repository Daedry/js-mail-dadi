//chiedere all'utente la mail

//creo una funzione per validare l'emil inserita
function validate() {
  const form = document.getElementById("form");
  const email = document.getElementById("email").value;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const emailUsers = [
    "mariorossi@gmail.com",
    "giacomopallino@gmail.com",
    "pincopalla@gmail.com",
    "luigibeneventi@gmail.com",
    "luca_pescatore@gmail.com",
  ];

  const listEmail = emailUsers.filter(function (mail) {
    return email === mail;
  });

  // controlla che sia nella lista di chi può accedere
  if (email.match(pattern) && email === listEmail[0]) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
  }
}
