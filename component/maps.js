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
          <button class="btn btn-danger"><div class="product-action-style" style="color:red;"> 
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
        console.log(tackeIdS);
      });
      var consultingId = document.querySelectorAll(".Payooner");
      consultingId.forEach((x) => {
        x.addEventListener("click", function (tackeIdS) {
          console.log(tackeIdS);
          var tackeId = x.id;
          $("#modaleAceptFacturactionMOOW").modal({
            show: true,
            backdrop: false,
            keyboard: false,
          });
        });
      });
    });
  }, 1000);
}
