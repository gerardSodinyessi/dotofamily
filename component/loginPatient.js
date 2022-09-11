function getData() {
  var username = document.getElementById("usernamelogin").value;
  var password = document.getElementById("passwordlogin").value;
  fetch("http://15.236.38.193:8000/api/auth/login/", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        document.getElementById("usernamelogin").value = "";
        document.getElementById("passwordlogin").value = "";
        document.getElementById("exampleAnimatedlogin").style.display = "block";
        setTimeout(() => {
          document.getElementById("exampleAnimatedlogin").style.display =
            "none";
        }, 5000);
      } else {
        var result = response.json();
        console.log(result);
        document.getElementById("exampleAnimatedsuccess").style.display =
          "block";
        document.getElementById("usernamelogin").value = "";
        document.getElementById("passwordlogin").value = "";
        document.getElementById("exampleAnimatedsuccess").style.display =
          "block";
        setTimeout(() => {
          document.getElementById("exampleAnimatedsuccess").style.display =
            "none";
          window.location.href = "patient.html";
        }, 6000);
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
