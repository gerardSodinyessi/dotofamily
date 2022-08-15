// function quitter mci modal
function quit() {
  $("#createGroup").modal("hide");
}
// function mettre à jour
document.getElementById("btn-primaryc").onclick = function () {
  setTimeout(() => {
    document.getElementById("update").style.display = "block";
    document.getElementById("btn-primaryc").style.display = "none";
    document.getElementById("createGroupTitle").style.display = "none";
    document.getElementById("createGroupTitleup").style.display = "block";
    $("#createGroup").modal("hide");
  }, 5000);
};

document.getElementById("btn-primaryquittergroup").onclick = function () {
  $("#createGrouppatiento").modal("hide");
};
// functin  voice call end
function voicecaleend() {
  document.getElementById("toutChatdoctorhide").style.display = "block";
  $("#incomingVideoCall").modal("hide");
  $(".bd-example-modal-lg").modal("hide");
}
//voice call function
function voiceCalling() {
  document.getElementById("toutChatdoctorhide").style.display = "none";
  $(".bd-example-modal-lg").modal({
    show: true,
    backdrop: "static",
    keyboard: false,
  });
  $("#incomingVoiceCall").modal("hide");
  console.log("ok les gars comment vas");
}
//exchange class
function exchangeclass() {
  $("#webcamip").removeClass("webcamipclassi");
  $("#webcamip").addClass("webcamipclass");
  $("#canvasad").removeClass("webcamipclass");
  $("#canvasad").addClass("webcamipclassi");
}

function exchangeclass2a() {
  $("#webcamip").removeClass("webcamipclass");
  $("#webcamip").addClass("webcamipclassi");
  $("#canvasad").removeClass("webcamipclassi");
  $("#canvasad").addClass("webcamipclass");
  console.log("pourquoi");
}

//appel video
function toutChatdoctorhide() {
  const webcamElement = document.getElementById("webcamip");
  const canvasElement = document.getElementById("canvasip");
  const snapSoundElement = document.getElementById("snapSoundip");
  const webcam = new Webcam(
    webcamElement,
    "user",
    canvasElement,
    snapSoundElement
  );

  webcam
    .start()
    .then((result) => {
      document.getElementById("toutChatdoctorhide").style.display = "none";
      $(".bda-example-modal-lg").modal({
        show: true,
        backdrop: "static",
        keyboard: false,
      });
      document.getElementById("material-icons3").onclick = function () {
        document.getElementById("toutChatdoctorhide").style.display = "block";
        $("#incomingVideoCall").modal("hide");
        $(".bda-example-modal-lg").modal("hide");
        webcam.stop();
      };
      console.log("webcam started");
    })
    .catch((err) => {
      console.log(err);
    });

  var picture = webcam.snap();

  webcam.stop();
}
//Cacher les boutons
function cacherLeboutonicon() {
  document.getElementById("material-icons2").style.display = "block";
  document.getElementById("material-icons1").style.display = "none";
  console.log("je suis et toi");
}

function cacherLebouton1() {
  document.getElementById("material-icons1").style.display = "block";
  document.getElementById("material-icons2").style.display = "none";
}

function cacherLeboutonA() {
  document.getElementById("material-icons5").style.display = "block";
  document.getElementById("material-icons4").style.display = "none";
  document.getElementById("webcamip2").style.display = "block";
  document.getElementById("webcambox").style.display = "none";
}

function cacherLebouton1A() {
  document.getElementById("material-icons4").style.display = "block";
  document.getElementById("material-icons5").style.display = "none";
  document.getElementById("webcambox").style.display = "block";
  document.getElementById("webcamip2").style.display = "none";
}

//Cacher les boutons du voice call
function cacherLeboutoniconcall() {
  document.getElementById("material-icons2call").style.display = "block";
  document.getElementById("material-icons1call").style.display = "none";
  console.log("je suis et toi");
}

function cacherLebouton1call() {
  document.getElementById("material-icons1call").style.display = "block";
  document.getElementById("material-icons2call").style.display = "none";
}

function cacherLeboutonAcall() {
  document.getElementById("material-icons5call").style.display = "block";
  document.getElementById("material-icons4call").style.display = "none";
}

function cacherLebouton1Acall() {
  document.getElementById("material-icons4call").style.display = "block";
  document.getElementById("material-icons5call").style.display = "none";
  document.getElementById("webcambox").style.display = "block";
  document.getElementById("webcamip2").style.display = "none";
}
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demoTimer").innerHTML =
    days + " d " + hours + " h " + minutes + " m " + seconds + " s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//function monTextEnvoieRDV
function envoyezRDV() {
  var datetime = document.getElementById("datetimelocal").value;
  msag = `<div class="chat-message-text">
							   <p>${datetime} <img src="assets/images/alarme.svg" alt=""></p>
							   </div>`;
  document.getElementById("monTextEnvoieRDV").innerHTML = msag;
}

function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
  setTimeout(() => {
    document.getElementById("numberNotification").style.display = "none";
  }, 1000);
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//function orderun
function orderuna() {
  document.getElementById("orderun").style.display = "none";
}

function orderunb() {
  document.getElementById("orderun").style.backgroundColor = "rgb(92, 94, 104)";
}

function orderunc() {
  $("#validationordonnance").modal({
    show: true,
    backdrop: "static",
    keyboard: false,
  });
}
//function test
function validationtesta() {
  document.getElementById("orderdeux").style.display = "none";
}

function validationtestb() {
  document.getElementById("orderdeux").style.backgroundColor =
    "rgb(92, 94, 104)";
}

function validationtestc() {
  $("#validationtest").modal({
    show: true,
    backdrop: "static",
    keyboard: false,
  });
}
//OpenTypeCycle
function AskTypeCycle() {
  $("#AskTypeCycle").modal({
    show: true,
    backdrop: true,
    keyboard: false,
  });
}
//function test
function validationtesttroisa() {
  document.getElementById("ordertrois").style.display = "none";
}

function validationtesttroisb() {
  document.getElementById("ordertrois").style.backgroundColor =
    "rgb(92, 94, 104)";
}
//function test
function validationtestquatrea() {
  document.getElementById("orderquatre").style.display = "none";
}

function validationtestquatreb() {
  document.getElementById("orderquatre").style.backgroundColor =
    "rgb(92, 94, 104)";
}
//function test
function validationtestcinqa() {
  document.getElementById("ordercinq").style.display = "none";
}

function validationtestcinqb() {
  document.getElementById("ordercinq").style.backgroundColor =
    "rgb(92, 94, 104)";
}
//function test
function validationtestsixa() {
  document.getElementById("ordersix").style.display = "none";
}

function validationtestsixb() {
  document.getElementById("ordersix").style.backgroundColor =
    "rgb(92, 94, 104)";
}
//function test
function validationtestsepta() {
  document.getElementById("ordersept").style.display = "none";
}

function validationtestseptb() {
  document.getElementById("ordersept").style.backgroundColor =
    "rgb(92, 94, 104)";
}
//function test
function validationtesthuita() {
  document.getElementById("orderhuit").style.display = "none";
}

function validationtesthuitb() {
  document.getElementById("orderhuit").style.backgroundColor =
    "rgb(92, 94, 104)";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
//commentLexamen
var myVar;

function commentLexamen() {
  myVar = setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("loader1").style.display = "block";
  document.getElementById("perfori").style.display = "none";
  $("#exampleModalstartexeme").modal("hide");
  setTimeout(() => {
    document.getElementById("loader1").style.display = "none";
    document.getElementById("perfori").style.display = "block";
  }, 6000);
}

var VideoPlanning = document.querySelectorAll(".openVideoPlanningDemo");
var VideoPlanningBlackVid = document.querySelectorAll(".displayBlackVid");
VideoPlanning.forEach((Q) => {
  Q.addEventListener("click", function () {
    $("#incomingVideoPlanning").modal({
      show: true,
      backdrop: true,
      keyboard: false,
    });
  });
});
