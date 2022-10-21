var C=Object.defineProperty;var i=(t,a)=>C(t,"name",{value:a,configurable:!0});import{r as n}from"./index.1348eb7e.js";import{a as u,j as x}from"./jsx-runtime.8df364a7.js";import"./iframe.ac232a84.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var p=i(function(t,a){return p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var s in e)e.hasOwnProperty(s)&&(r[s]=e[s])},p(t,a)},"extendStatics");function R(t,a){p(t,a);function r(){this.constructor=t}i(r,"__"),t.prototype=a===null?Object.create(a):(r.prototype=a.prototype,new r)}i(R,"__extends");var P=100,E=100,f=50,d=50,h=50;function v(t){var a=t.className,r=t.counterClockwise,e=t.dashRatio,s=t.pathRadius,o=t.strokeWidth,c=t.style;return n.exports.createElement("path",{className:a,style:Object.assign({},c,w({pathRadius:s,dashRatio:e,counterClockwise:r})),d:b({pathRadius:s,counterClockwise:r}),strokeWidth:o,fillOpacity:0})}i(v,"Path");function b(t){var a=t.pathRadius,r=t.counterClockwise,e=a,s=r?1:0;return`
      M `+d+","+h+`
      m 0,-`+e+`
      a `+e+","+e+" "+s+" 1 1 0,"+2*e+`
      a `+e+","+e+" "+s+" 1 1 0,-"+2*e+`
    `}i(b,"getPathDescription");function w(t){var a=t.counterClockwise,r=t.dashRatio,e=t.pathRadius,s=Math.PI*2*e,o=(1-r)*s;return{strokeDasharray:s+"px "+s+"px",strokeDashoffset:(a?-o:o)+"px"}}i(w,"getDashStyle");var W=function(t){R(a,t);function a(){return t!==null&&t.apply(this,arguments)||this}return i(a,"CircularProgressbar"),a.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},a.prototype.getPathRadius=function(){return f-this.props.strokeWidth/2-this.getBackgroundPadding()},a.prototype.getPathRatio=function(){var r=this.props,e=r.value,s=r.minValue,o=r.maxValue,c=Math.min(Math.max(e,s),o);return(c-s)/(o-s)},a.prototype.render=function(){var r=this.props,e=r.circleRatio,s=r.className,o=r.classes,c=r.counterClockwise,l=r.styles,g=r.strokeWidth,m=r.text,k=this.getPathRadius(),y=this.getPathRatio();return n.exports.createElement("svg",{className:o.root+" "+s,style:l.root,viewBox:"0 0 "+P+" "+E,"data-test-id":"CircularProgressbar"},this.props.background?n.exports.createElement("circle",{className:o.background,style:l.background,cx:d,cy:h,r:f}):null,n.exports.createElement(v,{className:o.trail,counterClockwise:c,dashRatio:e,pathRadius:k,strokeWidth:g,style:l.trail}),n.exports.createElement(v,{className:o.path,counterClockwise:c,dashRatio:y*e,pathRadius:k,strokeWidth:g,style:l.path}),m?n.exports.createElement("text",{className:o.text,style:l.text,x:d,y:h},m):null)},a.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},a}(n.exports.Component);function _(){const[t,a]=n.exports.useState(0);var r=t>0?t/4:0,e=100*r,s=t>0?t<4?"In Progress":"Done":"Stopped";return u("div",{children:[u("h1",{children:["Step ",t]}),x("div",{className:"progress-container",children:x(W,{value:e,text:`${e}%`})}),u("h2",{children:["Status: ",s]})]})}i(_,"CircularProgress");const B={title:"Components/CircularProgress",component:_},D={},S=["Default"];export{D as Default,S as __namedExportsOrder,B as default};
//# sourceMappingURL=CircularProgress.stories.6f8d97af.js.map
