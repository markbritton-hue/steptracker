function OT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function LT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var u_={exports:{}},du={},c_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo=Symbol.for("react.element"),bT=Symbol.for("react.portal"),MT=Symbol.for("react.fragment"),FT=Symbol.for("react.strict_mode"),UT=Symbol.for("react.profiler"),jT=Symbol.for("react.provider"),zT=Symbol.for("react.context"),BT=Symbol.for("react.forward_ref"),$T=Symbol.for("react.suspense"),WT=Symbol.for("react.memo"),qT=Symbol.for("react.lazy"),gm=Symbol.iterator;function HT(t){return t===null||typeof t!="object"?null:(t=gm&&t[gm]||t["@@iterator"],typeof t=="function"?t:null)}var h_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d_=Object.assign,f_={};function ls(t,e,n){this.props=t,this.context=e,this.refs=f_,this.updater=n||h_}ls.prototype.isReactComponent={};ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function p_(){}p_.prototype=ls.prototype;function Id(t,e,n){this.props=t,this.context=e,this.refs=f_,this.updater=n||h_}var Sd=Id.prototype=new p_;Sd.constructor=Id;d_(Sd,ls.prototype);Sd.isPureReactComponent=!0;var ym=Array.isArray,m_=Object.prototype.hasOwnProperty,Ad={current:null},g_={key:!0,ref:!0,__self:!0,__source:!0};function y_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)m_.call(e,r)&&!g_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Yo,type:t,key:s,ref:o,props:i,_owner:Ad.current}}function KT(t,e){return{$$typeof:Yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yo}function GT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _m=/\/+/g;function mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GT(""+t.key):e.toString(36)}function Xa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Yo:case bT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+mc(o,0):r,ym(i)?(n="",t!=null&&(n=t.replace(_m,"$&/")+"/"),Xa(i,e,n,"",function(c){return c})):i!=null&&(Rd(i)&&(i=KT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_m,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ym(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+mc(s,l);o+=Xa(s,e,n,u,i)}else if(u=HT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+mc(s,l++),o+=Xa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pa(t,e,n){if(t==null)return t;var r=[],i=0;return Xa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function QT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Za={transition:null},YT={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Za,ReactCurrentOwner:Ad};function __(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Pa,forEach:function(t,e,n){Pa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pa(t,function(){e++}),e},toArray:function(t){return Pa(t,function(e){return e})||[]},only:function(t){if(!Rd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=ls;ne.Fragment=MT;ne.Profiler=UT;ne.PureComponent=Id;ne.StrictMode=FT;ne.Suspense=$T;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YT;ne.act=__;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=d_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ad.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)m_.call(e,u)&&!g_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Yo,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:zT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jT,_context:t},t.Consumer=t};ne.createElement=y_;ne.createFactory=function(t){var e=y_.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:BT,render:t}};ne.isValidElement=Rd;ne.lazy=function(t){return{$$typeof:qT,_payload:{_status:-1,_result:t},_init:QT}};ne.memo=function(t,e){return{$$typeof:WT,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Za.transition;Za.transition={};try{t()}finally{Za.transition=e}};ne.unstable_act=__;ne.useCallback=function(t,e){return lt.current.useCallback(t,e)};ne.useContext=function(t){return lt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return lt.current.useEffect(t,e)};ne.useId=function(){return lt.current.useId()};ne.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return lt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};ne.useRef=function(t){return lt.current.useRef(t)};ne.useState=function(t){return lt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return lt.current.useTransition()};ne.version="18.3.1";c_.exports=ne;var U=c_.exports;const v_=LT(U),JT=OT({__proto__:null,default:v_},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT=U,ZT=Symbol.for("react.element"),eI=Symbol.for("react.fragment"),tI=Object.prototype.hasOwnProperty,nI=XT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rI={key:!0,ref:!0,__self:!0,__source:!0};function E_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)tI.call(e,r)&&!rI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ZT,type:t,key:s,ref:o,props:i,_owner:nI.current}}du.Fragment=eI;du.jsx=E_;du.jsxs=E_;u_.exports=du;var k=u_.exports,eh={},w_={exports:{}},It={},T_={exports:{}},I_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,Q){var X=W.length;W.push(Q);e:for(;0<X;){var me=X-1>>>1,Ie=W[me];if(0<i(Ie,Q))W[me]=Q,W[X]=Ie,X=me;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Q=W[0],X=W.pop();if(X!==Q){W[0]=X;e:for(var me=0,Ie=W.length,Vr=Ie>>>1;me<Vr;){var At=2*(me+1)-1,Or=W[At],Ot=At+1,Vn=W[Ot];if(0>i(Or,X))Ot<Ie&&0>i(Vn,Or)?(W[me]=Vn,W[Ot]=X,me=Ot):(W[me]=Or,W[At]=X,me=At);else if(Ot<Ie&&0>i(Vn,X))W[me]=Vn,W[Ot]=X,me=Ot;else break e}}return Q}function i(W,Q){var X=W.sortIndex-Q.sortIndex;return X!==0?X:W.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,S=!1,C=!1,N=!1,x=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(W){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=W)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function O(W){if(N=!1,A(W),!C)if(n(u)!==null)C=!0,Ts(F);else{var Q=n(c);Q!==null&&Is(O,Q.startTime-W)}}function F(W,Q){C=!1,N&&(N=!1,w(y),y=-1),S=!0;var X=m;try{for(A(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||W&&!R());){var me=p.callback;if(typeof me=="function"){p.callback=null,m=p.priorityLevel;var Ie=me(p.expirationTime<=Q);Q=t.unstable_now(),typeof Ie=="function"?p.callback=Ie:p===n(u)&&r(u),A(Q)}else r(u);p=n(u)}if(p!==null)var Vr=!0;else{var At=n(c);At!==null&&Is(O,At.startTime-Q),Vr=!1}return Vr}finally{p=null,m=X,S=!1}}var z=!1,v=null,y=-1,E=5,I=-1;function R(){return!(t.unstable_now()-I<E)}function P(){if(v!==null){var W=t.unstable_now();I=W;var Q=!0;try{Q=v(!0,W)}finally{Q?T():(z=!1,v=null)}}else z=!1}var T;if(typeof _=="function")T=function(){_(P)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,cn=De.port2;De.port1.onmessage=P,T=function(){cn.postMessage(null)}}else T=function(){x(P,0)};function Ts(W){v=W,z||(z=!0,T())}function Is(W,Q){y=x(function(){W(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){C||S||(C=!0,Ts(F))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var X=m;m=Q;try{return W()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,Q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var X=m;m=W;try{return Q()}finally{m=X}},t.unstable_scheduleCallback=function(W,Q,X){var me=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?me+X:me):X=me,W){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=X+Ie,W={id:f++,callback:Q,priorityLevel:W,startTime:X,expirationTime:Ie,sortIndex:-1},X>me?(W.sortIndex=X,e(c,W),n(u)===null&&W===n(c)&&(N?(w(y),y=-1):N=!0,Is(O,X-me))):(W.sortIndex=Ie,e(u,W),C||S||(C=!0,Ts(F))),W},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(W){var Q=m;return function(){var X=m;m=Q;try{return W.apply(this,arguments)}finally{m=X}}}})(I_);T_.exports=I_;var iI=T_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sI=U,Tt=iI;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var S_=new Set,Eo={};function ci(t,e){Gi(t,e),Gi(t+"Capture",e)}function Gi(t,e){for(Eo[t]=e,t=0;t<e.length;t++)S_.add(e[t])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),th=Object.prototype.hasOwnProperty,oI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vm={},Em={};function aI(t){return th.call(Em,t)?!0:th.call(vm,t)?!1:oI.test(t)?Em[t]=!0:(vm[t]=!0,!1)}function lI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uI(t,e,n,r){if(e===null||typeof e>"u"||lI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cd=/[\-:]([a-z])/g;function Pd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cd,Pd);He[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cd,Pd);He[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cd,Pd);He[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uI(e,n,i,r)&&(n=null),r||i===null?aI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xn=sI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ka=Symbol.for("react.element"),Ii=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),nh=Symbol.for("react.profiler"),A_=Symbol.for("react.provider"),R_=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),rh=Symbol.for("react.suspense"),ih=Symbol.for("react.suspense_list"),Dd=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),C_=Symbol.for("react.offscreen"),wm=Symbol.iterator;function js(t){return t===null||typeof t!="object"?null:(t=wm&&t[wm]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,gc;function Qs(t){if(gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gc=e&&e[1]||""}return`
`+gc+t}var yc=!1;function _c(t,e){if(!t||yc)return"";yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{yc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function cI(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=_c(t.type,!1),t;case 11:return t=_c(t.type.render,!1),t;case 1:return t=_c(t.type,!0),t;default:return""}}function sh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Si:return"Fragment";case Ii:return"Portal";case nh:return"Profiler";case xd:return"StrictMode";case rh:return"Suspense";case ih:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R_:return(t.displayName||"Context")+".Consumer";case A_:return(t._context.displayName||"Context")+".Provider";case Nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dd:return e=t.displayName||null,e!==null?e:sh(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return sh(t(e))}catch{}}return null}function hI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sh(e);case 8:return e===xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function P_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dI(t){var e=P_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=dI(t))}function k_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=P_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function El(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function oh(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function x_(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function ah(t,e){x_(t,e);var n=mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lh(t,e.type,n):e.hasOwnProperty("defaultValue")&&lh(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Im(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lh(t,e,n){(e!=="number"||El(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function bi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function uh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Ys(n)){if(1<n.length)throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function N_(t,e){var n=mr(e.value),r=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Am(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function D_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?D_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,V_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fI=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(t){fI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),so[e]=so[t]})});function O_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||so.hasOwnProperty(t)&&so[t]?(""+e).trim():e+"px"}function L_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=O_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var pI=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hh(t,e){if(e){if(pI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fh=null;function Vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ph=null,Mi=null,Fi=null;function Rm(t){if(t=Zo(t)){if(typeof ph!="function")throw Error(M(280));var e=t.stateNode;e&&(e=yu(e),ph(t.stateNode,t.type,e))}}function b_(t){Mi?Fi?Fi.push(t):Fi=[t]:Mi=t}function M_(){if(Mi){var t=Mi,e=Fi;if(Fi=Mi=null,Rm(t),e)for(t=0;t<e.length;t++)Rm(e[t])}}function F_(t,e){return t(e)}function U_(){}var vc=!1;function j_(t,e,n){if(vc)return t(e,n);vc=!0;try{return F_(t,e,n)}finally{vc=!1,(Mi!==null||Fi!==null)&&(U_(),M_())}}function To(t,e){var n=t.stateNode;if(n===null)return null;var r=yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var mh=!1;if(Tn)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){mh=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{mh=!1}function mI(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var oo=!1,wl=null,Tl=!1,gh=null,gI={onError:function(t){oo=!0,wl=t}};function yI(t,e,n,r,i,s,o,l,u){oo=!1,wl=null,mI.apply(gI,arguments)}function _I(t,e,n,r,i,s,o,l,u){if(yI.apply(this,arguments),oo){if(oo){var c=wl;oo=!1,wl=null}else throw Error(M(198));Tl||(Tl=!0,gh=c)}}function hi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function z_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cm(t){if(hi(t)!==t)throw Error(M(188))}function vI(t){var e=t.alternate;if(!e){if(e=hi(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Cm(i),t;if(s===r)return Cm(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function B_(t){return t=vI(t),t!==null?$_(t):null}function $_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$_(t);if(e!==null)return e;t=t.sibling}return null}var W_=Tt.unstable_scheduleCallback,Pm=Tt.unstable_cancelCallback,EI=Tt.unstable_shouldYield,wI=Tt.unstable_requestPaint,Ae=Tt.unstable_now,TI=Tt.unstable_getCurrentPriorityLevel,Od=Tt.unstable_ImmediatePriority,q_=Tt.unstable_UserBlockingPriority,Il=Tt.unstable_NormalPriority,II=Tt.unstable_LowPriority,H_=Tt.unstable_IdlePriority,fu=null,Zt=null;function SI(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(fu,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:CI,AI=Math.log,RI=Math.LN2;function CI(t){return t>>>=0,t===0?32:31-(AI(t)/RI|0)|0}var Da=64,Va=4194304;function Js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Js(l):(s&=o,s!==0&&(r=Js(s)))}else o=n&~i,o!==0?r=Js(o):s!==0&&(r=Js(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),i=1<<n,r|=t[n],e&=~i;return r}function PI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=PI(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function yh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function K_(){var t=Da;return Da<<=1,!(Da&4194240)&&(Da=64),t}function Ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function xI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function G_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Q_,bd,Y_,J_,X_,_h=!1,Oa=[],tr=null,nr=null,rr=null,Io=new Map,So=new Map,qn=[],NI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function km(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(e.pointerId)}}function Bs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Zo(e),e!==null&&bd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DI(t,e,n,r,i){switch(e){case"focusin":return tr=Bs(tr,t,e,n,r,i),!0;case"dragenter":return nr=Bs(nr,t,e,n,r,i),!0;case"mouseover":return rr=Bs(rr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Io.set(s,Bs(Io.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,So.set(s,Bs(So.get(s)||null,t,e,n,r,i)),!0}return!1}function Z_(t){var e=Wr(t.target);if(e!==null){var n=hi(e);if(n!==null){if(e=n.tag,e===13){if(e=z_(n),e!==null){t.blockedOn=e,X_(t.priority,function(){Y_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function el(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);fh=r,n.target.dispatchEvent(r),fh=null}else return e=Zo(n),e!==null&&bd(e),t.blockedOn=n,!1;e.shift()}return!0}function xm(t,e,n){el(t)&&n.delete(e)}function VI(){_h=!1,tr!==null&&el(tr)&&(tr=null),nr!==null&&el(nr)&&(nr=null),rr!==null&&el(rr)&&(rr=null),Io.forEach(xm),So.forEach(xm)}function $s(t,e){t.blockedOn===e&&(t.blockedOn=null,_h||(_h=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,VI)))}function Ao(t){function e(i){return $s(i,t)}if(0<Oa.length){$s(Oa[0],t);for(var n=1;n<Oa.length;n++){var r=Oa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tr!==null&&$s(tr,t),nr!==null&&$s(nr,t),rr!==null&&$s(rr,t),Io.forEach(e),So.forEach(e),n=0;n<qn.length;n++)r=qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)Z_(n),n.blockedOn===null&&qn.shift()}var Ui=xn.ReactCurrentBatchConfig,Al=!0;function OI(t,e,n,r){var i=ae,s=Ui.transition;Ui.transition=null;try{ae=1,Md(t,e,n,r)}finally{ae=i,Ui.transition=s}}function LI(t,e,n,r){var i=ae,s=Ui.transition;Ui.transition=null;try{ae=4,Md(t,e,n,r)}finally{ae=i,Ui.transition=s}}function Md(t,e,n,r){if(Al){var i=vh(t,e,n,r);if(i===null)xc(t,e,r,Rl,n),km(t,r);else if(DI(i,t,e,n,r))r.stopPropagation();else if(km(t,r),e&4&&-1<NI.indexOf(t)){for(;i!==null;){var s=Zo(i);if(s!==null&&Q_(s),s=vh(t,e,n,r),s===null&&xc(t,e,r,Rl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xc(t,e,r,null,n)}}var Rl=null;function vh(t,e,n,r){if(Rl=null,t=Vd(r),t=Wr(t),t!==null)if(e=hi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=z_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Rl=t,null}function ev(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TI()){case Od:return 1;case q_:return 4;case Il:case II:return 16;case H_:return 536870912;default:return 16}default:return 16}}var Jn=null,Fd=null,tl=null;function tv(){if(tl)return tl;var t,e=Fd,n=e.length,r,i="value"in Jn?Jn.value:Jn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return tl=i.slice(t,1<r?1-r:void 0)}function nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function La(){return!0}function Nm(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?La:Nm,this.isPropagationStopped=Nm,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ud=St(us),Xo=Ee({},us,{view:0,detail:0}),bI=St(Xo),wc,Tc,Ws,pu=Ee({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(wc=t.screenX-Ws.screenX,Tc=t.screenY-Ws.screenY):Tc=wc=0,Ws=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),Dm=St(pu),MI=Ee({},pu,{dataTransfer:0}),FI=St(MI),UI=Ee({},Xo,{relatedTarget:0}),Ic=St(UI),jI=Ee({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),zI=St(jI),BI=Ee({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$I=St(BI),WI=Ee({},us,{data:0}),Vm=St(WI),qI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KI[t])?!!e[t]:!1}function jd(){return GI}var QI=Ee({},Xo,{key:function(t){if(t.key){var e=qI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jd,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YI=St(QI),JI=Ee({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Om=St(JI),XI=Ee({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jd}),ZI=St(XI),eS=Ee({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),tS=St(eS),nS=Ee({},pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=St(nS),iS=[9,13,27,32],zd=Tn&&"CompositionEvent"in window,ao=null;Tn&&"documentMode"in document&&(ao=document.documentMode);var sS=Tn&&"TextEvent"in window&&!ao,nv=Tn&&(!zd||ao&&8<ao&&11>=ao),Lm=" ",bm=!1;function rv(t,e){switch(t){case"keyup":return iS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function oS(t,e){switch(t){case"compositionend":return iv(e);case"keypress":return e.which!==32?null:(bm=!0,Lm);case"textInput":return t=e.data,t===Lm&&bm?null:t;default:return null}}function aS(t,e){if(Ai)return t==="compositionend"||!zd&&rv(t,e)?(t=tv(),tl=Fd=Jn=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nv&&e.locale!=="ko"?null:e.data;default:return null}}var lS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lS[t.type]:e==="textarea"}function sv(t,e,n,r){b_(r),e=Cl(e,"onChange"),0<e.length&&(n=new Ud("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var lo=null,Ro=null;function uS(t){gv(t,0)}function mu(t){var e=Pi(t);if(k_(e))return t}function cS(t,e){if(t==="change")return e}var ov=!1;if(Tn){var Sc;if(Tn){var Ac="oninput"in document;if(!Ac){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),Ac=typeof Fm.oninput=="function"}Sc=Ac}else Sc=!1;ov=Sc&&(!document.documentMode||9<document.documentMode)}function Um(){lo&&(lo.detachEvent("onpropertychange",av),Ro=lo=null)}function av(t){if(t.propertyName==="value"&&mu(Ro)){var e=[];sv(e,Ro,t,Vd(t)),j_(uS,e)}}function hS(t,e,n){t==="focusin"?(Um(),lo=e,Ro=n,lo.attachEvent("onpropertychange",av)):t==="focusout"&&Um()}function dS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mu(Ro)}function fS(t,e){if(t==="click")return mu(e)}function pS(t,e){if(t==="input"||t==="change")return mu(e)}function mS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:mS;function Co(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!th.call(e,i)||!Wt(t[i],e[i]))return!1}return!0}function jm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zm(t,e){var n=jm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jm(n)}}function lv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uv(){for(var t=window,e=El();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=El(t.document)}return e}function Bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gS(t){var e=uv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lv(n.ownerDocument.documentElement,n)){if(r!==null&&Bd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zm(n,s);var o=zm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yS=Tn&&"documentMode"in document&&11>=document.documentMode,Ri=null,Eh=null,uo=null,wh=!1;function Bm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wh||Ri==null||Ri!==El(r)||(r=Ri,"selectionStart"in r&&Bd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&Co(uo,r)||(uo=r,r=Cl(Eh,"onSelect"),0<r.length&&(e=new Ud("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ri)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ci={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Rc={},cv={};Tn&&(cv=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function gu(t){if(Rc[t])return Rc[t];if(!Ci[t])return t;var e=Ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cv)return Rc[t]=e[n];return t}var hv=gu("animationend"),dv=gu("animationiteration"),fv=gu("animationstart"),pv=gu("transitionend"),mv=new Map,$m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){mv.set(t,e),ci(e,[t])}for(var Cc=0;Cc<$m.length;Cc++){var Pc=$m[Cc],_S=Pc.toLowerCase(),vS=Pc[0].toUpperCase()+Pc.slice(1);Sr(_S,"on"+vS)}Sr(hv,"onAnimationEnd");Sr(dv,"onAnimationIteration");Sr(fv,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(pv,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));function Wm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_I(r,e,void 0,t),t.currentTarget=null}function gv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Wm(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Wm(i,l,c),s=u}}}if(Tl)throw t=gh,Tl=!1,gh=null,t}function de(t,e){var n=e[Rh];n===void 0&&(n=e[Rh]=new Set);var r=t+"__bubble";n.has(r)||(yv(e,t,2,!1),n.add(r))}function kc(t,e,n){var r=0;e&&(r|=4),yv(n,t,r,e)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function Po(t){if(!t[Ma]){t[Ma]=!0,S_.forEach(function(n){n!=="selectionchange"&&(ES.has(n)||kc(n,!1,t),kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ma]||(e[Ma]=!0,kc("selectionchange",!1,e))}}function yv(t,e,n,r){switch(ev(e)){case 1:var i=OI;break;case 4:i=LI;break;default:i=Md}n=i.bind(null,e,n,t),i=void 0,!mh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Wr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}j_(function(){var c=s,f=Vd(n),p=[];e:{var m=mv.get(t);if(m!==void 0){var S=Ud,C=t;switch(t){case"keypress":if(nl(n)===0)break e;case"keydown":case"keyup":S=YI;break;case"focusin":C="focus",S=Ic;break;case"focusout":C="blur",S=Ic;break;case"beforeblur":case"afterblur":S=Ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=FI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=ZI;break;case hv:case dv:case fv:S=zI;break;case pv:S=tS;break;case"scroll":S=bI;break;case"wheel":S=rS;break;case"copy":case"cut":case"paste":S=$I;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Om}var N=(e&4)!==0,x=!N&&t==="scroll",w=N?m!==null?m+"Capture":null:m;N=[];for(var _=c,A;_!==null;){A=_;var O=A.stateNode;if(A.tag===5&&O!==null&&(A=O,w!==null&&(O=To(_,w),O!=null&&N.push(ko(_,O,A)))),x)break;_=_.return}0<N.length&&(m=new S(m,C,null,n,f),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==fh&&(C=n.relatedTarget||n.fromElement)&&(Wr(C)||C[In]))break e;if((S||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=c,C=C?Wr(C):null,C!==null&&(x=hi(C),C!==x||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=c),S!==C)){if(N=Dm,O="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(N=Om,O="onPointerLeave",w="onPointerEnter",_="pointer"),x=S==null?m:Pi(S),A=C==null?m:Pi(C),m=new N(O,_+"leave",S,n,f),m.target=x,m.relatedTarget=A,O=null,Wr(f)===c&&(N=new N(w,_+"enter",C,n,f),N.target=A,N.relatedTarget=x,O=N),x=O,S&&C)t:{for(N=S,w=C,_=0,A=N;A;A=_i(A))_++;for(A=0,O=w;O;O=_i(O))A++;for(;0<_-A;)N=_i(N),_--;for(;0<A-_;)w=_i(w),A--;for(;_--;){if(N===w||w!==null&&N===w.alternate)break t;N=_i(N),w=_i(w)}N=null}else N=null;S!==null&&qm(p,m,S,N,!1),C!==null&&x!==null&&qm(p,x,C,N,!0)}}e:{if(m=c?Pi(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var F=cS;else if(Mm(m))if(ov)F=pS;else{F=dS;var z=hS}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=fS);if(F&&(F=F(t,c))){sv(p,F,n,f);break e}z&&z(t,m,c),t==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&lh(m,"number",m.value)}switch(z=c?Pi(c):window,t){case"focusin":(Mm(z)||z.contentEditable==="true")&&(Ri=z,Eh=c,uo=null);break;case"focusout":uo=Eh=Ri=null;break;case"mousedown":wh=!0;break;case"contextmenu":case"mouseup":case"dragend":wh=!1,Bm(p,n,f);break;case"selectionchange":if(yS)break;case"keydown":case"keyup":Bm(p,n,f)}var v;if(zd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ai?rv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(nv&&n.locale!=="ko"&&(Ai||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ai&&(v=tv()):(Jn=f,Fd="value"in Jn?Jn.value:Jn.textContent,Ai=!0)),z=Cl(c,y),0<z.length&&(y=new Vm(y,t,null,n,f),p.push({event:y,listeners:z}),v?y.data=v:(v=iv(n),v!==null&&(y.data=v)))),(v=sS?oS(t,n):aS(t,n))&&(c=Cl(c,"onBeforeInput"),0<c.length&&(f=new Vm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=v))}gv(p,e)})}function ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=To(t,n),s!=null&&r.unshift(ko(t,s,i)),s=To(t,e),s!=null&&r.push(ko(t,s,i))),t=t.return}return r}function _i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=To(n,s),u!=null&&o.unshift(ko(n,u,l))):i||(u=To(n,s),u!=null&&o.push(ko(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wS=/\r\n?/g,TS=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(wS,`
`).replace(TS,"")}function Fa(t,e,n){if(e=Hm(e),Hm(t)!==e&&n)throw Error(M(425))}function Pl(){}var Th=null,Ih=null;function Sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ah=typeof setTimeout=="function"?setTimeout:void 0,IS=typeof clearTimeout=="function"?clearTimeout:void 0,Km=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof Km<"u"?function(t){return Km.resolve(null).then(t).catch(AS)}:Ah;function AS(t){setTimeout(function(){throw t})}function Nc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ao(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),Xt="__reactFiber$"+cs,xo="__reactProps$"+cs,In="__reactContainer$"+cs,Rh="__reactEvents$"+cs,RS="__reactListeners$"+cs,CS="__reactHandles$"+cs;function Wr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[In]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gm(t);t!==null;){if(n=t[Xt])return n;t=Gm(t)}return e}t=n,n=t.parentNode}return null}function Zo(t){return t=t[Xt]||t[In],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Pi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function yu(t){return t[xo]||null}var Ch=[],ki=-1;function Ar(t){return{current:t}}function pe(t){0>ki||(t.current=Ch[ki],Ch[ki]=null,ki--)}function ce(t,e){ki++,Ch[ki]=t.current,t.current=e}var gr={},tt=Ar(gr),pt=Ar(!1),Jr=gr;function Qi(t,e){var n=t.type.contextTypes;if(!n)return gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mt(t){return t=t.childContextTypes,t!=null}function kl(){pe(pt),pe(tt)}function Qm(t,e,n){if(tt.current!==gr)throw Error(M(168));ce(tt,e),ce(pt,n)}function _v(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(M(108,hI(t)||"Unknown",i));return Ee({},n,r)}function xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Jr=tt.current,ce(tt,t),ce(pt,pt.current),!0}function Ym(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=_v(t,e,Jr),r.__reactInternalMemoizedMergedChildContext=t,pe(pt),pe(tt),ce(tt,t)):pe(pt),ce(pt,n)}var dn=null,_u=!1,Dc=!1;function vv(t){dn===null?dn=[t]:dn.push(t)}function PS(t){_u=!0,vv(t)}function Rr(){if(!Dc&&dn!==null){Dc=!0;var t=0,e=ae;try{var n=dn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,_u=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),W_(Od,Rr),i}finally{ae=e,Dc=!1}}return null}var xi=[],Ni=0,Nl=null,Dl=0,Rt=[],Ct=0,Xr=null,fn=1,pn="";function jr(t,e){xi[Ni++]=Dl,xi[Ni++]=Nl,Nl=t,Dl=e}function Ev(t,e,n){Rt[Ct++]=fn,Rt[Ct++]=pn,Rt[Ct++]=Xr,Xr=t;var r=fn;t=pn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var s=32-jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-jt(e)+i|n<<i|r,pn=s+t}else fn=1<<s|n<<i|r,pn=t}function $d(t){t.return!==null&&(jr(t,1),Ev(t,1,0))}function Wd(t){for(;t===Nl;)Nl=xi[--Ni],xi[Ni]=null,Dl=xi[--Ni],xi[Ni]=null;for(;t===Xr;)Xr=Rt[--Ct],Rt[Ct]=null,pn=Rt[--Ct],Rt[Ct]=null,fn=Rt[--Ct],Rt[Ct]=null}var wt=null,vt=null,ge=!1,Ft=null;function wv(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,vt=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,vt=null,!0):!1;default:return!1}}function Ph(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kh(t){if(ge){var e=vt;if(e){var n=e;if(!Jm(t,e)){if(Ph(t))throw Error(M(418));e=ir(n.nextSibling);var r=wt;e&&Jm(t,e)?wv(r,n):(t.flags=t.flags&-4097|2,ge=!1,wt=t)}}else{if(Ph(t))throw Error(M(418));t.flags=t.flags&-4097|2,ge=!1,wt=t}}}function Xm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function Ua(t){if(t!==wt)return!1;if(!ge)return Xm(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sh(t.type,t.memoizedProps)),e&&(e=vt)){if(Ph(t))throw Tv(),Error(M(418));for(;e;)wv(t,e),e=ir(e.nextSibling)}if(Xm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=wt?ir(t.stateNode.nextSibling):null;return!0}function Tv(){for(var t=vt;t;)t=ir(t.nextSibling)}function Yi(){vt=wt=null,ge=!1}function qd(t){Ft===null?Ft=[t]:Ft.push(t)}var kS=xn.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function ja(t,e){throw t=Object.prototype.toString.call(e),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zm(t){var e=t._init;return e(t._payload)}function Iv(t){function e(w,_){if(t){var A=w.deletions;A===null?(w.deletions=[_],w.flags|=16):A.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=lr(w,_),w.index=0,w.sibling=null,w}function s(w,_,A){return w.index=A,t?(A=w.alternate,A!==null?(A=A.index,A<_?(w.flags|=2,_):A):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,A,O){return _===null||_.tag!==6?(_=Uc(A,w.mode,O),_.return=w,_):(_=i(_,A),_.return=w,_)}function u(w,_,A,O){var F=A.type;return F===Si?f(w,_,A.props.children,O,A.key):_!==null&&(_.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Bn&&Zm(F)===_.type)?(O=i(_,A.props),O.ref=qs(w,_,A),O.return=w,O):(O=ul(A.type,A.key,A.props,null,w.mode,O),O.ref=qs(w,_,A),O.return=w,O)}function c(w,_,A,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=jc(A,w.mode,O),_.return=w,_):(_=i(_,A.children||[]),_.return=w,_)}function f(w,_,A,O,F){return _===null||_.tag!==7?(_=Qr(A,w.mode,O,F),_.return=w,_):(_=i(_,A),_.return=w,_)}function p(w,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Uc(""+_,w.mode,A),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ka:return A=ul(_.type,_.key,_.props,null,w.mode,A),A.ref=qs(w,null,_),A.return=w,A;case Ii:return _=jc(_,w.mode,A),_.return=w,_;case Bn:var O=_._init;return p(w,O(_._payload),A)}if(Ys(_)||js(_))return _=Qr(_,w.mode,A,null),_.return=w,_;ja(w,_)}return null}function m(w,_,A,O){var F=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return F!==null?null:l(w,_,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case ka:return A.key===F?u(w,_,A,O):null;case Ii:return A.key===F?c(w,_,A,O):null;case Bn:return F=A._init,m(w,_,F(A._payload),O)}if(Ys(A)||js(A))return F!==null?null:f(w,_,A,O,null);ja(w,A)}return null}function S(w,_,A,O,F){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(A)||null,l(_,w,""+O,F);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ka:return w=w.get(O.key===null?A:O.key)||null,u(_,w,O,F);case Ii:return w=w.get(O.key===null?A:O.key)||null,c(_,w,O,F);case Bn:var z=O._init;return S(w,_,A,z(O._payload),F)}if(Ys(O)||js(O))return w=w.get(A)||null,f(_,w,O,F,null);ja(_,O)}return null}function C(w,_,A,O){for(var F=null,z=null,v=_,y=_=0,E=null;v!==null&&y<A.length;y++){v.index>y?(E=v,v=null):E=v.sibling;var I=m(w,v,A[y],O);if(I===null){v===null&&(v=E);break}t&&v&&I.alternate===null&&e(w,v),_=s(I,_,y),z===null?F=I:z.sibling=I,z=I,v=E}if(y===A.length)return n(w,v),ge&&jr(w,y),F;if(v===null){for(;y<A.length;y++)v=p(w,A[y],O),v!==null&&(_=s(v,_,y),z===null?F=v:z.sibling=v,z=v);return ge&&jr(w,y),F}for(v=r(w,v);y<A.length;y++)E=S(v,w,y,A[y],O),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?y:E.key),_=s(E,_,y),z===null?F=E:z.sibling=E,z=E);return t&&v.forEach(function(R){return e(w,R)}),ge&&jr(w,y),F}function N(w,_,A,O){var F=js(A);if(typeof F!="function")throw Error(M(150));if(A=F.call(A),A==null)throw Error(M(151));for(var z=F=null,v=_,y=_=0,E=null,I=A.next();v!==null&&!I.done;y++,I=A.next()){v.index>y?(E=v,v=null):E=v.sibling;var R=m(w,v,I.value,O);if(R===null){v===null&&(v=E);break}t&&v&&R.alternate===null&&e(w,v),_=s(R,_,y),z===null?F=R:z.sibling=R,z=R,v=E}if(I.done)return n(w,v),ge&&jr(w,y),F;if(v===null){for(;!I.done;y++,I=A.next())I=p(w,I.value,O),I!==null&&(_=s(I,_,y),z===null?F=I:z.sibling=I,z=I);return ge&&jr(w,y),F}for(v=r(w,v);!I.done;y++,I=A.next())I=S(v,w,y,I.value,O),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?y:I.key),_=s(I,_,y),z===null?F=I:z.sibling=I,z=I);return t&&v.forEach(function(P){return e(w,P)}),ge&&jr(w,y),F}function x(w,_,A,O){if(typeof A=="object"&&A!==null&&A.type===Si&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case ka:e:{for(var F=A.key,z=_;z!==null;){if(z.key===F){if(F=A.type,F===Si){if(z.tag===7){n(w,z.sibling),_=i(z,A.props.children),_.return=w,w=_;break e}}else if(z.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Bn&&Zm(F)===z.type){n(w,z.sibling),_=i(z,A.props),_.ref=qs(w,z,A),_.return=w,w=_;break e}n(w,z);break}else e(w,z);z=z.sibling}A.type===Si?(_=Qr(A.props.children,w.mode,O,A.key),_.return=w,w=_):(O=ul(A.type,A.key,A.props,null,w.mode,O),O.ref=qs(w,_,A),O.return=w,w=O)}return o(w);case Ii:e:{for(z=A.key;_!==null;){if(_.key===z)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(w,_.sibling),_=i(_,A.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=jc(A,w.mode,O),_.return=w,w=_}return o(w);case Bn:return z=A._init,x(w,_,z(A._payload),O)}if(Ys(A))return C(w,_,A,O);if(js(A))return N(w,_,A,O);ja(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,A),_.return=w,w=_):(n(w,_),_=Uc(A,w.mode,O),_.return=w,w=_),o(w)):n(w,_)}return x}var Ji=Iv(!0),Sv=Iv(!1),Vl=Ar(null),Ol=null,Di=null,Hd=null;function Kd(){Hd=Di=Ol=null}function Gd(t){var e=Vl.current;pe(Vl),t._currentValue=e}function xh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ji(t,e){Ol=t,Hd=Di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ft=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Hd!==t)if(t={context:t,memoizedValue:e,next:null},Di===null){if(Ol===null)throw Error(M(308));Di=t,Ol.dependencies={lanes:0,firstContext:t}}else Di=Di.next=t;return e}var qr=null;function Qd(t){qr===null?qr=[t]:qr.push(t)}function Av(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sn(t,r)}function Sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $n=!1;function Yd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sn(t,n)}return i=r.interleaved,i===null?(e.next=e,Qd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sn(t,n)}function rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ld(t,n)}}function eg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ll(t,e,n,r){var i=t.updateQueue;$n=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,S=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,N=l;switch(m=e,S=n,N.tag){case 1:if(C=N.payload,typeof C=="function"){p=C.call(S,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=N.payload,m=typeof C=="function"?C.call(S,p,m):C,m==null)break e;p=Ee({},p,m);break e;case 2:$n=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else S={eventTime:S,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=S,u=p):f=f.next=S,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ei|=o,t.lanes=o,t.memoizedState=p}}function tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var ea={},en=Ar(ea),No=Ar(ea),Do=Ar(ea);function Hr(t){if(t===ea)throw Error(M(174));return t}function Jd(t,e){switch(ce(Do,e),ce(No,t),ce(en,ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ch(e,t)}pe(en),ce(en,e)}function Xi(){pe(en),pe(No),pe(Do)}function Cv(t){Hr(Do.current);var e=Hr(en.current),n=ch(e,t.type);e!==n&&(ce(No,t),ce(en,n))}function Xd(t){No.current===t&&(pe(en),pe(No))}var _e=Ar(0);function bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vc=[];function Zd(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var il=xn.ReactCurrentDispatcher,Oc=xn.ReactCurrentBatchConfig,Zr=0,ve=null,Oe=null,je=null,Ml=!1,co=!1,Vo=0,xS=0;function Qe(){throw Error(M(321))}function ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wt(t[n],e[n]))return!1;return!0}function tf(t,e,n,r,i,s){if(Zr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,il.current=t===null||t.memoizedState===null?OS:LS,t=n(r,i),co){s=0;do{if(co=!1,Vo=0,25<=s)throw Error(M(301));s+=1,je=Oe=null,e.updateQueue=null,il.current=bS,t=n(r,i)}while(co)}if(il.current=Fl,e=Oe!==null&&Oe.next!==null,Zr=0,je=Oe=ve=null,Ml=!1,e)throw Error(M(300));return t}function nf(){var t=Vo!==0;return Vo=0,t}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ve.memoizedState=je=t:je=je.next=t,je}function Vt(){if(Oe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=je===null?ve.memoizedState:je.next;if(e!==null)je=e,Oe=t;else{if(t===null)throw Error(M(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},je===null?ve.memoizedState=je=t:je=je.next=t}return je}function Oo(t,e){return typeof e=="function"?e(t):e}function Lc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Zr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=f,ei|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Wt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Wt(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Pv(){}function kv(t,e){var n=ve,r=Vt(),i=e(),s=!Wt(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,rf(Dv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Lo(9,Nv.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(M(349));Zr&30||xv(n,e,i)}return i}function xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Nv(t,e,n,r){e.value=n,e.getSnapshot=r,Vv(e)&&Ov(t)}function Dv(t,e,n){return n(function(){Vv(e)&&Ov(t)})}function Vv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wt(t,n)}catch{return!0}}function Ov(t){var e=Sn(t,1);e!==null&&zt(e,t,1,-1)}function ng(t){var e=Yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},e.queue=t,t=t.dispatch=VS.bind(null,ve,t),[e.memoizedState,t]}function Lo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Lv(){return Vt().memoizedState}function sl(t,e,n,r){var i=Yt();ve.flags|=t,i.memoizedState=Lo(1|e,n,void 0,r===void 0?null:r)}function vu(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&ef(r,o.deps)){i.memoizedState=Lo(e,n,s,r);return}}ve.flags|=t,i.memoizedState=Lo(1|e,n,s,r)}function rg(t,e){return sl(8390656,8,t,e)}function rf(t,e){return vu(2048,8,t,e)}function bv(t,e){return vu(4,2,t,e)}function Mv(t,e){return vu(4,4,t,e)}function Fv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Uv(t,e,n){return n=n!=null?n.concat([t]):null,vu(4,4,Fv.bind(null,e,t),n)}function sf(){}function jv(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function zv(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Bv(t,e,n){return Zr&21?(Wt(n,e)||(n=K_(),ve.lanes|=n,ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n)}function NS(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=Oc.transition;Oc.transition={};try{t(!1),e()}finally{ae=n,Oc.transition=r}}function $v(){return Vt().memoizedState}function DS(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wv(t))qv(e,n);else if(n=Av(t,e,n,r),n!==null){var i=at();zt(n,t,r,i),Hv(n,e,r)}}function VS(t,e,n){var r=ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wv(t))qv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Wt(l,o)){var u=e.interleaved;u===null?(i.next=i,Qd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Av(t,e,i,r),n!==null&&(i=at(),zt(n,t,r,i),Hv(n,e,r))}}function Wv(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function qv(t,e){co=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Hv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ld(t,n)}}var Fl={readContext:Dt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},OS={readContext:Dt,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sl(4194308,4,Fv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return sl(4,2,t,e)},useMemo:function(t,e){var n=Yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=DS.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:ng,useDebugValue:sf,useDeferredValue:function(t){return Yt().memoizedState=t},useTransition:function(){var t=ng(!1),e=t[0];return t=NS.bind(null,t[1]),Yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Yt();if(ge){if(n===void 0)throw Error(M(407));n=n()}else{if(n=e(),ze===null)throw Error(M(349));Zr&30||xv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,rg(Dv.bind(null,r,s,t),[t]),r.flags|=2048,Lo(9,Nv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Yt(),e=ze.identifierPrefix;if(ge){var n=pn,r=fn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LS={readContext:Dt,useCallback:jv,useContext:Dt,useEffect:rf,useImperativeHandle:Uv,useInsertionEffect:bv,useLayoutEffect:Mv,useMemo:zv,useReducer:Lc,useRef:Lv,useState:function(){return Lc(Oo)},useDebugValue:sf,useDeferredValue:function(t){var e=Vt();return Bv(e,Oe.memoizedState,t)},useTransition:function(){var t=Lc(Oo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Pv,useSyncExternalStore:kv,useId:$v,unstable_isNewReconciler:!1},bS={readContext:Dt,useCallback:jv,useContext:Dt,useEffect:rf,useImperativeHandle:Uv,useInsertionEffect:bv,useLayoutEffect:Mv,useMemo:zv,useReducer:bc,useRef:Lv,useState:function(){return bc(Oo)},useDebugValue:sf,useDeferredValue:function(t){var e=Vt();return Oe===null?e.memoizedState=t:Bv(e,Oe.memoizedState,t)},useTransition:function(){var t=bc(Oo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Pv,useSyncExternalStore:kv,useId:$v,unstable_isNewReconciler:!1};function bt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Eu={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=ar(t),s=vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&(zt(e,t,i,r),rl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=ar(t),s=vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&(zt(e,t,i,r),rl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=ar(t),i=vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=sr(t,i,r),e!==null&&(zt(e,t,r,n),rl(e,t,r))}};function ig(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Co(n,r)||!Co(i,s):!0}function Kv(t,e,n){var r=!1,i=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=mt(e)?Jr:tt.current,r=e.contextTypes,s=(r=r!=null)?Qi(t,i):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Eu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function sg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Eu.enqueueReplaceState(e,e.state,null)}function Dh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Yd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=mt(e)?Jr:tt.current,i.context=Qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Eu.enqueueReplaceState(i,i.state,null),Ll(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Zi(t,e){try{var n="",r=e;do n+=cI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MS=typeof WeakMap=="function"?WeakMap:Map;function Gv(t,e,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){jl||(jl=!0,$h=r),Vh(t,e)},n}function Qv(t,e,n){n=vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vh(t,e),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function og(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new MS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=JS.bind(null,t,e,n),e.then(t,t))}function ag(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vn(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var FS=xn.ReactCurrentOwner,ft=!1;function st(t,e,n,r){e.child=t===null?Sv(e,null,n,r):Ji(e,t.child,n,r)}function ug(t,e,n,r,i){n=n.render;var s=e.ref;return ji(e,i),r=tf(t,e,n,r,s,i),n=nf(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ge&&n&&$d(e),e.flags|=1,st(t,e,r,i),e.child)}function cg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ff(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Yv(t,e,s,r,i)):(t=ul(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Co,n(o,r)&&t.ref===e.ref)return An(t,e,i)}return e.flags|=1,t=lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Yv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Co(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ft=!0);else return e.lanes=t.lanes,An(t,e,i)}return Oh(t,e,n,r,i)}function Jv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Oi,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Oi,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Oi,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Oi,_t),_t|=r;return st(t,e,i,n),e.child}function Xv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Oh(t,e,n,r,i){var s=mt(n)?Jr:tt.current;return s=Qi(e,s),ji(e,i),n=tf(t,e,n,r,s,i),r=nf(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ge&&r&&$d(e),e.flags|=1,st(t,e,n,i),e.child)}function hg(t,e,n,r,i){if(mt(n)){var s=!0;xl(e)}else s=!1;if(ji(e,i),e.stateNode===null)ol(t,e),Kv(e,n,r),Dh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dt(c):(c=mt(n)?Jr:tt.current,c=Qi(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&sg(e,o,r,c),$n=!1;var m=e.memoizedState;o.state=m,Ll(e,r,o,i),u=e.memoizedState,l!==r||m!==u||pt.current||$n?(typeof f=="function"&&(Nh(e,n,f,r),u=e.memoizedState),(l=$n||ig(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Rv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:bt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=mt(n)?Jr:tt.current,u=Qi(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&sg(e,o,r,u),$n=!1,m=e.memoizedState,o.state=m,Ll(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||pt.current||$n?(typeof S=="function"&&(Nh(e,n,S,r),C=e.memoizedState),(c=$n||ig(e,n,c,r,m,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Lh(t,e,n,r,s,i)}function Lh(t,e,n,r,i,s){Xv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ym(e,n,!1),An(t,e,s);r=e.stateNode,FS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ji(e,t.child,null,s),e.child=Ji(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&Ym(e,n,!0),e.child}function Zv(t){var e=t.stateNode;e.pendingContext?Qm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qm(t,e.context,!1),Jd(t,e.containerInfo)}function dg(t,e,n,r,i){return Yi(),qd(i),e.flags|=256,st(t,e,n,r),e.child}var bh={dehydrated:null,treeContext:null,retryLane:0};function Mh(t){return{baseLanes:t,cachePool:null,transitions:null}}function eE(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(_e,i&1),t===null)return kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Iu(o,r,0,null),t=Qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mh(n),e.memoizedState=bh,t):of(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return US(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=lr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=lr(l,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Mh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bh,r}return s=t.child,t=s.sibling,r=lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function of(t,e){return e=Iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function za(t,e,n,r){return r!==null&&qd(r),Ji(e,t.child,null,n),t=of(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function US(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Mc(Error(M(422))),za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Iu({mode:"visible",children:r.children},i,0,null),s=Qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ji(e,t.child,null,o),e.child.memoizedState=Mh(o),e.memoizedState=bh,s);if(!(e.mode&1))return za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(M(419)),r=Mc(s,r,void 0),za(t,e,o,r)}if(l=(o&t.childLanes)!==0,ft||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sn(t,i),zt(r,t,i,-1))}return df(),r=Mc(Error(M(421))),za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=XS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=ir(i.nextSibling),wt=e,ge=!0,Ft=null,t!==null&&(Rt[Ct++]=fn,Rt[Ct++]=pn,Rt[Ct++]=Xr,fn=t.id,pn=t.overflow,Xr=e),e=of(e,r.children),e.flags|=4096,e)}function fg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xh(t.return,e,n)}function Fc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function tE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fg(t,n,e);else if(t.tag===19)fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fc(e,!0,n,null,s);break;case"together":Fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jS(t,e,n){switch(e.tag){case 3:Zv(e),Yi();break;case 5:Cv(e);break;case 1:mt(e.type)&&xl(e);break;case 4:Jd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(Vl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?eE(t,e,n):(ce(_e,_e.current&1),t=An(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return tE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,Jv(t,e,n)}return An(t,e,n)}var nE,Fh,rE,iE;nE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fh=function(){};rE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hr(en.current);var s=null;switch(n){case"input":i=oh(t,i),r=oh(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=uh(t,i),r=uh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pl)}hh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Eo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};iE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Hs(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zS(t,e,n){var r=e.pendingProps;switch(Wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return mt(e.type)&&kl(),Ye(e),null;case 3:return r=e.stateNode,Xi(),pe(pt),pe(tt),Zd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ua(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ft!==null&&(Hh(Ft),Ft=null))),Fh(t,e),Ye(e),null;case 5:Xd(e);var i=Hr(Do.current);if(n=e.type,t!==null&&e.stateNode!=null)rE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(M(166));return Ye(e),null}if(t=Hr(en.current),Ua(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xt]=e,r[xo]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Xs.length;i++)de(Xs[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Tm(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Sm(r,s),de("invalid",r)}hh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Fa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Fa(r.textContent,l,t),i=["children",""+l]):Eo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":xa(r),Im(r,s,!0);break;case"textarea":xa(r),Am(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=D_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[xo]=r,nE(t,e,!1,!1),e.stateNode=t;e:{switch(o=dh(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xs.length;i++)de(Xs[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":Tm(t,r),i=oh(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),de("invalid",t);break;case"textarea":Sm(t,r),i=uh(t,r),de("invalid",t);break;default:i=r}hh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?L_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&V_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&wo(t,u):typeof u=="number"&&wo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Eo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&kd(t,s,u,o))}switch(n){case"input":xa(t),Im(t,r,!1);break;case"textarea":xa(t),Am(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?bi(t,!!r.multiple,s,!1):r.defaultValue!=null&&bi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)iE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));if(n=Hr(Do.current),Hr(en.current),Ua(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:Fa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return Ye(e),null;case 13:if(pe(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&vt!==null&&e.mode&1&&!(e.flags&128))Tv(),Yi(),e.flags|=98560,s=!1;else if(s=Ua(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(M(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Xt]=e}else Yi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Ft!==null&&(Hh(Ft),Ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Le===0&&(Le=3):df())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Xi(),Fh(t,e),t===null&&Po(e.stateNode.containerInfo),Ye(e),null;case 10:return Gd(e.type._context),Ye(e),null;case 17:return mt(e.type)&&kl(),Ye(e),null;case 19:if(pe(_e),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Hs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bl(t),o!==null){for(e.flags|=128,Hs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>es&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304)}else{if(!r)if(t=bl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Ye(e),null}else 2*Ae()-s.renderingStartTime>es&&n!==1073741824&&(e.flags|=128,r=!0,Hs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return hf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(M(156,e.tag))}function BS(t,e){switch(Wd(e),e.tag){case 1:return mt(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xi(),pe(pt),pe(tt),Zd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xd(e),null;case 13:if(pe(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(M(340));Yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(_e),null;case 4:return Xi(),null;case 10:return Gd(e.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var Ba=!1,Ze=!1,$S=typeof WeakSet=="function"?WeakSet:Set,q=null;function Vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function Uh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var pg=!1;function WS(t,e){if(Th=Al,t=uv(),Bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)m=p,p=S;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(S=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ih={focusedElem:t,selectionRange:n},Al=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var N=C.memoizedProps,x=C.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?N:bt(e.type,N),x);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(O){Te(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return C=pg,pg=!1,C}function ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Uh(e,n,s)}i=i.next}while(i!==r)}}function wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sE(t){var e=t.alternate;e!==null&&(t.alternate=null,sE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[xo],delete e[Rh],delete e[RS],delete e[CS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function oE(t){return t.tag===5||t.tag===3||t.tag===4}function mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||oE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pl));else if(r!==4&&(t=t.child,t!==null))for(zh(t,e,n),t=t.sibling;t!==null;)zh(t,e,n),t=t.sibling}function Bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}var Be=null,Mt=!1;function jn(t,e,n){for(n=n.child;n!==null;)aE(t,e,n),n=n.sibling}function aE(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(fu,n)}catch{}switch(n.tag){case 5:Ze||Vi(n,e);case 6:var r=Be,i=Mt;Be=null,jn(t,e,n),Be=r,Mt=i,Be!==null&&(Mt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(Mt?(t=Be,n=n.stateNode,t.nodeType===8?Nc(t.parentNode,n):t.nodeType===1&&Nc(t,n),Ao(t)):Nc(Be,n.stateNode));break;case 4:r=Be,i=Mt,Be=n.stateNode.containerInfo,Mt=!0,jn(t,e,n),Be=r,Mt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uh(n,e,o),i=i.next}while(i!==r)}jn(t,e,n);break;case 1:if(!Ze&&(Vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}jn(t,e,n);break;case 21:jn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,jn(t,e,n),Ze=r):jn(t,e,n);break;default:jn(t,e,n)}}function gg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $S),e.forEach(function(r){var i=ZS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,Mt=!1;break e;case 3:Be=l.stateNode.containerInfo,Mt=!0;break e;case 4:Be=l.stateNode.containerInfo,Mt=!0;break e}l=l.return}if(Be===null)throw Error(M(160));aE(s,o,i),Be=null,Mt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Te(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lE(e,t),e=e.sibling}function lE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),Qt(t),r&4){try{ho(3,t,t.return),wu(3,t)}catch(N){Te(t,t.return,N)}try{ho(5,t,t.return)}catch(N){Te(t,t.return,N)}}break;case 1:Lt(e,t),Qt(t),r&512&&n!==null&&Vi(n,n.return);break;case 5:if(Lt(e,t),Qt(t),r&512&&n!==null&&Vi(n,n.return),t.flags&32){var i=t.stateNode;try{wo(i,"")}catch(N){Te(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&x_(i,s),dh(l,o);var c=dh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?L_(i,p):f==="dangerouslySetInnerHTML"?V_(i,p):f==="children"?wo(i,p):kd(i,f,p,c)}switch(l){case"input":ah(i,s);break;case"textarea":N_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?bi(i,!!s.multiple,S,!1):m!==!!s.multiple&&(s.defaultValue!=null?bi(i,!!s.multiple,s.defaultValue,!0):bi(i,!!s.multiple,s.multiple?[]:"",!1))}i[xo]=s}catch(N){Te(t,t.return,N)}}break;case 6:if(Lt(e,t),Qt(t),r&4){if(t.stateNode===null)throw Error(M(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Te(t,t.return,N)}}break;case 3:if(Lt(e,t),Qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(N){Te(t,t.return,N)}break;case 4:Lt(e,t),Qt(t);break;case 13:Lt(e,t),Qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(uf=Ae())),r&4&&gg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(c=Ze)||f,Lt(e,t),Ze=c):Lt(e,t),Qt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(p=q=f;q!==null;){switch(m=q,S=m.child,m.tag){case 0:case 11:case 14:case 15:ho(4,m,m.return);break;case 1:Vi(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(N){Te(r,n,N)}}break;case 5:Vi(m,m.return);break;case 22:if(m.memoizedState!==null){_g(p);continue}}S!==null?(S.return=m,q=S):_g(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=O_("display",o))}catch(N){Te(t,t.return,N)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){Te(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Lt(e,t),Qt(t),r&4&&gg(t);break;case 21:break;default:Lt(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(oE(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wo(i,""),r.flags&=-33);var s=mg(t);Bh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=mg(t);zh(t,l,o);break;default:throw Error(M(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function qS(t,e,n){q=t,uE(t)}function uE(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ba;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=Ba;var c=Ze;if(Ba=o,(Ze=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?vg(i):u!==null?(u.return=o,q=u):vg(i);for(;s!==null;)q=s,uE(s),s=s.sibling;q=i,Ba=l,Ze=c}yg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):yg(t)}}function yg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||wu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ao(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ze||e.flags&512&&jh(e)}catch(m){Te(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function _g(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function vg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wu(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{jh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{jh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var HS=Math.ceil,Ul=xn.ReactCurrentDispatcher,af=xn.ReactCurrentOwner,Nt=xn.ReactCurrentBatchConfig,se=0,ze=null,ke=null,qe=0,_t=0,Oi=Ar(0),Le=0,bo=null,ei=0,Tu=0,lf=0,fo=null,ht=null,uf=0,es=1/0,hn=null,jl=!1,$h=null,or=null,$a=!1,Xn=null,zl=0,po=0,Wh=null,al=-1,ll=0;function at(){return se&6?Ae():al!==-1?al:al=Ae()}function ar(t){return t.mode&1?se&2&&qe!==0?qe&-qe:kS.transition!==null?(ll===0&&(ll=K_()),ll):(t=ae,t!==0||(t=window.event,t=t===void 0?16:ev(t.type)),t):1}function zt(t,e,n,r){if(50<po)throw po=0,Wh=null,Error(M(185));Jo(t,n,r),(!(se&2)||t!==ze)&&(t===ze&&(!(se&2)&&(Tu|=n),Le===4&&Hn(t,qe)),gt(t,r),n===1&&se===0&&!(e.mode&1)&&(es=Ae()+500,_u&&Rr()))}function gt(t,e){var n=t.callbackNode;kI(t,e);var r=Sl(t,t===ze?qe:0);if(r===0)n!==null&&Pm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pm(n),e===1)t.tag===0?PS(Eg.bind(null,t)):vv(Eg.bind(null,t)),SS(function(){!(se&6)&&Rr()}),n=null;else{switch(G_(r)){case 1:n=Od;break;case 4:n=q_;break;case 16:n=Il;break;case 536870912:n=H_;break;default:n=Il}n=yE(n,cE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cE(t,e){if(al=-1,ll=0,se&6)throw Error(M(327));var n=t.callbackNode;if(zi()&&t.callbackNode!==n)return null;var r=Sl(t,t===ze?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Bl(t,r);else{e=r;var i=se;se|=2;var s=dE();(ze!==t||qe!==e)&&(hn=null,es=Ae()+500,Gr(t,e));do try{QS();break}catch(l){hE(t,l)}while(!0);Kd(),Ul.current=s,se=i,ke!==null?e=0:(ze=null,qe=0,e=Le)}if(e!==0){if(e===2&&(i=yh(t),i!==0&&(r=i,e=qh(t,i))),e===1)throw n=bo,Gr(t,0),Hn(t,r),gt(t,Ae()),n;if(e===6)Hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!KS(i)&&(e=Bl(t,r),e===2&&(s=yh(t),s!==0&&(r=s,e=qh(t,s))),e===1))throw n=bo,Gr(t,0),Hn(t,r),gt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(M(345));case 2:zr(t,ht,hn);break;case 3:if(Hn(t,r),(r&130023424)===r&&(e=uf+500-Ae(),10<e)){if(Sl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ah(zr.bind(null,t,ht,hn),e);break}zr(t,ht,hn);break;case 4:if(Hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HS(r/1960))-r,10<r){t.timeoutHandle=Ah(zr.bind(null,t,ht,hn),r);break}zr(t,ht,hn);break;case 5:zr(t,ht,hn);break;default:throw Error(M(329))}}}return gt(t,Ae()),t.callbackNode===n?cE.bind(null,t):null}function qh(t,e){var n=fo;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=Bl(t,e),t!==2&&(e=ht,ht=n,e!==null&&Hh(e)),t}function Hh(t){ht===null?ht=t:ht.push.apply(ht,t)}function KS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Wt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e){for(e&=~lf,e&=~Tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function Eg(t){if(se&6)throw Error(M(327));zi();var e=Sl(t,0);if(!(e&1))return gt(t,Ae()),null;var n=Bl(t,e);if(t.tag!==0&&n===2){var r=yh(t);r!==0&&(e=r,n=qh(t,r))}if(n===1)throw n=bo,Gr(t,0),Hn(t,e),gt(t,Ae()),n;if(n===6)throw Error(M(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,ht,hn),gt(t,Ae()),null}function cf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(es=Ae()+500,_u&&Rr())}}function ti(t){Xn!==null&&Xn.tag===0&&!(se&6)&&zi();var e=se;se|=1;var n=Nt.transition,r=ae;try{if(Nt.transition=null,ae=1,t)return t()}finally{ae=r,Nt.transition=n,se=e,!(se&6)&&Rr()}}function hf(){_t=Oi.current,pe(Oi)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,IS(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Wd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kl();break;case 3:Xi(),pe(pt),pe(tt),Zd();break;case 5:Xd(r);break;case 4:Xi();break;case 13:pe(_e);break;case 19:pe(_e);break;case 10:Gd(r.type._context);break;case 22:case 23:hf()}n=n.return}if(ze=t,ke=t=lr(t.current,null),qe=_t=e,Le=0,bo=null,lf=Tu=ei=0,ht=fo=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qr=null}return t}function hE(t,e){do{var n=ke;try{if(Kd(),il.current=Fl,Ml){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ml=!1}if(Zr=0,je=Oe=ve=null,co=!1,Vo=0,af.current=null,n===null||n.return===null){Le=1,bo=e,ke=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=ag(o);if(S!==null){S.flags&=-257,lg(S,o,l,s,e),S.mode&1&&og(s,c,e),e=S,u=c;var C=e.updateQueue;if(C===null){var N=new Set;N.add(u),e.updateQueue=N}else C.add(u);break e}else{if(!(e&1)){og(s,c,e),df();break e}u=Error(M(426))}}else if(ge&&l.mode&1){var x=ag(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),lg(x,o,l,s,e),qd(Zi(u,l));break e}}s=u=Zi(u,l),Le!==4&&(Le=2),fo===null?fo=[s]:fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=Gv(s,u,e);eg(s,w);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(or===null||!or.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=Qv(s,l,e);eg(s,O);break e}}s=s.return}while(s!==null)}pE(n)}catch(F){e=F,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function dE(){var t=Ul.current;return Ul.current=Fl,t===null?Fl:t}function df(){(Le===0||Le===3||Le===2)&&(Le=4),ze===null||!(ei&268435455)&&!(Tu&268435455)||Hn(ze,qe)}function Bl(t,e){var n=se;se|=2;var r=dE();(ze!==t||qe!==e)&&(hn=null,Gr(t,e));do try{GS();break}catch(i){hE(t,i)}while(!0);if(Kd(),se=n,Ul.current=r,ke!==null)throw Error(M(261));return ze=null,qe=0,Le}function GS(){for(;ke!==null;)fE(ke)}function QS(){for(;ke!==null&&!EI();)fE(ke)}function fE(t){var e=gE(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?pE(t):ke=e,af.current=null}function pE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=BS(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,ke=null;return}}else if(n=zS(n,e,_t),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Le===0&&(Le=5)}function zr(t,e,n){var r=ae,i=Nt.transition;try{Nt.transition=null,ae=1,YS(t,e,n,r)}finally{Nt.transition=i,ae=r}return null}function YS(t,e,n,r){do zi();while(Xn!==null);if(se&6)throw Error(M(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xI(t,s),t===ze&&(ke=ze=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$a||($a=!0,yE(Il,function(){return zi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Nt.transition,Nt.transition=null;var o=ae;ae=1;var l=se;se|=4,af.current=null,WS(t,n),lE(n,t),gS(Ih),Al=!!Th,Ih=Th=null,t.current=n,qS(n),wI(),se=l,ae=o,Nt.transition=s}else t.current=n;if($a&&($a=!1,Xn=t,zl=i),s=t.pendingLanes,s===0&&(or=null),SI(n.stateNode),gt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jl)throw jl=!1,t=$h,$h=null,t;return zl&1&&t.tag!==0&&zi(),s=t.pendingLanes,s&1?t===Wh?po++:(po=0,Wh=t):po=0,Rr(),null}function zi(){if(Xn!==null){var t=G_(zl),e=Nt.transition,n=ae;try{if(Nt.transition=null,ae=16>t?16:t,Xn===null)var r=!1;else{if(t=Xn,Xn=null,zl=0,se&6)throw Error(M(331));var i=se;for(se|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:ho(8,f,s)}var p=f.child;if(p!==null)p.return=f,q=p;else for(;q!==null;){f=q;var m=f.sibling,S=f.return;if(sE(f),f===c){q=null;break}if(m!==null){m.return=S,q=m;break}q=S}}}var C=s.alternate;if(C!==null){var N=C.child;if(N!==null){C.child=null;do{var x=N.sibling;N.sibling=null,N=x}while(N!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ho(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,q=w;break e}q=s.return}}var _=t.current;for(q=_;q!==null;){o=q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,q=A;else e:for(o=_;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:wu(9,l)}}catch(F){Te(l,l.return,F)}if(l===o){q=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,q=O;break e}q=l.return}}if(se=i,Rr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(fu,t)}catch{}r=!0}return r}finally{ae=n,Nt.transition=e}}return!1}function wg(t,e,n){e=Zi(n,e),e=Gv(t,e,1),t=sr(t,e,1),e=at(),t!==null&&(Jo(t,1,e),gt(t,e))}function Te(t,e,n){if(t.tag===3)wg(t,t,n);else for(;e!==null;){if(e.tag===3){wg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){t=Zi(n,t),t=Qv(e,t,1),e=sr(e,t,1),t=at(),e!==null&&(Jo(e,1,t),gt(e,t));break}}e=e.return}}function JS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(qe&n)===n&&(Le===4||Le===3&&(qe&130023424)===qe&&500>Ae()-uf?Gr(t,0):lf|=n),gt(t,e)}function mE(t,e){e===0&&(t.mode&1?(e=Va,Va<<=1,!(Va&130023424)&&(Va=4194304)):e=1);var n=at();t=Sn(t,e),t!==null&&(Jo(t,e,n),gt(t,n))}function XS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mE(t,n)}function ZS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(e),mE(t,n)}var gE;gE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pt.current)ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ft=!1,jS(t,e,n);ft=!!(t.flags&131072)}else ft=!1,ge&&e.flags&1048576&&Ev(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ol(t,e),t=e.pendingProps;var i=Qi(e,tt.current);ji(e,n),i=tf(null,e,r,t,i,n);var s=nf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mt(r)?(s=!0,xl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yd(e),i.updater=Eu,e.stateNode=i,i._reactInternals=e,Dh(e,r,t,n),e=Lh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&$d(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ol(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=tA(r),t=bt(r,t),i){case 0:e=Oh(null,e,r,t,n);break e;case 1:e=hg(null,e,r,t,n);break e;case 11:e=ug(null,e,r,t,n);break e;case 14:e=cg(null,e,r,bt(r.type,t),n);break e}throw Error(M(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Oh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),hg(t,e,r,i,n);case 3:e:{if(Zv(e),t===null)throw Error(M(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Rv(t,e),Ll(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zi(Error(M(423)),e),e=dg(t,e,r,n,i);break e}else if(r!==i){i=Zi(Error(M(424)),e),e=dg(t,e,r,n,i);break e}else for(vt=ir(e.stateNode.containerInfo.firstChild),wt=e,ge=!0,Ft=null,n=Sv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yi(),r===i){e=An(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return Cv(e),t===null&&kh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sh(r,i)?o=null:s!==null&&Sh(r,s)&&(e.flags|=32),Xv(t,e),st(t,e,o,n),e.child;case 6:return t===null&&kh(e),null;case 13:return eE(t,e,n);case 4:return Jd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ji(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),ug(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(Vl,r._currentValue),r._currentValue=o,s!==null)if(Wt(s.value,o)){if(s.children===i.children&&!pt.current){e=An(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=vn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),xh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(M(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ji(e,n),i=Dt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=bt(r,e.pendingProps),i=bt(r.type,i),cg(t,e,r,i,n);case 15:return Yv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),ol(t,e),e.tag=1,mt(r)?(t=!0,xl(e)):t=!1,ji(e,n),Kv(e,r,i),Dh(e,r,i,n),Lh(null,e,r,!0,t,n);case 19:return tE(t,e,n);case 22:return Jv(t,e,n)}throw Error(M(156,e.tag))};function yE(t,e){return W_(t,e)}function eA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new eA(t,e,n,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tA(t){if(typeof t=="function")return ff(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nd)return 11;if(t===Dd)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ul(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ff(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Si:return Qr(n.children,i,s,e);case xd:o=8,i|=8;break;case nh:return t=xt(12,n,e,i|2),t.elementType=nh,t.lanes=s,t;case rh:return t=xt(13,n,e,i),t.elementType=rh,t.lanes=s,t;case ih:return t=xt(19,n,e,i),t.elementType=ih,t.lanes=s,t;case C_:return Iu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A_:o=10;break e;case R_:o=9;break e;case Nd:o=11;break e;case Dd:o=14;break e;case Bn:o=16,r=null;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qr(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function Iu(t,e,n,r){return t=xt(22,t,r,e),t.elementType=C_,t.lanes=n,t.stateNode={isHidden:!1},t}function Uc(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function jc(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pf(t,e,n,r,i,s,o,l,u){return t=new nA(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yd(s),t}function rA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _E(t){if(!t)return gr;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(M(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(M(171))}if(t.tag===1){var n=t.type;if(mt(n))return _v(t,n,e)}return e}function vE(t,e,n,r,i,s,o,l,u){return t=pf(n,r,!0,t,i,s,o,l,u),t.context=_E(null),n=t.current,r=at(),i=ar(n),s=vn(r,i),s.callback=e??null,sr(n,s,i),t.current.lanes=i,Jo(t,i,r),gt(t,r),t}function Su(t,e,n,r){var i=e.current,s=at(),o=ar(i);return n=_E(n),e.context===null?e.context=n:e.pendingContext=n,e=vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sr(i,e,o),t!==null&&(zt(t,i,o,s),rl(t,i,o)),o}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Tg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mf(t,e){Tg(t,e),(t=t.alternate)&&Tg(t,e)}function iA(){return null}var EE=typeof reportError=="function"?reportError:function(t){console.error(t)};function gf(t){this._internalRoot=t}Au.prototype.render=gf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(M(409));Su(t,e,null,null)};Au.prototype.unmount=gf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ti(function(){Su(null,t,null,null)}),e[In]=null}};function Au(t){this._internalRoot=t}Au.prototype.unstable_scheduleHydration=function(t){if(t){var e=J_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qn.length&&e!==0&&e<qn[n].priority;n++);qn.splice(n,0,t),n===0&&Z_(t)}};function yf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ig(){}function sA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=$l(o);s.call(c)}}var o=vE(e,r,t,0,null,!1,!1,"",Ig);return t._reactRootContainer=o,t[In]=o.current,Po(t.nodeType===8?t.parentNode:t),ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=$l(u);l.call(c)}}var u=pf(t,0,!1,null,null,!1,!1,"",Ig);return t._reactRootContainer=u,t[In]=u.current,Po(t.nodeType===8?t.parentNode:t),ti(function(){Su(e,u,n,r)}),u}function Cu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=$l(o);l.call(u)}}Su(e,o,t,i)}else o=sA(n,e,t,i,r);return $l(o)}Q_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Js(e.pendingLanes);n!==0&&(Ld(e,n|1),gt(e,Ae()),!(se&6)&&(es=Ae()+500,Rr()))}break;case 13:ti(function(){var r=Sn(t,1);if(r!==null){var i=at();zt(r,t,1,i)}}),mf(t,1)}};bd=function(t){if(t.tag===13){var e=Sn(t,134217728);if(e!==null){var n=at();zt(e,t,134217728,n)}mf(t,134217728)}};Y_=function(t){if(t.tag===13){var e=ar(t),n=Sn(t,e);if(n!==null){var r=at();zt(n,t,e,r)}mf(t,e)}};J_=function(){return ae};X_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};ph=function(t,e,n){switch(e){case"input":if(ah(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=yu(r);if(!i)throw Error(M(90));k_(r),ah(r,i)}}}break;case"textarea":N_(t,n);break;case"select":e=n.value,e!=null&&bi(t,!!n.multiple,e,!1)}};F_=cf;U_=ti;var oA={usingClientEntryPoint:!1,Events:[Zo,Pi,yu,b_,M_,cf]},Ks={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aA={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=B_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||iA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{fu=Wa.inject(aA),Zt=Wa}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oA;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(e))throw Error(M(200));return rA(t,e,null,n)};It.createRoot=function(t,e){if(!yf(t))throw Error(M(299));var n=!1,r="",i=EE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pf(t,1,!1,null,null,n,!1,r,i),t[In]=e.current,Po(t.nodeType===8?t.parentNode:t),new gf(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=B_(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return ti(t)};It.hydrate=function(t,e,n){if(!Ru(e))throw Error(M(200));return Cu(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!yf(t))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=EE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vE(e,null,t,1,n??null,i,!1,s,o),t[In]=e.current,Po(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Au(e)};It.render=function(t,e,n){if(!Ru(e))throw Error(M(200));return Cu(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!Ru(t))throw Error(M(40));return t._reactRootContainer?(ti(function(){Cu(null,null,t,!1,function(){t._reactRootContainer=null,t[In]=null})}),!0):!1};It.unstable_batchedUpdates=cf;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ru(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Cu(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function wE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wE)}catch(t){console.error(t)}}wE(),w_.exports=It;var lA=w_.exports,Sg=lA;eh.createRoot=Sg.createRoot,eh.hydrateRoot=Sg.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mo(){return Mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Mo.apply(this,arguments)}var Zn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zn||(Zn={}));const Ag="popstate";function uA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Kh("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wl(i)}return hA(e,n,null,t)}function Ce(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function _f(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cA(){return Math.random().toString(36).substr(2,8)}function Rg(t,e){return{usr:t.state,key:t.key,idx:e}}function Kh(t,e,n,r){return n===void 0&&(n=null),Mo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?hs(e):e,{state:n,key:e&&e.key||r||cA()})}function Wl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function hs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Zn.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Mo({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Zn.Pop;let x=f(),w=x==null?null:x-c;c=x,u&&u({action:l,location:N.location,delta:w})}function m(x,w){l=Zn.Push;let _=Kh(N.location,x,w);c=f()+1;let A=Rg(_,c),O=N.createHref(_);try{o.pushState(A,"",O)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(O)}s&&u&&u({action:l,location:N.location,delta:1})}function S(x,w){l=Zn.Replace;let _=Kh(N.location,x,w);c=f();let A=Rg(_,c),O=N.createHref(_);o.replaceState(A,"",O),s&&u&&u({action:l,location:N.location,delta:0})}function C(x){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof x=="string"?x:Wl(x);return _=_.replace(/ $/,"%20"),Ce(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let N={get action(){return l},get location(){return t(i,o)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ag,p),u=x,()=>{i.removeEventListener(Ag,p),u=null}},createHref(x){return e(i,x)},createURL:C,encodeLocation(x){let w=C(x);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:S,go(x){return o.go(x)}};return N}var Cg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Cg||(Cg={}));function dA(t,e,n){return n===void 0&&(n="/"),fA(t,e,n)}function fA(t,e,n,r){let i=typeof e=="string"?hs(e):e,s=vf(i.pathname||"/",n);if(s==null)return null;let o=TE(t);pA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=RA(s);l=IA(o[u],c)}return l}function TE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ce(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=ur([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),TE(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:wA(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of IE(s.path))i(s,o,u)}),e}function IE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=IE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function pA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:TA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mA=/^:[\w-]+$/,gA=3,yA=2,_A=1,vA=10,EA=-2,Pg=t=>t==="*";function wA(t,e){let n=t.split("/"),r=n.length;return n.some(Pg)&&(r+=EA),e&&(r+=yA),n.filter(i=>!Pg(i)).reduce((i,s)=>i+(mA.test(s)?gA:s===""?_A:vA),r)}function TA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function IA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=SA({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:ur([s,p.pathname]),pathnameBase:NA(ur([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=ur([s,p.pathnameBase]))}return o}function SA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=AA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:m,isOptional:S}=f;if(m==="*"){let N=l[p]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const C=l[p];return S&&!C?c[m]=void 0:c[m]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function AA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),_f(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function RA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return _f(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function vf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const CA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,PA=t=>CA.test(t);function kA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?hs(t):t,s;if(n)if(PA(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),_f(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=kg(n.substring(1),"/"):s=kg(n,e)}else s=e;return{pathname:s,search:DA(r),hash:VA(i)}}function kg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ef(t,e){let n=xA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function wf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=hs(t):(i=Mo({},t),Ce(!i.pathname||!i.pathname.includes("?"),zc("?","pathname","search",i)),Ce(!i.pathname||!i.pathname.includes("#"),zc("#","pathname","hash",i)),Ce(!i.search||!i.search.includes("#"),zc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=kA(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const ur=t=>t.join("/").replace(/\/\/+/g,"/"),NA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,VA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function OA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const SE=["post","put","patch","delete"];new Set(SE);const LA=["get",...SE];new Set(LA);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fo(){return Fo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fo.apply(this,arguments)}const Tf=U.createContext(null),bA=U.createContext(null),Cr=U.createContext(null),Pu=U.createContext(null),Pr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),AE=U.createContext(null);function MA(t,e){let{relative:n}=e===void 0?{}:e;ds()||Ce(!1);let{basename:r,navigator:i}=U.useContext(Cr),{hash:s,pathname:o,search:l}=CE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:ur([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ds(){return U.useContext(Pu)!=null}function fs(){return ds()||Ce(!1),U.useContext(Pu).location}function RE(t){U.useContext(Cr).static||U.useLayoutEffect(t)}function ta(){let{isDataRoute:t}=U.useContext(Pr);return t?YA():FA()}function FA(){ds()||Ce(!1);let t=U.useContext(Tf),{basename:e,future:n,navigator:r}=U.useContext(Cr),{matches:i}=U.useContext(Pr),{pathname:s}=fs(),o=JSON.stringify(Ef(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return RE(()=>{l.current=!0}),U.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=wf(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ur([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function CE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(Cr),{matches:i}=U.useContext(Pr),{pathname:s}=fs(),o=JSON.stringify(Ef(i,r.v7_relativeSplatPath));return U.useMemo(()=>wf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function UA(t,e){return jA(t,e)}function jA(t,e,n,r){ds()||Ce(!1);let{navigator:i}=U.useContext(Cr),{matches:s}=U.useContext(Pr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=fs(),f;if(e){var p;let x=typeof e=="string"?hs(e):e;u==="/"||(p=x.pathname)!=null&&p.startsWith(u)||Ce(!1),f=x}else f=c;let m=f.pathname||"/",S=m;if(u!=="/"){let x=u.replace(/^\//,"").split("/");S="/"+m.replace(/^\//,"").split("/").slice(x.length).join("/")}let C=dA(t,{pathname:S}),N=qA(C&&C.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:ur([u,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?u:ur([u,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&N?U.createElement(Pu.Provider,{value:{location:Fo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Zn.Pop}},N):N}function zA(){let t=QA(),e=OA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const BA=U.createElement(zA,null);class $A extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Pr.Provider,{value:this.props.routeContext},U.createElement(AE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WA(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(Tf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Pr.Provider,{value:e},r)}function qA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||Ce(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:m,errors:S}=n,C=p.route.loader&&m[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let S,C=!1,N=null,x=null;n&&(S=l&&p.route.id?l[p.route.id]:void 0,N=p.route.errorElement||BA,u&&(c<0&&m===0?(JA("route-fallback"),C=!0,x=null):c===m&&(C=!0,x=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),_=()=>{let A;return S?A=N:C?A=x:p.route.Component?A=U.createElement(p.route.Component,null):p.route.element?A=p.route.element:A=f,U.createElement(WA,{match:p,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:A})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?U.createElement($A,{location:n.location,revalidation:n.revalidation,component:N,error:S,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var PE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(PE||{}),kE=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(kE||{});function HA(t){let e=U.useContext(Tf);return e||Ce(!1),e}function KA(t){let e=U.useContext(bA);return e||Ce(!1),e}function GA(t){let e=U.useContext(Pr);return e||Ce(!1),e}function xE(t){let e=GA(),n=e.matches[e.matches.length-1];return n.route.id||Ce(!1),n.route.id}function QA(){var t;let e=U.useContext(AE),n=KA(),r=xE();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function YA(){let{router:t}=HA(PE.UseNavigateStable),e=xE(kE.UseNavigateStable),n=U.useRef(!1);return RE(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Fo({fromRouteId:e},s)))},[t,e])}const xg={};function JA(t,e,n){xg[t]||(xg[t]=!0)}function XA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ql(t){let{to:e,replace:n,state:r,relative:i}=t;ds()||Ce(!1);let{future:s,static:o}=U.useContext(Cr),{matches:l}=U.useContext(Pr),{pathname:u}=fs(),c=ta(),f=wf(e,Ef(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return U.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Br(t){Ce(!1)}function ZA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Zn.Pop,navigator:s,static:o=!1,future:l}=t;ds()&&Ce(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:Fo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=hs(r));let{pathname:f="/",search:p="",hash:m="",state:S=null,key:C="default"}=r,N=U.useMemo(()=>{let x=vf(f,u);return x==null?null:{location:{pathname:x,search:p,hash:m,state:S,key:C},navigationType:i}},[u,f,p,m,S,C,i]);return N==null?null:U.createElement(Cr.Provider,{value:c},U.createElement(Pu.Provider,{children:n,value:N}))}function eR(t){let{children:e,location:n}=t;return UA(Gh(e),n)}new Promise(()=>{});function Gh(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let s=[...e,i];if(r.type===U.Fragment){n.push.apply(n,Gh(r.props.children,s));return}r.type!==Br&&Ce(!1),!r.props.index||!r.props.children||Ce(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Gh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qh(){return Qh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qh.apply(this,arguments)}function tR(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function nR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function rR(t,e){return t.button===0&&(!e||e==="_self")&&!nR(t)}const iR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sR="6";try{window.__reactRouterVersion=sR}catch{}const oR="startTransition",Ng=JT[oR];function aR(t){let{basename:e,children:n,future:r,window:i}=t,s=U.useRef();s.current==null&&(s.current=uA({window:i,v5Compat:!0}));let o=s.current,[l,u]=U.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=U.useCallback(p=>{c&&Ng?Ng(()=>u(p)):u(p)},[u,c]);return U.useLayoutEffect(()=>o.listen(f),[o,f]),U.useEffect(()=>XA(r),[r]),U.createElement(ZA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const lR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wn=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:p}=e,m=tR(e,iR),{basename:S}=U.useContext(Cr),C,N=!1;if(typeof c=="string"&&uR.test(c)&&(C=c,lR))try{let A=new URL(window.location.href),O=c.startsWith("//")?new URL(A.protocol+c):new URL(c),F=vf(O.pathname,S);O.origin===A.origin&&F!=null?c=F+O.search+O.hash:N=!0}catch{}let x=MA(c,{relative:i}),w=cR(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function _(A){r&&r(A),A.defaultPrevented||w(A)}return U.createElement("a",Qh({},m,{href:C||x,onClick:N||s?r:_,ref:n,target:u}))});var Dg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Dg||(Dg={}));var Vg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vg||(Vg={}));function cR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=ta(),c=fs(),f=CE(t,{relative:o});return U.useCallback(p=>{if(rR(p,n)){p.preventDefault();let m=r!==void 0?r:Wl(c)===Wl(f);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}const hR=()=>{};var Og={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},DE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(m=64)),r.push(n[f],n[p],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(NE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new fR;const m=s<<2|l>>4;if(r.push(m),c!==64){const S=l<<4&240|c>>2;if(r.push(S),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pR=function(t){const e=NE(t);return DE.encodeByteArray(e,!0)},Hl=function(t){return pR(t).replace(/\./g,"")},VE=function(t){try{return DE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=()=>mR().__FIREBASE_DEFAULTS__,yR=()=>{if(typeof process>"u"||typeof Og>"u")return;const t=Og.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_R=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&VE(t[1]);return e&&JSON.parse(e)},ku=()=>{try{return hR()||gR()||yR()||_R()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},OE=t=>{var e,n;return(n=(e=ku())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},vR=t=>{const e=OE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},LE=()=>{var t;return(t=ku())==null?void 0:t.config},bE=t=>{var e;return(e=ku())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Hl(JSON.stringify(n)),Hl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function IR(){var e;const t=(e=ku())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function AR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function RR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CR(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PR(){return!IR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kR(){try{return typeof indexedDB=="object"}catch{return!1}}function xR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="FirebaseError";class Nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NR,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,na.prototype.create)}}class na{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Nn(i,l,r)}}function DR(t,e){return t.replace(VR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VR=/\{\$([^}]+)}/g;function OR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ni(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lg(s)&&Lg(o)){if(!ni(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function LR(t,e){const n=new bR(t,e);return n.subscribe.bind(n)}class bR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Bc),i.error===void 0&&(i.error=Bc),i.complete===void 0&&(i.complete=Bc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ME(t){return(await fetch(t,{credentials:"include"})).ok}class ri{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ER;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jR(e))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$r){return this.instances.has(e)}getOptions(e=$r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$r){return this.component?this.component.multipleInstances?e:$r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UR(t){return t===$r?void 0:t}function jR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const BR={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},$R=re.INFO,WR={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},qR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=WR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class If{constructor(e){this.name=e,this._logLevel=$R,this._logHandler=qR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const HR=(t,e)=>e.some(n=>t instanceof n);let bg,Mg;function KR(){return bg||(bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GR(){return Mg||(Mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const FE=new WeakMap,Yh=new WeakMap,UE=new WeakMap,$c=new WeakMap,Sf=new WeakMap;function QR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&FE.set(n,t)}).catch(()=>{}),Sf.set(e,t),e}function YR(t){if(Yh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yh.set(t,e)}let Jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||UE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function JR(t){Jh=t(Jh)}function XR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wc(this),e,...n);return UE.set(r,e.sort?e.sort():[e]),cr(r)}:GR().includes(t)?function(...e){return t.apply(Wc(this),e),cr(FE.get(this))}:function(...e){return cr(t.apply(Wc(this),e))}}function ZR(t){return typeof t=="function"?XR(t):(t instanceof IDBTransaction&&YR(t),HR(t,KR())?new Proxy(t,Jh):t)}function cr(t){if(t instanceof IDBRequest)return QR(t);if($c.has(t))return $c.get(t);const e=ZR(t);return e!==t&&($c.set(t,e),Sf.set(e,t)),e}const Wc=t=>Sf.get(t);function eC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=cr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(cr(o.result),u.oldVersion,u.newVersion,cr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const tC=["get","getKey","getAll","getAllKeys","count"],nC=["put","add","delete","clear"],qc=new Map;function Fg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qc.get(e))return qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=nC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tC.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return qc.set(e,s),s}JR(t=>({...t,get:(e,n,r)=>Fg(e,n)||t.get(e,n,r),has:(e,n)=>!!Fg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xh="@firebase/app",Ug="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new If("@firebase/app"),sC="@firebase/app-compat",oC="@firebase/analytics-compat",aC="@firebase/analytics",lC="@firebase/app-check-compat",uC="@firebase/app-check",cC="@firebase/auth",hC="@firebase/auth-compat",dC="@firebase/database",fC="@firebase/data-connect",pC="@firebase/database-compat",mC="@firebase/functions",gC="@firebase/functions-compat",yC="@firebase/installations",_C="@firebase/installations-compat",vC="@firebase/messaging",EC="@firebase/messaging-compat",wC="@firebase/performance",TC="@firebase/performance-compat",IC="@firebase/remote-config",SC="@firebase/remote-config-compat",AC="@firebase/storage",RC="@firebase/storage-compat",CC="@firebase/firestore",PC="@firebase/ai",kC="@firebase/firestore-compat",xC="firebase",NC="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="[DEFAULT]",DC={[Xh]:"fire-core",[sC]:"fire-core-compat",[aC]:"fire-analytics",[oC]:"fire-analytics-compat",[uC]:"fire-app-check",[lC]:"fire-app-check-compat",[cC]:"fire-auth",[hC]:"fire-auth-compat",[dC]:"fire-rtdb",[fC]:"fire-data-connect",[pC]:"fire-rtdb-compat",[mC]:"fire-fn",[gC]:"fire-fn-compat",[yC]:"fire-iid",[_C]:"fire-iid-compat",[vC]:"fire-fcm",[EC]:"fire-fcm-compat",[wC]:"fire-perf",[TC]:"fire-perf-compat",[IC]:"fire-rc",[SC]:"fire-rc-compat",[AC]:"fire-gcs",[RC]:"fire-gcs-compat",[CC]:"fire-fst",[kC]:"fire-fst-compat",[PC]:"fire-vertex","fire-js":"fire-js",[xC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new Map,VC=new Map,ed=new Map;function jg(t,e){try{t.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(ed.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;ed.set(e,t);for(const n of Kl.values())jg(n,t);for(const n of VC.values())jg(n,t);return!0}function Af(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new na("app","Firebase",OC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=NC;function jE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Zh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw hr.create("bad-app-name",{appName:String(i)});if(n||(n=LE()),!n)throw hr.create("no-options");const s=Kl.get(i);if(s){if(ni(n,s.options)&&ni(r,s.config))return s;throw hr.create("duplicate-app",{appName:i})}const o=new zR(i);for(const u of ed.values())o.addComponent(u);const l=new LC(n,r,o);return Kl.set(i,l),l}function zE(t=Zh){const e=Kl.get(t);if(!e&&t===Zh&&LE())return jE();if(!e)throw hr.create("no-app",{appName:t});return e}function dr(t,e,n){let r=DC[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(o.join(" "));return}ts(new ri(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="firebase-heartbeat-database",MC=1,Uo="firebase-heartbeat-store";let Hc=null;function BE(){return Hc||(Hc=eC(bC,MC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Uo)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),Hc}async function FC(t){try{const n=(await BE()).transaction(Uo),r=await n.objectStore(Uo).get($E(t));return await n.done,r}catch(e){if(e instanceof Nn)Rn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rn.warn(n.message)}}}async function zg(t,e){try{const r=(await BE()).transaction(Uo,"readwrite");await r.objectStore(Uo).put(e,$E(t)),await r.done}catch(n){if(n instanceof Nn)Rn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rn.warn(r.message)}}}function $E(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=1024,jC=30;class zC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $C(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>jC){const o=WC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bg(),{heartbeatsToSend:r,unsentEntries:i}=BC(this._heartbeatsCache.heartbeats),s=Hl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Rn.warn(n),""}}}function Bg(){return new Date().toISOString().substring(0,10)}function BC(t,e=UC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$g(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$g(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $C{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kR()?xR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function $g(t){return Hl(JSON.stringify({version:2,heartbeats:t})).length}function WC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){ts(new ri("platform-logger",e=>new rC(e),"PRIVATE")),ts(new ri("heartbeat",e=>new zC(e),"PRIVATE")),dr(Xh,Ug,t),dr(Xh,Ug,"esm2020"),dr("fire-js","")}qC("");function WE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HC=WE,qE=new na("auth","Firebase",WE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new If("@firebase/auth");function KC(t,...e){Gl.logLevel<=re.WARN&&Gl.warn(`Auth (${ps}): ${t}`,...e)}function cl(t,...e){Gl.logLevel<=re.ERROR&&Gl.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw Rf(t,...e)}function tn(t,...e){return Rf(t,...e)}function HE(t,e,n){const r={...HC(),[e]:n};return new na("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return HE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qE.create(t,...e)}function K(t,e,...n){if(!t)throw Rf(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cl(e),new Error(e)}function Cn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function GC(){return Wg()==="http:"||Wg()==="https:"}function Wg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GC()||AR()||"connection"in navigator)?navigator.onLine:!0}function YC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=TR()||RR()}get(){return QC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ZC=new sa(3e4,6e4);function kr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Dn(t,e,n,r,i={}){return GE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ra({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return SR()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&ia(t.emulatorConfig.host)&&(c.credentials="include"),KE.fetch()(await QE(t,t.config.apiHost,n,l),c)})}async function GE(t,e,n){t._canInitEmulator=!1;const r={...JC,...e};try{const i=new tP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw qa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw qa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw qa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw qa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw HE(t,f,c);qt(t,f)}}catch(i){if(i instanceof Nn)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function oa(t,e,n,r,i={}){const s=await Dn(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function QE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Cf(t.config,i):`${t.config.apiScheme}://${i}`;return XC.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function eP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),ZC.get())})}}function qa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tn(t,e,r);return i.customData._tokenResponse=n,i}function qg(t){return t!==void 0&&t.enterprise!==void 0}class nP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rP(t,e){return Dn(t,"GET","/v2/recaptchaConfig",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e){return Dn(t,"POST","/v1/accounts:delete",e)}async function Ql(t,e){return Dn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sP(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=Pf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mo(Kc(i.auth_time)),issuedAtTime:mo(Kc(i.iat)),expirationTime:mo(Kc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Kc(t){return Number(t)*1e3}function Pf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cl("JWT malformed, contained fewer than 3 sections"),null;try{const i=VE(n);return i?JSON.parse(i):(cl("Failed to decode base64 JWT payload"),null)}catch(i){return cl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hg(t){const e=Pf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nn&&oP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await ns(t,Ql(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?YE(i.providerUserInfo):[],o=uP(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new nd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function lP(t){const e=Me(t);await Yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function YE(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(t,e){const n=await GE(t,{},async()=>{const r=ra({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await QE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ia(t.emulatorConfig.host)&&(u.credentials="include"),KE.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hP(t,e){return Dn(t,"POST","/v2/accounts:revokeToken",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Hg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Bi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new aP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ns(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sP(this,e)}reload(){return lP(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ut({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await ns(this,iP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:S,providerData:C,stsTokenManager:N}=n;K(p&&N,e,"internal-error");const x=Bi.fromJSON(this.name,N);K(typeof p=="string",e,"internal-error"),zn(r,e.name),zn(i,e.name),K(typeof m=="boolean",e,"internal-error"),K(typeof S=="boolean",e,"internal-error"),zn(s,e.name),zn(o,e.name),zn(l,e.name),zn(u,e.name),zn(c,e.name),zn(f,e.name);const w=new Ut({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:x,createdAt:c,lastLoginAt:f});return C&&Array.isArray(C)&&(w.providerData=C.map(_=>({..._}))),u&&(w._redirectEventId=u),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Bi;i.updateFromServerResponse(n);const s=new Ut({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?YE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Bi;l.updateFromIdToken(r);const u=new Ut({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new nd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Map;function gn(t){Cn(t instanceof Function,"Expected a class definition");let e=Kg.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}JE.type="NONE";const Gg=JE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t,e,n){return`firebase:${t}:${e}:${n}`}class $i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hl(this.userKey,i.apiKey,s),this.fullPersistenceKey=hl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ql(this.auth,{idToken:e}).catch(()=>{});return n?Ut._fromGetAccountInfoResponse(this.auth,n,e):null}return Ut._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $i(gn(Gg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||gn(Gg);const o=hl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){let p;if(typeof f=="string"){const m=await Ql(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Ut._fromGetAccountInfoResponse(e,m,f)}else p=Ut._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new $i(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new $i(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rw(e))return"Blackberry";if(iw(e))return"Webos";if(ZE(e))return"Safari";if((e.includes("chrome/")||ew(e))&&!e.includes("edge/"))return"Chrome";if(nw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function XE(t=nt()){return/firefox\//i.test(t)}function ZE(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ew(t=nt()){return/crios\//i.test(t)}function tw(t=nt()){return/iemobile/i.test(t)}function nw(t=nt()){return/android/i.test(t)}function rw(t=nt()){return/blackberry/i.test(t)}function iw(t=nt()){return/webos/i.test(t)}function kf(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dP(t=nt()){var e;return kf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function fP(){return CR()&&document.documentMode===10}function sw(t=nt()){return kf(t)||nw(t)||iw(t)||rw(t)||/windows phone/i.test(t)||tw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t,e=[]){let n;switch(t){case"Browser":n=Qg(nt());break;case"Worker":n=`${Qg(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mP(t,e={}){return Dn(t,"GET","/v2/passwordPolicy",kr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=6;class yP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??gP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yg(this),this.idTokenSubscription=new Yg(this),this.beforeStateQueue=new pP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await $i.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ql(this,{idToken:e}),r=await Ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(En(this));const n=e?Me(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mP(this),n=new yP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new na("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await $i.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ow(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&KC(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function di(t){return Me(t)}class Yg{constructor(e){this.auth=e,this.observer=null,this.addObserver=LR(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vP(t){xu=t}function aw(t){return xu.loadJS(t)}function EP(){return xu.recaptchaEnterpriseScript}function wP(){return xu.gapiScript}function TP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class IP{constructor(){this.enterprise=new SP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class SP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const AP="recaptcha-enterprise",lw="NO_RECAPTCHA";class RP{constructor(e){this.type=AP,this.auth=di(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{rP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new nP(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;qg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(lw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new IP().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&qg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=EP();u.length!==0&&(u+=l),aw(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Jg(t,e,n,r=!1,i=!1){const s=new RP(t);let o;if(i)o=lw;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function rd(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Jg(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Jg(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t,e){const n=Af(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ni(s,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function PP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kP(t,e,n){const r=di(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=uw(e),{host:o,port:l}=xP(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(ni(c,r.config.emulator)&&ni(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ia(o)?ME(`${s}//${o}${u}`):NP()}function uw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xP(t){const e=uw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xg(o)}}}function Xg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function DP(t,e){return Dn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e){return oa(t,"POST","/v1/accounts:signInWithPassword",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(t,e){return oa(t,"POST","/v1/accounts:signInWithEmailLink",kr(t,e))}async function LP(t,e){return oa(t,"POST","/v1/accounts:signInWithEmailLink",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends xf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rd(e,n,"signInWithPassword",VP);case"emailLink":return OP(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rd(e,r,"signUpPassword",DP);case"emailLink":return LP(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e){return oa(t,"POST","/v1/accounts:signInWithIdp",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP="http://localhost";class ii extends xf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ii(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:bP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ra(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FP(t){const e=Zs(eo(t)).link,n=e?Zs(eo(e)).deep_link_id:null,r=Zs(eo(t)).deep_link_id;return(r?Zs(eo(r)).link:null)||r||n||e||t}class Nf{constructor(e){const n=Zs(eo(e)),r=n.apiKey??null,i=n.oobCode??null,s=MP(n.mode??null);K(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=FP(e);try{return new Nf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nf.parseLink(n);return K(r,"argument-error"),jo._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends cw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends aa{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends aa{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends aa{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(t,e){return oa(t,"POST","/v1/accounts:signUp",kr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ut._fromIdTokenResponse(e,r,i),o=Zg(r);return new si({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zg(r);return new si({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl extends Nn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Jl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Jl(e,n,r,i)}}function hw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Jl._fromErrorAndOperation(t,s,e,r):s})}async function jP(t,e,n=!1){const r=await ns(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return si._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,e,n=!1){const{auth:r}=t;if(Pt(r.app))return Promise.reject(En(r));const i="reauthenticate";try{const s=await ns(t,hw(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Pf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),si._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw(t,e,n=!1){if(Pt(t.app))return Promise.reject(En(t));const r="signIn",i=await hw(t,r,e),s=await si._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function BP(t,e){return dw(di(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw(t){const e=di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $P(t,e,n){if(Pt(t.app))return Promise.reject(En(t));const r=di(t),o=await rd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&fw(t),u}),l=await si._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function WP(t,e,n){return Pt(t.app)?Promise.reject(En(t)):BP(Me(t),ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e){return Dn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Me(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ns(r,qP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function KP(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function GP(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function QP(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function YP(t){return Me(t).signOut()}const Xl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xl,"1"),this.storage.removeItem(Xl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=1e3,XP=10;class mw extends pw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},JP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mw.type="LOCAL";const ZP=mw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw extends pw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gw.type="SESSION";const yw=gw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Nu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await ek(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Df("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function nk(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function rk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ik(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function sk(){return _w()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="firebaseLocalStorageDb",ok=1,Zl="firebaseLocalStorage",Ew="fbase_key";class la{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Du(t,e){return t.transaction([Zl],e?"readwrite":"readonly").objectStore(Zl)}function ak(){const t=indexedDB.deleteDatabase(vw);return new la(t).toPromise()}function id(){const t=indexedDB.open(vw,ok);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zl,{keyPath:Ew})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zl)?e(r):(r.close(),await ak(),e(await id()))})})}async function ey(t,e,n){const r=Du(t,!0).put({[Ew]:e,value:n});return new la(r).toPromise()}async function lk(t,e){const n=Du(t,!1).get(e),r=await new la(n).toPromise();return r===void 0?null:r.value}function ty(t,e){const n=Du(t,!0).delete(e);return new la(n).toPromise()}const uk=800,ck=3;class ww{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await id(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ck)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _w()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nu._getInstance(sk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await rk(),!this.activeServiceWorker)return;this.sender=new tk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ik()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await id();return await ey(e,Xl,"1"),await ty(e,Xl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ey(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ty(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Du(i,!1).getAll();return new la(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ww.type="LOCAL";const hk=ww;new sa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t,e){return e?gn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf extends xf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fk(t){return dw(t.auth,new Vf(t),t.bypassAuthState)}function pk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),zP(n,new Vf(t),t.bypassAuthState)}async function mk(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),jP(n,new Vf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fk;case"linkViaPopup":case"linkViaRedirect":return mk;case"reauthViaPopup":case"reauthViaRedirect":return pk;default:qt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=new sa(2e3,1e4);class Li extends Tw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Li.currentPopupAction&&Li.currentPopupAction.cancel(),Li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Df();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gk.get())};e()}}Li.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk="pendingRedirect",dl=new Map;class _k extends Tw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=dl.get(this.auth._key());if(!e){try{const r=await vk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}dl.set(this.auth._key(),e)}return this.bypassAuthState||dl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vk(t,e){const n=Tk(e),r=wk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ek(t,e){dl.set(t._key(),e)}function wk(t){return gn(t._redirectPersistence)}function Tk(t){return hl(yk,t.config.apiKey,t.name)}async function Ik(t,e,n=!1){if(Pt(t.app))return Promise.reject(En(t));const r=di(t),i=dk(r,e),o=await new _k(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=10*60*1e3;class Ak{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Iw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sk&&this.cachedEventUids.clear(),this.cachedEventUids.has(ny(e))}saveEventToCache(e){this.cachedEventUids.add(ny(e)),this.lastProcessedEventTime=Date.now()}}function ny(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Iw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Rk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Iw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ck(t,e={}){return Dn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kk=/^https?/;async function xk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ck(t);for(const n of e)try{if(Nk(n))return}catch{}qt(t,"unauthorized-domain")}function Nk(t){const e=td(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kk.test(n))return!1;if(Pk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=new sa(3e4,6e4);function ry(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vk(t){return new Promise((e,n)=>{var i,s,o;function r(){ry(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ry(),n(tn(t,"network-request-failed"))},timeout:Dk.get()})}if((s=(i=nn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=nn().gapi)!=null&&o.load)r();else{const l=TP("iframefcb");return nn()[l]=()=>{gapi.load?r():n(tn(t,"network-request-failed"))},aw(`${wP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw fl=null,e})}let fl=null;function Ok(t){return fl=fl||Vk(t),fl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=new sa(5e3,15e3),bk="__/auth/iframe",Mk="emulator/auth/iframe",Fk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jk(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cf(e,Mk):`https://${t.config.authDomain}/${bk}`,r={apiKey:e.apiKey,appName:t.name,v:ps},i=Uk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ra(r).slice(1)}`}async function zk(t){const e=await Ok(t),n=nn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:jk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=nn().setTimeout(()=>{s(o)},Lk.get());function u(){nn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$k=500,Wk=600,qk="_blank",Hk="http://localhost";class iy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kk(t,e,n,r=$k,i=Wk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Bk,width:r.toString(),height:i.toString(),top:s,left:o},c=nt().toLowerCase();n&&(l=ew(c)?qk:n),XE(c)&&(e=e||Hk,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[S,C])=>`${m}${S}=${C},`,"");if(dP(c)&&l!=="_self")return Gk(e||"",l),new iy(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new iy(p)}function Gk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk="__/auth/handler",Yk="emulator/auth/handler",Jk=encodeURIComponent("fac");async function sy(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:i};if(e instanceof cw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",OR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof aa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${Jk}=${encodeURIComponent(u)}`:"";return`${Xk(t)}?${ra(l).slice(1)}${c}`}function Xk({config:t}){return t.emulator?Cf(t,Yk):`https://${t.authDomain}/${Qk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="webStorageSupport";class Zk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yw,this._completeRedirectFn=Ik,this._overrideRedirectResult=Ek}async _openPopup(e,n,r,i){var o;Cn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await sy(e,n,r,td(),i);return Kk(e,s,Df())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await sy(e,n,r,td(),i);return nk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zk(e),r=new Ak(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Gc,{type:Gc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Gc];s!==void 0&&n(!!s),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return sw()||ZE()||kf()}}const e1=Zk;var oy="@firebase/auth",ay="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function r1(t){ts(new ri("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ow(t)},c=new _P(r,i,s,u);return PP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new ri("auth-internal",e=>{const n=di(e.getProvider("auth").getImmediate());return(r=>new t1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(oy,ay,n1(t)),dr(oy,ay,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=5*60,s1=bE("authIdTokenMaxAge")||i1;let ly=null;const o1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>s1)return;const i=n==null?void 0:n.token;ly!==i&&(ly=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function a1(t=zE()){const e=Af(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CP(t,{popupRedirectResolver:e1,persistence:[hk,ZP,yw]}),r=bE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=o1(s.toString());GP(n,o,()=>o(n.currentUser)),KP(n,l=>o(l))}}const i=OE("auth");return i&&kP(n,`http://${i}`),n}function l1(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}vP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",l1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});r1("Browser");var uy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fr,Sw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function E(){}E.prototype=y.prototype,v.F=y.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(I,R,P){for(var T=Array(arguments.length-2),De=2;De<arguments.length;De++)T[De-2]=arguments[De];return y.prototype[R].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,E){E||(E=0);const I=Array(16);if(typeof y=="string")for(var R=0;R<16;++R)I[R]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(R=0;R<16;++R)I[R]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=v.g[0],E=v.g[1],R=v.g[2];let P=v.g[3],T;T=y+(P^E&(R^P))+I[0]+3614090360&4294967295,y=E+(T<<7&4294967295|T>>>25),T=P+(R^y&(E^R))+I[1]+3905402710&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(E^P&(y^E))+I[2]+606105819&4294967295,R=P+(T<<17&4294967295|T>>>15),T=E+(y^R&(P^y))+I[3]+3250441966&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(P^E&(R^P))+I[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=P+(R^y&(E^R))+I[5]+1200080426&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(E^P&(y^E))+I[6]+2821735955&4294967295,R=P+(T<<17&4294967295|T>>>15),T=E+(y^R&(P^y))+I[7]+4249261313&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(P^E&(R^P))+I[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=P+(R^y&(E^R))+I[9]+2336552879&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(E^P&(y^E))+I[10]+4294925233&4294967295,R=P+(T<<17&4294967295|T>>>15),T=E+(y^R&(P^y))+I[11]+2304563134&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(P^E&(R^P))+I[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=P+(R^y&(E^R))+I[13]+4254626195&4294967295,P=y+(T<<12&4294967295|T>>>20),T=R+(E^P&(y^E))+I[14]+2792965006&4294967295,R=P+(T<<17&4294967295|T>>>15),T=E+(y^R&(P^y))+I[15]+1236535329&4294967295,E=R+(T<<22&4294967295|T>>>10),T=y+(R^P&(E^R))+I[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=P+(E^R&(y^E))+I[6]+3225465664&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(P^y))+I[11]+643717713&4294967295,R=P+(T<<14&4294967295|T>>>18),T=E+(P^y&(R^P))+I[0]+3921069994&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(R^P&(E^R))+I[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=P+(E^R&(y^E))+I[10]+38016083&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(P^y))+I[15]+3634488961&4294967295,R=P+(T<<14&4294967295|T>>>18),T=E+(P^y&(R^P))+I[4]+3889429448&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(R^P&(E^R))+I[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=P+(E^R&(y^E))+I[14]+3275163606&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(P^y))+I[3]+4107603335&4294967295,R=P+(T<<14&4294967295|T>>>18),T=E+(P^y&(R^P))+I[8]+1163531501&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(R^P&(E^R))+I[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=P+(E^R&(y^E))+I[2]+4243563512&4294967295,P=y+(T<<9&4294967295|T>>>23),T=R+(y^E&(P^y))+I[7]+1735328473&4294967295,R=P+(T<<14&4294967295|T>>>18),T=E+(P^y&(R^P))+I[12]+2368359562&4294967295,E=R+(T<<20&4294967295|T>>>12),T=y+(E^R^P)+I[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=P+(y^E^R)+I[8]+2272392833&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^E)+I[11]+1839030562&4294967295,R=P+(T<<16&4294967295|T>>>16),T=E+(R^P^y)+I[14]+4259657740&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(E^R^P)+I[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=P+(y^E^R)+I[4]+1272893353&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^E)+I[7]+4139469664&4294967295,R=P+(T<<16&4294967295|T>>>16),T=E+(R^P^y)+I[10]+3200236656&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(E^R^P)+I[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=P+(y^E^R)+I[0]+3936430074&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^E)+I[3]+3572445317&4294967295,R=P+(T<<16&4294967295|T>>>16),T=E+(R^P^y)+I[6]+76029189&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(E^R^P)+I[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=P+(y^E^R)+I[12]+3873151461&4294967295,P=y+(T<<11&4294967295|T>>>21),T=R+(P^y^E)+I[15]+530742520&4294967295,R=P+(T<<16&4294967295|T>>>16),T=E+(R^P^y)+I[2]+3299628645&4294967295,E=R+(T<<23&4294967295|T>>>9),T=y+(R^(E|~P))+I[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=P+(E^(y|~R))+I[7]+1126891415&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~E))+I[14]+2878612391&4294967295,R=P+(T<<15&4294967295|T>>>17),T=E+(P^(R|~y))+I[5]+4237533241&4294967295,E=R+(T<<21&4294967295|T>>>11),T=y+(R^(E|~P))+I[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=P+(E^(y|~R))+I[3]+2399980690&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~E))+I[10]+4293915773&4294967295,R=P+(T<<15&4294967295|T>>>17),T=E+(P^(R|~y))+I[1]+2240044497&4294967295,E=R+(T<<21&4294967295|T>>>11),T=y+(R^(E|~P))+I[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=P+(E^(y|~R))+I[15]+4264355552&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~E))+I[6]+2734768916&4294967295,R=P+(T<<15&4294967295|T>>>17),T=E+(P^(R|~y))+I[13]+1309151649&4294967295,E=R+(T<<21&4294967295|T>>>11),T=y+(R^(E|~P))+I[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=P+(E^(y|~R))+I[11]+3174756917&4294967295,P=y+(T<<10&4294967295|T>>>22),T=R+(y^(P|~E))+I[2]+718787259&4294967295,R=P+(T<<15&4294967295|T>>>17),T=E+(P^(R|~y))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(R+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+R&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.v=function(v,y){y===void 0&&(y=v.length);const E=y-this.blockSize,I=this.C;let R=this.h,P=0;for(;P<y;){if(R==0)for(;P<=E;)i(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<y;)if(I[R++]=v.charCodeAt(P++),R==this.blockSize){i(this,I),R=0;break}}else for(;P<y;)if(I[R++]=v[P++],R==this.blockSize){i(this,I),R=0;break}}this.h=R,this.o+=y},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,E=0;E<4;++E)for(let I=0;I<32;I+=8)v[y++]=this.g[E]>>>I&255;return v};function s(v,y){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=y(v)}function o(v,y){this.h=y;const E=[];let I=!0;for(let R=v.length-1;R>=0;R--){const P=v[R]|0;I&&P==y||(E[R]=P,I=!1)}this.g=E}var l={};function u(v){return-128<=v&&v<128?s(v,function(y){return new o([y|0],y<0?-1:0)}):new o([v|0],v<0?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return x(c(-v));const y=[];let E=1;for(let I=0;v>=E;I++)y[I]=v/E|0,E*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return x(f(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(y,8));let I=p;for(let P=0;P<v.length;P+=8){var R=Math.min(8,v.length-P);const T=parseInt(v.substring(P,P+R),y);R<8?(R=c(Math.pow(y,R)),I=I.j(R).add(c(T))):(I=I.j(E),I=I.add(c(T)))}return I}var p=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-x(this).m();let v=0,y=1;for(let E=0;E<this.g.length;E++){const I=this.i(E);v+=(I>=0?I:4294967296+I)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(N(this))return"-"+x(this).toString(v);const y=c(Math.pow(v,6));var E=this;let I="";for(;;){const R=O(E,y).g;E=w(E,R.j(y));let P=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=R,C(E))return P+I;for(;P.length<6;)P="0"+P;I=P+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function N(v){return v.h==-1}t.l=function(v){return v=w(this,v),N(v)?-1:C(v)?0:1};function x(v){const y=v.g.length,E=[];for(let I=0;I<y;I++)E[I]=~v.g[I];return new o(E,~v.h).add(m)}t.abs=function(){return N(this)?x(this):this},t.add=function(v){const y=Math.max(this.g.length,v.g.length),E=[];let I=0;for(let R=0;R<=y;R++){let P=I+(this.i(R)&65535)+(v.i(R)&65535),T=(P>>>16)+(this.i(R)>>>16)+(v.i(R)>>>16);I=T>>>16,P&=65535,T&=65535,E[R]=T<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(v,y){return v.add(x(y))}t.j=function(v){if(C(this)||C(v))return p;if(N(this))return N(v)?x(this).j(x(v)):x(x(this).j(v));if(N(v))return x(this.j(x(v)));if(this.l(S)<0&&v.l(S)<0)return c(this.m()*v.m());const y=this.g.length+v.g.length,E=[];for(var I=0;I<2*y;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(let R=0;R<v.g.length;R++){const P=this.i(I)>>>16,T=this.i(I)&65535,De=v.i(R)>>>16,cn=v.i(R)&65535;E[2*I+2*R]+=T*cn,_(E,2*I+2*R),E[2*I+2*R+1]+=P*cn,_(E,2*I+2*R+1),E[2*I+2*R+1]+=T*De,_(E,2*I+2*R+1),E[2*I+2*R+2]+=P*De,_(E,2*I+2*R+2)}for(v=0;v<y;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=y;v<2*y;v++)E[v]=0;return new o(E,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function A(v,y){this.g=v,this.h=y}function O(v,y){if(C(y))throw Error("division by zero");if(C(v))return new A(p,p);if(N(v))return y=O(x(v),y),new A(x(y.g),x(y.h));if(N(y))return y=O(v,x(y)),new A(x(y.g),y.h);if(v.g.length>30){if(N(v)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=y;I.l(v)<=0;)E=F(E),I=F(I);var R=z(E,1),P=z(I,1);for(I=z(I,2),E=z(E,2);!C(I);){var T=P.add(I);T.l(v)<=0&&(R=R.add(E),P=T),I=z(I,1),E=z(E,1)}return y=w(v,R.j(y)),new A(R,y)}for(R=p;v.l(y)>=0;){for(E=Math.max(1,Math.floor(v.m()/y.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),P=c(E),T=P.j(y);N(T)||T.l(v)>0;)E-=I,P=c(E),T=P.j(y);C(P)&&(P=m),R=R.add(P),v=w(v,T)}return new A(R,v)}t.B=function(v){return O(this,v).h},t.and=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)&v.i(I);return new o(E,this.h&v.h)},t.or=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)|v.i(I);return new o(E,this.h|v.h)},t.xor=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<y;I++)E[I]=this.i(I)^v.i(I);return new o(E,this.h^v.h)};function F(v){const y=v.g.length+1,E=[];for(let I=0;I<y;I++)E[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(E,v.h)}function z(v,y){const E=y>>5;y%=32;const I=v.g.length-E,R=[];for(let P=0;P<I;P++)R[P]=y>0?v.i(P+E)>>>y|v.i(P+E+1)<<32-y:v.i(P+E);return new o(R,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Sw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,fr=o}).apply(typeof uy<"u"?uy:typeof self<"u"?self:typeof window<"u"?window:{});var Ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Aw,to,Rw,pl,sd,Cw,Pw,kw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ha=="object"&&Ha];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var D=a[g];if(!(D in d))break e;d=d[D]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(h){var d=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&d.push([g,h[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,d){return a.call.apply(a.bind,arguments)}function c(a,h,d){return c=u,c.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(g,D,V){for(var j=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)j[Z-2]=arguments[Z];return h.prototype[D].apply(g,j)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const h=a.length;if(h>0){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function C(a,h){for(let g=1;g<arguments.length;g++){const D=arguments[g];var d=typeof D;if(d=d!="object"?d:D?Array.isArray(D)?"array":d:"null",d=="array"||d=="object"&&typeof D.length=="number"){d=a.length||0;const V=D.length||0;a.length=d+V;for(let j=0;j<V;j++)a[d+j]=D[j]}else a.push(D)}}class N{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){o.setTimeout(()=>{throw a},0)}function w(){var a=v;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class _{constructor(){this.h=this.g=null}add(h,d){const g=A.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var A=new N(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let F,z=!1,v=new _,y=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(E)}};function E(){for(var a;a=w();){try{a.h.call(a.g)}catch(d){x(d)}var h=A;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}z=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function De(a,h){R.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(De,R),De.prototype.init=function(a,h){const d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&De.Z.h.call(this)},De.prototype.h=function(){De.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var cn="closure_listenable_"+(Math.random()*1e6|0),Ts=0;function Is(a,h,d,g,D){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=D,this.key=++Ts,this.da=this.fa=!1}function W(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Q(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function X(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function me(a){const h={};for(const d in a)h[d]=a[d];return h}const Ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vr(a,h){let d,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(d in g)a[d]=g[d];for(let V=0;V<Ie.length;V++)d=Ie[V],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function At(a){this.src=a,this.g={},this.h=0}At.prototype.add=function(a,h,d,g,D){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const j=Ot(a,h,g,D);return j>-1?(h=a[j],d||(h.fa=!1)):(h=new Is(h,this.src,V,!!g,D),h.fa=d,a.push(h)),h};function Or(a,h){const d=h.type;if(d in a.g){var g=a.g[d],D=Array.prototype.indexOf.call(g,h,void 0),V;(V=D>=0)&&Array.prototype.splice.call(g,D,1),V&&(W(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ot(a,h,d,g){for(let D=0;D<a.length;++D){const V=a[D];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==g)return D}return-1}var Vn="closure_lm_"+(Math.random()*1e6|0),Gu={};function _p(a,h,d,g,D){if(Array.isArray(h)){for(let V=0;V<h.length;V++)_p(a,h[V],d,g,D);return null}return d=wp(d),a&&a[cn]?a.J(h,d,l(g)?!!g.capture:!1,D):sT(a,h,d,!1,g,D)}function sT(a,h,d,g,D,V){if(!h)throw Error("Invalid event type");const j=l(D)?!!D.capture:!!D;let Z=Yu(a);if(Z||(a[Vn]=Z=new At(a)),d=Z.add(h,d,g,j,V),d.proxy)return d;if(g=oT(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)P||(D=j),D===void 0&&(D=!1),a.addEventListener(h.toString(),g,D);else if(a.attachEvent)a.attachEvent(Ep(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function oT(){function a(d){return h.call(a.src,a.listener,d)}const h=aT;return a}function vp(a,h,d,g,D){if(Array.isArray(h))for(var V=0;V<h.length;V++)vp(a,h[V],d,g,D);else g=l(g)?!!g.capture:!!g,d=wp(d),a&&a[cn]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],d=Ot(h,d,g,D),d>-1&&(W(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=Yu(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ot(h,d,g,D)),(d=a>-1?h[a]:null)&&Qu(d))}function Qu(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[cn])Or(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(Ep(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=Yu(h))?(Or(d,a),d.h==0&&(d.src=null,h[Vn]=null)):W(a)}}}function Ep(a){return a in Gu?Gu[a]:Gu[a]="on"+a}function aT(a,h){if(a.da)a=!0;else{h=new De(h,this);const d=a.listener,g=a.ha||a.src;a.fa&&Qu(a),a=d.call(g,h)}return a}function Yu(a){return a=a[Vn],a instanceof At?a:null}var Ju="__closure_events_fn_"+(Math.random()*1e9>>>0);function wp(a){return typeof a=="function"?a:(a[Ju]||(a[Ju]=function(h){return a.handleEvent(h)}),a[Ju])}function Ge(){I.call(this),this.i=new At(this),this.M=this,this.G=null}p(Ge,I),Ge.prototype[cn]=!0,Ge.prototype.removeEventListener=function(a,h,d,g){vp(this,a,h,d,g)};function rt(a,h){var d,g=a.G;if(g)for(d=[];g;g=g.G)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new R(h,a);else if(h instanceof R)h.target=h.target||a;else{var D=h;h=new R(g,a),Vr(h,D)}D=!0;let V,j;if(d)for(j=d.length-1;j>=0;j--)V=h.g=d[j],D=ga(V,g,!0,h)&&D;if(V=h.g=a,D=ga(V,g,!0,h)&&D,D=ga(V,g,!1,h)&&D,d)for(j=0;j<d.length;j++)V=h.g=d[j],D=ga(V,g,!1,h)&&D}Ge.prototype.N=function(){if(Ge.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let g=0;g<d.length;g++)W(d[g]);delete a.g[h],a.h--}}this.G=null},Ge.prototype.J=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},Ge.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function ga(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let D=!0;for(let V=0;V<h.length;++V){const j=h[V];if(j&&!j.da&&j.capture==d){const Z=j.listener,Ve=j.ha||j.src;j.fa&&Or(a.i,j),D=Z.call(Ve,g)!==!1&&D}}return D&&!g.defaultPrevented}function lT(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Tp(a){a.g=lT(()=>{a.g=null,a.i&&(a.i=!1,Tp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class uT extends I{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Tp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ss(a){I.call(this),this.h=a,this.g={}}p(Ss,I);var Ip=[];function Sp(a){Q(a.g,function(h,d){this.g.hasOwnProperty(d)&&Qu(h)},a),a.g={}}Ss.prototype.N=function(){Ss.Z.N.call(this),Sp(this)},Ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xu=o.JSON.stringify,cT=o.JSON.parse,hT=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ap(){}function Rp(){}var As={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Zu(){R.call(this,"d")}p(Zu,R);function ec(){R.call(this,"c")}p(ec,R);var Lr={},Cp=null;function ya(){return Cp=Cp||new Ge}Lr.Ia="serverreachability";function Pp(a){R.call(this,Lr.Ia,a)}p(Pp,R);function Rs(a){const h=ya();rt(h,new Pp(h))}Lr.STAT_EVENT="statevent";function kp(a,h){R.call(this,Lr.STAT_EVENT,a),this.stat=h}p(kp,R);function it(a){const h=ya();rt(h,new kp(h,a))}Lr.Ja="timingevent";function xp(a,h){R.call(this,Lr.Ja,a),this.size=h}p(xp,R);function Cs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ps(){this.g=!0}Ps.prototype.ua=function(){this.g=!1};function dT(a,h,d,g,D,V){a.info(function(){if(a.g)if(V){var j="",Z=V.split("&");for(let le=0;le<Z.length;le++){var Ve=Z[le].split("=");if(Ve.length>1){const Fe=Ve[0];Ve=Ve[1];const Gt=Fe.split("_");j=Gt.length>=2&&Gt[1]=="type"?j+(Fe+"="+Ve+"&"):j+(Fe+"=redacted&")}}}else j=null;else j=V;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+h+`
`+d+`
`+j})}function fT(a,h,d,g,D,V,j){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+h+`
`+d+`
`+V+" "+j})}function mi(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+mT(a,d)+(g?" "+g:"")})}function pT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ps.prototype.info=function(){};function mT(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var D=g[0];if(D!="noop"&&D!="stop"&&D!="close")for(let j=1;j<g.length;j++)g[j]=""}}}}return Xu(V)}catch{return h}}var _a={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Np={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dp;function tc(){}p(tc,Ap),tc.prototype.g=function(){return new XMLHttpRequest},Dp=new tc;function ks(a){return encodeURIComponent(String(a))}function gT(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function On(a,h,d,g){this.j=a,this.i=h,this.l=d,this.S=g||1,this.V=new Ss(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vp}function Vp(){this.i=null,this.g="",this.h=!1}var Op={},nc={};function rc(a,h,d){a.M=1,a.A=Ea(Kt(h)),a.u=d,a.R=!0,Lp(a,null)}function Lp(a,h){a.F=Date.now(),va(a),a.B=Kt(a.A);var d=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),Gp(d.i,"t",g),a.C=0,d=a.j.L,a.h=new Vp,a.g=dm(a.j,d?h:null,!a.u),a.P>0&&(a.O=new uT(c(a.Y,a,a.g),a.P)),h=a.V,d=a.g,g=a.ba;var D="readystatechange";Array.isArray(D)||(D&&(Ip[0]=D.toString()),D=Ip);for(let V=0;V<D.length;V++){const j=_p(d,D[V],g||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Rs(),dT(a.i,a.v,a.B,a.l,a.S,a.u)}On.prototype.ba=function(a){a=a.target;const h=this.O;h&&Mn(a)==3?h.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Mn(this.g),Ve=this.g.ya(),le=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||tm(this.g)))){this.K||Z!=4||Ve==7||(Ve==8||le<=0?Rs(3):Rs(2)),ic(this);var h=this.g.ca();this.X=h;var d=yT(this);if(this.o=h==200,fT(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,D=this.g;if((g=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var V=g;break t}}V=null}if(a=V)mi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,sc(this,a);else{this.o=!1,this.m=3,it(12),br(this),xs(this);break e}}if(this.R){a=!0;let Fe;for(;!this.K&&this.C<d.length;)if(Fe=_T(this,d),Fe==nc){Z==4&&(this.m=4,it(14),a=!1),mi(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==Op){this.m=4,it(15),mi(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else mi(this.i,this.l,Fe,null),sc(this,Fe);if(bp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,it(16),a=!1),this.o=this.o&&a,!a)mi(this.i,this.l,d,"[Invalid Chunked Response]"),br(this),xs(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),fc(j),j.P=!0,it(11))}}else mi(this.i,this.l,d,null),sc(this,d);Z==4&&br(this),this.o&&!this.K&&(Z==4?lm(this.j,this):(this.o=!1,va(this)))}else DT(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),br(this),xs(this)}}}catch{}finally{}};function yT(a){if(!bp(a))return a.g.la();const h=tm(a.g);if(h==="")return"";let d="";const g=h.length,D=Mn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return br(a),xs(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,d+=a.h.i.decode(h[V],{stream:!(D&&V==g-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function bp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function _T(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?nc:(d=Number(h.substring(d,g)),isNaN(d)?Op:(g+=1,g+d>h.length?nc:(h=h.slice(g,g+d),a.C=g+d,h)))}On.prototype.cancel=function(){this.K=!0,br(this)};function va(a){a.T=Date.now()+a.H,Mp(a,a.H)}function Mp(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Cs(c(a.aa,a),h)}function ic(a){a.D&&(o.clearTimeout(a.D),a.D=null)}On.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(pT(this.i,this.B),this.M!=2&&(Rs(),it(17)),br(this),this.m=2,xs(this)):Mp(this,this.T-a)};function xs(a){a.j.I==0||a.K||lm(a.j,a)}function br(a){ic(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Sp(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function sc(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||oc(d.h,a))){if(!a.L&&oc(d.h,a)&&d.I==3){try{var g=d.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Aa(d),Ia(d);else break e;dc(d),it(18)}}else d.xa=D[1],0<d.xa-d.K&&D[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Cs(c(d.Va,d),6e3));jp(d.h)<=1&&d.ta&&(d.ta=void 0)}else Fr(d,11)}else if((a.L||d.g==a)&&Aa(d),!T(h))for(D=d.Ba.g.parse(h),h=0;h<D.length;h++){let le=D[h];const Fe=le[0];if(!(Fe<=d.K))if(d.K=Fe,le=le[1],d.I==2)if(le[0]=="c"){d.M=le[1],d.ba=le[2];const Gt=le[3];Gt!=null&&(d.ka=Gt,d.j.info("VER="+d.ka));const Ur=le[4];Ur!=null&&(d.za=Ur,d.j.info("SVER="+d.za));const Fn=le[5];Fn!=null&&typeof Fn=="number"&&Fn>0&&(g=1.5*Fn,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Un=a.g;if(Un){const Ca=Un.g?Un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ca){var V=g.h;V.g||Ca.indexOf("spdy")==-1&&Ca.indexOf("quic")==-1&&Ca.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ac(V,V.h),V.h=null))}if(g.G){const pc=Un.g?Un.g.getResponseHeader("X-HTTP-Session-Id"):null;pc&&(g.wa=pc,he(g.J,g.G,pc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var j=a;if(g.na=hm(g,g.L?g.ba:null,g.W),j.L){zp(g.h,j);var Z=j,Ve=g.O;Ve&&(Z.H=Ve),Z.D&&(ic(Z),va(Z)),g.g=j}else om(g);d.i.length>0&&Sa(d)}else le[0]!="stop"&&le[0]!="close"||Fr(d,7);else d.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Fr(d,7):hc(d):le[0]!="noop"&&d.l&&d.l.qa(le),d.A=0)}}Rs(4)}catch{}}var vT=class{constructor(a,h){this.g=a,this.map=h}};function Fp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Up(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function jp(a){return a.h?1:a.g?a.g.size:0}function oc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ac(a,h){a.g?a.g.add(h):a.h=h}function zp(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Fp.prototype.cancel=function(){if(this.i=Bp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return S(a.i)}var $p=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ET(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const g=a[d].indexOf("=");let D,V=null;g>=0?(D=a[d].substring(0,g),V=a[d].substring(g+1)):D=a[d],h(D,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Ln(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Ln?(this.l=a.l,Ns(this,a.j),this.o=a.o,this.g=a.g,Ds(this,a.u),this.h=a.h,lc(this,Qp(a.i)),this.m=a.m):a&&(h=String(a).match($p))?(this.l=!1,Ns(this,h[1]||"",!0),this.o=Vs(h[2]||""),this.g=Vs(h[3]||"",!0),Ds(this,h[4]),this.h=Vs(h[5]||"",!0),lc(this,h[6]||"",!0),this.m=Vs(h[7]||"")):(this.l=!1,this.i=new Ls(null,this.l))}Ln.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Os(h,Wp,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Os(h,Wp,!0),"@"),a.push(ks(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Os(d,d.charAt(0)=="/"?IT:TT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Os(d,AT)),a.join("")},Ln.prototype.resolve=function(a){const h=Kt(this);let d=!!a.j;d?Ns(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var g=a.h;if(d)Ds(h,a.u);else if(d=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var D=h.h.lastIndexOf("/");D!=-1&&(g=h.h.slice(0,D+1)+g)}if(D=g,D==".."||D==".")g="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){g=D.lastIndexOf("/",0)==0,D=D.split("/");const V=[];for(let j=0;j<D.length;){const Z=D[j++];Z=="."?g&&j==D.length&&V.push(""):Z==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&j==D.length&&V.push("")):(V.push(Z),g=!0)}g=V.join("/")}else g=D}return d?h.h=g:d=a.i.toString()!=="",d?lc(h,Qp(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Kt(a){return new Ln(a)}function Ns(a,h,d){a.j=d?Vs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ds(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function lc(a,h,d){h instanceof Ls?(a.i=h,RT(a.i,a.l)):(d||(h=Os(h,ST)),a.i=new Ls(h,a.l))}function he(a,h,d){a.i.set(h,d)}function Ea(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Vs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Os(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,wT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Wp=/[#\/\?@]/g,TT=/[#\?:]/g,IT=/[#\?]/g,ST=/[#\?@]/g,AT=/#/g;function Ls(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Mr(a){a.g||(a.g=new Map,a.h=0,a.i&&ET(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ls.prototype,t.add=function(a,h){Mr(this),this.i=null,a=gi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function qp(a,h){Mr(a),h=gi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Hp(a,h){return Mr(a),h=gi(a,h),a.g.has(h)}t.forEach=function(a,h){Mr(this),this.g.forEach(function(d,g){d.forEach(function(D){a.call(h,D,g,this)},this)},this)};function Kp(a,h){Mr(a);let d=[];if(typeof h=="string")Hp(a,h)&&(d=d.concat(a.g.get(gi(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return Mr(this),this.i=null,a=gi(this,a),Hp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=Kp(this,a),a.length>0?String(a[0]):h):h};function Gp(a,h,d){qp(a,h),d.length>0&&(a.i=null,a.g.set(gi(a,h),S(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var d=h[g];const D=ks(d);d=Kp(this,d);for(let V=0;V<d.length;V++){let j=D;d[V]!==""&&(j+="="+ks(d[V])),a.push(j)}}return this.i=a.join("&")};function Qp(a){const h=new Ls;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function gi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function RT(a,h){h&&!a.j&&(Mr(a),a.i=null,a.g.forEach(function(d,g){const D=g.toLowerCase();g!=D&&(qp(this,g),Gp(this,D,d))},a)),a.j=h}function CT(a,h){const d=new Ps;if(o.Image){const g=new Image;g.onload=f(bn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=f(bn,d,"TestLoadImage: error",!1,h,g),g.onabort=f(bn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=f(bn,d,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function PT(a,h){const d=new Ps,g=new AbortController,D=setTimeout(()=>{g.abort(),bn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(D),V.ok?bn(d,"TestPingServer: ok",!0,h):bn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),bn(d,"TestPingServer: error",!1,h)})}function bn(a,h,d,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(d)}catch{}}function kT(){this.g=new hT}function uc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(uc,Ap),uc.prototype.g=function(){return new wa(this.i,this.h)};function wa(a,h){Ge.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(wa,Ge),t=wa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ms(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,bs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Yp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Yp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?bs(this):Ms(this),this.readyState==3&&Yp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,bs(this))},t.Na=function(a){this.g&&(this.response=a,bs(this))},t.ga=function(){this.g&&bs(this)};function bs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ms(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Ms(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Jp(a){let h="";return Q(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function cc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Jp(d),typeof a=="string"?d!=null&&ks(d):he(a,h,d))}function we(a){Ge.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(we,Ge);var xT=/^https?$/i,NT=["POST","PUT"];t=we.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dp.g(),this.g.onreadystatechange=m(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Xp(this,V);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)d.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())d.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),D=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(NT,h,void 0)>=0)||g||D||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,j]of d)this.g.setRequestHeader(V,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Xp(this,V)}};function Xp(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Zp(a),Ta(a)}function Zp(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),Ta(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ta(this,!0)),we.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?em(this):this.Xa())},t.Xa=function(){em(this)};function em(a){if(a.h&&typeof s<"u"){if(a.v&&Mn(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),Mn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=V===0){let j=String(a.D).match($p)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),g=!xT.test(j?j.toLowerCase():"")}d=g}if(d)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var D=Mn(a)>2?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.ca()+"]",Zp(a)}}finally{Ta(a)}}}}function Ta(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||rt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Mn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Mn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),cT(h)}};function tm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function DT(a){const h={};a=(a.g&&Mn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var d=gT(a[g]);const D=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[D]||[];h[D]=V,V.push(d)}X(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fs(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function nm(a){this.za=0,this.i=[],this.j=new Ps,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Fs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Fs("baseRetryDelayMs",5e3,a),this.Za=Fs("retryDelaySeedMs",1e4,a),this.Ta=Fs("forwardChannelMaxRetries",2,a),this.va=Fs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Fp(a&&a.concurrentRequestLimit),this.Ba=new kT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=nm.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,g){it(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=hm(this,null,this.W),Sa(this)};function hc(a){if(rm(a),a.I==3){var h=a.V++,d=Kt(a.J);if(he(d,"SID",a.M),he(d,"RID",h),he(d,"TYPE","terminate"),Us(a,d),h=new On(a,a.j,h),h.M=2,h.A=Ea(Kt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=dm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),va(h)}cm(a)}function Ia(a){a.g&&(fc(a),a.g.cancel(),a.g=null)}function rm(a){Ia(a),a.v&&(o.clearTimeout(a.v),a.v=null),Aa(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Sa(a){if(!Up(a.h)&&!a.m){a.m=!0;var h=a.Ea;F||y(),z||(F(),z=!0),v.add(h,a),a.D=0}}function VT(a,h){return jp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Cs(c(a.Ea,a,h),um(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const D=new On(this,this.j,a);let V=this.o;if(this.U&&(V?(V=me(V),Vr(V,this.U)):V=this.U),this.u!==null||this.R||(D.J=V,V=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=sm(this,D,h),d=Kt(this.J),he(d,"RID",a),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),Us(this,d),V&&(this.R?h="headers="+ks(Jp(V))+"&"+h:this.u&&cc(d,this.u,V)),ac(this.h,D),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",h),he(d,"SID","null"),D.U=!0,rc(D,d,null)):rc(D,d,h),this.I=2}}else this.I==3&&(a?im(this,a):this.i.length==0||Up(this.h)||im(this))};function im(a,h){var d;h?d=h.l:d=a.V++;const g=Kt(a.J);he(g,"SID",a.M),he(g,"RID",d),he(g,"AID",a.K),Us(a,g),a.u&&a.o&&cc(g,a.u,a.o),d=new On(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=sm(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ac(a.h,d),rc(d,g,h)}function Us(a,h){a.H&&Q(a.H,function(d,g){he(h,g,d)}),a.l&&Q({},function(d,g){he(h,g,d)})}function sm(a,h,d){d=Math.min(a.i.length,d);const g=a.l?c(a.l.Ka,a.l,a):null;e:{var D=a.i;let Z=-1;for(;;){const Ve=["count="+d];Z==-1?d>0?(Z=D[0].g,Ve.push("ofs="+Z)):Z=0:Ve.push("ofs="+Z);let le=!0;for(let Fe=0;Fe<d;Fe++){var V=D[Fe].g;const Gt=D[Fe].map;if(V-=Z,V<0)Z=Math.max(0,D[Fe].g-100),le=!1;else try{V="req"+V+"_"||"";try{var j=Gt instanceof Map?Gt:Object.entries(Gt);for(const[Ur,Fn]of j){let Un=Fn;l(Fn)&&(Un=Xu(Fn)),Ve.push(V+Ur+"="+encodeURIComponent(Un))}}catch(Ur){throw Ve.push(V+"type="+encodeURIComponent("_badmap")),Ur}}catch{g&&g(Gt)}}if(le){j=Ve.join("&");break e}}j=void 0}return a=a.i.splice(0,d),h.G=a,j}function om(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;F||y(),z||(F(),z=!0),v.add(h,a),a.A=0}}function dc(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Cs(c(a.Da,a),um(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,am(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Cs(c(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),Ia(this),am(this))};function fc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function am(a){a.g=new On(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Kt(a.na);he(h,"RID","rpc"),he(h,"SID",a.M),he(h,"AID",a.K),he(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(h,"TO",a.ia),he(h,"TYPE","xmlhttp"),Us(a,h),a.u&&a.o&&cc(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ea(Kt(h)),d.u=null,d.R=!0,Lp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Ia(this),dc(this),it(19))};function Aa(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function lm(a,h){var d=null;if(a.g==h){Aa(a),fc(a),a.g=null;var g=2}else if(oc(a.h,h))d=h.G,zp(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var D=a.D;g=ya(),rt(g,new xp(g,d)),Sa(a)}else om(a);else if(D=h.m,D==3||D==0&&h.X>0||!(g==1&&VT(a,h)||g==2&&dc(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),D){case 1:Fr(a,5);break;case 4:Fr(a,10);break;case 3:Fr(a,6);break;default:Fr(a,2)}}}function um(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Fr(a,h){if(a.j.info("Error code "+h),h==2){var d=c(a.bb,a),g=a.Ua;const D=!g;g=new Ln(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ns(g,"https"),Ea(g),D?CT(g.toString(),d):PT(g.toString(),d)}else it(2);a.I=0,a.l&&a.l.pa(h),cm(a),rm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function cm(a){if(a.I=0,a.ja=[],a.l){const h=Bp(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ja,h),C(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function hm(a,h,d){var g=d instanceof Ln?Kt(d):new Ln(d);if(g.g!="")h&&(g.g=h+"."+g.g),Ds(g,g.u);else{var D=o.location;g=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;const V=new Ln(null);g&&Ns(V,g),h&&(V.g=h),D&&Ds(V,D),d&&(V.h=d),g=V}return d=a.G,h=a.wa,d&&h&&he(g,d,h),he(g,"VER",a.ka),Us(a,g),g}function dm(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new we(new uc({ab:d})):new we(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fm(){}t=fm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ra(){}Ra.prototype.g=function(a,h){return new yt(a,h)};function yt(a,h){Ge.call(this),this.g=new nm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!T(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new yi(this)}p(yt,Ge),yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){hc(this.g)},yt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Xu(a),a=d);h.i.push(new vT(h.Ya++,a)),h.I==3&&Sa(h)},yt.prototype.N=function(){this.g.l=null,delete this.j,hc(this.g),delete this.g,yt.Z.N.call(this)};function pm(a){Zu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(pm,Zu);function mm(){ec.call(this),this.status=1}p(mm,ec);function yi(a){this.g=a}p(yi,fm),yi.prototype.ra=function(){rt(this.g,"a")},yi.prototype.qa=function(a){rt(this.g,new pm(a))},yi.prototype.pa=function(a){rt(this.g,new mm)},yi.prototype.oa=function(){rt(this.g,"b")},Ra.prototype.createWebChannel=Ra.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,kw=function(){return new Ra},Pw=function(){return ya()},Cw=Lr,sd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},_a.NO_ERROR=0,_a.TIMEOUT=8,_a.HTTP_ERROR=6,pl=_a,Np.COMPLETE="complete",Rw=Np,Rp.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",Ge.prototype.listen=Ge.prototype.J,to=Rp,we.prototype.listenOnce=we.prototype.K,we.prototype.getLastError=we.prototype.Ha,we.prototype.getLastErrorCode=we.prototype.ya,we.prototype.getStatus=we.prototype.ca,we.prototype.getResponseJson=we.prototype.La,we.prototype.getResponseText=we.prototype.la,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Fa,Aw=we}).apply(typeof Ha<"u"?Ha:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs="12.13.0";function u1(t){gs=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new If("@firebase/firestore");function vi(){return oi.logLevel}function $(t,...e){if(oi.logLevel<=re.DEBUG){const n=e.map(Of);oi.debug(`Firestore (${gs}): ${t}`,...n)}}function Pn(t,...e){if(oi.logLevel<=re.ERROR){const n=e.map(Of);oi.error(`Firestore (${gs}): ${t}`,...n)}}function ai(t,...e){if(oi.logLevel<=re.WARN){const n=e.map(Of);oi.warn(`Firestore (${gs}): ${t}`,...n)}}function Of(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,xw(t,r,n)}function xw(t,e,n){let r=`FIRESTORE (${gs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Pn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||xw(e,i,r)}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class c1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class h1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class d1{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new Nw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class f1{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class p1{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new f1(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class m1{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=g1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function od(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Qc(i)===Qc(s)?ee(i,s):Qc(i)?1:-1}return ee(t.length,e.length)}const y1=55296,_1=57343;function Qc(t){const e=t.charCodeAt(0);return e>=y1&&e<=_1}function rs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="__name__";class Jt{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Jt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ee(e.length,n.length)}static compareSegments(e,n){const r=Jt.isNumericId(e),i=Jt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Jt.extractNumericId(e).compare(Jt.extractNumericId(n)):od(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fr.fromString(e.substring(4,e.length-2))}}class ue extends Jt{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const v1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Jt{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return v1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hy}static keyField(){return new We([hy])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ue.fromString(e))}static fromName(e){return new H(ue.fromString(e).popFirst(5))}static empty(){return new H(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ue(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t,e,n){if(!n)throw new B(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function E1(t,e,n,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dy(t){if(!H.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fy(t){if(H.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vw(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Vu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function an(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vu(t);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,e){const n={typeString:t};return e&&(n.value=e),n}function ua(t,e){if(!Vw(t))throw new B(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=-62135596800,my=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*my);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<py)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/my}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ua(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-py;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:Ne("string",fe._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new fe(0,0))}static max(){return new Y(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=-1;function w1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new yr(i,H.empty(),e)}function T1(t){return new yr(t.readTime,t.key,zo)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(Y.min(),H.empty(),zo)}static max(){return new yr(Y.max(),H.empty(),zo)}}function I1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class A1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==S1)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function R1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _s(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ou.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=-1;function Lu(t){return t==null}function eu(t){return t===0&&1/t==-1/0}function C1(t){return typeof t=="number"&&Number.isInteger(t)&&!eu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="";function P1(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=gy(e)),e=k1(t.get(n),e);return gy(e)}function k1(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Ow:n+="";break;default:n+=s}}return n}function gy(t){return t+Ow+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Lw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ka(this.root,e,this.comparator,!0)}}class Ka{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _y(this.data.getIterator())}getIteratorFrom(e){return new _y(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new be(this.comparator);return n.data=e,n}}class _y{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Et([])}unionWith(e){let n=new be(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new bw("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const x1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=x1.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="server_timestamp",Fw="__type__",Uw="__previous_value__",jw="__local_write_time__";function Mf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Fw])==null?void 0:r.stringValue)===Mw}function bu(t){const e=t.mapValue.fields[Uw];return Mf(e)?bu(e):e}function Bo(t){const e=_r(t.mapValue.fields[jw].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n,r,i,s,o,l,u,c,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=f,this.apiKey=p}}const tu="(default)";class $o{constructor(e,n){this.projectId=e,this.database=n||tu}static empty(){return new $o("","")}get isDefaultDatabase(){return this.database===tu}isEqual(e){return e instanceof $o&&e.projectId===this.projectId&&e.database===this.database}}function D1(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $o(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="__type__",V1="__max__",Ga={mapValue:{}},Bw="__vector__",nu="value";function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mf(t)?4:L1(t)?9007199254740991:O1(t)?10:11:G(28295,{value:t})}function ln(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Bo(t).isEqual(Bo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=_r(i.timestampValue),l=_r(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return vr(i.bytesValue).isEqual(vr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?eu(o)===eu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(yy(o)!==yy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!ln(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function Wo(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function is(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return vy(t.timestampValue,e.timestampValue);case 4:return vy(Bo(t),Bo(e));case 5:return od(t.stringValue,e.stringValue);case 6:return function(s,o){const l=vr(s),u=vr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ee(l[c],u[c]);if(f!==0)return f}return ee(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ee(Se(s.latitude),Se(o.latitude));return l!==0?l:ee(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ey(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,S,C,N;const l=s.fields||{},u=o.fields||{},c=(m=l[nu])==null?void 0:m.arrayValue,f=(S=u[nu])==null?void 0:S.arrayValue,p=ee(((C=c==null?void 0:c.values)==null?void 0:C.length)||0,((N=f==null?void 0:f.values)==null?void 0:N.length)||0);return p!==0?p:Ey(c,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ga.mapValue&&o===Ga.mapValue)return 0;if(s===Ga.mapValue)return 1;if(o===Ga.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=od(u[p],f[p]);if(m!==0)return m;const S=is(l[u[p]],c[f[p]]);if(S!==0)return S}return ee(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G(23264,{he:n})}}function vy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=_r(t),r=_r(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function Ey(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=is(n[i],r[i]);if(s)return s}return ee(n.length,r.length)}function ss(t){return ad(t)}function ad(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ad(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ad(n.fields[o])}`;return i+"}"}(t.mapValue):G(61005,{value:t})}function ml(t){switch(Er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=bu(t);return e?16+ml(e):16;case 5:return 2*t.stringValue.length;case 6:return vr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ml(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return xr(r.fields,(s,o)=>{i+=s.length+ml(o)}),i}(t.mapValue);default:throw G(13486,{value:t})}}function wy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ld(t){return!!t&&"integerValue"in t}function Ff(t){return!!t&&"arrayValue"in t}function Ty(t){return!!t&&"nullValue"in t}function Iy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gl(t){return!!t&&"mapValue"in t}function O1(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[zw])==null?void 0:r.stringValue)===Bw}function go(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return xr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=go(t.arrayValue.values[n]);return e}return{...t}}function L1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===V1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!gl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=go(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());gl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];gl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(go(this.value))}}function $w(t){const e=[];return xr(t.fields,(n,r)=>{const i=new We([n]);if(gl(r)){const s=$w(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,Y.min(),Y.min(),Y.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,Y.min(),Y.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,Y.min(),Y.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.position=e,this.inclusive=n}}function Sy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=is(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ay(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function b1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{}class xe extends Ww{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new F1(e,n,r):n==="array-contains"?new z1(e,r):n==="in"?new B1(e,r):n==="not-in"?new $1(e,r):n==="array-contains-any"?new W1(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new U1(e,r):new j1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(is(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends Ww{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Ht(e,n)}matches(e){return qw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function qw(t){return t.op==="and"}function Hw(t){return M1(t)&&qw(t)}function M1(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function ud(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+ss(t.value);if(Hw(t))return t.filters.map(e=>ud(e)).join(",");{const e=t.filters.map(n=>ud(n)).join(",");return`${t.op}(${e})`}}function Kw(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&ln(r.value,i.value)}(t,e):t instanceof Ht?function(r,i){return i instanceof Ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Kw(o,i.filters[l]),!0):!1}(t,e):void G(19439)}function Gw(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${ss(n.value)}`}(t):t instanceof Ht?function(n){return n.op.toString()+" {"+n.getFilters().map(Gw).join(" ,")+"}"}(t):"Filter"}class F1 extends xe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class U1 extends xe{constructor(e,n){super(e,"in",n),this.keys=Qw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class j1 extends xe{constructor(e,n){super(e,"not-in",n),this.keys=Qw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class z1 extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ff(n)&&Wo(n.arrayValue,this.value)}}class B1 extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wo(this.value.arrayValue,n)}}class $1 extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Wo(this.value.arrayValue,n)}}class W1 extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Ry(t,e=null,n=[],r=[],i=null,s=null,o=null){return new q1(t,e,n,r,i,s,o)}function Uf(t){const e=J(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ud(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Lu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ss(r)).join(",")),e.Te=n}return e.Te}function jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!b1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ay(t.startAt,e.startAt)&&Ay(t.endAt,e.endAt)}function cd(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function H1(t,e,n,r,i,s,o,l){return new vs(t,e,n,r,i,s,o,l)}function zf(t){return new vs(t)}function Cy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function K1(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Yw(t){return t.collectionGroup!==null}function yo(t){const e=J(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new be(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new qo(s,r))}),n.has(We.keyField().canonicalString())||e.Ie.push(new qo(We.keyField(),r))}return e.Ie}function rn(t){const e=J(t);return e.Ee||(e.Ee=G1(e,yo(t))),e.Ee}function G1(t,e){if(t.limitType==="F")return Ry(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new qo(i.field,s)});const n=t.endAt?new ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ru(t.startAt.position,t.startAt.inclusive):null;return Ry(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function hd(t,e){const n=t.filters.concat([e]);return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Q1(t,e){const n=t.explicitOrderBy.concat([e]);return new vs(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function iu(t,e,n){return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mu(t,e){return jf(rn(t),rn(e))&&t.limitType===e.limitType}function Jw(t){return`${Uf(rn(t))}|lt:${t.limitType}`}function Ei(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Gw(i)).join(", ")}]`),Lu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ss(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ss(i)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function Fu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of yo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Sy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,yo(r),i)||r.endAt&&!function(o,l,u){const c=Sy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,yo(r),i))}(t,e)}function Y1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xw(t){return(e,n)=>{let r=!1;for(const i of yo(t)){const s=J1(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function J1(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?is(u,c):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Lw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=new ye(H.comparator);function kn(){return X1}const Zw=new ye(H.comparator);function no(...t){let e=Zw;for(const n of t)e=e.insert(n.key,n);return e}function e0(t){let e=Zw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return _o()}function t0(){return _o()}function _o(){return new fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Z1=new ye(H.comparator),ex=new be(H.comparator);function te(...t){let e=ex;for(const n of t)e=e.add(n);return e}const tx=new be(ee);function nx(){return tx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eu(e)?"-0":e}}function n0(t){return{integerValue:""+t}}function rx(t,e){return C1(e)?n0(e):Bf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this._=void 0}}function ix(t,e,n){return t instanceof Ho?function(i,s){const o={fields:{[Fw]:{stringValue:Mw},[jw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Mf(s)&&(s=bu(s)),s&&(o.fields[Uw]=s),{mapValue:o}}(n,e):t instanceof Ko?i0(t,e):t instanceof Go?s0(t,e):function(i,s){const o=r0(i,s),l=Py(o)+Py(i.Ae);return ld(o)&&ld(i.Ae)?n0(l):Bf(i.serializer,l)}(t,e)}function sx(t,e,n){return t instanceof Ko?i0(t,e):t instanceof Go?s0(t,e):n}function r0(t,e){return t instanceof su?function(r){return ld(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Ho extends Uu{}class Ko extends Uu{constructor(e){super(),this.elements=e}}function i0(t,e){const n=o0(e);for(const r of t.elements)n.some(i=>ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class Go extends Uu{constructor(e){super(),this.elements=e}}function s0(t,e){let n=o0(e);for(const r of t.elements)n=n.filter(i=>!ln(i,r));return{arrayValue:{values:n}}}class su extends Uu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Py(t){return Se(t.integerValue||t.doubleValue)}function o0(t){return Ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e,n){this.field=e,this.transform=n}}function ax(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ko&&i instanceof Ko||r instanceof Go&&i instanceof Go?rs(r.elements,i.elements,ln):r instanceof su&&i instanceof su?ln(r.Ae,i.Ae):r instanceof Ho&&i instanceof Ho}(t.transform,e.transform)}class lx{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ju{}function a0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $f(t.key,Bt.none()):new ca(t.key,t.data,Bt.none());{const n=t.data,r=dt.empty();let i=new be(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Nr(t.key,r,new Et(i.toArray()),Bt.none())}}function ux(t,e,n){t instanceof ca?function(i,s,o){const l=i.value.clone(),u=xy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Nr?function(i,s,o){if(!yl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=xy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(l0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vo(t,e,n,r){return t instanceof ca?function(s,o,l,u){if(!yl(s.precondition,o))return l;const c=s.value.clone(),f=Ny(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Nr?function(s,o,l,u){if(!yl(s.precondition,o))return l;const c=Ny(s.fieldTransforms,u,o),f=o.data;return f.setAll(l0(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return yl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function cx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=r0(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function ky(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&rs(r,i,(s,o)=>ax(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ca extends ju{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nr extends ju{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function l0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xy(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,sx(o,l,n[i]))}return r}function Ny(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ix(s,o,e))}return r}class $f extends ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hx extends ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ux(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=t0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=a0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(n,r)=>ky(n,r))&&rs(this.baseMutations,e.baseMutations,(n,r)=>ky(n,r))}}class Wf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Z1}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,ie;function mx(t){switch(t){case L.OK:return G(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function u0(t){if(t===void 0)return Pn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Pe.OK:return L.OK;case Pe.CANCELLED:return L.CANCELLED;case Pe.UNKNOWN:return L.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return L.INTERNAL;case Pe.UNAVAILABLE:return L.UNAVAILABLE;case Pe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Pe.NOT_FOUND:return L.NOT_FOUND;case Pe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Pe.ABORTED:return L.ABORTED;case Pe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Pe.DATA_LOSS:return L.DATA_LOSS;default:return G(39323,{code:t})}}(ie=Pe||(Pe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=new fr([4294967295,4294967295],0);function Dy(t){const e=gx().encode(t),n=new Sw;return n.update(e),new Uint8Array(n.digest())}function Vy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fr([n,r],0),new fr([i,s],0)]}class qf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ro(`Invalid padding: ${n}`);if(r<0)throw new ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ro(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=fr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(fr.fromNumber(r)));return i.compare(yx)===1&&(i=new fr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Dy(e),[r,i]=Vy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new qf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Dy(e),[r,i]=Vy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ha(Y.min(),i,new ye(ee),kn(),te())}}class da{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new da(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class c0{constructor(e,n){this.targetId=e,this.Ce=n}}class h0{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Oy{constructor(){this.ve=0,this.Fe=Ly(),this.Me=Ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),n=te(),r=te();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new da(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Ly()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class _x{constructor(e){this.Ge=e,this.ze=new Map,this.je=kn(),this.Je=Qa(),this.He=Qa(),this.Ze=new ye(ee)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(cd(s))if(r===0){const o=new H(s.path);this.et(n,o,et.newNoDocument(o,Y.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=vr(r).toUint8Array()}catch(u){if(u instanceof bw)return ai("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new qf(o,i,s)}catch(u){return ai(u instanceof ro?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&cd(l.target)){const u=new H(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,et.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=te();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new ha(e,n,this.Ze,this.je,r);return this.je=kn(),this.Je=Qa(),this.He=Qa(),this.Ze=new ye(ee),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Oy,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new be(ee),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new be(ee),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Oy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Qa(){return new ye(H.comparator)}function Ly(){return new ye(H.comparator)}const vx={asc:"ASCENDING",desc:"DESCENDING"},Ex={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wx={and:"AND",or:"OR"};class Tx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function dd(t,e){return t.useProto3Json||Lu(e)?e:{value:e}}function ou(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function d0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ix(t,e){return ou(t,e.toTimestamp())}function sn(t){return oe(!!t,49232),Y.fromTimestamp(function(n){const r=_r(n);return new fe(r.seconds,r.nanos)}(t))}function Hf(t,e){return fd(t,e).canonicalString()}function fd(t,e){const n=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function f0(t){const e=ue.fromString(t);return oe(_0(e),10190,{key:e.toString()}),e}function pd(t,e){return Hf(t.databaseId,e.path)}function Yc(t,e){const n=f0(e);if(n.get(1)!==t.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(m0(n))}function p0(t,e){return Hf(t.databaseId,e)}function Sx(t){const e=f0(t);return e.length===4?ue.emptyPath():m0(e)}function md(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function m0(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function by(t,e,n){return{name:pd(t,e),fields:n.value.mapValue.fields}}function Ax(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(oe(f===void 0||typeof f=="string",58123),Ke.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ke.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?L.UNKNOWN:u0(c.code);return new B(f,c.message||"")}(o);n=new h0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yc(t,r.document.name),s=sn(r.document.updateTime),o=r.document.createTime?sn(r.document.createTime):Y.min(),l=new dt({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new _l(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Yc(t,r.document),s=r.readTime?sn(r.readTime):Y.min(),o=et.newNoDocument(i,s),l=r.removedTargetIds||[];n=new _l([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Yc(t,r.document),s=r.removedTargetIds||[];n=new _l([],s,i,null)}else{if(!("filter"in e))return G(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new px(i,s),l=r.targetId;n=new c0(l,o)}}return n}function Rx(t,e){let n;if(e instanceof ca)n={update:by(t,e.key,e.value)};else if(e instanceof $f)n={delete:pd(t,e.key)};else if(e instanceof Nr)n={update:by(t,e.key,e.data),updateMask:Lx(e.fieldMask)};else{if(!(e instanceof hx))return G(16599,{dt:e.type});n={verify:pd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Ho)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof su)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ix(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(t,e.precondition)),n}function Cx(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?sn(i.updateTime):sn(s);return o.isEqual(Y.min())&&(o=sn(s)),new lx(o,i.transformResults||[])}(n,e))):[]}function Px(t,e){return{documents:[p0(t,e.path)]}}function kx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=p0(t,i);const s=function(c){if(c.length!==0)return y0(Ht.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:wi(m.field),direction:Dx(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=dd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function xx(t){let e=Sx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=g0(p);return m instanceof Ht&&Hw(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new qo(Ti(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Lu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,S=p.values||[];return new ru(S,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,S=p.values||[];return new ru(S,m)}(n.endAt)),H1(e,i,o,s,l,"F",u,c)}function Nx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function g0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ti(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ti(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ti(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ti(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return xe.create(Ti(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ht.create(n.compositeFilter.filters.map(r=>g0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function Dx(t){return vx[t]}function Vx(t){return Ex[t]}function Ox(t){return wx[t]}function wi(t){return{fieldPath:t.canonicalString()}}function Ti(t){return We.fromServerFormat(t.fieldPath)}function y0(t){return t instanceof xe?function(n){if(n.op==="=="){if(Iy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NAN"}};if(Ty(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Iy(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NAN"}};if(Ty(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wi(n.field),op:Vx(n.op),value:n.value}}}(t):t instanceof Ht?function(n){const r=n.getFilters().map(i=>y0(i));return r.length===1?r[0]:{compositeFilter:{op:Ox(n.op),filters:r}}}(t):G(54877,{filter:t})}function Lx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function v0(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.yt=e}}function Mx(t){const e=xx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?iu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(){this.bn=new Ux}addToCollectionParentIndex(e,n){return this.bn.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(yr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Ux{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new be(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new be(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},E0=41943040;class ct{static withCacheSize(e){return new ct(e,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct.DEFAULT_COLLECTION_PERCENTILE=10,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ct.DEFAULT=new ct(E0,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ct.DISABLED=new ct(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new wr(0)}static ar(){return new wr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="LruGarbageCollector",jx=1048576;function Uy([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class zx{constructor(e){this.Pr=e,this.buffer=new be(Uy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Uy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Bx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){$(Fy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_s(n)?$(Fy,"Ignoring IndexedDB error during garbage collection: ",n):await ys(n)}await this.Ar(3e5)})}}class $x{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(Ou.ce);const r=new zx(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(My)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),My):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),vi()<=re.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function Wx(t,e){return new $x(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.changes=new fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&vo(r.mutation,i,Et.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=no();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=kn();const o=_o(),l=function(){return _o()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof Nr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),vo(f.mutation,c,f.mutation.getFieldMask(),fe.now())):o.set(c.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>l.set(c,new Hx(f,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=_o();let i=new ye((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Et.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=t0();f.forEach(m=>{if(!s.has(m)){const S=a0(n.get(m),r.get(m));S!==null&&p.set(m,S),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return K1(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Kr());let l=zo,u=s;return o.next(c=>b.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(f=>({batchId:l,changes:e0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=no();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=no();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const c=function(p,m){return new vs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,et.newInvalidDocument(f)))});let l=no();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&vo(f.mutation,c,Et.empty(),fe.now()),Fu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return b.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:sn(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:Mx(i.bundledQuery),readTime:sn(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(){this.overlays=new ye(H.comparator),this.Lr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Kr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ye((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=Kr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=Kr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return b.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fx(n,r));let s=this.Lr.get(n);s===void 0&&(s=te(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.kr=new be(Ue.Kr),this.qr=new be(Ue.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ue(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new H(new ue([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new H(new ue([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=te();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return H.comparator(e.key,n.key)||ee(e.Jr,n.Jr)}static Ur(e,n){return ee(e.Jr,n.Jr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new be(Ue.Kr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dx(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?bf:this.Yn-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new be(ee);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),b.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new H(s),0);let l=new be(ee);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Jr)),!0)},o),b.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return b.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Ue(n,0),i=this.Hr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.ti=e,this.docs=function(){return new ye(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=kn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=kn();const o=n.path,l=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||I1(T1(f),r)<=0||(i.has(f.key)||Fu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G(9500)}ni(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Zx(this)}getSize(e){return b.resolve(this.size)}}class Zx extends qx{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.persistence=e,this.ri=new fi(n=>Uf(n),jf),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new Kf,this.targetCount=0,this.oi=wr._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),b.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new wr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.lr(n),b.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this._i={},this.overlays={},this.ai=new Ou(0),this.ui=!1,this.ui=!0,this.ci=new Yx,this.referenceDelegate=e(this),this.li=new eN(this),this.indexManager=new Fx,this.remoteDocumentCache=function(i){return new Xx(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new bx(n),this.Pi=new Gx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Jx(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new tN(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return b.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class tN extends A1{constructor(e){super(),this.currentSequenceNumber=e}}class Gf{constructor(e){this.persistence=e,this.Ri=new Kf,this.Ai=null}static Vi(e){return new Gf(e)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),b.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.di,r=>{const i=H.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return b.or([()=>b.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class au{constructor(e,n){this.persistence=e,this.fi=new fi(r=>P1(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Wx(this,n)}static Vi(e,n){return new au(e,n)}Ti(){}Ii(e){return b.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return b.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?b.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),b.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),b.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ml(e.data.value)),n}wr(e,n,r){return b.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return PR()?8:R1(nt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nN;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(vi()<=re.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Ei(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),b.resolve()):(vi()<=re.DEBUG&&$("QueryEngine","Query:",Ei(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(vi()<=re.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Ei(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):b.resolve())}gs(e,n){if(Cy(n))return b.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=iu(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,o,u.readTime)?this.gs(e,iu(n,null,"F")):this.Ds(e,c,n,u)}))})))}ps(e,n,r,i){return Cy(n)||i.isEqual(Y.min())?b.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?b.resolve(null):(vi()<=re.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ei(n)),this.Ds(e,o,n,w1(i,zo)).next(l=>l))})}Ss(e,n){let r=new be(Xw(e));return n.forEach((i,s)=>{Fu(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return vi()<=re.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ei(n)),this.fs.getDocumentsMatchingQuery(e,n,yr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="LocalStore",iN=3e8;class sN{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new ye(ee),this.Fs=new fi(s=>Uf(s),jf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kx(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function oN(t,e,n,r){return new sN(t,e,n,r)}async function T0(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ns:c,removedBatchIds:o,addedBatchIds:l}))})})}function aN(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let S=b.resolve();return m.forEach(C=>{S=S.next(()=>f.getEntry(u,C)).next(N=>{const x=c.docVersions.get(C);oe(x!==null,48541),N.version.compareTo(x)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),f.addEntry(N)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function I0(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function lN(t,e){const n=J(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,p)));let S=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(Ke.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(p,S),function(N,x,w){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=iN?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,S,f)&&l.push(n.li.updateTargetData(s,S))});let u=kn(),c=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(uN(s,o,e.documentUpdates).next(f=>{u=f.Bs,c=f.Ls})),!r.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=i,s))}function uN(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=kn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(Yf,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function cN(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=bf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hN(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function gd(t,e,n){const r=J(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_s(o))throw o;$(Yf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function jy(t,e,n){const r=J(t);let i=Y.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=J(u),m=p.Fs.get(f);return m!==void 0?b.resolve(p.vs.get(m)):p.li.getTargetData(c,f)}(r,o,rn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:te())).next(l=>(dN(r,Y1(e),l),{documents:l,ks:s})))}function dN(t,e,n){let r=t.Ms.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class zy{constructor(){this.activeTargetIds=nx()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fN{constructor(){this.vo=new zy,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new zy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="ConnectivityMonitor";class $y{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(By,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){$(By,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya=null;function yd(){return Ya===null?Ya=function(){return 268435456+Math.round(2147483648*Math.random())}():Ya++,"0x"+Ya.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="RestConnection",mN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class gN{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===tu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=yd(),l=this.Qo(e,n.toUriEncodedString());$(Jc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:c}=new URL(l),f=ia(c);return this.zo(e,l,u,r,f).then(p=>($(Jc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ai(Jc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=mN[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection",Gs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class qi extends gN{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!qi.c_){const e=Pw();Gs(e,Cw.STAT_EVENT,n=>{n.stat===sd.PROXY?$(Je,"STAT_EVENT: detected buffering proxy"):n.stat===sd.NOPROXY&&$(Je,"STAT_EVENT: detected no buffering proxy")}),qi.c_=!0}}zo(e,n,r,i,s){const o=yd();return new Promise((l,u)=>{const c=new Aw;c.setWithCredentials(!0),c.listenOnce(Rw.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case pl.NO_ERROR:const p=c.getResponseJson();$(Je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case pl.TIMEOUT:$(Je,`RPC '${e}' ${o} timed out`),u(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case pl.HTTP_ERROR:const m=c.getStatus();if($(Je,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let S=c.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const N=function(w){const _=w.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(_)>=0?_:L.UNKNOWN}(C.status);u(new B(N,C.message))}else u(new B(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new B(L.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{$(Je,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(Je,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",f,r,15)})}T_(e,n,r){const i=yd(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");$(Je,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);this.I_(f);let p=!1,m=!1;const S=new yN({Jo:C=>{m?$(Je,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||($(Je,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),$(Je,`RPC '${e}' stream ${i} sending:`,C),f.send(C))},Ho:()=>f.close()});return Gs(f,to.EventType.OPEN,()=>{m||($(Je,`RPC '${e}' stream ${i} transport opened.`),S.i_())}),Gs(f,to.EventType.CLOSE,()=>{m||(m=!0,$(Je,`RPC '${e}' stream ${i} transport closed`),S.o_(),this.E_(f))}),Gs(f,to.EventType.ERROR,C=>{m||(m=!0,ai(Je,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),S.o_(new B(L.UNAVAILABLE,"The operation could not be completed")))}),Gs(f,to.EventType.MESSAGE,C=>{var N;if(!m){const x=C.data[0];oe(!!x,16349);const w=x,_=(w==null?void 0:w.error)||((N=w[0])==null?void 0:N.error);if(_){$(Je,`RPC '${e}' stream ${i} received error:`,_);const A=_.status;let O=function(v){const y=Pe[v];if(y!==void 0)return u0(y)}(A),F=_.message;A==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&ai(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),O===void 0&&(O=L.INTERNAL,F="Unknown error status: "+A+" with message "+_.message),m=!0,S.o_(new B(O,F)),f.close()}else $(Je,`RPC '${e}' stream ${i} received:`,x),S.__(x)}}),qi.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return kw()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){return new qi(t)}function Xc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t){return new Tx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qi.c_=!1;class S0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="PersistentStream";class A0{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new S0(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(Wy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():($(Wy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vN extends A0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Ax(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?sn(o.readTime):Y.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=md(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=cd(u)?{documents:Px(s,u)}:{query:kx(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=d0(s,o.resumeToken);const c=dd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=ou(s,o.snapshotVersion.toTimestamp());const c=dd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Nx(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=md(this.serializer),n.removeTarget=e,this.K_(n)}}class EN extends A0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Cx(e.writeResults,e.commitTime),r=sn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=md(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Rx(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{}class TN extends wN{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,fd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(L.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,fd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function IN(t,e,n,r){return new TN(t,e,n,r)}class SN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Pn(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="RemoteStore";class AN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new wr(1e3),this.Va=new wr(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{pi(this)&&($(un,"Restarting streams for network reachability change."),await async function(u){const c=J(u);c.da.add(4),await fa(c),c.ga.set("Unknown"),c.da.delete(4),await Bu(c)}(this))})}),this.ga=new SN(r,i)}}async function Bu(t){if(pi(t))for(const e of t.ma)await e(!0)}async function fa(t){for(const e of t.ma)await e(!1)}function _d(t,e){return t.Ea.get(e)||void 0}function R0(t,e){const n=J(t),r=_d(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(l,u){const c=_d(l,u);c!==void 0&&l.Ra.delete(c);const f=function(m,S){return S%2!=0?m.Va.next():m.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);$(un,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new yn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),ep(n)?Zf(n):Es(n).O_()&&Xf(n,s)}function Jf(t,e){const n=J(t),r=Es(n),i=_d(n,e);$(un,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&C0(n,i),n.Ia.size===0&&(r.O_()?r.L_():pi(n)&&n.ga.set("Unknown"))}function Xf(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void $(un,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}Es(t).Z_(e)}function C0(t,e){t.pa.$e(e),Es(t).X_(e)}function Zf(t){t.pa=new _x({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):te()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Es(t).start(),t.ga.ua()}function ep(t){return pi(t)&&!Es(t).x_()&&t.Ia.size>0}function pi(t){return J(t).da.size===0}function P0(t){t.pa=void 0}async function RN(t){t.ga.set("Online")}async function CN(t){t.Ia.forEach((e,n)=>{Xf(t,e)})}async function PN(t,e){P0(t),ep(t)?(t.ga.ha(e),Zf(t)):t.ga.set("Unknown")}async function kN(t,e,n){if(t.ga.set("Online"),e instanceof h0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds){if(i.Ia.has(l)){const u=i.Ra.get(l);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ea.delete(u),i.Ra.delete(l)),i.Ia.delete(l)}i.pa.removeTarget(l)}}(t,e)}catch(r){$(un,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lu(t,r)}else if(e instanceof _l?t.pa.Xe(e):e instanceof c0?t.pa.st(e):t.pa.tt(e),!n.isEqual(Y.min()))try{const r=await I0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.pa.Tt(o);l.targetChanges.forEach((c,f)=>{if(c.resumeToken.approximateByteSize()>0){const p=s.Ia.get(f);p&&s.Ia.set(f,p.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,f)=>{const p=s.Ia.get(c);if(!p)return;s.Ia.set(c,p.withResumeToken(Ke.EMPTY_BYTE_STRING,p.snapshotVersion)),C0(s,c);const m=new yn(p.target,c,f,p.sequenceNumber);Xf(s,m)});const u=function(f,p){const m=new Map;p.targetChanges.forEach((C,N)=>{const x=f.Ra.get(N);x!==void 0&&m.set(x,C)});let S=new ye(ee);return p.targetMismatches.forEach((C,N)=>{const x=f.Ra.get(C);x!==void 0&&(S=S.insert(x,N))}),new ha(p.snapshotVersion,m,S,p.documentUpdates,p.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){$(un,"Failed to raise snapshot:",r),await lu(t,r)}}async function lu(t,e,n){if(!_s(e))throw e;t.da.add(1),await fa(t),t.ga.set("Offline"),n||(n=()=>I0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(un,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Bu(t)})}function k0(t,e){return e().catch(n=>lu(t,n,e))}async function $u(t){const e=J(t),n=Tr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:bf;for(;xN(e);)try{const i=await cN(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,NN(e,i)}catch(i){await lu(e,i)}x0(e)&&N0(e)}function xN(t){return pi(t)&&t.Ta.length<10}function NN(t,e){t.Ta.push(e);const n=Tr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function x0(t){return pi(t)&&!Tr(t).x_()&&t.Ta.length>0}function N0(t){Tr(t).start()}async function DN(t){Tr(t).ra()}async function VN(t){const e=Tr(t);for(const n of t.Ta)e.ea(n.mutations)}async function ON(t,e,n){const r=t.Ta.shift(),i=Wf.from(r,e,n);await k0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await $u(t)}async function LN(t,e){e&&Tr(t).Y_&&await async function(r,i){if(function(o){return mx(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();Tr(r).B_(),await k0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await $u(r)}}(t,e),x0(t)&&N0(t)}async function qy(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),$(un,"RemoteStore received new credentials");const r=pi(n);n.da.add(3),await fa(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Bu(n)}async function bN(t,e){const n=J(t);e?(n.da.delete(2),await Bu(n)):e||(n.da.add(2),await fa(n),n.ga.set("Unknown"))}function Es(t){return t.ya||(t.ya=function(n,r,i){const s=J(n);return s.sa(),new vN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:RN.bind(null,t),Yo:CN.bind(null,t),t_:PN.bind(null,t),H_:kN.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),ep(t)?Zf(t):t.ga.set("Unknown")):(await t.ya.stop(),P0(t))})),t.ya}function Tr(t){return t.wa||(t.wa=function(n,r,i){const s=J(n);return s.sa(),new EN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:DN.bind(null,t),t_:LN.bind(null,t),ta:VN.bind(null,t),na:ON.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await $u(t)):(await t.wa.stop(),t.Ta.length>0&&($(un,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new tp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function np(t,e){if(Pn("AsyncQueue",`${e}: ${t}`),_s(t))return new B(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{static emptySet(e){return new Hi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=no(),this.sortedSet=new ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.Sa=new ye(H.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):G(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class os{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new os(e,n,Hi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class FN{constructor(){this.queries=Ky(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=Ky(),s.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new B(L.ABORTED,"Firestore shutting down"))}}function Ky(){return new fi(t=>Jw(t),Mu)}async function D0(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new MN,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=np(o,`Initialization of query '${Ei(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&rp(n)}async function V0(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.va.indexOf(e);o>=0&&(s.va.splice(o,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function UN(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.va)l.Na(i)&&(r=!0);o.Ca=i}}r&&rp(n)}function jN(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function rp(t){t.xa.forEach(e=>{e.next()})}var vd,Gy;(Gy=vd||(vd={})).Ba="default",Gy.Cache="cache";class O0{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==vd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.key=e}}class b0{constructor(e){this.key=e}}class zN{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=te(),this.mutatedKeys=te(),this.iu=Xw(e),this.su=new Hi(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Hy,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),S=Fu(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),N=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let x=!1;m&&S?m.data.isEqual(S.data)?C!==N&&(r.track({type:3,doc:S}),x=!0):this.uu(m,S)||(r.track({type:2,doc:S}),x=!0,(u&&this.iu(S,u)>0||c&&this.iu(S,c)<0)&&(l=!0)):!m&&S?(r.track({type:0,doc:S}),x=!0):m&&!S&&(r.track({type:1,doc:m}),x=!0,(u||c)&&(l=!0)),x&&(S?(o=o.add(S),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,p)=>function(S,C){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:x})}};return N(S)-N(C)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),i=i??!1;const l=n&&!i?this.lu():[],u=this.ru.size===0&&this.current&&!i?1:0,c=u!==this.nu;return this.nu=u,o.length!==0||c?{snapshot:new os(this.query,e.su,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Hy,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=te(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new b0(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new L0(r))}),n}Tu(e){this.tu=e.ks,this.ru=te();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return os.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const ip="SyncEngine";class BN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $N{constructor(e){this.key=e,this.Eu=!1}}class WN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new fi(l=>Jw(l),Mu),this.Vu=new Map,this.du=new Set,this.mu=new ye(H.comparator),this.fu=new Map,this.gu=new Kf,this.pu={},this.yu=new Map,this.wu=wr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function qN(t,e,n=!0){const r=B0(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await M0(r,e,n,!0),i}async function HN(t,e){const n=B0(t);await M0(n,e,!0,!1)}async function M0(t,e,n,r){const i=await hN(t.localStore,rn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await KN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&R0(t.remoteStore,i),l}async function KN(t,e,n,r,i){t.bu=(p,m,S)=>async function(N,x,w,_){let A=x.view._u(w);A.bs&&(A=await jy(N.localStore,x.query,!1).then(({documents:v})=>x.view._u(v,A)));const O=_&&_.targetChanges.get(x.targetId),F=_&&_.targetMismatches.get(x.targetId)!=null,z=x.view.applyChanges(A,N.isPrimaryClient,O,F);return Yy(N,x.targetId,z.hu),z.snapshot}(t,p,m,S);const s=await jy(t.localStore,e,!0),o=new zN(e,s.ks),l=o._u(s.documents),u=da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Yy(t,n,c.hu);const f=new BN(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),c.snapshot}async function GN(t,e,n){const r=J(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(o=>!Mu(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Jf(r.remoteStore,i.targetId),Ed(r,i.targetId)}).catch(ys)):(Ed(r,i.targetId),await gd(r.localStore,i.targetId,!0))}async function QN(t,e){const n=J(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jf(n.remoteStore,r.targetId))}async function YN(t,e,n){const r=rD(t);try{const i=await function(o,l){const u=J(o),c=fe.now(),f=l.reduce((S,C)=>S.add(C.key),te());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=kn(),N=te();return u.xs.getEntries(S,f).next(x=>{C=x,C.forEach((w,_)=>{_.isValidDocument()||(N=N.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(x=>{p=x;const w=[];for(const _ of l){const A=cx(_,p.get(_.key).overlayedDocument);A!=null&&w.push(new Nr(_.key,A,$w(A.value.mapValue),Bt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,w,l)}).next(x=>{m=x;const w=x.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(S,x.batchId,w)})}).then(()=>({batchId:m.batchId,changes:e0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.pu[o.currentUser.toKey()];c||(c=new ye(ee)),c=c.insert(l,u),o.pu[o.currentUser.toKey()]=c}(r,i.batchId,n),await pa(r,i.changes),await $u(r.remoteStore)}catch(i){const s=np(i,"Failed to persist write");n.reject(s)}}async function F0(t,e){const n=J(t);try{const r=await lN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fu.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Eu=!0:i.modifiedDocuments.size>0?oe(o.Eu,14607):i.removedDocuments.size>0&&(oe(o.Eu,42227),o.Eu=!1))}),await pa(n,r,e)}catch(r){await ys(r)}}function Qy(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,o)=>{const l=o.view.Oa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.va)m.Oa(l)&&(c=!0)}),c&&rp(u)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JN(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let o=new ye(H.comparator);o=o.insert(s,et.newNoDocument(s,Y.min()));const l=te().add(s),u=new ha(Y.min(),new Map,new ye(ee),o,l);await F0(r,u),r.mu=r.mu.remove(s),r.fu.delete(e),sp(r)}else await gd(r.localStore,e,!1).then(()=>Ed(r,e,n)).catch(ys)}async function XN(t,e){const n=J(t),r=e.batch.batchId;try{const i=await aN(n.localStore,e);j0(n,r,null),U0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pa(n,i)}catch(i){await ys(i)}}async function ZN(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(oe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);j0(r,e,n),U0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pa(r,i)}catch(i){await ys(i)}}function U0(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function j0(t,e,n){const r=J(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function Ed(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||z0(t,r)})}function z0(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(Jf(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),sp(t))}function Yy(t,e,n){for(const r of n)r instanceof L0?(t.gu.addReference(r.key,e),eD(t,r)):r instanceof b0?($(ip,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||z0(t,r.key)):G(19791,{Cu:r})}function eD(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||($(ip,"New document in limbo: "+n),t.du.add(r),sp(t))}function sp(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new H(ue.fromString(e)),r=t.wu.next();t.fu.set(r,new $N(n)),t.mu=t.mu.insert(n,r),R0(t.remoteStore,new yn(rn(zf(n.path)),r,"TargetPurposeLimboResolution",Ou.ce))}}async function pa(t,e,n){const r=J(t),i=[],s=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Qf.Es(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ru.H_(i),await async function(u,c){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(c,m=>b.forEach(m.Ts,S=>f.persistence.referenceDelegate.addReference(p,m.targetId,S)).next(()=>b.forEach(m.Is,S=>f.persistence.referenceDelegate.removeReference(p,m.targetId,S)))))}catch(p){if(!_s(p))throw p;$(Yf,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const S=f.vs.get(m),C=S.snapshotVersion,N=S.withLastLimboFreeSnapshotVersion(C);f.vs=f.vs.insert(m,N)}}}(r.localStore,s))}async function tD(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){$(ip,"User change. New user:",e.toKey());const r=await T0(n.localStore,e);n.currentUser=e,function(s,o){s.yu.forEach(l=>{l.forEach(u=>{u.reject(new B(L.CANCELLED,o))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pa(n,r.Ns)}}function nD(t,e){const n=J(t),r=n.fu.get(e);if(r&&r.Eu)return te().add(r.key);{let i=te();const s=n.Vu.get(e);if(!s)return i;for(const o of s){const l=n.Au.get(o);i=i.unionWith(l.view.ou)}return i}}function B0(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=F0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JN.bind(null,e),e.Ru.H_=UN.bind(null,e.eventManager),e.Ru.Du=jN.bind(null,e.eventManager),e}function rD(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZN.bind(null,e),e}class uu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zu(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return oN(this.persistence,new rN,e.initialUser,this.serializer)}xu(e){return new w0(Gf.Vi,this.serializer)}Mu(e){return new fN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uu.provider={build:()=>new uu};class iD extends uu{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){oe(this.persistence.referenceDelegate instanceof au,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Bx(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new w0(r=>au.Vi(r,n),this.serializer)}}class wd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tD.bind(null,this.syncEngine),await bN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FN}()}createDatastore(e){const n=zu(e.databaseInfo.databaseId),r=_N(e.databaseInfo);return IN(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new AN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Qy(this.syncEngine,n,0),function(){return $y.v()?new $y:new pN}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new WN(i,s,o,l,u,c);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);$(un,"RemoteStore shutting down."),s.da.add(5),await fa(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}wd.provider={build:()=>new wd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Pn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="FirestoreClient";class sD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=Lf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(Ir,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Ir,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=np(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zc(t,e){t.asyncQueue.verifyOperationInProgress(),$(Ir,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await T0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oD(t);$(Ir,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>qy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>qy(e.remoteStore,i)),t._onlineComponents=e}async function oD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(Ir,"Using user provided OfflineComponentProvider");try{await Zc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ai("Error using user provided cache. Falling back to memory cache: "+n),await Zc(t,new uu)}}else $(Ir,"Using default OfflineComponentProvider"),await Zc(t,new iD(void 0));return t._offlineComponents}async function W0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(Ir,"Using user provided OnlineComponentProvider"),await Jy(t,t._uninitializedComponentsProvider._online)):($(Ir,"Using default OnlineComponentProvider"),await Jy(t,new wd))),t._onlineComponents}function aD(t){return W0(t).then(e=>e.syncEngine)}async function q0(t){const e=await W0(t),n=e.eventManager;return n.onListen=qN.bind(null,e.syncEngine),n.onUnlisten=GN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QN.bind(null,e.syncEngine),n}function lD(t,e,n={}){const r=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new $0({next:m=>{f.Ku(),o.enqueueAndForget(()=>V0(s,p));const S=m.docs.has(l);!S&&m.fromCache?c.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&m.fromCache&&u&&u.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new O0(zf(l.path),f,{includeMetadataChanges:!0,Wa:!0});return D0(s,p)}(await q0(t),t.asyncQueue,e,n,r)),r.promise}function uD(t,e,n={}){const r=new wn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new $0({next:m=>{f.Ku(),o.enqueueAndForget(()=>V0(s,p)),m.fromCache&&u.source==="server"?c.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new O0(l,f,{includeMetadataChanges:!0,Wa:!0});return D0(s,p)}(await q0(t),t.asyncQueue,e,n,r)),r.promise}function cD(t,e){const n=new wn;return t.asyncQueue.enqueueAndForget(async()=>YN(await aD(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD="ComponentProvider",Xy=new Map;function dD(t,e,n,r,i){return new N1(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,H0(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="firestore.googleapis.com",Zy=!0;class e_{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=K0,this.ssl=Zy}else this.host=e.host,this.ssl=e.ssl??Zy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=E0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jx)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}E1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=H0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new e_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new e_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new c1;switch(r.type){case"firstParty":return new p1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xy.get(n);r&&($(hD,"Removing Datastore"),Xy.delete(n),r.terminate())}(this),Promise.resolve()}}function fD(t,e,n,r={}){var c;t=an(t,Wu);const i=ia(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&ME(`https://${l}`),s.host!==K0&&s.host!==l&&ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!ni(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Xe.MOCK_USER;else{f=wR(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Xe(m)}t._authCredentials=new h1(new Nw(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dr(this.firestore,e,this._query)}}class Re{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}toJSON(){return{type:Re._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ua(n,Re._jsonSchema))return new Re(e,r||null,new H(ue.fromString(n.referencePath)))}}Re._jsonSchemaVersion="firestore/documentReference/1.0",Re._jsonSchema={type:Ne("string",Re._jsonSchemaVersion),referencePath:Ne("string")};class pr extends Dr{constructor(e,n,r){super(e,n,zf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new H(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function _n(t,e,...n){if(t=Me(t),Dw("collection","path",e),t instanceof Wu){const r=ue.fromString(e,...n);return fy(r),new pr(t,null,r)}{if(!(t instanceof Re||t instanceof pr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return fy(r),new pr(t.firestore,null,r)}}function as(t,e,...n){if(t=Me(t),arguments.length===1&&(e=Lf.newId()),Dw("doc","path",e),t instanceof Wu){const r=ue.fromString(e,...n);return dy(r),new Re(t,null,new H(r))}{if(!(t instanceof Re||t instanceof pr))throw new B(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return dy(r),new Re(t.firestore,t instanceof pr?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="AsyncQueue";class n_{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new S0(this,"async_queue_retry"),this.lc=()=>{const r=Xc();r&&$(t_,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=Xc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Xc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new wn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!_s(e))throw e;$(t_,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Pn("INTERNAL UNHANDLED ERROR: ",r_(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=tp.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&G(47125,{Rc:r_(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function r_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ws extends Wu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new n_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new n_(e),this._firestoreClient=void 0,await e}}}function pD(t,e){const n=typeof t=="object"?t:zE(),r=typeof t=="string"?t:tu,i=Af(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vR("firestore");s&&fD(i,...s)}return i}function op(t){if(t._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||mD(t),t._firestoreClient}function mD(t){var r,i,s,o;const e=t._freezeSettings(),n=dD(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new sD(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(Ke.fromBase64String(e))}catch(n){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kt(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ua(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:Ne("string",kt._jsonSchemaVersion),bytes:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:on._jsonSchemaVersion}}static fromJSON(e){if(ua(e,on._jsonSchema))return new on(e.latitude,e.longitude)}}on._jsonSchemaVersion="firestore/geoPoint/1.0",on._jsonSchema={type:Ne("string",on._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:$t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ua(e,$t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new $t(e.vectorValues);throw new B(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$t._jsonSchemaVersion="firestore/vectorValue/1.0",$t._jsonSchema={type:Ne("string",$t._jsonSchemaVersion),vectorValues:Ne("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=/^__.*__$/;class yD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ca(e,this.data,n,this.fieldTransforms)}}class G0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Q0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:t})}}class lp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new lp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return cu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Q0(this.dataSource)&&gD.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class _D{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zu(e)}V(e,n,r,i=!1){return new lp({dataSource:e,methodName:n,targetDoc:r,path:We.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function up(t){const e=t._freezeSettings(),n=zu(t._databaseId);return new _D(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vD(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);hp("Data must be an object, but it was:",o,r);const l=Y0(r,o);let u,c;if(s.merge)u=new Et(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=li(e,p,n);if(!o.contains(m))throw new B(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Z0(f,m)||f.push(m)}u=new Et(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new yD(new dt(l),u,c)}class Hu extends qu{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hu}}class cp extends qu{_toFieldTransform(e){return new ox(e.path,new Ho)}isEqual(e){return e instanceof cp}}function ED(t,e,n,r){const i=t.V(1,e,n);hp("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();xr(r,(u,c)=>{const f=X0(e,u,n);c=Me(c);const p=i.Sc(f);if(c instanceof Hu)s.push(f);else{const m=ma(c,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new Et(s);return new G0(o,l,i.fieldTransforms)}function wD(t,e,n,r,i,s){const o=t.V(1,e,n),l=[li(e,r,n)],u=[i];if(s.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(li(e,s[m])),u.push(s[m+1]);const c=[],f=dt.empty();for(let m=l.length-1;m>=0;--m)if(!Z0(c,l[m])){const S=l[m];let C=u[m];C=Me(C);const N=o.Sc(S);if(C instanceof Hu)c.push(S);else{const x=ma(C,N);x!=null&&(c.push(S),f.set(S,x))}}const p=new Et(c);return new G0(f,p,o.fieldTransforms)}function TD(t,e,n,r=!1){return ma(n,t.V(r?4:3,e))}function ma(t,e){if(J0(t=Me(t)))return hp("Unsupported field value:",e,t),Y0(t,e);if(t instanceof qu)return function(r,i){if(!Q0(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ma(l,i.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:ou(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ou(i.serializer,s)}}if(r instanceof on)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kt)return{bytesValue:d0(i.serializer,r._byteString)};if(r instanceof Re){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof $t)return function(o,l){const u=o instanceof $t?o.toArray():o;return{mapValue:{fields:{[zw]:{stringValue:Bw},[nu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return Bf(l.serializer,f)})}}}}}}(r,i);if(v0(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${Vu(r)}`)}(t,e)}function Y0(t,e){const n={};return Lw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xr(t,(r,i)=>{const s=ma(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function J0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof on||t instanceof kt||t instanceof Re||t instanceof qu||t instanceof $t||v0(t))}function hp(t,e,n){if(!J0(n)||!Vw(n)){const r=Vu(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function li(t,e,n){if((e=Me(e))instanceof ap)return e._internalPath;if(typeof e=="string")return X0(t,e);throw cu("Field path arguments must be of type string or ",t,!1,void 0,n)}const ID=new RegExp("[~\\*/\\[\\]]");function X0(t,e,n){if(e.search(ID)>=0)throw cu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ap(...e.split("."))._internalPath}catch{throw cu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(L.INVALID_ARGUMENT,l+t+u)}function Z0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[nu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Se(o.doubleValue));return new $t(n)}convertGeoPoint(e){return new on(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Bo(e));default:return null}}convertTimestamp(e){const n=_r(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);oe(_0(r),9688,{name:e});const i=new $o(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Pn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT extends SD{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,n)}}function AD(){return new cp("serverTimestamp")}const i_="@firebase/firestore",s_="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(li("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RD extends tT{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dp{}class fp extends dp{}function Qo(t,e,...n){let r=[];e instanceof dp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof pp).length,l=s.filter(u=>u instanceof Ku).length;if(o>1||o>0&&l>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ku extends fp{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ku(e,n,r)}_apply(e){const n=this._parse(e);return nT(e._query,n),new Dr(e.firestore,e.converter,hd(e._query,n))}_parse(e){const n=up(e.firestore);return function(s,o,l,u,c,f,p){let m;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){a_(p,f);const C=[];for(const N of p)C.push(o_(u,s,N));m={arrayValue:{values:C}}}else m=o_(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||a_(p,f),m=TD(l,o,p,f==="in"||f==="not-in");return xe.create(c,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function hu(t,e,n){const r=e,i=li("where",t);return Ku._create(i,r,n)}class pp extends dp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new pp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ht.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)nT(o,u),o=hd(o,u)}(e._query,n),new Dr(e.firestore,e.converter,hd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mp extends fp{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new mp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qo(s,o)}(e._query,this._field,this._direction);return new Dr(e.firestore,e.converter,Q1(e._query,n))}}function PD(t,e="asc"){const n=e,r=li("orderBy",t);return mp._create(r,n)}class gp extends fp{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new gp(e,n,r)}_apply(e){return new Dr(e.firestore,e.converter,iu(e._query,this._limit,this._limitType))}}function kD(t){return gp._create("limit",t,"F")}function o_(t,e,n){if(typeof(n=Me(n))=="string"){if(n==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yw(e)&&n.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!H.isDocumentKey(r))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wy(t,new H(r))}if(n instanceof Re)return wy(t,n._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vu(n)}.`)}function a_(t,e){if(!Array.isArray(t)||t.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function nT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function xD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yr extends tT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(li("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Yr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Yr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Yr._jsonSchema={type:Ne("string",Yr._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class vl extends Yr{data(e={}){return super.data(e)}}class Ki{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new io(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new vl(this._firestore,this._userDataWriter,r.key,r,new io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new vl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new vl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:ND(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ki._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ND(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ki._jsonSchemaVersion="firestore/querySnapshot/1.0",Ki._jsonSchema={type:Ne("string",Ki._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(t){t=an(t,Re);const e=an(t.firestore,ws),n=op(e);return lD(n,t._key).then(r=>OD(e,t,r))}function er(t){t=an(t,Dr);const e=an(t.firestore,ws),n=op(e),r=new eT(e);return CD(t._query),uD(n,t._query).then(i=>new Ki(e,r,t,i))}function rT(t,e,n){t=an(t,Re);const r=an(t.firestore,ws),i=xD(t.converter,e),s=up(r);return yp(r,[vD(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Bt.none())])}function VD(t,e,n,...r){t=an(t,Re);const i=an(t.firestore,ws),s=up(i);let o;return o=typeof(e=Me(e))=="string"||e instanceof ap?wD(s,"updateDoc",t._key,e,n,r):ED(s,"updateDoc",t._key,e),yp(i,[o.toMutation(t._key,Bt.exists(!0))])}function Td(t){return yp(an(t.firestore,ws),[new $f(t._key,Bt.none())])}function yp(t,e){const n=op(t);return cD(n,e)}function OD(t,e,n){const r=n.docs.get(e._key),i=new eT(t);return new Yr(t,i,e._key,r,new io(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){u1(ps),ts(new ri("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ws(new d1(r.getProvider("auth-internal")),new m1(o,r.getProvider("app-check-internal")),D1(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),dr(i_,s_,e),dr(i_,s_,"esm2020")})();var LD="firebase",bD="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr(LD,bD,"app");const MD={apiKey:"AIzaSyD8Njd86Md8JF9wp4KNrLWdjgKBJeNwCW4",authDomain:"steptracker-f5940.firebaseapp.com",projectId:"steptracker-f5940",storageBucket:"steptracker-f5940.firebasestorage.app",messagingSenderId:"33755841143",appId:"1:33755841143:web:d7f69852d038bbc0e4fc72"},iT=jE(MD),ui=a1(iT),ot=pD(iT);function FD(){const t=ta(),[e,n]=U.useState({email:"",password:""}),[r,i]=U.useState(""),[s,o]=U.useState(!1);async function l(u){u.preventDefault(),i(""),o(!0);try{await WP(ui,e.email,e.password),t("/")}catch{i("Invalid email or password")}finally{o(!1)}}return k.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 px-4",children:k.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-sm border border-gray-200 w-full max-w-sm",children:[k.jsx("h1",{className:"text-2xl font-bold text-center mb-1",children:"🏃 StepTracker"}),k.jsx("p",{className:"text-center text-gray-500 text-sm mb-6",children:"Company Step Challenge"}),r&&k.jsx("div",{className:"mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm",children:r}),k.jsxs("form",{onSubmit:l,className:"space-y-4",children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),k.jsx("input",{type:"email",required:!0,value:e.email,onChange:u=>n({...e,email:u.target.value}),className:"w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500",placeholder:"you@company.com"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Password"}),k.jsx("input",{type:"password",required:!0,value:e.password,onChange:u=>n({...e,password:u.target.value}),className:"w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500",placeholder:"••••••••"})]}),k.jsx("button",{type:"submit",disabled:s,className:"w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50",children:s?"Signing in...":"Sign In"})]}),k.jsxs("p",{className:"text-center text-sm text-gray-500 mt-4",children:["No account?"," ",k.jsx(Wn,{to:"/register",className:"text-brand-600 hover:underline font-medium",children:"Register here"})]})]})})}function UD(){const t=ta(),[e,n]=U.useState({name:"",email:"",password:""}),[r,i]=U.useState(""),[s,o]=U.useState(!1);async function l(u){u.preventDefault(),i(""),o(!0);try{const{user:c}=await $P(ui,e.email,e.password);await HP(c,{displayName:e.name}),await rT(as(ot,"users",c.uid),{name:e.name,email:e.email.toLowerCase(),role:"user",createdAt:AD()}),t("/")}catch(c){c.code==="auth/email-already-in-use"?i("Email already registered"):c.code==="auth/weak-password"?i("Password must be at least 6 characters"):i("Registration failed. Please try again.")}finally{o(!1)}}return k.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 px-4",children:k.jsxs("div",{className:"bg-white p-8 rounded-xl shadow-sm border border-gray-200 w-full max-w-sm",children:[k.jsx("h1",{className:"text-2xl font-bold text-center mb-1",children:"🏃 StepTracker"}),k.jsx("p",{className:"text-center text-gray-500 text-sm mb-6",children:"Create your account"}),r&&k.jsx("div",{className:"mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm",children:r}),k.jsxs("form",{onSubmit:l,className:"space-y-4",children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Full Name"}),k.jsx("input",{type:"text",required:!0,value:e.name,onChange:u=>n({...e,name:u.target.value}),className:"w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500",placeholder:"Jane Smith"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),k.jsx("input",{type:"email",required:!0,value:e.email,onChange:u=>n({...e,email:u.target.value}),className:"w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500",placeholder:"you@company.com"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Password"}),k.jsx("input",{type:"password",required:!0,value:e.password,onChange:u=>n({...e,password:u.target.value}),className:"w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500",placeholder:"Min. 6 characters"})]}),k.jsx("button",{type:"submit",disabled:s,className:"w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50",children:s?"Creating account...":"Create Account"})]}),k.jsxs("p",{className:"text-center text-sm text-gray-500 mt-4",children:["Already have an account?"," ",k.jsx(Wn,{to:"/login",className:"text-brand-600 hover:underline font-medium",children:"Sign in"})]})]})})}function Ja({label:t,value:e,sub:n}){return k.jsxs("div",{className:"bg-white rounded-lg p-3 border border-gray-200 shadow-sm",children:[k.jsx("p",{className:"text-xs text-gray-500",children:t}),k.jsx("p",{className:"text-xl font-bold text-gray-900 mt-0.5",children:typeof e=="number"?e.toLocaleString():e}),n&&k.jsx("p",{className:"text-xs text-gray-400",children:n})]})}function jD(){const t=ui.currentUser,[e,n]=U.useState([]),[r,i]=U.useState({today:0,week:0,month:0,rank:1}),[s,o]=U.useState({date:new Date().toISOString().split("T")[0],steps:""}),[l,u]=U.useState(""),[c,f]=U.useState("");async function p(){if(!t)return;const C=Qo(_n(ot,"stepEntries"),hu("userId","==",t.uid),PD("date","desc"),kD(90)),x=(await er(C)).docs.map(P=>({id:P.id,...P.data()}));n(x);const w=new Date().toISOString().split("T")[0],_=new Date(Date.now()-7*864e5).toISOString().split("T")[0],A=new Date(new Date().getFullYear(),new Date().getMonth(),1).toISOString().split("T")[0],O=x.find(P=>P.date===w),F=x.filter(P=>P.date>=_).reduce((P,T)=>P+T.steps,0),z=x.filter(P=>P.date>=A).reduce((P,T)=>P+T.steps,0),v=Qo(_n(ot,"stepEntries"),hu("date",">=",A)),y=await er(v),E={};y.docs.forEach(P=>{const{userId:T,steps:De}=P.data();E[T]=(E[T]||0)+De});const I=E[t.uid]||0,R=Object.values(E).filter(P=>P>I).length+1;i({today:(O==null?void 0:O.steps)??0,week:F,month:z,rank:R})}U.useEffect(()=>{p()},[]);async function m(C){C.preventDefault(),u(""),f("");try{const N=`${t.uid}_${s.date}`;await rT(as(ot,"stepEntries",N),{userId:t.uid,date:s.date,steps:parseInt(s.steps),updatedAt:new Date().toISOString()}),u("Steps saved!"),o({...s,steps:""}),p()}catch{f("Failed to save steps. Try again.")}}async function S(C){confirm("Delete this entry?")&&(await Td(as(ot,"stepEntries",C)),p())}return k.jsxs("div",{className:"space-y-6",children:[k.jsx("h2",{className:"text-2xl font-bold",children:"My Dashboard"}),k.jsxs("div",{className:"grid grid-cols-2 gap-3 sm:grid-cols-4",children:[k.jsx(Ja,{label:"Today",value:r.today,sub:"steps"}),k.jsx(Ja,{label:"This Week",value:r.week,sub:"steps"}),k.jsx(Ja,{label:"This Month",value:r.month,sub:"steps"}),k.jsx(Ja,{label:"My Rank",value:`#${r.rank}`,sub:"this month"})]}),k.jsxs("div",{className:"bg-white rounded-xl p-5 border border-gray-200 shadow-sm",children:[k.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Log My Steps"}),l&&k.jsx("div",{className:"mb-3 p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium",children:l}),c&&k.jsx("div",{className:"mb-3 p-3 bg-red-50 text-red-700 rounded-lg text-sm",children:c}),k.jsxs("form",{onSubmit:m,className:"flex flex-col gap-4",children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Date"}),k.jsx("input",{type:"date",value:s.date,max:new Date().toISOString().split("T")[0],onChange:C=>o({...s,date:C.target.value}),className:"w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-500"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Steps"}),k.jsx("input",{type:"number",required:!0,min:"0",max:"100000",value:s.steps,onChange:C=>o({...s,steps:C.target.value}),className:"w-full border border-gray-300 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand-500",placeholder:"e.g. 8500"})]}),k.jsx("button",{type:"submit",className:"bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-5 rounded-xl transition-colors text-base w-full",children:"💾 Save Steps"})]})]}),k.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden",children:[k.jsx("div",{className:`px-6 py-4 ${e.length>0?"border-b border-gray-100":""}`,children:k.jsx("h3",{className:"text-lg font-semibold",children:"Recent Entries"})}),e.length===0?k.jsx("p",{className:"px-6 py-8 text-center text-gray-400",children:"No steps logged yet. Start tracking!"}):k.jsxs("table",{className:"w-full text-sm",children:[k.jsx("thead",{className:"bg-gray-50",children:k.jsxs("tr",{children:[k.jsx("th",{className:"text-left px-6 py-3 text-gray-500 font-medium",children:"Date"}),k.jsx("th",{className:"text-right px-6 py-3 text-gray-500 font-medium",children:"Steps"}),k.jsx("th",{className:"px-6 py-3"})]})}),k.jsx("tbody",{className:"divide-y divide-gray-100",children:e.map(C=>k.jsxs("tr",{className:"hover:bg-gray-50",children:[k.jsx("td",{className:"px-6 py-3 text-gray-700",children:C.date}),k.jsx("td",{className:"px-6 py-3 text-right font-semibold text-gray-900",children:C.steps.toLocaleString()}),k.jsx("td",{className:"px-6 py-3 text-right",children:k.jsx("button",{onClick:()=>S(C.id),className:"text-xs text-red-400 hover:text-red-600",children:"Delete"})})]},C.id))})]})]})]})}const zD=[{value:"week",label:"This Week"},{value:"month",label:"This Month"},{value:"all",label:"All Time"}],BD=["🥇","🥈","🥉"];function $D(){const[t,e]=U.useState("month"),[n,r]=U.useState([]),[i,s]=U.useState(!0),o=ui.currentUser;return U.useEffect(()=>{async function l(){s(!0);let u=null;t==="week"?u=new Date(Date.now()-7*864e5).toISOString().split("T")[0]:t==="month"&&(u=new Date(new Date().getFullYear(),new Date().getMonth(),1).toISOString().split("T")[0]);let c=u?Qo(_n(ot,"stepEntries"),hu("date",">=",u)):Qo(_n(ot,"stepEntries"));const[f,p]=await Promise.all([er(c),er(_n(ot,"users"))]),m={};p.docs.forEach(x=>{m[x.id]=x.data().name});const S={},C={};f.docs.forEach(x=>{const{userId:w,steps:_}=x.data();S[w]=(S[w]||0)+_,C[w]=(C[w]||0)+1});const N=p.docs.map(x=>({id:x.id,name:x.data().name,total_steps:S[x.id]||0,days_logged:C[x.id]||0}));N.sort((x,w)=>w.total_steps-x.total_steps),r(N.map((x,w)=>({...x,rank:w+1}))),s(!1)}l()},[t]),k.jsxs("div",{className:"space-y-6",children:[k.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-3",children:[k.jsx("h2",{className:"text-2xl font-bold",children:"🏆 Leaderboard"}),k.jsx("div",{className:"flex gap-2 flex-wrap",children:zD.map(l=>k.jsx("button",{onClick:()=>e(l.value),className:`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${t===l.value?"bg-brand-600 text-white":"bg-white text-gray-600 border border-gray-300 hover:border-brand-500"}`,children:l.label},l.value))})]}),k.jsx("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm overflow-x-auto",children:i?k.jsx("p",{className:"px-6 py-12 text-center text-gray-400",children:"Loading..."}):k.jsxs("table",{className:"w-full text-sm",children:[k.jsx("thead",{className:"bg-gray-50",children:k.jsxs("tr",{children:[k.jsx("th",{className:"text-left px-6 py-3 text-gray-500 font-medium w-12",children:"Rank"}),k.jsx("th",{className:"text-left px-6 py-3 text-gray-500 font-medium",children:"Name"}),k.jsx("th",{className:"text-right px-6 py-3 text-gray-500 font-medium",children:"Days"}),k.jsx("th",{className:"text-right px-6 py-3 text-gray-500 font-medium",children:"Total Steps"})]})}),k.jsx("tbody",{className:"divide-y divide-gray-100",children:n.map(l=>k.jsxs("tr",{className:`transition-colors ${l.id===(o==null?void 0:o.uid)?"bg-brand-50":"hover:bg-gray-50"}`,children:[k.jsx("td",{className:"px-6 py-3 font-bold text-gray-700",children:l.rank<=3?BD[l.rank-1]:`#${l.rank}`}),k.jsxs("td",{className:"px-6 py-3 text-gray-900 font-medium",children:[l.name,l.id===(o==null?void 0:o.uid)&&k.jsx("span",{className:"ml-2 text-xs text-brand-600",children:"(you)"})]}),k.jsx("td",{className:"px-6 py-3 text-right text-gray-500",children:l.days_logged}),k.jsx("td",{className:"px-6 py-3 text-right font-bold text-gray-900",children:l.total_steps.toLocaleString()})]},l.id))})]})})]})}function WD(){const[t,e]=U.useState([]),[n,r]=U.useState("");async function i(){const c=(await er(_n(ot,"users"))).docs.map(f=>({id:f.id,...f.data()}));c.sort((f,p)=>f.name.localeCompare(p.name)),e(c)}U.useEffect(()=>{i()},[]);async function s(u){const c=u.role==="admin"?"user":"admin";await VD(as(ot,"users",u.id),{role:c}),i()}async function o(u){if(!confirm(`Delete ${u.name}? This will also delete all their step entries.`))return;const c=await er(Qo(_n(ot,"stepEntries"),hu("userId","==",u.id)));await Promise.all(c.docs.map(f=>Td(f.ref))),await Td(as(ot,"users",u.id)),r(`${u.name} deleted.`),i()}async function l(){const[u,c]=await Promise.all([er(_n(ot,"users")),er(_n(ot,"stepEntries"))]),f={};u.docs.forEach(x=>{f[x.id]=x.data()});let p=`Name,Email,Date,Steps
`;const m=c.docs.map(x=>({...x.data()})).sort((x,w)=>x.date>w.date?1:-1);p+=m.map(x=>{const w=f[x.userId]||{};return`"${w.name||""}","${w.email||""}","${x.date}",${x.steps}`}).join(`
`);const S=new Blob([p],{type:"text/csv"}),C=URL.createObjectURL(S),N=document.createElement("a");N.href=C,N.download="steps-export.csv",N.click()}return k.jsxs("div",{className:"space-y-6",children:[k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsx("h2",{className:"text-2xl font-bold",children:"Admin Panel"}),k.jsx("button",{onClick:l,className:"bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors",children:"Export CSV"})]}),n&&k.jsx("div",{className:"p-3 bg-green-50 text-green-700 rounded-lg text-sm",children:n}),k.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm overflow-x-auto",children:[k.jsx("div",{className:"px-6 py-4 border-b border-gray-100",children:k.jsxs("h3",{className:"font-semibold",children:["Users (",t.length,")"]})}),k.jsxs("table",{className:"w-full text-sm",children:[k.jsx("thead",{className:"bg-gray-50",children:k.jsxs("tr",{children:[k.jsx("th",{className:"text-left px-6 py-3 text-gray-500 font-medium",children:"Name"}),k.jsx("th",{className:"text-left px-6 py-3 text-gray-500 font-medium",children:"Email"}),k.jsx("th",{className:"text-left px-6 py-3 text-gray-500 font-medium",children:"Role"}),k.jsx("th",{className:"px-6 py-3"})]})}),k.jsx("tbody",{className:"divide-y divide-gray-100",children:t.map(u=>k.jsxs("tr",{className:"hover:bg-gray-50",children:[k.jsx("td",{className:"px-6 py-3 font-medium text-gray-900",children:u.name}),k.jsx("td",{className:"px-6 py-3 text-gray-500",children:u.email}),k.jsx("td",{className:"px-6 py-3",children:k.jsx("span",{className:`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${u.role==="admin"?"bg-purple-100 text-purple-700":"bg-gray-100 text-gray-600"}`,children:u.role})}),k.jsxs("td",{className:"px-6 py-3 text-right space-x-3",children:[k.jsx("button",{onClick:()=>s(u),className:"text-xs text-blue-500 hover:text-blue-700",children:u.role==="admin"?"Make User":"Make Admin"}),k.jsx("button",{onClick:()=>o(u),className:"text-xs text-red-400 hover:text-red-600",children:"Delete"})]})]},u.id))})]})]})]})}function qD({role:t}){const e=ta(),n=fs(),r=ui.currentUser,[i,s]=U.useState(!1);async function o(){await YP(ui),e("/login")}const l=u=>`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${n.pathname===u?"bg-brand-600 text-white":"text-gray-600 hover:text-gray-900 hover:bg-gray-100"}`;return k.jsx("nav",{className:"bg-white shadow-sm border-b border-gray-200",children:k.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[k.jsxs("div",{className:"flex items-center justify-between h-14",children:[k.jsx("span",{className:"text-lg font-bold text-brand-600",children:"🏃 StepTracker"}),k.jsxs("div",{className:"hidden sm:flex items-center gap-1",children:[k.jsx(Wn,{to:"/",className:l("/"),children:"My Steps"}),k.jsx(Wn,{to:"/leaderboard",className:l("/leaderboard"),children:"Leaderboard"}),t==="admin"&&k.jsx(Wn,{to:"/admin",className:l("/admin"),children:"Admin"})]}),k.jsxs("div",{className:"hidden sm:flex items-center gap-3",children:[k.jsx("span",{className:"text-sm text-gray-500",children:r==null?void 0:r.displayName}),k.jsx("button",{onClick:o,className:"text-sm text-gray-500 hover:text-red-600 transition-colors",children:"Logout"})]}),k.jsx("button",{onClick:()=>s(!i),className:"sm:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100",children:i?k.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):k.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:k.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),i&&k.jsxs("div",{className:"sm:hidden pb-3 space-y-1 border-t border-gray-100 pt-2",children:[k.jsx(Wn,{to:"/",onClick:()=>s(!1),className:l("/"),children:"My Steps"}),k.jsx(Wn,{to:"/leaderboard",onClick:()=>s(!1),className:l("/leaderboard"),children:"Leaderboard"}),t==="admin"&&k.jsx(Wn,{to:"/admin",onClick:()=>s(!1),className:l("/admin"),children:"Admin"}),k.jsxs("div",{className:"px-4 pt-2 pb-1 border-t border-gray-100 flex items-center justify-between",children:[k.jsx("span",{className:"text-sm text-gray-500",children:r==null?void 0:r.displayName}),k.jsx("button",{onClick:o,className:"text-sm text-red-500 hover:text-red-700 font-medium",children:"Logout"})]})]})]})})}function l_({user:t,children:e}){return t===void 0?k.jsx("div",{className:"flex items-center justify-center min-h-screen text-gray-400",children:"Loading..."}):t?e:k.jsx(ql,{to:"/login",replace:!0})}function HD({user:t,role:e,children:n}){return t===void 0?k.jsx("div",{className:"flex items-center justify-center min-h-screen text-gray-400",children:"Loading..."}):t?e!=="admin"?k.jsx(ql,{to:"/",replace:!0}):n:k.jsx(ql,{to:"/login",replace:!0})}function KD(){const[t,e]=U.useState(void 0),[n,r]=U.useState("user");return U.useEffect(()=>QP(ui,async s=>{if(s){const o=await DD(as(ot,"users",s.uid));r(o.exists()?o.data().role:"user"),e(s)}else e(null),r("user")}),[]),k.jsxs("div",{className:"min-h-screen",children:[t&&k.jsx(qD,{role:n}),k.jsx("main",{className:"max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-8",children:k.jsxs(eR,{children:[k.jsx(Br,{path:"/login",element:k.jsx(FD,{})}),k.jsx(Br,{path:"/register",element:k.jsx(UD,{})}),k.jsx(Br,{path:"/",element:k.jsx(l_,{user:t,children:k.jsx(jD,{})})}),k.jsx(Br,{path:"/leaderboard",element:k.jsx(l_,{user:t,children:k.jsx($D,{})})}),k.jsx(Br,{path:"/admin",element:k.jsx(HD,{user:t,role:n,children:k.jsx(WD,{})})}),k.jsx(Br,{path:"*",element:k.jsx(ql,{to:"/",replace:!0})})]})})]})}eh.createRoot(document.getElementById("root")).render(k.jsx(v_.StrictMode,{children:k.jsx(aR,{children:k.jsx(KD,{})})}));
