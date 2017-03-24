function click(el){
    var ev = document.createEvent("MouseEvent");
    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        0, 0, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    el.dispatchEvent(ev);
}
describe('SPAR-componets', function() {
  describe('Component functionality', function() {
    var sparRoute;
    var sparIndex;
    var sparLink;
    let setTimeout$Andrew = window.setTimeout; 
    before(function(){
      console.log(8);
      sparRoute = new SparRoute();
      sparIndex = new SparIndex();
      sparLink = new SparLink();
    })
    it('should have class of spar-route, spar-index, spar-link', function() {
      console.log(9);
      expect(sparRoute).to.be.an.instanceOf(SparRoute);
      expect(sparLink).to.be.an.instanceOf(SparLink);
      expect(sparIndex).to.be.an.instanceOf(SparIndex);
    });
    // it('should be able to get and set properties', function() {

    // });

  });

  describe('Index Routes', function () {
    var indexRoutes = document.getElementsByClassName('index');
    var indexContentRoutes = document.getElementsByClassName('index default-content');
    var indexFetchRoutes = document.getElementsByClassName('index file');
    var links = document.getElementsByTagName('spar-link');
    // console.log('this is node',indexFetchRoutes);

    before(function(done) {
      setTimeout(function() {
        done();
        console.log(35);
      },100)
    });

    itParam('should all have content in shadowRoot',Array.from(indexRoutes).map(index=>index.shadowRoot), function(shadowRoot) {
      expect(shadowRoot).to.be.ok;
      console.log(40);
    });

    itParam('should display all links', Array.from(links), function(node) {
      expect(window.getComputedStyle(node).textDecoration).to.equal('underline');
      expect(node.innerHTML).to.be.ok;
      console.log(46);
    });

    itParam('should display fetched index-route', Array.from(indexFetchRoutes),  function ( node ) {
      console.log(node);
      expect(node.shadowRoot.innerHTML.trim()).to.not.equal('');
      expect(node.shadowRoot.firstChild).to.be.an.instanceOf(HTMLDivElement);
      expect(node.shadowRoot.innerHTML.includes('index.html')).to.be.true;
      console.log(54);
    });
    // itParam('should display default content', Array.from(indexConteteRoutes), function(node) {
    //   expect()
    // });

  });

  describe('About us page', function () {
    var nodesAboutUs=[];
    var nodes = {}


    before( function() {
      var aboutUsLink = document.querySelector("spar-link[path='about us']");
      click(aboutUsLink);
    });
    
    beforeEach(function (done) {
      setTimeout(function(){
        done();
      },100)
    });
    
    it('should contain routes with content', function() {
      console.log(77)
      nodesAboutUs = document.querySelectorAll('.aboutus')
      var allValid = true;
      allValid = Array.from(nodesAboutUs).reduce(function reducer( bool, node ) {
      if( node.className === 'aboutus path1' ) {
        nodes.path1 = node;
      }
      if ( node.className === 'aboutus src-js' ) {
        nodes.srcJS = node;
      }
      if ( node.className === 'aboutus invoked-js') {
        nodes.invokedJS = node;
      }
      if( node.className === 'aboutus slot') {
        nodes.slot = node;
      }
        return !!node.shadowRoot && bool;
      }, allValid)
      console.log(100);
      expect(nodesAboutUs.length).to.equal(4);
      expect(allValid).to.be.true;
    });
    // it('should have expected content', function() {

    // })
  });
});
