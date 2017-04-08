
describe('SPAR-componets', function() {
  describe('Component functionality', function() {
    var sparRoute;
    var sparLink;
    before(function(done){
      setTimeout(()=>{
        done();
      },1000)
      sparRoute = new SparRoute();
      sparLink = new SparLink();  })
    it('should have class of spar-path, spar-link', function() {
      expect(sparRoute).to.be.an.instanceOf(SparRoute);
      expect(sparLink).to.be.an.instanceOf(SparLink); }); });

  describe('Index Routes', function () {
    var indexRoutes;
    var indexFetchRoutes;
    var links;
    var indexContentRoutes;
    // console.log('this is node',indexFetchRoutes);
    indexRoutes = document.getElementsByClassName('index');
    indexFetchRoutes = document.getElementsByClassName('index file');
    links = document.getElementsByTagName('spar-link');
    indexContentRoutes = document.getElementsByClassName('index default-content');
    before(function(done) {
      setTimeout(function() {
        done();
      },500)  });
    // it('should display all index routes ', function () {
      itParam('should all have fragment in shadowRoot', Array.from(indexRoutes).map(index=>index.shadowRoot), function(shadowRoot) {
        expect(shadowRoot).to.be.ok;  });

      itParam('should display all links', Array.from(links), function(node) {
        expect(window.getComputedStyle(node).textDecorationLine).to.equal('underline');
        expect(node.innerHTML).to.be.ok;  });

      itParam('should display fetched index-route', Array.from(indexFetchRoutes),  function ( node ) {
        expect(node.shadowRoot.innerHTML.trim()).to.not.equal('');
        expect(node.shadowRoot.firstChild).to.be.an.instanceOf(HTMLDivElement);
        expect(node.shadowRoot.innerHTML.includes('index.html')).to.be.true;  });
      itParam('should display default content', Array.from(indexContentRoutes), function(node) {
        expect(node.shadowRoot.firstChild).to.be.instanceOf(HTMLSlotElement); }); });

  describe('About us page', function () {

    var nodesAboutUs=[];
    var nodes = {}
    var path1;
    before( function(done) {
      var aboutUsLink = document.querySelector("spar-link[path='about us']");
      aboutUsLink.click()
      setTimeout(function(){
      path1 = document.querySelector('spar-path.aboutus.path1');
        done()
      },500); });

    it('should contain routes with content', function() {
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
      expect(nodesAboutUs.length).to.equal(4);
      expect(allValid).to.be.true;  });

    it('should have expected contents', function() {
      var testDivChildren = `
  <div>path1.html has rendered</div>
<div id="attachedDiv">This string passed to remote function in another route-component and was appended to a third route - path1.html's - shadoDOM #testDiv</div><div>This string was passed to and returned from a function in a remote script tag and was appended to same route as above<br>This global variable was accessed by another script tag in invokeglobal.html and  was appended to the #testDiv in path1.html</div>`
      expect(path1.shadowRoot.children.length).to.equal(4);
      
      var testDiv = path1.shadowRoot.querySelectorAll('#testDiv');
      expect(testDiv.length).to.equal(1);
           expect(testDiv[0].innerHTML).to.equal(testDivChildren);
      expect(path1.shadowRoot.querySelectorAll('spar-path').length).to.equal(2);  });

    it('should have nested components', function() {
      var nestedComponentHTML = `<div> this lies in a nested component hurray! </div>`;
      var doubleNestedComponentHTML = `<div>this is a nested component. src index will render below if spar-path can perform a double nest</div>\n<spar-path path="about us" src="test-directory/src/index.html"></spar-path>\n`;
      var tripleNestedComponentHTML = `<div>\n  <div>\n    index.html file in src rendered\n  </div>\n</div>`;

      var spar = path1.shadowRoot.querySelectorAll('spar-path');
      expect(spar[0].shadowRoot.innerHTML).to.be.ok;
      expect(spar[1].shadowRoot.innerHTML).to.be.ok;
      expect(spar[0].shadowRoot.innerHTML).to.equal(nestedComponentHTML);
      expect(spar[1].shadowRoot.innerHTML).to.equal(doubleNestedComponentHTML);
      expect(spar[1].shadowRoot.querySelector('spar-path').shadowRoot.innerHTML).to.be.ok;
      expect(spar[1].shadowRoot.querySelector('spar-path').shadowRoot.innerHTML).to.equal(tripleNestedComponentHTML); });

    it('should assign the default content to the slot', function() {
      var slotRoute = document.querySelector('.aboutus.slot');
      expect(slotRoute.firstChild).to.be.instanceOf(HTMLDivElement);
      expect(slotRoute.firstChild.assignedSlot).to.be.instanceOf(HTMLSlotElement);  }); });
  
  describe('Home page', function () {
    before(function (done) {
      var homeLink = document.querySelector("spar-link[path='home']");
      homeLink.click();
      setTimeout(function(){
        done();
      },500); });
    it('should be able to select class in shadowDOM', function () {
      var fellowShadowDom = document.querySelector('.home.class-div-2');
      expect(fellowShadowDom.shadowRoot.querySelector('.test-class-2')).to.be.ok;
      expect(fellowShadowDom.shadowRoot.querySelector('.test-class-2').innerHTML.includes('class selected')).to.equal(true);  });
    it('should display default content and slot content', function() {
      var defaultRoute = document.querySelector('.home.default-route-value');
      expect(defaultRoute.innerHTML).to.equal('The below spar-path is a slot content default');
      var defaultSlot = document.querySelector('.home.slot div[slot="slot-name"]');
      expect(defaultSlot.assignedSlot).to.be.instanceOf(HTMLSlotElement); }); });

  describe('Back button', function () {

    var nodesAboutUs=[];
    var nodes = {}
    var path1; 
    before( function ( done ) {
      window.history.back();
      setTimeout(function(){
        path1 = document.querySelector('spar-path.aboutus.path1');
        done()
      },500);
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
      expect(nodesAboutUs.length).to.equal(4);
      expect(allValid).to.be.true;  });

    it('should have expected contents', function() {
      var testDivChildren = `
  <div>path1.html has rendered</div>\n<div id="attachedDiv">This string passed to remote function in another route-component and was appended to a third route - path1.html's - shadoDOM #testDiv</div><div>This string was passed to and returned from a function in a remote script tag and was appended to same route as above<br>This global variable was accessed by another script tag in invokeglobal.html and  was appended to the #testDiv in path1.html</div>`
      expect(path1.shadowRoot.children.length).to.equal(4);
      
      var testDiv = path1.shadowRoot.querySelectorAll('#testDiv');
      expect(testDiv.length).to.equal(1);
           expect(testDiv[0].innerHTML).to.equal(testDivChildren);
      expect(path1.shadowRoot.querySelectorAll('spar-path').length).to.equal(2);  });

    it('should have nested components', function() {
      var nestedComponentHTML = `<div> this lies in a nested component hurray! </div>`;
      var doubleNestedComponentHTML = `<div>this is a nested component. src index will render below if spar-path can perform a double nest</div>\n<spar-path path="about us" src="test-directory/src/index.html"></spar-path>\n`;
      var tripleNestedComponentHTML = `<div>\n  <div>\n    index.html file in src rendered\n  </div>\n</div>`;

      var spar = path1.shadowRoot.querySelectorAll('spar-path');
      expect(spar[0].shadowRoot.innerHTML).to.be.ok;
      expect(spar[1].shadowRoot.innerHTML).to.be.ok;
      expect(spar[0].shadowRoot.innerHTML).to.equal(nestedComponentHTML);
      expect(spar[1].shadowRoot.innerHTML).to.equal(doubleNestedComponentHTML);
      expect(spar[1].shadowRoot.querySelector('spar-path').shadowRoot.innerHTML).to.be.ok;
      expect(spar[1].shadowRoot.querySelector('spar-path').shadowRoot.innerHTML).to.equal(tripleNestedComponentHTML); });

    it('should assign the default content to the slot', function() {
      var slotRoute = document.querySelector('.aboutus.slot');
      expect(slotRoute.firstChild).to.be.instanceOf(HTMLDivElement);
      expect(slotRoute.firstChild.assignedSlot).to.be.instanceOf(HTMLSlotElement);  }); }); });
