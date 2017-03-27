  // describe('Nested pages', function() {
  //   describe('About us duplicate page', function () {

  //     var nodesAboutUs=[];
  //     var nodes = {}
  //     var path1;
  //     before( function ( done ) {
  //       var aboutUsLink = document.querySelector("spr-link[path='about us/dup']");
  //       click(aboutUsLink);
  //       setTimeout(function(){
  //       path1 = document.querySelector('spr-route.aboutus-dup.path1');
  //         done();
  //       },500);
  //     });

  //     it('should contain routes with content', function() {
  //       console.log(77)
  //       nodesAboutUs = document.querySelectorAll('.aboutus-dup')

  //       var allValid = true;
  //       allValid = Array.from(nodesAboutUs).reduce ( function reducer( bool, node ) {
  //       if( node.className === 'aboutus-dup path1' ) {
  //         nodes.path1 = node;
  //       }
  //       if ( node.className === 'aboutus-dup src-js' ) {
  //         nodes.srcJS = node;
  //       }
  //       if ( node.className === 'aboutus-dup invoked-js') {
  //         nodes.invokedJS = node;
  //       }
  //       if( node.className === 'aboutus-dup slot') {
  //         nodes.slot = node;
  //       }
  //         return !!node.shadowRoot && bool;
  //       }, allValid)
  //       expect(nodesAboutUs.length).to.equal(4);
  //       expect(allValid).to.be.true;
  //     });

  //     it('should have expected contents', function() {
  //       var testDivChildren = `\n  <div>path1.html has rendered</div>\n<div id="attachedDiv">This string passed to remote function in another route-component and was appended to a third route - path1.html\'s - shadoDOM #testDiv</div><div>This string was passed to and returned from a function in a remote script tag and was appended to same route as above<br>This global variable was accessed by another script tag in invokeglobal.html and  was appended to the #testDiv in path1.html</div>`
  //       expect(path1.shadowRoot.children.length).to.equal(4);
        
  //       var testDiv = path1.shadowRoot.querySelectorAll('#testDiv');
  //       expect(testDiv.length).to.equal(1);
  //         expect(testDiv[0].innerHTML).to.equal(testDivChildren);
  //       expect(path1.shadowRoot.querySelectorAll('spr-route').length).to.equal(2);
  //     });

  //     it('should have nested components', function() {
  //       var nestedComponentHTML = `<div> this lies in a nested component hurray! </div>`;
  //       var doubleNestedComponentHTML = `<div>this is a nested component. src index will render below if spr-route can perform a double nest</div>\n<spr-route path="about us" src="../src/index.html"></spr-route>\n`;
  //       var tripleNestedComponentHTML = `<div>
  //   <div>
  //     index.html file in src rendered
  //   </div>
  // </div>`;

  //       var spar = path1.shadowRoot.querySelectorAll('spr-route');
  //       expect(spar[0].shadowRoot.innerHTML).to.be.ok;
  //       expect(spar[1].shadowRoot.innerHTML).to.be.ok;
  //       expect(spar[0].shadowRoot.innerHTML).to.equal(nestedComponentHTML);
  //       expect(spar[1].shadowRoot.innerHTML).to.equal(doubleNestedComponentHTML);
  //       expect(spar[1].shadowRoot.querySelector('spr-route').shadowRoot.innerHTML).to.be.ok;
  //       expect(spar[1].shadowRoot.querySelector('spr-route').shadowRoot.innerHTML).to.equal(tripleNestedComponentHTML);
  //     });

  //     it('should assign the default content to the slot', function() {
  //       var slotRoute = document.querySelector('.aboutus-dup.slot');
  //       expect(slotRoute.firstChild).to.be.instanceOf(HTMLDivElement);
  //       expect(slotRoute.firstChild.assignedSlot).to.be.instanceOf(HTMLSlotElement);
  //     });

  //   });
    
  //   describe('Home page', function () {
  //     before(function (done) {
  //       var homeLink = document.querySelector("spr-link[path='home/dup']");
  //       click(homeLink);
  //       setTimeout(function(){
  //         done();
  //       },500);
  //     });
  //     it('should be able to select class in shadowDOM', function () {
  //       var fellowShadowDom = document.querySelector('.home-dup .class-div-2');
  //       expect(fellowShadowDom.shadowRoot.querySelector('.test-class-2')).to.be.ok;
  //       expect(fellowShadowDom.shadowRoot.querySelector('.test-class-2').innerHTML.includes('class selected')).to.equal(true);
  //     });
  //     it('should display default content and slot content', function() {
  //       var defaultRoute = document.querySelector('.home-dup .default-route-value');
  //       expect(defaultRoute.innerHTML).to.equal('The below spr-route is a slot content default');
  //       var defaultSlot = document.querySelector('.home-dup .slot div[slot="slot-name"]');
  //       expect(defaultSlot.assignedSlot).to.be.instanceOf(HTMLSlotElement);
  //     });
  //   });
  //   describe('Back button', function () {

  //     var nodesAboutUs=[];
  //     var nodes = {}
  //     var path1; 
  //     before( function ( done ) {
  //       window.history.back();
  //       setTimeout(function(){
  //         path1 = document.querySelector('spr-route.aboutus-dup.path1');
  //         done()
  //       },500);
  //     });

  //     it('should contain routes with content', function() {
  //       console.log(77)
  //       nodesAboutUs = document.querySelectorAll('.aboutus-dup')

  //       var allValid = true;
  //       allValid = Array.from(nodesAboutUs).reduce(function reducer( bool, node ) {
  //       if( node.className === 'aboutus-dup path1' ) {
  //         nodes.path1 = node;
  //       }
  //       if ( node.className === 'aboutus-dup src-js' ) {
  //         nodes.srcJS = node;
  //       }
  //       if ( node.className === 'aboutus-dup invoked-js') {
  //         nodes.invokedJS = node;
  //       }
  //       if( node.className === 'aboutus-dup slot') {
  //         nodes.slot = node;
  //       }
  //         return !!node.shadowRoot && bool;
  //       }, allValid)
  //       expect(nodesAboutUs.length).to.equal(4);
  //       expect(allValid).to.be.true;
  //     });

  //     it('should have expected contents', function() {
  //       var testDivChildren = `
  //   <div>path1.html has rendered</div>
  // <div id="attachedDiv">This string passed to remote function in another route-component and was appended to a third route - path1.html's - shadoDOM #testDiv</div><div>This string was passed to and returned from a function in a remote script tag and was appended to same route as above<br>This global variable was accessed by another script tag in invokeglobal.html and  was appended to the #testDiv in path1.html</div>`
  //       expect(path1.shadowRoot.children.length).to.equal(4);
        
  //       var testDiv = path1.shadowRoot.querySelectorAll('#testDiv');
  //       expect(testDiv.length).to.equal(1);
  //           expect(testDiv[0].innerHTML).to.equal(testDivChildren);
  //       expect(path1.shadowRoot.querySelectorAll('spr-route').length).to.equal(2);
  //     });

  //     it('should have nested components', function() {
  //       var nestedComponentHTML = `<div> this lies in a nested component hurray! </div>`;
  //       var doubleNestedComponentHTML = `<div>this is a nested component. src index will render below if spr-route can perform a double nest</div>
  // <spr-route path="about us" src="../src/index.html"></spr-route>
  // `;
  //       var tripleNestedComponentHTML = `<div>
  //   <div>
  //     index.html file in src rendered
  //   </div>
  // </div>`;

  //       var spar = path1.shadowRoot.querySelectorAll('spr-route');
  //       expect(spar[0].shadowRoot.innerHTML).to.be.ok;
  //       expect(spar[1].shadowRoot.innerHTML).to.be.ok;
  //       expect(spar[0].shadowRoot.innerHTML).to.equal(nestedComponentHTML);
  //       expect(spar[1].shadowRoot.innerHTML).to.equal(doubleNestedComponentHTML);
  //       expect(spar[1].shadowRoot.querySelector('spr-route').shadowRoot.innerHTML).to.be.ok;
  //       expect(spar[1].shadowRoot.querySelector('spr-route').shadowRoot.innerHTML).to.equal(tripleNestedComponentHTML);
  //     });

  //     it('should assign the default content to the slot', function() {
  //       var slotRoute = document.querySelector('.aboutus-dup.slot');
  //       expect(slotRoute.firstChild).to.be.instanceOf(HTMLDivElement);
  //       expect(slotRoute.firstChild.assignedSlot).to.be.instanceOf(HTMLSlotElement);
  //     });

  //   });
  // });