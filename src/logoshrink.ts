const $logo = document.querySelector('svg') as SVGSVGElement;

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $logo.style.width = '70';
    $logo.style.height = '70';
    $logo.style.marginLeft = '0';
    $logo.style.fill = '#525864';
    $logo.style.transform = 'translate(0%, 0%)';
  } else {
    $logo.style.width = '300';
    $logo.style.height = '300';
    $logo.style.marginLeft = '50%';
    $logo.style.fill = '#818C9F';
    $logo.style.transform = 'translate(-50%, 0%)';
  }
}