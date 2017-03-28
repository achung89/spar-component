# Single Page Application Router (SPAR)

```html
<spar-link path = "aboutus"> Navigate to about us page </spar-link>
<spar-path path = "aboutus" src = "../src/aboutus.html"></spar-path>
```
Spar-component is an unopinionated declarative single page router made with webcomponents (link). It allows developers to incorporate SPA navigation without the use of javascript. To use spar, simply:

1) Declare a spar-path element with a "path" attribute for the pathname and a "src" attribute pointing to a html file
2) Declare a spar-link element with a "path" attribute matching the <spar-path>

The contents of the fetched file will be appended to the route-element. Multiple <spar-path> can be declared for a single path.

```html
<spar-path path = '/'><div>Welcome to the home page<div></spar-path>
```

Spar-component also allows nesting for spar-paths. It allows for placing spar-paths wi

# spr-frame

The spr-frame element allows you to put contents of multiple route elements in a single file. The contents are separated by a <spr-frame>.

```html
<spr-frame id = "code">
<script>
  function codeFn() {
    ...
  }
</script>
</spr-frame>

<spr-frame id = "header">
<div>hello world!</div>
</spr-frame>

<spr-frame id = "body">
...
</spr-frame>
```
<spar-path  path="/helloworld" frame-id="code" src="helloworld.html"></spar-path>
<spar-path path="/helloworld" frame-id="header" src="helloworld.html"></spar-path>
<spar-path path="/helloworld" frame-id="body" src="helloworld.html"></spar-path>
```
# PRPL

Spar-component models the PRPL pattern for efficient resource loading. It:

1) Gives the index homepage the ability to act as an entry point for other files
2) Renders the index route after the document is parsed
3) Caches all routes after document has loaded

# Design decisions

This app uses a non-blocking algorithm which appends routes in order. On a path change, the route will:

1) Fetch all routes asynchronously
2) Invoke a callback upon receiving a file which will...
    - parse the file
    - append the contents if previous route elements in the DOM tree have been appended
    - otherwise store the contents until previous elements have been fetched and appended
3) If the fetched contents have nested spar-path than the algorithm will delay appending the it until after the child spar-path fetches and appends its children. These chain of events are called asynchronously.  

Appending routes in order and appending the contents of nested spar elements before attaching them to the DOM tree minimizes the effects of DOM reflow. It also ensures that fetched script tags are executed in the order that they appear on the page.  

# Support 
At the moment, spar-path is only supported by google chrome, as the current webcomponent polyfill seems incompatible with the current version of spar-path.  
# Known issues
