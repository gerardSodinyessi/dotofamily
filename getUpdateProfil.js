function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
const UserConnectIdi = localStorage.getItem("storageName");
const divi = document.getElementById("getUserProfilIdForme");
const urly = `https://edotofamilyapi.com/patient/${UserConnectIdi}/`;

fetch(urly)
  .then((resp) => resp.json())
  .then(function (data) {
    console.log(data);
    let span = createNode("span");
    span.innerHTML = `
    <div class="profile-detail" style="padding-bottom: 60px;">
        <ul class="list-unstyled mb-0">
            <li class="media">
                <img src="assets/images/user.svg" alt="Generic placeholder image"
                    class=" align-self-center mr-3">
                <div class="media-body">
                    <p>Nom</p>
                    <div class="input-group">
                        <input type="text" class="form-control" value="${data.last_name} "
                            aria-label="SODINYESSI"
                            aria-describedby="button-addon-group-username">
                        <div class="input-group-append">
                            <button class="btn btn-link" type="button"
                                id="button-addon-group-username">Update</button>
                            <!------>
                        </div>
                    </div>
                </div>
                <style>
                    #MyProFilSrcimg{
                        width: 20vh !important;
                        height: 20vh !important;
                        border-radius: 100% !important;
                    }
                    #CreateYouProfile{
                        position: absolute !important;
                        left: 43vh !important;
                        cursor: pointer;
                        
                    }
                </style>
            </li>
            <li class="media">
                <img src="assets/images/user.svg" alt="Generic placeholder image"
                    class=" align-self-center mr-3">
                <div class="media-body">
                    <p>Prénoms</p>
                    <div class="input-group">
                        <input type="text" class="form-control" value="${data.first_name}"
                            aria-label="Sènou-Gérard"
                            aria-describedby="button-addon-group-username">
                        <div class="input-group-append">
                            <button class="btn btn-link" type="button"
                                id="button-addon-group-username">Update</button>
                            <!------>
                        </div>
                    </div>
                </div>
            </li>
            <li class="media">
                <img src="assets/images/phone-call.svg" alt="Generic placeholder image"
                    class=" align-self-center mr-3">
                <div class="media-body">
                    <p>Numéro</p>
                    <div class="input-group">
                        <input type="tel" class="form-control" value="${data.tel}"
                            aria-label="tel"
                            aria-describedby="button-addon-group-status">
                        <div class="input-group-append">
                            <button class="btn btn-link" type="button"
                                id="button-addon-group-status">Update</button>
                        </div>
                    </div>
                </div>
            </li>
            <li class="media">
                <img src="assets/images/email.svg" alt="Generic placeholder image"
                    class=" align-self-center mr-3">
                <div class="media-body">
                    <p>Email ID</p>
                    <div class="input-group">
                        <input type="email" class="form-control"
                            value="${data.email}"
                            aria-label="sodinyessigerard@gmail.com"
                            aria-describedby="button-addon-group-emailid">
                        <div class="input-group-append">
                            <button class="btn btn-link" type="button"
                                id="button-addon-group-emailid">Update</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
        `;

    append(divi, span);
  })
  .catch(function (error) {
    console.log(error);
  });