

var indexTags = document.querySelectorAll('body *');
var demo = {
  appendMarkup: function () {
    console.log(subroutesDiv)
    while ( subroutesDiv.firstChild ) {
      subroutesDiv.removeChild ( subroutesDiv.firstChild );
    }
    var fn = ()=> {
      demo.markupRoutes();
      demo.prettify();
    }
    setTimeout( fn , 250 );
  },
  markupIndex: function () {
    var title = document.createElement('div');
    title.appendChild(document.createTextNode('src="demo.html"'));
    var pre = document.createElement('pre');
    pre.className="prettyprint lang-html";
    var bodyMarkup = demo.interpretMarkup ( document.body.innerHTML );  
    // pre.appendChild(textToNode(bodyMarkup));
    pre.innerHTML = bodyMarkup;
    indexDiv.appendChild(title);
    indexDiv.appendChild(pre);
  },
  markupRoutes: function () {
    var routes = document.querySelectorAll ( 'spar-path' );
    var shadowRoutes = demo.queryShadowRoots ( indexTags );
    var routes = Array.from(routes).concat ( shadowRoutes );
    subroutesDiv.className = 'html subroutes'
    routes.forEach ( function ( route ) {
      if(route.shadowRoot.innerHTML !== '<slot></slot>') {
        var htmlText = demo.interpretMarkup ( route.shadowRoot.innerHTML );
        if ( htmlText ) {
          var pre = document.createElement('pre');
          pre.className = "prettyprint lang-html";
          pre.innerHTML = htmlText;
          var header = demo.textToNode ( route.src?'<div>src="' + route.src.substr ( route.src.lastIndexOf ('/') ):'' + 
                                         '"</div><br>' + '<div>path="' + route.pathStripped + '"</div><br>"');

          var contentNode = document.createElement('div');
          contentNode.appendChild(header);
          contentNode.appendChild(pre);

        } else {
          var contentNode = document.createTextNode('');
        }
        subroutesDiv.appendChild ( contentNode );
      }
    });

  },
  prettify: function () {
    var head = document.head;
    var prettifier = document.createElement('script')
    prettifier.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js";
    head.insertBefore(prettifier, head.firstChild);
    head.removeChild(prettifier);
  },
  interpretMarkup: function ( xml ) {
    return xml.replace(/[<>&\n]/g, function(x) {
      return {
          '<': '&lt;',
          '>': '&gt;',
          '&': '&amp;',
          '\n': '<br />'
      }[x];
    });
  },
  textToNode: function ( text ) {
    return document.createRange().createContextualFragment(text)
  },
  queryShadowRoots: function ( nodes ) {
    return Array.from(nodes).reduce( function ( coll, node ) {
      if ( node.shadowRoot ) {
        return coll.concat ( Array.from(node.shadowRoot.querySelectorAll ( 'spar-path' )) );
      }
      return coll;
    }, []);
  }
}

var display = document.querySelector('#display');
var markUp = document.querySelector('#markup');
var links = document.querySelector('#links');
var indexDiv = document.querySelector('.index-route');
var subroutesDiv = document.querySelector('.subroutes');
links.addEventListener('click', demo.appendMarkup.bind(display));
demo.markupIndex();
demo.appendMarkup();
