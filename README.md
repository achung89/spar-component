# Single Page Application Router (SPAR)
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
<spr-link path = "aboutus"> Navigate to about us page </spr-link>
<spr-route path = "aboutus" src = "../src/aboutus.html"></spr-route>

```
Spar-component is an unopinionated declarative single page router made with webcomponents (link). It allows for single page navigation without the use of javascript. To use spar, simply:

1) Declare a spr-route element with a "path" attribute for the pathname and a "src" attribute pointing to a html file containing the child elements
2) Declare a spr-link element with a "path" attribute matching the spr-route

The contents of the fetched file will be appended to the route-element. Multiple spr-route elements can be declared for a single path and contents can be placed directly in the spr-route tag.

```html
<spr-route path = '/'><div>Welcome to the home page<div></spr-route>
```

Spar-component also allows for nested spr-routes. It allows for placing spar-elements wi

# Spar-frame

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
<spr-route  path="/helloworld" frame-id="code" src="helloworld.html"></spr-route>
<spr-route path="/helloworld" frame-id="header" src="helloworld.html"></spr-route>
<spr-route path="/helloworld" frame-id="body" src="helloworld.html"></spr-route>
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
3) If the fetched contents have nested spr-route elements, than the algorithm will delay appending the contents until after the child spr-route elements fetch and append their children. All of these methods are performed asynchronously.  

Appending routes in order and appending the contents of nested spar elements before attaching them to the DOM tree minimizes the effects of DOM reflow. It also ensures that all script tags that are fetched are executed in the order that they appear on the page.  

# Support 
At the moment, webcomponents and HTMLImport tags are only supported by google chrome, and the current polyfill seems to break the spar-element. As webcomponents become more widely accepted, spar-component will work to be more accessibly be more browsers.

# Known issues
