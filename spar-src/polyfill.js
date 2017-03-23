(()=>{
  var supportsCustomElementsV1 = supportsCustomElementsV1 || null;
  var supportsShadowDOMV1 = supportsShadowDOMV1 || null;
  function loadScript(src) {
    return new Promise(function(resolve, reject) {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Lazy load the polyfill if necessary.
  if (!supportsCustomElementsV1) {
    loadScript('../bower_components/custom-elements/custom-elements.min.js').then(e => {
      console.log('CustomElements polyfill loaded');
    }).catch(e=>{
      supportsCustomElementsV1 = null;
    })
  }
  //fix this polyfill script
  function loadScriptShadow(src) {
    return new Promise(function(resolve, reject) {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Lazy load the polyfill if necessary.
  if (!supportsShadowDOMV1) {
    loadScriptShadow('../bower_components/shadydom/shadydom.min.js').then(e => {
      return loadScriptShadow('../bower_components/shadycss/scoping-shim.min.js')}).then(e => {
      return loadScriptShadow('../bower_components/shadycss/apply-shim.min.js')}).then(e => {
      return loadScriptShadow('../bower_components/shadycss/custom-style-interface.min.js')}).then(e => {
          console.log('ShadowDOM polyfill loaded');
    });
  }
})();