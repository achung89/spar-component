var eles = document.querySelector('.test-class');

if (eles) {
  eles.forEach ( ele => {
    ele.innerHTML='querySelector selects across shadowDOM!';
  })
}
console.log("i'm the duplicate tag")

document.querySelector('.home-dup.class-div-2').shadowRoot.querySelector('.test-class-2').innerHTML='class selected';