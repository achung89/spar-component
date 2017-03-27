var eles = document.querySelector('.test-class');

if (eles) {
  eles.forEach ( ele => {
    ele.innerHTML='querySelector selects across shadowDOM!';
    console.log('The specs have changed, update application')
  })
}
console.log('src tag in duplicate')
console.trace();
document.querySelector('.home-dup.class-div-2').shadowRoot.querySelector('.test-class-2').innerHTML='class selected';
