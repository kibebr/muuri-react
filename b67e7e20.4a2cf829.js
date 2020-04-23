(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(6),i=(n(0),n(145)),o={title:"useRefresh"},s={id:"hooks/useRefresh",title:"useRefresh",description:"```js",source:"@site/docs\\hooks\\useRefresh.mdx",permalink:"/muuri-react/docs/hooks/useRefresh",editUrl:"https://github.com/paol-imi/muuri-react/edit/master/website/docs/hooks/useRefresh.mdx",sidebar:"someSidebar",previous:{title:"useGrid",permalink:"/muuri-react/docs/hooks/useGrid"},next:{title:"useShow",permalink:"/muuri-react/docs/hooks/useShow"}},c=[{value:"Usage \ud83d\udcd6",id:"usage-",children:[]}],u={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import {useRefresh} from 'muuri-react';\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"useRefresh")," hook allow you to notify the MuuriComponent that the Item dimensions are changed, so that it can update the layout."),Object(i.b)("h2",{id:"usage-"},"Usage \ud83d\udcd6"),Object(i.b)("p",null,"Given this simple style."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),"/* Small item */\n.item-small {\n  width: 50px;\n  height: 50px;\n}\n\n/* Large item */\n.item-large {\n  width: 100px;\n  height: 100px;\n}\n")),Object(i.b)("p",null,"The Item in the example below will change its dimensions every time it is clicked.\nThe useRefresh hook is used with the size value as a ",Object(i.b)("inlineCode",{parentName:"p"},"dependency"),". Like useEffect, it will activate whenever a dependency changes and it will notify the MuuriComponent to update the layout."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const Item = () => {\n  // Size is used as initial state.\n  const [size, setSize] = useState('small');\n  // Change the size.\n  const changeSize = (size) => {\n    if (size === 'large') return 'small';\n    if (size === 'small') return 'large';\n  };\n\n  // Each time the dependency changes the grid size is updated.\n  useRefresh([size]);\n\n  return (\n    <div className={`item item-${size}`}>\n      <div className=\"item-content\" onClick={() => setSize(changeSize)} />\n    </div>\n  );\n};\n")),Object(i.b)("p",null,"It's also possible to notify the MuuriComponent using the ",Object(i.b)("inlineCode",{parentName:"p"},"refresh")," method returned by the hook. This method has fewer applications, but has the same effect as the previous one."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const refresh = useRefresh();\n// Call the method when the size changes.\nuseEffect(() => {\n  refresh();\n}, [size]);\n")),Object(i.b)("p",null,"The Item won't re-render after the hook took effect."))}l.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||h[m]||i;return n?a.a.createElement(f,s({ref:t},u,{components:n})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);