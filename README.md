# Single Page Application Router (SPAR)

*As WebComponent is still a developing technology, SPAR component is not fully supported on all browsers. SPAR component works best on chrome and polyfills to firefox, but work still need to be done before it is production ready*

[Click here for demo](https://achung89.github.io/spar-component/demo.html)

```html
<spar-link path = "aboutus"> Navigate to about us page </spar-link>
<spar-path path = "aboutus" src = "../src/aboutus.html"></spar-path>
```
Spar-component is an unopinionated declarative single page router made with [webcomponents](https://developer.mozilla.org/en-US/docs/Web/Web_Components) technology. It allows developers to incorporate SPA navigation. To use spar, simply:

1) Declare a spar-path element with a "path" attribute for the pathname and a "src" attribute pointing to a html file
2) Declare a spar-link element with a "path" attribute matching the path (replaces anchor tags)

The contents of the fetched file will be appended to the route-element. Multiple spar-path elements can be declared for a single pathname.

Spar-component also allows nesting spar-paths meaning you can place spar-path elements in the fetched html files.

# Spar-frame

The spar-frame allows you to put contents of multiple route elements in a single file. The contents are separated by a 'spar-frame' tag

helloworld.html
```html
<spar-frame id = "header">
<div>This text appears in the header frame</div>
</spar-frame>

<spar-frame id = "body">
<div>This text appears in the body frame</div>
</spar-frame>

<spar-frame id = "code">
<script>
  function fn() {
    ...
  }
</script>
</spar-frame>
```

index.html
```html
<spar-path path = "/helloworld" frame-id = "code" src = "helloworld.html"></spar-path>
<spar-path path = "/helloworld" frame-id = "header" src = "helloworld.html"></spar-path>
<spar-path path = "/helloworld" frame-id = "body" src = "helloworld.html"></spar-path>
```

Using spar-frames allows for quicker load time since only a single file is fetched and parsed.

# PRPL

Spar-component models the [PRPL pattern by google](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) for resource loading. It:

1) Marks the index as an entry point for other files
2) Renders the index routes after the html is parsed
3) Caches all routes after the document has loaded

# Design

Spar-component fetches routes asynchronously and appends them in top-down page order to minimize DOM reflow. On a path change, the route will:

1) Fetch all routes asynchronously
2) Invoke a callback upon receiving a file which will...
    - parse the file
    - append the contents if route elements higher up in the DOM tree have already been appended
    - otherwise store the contents until previous elements are appended
3) If the fetched contents have nested spar-path/s than the appending will be delayed until after the child spar-path element fetches and appends its children. This is to reduce DOM reflow that may occur if the the children spar-path contents are appended after the parent's content has already been attached to the DOM. These chain of events are triggered by an asynchronous callback, meaning they will not interfere with eachother.

Appending routes in order in which they appear on the page also ensures that script tags are executed in order.

For more information about SPAR component, you can check out the [developer notes](https://github.com/achung89/spar-component/blob/master/Developer-notes.md)

# Future features
Adding a Route-config file
Base path matching (ex. /^aboutus === /aboutus/(path) )
Passing in params to routes 
Polyfill features to Firefox, IE, and Safari


