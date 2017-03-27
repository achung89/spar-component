# Single Page Application Router (spar)
<!--
```
<custom-element-demo>
  <template>
    <link rel="import" href="my-element.html">
    <link rel="import" href="../other-element/other-element.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<spar-link path = "aboutus"> Navigate to about us page </spar-link>
<spar-route path = "aboutus" src = "../src/aboutus.html"></spar-route>

```
Spar-component is an unopinionated declarative single page router made with webcomponents (link). It allows for single page navigation without the use of javascript. To begin using spar, simply:

1) Declare a spar-route element with a "path" attribute for the pathname and a "src" attribute pointing to a html file containing the child elements
2) Declare a spar-link element with a "path" attribute matching the spar-route

The contents of the fetched file will be appended to the route-element. Multiple spar-route elements can be declared for a single path and contents can be placed directly in the spar-route tag.

```
<spar-route path = '/'><div>Welcome to the home page<div></spar-route>
```

Spar-component also allows for nested spar-routes. It allows for placing spar-elements wi

#Spar-frame

The spar-frame element allows you to put contents of multiple route elements in a single file. The contents are separated by a <spar-frame> tag.

```html
<spar-frame id = "code">
<script>
  function codeFn() {
    ...
  }
</script>
</spar-frame>

<spar-frame id = "header">
<div>hello world!</div>
</spar-frame>

<spar-frame id = "body">
...
</spar-frame>
```
<spar-route  path="/helloworld" frame-id="code" src="helloworld.html"></spar-route>
<spar-route path="/helloworld" frame-id="header" src="helloworld.html"></spar-route>
<spar-route path="/helloworld" frame-id="body" src="helloworld.html"></spar-route>
```
# PRPL

Spar-component models the PRPL pattern for efficient resource loading. It does this throgh:

1) Giving the index homepage the means to act as an entry point for other files
2) Rendering the index route after the document is parsed
3) Caching all routes after document loads

# Design decisions

This app uses a non-blocking synchronous appending algorithm for rendering. On route change, the route will:

1) Fetch all routes asynchronously
2) Invoke a callback on receiving each file which will...
    - parse the file
    - check to see if previous route element contents have been appended
    - if not, the contents the fetched element will be stored and appended until after the previous elements have been fetched and appended.
3) If the fetched contents have nested spar-route elements, than the algorithm will delay appending the contents until after the contents of child spar-route elements are fetched and appended

Appending routes in order and appending the contents of nested spar elements before attaching them to the DOM tree minimizes the effects of DOM reflow.

# Support 
At the moment, spar-component is only supported by google chrome. As webcomponents become more widespread, spar-component will be accessible on more browsers.

# Known issues
