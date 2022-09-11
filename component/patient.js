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

//OpenModalImagePlanning
function OpenModalImagePlanning() {
  $("#OpenModalImagePlanningId").modal({
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
// OpenIno
function mobilecheck() {
  if (
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    console.log("je dois le faire");
    return true;
  } else {
    console.log("je faire");
    return false;
  }
}
/////

var VideoPlanning = document.querySelectorAll(".openVideoPlanningDemo");
VideoPlanning.forEach((Q) => {
  Q.addEventListener("click", function () {
    $("#incomingVideoPlanning").modal({
      show: true,
      backdrop: false,
      keyboard: false,
    });

    const objeta = [
      {
        id: "userA",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViA" autoplay><source src="assets/images/les-pilules-contraceptives-orales.mp4" type="video/mp4"></video>',
      },
      {
        id: "userB",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViB" autoplay><source src="assets/images/les-pilules-contraceptives-orales.mp4" type="video/mp4"></video>',
      },
      {
        id: "userC",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViC" autoplay><source src="assets/images/les-injectables.mp4" type="video/mp4"></video>',
      },
      {
        id: "userD",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViD" autoplay><source src="assets/images/les-implants.mp4" type="video/mp4"></video>',
      },
      {
        id: "userE",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViE" autoplay><source src="assets/images/les-DUI.mp4" type="video/mp4"></video>',
      },
      {
        id: "userF",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViF" autoplay><source src="assets/images/les-préservatifs.mp4" type="video/mp4"></video>',
      },
      {
        id: "userG",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViG" autoplay><source src="assets/images/video.mp4" type="video/mp4"></video>',
      },
      {
        id: "userH",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViH" autoplay><source src="assets/images/maternel _ Allaitement.mp4" type="video/mp4"></video>',
      },
      {
        id: "userI",
        balise:
          '<video width="210" controls class="displayBlackVid"  id="StokageDesViI"autoplay><source src="assets/images/video.mp4" type="video/mp4"></video>',
      },
    ];
    const index = objeta.findIndex((element, index) => {
      var ttableVido = [];
      if (Q.id === element.id) {
        var createUnNouveauP = document.getElementById("displayBlackVid##");
        ttableVido.push(element.balise);
        createUnNouveauP.innerHTML = ttableVido[0];
        console.log(createUnNouveauP);
        document
          .getElementById("displayBlackVidClose")
          .addEventListener("click", function (id) {
            element.balise.id;
            $("#incomingVideoPlanning").modal("hide");
            console.log(ttableVido);
          });
      }
    });
  });
});

//function show audio planning
var allPharmacyIdVar = document.querySelectorAll(".showAudioPlanning");
allPharmacyIdVar.forEach((xid) => {
  xid.addEventListener("click", function () {
    document.getElementById("button-addonmic").style.display = "block";
    console.log(xid.id);
    const objetaAudio = [
      {
        id: "chat-first-tab",
        balise: `<p></p>`,
        title: `Améliorer votre santé`,
      },
      {
        id: "chat-fourtinth-tab",
        balise: `<audio controls><source src="assets/audioPlannings/Méthodescontraceptionhormonale.mp3" type="audio/mpeg"></audio>`,
        title: `Les méthodes contraceptives hormonales `,
      },
      {
        id: "chat-third-tab",
        balise: `<audio controls><source src="assets/audioPlannings/pilules contraceptives orales.mp3" type="audio/mpeg"></audio>`,
        title: `Les pilules contraceptives orales `,
      },
      {
        id: "chat-fourth-tab",
        balise: `<audio controls><source src="assets/audioPlannings/contraceptivesinjectables .mp3" type="audio/mpeg"></audio>`,
        title: `Les contraceptifs injectables`,
      },
      {
        id: "chat-fifth-tab",
        balise: `<audio controls><source src="assets/audioPlannings/implantscontraceptifs.mp3" type="audio/mpeg"></audio>`,
        title: `Les implants contraceptifs`,
      },
      {
        id: "chat-seventh-tab",
        balise: `<audio controls><source src="assets/audioPlannings/DIU.mp3" type="audio/mpeg"></audio>`,
        title: `Les dispositifs intra-utérins (DIU)`,
      },
      {
        id: "chat-eighth-tab",
        balise: `<audio controls><source src="assets/audioPlannings/méthodesdebarrière .mp3" type="audio/mpeg"></audio>`,
        title: `Les méthodes de barrière`,
      },
      {
        id: "chat-ninth-tab",
        balise: `<audio controls><source src="assets/audioPlannings/méthodesdeconnaissancede.mp3" type="audio/mpeg"></audio>`,
        title: `Les méthodes de connaissance de la fécondité`,
      },
      {
        id: "chat-tenth-tab",
        balise: `<audio controls><source src="assets/audioPlannings/Allaitementausein.mp3" type="audio/mpeg"></audio>`,
        title: `L’allaitement au sein`,
      },
      {
        id: "chat-eleventh-tab",
        balise: `<audio controls><source src="assets/audioPlannings/Leretrait.mp3" type="audio/mpeg"></audio>`,
        title: `Le retrait`,
      },
      {
        id: "chat-thirteenth-tab",
        balise: `<p></p>`,
        title: `La pharmacie`,
      },
    ];
    const index = objetaAudio.findIndex((element, index) => {
      var ttableAudio = [];
      var ttableAudiotitle = [];
      if (xid.id === element.id) {
        var createUnNouveauP = document.getElementById("createAudioPlanning");
        ttableAudio.push(element.balise);
        createUnNouveauP.innerHTML = ttableAudio[0];

        ttableAudiotitle.push(element.title);
        var AllTitlePlan = document.getElementById("AllTitlePlan#");
        AllTitlePlan.innerHTML = element.title;
        console.log(element.id);
      }
    });
  });
});
var VideoPlanning = document.querySelectorAll(".openVideoPlanningDemo");
VideoPlanning.forEach((Q) => {
  Q.addEventListener("click", function () {
    $("#incomingVideoPlanning").modal({
      show: true,
      backdrop: false,
      keyboard: false,
    });
  });
});

//function planning valider

document.getElementById("AceptPlanning").addEventListener("click", function () {
  console.log("ok tour le ppofkkfv");
  $("#incomingaliderplanning").modal({
    show: true,
    backdrop: "static",
    keyboard: false,
  });
});
// function gotopageWithoutREfrech
$("#gotopageWithoutREfrech").click(function () {
  loadContent($(this).attr("href"));
  return false;
});

function loadContent(page) {
  $.ajax({
    url: page,
    success: function (data) {
      $(".placeholder").html(data);
    },
  });
}

///map famacie

function quittermaps() {
  history.back();
}
function initMap() {
  //get position user
  if ("geolocation" in navigator) {
    // vérifiez si l'utilisateur à activer sa géolocalisation
    var positionWatcher = navigator.geolocation.watchPosition(
      // la position va s'actualiser selon maximumAge
      (position) => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        var options = {
          zoom: 13,
          center: new google.maps.LatLng(latitude, longitude),
        };
        document.getElementById("montrerqquitter").style.display = "block";
        // New map
        var map = new google.maps.Map(document.getElementById("map"), options);

        // Array of markers
        var markers = [
          {
            coords: {
              lat: 6.367031194359564,
              lng: 2.4542892891581345,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Data structureand algorithm</h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.370207035827131,
              lng: 2.4303069518319145,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Pharmacie des 4 thérapies</h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.385300849708517,
              lng: 2.424747752587807,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Pharmacie Aidjèdo cotonou</h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.377866949458491,
              lng: 2.4417823741900397,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Pharmacie Midombo</h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              at: 6.369042525685197,
              lng: 2.420160926394599,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Pharmacie Adechinan</h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.367983775329272,
              lng: 2.4019941865190404,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Pharmacie Ste. PHILOMENE, Cotonou</h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.364095047330313,
              lng: 2.4178826136906473,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">UBPHAR S.A, 01BP 3629, Cotonou</h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.359799805914865,
              lng: 2.4314081404255683,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Pharmacie JONQUET, Cotonou </h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.364223159561423,
              lng: 2.4137092943779623,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Pharmacie du rond point, Cotonou </h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.38193067237133,
              lng: 2.3897280042345757,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Pharmacie Akossombo, Cotonou </h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.360068830947836,
              lng: 2.3642926510203766,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Pharmacie Océane, Rue 2356, Cotonou</h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.367347602730905,
              lng: 2.476744887562856,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Pharmaquick by ABT, 46 Rue 1153, Cotonou</h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.370776955121309,
              lng: 2.403694793400974,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">PHARMACIE SAINTE FOI, Cotonou Lot carré N0 1081 Vodjè, Cotonou</h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.357584706422746,
              lng: 2.4524318451923603,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">CAME, Cotonou </h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.374359569984654,
              lng: 2.391679552121058,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Club billard, 06 BP1736 Abomey Calavi ZOPAH</h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.362576677393703,
              lng: 2.4363455994245196,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Pharmacie Avleketa, Cotonou</h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
          {
            coords: {
              lat: 6.390186706250266,
              lng: 2.4151903313176217,
            },
            title: "bonjours",
            content: `
  <div class="card" style="font-family: sans-serif;
  background: #b3ffe3;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center; background: #fff;
  width: 15rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  overflow: hidden;
  transition: all 0.2s ease-in-out;">
<div class="image-box" style="height: 30vh;
    border-radius: inherit;
    border: none;
    background: #70bee6; ">
  <img src="assets/images/LLogoP.png" alt=""
  style="width: 100%;
    height: 100%;"
  >
</div>
<div class="card-content" style="padding: 1.3rem;">
  <h2 class="card-title" style="margin-top: 1rem;
    font-size: 1.1rem;">Bs-Immo, Rue 670A, Cotonou</h2>
  <small class="sub-title" style="color: gray;">voici les avis de nos clients</small>
  <div class="rating" style="margin-top: 0.5rem;">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star checked" style="color: gold;"></span>
    <span class="fa fa-star" style="color: gold;"></span>
    <span class="fa fa-star"></span>
  </div>
  <a href="indexChatPharm.html"><button class="btn" style="margin-top: 1rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border-radius: 5px;
    text-transform: capitalize;
    background: none;
    border: 2px solid #70bee6;
    transition: 0.3s ease;" id='nousalons'>Acheter chez nous</button></a>
</div>
</div>
  
  `,
          },
        ];

        // Loop through markers
        for (var i = 0; i < markers.length; i++) {
          // Add marker
          addMarker(markers[i]);
        }

        // Add Marker Function
        function addMarker(props) {
          var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon:props.iconImage
          });

          // Check for customicon
          if (props.iconImage) {
            // Set icon image
            marker.setIcon(props.iconImage);
          }

          // Check content
          if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
              content: props.content,
            });

            marker.addListener("click", function () {
              infoWindow.open(map, marker);
            });
          }
        }
      },
      (error) => {
        alert(
          "On n'a pas reussi à récupérer votre localisation ! Réactualiser la page puis autoriser votre position. Merci."
        );
      },
      {
        enableHighAccuracy: true, // demande de précision ( consomme la battérie sur mobile )
        maximumAge: 0, // durée d'expiration d'une requête de position
        timeout: 10000, // durée d'attente d'une requête de position
      }
    );

    positionWatcher.geolocation.clearWatch(); // pour stopper le watcher
  }
  // Map options

  // Listen for click on map
  //google.maps.event.addListener(map, 'click', function(event){
  // Add marker
  //  addMarker({coords:event.latLng});
  // });

  /*
  // Add marker
  var marker = new google.maps.Marker({
    position:{lat:42.4668,lng:-70.9495},
    map:map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });

  var infoWindow = new google.maps.InfoWindow({
    content:'<h1>Lynn MA</h1>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
  */
}
