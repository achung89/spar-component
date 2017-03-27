var display = document.querySelector('#display');
var markUp = document.querySelector('#markup');
display.addEventListener('click', appendMarkup);

var indexTags = document.querySelectorAll('body *');
function appendMarkup () {
  setTimeout( ()=> {
    while ( this.firstChild ) {
      this. removeNode ( firstChild );
    }
    var routes = document.querySelectorAll ( 'spar-route' );
    var shadowRoutes = indexTags.reduce( function ( coll, node ) {
      return coll.concat ( node.shadowRoot.querySelectorAll ( 'spar-route' ) );
    }, []);
    var routes = routes.concat ( shadowRoutes );
    routes.forEach ( function ( route ) {
    document.write('src="'+element.src.substr ( element.src.lastIndexOf ('/') )+'"<br>' + 
                    'path="' + element.pathStripped + '"<br>"' + 
                    element.shadowRoot.innerHTML + "<br>");
    });
  }, 100 );
}