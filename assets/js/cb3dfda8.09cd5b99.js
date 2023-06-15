"use strict";(self.webpackChunkoverture_schema=self.webpackChunkoverture_schema||[]).push([[783],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={},o="Use Cases",s={unversionedId:"gers/scenarios",id:"gers/scenarios",title:"Use Cases",description:"Live Traffic Data Provider",source:"@site/docs/gers/scenarios.mdx",sourceDirName:"gers",slug:"/gers/scenarios",permalink:"/gers/scenarios",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"gers",previous:{title:"Global Entity Reference System",permalink:"/gers/"},next:{title:"Terminology",permalink:"/gers/terminology"}},l={},c=[{value:"Live Traffic Data Provider",id:"live-traffic-data-provider",level:2},{value:"Place Enrichment",id:"place-enrichment",level:2},{value:"Scenario",id:"scenario",level:4}],d={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-cases"},"Use Cases"),(0,n.kt)("h2",{id:"live-traffic-data-provider"},"Live Traffic Data Provider"),(0,n.kt)("p",null,"A company providing live traffic data operates by ingesting sensor data and then conflating, cleaning, and calculating traffic density for a variety of locations through proprietary methods. Ultimately, they provide a data feed of live traffic conditions that customers subscribe to for a monthly access fee."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Before GERS + Overture"),": This company maintains a version of the OpenStreetMap road network to which they associate their traffic density information. The data-feed product is made of GeoJSON features, each with a LineString geometry representing a segment of road (from OSM) and properties including a timestamp and traffic information along that section of road. Using OSM is preferred because the geometries in the data feed will match road segment geometries for any customer using OSM. However, a more computationally expensive geospatial match operation is required to associate the traffic information with the road network."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"With GERS + Overture"),": The company uses the Overture road network internally. When they associate their traffic information to a road segment, they can publish the data feed with a GERS ID that represents the given road segment. Consumers that are also using Overture can then match this data by GERS ID to the Overture road segment, not needing to perform any geospatial computation. Additionally, even the geometry of the road segment could be omitted from the feed, since the ID will match for any customer also using the Overture road network."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What if the company has proprietary (better) road segment data extracted from their sensor network that they do not / cannot share?")),(0,n.kt)("p",null,"Because these road segments are not shared with Overture, they cannot be assigned GERS-IDs. A GERS-ID is of little value to these segments because they do not exist in other datasets, so conflating or matching them is meaningless."),(0,n.kt)("p",null,"However, by sharing ",(0,n.kt)("em",{parentName:"p"},"just the new road segment")," geometries with Overture (not the entire proprietary traffic feed), Overture will add it to the Overture corpus and generate GERS IDs accordingly. The Overture road network will be improved and 100% of the company's data feed can become GERS-enabled."),(0,n.kt)("h2",{id:"place-enrichment"},"Place Enrichment"),(0,n.kt)("p",null,"Venues \u2013 both private and public \u2013 are often an atomic unit in data environments. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Businesses organize customer records based on home addresses."),(0,n.kt)("li",{parentName:"ul"},"Municipalities map property information and status by parcel identifiers."),(0,n.kt)("li",{parentName:"ul"},"Insurance companies use various building identifiers to organize policy information."),(0,n.kt)("li",{parentName:"ul"},"Retailers organize analyze market opportunities and challenges by their own and competitive retail outlets."),(0,n.kt)("li",{parentName:"ul"},"Delivery companies optimize services by destination address.")),(0,n.kt)("p",null,"Despite these common use cases, location is under-utilized as an organizing mechanism for data, applications, and analytics. Addresses are often inconsistent, messy, or simply wrong. Coordinate pairs are precise but often inaccurate and can be difficult to cluster correctly. GIS infrastructure on the whole is often out of reach for many teams or is maintained by a small, specialty group at the fringes of the organization."),(0,n.kt)("p",null,"If location data can be associated with easy-to-use standard identifiers, data owners and consumers can use locations as a common denominator data element that facilitates joins, enrichment, and data sharing. GERS has the opportunity to make location a connector as valuable as phone numbers or email addresses, unlocking the incredible value of complex GIS data that is currently beyond the reach of most teams."),(0,n.kt)("h4",{id:"scenario"},"Scenario"),(0,n.kt)("p",null,"A data analyst at a pet-focused retail company is evaluating a metropolitan area in order to understand supply and demand, relative to their offerings, in the region. In their environment they have 1st party customer data organized by delivery address, addresses for their own retail locations, and a list of potential store locations provided by their real estate team. Their data infrastructure team has staged an Overture dataset in their environment, which they use as a foundational ground truth for the region. The company's executive team has asked the data analyst to review the potential store locations, recommend the most valuable sites for new stores, and model the expected market impact if they opened a new store at each site."),(0,n.kt)("p",null,"The data analyst plans on using Overture's GERS to quickly onboard necessary external data for their analysis."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"They match customer residences and store locations to GERS by conflating street addresses with venues in their local Overture basemap."),(0,n.kt)("li",{parentName:"ul"},"They request retail foot traffic data and residential demographic data from external vendors, specifying the data should be organized by GERS ID."),(0,n.kt)("li",{parentName:"ul"},"The external data vendors maintain a version of their data products keyed off GERS ID (matched via a conflation pipeline that accounts for street address, business name, and coordinate pair), which they provide to the requesting analyst."),(0,n.kt)("li",{parentName:"ul"},"The analyst is able to quickly ingest and join the external datasets in their own environment, without relying on their data infrastructure team, thanks to the simplicity of joining using consistent GERS identifiers."),(0,n.kt)("li",{parentName:"ul"},"The analyst performs their work, taking into account their current customer base, market potential, competitive footprint, and more.")),(0,n.kt)("p",null,"This is ad-hoc enrichment; enrichment that occurs within the confines of a single project. However, there are many datasets this company may choose to continually subscribe to which will be managed by the data ops or infrastructure teams. GERS has significant benefits in this scenario as well as it reduces the time to usage, allows for easy updates (vendors simply ship diff files keyed to GERS ID), and facilitates the sharing of data both internally and externally."))}m.isMDXComponent=!0}}]);