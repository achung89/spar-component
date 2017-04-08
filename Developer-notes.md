# Purpose of SPAR component

SPAR component is a Single Page Application library that doesn't require any code to use. SPAR component pre-caches all routes and fetch pages lazily to for performance. 

# Design considerations

SPAR component was built on several core principles

## SPAR is minimalistic

SPAR component has two elements - spar-path and spar-link - and two atttributes - path and src. It was decided early on that there wouldn't be a parent 'router' component which is common in today's routers, and that this router would be free of dependencies. Expensive operations - ex. DOM manipulation - are done asynchronously.  

## SPAR is built on a "Async-fetch Sync-append" design

Probably the most important detail was that the SPAR router needed to emulate the browser's behavior when a page loaded, meaning that the contents of spar-path needed to be appended in the order that they appeared on the DOM tree. Since javascript does not have the means to fetch files synchronously, this proves to be a difficult challenge. However, it was decided that this feature was needed for the following reasons:

1) Synchronous appending would minimize DOM reflow. A reflow bottleneck would invalidate the performance benefits of a single page router.  
2) Script tags in different spar-path elements needed to run in the order in which they appeared on the page. SPAR component needed to match the developer's expectations that code would be run in order 

For the reasons above, the routes also needed to fetch and append any nested spar elements within the fetched files before attaching to the DOM. As such it was decided that Promise.all would not be a viable option since it wait for all spar-path elements on the page to finish fetching before fetching any nested spar-path elements.  

The solution that was felt to be optimal was to fetch all files asynchronously and to recursively track and manage the appending and fetching of routes and nested routes. The benefits of this is that since the algorithm is built on callbacks, all fetch and append events are non-blocking.

## SPAR was designed to be unopinionated

SPAR was designed to be flexible enough that the devloper could experiment with it. The hope was that if a developer thought that maybe something was possible with SPAR, that it was. An example of this is that SPAR will account for nested spar-path elements in fetched files. Admittedly, SPAR component still has some basic limitations as to how it can be used. For example, SPAR component can not use relative paths in src/href attributes in fetched files, it does not accept regex as pathnames, it does not accept params etc. The hope is that spar-component will allow for more freedom for the developer in the future.

# Browser compatability and Polyfilling

Polyfilling will be the next step in development. SPAR component currently passes all tests on google chrome, but will need time before it will be fully functional on firefox.  Webcomponents provides a [set of polyfills](https://github.com/webcomponents/webcomponentsjs) and over time, SPAR component will have the ability to fetch those when needed. 