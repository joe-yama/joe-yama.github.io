(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{72:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,n=!1,i=0;i<e.length;i++){var a=e[i];t&&/[a-zA-Z]/.test(a)&&a.toUpperCase()===a?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,n=r,r=!0,i++):r&&n&&/[a-zA-Z]/.test(a)&&a.toLowerCase()===a?(e=e.slice(0,i-1)+"-"+e.slice(i-1),n=r,r=!1,t=!0):(t=a.toLowerCase()===a&&a.toUpperCase()!==a,n=r,r=a.toUpperCase()===a&&a.toLowerCase()!==a)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var s,c,u,l;if(Array.isArray(e)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(!a(e[c],o[c]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!o.has(c.value[0]))return!1;for(l=e.entries();!(c=l.next()).done;)if(!a(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(l=e.entries();!(c=l.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((s=e.length)!=o.length)return!1;for(c=s;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!a(e[u[c]],o[u[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,i=r(7294),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function l(){c=e(u.map((function(e){return e.props}))),d.canUseDOM?t(c):r&&(c=r(c))}var d=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},o.render=function(){return a.createElement(n,this.props)},i}(i.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",s),d}}},6296:function(e,t,r){"use strict";r.d(t,{L:function(){return m},M:function(){return T},P:function(){return w},S:function(){return R},_:function(){return s},a:function(){return o},b:function(){return u},g:function(){return l},h:function(){return c}});var n=r(7294),i=(r(72),r(5697)),a=r.n(i);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(i[r]=e[r]);return i}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function u(e,t,r,n,i){return void 0===i&&(i={}),o({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},i,{opacity:t?1:0})})}function l(e,t,r,n,i,a,s,c){var u={};a&&(u.backgroundColor=a,"fixed"===r?(u.width=n,u.height=i,u.backgroundColor=a,u.position="relative"):("constrained"===r||"fullWidth"===r)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),c&&(u.objectPosition=c);var l=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return l}var d,f=["children"],p=function(e){var t=e.layout,r=e.width,i=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,r=s(e,f);return n.createElement(n.Fragment,null,n.createElement(p,o({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,r=e.srcSet,i=e.loading,a=e.alt,c=void 0===a?"":a,u=e.shouldLoad,l=s(e,h);return n.createElement("img",o({},l,{decoding:"async",loading:i,src:u?t:void 0,"data-src":u?void 0:t,srcSet:u?r:void 0,"data-srcset":u?void 0:r,alt:c}))},b=function(e){var t=e.fallback,r=e.sources,i=void 0===r?[]:r,a=e.shouldLoad,c=void 0===a||a,u=s(e,g),l=u.sizes||(null==t?void 0:t.sizes),d=n.createElement(y,o({},u,t,{sizes:l,shouldLoad:c}));return i.length?n.createElement("picture",null,i.map((function(e){var t=e.media,r=e.srcSet,i=e.type;return n.createElement("source",{key:t+"-"+i+"-"+r,type:i,media:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,sizes:l})})),d):d};y.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},b.displayName="Picture",b.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var v=["fallback"],w=function(e){var t=e.fallback,r=s(e,v);return t?n.createElement(b,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:i.string,sources:null==(d=b.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var T=function(e){return n.createElement(n.Fragment,null,n.createElement(b,o({},e)),n.createElement("noscript",null,n.createElement(b,o({},e,{shouldLoad:!0}))))};T.displayName="MainImage",T.propTypes=b.propTypes;var E,C,A=function(e,t,r){for(var n=arguments.length,i=new Array(n>3?n-3:0),o=3;o<n;o++)i[o-3]=arguments[o];return e.alt||""===e.alt?a().string.apply(a(),[e,t,r].concat(i)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},O={image:a().object.isRequired,alt:A},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],k=new Set,j=function(e){var t=e.as,i=void 0===t?"div":t,a=e.image,u=e.style,l=e.backgroundColor,d=e.className,f=e.class,p=e.onStartLoad,m=e.onLoad,h=e.onError,g=s(e,S),y=a.width,b=a.height,v=a.layout,w=function(e,t,r){var n={},i="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}(y,b,v),T=w.style,A=w.className,O=s(w,L),j=(0,n.useRef)(),x=(0,n.useMemo)((function(){return JSON.stringify(a.images)}),[a.images]);f&&(d=f);var P=function(e,t,r){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,y,b);return(0,n.useEffect)((function(){E||(E=Promise.all([r.e(774),r.e(587)]).then(r.bind(r,5989)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,n=j.current.querySelector("[data-gatsby-image-ssr]");return n&&c()?(n.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void k.add(x)):C&&k.has(x)?void 0:(E.then((function(r){var n=r.renderImageToString,i=r.swapPlaceholderImage;j.current&&(j.current.innerHTML=n(o({isLoading:!0,isLoaded:k.has(x),image:a},g)),k.has(x)||(e=requestAnimationFrame((function(){j.current&&(t=i(j.current,x,k,u,p,m,h))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[a]),(0,n.useLayoutEffect)((function(){k.has(x)&&C&&(j.current.innerHTML=C(o({isLoading:k.has(x),isLoaded:k.has(x),image:a},g)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[a]),(0,n.createElement)(i,o({},O,{style:o({},T,u,{backgroundColor:l}),className:A+(d?" "+d:""),ref:j,dangerouslySetInnerHTML:{__html:P},suppressHydrationWarning:!0}))},x=(0,n.memo)((function(e){return e.image?(0,n.createElement)(j,e):null}));x.propTypes=O,x.displayName="GatsbyImage";var P,I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],_=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?a().number.apply(a(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},N=new Set(["fixed","fullWidth","constrained"]),M={src:a().string.isRequired,alt:A,width:_,height:_,sizes:a().string,layout:function(e){if(void 0!==e.layout&&!N.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(P=x,function(e){var t=e.src,r=e.__imageData,i=e.__error,a=s(e,I);return i&&console.warn(i),r?n.createElement(P,o({image:r},a)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=M},8678:function(e,t,r){"use strict";var n=r(7294),i=r(6296),a=r(1597);t.Z=function(e){var t,o=e.location,s=e.title,c=e.children,u="/"===o.pathname;return t=n.createElement("div",{className:"bio"},n.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile_image.jpeg",width:75,height:75,quality:95,alt:"Profile picture",__imageData:r(6773)}),n.createElement(a.Link,{className:"header-link-home",to:"/"},n.createElement("h1",{className:"main-heading"},n.createElement(a.Link,{to:"/"},s)))),n.createElement("div",{className:"global-wrapper","data-is-root-path":u},n.createElement("header",{className:"global-header"},t),n.createElement("main",null,c),n.createElement("footer",null,"Copyright © ",(new Date).getFullYear(),","," ",n.createElement("a",{href:"https://github.com/joe-yama"},"joe-yama")," All Rights Reserved."))}},262:function(e,t,r){"use strict";r.d(t,{Z:function(){return be}});var n,i,a,o,s=r(7294),c=r(5697),u=r.n(c),l=r(4839),d=r.n(l),f=r(2993),p=r.n(f),m=r(6494),h=r.n(m),g="bodyAttributes",y="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",C="http-equiv",A="innerHTML",O="itemprop",S="name",L="property",k="rel",j="src",x="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",_="defer",N="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",q=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),z=[v.NOSCRIPT,v.SCRIPT,v.STYLE],D="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Q(e,v.TITLE),r=Q(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,I);return t||n||void 0},Z=function(e){return Q(e,M)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var s=a[o],c=s.toLowerCase();-1===t.indexOf(c)||r===k&&"canonical"===e[r].toLowerCase()||c===k&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==A&&s!==T&&s!==O||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var s=a[o],c=h()({},n[s],i[s]);n[s]=c}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,d=e.title,f=e.titleAttributes;ce(v.BODY,n),ce(v.HTML,i),se(d,f);var p={baseTag:ue(v.BASE,r),linkTags:ue(v.LINK,a),metaTags:ue(v.META,o),noscriptTags:ue(v.NOSCRIPT,s),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,l)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(v.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(D),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],u=t[c]||"";r.getAttribute(c)!==u&&r.setAttribute(c,u),-1===i.indexOf(c)&&i.push(c);var l=a.indexOf(c);-1!==l&&a.splice(l,1)}for(var d=a.length-1;d>=0;d--)r.removeAttribute(a[d]);i.length===a.length?r.removeAttribute(D):r.getAttribute(D)!==o.join(",")&&r.setAttribute(D,o.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(D,"true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[D]=!0,i=de(r,n),[s.createElement(v.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=le(r),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+K(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case y:return{toComponent:function(){return de(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[D]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===A||r===T){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),s.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,u=e.styleTags,l=e.title,d=void 0===l?"":l,f=e.titleAttributes;return{base:fe(v.BASE,t,n),bodyAttributes:fe(g,r,n),htmlAttributes:fe(y,i,n),link:fe(v.LINK,a,n),meta:fe(v.META,o,n),noscript:fe(v.NOSCRIPT,s,n),script:fe(v.SCRIPT,c,n),style:fe(v.STYLE,u,n),title:fe(v.TITLE,{title:d,titleAttributes:f},n)}},me=d()((function(e){return{baseTag:J([E,x],e),bodyAttributes:$(g,e),defer:Q(e,_),encode:Q(e,N),htmlAttributes:$(y,e),linkTags:G(v.LINK,[k,E],e),metaTags:G(v.META,[S,w,C,L,O],e),noscriptTags:G(v.NOSCRIPT,[A],e),onChangeClientState:Z(e),scriptTags:G(v.SCRIPT,[j,A],e),styleTags:G(v.STYLE,[T],e),title:V(e),titleAttributes:$(b,e)}}),(function(e){ie&&re(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),pe)((function(){return null})),he=(i=me,o=a=function(e){function t(){return U(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return B({},n,((t={})[r.type]=[].concat(n[r.type]||[],[B({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(n.type){case v.TITLE:return B({},i,((t={})[n.type]=o,t.titleAttributes=B({},a),t));case v.BODY:return B({},i,{bodyAttributes:B({},a)});case v.HTML:return B({},i,{htmlAttributes:B({},a)})}return B({},i,((r={})[n.type]=B({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=B({},t);return Object.keys(e).forEach((function(t){var n;r=B({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(W(i,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),n=B({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(i,n)},F(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(s.Component),a.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind;var ge=r(1597),ye=function(e){var t,r,n,i=e.description,a=e.lang,o=e.meta,c=e.title,u=(0,ge.useStaticQuery)("2841359383").site,l=i||u.siteMetadata.description,d=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return s.createElement(he,{htmlAttributes:{lang:a},title:c,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=u.siteMetadata)||void 0===r||null===(n=r.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:c},{name:"twitter:description",content:l},{name:"google-site-verification",content:"Ojy5Byfovql3qBA_h1nRnucbUg62fWC4dC_J4s1qiXk"}].concat(o)})};ye.defaultProps={lang:"ja",meta:[],description:""};var be=ye},6773:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080818","images":{"fallback":{"src":"/static/8d65dcaf90c378cb5c801eb378b1f9e3/d8275/profile_image.jpg","srcSet":"/static/8d65dcaf90c378cb5c801eb378b1f9e3/d8275/profile_image.jpg 75w,\\n/static/8d65dcaf90c378cb5c801eb378b1f9e3/b5649/profile_image.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/static/8d65dcaf90c378cb5c801eb378b1f9e3/26941/profile_image.avif 75w,\\n/static/8d65dcaf90c378cb5c801eb378b1f9e3/95309/profile_image.avif 150w","type":"image/avif","sizes":"75px"},{"srcSet":"/static/8d65dcaf90c378cb5c801eb378b1f9e3/a18cc/profile_image.webp 75w,\\n/static/8d65dcaf90c378cb5c801eb378b1f9e3/7ddcc/profile_image.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":75}')}}]);
//# sourceMappingURL=commons-410bb8602d30a8b54a1f.js.map