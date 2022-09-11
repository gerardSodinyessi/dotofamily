function postData() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  fetch("http://15.236.38.193:8000/api/auth/patient/", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        document.getElementById("ChargementId").style.display = "block";
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
      } else {
        var result = response.json();
        console.log(result);
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("ChargementId").style.display = "none";
        document.getElementById("exampleAnimated").style.display = "block";
        setTimeout(() => {
          document.getElementById("exampleAnimated").style.display = "none";
          window.location.href = "loginPatient.html";
        }, 9000);
      }
    })
    .catch(console.error);

  {
    /** fetch("http://15.236.38.193:8000/api/auth/patient/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
     body: JSON.stringify({
        email: "romaric@gmail.com",
        username: "rodriguel",
        password: "romaric1234",
      }),
    }).then(function (response) {
      if (response.ok) {
        console.log(response);
      }
    });*/
  }
}
