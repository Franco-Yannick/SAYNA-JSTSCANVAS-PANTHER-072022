// let right = document.getElementById('chevron_right');
// let left = document.getElementById('chevron_left');
// let scroll = document.querySelectorAll(".scroll");

// right.addEventListener('mouseover',(e)=>{
//     if(scroll.className.style='margin-right:0'){
//         scroll.style=`
//         margin-right:200px`;
//     }
//     // else{
//     //     chevron.className='fa fa-chevron-right';
//     //     mivoaka.style=`
//     //     transform:translateX(-200px);
//     //     transition:0.5s`;
//     // }
// });


let right = document.getElementById('chevron_right');
let left = document.getElementById('chevron_left');
let scroll = document.querySelector('.scroll');
let scrollContainer = scroll.parentElement;
let scrollWidth = scroll.scrollWidth;
let containerWidth = scrollContainer.offsetWidth;
let scrollPosition = 0;

right.addEventListener('click', (e) => {
  scrollPosition += containerWidth;
  if (scrollPosition > scrollWidth - containerWidth) {
    scrollPosition = scrollWidth - containerWidth;
  }
  scroll.style.transform = `translateX(-${scrollPosition}px)`;
});

left.addEventListener('click', (e) => {
  scrollPosition -= containerWidth;
  if (scrollPosition < 0) {
    scrollPosition = 0;
  }
  scroll.style.transform = `translateX(-${scrollPosition}px)`;
});
