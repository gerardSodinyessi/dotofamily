//создаем переменную урла
const url = "wss://echo-ws-service.herokuapp.com";
//поиск кнопок
const ctaSend = document.querySelector(".send");
//поиск дива для вставки реззультата запроса
let result = document.querySelector(".result");

//создаем функцию для вывода сообщения в чат
function myMessage(message) {
  var now = new Date(Date.now());
  var heure = now.toLocaleTimeString();
  var isUser = true;
  if (isUser) {
    let myMessageBox = document.createElement("p");
    myMessageBox.innerHTML = `
  <div class="chat-message chat-message-right" ;">
  <div class="chat-message-text">
  <span>${message} </span>
  </div>
  <div class="chat-message-meta" style="display: none;">
  <span>${heure} pm<i class="fa fa-check"></i></span>
  </div>
</div>
  
 `;
    result.appendChild(myMessageBox);
  } else {
    let myMessageBox = document.createElement("p");
    myMessageBox.innerHTML = `
  <div class="chat-message chat-message-left" ;">
  <div class="chat-message-text">
  <span>${message} </span>
  </div>
  <div class="chat-message-meta" style="display: none;">
  <span>${heure} pm<i class="fa fa-check"></i></span>
  </div>
</div>
  
 `;
    result.appendChild(myMessageBox);
  }
}
var table = [];

function preview_image(event) {
  var reader = new FileReader();
  reader.onload = function () {
    let id = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    document.querySelector(".output_image").innerHTML = id();

    var output = document.querySelector(".output_image");
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
  console.log(event.target.files[0]);

  let myMessageBoxa = document.createElement("p");

  myMessageBoxa.innerHTML = `
  <div class="chat-message chat-message-left" ;">
  <div class="chat-message-text">
  <span><img class="output_image" height="45px" width="75px"/></span>
  </div>
  <div class="chat-message-meta" style="display: none;">
  <span> pm<i class="fa fa-check"></i></span>
  </div>
</div>
  
 `;
  result.appendChild(myMessageBoxa);
  table.push(myMessage);
  console.log(myMessageBoxa);
}

document
  .getElementById("button-addonmicpo")
  .addEventListener("click", function () {
    //function for audio
    let audioIN = { audio: true };
    //  audio is true, for recording

    // Access the permission for use
    // the microphone
    navigator.mediaDevices
      .getUserMedia(audioIN)

      // 'then()' method returns a Promise
      .then(function (mediaStreamObj) {
        // Connect the media stream to the
        // first audio element
        let audio = document.querySelector("audio");
        //returns the recorded audio via 'audio' tag

        // 'srcObject' is a property which
        // takes the media object
        // This is supported in the newer browsers
        if ("srcObject" in audio) {
          audio.srcObject = mediaStreamObj;
        } else {
          // Old version
          audio.src = window.URL.createObjectURL(mediaStreamObj);
        }

        // It will play the audio
        audio.onloadedmetadata = function (ev) {
          // Play the audio in the 2nd audio
          // element what is being recorded
          audio.play();
        };

        // Start record
        let start = document.getElementById("btnStart");

        // Stop record
        let stop = document.getElementById("btnStop");

        // 2nd audio tag for play the audio
        let playAudio = document.getElementById("adioPlay");

        // This is the main thing to recorded
        // the audio 'MediaRecorder' API
        let mediaRecorder = new MediaRecorder(mediaStreamObj);
        // Pass the audio stream

        // Start event
        start.addEventListener("click", function (ev) {
          mediaRecorder.start();
          // console.log(mediaRecorder.state);
        });

        // Stop event
        stop.addEventListener("click", function (ev) {
          mediaRecorder.stop();
          // console.log(mediaRecorder.state);
        });

        // If audio data available then push
        // it to the chunk array
        mediaRecorder.ondataavailable = function (ev) {
          dataArray.push(ev.data);
        };

        // Chunk array to store the audio data
        let dataArray = [];

        // Convert the audio data in to blob
        // after stopping the recording
        mediaRecorder.onstop = function (ev) {
          // blob of type mp3
          let audioData = new Blob(dataArray, { type: "audio/mp3;" });

          // After fill up the chunk
          // array make it empty
          dataArray = [];

          // Creating audio url with reference
          // of created blob named 'audioData'
          let audioSrc = window.URL.createObjectURL(audioData);

          // Pass the audio url to the 2nd video tag
          playAudio.src = audioSrc;
        };
      })

      // If any error occurs then handles the error
      .catch(function (err) {
        console.log(err.name, err.message);
      });
  });

//создаем функцию запроса и обработки сообщения
ctaSend.addEventListener("click", () => {
  const inputTx = document.querySelector(".input_tx").value;
  const inputTxa = document.querySelector("output_image");
  document.getElementById("opolode").value = "";
  document.querySelector(".input_tx").value = "";

  let websocket = new WebSocket(url);

  myMessage(inputTx, inputTxa);

  websocket.onopen = function () {
    console.log("hello");
    websocket.send(inputTx);
  };
});

window.open("http://www.example.com?ReportID=1", "_blank");
