var C=Object.defineProperty;var s=(e,t)=>C(e,"name",{value:t,configurable:!0});import{r}from"./index.1348eb7e.js";import{_ as S,$ as P}from"./index.module.85272911.js";import{r as _}from"./index.ffe44a1a.js";function M(e,t=[]){let o=[];function n(u,a){const f=r.exports.createContext(a),i=o.length;o=[...o,a];function l(d){const{scope:p,children:v,...$}=d,b=(p==null?void 0:p[e][i])||f,h=r.exports.useMemo(()=>$,Object.values($));return r.exports.createElement(b.Provider,{value:h},v)}s(l,"Provider");function x(d,p){const v=(p==null?void 0:p[e][i])||f,$=r.exports.useContext(v);if($)return $;if(a!==void 0)return a;throw new Error(`\`${d}\` must be used within \`${u}\``)}return s(x,"useContext"),l.displayName=u+"Provider",[l,x]}s(n,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=s(()=>{const u=o.map(a=>r.exports.createContext(a));return s(function(f){const i=(f==null?void 0:f[e])||u;return r.exports.useMemo(()=>({[`__scope${e}`]:{...f,[e]:i}}),[f,i])},"useScope")},"createScope");return c.scopeName=e,[n,g(c,...t)]}s(M,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function g(...e){const t=e[0];if(e.length===1)return t;const o=s(()=>{const n=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return s(function(u){const a=n.reduce((f,{useScope:i,scopeName:l})=>{const d=i(u)[`__scope${l}`];return{...f,...d}},{});return r.exports.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])},"useComposedScopes")},"createScope1");return o.scopeName=t.scopeName,o}s(g,"$c512c27ab02ef895$var$composeContextScopes");function D(e,t,{checkForDefaultPrevented:o=!0}={}){return s(function(c){if(e==null||e(c),o===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}s(D,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function m(e){const t=r.exports.useRef(e);return r.exports.useEffect(()=>{t.current=e}),r.exports.useMemo(()=>(...o)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...o)},[])}s(m,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function T({prop:e,defaultProp:t,onChange:o=s(()=>{},"onChange")}){const[n,c]=w({defaultProp:t,onChange:o}),u=e!==void 0,a=u?e:n,f=m(o),i=r.exports.useCallback(l=>{if(u){const d=typeof l=="function"?l(e):l;d!==e&&f(d)}else c(l)},[u,e,c,f]);return[a,i]}s(T,"$71cd76cc60e0454e$export$6f32135080cb4c3");function w({defaultProp:e,onChange:t}){const o=r.exports.useState(e),[n]=o,c=r.exports.useRef(n),u=m(t);return r.exports.useEffect(()=>{c.current!==n&&(u(n),c.current=n)},[n,c,u]),o}s(w,"$71cd76cc60e0454e$var$useUncontrolledState");const B=Boolean(globalThis==null?void 0:globalThis.document)?r.exports.useLayoutEffect:()=>{},y=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],O=y.reduce((e,t)=>{const o=r.exports.forwardRef((n,c)=>{const{asChild:u,...a}=n,f=u?P:t;return r.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.exports.createElement(f,S({},a,{ref:c}))});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{});function U(e,t){e&&_.exports.flushSync(()=>e.dispatchEvent(t))}s(U,"$8927f6f2acc4f386$export$6d1a0317bde7de7f");export{M as $,T as a,O as b,D as c,B as d,m as e,U as f};
//# sourceMappingURL=index.module.388692be.js.map