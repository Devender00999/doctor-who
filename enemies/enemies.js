var comp = document.querySelector("#enemies");
let content = "";
enemies.forEach((enemy) => {
  content += `<div class="comContainer col-4 com-sm-12">
    <div class="comImage">
      <div class="image1">
        <img src="${enemy.image}" alt="">
        <div class="overlayImage"><a target="_blank" href="${enemy.site}">Know More about</br> ${enemy.name}</a>
        </div>
    
      </div>
    </div>
    <h3>${enemy.name}</h3>
    </div>`;
});
comp.innerHTML = content;
