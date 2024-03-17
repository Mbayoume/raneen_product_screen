// document.addEventListener("DOMContentLoaded", function () {
  const mainImage =Array.from(document.querySelectorAll('.active-image img'));
  const thumbnails = document.querySelectorAll('.thumbnail');
  const thumb__images = Array.from(document.querySelectorAll('.thumbnail'));
  let img_id = 1;
  let faq_btn= document.querySelectorAll('.faq-btn');
  let pannel =Array.from( document.querySelectorAll('.pannel'));

  thumb__images.forEach((img)=>{
    img.addEventListener("click",()=>{
      img_id = img.dataset.thumb;
      slideImage()

    })
  })


function slideImage(){
  const displayWidth = document.querySelector(".active-image img:first-child").clientWidth;
  document.querySelector('.active-image').style.transform = `translateX(${(img_id - 1) * displayWidth}px)`;
}
window.addEventListener('resize', slideImage);

// creat teh FAQ
faq_btn.forEach((item) => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    answer.classList.toggle('hide');
    answer.style.transition = "transformY(100px) .4s ease"

  });
});