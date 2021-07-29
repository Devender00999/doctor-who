var incarnationElement = document.querySelector("#incarnations");
let content = "";
incarnations.forEach((companion) => {
  content += `<div class="comContainer col-4 com-sm-12">
    <div class="comImage">
      <div class="image1">
        <img src="${companion.image}" alt="">
        <div class="overlayImage"><a href=${companion.site}>${
    companion.name
  }</a>
          <div>
            ${
              companion.social.instagram
                ? `<a href=${companion.social.instagram}>
                  <i class="fa fa-instagram"></i>
                </a>`
                : ""
            }
            ${
              companion.social.hasOwnProperty("facebook")
                ? `<a href=${companion.social.facebook}>
                  <i class="fa fa-facebook"></i>
                </a>`
                : ""
            }
            ${
              companion.social.twitter
                ? `<a href=${companion.social.twitter}>
                  <i class="fa fa-twitter"></i>
                </a>`
                : ""
            }
    
          </div>
        </div>
    
      </div>
    </div>
    <h3>${companion.alias}</h3>
    </div>`;
});
incarnationElement.innerHTML = content;
