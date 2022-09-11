function getDatahopital() {
  var username = document.getElementById("usernameloginH").value;
  var password = document.getElementById("passwordloginH").value;
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
        document.getElementById("usernameloginH").value = "";
        document.getElementById("passwordloginH").value = "";
        document.getElementById("exampleAnimatedloginH").style.display =
          "block";
        setTimeout(() => {
          document.getElementById("exampleAnimatedloginH").style.display =
            "none";
        }, 5000);
      } else {
        var result = response.json();
        console.log(result);
        document.getElementById("exampleAnimatedsuccessH").style.display =
          "block";
        document.getElementById("usernameloginH").value = "";
        document.getElementById("passwordloginH").value = "";
        setTimeout(() => {
          document.getElementById("exampleAnimatedsuccessH").style.display =
            "none";
          window.location.href = "indexp.html";
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
