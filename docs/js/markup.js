var display = document.querySelector('#display');
var markUp = document.querySelector('#markup');
display.addEventListener('click', appendMarkup);

var indexTags = document.querySelectorAll('body *');
function appendMarkup () {
  setTimeout( ()=> {
    while ( this.firstChild ) {
      this. removeNode ( firstChild );
    }
    var routes = document.querySelectorAll ( 'spr-route' );
    var shadowRoutes = indexTags.reduce( function ( coll, node ) {
      return coll.concat ( node.shadowRoot.querySelectorAll ( 'spr-route' ) );
    }, []);
    var routes = routes.concat ( shadowRoutes );
    routes.forEach ( function ( route ) {
    var interpretTicks = route.shadowRoot.innerHTML.replace(new RegExp('<','g'),'&lt;')
                                                       .replace(new RegExp('>','g'),'&gt;');
  

    document.write('<div>src="' + element.src.substr ( element.src.lastIndexOf ('/') ) + '"</div><br>' + 
                    '<div>path="' + element.pathStripped + '"</div><br>"' + 
                    '<pre class="prettyprint lang-html">' + interpretTicks+ '</pre><br>');
    });
  }, 100 );
}