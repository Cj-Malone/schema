"use strict";(self.webpackChunkoverture_schema=self.webpackChunkoverture_schema||[]).push([[428],{5162:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(7294),i=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var n=a(7462),i=a(7294),l=a(6010),o=a(2466),r=a(6550),s=a(1980),p=a(7392),d=a(12);function c(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function m(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function I(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[o,r]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,p]=h({queryString:a,groupId:n}),[c,I]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=s??c;return u({value:e,tabValues:l})?e:null})();(0,i.useLayoutEffect)((()=>{b&&r(b)}),[b]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),p(e),I(e)}),[p,I,l]),tabValues:l}}var b=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function Z(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==r&&(c(t),s(n))},u=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>d.push(e),onKeyDown:u,onClick:m},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=I(e);return i.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},i.createElement(Z,(0,n.Z)({},e,t)),i.createElement(y,(0,n.Z)({},e,t)))}function W(e){const t=(0,b.Z)();return i.createElement(v,(0,n.Z)({key:String(t)},e))}},446:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>v,frontMatter:()=>u,metadata:()=>I,toc:()=>g});var n=a(7462),i=(a(7294),a(3905)),l=a(814),o=a(4866),r=a(5162);const s='---\nid: overture:transportation:example:geometric-scoping\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates: [[0, 0], [1, 1]] #TODO get some real geometry\nproperties:\n  theme: transportation\n  type: segment\n  version: 0\n  updateTime: "2023-06-15T17:24:01-06:00"\n  subType: road\n  road:\n    restrictions:\n      speedLimits:\n        - at: [0, 0.15]               # TODO: Put real values.\n          maxSpeed: [100, "km/h"]\n        - at: [0.15, 1]\n          maxSpeed: [60, "km/h"]\n',p='---\nid: overture:transportation:example:temporal-scoping\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-122.90019762265949, 49.20784664905824]\n    - [-122.9003738558948, 49.207833436710956]\n    - [-122.90052986564378, 49.207871186265805]\nproperties:\n  theme: transportation\n  type: segment\n  version: 0\n  updateTime: "2023-06-16T10:33:00-06:00"\n  subType: road\n  road:\n    restrictions:\n      access:\n        - denied: { during: "Mo-Fr 15:00-18:00" }\n          when: { notMode: [bus] }\n',d='---\nid: overture:transportation:example:subjective-usage-purpose-scoping\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-123.12700676422021, 49.279826628301635]\n    - [-123.12680748254229, 49.27995121574301]\nproperties:\n  theme: transportation\n  type: segment\n  version: 0\n  updateTime: "2023-06-16T10:33:00-06:00"\n  subType: road\n  road:\n    restrictions:\n      access:\n        - denied\n        - allowed:\n            when: { using: [asCustomer, atDestination] }\n',c='---\nid: overture:transportation:example:subjective-status-scoping\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-123.12791513926058, 49.287502049554945]\n    - [-123.12795068403449, 49.287522915661725]\n    - [-123.12797769806272, 49.28756882106529]\nproperties:\n  theme: transportation\n  type: segment\n  version: 0\n  updateTime: "2023-06-16T14:08:00-06:00"\n  subType: road\n  road:\n    restrictions:\n      access:\n        - denied\n        - allowed:\n            when: { recognized: [asPrivate] }\n',m='---\nid: overture:transportation:example:lanes-absolute\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - [-123.13174398677468, 49.28492173297815]\n    - [-123.13015725772073, 49.283923094445726]\nproperties:\n  theme: transportation\n  type: segment\n  version: 0\n  updateTime: "2023-06-16T15:33:00-06:00"\n  subType: road\n  road:\n    lanes:\n      - direction: backward\n      - direction: forward\n',u={},h="Scoped and Rule-Based Properties",I={unversionedId:"themes/transportation/scoping-rules",id:"themes/transportation/scoping-rules",title:"Scoped and Rule-Based Properties",description:"In the real-world, many facts and rules affecting transportation have",source:"@site/docs/themes/transportation/scoping-rules.mdx",sourceDirName:"themes/transportation",slug:"/themes/transportation/scoping-rules",permalink:"/themes/transportation/scoping-rules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Shape and Connectivity",permalink:"/themes/transportation/shape-connectivity"},next:{title:"Roads",permalink:"/themes/transportation/roads"}},b={},g=[{value:"Scoped values and Scoping properties",id:"scoped-values-and-scoping-properties",level:2},{value:"Geometric scoping (linear referencing)",id:"geometric-scoping-linear-referencing",level:3},{value:"Temporal scoping (opening hours)",id:"temporal-scoping-opening-hours",level:3},{value:"Subjective scoping",id:"subjective-scoping",level:3},{value:"Travel mode scoping",id:"travel-mode-scoping",level:4},{value:"Purpose of use scoping",id:"purpose-of-use-scoping",level:4},{value:"Status scoping (membership in a recognized group)",id:"status-scoping-membership-in-a-recognized-group",level:4},{value:"Vehicle attributes scoping",id:"vehicle-attributes-scoping",level:4},{value:"Rules and rule-based properties",id:"rules-and-rule-based-properties",level:2},{value:"Absolute form",id:"absolute-form",level:3},{value:"Rule evaluation algorithm",id:"rule-evaluation-algorithm",level:3}],Z={toc:g},y="wrapper";function v(e){let{components:t,...u}=e;return(0,i.kt)(y,(0,n.Z)({},Z,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scoped-and-rule-based-properties"},"Scoped and Rule-Based Properties"),(0,i.kt)("p",null,"In the real-world, many facts and rules affecting transportation have\nonly a partial application, meaning they don't apply everywhere, or\nthey don't apply at all times, or to all travellers, or to all sets of\nexternal conditions. For example, access restrictions on a road segment\nmight not apply to all people or all kinds of vehicles, or they might\nvary according to the day of the week."),(0,i.kt)("p",null,"The Overture Transportation theme's schema model of the transportation\nnetwork uses two related concepts to capture the partial application of\nfacts and rules: Scoped values, and Rule-based properties."),(0,i.kt)("h2",{id:"scoped-values-and-scoping-properties"},"Scoped values and Scoping properties"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"Scoped")," value is a value which only applies within a limited scope.\nMost scoped values are rules in the rule lists of\n",(0,i.kt)("a",{parentName:"p",href:"#rules-and-rule-based-properties"},"Rule-based properties"),". However,\nscoped values also exist outside of rule-based properties. For\nexample a signpost property belonging to a road segment might be\ngeometrically scoped to its position along the road."),(0,i.kt)("p",null,"The scope in which a scoped value applies is controlled by one or more\nspecial child properties of the value known as ",(0,i.kt)("em",{parentName:"p"},"Scoping")," properties."),(0,i.kt)("h3",{id:"geometric-scoping-linear-referencing"},"Geometric scoping (linear referencing)"),(0,i.kt)(o.default,{mdxType:"Tabs"},(0,i.kt)(r.default,{value:"description",label:"Description",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"The geometric scoping property ",(0,i.kt)("inlineCode",{parentName:"p"},"at")," limits the scope of its parent value to a\nposition or range of positions along a Segment's geometry. When the parent value\nis a rule object, the rule only matches the position or range of positions\nspecified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"at")," property."),(0,i.kt)("p",null,"Depending on context, the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"at")," property is either a single real\nnumber ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," ","\u2264"," ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," ","\u2264"," ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"; or a pair of numbers ",(0,i.kt)("inlineCode",{parentName:"p"},"[a, b]")," where\n",(0,i.kt)("inlineCode",{parentName:"p"},"0")," ","\u2264"," ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," ","<"," ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," ","\u2264"," ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". In the first case, ",(0,i.kt)("inlineCode",{parentName:"p"},"at")," represents a discrete\nposition along the segment's geometry; in the second case it represents a\nrange of positions. The numbers ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"b")," are interpreted as percentage\ndisplacements along the parent segment's geometry starting from the start of the\nsegment. (",(0,i.kt)("em",{parentName:"p"},'The terms "start" and "end" are explained in\n',(0,i.kt)("a",{parentName:"em",href:"shape-connectivity"},"Shape and Connectivity"),"."),")"),(0,i.kt)("p",null,"So, for example, the scoping property ",(0,i.kt)("inlineCode",{parentName:"p"},'"at": 0.15')," scopes its parent value to\nthe position on the segment that is displaced 15% of the segment length from the\nstart."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Diagram showing a single geometrically-scoped position.",src:a(4645).Z,width:"484",height:"81"})),(0,i.kt)("figcaption",null,(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The position along the segment geometry described by ",(0,i.kt)("inlineCode",{parentName:"em"},'"at": 0.15'),".")))))),(0,i.kt)("p",null,"The scoping property ",(0,i.kt)("inlineCode",{parentName:"p"},'"at": [0.35, 0.75]')," scopes its parent value to the range of\npositions on the segment beginning at 35% and extending to 75% of the segment\nlength from the start."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",null,(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Diagram showing a geometrically-scoped range.",src:a(9653).Z,width:"484",height:"82"})),(0,i.kt)("figcaption",null,(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The range on the segment geometry described by ",(0,i.kt)("inlineCode",{parentName:"em"},'"at": [0.35, 0.75]'),"."))))))),(0,i.kt)(r.default,{value:"example",label:"Example",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"The example below shows a road segment whose speed limit is defined by\ntwo geometrically-scoped speed limit rules:"),(0,i.kt)(l.default,{language:"yaml",mdxType:"CodeBlock"},s))),(0,i.kt)("h3",{id:"temporal-scoping-opening-hours"},"Temporal scoping (opening hours)"),(0,i.kt)(o.default,{mdxType:"Tabs"},(0,i.kt)(r.default,{value:"description",label:"Description",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"The temporal, or time-based, scoping property ",(0,i.kt)("inlineCode",{parentName:"p"},"during")," limits the scope of its\nparent value to one or more recurring time ranges. When the parent value is a\nrule object, the rule only matches the time range or time ranges specified in\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"during")," property."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"during")," property must contain a string expressed in the OpenStreetMap\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification"},"opening hours specification"),".")),(0,i.kt)(r.default,{value:"example",label:"Example",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"The example below shows a road segment with a temporally-scoped access\nrestriction rule. The rule states that non-bus travellers are prohibited\nfrom access to the segment on weekdays between 3PM and 6PM."),(0,i.kt)(l.default,{language:"yaml",mdxType:"CodeBlock"},p))),(0,i.kt)("h3",{id:"subjective-scoping"},"Subjective scoping"),(0,i.kt)("p",null,"Subjective scoping means that the scope of a property can be constrained based\non subjective factors like ",(0,i.kt)("em",{parentName:"p"},"who")," or ",(0,i.kt)("em",{parentName:"p"},"what")," is travelling on the transportation\nnetwork, or ",(0,i.kt)("em",{parentName:"p"},"how")," they are doing it."),(0,i.kt)("p",null,"The Overture transportation supports the following subjective factors:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#travel-mode-scoping"},"Travel mode")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#purpose-of-use-scoping"},"Purpose of use")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#status-scoping-membership-in-a-recognized-group"},"Status, or membership in a recognized group")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#vehicle-attributes-scoping"},"Vehicle attributes"))),(0,i.kt)("p",null,"The sub-headings below explain each of these subjective factors in greater\ndetail."),(0,i.kt)("h4",{id:"travel-mode-scoping"},"Travel mode scoping"),(0,i.kt)("p",null,"A travel mode is a way of moving about the transportation network, for\nexample driving in a motor vehicle, or, more specifically, driving in a\nhigh-occupancy vehicle."),(0,i.kt)("p",null,"The property construct ",(0,i.kt)("inlineCode",{parentName:"p"},"when: { mode: [...] }")," limits the scope its\nparent value to apply only to people or things travelling using the\nlisted travel modes. Conversely, the construct\n",(0,i.kt)("inlineCode",{parentName:"p"},"when: { modeNot: [...] }")," scopes the parent value to apply only when\nthe traveller is ",(0,i.kt)("em",{parentName:"p"},"not")," using one of the listed travel modes."),(0,i.kt)("p",null,"To dive deeper into this topic, see the page on\n",(0,i.kt)("a",{parentName:"p",href:"travel-modes"},"Travel Modes"),"."),(0,i.kt)("h4",{id:"purpose-of-use-scoping"},"Purpose of use scoping"),(0,i.kt)(o.default,{mdxType:"Tabs"},(0,i.kt)(r.default,{value:"description",label:"Description",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Usage purpose scoping limits the scope of a parent value to apply only\nwhen the user is using the feature for one of the listed purposes. This\ntype of scoping is common when it matters that a person is in the\nprocess of doing something like making a delivery or acting as the\ncustomer of a business."),(0,i.kt)("p",null,"The property construct ",(0,i.kt)("inlineCode",{parentName:"p"},"when: { using: [...] }")," applies usage purpose\nscoping to a parent value.")),(0,i.kt)(r.default,{value:"example",label:"Example",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"The example below shows a road segment representing a hotel driveway\nwhere through traffic is not permitted (only usage by hotel customers\nor as a final destination is allowed):"),(0,i.kt)(l.default,{language:"yaml",mdxType:"CodeBlock"},d))),(0,i.kt)("h4",{id:"status-scoping-membership-in-a-recognized-group"},"Status scoping (membership in a recognized group)"),(0,i.kt)(o.default,{mdxType:"Tabs"},(0,i.kt)(r.default,{value:"description",label:"Description",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Status scoping limits the scope of a parent value to apply only when the\nuser has a certain recognized status or is a member of a recognized\ngroup. This type of scoping is useful when it matters whether a person\nor thing has a recognized characteristic, such as holding a permit or\nbeing an employee of a business or student at an academic institution."),(0,i.kt)("p",null,"The property construct ",(0,i.kt)("inlineCode",{parentName:"p"},"when: { recognized: [...] }")," applies status\nscoping to a parent value.")),(0,i.kt)(r.default,{value:"example",label:"Example",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"The example below shows a road segment modeling a private condominium\ntower driveway where access is denied to the general public, but allowed\nto privately-authorized individuals, such as condo unit owners:"),(0,i.kt)(l.default,{language:"yaml",mdxType:"CodeBlock"},c))),(0,i.kt)("h4",{id:"vehicle-attributes-scoping"},"Vehicle attributes scoping"),(0,i.kt)("p",null,"Vehicle attribute scoping limits the scope of a parent value to apply\nonly when the vehicle in use meets certain criteria."),(0,i.kt)("p",null,"The property construct ",(0,i.kt)("inlineCode",{parentName:"p"},"when: { vehicle: { ... } }")," applies vehicle\nattributes scoping to a parent value."),(0,i.kt)("p",null,"Note that vehicle attribute scoping can overlap to some degree with\n",(0,i.kt)("a",{parentName:"p",href:"#travel-mode-scoping"},"Travel mode scoping"),'. For example, some access\nrules may be scoped to the travel mode "heavy goods vehicle", while\nanother equivalent access rule could be scoped to the vehicle attribute\n"gross vehicle weight".'),(0,i.kt)("h2",{id:"rules-and-rule-based-properties"},"Rules and rule-based properties"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"Rule-based")," property is a property whose value in a given situation is\ndetermined by evaluating a list of rules against the facts applicable to that\nsituation. Each individual rule in the list of rules is itself a scoped value,\na scoped value, and the assessment of which rule applies to a given set of facts\nis done by the rule evaluation algorithm."),(0,i.kt)("h3",{id:"absolute-form"},"Absolute form"),(0,i.kt)("p",null,"There are cases when specifying a property value using rules makes sense, and\ncases where doing so is unnecessarily complicated because the real-world entity\nbeing modeled has a single unchanging state which is the same in all fact\nsituations. In these cases, most rule-based properties support a simpler\nabsolute form without a list of rules."),(0,i.kt)("p",null,"Consider the following two examples of road segments. On the left is a section\nfrom a simple two-lane bidirectional city street in which there is always one\nlane of traffic flowing in each direction. On the right is a section from a\none-way city street in which one of the lanes is only available for driving at\ncertain times of the day, being reserved for parking at other times. In the\nexample on the left, the lane list is specified absolutely; while in the example\non the right, it is given as a list of ",(0,i.kt)("a",{parentName:"p",href:"#temporal-scoping-opening-hours"},"Temporally-scoped"),"\nlane rules."),(0,i.kt)("div",{style:{width:"49.5%",float:"left"}},(0,i.kt)("figure",null,(0,i.kt)(l.default,{language:"yaml",mdxType:"CodeBlock"},m),(0,i.kt)("figcaption",null,(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"An absolute list of lanes.")))))),(0,i.kt)("div",{style:{width:"49.5%",float:"right"}},(0,i.kt)("figure",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\nid: overture:transportation:example:lanes-rule\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates:\n    - - -123.12244656918179\n      - 49.280940587393815\n    - - -123.12562968007902\n      - 49.27884862879665\nproperties:\n  theme: transportation\n  type: segment\n  version: 0\n  updateTime: "2023-06-16T15:57:00-06:00"\n  subType: road\n  road:\n    lanes:\n      - value:\n          - direction: forward\n          - direction: forward\n      - during: Mo-Fr 15:00-18:00\n        value:\n          - direction: forward\n          - direction: forward\n          - direction: forward\n          - direction: forward\n')),(0,i.kt)("figcaption",null,(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"A list of lane rules.")))))),(0,i.kt)("div",{style:{clear:"both"}}),(0,i.kt)("h3",{id:"rule-evaluation-algorithm"},"Rule evaluation algorithm"),(0,i.kt)("p",null,"Given a rule-based property, the actual value of the property in a given fact\npattern is determined by a three-step process: first, all matching rules are\nidentified; second, the single determining rule is chosen if possible; lastly,\nif there is no applicable rule, an appropriate default value may be assumed."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Matching rules.")," For a given rule and a given set of facts, the rule\n",(0,i.kt)("em",{parentName:"li"},"matches")," the facts if the scope of the rule contains all the facts, ",(0,i.kt)("em",{parentName:"li"},"i.e."),"\nthe facts fit within all of the scoping properties expressed in the rule. The\nmatching criteria for a rule can be thought of as the logical AND of all the\nscoping properties expressed in the rule."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Determining rule.")," For a given rule-based property and a given set of\nfacts, ",(0,i.kt)("em",{parentName:"li"},"at most")," one rule can ",(0,i.kt)("em",{parentName:"li"},"determine")," the property value. If only one\nrule matches, that rules determines the property value. If more than one rule\nmatches, the last matching rule in the list determines the value. (This is\nsimilar to how OpenStreetMap ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.openstreetmap.org/wiki/Conditional_restrictions"},"conditional restrictions"),"\nevaluated.) Therefore it is important to write more general rules before more\nspecific ones in a rule list."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Fallback to default.")," If there are no matching rules, an appropriate\ndefault value may apply, depending on the property being evaluated.")))}v.isMDXComponent=!0},4645:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI0ODRweCIgaGVpZ2h0PSI4MXB4IiB2aWV3Qm94PSItMC41IC0wLjUgNDg0IDgxIiBjb250ZW50PSImbHQ7bXhmaWxlIGhvc3Q9JnF1b3Q7ZHJhd2lvLmNvcnAuYW1hem9uLmNvbSZxdW90OyBtb2RpZmllZD0mcXVvdDsyMDIzLTA2LTE1VDIzOjU1OjU4LjE1M1omcXVvdDsgYWdlbnQ9JnF1b3Q7TW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE0LjAuMC4wIFNhZmFyaS81MzcuMzYmcXVvdDsgdmVyc2lvbj0mcXVvdDsxMi40LjgmcXVvdDsgZXRhZz0mcXVvdDtNRkppQlZZc01wcVJQRjRhNmhsWSZxdW90OyB0eXBlPSZxdW90O2RldmljZSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtLUXcyb0FoN2o5dzRtbnBfdWczRiZxdW90OyZndDs3VmROYzVzd0VQMDFYRE1DakkyUE5rbmFTenVkOGFGbkZTMmdpVUN1RUFiMzExY3l3cGlQaE5vMTA0K0pMNWFlVnJ2U2U3dElzdHdnclQ0SXZFOCtjUUxNY2hDcExQZlJjaHpiYzVENjA4alJJTFpya0ZoUVlyQVcyTkVmWU1ER3JLQUU4bzZoNUp4SnV1K0NJYzh5Q0dVSHcwTHdzbXNXY2RhTnVzY3hESUJkaU5rUS9VcUpUSnB0SU5RT2ZBUWFKeWEwNzVtQkZEZkdCc2dUVEhoNUFibFBsaHNJem1YZFNxc0FtR2F2NGFXZTkveks2SGxoQWpMNUt4T2Nlc0lCczhMc3pheExIcHZOUWtZMm1qUFZDeG5PY3hwYTdqYVJLVk9BclpxNUZQd0ZBczY0T0UxdzBlbDNIbWtZOGhSU093Y3lvTGRkcjMxbVFlVVA4QlNrT0NxVHN1VzVJVE81WUxqQkJEQXM2YUhySGh1NTQ3TzdjNFF2bktyQURtcHlzOUhGWk9iQ1IxMFhPUzlFQ0diV0phODlSOTZVSTRsRkRITGdTRFV1dHQxQ0o5bkdKWFN2a2pEakdkeW1uN2FOZUNiSExQODFYVDEwbzY2REJGbk9wdXZpWGRkSlhUMTcvYkN5N3lQdGlLOFoxZlVHNm43RDRjdEFZUW1WZkV0V0kzdEVHZXRCbU5FNFUxMVJrNzQ5Z0pCVUhXRWJnNmVVRUIxbFd5WlV3bTZQUXgyeVZDZTJ3Z1F2TWdKNnFXZ3lPN1JqcUs3TkR6Tmg1WGNKWHhuQ0w5Sm5NWkkrRG5vOVV6cWl2S0hBY3FCQUpMalI5YjRTTUlqK1hnVTh4LzVqRXF6ZVAzSFRSNWZmTzNIV3R4NWRmVWVyMlQ1dS9vaXV5KytGdnRSdXNXemJscnRSWnVqQjltYW91bERwQjJLZXV0UDRNMDRwMDF3R1NnQ3FJam5vTTVUM0tVcDcwYnV2T01PaTlHY3F5dlZWUmZsYlR3Sjdpc3IvcFdpOXZqQzNGdTNnZG5OejBhcHUrOHlzemR2WHV2djBFdz09Jmx0Oy9kaWFncmFtJmd0OyZsdDsvbXhmaWxlJmd0OyI+PGRlZnMvPjxnPjxwYXRoIGQ9Ik0gNDIgMjAgTCA0MjguMTYgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDQzNi40MSAyMCBMIDQyNS40MSAyNS41IEwgNDI4LjE2IDIwIEwgNDI1LjQxIDE0LjUgWiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gNDIgNDAgTCA0MiAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gNDQxLjcxIDQwIEwgNDQxLjcxIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHJlY3QgeD0iMCIgeT0iMTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuNSwxMy41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSIyNSIgaGVpZ2h0PSIxMiIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiAyNnB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IHJpZ2h0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij5iYWNrPC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjEzIiB5PSIxMiIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMnB4IiBmb250LWZhbWlseT0iSGVsdmV0aWNhIj5iYWNrPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSI0NDMiIHk9IjEwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ0NC41LDEzLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjEyIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDI1cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+ZnJvbnQ8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTIiIHk9IjEyIiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEycHgiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiPmZyb250PC90ZXh0Pjwvc3dpdGNoPjwvZz48cGF0aCBkPSJNIDEwMiAzMCBMIDEwMiAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cmVjdCB4PSI2MiIgeT0iNjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjUuNSw2My41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSI3MiIgaGVpZ2h0PSIxMiIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiAmcXVvdDtDb3VyaWVyIE5ldyZxdW90OzsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgdmVydGljYWwtYWxpZ246IHRvcDsgd2lkdGg6IDczcHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij4iYXQiOiAwLjE1PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjM2IiB5PSIxMiIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMnB4IiBmb250LWZhbWlseT0iQ291cmllciBOZXciPiJhdCI6IDAuMTU8L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gMTAyIDYwIEwgMTAyIDQ2LjM3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMTAyIDQxLjEyIEwgMTA1LjUgNDguMTIgTCAxMDIgNDYuMzcgTCA5OC41IDQ4LjEyIFoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PC9nPjwvc3ZnPg=="},9653:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI0ODRweCIgaGVpZ2h0PSI4MnB4IiB2aWV3Qm94PSItMC41IC0wLjUgNDg0IDgyIiBjb250ZW50PSImbHQ7bXhmaWxlIGhvc3Q9JnF1b3Q7ZHJhd2lvLmNvcnAuYW1hem9uLmNvbSZxdW90OyBtb2RpZmllZD0mcXVvdDsyMDIzLTA2LTE1VDIzOjU2OjE5Ljk3NlomcXVvdDsgYWdlbnQ9JnF1b3Q7TW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTE0LjAuMC4wIFNhZmFyaS81MzcuMzYmcXVvdDsgdmVyc2lvbj0mcXVvdDsxMi40LjgmcXVvdDsgZXRhZz0mcXVvdDtnWHNIWl9YdnlPTm5GdWRBb2ZTRSZxdW90OyB0eXBlPSZxdW90O2RldmljZSZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtnUktfVW12alkwLUZoZ3l1OXpiViZxdW90OyZndDs3WmhOajVzd0VJWi9EZGNJY0p5UFk4anV0cGRXbFNLMVp4Y0dzTmJnMUhHKyt1czdEaVpBWUpQTmlxU3RsRnhpWHRzelpwNWhqSEhJUE50OVVteVpmcEVSQ01kM281MURuaHpmOTZqdjRwOVI5bGJ4aUZVU3hTT3JWY0tDL3dZcmxzUFdQSUpWWTZDV1VtaStiSXFoekhNSWRVTmpTc2x0YzFnc1JkUHJraVhRRWhZaEUyMzFCNDkwV3Q2RzYxWWRuNEVucVhVOW9iWWpZK1ZnSzZ4U0ZzbHRUU0xQRHBrcktYWFJ5blp6RUNaNlpWeUtlUzl2OUI0WHBpRFg3NW5nRnhNMlRLenR2ZGwxNlgxNXM1QkhNeE16dkFvRlc2MTQ2SkFnMVpsQXdjUG1TaXY1Q25NcHBEcE1JTzdoZCt3cEkwUlJLWXhEMUFwdnRWN3ZHQVhNSDVBWmFMWEhJZHNxem1VdzAxcUVTMDJCWUpwdm11YVp4WjBjelIwOWZKTWNIZnR1bVpzbEY1dVpJem9kZUdSYS9ab0dWM0t0UXJBMjZsRStNVXV2TTZ1WlNrQzN6R0tqRnBKS09pRHR4a3V1d3B2TEhEN0cxb3lOWmE2N1J2NTN6TWU5TUcrWkpYZGlQbnd3djhpY2V0UEIyTHNGOWk3TDl5SlBXK1Ivc3ZDMVJWL0RUcDlEYmxNaTVrS2NTRXp3Sk1kTFZRQUpOcUEweDIxeFp2V01SNUh4RW14VHJtR3haS0Z4dWNXM0FOU1VYT2NSbUtXNkZ6UEhHSWJkdGJsako0d256ZkFQTWZ6Mm9haGwxN0FqdThwSHRpdVJHbHpPUUJpMUlNUktXclQ5VWhBUS83c1FxTy85VFFyalJ4RzhXQVI5T20waUd2VlNBVnRtaDNjcWY1TUg4NHZNaDZkdkpmMHdiNW05Ri9QcFplWjR4RnFhWnJoV1loOG8zQkZCdjFFZGE4bFFGY3FyVTZOZHNVMjJ2TENNQ3hPZU9jYVVnOEpGZm9YdG1WUTZLZk1SVjNpVTVkSklpTVc0QzJMQmw5K3QyeDVxdGo4Nm9UaHhXd1hiRzkyb1lwZG4rd2JLMGErMU9Ra0hURmR0aDh4d21FTURkMER3alFjTnUrNWdUQjM2ZElNOU5zVFFJYXViN0xKbnM2SVhuTFNCYyt4MjRPeXFOUi9BaVpmVlI0dmlPYTYrL1pEblB3PT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PHBhdGggZD0iTSA0MiAyMC4xNCBMIDQyOC4xNiAyMC4xNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gNDM2LjQxIDIwLjE0IEwgNDI1LjQxIDI1LjY0IEwgNDI4LjE2IDIwLjE0IEwgNDI1LjQxIDE0LjY0IFoiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cGF0aCBkPSJNIDQyIDQwLjE0IEwgNDIgMC4xNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDQ0MS43MSA0MC4xNCBMIDQ0MS43MSAwLjE0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxyZWN0IHg9IjAiIHk9IjEwLjE0IiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjUsMTMuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0iYWxsIiB3aWR0aD0iMjUiIGhlaWdodD0iMTIiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogMjZweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiByaWdodDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+YmFjazwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIxMyIgeT0iMTIiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTJweCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSI+YmFjazwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iNDQzIiB5PSIxMC4xNCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NDQuNSwxMy41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSIyNCIgaGVpZ2h0PSIxMiIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiAyNXB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPmZyb250PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjEyIiB5PSIxMiIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMnB4IiBmb250LWZhbWlseT0iSGVsdmV0aWNhIj5mcm9udDwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSAxODEgMzAuMTQgTCAxODEgMTAuMTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAzNDIgMzAuMTQgTCAzNDIgMTAuMTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAyNzIgLTI5IEwgMjY3IC0yOSBRIDI2MiAtMjkgMjYyIC0xOSBMIDI2MiA0MSBRIDI2MiA1MSAyNTcgNTEgTCAyNTQuNSA1MSBRIDI1MiA1MSAyNTcgNTEgTCAyNTkuNSA1MSBRIDI2MiA1MSAyNjIgNjEgTCAyNjIgMTIxIFEgMjYyIDEzMSAyNjcgMTMxIEwgMjcyIDEzMSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2MiwwKXNjYWxlKC0xLDEpdHJhbnNsYXRlKC0yNjIsMClyb3RhdGUoLTkwLDI2Miw1MSkiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSIxODciIHk9IjYxIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTYuNSw2NC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSIxMzAiIGhlaWdodD0iMTIiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogJnF1b3Q7Q291cmllciBOZXcmcXVvdDs7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiAxMzFweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPiJhdCI6IFswLjM1LCAwLjc1XTwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI2NSIgeT0iMTIiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTJweCIgZm9udC1mYW1pbHk9IkNvdXJpZXIgTmV3Ij4iYXQiOiBbMC4zNSwgMC43NV08L3RleHQ+PC9zd2l0Y2g+PC9nPjwvZz48L3N2Zz4="}}]);