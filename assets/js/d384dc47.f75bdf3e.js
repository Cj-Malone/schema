"use strict";(self.webpackChunkoverture_schema=self.webpackChunkoverture_schema||[]).push([[26],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>b});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=i.createContext({}),s=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return i.createElement(r.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=s(a),h=n,b=c["".concat(r,".").concat(h)]||c[h]||p[h]||o;return a?i.createElement(b,l(l({ref:t},m),{},{components:a})):i.createElement(b,l({ref:t},m))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=h;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d[c]="string"==typeof e?e:n,l[1]=d;for(var s=2;s<o;s++)l[s]=a[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},265:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var i=a(7462),n=(a(7294),a(3905));const o={},l="Travel Modes",d={unversionedId:"themes/transportation/travel-modes",id:"themes/transportation/travel-modes",title:"Travel Modes",description:"In the real world, a travel mode can be thought of intuitively as a way",source:"@site/docs/themes/transportation/travel-modes.mdx",sourceDirName:"themes/transportation",slug:"/themes/transportation/travel-modes",permalink:"/themes/transportation/travel-modes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Roads",permalink:"/themes/transportation/roads"},next:{title:"Schema Reference",permalink:"/reference"}},r={},s=[{value:"Understanding travel modes",id:"understanding-travel-modes",level:2},{value:"Implied travel modes",id:"implied-travel-modes",level:3},{value:"General definitions",id:"general-definitions",level:3},{value:"When is a travel mode recognized?",id:"when-is-a-travel-mode-recognized",level:3},{value:"Travel mode schema",id:"travel-mode-schema",level:2},{value:"Scoping to travel modes",id:"scoping-to-travel-modes",level:3},{value:"Travel mode scoping: <code>mode</code> and <code>modeNot</code>",id:"travel-mode-scoping-mode-and-modenot",level:4},{value:"Vehicle attribute scoping: <code>vehicle</code>",id:"vehicle-attribute-scoping-vehicle",level:4},{value:"Similar scoping properties: <code>using</code> and <code>recognized</code>",id:"similar-scoping-properties-using-and-recognized",level:4},{value:"The travel modes taxonomy",id:"the-travel-modes-taxonomy",level:3},{value:"Open questions",id:"open-questions",level:2},{value:"Minimum required travel modes",id:"minimum-required-travel-modes",level:3},{value:"Should we support extension travel modes?",id:"should-we-support-extension-travel-modes",level:3},{value:"Internal consistency",id:"internal-consistency",level:3}],m={toc:s},c="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,i.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"travel-modes"},"Travel Modes"),(0,n.kt)("p",null,'In the real world, a travel mode can be thought of intuitively as a way\nof getting from point A to point B. Travel modes can include non-vehicle\nmodes (foot), vehicle modes (a bicycle or motor vehicle), and\noccasionally more granular details (that motor vehicle might be\nclassified as a "high occupancy vehicle" or a "heavy goods vehicle").'),(0,n.kt)("p",null,"Within the Overture Transportation theme's schema model, the real world\nintuition translates to the following definition: a travel mode is a\nrecognized mode by which a person or thing may use a\n",(0,n.kt)("a",{parentName:"p",href:"/reference/transportation/segment"},"Segment")," feature."),(0,n.kt)("h2",{id:"understanding-travel-modes"},"Understanding travel modes"),(0,n.kt)("h3",{id:"implied-travel-modes"},"Implied travel modes"),(0,n.kt)("p",null,"Every segment has an ",(0,n.kt)("em",{parentName:"p"},"implied")," set of travel modes that are allowed to\nuse the segment. For ",(0,n.kt)("a",{parentName:"p",href:"roads"},"Road")," segments, this implied set derives\nfrom the ",(0,n.kt)("a",{parentName:"p",href:"roads#road-class"},"road class"),", as well as local rules, norms,\nand customs operative where the road segment is situated."),(0,n.kt)("p",null,"Since this implied set depends on locality or jurisdiction, and is\nsusceptible of varying over time, the Overture Transportation schema\ndoes not try to specify the implied set. Resolution of the implied set\nis done by the specific application in the case where this level of\ndetail is important for its proper functioning. (An accurate routing\nengine may need this information, whereas a 2D map render or a geocoder\nlikely do not.)"),(0,n.kt)("h3",{id:"general-definitions"},"General definitions"),(0,n.kt)("p",null,"Overture's recognized travel modes are defined in general terms that are\nbroadly applicable, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"hov")," is a high-occupancy vehicle and\n",(0,n.kt)("inlineCode",{parentName:"p"},"hgv"),' is a heavy goods vehicle. In most jurisdictions, these general\nterms map to a concept that is in use within the jurisdiction, even\nthough the local name for the concept may vary, for example one\njurisdiction may say "heavy goods vehicle" and another may say\n"large goods vehicle".'),(0,n.kt)("p",null,"Despite being broadly-applicable, travel modes may have different\ndefinitions in different places and at different times."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"In one jurisdiction, an ",(0,n.kt)("inlineCode",{parentName:"li"},"hgv")," might mean any vehicle with a gross\nvehicle weight in excess of 3.5 tonnes (3,500 kg). In another place,\nan ",(0,n.kt)("inlineCode",{parentName:"li"},"hgv")," might have a gross vehicle weight of at least 10,001 lbs."),(0,n.kt)("li",{parentName:"ul"},"In one jurisdiction, an ",(0,n.kt)("inlineCode",{parentName:"li"},"hov")," might require a minimum of 2 passengers\nwhile in another place it might have a higher minimum passenger count,\nor include battery-electric vehicles, or exclude certain classes of\nvehicle or usage.")),(0,n.kt)("p",null,"As a consequence of the variance in definition across place and time,\nOverture gives only general definitions for travel modes, leaving\nprecise definition to those applications that require them."),(0,n.kt)("h3",{id:"when-is-a-travel-mode-recognized"},"When is a travel mode recognized?"),(0,n.kt)("p",null,"A travel mode is recognized by the Overture Transportation schema when\nit becomes part of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OvertureMaps/schema/blob/5f82f1d6a916031cb32730e1fac7e1a353f10c60/schema/transportation/segment.yaml#L103"},(0,n.kt)("inlineCode",{parentName:"a"},"mode")),"\nenumeration. As of our draft schema release ",(0,n.kt)("inlineCode",{parentName:"p"},"v0.4.0"),", this enumeration\nis relatively small and contains only travel modes which we some\nconfidence will be generally-applicable both across jurisdictions and\nover time. We expect the list to change in future schema updates, to be\nlarger once we reach a table ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.0.0")," schema, and to continue to expand\nas the world changes and new information arises."),(0,n.kt)("p",null,"Our criteria for recognizing a proposed new travel mode are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The proposed new travel mode should represent a ",(0,n.kt)("em",{parentName:"li"},"generally-accepted"),"\nconcept meaning that the concept exists in many places with roughly\nthe same definition."),(0,n.kt)("li",{parentName:"ol"},"The proposed new travel mode should be referred to with well-known\nsign iconography or sign text in those jurisdictions where the\nconcept exists; and this iconography or sign text is preferably\nsomewhat consistent across many jurisdictions and over time."),(0,n.kt)("li",{parentName:"ol"},"It must be possible to give a relatively precise ",(0,n.kt)("em",{parentName:"li"},"definition")," to the\nproposed new travel mode and explain how it ",(0,n.kt)("em",{parentName:"li"},"differs")," from, or\n",(0,n.kt)("em",{parentName:"li"},"intersects")," with, other similar travel modes which are already\nrecognized in the Overture schema."),(0,n.kt)("li",{parentName:"ol"},"The proposed new travel mode should preferably not be trivially\nexpressible using another existing\n",(0,n.kt)("a",{parentName:"li",href:"scoping-rules#scoped-values-and-scoping-properties"},"Scoping Property"),".\n(",(0,n.kt)("em",{parentName:"li"},'An example of such a trivially-expressible concept might be a\n"three-axle vehicle" which is more appropriately phrased as\n',(0,n.kt)("inlineCode",{parentName:"em"},"vehicle: { axleCount: { isEqualTo: 3 } }"),"."),")"),(0,n.kt)("li",{parentName:"ol"},"The proposed new travel mode must be supported by existing data in at\nleast one of Overture's upstream data sources.")),(0,n.kt)("p",null,"There is a risk that the above-described approach will be too slow to\nadapt to our users' needs in a vast, ever-changing world. One possible\navenue to mitigate this risk is supporting\n",(0,n.kt)("a",{parentName:"p",href:"#should-we-support-extension-travel-modes"},"custom extensions")," to the\nbuilt-in list of recognized travel modes."),(0,n.kt)("h2",{id:"travel-mode-schema"},"Travel mode schema"),(0,n.kt)("h3",{id:"scoping-to-travel-modes"},"Scoping to travel modes"),(0,n.kt)("p",null,"Travel modes can used to change the scope of scoped and rule-based\nproperties within the schema. For example, they can affect the scope of\naccess restrictions, turn restrictions, or speed limits on ",(0,n.kt)("a",{parentName:"p",href:"roads"},"road"),"\nsegments. Since travel modes are expressed via scoping properties, it\nis recommended to read the section on\n",(0,n.kt)("a",{parentName:"p",href:"scoping-rules"},"Scoped and Rule-Based Properties")," before proceeding\nfurther."),(0,n.kt)("h4",{id:"travel-mode-scoping-mode-and-modenot"},"Travel mode scoping: ",(0,n.kt)("inlineCode",{parentName:"h4"},"mode")," and ",(0,n.kt)("inlineCode",{parentName:"h4"},"modeNot")),(0,n.kt)("p",null,"Two scoping properties control whether a given scoped property applies\nto a given travel mode: ",(0,n.kt)("inlineCode",{parentName:"p"},"mode")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"modeNot"),"."),(0,n.kt)("p",null,"If either ",(0,n.kt)("inlineCode",{parentName:"p"},"mode")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"modeNot")," property is specified, the property value\nmust be a non-empty, array of travel modes, and is interpreted as a set.\nValues must be unique, but order is not important."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"mode")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"modeNot")," properties are not mutually exclusive: in\nplaces where scoping by travel mode is allowed, either ",(0,n.kt)("inlineCode",{parentName:"p"},"mode")," or\n",(0,n.kt)("inlineCode",{parentName:"p"},"modeNot"),", or both, may be provided."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Neither"),". When ",(0,n.kt)("em",{parentName:"li"},"neither")," ",(0,n.kt)("inlineCode",{parentName:"li"},"mode")," nor ",(0,n.kt)("inlineCode",{parentName:"li"},"modeNot")," is provided, the\nparent property's scope includes all default travel modes implied by\nthe ",(0,n.kt)("a",{parentName:"li",href:"roads#road-class"},"road class"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Only ",(0,n.kt)("inlineCode",{parentName:"strong"},"mode")),". When ",(0,n.kt)("inlineCode",{parentName:"li"},"mode")," is provided by itself, the parent\nproperty is scoped to include only those travel modes that included\nin the ",(0,n.kt)("inlineCode",{parentName:"li"},"mode")," set."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Only ",(0,n.kt)("inlineCode",{parentName:"strong"},"modeNot")),". When ",(0,n.kt)("inlineCode",{parentName:"li"},"modeNot")," is provided by itself, the parent\nproperty is scoped to include all those travel modes that are not\nincluded in the ",(0,n.kt)("inlineCode",{parentName:"li"},"modeNot")," set."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Both"),". When both ",(0,n.kt)("inlineCode",{parentName:"li"},"mode")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"modeNot")," are provided, the parent\nproperty is scoped to include all those travel modes that are\nincluded in the ",(0,n.kt)("inlineCode",{parentName:"li"},"mode")," set ",(0,n.kt)("em",{parentName:"li"},"except")," those that are included in the\n",(0,n.kt)("inlineCode",{parentName:"li"},"modeNot")," set. (",(0,n.kt)("em",{parentName:"li"},"For example,\n",(0,n.kt)("inlineCode",{parentName:"em"},"mode: [motorVehicle], modeNot: [motorcycle]"),' expresses the travel\nmode scope "all motor vehicles except motorcycles".'),")")),(0,n.kt)("h4",{id:"vehicle-attribute-scoping-vehicle"},"Vehicle attribute scoping: ",(0,n.kt)("inlineCode",{parentName:"h4"},"vehicle")),(0,n.kt)("p",null,'Because travel modes are an "fuzzy" concept, there are inevitably areas\nof overlap between with the more precise, but more limited, ',(0,n.kt)("inlineCode",{parentName:"p"},"vehicle"),"\nscoping property which is used for\n",(0,n.kt)("a",{parentName:"p",href:"scoping-rules#vehicle-attributes-scoping"},"vehicle attributes scoping"),"."),(0,n.kt)("p",null,"Where there is potential overlap, the method of scoping used in Overture\ndata releases will depend on how the upstream data source has expressed\nthe equivalent concept. Where there is choice, it is preferable to\nselect the scoping method that most accurately reflects the intention\nexpressed on local signage."),(0,n.kt)("h4",{id:"similar-scoping-properties-using-and-recognized"},"Similar scoping properties: ",(0,n.kt)("inlineCode",{parentName:"h4"},"using")," and ",(0,n.kt)("inlineCode",{parentName:"h4"},"recognized")),(0,n.kt)("p",null,"The scoping properties ",(0,n.kt)("inlineCode",{parentName:"p"},"using")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"recognized")," express concepts that\nare meant to be orthogonal to (completely separate from) travel modes."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"using")," property indicates\n",(0,n.kt)("a",{parentName:"li",href:"scoping-rules#purpose-of-use-scoping"},"purpose of use")," scoping, which\nrelates to the purpose for which the person or thing travelling is\nusing a given segment of the transportation network. Travel modes\nshould ideally not embed a purpose of use."),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"recognized")," property indicates\n",(0,n.kt)("a",{parentName:"li",href:"scoping-rules#status-scoping-membership-in-a-recognized-group"},"status scoping"),",\nwhich relates to a recognized status given to the person or thing\ntravelling, where the recognized status is distinct from the mode of\ntravel itself. Travel modes should ideally not embed a status.")),(0,n.kt)("h3",{id:"the-travel-modes-taxonomy"},"The travel modes taxonomy"),(0,n.kt)("p",null,"Overture travel modes form a shallow taxonomy. Some travel modes are\nmore general, while others are more specific, and a more general travel\nmode may contain a more specific one. For example, the general travel\nmode ",(0,n.kt)("inlineCode",{parentName:"p"},"vehicle")," contains the more specific mode ",(0,n.kt)("inlineCode",{parentName:"p"},"motorVehicle"),"."),(0,n.kt)("p",null,"The taxonomy supported in our draft schema ",(0,n.kt)("inlineCode",{parentName:"p"},"v0.4.0")," can be visualized\nin the diagram below."),(0,n.kt)("figure",null,(0,n.kt)("div",{style:{display:"flex",alignItems:"center"}},(0,n.kt)("div",{style:{width:"72%",float:"left",paddingRight:"3px"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The Overture travel modes taxonomy",src:a(1973).Z,width:"583",height:"453"}))),(0,n.kt)("div",{style:{width:"28%",float:"right",paddingLeft:"3px"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Legend graphic for Overture travel modes taxonomy",src:a(2681).Z,width:"323",height:"223"}))),(0,n.kt)("div",{style:{clear:"both"}})),(0,n.kt)("figcaption",null,(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The Overture travel modes taxonomy."))))),(0,n.kt)("p",null,"As many of the above travel modes draw on the body of knowledge\naccumulated in relation to OpenStreetMap\n",(0,n.kt)("a",{parentName:"p",href:"https://wiki.openstreetmap.org/wiki/Key:access#Transport_mode_restrictions"},"transport mode access restrictions"),",\nwe would like acknowledge a intellectual debt to the OSM community in\nrelation to travel modes as well as to other aspects of the\nTransportation schema."),(0,n.kt)("h2",{id:"open-questions"},"Open questions"),(0,n.kt)("p",null,"This section discusses some open questions are debating internally with\nregard to travel modes. We would love to hear\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OvertureMaps/schema/discussions"},"your feedback")," on\nthese questions (and any others that you may have)."),(0,n.kt)("h3",{id:"minimum-required-travel-modes"},"Minimum required travel modes"),(0,n.kt)("p",null,"We're not yet certain on the minimum set of recognized travel modes is\nthat will make the Overture Transportation schema as usable as possible\nto as broad an audience as possible. What do you think we are missing?"),(0,n.kt)("h3",{id:"should-we-support-extension-travel-modes"},"Should we support extension travel modes?"),(0,n.kt)("p",null,"We live in a time of rapid technological and regulatory iteration in\nthe transportation space. The speed of change raises the possibility\nthat no matter how quickly we extend the travel modes recognized in the\nOverture schema, the schema will always be behind the real world, at\nleast in some local areas and with regard to some technologies, customs,\nor local rules."),(0,n.kt)("p",null,"One possibility to keep the Overture schema maximally usable for users\nwho are mapping at the cutting edge is to allow custom extensions to\nthe list of travel modes. If we did this consistently with how extension\nproperties ","\nwork for features, we could, for example, allow travel mode names with\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"ext*")," to be ignored by the schema validation rules."),(0,n.kt)("p",null,"What do you think?"),(0,n.kt)("h3",{id:"internal-consistency"},"Internal consistency"),(0,n.kt)("p",null,"As alluded to ",(0,n.kt)("a",{parentName:"p",href:"#vehicle-attribute-scoping-vehicle"},"above"),", there is some\noverlap between the fuzzy concept of travel modes and vehicle attribute\nscoping. We're aware of this overlap and view it as limited but\ninevitable."),(0,n.kt)("p",null,"Our intention is, however, to reduce or eliminate the overlap between\ntravel modes and the other\n",(0,n.kt)("a",{parentName:"p",href:"#similar-scoping-properties-using-and-recognized"},"similar scoping properties"),"\n(",(0,n.kt)("inlineCode",{parentName:"p"},"using")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"recognized"),"). One area where we may have been unsuccessful\nis the ",(0,n.kt)("inlineCode",{parentName:"p"},"emergency")," travel mode in the ",(0,n.kt)("a",{parentName:"p",href:"#the-travel-modes-taxonomy"},"current taxonomy"),".\nArguably, ",(0,n.kt)("inlineCode",{parentName:"p"},"emergency")," should be removed from the taxonomy, and an\n",(0,n.kt)("inlineCode",{parentName:"p"},"asEmergencyResponder")," should be included in the status values\nenumeration for the ",(0,n.kt)("inlineCode",{parentName:"p"},"recognized")," property."),(0,n.kt)("p",null,"What are your suggestions relating to keeping the travel modes and other\nscoping properties internally consistent and minimally overlapping?"))}p.isMDXComponent=!0},2681:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzMjNweCIgaGVpZ2h0PSIyMjNweCIgdmlld0JveD0iLTAuNSAtMC41IDMyMyAyMjMiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDtkcmF3aW8uY29ycC5hbWF6b24uY29tJnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjMtMDYtMjNUMTg6NTI6MjguMjMyWiZxdW90OyBhZ2VudD0mcXVvdDtNb3ppbGxhLzUuMCAoWDExOyBMaW51eCB4ODZfNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTQuMC4wLjAgU2FmYXJpLzUzNy4zNiZxdW90OyB2ZXJzaW9uPSZxdW90OzEyLjQuOCZxdW90OyBldGFnPSZxdW90O1VUVTdvV0ZIN3lVN243dzhxZ3NzJnF1b3Q7IHR5cGU9JnF1b3Q7ZGV2aWNlJnF1b3Q7Jmd0OyZsdDtkaWFncmFtIGlkPSZxdW90O2s2ZDVCOEthMHJYaF9Ta2I1enJJJnF1b3Q7Jmd0OzdaakxjdHNnRklhZnh0c09FcFlkTHhNN2FSWk5wek5lTkYwU0NVbE1FYWdJK2RLbjcwRUNXVGVuSHNlZWJCelBaT0RucHNQM2cwQVR2TXgyWHhYSjB4Y1pVVDd4VWJTYjROWEU5eGN6RC80YllWOExub2RSclNTS1JWWTdDR3YybDFyUlZTdFpSSXRPUlMwbDF5enZpcUVVZ29hNm94R2w1TFpiTFphOE8ycE9Fam9RMWlIaFEvVW5pM1Rxd2tEb1VQQk1XWkxhb2U4Q1c1QVJWOWtLUlVvaXVXMUorSEdDbDBwS1hhZXkzWkp5TTNsdVh1cDJUMGRLbXdkVFZPaFRHdmgxZ3czaHBZMXQ0czg0TkgxZ2tFaE13Z21sRTc3UmhJckl5ZEIzMmE4S1dxdDVGYWZldThsVHNoUVJOZU1qS042bVROTjFUa0pUdWdXN2dKYnFqRVBPZzJTaGxmeE5sNUpMVmJYR3FQcHJTdHowWTFCaXhubXI1bHYxTTdvVStvbGtqQnU3UFZPK29acUZ4QlpZYzNtZXpZOE5SVGhMQkdpY3hpYWlEVldtQTM1dlpTM05RMHVJZ1dremhJK2FzRTFWdWp2S3htdUl3MUtoTXFOYTdhR0tiWEJuUFdKWHljeTVhM3V3SEhZK1NsdHVhOHhGck0yVHB1dURFeUJoelRCdUREdzBSdkNRQUx0OEVxemVZZXFkd1hRZUl4VEhwekNONDhVQ1g0UnBENWRESEFJYnFsdy9Oa0I4QVpnZW1uWnBUb2MwbS8yalRYTjZBWmpUQWN3TTl1UlBvNGp4WWxIVjdGQmN5bEl4bUhzZmZhZmJLNUZFVnlBNUgxbVhWeU1aREVndXBRaHBya3ZDcTljbExGQW1Fa2hLQWJQcVE0ZEl3TXNFQWxTME1CRkNYOEpnRDFPYWtZRUZZRnIwZTV5RkZMUUgxRXIvMlNRekZrVm1rRkZiZFY4SmwxN2JGMkR1NDk1ZVBMWjZneXN4bncyWXI4czhseEJPWkE0K2lteXE0OVhva3I3eFBJbm42QnErRnMvNWdPZHdIZDYyNHRPMjRoN0cyUkRqOUVvVTd3WVUzMjRVejZNNC96eUtpK0V4dHc4UjdqcjM1czVvcG9DVG9tRGhCN2g5ZEN1RUtWWDdWN3V4VnBsZkp2TWxjTm5WcmwyNDJydmNqdWxYKzhBbTNXb0Z1VU1qazNGdDZwbWdVZTh1WElDdFF0clp5alJSQ1hWMzNaUHh0L0NPYmJWT1U1UVR6VGJkaHhoamJrZjRJVmwxekRuaXJnRDFiRlBIWTF1MXI4cTlqcHBybGUxb0d2UTZxbWRoMEZGbHdTYnNrMXpwdm5PMGJQbFN2ZDJSdTJFYmY1Z3ZGOFNTbVAwcHpTZURoKzZhYjJSM0dYOXIzZERyTHR3bEhiR2kvbUNpQ1JQVndhSTZKbVlYR1pZY0hmWjJYRG5ydURLeVExN3F1QUxadytlbjJydUhqM2o0OFI4PSZsdDsvZGlhZ3JhbSZndDsmbHQ7L214ZmlsZSZndDsiPjxkZWZzLz48Zz48cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjIyMCIgZmlsbC1vcGFjaXR5PSIwLjIiIGZpbGw9IiNiM2IzYjMiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgc3Ryb2tlLXdpZHRoPSIzIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC41LDkuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0iYWxsIiB3aWR0aD0iMzciIGhlaWdodD0iMTEiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMXB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogMzhweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij48aT48dT5MZWdlbmQ8L3U+PC9pPjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIxOSIgeT0iMTEiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTFweCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSI+W05vdCBzdXBwb3J0ZWQgYnkgdmlld2VyXTwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMjUiIHk9IjQxIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiByeD0iNiIgcnk9IjYiIGZpbGwtb3BhY2l0eT0iMC4yIiBmaWxsPSIjZmY5OTMzIiBzdHJva2U9IiM3ZjAwZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjIiIHN0cm9rZS13aWR0aD0iMyIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU1LjUsNTUuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0iYWxsIiB3aWR0aD0iMzgiIGhlaWdodD0iMTEiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMXB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogMzlweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zdHlsZTogaXRhbGljOyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3doaXRlLXNwYWNlOm5vcm1hbDsiPltncm91cF08L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTkiIHk9IjExIiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjExcHgiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXN0eWxlPSJpdGFsaWMiPltncm91cF08L3RleHQ+PC9zd2l0Y2g+PC9nPjxyZWN0IHg9IjI1IiB5PSIxMDEiIHdpZHRoPSIxMDAiIGhlaWdodD0iNDAiIHJ4PSI2IiByeT0iNiIgZmlsbC1vcGFjaXR5PSIwLjIiIGZpbGw9IiMzMzk5ZmYiIHN0cm9rZT0iIzdmMDBmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgc3Ryb2tlLXdpZHRoPSIzIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjEuNSwxMTUuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3Qgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7IiBwb2ludGVyLWV2ZW50cz0iYWxsIiB3aWR0aD0iMjYiIGhlaWdodD0iMTEiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMXB4OyBmb250LWZhbWlseTogJnF1b3Q7Q291cmllciBOZXcmcXVvdDs7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiAyN3B4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+bW9kZTwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIxMyIgeT0iMTEiIGZpbGw9IiMwMDAwMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTFweCIgZm9udC1mYW1pbHk9IkNvdXJpZXIgTmV3Ij5tb2RlPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIxNTEiIHk9IjQxIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTIuNSw0OC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSIxNDgiIGhlaWdodD0iMjQiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMXB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogMTQ4cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+Q29uY2VwdHVhbCBncm91cGluZyBvbmx5LCBub3QgcHJlc2VudCBpbiBzY2hlbWE8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNzQiIHk9IjE4IiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjExcHgiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiPkNvbmNlcHR1YWwgZ3JvdXBpbmcgb25seSwgbm90IHByZXNlbnQgaW4gc2NoZW1hPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIxNTEiIHk9IjEwMSIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUyLjUsMTE1LjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjExMSIgaGVpZ2h0PSIxMSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDExcHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiAxMTJweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij5TdXBwb3J0ZWQgdHJhdmVsIG1vZGU8L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iNTYiIHk9IjExIiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjExcHgiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiPlN1cHBvcnRlZCB0cmF2ZWwgbW9kZTwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMjEiIHk9IjE2MSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNiIgcnk9IjYiIGZpbGwtb3BhY2l0eT0iMC4yIiBmaWxsPSIjMzM5OWZmIiBzdHJva2U9IiM3ZjAwZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjIiIHN0cm9rZS13aWR0aD0iMyIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3LjUsMTc1LjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIgcG9pbnRlci1ldmVudHM9ImFsbCIgd2lkdGg9IjciIGhlaWdodD0iMTEiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMXB4OyBmb250LWZhbWlseTogJnF1b3Q7Q291cmllciBOZXcmcXVvdDs7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHZlcnRpY2FsLWFsaWduOiB0b3A7IHdpZHRoOiA4cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246aW5oZXJpdDt0ZXh0LWRlY29yYXRpb246aW5oZXJpdDt3aGl0ZS1zcGFjZTpub3JtYWw7Ij5hPC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjQiIHk9IjExIiBmaWxsPSIjMDAwMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjExcHgiIGZvbnQtZmFtaWx5PSJDb3VyaWVyIE5ldyI+YTwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iOTEiIHk9IjE2MSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNiIgcnk9IjYiIGZpbGwtb3BhY2l0eT0iMC4yIiBmaWxsPSIjMzM5OWZmIiBzdHJva2U9IiM3ZjAwZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjIiIHN0cm9rZS13aWR0aD0iMyIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNy41LDE3NS41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSI3IiBoZWlnaHQ9IjExIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTFweDsgZm9udC1mYW1pbHk6ICZxdW90O0NvdXJpZXIgTmV3JnF1b3Q7OyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogOHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+YjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSI0IiB5PSIxMSIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMXB4IiBmb250LWZhbWlseT0iQ291cmllciBOZXciPmI8L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gNjEgMTgxIEwgODAuOSAxODEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzdmMDBmZiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDg3LjY1IDE4MSBMIDc4LjY1IDE4NS41IEwgODAuOSAxODEgTCA3OC42NSAxNzYuNSBaIiBmaWxsPSIjN2YwMGZmIiBzdHJva2U9IiM3ZjAwZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMTUxIiB5PSIxNjEiIHdpZHRoPSIxNTAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0ibm9uZSIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1Mi41LDE2Ny41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiIHBvaW50ZXItZXZlbnRzPSJhbGwiIHdpZHRoPSIxNDgiIGhlaWdodD0iMjYiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMXB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB3aWR0aDogMTQ4cHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7d2hpdGUtc3BhY2U6bm9ybWFsOyI+TW9kZSA8Zm9udCBmYWNlPSJDb3VyaWVyIE5ldyI+YjwvZm9udD4gaXMgY29udGFpbmVkIGluIG1vZGUgPGZvbnQgZmFjZT0iQ291cmllciBOZXciPmE8L2ZvbnQ+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9Ijc0IiB5PSIxOSIgZmlsbD0iIzAwMDAwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMXB4IiBmb250LWZhbWlseT0iSGVsdmV0aWNhIj5bTm90IHN1cHBvcnRlZCBieSB2aWV3ZXJdPC90ZXh0Pjwvc3dpdGNoPjwvZz48L2c+PC9zdmc+"},1973:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/travel-modes-taxonomy-ea94e272694fb5340d6a259eb5b3dbdb.svg"}}]);