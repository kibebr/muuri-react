(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return m}));var i=n(1),r=n(6),a=(n(0),n(143)),l={title:"Elements"},c={id:"main-concepts/elements",title:"Elements",description:"In this chapter we analyze the rules by which the components generate the `DOM elements`.",source:"@site/docs\\main-concepts\\elements.mdx",permalink:"/muuri-react/docs/main-concepts/elements",editUrl:"https://github.com/paol-imi/muuri-react/edit/master/website/docs/main-concepts/elements.mdx",sidebar:"someSidebar",previous:{title:"Components",permalink:"/muuri-react/docs/main-concepts/components"},next:{title:"Style rules \ud83d\udcdc",permalink:"/muuri-react/docs/main-concepts/style-rules"}},o=[{value:"MuuriComponent \ud83d\udce6",id:"muuricomponent-",children:[]},{value:"Item \ud83d\udee0\ufe0f",id:"item-\ufe0f",children:[]},{value:"CSS classes \ud83c\udfad",id:"css-classes-",children:[]}],s={rightToc:o};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this chapter we analyze the rules by which the components generate the ",Object(a.b)("inlineCode",{parentName:"p"},"DOM elements"),"."),Object(a.b)("h2",{id:"muuricomponent-"},"MuuriComponent \ud83d\udce6"),Object(a.b)("p",null,"The MuuriComponent generate a ",Object(a.b)("inlineCode",{parentName:"p"},"div")," element in wich the Items are contained. You can interact with it using this ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"../api-reference/muuricomponent#gridprops"}),"prop"),"."),Object(a.b)("h2",{id:"item-\ufe0f"},"Item \ud83d\udee0\ufe0f"),Object(a.b)("p",null,"The Items must always consist of at least two elements:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"outer element")," ",Object(a.b)("em",{parentName:"li"},"(used for positioning)"),"."),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"inner element")," ",Object(a.b)("em",{parentName:"li"},"(used for animating the Item's visibility)"),".")),Object(a.b)("p",null,"You can insert any markup you wish inside the inner Item element."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),'const Item = () => (\n  <div className="item">\n    <div className="item-content">\n      {/* Safe zone, enter your custom markup */}\n      This can be anything.\n      {/* Safe zone ends */}\n    </div>\n  </div>\n);\n')),Object(a.b)("p",null,"You can create Items of any ",Object(a.b)("inlineCode",{parentName:"p"},"size"),", based on the CSS style of the outer element:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The size of the Items will depend on the CSS ",Object(a.b)("inlineCode",{parentName:"li"},"width"),", ",Object(a.b)("inlineCode",{parentName:"li"},"height"),", ",Object(a.b)("inlineCode",{parentName:"li"},"padding")," and ",Object(a.b)("inlineCode",{parentName:"li"},"border")," properties."),Object(a.b)("li",{parentName:"ul"},"The distances between the Items will depend on the CSS ",Object(a.b)("inlineCode",{parentName:"li"},"margin")," property.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-css"}),".muuri-item {\n  width: 100px;\n  height: 100px;\n  margin: 10px;\n}\n")),Object(a.b)("h2",{id:"css-classes-"},"CSS classes \ud83c\udfad"),Object(a.b)("p",null,"Some specific ",Object(a.b)("inlineCode",{parentName:"p"},"CSS classes")," are added to the DOM elements of the components."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"One class is added in relation of the component ",Object(a.b)("inlineCode",{parentName:"li"},"type"),"."),Object(a.b)("li",{parentName:"ul"},"Others class are added in relation to the ",Object(a.b)("em",{parentName:"li"},"(eventual)")," ",Object(a.b)("inlineCode",{parentName:"li"},"event")," which is interacting with the Item.")),Object(a.b)("p",null,"You can define these classes to manipulate the ",Object(a.b)("inlineCode",{parentName:"p"},"style")," of the DOM elements. The CSS classes are the following."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"// Type classes.\n{\n  // The class of the element generated by the MuuriComponent.\n  containerClass: 'muuri',\n  // The class of the (outer) element generated by the Item.\n  itemClass: 'muuri-item'\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"// State classes.\n{\n  // The class of the (outer) item element while it is shown.\n  itemVisibleClass: 'muuri-item-shown',\n  // The class of the (outer) item element while it is hidden.\n  itemHiddenClass: 'muuri-item-hidden',\n  // The class of the (outer) item element while it is being positioned.\n  itemPositioningClass: 'muuri-item-positioning',\n  // The class of the (outer) item element while it is being dragged.\n  itemDraggingClass: 'muuri-item-dragging',\n  // The class of the (outer) item element while it is being released.\n  itemReleasingClass: 'muuri-item-releasing'\n}\n")))}m.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),b=i,d=u["".concat(l,".").concat(b)]||u[b]||p[b]||a;return n?r.a.createElement(d,c({ref:t},s,{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);