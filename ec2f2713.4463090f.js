(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(6),a=(n(0),n(143)),s=n(145),i={title:"Sorting"},c={id:"usage/sorting",title:"Sorting",description:'import useBaseUrl from "@docusaurus/useBaseUrl";',source:"@site/docs\\usage\\sorting.mdx",permalink:"/muuri-react/docs/usage/sorting",editUrl:"https://github.com/paol-imi/muuri-react/edit/master/website/docs/usage/sorting.mdx",sidebar:"someSidebar",previous:{title:"Filtering",permalink:"/muuri-react/docs/usage/filtering"},next:{title:"Hooks \ud83d\udd0c",permalink:"/muuri-react/docs/usage/hooks"}},p=[{value:"3 ways \u2618\ufe0f",id:"3-ways-\ufe0f",children:[]},{value:"Usage \ud83d\udcd6 <em>(function)</em>",id:"usage--function",children:[]},{value:"Usage \ud83d\udcd6 <em>(string)</em>",id:"usage--string",children:[]},{value:"Usage \ud83d\udcd6 <em>(keys)</em>",id:"usage--keys",children:[]},{value:"Sort options \u2699\ufe0f",id:"sort-options-\ufe0f",children:[]},{value:"Store sort order \ud83d\udcbe",id:"store-sort-order-",children:[]},{value:"How is that possible? \ud83e\udd28",id:"how-is-that-possible-\ud83e\udd28",children:[]}],m={rightToc:p};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Sorting can be managed through the ",Object(a.b)("inlineCode",{parentName:"p"},"sort")," prop of the MuuriComponent. The sort will be updated every time that the MuuriComponent ",Object(a.b)("inlineCode",{parentName:"p"},"re-rendered")," with a new value in the prop or an Item is added."),Object(a.b)("img",{src:Object(s.a)("gifs/sorting.gif"),className:"shadow",style:{width:"60%"}}),Object(a.b)("p",null,"The MuuriComponent sorts the ",Object(a.b)("inlineCode",{parentName:"p"},"DOM elements")," according to how it is set up, this sorting has nothing to do with the sorting of the ",Object(a.b)("inlineCode",{parentName:"p"},"Item")," components you use. In fact, you will never have to sort the ",Object(a.b)("inlineCode",{parentName:"p"},"Item")," components, they can stay (or be added) in any position."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'// Manages the sort order \u2193\u2193\u2193\n<MuuriComponent sort={sortValue}>\n  {/* Items can be in any order */}\n  <Item key="1" />\n  <Item key="2" />\n</MuuriComponent>\n')),Object(a.b)("h2",{id:"3-ways-\ufe0f"},"3 ways \u2618\ufe0f"),Object(a.b)("p",null,"There are two ways to sort the Items ",Object(a.b)("strong",{parentName:"p"},"based on their data"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Using a ",Object(a.b)("inlineCode",{parentName:"li"},"function")," as the comparer, which will receive the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../usage/items-data"}),"data")," of two Items to compare as arguments. It works almost identically to native array sort, the only difference is that the sort is always stable."),Object(a.b)("li",{parentName:"ul"},"Using the ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"../usage/items-data"}),"data")," key(s) as a ",Object(a.b)("inlineCode",{parentName:"li"},"string")," (separated by space) and the Items will be sorted based on the provided data keys.")),Object(a.b)("p",null,"There is one other way that is ",Object(a.b)("strong",{parentName:"p"},"not based on data"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Using an ordered list of Items ",Object(a.b)("inlineCode",{parentName:"li"},"keys"),".")),Object(a.b)("h2",{id:"usage--function"},"Usage \ud83d\udcd6 ",Object(a.b)("em",{parentName:"h2"},"(function)")),Object(a.b)("p",null,"In the example the Items are distinguished by an ",Object(a.b)("inlineCode",{parentName:"p"},"id"),", we want to sort them on that id."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const App = () => {\n  // Items.\n  const [items, setItems] = useState([{ id: "1" }, { id: "2" }, { id: "3" }]);\n\n  // Items to components.\n  const children = items.map((item) => <Item key={item.id} id={item.id} />);\n\n  // Memoized filter method.\n  const sort = useCallback((dataItemA, dataItemB) => {\n    const idA = parseInt(dataItemA.id);\n    const idB = parseInt(dataItemB.id);\n\n    return idA - idB;\n  }, []);\n\n  // Render.\n  return (\n    <MuuriComponent propsToData={({ id }) => ({ id })} sort={sort}>\n      {children}\n    </MuuriComponent>\n  );\n};\n')),Object(a.b)("h2",{id:"usage--string"},"Usage \ud83d\udcd6 ",Object(a.b)("em",{parentName:"h2"},"(string)")),Object(a.b)("p",null,"In the example the Items are distinguished by an id and a ",Object(a.b)("inlineCode",{parentName:"p"},"text"),", we want to sort them on that text. If 2 Items have the same text, we will sort them by their ",Object(a.b)("inlineCode",{parentName:"p"},"id")," (in ",Object(a.b)("inlineCode",{parentName:"p"},"descending")," order)."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const App = () => {\n  // Items.\n  const [items, setItems] = useState([\n    { id: "1", text: "as" },\n    { id: "2", text: "gg" },\n    { id: "3", text: "st" }\n  ]);\n\n  // Items to components.\n  const children = items.map((item) => (\n    <Item key={item.id} id={item.id} text={item.text} />\n  ));\n\n  // Render.\n  return (\n    <MuuriComponent\n      propsToData={({ id, text }) => ({ id, text })}\n      sort={"text id:desc"}\n    >\n      {children}\n    </MuuriComponent>\n  );\n};\n')),Object(a.b)("h2",{id:"usage--keys"},"Usage \ud83d\udcd6 ",Object(a.b)("em",{parentName:"h2"},"(keys)")),Object(a.b)("p",null,"In the example the Items will be sorted by their ",Object(a.b)("inlineCode",{parentName:"p"},"keys"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const App = () => {\n  const [sort] = useState(["k3", "k2", "k1"]);\n\n  // Items.\n  const [items, setItems] = useState([\n    { key: "k1" },\n    { key: "k2" },\n    { key: "k3" }\n  ]);\n\n  // Items to components.\n  const children = items.map((item) => <Item key={item.key} />);\n\n  // Render.\n  return <MuuriComponent sort={sort}>{children}</MuuriComponent>;\n};\n')),Object(a.b)("h2",{id:"sort-options-\ufe0f"},"Sort options \u2699\ufe0f"),Object(a.b)("p",null,"You can decide to sort in ",Object(a.b)("inlineCode",{parentName:"p"},"descending")," order using the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../api-reference/muuricomponent#sortoptions"}),"sortOptions"),". If you want to avoid unnecessary re-sorting during a re-render, remember to memoize the options."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'  // ...\n  const [sort] = useState({\n    value: "text",\n    options: { descending: true }\n  })\n\n  <MuuriComponent\n    sort={sort.value}\n    sortOptions={sort.options}\n  >\n')),Object(a.b)("h2",{id:"store-sort-order-"},"Store sort order \ud83d\udcbe"),Object(a.b)("p",null,"You can get the ordered array of ",Object(a.b)("strong",{parentName:"p"},"keys")," of the ",Object(a.b)("inlineCode",{parentName:"p"},"Item")," components. This array can be used at any time to sort the Items."),Object(a.b)("p",null,"It is possible to store the keys after a ",Object(a.b)("strong",{parentName:"p"},"drag")," event \ud83d\udcbe."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<MuuriComponent\n  onDragEnd={function (item) {\n    const grid = item.getGrid();\n    const items = grid.getItems();\n    const keys = items.map((item) => item.getKey());\n\n    sendKeysToMyRemoteStore(keys); // keys: ["1", "2"]\n  }}\n>\n  <Item key="1" />\n  <Item key="2" />\n</MuuriComponent>\n')),Object(a.b)("p",null,"It is also possible to store them after each new ",Object(a.b)("strong",{parentName:"p"},"sort")," \ud83d\udcbe."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<MuuriComponent\n  onSort={function (currentOrder) {\n    const keys = currentOrder.map((item) => item.getKey());\n\n    sendKeysToMyRemoteStore(keys); // keys: ["1", "2"]\n  }}\n>\n  <Item key="1" />\n  <Item key="2" />\n</MuuriComponent>\n')),Object(a.b)("p",null,"And then apply the ",Object(a.b)("strong",{parentName:"p"},"sort")," \ud83d\udd04."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'<MuuriComponent\n  sort={getKeysFromMyRemoteStore()} // ["1", "2"]\n>\n')),Object(a.b)("p",null,"As said before you don't have to worry about the ",Object(a.b)("strong",{parentName:"p"},"position")," of the components, they can be in any order."),Object(a.b)("h2",{id:"how-is-that-possible-\ud83e\udd28"},"How is that possible? \ud83e\udd28"),Object(a.b)("p",null,"You may have wondered how the sorting of the ",Object(a.b)("inlineCode",{parentName:"p"},"Item")," components ",Object(a.b)("strong",{parentName:"p"},"does not affect")," the sorting of DOM elements. This is because the elements are positioned via CSS properties, so you ",Object(a.b)("strong",{parentName:"p"},"don't have to reorder")," the ",Object(a.b)("inlineCode",{parentName:"p"},"Item")," components after the sort is applied. This allows an ",Object(a.b)("strong",{parentName:"p"},"extremely simple")," use of the library."),Object(a.b)("img",{src:Object(s.a)("gifs/howisitpossible.gif")}))}b.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),m=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=m(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=m(n),l=r,d=b["".concat(s,".").concat(l)]||b[l]||u[l]||a;return n?o.a.createElement(d,i({ref:t},p,{components:n})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},144:function(e,t,n){"use strict";var r=n(0),o=n(35);t.a=function(){return Object(r.useContext)(o.a)}},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(144);function o(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}}}]);