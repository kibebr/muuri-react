(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{123:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return l})),n.d(e,"metadata",(function(){return u})),n.d(e,"rightToc",(function(){return i})),n.d(e,"default",(function(){return s}));var a=n(1),o=n(6),r=(n(0),n(143)),l={title:"Layout \ud83d\udcd0"},u={id:"usage/layout",title:"Layout \ud83d\udcd0",description:"Muuri-react ships with a configurable `layout` algorithm which is used by default. It's pretty flexible and suitable for most common situations (lists, grids and more). You can simply create your Items with any **size** and **margin**, and the layout will do all the work.",source:"@site/docs\\usage\\layout.mdx",permalink:"/muuri-react/docs/usage/layout",editUrl:"https://github.com/paol-imi/muuri-react/edit/master/website/docs/usage/layout.mdx"},i=[{value:"Custom layout \u2699\ufe0f",id:"custom-layout-\ufe0f",children:[]}],c={rightToc:i};function s(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Muuri-react ships with a configurable ",Object(r.b)("inlineCode",{parentName:"p"},"layout")," algorithm which is used by default. It's pretty flexible and suitable for most common situations (lists, grids and more). You can simply create your Items with any ",Object(r.b)("strong",{parentName:"p"},"size")," and ",Object(r.b)("strong",{parentName:"p"},"margin"),", and the layout will do all the work."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// Customize the default layout algorithm.\n<MuuriComponent\n  layout={{\n    fillGaps: true,\n    horizontal: true,\n    alignRight: true,\n    alignBottom: true,\n    rounding: false\n  }}\n>\n")),Object(r.b)("p",null,"If that does not fit the bill you can always provide ",Object(r.b)("inlineCode",{parentName:"p"},"your own layout")," algorithm (it's not as scary as it sounds)."),Object(r.b)("p",null,"Muuri-react supports calculating the layout both ",Object(r.b)("strong",{parentName:"p"},"synchronously")," and ",Object(r.b)("strong",{parentName:"p"},"asynchronously"),". By default (if you use the default layout algorithm) Muuri will use two shared web workers to compute the layouts asynchronously. In browsers that do not support web workers Muuri will fallback to synchronous layout calculations."),Object(r.b)("h2",{id:"custom-layout-\ufe0f"},"Custom layout \u2699\ufe0f"),Object(r.b)("p",null,"When you provide a ",Object(r.b)("strong",{parentName:"p"},"custom layout")," function Muuri-react calls it whenever calculation of layout is necessary. Before calling the layout function Muuri-react always calculates the current width and height of the grid's container element and also creates an array of all the Items that are part of the layout currently. See the full APIs ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../api-reference/muuricomponent#layout"}),"here"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"// Build your own layout algorithm.\n<MuuriComponent\n  layout={function (grid, layoutId, items, width, height, callback) {\n    const layout = {\n      id: layoutId,\n      items: items,\n      slots: [],\n      styles: {}\n    };\n\n    // Calculate the slots asynchronously. Note that the timeout is here only\n    // as an example and does not help at all in the calculations. You should\n    // offload the calculations to web workers if you want real benefits.\n    // Also note that doing asynchronous layout is completely optional and you\n    // can call the callback function synchronously also.\n    const timerId = window.setTimeout(function () {\n      var item, m, x = 0, y = 0, w = 0, h = 0;\n\n      for (var i = 0; i < items.length; i++) {\n        item = items[i];\n        x += w;\n        y += h;\n        m = item.getMargin();\n        w = item.getWidth() + m.left + m.right;\n        h = item.getHeight() + m.top + m.bottom;\n        layout.slots.push(x, y);\n      }\n\n      w += x;\n      h += y;\n      // Set the CSS styles that should be applied to the grid element.\n      layout.styles.width = w + 'px';\n      layout.styles.height = h + 'px';\n\n      // When the layout is fully computed let's call the callback function and\n      // provide the layout object as it's argument.\n      callback(layout);\n    }, 200);\n\n    // If you are doing an async layout you _can_ (if you want to) return a\n    // function that cancels this specific layout calculations if it's still\n    // processing/queueing when the next layout is requested.\n    return function () {\n      window.clearTimeout(timerId);\n    };\n  }}\n>\n")))}s.isMDXComponent=!0},143:function(t,e,n){"use strict";n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=o.a.createContext({}),s=function(t){var e=o.a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):u({},e,{},t)),n},y=function(t){var e=s(t.components);return o.a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},m=Object(a.forwardRef)((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),y=s(n),m=a,h=y["".concat(l,".").concat(m)]||y[m]||p[m]||r;return n?o.a.createElement(h,u({ref:e},c,{components:n})):o.a.createElement(h,u({ref:e},c))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,l=new Array(r);l[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:a,l[1]=u;for(var c=2;c<r;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);