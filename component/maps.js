const UserConnectIdToBuy = localStorage.getItem("storageName");
//id du seller
var seller = [];
//id du product
var productW = [];
//somme product
var sommeproductW = [];
// quantité de produit
var takeNumProTable = [];

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
var bigTableTake = [];
function onBlockIF() {
  const div = document.getElementById("autorsIdProduct");
  fetch("http://13.39.67.197:8000/api/products")
    .then((resp) => resp.json())
    .then(function (data) {
      let authors = data.results;
      console.log(authors);
      return authors.map(function (author) {
        bigTableTake.push(author);
        var section = createNode("section");
        section.innerHTML = `
      <div class="col-md-12 col-lg-12"> 
      <div class="product-wrapper mb-45 text-center"> 
        <div class="product-img"> 
          <a href="#" data-abc="true"> <img src="${author.image} " alt="" class="ImgPlanning"> </a>	<span class="margiNleftClass">${author.name} <i class="fa fa-rupee" style="color: red;"></i>${author.product_price} fcfa</span> 
          <div class="product-action">
          <div class="buttonSearchID"id="${author.id}">
          <button class="btn btn-danger"><div class="product-action-style authorPriceProduct" id="${author.product_price}"style="color:red;"> 
            <i class="fa fa-shopping-cart"></i>  Acheter  ${author.name} 
            </div></button>
            </div>
          </div> 
        </div> 
      </div> 
    </div>
  
      `;

        append(div, section);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  setTimeout(() => {
    var buttonSearchID = document.querySelectorAll(".buttonSearchID");
    buttonSearchID.forEach((y) => {
      y.addEventListener("click", function () {
        $(".chat-user-info").addClass("show");
        document.getElementById("AllHospitalBen").style.display = "block";
        document.getElementById("AllHospitalBenInfo").style.display = "none";
        var tackeIdS = y.id;
        productW.push(tackeIdS);
      });
    });
    var consultingId = document.querySelectorAll(".Payooner");
    consultingId.forEach((x) => {
      x.addEventListener("click", function () {
        console.log(x.id);
        var sellerId = x.id;
        seller.push(sellerId);
        $("#modaleAceptFacturactionMOOW").modal({
          show: true,
          backdrop: false,
          keyboard: false,
        });
      });
    });
    var authorPriceProduc = document.querySelectorAll(".authorPriceProduct");
    authorPriceProduc.forEach((Px) => {
      Px.addEventListener("click", function () {
        console.log(Px.id);
        var priceProd = Px.id;
        document.getElementById(
          "NameProductId"
        ).innerHTML = `<span>${Px.id} </span>`;
        document.getElementById(
          "TotalProductId"
        ).innerHTML = `<span>${Px.id} </span>`;
        document
          .getElementById("validateNumber")
          .addEventListener("click", function () {
            var takeNumPro = document.getElementById(
              "inputGroupSelect04vali"
            ).value;
            console.log(takeNumPro);
            takeNumProTable.push(takeNumPro);
            const sommeT = takeNumPro * priceProd;
            console.log(sommeT);
            sommeproductW.push(sommeT);
            document.getElementById(
              "TotalProductId"
            ).innerHTML = `<span>${sommeT} </span>`;
          });
        //function to send order
        document
          .getElementById("uivantVotreOrdonnanceC")
          .addEventListener("click", function () {
            const UserConnectIdToBuy = localStorage.getItem("storageName");
            const [takeNumProTabl] = takeNumProTable.slice(-1);
            const [sommeproduct] = sommeproductW.slice(-1);
            const [sellero] = seller.slice(-1);
            const [productWk] = productW.slice(-1);
            fetch("http://13.39.67.197:8000/api/order/", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-type": "application/json",
              },
              body: JSON.stringify({
                quantity: takeNumProTabl,
                cost: sommeproduct,
                buyer: UserConnectIdToBuy,
                seller: sellero,
                product: productWk,
              }),
            }).then(function (response) {
              if (response.ok) {
                console.log(response);
              }
            });
          });
      });
    });
  }, 1000);
}
