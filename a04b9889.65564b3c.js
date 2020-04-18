(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(6),i=(n(0),n(143)),b={title:"Muuri API"},l={id:"api-reference/muuri0.9.0",title:"Muuri API",description:"You can refer to the [Muuri](https://github.com/haltu/muuri) Github site for its documentation. Some methods that have been added or changed are reported here.",source:"@site/docs\\api-reference\\muuri0.9.0.mdx",permalink:"/muuri-react/docs/api-reference/muuri0.9.0",editUrl:"https://github.com/paol-imi/muuri-react/edit/master/website/docs/api-reference/muuri0.9.0.mdx"},c=[{value:"Grid methods \u2699\ufe0f",id:"grid-methods-\ufe0f",children:[{value:"grid.getId()",id:"gridgetid",children:[]},{value:"grid.getGroupIds()",id:"gridgetgroupids",children:[]},{value:"grid.getItem( target )",id:"gridgetitem-target-",children:[]},{value:"grid.getItems( targets )",id:"gridgetitems-targets-",children:[]},{value:"grid.move( item, position, options\xa0)",id:"gridmove-item-position-options-",children:[]},{value:"grid.send( item, grid, position, options\xa0)",id:"gridsend-item-grid-position-options-",children:[]}]},{value:"Item methods \u2699\ufe0f",id:"item-methods-\ufe0f",children:[{value:"item.getKey()",id:"itemgetkey",children:[]},{value:"item.getProps()",id:"itemgetprops",children:[]},{value:"item.getData()",id:"itemgetdata",children:[]},{value:"item.getGrid()",id:"itemgetgrid",children:[]},{value:"item.getElement()",id:"itemgetelement",children:[]}]},{value:"Muuri Map methods \u2699\ufe0f",id:"muuri-map-methods-\ufe0f",children:[{value:"muuriMap.get( id )",id:"muurimapget-id-",children:[]},{value:"muuriMap.getGroup( groupId )",id:"muurimapgetgroup-groupid-",children:[]}]}],o={rightToc:c};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can refer to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/haltu/muuri"}),"Muuri")," Github site for its documentation. Some methods that have been added or changed are reported here."),Object(i.b)("h2",{id:"grid-methods-\ufe0f"},"Grid methods \u2699\ufe0f"),Object(i.b)("p",null,"Methods added or modified in the Muuri instance. See more ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../usage/muuri"}),"here"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#gridgetid"}),"getId")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#gridgetgroupids"}),"getGroupIds")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#gridgetitem-target-"}),"getItem")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#gridgetitems-targets-"}),"getItems")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#gridmove-item-position-options-"}),"move")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#gridsend-item-grid-position-options-"}),"send"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"gridgetid"},"grid.getId()"),Object(i.b)("p",null,"Get the grid id."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<MuuriComponent id={"id"} />\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const id = grid.getId();\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"gridgetgroupids"},"grid.getGroupIds()"),Object(i.b)("p",null,"Get the grid group ids."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"string[]")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<MuuriComponent groupIds={["groupA", "groupB"]} />\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const groupIds = grid.getGroupIds();\n")),Object(i.b)("h3",{id:"gridgetitem-target-"},"grid.getItem( target )"),Object(i.b)("p",null,"Get a single grid item by element or by index. Target can also be a ",Object(i.b)("inlineCode",{parentName:"p"},"Muuri.Item")," instance in which case the function returns the item if it exists within related ",Object(i.b)("inlineCode",{parentName:"p"},"Muuri")," instance. If nothing is found with the provided target, ",Object(i.b)("inlineCode",{parentName:"p"},"null")," is returned."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"target")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"string / number / element / Muuri.Item"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"Muuri.Item / null")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Returns the queried item or ",Object(i.b)("inlineCode",{parentName:"li"},"null")," if no item is found.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<MuuriComponent>\n  <Item key={"key"} />\n</MuuriComponent>\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Get the item instance associated with the <Item> in first position.\nconst item = grid.getItem(0);\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// Get the item instance associated with the <Item> with the given key.\nconst item = grid.getItem("key");\n')),Object(i.b)("h3",{id:"gridgetitems-targets-"},"grid.getItems( ","[targets]"," )"),Object(i.b)("p",null,"Get all items in the grid. Optionally you can provide specific targets (indices or elements)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"targets")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"array / string / number / element / Muuri.Item"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"An array of item keys/indices/elements/instances."),Object(i.b)("li",{parentName:"ul"},"Optional.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"array")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Returns the queried items.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<MuuriComponent>\n  <Item key={"key1"} />\n  <Item key={"key2"} />\n</MuuriComponent>\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// Get all items instances.\nconst allItems = grid.getItems();\n\n// Get all active items instances associated with active <Item>s.\nconst activeItems = grid.getItems().filter((item) => item.isActive());\n\n// Get the item instance associated with the <Item> in first position.\nconst firstItem = grid.getItems(0)[0];\n\n// Get all active items instances associated with <Item>s with the given keys.\nconst items = grid.getItems(["key1", "key2"]);\n')),Object(i.b)("h3",{id:"gridmove-item-position-options-"},"grid.move( item, position, ","[options]","\xa0",")"),Object(i.b)("p",null,"Move an item to another position in the grid."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"item")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"string / number / element / Muuri.Item"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Item key, index, element or instance."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"position")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"string / number / element / Muuri.Item"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Item key, index, element or instance."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"options.action")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"string"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Accepts the following values:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'move'"),": moves item in place of another item."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'swap'"),": swaps position of items."))),Object(i.b)("li",{parentName:"ul"},"Default value: ",Object(i.b)("inlineCode",{parentName:"li"},"'move'"),"."),Object(i.b)("li",{parentName:"ul"},"Optional."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"options.layout")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"boolean / function / string"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"By default ",Object(i.b)("inlineCode",{parentName:"li"},"grid.layout()")," is called at the end of this method. With this argument you can control the layout call. You can disable the layout completely with ",Object(i.b)("inlineCode",{parentName:"li"},"false"),", or provide a callback function for the layout method, or provide the string ",Object(i.b)("inlineCode",{parentName:"li"},"'instant'")," to make the layout happen instantly without any animations."),Object(i.b)("li",{parentName:"ul"},"Default value: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},"Optional.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"Muuri")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Returns the grid instance.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<MuuriComponent>\n  <Item key={"key1"} />\n  <Item key={"key2"} />\n</MuuriComponent>\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// Move the first Item in the grid as the last.\ngrid.move(0, -1);\n\n// Swap positions of Items with the keys "key1" and "key2".\ngrid.move("key1", "key2", { action: "swap" });\n\n// Swap positions of the first and the last Item.\ngrid.move(0, -1, { action: "swap" });\n')),Object(i.b)("h3",{id:"gridsend-item-grid-position-options-"},"grid.send( item, grid, position, ","[options]","\xa0",")"),Object(i.b)("p",null,"Move an item into another grid. See more ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../usage/reparenting#manual-reparenting-"}),"here"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"item")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"string / number / element / Muuri.Item"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The item that should be moved. You can define the item with an item key, index, element or instance."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"grid")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"Muuri"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The grid where the item should be moved to."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"position")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"string / number / element / Muuri.Item"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"To which position should the item be placed to in the new grid? You can define the position with an item key, index, element or instance."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"options.appendTo")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"element"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Which element the item element should be appended to for the duration of the layout animation?"),Object(i.b)("li",{parentName:"ul"},"Default value: ",Object(i.b)("inlineCode",{parentName:"li"},"document.body"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"options.layoutSender")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"boolean / function / string"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"By default ",Object(i.b)("inlineCode",{parentName:"li"},"grid.layout()")," is called for the sending grid at the end of this method. With this argument you can control the layout call. You can disable the layout completely with ",Object(i.b)("inlineCode",{parentName:"li"},"false"),", or provide a callback function for the layout method, or provide the string ",Object(i.b)("inlineCode",{parentName:"li"},"'instant'")," to make the layout happen instantly without any animations."),Object(i.b)("li",{parentName:"ul"},"Default value: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},"Optional."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"options.layoutReceiver")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"boolean / function / string"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"By default ",Object(i.b)("inlineCode",{parentName:"li"},"grid.layout()")," is called for the receiving grid at the end of this method. With this argument you can control the layout call. You can disable the layout completely with ",Object(i.b)("inlineCode",{parentName:"li"},"false"),", or provide a callback function for the layout method, or provide the string ",Object(i.b)("inlineCode",{parentName:"li"},"'instant'")," to make the layout happen instantly without any animations."),Object(i.b)("li",{parentName:"ul"},"Default value: ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},"Optional.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"Muuri")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Returns the grid instance.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'// Grid A\n<MuuriComponent>\n  <Item key={"key1"} />\n</MuuriComponent>\n// Grid B\n<MuuriComponent>\n  <Item key={"key2"} />\n</MuuriComponent>\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// Move the first Item of gridA as the last Item of gridB.\ngridA.send(0, gridB, -1);\n\n// Move the Item with the key "key1" of gridA as the last Item of gridB.\ngridA.send("key1", gridB, -1);\n')),Object(i.b)("h2",{id:"item-methods-\ufe0f"},"Item methods \u2699\ufe0f"),Object(i.b)("p",null,"Methods added or modified in the item instance. See more ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../usage/muuri"}),"here"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#itemgetkey"}),"getKey")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#itemgetprops"}),"getProps")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#itemgetdata"}),"getData")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#itemgetgrid"}),"getGrid")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#itemgetelement"}),"getElement"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"itemgetkey"},"item.getKey()"),Object(i.b)("p",null,"Get the key of the item."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"React.Key")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const key = item.getKey();\n")),Object(i.b)("h3",{id:"itemgetprops"},"item.getProps()"),Object(i.b)("p",null,"Get the props of the item."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"object")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const props = item.getProps();\n")),Object(i.b)("h3",{id:"itemgetdata"},"item.getData()"),Object(i.b)("p",null,"Get the data of the item. See more ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../usage/items-data"}),"here"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"object")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const data = item.getData();\n")),Object(i.b)("h3",{id:"itemgetgrid"},"item.getGrid()"),Object(i.b)("p",null,"Get the grid instance the item belongs to."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"Muuri")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const grid = item.getGrid();\n")),Object(i.b)("h3",{id:"itemgetelement"},"item.getElement()"),Object(i.b)("p",null,"Get the item element."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"element")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const elem = item.getElement();\n")),Object(i.b)("h2",{id:"muuri-map-methods-\ufe0f"},"Muuri Map methods \u2699\ufe0f"),Object(i.b)("p",null,"You can use the muuriMap to access all the Muuri instances of the MuuriComponents via ids and groupIds. See more ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../usage/muuri"}),"here"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#muurimapget-id-"}),"get")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#muurimapgetgroup-groupid-"}),"getGroup"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"muurimapget-id-"},"muuriMap.get( id )"),Object(i.b)("p",null,"Get the Muuri instance associated with the MuuriComponent with the given id."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"id")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"string"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"Muuri")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Returns the Muuri instance.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<MuuriComponent id={"id"} />\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// The Muuri instance belonging to the\n// MuuriComponenent with the id: "id".\nconst grid = muuriMap.get("id");\n')),Object(i.b)("h3",{id:"muurimapgetgroup-groupid-"},"muuriMap.getGroup( groupId )"),Object(i.b)("p",null,"Get all the Muuri instances associated with MuuriComponents of the given group."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"groupId")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"li"},"string"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns")," ","\xa0","\u2014","\xa0"," ",Object(i.b)("em",{parentName:"p"},"Muuri[]")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Returns the Muuri instances.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<MuuriComponent groupIds={["groupId"]} />\n<MuuriComponent groupIds={["groupId"]} />\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// All the Muuri instances belonging to the\n// MuuriComponenents of the group: "groupId".\nconst grids = muuriMap.getGroup("groupId");\n')))}m.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),m=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=m(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,d=u["".concat(b,".").concat(s)]||u[s]||p[s]||i;return n?r.a.createElement(d,l({ref:t},o,{components:n})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var o=2;o<i;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);