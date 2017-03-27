var eles = document.querySelector('.test-class');

if (eles) {
  eles.forEach ( ele => {
    ele.innerHTML='querySelector selects across shadowDOM!';
  })
}
document.querySelector('#home-class-div-2').shadowRoot.querySelector('.test-class-2').innerHTML='class selected';
