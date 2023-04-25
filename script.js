new Glide('.glide', {
    type: 'slider',
    startAt: 0,
    perView: 1,
  }).mount()

  new Glide('.news_glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 50,
  }).mount()

  
  const newsslider = new Glide('.news_glide', {
    type: 'carousel',
    startAt: 0,
    gap: 50,
  });
  
  const newsdesktopView = window.matchMedia("(min-width: 900px)");
  
  function setSliderViewn() {
    if (newsdesktopView.matches) {
      newsslider.update({ perView: 4 });
    } else {
      newsslider.update({ perView: 2 });
    }
  }
  
  setSliderViewn();
  
  newsdesktopView.addListener(setSliderViewn);
  
  newsslider.mount();




const slider = new Glide('.glide_project', {
  type: 'carousel',
  startAt: 0,
  gap: 70,
});

const desktopView = window.matchMedia("(min-width: 900px)");

function setSliderView() {
  if (desktopView.matches) {
    slider.update({ perView: 3 });
  } else {
    slider.update({ perView: 2 });
  }
}

setSliderView();

desktopView.addListener(setSliderView);

slider.mount();



let mission_modal = document.getElementById('mission__modal');
let missionModalClose = document.getElementById('mission__modal-close');
let missionModalOpen = document.getElementById('mission__modal-open');

missionModalOpen.onclick = function(){
  mission_modal.style.display = 'block';
  console.log('trigger');
}
missionModalClose.onclick = function(){
  mission_modal.style.display = 'none';
}
window.onclick = function (e) {
	if(e.target == mission_modal) mission_modal.style.display = 'none';
}

let hero_modal = document.getElementById('hero__modal');
let heroModalClose = document.getElementById('hero__modal-close');
let heroModalOpen = document.getElementById('hero__modal-open');

heroModalOpen.onclick = function(){
  hero_modal.style.display = 'block';
  console.log('trigger');
}
heroModalClose.onclick = function(){
  hero_modal.style.display = 'none';
}
window.onclick = function (e) {
	if(e.target == hero_modal) hero_modal.style.display = 'none';
}