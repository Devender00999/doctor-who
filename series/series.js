let state = document.readyState;

var seriesElement = document.querySelector("#series");
let content = "";
series.forEach((currentSeries) => {
  content += `<div class="seriesDetails">
          <div class="title">
            <img src="${currentSeries.poster}" alt="" srcset="">
            <h1>${currentSeries.name}</h1>
          </div>
          <div class="shows">
              <div class="seriesImage"><img src="${currentSeries.photos.img1}" alt="${currentSeries.photos.img1}"></div>
              <div class="seriesImage"><img src="${currentSeries.photos.img2}" alt="${currentSeries.photos.img2}"></div>
              <div class="seriesImage"><img src="${currentSeries.photos.img3}" alt="${currentSeries.photos.img3}"></div>
              <div class="seriesImage"><img src="${currentSeries.photos.img4}" alt="${currentSeries.photos.img4}"></div>
          </div>
        </div>`;
});
seriesElement.innerHTML += content;
