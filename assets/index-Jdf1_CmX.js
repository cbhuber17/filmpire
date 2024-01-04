var uN=Object.defineProperty;var UN=(A,B,Q)=>B in A?uN(A,B,{enumerable:!0,configurable:!0,writable:!0,value:Q}):A[B]=Q;var zc=(A,B,Q)=>(UN(A,typeof B!="symbol"?B+"":B,Q),Q);function fN(A,B){for(var Q=0;Q<B.length;Q++){const e=B[Q];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in A)){const g=Object.getOwnPropertyDescriptor(e,t);g&&Object.defineProperty(A,t,g.get?g:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}))}(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const g of t)if(g.type==="childList")for(const n of g.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function Q(t){const g={};return t.integrity&&(g.integrity=t.integrity),t.referrerPolicy&&(g.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?g.credentials="include":t.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function e(t){if(t.ep)return;t.ep=!0;const g=Q(t);fetch(t.href,g)}})();var MN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function El(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var YG={exports:{}},Cl={},NG={exports:{}},CB={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YI=Symbol.for("react.element"),GN=Symbol.for("react.portal"),hN=Symbol.for("react.fragment"),pN=Symbol.for("react.strict_mode"),RN=Symbol.for("react.profiler"),mN=Symbol.for("react.provider"),YN=Symbol.for("react.context"),NN=Symbol.for("react.forward_ref"),bN=Symbol.for("react.suspense"),yN=Symbol.for("react.memo"),kN=Symbol.for("react.lazy"),M0=Symbol.iterator;function JN(A){return A===null||typeof A!="object"?null:(A=M0&&A[M0]||A["@@iterator"],typeof A=="function"?A:null)}var bG={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yG=Object.assign,kG={};function Qi(A,B,Q){this.props=A,this.context=B,this.refs=kG,this.updater=Q||bG}Qi.prototype.isReactComponent={};Qi.prototype.setState=function(A,B){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,B,"setState")};Qi.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function JG(){}JG.prototype=Qi.prototype;function VD(A,B,Q){this.props=A,this.context=B,this.refs=kG,this.updater=Q||bG}var zD=VD.prototype=new JG;zD.constructor=VD;yG(zD,Qi.prototype);zD.isPureReactComponent=!0;var G0=Array.isArray,vG=Object.prototype.hasOwnProperty,jD={current:null},ZG={key:!0,ref:!0,__self:!0,__source:!0};function LG(A,B,Q){var e,t={},g=null,n=null;if(B!=null)for(e in B.ref!==void 0&&(n=B.ref),B.key!==void 0&&(g=""+B.key),B)vG.call(B,e)&&!ZG.hasOwnProperty(e)&&(t[e]=B[e]);var E=arguments.length-2;if(E===1)t.children=Q;else if(1<E){for(var C=Array(E),o=0;o<E;o++)C[o]=arguments[o+2];t.children=C}if(A&&A.defaultProps)for(e in E=A.defaultProps,E)t[e]===void 0&&(t[e]=E[e]);return{$$typeof:YI,type:A,key:g,ref:n,props:t,_owner:jD.current}}function vN(A,B){return{$$typeof:YI,type:A.type,key:B,ref:A.ref,props:A.props,_owner:A._owner}}function PD(A){return typeof A=="object"&&A!==null&&A.$$typeof===YI}function ZN(A){var B={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(Q){return B[Q]})}var h0=/\/+/g;function jc(A,B){return typeof A=="object"&&A!==null&&A.key!=null?ZN(""+A.key):B.toString(36)}function qa(A,B,Q,e,t){var g=typeof A;(g==="undefined"||g==="boolean")&&(A=null);var n=!1;if(A===null)n=!0;else switch(g){case"string":case"number":n=!0;break;case"object":switch(A.$$typeof){case YI:case GN:n=!0}}if(n)return n=A,t=t(n),A=e===""?"."+jc(n,0):e,G0(t)?(Q="",A!=null&&(Q=A.replace(h0,"$&/")+"/"),qa(t,B,Q,"",function(o){return o})):t!=null&&(PD(t)&&(t=vN(t,Q+(!t.key||n&&n.key===t.key?"":(""+t.key).replace(h0,"$&/")+"/")+A)),B.push(t)),1;if(n=0,e=e===""?".":e+":",G0(A))for(var E=0;E<A.length;E++){g=A[E];var C=e+jc(g,E);n+=qa(g,B,Q,C,t)}else if(C=JN(A),typeof C=="function")for(A=C.call(A),E=0;!(g=A.next()).done;)g=g.value,C=e+jc(g,E++),n+=qa(g,B,Q,C,t);else if(g==="object")throw B=String(A),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return n}function da(A,B,Q){if(A==null)return A;var e=[],t=0;return qa(A,e,"","",function(g){return B.call(Q,g,t++)}),e}function LN(A){if(A._status===-1){var B=A._result;B=B(),B.then(function(Q){(A._status===0||A._status===-1)&&(A._status=1,A._result=Q)},function(Q){(A._status===0||A._status===-1)&&(A._status=2,A._result=Q)}),A._status===-1&&(A._status=0,A._result=B)}if(A._status===1)return A._result.default;throw A._result}var $Q={current:null},_a={transition:null},SN={ReactCurrentDispatcher:$Q,ReactCurrentBatchConfig:_a,ReactCurrentOwner:jD};CB.Children={map:da,forEach:function(A,B,Q){da(A,function(){B.apply(this,arguments)},Q)},count:function(A){var B=0;return da(A,function(){B++}),B},toArray:function(A){return da(A,function(B){return B})||[]},only:function(A){if(!PD(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};CB.Component=Qi;CB.Fragment=hN;CB.Profiler=RN;CB.PureComponent=VD;CB.StrictMode=pN;CB.Suspense=bN;CB.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SN;CB.cloneElement=function(A,B,Q){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var e=yG({},A.props),t=A.key,g=A.ref,n=A._owner;if(B!=null){if(B.ref!==void 0&&(g=B.ref,n=jD.current),B.key!==void 0&&(t=""+B.key),A.type&&A.type.defaultProps)var E=A.type.defaultProps;for(C in B)vG.call(B,C)&&!ZG.hasOwnProperty(C)&&(e[C]=B[C]===void 0&&E!==void 0?E[C]:B[C])}var C=arguments.length-2;if(C===1)e.children=Q;else if(1<C){E=Array(C);for(var o=0;o<C;o++)E[o]=arguments[o+2];e.children=E}return{$$typeof:YI,type:A.type,key:t,ref:g,props:e,_owner:n}};CB.createContext=function(A){return A={$$typeof:YN,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:mN,_context:A},A.Consumer=A};CB.createElement=LG;CB.createFactory=function(A){var B=LG.bind(null,A);return B.type=A,B};CB.createRef=function(){return{current:null}};CB.forwardRef=function(A){return{$$typeof:NN,render:A}};CB.isValidElement=PD;CB.lazy=function(A){return{$$typeof:kN,_payload:{_status:-1,_result:A},_init:LN}};CB.memo=function(A,B){return{$$typeof:yN,type:A,compare:B===void 0?null:B}};CB.startTransition=function(A){var B=_a.transition;_a.transition={};try{A()}finally{_a.transition=B}};CB.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};CB.useCallback=function(A,B){return $Q.current.useCallback(A,B)};CB.useContext=function(A){return $Q.current.useContext(A)};CB.useDebugValue=function(){};CB.useDeferredValue=function(A){return $Q.current.useDeferredValue(A)};CB.useEffect=function(A,B){return $Q.current.useEffect(A,B)};CB.useId=function(){return $Q.current.useId()};CB.useImperativeHandle=function(A,B,Q){return $Q.current.useImperativeHandle(A,B,Q)};CB.useInsertionEffect=function(A,B){return $Q.current.useInsertionEffect(A,B)};CB.useLayoutEffect=function(A,B){return $Q.current.useLayoutEffect(A,B)};CB.useMemo=function(A,B){return $Q.current.useMemo(A,B)};CB.useReducer=function(A,B,Q){return $Q.current.useReducer(A,B,Q)};CB.useRef=function(A){return $Q.current.useRef(A)};CB.useState=function(A){return $Q.current.useState(A)};CB.useSyncExternalStore=function(A,B,Q){return $Q.current.useSyncExternalStore(A,B,Q)};CB.useTransition=function(){return $Q.current.useTransition()};CB.version="18.2.0";NG.exports=CB;var G=NG.exports;const gt=El(G),Lo=fN({__proto__:null,default:gt},[G]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XN=G,HN=Symbol.for("react.element"),xN=Symbol.for("react.fragment"),WN=Object.prototype.hasOwnProperty,ON=XN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TN={key:!0,ref:!0,__self:!0,__source:!0};function SG(A,B,Q){var e,t={},g=null,n=null;Q!==void 0&&(g=""+Q),B.key!==void 0&&(g=""+B.key),B.ref!==void 0&&(n=B.ref);for(e in B)WN.call(B,e)&&!TN.hasOwnProperty(e)&&(t[e]=B[e]);if(A&&A.defaultProps)for(e in B=A.defaultProps,B)t[e]===void 0&&(t[e]=B[e]);return{$$typeof:HN,type:A,key:g,ref:n,props:t,_owner:ON.current}}Cl.Fragment=xN;Cl.jsx=SG;Cl.jsxs=SG;YG.exports=Cl;var R=YG.exports,XG={exports:{}},He={},HG={exports:{}},xG={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(A){function B(H,K){var BA=H.length;H.push(K);A:for(;0<BA;){var dA=BA-1>>>1,rA=H[dA];if(0<t(rA,K))H[dA]=K,H[BA]=rA,BA=dA;else break A}}function Q(H){return H.length===0?null:H[0]}function e(H){if(H.length===0)return null;var K=H[0],BA=H.pop();if(BA!==K){H[0]=BA;A:for(var dA=0,rA=H.length,JA=rA>>>1;dA<JA;){var MA=2*(dA+1)-1,SA=H[MA],eA=MA+1,tA=H[eA];if(0>t(SA,BA))eA<rA&&0>t(tA,SA)?(H[dA]=tA,H[eA]=BA,dA=eA):(H[dA]=SA,H[MA]=BA,dA=MA);else if(eA<rA&&0>t(tA,BA))H[dA]=tA,H[eA]=BA,dA=eA;else break A}}return K}function t(H,K){var BA=H.sortIndex-K.sortIndex;return BA!==0?BA:H.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var g=performance;A.unstable_now=function(){return g.now()}}else{var n=Date,E=n.now();A.unstable_now=function(){return n.now()-E}}var C=[],o=[],i=1,r=null,I=3,a=!1,d=!1,D=!1,U=typeof setTimeout=="function"?setTimeout:null,l=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(H){for(var K=Q(o);K!==null;){if(K.callback===null)e(o);else if(K.startTime<=H)e(o),K.sortIndex=K.expirationTime,B(C,K);else break;K=Q(o)}}function w(H){if(D=!1,c(H),!d)if(Q(C)!==null)d=!0,$(M);else{var K=Q(o);K!==null&&QA(w,K.startTime-H)}}function M(H,K){d=!1,D&&(D=!1,l(k),k=-1),a=!0;var BA=I;try{for(c(K),r=Q(C);r!==null&&(!(r.expirationTime>K)||H&&!W());){var dA=r.callback;if(typeof dA=="function"){r.callback=null,I=r.priorityLevel;var rA=dA(r.expirationTime<=K);K=A.unstable_now(),typeof rA=="function"?r.callback=rA:r===Q(C)&&e(C),c(K)}else e(C);r=Q(C)}if(r!==null)var JA=!0;else{var MA=Q(o);MA!==null&&QA(w,MA.startTime-K),JA=!1}return JA}finally{r=null,I=BA,a=!1}}var Y=!1,p=null,k=-1,Z=5,J=-1;function W(){return!(A.unstable_now()-J<Z)}function T(){if(p!==null){var H=A.unstable_now();J=H;var K=!0;try{K=p(!0,H)}finally{K?j():(Y=!1,p=null)}}else Y=!1}var j;if(typeof F=="function")j=function(){F(T)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,_=P.port2;P.port1.onmessage=T,j=function(){_.postMessage(null)}}else j=function(){U(T,0)};function $(H){p=H,Y||(Y=!0,j())}function QA(H,K){k=U(function(){H(A.unstable_now())},K)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(H){H.callback=null},A.unstable_continueExecution=function(){d||a||(d=!0,$(M))},A.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<H?Math.floor(1e3/H):5},A.unstable_getCurrentPriorityLevel=function(){return I},A.unstable_getFirstCallbackNode=function(){return Q(C)},A.unstable_next=function(H){switch(I){case 1:case 2:case 3:var K=3;break;default:K=I}var BA=I;I=K;try{return H()}finally{I=BA}},A.unstable_pauseExecution=function(){},A.unstable_requestPaint=function(){},A.unstable_runWithPriority=function(H,K){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var BA=I;I=H;try{return K()}finally{I=BA}},A.unstable_scheduleCallback=function(H,K,BA){var dA=A.unstable_now();switch(typeof BA=="object"&&BA!==null?(BA=BA.delay,BA=typeof BA=="number"&&0<BA?dA+BA:dA):BA=dA,H){case 1:var rA=-1;break;case 2:rA=250;break;case 5:rA=1073741823;break;case 4:rA=1e4;break;default:rA=5e3}return rA=BA+rA,H={id:i++,callback:K,priorityLevel:H,startTime:BA,expirationTime:rA,sortIndex:-1},BA>dA?(H.sortIndex=BA,B(o,H),Q(C)===null&&H===Q(o)&&(D?(l(k),k=-1):D=!0,QA(w,BA-dA))):(H.sortIndex=rA,B(C,H),d||a||(d=!0,$(M))),H},A.unstable_shouldYield=W,A.unstable_wrapCallback=function(H){var K=I;return function(){var BA=I;I=K;try{return H.apply(this,arguments)}finally{I=BA}}}})(xG);HG.exports=xG;var VN=HG.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WG=G,Le=VN;function CA(A){for(var B="https://reactjs.org/docs/error-decoder.html?invariant="+A,Q=1;Q<arguments.length;Q++)B+="&args[]="+encodeURIComponent(arguments[Q]);return"Minified React error #"+A+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var OG=new Set,Pr={};function _E(A,B){So(A,B),So(A+"Capture",B)}function So(A,B){for(Pr[A]=B,A=0;A<B.length;A++)OG.add(B[A])}var Lg=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),IF=Object.prototype.hasOwnProperty,zN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p0={},R0={};function jN(A){return IF.call(R0,A)?!0:IF.call(p0,A)?!1:zN.test(A)?R0[A]=!0:(p0[A]=!0,!1)}function PN(A,B,Q,e){if(Q!==null&&Q.type===0)return!1;switch(typeof B){case"function":case"symbol":return!0;case"boolean":return e?!1:Q!==null?!Q.acceptsBooleans:(A=A.toLowerCase().slice(0,5),A!=="data-"&&A!=="aria-");default:return!1}}function KN(A,B,Q,e){if(B===null||typeof B>"u"||PN(A,B,Q,e))return!0;if(e)return!1;if(Q!==null)switch(Q.type){case 3:return!B;case 4:return B===!1;case 5:return isNaN(B);case 6:return isNaN(B)||1>B}return!1}function Ae(A,B,Q,e,t,g,n){this.acceptsBooleans=B===2||B===3||B===4,this.attributeName=e,this.attributeNamespace=t,this.mustUseProperty=Q,this.propertyName=A,this.type=B,this.sanitizeURL=g,this.removeEmptyString=n}var vQ={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A){vQ[A]=new Ae(A,0,!1,A,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(A){var B=A[0];vQ[B]=new Ae(B,1,!1,A[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(A){vQ[A]=new Ae(A,2,!1,A.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(A){vQ[A]=new Ae(A,2,!1,A,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A){vQ[A]=new Ae(A,3,!1,A.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(A){vQ[A]=new Ae(A,3,!0,A,null,!1,!1)});["capture","download"].forEach(function(A){vQ[A]=new Ae(A,4,!1,A,null,!1,!1)});["cols","rows","size","span"].forEach(function(A){vQ[A]=new Ae(A,6,!1,A,null,!1,!1)});["rowSpan","start"].forEach(function(A){vQ[A]=new Ae(A,5,!1,A.toLowerCase(),null,!1,!1)});var KD=/[\-:]([a-z])/g;function qD(A){return A[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A){var B=A.replace(KD,qD);vQ[B]=new Ae(B,1,!1,A,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A){var B=A.replace(KD,qD);vQ[B]=new Ae(B,1,!1,A,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(A){var B=A.replace(KD,qD);vQ[B]=new Ae(B,1,!1,A,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(A){vQ[A]=new Ae(A,1,!1,A.toLowerCase(),null,!1,!1)});vQ.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(A){vQ[A]=new Ae(A,1,!1,A.toLowerCase(),null,!0,!0)});function _D(A,B,Q,e){var t=vQ.hasOwnProperty(B)?vQ[B]:null;(t!==null?t.type!==0:e||!(2<B.length)||B[0]!=="o"&&B[0]!=="O"||B[1]!=="n"&&B[1]!=="N")&&(KN(B,Q,t,e)&&(Q=null),e||t===null?jN(B)&&(Q===null?A.removeAttribute(B):A.setAttribute(B,""+Q)):t.mustUseProperty?A[t.propertyName]=Q===null?t.type===3?!1:"":Q:(B=t.attributeName,e=t.attributeNamespace,Q===null?A.removeAttribute(B):(t=t.type,Q=t===3||t===4&&Q===!0?"":""+Q,e?A.setAttributeNS(e,B,Q):A.setAttribute(B,Q))))}var Og=WG.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),ao=Symbol.for("react.portal"),so=Symbol.for("react.fragment"),$D=Symbol.for("react.strict_mode"),aF=Symbol.for("react.profiler"),TG=Symbol.for("react.provider"),VG=Symbol.for("react.context"),Ad=Symbol.for("react.forward_ref"),sF=Symbol.for("react.suspense"),lF=Symbol.for("react.suspense_list"),Bd=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),zG=Symbol.for("react.offscreen"),m0=Symbol.iterator;function Ar(A){return A===null||typeof A!="object"?null:(A=m0&&A[m0]||A["@@iterator"],typeof A=="function"?A:null)}var VB=Object.assign,Pc;function dr(A){if(Pc===void 0)try{throw Error()}catch(Q){var B=Q.stack.trim().match(/\n( *(at )?)/);Pc=B&&B[1]||""}return`
`+Pc+A}var Kc=!1;function qc(A,B){if(!A||Kc)return"";Kc=!0;var Q=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(B)if(B=function(){throw Error()},Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(o){var e=o}Reflect.construct(A,[],B)}else{try{B.call()}catch(o){e=o}A.call(B.prototype)}else{try{throw Error()}catch(o){e=o}A()}}catch(o){if(o&&e&&typeof o.stack=="string"){for(var t=o.stack.split(`
`),g=e.stack.split(`
`),n=t.length-1,E=g.length-1;1<=n&&0<=E&&t[n]!==g[E];)E--;for(;1<=n&&0<=E;n--,E--)if(t[n]!==g[E]){if(n!==1||E!==1)do if(n--,E--,0>E||t[n]!==g[E]){var C=`
`+t[n].replace(" at new "," at ");return A.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",A.displayName)),C}while(1<=n&&0<=E);break}}}finally{Kc=!1,Error.prepareStackTrace=Q}return(A=A?A.displayName||A.name:"")?dr(A):""}function qN(A){switch(A.tag){case 5:return dr(A.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return A=qc(A.type,!1),A;case 11:return A=qc(A.type.render,!1),A;case 1:return A=qc(A.type,!0),A;default:return""}}function cF(A){if(A==null)return null;if(typeof A=="function")return A.displayName||A.name||null;if(typeof A=="string")return A;switch(A){case so:return"Fragment";case ao:return"Portal";case aF:return"Profiler";case $D:return"StrictMode";case sF:return"Suspense";case lF:return"SuspenseList"}if(typeof A=="object")switch(A.$$typeof){case VG:return(A.displayName||"Context")+".Consumer";case TG:return(A._context.displayName||"Context")+".Provider";case Ad:var B=A.render;return A=A.displayName,A||(A=B.displayName||B.name||"",A=A!==""?"ForwardRef("+A+")":"ForwardRef"),A;case Bd:return B=A.displayName||null,B!==null?B:cF(A.type)||"Memo";case Gn:B=A._payload,A=A._init;try{return cF(A(B))}catch{}}return null}function _N(A){var B=A.type;switch(A.tag){case 24:return"Cache";case 9:return(B.displayName||"Context")+".Consumer";case 10:return(B._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return A=B.render,A=A.displayName||A.name||"",B.displayName||(A!==""?"ForwardRef("+A+")":"ForwardRef");case 7:return"Fragment";case 5:return B;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cF(B);case 8:return B===$D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof B=="function")return B.displayName||B.name||null;if(typeof B=="string")return B}return null}function On(A){switch(typeof A){case"boolean":case"number":case"string":case"undefined":return A;case"object":return A;default:return""}}function jG(A){var B=A.type;return(A=A.nodeName)&&A.toLowerCase()==="input"&&(B==="checkbox"||B==="radio")}function $N(A){var B=jG(A)?"checked":"value",Q=Object.getOwnPropertyDescriptor(A.constructor.prototype,B),e=""+A[B];if(!A.hasOwnProperty(B)&&typeof Q<"u"&&typeof Q.get=="function"&&typeof Q.set=="function"){var t=Q.get,g=Q.set;return Object.defineProperty(A,B,{configurable:!0,get:function(){return t.call(this)},set:function(n){e=""+n,g.call(this,n)}}),Object.defineProperty(A,B,{enumerable:Q.enumerable}),{getValue:function(){return e},setValue:function(n){e=""+n},stopTracking:function(){A._valueTracker=null,delete A[B]}}}}function Ua(A){A._valueTracker||(A._valueTracker=$N(A))}function PG(A){if(!A)return!1;var B=A._valueTracker;if(!B)return!0;var Q=B.getValue(),e="";return A&&(e=jG(A)?A.checked?"true":"false":A.value),A=e,A!==Q?(B.setValue(A),!0):!1}function Fs(A){if(A=A||(typeof document<"u"?document:void 0),typeof A>"u")return null;try{return A.activeElement||A.body}catch{return A.body}}function wF(A,B){var Q=B.checked;return VB({},B,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:Q??A._wrapperState.initialChecked})}function Y0(A,B){var Q=B.defaultValue==null?"":B.defaultValue,e=B.checked!=null?B.checked:B.defaultChecked;Q=On(B.value!=null?B.value:Q),A._wrapperState={initialChecked:e,initialValue:Q,controlled:B.type==="checkbox"||B.type==="radio"?B.checked!=null:B.value!=null}}function KG(A,B){B=B.checked,B!=null&&_D(A,"checked",B,!1)}function FF(A,B){KG(A,B);var Q=On(B.value),e=B.type;if(Q!=null)e==="number"?(Q===0&&A.value===""||A.value!=Q)&&(A.value=""+Q):A.value!==""+Q&&(A.value=""+Q);else if(e==="submit"||e==="reset"){A.removeAttribute("value");return}B.hasOwnProperty("value")?DF(A,B.type,Q):B.hasOwnProperty("defaultValue")&&DF(A,B.type,On(B.defaultValue)),B.checked==null&&B.defaultChecked!=null&&(A.defaultChecked=!!B.defaultChecked)}function N0(A,B,Q){if(B.hasOwnProperty("value")||B.hasOwnProperty("defaultValue")){var e=B.type;if(!(e!=="submit"&&e!=="reset"||B.value!==void 0&&B.value!==null))return;B=""+A._wrapperState.initialValue,Q||B===A.value||(A.value=B),A.defaultValue=B}Q=A.name,Q!==""&&(A.name=""),A.defaultChecked=!!A._wrapperState.initialChecked,Q!==""&&(A.name=Q)}function DF(A,B,Q){(B!=="number"||Fs(A.ownerDocument)!==A)&&(Q==null?A.defaultValue=""+A._wrapperState.initialValue:A.defaultValue!==""+Q&&(A.defaultValue=""+Q))}var ur=Array.isArray;function Ro(A,B,Q,e){if(A=A.options,B){B={};for(var t=0;t<Q.length;t++)B["$"+Q[t]]=!0;for(Q=0;Q<A.length;Q++)t=B.hasOwnProperty("$"+A[Q].value),A[Q].selected!==t&&(A[Q].selected=t),t&&e&&(A[Q].defaultSelected=!0)}else{for(Q=""+On(Q),B=null,t=0;t<A.length;t++){if(A[t].value===Q){A[t].selected=!0,e&&(A[t].defaultSelected=!0);return}B!==null||A[t].disabled||(B=A[t])}B!==null&&(B.selected=!0)}}function dF(A,B){if(B.dangerouslySetInnerHTML!=null)throw Error(CA(91));return VB({},B,{value:void 0,defaultValue:void 0,children:""+A._wrapperState.initialValue})}function b0(A,B){var Q=B.value;if(Q==null){if(Q=B.children,B=B.defaultValue,Q!=null){if(B!=null)throw Error(CA(92));if(ur(Q)){if(1<Q.length)throw Error(CA(93));Q=Q[0]}B=Q}B==null&&(B=""),Q=B}A._wrapperState={initialValue:On(Q)}}function qG(A,B){var Q=On(B.value),e=On(B.defaultValue);Q!=null&&(Q=""+Q,Q!==A.value&&(A.value=Q),B.defaultValue==null&&A.defaultValue!==Q&&(A.defaultValue=Q)),e!=null&&(A.defaultValue=""+e)}function y0(A){var B=A.textContent;B===A._wrapperState.initialValue&&B!==""&&B!==null&&(A.value=B)}function _G(A){switch(A){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uF(A,B){return A==null||A==="http://www.w3.org/1999/xhtml"?_G(B):A==="http://www.w3.org/2000/svg"&&B==="foreignObject"?"http://www.w3.org/1999/xhtml":A}var fa,$G=function(A){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(B,Q,e,t){MSApp.execUnsafeLocalFunction(function(){return A(B,Q,e,t)})}:A}(function(A,B){if(A.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in A)A.innerHTML=B;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+B.valueOf().toString()+"</svg>",B=fa.firstChild;A.firstChild;)A.removeChild(A.firstChild);for(;B.firstChild;)A.appendChild(B.firstChild)}});function Kr(A,B){if(B){var Q=A.firstChild;if(Q&&Q===A.lastChild&&Q.nodeType===3){Q.nodeValue=B;return}}A.textContent=B}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ab=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(A){Ab.forEach(function(B){B=B+A.charAt(0).toUpperCase()+A.substring(1),mr[B]=mr[A]})});function Ah(A,B,Q){return B==null||typeof B=="boolean"||B===""?"":Q||typeof B!="number"||B===0||mr.hasOwnProperty(A)&&mr[A]?(""+B).trim():B+"px"}function Bh(A,B){A=A.style;for(var Q in B)if(B.hasOwnProperty(Q)){var e=Q.indexOf("--")===0,t=Ah(Q,B[Q],e);Q==="float"&&(Q="cssFloat"),e?A.setProperty(Q,t):A[Q]=t}}var Bb=VB({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function UF(A,B){if(B){if(Bb[A]&&(B.children!=null||B.dangerouslySetInnerHTML!=null))throw Error(CA(137,A));if(B.dangerouslySetInnerHTML!=null){if(B.children!=null)throw Error(CA(60));if(typeof B.dangerouslySetInnerHTML!="object"||!("__html"in B.dangerouslySetInnerHTML))throw Error(CA(61))}if(B.style!=null&&typeof B.style!="object")throw Error(CA(62))}}function fF(A,B){if(A.indexOf("-")===-1)return typeof B.is=="string";switch(A){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var MF=null;function Qd(A){return A=A.target||A.srcElement||window,A.correspondingUseElement&&(A=A.correspondingUseElement),A.nodeType===3?A.parentNode:A}var GF=null,mo=null,Yo=null;function k0(A){if(A=yI(A)){if(typeof GF!="function")throw Error(CA(280));var B=A.stateNode;B&&(B=al(B),GF(A.stateNode,A.type,B))}}function Qh(A){mo?Yo?Yo.push(A):Yo=[A]:mo=A}function eh(){if(mo){var A=mo,B=Yo;if(Yo=mo=null,k0(A),B)for(A=0;A<B.length;A++)k0(B[A])}}function th(A,B){return A(B)}function gh(){}var _c=!1;function nh(A,B,Q){if(_c)return A(B,Q);_c=!0;try{return th(A,B,Q)}finally{_c=!1,(mo!==null||Yo!==null)&&(gh(),eh())}}function qr(A,B){var Q=A.stateNode;if(Q===null)return null;var e=al(Q);if(e===null)return null;Q=e[B];A:switch(B){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(A=A.type,e=!(A==="button"||A==="input"||A==="select"||A==="textarea")),A=!e;break A;default:A=!1}if(A)return null;if(Q&&typeof Q!="function")throw Error(CA(231,B,typeof Q));return Q}var hF=!1;if(Lg)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){hF=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{hF=!1}function Qb(A,B,Q,e,t,g,n,E,C){var o=Array.prototype.slice.call(arguments,3);try{B.apply(Q,o)}catch(i){this.onError(i)}}var Yr=!1,Ds=null,ds=!1,pF=null,eb={onError:function(A){Yr=!0,Ds=A}};function tb(A,B,Q,e,t,g,n,E,C){Yr=!1,Ds=null,Qb.apply(eb,arguments)}function gb(A,B,Q,e,t,g,n,E,C){if(tb.apply(this,arguments),Yr){if(Yr){var o=Ds;Yr=!1,Ds=null}else throw Error(CA(198));ds||(ds=!0,pF=o)}}function $E(A){var B=A,Q=A;if(A.alternate)for(;B.return;)B=B.return;else{A=B;do B=A,B.flags&4098&&(Q=B.return),A=B.return;while(A)}return B.tag===3?Q:null}function Eh(A){if(A.tag===13){var B=A.memoizedState;if(B===null&&(A=A.alternate,A!==null&&(B=A.memoizedState)),B!==null)return B.dehydrated}return null}function J0(A){if($E(A)!==A)throw Error(CA(188))}function nb(A){var B=A.alternate;if(!B){if(B=$E(A),B===null)throw Error(CA(188));return B!==A?null:A}for(var Q=A,e=B;;){var t=Q.return;if(t===null)break;var g=t.alternate;if(g===null){if(e=t.return,e!==null){Q=e;continue}break}if(t.child===g.child){for(g=t.child;g;){if(g===Q)return J0(t),A;if(g===e)return J0(t),B;g=g.sibling}throw Error(CA(188))}if(Q.return!==e.return)Q=t,e=g;else{for(var n=!1,E=t.child;E;){if(E===Q){n=!0,Q=t,e=g;break}if(E===e){n=!0,e=t,Q=g;break}E=E.sibling}if(!n){for(E=g.child;E;){if(E===Q){n=!0,Q=g,e=t;break}if(E===e){n=!0,e=g,Q=t;break}E=E.sibling}if(!n)throw Error(CA(189))}}if(Q.alternate!==e)throw Error(CA(190))}if(Q.tag!==3)throw Error(CA(188));return Q.stateNode.current===Q?A:B}function Ch(A){return A=nb(A),A!==null?oh(A):null}function oh(A){if(A.tag===5||A.tag===6)return A;for(A=A.child;A!==null;){var B=oh(A);if(B!==null)return B;A=A.sibling}return null}var ih=Le.unstable_scheduleCallback,v0=Le.unstable_cancelCallback,Eb=Le.unstable_shouldYield,Cb=Le.unstable_requestPaint,BQ=Le.unstable_now,ob=Le.unstable_getCurrentPriorityLevel,ed=Le.unstable_ImmediatePriority,rh=Le.unstable_UserBlockingPriority,us=Le.unstable_NormalPriority,ib=Le.unstable_LowPriority,Ih=Le.unstable_IdlePriority,ol=null,Bg=null;function rb(A){if(Bg&&typeof Bg.onCommitFiberRoot=="function")try{Bg.onCommitFiberRoot(ol,A,void 0,(A.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:sb,Ib=Math.log,ab=Math.LN2;function sb(A){return A>>>=0,A===0?32:31-(Ib(A)/ab|0)|0}var Ma=64,Ga=4194304;function Ur(A){switch(A&-A){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return A&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return A&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return A}}function Us(A,B){var Q=A.pendingLanes;if(Q===0)return 0;var e=0,t=A.suspendedLanes,g=A.pingedLanes,n=Q&268435455;if(n!==0){var E=n&~t;E!==0?e=Ur(E):(g&=n,g!==0&&(e=Ur(g)))}else n=Q&~t,n!==0?e=Ur(n):g!==0&&(e=Ur(g));if(e===0)return 0;if(B!==0&&B!==e&&!(B&t)&&(t=e&-e,g=B&-B,t>=g||t===16&&(g&4194240)!==0))return B;if(e&4&&(e|=Q&16),B=A.entangledLanes,B!==0)for(A=A.entanglements,B&=e;0<B;)Q=31-yt(B),t=1<<Q,e|=A[Q],B&=~t;return e}function lb(A,B){switch(A){case 1:case 2:case 4:return B+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return B+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cb(A,B){for(var Q=A.suspendedLanes,e=A.pingedLanes,t=A.expirationTimes,g=A.pendingLanes;0<g;){var n=31-yt(g),E=1<<n,C=t[n];C===-1?(!(E&Q)||E&e)&&(t[n]=lb(E,B)):C<=B&&(A.expiredLanes|=E),g&=~E}}function RF(A){return A=A.pendingLanes&-1073741825,A!==0?A:A&1073741824?1073741824:0}function ah(){var A=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),A}function $c(A){for(var B=[],Q=0;31>Q;Q++)B.push(A);return B}function NI(A,B,Q){A.pendingLanes|=B,B!==536870912&&(A.suspendedLanes=0,A.pingedLanes=0),A=A.eventTimes,B=31-yt(B),A[B]=Q}function wb(A,B){var Q=A.pendingLanes&~B;A.pendingLanes=B,A.suspendedLanes=0,A.pingedLanes=0,A.expiredLanes&=B,A.mutableReadLanes&=B,A.entangledLanes&=B,B=A.entanglements;var e=A.eventTimes;for(A=A.expirationTimes;0<Q;){var t=31-yt(Q),g=1<<t;B[t]=0,e[t]=-1,A[t]=-1,Q&=~g}}function td(A,B){var Q=A.entangledLanes|=B;for(A=A.entanglements;Q;){var e=31-yt(Q),t=1<<e;t&B|A[e]&B&&(A[e]|=B),Q&=~t}}var dB=0;function sh(A){return A&=-A,1<A?4<A?A&268435455?16:536870912:4:1}var lh,gd,ch,wh,Fh,mF=!1,ha=[],kn=null,Jn=null,vn=null,_r=new Map,$r=new Map,Rn=[],Fb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Z0(A,B){switch(A){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":_r.delete(B.pointerId);break;case"gotpointercapture":case"lostpointercapture":$r.delete(B.pointerId)}}function Qr(A,B,Q,e,t,g){return A===null||A.nativeEvent!==g?(A={blockedOn:B,domEventName:Q,eventSystemFlags:e,nativeEvent:g,targetContainers:[t]},B!==null&&(B=yI(B),B!==null&&gd(B)),A):(A.eventSystemFlags|=e,B=A.targetContainers,t!==null&&B.indexOf(t)===-1&&B.push(t),A)}function Db(A,B,Q,e,t){switch(B){case"focusin":return kn=Qr(kn,A,B,Q,e,t),!0;case"dragenter":return Jn=Qr(Jn,A,B,Q,e,t),!0;case"mouseover":return vn=Qr(vn,A,B,Q,e,t),!0;case"pointerover":var g=t.pointerId;return _r.set(g,Qr(_r.get(g)||null,A,B,Q,e,t)),!0;case"gotpointercapture":return g=t.pointerId,$r.set(g,Qr($r.get(g)||null,A,B,Q,e,t)),!0}return!1}function Dh(A){var B=mE(A.target);if(B!==null){var Q=$E(B);if(Q!==null){if(B=Q.tag,B===13){if(B=Eh(Q),B!==null){A.blockedOn=B,Fh(A.priority,function(){ch(Q)});return}}else if(B===3&&Q.stateNode.current.memoizedState.isDehydrated){A.blockedOn=Q.tag===3?Q.stateNode.containerInfo:null;return}}}A.blockedOn=null}function $a(A){if(A.blockedOn!==null)return!1;for(var B=A.targetContainers;0<B.length;){var Q=YF(A.domEventName,A.eventSystemFlags,B[0],A.nativeEvent);if(Q===null){Q=A.nativeEvent;var e=new Q.constructor(Q.type,Q);MF=e,Q.target.dispatchEvent(e),MF=null}else return B=yI(Q),B!==null&&gd(B),A.blockedOn=Q,!1;B.shift()}return!0}function L0(A,B,Q){$a(A)&&Q.delete(B)}function db(){mF=!1,kn!==null&&$a(kn)&&(kn=null),Jn!==null&&$a(Jn)&&(Jn=null),vn!==null&&$a(vn)&&(vn=null),_r.forEach(L0),$r.forEach(L0)}function er(A,B){A.blockedOn===B&&(A.blockedOn=null,mF||(mF=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,db)))}function AI(A){function B(t){return er(t,A)}if(0<ha.length){er(ha[0],A);for(var Q=1;Q<ha.length;Q++){var e=ha[Q];e.blockedOn===A&&(e.blockedOn=null)}}for(kn!==null&&er(kn,A),Jn!==null&&er(Jn,A),vn!==null&&er(vn,A),_r.forEach(B),$r.forEach(B),Q=0;Q<Rn.length;Q++)e=Rn[Q],e.blockedOn===A&&(e.blockedOn=null);for(;0<Rn.length&&(Q=Rn[0],Q.blockedOn===null);)Dh(Q),Q.blockedOn===null&&Rn.shift()}var No=Og.ReactCurrentBatchConfig,fs=!0;function ub(A,B,Q,e){var t=dB,g=No.transition;No.transition=null;try{dB=1,nd(A,B,Q,e)}finally{dB=t,No.transition=g}}function Ub(A,B,Q,e){var t=dB,g=No.transition;No.transition=null;try{dB=4,nd(A,B,Q,e)}finally{dB=t,No.transition=g}}function nd(A,B,Q,e){if(fs){var t=YF(A,B,Q,e);if(t===null)ow(A,B,e,Ms,Q),Z0(A,e);else if(Db(t,A,B,Q,e))e.stopPropagation();else if(Z0(A,e),B&4&&-1<Fb.indexOf(A)){for(;t!==null;){var g=yI(t);if(g!==null&&lh(g),g=YF(A,B,Q,e),g===null&&ow(A,B,e,Ms,Q),g===t)break;t=g}t!==null&&e.stopPropagation()}else ow(A,B,e,null,Q)}}var Ms=null;function YF(A,B,Q,e){if(Ms=null,A=Qd(e),A=mE(A),A!==null)if(B=$E(A),B===null)A=null;else if(Q=B.tag,Q===13){if(A=Eh(B),A!==null)return A;A=null}else if(Q===3){if(B.stateNode.current.memoizedState.isDehydrated)return B.tag===3?B.stateNode.containerInfo:null;A=null}else B!==A&&(A=null);return Ms=A,null}function dh(A){switch(A){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ob()){case ed:return 1;case rh:return 4;case us:case ib:return 16;case Ih:return 536870912;default:return 16}default:return 16}}var Yn=null,Ed=null,As=null;function uh(){if(As)return As;var A,B=Ed,Q=B.length,e,t="value"in Yn?Yn.value:Yn.textContent,g=t.length;for(A=0;A<Q&&B[A]===t[A];A++);var n=Q-A;for(e=1;e<=n&&B[Q-e]===t[g-e];e++);return As=t.slice(A,1<e?1-e:void 0)}function Bs(A){var B=A.keyCode;return"charCode"in A?(A=A.charCode,A===0&&B===13&&(A=13)):A=B,A===10&&(A=13),32<=A||A===13?A:0}function pa(){return!0}function S0(){return!1}function xe(A){function B(Q,e,t,g,n){this._reactName=Q,this._targetInst=t,this.type=e,this.nativeEvent=g,this.target=n,this.currentTarget=null;for(var E in A)A.hasOwnProperty(E)&&(Q=A[E],this[E]=Q?Q(g):g[E]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?pa:S0,this.isPropagationStopped=S0,this}return VB(B.prototype,{preventDefault:function(){this.defaultPrevented=!0;var Q=this.nativeEvent;Q&&(Q.preventDefault?Q.preventDefault():typeof Q.returnValue!="unknown"&&(Q.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var Q=this.nativeEvent;Q&&(Q.stopPropagation?Q.stopPropagation():typeof Q.cancelBubble!="unknown"&&(Q.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),B}var ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(A){return A.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cd=xe(ei),bI=VB({},ei,{view:0,detail:0}),fb=xe(bI),Aw,Bw,tr,il=VB({},bI,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:od,button:0,buttons:0,relatedTarget:function(A){return A.relatedTarget===void 0?A.fromElement===A.srcElement?A.toElement:A.fromElement:A.relatedTarget},movementX:function(A){return"movementX"in A?A.movementX:(A!==tr&&(tr&&A.type==="mousemove"?(Aw=A.screenX-tr.screenX,Bw=A.screenY-tr.screenY):Bw=Aw=0,tr=A),Aw)},movementY:function(A){return"movementY"in A?A.movementY:Bw}}),X0=xe(il),Mb=VB({},il,{dataTransfer:0}),Gb=xe(Mb),hb=VB({},bI,{relatedTarget:0}),Qw=xe(hb),pb=VB({},ei,{animationName:0,elapsedTime:0,pseudoElement:0}),Rb=xe(pb),mb=VB({},ei,{clipboardData:function(A){return"clipboardData"in A?A.clipboardData:window.clipboardData}}),Yb=xe(mb),Nb=VB({},ei,{data:0}),H0=xe(Nb),bb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jb(A){var B=this.nativeEvent;return B.getModifierState?B.getModifierState(A):(A=kb[A])?!!B[A]:!1}function od(){return Jb}var vb=VB({},bI,{key:function(A){if(A.key){var B=bb[A.key]||A.key;if(B!=="Unidentified")return B}return A.type==="keypress"?(A=Bs(A),A===13?"Enter":String.fromCharCode(A)):A.type==="keydown"||A.type==="keyup"?yb[A.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:od,charCode:function(A){return A.type==="keypress"?Bs(A):0},keyCode:function(A){return A.type==="keydown"||A.type==="keyup"?A.keyCode:0},which:function(A){return A.type==="keypress"?Bs(A):A.type==="keydown"||A.type==="keyup"?A.keyCode:0}}),Zb=xe(vb),Lb=VB({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x0=xe(Lb),Sb=VB({},bI,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:od}),Xb=xe(Sb),Hb=VB({},ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),xb=xe(Hb),Wb=VB({},il,{deltaX:function(A){return"deltaX"in A?A.deltaX:"wheelDeltaX"in A?-A.wheelDeltaX:0},deltaY:function(A){return"deltaY"in A?A.deltaY:"wheelDeltaY"in A?-A.wheelDeltaY:"wheelDelta"in A?-A.wheelDelta:0},deltaZ:0,deltaMode:0}),Ob=xe(Wb),Tb=[9,13,27,32],id=Lg&&"CompositionEvent"in window,Nr=null;Lg&&"documentMode"in document&&(Nr=document.documentMode);var Vb=Lg&&"TextEvent"in window&&!Nr,Uh=Lg&&(!id||Nr&&8<Nr&&11>=Nr),W0=" ",O0=!1;function fh(A,B){switch(A){case"keyup":return Tb.indexOf(B.keyCode)!==-1;case"keydown":return B.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mh(A){return A=A.detail,typeof A=="object"&&"data"in A?A.data:null}var lo=!1;function zb(A,B){switch(A){case"compositionend":return Mh(B);case"keypress":return B.which!==32?null:(O0=!0,W0);case"textInput":return A=B.data,A===W0&&O0?null:A;default:return null}}function jb(A,B){if(lo)return A==="compositionend"||!id&&fh(A,B)?(A=uh(),As=Ed=Yn=null,lo=!1,A):null;switch(A){case"paste":return null;case"keypress":if(!(B.ctrlKey||B.altKey||B.metaKey)||B.ctrlKey&&B.altKey){if(B.char&&1<B.char.length)return B.char;if(B.which)return String.fromCharCode(B.which)}return null;case"compositionend":return Uh&&B.locale!=="ko"?null:B.data;default:return null}}var Pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T0(A){var B=A&&A.nodeName&&A.nodeName.toLowerCase();return B==="input"?!!Pb[A.type]:B==="textarea"}function Gh(A,B,Q,e){Qh(e),B=Gs(B,"onChange"),0<B.length&&(Q=new Cd("onChange","change",null,Q,e),A.push({event:Q,listeners:B}))}var br=null,BI=null;function Kb(A){vh(A,0)}function rl(A){var B=Fo(A);if(PG(B))return A}function qb(A,B){if(A==="change")return B}var hh=!1;if(Lg){var ew;if(Lg){var tw="oninput"in document;if(!tw){var V0=document.createElement("div");V0.setAttribute("oninput","return;"),tw=typeof V0.oninput=="function"}ew=tw}else ew=!1;hh=ew&&(!document.documentMode||9<document.documentMode)}function z0(){br&&(br.detachEvent("onpropertychange",ph),BI=br=null)}function ph(A){if(A.propertyName==="value"&&rl(BI)){var B=[];Gh(B,BI,A,Qd(A)),nh(Kb,B)}}function _b(A,B,Q){A==="focusin"?(z0(),br=B,BI=Q,br.attachEvent("onpropertychange",ph)):A==="focusout"&&z0()}function $b(A){if(A==="selectionchange"||A==="keyup"||A==="keydown")return rl(BI)}function Ay(A,B){if(A==="click")return rl(B)}function By(A,B){if(A==="input"||A==="change")return rl(B)}function Qy(A,B){return A===B&&(A!==0||1/A===1/B)||A!==A&&B!==B}var Jt=typeof Object.is=="function"?Object.is:Qy;function QI(A,B){if(Jt(A,B))return!0;if(typeof A!="object"||A===null||typeof B!="object"||B===null)return!1;var Q=Object.keys(A),e=Object.keys(B);if(Q.length!==e.length)return!1;for(e=0;e<Q.length;e++){var t=Q[e];if(!IF.call(B,t)||!Jt(A[t],B[t]))return!1}return!0}function j0(A){for(;A&&A.firstChild;)A=A.firstChild;return A}function P0(A,B){var Q=j0(A);A=0;for(var e;Q;){if(Q.nodeType===3){if(e=A+Q.textContent.length,A<=B&&e>=B)return{node:Q,offset:B-A};A=e}A:{for(;Q;){if(Q.nextSibling){Q=Q.nextSibling;break A}Q=Q.parentNode}Q=void 0}Q=j0(Q)}}function Rh(A,B){return A&&B?A===B?!0:A&&A.nodeType===3?!1:B&&B.nodeType===3?Rh(A,B.parentNode):"contains"in A?A.contains(B):A.compareDocumentPosition?!!(A.compareDocumentPosition(B)&16):!1:!1}function mh(){for(var A=window,B=Fs();B instanceof A.HTMLIFrameElement;){try{var Q=typeof B.contentWindow.location.href=="string"}catch{Q=!1}if(Q)A=B.contentWindow;else break;B=Fs(A.document)}return B}function rd(A){var B=A&&A.nodeName&&A.nodeName.toLowerCase();return B&&(B==="input"&&(A.type==="text"||A.type==="search"||A.type==="tel"||A.type==="url"||A.type==="password")||B==="textarea"||A.contentEditable==="true")}function ey(A){var B=mh(),Q=A.focusedElem,e=A.selectionRange;if(B!==Q&&Q&&Q.ownerDocument&&Rh(Q.ownerDocument.documentElement,Q)){if(e!==null&&rd(Q)){if(B=e.start,A=e.end,A===void 0&&(A=B),"selectionStart"in Q)Q.selectionStart=B,Q.selectionEnd=Math.min(A,Q.value.length);else if(A=(B=Q.ownerDocument||document)&&B.defaultView||window,A.getSelection){A=A.getSelection();var t=Q.textContent.length,g=Math.min(e.start,t);e=e.end===void 0?g:Math.min(e.end,t),!A.extend&&g>e&&(t=e,e=g,g=t),t=P0(Q,g);var n=P0(Q,e);t&&n&&(A.rangeCount!==1||A.anchorNode!==t.node||A.anchorOffset!==t.offset||A.focusNode!==n.node||A.focusOffset!==n.offset)&&(B=B.createRange(),B.setStart(t.node,t.offset),A.removeAllRanges(),g>e?(A.addRange(B),A.extend(n.node,n.offset)):(B.setEnd(n.node,n.offset),A.addRange(B)))}}for(B=[],A=Q;A=A.parentNode;)A.nodeType===1&&B.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof Q.focus=="function"&&Q.focus(),Q=0;Q<B.length;Q++)A=B[Q],A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}var ty=Lg&&"documentMode"in document&&11>=document.documentMode,co=null,NF=null,yr=null,bF=!1;function K0(A,B,Q){var e=Q.window===Q?Q.document:Q.nodeType===9?Q:Q.ownerDocument;bF||co==null||co!==Fs(e)||(e=co,"selectionStart"in e&&rd(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),yr&&QI(yr,e)||(yr=e,e=Gs(NF,"onSelect"),0<e.length&&(B=new Cd("onSelect","select",null,B,Q),A.push({event:B,listeners:e}),B.target=co)))}function Ra(A,B){var Q={};return Q[A.toLowerCase()]=B.toLowerCase(),Q["Webkit"+A]="webkit"+B,Q["Moz"+A]="moz"+B,Q}var wo={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},gw={},Yh={};Lg&&(Yh=document.createElement("div").style,"AnimationEvent"in window||(delete wo.animationend.animation,delete wo.animationiteration.animation,delete wo.animationstart.animation),"TransitionEvent"in window||delete wo.transitionend.transition);function Il(A){if(gw[A])return gw[A];if(!wo[A])return A;var B=wo[A],Q;for(Q in B)if(B.hasOwnProperty(Q)&&Q in Yh)return gw[A]=B[Q];return A}var Nh=Il("animationend"),bh=Il("animationiteration"),yh=Il("animationstart"),kh=Il("transitionend"),Jh=new Map,q0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qn(A,B){Jh.set(A,B),_E(B,[A])}for(var nw=0;nw<q0.length;nw++){var Ew=q0[nw],gy=Ew.toLowerCase(),ny=Ew[0].toUpperCase()+Ew.slice(1);qn(gy,"on"+ny)}qn(Nh,"onAnimationEnd");qn(bh,"onAnimationIteration");qn(yh,"onAnimationStart");qn("dblclick","onDoubleClick");qn("focusin","onFocus");qn("focusout","onBlur");qn(kh,"onTransitionEnd");So("onMouseEnter",["mouseout","mouseover"]);So("onMouseLeave",["mouseout","mouseover"]);So("onPointerEnter",["pointerout","pointerover"]);So("onPointerLeave",["pointerout","pointerover"]);_E("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_E("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_E("onBeforeInput",["compositionend","keypress","textInput","paste"]);_E("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_E("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_E("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ey=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function _0(A,B,Q){var e=A.type||"unknown-event";A.currentTarget=Q,gb(e,B,void 0,A),A.currentTarget=null}function vh(A,B){B=(B&4)!==0;for(var Q=0;Q<A.length;Q++){var e=A[Q],t=e.event;e=e.listeners;A:{var g=void 0;if(B)for(var n=e.length-1;0<=n;n--){var E=e[n],C=E.instance,o=E.currentTarget;if(E=E.listener,C!==g&&t.isPropagationStopped())break A;_0(t,E,o),g=C}else for(n=0;n<e.length;n++){if(E=e[n],C=E.instance,o=E.currentTarget,E=E.listener,C!==g&&t.isPropagationStopped())break A;_0(t,E,o),g=C}}}if(ds)throw A=pF,ds=!1,pF=null,A}function kB(A,B){var Q=B[ZF];Q===void 0&&(Q=B[ZF]=new Set);var e=A+"__bubble";Q.has(e)||(Zh(B,A,2,!1),Q.add(e))}function Cw(A,B,Q){var e=0;B&&(e|=4),Zh(Q,A,e,B)}var ma="_reactListening"+Math.random().toString(36).slice(2);function eI(A){if(!A[ma]){A[ma]=!0,OG.forEach(function(Q){Q!=="selectionchange"&&(Ey.has(Q)||Cw(Q,!1,A),Cw(Q,!0,A))});var B=A.nodeType===9?A:A.ownerDocument;B===null||B[ma]||(B[ma]=!0,Cw("selectionchange",!1,B))}}function Zh(A,B,Q,e){switch(dh(B)){case 1:var t=ub;break;case 4:t=Ub;break;default:t=nd}Q=t.bind(null,B,Q,A),t=void 0,!hF||B!=="touchstart"&&B!=="touchmove"&&B!=="wheel"||(t=!0),e?t!==void 0?A.addEventListener(B,Q,{capture:!0,passive:t}):A.addEventListener(B,Q,!0):t!==void 0?A.addEventListener(B,Q,{passive:t}):A.addEventListener(B,Q,!1)}function ow(A,B,Q,e,t){var g=e;if(!(B&1)&&!(B&2)&&e!==null)A:for(;;){if(e===null)return;var n=e.tag;if(n===3||n===4){var E=e.stateNode.containerInfo;if(E===t||E.nodeType===8&&E.parentNode===t)break;if(n===4)for(n=e.return;n!==null;){var C=n.tag;if((C===3||C===4)&&(C=n.stateNode.containerInfo,C===t||C.nodeType===8&&C.parentNode===t))return;n=n.return}for(;E!==null;){if(n=mE(E),n===null)return;if(C=n.tag,C===5||C===6){e=g=n;continue A}E=E.parentNode}}e=e.return}nh(function(){var o=g,i=Qd(Q),r=[];A:{var I=Jh.get(A);if(I!==void 0){var a=Cd,d=A;switch(A){case"keypress":if(Bs(Q)===0)break A;case"keydown":case"keyup":a=Zb;break;case"focusin":d="focus",a=Qw;break;case"focusout":d="blur",a=Qw;break;case"beforeblur":case"afterblur":a=Qw;break;case"click":if(Q.button===2)break A;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":a=X0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":a=Gb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":a=Xb;break;case Nh:case bh:case yh:a=Rb;break;case kh:a=xb;break;case"scroll":a=fb;break;case"wheel":a=Ob;break;case"copy":case"cut":case"paste":a=Yb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":a=x0}var D=(B&4)!==0,U=!D&&A==="scroll",l=D?I!==null?I+"Capture":null:I;D=[];for(var F=o,c;F!==null;){c=F;var w=c.stateNode;if(c.tag===5&&w!==null&&(c=w,l!==null&&(w=qr(F,l),w!=null&&D.push(tI(F,w,c)))),U)break;F=F.return}0<D.length&&(I=new a(I,d,null,Q,i),r.push({event:I,listeners:D}))}}if(!(B&7)){A:{if(I=A==="mouseover"||A==="pointerover",a=A==="mouseout"||A==="pointerout",I&&Q!==MF&&(d=Q.relatedTarget||Q.fromElement)&&(mE(d)||d[Sg]))break A;if((a||I)&&(I=i.window===i?i:(I=i.ownerDocument)?I.defaultView||I.parentWindow:window,a?(d=Q.relatedTarget||Q.toElement,a=o,d=d?mE(d):null,d!==null&&(U=$E(d),d!==U||d.tag!==5&&d.tag!==6)&&(d=null)):(a=null,d=o),a!==d)){if(D=X0,w="onMouseLeave",l="onMouseEnter",F="mouse",(A==="pointerout"||A==="pointerover")&&(D=x0,w="onPointerLeave",l="onPointerEnter",F="pointer"),U=a==null?I:Fo(a),c=d==null?I:Fo(d),I=new D(w,F+"leave",a,Q,i),I.target=U,I.relatedTarget=c,w=null,mE(i)===o&&(D=new D(l,F+"enter",d,Q,i),D.target=c,D.relatedTarget=U,w=D),U=w,a&&d)B:{for(D=a,l=d,F=0,c=D;c;c=qC(c))F++;for(c=0,w=l;w;w=qC(w))c++;for(;0<F-c;)D=qC(D),F--;for(;0<c-F;)l=qC(l),c--;for(;F--;){if(D===l||l!==null&&D===l.alternate)break B;D=qC(D),l=qC(l)}D=null}else D=null;a!==null&&$0(r,I,a,D,!1),d!==null&&U!==null&&$0(r,U,d,D,!0)}}A:{if(I=o?Fo(o):window,a=I.nodeName&&I.nodeName.toLowerCase(),a==="select"||a==="input"&&I.type==="file")var M=qb;else if(T0(I))if(hh)M=By;else{M=$b;var Y=_b}else(a=I.nodeName)&&a.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(M=Ay);if(M&&(M=M(A,o))){Gh(r,M,Q,i);break A}Y&&Y(A,I,o),A==="focusout"&&(Y=I._wrapperState)&&Y.controlled&&I.type==="number"&&DF(I,"number",I.value)}switch(Y=o?Fo(o):window,A){case"focusin":(T0(Y)||Y.contentEditable==="true")&&(co=Y,NF=o,yr=null);break;case"focusout":yr=NF=co=null;break;case"mousedown":bF=!0;break;case"contextmenu":case"mouseup":case"dragend":bF=!1,K0(r,Q,i);break;case"selectionchange":if(ty)break;case"keydown":case"keyup":K0(r,Q,i)}var p;if(id)A:{switch(A){case"compositionstart":var k="onCompositionStart";break A;case"compositionend":k="onCompositionEnd";break A;case"compositionupdate":k="onCompositionUpdate";break A}k=void 0}else lo?fh(A,Q)&&(k="onCompositionEnd"):A==="keydown"&&Q.keyCode===229&&(k="onCompositionStart");k&&(Uh&&Q.locale!=="ko"&&(lo||k!=="onCompositionStart"?k==="onCompositionEnd"&&lo&&(p=uh()):(Yn=i,Ed="value"in Yn?Yn.value:Yn.textContent,lo=!0)),Y=Gs(o,k),0<Y.length&&(k=new H0(k,A,null,Q,i),r.push({event:k,listeners:Y}),p?k.data=p:(p=Mh(Q),p!==null&&(k.data=p)))),(p=Vb?zb(A,Q):jb(A,Q))&&(o=Gs(o,"onBeforeInput"),0<o.length&&(i=new H0("onBeforeInput","beforeinput",null,Q,i),r.push({event:i,listeners:o}),i.data=p))}vh(r,B)})}function tI(A,B,Q){return{instance:A,listener:B,currentTarget:Q}}function Gs(A,B){for(var Q=B+"Capture",e=[];A!==null;){var t=A,g=t.stateNode;t.tag===5&&g!==null&&(t=g,g=qr(A,Q),g!=null&&e.unshift(tI(A,g,t)),g=qr(A,B),g!=null&&e.push(tI(A,g,t))),A=A.return}return e}function qC(A){if(A===null)return null;do A=A.return;while(A&&A.tag!==5);return A||null}function $0(A,B,Q,e,t){for(var g=B._reactName,n=[];Q!==null&&Q!==e;){var E=Q,C=E.alternate,o=E.stateNode;if(C!==null&&C===e)break;E.tag===5&&o!==null&&(E=o,t?(C=qr(Q,g),C!=null&&n.unshift(tI(Q,C,E))):t||(C=qr(Q,g),C!=null&&n.push(tI(Q,C,E)))),Q=Q.return}n.length!==0&&A.push({event:B,listeners:n})}var Cy=/\r\n?/g,oy=/\u0000|\uFFFD/g;function AU(A){return(typeof A=="string"?A:""+A).replace(Cy,`
`).replace(oy,"")}function Ya(A,B,Q){if(B=AU(B),AU(A)!==B&&Q)throw Error(CA(425))}function hs(){}var yF=null,kF=null;function JF(A,B){return A==="textarea"||A==="noscript"||typeof B.children=="string"||typeof B.children=="number"||typeof B.dangerouslySetInnerHTML=="object"&&B.dangerouslySetInnerHTML!==null&&B.dangerouslySetInnerHTML.__html!=null}var vF=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,BU=typeof Promise=="function"?Promise:void 0,ry=typeof queueMicrotask=="function"?queueMicrotask:typeof BU<"u"?function(A){return BU.resolve(null).then(A).catch(Iy)}:vF;function Iy(A){setTimeout(function(){throw A})}function iw(A,B){var Q=B,e=0;do{var t=Q.nextSibling;if(A.removeChild(Q),t&&t.nodeType===8)if(Q=t.data,Q==="/$"){if(e===0){A.removeChild(t),AI(B);return}e--}else Q!=="$"&&Q!=="$?"&&Q!=="$!"||e++;Q=t}while(Q);AI(B)}function Zn(A){for(;A!=null;A=A.nextSibling){var B=A.nodeType;if(B===1||B===3)break;if(B===8){if(B=A.data,B==="$"||B==="$!"||B==="$?")break;if(B==="/$")return null}}return A}function QU(A){A=A.previousSibling;for(var B=0;A;){if(A.nodeType===8){var Q=A.data;if(Q==="$"||Q==="$!"||Q==="$?"){if(B===0)return A;B--}else Q==="/$"&&B++}A=A.previousSibling}return null}var ti=Math.random().toString(36).slice(2),$t="__reactFiber$"+ti,gI="__reactProps$"+ti,Sg="__reactContainer$"+ti,ZF="__reactEvents$"+ti,ay="__reactListeners$"+ti,sy="__reactHandles$"+ti;function mE(A){var B=A[$t];if(B)return B;for(var Q=A.parentNode;Q;){if(B=Q[Sg]||Q[$t]){if(Q=B.alternate,B.child!==null||Q!==null&&Q.child!==null)for(A=QU(A);A!==null;){if(Q=A[$t])return Q;A=QU(A)}return B}A=Q,Q=A.parentNode}return null}function yI(A){return A=A[$t]||A[Sg],!A||A.tag!==5&&A.tag!==6&&A.tag!==13&&A.tag!==3?null:A}function Fo(A){if(A.tag===5||A.tag===6)return A.stateNode;throw Error(CA(33))}function al(A){return A[gI]||null}var LF=[],Do=-1;function _n(A){return{current:A}}function JB(A){0>Do||(A.current=LF[Do],LF[Do]=null,Do--)}function mB(A,B){Do++,LF[Do]=A.current,A.current=B}var Tn={},zQ=_n(Tn),re=_n(!1),XE=Tn;function Xo(A,B){var Q=A.type.contextTypes;if(!Q)return Tn;var e=A.stateNode;if(e&&e.__reactInternalMemoizedUnmaskedChildContext===B)return e.__reactInternalMemoizedMaskedChildContext;var t={},g;for(g in Q)t[g]=B[g];return e&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=B,A.__reactInternalMemoizedMaskedChildContext=t),t}function Ie(A){return A=A.childContextTypes,A!=null}function ps(){JB(re),JB(zQ)}function eU(A,B,Q){if(zQ.current!==Tn)throw Error(CA(168));mB(zQ,B),mB(re,Q)}function Lh(A,B,Q){var e=A.stateNode;if(B=B.childContextTypes,typeof e.getChildContext!="function")return Q;e=e.getChildContext();for(var t in e)if(!(t in B))throw Error(CA(108,_N(A)||"Unknown",t));return VB({},Q,e)}function Rs(A){return A=(A=A.stateNode)&&A.__reactInternalMemoizedMergedChildContext||Tn,XE=zQ.current,mB(zQ,A),mB(re,re.current),!0}function tU(A,B,Q){var e=A.stateNode;if(!e)throw Error(CA(169));Q?(A=Lh(A,B,XE),e.__reactInternalMemoizedMergedChildContext=A,JB(re),JB(zQ),mB(zQ,A)):JB(re),mB(re,Q)}var yg=null,sl=!1,rw=!1;function Sh(A){yg===null?yg=[A]:yg.push(A)}function ly(A){sl=!0,Sh(A)}function $n(){if(!rw&&yg!==null){rw=!0;var A=0,B=dB;try{var Q=yg;for(dB=1;A<Q.length;A++){var e=Q[A];do e=e(!0);while(e!==null)}yg=null,sl=!1}catch(t){throw yg!==null&&(yg=yg.slice(A+1)),ih(ed,$n),t}finally{dB=B,rw=!1}}return null}var uo=[],Uo=0,ms=null,Ys=0,Qt=[],et=0,HE=null,Jg=1,vg="";function fE(A,B){uo[Uo++]=Ys,uo[Uo++]=ms,ms=A,Ys=B}function Xh(A,B,Q){Qt[et++]=Jg,Qt[et++]=vg,Qt[et++]=HE,HE=A;var e=Jg;A=vg;var t=32-yt(e)-1;e&=~(1<<t),Q+=1;var g=32-yt(B)+t;if(30<g){var n=t-t%5;g=(e&(1<<n)-1).toString(32),e>>=n,t-=n,Jg=1<<32-yt(B)+t|Q<<t|e,vg=g+A}else Jg=1<<g|Q<<t|e,vg=A}function Id(A){A.return!==null&&(fE(A,1),Xh(A,1,0))}function ad(A){for(;A===ms;)ms=uo[--Uo],uo[Uo]=null,Ys=uo[--Uo],uo[Uo]=null;for(;A===HE;)HE=Qt[--et],Qt[et]=null,vg=Qt[--et],Qt[et]=null,Jg=Qt[--et],Qt[et]=null}var ve=null,ke=null,HB=!1,bt=null;function Hh(A,B){var Q=nt(5,null,null,0);Q.elementType="DELETED",Q.stateNode=B,Q.return=A,B=A.deletions,B===null?(A.deletions=[Q],A.flags|=16):B.push(Q)}function gU(A,B){switch(A.tag){case 5:var Q=A.type;return B=B.nodeType!==1||Q.toLowerCase()!==B.nodeName.toLowerCase()?null:B,B!==null?(A.stateNode=B,ve=A,ke=Zn(B.firstChild),!0):!1;case 6:return B=A.pendingProps===""||B.nodeType!==3?null:B,B!==null?(A.stateNode=B,ve=A,ke=null,!0):!1;case 13:return B=B.nodeType!==8?null:B,B!==null?(Q=HE!==null?{id:Jg,overflow:vg}:null,A.memoizedState={dehydrated:B,treeContext:Q,retryLane:1073741824},Q=nt(18,null,null,0),Q.stateNode=B,Q.return=A,A.child=Q,ve=A,ke=null,!0):!1;default:return!1}}function SF(A){return(A.mode&1)!==0&&(A.flags&128)===0}function XF(A){if(HB){var B=ke;if(B){var Q=B;if(!gU(A,B)){if(SF(A))throw Error(CA(418));B=Zn(Q.nextSibling);var e=ve;B&&gU(A,B)?Hh(e,Q):(A.flags=A.flags&-4097|2,HB=!1,ve=A)}}else{if(SF(A))throw Error(CA(418));A.flags=A.flags&-4097|2,HB=!1,ve=A}}}function nU(A){for(A=A.return;A!==null&&A.tag!==5&&A.tag!==3&&A.tag!==13;)A=A.return;ve=A}function Na(A){if(A!==ve)return!1;if(!HB)return nU(A),HB=!0,!1;var B;if((B=A.tag!==3)&&!(B=A.tag!==5)&&(B=A.type,B=B!=="head"&&B!=="body"&&!JF(A.type,A.memoizedProps)),B&&(B=ke)){if(SF(A))throw xh(),Error(CA(418));for(;B;)Hh(A,B),B=Zn(B.nextSibling)}if(nU(A),A.tag===13){if(A=A.memoizedState,A=A!==null?A.dehydrated:null,!A)throw Error(CA(317));A:{for(A=A.nextSibling,B=0;A;){if(A.nodeType===8){var Q=A.data;if(Q==="/$"){if(B===0){ke=Zn(A.nextSibling);break A}B--}else Q!=="$"&&Q!=="$!"&&Q!=="$?"||B++}A=A.nextSibling}ke=null}}else ke=ve?Zn(A.stateNode.nextSibling):null;return!0}function xh(){for(var A=ke;A;)A=Zn(A.nextSibling)}function Ho(){ke=ve=null,HB=!1}function sd(A){bt===null?bt=[A]:bt.push(A)}var cy=Og.ReactCurrentBatchConfig;function Yt(A,B){if(A&&A.defaultProps){B=VB({},B),A=A.defaultProps;for(var Q in A)B[Q]===void 0&&(B[Q]=A[Q]);return B}return B}var Ns=_n(null),bs=null,fo=null,ld=null;function cd(){ld=fo=bs=null}function wd(A){var B=Ns.current;JB(Ns),A._currentValue=B}function HF(A,B,Q){for(;A!==null;){var e=A.alternate;if((A.childLanes&B)!==B?(A.childLanes|=B,e!==null&&(e.childLanes|=B)):e!==null&&(e.childLanes&B)!==B&&(e.childLanes|=B),A===Q)break;A=A.return}}function bo(A,B){bs=A,ld=fo=null,A=A.dependencies,A!==null&&A.firstContext!==null&&(A.lanes&B&&(ie=!0),A.firstContext=null)}function it(A){var B=A._currentValue;if(ld!==A)if(A={context:A,memoizedValue:B,next:null},fo===null){if(bs===null)throw Error(CA(308));fo=A,bs.dependencies={lanes:0,firstContext:A}}else fo=fo.next=A;return B}var YE=null;function Fd(A){YE===null?YE=[A]:YE.push(A)}function Wh(A,B,Q,e){var t=B.interleaved;return t===null?(Q.next=Q,Fd(B)):(Q.next=t.next,t.next=Q),B.interleaved=Q,Xg(A,e)}function Xg(A,B){A.lanes|=B;var Q=A.alternate;for(Q!==null&&(Q.lanes|=B),Q=A,A=A.return;A!==null;)A.childLanes|=B,Q=A.alternate,Q!==null&&(Q.childLanes|=B),Q=A,A=A.return;return Q.tag===3?Q.stateNode:null}var hn=!1;function Dd(A){A.updateQueue={baseState:A.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oh(A,B){A=A.updateQueue,B.updateQueue===A&&(B.updateQueue={baseState:A.baseState,firstBaseUpdate:A.firstBaseUpdate,lastBaseUpdate:A.lastBaseUpdate,shared:A.shared,effects:A.effects})}function Zg(A,B){return{eventTime:A,lane:B,tag:0,payload:null,callback:null,next:null}}function Ln(A,B,Q){var e=A.updateQueue;if(e===null)return null;if(e=e.shared,aB&2){var t=e.pending;return t===null?B.next=B:(B.next=t.next,t.next=B),e.pending=B,Xg(A,Q)}return t=e.interleaved,t===null?(B.next=B,Fd(e)):(B.next=t.next,t.next=B),e.interleaved=B,Xg(A,Q)}function Qs(A,B,Q){if(B=B.updateQueue,B!==null&&(B=B.shared,(Q&4194240)!==0)){var e=B.lanes;e&=A.pendingLanes,Q|=e,B.lanes=Q,td(A,Q)}}function EU(A,B){var Q=A.updateQueue,e=A.alternate;if(e!==null&&(e=e.updateQueue,Q===e)){var t=null,g=null;if(Q=Q.firstBaseUpdate,Q!==null){do{var n={eventTime:Q.eventTime,lane:Q.lane,tag:Q.tag,payload:Q.payload,callback:Q.callback,next:null};g===null?t=g=n:g=g.next=n,Q=Q.next}while(Q!==null);g===null?t=g=B:g=g.next=B}else t=g=B;Q={baseState:e.baseState,firstBaseUpdate:t,lastBaseUpdate:g,shared:e.shared,effects:e.effects},A.updateQueue=Q;return}A=Q.lastBaseUpdate,A===null?Q.firstBaseUpdate=B:A.next=B,Q.lastBaseUpdate=B}function ys(A,B,Q,e){var t=A.updateQueue;hn=!1;var g=t.firstBaseUpdate,n=t.lastBaseUpdate,E=t.shared.pending;if(E!==null){t.shared.pending=null;var C=E,o=C.next;C.next=null,n===null?g=o:n.next=o,n=C;var i=A.alternate;i!==null&&(i=i.updateQueue,E=i.lastBaseUpdate,E!==n&&(E===null?i.firstBaseUpdate=o:E.next=o,i.lastBaseUpdate=C))}if(g!==null){var r=t.baseState;n=0,i=o=C=null,E=g;do{var I=E.lane,a=E.eventTime;if((e&I)===I){i!==null&&(i=i.next={eventTime:a,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});A:{var d=A,D=E;switch(I=B,a=Q,D.tag){case 1:if(d=D.payload,typeof d=="function"){r=d.call(a,r,I);break A}r=d;break A;case 3:d.flags=d.flags&-65537|128;case 0:if(d=D.payload,I=typeof d=="function"?d.call(a,r,I):d,I==null)break A;r=VB({},r,I);break A;case 2:hn=!0}}E.callback!==null&&E.lane!==0&&(A.flags|=64,I=t.effects,I===null?t.effects=[E]:I.push(E))}else a={eventTime:a,lane:I,tag:E.tag,payload:E.payload,callback:E.callback,next:null},i===null?(o=i=a,C=r):i=i.next=a,n|=I;if(E=E.next,E===null){if(E=t.shared.pending,E===null)break;I=E,E=I.next,I.next=null,t.lastBaseUpdate=I,t.shared.pending=null}}while(!0);if(i===null&&(C=r),t.baseState=C,t.firstBaseUpdate=o,t.lastBaseUpdate=i,B=t.shared.interleaved,B!==null){t=B;do n|=t.lane,t=t.next;while(t!==B)}else g===null&&(t.shared.lanes=0);WE|=n,A.lanes=n,A.memoizedState=r}}function CU(A,B,Q){if(A=B.effects,B.effects=null,A!==null)for(B=0;B<A.length;B++){var e=A[B],t=e.callback;if(t!==null){if(e.callback=null,e=Q,typeof t!="function")throw Error(CA(191,t));t.call(e)}}}var Th=new WG.Component().refs;function xF(A,B,Q,e){B=A.memoizedState,Q=Q(e,B),Q=Q==null?B:VB({},B,Q),A.memoizedState=Q,A.lanes===0&&(A.updateQueue.baseState=Q)}var ll={isMounted:function(A){return(A=A._reactInternals)?$E(A)===A:!1},enqueueSetState:function(A,B,Q){A=A._reactInternals;var e=qQ(),t=Xn(A),g=Zg(e,t);g.payload=B,Q!=null&&(g.callback=Q),B=Ln(A,g,t),B!==null&&(kt(B,A,t,e),Qs(B,A,t))},enqueueReplaceState:function(A,B,Q){A=A._reactInternals;var e=qQ(),t=Xn(A),g=Zg(e,t);g.tag=1,g.payload=B,Q!=null&&(g.callback=Q),B=Ln(A,g,t),B!==null&&(kt(B,A,t,e),Qs(B,A,t))},enqueueForceUpdate:function(A,B){A=A._reactInternals;var Q=qQ(),e=Xn(A),t=Zg(Q,e);t.tag=2,B!=null&&(t.callback=B),B=Ln(A,t,e),B!==null&&(kt(B,A,e,Q),Qs(B,A,e))}};function oU(A,B,Q,e,t,g,n){return A=A.stateNode,typeof A.shouldComponentUpdate=="function"?A.shouldComponentUpdate(e,g,n):B.prototype&&B.prototype.isPureReactComponent?!QI(Q,e)||!QI(t,g):!0}function Vh(A,B,Q){var e=!1,t=Tn,g=B.contextType;return typeof g=="object"&&g!==null?g=it(g):(t=Ie(B)?XE:zQ.current,e=B.contextTypes,g=(e=e!=null)?Xo(A,t):Tn),B=new B(Q,g),A.memoizedState=B.state!==null&&B.state!==void 0?B.state:null,B.updater=ll,A.stateNode=B,B._reactInternals=A,e&&(A=A.stateNode,A.__reactInternalMemoizedUnmaskedChildContext=t,A.__reactInternalMemoizedMaskedChildContext=g),B}function iU(A,B,Q,e){A=B.state,typeof B.componentWillReceiveProps=="function"&&B.componentWillReceiveProps(Q,e),typeof B.UNSAFE_componentWillReceiveProps=="function"&&B.UNSAFE_componentWillReceiveProps(Q,e),B.state!==A&&ll.enqueueReplaceState(B,B.state,null)}function WF(A,B,Q,e){var t=A.stateNode;t.props=Q,t.state=A.memoizedState,t.refs=Th,Dd(A);var g=B.contextType;typeof g=="object"&&g!==null?t.context=it(g):(g=Ie(B)?XE:zQ.current,t.context=Xo(A,g)),t.state=A.memoizedState,g=B.getDerivedStateFromProps,typeof g=="function"&&(xF(A,B,g,Q),t.state=A.memoizedState),typeof B.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(B=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),B!==t.state&&ll.enqueueReplaceState(t,t.state,null),ys(A,Q,t,e),t.state=A.memoizedState),typeof t.componentDidMount=="function"&&(A.flags|=4194308)}function gr(A,B,Q){if(A=Q.ref,A!==null&&typeof A!="function"&&typeof A!="object"){if(Q._owner){if(Q=Q._owner,Q){if(Q.tag!==1)throw Error(CA(309));var e=Q.stateNode}if(!e)throw Error(CA(147,A));var t=e,g=""+A;return B!==null&&B.ref!==null&&typeof B.ref=="function"&&B.ref._stringRef===g?B.ref:(B=function(n){var E=t.refs;E===Th&&(E=t.refs={}),n===null?delete E[g]:E[g]=n},B._stringRef=g,B)}if(typeof A!="string")throw Error(CA(284));if(!Q._owner)throw Error(CA(290,A))}return A}function ba(A,B){throw A=Object.prototype.toString.call(B),Error(CA(31,A==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":A))}function rU(A){var B=A._init;return B(A._payload)}function zh(A){function B(l,F){if(A){var c=l.deletions;c===null?(l.deletions=[F],l.flags|=16):c.push(F)}}function Q(l,F){if(!A)return null;for(;F!==null;)B(l,F),F=F.sibling;return null}function e(l,F){for(l=new Map;F!==null;)F.key!==null?l.set(F.key,F):l.set(F.index,F),F=F.sibling;return l}function t(l,F){return l=Hn(l,F),l.index=0,l.sibling=null,l}function g(l,F,c){return l.index=c,A?(c=l.alternate,c!==null?(c=c.index,c<F?(l.flags|=2,F):c):(l.flags|=2,F)):(l.flags|=1048576,F)}function n(l){return A&&l.alternate===null&&(l.flags|=2),l}function E(l,F,c,w){return F===null||F.tag!==6?(F=Fw(c,l.mode,w),F.return=l,F):(F=t(F,c),F.return=l,F)}function C(l,F,c,w){var M=c.type;return M===so?i(l,F,c.props.children,w,c.key):F!==null&&(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gn&&rU(M)===F.type)?(w=t(F,c.props),w.ref=gr(l,F,c),w.return=l,w):(w=Cs(c.type,c.key,c.props,null,l.mode,w),w.ref=gr(l,F,c),w.return=l,w)}function o(l,F,c,w){return F===null||F.tag!==4||F.stateNode.containerInfo!==c.containerInfo||F.stateNode.implementation!==c.implementation?(F=Dw(c,l.mode,w),F.return=l,F):(F=t(F,c.children||[]),F.return=l,F)}function i(l,F,c,w,M){return F===null||F.tag!==7?(F=vE(c,l.mode,w,M),F.return=l,F):(F=t(F,c),F.return=l,F)}function r(l,F,c){if(typeof F=="string"&&F!==""||typeof F=="number")return F=Fw(""+F,l.mode,c),F.return=l,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ua:return c=Cs(F.type,F.key,F.props,null,l.mode,c),c.ref=gr(l,null,F),c.return=l,c;case ao:return F=Dw(F,l.mode,c),F.return=l,F;case Gn:var w=F._init;return r(l,w(F._payload),c)}if(ur(F)||Ar(F))return F=vE(F,l.mode,c,null),F.return=l,F;ba(l,F)}return null}function I(l,F,c,w){var M=F!==null?F.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return M!==null?null:E(l,F,""+c,w);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ua:return c.key===M?C(l,F,c,w):null;case ao:return c.key===M?o(l,F,c,w):null;case Gn:return M=c._init,I(l,F,M(c._payload),w)}if(ur(c)||Ar(c))return M!==null?null:i(l,F,c,w,null);ba(l,c)}return null}function a(l,F,c,w,M){if(typeof w=="string"&&w!==""||typeof w=="number")return l=l.get(c)||null,E(F,l,""+w,M);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ua:return l=l.get(w.key===null?c:w.key)||null,C(F,l,w,M);case ao:return l=l.get(w.key===null?c:w.key)||null,o(F,l,w,M);case Gn:var Y=w._init;return a(l,F,c,Y(w._payload),M)}if(ur(w)||Ar(w))return l=l.get(c)||null,i(F,l,w,M,null);ba(F,w)}return null}function d(l,F,c,w){for(var M=null,Y=null,p=F,k=F=0,Z=null;p!==null&&k<c.length;k++){p.index>k?(Z=p,p=null):Z=p.sibling;var J=I(l,p,c[k],w);if(J===null){p===null&&(p=Z);break}A&&p&&J.alternate===null&&B(l,p),F=g(J,F,k),Y===null?M=J:Y.sibling=J,Y=J,p=Z}if(k===c.length)return Q(l,p),HB&&fE(l,k),M;if(p===null){for(;k<c.length;k++)p=r(l,c[k],w),p!==null&&(F=g(p,F,k),Y===null?M=p:Y.sibling=p,Y=p);return HB&&fE(l,k),M}for(p=e(l,p);k<c.length;k++)Z=a(p,l,k,c[k],w),Z!==null&&(A&&Z.alternate!==null&&p.delete(Z.key===null?k:Z.key),F=g(Z,F,k),Y===null?M=Z:Y.sibling=Z,Y=Z);return A&&p.forEach(function(W){return B(l,W)}),HB&&fE(l,k),M}function D(l,F,c,w){var M=Ar(c);if(typeof M!="function")throw Error(CA(150));if(c=M.call(c),c==null)throw Error(CA(151));for(var Y=M=null,p=F,k=F=0,Z=null,J=c.next();p!==null&&!J.done;k++,J=c.next()){p.index>k?(Z=p,p=null):Z=p.sibling;var W=I(l,p,J.value,w);if(W===null){p===null&&(p=Z);break}A&&p&&W.alternate===null&&B(l,p),F=g(W,F,k),Y===null?M=W:Y.sibling=W,Y=W,p=Z}if(J.done)return Q(l,p),HB&&fE(l,k),M;if(p===null){for(;!J.done;k++,J=c.next())J=r(l,J.value,w),J!==null&&(F=g(J,F,k),Y===null?M=J:Y.sibling=J,Y=J);return HB&&fE(l,k),M}for(p=e(l,p);!J.done;k++,J=c.next())J=a(p,l,k,J.value,w),J!==null&&(A&&J.alternate!==null&&p.delete(J.key===null?k:J.key),F=g(J,F,k),Y===null?M=J:Y.sibling=J,Y=J);return A&&p.forEach(function(T){return B(l,T)}),HB&&fE(l,k),M}function U(l,F,c,w){if(typeof c=="object"&&c!==null&&c.type===so&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case ua:A:{for(var M=c.key,Y=F;Y!==null;){if(Y.key===M){if(M=c.type,M===so){if(Y.tag===7){Q(l,Y.sibling),F=t(Y,c.props.children),F.return=l,l=F;break A}}else if(Y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gn&&rU(M)===Y.type){Q(l,Y.sibling),F=t(Y,c.props),F.ref=gr(l,Y,c),F.return=l,l=F;break A}Q(l,Y);break}else B(l,Y);Y=Y.sibling}c.type===so?(F=vE(c.props.children,l.mode,w,c.key),F.return=l,l=F):(w=Cs(c.type,c.key,c.props,null,l.mode,w),w.ref=gr(l,F,c),w.return=l,l=w)}return n(l);case ao:A:{for(Y=c.key;F!==null;){if(F.key===Y)if(F.tag===4&&F.stateNode.containerInfo===c.containerInfo&&F.stateNode.implementation===c.implementation){Q(l,F.sibling),F=t(F,c.children||[]),F.return=l,l=F;break A}else{Q(l,F);break}else B(l,F);F=F.sibling}F=Dw(c,l.mode,w),F.return=l,l=F}return n(l);case Gn:return Y=c._init,U(l,F,Y(c._payload),w)}if(ur(c))return d(l,F,c,w);if(Ar(c))return D(l,F,c,w);ba(l,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,F!==null&&F.tag===6?(Q(l,F.sibling),F=t(F,c),F.return=l,l=F):(Q(l,F),F=Fw(c,l.mode,w),F.return=l,l=F),n(l)):Q(l,F)}return U}var xo=zh(!0),jh=zh(!1),kI={},Qg=_n(kI),nI=_n(kI),EI=_n(kI);function NE(A){if(A===kI)throw Error(CA(174));return A}function dd(A,B){switch(mB(EI,B),mB(nI,A),mB(Qg,kI),A=B.nodeType,A){case 9:case 11:B=(B=B.documentElement)?B.namespaceURI:uF(null,"");break;default:A=A===8?B.parentNode:B,B=A.namespaceURI||null,A=A.tagName,B=uF(B,A)}JB(Qg),mB(Qg,B)}function Wo(){JB(Qg),JB(nI),JB(EI)}function Ph(A){NE(EI.current);var B=NE(Qg.current),Q=uF(B,A.type);B!==Q&&(mB(nI,A),mB(Qg,Q))}function ud(A){nI.current===A&&(JB(Qg),JB(nI))}var OB=_n(0);function ks(A){for(var B=A;B!==null;){if(B.tag===13){var Q=B.memoizedState;if(Q!==null&&(Q=Q.dehydrated,Q===null||Q.data==="$?"||Q.data==="$!"))return B}else if(B.tag===19&&B.memoizedProps.revealOrder!==void 0){if(B.flags&128)return B}else if(B.child!==null){B.child.return=B,B=B.child;continue}if(B===A)break;for(;B.sibling===null;){if(B.return===null||B.return===A)return null;B=B.return}B.sibling.return=B.return,B=B.sibling}return null}var Iw=[];function Ud(){for(var A=0;A<Iw.length;A++)Iw[A]._workInProgressVersionPrimary=null;Iw.length=0}var es=Og.ReactCurrentDispatcher,aw=Og.ReactCurrentBatchConfig,xE=0,TB=null,lQ=null,MQ=null,Js=!1,kr=!1,CI=0,wy=0;function HQ(){throw Error(CA(321))}function fd(A,B){if(B===null)return!1;for(var Q=0;Q<B.length&&Q<A.length;Q++)if(!Jt(A[Q],B[Q]))return!1;return!0}function Md(A,B,Q,e,t,g){if(xE=g,TB=B,B.memoizedState=null,B.updateQueue=null,B.lanes=0,es.current=A===null||A.memoizedState===null?uy:Uy,A=Q(e,t),kr){g=0;do{if(kr=!1,CI=0,25<=g)throw Error(CA(301));g+=1,MQ=lQ=null,B.updateQueue=null,es.current=fy,A=Q(e,t)}while(kr)}if(es.current=vs,B=lQ!==null&&lQ.next!==null,xE=0,MQ=lQ=TB=null,Js=!1,B)throw Error(CA(300));return A}function Gd(){var A=CI!==0;return CI=0,A}function Kt(){var A={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return MQ===null?TB.memoizedState=MQ=A:MQ=MQ.next=A,MQ}function rt(){if(lQ===null){var A=TB.alternate;A=A!==null?A.memoizedState:null}else A=lQ.next;var B=MQ===null?TB.memoizedState:MQ.next;if(B!==null)MQ=B,lQ=A;else{if(A===null)throw Error(CA(310));lQ=A,A={memoizedState:lQ.memoizedState,baseState:lQ.baseState,baseQueue:lQ.baseQueue,queue:lQ.queue,next:null},MQ===null?TB.memoizedState=MQ=A:MQ=MQ.next=A}return MQ}function oI(A,B){return typeof B=="function"?B(A):B}function sw(A){var B=rt(),Q=B.queue;if(Q===null)throw Error(CA(311));Q.lastRenderedReducer=A;var e=lQ,t=e.baseQueue,g=Q.pending;if(g!==null){if(t!==null){var n=t.next;t.next=g.next,g.next=n}e.baseQueue=t=g,Q.pending=null}if(t!==null){g=t.next,e=e.baseState;var E=n=null,C=null,o=g;do{var i=o.lane;if((xE&i)===i)C!==null&&(C=C.next={lane:0,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),e=o.hasEagerState?o.eagerState:A(e,o.action);else{var r={lane:i,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null};C===null?(E=C=r,n=e):C=C.next=r,TB.lanes|=i,WE|=i}o=o.next}while(o!==null&&o!==g);C===null?n=e:C.next=E,Jt(e,B.memoizedState)||(ie=!0),B.memoizedState=e,B.baseState=n,B.baseQueue=C,Q.lastRenderedState=e}if(A=Q.interleaved,A!==null){t=A;do g=t.lane,TB.lanes|=g,WE|=g,t=t.next;while(t!==A)}else t===null&&(Q.lanes=0);return[B.memoizedState,Q.dispatch]}function lw(A){var B=rt(),Q=B.queue;if(Q===null)throw Error(CA(311));Q.lastRenderedReducer=A;var e=Q.dispatch,t=Q.pending,g=B.memoizedState;if(t!==null){Q.pending=null;var n=t=t.next;do g=A(g,n.action),n=n.next;while(n!==t);Jt(g,B.memoizedState)||(ie=!0),B.memoizedState=g,B.baseQueue===null&&(B.baseState=g),Q.lastRenderedState=g}return[g,e]}function Kh(){}function qh(A,B){var Q=TB,e=rt(),t=B(),g=!Jt(e.memoizedState,t);if(g&&(e.memoizedState=t,ie=!0),e=e.queue,hd(Ap.bind(null,Q,e,A),[A]),e.getSnapshot!==B||g||MQ!==null&&MQ.memoizedState.tag&1){if(Q.flags|=2048,iI(9,$h.bind(null,Q,e,t,B),void 0,null),GQ===null)throw Error(CA(349));xE&30||_h(Q,B,t)}return t}function _h(A,B,Q){A.flags|=16384,A={getSnapshot:B,value:Q},B=TB.updateQueue,B===null?(B={lastEffect:null,stores:null},TB.updateQueue=B,B.stores=[A]):(Q=B.stores,Q===null?B.stores=[A]:Q.push(A))}function $h(A,B,Q,e){B.value=Q,B.getSnapshot=e,Bp(B)&&Qp(A)}function Ap(A,B,Q){return Q(function(){Bp(B)&&Qp(A)})}function Bp(A){var B=A.getSnapshot;A=A.value;try{var Q=B();return!Jt(A,Q)}catch{return!0}}function Qp(A){var B=Xg(A,1);B!==null&&kt(B,A,1,-1)}function IU(A){var B=Kt();return typeof A=="function"&&(A=A()),B.memoizedState=B.baseState=A,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oI,lastRenderedState:A},B.queue=A,A=A.dispatch=dy.bind(null,TB,A),[B.memoizedState,A]}function iI(A,B,Q,e){return A={tag:A,create:B,destroy:Q,deps:e,next:null},B=TB.updateQueue,B===null?(B={lastEffect:null,stores:null},TB.updateQueue=B,B.lastEffect=A.next=A):(Q=B.lastEffect,Q===null?B.lastEffect=A.next=A:(e=Q.next,Q.next=A,A.next=e,B.lastEffect=A)),A}function ep(){return rt().memoizedState}function ts(A,B,Q,e){var t=Kt();TB.flags|=A,t.memoizedState=iI(1|B,Q,void 0,e===void 0?null:e)}function cl(A,B,Q,e){var t=rt();e=e===void 0?null:e;var g=void 0;if(lQ!==null){var n=lQ.memoizedState;if(g=n.destroy,e!==null&&fd(e,n.deps)){t.memoizedState=iI(B,Q,g,e);return}}TB.flags|=A,t.memoizedState=iI(1|B,Q,g,e)}function aU(A,B){return ts(8390656,8,A,B)}function hd(A,B){return cl(2048,8,A,B)}function tp(A,B){return cl(4,2,A,B)}function gp(A,B){return cl(4,4,A,B)}function np(A,B){if(typeof B=="function")return A=A(),B(A),function(){B(null)};if(B!=null)return A=A(),B.current=A,function(){B.current=null}}function Ep(A,B,Q){return Q=Q!=null?Q.concat([A]):null,cl(4,4,np.bind(null,B,A),Q)}function pd(){}function Cp(A,B){var Q=rt();B=B===void 0?null:B;var e=Q.memoizedState;return e!==null&&B!==null&&fd(B,e[1])?e[0]:(Q.memoizedState=[A,B],A)}function op(A,B){var Q=rt();B=B===void 0?null:B;var e=Q.memoizedState;return e!==null&&B!==null&&fd(B,e[1])?e[0]:(A=A(),Q.memoizedState=[A,B],A)}function ip(A,B,Q){return xE&21?(Jt(Q,B)||(Q=ah(),TB.lanes|=Q,WE|=Q,A.baseState=!0),B):(A.baseState&&(A.baseState=!1,ie=!0),A.memoizedState=Q)}function Fy(A,B){var Q=dB;dB=Q!==0&&4>Q?Q:4,A(!0);var e=aw.transition;aw.transition={};try{A(!1),B()}finally{dB=Q,aw.transition=e}}function rp(){return rt().memoizedState}function Dy(A,B,Q){var e=Xn(A);if(Q={lane:e,action:Q,hasEagerState:!1,eagerState:null,next:null},Ip(A))ap(B,Q);else if(Q=Wh(A,B,Q,e),Q!==null){var t=qQ();kt(Q,A,e,t),sp(Q,B,e)}}function dy(A,B,Q){var e=Xn(A),t={lane:e,action:Q,hasEagerState:!1,eagerState:null,next:null};if(Ip(A))ap(B,t);else{var g=A.alternate;if(A.lanes===0&&(g===null||g.lanes===0)&&(g=B.lastRenderedReducer,g!==null))try{var n=B.lastRenderedState,E=g(n,Q);if(t.hasEagerState=!0,t.eagerState=E,Jt(E,n)){var C=B.interleaved;C===null?(t.next=t,Fd(B)):(t.next=C.next,C.next=t),B.interleaved=t;return}}catch{}finally{}Q=Wh(A,B,t,e),Q!==null&&(t=qQ(),kt(Q,A,e,t),sp(Q,B,e))}}function Ip(A){var B=A.alternate;return A===TB||B!==null&&B===TB}function ap(A,B){kr=Js=!0;var Q=A.pending;Q===null?B.next=B:(B.next=Q.next,Q.next=B),A.pending=B}function sp(A,B,Q){if(Q&4194240){var e=B.lanes;e&=A.pendingLanes,Q|=e,B.lanes=Q,td(A,Q)}}var vs={readContext:it,useCallback:HQ,useContext:HQ,useEffect:HQ,useImperativeHandle:HQ,useInsertionEffect:HQ,useLayoutEffect:HQ,useMemo:HQ,useReducer:HQ,useRef:HQ,useState:HQ,useDebugValue:HQ,useDeferredValue:HQ,useTransition:HQ,useMutableSource:HQ,useSyncExternalStore:HQ,useId:HQ,unstable_isNewReconciler:!1},uy={readContext:it,useCallback:function(A,B){return Kt().memoizedState=[A,B===void 0?null:B],A},useContext:it,useEffect:aU,useImperativeHandle:function(A,B,Q){return Q=Q!=null?Q.concat([A]):null,ts(4194308,4,np.bind(null,B,A),Q)},useLayoutEffect:function(A,B){return ts(4194308,4,A,B)},useInsertionEffect:function(A,B){return ts(4,2,A,B)},useMemo:function(A,B){var Q=Kt();return B=B===void 0?null:B,A=A(),Q.memoizedState=[A,B],A},useReducer:function(A,B,Q){var e=Kt();return B=Q!==void 0?Q(B):B,e.memoizedState=e.baseState=B,A={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:A,lastRenderedState:B},e.queue=A,A=A.dispatch=Dy.bind(null,TB,A),[e.memoizedState,A]},useRef:function(A){var B=Kt();return A={current:A},B.memoizedState=A},useState:IU,useDebugValue:pd,useDeferredValue:function(A){return Kt().memoizedState=A},useTransition:function(){var A=IU(!1),B=A[0];return A=Fy.bind(null,A[1]),Kt().memoizedState=A,[B,A]},useMutableSource:function(){},useSyncExternalStore:function(A,B,Q){var e=TB,t=Kt();if(HB){if(Q===void 0)throw Error(CA(407));Q=Q()}else{if(Q=B(),GQ===null)throw Error(CA(349));xE&30||_h(e,B,Q)}t.memoizedState=Q;var g={value:Q,getSnapshot:B};return t.queue=g,aU(Ap.bind(null,e,g,A),[A]),e.flags|=2048,iI(9,$h.bind(null,e,g,Q,B),void 0,null),Q},useId:function(){var A=Kt(),B=GQ.identifierPrefix;if(HB){var Q=vg,e=Jg;Q=(e&~(1<<32-yt(e)-1)).toString(32)+Q,B=":"+B+"R"+Q,Q=CI++,0<Q&&(B+="H"+Q.toString(32)),B+=":"}else Q=wy++,B=":"+B+"r"+Q.toString(32)+":";return A.memoizedState=B},unstable_isNewReconciler:!1},Uy={readContext:it,useCallback:Cp,useContext:it,useEffect:hd,useImperativeHandle:Ep,useInsertionEffect:tp,useLayoutEffect:gp,useMemo:op,useReducer:sw,useRef:ep,useState:function(){return sw(oI)},useDebugValue:pd,useDeferredValue:function(A){var B=rt();return ip(B,lQ.memoizedState,A)},useTransition:function(){var A=sw(oI)[0],B=rt().memoizedState;return[A,B]},useMutableSource:Kh,useSyncExternalStore:qh,useId:rp,unstable_isNewReconciler:!1},fy={readContext:it,useCallback:Cp,useContext:it,useEffect:hd,useImperativeHandle:Ep,useInsertionEffect:tp,useLayoutEffect:gp,useMemo:op,useReducer:lw,useRef:ep,useState:function(){return lw(oI)},useDebugValue:pd,useDeferredValue:function(A){var B=rt();return lQ===null?B.memoizedState=A:ip(B,lQ.memoizedState,A)},useTransition:function(){var A=lw(oI)[0],B=rt().memoizedState;return[A,B]},useMutableSource:Kh,useSyncExternalStore:qh,useId:rp,unstable_isNewReconciler:!1};function Oo(A,B){try{var Q="",e=B;do Q+=qN(e),e=e.return;while(e);var t=Q}catch(g){t=`
Error generating stack: `+g.message+`
`+g.stack}return{value:A,source:B,stack:t,digest:null}}function cw(A,B,Q){return{value:A,source:null,stack:Q??null,digest:B??null}}function OF(A,B){try{console.error(B.value)}catch(Q){setTimeout(function(){throw Q})}}var My=typeof WeakMap=="function"?WeakMap:Map;function lp(A,B,Q){Q=Zg(-1,Q),Q.tag=3,Q.payload={element:null};var e=B.value;return Q.callback=function(){Ls||(Ls=!0,AD=e),OF(A,B)},Q}function cp(A,B,Q){Q=Zg(-1,Q),Q.tag=3;var e=A.type.getDerivedStateFromError;if(typeof e=="function"){var t=B.value;Q.payload=function(){return e(t)},Q.callback=function(){OF(A,B)}}var g=A.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(Q.callback=function(){OF(A,B),typeof e!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var n=B.stack;this.componentDidCatch(B.value,{componentStack:n!==null?n:""})}),Q}function sU(A,B,Q){var e=A.pingCache;if(e===null){e=A.pingCache=new My;var t=new Set;e.set(B,t)}else t=e.get(B),t===void 0&&(t=new Set,e.set(B,t));t.has(Q)||(t.add(Q),A=Ly.bind(null,A,B,Q),B.then(A,A))}function lU(A){do{var B;if((B=A.tag===13)&&(B=A.memoizedState,B=B!==null?B.dehydrated!==null:!0),B)return A;A=A.return}while(A!==null);return null}function cU(A,B,Q,e,t){return A.mode&1?(A.flags|=65536,A.lanes=t,A):(A===B?A.flags|=65536:(A.flags|=128,Q.flags|=131072,Q.flags&=-52805,Q.tag===1&&(Q.alternate===null?Q.tag=17:(B=Zg(-1,1),B.tag=2,Ln(Q,B,1))),Q.lanes|=1),A)}var Gy=Og.ReactCurrentOwner,ie=!1;function KQ(A,B,Q,e){B.child=A===null?jh(B,null,Q,e):xo(B,A.child,Q,e)}function wU(A,B,Q,e,t){Q=Q.render;var g=B.ref;return bo(B,t),e=Md(A,B,Q,e,g,t),Q=Gd(),A!==null&&!ie?(B.updateQueue=A.updateQueue,B.flags&=-2053,A.lanes&=~t,Hg(A,B,t)):(HB&&Q&&Id(B),B.flags|=1,KQ(A,B,e,t),B.child)}function FU(A,B,Q,e,t){if(A===null){var g=Q.type;return typeof g=="function"&&!Jd(g)&&g.defaultProps===void 0&&Q.compare===null&&Q.defaultProps===void 0?(B.tag=15,B.type=g,wp(A,B,g,e,t)):(A=Cs(Q.type,null,e,B,B.mode,t),A.ref=B.ref,A.return=B,B.child=A)}if(g=A.child,!(A.lanes&t)){var n=g.memoizedProps;if(Q=Q.compare,Q=Q!==null?Q:QI,Q(n,e)&&A.ref===B.ref)return Hg(A,B,t)}return B.flags|=1,A=Hn(g,e),A.ref=B.ref,A.return=B,B.child=A}function wp(A,B,Q,e,t){if(A!==null){var g=A.memoizedProps;if(QI(g,e)&&A.ref===B.ref)if(ie=!1,B.pendingProps=e=g,(A.lanes&t)!==0)A.flags&131072&&(ie=!0);else return B.lanes=A.lanes,Hg(A,B,t)}return TF(A,B,Q,e,t)}function Fp(A,B,Q){var e=B.pendingProps,t=e.children,g=A!==null?A.memoizedState:null;if(e.mode==="hidden")if(!(B.mode&1))B.memoizedState={baseLanes:0,cachePool:null,transitions:null},mB(Go,be),be|=Q;else{if(!(Q&1073741824))return A=g!==null?g.baseLanes|Q:Q,B.lanes=B.childLanes=1073741824,B.memoizedState={baseLanes:A,cachePool:null,transitions:null},B.updateQueue=null,mB(Go,be),be|=A,null;B.memoizedState={baseLanes:0,cachePool:null,transitions:null},e=g!==null?g.baseLanes:Q,mB(Go,be),be|=e}else g!==null?(e=g.baseLanes|Q,B.memoizedState=null):e=Q,mB(Go,be),be|=e;return KQ(A,B,t,Q),B.child}function Dp(A,B){var Q=B.ref;(A===null&&Q!==null||A!==null&&A.ref!==Q)&&(B.flags|=512,B.flags|=2097152)}function TF(A,B,Q,e,t){var g=Ie(Q)?XE:zQ.current;return g=Xo(B,g),bo(B,t),Q=Md(A,B,Q,e,g,t),e=Gd(),A!==null&&!ie?(B.updateQueue=A.updateQueue,B.flags&=-2053,A.lanes&=~t,Hg(A,B,t)):(HB&&e&&Id(B),B.flags|=1,KQ(A,B,Q,t),B.child)}function DU(A,B,Q,e,t){if(Ie(Q)){var g=!0;Rs(B)}else g=!1;if(bo(B,t),B.stateNode===null)gs(A,B),Vh(B,Q,e),WF(B,Q,e,t),e=!0;else if(A===null){var n=B.stateNode,E=B.memoizedProps;n.props=E;var C=n.context,o=Q.contextType;typeof o=="object"&&o!==null?o=it(o):(o=Ie(Q)?XE:zQ.current,o=Xo(B,o));var i=Q.getDerivedStateFromProps,r=typeof i=="function"||typeof n.getSnapshotBeforeUpdate=="function";r||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(E!==e||C!==o)&&iU(B,n,e,o),hn=!1;var I=B.memoizedState;n.state=I,ys(B,e,n,t),C=B.memoizedState,E!==e||I!==C||re.current||hn?(typeof i=="function"&&(xF(B,Q,i,e),C=B.memoizedState),(E=hn||oU(B,Q,E,e,I,C,o))?(r||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(B.flags|=4194308)):(typeof n.componentDidMount=="function"&&(B.flags|=4194308),B.memoizedProps=e,B.memoizedState=C),n.props=e,n.state=C,n.context=o,e=E):(typeof n.componentDidMount=="function"&&(B.flags|=4194308),e=!1)}else{n=B.stateNode,Oh(A,B),E=B.memoizedProps,o=B.type===B.elementType?E:Yt(B.type,E),n.props=o,r=B.pendingProps,I=n.context,C=Q.contextType,typeof C=="object"&&C!==null?C=it(C):(C=Ie(Q)?XE:zQ.current,C=Xo(B,C));var a=Q.getDerivedStateFromProps;(i=typeof a=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(E!==r||I!==C)&&iU(B,n,e,C),hn=!1,I=B.memoizedState,n.state=I,ys(B,e,n,t);var d=B.memoizedState;E!==r||I!==d||re.current||hn?(typeof a=="function"&&(xF(B,Q,a,e),d=B.memoizedState),(o=hn||oU(B,Q,o,e,I,d,C)||!1)?(i||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,d,C),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,d,C)),typeof n.componentDidUpdate=="function"&&(B.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(B.flags|=1024)):(typeof n.componentDidUpdate!="function"||E===A.memoizedProps&&I===A.memoizedState||(B.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||E===A.memoizedProps&&I===A.memoizedState||(B.flags|=1024),B.memoizedProps=e,B.memoizedState=d),n.props=e,n.state=d,n.context=C,e=o):(typeof n.componentDidUpdate!="function"||E===A.memoizedProps&&I===A.memoizedState||(B.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||E===A.memoizedProps&&I===A.memoizedState||(B.flags|=1024),e=!1)}return VF(A,B,Q,e,g,t)}function VF(A,B,Q,e,t,g){Dp(A,B);var n=(B.flags&128)!==0;if(!e&&!n)return t&&tU(B,Q,!1),Hg(A,B,g);e=B.stateNode,Gy.current=B;var E=n&&typeof Q.getDerivedStateFromError!="function"?null:e.render();return B.flags|=1,A!==null&&n?(B.child=xo(B,A.child,null,g),B.child=xo(B,null,E,g)):KQ(A,B,E,g),B.memoizedState=e.state,t&&tU(B,Q,!0),B.child}function dp(A){var B=A.stateNode;B.pendingContext?eU(A,B.pendingContext,B.pendingContext!==B.context):B.context&&eU(A,B.context,!1),dd(A,B.containerInfo)}function dU(A,B,Q,e,t){return Ho(),sd(t),B.flags|=256,KQ(A,B,Q,e),B.child}var zF={dehydrated:null,treeContext:null,retryLane:0};function jF(A){return{baseLanes:A,cachePool:null,transitions:null}}function up(A,B,Q){var e=B.pendingProps,t=OB.current,g=!1,n=(B.flags&128)!==0,E;if((E=n)||(E=A!==null&&A.memoizedState===null?!1:(t&2)!==0),E?(g=!0,B.flags&=-129):(A===null||A.memoizedState!==null)&&(t|=1),mB(OB,t&1),A===null)return XF(B),A=B.memoizedState,A!==null&&(A=A.dehydrated,A!==null)?(B.mode&1?A.data==="$!"?B.lanes=8:B.lanes=1073741824:B.lanes=1,null):(n=e.children,A=e.fallback,g?(e=B.mode,g=B.child,n={mode:"hidden",children:n},!(e&1)&&g!==null?(g.childLanes=0,g.pendingProps=n):g=Dl(n,e,0,null),A=vE(A,e,Q,null),g.return=B,A.return=B,g.sibling=A,B.child=g,B.child.memoizedState=jF(Q),B.memoizedState=zF,A):Rd(B,n));if(t=A.memoizedState,t!==null&&(E=t.dehydrated,E!==null))return hy(A,B,n,e,E,t,Q);if(g){g=e.fallback,n=B.mode,t=A.child,E=t.sibling;var C={mode:"hidden",children:e.children};return!(n&1)&&B.child!==t?(e=B.child,e.childLanes=0,e.pendingProps=C,B.deletions=null):(e=Hn(t,C),e.subtreeFlags=t.subtreeFlags&14680064),E!==null?g=Hn(E,g):(g=vE(g,n,Q,null),g.flags|=2),g.return=B,e.return=B,e.sibling=g,B.child=e,e=g,g=B.child,n=A.child.memoizedState,n=n===null?jF(Q):{baseLanes:n.baseLanes|Q,cachePool:null,transitions:n.transitions},g.memoizedState=n,g.childLanes=A.childLanes&~Q,B.memoizedState=zF,e}return g=A.child,A=g.sibling,e=Hn(g,{mode:"visible",children:e.children}),!(B.mode&1)&&(e.lanes=Q),e.return=B,e.sibling=null,A!==null&&(Q=B.deletions,Q===null?(B.deletions=[A],B.flags|=16):Q.push(A)),B.child=e,B.memoizedState=null,e}function Rd(A,B){return B=Dl({mode:"visible",children:B},A.mode,0,null),B.return=A,A.child=B}function ya(A,B,Q,e){return e!==null&&sd(e),xo(B,A.child,null,Q),A=Rd(B,B.pendingProps.children),A.flags|=2,B.memoizedState=null,A}function hy(A,B,Q,e,t,g,n){if(Q)return B.flags&256?(B.flags&=-257,e=cw(Error(CA(422))),ya(A,B,n,e)):B.memoizedState!==null?(B.child=A.child,B.flags|=128,null):(g=e.fallback,t=B.mode,e=Dl({mode:"visible",children:e.children},t,0,null),g=vE(g,t,n,null),g.flags|=2,e.return=B,g.return=B,e.sibling=g,B.child=e,B.mode&1&&xo(B,A.child,null,n),B.child.memoizedState=jF(n),B.memoizedState=zF,g);if(!(B.mode&1))return ya(A,B,n,null);if(t.data==="$!"){if(e=t.nextSibling&&t.nextSibling.dataset,e)var E=e.dgst;return e=E,g=Error(CA(419)),e=cw(g,e,void 0),ya(A,B,n,e)}if(E=(n&A.childLanes)!==0,ie||E){if(e=GQ,e!==null){switch(n&-n){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(e.suspendedLanes|n)?0:t,t!==0&&t!==g.retryLane&&(g.retryLane=t,Xg(A,t),kt(e,A,t,-1))}return kd(),e=cw(Error(CA(421))),ya(A,B,n,e)}return t.data==="$?"?(B.flags|=128,B.child=A.child,B=Sy.bind(null,A),t._reactRetry=B,null):(A=g.treeContext,ke=Zn(t.nextSibling),ve=B,HB=!0,bt=null,A!==null&&(Qt[et++]=Jg,Qt[et++]=vg,Qt[et++]=HE,Jg=A.id,vg=A.overflow,HE=B),B=Rd(B,e.children),B.flags|=4096,B)}function uU(A,B,Q){A.lanes|=B;var e=A.alternate;e!==null&&(e.lanes|=B),HF(A.return,B,Q)}function ww(A,B,Q,e,t){var g=A.memoizedState;g===null?A.memoizedState={isBackwards:B,rendering:null,renderingStartTime:0,last:e,tail:Q,tailMode:t}:(g.isBackwards=B,g.rendering=null,g.renderingStartTime=0,g.last=e,g.tail=Q,g.tailMode=t)}function Up(A,B,Q){var e=B.pendingProps,t=e.revealOrder,g=e.tail;if(KQ(A,B,e.children,Q),e=OB.current,e&2)e=e&1|2,B.flags|=128;else{if(A!==null&&A.flags&128)A:for(A=B.child;A!==null;){if(A.tag===13)A.memoizedState!==null&&uU(A,Q,B);else if(A.tag===19)uU(A,Q,B);else if(A.child!==null){A.child.return=A,A=A.child;continue}if(A===B)break A;for(;A.sibling===null;){if(A.return===null||A.return===B)break A;A=A.return}A.sibling.return=A.return,A=A.sibling}e&=1}if(mB(OB,e),!(B.mode&1))B.memoizedState=null;else switch(t){case"forwards":for(Q=B.child,t=null;Q!==null;)A=Q.alternate,A!==null&&ks(A)===null&&(t=Q),Q=Q.sibling;Q=t,Q===null?(t=B.child,B.child=null):(t=Q.sibling,Q.sibling=null),ww(B,!1,t,Q,g);break;case"backwards":for(Q=null,t=B.child,B.child=null;t!==null;){if(A=t.alternate,A!==null&&ks(A)===null){B.child=t;break}A=t.sibling,t.sibling=Q,Q=t,t=A}ww(B,!0,Q,null,g);break;case"together":ww(B,!1,null,null,void 0);break;default:B.memoizedState=null}return B.child}function gs(A,B){!(B.mode&1)&&A!==null&&(A.alternate=null,B.alternate=null,B.flags|=2)}function Hg(A,B,Q){if(A!==null&&(B.dependencies=A.dependencies),WE|=B.lanes,!(Q&B.childLanes))return null;if(A!==null&&B.child!==A.child)throw Error(CA(153));if(B.child!==null){for(A=B.child,Q=Hn(A,A.pendingProps),B.child=Q,Q.return=B;A.sibling!==null;)A=A.sibling,Q=Q.sibling=Hn(A,A.pendingProps),Q.return=B;Q.sibling=null}return B.child}function py(A,B,Q){switch(B.tag){case 3:dp(B),Ho();break;case 5:Ph(B);break;case 1:Ie(B.type)&&Rs(B);break;case 4:dd(B,B.stateNode.containerInfo);break;case 10:var e=B.type._context,t=B.memoizedProps.value;mB(Ns,e._currentValue),e._currentValue=t;break;case 13:if(e=B.memoizedState,e!==null)return e.dehydrated!==null?(mB(OB,OB.current&1),B.flags|=128,null):Q&B.child.childLanes?up(A,B,Q):(mB(OB,OB.current&1),A=Hg(A,B,Q),A!==null?A.sibling:null);mB(OB,OB.current&1);break;case 19:if(e=(Q&B.childLanes)!==0,A.flags&128){if(e)return Up(A,B,Q);B.flags|=128}if(t=B.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),mB(OB,OB.current),e)break;return null;case 22:case 23:return B.lanes=0,Fp(A,B,Q)}return Hg(A,B,Q)}var fp,PF,Mp,Gp;fp=function(A,B){for(var Q=B.child;Q!==null;){if(Q.tag===5||Q.tag===6)A.appendChild(Q.stateNode);else if(Q.tag!==4&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===B)break;for(;Q.sibling===null;){if(Q.return===null||Q.return===B)return;Q=Q.return}Q.sibling.return=Q.return,Q=Q.sibling}};PF=function(){};Mp=function(A,B,Q,e){var t=A.memoizedProps;if(t!==e){A=B.stateNode,NE(Qg.current);var g=null;switch(Q){case"input":t=wF(A,t),e=wF(A,e),g=[];break;case"select":t=VB({},t,{value:void 0}),e=VB({},e,{value:void 0}),g=[];break;case"textarea":t=dF(A,t),e=dF(A,e),g=[];break;default:typeof t.onClick!="function"&&typeof e.onClick=="function"&&(A.onclick=hs)}UF(Q,e);var n;Q=null;for(o in t)if(!e.hasOwnProperty(o)&&t.hasOwnProperty(o)&&t[o]!=null)if(o==="style"){var E=t[o];for(n in E)E.hasOwnProperty(n)&&(Q||(Q={}),Q[n]="")}else o!=="dangerouslySetInnerHTML"&&o!=="children"&&o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Pr.hasOwnProperty(o)?g||(g=[]):(g=g||[]).push(o,null));for(o in e){var C=e[o];if(E=t!=null?t[o]:void 0,e.hasOwnProperty(o)&&C!==E&&(C!=null||E!=null))if(o==="style")if(E){for(n in E)!E.hasOwnProperty(n)||C&&C.hasOwnProperty(n)||(Q||(Q={}),Q[n]="");for(n in C)C.hasOwnProperty(n)&&E[n]!==C[n]&&(Q||(Q={}),Q[n]=C[n])}else Q||(g||(g=[]),g.push(o,Q)),Q=C;else o==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,E=E?E.__html:void 0,C!=null&&E!==C&&(g=g||[]).push(o,C)):o==="children"?typeof C!="string"&&typeof C!="number"||(g=g||[]).push(o,""+C):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(o)?(C!=null&&o==="onScroll"&&kB("scroll",A),g||E===C||(g=[])):(g=g||[]).push(o,C))}Q&&(g=g||[]).push("style",Q);var o=g;(B.updateQueue=o)&&(B.flags|=4)}};Gp=function(A,B,Q,e){Q!==e&&(B.flags|=4)};function nr(A,B){if(!HB)switch(A.tailMode){case"hidden":B=A.tail;for(var Q=null;B!==null;)B.alternate!==null&&(Q=B),B=B.sibling;Q===null?A.tail=null:Q.sibling=null;break;case"collapsed":Q=A.tail;for(var e=null;Q!==null;)Q.alternate!==null&&(e=Q),Q=Q.sibling;e===null?B||A.tail===null?A.tail=null:A.tail.sibling=null:e.sibling=null}}function xQ(A){var B=A.alternate!==null&&A.alternate.child===A.child,Q=0,e=0;if(B)for(var t=A.child;t!==null;)Q|=t.lanes|t.childLanes,e|=t.subtreeFlags&14680064,e|=t.flags&14680064,t.return=A,t=t.sibling;else for(t=A.child;t!==null;)Q|=t.lanes|t.childLanes,e|=t.subtreeFlags,e|=t.flags,t.return=A,t=t.sibling;return A.subtreeFlags|=e,A.childLanes=Q,B}function Ry(A,B,Q){var e=B.pendingProps;switch(ad(B),B.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xQ(B),null;case 1:return Ie(B.type)&&ps(),xQ(B),null;case 3:return e=B.stateNode,Wo(),JB(re),JB(zQ),Ud(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(A===null||A.child===null)&&(Na(B)?B.flags|=4:A===null||A.memoizedState.isDehydrated&&!(B.flags&256)||(B.flags|=1024,bt!==null&&(eD(bt),bt=null))),PF(A,B),xQ(B),null;case 5:ud(B);var t=NE(EI.current);if(Q=B.type,A!==null&&B.stateNode!=null)Mp(A,B,Q,e,t),A.ref!==B.ref&&(B.flags|=512,B.flags|=2097152);else{if(!e){if(B.stateNode===null)throw Error(CA(166));return xQ(B),null}if(A=NE(Qg.current),Na(B)){e=B.stateNode,Q=B.type;var g=B.memoizedProps;switch(e[$t]=B,e[gI]=g,A=(B.mode&1)!==0,Q){case"dialog":kB("cancel",e),kB("close",e);break;case"iframe":case"object":case"embed":kB("load",e);break;case"video":case"audio":for(t=0;t<fr.length;t++)kB(fr[t],e);break;case"source":kB("error",e);break;case"img":case"image":case"link":kB("error",e),kB("load",e);break;case"details":kB("toggle",e);break;case"input":Y0(e,g),kB("invalid",e);break;case"select":e._wrapperState={wasMultiple:!!g.multiple},kB("invalid",e);break;case"textarea":b0(e,g),kB("invalid",e)}UF(Q,g),t=null;for(var n in g)if(g.hasOwnProperty(n)){var E=g[n];n==="children"?typeof E=="string"?e.textContent!==E&&(g.suppressHydrationWarning!==!0&&Ya(e.textContent,E,A),t=["children",E]):typeof E=="number"&&e.textContent!==""+E&&(g.suppressHydrationWarning!==!0&&Ya(e.textContent,E,A),t=["children",""+E]):Pr.hasOwnProperty(n)&&E!=null&&n==="onScroll"&&kB("scroll",e)}switch(Q){case"input":Ua(e),N0(e,g,!0);break;case"textarea":Ua(e),y0(e);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(e.onclick=hs)}e=t,B.updateQueue=e,e!==null&&(B.flags|=4)}else{n=t.nodeType===9?t:t.ownerDocument,A==="http://www.w3.org/1999/xhtml"&&(A=_G(Q)),A==="http://www.w3.org/1999/xhtml"?Q==="script"?(A=n.createElement("div"),A.innerHTML="<script><\/script>",A=A.removeChild(A.firstChild)):typeof e.is=="string"?A=n.createElement(Q,{is:e.is}):(A=n.createElement(Q),Q==="select"&&(n=A,e.multiple?n.multiple=!0:e.size&&(n.size=e.size))):A=n.createElementNS(A,Q),A[$t]=B,A[gI]=e,fp(A,B,!1,!1),B.stateNode=A;A:{switch(n=fF(Q,e),Q){case"dialog":kB("cancel",A),kB("close",A),t=e;break;case"iframe":case"object":case"embed":kB("load",A),t=e;break;case"video":case"audio":for(t=0;t<fr.length;t++)kB(fr[t],A);t=e;break;case"source":kB("error",A),t=e;break;case"img":case"image":case"link":kB("error",A),kB("load",A),t=e;break;case"details":kB("toggle",A),t=e;break;case"input":Y0(A,e),t=wF(A,e),kB("invalid",A);break;case"option":t=e;break;case"select":A._wrapperState={wasMultiple:!!e.multiple},t=VB({},e,{value:void 0}),kB("invalid",A);break;case"textarea":b0(A,e),t=dF(A,e),kB("invalid",A);break;default:t=e}UF(Q,t),E=t;for(g in E)if(E.hasOwnProperty(g)){var C=E[g];g==="style"?Bh(A,C):g==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&$G(A,C)):g==="children"?typeof C=="string"?(Q!=="textarea"||C!=="")&&Kr(A,C):typeof C=="number"&&Kr(A,""+C):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(Pr.hasOwnProperty(g)?C!=null&&g==="onScroll"&&kB("scroll",A):C!=null&&_D(A,g,C,n))}switch(Q){case"input":Ua(A),N0(A,e,!1);break;case"textarea":Ua(A),y0(A);break;case"option":e.value!=null&&A.setAttribute("value",""+On(e.value));break;case"select":A.multiple=!!e.multiple,g=e.value,g!=null?Ro(A,!!e.multiple,g,!1):e.defaultValue!=null&&Ro(A,!!e.multiple,e.defaultValue,!0);break;default:typeof t.onClick=="function"&&(A.onclick=hs)}switch(Q){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break A;case"img":e=!0;break A;default:e=!1}}e&&(B.flags|=4)}B.ref!==null&&(B.flags|=512,B.flags|=2097152)}return xQ(B),null;case 6:if(A&&B.stateNode!=null)Gp(A,B,A.memoizedProps,e);else{if(typeof e!="string"&&B.stateNode===null)throw Error(CA(166));if(Q=NE(EI.current),NE(Qg.current),Na(B)){if(e=B.stateNode,Q=B.memoizedProps,e[$t]=B,(g=e.nodeValue!==Q)&&(A=ve,A!==null))switch(A.tag){case 3:Ya(e.nodeValue,Q,(A.mode&1)!==0);break;case 5:A.memoizedProps.suppressHydrationWarning!==!0&&Ya(e.nodeValue,Q,(A.mode&1)!==0)}g&&(B.flags|=4)}else e=(Q.nodeType===9?Q:Q.ownerDocument).createTextNode(e),e[$t]=B,B.stateNode=e}return xQ(B),null;case 13:if(JB(OB),e=B.memoizedState,A===null||A.memoizedState!==null&&A.memoizedState.dehydrated!==null){if(HB&&ke!==null&&B.mode&1&&!(B.flags&128))xh(),Ho(),B.flags|=98560,g=!1;else if(g=Na(B),e!==null&&e.dehydrated!==null){if(A===null){if(!g)throw Error(CA(318));if(g=B.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(CA(317));g[$t]=B}else Ho(),!(B.flags&128)&&(B.memoizedState=null),B.flags|=4;xQ(B),g=!1}else bt!==null&&(eD(bt),bt=null),g=!0;if(!g)return B.flags&65536?B:null}return B.flags&128?(B.lanes=Q,B):(e=e!==null,e!==(A!==null&&A.memoizedState!==null)&&e&&(B.child.flags|=8192,B.mode&1&&(A===null||OB.current&1?wQ===0&&(wQ=3):kd())),B.updateQueue!==null&&(B.flags|=4),xQ(B),null);case 4:return Wo(),PF(A,B),A===null&&eI(B.stateNode.containerInfo),xQ(B),null;case 10:return wd(B.type._context),xQ(B),null;case 17:return Ie(B.type)&&ps(),xQ(B),null;case 19:if(JB(OB),g=B.memoizedState,g===null)return xQ(B),null;if(e=(B.flags&128)!==0,n=g.rendering,n===null)if(e)nr(g,!1);else{if(wQ!==0||A!==null&&A.flags&128)for(A=B.child;A!==null;){if(n=ks(A),n!==null){for(B.flags|=128,nr(g,!1),e=n.updateQueue,e!==null&&(B.updateQueue=e,B.flags|=4),B.subtreeFlags=0,e=Q,Q=B.child;Q!==null;)g=Q,A=e,g.flags&=14680066,n=g.alternate,n===null?(g.childLanes=0,g.lanes=A,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=n.childLanes,g.lanes=n.lanes,g.child=n.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=n.memoizedProps,g.memoizedState=n.memoizedState,g.updateQueue=n.updateQueue,g.type=n.type,A=n.dependencies,g.dependencies=A===null?null:{lanes:A.lanes,firstContext:A.firstContext}),Q=Q.sibling;return mB(OB,OB.current&1|2),B.child}A=A.sibling}g.tail!==null&&BQ()>To&&(B.flags|=128,e=!0,nr(g,!1),B.lanes=4194304)}else{if(!e)if(A=ks(n),A!==null){if(B.flags|=128,e=!0,Q=A.updateQueue,Q!==null&&(B.updateQueue=Q,B.flags|=4),nr(g,!0),g.tail===null&&g.tailMode==="hidden"&&!n.alternate&&!HB)return xQ(B),null}else 2*BQ()-g.renderingStartTime>To&&Q!==1073741824&&(B.flags|=128,e=!0,nr(g,!1),B.lanes=4194304);g.isBackwards?(n.sibling=B.child,B.child=n):(Q=g.last,Q!==null?Q.sibling=n:B.child=n,g.last=n)}return g.tail!==null?(B=g.tail,g.rendering=B,g.tail=B.sibling,g.renderingStartTime=BQ(),B.sibling=null,Q=OB.current,mB(OB,e?Q&1|2:Q&1),B):(xQ(B),null);case 22:case 23:return yd(),e=B.memoizedState!==null,A!==null&&A.memoizedState!==null!==e&&(B.flags|=8192),e&&B.mode&1?be&1073741824&&(xQ(B),B.subtreeFlags&6&&(B.flags|=8192)):xQ(B),null;case 24:return null;case 25:return null}throw Error(CA(156,B.tag))}function my(A,B){switch(ad(B),B.tag){case 1:return Ie(B.type)&&ps(),A=B.flags,A&65536?(B.flags=A&-65537|128,B):null;case 3:return Wo(),JB(re),JB(zQ),Ud(),A=B.flags,A&65536&&!(A&128)?(B.flags=A&-65537|128,B):null;case 5:return ud(B),null;case 13:if(JB(OB),A=B.memoizedState,A!==null&&A.dehydrated!==null){if(B.alternate===null)throw Error(CA(340));Ho()}return A=B.flags,A&65536?(B.flags=A&-65537|128,B):null;case 19:return JB(OB),null;case 4:return Wo(),null;case 10:return wd(B.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var ka=!1,OQ=!1,Yy=typeof WeakSet=="function"?WeakSet:Set,hA=null;function Mo(A,B){var Q=A.ref;if(Q!==null)if(typeof Q=="function")try{Q(null)}catch(e){KB(A,B,e)}else Q.current=null}function KF(A,B,Q){try{Q()}catch(e){KB(A,B,e)}}var UU=!1;function Ny(A,B){if(yF=fs,A=mh(),rd(A)){if("selectionStart"in A)var Q={start:A.selectionStart,end:A.selectionEnd};else A:{Q=(Q=A.ownerDocument)&&Q.defaultView||window;var e=Q.getSelection&&Q.getSelection();if(e&&e.rangeCount!==0){Q=e.anchorNode;var t=e.anchorOffset,g=e.focusNode;e=e.focusOffset;try{Q.nodeType,g.nodeType}catch{Q=null;break A}var n=0,E=-1,C=-1,o=0,i=0,r=A,I=null;B:for(;;){for(var a;r!==Q||t!==0&&r.nodeType!==3||(E=n+t),r!==g||e!==0&&r.nodeType!==3||(C=n+e),r.nodeType===3&&(n+=r.nodeValue.length),(a=r.firstChild)!==null;)I=r,r=a;for(;;){if(r===A)break B;if(I===Q&&++o===t&&(E=n),I===g&&++i===e&&(C=n),(a=r.nextSibling)!==null)break;r=I,I=r.parentNode}r=a}Q=E===-1||C===-1?null:{start:E,end:C}}else Q=null}Q=Q||{start:0,end:0}}else Q=null;for(kF={focusedElem:A,selectionRange:Q},fs=!1,hA=B;hA!==null;)if(B=hA,A=B.child,(B.subtreeFlags&1028)!==0&&A!==null)A.return=B,hA=A;else for(;hA!==null;){B=hA;try{var d=B.alternate;if(B.flags&1024)switch(B.tag){case 0:case 11:case 15:break;case 1:if(d!==null){var D=d.memoizedProps,U=d.memoizedState,l=B.stateNode,F=l.getSnapshotBeforeUpdate(B.elementType===B.type?D:Yt(B.type,D),U);l.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var c=B.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(CA(163))}}catch(w){KB(B,B.return,w)}if(A=B.sibling,A!==null){A.return=B.return,hA=A;break}hA=B.return}return d=UU,UU=!1,d}function Jr(A,B,Q){var e=B.updateQueue;if(e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&A)===A){var g=t.destroy;t.destroy=void 0,g!==void 0&&KF(B,Q,g)}t=t.next}while(t!==e)}}function wl(A,B){if(B=B.updateQueue,B=B!==null?B.lastEffect:null,B!==null){var Q=B=B.next;do{if((Q.tag&A)===A){var e=Q.create;Q.destroy=e()}Q=Q.next}while(Q!==B)}}function qF(A){var B=A.ref;if(B!==null){var Q=A.stateNode;switch(A.tag){case 5:A=Q;break;default:A=Q}typeof B=="function"?B(A):B.current=A}}function hp(A){var B=A.alternate;B!==null&&(A.alternate=null,hp(B)),A.child=null,A.deletions=null,A.sibling=null,A.tag===5&&(B=A.stateNode,B!==null&&(delete B[$t],delete B[gI],delete B[ZF],delete B[ay],delete B[sy])),A.stateNode=null,A.return=null,A.dependencies=null,A.memoizedProps=null,A.memoizedState=null,A.pendingProps=null,A.stateNode=null,A.updateQueue=null}function pp(A){return A.tag===5||A.tag===3||A.tag===4}function fU(A){A:for(;;){for(;A.sibling===null;){if(A.return===null||pp(A.return))return null;A=A.return}for(A.sibling.return=A.return,A=A.sibling;A.tag!==5&&A.tag!==6&&A.tag!==18;){if(A.flags&2||A.child===null||A.tag===4)continue A;A.child.return=A,A=A.child}if(!(A.flags&2))return A.stateNode}}function _F(A,B,Q){var e=A.tag;if(e===5||e===6)A=A.stateNode,B?Q.nodeType===8?Q.parentNode.insertBefore(A,B):Q.insertBefore(A,B):(Q.nodeType===8?(B=Q.parentNode,B.insertBefore(A,Q)):(B=Q,B.appendChild(A)),Q=Q._reactRootContainer,Q!=null||B.onclick!==null||(B.onclick=hs));else if(e!==4&&(A=A.child,A!==null))for(_F(A,B,Q),A=A.sibling;A!==null;)_F(A,B,Q),A=A.sibling}function $F(A,B,Q){var e=A.tag;if(e===5||e===6)A=A.stateNode,B?Q.insertBefore(A,B):Q.appendChild(A);else if(e!==4&&(A=A.child,A!==null))for($F(A,B,Q),A=A.sibling;A!==null;)$F(A,B,Q),A=A.sibling}var NQ=null,Nt=!1;function dn(A,B,Q){for(Q=Q.child;Q!==null;)Rp(A,B,Q),Q=Q.sibling}function Rp(A,B,Q){if(Bg&&typeof Bg.onCommitFiberUnmount=="function")try{Bg.onCommitFiberUnmount(ol,Q)}catch{}switch(Q.tag){case 5:OQ||Mo(Q,B);case 6:var e=NQ,t=Nt;NQ=null,dn(A,B,Q),NQ=e,Nt=t,NQ!==null&&(Nt?(A=NQ,Q=Q.stateNode,A.nodeType===8?A.parentNode.removeChild(Q):A.removeChild(Q)):NQ.removeChild(Q.stateNode));break;case 18:NQ!==null&&(Nt?(A=NQ,Q=Q.stateNode,A.nodeType===8?iw(A.parentNode,Q):A.nodeType===1&&iw(A,Q),AI(A)):iw(NQ,Q.stateNode));break;case 4:e=NQ,t=Nt,NQ=Q.stateNode.containerInfo,Nt=!0,dn(A,B,Q),NQ=e,Nt=t;break;case 0:case 11:case 14:case 15:if(!OQ&&(e=Q.updateQueue,e!==null&&(e=e.lastEffect,e!==null))){t=e=e.next;do{var g=t,n=g.destroy;g=g.tag,n!==void 0&&(g&2||g&4)&&KF(Q,B,n),t=t.next}while(t!==e)}dn(A,B,Q);break;case 1:if(!OQ&&(Mo(Q,B),e=Q.stateNode,typeof e.componentWillUnmount=="function"))try{e.props=Q.memoizedProps,e.state=Q.memoizedState,e.componentWillUnmount()}catch(E){KB(Q,B,E)}dn(A,B,Q);break;case 21:dn(A,B,Q);break;case 22:Q.mode&1?(OQ=(e=OQ)||Q.memoizedState!==null,dn(A,B,Q),OQ=e):dn(A,B,Q);break;default:dn(A,B,Q)}}function MU(A){var B=A.updateQueue;if(B!==null){A.updateQueue=null;var Q=A.stateNode;Q===null&&(Q=A.stateNode=new Yy),B.forEach(function(e){var t=Xy.bind(null,A,e);Q.has(e)||(Q.add(e),e.then(t,t))})}}function mt(A,B){var Q=B.deletions;if(Q!==null)for(var e=0;e<Q.length;e++){var t=Q[e];try{var g=A,n=B,E=n;A:for(;E!==null;){switch(E.tag){case 5:NQ=E.stateNode,Nt=!1;break A;case 3:NQ=E.stateNode.containerInfo,Nt=!0;break A;case 4:NQ=E.stateNode.containerInfo,Nt=!0;break A}E=E.return}if(NQ===null)throw Error(CA(160));Rp(g,n,t),NQ=null,Nt=!1;var C=t.alternate;C!==null&&(C.return=null),t.return=null}catch(o){KB(t,B,o)}}if(B.subtreeFlags&12854)for(B=B.child;B!==null;)mp(B,A),B=B.sibling}function mp(A,B){var Q=A.alternate,e=A.flags;switch(A.tag){case 0:case 11:case 14:case 15:if(mt(B,A),jt(A),e&4){try{Jr(3,A,A.return),wl(3,A)}catch(D){KB(A,A.return,D)}try{Jr(5,A,A.return)}catch(D){KB(A,A.return,D)}}break;case 1:mt(B,A),jt(A),e&512&&Q!==null&&Mo(Q,Q.return);break;case 5:if(mt(B,A),jt(A),e&512&&Q!==null&&Mo(Q,Q.return),A.flags&32){var t=A.stateNode;try{Kr(t,"")}catch(D){KB(A,A.return,D)}}if(e&4&&(t=A.stateNode,t!=null)){var g=A.memoizedProps,n=Q!==null?Q.memoizedProps:g,E=A.type,C=A.updateQueue;if(A.updateQueue=null,C!==null)try{E==="input"&&g.type==="radio"&&g.name!=null&&KG(t,g),fF(E,n);var o=fF(E,g);for(n=0;n<C.length;n+=2){var i=C[n],r=C[n+1];i==="style"?Bh(t,r):i==="dangerouslySetInnerHTML"?$G(t,r):i==="children"?Kr(t,r):_D(t,i,r,o)}switch(E){case"input":FF(t,g);break;case"textarea":qG(t,g);break;case"select":var I=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!g.multiple;var a=g.value;a!=null?Ro(t,!!g.multiple,a,!1):I!==!!g.multiple&&(g.defaultValue!=null?Ro(t,!!g.multiple,g.defaultValue,!0):Ro(t,!!g.multiple,g.multiple?[]:"",!1))}t[gI]=g}catch(D){KB(A,A.return,D)}}break;case 6:if(mt(B,A),jt(A),e&4){if(A.stateNode===null)throw Error(CA(162));t=A.stateNode,g=A.memoizedProps;try{t.nodeValue=g}catch(D){KB(A,A.return,D)}}break;case 3:if(mt(B,A),jt(A),e&4&&Q!==null&&Q.memoizedState.isDehydrated)try{AI(B.containerInfo)}catch(D){KB(A,A.return,D)}break;case 4:mt(B,A),jt(A);break;case 13:mt(B,A),jt(A),t=A.child,t.flags&8192&&(g=t.memoizedState!==null,t.stateNode.isHidden=g,!g||t.alternate!==null&&t.alternate.memoizedState!==null||(Nd=BQ())),e&4&&MU(A);break;case 22:if(i=Q!==null&&Q.memoizedState!==null,A.mode&1?(OQ=(o=OQ)||i,mt(B,A),OQ=o):mt(B,A),jt(A),e&8192){if(o=A.memoizedState!==null,(A.stateNode.isHidden=o)&&!i&&A.mode&1)for(hA=A,i=A.child;i!==null;){for(r=hA=i;hA!==null;){switch(I=hA,a=I.child,I.tag){case 0:case 11:case 14:case 15:Jr(4,I,I.return);break;case 1:Mo(I,I.return);var d=I.stateNode;if(typeof d.componentWillUnmount=="function"){e=I,Q=I.return;try{B=e,d.props=B.memoizedProps,d.state=B.memoizedState,d.componentWillUnmount()}catch(D){KB(e,Q,D)}}break;case 5:Mo(I,I.return);break;case 22:if(I.memoizedState!==null){hU(r);continue}}a!==null?(a.return=I,hA=a):hU(r)}i=i.sibling}A:for(i=null,r=A;;){if(r.tag===5){if(i===null){i=r;try{t=r.stateNode,o?(g=t.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(E=r.stateNode,C=r.memoizedProps.style,n=C!=null&&C.hasOwnProperty("display")?C.display:null,E.style.display=Ah("display",n))}catch(D){KB(A,A.return,D)}}}else if(r.tag===6){if(i===null)try{r.stateNode.nodeValue=o?"":r.memoizedProps}catch(D){KB(A,A.return,D)}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===A)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===A)break A;for(;r.sibling===null;){if(r.return===null||r.return===A)break A;i===r&&(i=null),r=r.return}i===r&&(i=null),r.sibling.return=r.return,r=r.sibling}}break;case 19:mt(B,A),jt(A),e&4&&MU(A);break;case 21:break;default:mt(B,A),jt(A)}}function jt(A){var B=A.flags;if(B&2){try{A:{for(var Q=A.return;Q!==null;){if(pp(Q)){var e=Q;break A}Q=Q.return}throw Error(CA(160))}switch(e.tag){case 5:var t=e.stateNode;e.flags&32&&(Kr(t,""),e.flags&=-33);var g=fU(A);$F(A,g,t);break;case 3:case 4:var n=e.stateNode.containerInfo,E=fU(A);_F(A,E,n);break;default:throw Error(CA(161))}}catch(C){KB(A,A.return,C)}A.flags&=-3}B&4096&&(A.flags&=-4097)}function by(A,B,Q){hA=A,Yp(A)}function Yp(A,B,Q){for(var e=(A.mode&1)!==0;hA!==null;){var t=hA,g=t.child;if(t.tag===22&&e){var n=t.memoizedState!==null||ka;if(!n){var E=t.alternate,C=E!==null&&E.memoizedState!==null||OQ;E=ka;var o=OQ;if(ka=n,(OQ=C)&&!o)for(hA=t;hA!==null;)n=hA,C=n.child,n.tag===22&&n.memoizedState!==null?pU(t):C!==null?(C.return=n,hA=C):pU(t);for(;g!==null;)hA=g,Yp(g),g=g.sibling;hA=t,ka=E,OQ=o}GU(A)}else t.subtreeFlags&8772&&g!==null?(g.return=t,hA=g):GU(A)}}function GU(A){for(;hA!==null;){var B=hA;if(B.flags&8772){var Q=B.alternate;try{if(B.flags&8772)switch(B.tag){case 0:case 11:case 15:OQ||wl(5,B);break;case 1:var e=B.stateNode;if(B.flags&4&&!OQ)if(Q===null)e.componentDidMount();else{var t=B.elementType===B.type?Q.memoizedProps:Yt(B.type,Q.memoizedProps);e.componentDidUpdate(t,Q.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}var g=B.updateQueue;g!==null&&CU(B,g,e);break;case 3:var n=B.updateQueue;if(n!==null){if(Q=null,B.child!==null)switch(B.child.tag){case 5:Q=B.child.stateNode;break;case 1:Q=B.child.stateNode}CU(B,n,Q)}break;case 5:var E=B.stateNode;if(Q===null&&B.flags&4){Q=E;var C=B.memoizedProps;switch(B.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&Q.focus();break;case"img":C.src&&(Q.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(B.memoizedState===null){var o=B.alternate;if(o!==null){var i=o.memoizedState;if(i!==null){var r=i.dehydrated;r!==null&&AI(r)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(CA(163))}OQ||B.flags&512&&qF(B)}catch(I){KB(B,B.return,I)}}if(B===A){hA=null;break}if(Q=B.sibling,Q!==null){Q.return=B.return,hA=Q;break}hA=B.return}}function hU(A){for(;hA!==null;){var B=hA;if(B===A){hA=null;break}var Q=B.sibling;if(Q!==null){Q.return=B.return,hA=Q;break}hA=B.return}}function pU(A){for(;hA!==null;){var B=hA;try{switch(B.tag){case 0:case 11:case 15:var Q=B.return;try{wl(4,B)}catch(C){KB(B,Q,C)}break;case 1:var e=B.stateNode;if(typeof e.componentDidMount=="function"){var t=B.return;try{e.componentDidMount()}catch(C){KB(B,t,C)}}var g=B.return;try{qF(B)}catch(C){KB(B,g,C)}break;case 5:var n=B.return;try{qF(B)}catch(C){KB(B,n,C)}}}catch(C){KB(B,B.return,C)}if(B===A){hA=null;break}var E=B.sibling;if(E!==null){E.return=B.return,hA=E;break}hA=B.return}}var yy=Math.ceil,Zs=Og.ReactCurrentDispatcher,md=Og.ReactCurrentOwner,Et=Og.ReactCurrentBatchConfig,aB=0,GQ=null,gQ=null,JQ=0,be=0,Go=_n(0),wQ=0,rI=null,WE=0,Fl=0,Yd=0,vr=null,Ce=null,Nd=0,To=1/0,bg=null,Ls=!1,AD=null,Sn=null,Ja=!1,Nn=null,Ss=0,Zr=0,BD=null,ns=-1,Es=0;function qQ(){return aB&6?BQ():ns!==-1?ns:ns=BQ()}function Xn(A){return A.mode&1?aB&2&&JQ!==0?JQ&-JQ:cy.transition!==null?(Es===0&&(Es=ah()),Es):(A=dB,A!==0||(A=window.event,A=A===void 0?16:dh(A.type)),A):1}function kt(A,B,Q,e){if(50<Zr)throw Zr=0,BD=null,Error(CA(185));NI(A,Q,e),(!(aB&2)||A!==GQ)&&(A===GQ&&(!(aB&2)&&(Fl|=Q),wQ===4&&mn(A,JQ)),ae(A,e),Q===1&&aB===0&&!(B.mode&1)&&(To=BQ()+500,sl&&$n()))}function ae(A,B){var Q=A.callbackNode;cb(A,B);var e=Us(A,A===GQ?JQ:0);if(e===0)Q!==null&&v0(Q),A.callbackNode=null,A.callbackPriority=0;else if(B=e&-e,A.callbackPriority!==B){if(Q!=null&&v0(Q),B===1)A.tag===0?ly(RU.bind(null,A)):Sh(RU.bind(null,A)),ry(function(){!(aB&6)&&$n()}),Q=null;else{switch(sh(e)){case 1:Q=ed;break;case 4:Q=rh;break;case 16:Q=us;break;case 536870912:Q=Ih;break;default:Q=us}Q=Lp(Q,Np.bind(null,A))}A.callbackPriority=B,A.callbackNode=Q}}function Np(A,B){if(ns=-1,Es=0,aB&6)throw Error(CA(327));var Q=A.callbackNode;if(yo()&&A.callbackNode!==Q)return null;var e=Us(A,A===GQ?JQ:0);if(e===0)return null;if(e&30||e&A.expiredLanes||B)B=Xs(A,e);else{B=e;var t=aB;aB|=2;var g=yp();(GQ!==A||JQ!==B)&&(bg=null,To=BQ()+500,JE(A,B));do try{vy();break}catch(E){bp(A,E)}while(!0);cd(),Zs.current=g,aB=t,gQ!==null?B=0:(GQ=null,JQ=0,B=wQ)}if(B!==0){if(B===2&&(t=RF(A),t!==0&&(e=t,B=QD(A,t))),B===1)throw Q=rI,JE(A,0),mn(A,e),ae(A,BQ()),Q;if(B===6)mn(A,e);else{if(t=A.current.alternate,!(e&30)&&!ky(t)&&(B=Xs(A,e),B===2&&(g=RF(A),g!==0&&(e=g,B=QD(A,g))),B===1))throw Q=rI,JE(A,0),mn(A,e),ae(A,BQ()),Q;switch(A.finishedWork=t,A.finishedLanes=e,B){case 0:case 1:throw Error(CA(345));case 2:ME(A,Ce,bg);break;case 3:if(mn(A,e),(e&130023424)===e&&(B=Nd+500-BQ(),10<B)){if(Us(A,0)!==0)break;if(t=A.suspendedLanes,(t&e)!==e){qQ(),A.pingedLanes|=A.suspendedLanes&t;break}A.timeoutHandle=vF(ME.bind(null,A,Ce,bg),B);break}ME(A,Ce,bg);break;case 4:if(mn(A,e),(e&4194240)===e)break;for(B=A.eventTimes,t=-1;0<e;){var n=31-yt(e);g=1<<n,n=B[n],n>t&&(t=n),e&=~g}if(e=t,e=BQ()-e,e=(120>e?120:480>e?480:1080>e?1080:1920>e?1920:3e3>e?3e3:4320>e?4320:1960*yy(e/1960))-e,10<e){A.timeoutHandle=vF(ME.bind(null,A,Ce,bg),e);break}ME(A,Ce,bg);break;case 5:ME(A,Ce,bg);break;default:throw Error(CA(329))}}}return ae(A,BQ()),A.callbackNode===Q?Np.bind(null,A):null}function QD(A,B){var Q=vr;return A.current.memoizedState.isDehydrated&&(JE(A,B).flags|=256),A=Xs(A,B),A!==2&&(B=Ce,Ce=Q,B!==null&&eD(B)),A}function eD(A){Ce===null?Ce=A:Ce.push.apply(Ce,A)}function ky(A){for(var B=A;;){if(B.flags&16384){var Q=B.updateQueue;if(Q!==null&&(Q=Q.stores,Q!==null))for(var e=0;e<Q.length;e++){var t=Q[e],g=t.getSnapshot;t=t.value;try{if(!Jt(g(),t))return!1}catch{return!1}}}if(Q=B.child,B.subtreeFlags&16384&&Q!==null)Q.return=B,B=Q;else{if(B===A)break;for(;B.sibling===null;){if(B.return===null||B.return===A)return!0;B=B.return}B.sibling.return=B.return,B=B.sibling}}return!0}function mn(A,B){for(B&=~Yd,B&=~Fl,A.suspendedLanes|=B,A.pingedLanes&=~B,A=A.expirationTimes;0<B;){var Q=31-yt(B),e=1<<Q;A[Q]=-1,B&=~e}}function RU(A){if(aB&6)throw Error(CA(327));yo();var B=Us(A,0);if(!(B&1))return ae(A,BQ()),null;var Q=Xs(A,B);if(A.tag!==0&&Q===2){var e=RF(A);e!==0&&(B=e,Q=QD(A,e))}if(Q===1)throw Q=rI,JE(A,0),mn(A,B),ae(A,BQ()),Q;if(Q===6)throw Error(CA(345));return A.finishedWork=A.current.alternate,A.finishedLanes=B,ME(A,Ce,bg),ae(A,BQ()),null}function bd(A,B){var Q=aB;aB|=1;try{return A(B)}finally{aB=Q,aB===0&&(To=BQ()+500,sl&&$n())}}function OE(A){Nn!==null&&Nn.tag===0&&!(aB&6)&&yo();var B=aB;aB|=1;var Q=Et.transition,e=dB;try{if(Et.transition=null,dB=1,A)return A()}finally{dB=e,Et.transition=Q,aB=B,!(aB&6)&&$n()}}function yd(){be=Go.current,JB(Go)}function JE(A,B){A.finishedWork=null,A.finishedLanes=0;var Q=A.timeoutHandle;if(Q!==-1&&(A.timeoutHandle=-1,iy(Q)),gQ!==null)for(Q=gQ.return;Q!==null;){var e=Q;switch(ad(e),e.tag){case 1:e=e.type.childContextTypes,e!=null&&ps();break;case 3:Wo(),JB(re),JB(zQ),Ud();break;case 5:ud(e);break;case 4:Wo();break;case 13:JB(OB);break;case 19:JB(OB);break;case 10:wd(e.type._context);break;case 22:case 23:yd()}Q=Q.return}if(GQ=A,gQ=A=Hn(A.current,null),JQ=be=B,wQ=0,rI=null,Yd=Fl=WE=0,Ce=vr=null,YE!==null){for(B=0;B<YE.length;B++)if(Q=YE[B],e=Q.interleaved,e!==null){Q.interleaved=null;var t=e.next,g=Q.pending;if(g!==null){var n=g.next;g.next=t,e.next=n}Q.pending=e}YE=null}return A}function bp(A,B){do{var Q=gQ;try{if(cd(),es.current=vs,Js){for(var e=TB.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Js=!1}if(xE=0,MQ=lQ=TB=null,kr=!1,CI=0,md.current=null,Q===null||Q.return===null){wQ=1,rI=B,gQ=null;break}A:{var g=A,n=Q.return,E=Q,C=B;if(B=JQ,E.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var o=C,i=E,r=i.tag;if(!(i.mode&1)&&(r===0||r===11||r===15)){var I=i.alternate;I?(i.updateQueue=I.updateQueue,i.memoizedState=I.memoizedState,i.lanes=I.lanes):(i.updateQueue=null,i.memoizedState=null)}var a=lU(n);if(a!==null){a.flags&=-257,cU(a,n,E,g,B),a.mode&1&&sU(g,o,B),B=a,C=o;var d=B.updateQueue;if(d===null){var D=new Set;D.add(C),B.updateQueue=D}else d.add(C);break A}else{if(!(B&1)){sU(g,o,B),kd();break A}C=Error(CA(426))}}else if(HB&&E.mode&1){var U=lU(n);if(U!==null){!(U.flags&65536)&&(U.flags|=256),cU(U,n,E,g,B),sd(Oo(C,E));break A}}g=C=Oo(C,E),wQ!==4&&(wQ=2),vr===null?vr=[g]:vr.push(g),g=n;do{switch(g.tag){case 3:g.flags|=65536,B&=-B,g.lanes|=B;var l=lp(g,C,B);EU(g,l);break A;case 1:E=C;var F=g.type,c=g.stateNode;if(!(g.flags&128)&&(typeof F.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Sn===null||!Sn.has(c)))){g.flags|=65536,B&=-B,g.lanes|=B;var w=cp(g,E,B);EU(g,w);break A}}g=g.return}while(g!==null)}Jp(Q)}catch(M){B=M,gQ===Q&&Q!==null&&(gQ=Q=Q.return);continue}break}while(!0)}function yp(){var A=Zs.current;return Zs.current=vs,A===null?vs:A}function kd(){(wQ===0||wQ===3||wQ===2)&&(wQ=4),GQ===null||!(WE&268435455)&&!(Fl&268435455)||mn(GQ,JQ)}function Xs(A,B){var Q=aB;aB|=2;var e=yp();(GQ!==A||JQ!==B)&&(bg=null,JE(A,B));do try{Jy();break}catch(t){bp(A,t)}while(!0);if(cd(),aB=Q,Zs.current=e,gQ!==null)throw Error(CA(261));return GQ=null,JQ=0,wQ}function Jy(){for(;gQ!==null;)kp(gQ)}function vy(){for(;gQ!==null&&!Eb();)kp(gQ)}function kp(A){var B=Zp(A.alternate,A,be);A.memoizedProps=A.pendingProps,B===null?Jp(A):gQ=B,md.current=null}function Jp(A){var B=A;do{var Q=B.alternate;if(A=B.return,B.flags&32768){if(Q=my(Q,B),Q!==null){Q.flags&=32767,gQ=Q;return}if(A!==null)A.flags|=32768,A.subtreeFlags=0,A.deletions=null;else{wQ=6,gQ=null;return}}else if(Q=Ry(Q,B,be),Q!==null){gQ=Q;return}if(B=B.sibling,B!==null){gQ=B;return}gQ=B=A}while(B!==null);wQ===0&&(wQ=5)}function ME(A,B,Q){var e=dB,t=Et.transition;try{Et.transition=null,dB=1,Zy(A,B,Q,e)}finally{Et.transition=t,dB=e}return null}function Zy(A,B,Q,e){do yo();while(Nn!==null);if(aB&6)throw Error(CA(327));Q=A.finishedWork;var t=A.finishedLanes;if(Q===null)return null;if(A.finishedWork=null,A.finishedLanes=0,Q===A.current)throw Error(CA(177));A.callbackNode=null,A.callbackPriority=0;var g=Q.lanes|Q.childLanes;if(wb(A,g),A===GQ&&(gQ=GQ=null,JQ=0),!(Q.subtreeFlags&2064)&&!(Q.flags&2064)||Ja||(Ja=!0,Lp(us,function(){return yo(),null})),g=(Q.flags&15990)!==0,Q.subtreeFlags&15990||g){g=Et.transition,Et.transition=null;var n=dB;dB=1;var E=aB;aB|=4,md.current=null,Ny(A,Q),mp(Q,A),ey(kF),fs=!!yF,kF=yF=null,A.current=Q,by(Q),Cb(),aB=E,dB=n,Et.transition=g}else A.current=Q;if(Ja&&(Ja=!1,Nn=A,Ss=t),g=A.pendingLanes,g===0&&(Sn=null),rb(Q.stateNode),ae(A,BQ()),B!==null)for(e=A.onRecoverableError,Q=0;Q<B.length;Q++)t=B[Q],e(t.value,{componentStack:t.stack,digest:t.digest});if(Ls)throw Ls=!1,A=AD,AD=null,A;return Ss&1&&A.tag!==0&&yo(),g=A.pendingLanes,g&1?A===BD?Zr++:(Zr=0,BD=A):Zr=0,$n(),null}function yo(){if(Nn!==null){var A=sh(Ss),B=Et.transition,Q=dB;try{if(Et.transition=null,dB=16>A?16:A,Nn===null)var e=!1;else{if(A=Nn,Nn=null,Ss=0,aB&6)throw Error(CA(331));var t=aB;for(aB|=4,hA=A.current;hA!==null;){var g=hA,n=g.child;if(hA.flags&16){var E=g.deletions;if(E!==null){for(var C=0;C<E.length;C++){var o=E[C];for(hA=o;hA!==null;){var i=hA;switch(i.tag){case 0:case 11:case 15:Jr(8,i,g)}var r=i.child;if(r!==null)r.return=i,hA=r;else for(;hA!==null;){i=hA;var I=i.sibling,a=i.return;if(hp(i),i===o){hA=null;break}if(I!==null){I.return=a,hA=I;break}hA=a}}}var d=g.alternate;if(d!==null){var D=d.child;if(D!==null){d.child=null;do{var U=D.sibling;D.sibling=null,D=U}while(D!==null)}}hA=g}}if(g.subtreeFlags&2064&&n!==null)n.return=g,hA=n;else A:for(;hA!==null;){if(g=hA,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Jr(9,g,g.return)}var l=g.sibling;if(l!==null){l.return=g.return,hA=l;break A}hA=g.return}}var F=A.current;for(hA=F;hA!==null;){n=hA;var c=n.child;if(n.subtreeFlags&2064&&c!==null)c.return=n,hA=c;else A:for(n=F;hA!==null;){if(E=hA,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:wl(9,E)}}catch(M){KB(E,E.return,M)}if(E===n){hA=null;break A}var w=E.sibling;if(w!==null){w.return=E.return,hA=w;break A}hA=E.return}}if(aB=t,$n(),Bg&&typeof Bg.onPostCommitFiberRoot=="function")try{Bg.onPostCommitFiberRoot(ol,A)}catch{}e=!0}return e}finally{dB=Q,Et.transition=B}}return!1}function mU(A,B,Q){B=Oo(Q,B),B=lp(A,B,1),A=Ln(A,B,1),B=qQ(),A!==null&&(NI(A,1,B),ae(A,B))}function KB(A,B,Q){if(A.tag===3)mU(A,A,Q);else for(;B!==null;){if(B.tag===3){mU(B,A,Q);break}else if(B.tag===1){var e=B.stateNode;if(typeof B.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Sn===null||!Sn.has(e))){A=Oo(Q,A),A=cp(B,A,1),B=Ln(B,A,1),A=qQ(),B!==null&&(NI(B,1,A),ae(B,A));break}}B=B.return}}function Ly(A,B,Q){var e=A.pingCache;e!==null&&e.delete(B),B=qQ(),A.pingedLanes|=A.suspendedLanes&Q,GQ===A&&(JQ&Q)===Q&&(wQ===4||wQ===3&&(JQ&130023424)===JQ&&500>BQ()-Nd?JE(A,0):Yd|=Q),ae(A,B)}function vp(A,B){B===0&&(A.mode&1?(B=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):B=1);var Q=qQ();A=Xg(A,B),A!==null&&(NI(A,B,Q),ae(A,Q))}function Sy(A){var B=A.memoizedState,Q=0;B!==null&&(Q=B.retryLane),vp(A,Q)}function Xy(A,B){var Q=0;switch(A.tag){case 13:var e=A.stateNode,t=A.memoizedState;t!==null&&(Q=t.retryLane);break;case 19:e=A.stateNode;break;default:throw Error(CA(314))}e!==null&&e.delete(B),vp(A,Q)}var Zp;Zp=function(A,B,Q){if(A!==null)if(A.memoizedProps!==B.pendingProps||re.current)ie=!0;else{if(!(A.lanes&Q)&&!(B.flags&128))return ie=!1,py(A,B,Q);ie=!!(A.flags&131072)}else ie=!1,HB&&B.flags&1048576&&Xh(B,Ys,B.index);switch(B.lanes=0,B.tag){case 2:var e=B.type;gs(A,B),A=B.pendingProps;var t=Xo(B,zQ.current);bo(B,Q),t=Md(null,B,e,A,t,Q);var g=Gd();return B.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(B.tag=1,B.memoizedState=null,B.updateQueue=null,Ie(e)?(g=!0,Rs(B)):g=!1,B.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,Dd(B),t.updater=ll,B.stateNode=t,t._reactInternals=B,WF(B,e,A,Q),B=VF(null,B,e,!0,g,Q)):(B.tag=0,HB&&g&&Id(B),KQ(null,B,t,Q),B=B.child),B;case 16:e=B.elementType;A:{switch(gs(A,B),A=B.pendingProps,t=e._init,e=t(e._payload),B.type=e,t=B.tag=xy(e),A=Yt(e,A),t){case 0:B=TF(null,B,e,A,Q);break A;case 1:B=DU(null,B,e,A,Q);break A;case 11:B=wU(null,B,e,A,Q);break A;case 14:B=FU(null,B,e,Yt(e.type,A),Q);break A}throw Error(CA(306,e,""))}return B;case 0:return e=B.type,t=B.pendingProps,t=B.elementType===e?t:Yt(e,t),TF(A,B,e,t,Q);case 1:return e=B.type,t=B.pendingProps,t=B.elementType===e?t:Yt(e,t),DU(A,B,e,t,Q);case 3:A:{if(dp(B),A===null)throw Error(CA(387));e=B.pendingProps,g=B.memoizedState,t=g.element,Oh(A,B),ys(B,e,null,Q);var n=B.memoizedState;if(e=n.element,g.isDehydrated)if(g={element:e,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},B.updateQueue.baseState=g,B.memoizedState=g,B.flags&256){t=Oo(Error(CA(423)),B),B=dU(A,B,e,Q,t);break A}else if(e!==t){t=Oo(Error(CA(424)),B),B=dU(A,B,e,Q,t);break A}else for(ke=Zn(B.stateNode.containerInfo.firstChild),ve=B,HB=!0,bt=null,Q=jh(B,null,e,Q),B.child=Q;Q;)Q.flags=Q.flags&-3|4096,Q=Q.sibling;else{if(Ho(),e===t){B=Hg(A,B,Q);break A}KQ(A,B,e,Q)}B=B.child}return B;case 5:return Ph(B),A===null&&XF(B),e=B.type,t=B.pendingProps,g=A!==null?A.memoizedProps:null,n=t.children,JF(e,t)?n=null:g!==null&&JF(e,g)&&(B.flags|=32),Dp(A,B),KQ(A,B,n,Q),B.child;case 6:return A===null&&XF(B),null;case 13:return up(A,B,Q);case 4:return dd(B,B.stateNode.containerInfo),e=B.pendingProps,A===null?B.child=xo(B,null,e,Q):KQ(A,B,e,Q),B.child;case 11:return e=B.type,t=B.pendingProps,t=B.elementType===e?t:Yt(e,t),wU(A,B,e,t,Q);case 7:return KQ(A,B,B.pendingProps,Q),B.child;case 8:return KQ(A,B,B.pendingProps.children,Q),B.child;case 12:return KQ(A,B,B.pendingProps.children,Q),B.child;case 10:A:{if(e=B.type._context,t=B.pendingProps,g=B.memoizedProps,n=t.value,mB(Ns,e._currentValue),e._currentValue=n,g!==null)if(Jt(g.value,n)){if(g.children===t.children&&!re.current){B=Hg(A,B,Q);break A}}else for(g=B.child,g!==null&&(g.return=B);g!==null;){var E=g.dependencies;if(E!==null){n=g.child;for(var C=E.firstContext;C!==null;){if(C.context===e){if(g.tag===1){C=Zg(-1,Q&-Q),C.tag=2;var o=g.updateQueue;if(o!==null){o=o.shared;var i=o.pending;i===null?C.next=C:(C.next=i.next,i.next=C),o.pending=C}}g.lanes|=Q,C=g.alternate,C!==null&&(C.lanes|=Q),HF(g.return,Q,B),E.lanes|=Q;break}C=C.next}}else if(g.tag===10)n=g.type===B.type?null:g.child;else if(g.tag===18){if(n=g.return,n===null)throw Error(CA(341));n.lanes|=Q,E=n.alternate,E!==null&&(E.lanes|=Q),HF(n,Q,B),n=g.sibling}else n=g.child;if(n!==null)n.return=g;else for(n=g;n!==null;){if(n===B){n=null;break}if(g=n.sibling,g!==null){g.return=n.return,n=g;break}n=n.return}g=n}KQ(A,B,t.children,Q),B=B.child}return B;case 9:return t=B.type,e=B.pendingProps.children,bo(B,Q),t=it(t),e=e(t),B.flags|=1,KQ(A,B,e,Q),B.child;case 14:return e=B.type,t=Yt(e,B.pendingProps),t=Yt(e.type,t),FU(A,B,e,t,Q);case 15:return wp(A,B,B.type,B.pendingProps,Q);case 17:return e=B.type,t=B.pendingProps,t=B.elementType===e?t:Yt(e,t),gs(A,B),B.tag=1,Ie(e)?(A=!0,Rs(B)):A=!1,bo(B,Q),Vh(B,e,t),WF(B,e,t,Q),VF(null,B,e,!0,A,Q);case 19:return Up(A,B,Q);case 22:return Fp(A,B,Q)}throw Error(CA(156,B.tag))};function Lp(A,B){return ih(A,B)}function Hy(A,B,Q,e){this.tag=A,this.key=Q,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=B,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(A,B,Q,e){return new Hy(A,B,Q,e)}function Jd(A){return A=A.prototype,!(!A||!A.isReactComponent)}function xy(A){if(typeof A=="function")return Jd(A)?1:0;if(A!=null){if(A=A.$$typeof,A===Ad)return 11;if(A===Bd)return 14}return 2}function Hn(A,B){var Q=A.alternate;return Q===null?(Q=nt(A.tag,B,A.key,A.mode),Q.elementType=A.elementType,Q.type=A.type,Q.stateNode=A.stateNode,Q.alternate=A,A.alternate=Q):(Q.pendingProps=B,Q.type=A.type,Q.flags=0,Q.subtreeFlags=0,Q.deletions=null),Q.flags=A.flags&14680064,Q.childLanes=A.childLanes,Q.lanes=A.lanes,Q.child=A.child,Q.memoizedProps=A.memoizedProps,Q.memoizedState=A.memoizedState,Q.updateQueue=A.updateQueue,B=A.dependencies,Q.dependencies=B===null?null:{lanes:B.lanes,firstContext:B.firstContext},Q.sibling=A.sibling,Q.index=A.index,Q.ref=A.ref,Q}function Cs(A,B,Q,e,t,g){var n=2;if(e=A,typeof A=="function")Jd(A)&&(n=1);else if(typeof A=="string")n=5;else A:switch(A){case so:return vE(Q.children,t,g,B);case $D:n=8,t|=8;break;case aF:return A=nt(12,Q,B,t|2),A.elementType=aF,A.lanes=g,A;case sF:return A=nt(13,Q,B,t),A.elementType=sF,A.lanes=g,A;case lF:return A=nt(19,Q,B,t),A.elementType=lF,A.lanes=g,A;case zG:return Dl(Q,t,g,B);default:if(typeof A=="object"&&A!==null)switch(A.$$typeof){case TG:n=10;break A;case VG:n=9;break A;case Ad:n=11;break A;case Bd:n=14;break A;case Gn:n=16,e=null;break A}throw Error(CA(130,A==null?A:typeof A,""))}return B=nt(n,Q,B,t),B.elementType=A,B.type=e,B.lanes=g,B}function vE(A,B,Q,e){return A=nt(7,A,e,B),A.lanes=Q,A}function Dl(A,B,Q,e){return A=nt(22,A,e,B),A.elementType=zG,A.lanes=Q,A.stateNode={isHidden:!1},A}function Fw(A,B,Q){return A=nt(6,A,null,B),A.lanes=Q,A}function Dw(A,B,Q){return B=nt(4,A.children!==null?A.children:[],A.key,B),B.lanes=Q,B.stateNode={containerInfo:A.containerInfo,pendingChildren:null,implementation:A.implementation},B}function Wy(A,B,Q,e,t){this.tag=B,this.containerInfo=A,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$c(0),this.expirationTimes=$c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.identifierPrefix=e,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function vd(A,B,Q,e,t,g,n,E,C){return A=new Wy(A,B,Q,E,C),B===1?(B=1,g===!0&&(B|=8)):B=0,g=nt(3,null,null,B),A.current=g,g.stateNode=A,g.memoizedState={element:e,isDehydrated:Q,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dd(g),A}function Oy(A,B,Q){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ao,key:e==null?null:""+e,children:A,containerInfo:B,implementation:Q}}function Sp(A){if(!A)return Tn;A=A._reactInternals;A:{if($E(A)!==A||A.tag!==1)throw Error(CA(170));var B=A;do{switch(B.tag){case 3:B=B.stateNode.context;break A;case 1:if(Ie(B.type)){B=B.stateNode.__reactInternalMemoizedMergedChildContext;break A}}B=B.return}while(B!==null);throw Error(CA(171))}if(A.tag===1){var Q=A.type;if(Ie(Q))return Lh(A,Q,B)}return B}function Xp(A,B,Q,e,t,g,n,E,C){return A=vd(Q,e,!0,A,t,g,n,E,C),A.context=Sp(null),Q=A.current,e=qQ(),t=Xn(Q),g=Zg(e,t),g.callback=B??null,Ln(Q,g,t),A.current.lanes=t,NI(A,t,e),ae(A,e),A}function dl(A,B,Q,e){var t=B.current,g=qQ(),n=Xn(t);return Q=Sp(Q),B.context===null?B.context=Q:B.pendingContext=Q,B=Zg(g,n),B.payload={element:A},e=e===void 0?null:e,e!==null&&(B.callback=e),A=Ln(t,B,n),A!==null&&(kt(A,t,n,g),Qs(A,t,n)),n}function Hs(A){if(A=A.current,!A.child)return null;switch(A.child.tag){case 5:return A.child.stateNode;default:return A.child.stateNode}}function YU(A,B){if(A=A.memoizedState,A!==null&&A.dehydrated!==null){var Q=A.retryLane;A.retryLane=Q!==0&&Q<B?Q:B}}function Zd(A,B){YU(A,B),(A=A.alternate)&&YU(A,B)}function Ty(){return null}var Hp=typeof reportError=="function"?reportError:function(A){console.error(A)};function Ld(A){this._internalRoot=A}ul.prototype.render=Ld.prototype.render=function(A){var B=this._internalRoot;if(B===null)throw Error(CA(409));dl(A,B,null,null)};ul.prototype.unmount=Ld.prototype.unmount=function(){var A=this._internalRoot;if(A!==null){this._internalRoot=null;var B=A.containerInfo;OE(function(){dl(null,A,null,null)}),B[Sg]=null}};function ul(A){this._internalRoot=A}ul.prototype.unstable_scheduleHydration=function(A){if(A){var B=wh();A={blockedOn:null,target:A,priority:B};for(var Q=0;Q<Rn.length&&B!==0&&B<Rn[Q].priority;Q++);Rn.splice(Q,0,A),Q===0&&Dh(A)}};function Sd(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)}function Ul(A){return!(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11&&(A.nodeType!==8||A.nodeValue!==" react-mount-point-unstable "))}function NU(){}function Vy(A,B,Q,e,t){if(t){if(typeof e=="function"){var g=e;e=function(){var o=Hs(n);g.call(o)}}var n=Xp(B,e,A,0,null,!1,!1,"",NU);return A._reactRootContainer=n,A[Sg]=n.current,eI(A.nodeType===8?A.parentNode:A),OE(),n}for(;t=A.lastChild;)A.removeChild(t);if(typeof e=="function"){var E=e;e=function(){var o=Hs(C);E.call(o)}}var C=vd(A,0,!1,null,null,!1,!1,"",NU);return A._reactRootContainer=C,A[Sg]=C.current,eI(A.nodeType===8?A.parentNode:A),OE(function(){dl(B,C,Q,e)}),C}function fl(A,B,Q,e,t){var g=Q._reactRootContainer;if(g){var n=g;if(typeof t=="function"){var E=t;t=function(){var C=Hs(n);E.call(C)}}dl(B,n,A,t)}else n=Vy(Q,B,A,t,e);return Hs(n)}lh=function(A){switch(A.tag){case 3:var B=A.stateNode;if(B.current.memoizedState.isDehydrated){var Q=Ur(B.pendingLanes);Q!==0&&(td(B,Q|1),ae(B,BQ()),!(aB&6)&&(To=BQ()+500,$n()))}break;case 13:OE(function(){var e=Xg(A,1);if(e!==null){var t=qQ();kt(e,A,1,t)}}),Zd(A,1)}};gd=function(A){if(A.tag===13){var B=Xg(A,134217728);if(B!==null){var Q=qQ();kt(B,A,134217728,Q)}Zd(A,134217728)}};ch=function(A){if(A.tag===13){var B=Xn(A),Q=Xg(A,B);if(Q!==null){var e=qQ();kt(Q,A,B,e)}Zd(A,B)}};wh=function(){return dB};Fh=function(A,B){var Q=dB;try{return dB=A,B()}finally{dB=Q}};GF=function(A,B,Q){switch(B){case"input":if(FF(A,Q),B=Q.name,Q.type==="radio"&&B!=null){for(Q=A;Q.parentNode;)Q=Q.parentNode;for(Q=Q.querySelectorAll("input[name="+JSON.stringify(""+B)+'][type="radio"]'),B=0;B<Q.length;B++){var e=Q[B];if(e!==A&&e.form===A.form){var t=al(e);if(!t)throw Error(CA(90));PG(e),FF(e,t)}}}break;case"textarea":qG(A,Q);break;case"select":B=Q.value,B!=null&&Ro(A,!!Q.multiple,B,!1)}};th=bd;gh=OE;var zy={usingClientEntryPoint:!1,Events:[yI,Fo,al,Qh,eh,bd]},Er={findFiberByHostInstance:mE,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jy={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Og.ReactCurrentDispatcher,findHostInstanceByFiber:function(A){return A=Ch(A),A===null?null:A.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||Ty,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var va=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!va.isDisabled&&va.supportsFiber)try{ol=va.inject(jy),Bg=va}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zy;He.createPortal=function(A,B){var Q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sd(B))throw Error(CA(200));return Oy(A,B,null,Q)};He.createRoot=function(A,B){if(!Sd(A))throw Error(CA(299));var Q=!1,e="",t=Hp;return B!=null&&(B.unstable_strictMode===!0&&(Q=!0),B.identifierPrefix!==void 0&&(e=B.identifierPrefix),B.onRecoverableError!==void 0&&(t=B.onRecoverableError)),B=vd(A,1,!1,null,null,Q,!1,e,t),A[Sg]=B.current,eI(A.nodeType===8?A.parentNode:A),new Ld(B)};He.findDOMNode=function(A){if(A==null)return null;if(A.nodeType===1)return A;var B=A._reactInternals;if(B===void 0)throw typeof A.render=="function"?Error(CA(188)):(A=Object.keys(A).join(","),Error(CA(268,A)));return A=Ch(B),A=A===null?null:A.stateNode,A};He.flushSync=function(A){return OE(A)};He.hydrate=function(A,B,Q){if(!Ul(B))throw Error(CA(200));return fl(null,A,B,!0,Q)};He.hydrateRoot=function(A,B,Q){if(!Sd(A))throw Error(CA(405));var e=Q!=null&&Q.hydratedSources||null,t=!1,g="",n=Hp;if(Q!=null&&(Q.unstable_strictMode===!0&&(t=!0),Q.identifierPrefix!==void 0&&(g=Q.identifierPrefix),Q.onRecoverableError!==void 0&&(n=Q.onRecoverableError)),B=Xp(B,null,A,1,Q??null,t,!1,g,n),A[Sg]=B.current,eI(A),e)for(A=0;A<e.length;A++)Q=e[A],t=Q._getVersion,t=t(Q._source),B.mutableSourceEagerHydrationData==null?B.mutableSourceEagerHydrationData=[Q,t]:B.mutableSourceEagerHydrationData.push(Q,t);return new ul(B)};He.render=function(A,B,Q){if(!Ul(B))throw Error(CA(200));return fl(null,A,B,!1,Q)};He.unmountComponentAtNode=function(A){if(!Ul(A))throw Error(CA(40));return A._reactRootContainer?(OE(function(){fl(null,null,A,!1,function(){A._reactRootContainer=null,A[Sg]=null})}),!0):!1};He.unstable_batchedUpdates=bd;He.unstable_renderSubtreeIntoContainer=function(A,B,Q,e){if(!Ul(Q))throw Error(CA(200));if(A==null||A._reactInternals===void 0)throw Error(CA(38));return fl(A,B,Q,!1,e)};He.version="18.2.0-next-9e3b772b8-20220608";function xp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xp)}catch(A){console.error(A)}}xp(),XG.exports=He;var Ml=XG.exports;const Za=El(Ml);var Wp,bU=Ml;Wp=bU.createRoot,bU.hydrateRoot;/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function II(){return II=Object.assign?Object.assign.bind():function(A){for(var B=1;B<arguments.length;B++){var Q=arguments[B];for(var e in Q)Object.prototype.hasOwnProperty.call(Q,e)&&(A[e]=Q[e])}return A},II.apply(this,arguments)}var bn;(function(A){A.Pop="POP",A.Push="PUSH",A.Replace="REPLACE"})(bn||(bn={}));const yU="popstate";function Py(A){A===void 0&&(A={});function B(e,t){let{pathname:g,search:n,hash:E}=e.location;return tD("",{pathname:g,search:n,hash:E},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}function Q(e,t){return typeof t=="string"?t:xs(t)}return qy(B,Q,null,A)}function nQ(A,B){if(A===!1||A===null||typeof A>"u")throw new Error(B)}function Xd(A,B){if(!A){typeof console<"u"&&console.warn(B);try{throw new Error(B)}catch{}}}function Ky(){return Math.random().toString(36).substr(2,8)}function kU(A,B){return{usr:A.state,key:A.key,idx:B}}function tD(A,B,Q,e){return Q===void 0&&(Q=null),II({pathname:typeof A=="string"?A:A.pathname,search:"",hash:""},typeof B=="string"?gi(B):B,{state:Q,key:B&&B.key||e||Ky()})}function xs(A){let{pathname:B="/",search:Q="",hash:e=""}=A;return Q&&Q!=="?"&&(B+=Q.charAt(0)==="?"?Q:"?"+Q),e&&e!=="#"&&(B+=e.charAt(0)==="#"?e:"#"+e),B}function gi(A){let B={};if(A){let Q=A.indexOf("#");Q>=0&&(B.hash=A.substr(Q),A=A.substr(0,Q));let e=A.indexOf("?");e>=0&&(B.search=A.substr(e),A=A.substr(0,e)),A&&(B.pathname=A)}return B}function qy(A,B,Q,e){e===void 0&&(e={});let{window:t=document.defaultView,v5Compat:g=!1}=e,n=t.history,E=bn.Pop,C=null,o=i();o==null&&(o=0,n.replaceState(II({},n.state,{idx:o}),""));function i(){return(n.state||{idx:null}).idx}function r(){E=bn.Pop;let U=i(),l=U==null?null:U-o;o=U,C&&C({action:E,location:D.location,delta:l})}function I(U,l){E=bn.Push;let F=tD(D.location,U,l);Q&&Q(F,U),o=i()+1;let c=kU(F,o),w=D.createHref(F);try{n.pushState(c,"",w)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;t.location.assign(w)}g&&C&&C({action:E,location:D.location,delta:1})}function a(U,l){E=bn.Replace;let F=tD(D.location,U,l);Q&&Q(F,U),o=i();let c=kU(F,o),w=D.createHref(F);n.replaceState(c,"",w),g&&C&&C({action:E,location:D.location,delta:0})}function d(U){let l=t.location.origin!=="null"?t.location.origin:t.location.href,F=typeof U=="string"?U:xs(U);return nQ(l,"No window.location.(origin|href) available to create URL for href: "+F),new URL(F,l)}let D={get action(){return E},get location(){return A(t,n)},listen(U){if(C)throw new Error("A history only accepts one active listener");return t.addEventListener(yU,r),C=U,()=>{t.removeEventListener(yU,r),C=null}},createHref(U){return B(t,U)},createURL:d,encodeLocation(U){let l=d(U);return{pathname:l.pathname,search:l.search,hash:l.hash}},push:I,replace:a,go(U){return n.go(U)}};return D}var JU;(function(A){A.data="data",A.deferred="deferred",A.redirect="redirect",A.error="error"})(JU||(JU={}));function _y(A,B,Q){Q===void 0&&(Q="/");let e=typeof B=="string"?gi(B):B,t=Hd(e.pathname||"/",Q);if(t==null)return null;let g=Op(A);$y(g);let n=null;for(let E=0;n==null&&E<g.length;++E)n=C2(g[E],r2(t));return n}function Op(A,B,Q,e){B===void 0&&(B=[]),Q===void 0&&(Q=[]),e===void 0&&(e="");let t=(g,n,E)=>{let C={relativePath:E===void 0?g.path||"":E,caseSensitive:g.caseSensitive===!0,childrenIndex:n,route:g};C.relativePath.startsWith("/")&&(nQ(C.relativePath.startsWith(e),'Absolute route path "'+C.relativePath+'" nested under path '+('"'+e+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),C.relativePath=C.relativePath.slice(e.length));let o=xn([e,C.relativePath]),i=Q.concat(C);g.children&&g.children.length>0&&(nQ(g.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+o+'".')),Op(g.children,B,i,o)),!(g.path==null&&!g.index)&&B.push({path:o,score:n2(o,g.index),routesMeta:i})};return A.forEach((g,n)=>{var E;if(g.path===""||!((E=g.path)!=null&&E.includes("?")))t(g,n);else for(let C of Tp(g.path))t(g,n,C)}),B}function Tp(A){let B=A.split("/");if(B.length===0)return[];let[Q,...e]=B,t=Q.endsWith("?"),g=Q.replace(/\?$/,"");if(e.length===0)return t?[g,""]:[g];let n=Tp(e.join("/")),E=[];return E.push(...n.map(C=>C===""?g:[g,C].join("/"))),t&&E.push(...n),E.map(C=>A.startsWith("/")&&C===""?"/":C)}function $y(A){A.sort((B,Q)=>B.score!==Q.score?Q.score-B.score:E2(B.routesMeta.map(e=>e.childrenIndex),Q.routesMeta.map(e=>e.childrenIndex)))}const A2=/^:\w+$/,B2=3,Q2=2,e2=1,t2=10,g2=-2,vU=A=>A==="*";function n2(A,B){let Q=A.split("/"),e=Q.length;return Q.some(vU)&&(e+=g2),B&&(e+=Q2),Q.filter(t=>!vU(t)).reduce((t,g)=>t+(A2.test(g)?B2:g===""?e2:t2),e)}function E2(A,B){return A.length===B.length&&A.slice(0,-1).every((e,t)=>e===B[t])?A[A.length-1]-B[B.length-1]:0}function C2(A,B){let{routesMeta:Q}=A,e={},t="/",g=[];for(let n=0;n<Q.length;++n){let E=Q[n],C=n===Q.length-1,o=t==="/"?B:B.slice(t.length)||"/",i=o2({path:E.relativePath,caseSensitive:E.caseSensitive,end:C},o);if(!i)return null;Object.assign(e,i.params);let r=E.route;g.push({params:e,pathname:xn([t,i.pathname]),pathnameBase:c2(xn([t,i.pathnameBase])),route:r}),i.pathnameBase!=="/"&&(t=xn([t,i.pathnameBase]))}return g}function o2(A,B){typeof A=="string"&&(A={path:A,caseSensitive:!1,end:!0});let[Q,e]=i2(A.path,A.caseSensitive,A.end),t=B.match(Q);if(!t)return null;let g=t[0],n=g.replace(/(.)\/+$/,"$1"),E=t.slice(1);return{params:e.reduce((o,i,r)=>{let{paramName:I,isOptional:a}=i;if(I==="*"){let D=E[r]||"";n=g.slice(0,g.length-D.length).replace(/(.)\/+$/,"$1")}const d=E[r];return a&&!d?o[I]=void 0:o[I]=I2(d||"",I),o},{}),pathname:g,pathnameBase:n,pattern:A}}function i2(A,B,Q){B===void 0&&(B=!1),Q===void 0&&(Q=!0),Xd(A==="*"||!A.endsWith("*")||A.endsWith("/*"),'Route path "'+A+'" will be treated as if it were '+('"'+A.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+A.replace(/\*$/,"/*")+'".'));let e=[],t="^"+A.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(n,E,C)=>(e.push({paramName:E,isOptional:C!=null}),C?"/?([^\\/]+)?":"/([^\\/]+)"));return A.endsWith("*")?(e.push({paramName:"*"}),t+=A==="*"||A==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):Q?t+="\\/*$":A!==""&&A!=="/"&&(t+="(?:(?=\\/|$))"),[new RegExp(t,B?void 0:"i"),e]}function r2(A){try{return decodeURI(A)}catch(B){return Xd(!1,'The URL path "'+A+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+B+").")),A}}function I2(A,B){try{return decodeURIComponent(A)}catch(Q){return Xd(!1,'The value for the URL param "'+B+'" will not be decoded because'+(' the string "'+A+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+Q+").")),A}}function Hd(A,B){if(B==="/")return A;if(!A.toLowerCase().startsWith(B.toLowerCase()))return null;let Q=B.endsWith("/")?B.length-1:B.length,e=A.charAt(Q);return e&&e!=="/"?null:A.slice(Q)||"/"}function a2(A,B){B===void 0&&(B="/");let{pathname:Q,search:e="",hash:t=""}=typeof A=="string"?gi(A):A;return{pathname:Q?Q.startsWith("/")?Q:s2(Q,B):B,search:w2(e),hash:F2(t)}}function s2(A,B){let Q=B.replace(/\/+$/,"").split("/");return A.split("/").forEach(t=>{t===".."?Q.length>1&&Q.pop():t!=="."&&Q.push(t)}),Q.length>1?Q.join("/"):"/"}function dw(A,B,Q,e){return"Cannot include a '"+A+"' character in a manually specified "+("`to."+B+"` field ["+JSON.stringify(e)+"].  Please separate it out to the ")+("`to."+Q+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function l2(A){return A.filter((B,Q)=>Q===0||B.route.path&&B.route.path.length>0)}function Vp(A,B){let Q=l2(A);return B?Q.map((e,t)=>t===A.length-1?e.pathname:e.pathnameBase):Q.map(e=>e.pathnameBase)}function zp(A,B,Q,e){e===void 0&&(e=!1);let t;typeof A=="string"?t=gi(A):(t=II({},A),nQ(!t.pathname||!t.pathname.includes("?"),dw("?","pathname","search",t)),nQ(!t.pathname||!t.pathname.includes("#"),dw("#","pathname","hash",t)),nQ(!t.search||!t.search.includes("#"),dw("#","search","hash",t)));let g=A===""||t.pathname==="",n=g?"/":t.pathname,E;if(n==null)E=Q;else if(e){let r=B.length===0?[]:B[B.length-1].replace(/^\//,"").split("/");if(n.startsWith("..")){let I=n.split("/");for(;I[0]==="..";)I.shift(),r.pop();t.pathname=I.join("/")}E="/"+r.join("/")}else{let r=B.length-1;if(n.startsWith("..")){let I=n.split("/");for(;I[0]==="..";)I.shift(),r-=1;t.pathname=I.join("/")}E=r>=0?B[r]:"/"}let C=a2(t,E),o=n&&n!=="/"&&n.endsWith("/"),i=(g||n===".")&&Q.endsWith("/");return!C.pathname.endsWith("/")&&(o||i)&&(C.pathname+="/"),C}const xn=A=>A.join("/").replace(/\/\/+/g,"/"),c2=A=>A.replace(/\/+$/,"").replace(/^\/*/,"/"),w2=A=>!A||A==="?"?"":A.startsWith("?")?A:"?"+A,F2=A=>!A||A==="#"?"":A.startsWith("#")?A:"#"+A;function D2(A){return A!=null&&typeof A.status=="number"&&typeof A.statusText=="string"&&typeof A.internal=="boolean"&&"data"in A}const jp=["post","put","patch","delete"];new Set(jp);const d2=["get",...jp];new Set(d2);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aI(){return aI=Object.assign?Object.assign.bind():function(A){for(var B=1;B<arguments.length;B++){var Q=arguments[B];for(var e in Q)Object.prototype.hasOwnProperty.call(Q,e)&&(A[e]=Q[e])}return A},aI.apply(this,arguments)}const xd=G.createContext(null),u2=G.createContext(null),AC=G.createContext(null),Gl=G.createContext(null),AE=G.createContext({outlet:null,matches:[],isDataRoute:!1}),Pp=G.createContext(null);function U2(A,B){let{relative:Q}=B===void 0?{}:B;JI()||nQ(!1);let{basename:e,navigator:t}=G.useContext(AC),{hash:g,pathname:n,search:E}=_p(A,{relative:Q}),C=n;return e!=="/"&&(C=n==="/"?e:xn([e,n])),t.createHref({pathname:C,search:E,hash:g})}function JI(){return G.useContext(Gl)!=null}function vI(){return JI()||nQ(!1),G.useContext(Gl).location}function Kp(A){G.useContext(AC).static||G.useLayoutEffect(A)}function Wd(){let{isDataRoute:A}=G.useContext(AE);return A?J2():f2()}function f2(){JI()||nQ(!1);let A=G.useContext(xd),{basename:B,future:Q,navigator:e}=G.useContext(AC),{matches:t}=G.useContext(AE),{pathname:g}=vI(),n=JSON.stringify(Vp(t,Q.v7_relativeSplatPath)),E=G.useRef(!1);return Kp(()=>{E.current=!0}),G.useCallback(function(o,i){if(i===void 0&&(i={}),!E.current)return;if(typeof o=="number"){e.go(o);return}let r=zp(o,JSON.parse(n),g,i.relative==="path");A==null&&B!=="/"&&(r.pathname=r.pathname==="/"?B:xn([B,r.pathname])),(i.replace?e.replace:e.push)(r,i.state,i)},[B,e,n,g,A])}function qp(){let{matches:A}=G.useContext(AE),B=A[A.length-1];return B?B.params:{}}function _p(A,B){let{relative:Q}=B===void 0?{}:B,{future:e}=G.useContext(AC),{matches:t}=G.useContext(AE),{pathname:g}=vI(),n=JSON.stringify(Vp(t,e.v7_relativeSplatPath));return G.useMemo(()=>zp(A,JSON.parse(n),g,Q==="path"),[A,n,g,Q])}function M2(A,B){return G2(A,B)}function G2(A,B,Q,e){JI()||nQ(!1);let{navigator:t}=G.useContext(AC),{matches:g}=G.useContext(AE),n=g[g.length-1],E=n?n.params:{};n&&n.pathname;let C=n?n.pathnameBase:"/";n&&n.route;let o=vI(),i;if(B){var r;let U=typeof B=="string"?gi(B):B;C==="/"||(r=U.pathname)!=null&&r.startsWith(C)||nQ(!1),i=U}else i=o;let I=i.pathname||"/",a=C==="/"?I:I.slice(C.length)||"/",d=_y(A,{pathname:a}),D=Y2(d&&d.map(U=>Object.assign({},U,{params:Object.assign({},E,U.params),pathname:xn([C,t.encodeLocation?t.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?C:xn([C,t.encodeLocation?t.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),g,Q,e);return B&&D?G.createElement(Gl.Provider,{value:{location:aI({pathname:"/",search:"",hash:"",state:null,key:"default"},i),navigationType:bn.Pop}},D):D}function h2(){let A=k2(),B=D2(A)?A.status+" "+A.statusText:A instanceof Error?A.message:JSON.stringify(A),Q=A instanceof Error?A.stack:null,t={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},g=null;return G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},B),Q?G.createElement("pre",{style:t},Q):null,g)}const p2=G.createElement(h2,null);class R2 extends G.Component{constructor(B){super(B),this.state={location:B.location,revalidation:B.revalidation,error:B.error}}static getDerivedStateFromError(B){return{error:B}}static getDerivedStateFromProps(B,Q){return Q.location!==B.location||Q.revalidation!=="idle"&&B.revalidation==="idle"?{error:B.error,location:B.location,revalidation:B.revalidation}:{error:B.error!==void 0?B.error:Q.error,location:Q.location,revalidation:B.revalidation||Q.revalidation}}componentDidCatch(B,Q){console.error("React Router caught the following error during render",B,Q)}render(){return this.state.error!==void 0?G.createElement(AE.Provider,{value:this.props.routeContext},G.createElement(Pp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function m2(A){let{routeContext:B,match:Q,children:e}=A,t=G.useContext(xd);return t&&t.static&&t.staticContext&&(Q.route.errorElement||Q.route.ErrorBoundary)&&(t.staticContext._deepestRenderedBoundaryId=Q.route.id),G.createElement(AE.Provider,{value:B},e)}function Y2(A,B,Q,e){var t;if(B===void 0&&(B=[]),Q===void 0&&(Q=null),e===void 0&&(e=null),A==null){var g;if((g=Q)!=null&&g.errors)A=Q.matches;else return null}let n=A,E=(t=Q)==null?void 0:t.errors;if(E!=null){let i=n.findIndex(r=>r.route.id&&(E==null?void 0:E[r.route.id]));i>=0||nQ(!1),n=n.slice(0,Math.min(n.length,i+1))}let C=!1,o=-1;if(Q&&e&&e.v7_partialHydration)for(let i=0;i<n.length;i++){let r=n[i];if((r.route.HydrateFallback||r.route.hydrateFallbackElement)&&(o=i),r.route.loader&&r.route.id&&Q.loaderData[r.route.id]===void 0&&(!Q.errors||Q.errors[r.route.id]===void 0)){C=!0,o>=0?n=n.slice(0,o+1):n=[n[0]];break}}return n.reduceRight((i,r,I)=>{let a,d=!1,D=null,U=null;Q&&(a=E&&r.route.id?E[r.route.id]:void 0,D=r.route.errorElement||p2,C&&(o<0&&I===0?(v2("route-fallback",!1),d=!0,U=null):o===I&&(d=!0,U=r.route.hydrateFallbackElement||null)));let l=B.concat(n.slice(0,I+1)),F=()=>{let c;return a?c=D:d?c=U:r.route.Component?c=G.createElement(r.route.Component,null):r.route.element?c=r.route.element:c=i,G.createElement(m2,{match:r,routeContext:{outlet:i,matches:l,isDataRoute:Q!=null},children:c})};return Q&&(r.route.ErrorBoundary||r.route.errorElement||I===0)?G.createElement(R2,{location:Q.location,revalidation:Q.revalidation,component:D,error:a,children:F(),routeContext:{outlet:null,matches:l,isDataRoute:!0}}):F()},null)}var $p=function(A){return A.UseBlocker="useBlocker",A.UseRevalidator="useRevalidator",A.UseNavigateStable="useNavigate",A}($p||{}),Ws=function(A){return A.UseBlocker="useBlocker",A.UseLoaderData="useLoaderData",A.UseActionData="useActionData",A.UseRouteError="useRouteError",A.UseNavigation="useNavigation",A.UseRouteLoaderData="useRouteLoaderData",A.UseMatches="useMatches",A.UseRevalidator="useRevalidator",A.UseNavigateStable="useNavigate",A.UseRouteId="useRouteId",A}(Ws||{});function N2(A){let B=G.useContext(xd);return B||nQ(!1),B}function b2(A){let B=G.useContext(u2);return B||nQ(!1),B}function y2(A){let B=G.useContext(AE);return B||nQ(!1),B}function AR(A){let B=y2(),Q=B.matches[B.matches.length-1];return Q.route.id||nQ(!1),Q.route.id}function k2(){var A;let B=G.useContext(Pp),Q=b2(Ws.UseRouteError),e=AR(Ws.UseRouteError);return B!==void 0?B:(A=Q.errors)==null?void 0:A[e]}function J2(){let{router:A}=N2($p.UseNavigateStable),B=AR(Ws.UseNavigateStable),Q=G.useRef(!1);return Kp(()=>{Q.current=!0}),G.useCallback(function(t,g){g===void 0&&(g={}),Q.current&&(typeof t=="number"?A.navigate(t):A.navigate(t,aI({fromRouteId:B},g)))},[A,B])}const ZU={};function v2(A,B,Q){!B&&!ZU[A]&&(ZU[A]=!0)}function io(A){nQ(!1)}function Z2(A){let{basename:B="/",children:Q=null,location:e,navigationType:t=bn.Pop,navigator:g,static:n=!1,future:E}=A;JI()&&nQ(!1);let C=B.replace(/^\/*/,"/"),o=G.useMemo(()=>({basename:C,navigator:g,static:n,future:aI({v7_relativeSplatPath:!1},E)}),[C,E,g,n]);typeof e=="string"&&(e=gi(e));let{pathname:i="/",search:r="",hash:I="",state:a=null,key:d="default"}=e,D=G.useMemo(()=>{let U=Hd(i,C);return U==null?null:{location:{pathname:U,search:r,hash:I,state:a,key:d},navigationType:t}},[C,i,r,I,a,d,t]);return D==null?null:G.createElement(AC.Provider,{value:o},G.createElement(Gl.Provider,{children:Q,value:D}))}function L2(A){let{children:B,location:Q}=A;return M2(gD(B),Q)}new Promise(()=>{});function gD(A,B){B===void 0&&(B=[]);let Q=[];return G.Children.forEach(A,(e,t)=>{if(!G.isValidElement(e))return;let g=[...B,t];if(e.type===G.Fragment){Q.push.apply(Q,gD(e.props.children,g));return}e.type!==io&&nQ(!1),!e.props.index||!e.props.children||nQ(!1);let n={id:e.props.id||g.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(n.children=gD(e.props.children,g)),Q.push(n)}),Q}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nD(){return nD=Object.assign?Object.assign.bind():function(A){for(var B=1;B<arguments.length;B++){var Q=arguments[B];for(var e in Q)Object.prototype.hasOwnProperty.call(Q,e)&&(A[e]=Q[e])}return A},nD.apply(this,arguments)}function S2(A,B){if(A==null)return{};var Q={},e=Object.keys(A),t,g;for(g=0;g<e.length;g++)t=e[g],!(B.indexOf(t)>=0)&&(Q[t]=A[t]);return Q}function X2(A){return!!(A.metaKey||A.altKey||A.ctrlKey||A.shiftKey)}function H2(A,B){return A.button===0&&(!B||B==="_self")&&!X2(A)}const x2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],W2="startTransition",LU=Lo[W2];function O2(A){let{basename:B,children:Q,future:e,window:t}=A,g=G.useRef();g.current==null&&(g.current=Py({window:t,v5Compat:!0}));let n=g.current,[E,C]=G.useState({action:n.action,location:n.location}),{v7_startTransition:o}=e||{},i=G.useCallback(r=>{o&&LU?LU(()=>C(r)):C(r)},[C,o]);return G.useLayoutEffect(()=>n.listen(i),[n,i]),G.createElement(Z2,{basename:B,children:Q,location:E.location,navigationType:E.action,navigator:n,future:e})}const T2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",V2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ag=G.forwardRef(function(B,Q){let{onClick:e,relative:t,reloadDocument:g,replace:n,state:E,target:C,to:o,preventScrollReset:i,unstable_viewTransition:r}=B,I=S2(B,x2),{basename:a}=G.useContext(AC),d,D=!1;if(typeof o=="string"&&V2.test(o)&&(d=o,T2))try{let c=new URL(window.location.href),w=o.startsWith("//")?new URL(c.protocol+o):new URL(o),M=Hd(w.pathname,a);w.origin===c.origin&&M!=null?o=M+w.search+w.hash:D=!0}catch{}let U=U2(o,{relative:t}),l=z2(o,{replace:n,state:E,target:C,preventScrollReset:i,relative:t,unstable_viewTransition:r});function F(c){e&&e(c),c.defaultPrevented||l(c)}return G.createElement("a",nD({},I,{href:d||U,onClick:D||g?e:F,ref:Q,target:C}))});var SU;(function(A){A.UseScrollRestoration="useScrollRestoration",A.UseSubmit="useSubmit",A.UseSubmitFetcher="useSubmitFetcher",A.UseFetcher="useFetcher",A.useViewTransitionState="useViewTransitionState"})(SU||(SU={}));var XU;(function(A){A.UseFetcher="useFetcher",A.UseFetchers="useFetchers",A.UseScrollRestoration="useScrollRestoration"})(XU||(XU={}));function z2(A,B){let{target:Q,replace:e,state:t,preventScrollReset:g,relative:n,unstable_viewTransition:E}=B===void 0?{}:B,C=Wd(),o=vI(),i=_p(A,{relative:n});return G.useCallback(r=>{if(H2(r,Q)){r.preventDefault();let I=e!==void 0?e:xs(o)===xs(i);C(A,{replace:I,state:t,preventScrollReset:g,relative:n,unstable_viewTransition:E})}},[o,C,i,e,t,Q,A,g,n,E])}var BR={exports:{}},QR={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZI=G;function j2(A,B){return A===B&&(A!==0||1/A===1/B)||A!==A&&B!==B}var P2=typeof Object.is=="function"?Object.is:j2,K2=ZI.useSyncExternalStore,q2=ZI.useRef,_2=ZI.useEffect,$2=ZI.useMemo,Ak=ZI.useDebugValue;QR.useSyncExternalStoreWithSelector=function(A,B,Q,e,t){var g=q2(null);if(g.current===null){var n={hasValue:!1,value:null};g.current=n}else n=g.current;g=$2(function(){function C(a){if(!o){if(o=!0,i=a,a=e(a),t!==void 0&&n.hasValue){var d=n.value;if(t(d,a))return r=d}return r=a}if(d=r,P2(i,a))return d;var D=e(a);return t!==void 0&&t(d,D)?d:(i=a,r=D)}var o=!1,i,r,I=Q===void 0?null:Q;return[function(){return C(B())},I===null?void 0:function(){return C(I())}]},[B,Q,e,t]);var E=K2(A,g[0],g[1]);return _2(function(){n.hasValue=!0,n.value=E},[E]),Ak(E),E};BR.exports=QR;var Bk=BR.exports,Je="default"in Lo?gt:Lo,HU=Symbol.for("react-redux-context"),xU=typeof globalThis<"u"?globalThis:{};function Qk(){if(!Je.createContext)return{};const A=xU[HU]??(xU[HU]=new Map);let B=A.get(Je.createContext);return B||(B=Je.createContext(null),A.set(Je.createContext,B)),B}var Vn=Qk(),ek=()=>{throw new Error("uSES not initialized!")};function Od(A=Vn){return function(){return Je.useContext(A)}}var eR=Od(),tR=ek,tk=A=>{tR=A},gk=(A,B)=>A===B;function nk(A=Vn){const B=A===Vn?eR:Od(A);return function(e,t={}){const{equalityFn:g=gk,devModeChecks:n={}}=typeof t=="function"?{equalityFn:t}:t,{store:E,subscription:C,getServerState:o,stabilityCheck:i,identityFunctionCheck:r}=B();Je.useRef(!0);const I=Je.useCallback({[e.name](d){return e(d)}}[e.name],[e,i,n.stabilityCheck]),a=tR(C.addNestedSub,E.getState,o||E.getState,I,g);return Je.useDebugValue(a),a}}var ni=nk();function gR(A){A()}function Ek(){let A=null,B=null;return{clear(){A=null,B=null},notify(){gR(()=>{let Q=A;for(;Q;)Q.callback(),Q=Q.next})},get(){let Q=[],e=A;for(;e;)Q.push(e),e=e.next;return Q},subscribe(Q){let e=!0,t=B={callback:Q,next:null,prev:B};return t.prev?t.prev.next=t:A=t,function(){!e||A===null||(e=!1,t.next?t.next.prev=t.prev:B=t.prev,t.prev?t.prev.next=t.next:A=t.next)}}}}var WU={notify(){},get:()=>[]};function Ck(A,B){let Q,e=WU,t=0,g=!1;function n(D){i();const U=e.subscribe(D);let l=!1;return()=>{l||(l=!0,U(),r())}}function E(){e.notify()}function C(){d.onStateChange&&d.onStateChange()}function o(){return g}function i(){t++,Q||(Q=B?B.addNestedSub(C):A.subscribe(C),e=Ek())}function r(){t--,Q&&t===0&&(Q(),Q=void 0,e.clear(),e=WU)}function I(){g||(g=!0,i())}function a(){g&&(g=!1,r())}const d={addNestedSub:n,notifyNestedSubs:E,handleChangeWrapper:C,isSubscribed:o,trySubscribe:I,tryUnsubscribe:a,getListeners:()=>e};return d}var ok=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ik=ok?Je.useLayoutEffect:Je.useEffect;function OU(A,B){return A===B?A!==0||B!==0||1/A===1/B:A!==A&&B!==B}function Os(A,B){if(OU(A,B))return!0;if(typeof A!="object"||A===null||typeof B!="object"||B===null)return!1;const Q=Object.keys(A),e=Object.keys(B);if(Q.length!==e.length)return!1;for(let t=0;t<Q.length;t++)if(!Object.prototype.hasOwnProperty.call(B,Q[t])||!OU(A[Q[t]],B[Q[t]]))return!1;return!0}function rk({store:A,context:B,children:Q,serverState:e,stabilityCheck:t="once",identityFunctionCheck:g="once"}){const n=Je.useMemo(()=>{const o=Ck(A);return{store:A,subscription:o,getServerState:e?()=>e:void 0,stabilityCheck:t,identityFunctionCheck:g}},[A,e,t,g]),E=Je.useMemo(()=>A.getState(),[A]);ik(()=>{const{subscription:o}=n;return o.onStateChange=o.notifyNestedSubs,o.trySubscribe(),E!==A.getState()&&o.notifyNestedSubs(),()=>{o.tryUnsubscribe(),o.onStateChange=void 0}},[n,E]);const C=B||Vn;return Je.createElement(C.Provider,{value:n},Q)}var Ik=rk;function nR(A=Vn){const B=A===Vn?eR:Od(A);return function(){const{store:e}=B();return e}}var ER=nR();function ak(A=Vn){const B=A===Vn?ER:nR(A);return function(){return B().dispatch}}var Ei=ak(),sk=gR;tk(Bk.useSyncExternalStoreWithSelector);function b(){return b=Object.assign?Object.assign.bind():function(A){for(var B=1;B<arguments.length;B++){var Q=arguments[B];for(var e in Q)Object.prototype.hasOwnProperty.call(Q,e)&&(A[e]=Q[e])}return A},b.apply(this,arguments)}function kg(A){return A!==null&&typeof A=="object"&&A.constructor===Object}function CR(A){if(!kg(A))return A;const B={};return Object.keys(A).forEach(Q=>{B[Q]=CR(A[Q])}),B}function VQ(A,B,Q={clone:!0}){const e=Q.clone?b({},A):A;return kg(A)&&kg(B)&&Object.keys(B).forEach(t=>{t!=="__proto__"&&(kg(B[t])&&t in A&&kg(A[t])?e[t]=VQ(A[t],B[t],Q):Q.clone?e[t]=kg(B[t])?CR(B[t]):B[t]:e[t]=B[t])}),e}function zn(A){let B="https://mui.com/production-error/?code="+A;for(let Q=1;Q<arguments.length;Q+=1)B+="&args[]="+encodeURIComponent(arguments[Q]);return"Minified MUI error #"+A+"; visit "+B+" for the full message."}function FA(A){if(typeof A!="string")throw new Error(zn(7));return A.charAt(0).toUpperCase()+A.slice(1)}function TU(...A){return A.reduce((B,Q)=>Q==null?B:function(...t){B.apply(this,t),Q.apply(this,t)},()=>{})}function Td(A,B=166){let Q;function e(...t){const g=()=>{A.apply(this,t)};clearTimeout(Q),Q=setTimeout(g,B)}return e.clear=()=>{clearTimeout(Q)},e}function os(A,B){var Q,e;return G.isValidElement(A)&&B.indexOf((Q=A.type.muiName)!=null?Q:(e=A.type)==null||(e=e._payload)==null||(e=e.value)==null?void 0:e.muiName)!==-1}function _Q(A){return A&&A.ownerDocument||document}function xg(A){return _Q(A).defaultView||window}function ED(A,B){typeof A=="function"?A(B):A&&(A.current=B)}const lk=typeof window<"u"?G.useLayoutEffect:G.useEffect,vt=lk;let VU=0;function ck(A){const[B,Q]=G.useState(A),e=A||B;return G.useEffect(()=>{B==null&&(VU+=1,Q(`mui-${VU}`))},[B]),e}const zU=Lo.useId;function LI(A){if(zU!==void 0){const B=zU();return A??B}return ck(A)}function Ts({controlled:A,default:B,name:Q,state:e="value"}){const{current:t}=G.useRef(A!==void 0),[g,n]=G.useState(B),E=t?A:g,C=G.useCallback(o=>{t||n(o)},[]);return[E,C]}function bE(A){const B=G.useRef(A);return vt(()=>{B.current=A}),G.useRef((...Q)=>(0,B.current)(...Q)).current}function EQ(...A){return G.useMemo(()=>A.every(B=>B==null)?null:B=>{A.forEach(Q=>{ED(Q,B)})},A)}let hl=!0,CD=!1,jU;const wk={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Fk(A){const{type:B,tagName:Q}=A;return!!(Q==="INPUT"&&wk[B]&&!A.readOnly||Q==="TEXTAREA"&&!A.readOnly||A.isContentEditable)}function Dk(A){A.metaKey||A.altKey||A.ctrlKey||(hl=!0)}function uw(){hl=!1}function dk(){this.visibilityState==="hidden"&&CD&&(hl=!0)}function uk(A){A.addEventListener("keydown",Dk,!0),A.addEventListener("mousedown",uw,!0),A.addEventListener("pointerdown",uw,!0),A.addEventListener("touchstart",uw,!0),A.addEventListener("visibilitychange",dk,!0)}function Uk(A){const{target:B}=A;try{return B.matches(":focus-visible")}catch{}return hl||Fk(B)}function Vd(){const A=G.useCallback(t=>{t!=null&&uk(t.ownerDocument)},[]),B=G.useRef(!1);function Q(){return B.current?(CD=!0,window.clearTimeout(jU),jU=window.setTimeout(()=>{CD=!1},100),B.current=!1,!0):!1}function e(t){return Uk(t)?(B.current=!0,!0):!1}return{isFocusVisibleRef:B,onFocus:e,onBlur:Q,ref:A}}function oR(A){const B=A.documentElement.clientWidth;return Math.abs(window.innerWidth-B)}function fk(A){return G.Children.toArray(A).filter(B=>G.isValidElement(B))}const Mk={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Gk=Mk;function zd(A,B){const Q=b({},B);return Object.keys(A).forEach(e=>{if(e.toString().match(/^(components|slots)$/))Q[e]=b({},A[e],Q[e]);else if(e.toString().match(/^(componentsProps|slotProps)$/)){const t=A[e]||{},g=B[e];Q[e]={},!g||!Object.keys(g)?Q[e]=t:!t||!Object.keys(t)?Q[e]=g:(Q[e]=b({},g),Object.keys(t).forEach(n=>{Q[e][n]=zd(t[n],g[n])}))}else Q[e]===void 0&&(Q[e]=A[e])}),Q}function qA(A,B,Q=void 0){const e={};return Object.keys(A).forEach(t=>{e[t]=A[t].reduce((g,n)=>{if(n){const E=B(n);E!==""&&g.push(E),Q&&Q[n]&&g.push(Q[n])}return g},[]).join(" ")}),e}const PU=A=>A,hk=()=>{let A=PU;return{configure(B){A=B},generate(B){return A(B)},reset(){A=PU}}},pk=hk(),iR=pk,Rk={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function zA(A,B,Q="Mui"){const e=Rk[B];return e?`${Q}-${e}`:`${iR.generate(A)}-${B}`}function TA(A,B,Q="Mui"){const e={};return B.forEach(t=>{e[t]=zA(A,t,Q)}),e}const TE="$$material";function DA(A,B){if(A==null)return{};var Q={},e=Object.keys(A),t,g;for(g=0;g<e.length;g++)t=e[g],!(B.indexOf(t)>=0)&&(Q[t]=A[t]);return Q}function rR(A){var B=Object.create(null);return function(Q){return B[Q]===void 0&&(B[Q]=A(Q)),B[Q]}}var mk=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Yk=rR(function(A){return mk.test(A)||A.charCodeAt(0)===111&&A.charCodeAt(1)===110&&A.charCodeAt(2)<91});function Nk(A){if(A.sheet)return A.sheet;for(var B=0;B<document.styleSheets.length;B++)if(document.styleSheets[B].ownerNode===A)return document.styleSheets[B]}function bk(A){var B=document.createElement("style");return B.setAttribute("data-emotion",A.key),A.nonce!==void 0&&B.setAttribute("nonce",A.nonce),B.appendChild(document.createTextNode("")),B.setAttribute("data-s",""),B}var yk=function(){function A(Q){var e=this;this._insertTag=function(t){var g;e.tags.length===0?e.insertionPoint?g=e.insertionPoint.nextSibling:e.prepend?g=e.container.firstChild:g=e.before:g=e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,g),e.tags.push(t)},this.isSpeedy=Q.speedy===void 0?!0:Q.speedy,this.tags=[],this.ctr=0,this.nonce=Q.nonce,this.key=Q.key,this.container=Q.container,this.prepend=Q.prepend,this.insertionPoint=Q.insertionPoint,this.before=null}var B=A.prototype;return B.hydrate=function(e){e.forEach(this._insertTag)},B.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(bk(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var g=Nk(t);try{g.insertRule(e,g.cssRules.length)}catch{}}else t.appendChild(document.createTextNode(e));this.ctr++},B.flush=function(){this.tags.forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},A}(),WQ="-ms-",Vs="-moz-",sB="-webkit-",IR="comm",jd="rule",Pd="decl",kk="@import",aR="@keyframes",Jk="@layer",vk=Math.abs,pl=String.fromCharCode,Zk=Object.assign;function Lk(A,B){return yQ(A,0)^45?(((B<<2^yQ(A,0))<<2^yQ(A,1))<<2^yQ(A,2))<<2^yQ(A,3):0}function sR(A){return A.trim()}function Sk(A,B){return(A=B.exec(A))?A[0]:A}function lB(A,B,Q){return A.replace(B,Q)}function oD(A,B){return A.indexOf(B)}function yQ(A,B){return A.charCodeAt(B)|0}function sI(A,B,Q){return A.slice(B,Q)}function qt(A){return A.length}function Kd(A){return A.length}function La(A,B){return B.push(A),A}function Xk(A,B){return A.map(B).join("")}var Rl=1,Vo=1,lR=0,we=0,tQ=0,Ci="";function ml(A,B,Q,e,t,g,n){return{value:A,root:B,parent:Q,type:e,props:t,children:g,line:Rl,column:Vo,length:n,return:""}}function Cr(A,B){return Zk(ml("",null,null,"",null,null,0),A,{length:-A.length},B)}function Hk(){return tQ}function xk(){return tQ=we>0?yQ(Ci,--we):0,Vo--,tQ===10&&(Vo=1,Rl--),tQ}function Ze(){return tQ=we<lR?yQ(Ci,we++):0,Vo++,tQ===10&&(Vo=1,Rl++),tQ}function eg(){return yQ(Ci,we)}function is(){return we}function SI(A,B){return sI(Ci,A,B)}function lI(A){switch(A){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cR(A){return Rl=Vo=1,lR=qt(Ci=A),we=0,[]}function wR(A){return Ci="",A}function rs(A){return sR(SI(we-1,iD(A===91?A+2:A===40?A+1:A)))}function Wk(A){for(;(tQ=eg())&&tQ<33;)Ze();return lI(A)>2||lI(tQ)>3?"":" "}function Ok(A,B){for(;--B&&Ze()&&!(tQ<48||tQ>102||tQ>57&&tQ<65||tQ>70&&tQ<97););return SI(A,is()+(B<6&&eg()==32&&Ze()==32))}function iD(A){for(;Ze();)switch(tQ){case A:return we;case 34:case 39:A!==34&&A!==39&&iD(tQ);break;case 40:A===41&&iD(A);break;case 92:Ze();break}return we}function Tk(A,B){for(;Ze()&&A+tQ!==57;)if(A+tQ===84&&eg()===47)break;return"/*"+SI(B,we-1)+"*"+pl(A===47?A:Ze())}function Vk(A){for(;!lI(eg());)Ze();return SI(A,we)}function zk(A){return wR(Is("",null,null,null,[""],A=cR(A),0,[0],A))}function Is(A,B,Q,e,t,g,n,E,C){for(var o=0,i=0,r=n,I=0,a=0,d=0,D=1,U=1,l=1,F=0,c="",w=t,M=g,Y=e,p=c;U;)switch(d=F,F=Ze()){case 40:if(d!=108&&yQ(p,r-1)==58){oD(p+=lB(rs(F),"&","&\f"),"&\f")!=-1&&(l=-1);break}case 34:case 39:case 91:p+=rs(F);break;case 9:case 10:case 13:case 32:p+=Wk(d);break;case 92:p+=Ok(is()-1,7);continue;case 47:switch(eg()){case 42:case 47:La(jk(Tk(Ze(),is()),B,Q),C);break;default:p+="/"}break;case 123*D:E[o++]=qt(p)*l;case 125*D:case 59:case 0:switch(F){case 0:case 125:U=0;case 59+i:l==-1&&(p=lB(p,/\f/g,"")),a>0&&qt(p)-r&&La(a>32?qU(p+";",e,Q,r-1):qU(lB(p," ","")+";",e,Q,r-2),C);break;case 59:p+=";";default:if(La(Y=KU(p,B,Q,o,i,t,E,c,w=[],M=[],r),g),F===123)if(i===0)Is(p,B,Y,Y,w,g,r,E,M);else switch(I===99&&yQ(p,3)===110?100:I){case 100:case 108:case 109:case 115:Is(A,Y,Y,e&&La(KU(A,Y,Y,0,0,t,E,c,t,w=[],r),M),t,M,r,E,e?w:M);break;default:Is(p,Y,Y,Y,[""],M,0,E,M)}}o=i=a=0,D=l=1,c=p="",r=n;break;case 58:r=1+qt(p),a=d;default:if(D<1){if(F==123)--D;else if(F==125&&D++==0&&xk()==125)continue}switch(p+=pl(F),F*D){case 38:l=i>0?1:(p+="\f",-1);break;case 44:E[o++]=(qt(p)-1)*l,l=1;break;case 64:eg()===45&&(p+=rs(Ze())),I=eg(),i=r=qt(c=p+=Vk(is())),F++;break;case 45:d===45&&qt(p)==2&&(D=0)}}return g}function KU(A,B,Q,e,t,g,n,E,C,o,i){for(var r=t-1,I=t===0?g:[""],a=Kd(I),d=0,D=0,U=0;d<e;++d)for(var l=0,F=sI(A,r+1,r=vk(D=n[d])),c=A;l<a;++l)(c=sR(D>0?I[l]+" "+F:lB(F,/&\f/g,I[l])))&&(C[U++]=c);return ml(A,B,Q,t===0?jd:E,C,o,i)}function jk(A,B,Q){return ml(A,B,Q,IR,pl(Hk()),sI(A,2,-2),0)}function qU(A,B,Q,e){return ml(A,B,Q,Pd,sI(A,0,e),sI(A,e+1,-1),e)}function ko(A,B){for(var Q="",e=Kd(A),t=0;t<e;t++)Q+=B(A[t],t,A,B)||"";return Q}function Pk(A,B,Q,e){switch(A.type){case Jk:if(A.children.length)break;case kk:case Pd:return A.return=A.return||A.value;case IR:return"";case aR:return A.return=A.value+"{"+ko(A.children,e)+"}";case jd:A.value=A.props.join(",")}return qt(Q=ko(A.children,e))?A.return=A.value+"{"+Q+"}":""}function Kk(A){var B=Kd(A);return function(Q,e,t,g){for(var n="",E=0;E<B;E++)n+=A[E](Q,e,t,g)||"";return n}}function qk(A){return function(B){B.root||(B=B.return)&&A(B)}}var _k=function(B,Q,e){for(var t=0,g=0;t=g,g=eg(),t===38&&g===12&&(Q[e]=1),!lI(g);)Ze();return SI(B,we)},$k=function(B,Q){var e=-1,t=44;do switch(lI(t)){case 0:t===38&&eg()===12&&(Q[e]=1),B[e]+=_k(we-1,Q,e);break;case 2:B[e]+=rs(t);break;case 4:if(t===44){B[++e]=eg()===58?"&\f":"",Q[e]=B[e].length;break}default:B[e]+=pl(t)}while(t=Ze());return B},AJ=function(B,Q){return wR($k(cR(B),Q))},_U=new WeakMap,BJ=function(B){if(!(B.type!=="rule"||!B.parent||B.length<1)){for(var Q=B.value,e=B.parent,t=B.column===e.column&&B.line===e.line;e.type!=="rule";)if(e=e.parent,!e)return;if(!(B.props.length===1&&Q.charCodeAt(0)!==58&&!_U.get(e))&&!t){_U.set(B,!0);for(var g=[],n=AJ(Q,g),E=e.props,C=0,o=0;C<n.length;C++)for(var i=0;i<E.length;i++,o++)B.props[o]=g[C]?n[C].replace(/&\f/g,E[i]):E[i]+" "+n[C]}}},QJ=function(B){if(B.type==="decl"){var Q=B.value;Q.charCodeAt(0)===108&&Q.charCodeAt(2)===98&&(B.return="",B.value="")}};function FR(A,B){switch(Lk(A,B)){case 5103:return sB+"print-"+A+A;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return sB+A+A;case 5349:case 4246:case 4810:case 6968:case 2756:return sB+A+Vs+A+WQ+A+A;case 6828:case 4268:return sB+A+WQ+A+A;case 6165:return sB+A+WQ+"flex-"+A+A;case 5187:return sB+A+lB(A,/(\w+).+(:[^]+)/,sB+"box-$1$2"+WQ+"flex-$1$2")+A;case 5443:return sB+A+WQ+"flex-item-"+lB(A,/flex-|-self/,"")+A;case 4675:return sB+A+WQ+"flex-line-pack"+lB(A,/align-content|flex-|-self/,"")+A;case 5548:return sB+A+WQ+lB(A,"shrink","negative")+A;case 5292:return sB+A+WQ+lB(A,"basis","preferred-size")+A;case 6060:return sB+"box-"+lB(A,"-grow","")+sB+A+WQ+lB(A,"grow","positive")+A;case 4554:return sB+lB(A,/([^-])(transform)/g,"$1"+sB+"$2")+A;case 6187:return lB(lB(lB(A,/(zoom-|grab)/,sB+"$1"),/(image-set)/,sB+"$1"),A,"")+A;case 5495:case 3959:return lB(A,/(image-set\([^]*)/,sB+"$1$`$1");case 4968:return lB(lB(A,/(.+:)(flex-)?(.*)/,sB+"box-pack:$3"+WQ+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+sB+A+A;case 4095:case 3583:case 4068:case 2532:return lB(A,/(.+)-inline(.+)/,sB+"$1$2")+A;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qt(A)-1-B>6)switch(yQ(A,B+1)){case 109:if(yQ(A,B+4)!==45)break;case 102:return lB(A,/(.+:)(.+)-([^]+)/,"$1"+sB+"$2-$3$1"+Vs+(yQ(A,B+3)==108?"$3":"$2-$3"))+A;case 115:return~oD(A,"stretch")?FR(lB(A,"stretch","fill-available"),B)+A:A}break;case 4949:if(yQ(A,B+1)!==115)break;case 6444:switch(yQ(A,qt(A)-3-(~oD(A,"!important")&&10))){case 107:return lB(A,":",":"+sB)+A;case 101:return lB(A,/(.+:)([^;!]+)(;|!.+)?/,"$1"+sB+(yQ(A,14)===45?"inline-":"")+"box$3$1"+sB+"$2$3$1"+WQ+"$2box$3")+A}break;case 5936:switch(yQ(A,B+11)){case 114:return sB+A+WQ+lB(A,/[svh]\w+-[tblr]{2}/,"tb")+A;case 108:return sB+A+WQ+lB(A,/[svh]\w+-[tblr]{2}/,"tb-rl")+A;case 45:return sB+A+WQ+lB(A,/[svh]\w+-[tblr]{2}/,"lr")+A}return sB+A+WQ+A+A}return A}var eJ=function(B,Q,e,t){if(B.length>-1&&!B.return)switch(B.type){case Pd:B.return=FR(B.value,B.length);break;case aR:return ko([Cr(B,{value:lB(B.value,"@","@"+sB)})],t);case jd:if(B.length)return Xk(B.props,function(g){switch(Sk(g,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ko([Cr(B,{props:[lB(g,/:(read-\w+)/,":"+Vs+"$1")]})],t);case"::placeholder":return ko([Cr(B,{props:[lB(g,/:(plac\w+)/,":"+sB+"input-$1")]}),Cr(B,{props:[lB(g,/:(plac\w+)/,":"+Vs+"$1")]}),Cr(B,{props:[lB(g,/:(plac\w+)/,WQ+"input-$1")]})],t)}return""})}},tJ=[eJ],gJ=function(B){var Q=B.key;if(Q==="css"){var e=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(e,function(D){var U=D.getAttribute("data-emotion");U.indexOf(" ")!==-1&&(document.head.appendChild(D),D.setAttribute("data-s",""))})}var t=B.stylisPlugins||tJ,g={},n,E=[];n=B.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+Q+' "]'),function(D){for(var U=D.getAttribute("data-emotion").split(" "),l=1;l<U.length;l++)g[U[l]]=!0;E.push(D)});var C,o=[BJ,QJ];{var i,r=[Pk,qk(function(D){i.insert(D)})],I=Kk(o.concat(t,r)),a=function(U){return ko(zk(U),I)};C=function(U,l,F,c){i=F,a(U?U+"{"+l.styles+"}":l.styles),c&&(d.inserted[l.name]=!0)}}var d={key:Q,sheet:new yk({key:Q,container:n,nonce:B.nonce,speedy:B.speedy,prepend:B.prepend,insertionPoint:B.insertionPoint}),nonce:B.nonce,inserted:g,registered:{},insert:C};return d.sheet.hydrate(E),d},DR={exports:{}},uB={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hQ=typeof Symbol=="function"&&Symbol.for,qd=hQ?Symbol.for("react.element"):60103,_d=hQ?Symbol.for("react.portal"):60106,Yl=hQ?Symbol.for("react.fragment"):60107,Nl=hQ?Symbol.for("react.strict_mode"):60108,bl=hQ?Symbol.for("react.profiler"):60114,yl=hQ?Symbol.for("react.provider"):60109,kl=hQ?Symbol.for("react.context"):60110,$d=hQ?Symbol.for("react.async_mode"):60111,Jl=hQ?Symbol.for("react.concurrent_mode"):60111,vl=hQ?Symbol.for("react.forward_ref"):60112,Zl=hQ?Symbol.for("react.suspense"):60113,nJ=hQ?Symbol.for("react.suspense_list"):60120,Ll=hQ?Symbol.for("react.memo"):60115,Sl=hQ?Symbol.for("react.lazy"):60116,EJ=hQ?Symbol.for("react.block"):60121,CJ=hQ?Symbol.for("react.fundamental"):60117,oJ=hQ?Symbol.for("react.responder"):60118,iJ=hQ?Symbol.for("react.scope"):60119;function We(A){if(typeof A=="object"&&A!==null){var B=A.$$typeof;switch(B){case qd:switch(A=A.type,A){case $d:case Jl:case Yl:case bl:case Nl:case Zl:return A;default:switch(A=A&&A.$$typeof,A){case kl:case vl:case Sl:case Ll:case yl:return A;default:return B}}case _d:return B}}}function dR(A){return We(A)===Jl}uB.AsyncMode=$d;uB.ConcurrentMode=Jl;uB.ContextConsumer=kl;uB.ContextProvider=yl;uB.Element=qd;uB.ForwardRef=vl;uB.Fragment=Yl;uB.Lazy=Sl;uB.Memo=Ll;uB.Portal=_d;uB.Profiler=bl;uB.StrictMode=Nl;uB.Suspense=Zl;uB.isAsyncMode=function(A){return dR(A)||We(A)===$d};uB.isConcurrentMode=dR;uB.isContextConsumer=function(A){return We(A)===kl};uB.isContextProvider=function(A){return We(A)===yl};uB.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===qd};uB.isForwardRef=function(A){return We(A)===vl};uB.isFragment=function(A){return We(A)===Yl};uB.isLazy=function(A){return We(A)===Sl};uB.isMemo=function(A){return We(A)===Ll};uB.isPortal=function(A){return We(A)===_d};uB.isProfiler=function(A){return We(A)===bl};uB.isStrictMode=function(A){return We(A)===Nl};uB.isSuspense=function(A){return We(A)===Zl};uB.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===Yl||A===Jl||A===bl||A===Nl||A===Zl||A===nJ||typeof A=="object"&&A!==null&&(A.$$typeof===Sl||A.$$typeof===Ll||A.$$typeof===yl||A.$$typeof===kl||A.$$typeof===vl||A.$$typeof===CJ||A.$$typeof===oJ||A.$$typeof===iJ||A.$$typeof===EJ)};uB.typeOf=We;DR.exports=uB;var rJ=DR.exports,uR=rJ,IJ={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},aJ={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},UR={};UR[uR.ForwardRef]=IJ;UR[uR.Memo]=aJ;var sJ=!0;function lJ(A,B,Q){var e="";return Q.split(" ").forEach(function(t){A[t]!==void 0?B.push(A[t]+";"):e+=t+" "}),e}var fR=function(B,Q,e){var t=B.key+"-"+Q.name;(e===!1||sJ===!1)&&B.registered[t]===void 0&&(B.registered[t]=Q.styles)},MR=function(B,Q,e){fR(B,Q,e);var t=B.key+"-"+Q.name;if(B.inserted[Q.name]===void 0){var g=Q;do B.insert(Q===g?"."+t:"",g,B.sheet,!0),g=g.next;while(g!==void 0)}};function cJ(A){for(var B=0,Q,e=0,t=A.length;t>=4;++e,t-=4)Q=A.charCodeAt(e)&255|(A.charCodeAt(++e)&255)<<8|(A.charCodeAt(++e)&255)<<16|(A.charCodeAt(++e)&255)<<24,Q=(Q&65535)*1540483477+((Q>>>16)*59797<<16),Q^=Q>>>24,B=(Q&65535)*1540483477+((Q>>>16)*59797<<16)^(B&65535)*1540483477+((B>>>16)*59797<<16);switch(t){case 3:B^=(A.charCodeAt(e+2)&255)<<16;case 2:B^=(A.charCodeAt(e+1)&255)<<8;case 1:B^=A.charCodeAt(e)&255,B=(B&65535)*1540483477+((B>>>16)*59797<<16)}return B^=B>>>13,B=(B&65535)*1540483477+((B>>>16)*59797<<16),((B^B>>>15)>>>0).toString(36)}var wJ={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},FJ=/[A-Z]|^ms/g,DJ=/_EMO_([^_]+?)_([^]*?)_EMO_/g,GR=function(B){return B.charCodeAt(1)===45},$U=function(B){return B!=null&&typeof B!="boolean"},Uw=rR(function(A){return GR(A)?A:A.replace(FJ,"-$&").toLowerCase()}),Af=function(B,Q){switch(B){case"animation":case"animationName":if(typeof Q=="string")return Q.replace(DJ,function(e,t,g){return _t={name:t,styles:g,next:_t},t})}return wJ[B]!==1&&!GR(B)&&typeof Q=="number"&&Q!==0?Q+"px":Q};function cI(A,B,Q){if(Q==null)return"";if(Q.__emotion_styles!==void 0)return Q;switch(typeof Q){case"boolean":return"";case"object":{if(Q.anim===1)return _t={name:Q.name,styles:Q.styles,next:_t},Q.name;if(Q.styles!==void 0){var e=Q.next;if(e!==void 0)for(;e!==void 0;)_t={name:e.name,styles:e.styles,next:_t},e=e.next;var t=Q.styles+";";return t}return dJ(A,B,Q)}case"function":{if(A!==void 0){var g=_t,n=Q(A);return _t=g,cI(A,B,n)}break}}if(B==null)return Q;var E=B[Q];return E!==void 0?E:Q}function dJ(A,B,Q){var e="";if(Array.isArray(Q))for(var t=0;t<Q.length;t++)e+=cI(A,B,Q[t])+";";else for(var g in Q){var n=Q[g];if(typeof n!="object")B!=null&&B[n]!==void 0?e+=g+"{"+B[n]+"}":$U(n)&&(e+=Uw(g)+":"+Af(g,n)+";");else if(Array.isArray(n)&&typeof n[0]=="string"&&(B==null||B[n[0]]===void 0))for(var E=0;E<n.length;E++)$U(n[E])&&(e+=Uw(g)+":"+Af(g,n[E])+";");else{var C=cI(A,B,n);switch(g){case"animation":case"animationName":{e+=Uw(g)+":"+C+";";break}default:e+=g+"{"+C+"}"}}}return e}var Bf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,_t,Au=function(B,Q,e){if(B.length===1&&typeof B[0]=="object"&&B[0]!==null&&B[0].styles!==void 0)return B[0];var t=!0,g="";_t=void 0;var n=B[0];n==null||n.raw===void 0?(t=!1,g+=cI(e,Q,n)):g+=n[0];for(var E=1;E<B.length;E++)g+=cI(e,Q,B[E]),t&&(g+=n[E]);Bf.lastIndex=0;for(var C="",o;(o=Bf.exec(g))!==null;)C+="-"+o[1];var i=cJ(g)+C;return{name:i,styles:g,next:_t}},uJ=function(B){return B()},hR=Lo.useInsertionEffect?Lo.useInsertionEffect:!1,UJ=hR||uJ,Qf=hR||G.useLayoutEffect,pR=G.createContext(typeof HTMLElement<"u"?gJ({key:"css"}):null);pR.Provider;var RR=function(B){return G.forwardRef(function(Q,e){var t=G.useContext(pR);return B(Q,t,e)})},Xl=G.createContext({}),fJ=RR(function(A,B){var Q=A.styles,e=Au([Q],void 0,G.useContext(Xl)),t=G.useRef();return Qf(function(){var g=B.key+"-global",n=new B.sheet.constructor({key:g,nonce:B.sheet.nonce,container:B.sheet.container,speedy:B.sheet.isSpeedy}),E=!1,C=document.querySelector('style[data-emotion="'+g+" "+e.name+'"]');return B.sheet.tags.length&&(n.before=B.sheet.tags[0]),C!==null&&(E=!0,C.setAttribute("data-emotion",g),n.hydrate([C])),t.current=[n,E],function(){n.flush()}},[B]),Qf(function(){var g=t.current,n=g[0],E=g[1];if(E){g[1]=!1;return}if(e.next!==void 0&&MR(B,e.next,!0),n.tags.length){var C=n.tags[n.tags.length-1].nextElementSibling;n.before=C,n.flush()}B.insert("",e,n,!1)},[B,e.name]),null});function Bu(){for(var A=arguments.length,B=new Array(A),Q=0;Q<A;Q++)B[Q]=arguments[Q];return Au(B)}var XI=function(){var B=Bu.apply(void 0,arguments),Q="animation-"+B.name;return{name:Q,styles:"@keyframes "+Q+"{"+B.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},MJ=Yk,GJ=function(B){return B!=="theme"},ef=function(B){return typeof B=="string"&&B.charCodeAt(0)>96?MJ:GJ},tf=function(B,Q,e){var t;if(Q){var g=Q.shouldForwardProp;t=B.__emotion_forwardProp&&g?function(n){return B.__emotion_forwardProp(n)&&g(n)}:g}return typeof t!="function"&&e&&(t=B.__emotion_forwardProp),t},hJ=function(B){var Q=B.cache,e=B.serialized,t=B.isStringTag;return fR(Q,e,t),UJ(function(){return MR(Q,e,t)}),null},pJ=function A(B,Q){var e=B.__emotion_real===B,t=e&&B.__emotion_base||B,g,n;Q!==void 0&&(g=Q.label,n=Q.target);var E=tf(B,Q,e),C=E||ef(t),o=!C("as");return function(){var i=arguments,r=e&&B.__emotion_styles!==void 0?B.__emotion_styles.slice(0):[];if(g!==void 0&&r.push("label:"+g+";"),i[0]==null||i[0].raw===void 0)r.push.apply(r,i);else{r.push(i[0][0]);for(var I=i.length,a=1;a<I;a++)r.push(i[a],i[0][a])}var d=RR(function(D,U,l){var F=o&&D.as||t,c="",w=[],M=D;if(D.theme==null){M={};for(var Y in D)M[Y]=D[Y];M.theme=G.useContext(Xl)}typeof D.className=="string"?c=lJ(U.registered,w,D.className):D.className!=null&&(c=D.className+" ");var p=Au(r.concat(w),U.registered,M);c+=U.key+"-"+p.name,n!==void 0&&(c+=" "+n);var k=o&&E===void 0?ef(F):C,Z={};for(var J in D)o&&J==="as"||k(J)&&(Z[J]=D[J]);return Z.className=c,Z.ref=l,G.createElement(G.Fragment,null,G.createElement(hJ,{cache:U,serialized:p,isStringTag:typeof F=="string"}),G.createElement(F,Z))});return d.displayName=g!==void 0?g:"Styled("+(typeof t=="string"?t:t.displayName||t.name||"Component")+")",d.defaultProps=B.defaultProps,d.__emotion_real=d,d.__emotion_base=t,d.__emotion_styles=r,d.__emotion_forwardProp=E,Object.defineProperty(d,"toString",{value:function(){return"."+n}}),d.withComponent=function(D,U){return A(D,b({},Q,U,{shouldForwardProp:tf(d,U,!0)})).apply(void 0,r)},d}},RJ=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],rD=pJ.bind();RJ.forEach(function(A){rD[A]=rD(A)});function mJ(A){return A==null||Object.keys(A).length===0}function YJ(A){const{styles:B,defaultTheme:Q={}}=A,e=typeof B=="function"?t=>B(mJ(t)?Q:t):B;return R.jsx(fJ,{styles:e})}function mR(A,B){return rD(A,B)}const NJ=(A,B)=>{Array.isArray(A.__emotion_styles)&&(A.__emotion_styles=B(A.__emotion_styles))},bJ=["values","unit","step"],yJ=A=>{const B=Object.keys(A).map(Q=>({key:Q,val:A[Q]}))||[];return B.sort((Q,e)=>Q.val-e.val),B.reduce((Q,e)=>b({},Q,{[e.key]:e.val}),{})};function kJ(A){const{values:B={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:Q="px",step:e=5}=A,t=DA(A,bJ),g=yJ(B),n=Object.keys(g);function E(I){return`@media (min-width:${typeof B[I]=="number"?B[I]:I}${Q})`}function C(I){return`@media (max-width:${(typeof B[I]=="number"?B[I]:I)-e/100}${Q})`}function o(I,a){const d=n.indexOf(a);return`@media (min-width:${typeof B[I]=="number"?B[I]:I}${Q}) and (max-width:${(d!==-1&&typeof B[n[d]]=="number"?B[n[d]]:a)-e/100}${Q})`}function i(I){return n.indexOf(I)+1<n.length?o(I,n[n.indexOf(I)+1]):E(I)}function r(I){const a=n.indexOf(I);return a===0?E(n[1]):a===n.length-1?C(n[a]):o(I,n[n.indexOf(I)+1]).replace("@media","@media not all and")}return b({keys:n,values:g,up:E,down:C,between:o,only:i,not:r,unit:Q},t)}const JJ={borderRadius:4},vJ=JJ;function Lr(A,B){return B?VQ(A,B,{clone:!1}):A}const Qu={xs:0,sm:600,md:900,lg:1200,xl:1536},gf={keys:["xs","sm","md","lg","xl"],up:A=>`@media (min-width:${Qu[A]}px)`};function It(A,B,Q){const e=A.theme||{};if(Array.isArray(B)){const g=e.breakpoints||gf;return B.reduce((n,E,C)=>(n[g.up(g.keys[C])]=Q(B[C]),n),{})}if(typeof B=="object"){const g=e.breakpoints||gf;return Object.keys(B).reduce((n,E)=>{if(Object.keys(g.values||Qu).indexOf(E)!==-1){const C=g.up(E);n[C]=Q(B[E],E)}else{const C=E;n[C]=B[C]}return n},{})}return Q(B)}function ZJ(A={}){var B;return((B=A.keys)==null?void 0:B.reduce((e,t)=>{const g=A.up(t);return e[g]={},e},{}))||{}}function LJ(A,B){return A.reduce((Q,e)=>{const t=Q[e];return(!t||Object.keys(t).length===0)&&delete Q[e],Q},B)}function SJ(A,B){if(typeof A!="object")return{};const Q={},e=Object.keys(B);return Array.isArray(A)?e.forEach((t,g)=>{g<A.length&&(Q[t]=!0)}):e.forEach(t=>{A[t]!=null&&(Q[t]=!0)}),Q}function Hl({values:A,breakpoints:B,base:Q}){const e=Q||SJ(A,B),t=Object.keys(e);if(t.length===0)return A;let g;return t.reduce((n,E,C)=>(Array.isArray(A)?(n[E]=A[C]!=null?A[C]:A[g],g=C):typeof A=="object"?(n[E]=A[E]!=null?A[E]:A[g],g=E):n[E]=A,n),{})}function xl(A,B,Q=!0){if(!B||typeof B!="string")return null;if(A&&A.vars&&Q){const e=`vars.${B}`.split(".").reduce((t,g)=>t&&t[g]?t[g]:null,A);if(e!=null)return e}return B.split(".").reduce((e,t)=>e&&e[t]!=null?e[t]:null,A)}function zs(A,B,Q,e=Q){let t;return typeof A=="function"?t=A(Q):Array.isArray(A)?t=A[Q]||e:t=xl(A,Q)||e,B&&(t=B(t,e,A)),t}function QQ(A){const{prop:B,cssProperty:Q=A.prop,themeKey:e,transform:t}=A,g=n=>{if(n[B]==null)return null;const E=n[B],C=n.theme,o=xl(C,e)||{};return It(n,E,r=>{let I=zs(o,t,r);return r===I&&typeof r=="string"&&(I=zs(o,t,`${B}${r==="default"?"":FA(r)}`,r)),Q===!1?I:{[Q]:I}})};return g.propTypes={},g.filterProps=[B],g}function XJ(A){const B={};return Q=>(B[Q]===void 0&&(B[Q]=A(Q)),B[Q])}const HJ={m:"margin",p:"padding"},xJ={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},nf={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},WJ=XJ(A=>{if(A.length>2)if(nf[A])A=nf[A];else return[A];const[B,Q]=A.split(""),e=HJ[B],t=xJ[Q]||"";return Array.isArray(t)?t.map(g=>e+g):[e+t]}),eu=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],tu=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...eu,...tu];function HI(A,B,Q,e){var t;const g=(t=xl(A,B,!1))!=null?t:Q;return typeof g=="number"?n=>typeof n=="string"?n:g*n:Array.isArray(g)?n=>typeof n=="string"?n:g[n]:typeof g=="function"?g:()=>{}}function YR(A){return HI(A,"spacing",8)}function xI(A,B){if(typeof B=="string"||B==null)return B;const Q=Math.abs(B),e=A(Q);return B>=0?e:typeof e=="number"?-e:`-${e}`}function OJ(A,B){return Q=>A.reduce((e,t)=>(e[t]=xI(B,Q),e),{})}function TJ(A,B,Q,e){if(B.indexOf(Q)===-1)return null;const t=WJ(Q),g=OJ(t,e),n=A[Q];return It(A,n,g)}function NR(A,B){const Q=YR(A.theme);return Object.keys(A).map(e=>TJ(A,B,e,Q)).reduce(Lr,{})}function jB(A){return NR(A,eu)}jB.propTypes={};jB.filterProps=eu;function PB(A){return NR(A,tu)}PB.propTypes={};PB.filterProps=tu;function VJ(A=8){if(A.mui)return A;const B=YR({spacing:A}),Q=(...e)=>(e.length===0?[1]:e).map(g=>{const n=B(g);return typeof n=="number"?`${n}px`:n}).join(" ");return Q.mui=!0,Q}function Wl(...A){const B=A.reduce((e,t)=>(t.filterProps.forEach(g=>{e[g]=t}),e),{}),Q=e=>Object.keys(e).reduce((t,g)=>B[g]?Lr(t,B[g](e)):t,{});return Q.propTypes={},Q.filterProps=A.reduce((e,t)=>e.concat(t.filterProps),[]),Q}function tt(A){return typeof A!="number"?A:`${A}px solid`}function lt(A,B){return QQ({prop:A,themeKey:"borders",transform:B})}const zJ=lt("border",tt),jJ=lt("borderTop",tt),PJ=lt("borderRight",tt),KJ=lt("borderBottom",tt),qJ=lt("borderLeft",tt),_J=lt("borderColor"),$J=lt("borderTopColor"),A1=lt("borderRightColor"),B1=lt("borderBottomColor"),Q1=lt("borderLeftColor"),e1=lt("outline",tt),t1=lt("outlineColor"),Ol=A=>{if(A.borderRadius!==void 0&&A.borderRadius!==null){const B=HI(A.theme,"shape.borderRadius",4),Q=e=>({borderRadius:xI(B,e)});return It(A,A.borderRadius,Q)}return null};Ol.propTypes={};Ol.filterProps=["borderRadius"];Wl(zJ,jJ,PJ,KJ,qJ,_J,$J,A1,B1,Q1,Ol,e1,t1);const Tl=A=>{if(A.gap!==void 0&&A.gap!==null){const B=HI(A.theme,"spacing",8),Q=e=>({gap:xI(B,e)});return It(A,A.gap,Q)}return null};Tl.propTypes={};Tl.filterProps=["gap"];const Vl=A=>{if(A.columnGap!==void 0&&A.columnGap!==null){const B=HI(A.theme,"spacing",8),Q=e=>({columnGap:xI(B,e)});return It(A,A.columnGap,Q)}return null};Vl.propTypes={};Vl.filterProps=["columnGap"];const zl=A=>{if(A.rowGap!==void 0&&A.rowGap!==null){const B=HI(A.theme,"spacing",8),Q=e=>({rowGap:xI(B,e)});return It(A,A.rowGap,Q)}return null};zl.propTypes={};zl.filterProps=["rowGap"];const g1=QQ({prop:"gridColumn"}),n1=QQ({prop:"gridRow"}),E1=QQ({prop:"gridAutoFlow"}),C1=QQ({prop:"gridAutoColumns"}),o1=QQ({prop:"gridAutoRows"}),i1=QQ({prop:"gridTemplateColumns"}),r1=QQ({prop:"gridTemplateRows"}),I1=QQ({prop:"gridTemplateAreas"}),a1=QQ({prop:"gridArea"});Wl(Tl,Vl,zl,g1,n1,E1,C1,o1,i1,r1,I1,a1);function Jo(A,B){return B==="grey"?B:A}const s1=QQ({prop:"color",themeKey:"palette",transform:Jo}),l1=QQ({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Jo}),c1=QQ({prop:"backgroundColor",themeKey:"palette",transform:Jo});Wl(s1,l1,c1);function ye(A){return A<=1&&A!==0?`${A*100}%`:A}const w1=QQ({prop:"width",transform:ye}),gu=A=>{if(A.maxWidth!==void 0&&A.maxWidth!==null){const B=Q=>{var e,t;const g=((e=A.theme)==null||(e=e.breakpoints)==null||(e=e.values)==null?void 0:e[Q])||Qu[Q];return g?((t=A.theme)==null||(t=t.breakpoints)==null?void 0:t.unit)!=="px"?{maxWidth:`${g}${A.theme.breakpoints.unit}`}:{maxWidth:g}:{maxWidth:ye(Q)}};return It(A,A.maxWidth,B)}return null};gu.filterProps=["maxWidth"];const F1=QQ({prop:"minWidth",transform:ye}),D1=QQ({prop:"height",transform:ye}),d1=QQ({prop:"maxHeight",transform:ye}),u1=QQ({prop:"minHeight",transform:ye});QQ({prop:"size",cssProperty:"width",transform:ye});QQ({prop:"size",cssProperty:"height",transform:ye});const U1=QQ({prop:"boxSizing"});Wl(w1,gu,F1,D1,d1,u1,U1);const f1={border:{themeKey:"borders",transform:tt},borderTop:{themeKey:"borders",transform:tt},borderRight:{themeKey:"borders",transform:tt},borderBottom:{themeKey:"borders",transform:tt},borderLeft:{themeKey:"borders",transform:tt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:tt},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Ol},color:{themeKey:"palette",transform:Jo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Jo},backgroundColor:{themeKey:"palette",transform:Jo},p:{style:PB},pt:{style:PB},pr:{style:PB},pb:{style:PB},pl:{style:PB},px:{style:PB},py:{style:PB},padding:{style:PB},paddingTop:{style:PB},paddingRight:{style:PB},paddingBottom:{style:PB},paddingLeft:{style:PB},paddingX:{style:PB},paddingY:{style:PB},paddingInline:{style:PB},paddingInlineStart:{style:PB},paddingInlineEnd:{style:PB},paddingBlock:{style:PB},paddingBlockStart:{style:PB},paddingBlockEnd:{style:PB},m:{style:jB},mt:{style:jB},mr:{style:jB},mb:{style:jB},ml:{style:jB},mx:{style:jB},my:{style:jB},margin:{style:jB},marginTop:{style:jB},marginRight:{style:jB},marginBottom:{style:jB},marginLeft:{style:jB},marginX:{style:jB},marginY:{style:jB},marginInline:{style:jB},marginInlineStart:{style:jB},marginInlineEnd:{style:jB},marginBlock:{style:jB},marginBlockStart:{style:jB},marginBlockEnd:{style:jB},displayPrint:{cssProperty:!1,transform:A=>({"@media print":{display:A}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Tl},rowGap:{style:zl},columnGap:{style:Vl},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:ye},maxWidth:{style:gu},minWidth:{transform:ye},height:{transform:ye},maxHeight:{transform:ye},minHeight:{transform:ye},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},jl=f1;function M1(...A){const B=A.reduce((e,t)=>e.concat(Object.keys(t)),[]),Q=new Set(B);return A.every(e=>Q.size===Object.keys(e).length)}function G1(A,B){return typeof A=="function"?A(B):A}function h1(){function A(Q,e,t,g){const n={[Q]:e,theme:t},E=g[Q];if(!E)return{[Q]:e};const{cssProperty:C=Q,themeKey:o,transform:i,style:r}=E;if(e==null)return null;if(o==="typography"&&e==="inherit")return{[Q]:e};const I=xl(t,o)||{};return r?r(n):It(n,e,d=>{let D=zs(I,i,d);return d===D&&typeof d=="string"&&(D=zs(I,i,`${Q}${d==="default"?"":FA(d)}`,d)),C===!1?D:{[C]:D}})}function B(Q){var e;const{sx:t,theme:g={}}=Q||{};if(!t)return null;const n=(e=g.unstable_sxConfig)!=null?e:jl;function E(C){let o=C;if(typeof C=="function")o=C(g);else if(typeof C!="object")return C;if(!o)return null;const i=ZJ(g.breakpoints),r=Object.keys(i);let I=i;return Object.keys(o).forEach(a=>{const d=G1(o[a],g);if(d!=null)if(typeof d=="object")if(n[a])I=Lr(I,A(a,d,g,n));else{const D=It({theme:g},d,U=>({[a]:U}));M1(D,d)?I[a]=B({sx:d,theme:g}):I=Lr(I,D)}else I=Lr(I,A(a,d,g,n))}),LJ(r,I)}return Array.isArray(t)?t.map(E):E(t)}return B}const bR=h1();bR.filterProps=["sx"];const Pl=bR,p1=["breakpoints","palette","spacing","shape"];function nu(A={},...B){const{breakpoints:Q={},palette:e={},spacing:t,shape:g={}}=A,n=DA(A,p1),E=kJ(Q),C=VJ(t);let o=VQ({breakpoints:E,direction:"ltr",components:{},palette:b({mode:"light"},e),spacing:C,shape:b({},vJ,g)},n);return o=B.reduce((i,r)=>VQ(i,r),o),o.unstable_sxConfig=b({},jl,n==null?void 0:n.unstable_sxConfig),o.unstable_sx=function(r){return Pl({sx:r,theme:this})},o}function R1(A){return Object.keys(A).length===0}function Kl(A=null){const B=G.useContext(Xl);return!B||R1(B)?A:B}const m1=nu();function ql(A=m1){return Kl(A)}function Y1({styles:A,themeId:B,defaultTheme:Q={}}){const e=ql(Q),t=typeof A=="function"?A(B&&e[B]||e):A;return R.jsx(YJ,{styles:t})}const N1=["sx"],b1=A=>{var B,Q;const e={systemProps:{},otherProps:{}},t=(B=A==null||(Q=A.theme)==null?void 0:Q.unstable_sxConfig)!=null?B:jl;return Object.keys(A).forEach(g=>{t[g]?e.systemProps[g]=A[g]:e.otherProps[g]=A[g]}),e};function Eu(A){const{sx:B}=A,Q=DA(A,N1),{systemProps:e,otherProps:t}=b1(Q);let g;return Array.isArray(B)?g=[e,...B]:typeof B=="function"?g=(...n)=>{const E=B(...n);return kg(E)?b({},e,E):e}:g=b({},e,B),b({},t,{sx:g})}function yR(A){var B,Q,e="";if(typeof A=="string"||typeof A=="number")e+=A;else if(typeof A=="object")if(Array.isArray(A))for(B=0;B<A.length;B++)A[B]&&(Q=yR(A[B]))&&(e&&(e+=" "),e+=Q);else for(B in A)A[B]&&(e&&(e+=" "),e+=B);return e}function pA(){for(var A,B,Q=0,e="";Q<arguments.length;)(A=arguments[Q++])&&(B=yR(A))&&(e&&(e+=" "),e+=B);return e}const y1=["className","component"];function k1(A={}){const{themeId:B,defaultTheme:Q,defaultClassName:e="MuiBox-root",generateClassName:t}=A,g=mR("div",{shouldForwardProp:E=>E!=="theme"&&E!=="sx"&&E!=="as"})(Pl);return G.forwardRef(function(C,o){const i=ql(Q),r=Eu(C),{className:I,component:a="div"}=r,d=DA(r,y1);return R.jsx(g,b({as:a,ref:o,className:pA(I,t?t(e):e),theme:B&&i[B]||i},d))})}const J1=["variant"];function Ef(A){return A.length===0}function kR(A){const{variant:B}=A,Q=DA(A,J1);let e=B||"";return Object.keys(Q).sort().forEach(t=>{t==="color"?e+=Ef(e)?A[t]:FA(A[t]):e+=`${Ef(e)?t:FA(t)}${FA(A[t].toString())}`}),e}const v1=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Z1(A){return Object.keys(A).length===0}function L1(A){return typeof A=="string"&&A.charCodeAt(0)>96}const S1=(A,B)=>B.components&&B.components[A]&&B.components[A].styleOverrides?B.components[A].styleOverrides:null,js=A=>{const B={};return A&&A.forEach(Q=>{const e=kR(Q.props);B[e]=Q.style}),B},X1=(A,B)=>{let Q=[];return B&&B.components&&B.components[A]&&B.components[A].variants&&(Q=B.components[A].variants),js(Q)},Ps=(A,B,Q)=>{const{ownerState:e={}}=A,t=[];return Q&&Q.forEach(g=>{let n=!0;Object.keys(g.props).forEach(E=>{e[E]!==g.props[E]&&A[E]!==g.props[E]&&(n=!1)}),n&&t.push(B[kR(g.props)])}),t},H1=(A,B,Q,e)=>{var t;const g=Q==null||(t=Q.components)==null||(t=t[e])==null?void 0:t.variants;return Ps(A,B,g)};function Sr(A){return A!=="ownerState"&&A!=="theme"&&A!=="sx"&&A!=="as"}const x1=nu(),W1=A=>A&&A.charAt(0).toLowerCase()+A.slice(1);function as({defaultTheme:A,theme:B,themeId:Q}){return Z1(B)?A:B[Q]||B}function O1(A){return A?(B,Q)=>Q[A]:null}const Cf=({styledArg:A,props:B,defaultTheme:Q,themeId:e})=>{const t=A(b({},B,{theme:as(b({},B,{defaultTheme:Q,themeId:e}))}));let g;if(t&&t.variants&&(g=t.variants,delete t.variants),g){const n=Ps(B,js(g),g);return[t,...n]}return t};function T1(A={}){const{themeId:B,defaultTheme:Q=x1,rootShouldForwardProp:e=Sr,slotShouldForwardProp:t=Sr}=A,g=n=>Pl(b({},n,{theme:as(b({},n,{defaultTheme:Q,themeId:B}))}));return g.__mui_systemSx=!0,(n,E={})=>{NJ(n,w=>w.filter(M=>!(M!=null&&M.__mui_systemSx)));const{name:C,slot:o,skipVariantsResolver:i,skipSx:r,overridesResolver:I=O1(W1(o))}=E,a=DA(E,v1),d=i!==void 0?i:o&&o!=="Root"&&o!=="root"||!1,D=r||!1;let U,l=Sr;o==="Root"||o==="root"?l=e:o?l=t:L1(n)&&(l=void 0);const F=mR(n,b({shouldForwardProp:l,label:U},a)),c=(w,...M)=>{const Y=M?M.map(J=>{if(typeof J=="function"&&J.__emotion_real!==J)return W=>Cf({styledArg:J,props:W,defaultTheme:Q,themeId:B});if(kg(J)){let W=J,T;return J&&J.variants&&(T=J.variants,delete W.variants,W=j=>{let P=J;return Ps(j,js(T),T).forEach($=>{P=VQ(P,$)}),P}),W}return J}):[];let p=w;if(kg(w)){let J;w&&w.variants&&(J=w.variants,delete p.variants,p=W=>{let T=w;return Ps(W,js(J),J).forEach(P=>{T=VQ(T,P)}),T})}else typeof w=="function"&&w.__emotion_real!==w&&(p=J=>Cf({styledArg:w,props:J,defaultTheme:Q,themeId:B}));C&&I&&Y.push(J=>{const W=as(b({},J,{defaultTheme:Q,themeId:B})),T=S1(C,W);if(T){const j={};return Object.entries(T).forEach(([P,_])=>{j[P]=typeof _=="function"?_(b({},J,{theme:W})):_}),I(J,j)}return null}),C&&!d&&Y.push(J=>{const W=as(b({},J,{defaultTheme:Q,themeId:B}));return H1(J,X1(C,W),W,C)}),D||Y.push(g);const k=Y.length-M.length;if(Array.isArray(w)&&k>0){const J=new Array(k).fill("");p=[...w,...J],p.raw=[...w.raw,...J]}const Z=F(p,...Y);return n.muiName&&(Z.muiName=n.muiName),Z};return F.withConfig&&(c.withConfig=F.withConfig),c}}function JR(A){const{theme:B,name:Q,props:e}=A;return!B||!B.components||!B.components[Q]||!B.components[Q].defaultProps?e:zd(B.components[Q].defaultProps,e)}function V1({props:A,name:B,defaultTheme:Q,themeId:e}){let t=ql(Q);return e&&(t=t[e]||t),JR({theme:t,name:B,props:A})}function Cu(A,B=0,Q=1){return Math.min(Math.max(B,A),Q)}function z1(A){A=A.slice(1);const B=new RegExp(`.{1,${A.length>=6?2:1}}`,"g");let Q=A.match(B);return Q&&Q[0].length===1&&(Q=Q.map(e=>e+e)),Q?`rgb${Q.length===4?"a":""}(${Q.map((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""}function VE(A){if(A.type)return A;if(A.charAt(0)==="#")return VE(z1(A));const B=A.indexOf("("),Q=A.substring(0,B);if(["rgb","rgba","hsl","hsla","color"].indexOf(Q)===-1)throw new Error(zn(9,A));let e=A.substring(B+1,A.length-1),t;if(Q==="color"){if(e=e.split(" "),t=e.shift(),e.length===4&&e[3].charAt(0)==="/"&&(e[3]=e[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(t)===-1)throw new Error(zn(10,t))}else e=e.split(",");return e=e.map(g=>parseFloat(g)),{type:Q,values:e,colorSpace:t}}function _l(A){const{type:B,colorSpace:Q}=A;let{values:e}=A;return B.indexOf("rgb")!==-1?e=e.map((t,g)=>g<3?parseInt(t,10):t):B.indexOf("hsl")!==-1&&(e[1]=`${e[1]}%`,e[2]=`${e[2]}%`),B.indexOf("color")!==-1?e=`${Q} ${e.join(" ")}`:e=`${e.join(", ")}`,`${B}(${e})`}function j1(A){A=VE(A);const{values:B}=A,Q=B[0],e=B[1]/100,t=B[2]/100,g=e*Math.min(t,1-t),n=(o,i=(o+Q/30)%12)=>t-g*Math.max(Math.min(i-3,9-i,1),-1);let E="rgb";const C=[Math.round(n(0)*255),Math.round(n(8)*255),Math.round(n(4)*255)];return A.type==="hsla"&&(E+="a",C.push(B[3])),_l({type:E,values:C})}function of(A){A=VE(A);let B=A.type==="hsl"||A.type==="hsla"?VE(j1(A)).values:A.values;return B=B.map(Q=>(A.type!=="color"&&(Q/=255),Q<=.03928?Q/12.92:((Q+.055)/1.055)**2.4)),Number((.2126*B[0]+.7152*B[1]+.0722*B[2]).toFixed(3))}function P1(A,B){const Q=of(A),e=of(B);return(Math.max(Q,e)+.05)/(Math.min(Q,e)+.05)}function TQ(A,B){return A=VE(A),B=Cu(B),(A.type==="rgb"||A.type==="hsl")&&(A.type+="a"),A.type==="color"?A.values[3]=`/${B}`:A.values[3]=B,_l(A)}function K1(A,B){if(A=VE(A),B=Cu(B),A.type.indexOf("hsl")!==-1)A.values[2]*=1-B;else if(A.type.indexOf("rgb")!==-1||A.type.indexOf("color")!==-1)for(let Q=0;Q<3;Q+=1)A.values[Q]*=1-B;return _l(A)}function q1(A,B){if(A=VE(A),B=Cu(B),A.type.indexOf("hsl")!==-1)A.values[2]+=(100-A.values[2])*B;else if(A.type.indexOf("rgb")!==-1)for(let Q=0;Q<3;Q+=1)A.values[Q]+=(255-A.values[Q])*B;else if(A.type.indexOf("color")!==-1)for(let Q=0;Q<3;Q+=1)A.values[Q]+=(1-A.values[Q])*B;return _l(A)}const _1=G.createContext(null),vR=_1;function ou(){return G.useContext(vR)}const $1=typeof Symbol=="function"&&Symbol.for,ZR=$1?Symbol.for("mui.nested"):"__THEME_NESTED__";function Av(A,B){return typeof B=="function"?B(A):b({},A,B)}function Bv(A){const{children:B,theme:Q}=A,e=ou(),t=G.useMemo(()=>{const g=e===null?Q:Av(e,Q);return g!=null&&(g[ZR]=e!==null),g},[Q,e]);return R.jsx(vR.Provider,{value:t,children:B})}const rf={};function If(A,B,Q,e=!1){return G.useMemo(()=>{const t=A&&B[A]||B;if(typeof Q=="function"){const g=Q(t),n=A?b({},B,{[A]:g}):g;return e?()=>n:n}return A?b({},B,{[A]:Q}):b({},B,Q)},[A,B,Q,e])}function Qv(A){const{children:B,theme:Q,themeId:e}=A,t=Kl(rf),g=ou()||rf,n=If(e,t,Q),E=If(e,g,Q,!0);return R.jsx(Bv,{theme:E,children:R.jsx(Xl.Provider,{value:n,children:B})})}function ev(A,B){return b({toolbar:{minHeight:56,[A.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[A.up("sm")]:{minHeight:64}}},B)}const tv={black:"#000",white:"#fff"},wI=tv,gv={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},nv=gv,Ev={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},_C=Ev,Cv={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},$C=Cv,ov={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},or=ov,iv={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Ao=iv,rv={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Bo=rv,Iv={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Qo=Iv,av=["mode","contrastThreshold","tonalOffset"],af={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:wI.white,default:wI.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},fw={text:{primary:wI.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:wI.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function sf(A,B,Q,e){const t=e.light||e,g=e.dark||e*1.5;A[B]||(A.hasOwnProperty(Q)?A[B]=A[Q]:B==="light"?A.light=q1(A.main,t):B==="dark"&&(A.dark=K1(A.main,g)))}function sv(A="light"){return A==="dark"?{main:Ao[200],light:Ao[50],dark:Ao[400]}:{main:Ao[700],light:Ao[400],dark:Ao[800]}}function lv(A="light"){return A==="dark"?{main:_C[200],light:_C[50],dark:_C[400]}:{main:_C[500],light:_C[300],dark:_C[700]}}function cv(A="light"){return A==="dark"?{main:$C[500],light:$C[300],dark:$C[700]}:{main:$C[700],light:$C[400],dark:$C[800]}}function wv(A="light"){return A==="dark"?{main:Bo[400],light:Bo[300],dark:Bo[700]}:{main:Bo[700],light:Bo[500],dark:Bo[900]}}function Fv(A="light"){return A==="dark"?{main:Qo[400],light:Qo[300],dark:Qo[700]}:{main:Qo[800],light:Qo[500],dark:Qo[900]}}function Dv(A="light"){return A==="dark"?{main:or[400],light:or[300],dark:or[700]}:{main:"#ed6c02",light:or[500],dark:or[900]}}function dv(A){const{mode:B="light",contrastThreshold:Q=3,tonalOffset:e=.2}=A,t=DA(A,av),g=A.primary||sv(B),n=A.secondary||lv(B),E=A.error||cv(B),C=A.info||wv(B),o=A.success||Fv(B),i=A.warning||Dv(B);function r(D){return P1(D,fw.text.primary)>=Q?fw.text.primary:af.text.primary}const I=({color:D,name:U,mainShade:l=500,lightShade:F=300,darkShade:c=700})=>{if(D=b({},D),!D.main&&D[l]&&(D.main=D[l]),!D.hasOwnProperty("main"))throw new Error(zn(11,U?` (${U})`:"",l));if(typeof D.main!="string")throw new Error(zn(12,U?` (${U})`:"",JSON.stringify(D.main)));return sf(D,"light",F,e),sf(D,"dark",c,e),D.contrastText||(D.contrastText=r(D.main)),D},a={dark:fw,light:af};return VQ(b({common:b({},wI),mode:B,primary:I({color:g,name:"primary"}),secondary:I({color:n,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:I({color:E,name:"error"}),warning:I({color:i,name:"warning"}),info:I({color:C,name:"info"}),success:I({color:o,name:"success"}),grey:nv,contrastThreshold:Q,getContrastText:r,augmentColor:I,tonalOffset:e},a[B]),t)}const uv=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Uv(A){return Math.round(A*1e5)/1e5}const lf={textTransform:"uppercase"},cf='"Roboto", "Helvetica", "Arial", sans-serif';function fv(A,B){const Q=typeof B=="function"?B(A):B,{fontFamily:e=cf,fontSize:t=14,fontWeightLight:g=300,fontWeightRegular:n=400,fontWeightMedium:E=500,fontWeightBold:C=700,htmlFontSize:o=16,allVariants:i,pxToRem:r}=Q,I=DA(Q,uv),a=t/14,d=r||(l=>`${l/o*a}rem`),D=(l,F,c,w,M)=>b({fontFamily:e,fontWeight:l,fontSize:d(F),lineHeight:c},e===cf?{letterSpacing:`${Uv(w/F)}em`}:{},M,i),U={h1:D(g,96,1.167,-1.5),h2:D(g,60,1.2,-.5),h3:D(n,48,1.167,0),h4:D(n,34,1.235,.25),h5:D(n,24,1.334,0),h6:D(E,20,1.6,.15),subtitle1:D(n,16,1.75,.15),subtitle2:D(E,14,1.57,.1),body1:D(n,16,1.5,.15),body2:D(n,14,1.43,.15),button:D(E,14,1.75,.4,lf),caption:D(n,12,1.66,.4),overline:D(n,12,2.66,1,lf),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return VQ(b({htmlFontSize:o,pxToRem:d,fontFamily:e,fontSize:t,fontWeightLight:g,fontWeightRegular:n,fontWeightMedium:E,fontWeightBold:C},U),I,{clone:!1})}const Mv=.2,Gv=.14,hv=.12;function XB(...A){return[`${A[0]}px ${A[1]}px ${A[2]}px ${A[3]}px rgba(0,0,0,${Mv})`,`${A[4]}px ${A[5]}px ${A[6]}px ${A[7]}px rgba(0,0,0,${Gv})`,`${A[8]}px ${A[9]}px ${A[10]}px ${A[11]}px rgba(0,0,0,${hv})`].join(",")}const pv=["none",XB(0,2,1,-1,0,1,1,0,0,1,3,0),XB(0,3,1,-2,0,2,2,0,0,1,5,0),XB(0,3,3,-2,0,3,4,0,0,1,8,0),XB(0,2,4,-1,0,4,5,0,0,1,10,0),XB(0,3,5,-1,0,5,8,0,0,1,14,0),XB(0,3,5,-1,0,6,10,0,0,1,18,0),XB(0,4,5,-2,0,7,10,1,0,2,16,1),XB(0,5,5,-3,0,8,10,1,0,3,14,2),XB(0,5,6,-3,0,9,12,1,0,3,16,2),XB(0,6,6,-3,0,10,14,1,0,4,18,3),XB(0,6,7,-4,0,11,15,1,0,4,20,3),XB(0,7,8,-4,0,12,17,2,0,5,22,4),XB(0,7,8,-4,0,13,19,2,0,5,24,4),XB(0,7,9,-4,0,14,21,2,0,5,26,4),XB(0,8,9,-5,0,15,22,2,0,6,28,5),XB(0,8,10,-5,0,16,24,2,0,6,30,5),XB(0,8,11,-5,0,17,26,2,0,6,32,5),XB(0,9,11,-5,0,18,28,2,0,7,34,6),XB(0,9,12,-6,0,19,29,2,0,7,36,6),XB(0,10,13,-6,0,20,31,3,0,8,38,7),XB(0,10,13,-6,0,21,33,3,0,8,40,7),XB(0,10,14,-6,0,22,35,3,0,8,42,7),XB(0,11,14,-7,0,23,36,3,0,9,44,8),XB(0,11,15,-7,0,24,38,3,0,9,46,8)],Rv=pv,mv=["duration","easing","delay"],Yv={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Nv={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function wf(A){return`${Math.round(A)}ms`}function bv(A){if(!A)return 0;const B=A/36;return Math.round((4+15*B**.25+B/5)*10)}function yv(A){const B=b({},Yv,A.easing),Q=b({},Nv,A.duration);return b({getAutoHeightDuration:bv,create:(t=["all"],g={})=>{const{duration:n=Q.standard,easing:E=B.easeInOut,delay:C=0}=g;return DA(g,mv),(Array.isArray(t)?t:[t]).map(o=>`${o} ${typeof n=="string"?n:wf(n)} ${E} ${typeof C=="string"?C:wf(C)}`).join(",")}},A,{easing:B,duration:Q})}const kv={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Jv=kv,vv=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function iu(A={},...B){const{mixins:Q={},palette:e={},transitions:t={},typography:g={}}=A,n=DA(A,vv);if(A.vars)throw new Error(zn(18));const E=dv(e),C=nu(A);let o=VQ(C,{mixins:ev(C.breakpoints,Q),palette:E,shadows:Rv.slice(),typography:fv(E,g),transitions:yv(t),zIndex:b({},Jv)});return o=VQ(o,n),o=B.reduce((i,r)=>VQ(i,r),o),o.unstable_sxConfig=b({},jl,n==null?void 0:n.unstable_sxConfig),o.unstable_sx=function(r){return Pl({sx:r,theme:this})},o}const Zv=iu(),$l=Zv;function Tg(){const A=ql($l);return A[TE]||A}function jA({props:A,name:B}){return V1({props:A,name:B,defaultTheme:$l,themeId:TE})}const ct=A=>Sr(A)&&A!=="classes",LR=Sr,Lv=T1({themeId:TE,defaultTheme:$l,rootShouldForwardProp:ct}),wA=Lv,Sv=["theme"];function Xv(A){let{theme:B}=A,Q=DA(A,Sv);const e=B[TE];return R.jsx(Qv,b({},Q,{themeId:e?TE:void 0,theme:e||B}))}const Hv=A=>{let B;return A<1?B=5.11916*A**2:B=4.5*Math.log(A+1)+2,(B/100).toFixed(2)},Ff=Hv,ru=G.createContext(),xv=({children:A})=>{const[B,Q]=G.useState("light"),e=()=>{Q(g=>g==="light"?"dark":"light")},t=G.useMemo(()=>iu({palette:{mode:B}}),[B]);return R.jsx(ru.Provider,{value:{mode:B,setMode:Q,toggleColorMode:e},children:R.jsx(Xv,{theme:t,children:A})})};function Wv(A){return zA("MuiSvgIcon",A)}TA("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Ov=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Tv=A=>{const{color:B,fontSize:Q,classes:e}=A,t={root:["root",B!=="inherit"&&`color${FA(B)}`,`fontSize${FA(Q)}`]};return qA(t,Wv,e)},Vv=wA("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,Q.color!=="inherit"&&B[`color${FA(Q.color)}`],B[`fontSize${FA(Q.fontSize)}`]]}})(({theme:A,ownerState:B})=>{var Q,e,t,g,n,E,C,o,i,r,I,a,d;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:B.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(Q=A.transitions)==null||(e=Q.create)==null?void 0:e.call(Q,"fill",{duration:(t=A.transitions)==null||(t=t.duration)==null?void 0:t.shorter}),fontSize:{inherit:"inherit",small:((g=A.typography)==null||(n=g.pxToRem)==null?void 0:n.call(g,20))||"1.25rem",medium:((E=A.typography)==null||(C=E.pxToRem)==null?void 0:C.call(E,24))||"1.5rem",large:((o=A.typography)==null||(i=o.pxToRem)==null?void 0:i.call(o,35))||"2.1875rem"}[B.fontSize],color:(r=(I=(A.vars||A).palette)==null||(I=I[B.color])==null?void 0:I.main)!=null?r:{action:(a=(A.vars||A).palette)==null||(a=a.action)==null?void 0:a.active,disabled:(d=(A.vars||A).palette)==null||(d=d.action)==null?void 0:d.disabled,inherit:void 0}[B.color]}}),SR=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiSvgIcon"}),{children:t,className:g,color:n="inherit",component:E="svg",fontSize:C="medium",htmlColor:o,inheritViewBox:i=!1,titleAccess:r,viewBox:I="0 0 24 24"}=e,a=DA(e,Ov),d=G.isValidElement(t)&&t.type==="svg",D=b({},e,{color:n,component:E,fontSize:C,instanceFontSize:B.fontSize,inheritViewBox:i,viewBox:I,hasSvgAsChild:d}),U={};i||(U.viewBox=I);const l=Tv(D);return R.jsxs(Vv,b({as:E,className:pA(l.root,g),focusable:"false",color:o,"aria-hidden":r?void 0:!0,role:r?"img":void 0,ref:Q},U,a,d&&t.props,{ownerState:D,children:[d?t.props.children:t,r?R.jsx("title",{children:r}):null]}))});SR.muiName="SvgIcon";const Df=SR;function pQ(A,B){function Q(e,t){return R.jsx(Df,b({"data-testid":`${B}Icon`,ref:t},e,{children:A}))}return Q.muiName=Df.muiName,G.memo(G.forwardRef(Q))}var GB={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu=Symbol.for("react.element"),au=Symbol.for("react.portal"),Ac=Symbol.for("react.fragment"),Bc=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),ec=Symbol.for("react.provider"),tc=Symbol.for("react.context"),zv=Symbol.for("react.server_context"),gc=Symbol.for("react.forward_ref"),nc=Symbol.for("react.suspense"),Ec=Symbol.for("react.suspense_list"),Cc=Symbol.for("react.memo"),oc=Symbol.for("react.lazy"),jv=Symbol.for("react.offscreen"),XR;XR=Symbol.for("react.module.reference");function wt(A){if(typeof A=="object"&&A!==null){var B=A.$$typeof;switch(B){case Iu:switch(A=A.type,A){case Ac:case Qc:case Bc:case nc:case Ec:return A;default:switch(A=A&&A.$$typeof,A){case zv:case tc:case gc:case oc:case Cc:case ec:return A;default:return B}}case au:return B}}}GB.ContextConsumer=tc;GB.ContextProvider=ec;GB.Element=Iu;GB.ForwardRef=gc;GB.Fragment=Ac;GB.Lazy=oc;GB.Memo=Cc;GB.Portal=au;GB.Profiler=Qc;GB.StrictMode=Bc;GB.Suspense=nc;GB.SuspenseList=Ec;GB.isAsyncMode=function(){return!1};GB.isConcurrentMode=function(){return!1};GB.isContextConsumer=function(A){return wt(A)===tc};GB.isContextProvider=function(A){return wt(A)===ec};GB.isElement=function(A){return typeof A=="object"&&A!==null&&A.$$typeof===Iu};GB.isForwardRef=function(A){return wt(A)===gc};GB.isFragment=function(A){return wt(A)===Ac};GB.isLazy=function(A){return wt(A)===oc};GB.isMemo=function(A){return wt(A)===Cc};GB.isPortal=function(A){return wt(A)===au};GB.isProfiler=function(A){return wt(A)===Qc};GB.isStrictMode=function(A){return wt(A)===Bc};GB.isSuspense=function(A){return wt(A)===nc};GB.isSuspenseList=function(A){return wt(A)===Ec};GB.isValidElementType=function(A){return typeof A=="string"||typeof A=="function"||A===Ac||A===Qc||A===Bc||A===nc||A===Ec||A===jv||typeof A=="object"&&A!==null&&(A.$$typeof===oc||A.$$typeof===Cc||A.$$typeof===ec||A.$$typeof===tc||A.$$typeof===gc||A.$$typeof===XR||A.getModuleId!==void 0)};GB.typeOf=wt;function ID(A,B){return ID=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ID(A,B)}function ic(A,B){A.prototype=Object.create(B.prototype),A.prototype.constructor=A,ID(A,B)}const df={disabled:!1},Ks=gt.createContext(null);var Pv=function(B){return B.scrollTop},Mr="unmounted",GE="exited",hE="entering",ro="entered",aD="exiting",Vg=function(A){ic(B,A);function B(e,t){var g;g=A.call(this,e,t)||this;var n=t,E=n&&!n.isMounting?e.enter:e.appear,C;return g.appearStatus=null,e.in?E?(C=GE,g.appearStatus=hE):C=ro:e.unmountOnExit||e.mountOnEnter?C=Mr:C=GE,g.state={status:C},g.nextCallback=null,g}B.getDerivedStateFromProps=function(t,g){var n=t.in;return n&&g.status===Mr?{status:GE}:null};var Q=B.prototype;return Q.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},Q.componentDidUpdate=function(t){var g=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==hE&&n!==ro&&(g=hE):(n===hE||n===ro)&&(g=aD)}this.updateStatus(!1,g)},Q.componentWillUnmount=function(){this.cancelNextCallback()},Q.getTimeouts=function(){var t=this.props.timeout,g,n,E;return g=n=E=t,t!=null&&typeof t!="number"&&(g=t.exit,n=t.enter,E=t.appear!==void 0?t.appear:n),{exit:g,enter:n,appear:E}},Q.updateStatus=function(t,g){if(t===void 0&&(t=!1),g!==null)if(this.cancelNextCallback(),g===hE){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:Za.findDOMNode(this);n&&Pv(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===GE&&this.setState({status:Mr})},Q.performEnter=function(t){var g=this,n=this.props.enter,E=this.context?this.context.isMounting:t,C=this.props.nodeRef?[E]:[Za.findDOMNode(this),E],o=C[0],i=C[1],r=this.getTimeouts(),I=E?r.appear:r.enter;if(!t&&!n||df.disabled){this.safeSetState({status:ro},function(){g.props.onEntered(o)});return}this.props.onEnter(o,i),this.safeSetState({status:hE},function(){g.props.onEntering(o,i),g.onTransitionEnd(I,function(){g.safeSetState({status:ro},function(){g.props.onEntered(o,i)})})})},Q.performExit=function(){var t=this,g=this.props.exit,n=this.getTimeouts(),E=this.props.nodeRef?void 0:Za.findDOMNode(this);if(!g||df.disabled){this.safeSetState({status:GE},function(){t.props.onExited(E)});return}this.props.onExit(E),this.safeSetState({status:aD},function(){t.props.onExiting(E),t.onTransitionEnd(n.exit,function(){t.safeSetState({status:GE},function(){t.props.onExited(E)})})})},Q.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},Q.safeSetState=function(t,g){g=this.setNextCallback(g),this.setState(t,g)},Q.setNextCallback=function(t){var g=this,n=!0;return this.nextCallback=function(E){n&&(n=!1,g.nextCallback=null,t(E))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},Q.onTransitionEnd=function(t,g){this.setNextCallback(g);var n=this.props.nodeRef?this.props.nodeRef.current:Za.findDOMNode(this),E=t==null&&!this.props.addEndListener;if(!n||E){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var C=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=C[0],i=C[1];this.props.addEndListener(o,i)}t!=null&&setTimeout(this.nextCallback,t)},Q.render=function(){var t=this.state.status;if(t===Mr)return null;var g=this.props,n=g.children;g.in,g.mountOnEnter,g.unmountOnExit,g.appear,g.enter,g.exit,g.timeout,g.addEndListener,g.onEnter,g.onEntering,g.onEntered,g.onExit,g.onExiting,g.onExited,g.nodeRef;var E=DA(g,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return gt.createElement(Ks.Provider,{value:null},typeof n=="function"?n(t,E):gt.cloneElement(gt.Children.only(n),E))},B}(gt.Component);Vg.contextType=Ks;Vg.propTypes={};function eo(){}Vg.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:eo,onEntering:eo,onEntered:eo,onExit:eo,onExiting:eo,onExited:eo};Vg.UNMOUNTED=Mr;Vg.EXITED=GE;Vg.ENTERING=hE;Vg.ENTERED=ro;Vg.EXITING=aD;const su=Vg;function sD(A){if(A===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return A}function lu(A,B){var Q=function(g){return B&&G.isValidElement(g)?B(g):g},e=Object.create(null);return A&&G.Children.map(A,function(t){return t}).forEach(function(t){e[t.key]=Q(t)}),e}function Kv(A,B){A=A||{},B=B||{};function Q(i){return i in B?B[i]:A[i]}var e=Object.create(null),t=[];for(var g in A)g in B?t.length&&(e[g]=t,t=[]):t.push(g);var n,E={};for(var C in B){if(e[C])for(n=0;n<e[C].length;n++){var o=e[C][n];E[e[C][n]]=Q(o)}E[C]=Q(C)}for(n=0;n<t.length;n++)E[t[n]]=Q(t[n]);return E}function yE(A,B,Q){return Q[B]!=null?Q[B]:A.props[B]}function qv(A,B){return lu(A.children,function(Q){return G.cloneElement(Q,{onExited:B.bind(null,Q),in:!0,appear:yE(Q,"appear",A),enter:yE(Q,"enter",A),exit:yE(Q,"exit",A)})})}function _v(A,B,Q){var e=lu(A.children),t=Kv(B,e);return Object.keys(t).forEach(function(g){var n=t[g];if(G.isValidElement(n)){var E=g in B,C=g in e,o=B[g],i=G.isValidElement(o)&&!o.props.in;C&&(!E||i)?t[g]=G.cloneElement(n,{onExited:Q.bind(null,n),in:!0,exit:yE(n,"exit",A),enter:yE(n,"enter",A)}):!C&&E&&!i?t[g]=G.cloneElement(n,{in:!1}):C&&E&&G.isValidElement(o)&&(t[g]=G.cloneElement(n,{onExited:Q.bind(null,n),in:o.props.in,exit:yE(n,"exit",A),enter:yE(n,"enter",A)}))}}),t}var $v=Object.values||function(A){return Object.keys(A).map(function(B){return A[B]})},AZ={component:"div",childFactory:function(B){return B}},cu=function(A){ic(B,A);function B(e,t){var g;g=A.call(this,e,t)||this;var n=g.handleExited.bind(sD(g));return g.state={contextValue:{isMounting:!0},handleExited:n,firstRender:!0},g}var Q=B.prototype;return Q.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},Q.componentWillUnmount=function(){this.mounted=!1},B.getDerivedStateFromProps=function(t,g){var n=g.children,E=g.handleExited,C=g.firstRender;return{children:C?qv(t,E):_v(t,n,E),firstRender:!1}},Q.handleExited=function(t,g){var n=lu(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(g),this.mounted&&this.setState(function(E){var C=b({},E.children);return delete C[t.key],{children:C}}))},Q.render=function(){var t=this.props,g=t.component,n=t.childFactory,E=DA(t,["component","childFactory"]),C=this.state.contextValue,o=$v(this.state.children).map(n);return delete E.appear,delete E.enter,delete E.exit,g===null?gt.createElement(Ks.Provider,{value:C},o):gt.createElement(Ks.Provider,{value:C},gt.createElement(g,E,o))},B}(gt.Component);cu.propTypes={};cu.defaultProps=AZ;const BZ=cu,wu=A=>A.scrollTop;function zo(A,B){var Q,e;const{timeout:t,easing:g,style:n={}}=A;return{duration:(Q=n.transitionDuration)!=null?Q:typeof t=="number"?t:t[B.mode]||0,easing:(e=n.transitionTimingFunction)!=null?e:typeof g=="object"?g[B.mode]:g,delay:n.transitionDelay}}function QZ(A){return zA("MuiPaper",A)}TA("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const eZ=["className","component","elevation","square","variant"],tZ=A=>{const{square:B,elevation:Q,variant:e,classes:t}=A,g={root:["root",e,!B&&"rounded",e==="elevation"&&`elevation${Q}`]};return qA(g,QZ,t)},gZ=wA("div",{name:"MuiPaper",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,B[Q.variant],!Q.square&&B.rounded,Q.variant==="elevation"&&B[`elevation${Q.elevation}`]]}})(({theme:A,ownerState:B})=>{var Q;return b({backgroundColor:(A.vars||A).palette.background.paper,color:(A.vars||A).palette.text.primary,transition:A.transitions.create("box-shadow")},!B.square&&{borderRadius:A.shape.borderRadius},B.variant==="outlined"&&{border:`1px solid ${(A.vars||A).palette.divider}`},B.variant==="elevation"&&b({boxShadow:(A.vars||A).shadows[B.elevation]},!A.vars&&A.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${TQ("#fff",Ff(B.elevation))}, ${TQ("#fff",Ff(B.elevation))})`},A.vars&&{backgroundImage:(Q=A.vars.overlays)==null?void 0:Q[B.elevation]}))}),nZ=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiPaper"}),{className:t,component:g="div",elevation:n=1,square:E=!1,variant:C="elevation"}=e,o=DA(e,eZ),i=b({},e,{component:g,elevation:n,square:E,variant:C}),r=tZ(i);return R.jsx(gZ,b({as:g,ownerState:i,className:pA(r.root,t),ref:Q},o))}),rc=nZ;function EZ(A){const{className:B,classes:Q,pulsate:e=!1,rippleX:t,rippleY:g,rippleSize:n,in:E,onExited:C,timeout:o}=A,[i,r]=G.useState(!1),I=pA(B,Q.ripple,Q.rippleVisible,e&&Q.ripplePulsate),a={width:n,height:n,top:-(n/2)+g,left:-(n/2)+t},d=pA(Q.child,i&&Q.childLeaving,e&&Q.childPulsate);return!E&&!i&&r(!0),G.useEffect(()=>{if(!E&&C!=null){const D=setTimeout(C,o);return()=>{clearTimeout(D)}}},[C,E,o]),R.jsx("span",{className:I,style:a,children:R.jsx("span",{className:d})})}const CZ=TA("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Bt=CZ,oZ=["center","classes","className"];let Ic=A=>A,uf,Uf,ff,Mf;const lD=550,iZ=80,rZ=XI(uf||(uf=Ic`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),IZ=XI(Uf||(Uf=Ic`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),aZ=XI(ff||(ff=Ic`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),sZ=wA("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),lZ=wA(EZ,{name:"MuiTouchRipple",slot:"Ripple"})(Mf||(Mf=Ic`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),Bt.rippleVisible,rZ,lD,({theme:A})=>A.transitions.easing.easeInOut,Bt.ripplePulsate,({theme:A})=>A.transitions.duration.shorter,Bt.child,Bt.childLeaving,IZ,lD,({theme:A})=>A.transitions.easing.easeInOut,Bt.childPulsate,aZ,({theme:A})=>A.transitions.easing.easeInOut),cZ=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiTouchRipple"}),{center:t=!1,classes:g={},className:n}=e,E=DA(e,oZ),[C,o]=G.useState([]),i=G.useRef(0),r=G.useRef(null);G.useEffect(()=>{r.current&&(r.current(),r.current=null)},[C]);const I=G.useRef(!1),a=G.useRef(0),d=G.useRef(null),D=G.useRef(null);G.useEffect(()=>()=>{a.current&&clearTimeout(a.current)},[]);const U=G.useCallback(w=>{const{pulsate:M,rippleX:Y,rippleY:p,rippleSize:k,cb:Z}=w;o(J=>[...J,R.jsx(lZ,{classes:{ripple:pA(g.ripple,Bt.ripple),rippleVisible:pA(g.rippleVisible,Bt.rippleVisible),ripplePulsate:pA(g.ripplePulsate,Bt.ripplePulsate),child:pA(g.child,Bt.child),childLeaving:pA(g.childLeaving,Bt.childLeaving),childPulsate:pA(g.childPulsate,Bt.childPulsate)},timeout:lD,pulsate:M,rippleX:Y,rippleY:p,rippleSize:k},i.current)]),i.current+=1,r.current=Z},[g]),l=G.useCallback((w={},M={},Y=()=>{})=>{const{pulsate:p=!1,center:k=t||M.pulsate,fakeElement:Z=!1}=M;if((w==null?void 0:w.type)==="mousedown"&&I.current){I.current=!1;return}(w==null?void 0:w.type)==="touchstart"&&(I.current=!0);const J=Z?null:D.current,W=J?J.getBoundingClientRect():{width:0,height:0,left:0,top:0};let T,j,P;if(k||w===void 0||w.clientX===0&&w.clientY===0||!w.clientX&&!w.touches)T=Math.round(W.width/2),j=Math.round(W.height/2);else{const{clientX:_,clientY:$}=w.touches&&w.touches.length>0?w.touches[0]:w;T=Math.round(_-W.left),j=Math.round($-W.top)}if(k)P=Math.sqrt((2*W.width**2+W.height**2)/3),P%2===0&&(P+=1);else{const _=Math.max(Math.abs((J?J.clientWidth:0)-T),T)*2+2,$=Math.max(Math.abs((J?J.clientHeight:0)-j),j)*2+2;P=Math.sqrt(_**2+$**2)}w!=null&&w.touches?d.current===null&&(d.current=()=>{U({pulsate:p,rippleX:T,rippleY:j,rippleSize:P,cb:Y})},a.current=setTimeout(()=>{d.current&&(d.current(),d.current=null)},iZ)):U({pulsate:p,rippleX:T,rippleY:j,rippleSize:P,cb:Y})},[t,U]),F=G.useCallback(()=>{l({},{pulsate:!0})},[l]),c=G.useCallback((w,M)=>{if(clearTimeout(a.current),(w==null?void 0:w.type)==="touchend"&&d.current){d.current(),d.current=null,a.current=setTimeout(()=>{c(w,M)});return}d.current=null,o(Y=>Y.length>0?Y.slice(1):Y),r.current=M},[]);return G.useImperativeHandle(Q,()=>({pulsate:F,start:l,stop:c}),[F,l,c]),R.jsx(sZ,b({className:pA(Bt.root,g.root,n),ref:D},E,{children:R.jsx(BZ,{component:null,exit:!0,children:C})}))}),wZ=cZ;function FZ(A){return zA("MuiButtonBase",A)}const DZ=TA("MuiButtonBase",["root","disabled","focusVisible"]),dZ=DZ,uZ=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],UZ=A=>{const{disabled:B,focusVisible:Q,focusVisibleClassName:e,classes:t}=A,n=qA({root:["root",B&&"disabled",Q&&"focusVisible"]},FZ,t);return Q&&e&&(n.root+=` ${e}`),n},fZ=wA("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(A,B)=>B.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${dZ.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),MZ=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiButtonBase"}),{action:t,centerRipple:g=!1,children:n,className:E,component:C="button",disabled:o=!1,disableRipple:i=!1,disableTouchRipple:r=!1,focusRipple:I=!1,LinkComponent:a="a",onBlur:d,onClick:D,onContextMenu:U,onDragLeave:l,onFocus:F,onFocusVisible:c,onKeyDown:w,onKeyUp:M,onMouseDown:Y,onMouseLeave:p,onMouseUp:k,onTouchEnd:Z,onTouchMove:J,onTouchStart:W,tabIndex:T=0,TouchRippleProps:j,touchRippleRef:P,type:_}=e,$=DA(e,uZ),QA=G.useRef(null),H=G.useRef(null),K=EQ(H,P),{isFocusVisibleRef:BA,onFocus:dA,onBlur:rA,ref:JA}=Vd(),[MA,SA]=G.useState(!1);o&&MA&&SA(!1),G.useImperativeHandle(t,()=>({focusVisible:()=>{SA(!0),QA.current.focus()}}),[]);const[eA,tA]=G.useState(!1);G.useEffect(()=>{tA(!0)},[]);const eB=eA&&!i&&!o;G.useEffect(()=>{MA&&I&&!i&&eA&&H.current.pulsate()},[i,I,MA,eA]);function _A(YA,_B,wB=r){return bE(De=>(_B&&_B(De),!wB&&H.current&&H.current[YA](De),!0))}const EB=_A("start",Y),XA=_A("stop",U),oB=_A("stop",l),ZA=_A("stop",k),LA=_A("stop",YA=>{MA&&YA.preventDefault(),p&&p(YA)}),UA=_A("start",W),tB=_A("stop",Z),OA=_A("stop",J),cA=_A("stop",YA=>{rA(YA),BA.current===!1&&SA(!1),d&&d(YA)},!1),hB=bE(YA=>{QA.current||(QA.current=YA.currentTarget),dA(YA),BA.current===!0&&(SA(!0),c&&c(YA)),F&&F(YA)}),iB=()=>{const YA=QA.current;return C&&C!=="button"&&!(YA.tagName==="A"&&YA.href)},gA=G.useRef(!1),yA=bE(YA=>{I&&!gA.current&&MA&&H.current&&YA.key===" "&&(gA.current=!0,H.current.stop(YA,()=>{H.current.start(YA)})),YA.target===YA.currentTarget&&iB()&&YA.key===" "&&YA.preventDefault(),w&&w(YA),YA.target===YA.currentTarget&&iB()&&YA.key==="Enter"&&!o&&(YA.preventDefault(),D&&D(YA))}),VA=bE(YA=>{I&&YA.key===" "&&H.current&&MA&&!YA.defaultPrevented&&(gA.current=!1,H.current.stop(YA,()=>{H.current.pulsate(YA)})),M&&M(YA),D&&YA.target===YA.currentTarget&&iB()&&YA.key===" "&&!YA.defaultPrevented&&D(YA)});let HA=C;HA==="button"&&($.href||$.to)&&(HA=a);const cB={};HA==="button"?(cB.type=_===void 0?"button":_,cB.disabled=o):(!$.href&&!$.to&&(cB.role="button"),o&&(cB["aria-disabled"]=o));const qB=EQ(Q,JA,QA),RQ=b({},e,{centerRipple:g,component:C,disabled:o,disableRipple:i,disableTouchRipple:r,focusRipple:I,tabIndex:T,focusVisible:MA}),QB=UZ(RQ);return R.jsxs(fZ,b({as:HA,className:pA(QB.root,E),ownerState:RQ,onBlur:cA,onClick:D,onContextMenu:XA,onFocus:hB,onKeyDown:yA,onKeyUp:VA,onMouseDown:EB,onMouseLeave:LA,onMouseUp:ZA,onDragLeave:oB,onTouchEnd:tB,onTouchMove:OA,onTouchStart:UA,ref:qB,tabIndex:o?-1:T,type:_},cB,$,{children:[n,eB?R.jsx(wZ,b({ref:K,center:g},j)):null]}))}),Fu=MZ;function GZ(A){return zA("MuiIconButton",A)}const hZ=TA("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),pZ=hZ,RZ=["edge","children","className","color","disabled","disableFocusRipple","size"],mZ=A=>{const{classes:B,disabled:Q,color:e,edge:t,size:g}=A,n={root:["root",Q&&"disabled",e!=="default"&&`color${FA(e)}`,t&&`edge${FA(t)}`,`size${FA(g)}`]};return qA(n,GZ,B)},YZ=wA(Fu,{name:"MuiIconButton",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,Q.color!=="default"&&B[`color${FA(Q.color)}`],Q.edge&&B[`edge${FA(Q.edge)}`],B[`size${FA(Q.size)}`]]}})(({theme:A,ownerState:B})=>b({textAlign:"center",flex:"0 0 auto",fontSize:A.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(A.vars||A).palette.action.active,transition:A.transitions.create("background-color",{duration:A.transitions.duration.shortest})},!B.disableRipple&&{"&:hover":{backgroundColor:A.vars?`rgba(${A.vars.palette.action.activeChannel} / ${A.vars.palette.action.hoverOpacity})`:TQ(A.palette.action.active,A.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},B.edge==="start"&&{marginLeft:B.size==="small"?-3:-12},B.edge==="end"&&{marginRight:B.size==="small"?-3:-12}),({theme:A,ownerState:B})=>{var Q;const e=(Q=(A.vars||A).palette)==null?void 0:Q[B.color];return b({},B.color==="inherit"&&{color:"inherit"},B.color!=="inherit"&&B.color!=="default"&&b({color:e==null?void 0:e.main},!B.disableRipple&&{"&:hover":b({},e&&{backgroundColor:A.vars?`rgba(${e.mainChannel} / ${A.vars.palette.action.hoverOpacity})`:TQ(e.main,A.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),B.size==="small"&&{padding:5,fontSize:A.typography.pxToRem(18)},B.size==="large"&&{padding:12,fontSize:A.typography.pxToRem(28)},{[`&.${pZ.disabled}`]:{backgroundColor:"transparent",color:(A.vars||A).palette.action.disabled}})}),NZ=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiIconButton"}),{edge:t=!1,children:g,className:n,color:E="default",disabled:C=!1,disableFocusRipple:o=!1,size:i="medium"}=e,r=DA(e,RZ),I=b({},e,{edge:t,color:E,disabled:C,disableFocusRipple:o,size:i}),a=mZ(I);return R.jsx(YZ,b({className:pA(a.root,n),centerRipple:!0,focusRipple:!o,disabled:C,ref:Q,ownerState:I},r,{children:g}))}),Gf=NZ;function bZ(A){return zA("MuiTypography",A)}TA("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const yZ=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],kZ=A=>{const{align:B,gutterBottom:Q,noWrap:e,paragraph:t,variant:g,classes:n}=A,E={root:["root",g,A.align!=="inherit"&&`align${FA(B)}`,Q&&"gutterBottom",e&&"noWrap",t&&"paragraph"]};return qA(E,bZ,n)},JZ=wA("span",{name:"MuiTypography",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,Q.variant&&B[Q.variant],Q.align!=="inherit"&&B[`align${FA(Q.align)}`],Q.noWrap&&B.noWrap,Q.gutterBottom&&B.gutterBottom,Q.paragraph&&B.paragraph]}})(({theme:A,ownerState:B})=>b({margin:0},B.variant==="inherit"&&{font:"inherit"},B.variant!=="inherit"&&A.typography[B.variant],B.align!=="inherit"&&{textAlign:B.align},B.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},B.gutterBottom&&{marginBottom:"0.35em"},B.paragraph&&{marginBottom:16})),hf={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},vZ={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ZZ=A=>vZ[A]||A,LZ=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiTypography"}),t=ZZ(e.color),g=Eu(b({},e,{color:t})),{align:n="inherit",className:E,component:C,gutterBottom:o=!1,noWrap:i=!1,paragraph:r=!1,variant:I="body1",variantMapping:a=hf}=g,d=DA(g,yZ),D=b({},g,{align:n,color:t,className:E,component:C,gutterBottom:o,noWrap:i,paragraph:r,variant:I,variantMapping:a}),U=C||(r?"p":a[I]||hf[I])||"span",l=kZ(D);return R.jsx(JZ,b({as:U,ref:Q,ownerState:D,className:pA(l.root,E)},d))}),DB=LZ;function SZ(A){return zA("MuiAppBar",A)}TA("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const XZ=["className","color","enableColorOnDark","position"],HZ=A=>{const{color:B,position:Q,classes:e}=A,t={root:["root",`color${FA(B)}`,`position${FA(Q)}`]};return qA(t,SZ,e)},Sa=(A,B)=>A?`${A==null?void 0:A.replace(")","")}, ${B})`:B,xZ=wA(rc,{name:"MuiAppBar",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,B[`position${FA(Q.position)}`],B[`color${FA(Q.color)}`]]}})(({theme:A,ownerState:B})=>{const Q=A.palette.mode==="light"?A.palette.grey[100]:A.palette.grey[900];return b({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},B.position==="fixed"&&{position:"fixed",zIndex:(A.vars||A).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},B.position==="absolute"&&{position:"absolute",zIndex:(A.vars||A).zIndex.appBar,top:0,left:"auto",right:0},B.position==="sticky"&&{position:"sticky",zIndex:(A.vars||A).zIndex.appBar,top:0,left:"auto",right:0},B.position==="static"&&{position:"static"},B.position==="relative"&&{position:"relative"},!A.vars&&b({},B.color==="default"&&{backgroundColor:Q,color:A.palette.getContrastText(Q)},B.color&&B.color!=="default"&&B.color!=="inherit"&&B.color!=="transparent"&&{backgroundColor:A.palette[B.color].main,color:A.palette[B.color].contrastText},B.color==="inherit"&&{color:"inherit"},A.palette.mode==="dark"&&!B.enableColorOnDark&&{backgroundColor:null,color:null},B.color==="transparent"&&b({backgroundColor:"transparent",color:"inherit"},A.palette.mode==="dark"&&{backgroundImage:"none"})),A.vars&&b({},B.color==="default"&&{"--AppBar-background":B.enableColorOnDark?A.vars.palette.AppBar.defaultBg:Sa(A.vars.palette.AppBar.darkBg,A.vars.palette.AppBar.defaultBg),"--AppBar-color":B.enableColorOnDark?A.vars.palette.text.primary:Sa(A.vars.palette.AppBar.darkColor,A.vars.palette.text.primary)},B.color&&!B.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":B.enableColorOnDark?A.vars.palette[B.color].main:Sa(A.vars.palette.AppBar.darkBg,A.vars.palette[B.color].main),"--AppBar-color":B.enableColorOnDark?A.vars.palette[B.color].contrastText:Sa(A.vars.palette.AppBar.darkColor,A.vars.palette[B.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:B.color==="inherit"?"inherit":"var(--AppBar-color)"},B.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),WZ=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiAppBar"}),{className:t,color:g="primary",enableColorOnDark:n=!1,position:E="fixed"}=e,C=DA(e,XZ),o=b({},e,{color:g,position:E,enableColorOnDark:n}),i=HZ(o);return R.jsx(xZ,b({square:!0,component:"header",ownerState:o,elevation:4,className:pA(i.root,t,E==="fixed"&&"mui-fixed"),ref:Q},C))}),OZ=WZ;function jo(A){return typeof A=="string"}function Gr(A,B,Q){return A===void 0||jo(A)?B:b({},B,{ownerState:b({},B.ownerState,Q)})}const TZ={disableDefaultClasses:!1},VZ=G.createContext(TZ);function zZ(A){const{disableDefaultClasses:B}=G.useContext(VZ);return Q=>B?"":A(Q)}function HR(A,B=[]){if(A===void 0)return{};const Q={};return Object.keys(A).filter(e=>e.match(/^on[A-Z]/)&&typeof A[e]=="function"&&!B.includes(e)).forEach(e=>{Q[e]=A[e]}),Q}function jZ(A,B,Q){return typeof A=="function"?A(B,Q):A}function pf(A){if(A===void 0)return{};const B={};return Object.keys(A).filter(Q=>!(Q.match(/^on[A-Z]/)&&typeof A[Q]=="function")).forEach(Q=>{B[Q]=A[Q]}),B}function PZ(A){const{getSlotProps:B,additionalProps:Q,externalSlotProps:e,externalForwardedProps:t,className:g}=A;if(!B){const a=pA(Q==null?void 0:Q.className,g,t==null?void 0:t.className,e==null?void 0:e.className),d=b({},Q==null?void 0:Q.style,t==null?void 0:t.style,e==null?void 0:e.style),D=b({},Q,t,e);return a.length>0&&(D.className=a),Object.keys(d).length>0&&(D.style=d),{props:D,internalRef:void 0}}const n=HR(b({},t,e)),E=pf(e),C=pf(t),o=B(n),i=pA(o==null?void 0:o.className,Q==null?void 0:Q.className,g,t==null?void 0:t.className,e==null?void 0:e.className),r=b({},o==null?void 0:o.style,Q==null?void 0:Q.style,t==null?void 0:t.style,e==null?void 0:e.style),I=b({},o,Q,C,E);return i.length>0&&(I.className=i),Object.keys(r).length>0&&(I.style=r),{props:I,internalRef:o.ref}}const KZ=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function zE(A){var B;const{elementType:Q,externalSlotProps:e,ownerState:t,skipResolvingSlotProps:g=!1}=A,n=DA(A,KZ),E=g?{}:jZ(e,t),{props:C,internalRef:o}=PZ(b({},n,{externalSlotProps:E})),i=EQ(o,E==null?void 0:E.ref,(B=A.additionalProps)==null?void 0:B.ref);return Gr(Q,b({},C,{ref:i}),t)}const qZ=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function _Z(A){const B=parseInt(A.getAttribute("tabindex")||"",10);return Number.isNaN(B)?A.contentEditable==="true"||(A.nodeName==="AUDIO"||A.nodeName==="VIDEO"||A.nodeName==="DETAILS")&&A.getAttribute("tabindex")===null?0:A.tabIndex:B}function $Z(A){if(A.tagName!=="INPUT"||A.type!=="radio"||!A.name)return!1;const B=e=>A.ownerDocument.querySelector(`input[type="radio"]${e}`);let Q=B(`[name="${A.name}"]:checked`);return Q||(Q=B(`[name="${A.name}"]`)),Q!==A}function AL(A){return!(A.disabled||A.tagName==="INPUT"&&A.type==="hidden"||$Z(A))}function BL(A){const B=[],Q=[];return Array.from(A.querySelectorAll(qZ)).forEach((e,t)=>{const g=_Z(e);g===-1||!AL(e)||(g===0?B.push(e):Q.push({documentOrder:t,tabIndex:g,node:e}))}),Q.sort((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex).map(e=>e.node).concat(B)}function QL(){return!0}function eL(A){const{children:B,disableAutoFocus:Q=!1,disableEnforceFocus:e=!1,disableRestoreFocus:t=!1,getTabbable:g=BL,isEnabled:n=QL,open:E}=A,C=G.useRef(!1),o=G.useRef(null),i=G.useRef(null),r=G.useRef(null),I=G.useRef(null),a=G.useRef(!1),d=G.useRef(null),D=EQ(B.ref,d),U=G.useRef(null);G.useEffect(()=>{!E||!d.current||(a.current=!Q)},[Q,E]),G.useEffect(()=>{if(!E||!d.current)return;const c=_Q(d.current);return d.current.contains(c.activeElement)||(d.current.hasAttribute("tabIndex")||d.current.setAttribute("tabIndex","-1"),a.current&&d.current.focus()),()=>{t||(r.current&&r.current.focus&&(C.current=!0,r.current.focus()),r.current=null)}},[E]),G.useEffect(()=>{if(!E||!d.current)return;const c=_Q(d.current),w=p=>{U.current=p,!(e||!n()||p.key!=="Tab")&&c.activeElement===d.current&&p.shiftKey&&(C.current=!0,i.current&&i.current.focus())},M=()=>{const p=d.current;if(p===null)return;if(!c.hasFocus()||!n()||C.current){C.current=!1;return}if(p.contains(c.activeElement)||e&&c.activeElement!==o.current&&c.activeElement!==i.current)return;if(c.activeElement!==I.current)I.current=null;else if(I.current!==null)return;if(!a.current)return;let k=[];if((c.activeElement===o.current||c.activeElement===i.current)&&(k=g(d.current)),k.length>0){var Z,J;const W=!!((Z=U.current)!=null&&Z.shiftKey&&((J=U.current)==null?void 0:J.key)==="Tab"),T=k[0],j=k[k.length-1];typeof T!="string"&&typeof j!="string"&&(W?j.focus():T.focus())}else p.focus()};c.addEventListener("focusin",M),c.addEventListener("keydown",w,!0);const Y=setInterval(()=>{c.activeElement&&c.activeElement.tagName==="BODY"&&M()},50);return()=>{clearInterval(Y),c.removeEventListener("focusin",M),c.removeEventListener("keydown",w,!0)}},[Q,e,t,n,E,g]);const l=c=>{r.current===null&&(r.current=c.relatedTarget),a.current=!0,I.current=c.target;const w=B.props.onFocus;w&&w(c)},F=c=>{r.current===null&&(r.current=c.relatedTarget),a.current=!0};return R.jsxs(G.Fragment,{children:[R.jsx("div",{tabIndex:E?0:-1,onFocus:F,ref:o,"data-testid":"sentinelStart"}),G.cloneElement(B,{ref:D,onFocus:l}),R.jsx("div",{tabIndex:E?0:-1,onFocus:F,ref:i,"data-testid":"sentinelEnd"})]})}var se="top",at="bottom",st="right",le="left",Du="auto",WI=[se,at,st,le],Po="start",FI="end",tL="clippingParents",xR="viewport",ir="popper",gL="reference",Rf=WI.reduce(function(A,B){return A.concat([B+"-"+Po,B+"-"+FI])},[]),WR=[].concat(WI,[Du]).reduce(function(A,B){return A.concat([B,B+"-"+Po,B+"-"+FI])},[]),nL="beforeRead",EL="read",CL="afterRead",oL="beforeMain",iL="main",rL="afterMain",IL="beforeWrite",aL="write",sL="afterWrite",lL=[nL,EL,CL,oL,iL,rL,IL,aL,sL];function gg(A){return A?(A.nodeName||"").toLowerCase():null}function Se(A){if(A==null)return window;if(A.toString()!=="[object Window]"){var B=A.ownerDocument;return B&&B.defaultView||window}return A}function jE(A){var B=Se(A).Element;return A instanceof B||A instanceof Element}function Ct(A){var B=Se(A).HTMLElement;return A instanceof B||A instanceof HTMLElement}function du(A){if(typeof ShadowRoot>"u")return!1;var B=Se(A).ShadowRoot;return A instanceof B||A instanceof ShadowRoot}function cL(A){var B=A.state;Object.keys(B.elements).forEach(function(Q){var e=B.styles[Q]||{},t=B.attributes[Q]||{},g=B.elements[Q];!Ct(g)||!gg(g)||(Object.assign(g.style,e),Object.keys(t).forEach(function(n){var E=t[n];E===!1?g.removeAttribute(n):g.setAttribute(n,E===!0?"":E)}))})}function wL(A){var B=A.state,Q={popper:{position:B.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(B.elements.popper.style,Q.popper),B.styles=Q,B.elements.arrow&&Object.assign(B.elements.arrow.style,Q.arrow),function(){Object.keys(B.elements).forEach(function(e){var t=B.elements[e],g=B.attributes[e]||{},n=Object.keys(B.styles.hasOwnProperty(e)?B.styles[e]:Q[e]),E=n.reduce(function(C,o){return C[o]="",C},{});!Ct(t)||!gg(t)||(Object.assign(t.style,E),Object.keys(g).forEach(function(C){t.removeAttribute(C)}))})}}const FL={name:"applyStyles",enabled:!0,phase:"write",fn:cL,effect:wL,requires:["computeStyles"]};function tg(A){return A.split("-")[0]}var ZE=Math.max,qs=Math.min,Ko=Math.round;function cD(){var A=navigator.userAgentData;return A!=null&&A.brands&&Array.isArray(A.brands)?A.brands.map(function(B){return B.brand+"/"+B.version}).join(" "):navigator.userAgent}function OR(){return!/^((?!chrome|android).)*safari/i.test(cD())}function qo(A,B,Q){B===void 0&&(B=!1),Q===void 0&&(Q=!1);var e=A.getBoundingClientRect(),t=1,g=1;B&&Ct(A)&&(t=A.offsetWidth>0&&Ko(e.width)/A.offsetWidth||1,g=A.offsetHeight>0&&Ko(e.height)/A.offsetHeight||1);var n=jE(A)?Se(A):window,E=n.visualViewport,C=!OR()&&Q,o=(e.left+(C&&E?E.offsetLeft:0))/t,i=(e.top+(C&&E?E.offsetTop:0))/g,r=e.width/t,I=e.height/g;return{width:r,height:I,top:i,right:o+r,bottom:i+I,left:o,x:o,y:i}}function uu(A){var B=qo(A),Q=A.offsetWidth,e=A.offsetHeight;return Math.abs(B.width-Q)<=1&&(Q=B.width),Math.abs(B.height-e)<=1&&(e=B.height),{x:A.offsetLeft,y:A.offsetTop,width:Q,height:e}}function TR(A,B){var Q=B.getRootNode&&B.getRootNode();if(A.contains(B))return!0;if(Q&&du(Q)){var e=B;do{if(e&&A.isSameNode(e))return!0;e=e.parentNode||e.host}while(e)}return!1}function Wg(A){return Se(A).getComputedStyle(A)}function DL(A){return["table","td","th"].indexOf(gg(A))>=0}function BE(A){return((jE(A)?A.ownerDocument:A.document)||window.document).documentElement}function ac(A){return gg(A)==="html"?A:A.assignedSlot||A.parentNode||(du(A)?A.host:null)||BE(A)}function mf(A){return!Ct(A)||Wg(A).position==="fixed"?null:A.offsetParent}function dL(A){var B=/firefox/i.test(cD()),Q=/Trident/i.test(cD());if(Q&&Ct(A)){var e=Wg(A);if(e.position==="fixed")return null}var t=ac(A);for(du(t)&&(t=t.host);Ct(t)&&["html","body"].indexOf(gg(t))<0;){var g=Wg(t);if(g.transform!=="none"||g.perspective!=="none"||g.contain==="paint"||["transform","perspective"].indexOf(g.willChange)!==-1||B&&g.willChange==="filter"||B&&g.filter&&g.filter!=="none")return t;t=t.parentNode}return null}function OI(A){for(var B=Se(A),Q=mf(A);Q&&DL(Q)&&Wg(Q).position==="static";)Q=mf(Q);return Q&&(gg(Q)==="html"||gg(Q)==="body"&&Wg(Q).position==="static")?B:Q||dL(A)||B}function Uu(A){return["top","bottom"].indexOf(A)>=0?"x":"y"}function Xr(A,B,Q){return ZE(A,qs(B,Q))}function uL(A,B,Q){var e=Xr(A,B,Q);return e>Q?Q:e}function VR(){return{top:0,right:0,bottom:0,left:0}}function zR(A){return Object.assign({},VR(),A)}function jR(A,B){return B.reduce(function(Q,e){return Q[e]=A,Q},{})}var UL=function(B,Q){return B=typeof B=="function"?B(Object.assign({},Q.rects,{placement:Q.placement})):B,zR(typeof B!="number"?B:jR(B,WI))};function fL(A){var B,Q=A.state,e=A.name,t=A.options,g=Q.elements.arrow,n=Q.modifiersData.popperOffsets,E=tg(Q.placement),C=Uu(E),o=[le,st].indexOf(E)>=0,i=o?"height":"width";if(!(!g||!n)){var r=UL(t.padding,Q),I=uu(g),a=C==="y"?se:le,d=C==="y"?at:st,D=Q.rects.reference[i]+Q.rects.reference[C]-n[C]-Q.rects.popper[i],U=n[C]-Q.rects.reference[C],l=OI(g),F=l?C==="y"?l.clientHeight||0:l.clientWidth||0:0,c=D/2-U/2,w=r[a],M=F-I[i]-r[d],Y=F/2-I[i]/2+c,p=Xr(w,Y,M),k=C;Q.modifiersData[e]=(B={},B[k]=p,B.centerOffset=p-Y,B)}}function ML(A){var B=A.state,Q=A.options,e=Q.element,t=e===void 0?"[data-popper-arrow]":e;t!=null&&(typeof t=="string"&&(t=B.elements.popper.querySelector(t),!t)||TR(B.elements.popper,t)&&(B.elements.arrow=t))}const GL={name:"arrow",enabled:!0,phase:"main",fn:fL,effect:ML,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function _o(A){return A.split("-")[1]}var hL={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pL(A,B){var Q=A.x,e=A.y,t=B.devicePixelRatio||1;return{x:Ko(Q*t)/t||0,y:Ko(e*t)/t||0}}function Yf(A){var B,Q=A.popper,e=A.popperRect,t=A.placement,g=A.variation,n=A.offsets,E=A.position,C=A.gpuAcceleration,o=A.adaptive,i=A.roundOffsets,r=A.isFixed,I=n.x,a=I===void 0?0:I,d=n.y,D=d===void 0?0:d,U=typeof i=="function"?i({x:a,y:D}):{x:a,y:D};a=U.x,D=U.y;var l=n.hasOwnProperty("x"),F=n.hasOwnProperty("y"),c=le,w=se,M=window;if(o){var Y=OI(Q),p="clientHeight",k="clientWidth";if(Y===Se(Q)&&(Y=BE(Q),Wg(Y).position!=="static"&&E==="absolute"&&(p="scrollHeight",k="scrollWidth")),Y=Y,t===se||(t===le||t===st)&&g===FI){w=at;var Z=r&&Y===M&&M.visualViewport?M.visualViewport.height:Y[p];D-=Z-e.height,D*=C?1:-1}if(t===le||(t===se||t===at)&&g===FI){c=st;var J=r&&Y===M&&M.visualViewport?M.visualViewport.width:Y[k];a-=J-e.width,a*=C?1:-1}}var W=Object.assign({position:E},o&&hL),T=i===!0?pL({x:a,y:D},Se(Q)):{x:a,y:D};if(a=T.x,D=T.y,C){var j;return Object.assign({},W,(j={},j[w]=F?"0":"",j[c]=l?"0":"",j.transform=(M.devicePixelRatio||1)<=1?"translate("+a+"px, "+D+"px)":"translate3d("+a+"px, "+D+"px, 0)",j))}return Object.assign({},W,(B={},B[w]=F?D+"px":"",B[c]=l?a+"px":"",B.transform="",B))}function RL(A){var B=A.state,Q=A.options,e=Q.gpuAcceleration,t=e===void 0?!0:e,g=Q.adaptive,n=g===void 0?!0:g,E=Q.roundOffsets,C=E===void 0?!0:E,o={placement:tg(B.placement),variation:_o(B.placement),popper:B.elements.popper,popperRect:B.rects.popper,gpuAcceleration:t,isFixed:B.options.strategy==="fixed"};B.modifiersData.popperOffsets!=null&&(B.styles.popper=Object.assign({},B.styles.popper,Yf(Object.assign({},o,{offsets:B.modifiersData.popperOffsets,position:B.options.strategy,adaptive:n,roundOffsets:C})))),B.modifiersData.arrow!=null&&(B.styles.arrow=Object.assign({},B.styles.arrow,Yf(Object.assign({},o,{offsets:B.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:C})))),B.attributes.popper=Object.assign({},B.attributes.popper,{"data-popper-placement":B.placement})}const mL={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:RL,data:{}};var Xa={passive:!0};function YL(A){var B=A.state,Q=A.instance,e=A.options,t=e.scroll,g=t===void 0?!0:t,n=e.resize,E=n===void 0?!0:n,C=Se(B.elements.popper),o=[].concat(B.scrollParents.reference,B.scrollParents.popper);return g&&o.forEach(function(i){i.addEventListener("scroll",Q.update,Xa)}),E&&C.addEventListener("resize",Q.update,Xa),function(){g&&o.forEach(function(i){i.removeEventListener("scroll",Q.update,Xa)}),E&&C.removeEventListener("resize",Q.update,Xa)}}const NL={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:YL,data:{}};var bL={left:"right",right:"left",bottom:"top",top:"bottom"};function ss(A){return A.replace(/left|right|bottom|top/g,function(B){return bL[B]})}var yL={start:"end",end:"start"};function Nf(A){return A.replace(/start|end/g,function(B){return yL[B]})}function fu(A){var B=Se(A),Q=B.pageXOffset,e=B.pageYOffset;return{scrollLeft:Q,scrollTop:e}}function Mu(A){return qo(BE(A)).left+fu(A).scrollLeft}function kL(A,B){var Q=Se(A),e=BE(A),t=Q.visualViewport,g=e.clientWidth,n=e.clientHeight,E=0,C=0;if(t){g=t.width,n=t.height;var o=OR();(o||!o&&B==="fixed")&&(E=t.offsetLeft,C=t.offsetTop)}return{width:g,height:n,x:E+Mu(A),y:C}}function JL(A){var B,Q=BE(A),e=fu(A),t=(B=A.ownerDocument)==null?void 0:B.body,g=ZE(Q.scrollWidth,Q.clientWidth,t?t.scrollWidth:0,t?t.clientWidth:0),n=ZE(Q.scrollHeight,Q.clientHeight,t?t.scrollHeight:0,t?t.clientHeight:0),E=-e.scrollLeft+Mu(A),C=-e.scrollTop;return Wg(t||Q).direction==="rtl"&&(E+=ZE(Q.clientWidth,t?t.clientWidth:0)-g),{width:g,height:n,x:E,y:C}}function Gu(A){var B=Wg(A),Q=B.overflow,e=B.overflowX,t=B.overflowY;return/auto|scroll|overlay|hidden/.test(Q+t+e)}function PR(A){return["html","body","#document"].indexOf(gg(A))>=0?A.ownerDocument.body:Ct(A)&&Gu(A)?A:PR(ac(A))}function Hr(A,B){var Q;B===void 0&&(B=[]);var e=PR(A),t=e===((Q=A.ownerDocument)==null?void 0:Q.body),g=Se(e),n=t?[g].concat(g.visualViewport||[],Gu(e)?e:[]):e,E=B.concat(n);return t?E:E.concat(Hr(ac(n)))}function wD(A){return Object.assign({},A,{left:A.x,top:A.y,right:A.x+A.width,bottom:A.y+A.height})}function vL(A,B){var Q=qo(A,!1,B==="fixed");return Q.top=Q.top+A.clientTop,Q.left=Q.left+A.clientLeft,Q.bottom=Q.top+A.clientHeight,Q.right=Q.left+A.clientWidth,Q.width=A.clientWidth,Q.height=A.clientHeight,Q.x=Q.left,Q.y=Q.top,Q}function bf(A,B,Q){return B===xR?wD(kL(A,Q)):jE(B)?vL(B,Q):wD(JL(BE(A)))}function ZL(A){var B=Hr(ac(A)),Q=["absolute","fixed"].indexOf(Wg(A).position)>=0,e=Q&&Ct(A)?OI(A):A;return jE(e)?B.filter(function(t){return jE(t)&&TR(t,e)&&gg(t)!=="body"}):[]}function LL(A,B,Q,e){var t=B==="clippingParents"?ZL(A):[].concat(B),g=[].concat(t,[Q]),n=g[0],E=g.reduce(function(C,o){var i=bf(A,o,e);return C.top=ZE(i.top,C.top),C.right=qs(i.right,C.right),C.bottom=qs(i.bottom,C.bottom),C.left=ZE(i.left,C.left),C},bf(A,n,e));return E.width=E.right-E.left,E.height=E.bottom-E.top,E.x=E.left,E.y=E.top,E}function KR(A){var B=A.reference,Q=A.element,e=A.placement,t=e?tg(e):null,g=e?_o(e):null,n=B.x+B.width/2-Q.width/2,E=B.y+B.height/2-Q.height/2,C;switch(t){case se:C={x:n,y:B.y-Q.height};break;case at:C={x:n,y:B.y+B.height};break;case st:C={x:B.x+B.width,y:E};break;case le:C={x:B.x-Q.width,y:E};break;default:C={x:B.x,y:B.y}}var o=t?Uu(t):null;if(o!=null){var i=o==="y"?"height":"width";switch(g){case Po:C[o]=C[o]-(B[i]/2-Q[i]/2);break;case FI:C[o]=C[o]+(B[i]/2-Q[i]/2);break}}return C}function DI(A,B){B===void 0&&(B={});var Q=B,e=Q.placement,t=e===void 0?A.placement:e,g=Q.strategy,n=g===void 0?A.strategy:g,E=Q.boundary,C=E===void 0?tL:E,o=Q.rootBoundary,i=o===void 0?xR:o,r=Q.elementContext,I=r===void 0?ir:r,a=Q.altBoundary,d=a===void 0?!1:a,D=Q.padding,U=D===void 0?0:D,l=zR(typeof U!="number"?U:jR(U,WI)),F=I===ir?gL:ir,c=A.rects.popper,w=A.elements[d?F:I],M=LL(jE(w)?w:w.contextElement||BE(A.elements.popper),C,i,n),Y=qo(A.elements.reference),p=KR({reference:Y,element:c,strategy:"absolute",placement:t}),k=wD(Object.assign({},c,p)),Z=I===ir?k:Y,J={top:M.top-Z.top+l.top,bottom:Z.bottom-M.bottom+l.bottom,left:M.left-Z.left+l.left,right:Z.right-M.right+l.right},W=A.modifiersData.offset;if(I===ir&&W){var T=W[t];Object.keys(J).forEach(function(j){var P=[st,at].indexOf(j)>=0?1:-1,_=[se,at].indexOf(j)>=0?"y":"x";J[j]+=T[_]*P})}return J}function SL(A,B){B===void 0&&(B={});var Q=B,e=Q.placement,t=Q.boundary,g=Q.rootBoundary,n=Q.padding,E=Q.flipVariations,C=Q.allowedAutoPlacements,o=C===void 0?WR:C,i=_o(e),r=i?E?Rf:Rf.filter(function(d){return _o(d)===i}):WI,I=r.filter(function(d){return o.indexOf(d)>=0});I.length===0&&(I=r);var a=I.reduce(function(d,D){return d[D]=DI(A,{placement:D,boundary:t,rootBoundary:g,padding:n})[tg(D)],d},{});return Object.keys(a).sort(function(d,D){return a[d]-a[D]})}function XL(A){if(tg(A)===Du)return[];var B=ss(A);return[Nf(A),B,Nf(B)]}function HL(A){var B=A.state,Q=A.options,e=A.name;if(!B.modifiersData[e]._skip){for(var t=Q.mainAxis,g=t===void 0?!0:t,n=Q.altAxis,E=n===void 0?!0:n,C=Q.fallbackPlacements,o=Q.padding,i=Q.boundary,r=Q.rootBoundary,I=Q.altBoundary,a=Q.flipVariations,d=a===void 0?!0:a,D=Q.allowedAutoPlacements,U=B.options.placement,l=tg(U),F=l===U,c=C||(F||!d?[ss(U)]:XL(U)),w=[U].concat(c).reduce(function(MA,SA){return MA.concat(tg(SA)===Du?SL(B,{placement:SA,boundary:i,rootBoundary:r,padding:o,flipVariations:d,allowedAutoPlacements:D}):SA)},[]),M=B.rects.reference,Y=B.rects.popper,p=new Map,k=!0,Z=w[0],J=0;J<w.length;J++){var W=w[J],T=tg(W),j=_o(W)===Po,P=[se,at].indexOf(T)>=0,_=P?"width":"height",$=DI(B,{placement:W,boundary:i,rootBoundary:r,altBoundary:I,padding:o}),QA=P?j?st:le:j?at:se;M[_]>Y[_]&&(QA=ss(QA));var H=ss(QA),K=[];if(g&&K.push($[T]<=0),E&&K.push($[QA]<=0,$[H]<=0),K.every(function(MA){return MA})){Z=W,k=!1;break}p.set(W,K)}if(k)for(var BA=d?3:1,dA=function(SA){var eA=w.find(function(tA){var eB=p.get(tA);if(eB)return eB.slice(0,SA).every(function(_A){return _A})});if(eA)return Z=eA,"break"},rA=BA;rA>0;rA--){var JA=dA(rA);if(JA==="break")break}B.placement!==Z&&(B.modifiersData[e]._skip=!0,B.placement=Z,B.reset=!0)}}const xL={name:"flip",enabled:!0,phase:"main",fn:HL,requiresIfExists:["offset"],data:{_skip:!1}};function yf(A,B,Q){return Q===void 0&&(Q={x:0,y:0}),{top:A.top-B.height-Q.y,right:A.right-B.width+Q.x,bottom:A.bottom-B.height+Q.y,left:A.left-B.width-Q.x}}function kf(A){return[se,st,at,le].some(function(B){return A[B]>=0})}function WL(A){var B=A.state,Q=A.name,e=B.rects.reference,t=B.rects.popper,g=B.modifiersData.preventOverflow,n=DI(B,{elementContext:"reference"}),E=DI(B,{altBoundary:!0}),C=yf(n,e),o=yf(E,t,g),i=kf(C),r=kf(o);B.modifiersData[Q]={referenceClippingOffsets:C,popperEscapeOffsets:o,isReferenceHidden:i,hasPopperEscaped:r},B.attributes.popper=Object.assign({},B.attributes.popper,{"data-popper-reference-hidden":i,"data-popper-escaped":r})}const OL={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:WL};function TL(A,B,Q){var e=tg(A),t=[le,se].indexOf(e)>=0?-1:1,g=typeof Q=="function"?Q(Object.assign({},B,{placement:A})):Q,n=g[0],E=g[1];return n=n||0,E=(E||0)*t,[le,st].indexOf(e)>=0?{x:E,y:n}:{x:n,y:E}}function VL(A){var B=A.state,Q=A.options,e=A.name,t=Q.offset,g=t===void 0?[0,0]:t,n=WR.reduce(function(i,r){return i[r]=TL(r,B.rects,g),i},{}),E=n[B.placement],C=E.x,o=E.y;B.modifiersData.popperOffsets!=null&&(B.modifiersData.popperOffsets.x+=C,B.modifiersData.popperOffsets.y+=o),B.modifiersData[e]=n}const zL={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:VL};function jL(A){var B=A.state,Q=A.name;B.modifiersData[Q]=KR({reference:B.rects.reference,element:B.rects.popper,strategy:"absolute",placement:B.placement})}const PL={name:"popperOffsets",enabled:!0,phase:"read",fn:jL,data:{}};function KL(A){return A==="x"?"y":"x"}function qL(A){var B=A.state,Q=A.options,e=A.name,t=Q.mainAxis,g=t===void 0?!0:t,n=Q.altAxis,E=n===void 0?!1:n,C=Q.boundary,o=Q.rootBoundary,i=Q.altBoundary,r=Q.padding,I=Q.tether,a=I===void 0?!0:I,d=Q.tetherOffset,D=d===void 0?0:d,U=DI(B,{boundary:C,rootBoundary:o,padding:r,altBoundary:i}),l=tg(B.placement),F=_o(B.placement),c=!F,w=Uu(l),M=KL(w),Y=B.modifiersData.popperOffsets,p=B.rects.reference,k=B.rects.popper,Z=typeof D=="function"?D(Object.assign({},B.rects,{placement:B.placement})):D,J=typeof Z=="number"?{mainAxis:Z,altAxis:Z}:Object.assign({mainAxis:0,altAxis:0},Z),W=B.modifiersData.offset?B.modifiersData.offset[B.placement]:null,T={x:0,y:0};if(Y){if(g){var j,P=w==="y"?se:le,_=w==="y"?at:st,$=w==="y"?"height":"width",QA=Y[w],H=QA+U[P],K=QA-U[_],BA=a?-k[$]/2:0,dA=F===Po?p[$]:k[$],rA=F===Po?-k[$]:-p[$],JA=B.elements.arrow,MA=a&&JA?uu(JA):{width:0,height:0},SA=B.modifiersData["arrow#persistent"]?B.modifiersData["arrow#persistent"].padding:VR(),eA=SA[P],tA=SA[_],eB=Xr(0,p[$],MA[$]),_A=c?p[$]/2-BA-eB-eA-J.mainAxis:dA-eB-eA-J.mainAxis,EB=c?-p[$]/2+BA+eB+tA+J.mainAxis:rA+eB+tA+J.mainAxis,XA=B.elements.arrow&&OI(B.elements.arrow),oB=XA?w==="y"?XA.clientTop||0:XA.clientLeft||0:0,ZA=(j=W==null?void 0:W[w])!=null?j:0,LA=QA+_A-ZA-oB,UA=QA+EB-ZA,tB=Xr(a?qs(H,LA):H,QA,a?ZE(K,UA):K);Y[w]=tB,T[w]=tB-QA}if(E){var OA,cA=w==="x"?se:le,hB=w==="x"?at:st,iB=Y[M],gA=M==="y"?"height":"width",yA=iB+U[cA],VA=iB-U[hB],HA=[se,le].indexOf(l)!==-1,cB=(OA=W==null?void 0:W[M])!=null?OA:0,qB=HA?yA:iB-p[gA]-k[gA]-cB+J.altAxis,RQ=HA?iB+p[gA]+k[gA]-cB-J.altAxis:VA,QB=a&&HA?uL(qB,iB,RQ):Xr(a?qB:yA,iB,a?RQ:VA);Y[M]=QB,T[M]=QB-iB}B.modifiersData[e]=T}}const _L={name:"preventOverflow",enabled:!0,phase:"main",fn:qL,requiresIfExists:["offset"]};function $L(A){return{scrollLeft:A.scrollLeft,scrollTop:A.scrollTop}}function AS(A){return A===Se(A)||!Ct(A)?fu(A):$L(A)}function BS(A){var B=A.getBoundingClientRect(),Q=Ko(B.width)/A.offsetWidth||1,e=Ko(B.height)/A.offsetHeight||1;return Q!==1||e!==1}function QS(A,B,Q){Q===void 0&&(Q=!1);var e=Ct(B),t=Ct(B)&&BS(B),g=BE(B),n=qo(A,t,Q),E={scrollLeft:0,scrollTop:0},C={x:0,y:0};return(e||!e&&!Q)&&((gg(B)!=="body"||Gu(g))&&(E=AS(B)),Ct(B)?(C=qo(B,!0),C.x+=B.clientLeft,C.y+=B.clientTop):g&&(C.x=Mu(g))),{x:n.left+E.scrollLeft-C.x,y:n.top+E.scrollTop-C.y,width:n.width,height:n.height}}function eS(A){var B=new Map,Q=new Set,e=[];A.forEach(function(g){B.set(g.name,g)});function t(g){Q.add(g.name);var n=[].concat(g.requires||[],g.requiresIfExists||[]);n.forEach(function(E){if(!Q.has(E)){var C=B.get(E);C&&t(C)}}),e.push(g)}return A.forEach(function(g){Q.has(g.name)||t(g)}),e}function tS(A){var B=eS(A);return lL.reduce(function(Q,e){return Q.concat(B.filter(function(t){return t.phase===e}))},[])}function gS(A){var B;return function(){return B||(B=new Promise(function(Q){Promise.resolve().then(function(){B=void 0,Q(A())})})),B}}function nS(A){var B=A.reduce(function(Q,e){var t=Q[e.name];return Q[e.name]=t?Object.assign({},t,e,{options:Object.assign({},t.options,e.options),data:Object.assign({},t.data,e.data)}):e,Q},{});return Object.keys(B).map(function(Q){return B[Q]})}var Jf={placement:"bottom",modifiers:[],strategy:"absolute"};function vf(){for(var A=arguments.length,B=new Array(A),Q=0;Q<A;Q++)B[Q]=arguments[Q];return!B.some(function(e){return!(e&&typeof e.getBoundingClientRect=="function")})}function ES(A){A===void 0&&(A={});var B=A,Q=B.defaultModifiers,e=Q===void 0?[]:Q,t=B.defaultOptions,g=t===void 0?Jf:t;return function(E,C,o){o===void 0&&(o=g);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},Jf,g),modifiersData:{},elements:{reference:E,popper:C},attributes:{},styles:{}},r=[],I=!1,a={state:i,setOptions:function(l){var F=typeof l=="function"?l(i.options):l;D(),i.options=Object.assign({},g,i.options,F),i.scrollParents={reference:jE(E)?Hr(E):E.contextElement?Hr(E.contextElement):[],popper:Hr(C)};var c=tS(nS([].concat(e,i.options.modifiers)));return i.orderedModifiers=c.filter(function(w){return w.enabled}),d(),a.update()},forceUpdate:function(){if(!I){var l=i.elements,F=l.reference,c=l.popper;if(vf(F,c)){i.rects={reference:QS(F,OI(c),i.options.strategy==="fixed"),popper:uu(c)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(J){return i.modifiersData[J.name]=Object.assign({},J.data)});for(var w=0;w<i.orderedModifiers.length;w++){if(i.reset===!0){i.reset=!1,w=-1;continue}var M=i.orderedModifiers[w],Y=M.fn,p=M.options,k=p===void 0?{}:p,Z=M.name;typeof Y=="function"&&(i=Y({state:i,options:k,name:Z,instance:a})||i)}}}},update:gS(function(){return new Promise(function(U){a.forceUpdate(),U(i)})}),destroy:function(){D(),I=!0}};if(!vf(E,C))return a;a.setOptions(o).then(function(U){!I&&o.onFirstUpdate&&o.onFirstUpdate(U)});function d(){i.orderedModifiers.forEach(function(U){var l=U.name,F=U.options,c=F===void 0?{}:F,w=U.effect;if(typeof w=="function"){var M=w({state:i,name:l,instance:a,options:c}),Y=function(){};r.push(M||Y)}})}function D(){r.forEach(function(U){return U()}),r=[]}return a}}var CS=[NL,PL,mL,FL,zL,xL,_L,GL,OL],oS=ES({defaultModifiers:CS});function iS(A){return typeof A=="function"?A():A}const qR=G.forwardRef(function(B,Q){const{children:e,container:t,disablePortal:g=!1}=B,[n,E]=G.useState(null),C=EQ(G.isValidElement(e)?e.ref:null,Q);if(vt(()=>{g||E(iS(t)||document.body)},[t,g]),vt(()=>{if(n&&!g)return ED(Q,n),()=>{ED(Q,null)}},[Q,n,g]),g){if(G.isValidElement(e)){const o={ref:C};return G.cloneElement(e,o)}return R.jsx(G.Fragment,{children:e})}return R.jsx(G.Fragment,{children:n&&Ml.createPortal(e,n)})});function rS(A){return zA("MuiPopper",A)}TA("MuiPopper",["root"]);const IS=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],aS=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function sS(A,B){if(B==="ltr")return A;switch(A){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return A}}function FD(A){return typeof A=="function"?A():A}function lS(A){return A.nodeType!==void 0}const cS=()=>qA({root:["root"]},zZ(rS)),wS={},FS=G.forwardRef(function(B,Q){var e;const{anchorEl:t,children:g,direction:n,disablePortal:E,modifiers:C,open:o,placement:i,popperOptions:r,popperRef:I,slotProps:a={},slots:d={},TransitionProps:D}=B,U=DA(B,IS),l=G.useRef(null),F=EQ(l,Q),c=G.useRef(null),w=EQ(c,I),M=G.useRef(w);vt(()=>{M.current=w},[w]),G.useImperativeHandle(I,()=>c.current,[]);const Y=sS(i,n),[p,k]=G.useState(Y),[Z,J]=G.useState(FD(t));G.useEffect(()=>{c.current&&c.current.forceUpdate()}),G.useEffect(()=>{t&&J(FD(t))},[t]),vt(()=>{if(!Z||!o)return;const _=H=>{k(H.placement)};let $=[{name:"preventOverflow",options:{altBoundary:E}},{name:"flip",options:{altBoundary:E}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:H})=>{_(H)}}];C!=null&&($=$.concat(C)),r&&r.modifiers!=null&&($=$.concat(r.modifiers));const QA=oS(Z,l.current,b({placement:Y},r,{modifiers:$}));return M.current(QA),()=>{QA.destroy(),M.current(null)}},[Z,E,C,o,r,Y]);const W={placement:p};D!==null&&(W.TransitionProps=D);const T=cS(),j=(e=d.root)!=null?e:"div",P=zE({elementType:j,externalSlotProps:a.root,externalForwardedProps:U,additionalProps:{role:"tooltip",ref:F},ownerState:B,className:T.root});return R.jsx(j,b({},P,{children:typeof g=="function"?g(W):g}))}),DS=G.forwardRef(function(B,Q){const{anchorEl:e,children:t,container:g,direction:n="ltr",disablePortal:E=!1,keepMounted:C=!1,modifiers:o,open:i,placement:r="bottom",popperOptions:I=wS,popperRef:a,style:d,transition:D=!1,slotProps:U={},slots:l={}}=B,F=DA(B,aS),[c,w]=G.useState(!0),M=()=>{w(!1)},Y=()=>{w(!0)};if(!C&&!i&&(!D||c))return null;let p;if(g)p=g;else if(e){const J=FD(e);p=J&&lS(J)?_Q(J).body:_Q(null).body}const k=!i&&C&&(!D||c)?"none":void 0,Z=D?{in:i,onEnter:M,onExited:Y}:void 0;return R.jsx(qR,{disablePortal:E,container:p,children:R.jsx(FS,b({anchorEl:e,direction:n,disablePortal:E,modifiers:o,ref:Q,open:D?!c:i,placement:r,popperOptions:I,popperRef:a,slotProps:U,slots:l},F,{style:b({position:"fixed",top:0,left:0,display:k},d),TransitionProps:Z,children:t}))})});function dS(A){const B=_Q(A);return B.body===A?xg(A).innerWidth>B.documentElement.clientWidth:A.scrollHeight>A.clientHeight}function xr(A,B){B?A.setAttribute("aria-hidden","true"):A.removeAttribute("aria-hidden")}function Zf(A){return parseInt(xg(A).getComputedStyle(A).paddingRight,10)||0}function uS(A){const Q=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(A.tagName)!==-1,e=A.tagName==="INPUT"&&A.getAttribute("type")==="hidden";return Q||e}function Lf(A,B,Q,e,t){const g=[B,Q,...e];[].forEach.call(A.children,n=>{const E=g.indexOf(n)===-1,C=!uS(n);E&&C&&xr(n,t)})}function Mw(A,B){let Q=-1;return A.some((e,t)=>B(e)?(Q=t,!0):!1),Q}function US(A,B){const Q=[],e=A.container;if(!B.disableScrollLock){if(dS(e)){const n=oR(_Q(e));Q.push({value:e.style.paddingRight,property:"padding-right",el:e}),e.style.paddingRight=`${Zf(e)+n}px`;const E=_Q(e).querySelectorAll(".mui-fixed");[].forEach.call(E,C=>{Q.push({value:C.style.paddingRight,property:"padding-right",el:C}),C.style.paddingRight=`${Zf(C)+n}px`})}let g;if(e.parentNode instanceof DocumentFragment)g=_Q(e).body;else{const n=e.parentElement,E=xg(e);g=(n==null?void 0:n.nodeName)==="HTML"&&E.getComputedStyle(n).overflowY==="scroll"?n:e}Q.push({value:g.style.overflow,property:"overflow",el:g},{value:g.style.overflowX,property:"overflow-x",el:g},{value:g.style.overflowY,property:"overflow-y",el:g}),g.style.overflow="hidden"}return()=>{Q.forEach(({value:g,el:n,property:E})=>{g?n.style.setProperty(E,g):n.style.removeProperty(E)})}}function fS(A){const B=[];return[].forEach.call(A.children,Q=>{Q.getAttribute("aria-hidden")==="true"&&B.push(Q)}),B}class MS{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(B,Q){let e=this.modals.indexOf(B);if(e!==-1)return e;e=this.modals.length,this.modals.push(B),B.modalRef&&xr(B.modalRef,!1);const t=fS(Q);Lf(Q,B.mount,B.modalRef,t,!0);const g=Mw(this.containers,n=>n.container===Q);return g!==-1?(this.containers[g].modals.push(B),e):(this.containers.push({modals:[B],container:Q,restore:null,hiddenSiblings:t}),e)}mount(B,Q){const e=Mw(this.containers,g=>g.modals.indexOf(B)!==-1),t=this.containers[e];t.restore||(t.restore=US(t,Q))}remove(B,Q=!0){const e=this.modals.indexOf(B);if(e===-1)return e;const t=Mw(this.containers,n=>n.modals.indexOf(B)!==-1),g=this.containers[t];if(g.modals.splice(g.modals.indexOf(B),1),this.modals.splice(e,1),g.modals.length===0)g.restore&&g.restore(),B.modalRef&&xr(B.modalRef,Q),Lf(g.container,B.mount,B.modalRef,g.hiddenSiblings,!1),this.containers.splice(t,1);else{const n=g.modals[g.modals.length-1];n.modalRef&&xr(n.modalRef,!1)}return e}isTopModal(B){return this.modals.length>0&&this.modals[this.modals.length-1]===B}}function GS(A){return typeof A=="function"?A():A}function hS(A){return A?A.props.hasOwnProperty("in"):!1}const pS=new MS;function RS(A){const{container:B,disableEscapeKeyDown:Q=!1,disableScrollLock:e=!1,manager:t=pS,closeAfterTransition:g=!1,onTransitionEnter:n,onTransitionExited:E,children:C,onClose:o,open:i,rootRef:r}=A,I=G.useRef({}),a=G.useRef(null),d=G.useRef(null),D=EQ(d,r),[U,l]=G.useState(!i),F=hS(C);let c=!0;(A["aria-hidden"]==="false"||A["aria-hidden"]===!1)&&(c=!1);const w=()=>_Q(a.current),M=()=>(I.current.modalRef=d.current,I.current.mount=a.current,I.current),Y=()=>{t.mount(M(),{disableScrollLock:e}),d.current&&(d.current.scrollTop=0)},p=bE(()=>{const $=GS(B)||w().body;t.add(M(),$),d.current&&Y()}),k=G.useCallback(()=>t.isTopModal(M()),[t]),Z=bE($=>{a.current=$,$&&(i&&k()?Y():d.current&&xr(d.current,c))}),J=G.useCallback(()=>{t.remove(M(),c)},[c,t]);G.useEffect(()=>()=>{J()},[J]),G.useEffect(()=>{i?p():(!F||!g)&&J()},[i,J,F,g,p]);const W=$=>QA=>{var H;(H=$.onKeyDown)==null||H.call($,QA),!(QA.key!=="Escape"||QA.which===229||!k())&&(Q||(QA.stopPropagation(),o&&o(QA,"escapeKeyDown")))},T=$=>QA=>{var H;(H=$.onClick)==null||H.call($,QA),QA.target===QA.currentTarget&&o&&o(QA,"backdropClick")};return{getRootProps:($={})=>{const QA=HR(A);delete QA.onTransitionEnter,delete QA.onTransitionExited;const H=b({},QA,$);return b({role:"presentation"},H,{onKeyDown:W(H),ref:D})},getBackdropProps:($={})=>{const QA=$;return b({"aria-hidden":!0},QA,{onClick:T(QA),open:i})},getTransitionProps:()=>{const $=()=>{l(!1),n&&n()},QA=()=>{l(!0),E&&E(),g&&J()};return{onEnter:TU($,C==null?void 0:C.props.onEnter),onExited:TU(QA,C==null?void 0:C.props.onExited)}},rootRef:D,portalRef:Z,isTopModal:k,exited:U,hasTransition:F}}const mS=["onChange","maxRows","minRows","style","value"];function Ha(A){return parseInt(A,10)||0}const YS={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function Sf(A){return A==null||Object.keys(A).length===0||A.outerHeightStyle===0&&!A.overflow}const NS=G.forwardRef(function(B,Q){const{onChange:e,maxRows:t,minRows:g=1,style:n,value:E}=B,C=DA(B,mS),{current:o}=G.useRef(E!=null),i=G.useRef(null),r=EQ(Q,i),I=G.useRef(null),a=G.useRef(0),[d,D]=G.useState({outerHeightStyle:0}),U=G.useCallback(()=>{const w=i.current,Y=xg(w).getComputedStyle(w);if(Y.width==="0px")return{outerHeightStyle:0};const p=I.current;p.style.width=Y.width,p.value=w.value||B.placeholder||"x",p.value.slice(-1)===`
`&&(p.value+=" ");const k=Y.boxSizing,Z=Ha(Y.paddingBottom)+Ha(Y.paddingTop),J=Ha(Y.borderBottomWidth)+Ha(Y.borderTopWidth),W=p.scrollHeight;p.value="x";const T=p.scrollHeight;let j=W;g&&(j=Math.max(Number(g)*T,j)),t&&(j=Math.min(Number(t)*T,j)),j=Math.max(j,T);const P=j+(k==="border-box"?Z+J:0),_=Math.abs(j-W)<=1;return{outerHeightStyle:P,overflow:_}},[t,g,B.placeholder]),l=(w,M)=>{const{outerHeightStyle:Y,overflow:p}=M;return a.current<20&&(Y>0&&Math.abs((w.outerHeightStyle||0)-Y)>1||w.overflow!==p)?(a.current+=1,{overflow:p,outerHeightStyle:Y}):w},F=G.useCallback(()=>{const w=U();Sf(w)||D(M=>l(M,w))},[U]);vt(()=>{const w=()=>{const W=U();Sf(W)||Ml.flushSync(()=>{D(T=>l(T,W))})},M=()=>{a.current=0,w()};let Y;const p=Td(M),k=i.current,Z=xg(k);Z.addEventListener("resize",p);let J;return typeof ResizeObserver<"u"&&(J=new ResizeObserver(M),J.observe(k)),()=>{p.clear(),cancelAnimationFrame(Y),Z.removeEventListener("resize",p),J&&J.disconnect()}},[U]),vt(()=>{F()}),G.useEffect(()=>{a.current=0},[E]);const c=w=>{a.current=0,o||F(),e&&e(w)};return R.jsxs(G.Fragment,{children:[R.jsx("textarea",b({value:E,onChange:c,ref:r,rows:g,style:b({height:d.outerHeightStyle,overflow:d.overflow?"hidden":void 0},n)},C)),R.jsx("textarea",{"aria-hidden":!0,className:B.className,readOnly:!0,ref:I,tabIndex:-1,style:b({},YS.shadow,n,{paddingTop:0,paddingBottom:0})})]})}),bS=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],yS=wA(DS,{name:"MuiPopper",slot:"Root",overridesResolver:(A,B)=>B.root})({}),kS=G.forwardRef(function(B,Q){var e;const t=Kl(),g=jA({props:B,name:"MuiPopper"}),{anchorEl:n,component:E,components:C,componentsProps:o,container:i,disablePortal:r,keepMounted:I,modifiers:a,open:d,placement:D,popperOptions:U,popperRef:l,transition:F,slots:c,slotProps:w}=g,M=DA(g,bS),Y=(e=c==null?void 0:c.root)!=null?e:C==null?void 0:C.Root,p=b({anchorEl:n,container:i,disablePortal:r,keepMounted:I,modifiers:a,open:d,placement:D,popperOptions:U,popperRef:l,transition:F},M);return R.jsx(yS,b({as:E,direction:t==null?void 0:t.direction,slots:{root:Y},slotProps:w??o},p,{ref:Q}))}),_R=kS;function JS(A){return zA("MuiListSubheader",A)}TA("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const vS=["className","color","component","disableGutters","disableSticky","inset"],ZS=A=>{const{classes:B,color:Q,disableGutters:e,inset:t,disableSticky:g}=A,n={root:["root",Q!=="default"&&`color${FA(Q)}`,!e&&"gutters",t&&"inset",!g&&"sticky"]};return qA(n,JS,B)},LS=wA("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,Q.color!=="default"&&B[`color${FA(Q.color)}`],!Q.disableGutters&&B.gutters,Q.inset&&B.inset,!Q.disableSticky&&B.sticky]}})(({theme:A,ownerState:B})=>b({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(A.vars||A).palette.text.secondary,fontFamily:A.typography.fontFamily,fontWeight:A.typography.fontWeightMedium,fontSize:A.typography.pxToRem(14)},B.color==="primary"&&{color:(A.vars||A).palette.primary.main},B.color==="inherit"&&{color:"inherit"},!B.disableGutters&&{paddingLeft:16,paddingRight:16},B.inset&&{paddingLeft:72},!B.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(A.vars||A).palette.background.paper})),$R=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiListSubheader"}),{className:t,color:g="default",component:n="li",disableGutters:E=!1,disableSticky:C=!1,inset:o=!1}=e,i=DA(e,vS),r=b({},e,{color:g,component:n,disableGutters:E,disableSticky:C,inset:o}),I=ZS(r);return R.jsx(LS,b({as:n,className:pA(I.root,t),ref:Q,ownerState:r},i))});$R.muiSkipListHighlight=!0;const Xf=$R;function oi({props:A,states:B,muiFormControl:Q}){return B.reduce((e,t)=>(e[t]=A[t],Q&&typeof A[t]>"u"&&(e[t]=Q[t]),e),{})}const SS=G.createContext(void 0),sc=SS;function BC(){return G.useContext(sc)}function Am(A){return R.jsx(Y1,b({},A,{defaultTheme:$l,themeId:TE}))}function Hf(A){return A!=null&&!(Array.isArray(A)&&A.length===0)}function _s(A,B=!1){return A&&(Hf(A.value)&&A.value!==""||B&&Hf(A.defaultValue)&&A.defaultValue!=="")}function XS(A){return A.startAdornment}function HS(A){return zA("MuiInputBase",A)}const xS=TA("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),$o=xS,WS=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],lc=(A,B)=>{const{ownerState:Q}=A;return[B.root,Q.formControl&&B.formControl,Q.startAdornment&&B.adornedStart,Q.endAdornment&&B.adornedEnd,Q.error&&B.error,Q.size==="small"&&B.sizeSmall,Q.multiline&&B.multiline,Q.color&&B[`color${FA(Q.color)}`],Q.fullWidth&&B.fullWidth,Q.hiddenLabel&&B.hiddenLabel]},cc=(A,B)=>{const{ownerState:Q}=A;return[B.input,Q.size==="small"&&B.inputSizeSmall,Q.multiline&&B.inputMultiline,Q.type==="search"&&B.inputTypeSearch,Q.startAdornment&&B.inputAdornedStart,Q.endAdornment&&B.inputAdornedEnd,Q.hiddenLabel&&B.inputHiddenLabel]},OS=A=>{const{classes:B,color:Q,disabled:e,error:t,endAdornment:g,focused:n,formControl:E,fullWidth:C,hiddenLabel:o,multiline:i,readOnly:r,size:I,startAdornment:a,type:d}=A,D={root:["root",`color${FA(Q)}`,e&&"disabled",t&&"error",C&&"fullWidth",n&&"focused",E&&"formControl",I&&I!=="medium"&&`size${FA(I)}`,i&&"multiline",a&&"adornedStart",g&&"adornedEnd",o&&"hiddenLabel",r&&"readOnly"],input:["input",e&&"disabled",d==="search"&&"inputTypeSearch",i&&"inputMultiline",I==="small"&&"inputSizeSmall",o&&"inputHiddenLabel",a&&"inputAdornedStart",g&&"inputAdornedEnd",r&&"readOnly"]};return qA(D,HS,B)},wc=wA("div",{name:"MuiInputBase",slot:"Root",overridesResolver:lc})(({theme:A,ownerState:B})=>b({},A.typography.body1,{color:(A.vars||A).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${$o.disabled}`]:{color:(A.vars||A).palette.text.disabled,cursor:"default"}},B.multiline&&b({padding:"4px 0 5px"},B.size==="small"&&{paddingTop:1}),B.fullWidth&&{width:"100%"})),Fc=wA("input",{name:"MuiInputBase",slot:"Input",overridesResolver:cc})(({theme:A,ownerState:B})=>{const Q=A.palette.mode==="light",e=b({color:"currentColor"},A.vars?{opacity:A.vars.opacity.inputPlaceholder}:{opacity:Q?.42:.5},{transition:A.transitions.create("opacity",{duration:A.transitions.duration.shorter})}),t={opacity:"0 !important"},g=A.vars?{opacity:A.vars.opacity.inputPlaceholder}:{opacity:Q?.42:.5};return b({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":e,"&::-moz-placeholder":e,"&:-ms-input-placeholder":e,"&::-ms-input-placeholder":e,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${$o.formControl} &`]:{"&::-webkit-input-placeholder":t,"&::-moz-placeholder":t,"&:-ms-input-placeholder":t,"&::-ms-input-placeholder":t,"&:focus::-webkit-input-placeholder":g,"&:focus::-moz-placeholder":g,"&:focus:-ms-input-placeholder":g,"&:focus::-ms-input-placeholder":g},[`&.${$o.disabled}`]:{opacity:1,WebkitTextFillColor:(A.vars||A).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},B.size==="small"&&{paddingTop:1},B.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},B.type==="search"&&{MozAppearance:"textfield"})}),TS=R.jsx(Am,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),VS=G.forwardRef(function(B,Q){var e;const t=jA({props:B,name:"MuiInputBase"}),{"aria-describedby":g,autoComplete:n,autoFocus:E,className:C,components:o={},componentsProps:i={},defaultValue:r,disabled:I,disableInjectingGlobalStyles:a,endAdornment:d,fullWidth:D=!1,id:U,inputComponent:l="input",inputProps:F={},inputRef:c,maxRows:w,minRows:M,multiline:Y=!1,name:p,onBlur:k,onChange:Z,onClick:J,onFocus:W,onKeyDown:T,onKeyUp:j,placeholder:P,readOnly:_,renderSuffix:$,rows:QA,slotProps:H={},slots:K={},startAdornment:BA,type:dA="text",value:rA}=t,JA=DA(t,WS),MA=F.value!=null?F.value:rA,{current:SA}=G.useRef(MA!=null),eA=G.useRef(),tA=G.useCallback(QB=>{},[]),eB=EQ(eA,c,F.ref,tA),[_A,EB]=G.useState(!1),XA=BC(),oB=oi({props:t,muiFormControl:XA,states:["color","disabled","error","hiddenLabel","size","required","filled"]});oB.focused=XA?XA.focused:_A,G.useEffect(()=>{!XA&&I&&_A&&(EB(!1),k&&k())},[XA,I,_A,k]);const ZA=XA&&XA.onFilled,LA=XA&&XA.onEmpty,UA=G.useCallback(QB=>{_s(QB)?ZA&&ZA():LA&&LA()},[ZA,LA]);vt(()=>{SA&&UA({value:MA})},[MA,UA,SA]);const tB=QB=>{if(oB.disabled){QB.stopPropagation();return}W&&W(QB),F.onFocus&&F.onFocus(QB),XA&&XA.onFocus?XA.onFocus(QB):EB(!0)},OA=QB=>{k&&k(QB),F.onBlur&&F.onBlur(QB),XA&&XA.onBlur?XA.onBlur(QB):EB(!1)},cA=(QB,...YA)=>{if(!SA){const _B=QB.target||eA.current;if(_B==null)throw new Error(zn(1));UA({value:_B.value})}F.onChange&&F.onChange(QB,...YA),Z&&Z(QB,...YA)};G.useEffect(()=>{UA(eA.current)},[]);const hB=QB=>{eA.current&&QB.currentTarget===QB.target&&eA.current.focus(),J&&J(QB)};let iB=l,gA=F;Y&&iB==="input"&&(QA?gA=b({type:void 0,minRows:QA,maxRows:QA},gA):gA=b({type:void 0,maxRows:w,minRows:M},gA),iB=NS);const yA=QB=>{UA(QB.animationName==="mui-auto-fill-cancel"?eA.current:{value:"x"})};G.useEffect(()=>{XA&&XA.setAdornedStart(!!BA)},[XA,BA]);const VA=b({},t,{color:oB.color||"primary",disabled:oB.disabled,endAdornment:d,error:oB.error,focused:oB.focused,formControl:XA,fullWidth:D,hiddenLabel:oB.hiddenLabel,multiline:Y,size:oB.size,startAdornment:BA,type:dA}),HA=OS(VA),cB=K.root||o.Root||wc,qB=H.root||i.root||{},RQ=K.input||o.Input||Fc;return gA=b({},gA,(e=H.input)!=null?e:i.input),R.jsxs(G.Fragment,{children:[!a&&TS,R.jsxs(cB,b({},qB,!jo(cB)&&{ownerState:b({},VA,qB.ownerState)},{ref:Q,onClick:hB},JA,{className:pA(HA.root,qB.className,C,_&&"MuiInputBase-readOnly"),children:[BA,R.jsx(sc.Provider,{value:null,children:R.jsx(RQ,b({ownerState:VA,"aria-invalid":oB.error,"aria-describedby":g,autoComplete:n,autoFocus:E,defaultValue:r,disabled:oB.disabled,id:U,onAnimationStart:yA,name:p,placeholder:P,readOnly:_,required:oB.required,rows:QA,value:MA,onKeyDown:T,onKeyUp:j,type:dA},gA,!jo(RQ)&&{as:iB,ownerState:b({},VA,gA.ownerState)},{ref:eB,className:pA(HA.input,gA.className,_&&"MuiInputBase-readOnly"),onBlur:OA,onChange:cA,onFocus:tB}))}),d,$?$(b({},oB,{startAdornment:BA})):null]}))]})}),hu=VS;function zS(A){return zA("MuiInput",A)}const jS=b({},$o,TA("MuiInput",["root","underline","input"])),rr=jS;function PS(A){return zA("MuiOutlinedInput",A)}const KS=b({},$o,TA("MuiOutlinedInput",["root","notchedOutline","input"])),un=KS;function qS(A){return zA("MuiFilledInput",A)}const _S=b({},$o,TA("MuiFilledInput",["root","underline","input"])),UE=_S,$S=pQ(R.jsx("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown"),AX=pQ(R.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function BX(A){return zA("MuiAvatar",A)}TA("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const QX=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],eX=A=>{const{classes:B,variant:Q,colorDefault:e}=A;return qA({root:["root",Q,e&&"colorDefault"],img:["img"],fallback:["fallback"]},BX,B)},tX=wA("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,B[Q.variant],Q.colorDefault&&B.colorDefault]}})(({theme:A,ownerState:B})=>b({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:A.typography.fontFamily,fontSize:A.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},B.variant==="rounded"&&{borderRadius:(A.vars||A).shape.borderRadius},B.variant==="square"&&{borderRadius:0},B.colorDefault&&b({color:(A.vars||A).palette.background.default},A.vars?{backgroundColor:A.vars.palette.Avatar.defaultBg}:{backgroundColor:A.palette.mode==="light"?A.palette.grey[400]:A.palette.grey[600]}))),gX=wA("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(A,B)=>B.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),nX=wA(AX,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(A,B)=>B.fallback})({width:"75%",height:"75%"});function EX({crossOrigin:A,referrerPolicy:B,src:Q,srcSet:e}){const[t,g]=G.useState(!1);return G.useEffect(()=>{if(!Q&&!e)return;g(!1);let n=!0;const E=new Image;return E.onload=()=>{n&&g("loaded")},E.onerror=()=>{n&&g("error")},E.crossOrigin=A,E.referrerPolicy=B,E.src=Q,e&&(E.srcset=e),()=>{n=!1}},[A,B,Q,e]),t}const CX=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiAvatar"}),{alt:t,children:g,className:n,component:E="div",imgProps:C,sizes:o,src:i,srcSet:r,variant:I="circular"}=e,a=DA(e,QX);let d=null;const D=EX(b({},C,{src:i,srcSet:r})),U=i||r,l=U&&D!=="error",F=b({},e,{colorDefault:!l,component:E,variant:I}),c=eX(F);return l?d=R.jsx(gX,b({alt:t,srcSet:r,src:i,sizes:o,ownerState:F,className:c.img},C)):g!=null?d=g:U&&t?d=t[0]:d=R.jsx(nX,{ownerState:F,className:c.fallback}),R.jsx(tX,b({as:E,ownerState:F,className:pA(c.root,n),ref:Q},a,{children:d}))}),oX=CX,iX=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],rX={entering:{opacity:1},entered:{opacity:1}},IX=G.forwardRef(function(B,Q){const e=Tg(),t={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:g,appear:n=!0,children:E,easing:C,in:o,onEnter:i,onEntered:r,onEntering:I,onExit:a,onExited:d,onExiting:D,style:U,timeout:l=t,TransitionComponent:F=su}=B,c=DA(B,iX),w=G.useRef(null),M=EQ(w,E.ref,Q),Y=P=>_=>{if(P){const $=w.current;_===void 0?P($):P($,_)}},p=Y(I),k=Y((P,_)=>{wu(P);const $=zo({style:U,timeout:l,easing:C},{mode:"enter"});P.style.webkitTransition=e.transitions.create("opacity",$),P.style.transition=e.transitions.create("opacity",$),i&&i(P,_)}),Z=Y(r),J=Y(D),W=Y(P=>{const _=zo({style:U,timeout:l,easing:C},{mode:"exit"});P.style.webkitTransition=e.transitions.create("opacity",_),P.style.transition=e.transitions.create("opacity",_),a&&a(P)}),T=Y(d),j=P=>{g&&g(w.current,P)};return R.jsx(F,b({appear:n,in:o,nodeRef:w,onEnter:k,onEntered:Z,onEntering:p,onExit:W,onExited:T,onExiting:J,addEndListener:j,timeout:l},c,{children:(P,_)=>G.cloneElement(E,b({style:b({opacity:0,visibility:P==="exited"&&!o?"hidden":void 0},rX[P],U,E.props.style),ref:M},_))}))}),aX=IX;function sX(A){return zA("MuiBackdrop",A)}TA("MuiBackdrop",["root","invisible"]);const lX=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],cX=A=>{const{classes:B,invisible:Q}=A;return qA({root:["root",Q&&"invisible"]},sX,B)},wX=wA("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,Q.invisible&&B.invisible]}})(({ownerState:A})=>b({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},A.invisible&&{backgroundColor:"transparent"})),FX=G.forwardRef(function(B,Q){var e,t,g;const n=jA({props:B,name:"MuiBackdrop"}),{children:E,className:C,component:o="div",components:i={},componentsProps:r={},invisible:I=!1,open:a,slotProps:d={},slots:D={},TransitionComponent:U=aX,transitionDuration:l}=n,F=DA(n,lX),c=b({},n,{component:o,invisible:I}),w=cX(c),M=(e=d.root)!=null?e:r.root;return R.jsx(U,b({in:a,timeout:l},F,{children:R.jsx(wX,b({"aria-hidden":!0},M,{as:(t=(g=D.root)!=null?g:i.Root)!=null?t:o,className:pA(w.root,C,M==null?void 0:M.className),ownerState:b({},c,M==null?void 0:M.ownerState),classes:w,ref:Q,children:E}))}))}),DX=FX,dX=TA("MuiBox",["root"]),uX=dX,UX=iu(),fX=k1({themeId:TE,defaultTheme:UX,defaultClassName:uX.root,generateClassName:iR.generate}),cQ=fX;function MX(A){return zA("MuiButton",A)}const GX=TA("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),xa=GX,hX=G.createContext({}),Bm=hX,pX=G.createContext(void 0),Qm=pX,RX=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],mX=A=>{const{color:B,disableElevation:Q,fullWidth:e,size:t,variant:g,classes:n}=A,E={root:["root",g,`${g}${FA(B)}`,`size${FA(t)}`,`${g}Size${FA(t)}`,B==="inherit"&&"colorInherit",Q&&"disableElevation",e&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${FA(t)}`],endIcon:["endIcon",`iconSize${FA(t)}`]},C=qA(E,MX,n);return b({},n,C)},em=A=>b({},A.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},A.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},A.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),YX=wA(Fu,{shouldForwardProp:A=>ct(A)||A==="classes",name:"MuiButton",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,B[Q.variant],B[`${Q.variant}${FA(Q.color)}`],B[`size${FA(Q.size)}`],B[`${Q.variant}Size${FA(Q.size)}`],Q.color==="inherit"&&B.colorInherit,Q.disableElevation&&B.disableElevation,Q.fullWidth&&B.fullWidth]}})(({theme:A,ownerState:B})=>{var Q,e;const t=A.palette.mode==="light"?A.palette.grey[300]:A.palette.grey[800],g=A.palette.mode==="light"?A.palette.grey.A100:A.palette.grey[700];return b({},A.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(A.vars||A).shape.borderRadius,transition:A.transitions.create(["background-color","box-shadow","border-color","color"],{duration:A.transitions.duration.short}),"&:hover":b({textDecoration:"none",backgroundColor:A.vars?`rgba(${A.vars.palette.text.primaryChannel} / ${A.vars.palette.action.hoverOpacity})`:TQ(A.palette.text.primary,A.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},B.variant==="text"&&B.color!=="inherit"&&{backgroundColor:A.vars?`rgba(${A.vars.palette[B.color].mainChannel} / ${A.vars.palette.action.hoverOpacity})`:TQ(A.palette[B.color].main,A.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},B.variant==="outlined"&&B.color!=="inherit"&&{border:`1px solid ${(A.vars||A).palette[B.color].main}`,backgroundColor:A.vars?`rgba(${A.vars.palette[B.color].mainChannel} / ${A.vars.palette.action.hoverOpacity})`:TQ(A.palette[B.color].main,A.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},B.variant==="contained"&&{backgroundColor:A.vars?A.vars.palette.Button.inheritContainedHoverBg:g,boxShadow:(A.vars||A).shadows[4],"@media (hover: none)":{boxShadow:(A.vars||A).shadows[2],backgroundColor:(A.vars||A).palette.grey[300]}},B.variant==="contained"&&B.color!=="inherit"&&{backgroundColor:(A.vars||A).palette[B.color].dark,"@media (hover: none)":{backgroundColor:(A.vars||A).palette[B.color].main}}),"&:active":b({},B.variant==="contained"&&{boxShadow:(A.vars||A).shadows[8]}),[`&.${xa.focusVisible}`]:b({},B.variant==="contained"&&{boxShadow:(A.vars||A).shadows[6]}),[`&.${xa.disabled}`]:b({color:(A.vars||A).palette.action.disabled},B.variant==="outlined"&&{border:`1px solid ${(A.vars||A).palette.action.disabledBackground}`},B.variant==="contained"&&{color:(A.vars||A).palette.action.disabled,boxShadow:(A.vars||A).shadows[0],backgroundColor:(A.vars||A).palette.action.disabledBackground})},B.variant==="text"&&{padding:"6px 8px"},B.variant==="text"&&B.color!=="inherit"&&{color:(A.vars||A).palette[B.color].main},B.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},B.variant==="outlined"&&B.color!=="inherit"&&{color:(A.vars||A).palette[B.color].main,border:A.vars?`1px solid rgba(${A.vars.palette[B.color].mainChannel} / 0.5)`:`1px solid ${TQ(A.palette[B.color].main,.5)}`},B.variant==="contained"&&{color:A.vars?A.vars.palette.text.primary:(Q=(e=A.palette).getContrastText)==null?void 0:Q.call(e,A.palette.grey[300]),backgroundColor:A.vars?A.vars.palette.Button.inheritContainedBg:t,boxShadow:(A.vars||A).shadows[2]},B.variant==="contained"&&B.color!=="inherit"&&{color:(A.vars||A).palette[B.color].contrastText,backgroundColor:(A.vars||A).palette[B.color].main},B.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},B.size==="small"&&B.variant==="text"&&{padding:"4px 5px",fontSize:A.typography.pxToRem(13)},B.size==="large"&&B.variant==="text"&&{padding:"8px 11px",fontSize:A.typography.pxToRem(15)},B.size==="small"&&B.variant==="outlined"&&{padding:"3px 9px",fontSize:A.typography.pxToRem(13)},B.size==="large"&&B.variant==="outlined"&&{padding:"7px 21px",fontSize:A.typography.pxToRem(15)},B.size==="small"&&B.variant==="contained"&&{padding:"4px 10px",fontSize:A.typography.pxToRem(13)},B.size==="large"&&B.variant==="contained"&&{padding:"8px 22px",fontSize:A.typography.pxToRem(15)},B.fullWidth&&{width:"100%"})},({ownerState:A})=>A.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${xa.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${xa.disabled}`]:{boxShadow:"none"}}),NX=wA("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.startIcon,B[`iconSize${FA(Q.size)}`]]}})(({ownerState:A})=>b({display:"inherit",marginRight:8,marginLeft:-4},A.size==="small"&&{marginLeft:-2},em(A))),bX=wA("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.endIcon,B[`iconSize${FA(Q.size)}`]]}})(({ownerState:A})=>b({display:"inherit",marginRight:-4,marginLeft:8},A.size==="small"&&{marginRight:-2},em(A))),yX=G.forwardRef(function(B,Q){const e=G.useContext(Bm),t=G.useContext(Qm),g=zd(e,B),n=jA({props:g,name:"MuiButton"}),{children:E,color:C="primary",component:o="button",className:i,disabled:r=!1,disableElevation:I=!1,disableFocusRipple:a=!1,endIcon:d,focusVisibleClassName:D,fullWidth:U=!1,size:l="medium",startIcon:F,type:c,variant:w="text"}=n,M=DA(n,RX),Y=b({},n,{color:C,component:o,disabled:r,disableElevation:I,disableFocusRipple:a,fullWidth:U,size:l,type:c,variant:w}),p=mX(Y),k=F&&R.jsx(NX,{className:p.startIcon,ownerState:Y,children:F}),Z=d&&R.jsx(bX,{className:p.endIcon,ownerState:Y,children:d}),J=t||"";return R.jsxs(YX,b({ownerState:Y,className:pA(e.className,p.root,i,J),component:o,disabled:r,focusRipple:!a,focusVisibleClassName:pA(p.focusVisible,D),ref:Q,type:c},M,{classes:p,children:[k,E,Z]}))}),oe=yX;function kX(A){return zA("MuiButtonGroup",A)}const JX=TA("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]),bQ=JX,vX=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],ZX=(A,B)=>{const{ownerState:Q}=A;return[{[`& .${bQ.grouped}`]:B.grouped},{[`& .${bQ.grouped}`]:B[`grouped${FA(Q.orientation)}`]},{[`& .${bQ.grouped}`]:B[`grouped${FA(Q.variant)}`]},{[`& .${bQ.grouped}`]:B[`grouped${FA(Q.variant)}${FA(Q.orientation)}`]},{[`& .${bQ.grouped}`]:B[`grouped${FA(Q.variant)}${FA(Q.color)}`]},{[`& .${bQ.firstButton}`]:B.firstButton},{[`& .${bQ.lastButton}`]:B.lastButton},{[`& .${bQ.middleButton}`]:B.middleButton},B.root,B[Q.variant],Q.disableElevation===!0&&B.disableElevation,Q.fullWidth&&B.fullWidth,Q.orientation==="vertical"&&B.vertical]},LX=A=>{const{classes:B,color:Q,disabled:e,disableElevation:t,fullWidth:g,orientation:n,variant:E}=A,C={root:["root",E,n==="vertical"&&"vertical",g&&"fullWidth",t&&"disableElevation"],grouped:["grouped",`grouped${FA(n)}`,`grouped${FA(E)}`,`grouped${FA(E)}${FA(n)}`,`grouped${FA(E)}${FA(Q)}`,e&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return qA(C,kX,B)},SX=wA("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:ZX})(({theme:A,ownerState:B})=>b({display:"inline-flex",borderRadius:(A.vars||A).shape.borderRadius},B.variant==="contained"&&{boxShadow:(A.vars||A).shadows[2]},B.disableElevation&&{boxShadow:"none"},B.fullWidth&&{width:"100%"},B.orientation==="vertical"&&{flexDirection:"column"},{[`& .${bQ.grouped}`]:b({minWidth:40,"&:hover":b({},B.variant==="contained"&&{boxShadow:"none"})},B.variant==="contained"&&{boxShadow:"none"}),[`& .${bQ.firstButton},& .${bQ.middleButton}`]:b({},B.orientation==="horizontal"&&{borderTopRightRadius:0,borderBottomRightRadius:0},B.orientation==="vertical"&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},B.variant==="text"&&B.orientation==="horizontal"&&{borderRight:A.vars?`1px solid rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${A.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${bQ.disabled}`]:{borderRight:`1px solid ${(A.vars||A).palette.action.disabled}`}},B.variant==="text"&&B.orientation==="vertical"&&{borderBottom:A.vars?`1px solid rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${A.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${bQ.disabled}`]:{borderBottom:`1px solid ${(A.vars||A).palette.action.disabled}`}},B.variant==="text"&&B.color!=="inherit"&&{borderColor:A.vars?`rgba(${A.vars.palette[B.color].mainChannel} / 0.5)`:TQ(A.palette[B.color].main,.5)},B.variant==="outlined"&&B.orientation==="horizontal"&&{borderRightColor:"transparent"},B.variant==="outlined"&&B.orientation==="vertical"&&{borderBottomColor:"transparent"},B.variant==="contained"&&B.orientation==="horizontal"&&{borderRight:`1px solid ${(A.vars||A).palette.grey[400]}`,[`&.${bQ.disabled}`]:{borderRight:`1px solid ${(A.vars||A).palette.action.disabled}`}},B.variant==="contained"&&B.orientation==="vertical"&&{borderBottom:`1px solid ${(A.vars||A).palette.grey[400]}`,[`&.${bQ.disabled}`]:{borderBottom:`1px solid ${(A.vars||A).palette.action.disabled}`}},B.variant==="contained"&&B.color!=="inherit"&&{borderColor:(A.vars||A).palette[B.color].dark},{"&:hover":b({},B.variant==="outlined"&&B.orientation==="horizontal"&&{borderRightColor:"currentColor"},B.variant==="outlined"&&B.orientation==="vertical"&&{borderBottomColor:"currentColor"})}),[`& .${bQ.lastButton},& .${bQ.middleButton}`]:b({},B.orientation==="horizontal"&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},B.orientation==="vertical"&&{borderTopRightRadius:0,borderTopLeftRadius:0},B.variant==="outlined"&&B.orientation==="horizontal"&&{marginLeft:-1},B.variant==="outlined"&&B.orientation==="vertical"&&{marginTop:-1})})),XX=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiButtonGroup"}),{children:t,className:g,color:n="primary",component:E="div",disabled:C=!1,disableElevation:o=!1,disableFocusRipple:i=!1,disableRipple:r=!1,fullWidth:I=!1,orientation:a="horizontal",size:d="medium",variant:D="outlined"}=e,U=DA(e,vX),l=b({},e,{color:n,component:E,disabled:C,disableElevation:o,disableFocusRipple:i,disableRipple:r,fullWidth:I,orientation:a,size:d,variant:D}),F=LX(l),c=G.useMemo(()=>({className:F.grouped,color:n,disabled:C,disableElevation:o,disableFocusRipple:i,disableRipple:r,fullWidth:I,size:d,variant:D}),[n,C,o,i,r,I,d,D,F.grouped]),w=fk(t),M=w.length,Y=p=>{const k=p===0,Z=p===M-1;return k&&Z?"":k?F.firstButton:Z?F.lastButton:F.middleButton};return R.jsx(SX,b({as:E,role:"group",className:pA(F.root,g),ref:Q,ownerState:l},U,{children:R.jsx(Bm.Provider,{value:c,children:w.map((p,k)=>R.jsx(Qm.Provider,{value:Y(k),children:p},k))})}))}),xf=XX;function HX(A){return zA("MuiCard",A)}TA("MuiCard",["root"]);const xX=["className","raised"],WX=A=>{const{classes:B}=A;return qA({root:["root"]},HX,B)},OX=wA(rc,{name:"MuiCard",slot:"Root",overridesResolver:(A,B)=>B.root})(()=>({overflow:"hidden"})),TX=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiCard"}),{className:t,raised:g=!1}=e,n=DA(e,xX),E=b({},e,{raised:g}),C=WX(E);return R.jsx(OX,b({className:pA(C.root,t),elevation:g?8:void 0,ref:Q,ownerState:E},n))}),VX=TX;function zX(A){return zA("MuiCardContent",A)}TA("MuiCardContent",["root"]);const jX=["className","component"],PX=A=>{const{classes:B}=A;return qA({root:["root"]},zX,B)},KX=wA("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(A,B)=>B.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),qX=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiCardContent"}),{className:t,component:g="div"}=e,n=DA(e,jX),E=b({},e,{component:g}),C=PX(E);return R.jsx(KX,b({as:g,className:pA(C.root,t),ownerState:E,ref:Q},n))}),_X=qX;function $X(A){return zA("MuiCardMedia",A)}TA("MuiCardMedia",["root","media","img"]);const AH=["children","className","component","image","src","style"],BH=A=>{const{classes:B,isMediaComponent:Q,isImageComponent:e}=A;return qA({root:["root",Q&&"media",e&&"img"]},$X,B)},QH=wA("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A,{isMediaComponent:e,isImageComponent:t}=Q;return[B.root,e&&B.media,t&&B.img]}})(({ownerState:A})=>b({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},A.isMediaComponent&&{width:"100%"},A.isImageComponent&&{objectFit:"cover"})),eH=["video","audio","picture","iframe","img"],tH=["picture","img"],gH=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiCardMedia"}),{children:t,className:g,component:n="div",image:E,src:C,style:o}=e,i=DA(e,AH),r=eH.indexOf(n)!==-1,I=!r&&E?b({backgroundImage:`url("${E}")`},o):o,a=b({},e,{component:n,isMediaComponent:r,isImageComponent:tH.indexOf(n)!==-1}),d=BH(a);return R.jsx(QH,b({className:pA(d.root,g),as:n,role:!r&&E?"img":void 0,ref:Q,style:I,ownerState:a,src:r?E||C:void 0},i,{children:t}))}),nH=gH;function EH(A){return zA("MuiCircularProgress",A)}TA("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const CH=["className","color","disableShrink","size","style","thickness","value","variant"];let Dc=A=>A,Wf,Of,Tf,Vf;const Un=44,oH=XI(Wf||(Wf=Dc`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),iH=XI(Of||(Of=Dc`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),rH=A=>{const{classes:B,variant:Q,color:e,disableShrink:t}=A,g={root:["root",Q,`color${FA(e)}`],svg:["svg"],circle:["circle",`circle${FA(Q)}`,t&&"circleDisableShrink"]};return qA(g,EH,B)},IH=wA("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,B[Q.variant],B[`color${FA(Q.color)}`]]}})(({ownerState:A,theme:B})=>b({display:"inline-block"},A.variant==="determinate"&&{transition:B.transitions.create("transform")},A.color!=="inherit"&&{color:(B.vars||B).palette[A.color].main}),({ownerState:A})=>A.variant==="indeterminate"&&Bu(Tf||(Tf=Dc`
      animation: ${0} 1.4s linear infinite;
    `),oH)),aH=wA("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(A,B)=>B.svg})({display:"block"}),sH=wA("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.circle,B[`circle${FA(Q.variant)}`],Q.disableShrink&&B.circleDisableShrink]}})(({ownerState:A,theme:B})=>b({stroke:"currentColor"},A.variant==="determinate"&&{transition:B.transitions.create("stroke-dashoffset")},A.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:A})=>A.variant==="indeterminate"&&!A.disableShrink&&Bu(Vf||(Vf=Dc`
      animation: ${0} 1.4s ease-in-out infinite;
    `),iH)),lH=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiCircularProgress"}),{className:t,color:g="primary",disableShrink:n=!1,size:E=40,style:C,thickness:o=3.6,value:i=0,variant:r="indeterminate"}=e,I=DA(e,CH),a=b({},e,{color:g,disableShrink:n,size:E,thickness:o,value:i,variant:r}),d=rH(a),D={},U={},l={};if(r==="determinate"){const F=2*Math.PI*((Un-o)/2);D.strokeDasharray=F.toFixed(3),l["aria-valuenow"]=Math.round(i),D.strokeDashoffset=`${((100-i)/100*F).toFixed(3)}px`,U.transform="rotate(-90deg)"}return R.jsx(IH,b({className:pA(d.root,t),style:b({width:E,height:E},U,C),ownerState:a,ref:Q,role:"progressbar"},l,I,{children:R.jsx(aH,{className:d.svg,ownerState:a,viewBox:`${Un/2} ${Un/2} ${Un} ${Un}`,children:R.jsx(sH,{className:d.circle,style:D,ownerState:a,cx:Un,cy:Un,r:(Un-o)/2,fill:"none",strokeWidth:o})})}))}),dc=lH,cH=(A,B)=>b({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},B&&!A.vars&&{colorScheme:A.palette.mode}),wH=A=>b({color:(A.vars||A).palette.text.primary},A.typography.body1,{backgroundColor:(A.vars||A).palette.background.default,"@media print":{backgroundColor:(A.vars||A).palette.common.white}}),FH=(A,B=!1)=>{var Q;const e={};B&&A.colorSchemes&&Object.entries(A.colorSchemes).forEach(([n,E])=>{var C;e[A.getColorSchemeSelector(n).replace(/\s*&/,"")]={colorScheme:(C=E.palette)==null?void 0:C.mode}});let t=b({html:cH(A,B),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:A.typography.fontWeightBold},body:b({margin:0},wH(A),{"&::backdrop":{backgroundColor:(A.vars||A).palette.background.default}})},e);const g=(Q=A.components)==null||(Q=Q.MuiCssBaseline)==null?void 0:Q.styleOverrides;return g&&(t=[t,g]),t};function DH(A){const B=jA({props:A,name:"MuiCssBaseline"}),{children:Q,enableColorScheme:e=!1}=B;return R.jsxs(G.Fragment,{children:[R.jsx(Am,{styles:t=>FH(t,e)}),Q]})}function dH(A){return zA("MuiModal",A)}TA("MuiModal",["root","hidden","backdrop"]);const uH=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],UH=A=>{const{open:B,exited:Q,classes:e}=A;return qA({root:["root",!B&&Q&&"hidden"],backdrop:["backdrop"]},dH,e)},fH=wA("div",{name:"MuiModal",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,!Q.open&&Q.exited&&B.hidden]}})(({theme:A,ownerState:B})=>b({position:"fixed",zIndex:(A.vars||A).zIndex.modal,right:0,bottom:0,top:0,left:0},!B.open&&B.exited&&{visibility:"hidden"})),MH=wA(DX,{name:"MuiModal",slot:"Backdrop",overridesResolver:(A,B)=>B.backdrop})({zIndex:-1}),GH=G.forwardRef(function(B,Q){var e,t,g,n,E,C;const o=jA({name:"MuiModal",props:B}),{BackdropComponent:i=MH,BackdropProps:r,className:I,closeAfterTransition:a=!1,children:d,container:D,component:U,components:l={},componentsProps:F={},disableAutoFocus:c=!1,disableEnforceFocus:w=!1,disableEscapeKeyDown:M=!1,disablePortal:Y=!1,disableRestoreFocus:p=!1,disableScrollLock:k=!1,hideBackdrop:Z=!1,keepMounted:J=!1,onBackdropClick:W,open:T,slotProps:j,slots:P}=o,_=DA(o,uH),$=b({},o,{closeAfterTransition:a,disableAutoFocus:c,disableEnforceFocus:w,disableEscapeKeyDown:M,disablePortal:Y,disableRestoreFocus:p,disableScrollLock:k,hideBackdrop:Z,keepMounted:J}),{getRootProps:QA,getBackdropProps:H,getTransitionProps:K,portalRef:BA,isTopModal:dA,exited:rA,hasTransition:JA}=RS(b({},$,{rootRef:Q})),MA=b({},$,{exited:rA}),SA=UH(MA),eA={};if(d.props.tabIndex===void 0&&(eA.tabIndex="-1"),JA){const{onEnter:ZA,onExited:LA}=K();eA.onEnter=ZA,eA.onExited=LA}const tA=(e=(t=P==null?void 0:P.root)!=null?t:l.Root)!=null?e:fH,eB=(g=(n=P==null?void 0:P.backdrop)!=null?n:l.Backdrop)!=null?g:i,_A=(E=j==null?void 0:j.root)!=null?E:F.root,EB=(C=j==null?void 0:j.backdrop)!=null?C:F.backdrop,XA=zE({elementType:tA,externalSlotProps:_A,externalForwardedProps:_,getSlotProps:QA,additionalProps:{ref:Q,as:U},ownerState:MA,className:pA(I,_A==null?void 0:_A.className,SA==null?void 0:SA.root,!MA.open&&MA.exited&&(SA==null?void 0:SA.hidden))}),oB=zE({elementType:eB,externalSlotProps:EB,additionalProps:r,getSlotProps:ZA=>H(b({},ZA,{onClick:LA=>{W&&W(LA),ZA!=null&&ZA.onClick&&ZA.onClick(LA)}})),className:pA(EB==null?void 0:EB.className,r==null?void 0:r.className,SA==null?void 0:SA.backdrop),ownerState:MA});return!J&&!T&&(!JA||rA)?null:R.jsx(qR,{ref:BA,container:D,disablePortal:Y,children:R.jsxs(tA,b({},XA,{children:[!Z&&i?R.jsx(eB,b({},oB)):null,R.jsx(eL,{disableEnforceFocus:w,disableAutoFocus:c,disableRestoreFocus:p,isEnabled:dA,open:T,children:G.cloneElement(d,eA)})]}))})}),pu=GH;function hH(A){return zA("MuiDivider",A)}TA("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const pH=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],RH=A=>{const{absolute:B,children:Q,classes:e,flexItem:t,light:g,orientation:n,textAlign:E,variant:C}=A;return qA({root:["root",B&&"absolute",C,g&&"light",n==="vertical"&&"vertical",t&&"flexItem",Q&&"withChildren",Q&&n==="vertical"&&"withChildrenVertical",E==="right"&&n!=="vertical"&&"textAlignRight",E==="left"&&n!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",n==="vertical"&&"wrapperVertical"]},hH,e)},mH=wA("div",{name:"MuiDivider",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,Q.absolute&&B.absolute,B[Q.variant],Q.light&&B.light,Q.orientation==="vertical"&&B.vertical,Q.flexItem&&B.flexItem,Q.children&&B.withChildren,Q.children&&Q.orientation==="vertical"&&B.withChildrenVertical,Q.textAlign==="right"&&Q.orientation!=="vertical"&&B.textAlignRight,Q.textAlign==="left"&&Q.orientation!=="vertical"&&B.textAlignLeft]}})(({theme:A,ownerState:B})=>b({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(A.vars||A).palette.divider,borderBottomWidth:"thin"},B.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},B.light&&{borderColor:A.vars?`rgba(${A.vars.palette.dividerChannel} / 0.08)`:TQ(A.palette.divider,.08)},B.variant==="inset"&&{marginLeft:72},B.variant==="middle"&&B.orientation==="horizontal"&&{marginLeft:A.spacing(2),marginRight:A.spacing(2)},B.variant==="middle"&&B.orientation==="vertical"&&{marginTop:A.spacing(1),marginBottom:A.spacing(1)},B.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},B.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:A})=>b({},A.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:A,ownerState:B})=>b({},B.children&&B.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(A.vars||A).palette.divider}`}}),({theme:A,ownerState:B})=>b({},B.children&&B.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(A.vars||A).palette.divider}`}}),({ownerState:A})=>b({},A.textAlign==="right"&&A.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},A.textAlign==="left"&&A.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),YH=wA("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.wrapper,Q.orientation==="vertical"&&B.wrapperVertical]}})(({theme:A,ownerState:B})=>b({display:"inline-block",paddingLeft:`calc(${A.spacing(1)} * 1.2)`,paddingRight:`calc(${A.spacing(1)} * 1.2)`},B.orientation==="vertical"&&{paddingTop:`calc(${A.spacing(1)} * 1.2)`,paddingBottom:`calc(${A.spacing(1)} * 1.2)`})),tm=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiDivider"}),{absolute:t=!1,children:g,className:n,component:E=g?"div":"hr",flexItem:C=!1,light:o=!1,orientation:i="horizontal",role:r=E!=="hr"?"separator":void 0,textAlign:I="center",variant:a="fullWidth"}=e,d=DA(e,pH),D=b({},e,{absolute:t,component:E,flexItem:C,light:o,orientation:i,role:r,textAlign:I,variant:a}),U=RH(D);return R.jsx(mH,b({as:E,className:pA(U.root,n),role:r,ref:Q,ownerState:D},d,{children:g?R.jsx(YH,{className:U.wrapper,ownerState:D,children:g}):null}))});tm.muiSkipListHighlight=!0;const zf=tm,NH=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function bH(A,B,Q){const e=B.getBoundingClientRect(),t=Q&&Q.getBoundingClientRect(),g=xg(B);let n;if(B.fakeTransform)n=B.fakeTransform;else{const o=g.getComputedStyle(B);n=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("transform")}let E=0,C=0;if(n&&n!=="none"&&typeof n=="string"){const o=n.split("(")[1].split(")")[0].split(",");E=parseInt(o[4],10),C=parseInt(o[5],10)}return A==="left"?t?`translateX(${t.right+E-e.left}px)`:`translateX(${g.innerWidth+E-e.left}px)`:A==="right"?t?`translateX(-${e.right-t.left-E}px)`:`translateX(-${e.left+e.width-E}px)`:A==="up"?t?`translateY(${t.bottom+C-e.top}px)`:`translateY(${g.innerHeight+C-e.top}px)`:t?`translateY(-${e.top-t.top+e.height-C}px)`:`translateY(-${e.top+e.height-C}px)`}function yH(A){return typeof A=="function"?A():A}function Wa(A,B,Q){const e=yH(Q),t=bH(A,B,e);t&&(B.style.webkitTransform=t,B.style.transform=t)}const kH=G.forwardRef(function(B,Q){const e=Tg(),t={enter:e.transitions.easing.easeOut,exit:e.transitions.easing.sharp},g={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:n,appear:E=!0,children:C,container:o,direction:i="down",easing:r=t,in:I,onEnter:a,onEntered:d,onEntering:D,onExit:U,onExited:l,onExiting:F,style:c,timeout:w=g,TransitionComponent:M=su}=B,Y=DA(B,NH),p=G.useRef(null),k=EQ(C.ref,p,Q),Z=H=>K=>{H&&(K===void 0?H(p.current):H(p.current,K))},J=Z((H,K)=>{Wa(i,H,o),wu(H),a&&a(H,K)}),W=Z((H,K)=>{const BA=zo({timeout:w,style:c,easing:r},{mode:"enter"});H.style.webkitTransition=e.transitions.create("-webkit-transform",b({},BA)),H.style.transition=e.transitions.create("transform",b({},BA)),H.style.webkitTransform="none",H.style.transform="none",D&&D(H,K)}),T=Z(d),j=Z(F),P=Z(H=>{const K=zo({timeout:w,style:c,easing:r},{mode:"exit"});H.style.webkitTransition=e.transitions.create("-webkit-transform",K),H.style.transition=e.transitions.create("transform",K),Wa(i,H,o),U&&U(H)}),_=Z(H=>{H.style.webkitTransition="",H.style.transition="",l&&l(H)}),$=H=>{n&&n(p.current,H)},QA=G.useCallback(()=>{p.current&&Wa(i,p.current,o)},[i,o]);return G.useEffect(()=>{if(I||i==="down"||i==="right")return;const H=Td(()=>{p.current&&Wa(i,p.current,o)}),K=xg(p.current);return K.addEventListener("resize",H),()=>{H.clear(),K.removeEventListener("resize",H)}},[i,I,o]),G.useEffect(()=>{I||QA()},[I,QA]),R.jsx(M,b({nodeRef:p,onEnter:J,onEntered:T,onEntering:W,onExit:P,onExited:_,onExiting:j,addEndListener:$,appear:E,in:I,timeout:w},Y,{children:(H,K)=>G.cloneElement(C,b({ref:k,style:b({visibility:H==="exited"&&!I?"hidden":void 0},c,C.props.style)},K))}))}),JH=kH;function vH(A){return zA("MuiDrawer",A)}TA("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const ZH=["BackdropProps"],LH=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],gm=(A,B)=>{const{ownerState:Q}=A;return[B.root,(Q.variant==="permanent"||Q.variant==="persistent")&&B.docked,B.modal]},SH=A=>{const{classes:B,anchor:Q,variant:e}=A,t={root:["root"],docked:[(e==="permanent"||e==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${FA(Q)}`,e!=="temporary"&&`paperAnchorDocked${FA(Q)}`]};return qA(t,vH,B)},XH=wA(pu,{name:"MuiDrawer",slot:"Root",overridesResolver:gm})(({theme:A})=>({zIndex:(A.vars||A).zIndex.drawer})),jf=wA("div",{shouldForwardProp:ct,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:gm})({flex:"0 0 auto"}),HH=wA(rc,{name:"MuiDrawer",slot:"Paper",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.paper,B[`paperAnchor${FA(Q.anchor)}`],Q.variant!=="temporary"&&B[`paperAnchorDocked${FA(Q.anchor)}`]]}})(({theme:A,ownerState:B})=>b({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(A.vars||A).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},B.anchor==="left"&&{left:0},B.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},B.anchor==="right"&&{right:0},B.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},B.anchor==="left"&&B.variant!=="temporary"&&{borderRight:`1px solid ${(A.vars||A).palette.divider}`},B.anchor==="top"&&B.variant!=="temporary"&&{borderBottom:`1px solid ${(A.vars||A).palette.divider}`},B.anchor==="right"&&B.variant!=="temporary"&&{borderLeft:`1px solid ${(A.vars||A).palette.divider}`},B.anchor==="bottom"&&B.variant!=="temporary"&&{borderTop:`1px solid ${(A.vars||A).palette.divider}`})),nm={left:"right",right:"left",top:"down",bottom:"up"};function xH(A){return["left","right"].indexOf(A)!==-1}function WH(A,B){return A.direction==="rtl"&&xH(B)?nm[B]:B}const OH=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiDrawer"}),t=Tg(),g={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{anchor:n="left",BackdropProps:E,children:C,className:o,elevation:i=16,hideBackdrop:r=!1,ModalProps:{BackdropProps:I}={},onClose:a,open:d=!1,PaperProps:D={},SlideProps:U,TransitionComponent:l=JH,transitionDuration:F=g,variant:c="temporary"}=e,w=DA(e.ModalProps,ZH),M=DA(e,LH),Y=G.useRef(!1);G.useEffect(()=>{Y.current=!0},[]);const p=WH(t,n),Z=b({},e,{anchor:n,elevation:i,open:d,variant:c},M),J=SH(Z),W=R.jsx(HH,b({elevation:c==="temporary"?i:0,square:!0},D,{className:pA(J.paper,D.className),ownerState:Z,children:C}));if(c==="permanent")return R.jsx(jf,b({className:pA(J.root,J.docked,o),ownerState:Z,ref:Q},M,{children:W}));const T=R.jsx(l,b({in:d,direction:nm[p],timeout:F,appear:Y.current},U,{children:W}));return c==="persistent"?R.jsx(jf,b({className:pA(J.root,J.docked,o),ownerState:Z,ref:Q},M,{children:T})):R.jsx(XH,b({BackdropProps:b({},E,I,{transitionDuration:F}),className:pA(J.root,J.modal,o),open:d,ownerState:Z,onClose:a,hideBackdrop:r,ref:Q},M,w,{children:T}))}),Pf=OH,TH=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],VH=A=>{const{classes:B,disableUnderline:Q}=A,t=qA({root:["root",!Q&&"underline"],input:["input"]},qS,B);return b({},B,t)},zH=wA(wc,{shouldForwardProp:A=>ct(A)||A==="classes",name:"MuiFilledInput",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[...lc(A,B),!Q.disableUnderline&&B.underline]}})(({theme:A,ownerState:B})=>{var Q;const e=A.palette.mode==="light",t=e?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",g=e?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",n=e?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",E=e?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return b({position:"relative",backgroundColor:A.vars?A.vars.palette.FilledInput.bg:g,borderTopLeftRadius:(A.vars||A).shape.borderRadius,borderTopRightRadius:(A.vars||A).shape.borderRadius,transition:A.transitions.create("background-color",{duration:A.transitions.duration.shorter,easing:A.transitions.easing.easeOut}),"&:hover":{backgroundColor:A.vars?A.vars.palette.FilledInput.hoverBg:n,"@media (hover: none)":{backgroundColor:A.vars?A.vars.palette.FilledInput.bg:g}},[`&.${UE.focused}`]:{backgroundColor:A.vars?A.vars.palette.FilledInput.bg:g},[`&.${UE.disabled}`]:{backgroundColor:A.vars?A.vars.palette.FilledInput.disabledBg:E}},!B.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(Q=(A.vars||A).palette[B.color||"primary"])==null?void 0:Q.main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:A.transitions.create("transform",{duration:A.transitions.duration.shorter,easing:A.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${UE.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${UE.error}`]:{"&:before, &:after":{borderBottomColor:(A.vars||A).palette.error.main}},"&:before":{borderBottom:`1px solid ${A.vars?`rgba(${A.vars.palette.common.onBackgroundChannel} / ${A.vars.opacity.inputUnderline})`:t}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:A.transitions.create("border-bottom-color",{duration:A.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${UE.disabled}, .${UE.error}):before`]:{borderBottom:`1px solid ${(A.vars||A).palette.text.primary}`},[`&.${UE.disabled}:before`]:{borderBottomStyle:"dotted"}},B.startAdornment&&{paddingLeft:12},B.endAdornment&&{paddingRight:12},B.multiline&&b({padding:"25px 12px 8px"},B.size==="small"&&{paddingTop:21,paddingBottom:4},B.hiddenLabel&&{paddingTop:16,paddingBottom:17},B.hiddenLabel&&B.size==="small"&&{paddingTop:8,paddingBottom:9}))}),jH=wA(Fc,{name:"MuiFilledInput",slot:"Input",overridesResolver:cc})(({theme:A,ownerState:B})=>b({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!A.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:A.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:A.palette.mode==="light"?null:"#fff",caretColor:A.palette.mode==="light"?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},A.vars&&{"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"},[A.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},B.size==="small"&&{paddingTop:21,paddingBottom:4},B.hiddenLabel&&{paddingTop:16,paddingBottom:17},B.startAdornment&&{paddingLeft:0},B.endAdornment&&{paddingRight:0},B.hiddenLabel&&B.size==="small"&&{paddingTop:8,paddingBottom:9},B.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0})),Em=G.forwardRef(function(B,Q){var e,t,g,n;const E=jA({props:B,name:"MuiFilledInput"}),{components:C={},componentsProps:o,fullWidth:i=!1,inputComponent:r="input",multiline:I=!1,slotProps:a,slots:d={},type:D="text"}=E,U=DA(E,TH),l=b({},E,{fullWidth:i,inputComponent:r,multiline:I,type:D}),F=VH(E),c={root:{ownerState:l},input:{ownerState:l}},w=a??o?VQ(c,a??o):c,M=(e=(t=d.root)!=null?t:C.Root)!=null?e:zH,Y=(g=(n=d.input)!=null?n:C.Input)!=null?g:jH;return R.jsx(hu,b({slots:{root:M,input:Y},componentsProps:w,fullWidth:i,inputComponent:r,multiline:I,ref:Q,type:D},U,{classes:F}))});Em.muiName="Input";const Cm=Em;function PH(A){return zA("MuiFormControl",A)}TA("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);const KH=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],qH=A=>{const{classes:B,margin:Q,fullWidth:e}=A,t={root:["root",Q!=="none"&&`margin${FA(Q)}`,e&&"fullWidth"]};return qA(t,PH,B)},_H=wA("div",{name:"MuiFormControl",slot:"Root",overridesResolver:({ownerState:A},B)=>b({},B.root,B[`margin${FA(A.margin)}`],A.fullWidth&&B.fullWidth)})(({ownerState:A})=>b({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},A.margin==="normal"&&{marginTop:16,marginBottom:8},A.margin==="dense"&&{marginTop:8,marginBottom:4},A.fullWidth&&{width:"100%"})),$H=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiFormControl"}),{children:t,className:g,color:n="primary",component:E="div",disabled:C=!1,error:o=!1,focused:i,fullWidth:r=!1,hiddenLabel:I=!1,margin:a="none",required:d=!1,size:D="medium",variant:U="outlined"}=e,l=DA(e,KH),F=b({},e,{color:n,component:E,disabled:C,error:o,fullWidth:r,hiddenLabel:I,margin:a,required:d,size:D,variant:U}),c=qH(F),[w,M]=G.useState(()=>{let j=!1;return t&&G.Children.forEach(t,P=>{if(!os(P,["Input","Select"]))return;const _=os(P,["Select"])?P.props.input:P;_&&XS(_.props)&&(j=!0)}),j}),[Y,p]=G.useState(()=>{let j=!1;return t&&G.Children.forEach(t,P=>{os(P,["Input","Select"])&&(_s(P.props,!0)||_s(P.props.inputProps,!0))&&(j=!0)}),j}),[k,Z]=G.useState(!1);C&&k&&Z(!1);const J=i!==void 0&&!C?i:k;let W;const T=G.useMemo(()=>({adornedStart:w,setAdornedStart:M,color:n,disabled:C,error:o,filled:Y,focused:J,fullWidth:r,hiddenLabel:I,size:D,onBlur:()=>{Z(!1)},onEmpty:()=>{p(!1)},onFilled:()=>{p(!0)},onFocus:()=>{Z(!0)},registerEffect:W,required:d,variant:U}),[w,n,C,o,Y,J,r,I,W,d,D,U]);return R.jsx(sc.Provider,{value:T,children:R.jsx(_H,b({as:E,ownerState:F,className:pA(c.root,g),ref:Q},l,{children:t}))})}),Ax=$H;function Bx(A){return zA("MuiFormHelperText",A)}const Qx=TA("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),Kf=Qx;var qf;const ex=["children","className","component","disabled","error","filled","focused","margin","required","variant"],tx=A=>{const{classes:B,contained:Q,size:e,disabled:t,error:g,filled:n,focused:E,required:C}=A,o={root:["root",t&&"disabled",g&&"error",e&&`size${FA(e)}`,Q&&"contained",E&&"focused",n&&"filled",C&&"required"]};return qA(o,Bx,B)},gx=wA("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,Q.size&&B[`size${FA(Q.size)}`],Q.contained&&B.contained,Q.filled&&B.filled]}})(({theme:A,ownerState:B})=>b({color:(A.vars||A).palette.text.secondary},A.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,[`&.${Kf.disabled}`]:{color:(A.vars||A).palette.text.disabled},[`&.${Kf.error}`]:{color:(A.vars||A).palette.error.main}},B.size==="small"&&{marginTop:4},B.contained&&{marginLeft:14,marginRight:14})),nx=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiFormHelperText"}),{children:t,className:g,component:n="p"}=e,E=DA(e,ex),C=BC(),o=oi({props:e,muiFormControl:C,states:["variant","size","disabled","error","filled","focused","required"]}),i=b({},e,{component:n,contained:o.variant==="filled"||o.variant==="outlined",variant:o.variant,size:o.size,disabled:o.disabled,error:o.error,filled:o.filled,focused:o.focused,required:o.required}),r=tx(i);return R.jsx(gx,b({as:n,ownerState:i,className:pA(r.root,g),ref:Q},E,{children:t===" "?qf||(qf=R.jsx("span",{className:"notranslate",children:"​"})):t}))}),Ex=nx;function Cx(A){return zA("MuiFormLabel",A)}const ox=TA("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),Wr=ox,ix=["children","className","color","component","disabled","error","filled","focused","required"],rx=A=>{const{classes:B,color:Q,focused:e,disabled:t,error:g,filled:n,required:E}=A,C={root:["root",`color${FA(Q)}`,t&&"disabled",g&&"error",n&&"filled",e&&"focused",E&&"required"],asterisk:["asterisk",g&&"error"]};return qA(C,Cx,B)},Ix=wA("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:A},B)=>b({},B.root,A.color==="secondary"&&B.colorSecondary,A.filled&&B.filled)})(({theme:A,ownerState:B})=>b({color:(A.vars||A).palette.text.secondary},A.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${Wr.focused}`]:{color:(A.vars||A).palette[B.color].main},[`&.${Wr.disabled}`]:{color:(A.vars||A).palette.text.disabled},[`&.${Wr.error}`]:{color:(A.vars||A).palette.error.main}})),ax=wA("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(A,B)=>B.asterisk})(({theme:A})=>({[`&.${Wr.error}`]:{color:(A.vars||A).palette.error.main}})),sx=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiFormLabel"}),{children:t,className:g,component:n="label"}=e,E=DA(e,ix),C=BC(),o=oi({props:e,muiFormControl:C,states:["color","required","focused","disabled","error","filled"]}),i=b({},e,{color:o.color||"primary",component:n,disabled:o.disabled,error:o.error,filled:o.filled,focused:o.focused,required:o.required}),r=rx(i);return R.jsxs(Ix,b({as:n,ownerState:i,className:pA(r.root,g),ref:Q},E,{children:[t,o.required&&R.jsxs(ax,{ownerState:i,"aria-hidden":!0,className:r.asterisk,children:[" ","*"]})]}))}),lx=sx,cx=G.createContext(),_f=cx;function wx(A){return zA("MuiGrid",A)}const Fx=[0,1,2,3,4,5,6,7,8,9,10],Dx=["column-reverse","column","row-reverse","row"],dx=["nowrap","wrap-reverse","wrap"],Ir=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],dI=TA("MuiGrid",["root","container","item","zeroMinWidth",...Fx.map(A=>`spacing-xs-${A}`),...Dx.map(A=>`direction-xs-${A}`),...dx.map(A=>`wrap-xs-${A}`),...Ir.map(A=>`grid-xs-${A}`),...Ir.map(A=>`grid-sm-${A}`),...Ir.map(A=>`grid-md-${A}`),...Ir.map(A=>`grid-lg-${A}`),...Ir.map(A=>`grid-xl-${A}`)]),ux=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function vo(A){const B=parseFloat(A);return`${B}${String(A).replace(String(B),"")||"px"}`}function Ux({theme:A,ownerState:B}){let Q;return A.breakpoints.keys.reduce((e,t)=>{let g={};if(B[t]&&(Q=B[t]),!Q)return e;if(Q===!0)g={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(Q==="auto")g={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const n=Hl({values:B.columns,breakpoints:A.breakpoints.values}),E=typeof n=="object"?n[t]:n;if(E==null)return e;const C=`${Math.round(Q/E*1e8)/1e6}%`;let o={};if(B.container&&B.item&&B.columnSpacing!==0){const i=A.spacing(B.columnSpacing);if(i!=="0px"){const r=`calc(${C} + ${vo(i)})`;o={flexBasis:r,maxWidth:r}}}g=b({flexBasis:C,flexGrow:0,maxWidth:C},o)}return A.breakpoints.values[t]===0?Object.assign(e,g):e[A.breakpoints.up(t)]=g,e},{})}function fx({theme:A,ownerState:B}){const Q=Hl({values:B.direction,breakpoints:A.breakpoints.values});return It({theme:A},Q,e=>{const t={flexDirection:e};return e.indexOf("column")===0&&(t[`& > .${dI.item}`]={maxWidth:"none"}),t})}function om({breakpoints:A,values:B}){let Q="";Object.keys(B).forEach(t=>{Q===""&&B[t]!==0&&(Q=t)});const e=Object.keys(A).sort((t,g)=>A[t]-A[g]);return e.slice(0,e.indexOf(Q))}function Mx({theme:A,ownerState:B}){const{container:Q,rowSpacing:e}=B;let t={};if(Q&&e!==0){const g=Hl({values:e,breakpoints:A.breakpoints.values});let n;typeof g=="object"&&(n=om({breakpoints:A.breakpoints.values,values:g})),t=It({theme:A},g,(E,C)=>{var o;const i=A.spacing(E);return i!=="0px"?{marginTop:`-${vo(i)}`,[`& > .${dI.item}`]:{paddingTop:vo(i)}}:(o=n)!=null&&o.includes(C)?{}:{marginTop:0,[`& > .${dI.item}`]:{paddingTop:0}}})}return t}function Gx({theme:A,ownerState:B}){const{container:Q,columnSpacing:e}=B;let t={};if(Q&&e!==0){const g=Hl({values:e,breakpoints:A.breakpoints.values});let n;typeof g=="object"&&(n=om({breakpoints:A.breakpoints.values,values:g})),t=It({theme:A},g,(E,C)=>{var o;const i=A.spacing(E);return i!=="0px"?{width:`calc(100% + ${vo(i)})`,marginLeft:`-${vo(i)}`,[`& > .${dI.item}`]:{paddingLeft:vo(i)}}:(o=n)!=null&&o.includes(C)?{}:{width:"100%",marginLeft:0,[`& > .${dI.item}`]:{paddingLeft:0}}})}return t}function hx(A,B,Q={}){if(!A||A<=0)return[];if(typeof A=="string"&&!Number.isNaN(Number(A))||typeof A=="number")return[Q[`spacing-xs-${String(A)}`]];const e=[];return B.forEach(t=>{const g=A[t];Number(g)>0&&e.push(Q[`spacing-${t}-${String(g)}`])}),e}const px=wA("div",{name:"MuiGrid",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A,{container:e,direction:t,item:g,spacing:n,wrap:E,zeroMinWidth:C,breakpoints:o}=Q;let i=[];e&&(i=hx(n,o,B));const r=[];return o.forEach(I=>{const a=Q[I];a&&r.push(B[`grid-${I}-${String(a)}`])}),[B.root,e&&B.container,g&&B.item,C&&B.zeroMinWidth,...i,t!=="row"&&B[`direction-xs-${String(t)}`],E!=="wrap"&&B[`wrap-xs-${String(E)}`],...r]}})(({ownerState:A})=>b({boxSizing:"border-box"},A.container&&{display:"flex",flexWrap:"wrap",width:"100%"},A.item&&{margin:0},A.zeroMinWidth&&{minWidth:0},A.wrap!=="wrap"&&{flexWrap:A.wrap}),fx,Mx,Gx,Ux);function Rx(A,B){if(!A||A<=0)return[];if(typeof A=="string"&&!Number.isNaN(Number(A))||typeof A=="number")return[`spacing-xs-${String(A)}`];const Q=[];return B.forEach(e=>{const t=A[e];if(Number(t)>0){const g=`spacing-${e}-${String(t)}`;Q.push(g)}}),Q}const mx=A=>{const{classes:B,container:Q,direction:e,item:t,spacing:g,wrap:n,zeroMinWidth:E,breakpoints:C}=A;let o=[];Q&&(o=Rx(g,C));const i=[];C.forEach(I=>{const a=A[I];a&&i.push(`grid-${I}-${String(a)}`)});const r={root:["root",Q&&"container",t&&"item",E&&"zeroMinWidth",...o,e!=="row"&&`direction-xs-${String(e)}`,n!=="wrap"&&`wrap-xs-${String(n)}`,...i]};return qA(r,wx,B)},Yx=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiGrid"}),{breakpoints:t}=Tg(),g=Eu(e),{className:n,columns:E,columnSpacing:C,component:o="div",container:i=!1,direction:r="row",item:I=!1,rowSpacing:a,spacing:d=0,wrap:D="wrap",zeroMinWidth:U=!1}=g,l=DA(g,ux),F=a||d,c=C||d,w=G.useContext(_f),M=i?E||12:w,Y={},p=b({},l);t.keys.forEach(J=>{l[J]!=null&&(Y[J]=l[J],delete p[J])});const k=b({},g,{columns:M,container:i,direction:r,item:I,rowSpacing:F,columnSpacing:c,wrap:D,zeroMinWidth:U,spacing:d},Y,{breakpoints:t.keys}),Z=mx(k);return R.jsx(_f.Provider,{value:M,children:R.jsx(px,b({ownerState:k,className:pA(Z.root,n),as:o,ref:Q},p))})}),PQ=Yx,Nx=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function DD(A){return`scale(${A}, ${A**2})`}const bx={entering:{opacity:1,transform:DD(1)},entered:{opacity:1,transform:"none"}},Gw=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),im=G.forwardRef(function(B,Q){const{addEndListener:e,appear:t=!0,children:g,easing:n,in:E,onEnter:C,onEntered:o,onEntering:i,onExit:r,onExited:I,onExiting:a,style:d,timeout:D="auto",TransitionComponent:U=su}=B,l=DA(B,Nx),F=G.useRef(),c=G.useRef(),w=Tg(),M=G.useRef(null),Y=EQ(M,g.ref,Q),p=_=>$=>{if(_){const QA=M.current;$===void 0?_(QA):_(QA,$)}},k=p(i),Z=p((_,$)=>{wu(_);const{duration:QA,delay:H,easing:K}=zo({style:d,timeout:D,easing:n},{mode:"enter"});let BA;D==="auto"?(BA=w.transitions.getAutoHeightDuration(_.clientHeight),c.current=BA):BA=QA,_.style.transition=[w.transitions.create("opacity",{duration:BA,delay:H}),w.transitions.create("transform",{duration:Gw?BA:BA*.666,delay:H,easing:K})].join(","),C&&C(_,$)}),J=p(o),W=p(a),T=p(_=>{const{duration:$,delay:QA,easing:H}=zo({style:d,timeout:D,easing:n},{mode:"exit"});let K;D==="auto"?(K=w.transitions.getAutoHeightDuration(_.clientHeight),c.current=K):K=$,_.style.transition=[w.transitions.create("opacity",{duration:K,delay:QA}),w.transitions.create("transform",{duration:Gw?K:K*.666,delay:Gw?QA:QA||K*.333,easing:H})].join(","),_.style.opacity=0,_.style.transform=DD(.75),r&&r(_)}),j=p(I),P=_=>{D==="auto"&&(F.current=setTimeout(_,c.current||0)),e&&e(M.current,_)};return G.useEffect(()=>()=>{clearTimeout(F.current)},[]),R.jsx(U,b({appear:t,in:E,nodeRef:M,onEnter:Z,onEntered:J,onEntering:k,onExit:T,onExited:j,onExiting:W,addEndListener:P,timeout:D==="auto"?null:D},l,{children:(_,$)=>G.cloneElement(g,b({style:b({opacity:0,transform:DD(.75),visibility:_==="exited"&&!E?"hidden":void 0},bx[_],d,g.props.style),ref:Y},$))}))});im.muiSupportAuto=!0;const $s=im;function yx(A,B,Q,e,t){const[g,n]=G.useState(()=>t&&Q?Q(A).matches:e?e(A).matches:B);return vt(()=>{let E=!0;if(!Q)return;const C=Q(A),o=()=>{E&&n(C.matches)};return o(),C.addListener(o),()=>{E=!1,C.removeListener(o)}},[A,Q]),g}const rm=G.useSyncExternalStore;function kx(A,B,Q,e,t){const g=G.useCallback(()=>B,[B]),n=G.useMemo(()=>{if(t&&Q)return()=>Q(A).matches;if(e!==null){const{matches:i}=e(A);return()=>i}return g},[g,A,e,t,Q]),[E,C]=G.useMemo(()=>{if(Q===null)return[g,()=>()=>{}];const i=Q(A);return[()=>i.matches,r=>(i.addListener(r),()=>{i.removeListener(r)})]},[g,Q,A]);return rm(C,E,n)}function Im(A,B={}){const Q=Kl(),e=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:t=!1,matchMedia:g=e?window.matchMedia:null,ssrMatchMedia:n=null,noSsr:E=!1}=JR({name:"MuiUseMediaQuery",props:B,theme:Q});let C=typeof A=="function"?A(Q):A;return C=C.replace(/^@media( ?)/m,""),(rm!==void 0?kx:yx)(C,t,g,n,E)}const Jx=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],vx=A=>{const{classes:B,disableUnderline:Q}=A,t=qA({root:["root",!Q&&"underline"],input:["input"]},zS,B);return b({},B,t)},Zx=wA(wc,{shouldForwardProp:A=>ct(A)||A==="classes",name:"MuiInput",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[...lc(A,B),!Q.disableUnderline&&B.underline]}})(({theme:A,ownerState:B})=>{let e=A.palette.mode==="light"?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return A.vars&&(e=`rgba(${A.vars.palette.common.onBackgroundChannel} / ${A.vars.opacity.inputUnderline})`),b({position:"relative"},B.formControl&&{"label + &":{marginTop:16}},!B.disableUnderline&&{"&:after":{borderBottom:`2px solid ${(A.vars||A).palette[B.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:A.transitions.create("transform",{duration:A.transitions.duration.shorter,easing:A.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${rr.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${rr.error}`]:{"&:before, &:after":{borderBottomColor:(A.vars||A).palette.error.main}},"&:before":{borderBottom:`1px solid ${e}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:A.transitions.create("border-bottom-color",{duration:A.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${rr.disabled}, .${rr.error}):before`]:{borderBottom:`2px solid ${(A.vars||A).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${e}`}},[`&.${rr.disabled}:before`]:{borderBottomStyle:"dotted"}})}),Lx=wA(Fc,{name:"MuiInput",slot:"Input",overridesResolver:cc})({}),am=G.forwardRef(function(B,Q){var e,t,g,n;const E=jA({props:B,name:"MuiInput"}),{disableUnderline:C,components:o={},componentsProps:i,fullWidth:r=!1,inputComponent:I="input",multiline:a=!1,slotProps:d,slots:D={},type:U="text"}=E,l=DA(E,Jx),F=vx(E),w={root:{ownerState:{disableUnderline:C}}},M=d??i?VQ(d??i,w):w,Y=(e=(t=D.root)!=null?t:o.Root)!=null?e:Zx,p=(g=(n=D.input)!=null?n:o.Input)!=null?g:Lx;return R.jsx(hu,b({slots:{root:Y,input:p},slotProps:M,fullWidth:r,inputComponent:I,multiline:a,ref:Q,type:U},l,{classes:F}))});am.muiName="Input";const sm=am;function Sx(A){return zA("MuiInputAdornment",A)}const Xx=TA("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),$f=Xx;var AM;const Hx=["children","className","component","disablePointerEvents","disableTypography","position","variant"],xx=(A,B)=>{const{ownerState:Q}=A;return[B.root,B[`position${FA(Q.position)}`],Q.disablePointerEvents===!0&&B.disablePointerEvents,B[Q.variant]]},Wx=A=>{const{classes:B,disablePointerEvents:Q,hiddenLabel:e,position:t,size:g,variant:n}=A,E={root:["root",Q&&"disablePointerEvents",t&&`position${FA(t)}`,n,e&&"hiddenLabel",g&&`size${FA(g)}`]};return qA(E,Sx,B)},Ox=wA("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:xx})(({theme:A,ownerState:B})=>b({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(A.vars||A).palette.action.active},B.variant==="filled"&&{[`&.${$f.positionStart}&:not(.${$f.hiddenLabel})`]:{marginTop:16}},B.position==="start"&&{marginRight:8},B.position==="end"&&{marginLeft:8},B.disablePointerEvents===!0&&{pointerEvents:"none"})),Tx=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiInputAdornment"}),{children:t,className:g,component:n="div",disablePointerEvents:E=!1,disableTypography:C=!1,position:o,variant:i}=e,r=DA(e,Hx),I=BC()||{};let a=i;i&&I.variant,I&&!a&&(a=I.variant);const d=b({},e,{hiddenLabel:I.hiddenLabel,size:I.size,disablePointerEvents:E,position:o,variant:a}),D=Wx(d);return R.jsx(sc.Provider,{value:null,children:R.jsx(Ox,b({as:n,ownerState:d,className:pA(D.root,g),ref:Q},r,{children:typeof t=="string"&&!C?R.jsx(DB,{color:"text.secondary",children:t}):R.jsxs(G.Fragment,{children:[o==="start"?AM||(AM=R.jsx("span",{className:"notranslate",children:"​"})):null,t]})}))})}),Vx=Tx;function zx(A){return zA("MuiInputLabel",A)}TA("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);const jx=["disableAnimation","margin","shrink","variant","className"],Px=A=>{const{classes:B,formControl:Q,size:e,shrink:t,disableAnimation:g,variant:n,required:E}=A,C={root:["root",Q&&"formControl",!g&&"animated",t&&"shrink",e&&e!=="normal"&&`size${FA(e)}`,n],asterisk:[E&&"asterisk"]},o=qA(C,zx,B);return b({},B,o)},Kx=wA(lx,{shouldForwardProp:A=>ct(A)||A==="classes",name:"MuiInputLabel",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[{[`& .${Wr.asterisk}`]:B.asterisk},B.root,Q.formControl&&B.formControl,Q.size==="small"&&B.sizeSmall,Q.shrink&&B.shrink,!Q.disableAnimation&&B.animated,Q.focused&&B.focused,B[Q.variant]]}})(({theme:A,ownerState:B})=>b({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},B.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},B.size==="small"&&{transform:"translate(0, 17px) scale(1)"},B.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!B.disableAnimation&&{transition:A.transitions.create(["color","transform","max-width"],{duration:A.transitions.duration.shorter,easing:A.transitions.easing.easeOut})},B.variant==="filled"&&b({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},B.size==="small"&&{transform:"translate(12px, 13px) scale(1)"},B.shrink&&b({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},B.size==="small"&&{transform:"translate(12px, 4px) scale(0.75)"})),B.variant==="outlined"&&b({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},B.size==="small"&&{transform:"translate(14px, 9px) scale(1)"},B.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))),qx=G.forwardRef(function(B,Q){const e=jA({name:"MuiInputLabel",props:B}),{disableAnimation:t=!1,shrink:g,className:n}=e,E=DA(e,jx),C=BC();let o=g;typeof o>"u"&&C&&(o=C.filled||C.focused||C.adornedStart);const i=oi({props:e,muiFormControl:C,states:["size","variant","required","focused"]}),r=b({},e,{disableAnimation:t,formControl:C,shrink:o,size:i.size,variant:i.variant,required:i.required,focused:i.focused}),I=Px(r);return R.jsx(Kx,b({"data-shrink":o,ownerState:r,ref:Q,className:pA(I.root,n)},E,{classes:I}))}),_x=qx,$x=G.createContext({}),LE=$x;function A9(A){return zA("MuiList",A)}TA("MuiList",["root","padding","dense","subheader"]);const B9=["children","className","component","dense","disablePadding","subheader"],Q9=A=>{const{classes:B,disablePadding:Q,dense:e,subheader:t}=A;return qA({root:["root",!Q&&"padding",e&&"dense",t&&"subheader"]},A9,B)},e9=wA("ul",{name:"MuiList",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,!Q.disablePadding&&B.padding,Q.dense&&B.dense,Q.subheader&&B.subheader]}})(({ownerState:A})=>b({listStyle:"none",margin:0,padding:0,position:"relative"},!A.disablePadding&&{paddingTop:8,paddingBottom:8},A.subheader&&{paddingTop:0})),t9=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiList"}),{children:t,className:g,component:n="ul",dense:E=!1,disablePadding:C=!1,subheader:o}=e,i=DA(e,B9),r=G.useMemo(()=>({dense:E}),[E]),I=b({},e,{component:n,dense:E,disablePadding:C}),a=Q9(I);return R.jsx(LE.Provider,{value:r,children:R.jsxs(e9,b({as:n,className:pA(a.root,g),ref:Q,ownerState:I},i,{children:[o,t]}))})}),dD=t9;function g9(A){return zA("MuiListItem",A)}const n9=TA("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),Io=n9,E9=TA("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),C9=E9;function o9(A){return zA("MuiListItemSecondaryAction",A)}TA("MuiListItemSecondaryAction",["root","disableGutters"]);const i9=["className"],r9=A=>{const{disableGutters:B,classes:Q}=A;return qA({root:["root",B&&"disableGutters"]},o9,Q)},I9=wA("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,Q.disableGutters&&B.disableGutters]}})(({ownerState:A})=>b({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},A.disableGutters&&{right:0})),lm=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiListItemSecondaryAction"}),{className:t}=e,g=DA(e,i9),n=G.useContext(LE),E=b({},e,{disableGutters:n.disableGutters}),C=r9(E);return R.jsx(I9,b({className:pA(C.root,t),ownerState:E,ref:Q},g))});lm.muiName="ListItemSecondaryAction";const a9=lm,s9=["className"],l9=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],c9=(A,B)=>{const{ownerState:Q}=A;return[B.root,Q.dense&&B.dense,Q.alignItems==="flex-start"&&B.alignItemsFlexStart,Q.divider&&B.divider,!Q.disableGutters&&B.gutters,!Q.disablePadding&&B.padding,Q.button&&B.button,Q.hasSecondaryAction&&B.secondaryAction]},w9=A=>{const{alignItems:B,button:Q,classes:e,dense:t,disabled:g,disableGutters:n,disablePadding:E,divider:C,hasSecondaryAction:o,selected:i}=A;return qA({root:["root",t&&"dense",!n&&"gutters",!E&&"padding",C&&"divider",g&&"disabled",Q&&"button",B==="flex-start"&&"alignItemsFlexStart",o&&"secondaryAction",i&&"selected"],container:["container"]},g9,e)},F9=wA("div",{name:"MuiListItem",slot:"Root",overridesResolver:c9})(({theme:A,ownerState:B})=>b({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!B.disablePadding&&b({paddingTop:8,paddingBottom:8},B.dense&&{paddingTop:4,paddingBottom:4},!B.disableGutters&&{paddingLeft:16,paddingRight:16},!!B.secondaryAction&&{paddingRight:48}),!!B.secondaryAction&&{[`& > .${C9.root}`]:{paddingRight:48}},{[`&.${Io.focusVisible}`]:{backgroundColor:(A.vars||A).palette.action.focus},[`&.${Io.selected}`]:{backgroundColor:A.vars?`rgba(${A.vars.palette.primary.mainChannel} / ${A.vars.palette.action.selectedOpacity})`:TQ(A.palette.primary.main,A.palette.action.selectedOpacity),[`&.${Io.focusVisible}`]:{backgroundColor:A.vars?`rgba(${A.vars.palette.primary.mainChannel} / calc(${A.vars.palette.action.selectedOpacity} + ${A.vars.palette.action.focusOpacity}))`:TQ(A.palette.primary.main,A.palette.action.selectedOpacity+A.palette.action.focusOpacity)}},[`&.${Io.disabled}`]:{opacity:(A.vars||A).palette.action.disabledOpacity}},B.alignItems==="flex-start"&&{alignItems:"flex-start"},B.divider&&{borderBottom:`1px solid ${(A.vars||A).palette.divider}`,backgroundClip:"padding-box"},B.button&&{transition:A.transitions.create("background-color",{duration:A.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(A.vars||A).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${Io.selected}:hover`]:{backgroundColor:A.vars?`rgba(${A.vars.palette.primary.mainChannel} / calc(${A.vars.palette.action.selectedOpacity} + ${A.vars.palette.action.hoverOpacity}))`:TQ(A.palette.primary.main,A.palette.action.selectedOpacity+A.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:A.vars?`rgba(${A.vars.palette.primary.mainChannel} / ${A.vars.palette.action.selectedOpacity})`:TQ(A.palette.primary.main,A.palette.action.selectedOpacity)}}},B.hasSecondaryAction&&{paddingRight:48})),D9=wA("li",{name:"MuiListItem",slot:"Container",overridesResolver:(A,B)=>B.container})({position:"relative"}),d9=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiListItem"}),{alignItems:t="center",autoFocus:g=!1,button:n=!1,children:E,className:C,component:o,components:i={},componentsProps:r={},ContainerComponent:I="li",ContainerProps:{className:a}={},dense:d=!1,disabled:D=!1,disableGutters:U=!1,disablePadding:l=!1,divider:F=!1,focusVisibleClassName:c,secondaryAction:w,selected:M=!1,slotProps:Y={},slots:p={}}=e,k=DA(e.ContainerProps,s9),Z=DA(e,l9),J=G.useContext(LE),W=G.useMemo(()=>({dense:d||J.dense||!1,alignItems:t,disableGutters:U}),[t,J.dense,d,U]),T=G.useRef(null);vt(()=>{g&&T.current&&T.current.focus()},[g]);const j=G.Children.toArray(E),P=j.length&&os(j[j.length-1],["ListItemSecondaryAction"]),_=b({},e,{alignItems:t,autoFocus:g,button:n,dense:W.dense,disabled:D,disableGutters:U,disablePadding:l,divider:F,hasSecondaryAction:P,selected:M}),$=w9(_),QA=EQ(T,Q),H=p.root||i.Root||F9,K=Y.root||r.root||{},BA=b({className:pA($.root,K.className,C),disabled:D},Z);let dA=o||"li";return n&&(BA.component=o||"div",BA.focusVisibleClassName=pA(Io.focusVisible,c),dA=Fu),P?(dA=!BA.component&&!o?"div":dA,I==="li"&&(dA==="li"?dA="div":BA.component==="li"&&(BA.component="div")),R.jsx(LE.Provider,{value:W,children:R.jsxs(D9,b({as:I,className:pA($.container,a),ref:QA,ownerState:_},k,{children:[R.jsx(H,b({},K,!jo(H)&&{as:dA,ownerState:b({},_,K.ownerState)},BA,{children:j})),j.pop()]}))})):R.jsx(LE.Provider,{value:W,children:R.jsxs(H,b({},K,{as:dA,ref:QA},!jo(H)&&{ownerState:b({},_,K.ownerState)},BA,{children:[j,w&&R.jsx(a9,{children:w})]}))})}),BM=d9;function u9(A){return zA("MuiListItemIcon",A)}TA("MuiListItemIcon",["root","alignItemsFlexStart"]);const U9=["className"],f9=A=>{const{alignItems:B,classes:Q}=A;return qA({root:["root",B==="flex-start"&&"alignItemsFlexStart"]},u9,Q)},M9=wA("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,Q.alignItems==="flex-start"&&B.alignItemsFlexStart]}})(({theme:A,ownerState:B})=>b({minWidth:56,color:(A.vars||A).palette.action.active,flexShrink:0,display:"inline-flex"},B.alignItems==="flex-start"&&{marginTop:8})),G9=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiListItemIcon"}),{className:t}=e,g=DA(e,U9),n=G.useContext(LE),E=b({},e,{alignItems:n.alignItems}),C=f9(E);return R.jsx(M9,b({className:pA(C.root,t),ownerState:E,ref:Q},g))}),QM=G9;function h9(A){return zA("MuiListItemText",A)}const p9=TA("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),eM=p9,R9=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],m9=A=>{const{classes:B,inset:Q,primary:e,secondary:t,dense:g}=A;return qA({root:["root",Q&&"inset",g&&"dense",e&&t&&"multiline"],primary:["primary"],secondary:["secondary"]},h9,B)},Y9=wA("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[{[`& .${eM.primary}`]:B.primary},{[`& .${eM.secondary}`]:B.secondary},B.root,Q.inset&&B.inset,Q.primary&&Q.secondary&&B.multiline,Q.dense&&B.dense]}})(({ownerState:A})=>b({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},A.primary&&A.secondary&&{marginTop:6,marginBottom:6},A.inset&&{paddingLeft:56})),N9=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiListItemText"}),{children:t,className:g,disableTypography:n=!1,inset:E=!1,primary:C,primaryTypographyProps:o,secondary:i,secondaryTypographyProps:r}=e,I=DA(e,R9),{dense:a}=G.useContext(LE);let d=C??t,D=i;const U=b({},e,{disableTypography:n,inset:E,primary:!!d,secondary:!!D,dense:a}),l=m9(U);return d!=null&&d.type!==DB&&!n&&(d=R.jsx(DB,b({variant:a?"body2":"body1",className:l.primary,component:o!=null&&o.variant?void 0:"span",display:"block"},o,{children:d}))),D!=null&&D.type!==DB&&!n&&(D=R.jsx(DB,b({variant:"body2",className:l.secondary,color:"text.secondary",display:"block"},r,{children:D}))),R.jsxs(Y9,b({className:pA(l.root,g),ownerState:U,ref:Q},I,{children:[d,D]}))}),tM=N9,b9=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function hw(A,B,Q){return A===B?A.firstChild:B&&B.nextElementSibling?B.nextElementSibling:Q?null:A.firstChild}function gM(A,B,Q){return A===B?Q?A.firstChild:A.lastChild:B&&B.previousElementSibling?B.previousElementSibling:Q?null:A.lastChild}function cm(A,B){if(B===void 0)return!0;let Q=A.innerText;return Q===void 0&&(Q=A.textContent),Q=Q.trim().toLowerCase(),Q.length===0?!1:B.repeating?Q[0]===B.keys[0]:Q.indexOf(B.keys.join(""))===0}function ar(A,B,Q,e,t,g){let n=!1,E=t(A,B,B?Q:!1);for(;E;){if(E===A.firstChild){if(n)return!1;n=!0}const C=e?!1:E.disabled||E.getAttribute("aria-disabled")==="true";if(!E.hasAttribute("tabindex")||!cm(E,g)||C)E=t(A,E,Q);else return E.focus(),!0}return!1}const y9=G.forwardRef(function(B,Q){const{actions:e,autoFocus:t=!1,autoFocusItem:g=!1,children:n,className:E,disabledItemsFocusable:C=!1,disableListWrap:o=!1,onKeyDown:i,variant:r="selectedMenu"}=B,I=DA(B,b9),a=G.useRef(null),d=G.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});vt(()=>{t&&a.current.focus()},[t]),G.useImperativeHandle(e,()=>({adjustStyleForScrollbar:(c,w)=>{const M=!a.current.style.width;if(c.clientHeight<a.current.clientHeight&&M){const Y=`${oR(_Q(c))}px`;a.current.style[w.direction==="rtl"?"paddingLeft":"paddingRight"]=Y,a.current.style.width=`calc(100% + ${Y})`}return a.current}}),[]);const D=c=>{const w=a.current,M=c.key,Y=_Q(w).activeElement;if(M==="ArrowDown")c.preventDefault(),ar(w,Y,o,C,hw);else if(M==="ArrowUp")c.preventDefault(),ar(w,Y,o,C,gM);else if(M==="Home")c.preventDefault(),ar(w,null,o,C,hw);else if(M==="End")c.preventDefault(),ar(w,null,o,C,gM);else if(M.length===1){const p=d.current,k=M.toLowerCase(),Z=performance.now();p.keys.length>0&&(Z-p.lastTime>500?(p.keys=[],p.repeating=!0,p.previousKeyMatched=!0):p.repeating&&k!==p.keys[0]&&(p.repeating=!1)),p.lastTime=Z,p.keys.push(k);const J=Y&&!p.repeating&&cm(Y,p);p.previousKeyMatched&&(J||ar(w,Y,!1,C,hw,p))?c.preventDefault():p.previousKeyMatched=!1}i&&i(c)},U=EQ(a,Q);let l=-1;G.Children.forEach(n,(c,w)=>{if(!G.isValidElement(c)){l===w&&(l+=1,l>=n.length&&(l=-1));return}c.props.disabled||(r==="selectedMenu"&&c.props.selected||l===-1)&&(l=w),l===w&&(c.props.disabled||c.props.muiSkipListHighlight||c.type.muiSkipListHighlight)&&(l+=1,l>=n.length&&(l=-1))});const F=G.Children.map(n,(c,w)=>{if(w===l){const M={};return g&&(M.autoFocus=!0),c.props.tabIndex===void 0&&r==="selectedMenu"&&(M.tabIndex=0),G.cloneElement(c,M)}return c});return R.jsx(dD,b({role:"menu",ref:U,className:E,onKeyDown:D,tabIndex:t?0:-1},I,{children:F}))}),k9=y9;function J9(A){return zA("MuiPopover",A)}TA("MuiPopover",["root","paper"]);const v9=["onEntering"],Z9=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],L9=["slotProps"];function nM(A,B){let Q=0;return typeof B=="number"?Q=B:B==="center"?Q=A.height/2:B==="bottom"&&(Q=A.height),Q}function EM(A,B){let Q=0;return typeof B=="number"?Q=B:B==="center"?Q=A.width/2:B==="right"&&(Q=A.width),Q}function CM(A){return[A.horizontal,A.vertical].map(B=>typeof B=="number"?`${B}px`:B).join(" ")}function pw(A){return typeof A=="function"?A():A}const S9=A=>{const{classes:B}=A;return qA({root:["root"],paper:["paper"]},J9,B)},X9=wA(pu,{name:"MuiPopover",slot:"Root",overridesResolver:(A,B)=>B.root})({}),wm=wA(rc,{name:"MuiPopover",slot:"Paper",overridesResolver:(A,B)=>B.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),H9=G.forwardRef(function(B,Q){var e,t,g;const n=jA({props:B,name:"MuiPopover"}),{action:E,anchorEl:C,anchorOrigin:o={vertical:"top",horizontal:"left"},anchorPosition:i,anchorReference:r="anchorEl",children:I,className:a,container:d,elevation:D=8,marginThreshold:U=16,open:l,PaperProps:F={},slots:c,slotProps:w,transformOrigin:M={vertical:"top",horizontal:"left"},TransitionComponent:Y=$s,transitionDuration:p="auto",TransitionProps:{onEntering:k}={},disableScrollLock:Z=!1}=n,J=DA(n.TransitionProps,v9),W=DA(n,Z9),T=(e=w==null?void 0:w.paper)!=null?e:F,j=G.useRef(),P=EQ(j,T.ref),_=b({},n,{anchorOrigin:o,anchorReference:r,elevation:D,marginThreshold:U,externalPaperSlotProps:T,transformOrigin:M,TransitionComponent:Y,transitionDuration:p,TransitionProps:J}),$=S9(_),QA=G.useCallback(()=>{if(r==="anchorPosition")return i;const ZA=pw(C),UA=(ZA&&ZA.nodeType===1?ZA:_Q(j.current).body).getBoundingClientRect();return{top:UA.top+nM(UA,o.vertical),left:UA.left+EM(UA,o.horizontal)}},[C,o.horizontal,o.vertical,i,r]),H=G.useCallback(ZA=>({vertical:nM(ZA,M.vertical),horizontal:EM(ZA,M.horizontal)}),[M.horizontal,M.vertical]),K=G.useCallback(ZA=>{const LA={width:ZA.offsetWidth,height:ZA.offsetHeight},UA=H(LA);if(r==="none")return{top:null,left:null,transformOrigin:CM(UA)};const tB=QA();let OA=tB.top-UA.vertical,cA=tB.left-UA.horizontal;const hB=OA+LA.height,iB=cA+LA.width,gA=xg(pw(C)),yA=gA.innerHeight-U,VA=gA.innerWidth-U;if(U!==null&&OA<U){const HA=OA-U;OA-=HA,UA.vertical+=HA}else if(U!==null&&hB>yA){const HA=hB-yA;OA-=HA,UA.vertical+=HA}if(U!==null&&cA<U){const HA=cA-U;cA-=HA,UA.horizontal+=HA}else if(iB>VA){const HA=iB-VA;cA-=HA,UA.horizontal+=HA}return{top:`${Math.round(OA)}px`,left:`${Math.round(cA)}px`,transformOrigin:CM(UA)}},[C,r,QA,H,U]),[BA,dA]=G.useState(l),rA=G.useCallback(()=>{const ZA=j.current;if(!ZA)return;const LA=K(ZA);LA.top!==null&&(ZA.style.top=LA.top),LA.left!==null&&(ZA.style.left=LA.left),ZA.style.transformOrigin=LA.transformOrigin,dA(!0)},[K]);G.useEffect(()=>(Z&&window.addEventListener("scroll",rA),()=>window.removeEventListener("scroll",rA)),[C,Z,rA]);const JA=(ZA,LA)=>{k&&k(ZA,LA),rA()},MA=()=>{dA(!1)};G.useEffect(()=>{l&&rA()}),G.useImperativeHandle(E,()=>l?{updatePosition:()=>{rA()}}:null,[l,rA]),G.useEffect(()=>{if(!l)return;const ZA=Td(()=>{rA()}),LA=xg(C);return LA.addEventListener("resize",ZA),()=>{ZA.clear(),LA.removeEventListener("resize",ZA)}},[C,l,rA]);let SA=p;p==="auto"&&!Y.muiSupportAuto&&(SA=void 0);const eA=d||(C?_Q(pw(C)).body:void 0),tA=(t=c==null?void 0:c.root)!=null?t:X9,eB=(g=c==null?void 0:c.paper)!=null?g:wm,_A=zE({elementType:eB,externalSlotProps:b({},T,{style:BA?T.style:b({},T.style,{opacity:0})}),additionalProps:{elevation:D,ref:P},ownerState:_,className:pA($.paper,T==null?void 0:T.className)}),EB=zE({elementType:tA,externalSlotProps:(w==null?void 0:w.root)||{},externalForwardedProps:W,additionalProps:{ref:Q,slotProps:{backdrop:{invisible:!0}},container:eA,open:l},ownerState:_,className:pA($.root,a)}),{slotProps:XA}=EB,oB=DA(EB,L9);return R.jsx(tA,b({},oB,!jo(tA)&&{slotProps:XA,disableScrollLock:Z},{children:R.jsx(Y,b({appear:!0,in:l,onEntering:JA,onExited:MA,timeout:SA},J,{children:R.jsx(eB,b({},_A,{children:I}))}))}))}),x9=H9;function W9(A){return zA("MuiMenu",A)}TA("MuiMenu",["root","paper","list"]);const O9=["onEntering"],T9=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],V9={vertical:"top",horizontal:"right"},z9={vertical:"top",horizontal:"left"},j9=A=>{const{classes:B}=A;return qA({root:["root"],paper:["paper"],list:["list"]},W9,B)},P9=wA(x9,{shouldForwardProp:A=>ct(A)||A==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(A,B)=>B.root})({}),K9=wA(wm,{name:"MuiMenu",slot:"Paper",overridesResolver:(A,B)=>B.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),q9=wA(k9,{name:"MuiMenu",slot:"List",overridesResolver:(A,B)=>B.list})({outline:0}),_9=G.forwardRef(function(B,Q){var e,t;const g=jA({props:B,name:"MuiMenu"}),{autoFocus:n=!0,children:E,className:C,disableAutoFocusItem:o=!1,MenuListProps:i={},onClose:r,open:I,PaperProps:a={},PopoverClasses:d,transitionDuration:D="auto",TransitionProps:{onEntering:U}={},variant:l="selectedMenu",slots:F={},slotProps:c={}}=g,w=DA(g.TransitionProps,O9),M=DA(g,T9),Y=Tg(),p=Y.direction==="rtl",k=b({},g,{autoFocus:n,disableAutoFocusItem:o,MenuListProps:i,onEntering:U,PaperProps:a,transitionDuration:D,TransitionProps:w,variant:l}),Z=j9(k),J=n&&!o&&I,W=G.useRef(null),T=(K,BA)=>{W.current&&W.current.adjustStyleForScrollbar(K,Y),U&&U(K,BA)},j=K=>{K.key==="Tab"&&(K.preventDefault(),r&&r(K,"tabKeyDown"))};let P=-1;G.Children.map(E,(K,BA)=>{G.isValidElement(K)&&(K.props.disabled||(l==="selectedMenu"&&K.props.selected||P===-1)&&(P=BA))});const _=(e=F.paper)!=null?e:K9,$=(t=c.paper)!=null?t:a,QA=zE({elementType:F.root,externalSlotProps:c.root,ownerState:k,className:[Z.root,C]}),H=zE({elementType:_,externalSlotProps:$,ownerState:k,className:Z.paper});return R.jsx(P9,b({onClose:r,anchorOrigin:{vertical:"bottom",horizontal:p?"right":"left"},transformOrigin:p?V9:z9,slots:{paper:_,root:F.root},slotProps:{root:QA,paper:H},open:I,ref:Q,transitionDuration:D,TransitionProps:b({onEntering:T},w),ownerState:k},M,{classes:d,children:R.jsx(q9,b({onKeyDown:j,actions:W,autoFocus:n&&(P===-1||o),autoFocusItem:J,variant:l},i,{className:pA(Z.list,i.className),children:E}))}))}),$9=_9;function AW(A){return zA("MuiNativeSelect",A)}const BW=TA("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),Ru=BW,QW=["className","disabled","error","IconComponent","inputRef","variant"],eW=A=>{const{classes:B,variant:Q,disabled:e,multiple:t,open:g,error:n}=A,E={select:["select",Q,e&&"disabled",t&&"multiple",n&&"error"],icon:["icon",`icon${FA(Q)}`,g&&"iconOpen",e&&"disabled"]};return qA(E,AW,B)},Fm=({ownerState:A,theme:B})=>b({MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":b({},B.vars?{backgroundColor:`rgba(${B.vars.palette.common.onBackgroundChannel} / 0.05)`}:{backgroundColor:B.palette.mode==="light"?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"},[`&.${Ru.disabled}`]:{cursor:"default"},"&[multiple]":{height:"auto"},"&:not([multiple]) option, &:not([multiple]) optgroup":{backgroundColor:(B.vars||B).palette.background.paper},"&&&":{paddingRight:24,minWidth:16}},A.variant==="filled"&&{"&&&":{paddingRight:32}},A.variant==="outlined"&&{borderRadius:(B.vars||B).shape.borderRadius,"&:focus":{borderRadius:(B.vars||B).shape.borderRadius},"&&&":{paddingRight:32}}),tW=wA("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:ct,overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.select,B[Q.variant],Q.error&&B.error,{[`&.${Ru.multiple}`]:B.multiple}]}})(Fm),Dm=({ownerState:A,theme:B})=>b({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(B.vars||B).palette.action.active,[`&.${Ru.disabled}`]:{color:(B.vars||B).palette.action.disabled}},A.open&&{transform:"rotate(180deg)"},A.variant==="filled"&&{right:7},A.variant==="outlined"&&{right:7}),gW=wA("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.icon,Q.variant&&B[`icon${FA(Q.variant)}`],Q.open&&B.iconOpen]}})(Dm),nW=G.forwardRef(function(B,Q){const{className:e,disabled:t,error:g,IconComponent:n,inputRef:E,variant:C="standard"}=B,o=DA(B,QW),i=b({},B,{disabled:t,variant:C,error:g}),r=eW(i);return R.jsxs(G.Fragment,{children:[R.jsx(tW,b({ownerState:i,className:pA(r.select,e),disabled:t,ref:E||Q},o)),B.multiple?null:R.jsx(gW,{as:n,ownerState:i,className:r.icon})]})}),EW=nW;var oM;const CW=["children","classes","className","label","notched"],oW=wA("fieldset",{shouldForwardProp:ct})({textAlign:"left",position:"absolute",bottom:0,right:0,top:-5,left:0,margin:0,padding:"0 8px",pointerEvents:"none",borderRadius:"inherit",borderStyle:"solid",borderWidth:1,overflow:"hidden",minWidth:"0%"}),iW=wA("legend",{shouldForwardProp:ct})(({ownerState:A,theme:B})=>b({float:"unset",width:"auto",overflow:"hidden"},!A.withLabel&&{padding:0,lineHeight:"11px",transition:B.transitions.create("width",{duration:150,easing:B.transitions.easing.easeOut})},A.withLabel&&b({display:"block",padding:0,height:11,fontSize:"0.75em",visibility:"hidden",maxWidth:.01,transition:B.transitions.create("max-width",{duration:50,easing:B.transitions.easing.easeOut}),whiteSpace:"nowrap","& > span":{paddingLeft:5,paddingRight:5,display:"inline-block",opacity:0,visibility:"visible"}},A.notched&&{maxWidth:"100%",transition:B.transitions.create("max-width",{duration:100,easing:B.transitions.easing.easeOut,delay:50})})));function rW(A){const{className:B,label:Q,notched:e}=A,t=DA(A,CW),g=Q!=null&&Q!=="",n=b({},A,{notched:e,withLabel:g});return R.jsx(oW,b({"aria-hidden":!0,className:B,ownerState:n},t,{children:R.jsx(iW,{ownerState:n,children:g?R.jsx("span",{children:Q}):oM||(oM=R.jsx("span",{className:"notranslate",children:"​"}))})}))}const IW=["components","fullWidth","inputComponent","label","multiline","notched","slots","type"],aW=A=>{const{classes:B}=A,e=qA({root:["root"],notchedOutline:["notchedOutline"],input:["input"]},PS,B);return b({},B,e)},sW=wA(wc,{shouldForwardProp:A=>ct(A)||A==="classes",name:"MuiOutlinedInput",slot:"Root",overridesResolver:lc})(({theme:A,ownerState:B})=>{const Q=A.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return b({position:"relative",borderRadius:(A.vars||A).shape.borderRadius,[`&:hover .${un.notchedOutline}`]:{borderColor:(A.vars||A).palette.text.primary},"@media (hover: none)":{[`&:hover .${un.notchedOutline}`]:{borderColor:A.vars?`rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)`:Q}},[`&.${un.focused} .${un.notchedOutline}`]:{borderColor:(A.vars||A).palette[B.color].main,borderWidth:2},[`&.${un.error} .${un.notchedOutline}`]:{borderColor:(A.vars||A).palette.error.main},[`&.${un.disabled} .${un.notchedOutline}`]:{borderColor:(A.vars||A).palette.action.disabled}},B.startAdornment&&{paddingLeft:14},B.endAdornment&&{paddingRight:14},B.multiline&&b({padding:"16.5px 14px"},B.size==="small"&&{padding:"8.5px 14px"}))}),lW=wA(rW,{name:"MuiOutlinedInput",slot:"NotchedOutline",overridesResolver:(A,B)=>B.notchedOutline})(({theme:A})=>{const B=A.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)";return{borderColor:A.vars?`rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)`:B}}),cW=wA(Fc,{name:"MuiOutlinedInput",slot:"Input",overridesResolver:cc})(({theme:A,ownerState:B})=>b({padding:"16.5px 14px"},!A.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:A.palette.mode==="light"?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:A.palette.mode==="light"?null:"#fff",caretColor:A.palette.mode==="light"?null:"#fff",borderRadius:"inherit"}},A.vars&&{"&:-webkit-autofill":{borderRadius:"inherit"},[A.getColorSchemeSelector("dark")]:{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}},B.size==="small"&&{padding:"8.5px 14px"},B.multiline&&{padding:0},B.startAdornment&&{paddingLeft:0},B.endAdornment&&{paddingRight:0})),dm=G.forwardRef(function(B,Q){var e,t,g,n,E;const C=jA({props:B,name:"MuiOutlinedInput"}),{components:o={},fullWidth:i=!1,inputComponent:r="input",label:I,multiline:a=!1,notched:d,slots:D={},type:U="text"}=C,l=DA(C,IW),F=aW(C),c=BC(),w=oi({props:C,muiFormControl:c,states:["color","disabled","error","focused","hiddenLabel","size","required"]}),M=b({},C,{color:w.color||"primary",disabled:w.disabled,error:w.error,focused:w.focused,formControl:c,fullWidth:i,hiddenLabel:w.hiddenLabel,multiline:a,size:w.size,type:U}),Y=(e=(t=D.root)!=null?t:o.Root)!=null?e:sW,p=(g=(n=D.input)!=null?n:o.Input)!=null?g:cW;return R.jsx(hu,b({slots:{root:Y,input:p},renderSuffix:k=>R.jsx(lW,{ownerState:M,className:F.notchedOutline,label:I!=null&&I!==""&&w.required?E||(E=R.jsxs(G.Fragment,{children:[I," ","*"]})):I,notched:typeof d<"u"?d:!!(k.startAdornment||k.filled||k.focused)}),fullWidth:i,inputComponent:r,multiline:a,ref:Q,type:U},l,{classes:b({},F,{notchedOutline:null})}))});dm.muiName="Input";const um=dm,wW=pQ(R.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),FW=pQ(R.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function DW(A){return zA("MuiRating",A)}const dW=TA("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),sr=dW,uW=["value"],UW=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function fW(A,B,Q){return A<B?B:A>Q?Q:A}function MW(A){const B=A.toString().split(".")[1];return B?B.length:0}function Rw(A,B){if(A==null)return A;const Q=Math.round(A/B)*B;return Number(Q.toFixed(MW(B)))}const GW=A=>{const{classes:B,size:Q,readOnly:e,disabled:t,emptyValueFocused:g,focusVisible:n}=A,E={root:["root",`size${FA(Q)}`,t&&"disabled",n&&"focusVisible",e&&"readOnly"],label:["label","pristine"],labelEmptyValue:[g&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return qA(E,DW,B)},hW=wA("span",{name:"MuiRating",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[{[`& .${sr.visuallyHidden}`]:B.visuallyHidden},B.root,B[`size${FA(Q.size)}`],Q.readOnly&&B.readOnly]}})(({theme:A,ownerState:B})=>b({display:"inline-flex",position:"relative",fontSize:A.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${sr.disabled}`]:{opacity:(A.vars||A).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${sr.focusVisible} .${sr.iconActive}`]:{outline:"1px solid #999"},[`& .${sr.visuallyHidden}`]:Gk},B.size==="small"&&{fontSize:A.typography.pxToRem(18)},B.size==="large"&&{fontSize:A.typography.pxToRem(30)},B.readOnly&&{pointerEvents:"none"})),Um=wA("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:A},B)=>[B.label,A.emptyValueFocused&&B.labelEmptyValueActive]})(({ownerState:A})=>b({cursor:"inherit"},A.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),pW=wA("span",{name:"MuiRating",slot:"Icon",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.icon,Q.iconEmpty&&B.iconEmpty,Q.iconFilled&&B.iconFilled,Q.iconHover&&B.iconHover,Q.iconFocus&&B.iconFocus,Q.iconActive&&B.iconActive]}})(({theme:A,ownerState:B})=>b({display:"flex",transition:A.transitions.create("transform",{duration:A.transitions.duration.shortest}),pointerEvents:"none"},B.iconActive&&{transform:"scale(1.2)"},B.iconEmpty&&{color:(A.vars||A).palette.action.disabled})),RW=wA("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:A=>LR(A)&&A!=="iconActive",overridesResolver:(A,B)=>{const{iconActive:Q}=A;return[B.decimal,Q&&B.iconActive]}})(({iconActive:A})=>b({position:"relative"},A&&{transform:"scale(1.2)"}));function mW(A){const B=DA(A,uW);return R.jsx("span",b({},B))}function iM(A){const{classes:B,disabled:Q,emptyIcon:e,focus:t,getLabelText:g,highlightSelectedOnly:n,hover:E,icon:C,IconContainerComponent:o,isActive:i,itemValue:r,labelProps:I,name:a,onBlur:d,onChange:D,onClick:U,onFocus:l,readOnly:F,ownerState:c,ratingValue:w,ratingValueRounded:M}=A,Y=n?r===w:r<=w,p=r<=E,k=r<=t,Z=r===M,J=LI(),W=R.jsx(pW,{as:o,value:r,className:pA(B.icon,Y?B.iconFilled:B.iconEmpty,p&&B.iconHover,k&&B.iconFocus,i&&B.iconActive),ownerState:b({},c,{iconEmpty:!Y,iconFilled:Y,iconHover:p,iconFocus:k,iconActive:i}),children:e&&!Y?e:C});return F?R.jsx("span",b({},I,{children:W})):R.jsxs(G.Fragment,{children:[R.jsxs(Um,b({ownerState:b({},c,{emptyValueFocused:void 0}),htmlFor:J},I,{children:[W,R.jsx("span",{className:B.visuallyHidden,children:g(r)})]})),R.jsx("input",{className:B.visuallyHidden,onFocus:l,onBlur:d,onChange:D,onClick:U,disabled:Q,value:r,id:J,type:"radio",name:a,checked:Z})]})}const YW=R.jsx(wW,{fontSize:"inherit"}),NW=R.jsx(FW,{fontSize:"inherit"});function bW(A){return`${A} Star${A!==1?"s":""}`}const yW=G.forwardRef(function(B,Q){const e=jA({name:"MuiRating",props:B}),{className:t,defaultValue:g=null,disabled:n=!1,emptyIcon:E=NW,emptyLabelText:C="Empty",getLabelText:o=bW,highlightSelectedOnly:i=!1,icon:r=YW,IconContainerComponent:I=mW,max:a=5,name:d,onChange:D,onChangeActive:U,onMouseLeave:l,onMouseMove:F,precision:c=1,readOnly:w=!1,size:M="medium",value:Y}=e,p=DA(e,UW),k=LI(d),[Z,J]=Ts({controlled:Y,default:g,name:"Rating"}),W=Rw(Z,c),T=Tg(),[{hover:j,focus:P},_]=G.useState({hover:-1,focus:-1});let $=W;j!==-1&&($=j),P!==-1&&($=P);const{isFocusVisibleRef:QA,onBlur:H,onFocus:K,ref:BA}=Vd(),[dA,rA]=G.useState(!1),JA=G.useRef(),MA=EQ(BA,JA,Q),SA=UA=>{F&&F(UA);const tB=JA.current,{right:OA,left:cA,width:hB}=tB.getBoundingClientRect();let iB;T.direction==="rtl"?iB=(OA-UA.clientX)/hB:iB=(UA.clientX-cA)/hB;let gA=Rw(a*iB+c/2,c);gA=fW(gA,c,a),_(yA=>yA.hover===gA&&yA.focus===gA?yA:{hover:gA,focus:gA}),rA(!1),U&&j!==gA&&U(UA,gA)},eA=UA=>{l&&l(UA);const tB=-1;_({hover:tB,focus:tB}),U&&j!==tB&&U(UA,tB)},tA=UA=>{let tB=UA.target.value===""?null:parseFloat(UA.target.value);j!==-1&&(tB=j),J(tB),D&&D(UA,tB)},eB=UA=>{UA.clientX===0&&UA.clientY===0||(_({hover:-1,focus:-1}),J(null),D&&parseFloat(UA.target.value)===W&&D(UA,null))},_A=UA=>{K(UA),QA.current===!0&&rA(!0);const tB=parseFloat(UA.target.value);_(OA=>({hover:OA.hover,focus:tB}))},EB=UA=>{if(j!==-1)return;H(UA),QA.current===!1&&rA(!1);const tB=-1;_(OA=>({hover:OA.hover,focus:tB}))},[XA,oB]=G.useState(!1),ZA=b({},e,{defaultValue:g,disabled:n,emptyIcon:E,emptyLabelText:C,emptyValueFocused:XA,focusVisible:dA,getLabelText:o,icon:r,IconContainerComponent:I,max:a,precision:c,readOnly:w,size:M}),LA=GW(ZA);return R.jsxs(hW,b({ref:MA,onMouseMove:SA,onMouseLeave:eA,className:pA(LA.root,t,w&&"MuiRating-readOnly"),ownerState:ZA,role:w?"img":null,"aria-label":w?o($):null},p,{children:[Array.from(new Array(a)).map((UA,tB)=>{const OA=tB+1,cA={classes:LA,disabled:n,emptyIcon:E,focus:P,getLabelText:o,highlightSelectedOnly:i,hover:j,icon:r,IconContainerComponent:I,name:k,onBlur:EB,onChange:tA,onClick:eB,onFocus:_A,ratingValue:$,ratingValueRounded:W,readOnly:w,ownerState:ZA},hB=OA===Math.ceil($)&&(j!==-1||P!==-1);if(c<1){const iB=Array.from(new Array(1/c));return R.jsx(RW,{className:pA(LA.decimal,hB&&LA.iconActive),ownerState:ZA,iconActive:hB,children:iB.map((gA,yA)=>{const VA=Rw(OA-1+(yA+1)*c,c);return R.jsx(iM,b({},cA,{isActive:!1,itemValue:VA,labelProps:{style:iB.length-1===yA?{}:{width:VA===$?`${(yA+1)*c*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),VA)})},OA)}return R.jsx(iM,b({},cA,{isActive:hB,itemValue:OA}),OA)}),!w&&!n&&R.jsxs(Um,{className:pA(LA.label,LA.labelEmptyValue),ownerState:ZA,children:[R.jsx("input",{className:LA.visuallyHidden,value:"",id:`${k}-empty`,type:"radio",name:k,checked:W==null,onFocus:()=>oB(!0),onBlur:()=>oB(!1),onChange:tA}),R.jsx("span",{className:LA.visuallyHidden,children:C})]})]}))}),fm=yW;function kW(A){return zA("MuiSelect",A)}const JW=TA("MuiSelect",["root","select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),lr=JW;var rM;const vW=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],ZW=wA("div",{name:"MuiSelect",slot:"Select",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[{[`&.${lr.select}`]:B.select},{[`&.${lr.select}`]:B[Q.variant]},{[`&.${lr.error}`]:B.error},{[`&.${lr.multiple}`]:B.multiple}]}})(Fm,{[`&.${lr.select}`]:{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}}),LW=wA("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.icon,Q.variant&&B[`icon${FA(Q.variant)}`],Q.open&&B.iconOpen]}})(Dm),SW=wA("input",{shouldForwardProp:A=>LR(A)&&A!=="classes",name:"MuiSelect",slot:"NativeInput",overridesResolver:(A,B)=>B.nativeInput})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function IM(A,B){return typeof B=="object"&&B!==null?A===B:String(A)===String(B)}function XW(A){return A==null||typeof A=="string"&&!A.trim()}const HW=A=>{const{classes:B,variant:Q,disabled:e,multiple:t,open:g,error:n}=A,E={select:["select",Q,e&&"disabled",t&&"multiple",n&&"error"],icon:["icon",`icon${FA(Q)}`,g&&"iconOpen",e&&"disabled"],nativeInput:["nativeInput"]};return qA(E,kW,B)},xW=G.forwardRef(function(B,Q){var e;const{"aria-describedby":t,"aria-label":g,autoFocus:n,autoWidth:E,children:C,className:o,defaultOpen:i,defaultValue:r,disabled:I,displayEmpty:a,error:d=!1,IconComponent:D,inputRef:U,labelId:l,MenuProps:F={},multiple:c,name:w,onBlur:M,onChange:Y,onClose:p,onFocus:k,onOpen:Z,open:J,readOnly:W,renderValue:T,SelectDisplayProps:j={},tabIndex:P,value:_,variant:$="standard"}=B,QA=DA(B,vW),[H,K]=Ts({controlled:_,default:r,name:"Select"}),[BA,dA]=Ts({controlled:J,default:i,name:"Select"}),rA=G.useRef(null),JA=G.useRef(null),[MA,SA]=G.useState(null),{current:eA}=G.useRef(J!=null),[tA,eB]=G.useState(),_A=EQ(Q,U),EB=G.useCallback(kA=>{JA.current=kA,kA&&SA(kA)},[]),XA=MA==null?void 0:MA.parentNode;G.useImperativeHandle(_A,()=>({focus:()=>{JA.current.focus()},node:rA.current,value:H}),[H]),G.useEffect(()=>{i&&BA&&MA&&!eA&&(eB(E?null:XA.clientWidth),JA.current.focus())},[MA,E]),G.useEffect(()=>{n&&JA.current.focus()},[n]),G.useEffect(()=>{if(!l)return;const kA=_Q(JA.current).getElementById(l);if(kA){const FB=()=>{getSelection().isCollapsed&&JA.current.focus()};return kA.addEventListener("click",FB),()=>{kA.removeEventListener("click",FB)}}},[l]);const oB=(kA,FB)=>{kA?Z&&Z(FB):p&&p(FB),eA||(eB(E?null:XA.clientWidth),dA(kA))},ZA=kA=>{kA.button===0&&(kA.preventDefault(),JA.current.focus(),oB(!0,kA))},LA=kA=>{oB(!1,kA)},UA=G.Children.toArray(C),tB=kA=>{const FB=UA.find(YB=>YB.props.value===kA.target.value);FB!==void 0&&(K(FB.props.value),Y&&Y(kA,FB))},OA=kA=>FB=>{let YB;if(FB.currentTarget.hasAttribute("tabindex")){if(c){YB=Array.isArray(H)?H.slice():[];const oA=H.indexOf(kA.props.value);oA===-1?YB.push(kA.props.value):YB.splice(oA,1)}else YB=kA.props.value;if(kA.props.onClick&&kA.props.onClick(FB),H!==YB&&(K(YB),Y)){const oA=FB.nativeEvent||FB,og=new oA.constructor(oA.type,oA);Object.defineProperty(og,"target",{writable:!0,value:{value:YB,name:w}}),Y(og,kA)}c||oB(!1,FB)}},cA=kA=>{W||[" ","ArrowUp","ArrowDown","Enter"].indexOf(kA.key)!==-1&&(kA.preventDefault(),oB(!0,kA))},hB=MA!==null&&BA,iB=kA=>{!hB&&M&&(Object.defineProperty(kA,"target",{writable:!0,value:{value:H,name:w}}),M(kA))};delete QA["aria-invalid"];let gA,yA;const VA=[];let HA=!1;(_s({value:H})||a)&&(T?gA=T(H):HA=!0);const cB=UA.map(kA=>{if(!G.isValidElement(kA))return null;let FB;if(c){if(!Array.isArray(H))throw new Error(zn(2));FB=H.some(YB=>IM(YB,kA.props.value)),FB&&HA&&VA.push(kA.props.children)}else FB=IM(H,kA.props.value),FB&&HA&&(yA=kA.props.children);return G.cloneElement(kA,{"aria-selected":FB?"true":"false",onClick:OA(kA),onKeyUp:YB=>{YB.key===" "&&YB.preventDefault(),kA.props.onKeyUp&&kA.props.onKeyUp(YB)},role:"option",selected:FB,value:void 0,"data-value":kA.props.value})});HA&&(c?VA.length===0?gA=null:gA=VA.reduce((kA,FB,YB)=>(kA.push(FB),YB<VA.length-1&&kA.push(", "),kA),[]):gA=yA);let qB=tA;!E&&eA&&MA&&(qB=XA.clientWidth);let RQ;typeof P<"u"?RQ=P:RQ=I?null:0;const QB=j.id||(w?`mui-component-select-${w}`:void 0),YA=b({},B,{variant:$,value:H,open:hB,error:d}),_B=HW(YA),wB=b({},F.PaperProps,(e=F.slotProps)==null?void 0:e.paper),De=LI();return R.jsxs(G.Fragment,{children:[R.jsx(ZW,b({ref:EB,tabIndex:RQ,role:"combobox","aria-controls":De,"aria-disabled":I?"true":void 0,"aria-expanded":hB?"true":"false","aria-haspopup":"listbox","aria-label":g,"aria-labelledby":[l,QB].filter(Boolean).join(" ")||void 0,"aria-describedby":t,onKeyDown:cA,onMouseDown:I||W?null:ZA,onBlur:iB,onFocus:k},j,{ownerState:YA,className:pA(j.className,_B.select,o),id:QB,children:XW(gA)?rM||(rM=R.jsx("span",{className:"notranslate",children:"​"})):gA})),R.jsx(SW,b({"aria-invalid":d,value:Array.isArray(H)?H.join(","):H,name:w,ref:rA,"aria-hidden":!0,onChange:tB,tabIndex:-1,disabled:I,className:_B.nativeInput,autoFocus:n,ownerState:YA},QA)),R.jsx(LW,{as:D,className:_B.icon,ownerState:YA}),R.jsx($9,b({id:`menu-${w||""}`,anchorEl:XA,open:hB,onClose:LA,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},F,{MenuListProps:b({"aria-labelledby":l,role:"listbox","aria-multiselectable":c?"true":void 0,disableListWrap:!0,id:De},F.MenuListProps),slotProps:b({},F.slotProps,{paper:b({},wB,{style:b({minWidth:qB},wB!=null?wB.style:null)})}),children:cB}))]})}),WW=xW,OW=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],TW=["root"],VW=A=>{const{classes:B}=A;return B},mu={name:"MuiSelect",overridesResolver:(A,B)=>B.root,shouldForwardProp:A=>ct(A)&&A!=="variant",slot:"Root"},zW=wA(sm,mu)(""),jW=wA(um,mu)(""),PW=wA(Cm,mu)(""),Mm=G.forwardRef(function(B,Q){const e=jA({name:"MuiSelect",props:B}),{autoWidth:t=!1,children:g,classes:n={},className:E,defaultOpen:C=!1,displayEmpty:o=!1,IconComponent:i=$S,id:r,input:I,inputProps:a,label:d,labelId:D,MenuProps:U,multiple:l=!1,native:F=!1,onClose:c,onOpen:w,open:M,renderValue:Y,SelectDisplayProps:p,variant:k="outlined"}=e,Z=DA(e,OW),J=F?EW:WW,W=BC(),T=oi({props:e,muiFormControl:W,states:["variant","error"]}),j=T.variant||k,P=b({},e,{variant:j,classes:n}),_=VW(P),$=DA(_,TW),QA=I||{standard:R.jsx(zW,{ownerState:P}),outlined:R.jsx(jW,{label:d,ownerState:P}),filled:R.jsx(PW,{ownerState:P})}[j],H=EQ(Q,QA.ref);return R.jsx(G.Fragment,{children:G.cloneElement(QA,b({inputComponent:J,inputProps:b({children:g,error:T.error,IconComponent:i,variant:j,type:void 0,multiple:l},F?{id:r}:{autoWidth:t,defaultOpen:C,displayEmpty:o,labelId:D,MenuProps:U,onClose:c,onOpen:w,open:M,renderValue:Y,SelectDisplayProps:b({id:r},p)},a,{classes:a?VQ($,a.classes):$},I?I.props.inputProps:{})},l&&F&&j==="outlined"?{notched:!0}:{},{ref:H,className:pA(QA.props.className,E,_.root)},!I&&{variant:j},Z))})});Mm.muiName="Select";const KW=Mm;function qW(A){return zA("MuiTooltip",A)}const _W=TA("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),yn=_W,$W=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function A8(A){return Math.round(A*1e5)/1e5}const B8=A=>{const{classes:B,disableInteractive:Q,arrow:e,touch:t,placement:g}=A,n={popper:["popper",!Q&&"popperInteractive",e&&"popperArrow"],tooltip:["tooltip",e&&"tooltipArrow",t&&"touch",`tooltipPlacement${FA(g.split("-")[0])}`],arrow:["arrow"]};return qA(n,qW,B)},Q8=wA(_R,{name:"MuiTooltip",slot:"Popper",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.popper,!Q.disableInteractive&&B.popperInteractive,Q.arrow&&B.popperArrow,!Q.open&&B.popperClose]}})(({theme:A,ownerState:B,open:Q})=>b({zIndex:(A.vars||A).zIndex.tooltip,pointerEvents:"none"},!B.disableInteractive&&{pointerEvents:"auto"},!Q&&{pointerEvents:"none"},B.arrow&&{[`&[data-popper-placement*="bottom"] .${yn.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${yn.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${yn.arrow}`]:b({},B.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${yn.arrow}`]:b({},B.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),e8=wA("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.tooltip,Q.touch&&B.touch,Q.arrow&&B.tooltipArrow,B[`tooltipPlacement${FA(Q.placement.split("-")[0])}`]]}})(({theme:A,ownerState:B})=>b({backgroundColor:A.vars?A.vars.palette.Tooltip.bg:TQ(A.palette.grey[700],.92),borderRadius:(A.vars||A).shape.borderRadius,color:(A.vars||A).palette.common.white,fontFamily:A.typography.fontFamily,padding:"4px 8px",fontSize:A.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:A.typography.fontWeightMedium},B.arrow&&{position:"relative",margin:0},B.touch&&{padding:"8px 16px",fontSize:A.typography.pxToRem(14),lineHeight:`${A8(16/14)}em`,fontWeight:A.typography.fontWeightRegular},{[`.${yn.popper}[data-popper-placement*="left"] &`]:b({transformOrigin:"right center"},B.isRtl?b({marginLeft:"14px"},B.touch&&{marginLeft:"24px"}):b({marginRight:"14px"},B.touch&&{marginRight:"24px"})),[`.${yn.popper}[data-popper-placement*="right"] &`]:b({transformOrigin:"left center"},B.isRtl?b({marginRight:"14px"},B.touch&&{marginRight:"24px"}):b({marginLeft:"14px"},B.touch&&{marginLeft:"24px"})),[`.${yn.popper}[data-popper-placement*="top"] &`]:b({transformOrigin:"center bottom",marginBottom:"14px"},B.touch&&{marginBottom:"24px"}),[`.${yn.popper}[data-popper-placement*="bottom"] &`]:b({transformOrigin:"center top",marginTop:"14px"},B.touch&&{marginTop:"24px"})})),t8=wA("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(A,B)=>B.arrow})(({theme:A})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:A.vars?A.vars.palette.Tooltip.bg:TQ(A.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Oa=!1,mw=null,cr={x:0,y:0};function Ta(A,B){return Q=>{B&&B(Q),A(Q)}}const g8=G.forwardRef(function(B,Q){var e,t,g,n,E,C,o,i,r,I,a,d,D,U,l,F,c,w,M;const Y=jA({props:B,name:"MuiTooltip"}),{arrow:p=!1,children:k,components:Z={},componentsProps:J={},describeChild:W=!1,disableFocusListener:T=!1,disableHoverListener:j=!1,disableInteractive:P=!1,disableTouchListener:_=!1,enterDelay:$=100,enterNextDelay:QA=0,enterTouchDelay:H=700,followCursor:K=!1,id:BA,leaveDelay:dA=0,leaveTouchDelay:rA=1500,onClose:JA,onOpen:MA,open:SA,placement:eA="bottom",PopperComponent:tA,PopperProps:eB={},slotProps:_A={},slots:EB={},title:XA,TransitionComponent:oB=$s,TransitionProps:ZA}=Y,LA=DA(Y,$W),UA=G.isValidElement(k)?k:R.jsx("span",{children:k}),tB=Tg(),OA=tB.direction==="rtl",[cA,hB]=G.useState(),[iB,gA]=G.useState(null),yA=G.useRef(!1),VA=P||K,HA=G.useRef(),cB=G.useRef(),qB=G.useRef(),RQ=G.useRef(),[QB,YA]=Ts({controlled:SA,default:!1,name:"Tooltip",state:"open"});let _B=QB;const wB=LI(BA),De=G.useRef(),kA=G.useCallback(()=>{De.current!==void 0&&(document.body.style.WebkitUserSelect=De.current,De.current=void 0),clearTimeout(RQ.current)},[]);G.useEffect(()=>()=>{clearTimeout(HA.current),clearTimeout(cB.current),clearTimeout(qB.current),kA()},[kA]);const FB=AB=>{clearTimeout(mw),Oa=!0,YA(!0),MA&&!_B&&MA(AB)},YB=bE(AB=>{clearTimeout(mw),mw=setTimeout(()=>{Oa=!1},800+dA),YA(!1),JA&&_B&&JA(AB),clearTimeout(HA.current),HA.current=setTimeout(()=>{yA.current=!1},tB.transitions.duration.shortest)}),oA=AB=>{yA.current&&AB.type!=="touchstart"||(cA&&cA.removeAttribute("title"),clearTimeout(cB.current),clearTimeout(qB.current),$||Oa&&QA?cB.current=setTimeout(()=>{FB(AB)},Oa?QA:$):FB(AB))},og=AB=>{clearTimeout(cB.current),clearTimeout(qB.current),qB.current=setTimeout(()=>{YB(AB)},dA)},{isFocusVisibleRef:eC,onBlur:ri,onFocus:xB,ref:Ii}=Vd(),[,qI]=G.useState(!1),_I=AB=>{ri(AB),eC.current===!1&&(qI(!1),og(AB))},$A=AB=>{cA||hB(AB.currentTarget),xB(AB),eC.current===!0&&(qI(!0),oA(AB))},$I=AB=>{yA.current=!0;const DQ=UA.props;DQ.onTouchStart&&DQ.onTouchStart(AB)},Aa=oA,ai=og,mc=AB=>{$I(AB),clearTimeout(qB.current),clearTimeout(HA.current),kA(),De.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",RQ.current=setTimeout(()=>{document.body.style.WebkitUserSelect=De.current,oA(AB)},H)},de=AB=>{UA.props.onTouchEnd&&UA.props.onTouchEnd(AB),kA(),clearTimeout(qB.current),qB.current=setTimeout(()=>{YB(AB)},rA)};G.useEffect(()=>{if(!_B)return;function AB(DQ){(DQ.key==="Escape"||DQ.key==="Esc")&&YB(DQ)}return document.addEventListener("keydown",AB),()=>{document.removeEventListener("keydown",AB)}},[YB,_B]);const Ba=EQ(UA.ref,Ii,hB,Q);!XA&&XA!==0&&(_B=!1);const ue=G.useRef(),Qa=AB=>{const DQ=UA.props;DQ.onMouseMove&&DQ.onMouseMove(AB),cr={x:AB.clientX,y:AB.clientY},ue.current&&ue.current.update()},Ft={},QE=typeof XA=="string";W?(Ft.title=!_B&&QE&&!j?XA:null,Ft["aria-describedby"]=_B?wB:null):(Ft["aria-label"]=QE?XA:null,Ft["aria-labelledby"]=_B&&!QE?wB:null);const CQ=b({},Ft,LA,UA.props,{className:pA(LA.className,UA.props.className),onTouchStart:$I,ref:Ba},K?{onMouseMove:Qa}:{}),Ue={};_||(CQ.onTouchStart=mc,CQ.onTouchEnd=de),j||(CQ.onMouseOver=Ta(Aa,CQ.onMouseOver),CQ.onMouseLeave=Ta(ai,CQ.onMouseLeave),VA||(Ue.onMouseOver=Aa,Ue.onMouseLeave=ai)),T||(CQ.onFocus=Ta($A,CQ.onFocus),CQ.onBlur=Ta(_I,CQ.onBlur),VA||(Ue.onFocus=$A,Ue.onBlur=_I));const Be=G.useMemo(()=>{var AB;let DQ=[{name:"arrow",enabled:!!iB,options:{element:iB,padding:4}}];return(AB=eB.popperOptions)!=null&&AB.modifiers&&(DQ=DQ.concat(eB.popperOptions.modifiers)),b({},eB.popperOptions,{modifiers:DQ})},[iB,eB]),FQ=b({},Y,{isRtl:OA,arrow:p,disableInteractive:VA,placement:eA,PopperComponentProp:tA,touch:yA.current}),eE=B8(FQ),tC=(e=(t=EB.popper)!=null?t:Z.Popper)!=null?e:Q8,si=(g=(n=(E=EB.transition)!=null?E:Z.Transition)!=null?n:oB)!=null?g:$s,li=(C=(o=EB.tooltip)!=null?o:Z.Tooltip)!=null?C:e8,ci=(i=(r=EB.arrow)!=null?r:Z.Arrow)!=null?i:t8,ea=Gr(tC,b({},eB,(I=_A.popper)!=null?I:J.popper,{className:pA(eE.popper,eB==null?void 0:eB.className,(a=(d=_A.popper)!=null?d:J.popper)==null?void 0:a.className)}),FQ),ta=Gr(si,b({},ZA,(D=_A.transition)!=null?D:J.transition),FQ),ga=Gr(li,b({},(U=_A.tooltip)!=null?U:J.tooltip,{className:pA(eE.tooltip,(l=(F=_A.tooltip)!=null?F:J.tooltip)==null?void 0:l.className)}),FQ),na=Gr(ci,b({},(c=_A.arrow)!=null?c:J.arrow,{className:pA(eE.arrow,(w=(M=_A.arrow)!=null?M:J.arrow)==null?void 0:w.className)}),FQ);return R.jsxs(G.Fragment,{children:[G.cloneElement(UA,CQ),R.jsx(tC,b({as:tA??_R,placement:eA,anchorEl:K?{getBoundingClientRect:()=>({top:cr.y,left:cr.x,right:cr.x,bottom:cr.y,width:0,height:0})}:cA,popperRef:ue,open:cA?_B:!1,id:wB,transition:!0},Ue,ea,{popperOptions:Be,children:({TransitionProps:AB})=>R.jsx(si,b({timeout:tB.transitions.duration.shorter},AB,ta,{children:R.jsxs(li,b({},ga,{children:[XA,p?R.jsx(ci,b({},na,{ref:gA})):null]}))}))}))]})}),n8=g8;function E8(A){return zA("MuiToolbar",A)}TA("MuiToolbar",["root","gutters","regular","dense"]);const C8=["className","component","disableGutters","variant"],o8=A=>{const{classes:B,disableGutters:Q,variant:e}=A;return qA({root:["root",!Q&&"gutters",e]},E8,B)},i8=wA("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(A,B)=>{const{ownerState:Q}=A;return[B.root,!Q.disableGutters&&B.gutters,B[Q.variant]]}})(({theme:A,ownerState:B})=>b({position:"relative",display:"flex",alignItems:"center"},!B.disableGutters&&{paddingLeft:A.spacing(2),paddingRight:A.spacing(2),[A.breakpoints.up("sm")]:{paddingLeft:A.spacing(3),paddingRight:A.spacing(3)}},B.variant==="dense"&&{minHeight:48}),({theme:A,ownerState:B})=>B.variant==="regular"&&A.mixins.toolbar),r8=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiToolbar"}),{className:t,component:g="div",disableGutters:n=!1,variant:E="regular"}=e,C=DA(e,C8),o=b({},e,{component:g,disableGutters:n,variant:E}),i=o8(o);return R.jsx(i8,b({as:g,className:pA(i.root,t),ref:Q,ownerState:o},C))}),I8=r8;function a8(A){return zA("MuiTextField",A)}TA("MuiTextField",["root"]);const s8=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],l8={standard:sm,filled:Cm,outlined:um},c8=A=>{const{classes:B}=A;return qA({root:["root"]},a8,B)},w8=wA(Ax,{name:"MuiTextField",slot:"Root",overridesResolver:(A,B)=>B.root})({}),F8=G.forwardRef(function(B,Q){const e=jA({props:B,name:"MuiTextField"}),{autoComplete:t,autoFocus:g=!1,children:n,className:E,color:C="primary",defaultValue:o,disabled:i=!1,error:r=!1,FormHelperTextProps:I,fullWidth:a=!1,helperText:d,id:D,InputLabelProps:U,inputProps:l,InputProps:F,inputRef:c,label:w,maxRows:M,minRows:Y,multiline:p=!1,name:k,onBlur:Z,onChange:J,onFocus:W,placeholder:T,required:j=!1,rows:P,select:_=!1,SelectProps:$,type:QA,value:H,variant:K="outlined"}=e,BA=DA(e,s8),dA=b({},e,{autoFocus:g,color:C,disabled:i,error:r,fullWidth:a,multiline:p,required:j,select:_,variant:K}),rA=c8(dA),JA={};K==="outlined"&&(U&&typeof U.shrink<"u"&&(JA.notched=U.shrink),JA.label=w),_&&((!$||!$.native)&&(JA.id=void 0),JA["aria-describedby"]=void 0);const MA=LI(D),SA=d&&MA?`${MA}-helper-text`:void 0,eA=w&&MA?`${MA}-label`:void 0,tA=l8[K],eB=R.jsx(tA,b({"aria-describedby":SA,autoComplete:t,autoFocus:g,defaultValue:o,fullWidth:a,multiline:p,name:k,rows:P,maxRows:M,minRows:Y,type:QA,value:H,id:MA,inputRef:c,onBlur:Z,onChange:J,onFocus:W,placeholder:T,inputProps:l},JA,F));return R.jsxs(w8,b({className:pA(rA.root,E),disabled:i,error:r,fullWidth:a,ref:Q,required:j,color:C,variant:K,ownerState:dA},BA,{children:[w!=null&&w!==""&&R.jsx(_x,b({htmlFor:MA,id:eA},U,{children:w})),_?R.jsx(KW,b({"aria-describedby":SA,id:MA,labelId:eA,value:H,input:eB},$,{children:n})):eB,d&&R.jsx(Ex,b({id:SA},I,{children:d}))]}))}),D8=F8,d8=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];function u8(A={}){const{disableGlobal:B=!1,productionPrefix:Q="jss",seed:e=""}=A,t=e===""?"":`${e}-`;let g=0;const n=()=>(g+=1,g);return(E,C)=>{const o=C.options.name;if(o&&o.indexOf("Mui")===0&&!C.options.link&&!B){if(d8.indexOf(E.key)!==-1)return`Mui-${E.key}`;const i=`${t}${o}-${E.key}`;return!C.options.theme[ZR]||e!==""?i:`${i}-${n()}`}return`${t}${Q}${n()}`}}var aM=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(A){return typeof A}:function(A){return A&&typeof Symbol=="function"&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},TI=(typeof window>"u"?"undefined":aM(window))==="object"&&(typeof document>"u"?"undefined":aM(document))==="object"&&document.nodeType===9;function uI(A){"@babel/helpers - typeof";return uI=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},uI(A)}function U8(A,B){if(uI(A)!="object"||!A)return A;var Q=A[Symbol.toPrimitive];if(Q!==void 0){var e=Q.call(A,B||"default");if(uI(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(B==="string"?String:Number)(A)}function f8(A){var B=U8(A,"string");return uI(B)=="symbol"?B:String(B)}function sM(A,B){for(var Q=0;Q<B.length;Q++){var e=B[Q];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(A,f8(e.key),e)}}function Gm(A,B,Q){return B&&sM(A.prototype,B),Q&&sM(A,Q),Object.defineProperty(A,"prototype",{writable:!1}),A}var M8={}.constructor;function uD(A){if(A==null||typeof A!="object")return A;if(Array.isArray(A))return A.map(uD);if(A.constructor!==M8)return A;var B={};for(var Q in A)B[Q]=uD(A[Q]);return B}function Yu(A,B,Q){A===void 0&&(A="unnamed");var e=Q.jss,t=uD(B),g=e.plugins.onCreateRule(A,t,Q);return g||(A[0],null)}var lM=function(B,Q){for(var e="",t=0;t<B.length&&B[t]!=="!important";t++)e&&(e+=Q),e+=B[t];return e},SE=function(B){if(!Array.isArray(B))return B;var Q="";if(Array.isArray(B[0]))for(var e=0;e<B.length&&B[e]!=="!important";e++)Q&&(Q+=", "),Q+=lM(B[e]," ");else Q=lM(B,", ");return B[B.length-1]==="!important"&&(Q+=" !important"),Q};function ii(A){return A&&A.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function wr(A,B){for(var Q="",e=0;e<B;e++)Q+="  ";return Q+A}function UI(A,B,Q){Q===void 0&&(Q={});var e="";if(!B)return e;var t=Q,g=t.indent,n=g===void 0?0:g,E=B.fallbacks;Q.format===!1&&(n=-1/0);var C=ii(Q),o=C.linebreak,i=C.space;if(A&&n++,E)if(Array.isArray(E))for(var r=0;r<E.length;r++){var I=E[r];for(var a in I){var d=I[a];d!=null&&(e&&(e+=o),e+=wr(a+":"+i+SE(d)+";",n))}}else for(var D in E){var U=E[D];U!=null&&(e&&(e+=o),e+=wr(D+":"+i+SE(U)+";",n))}for(var l in B){var F=B[l];F!=null&&l!=="fallbacks"&&(e&&(e+=o),e+=wr(l+":"+i+SE(F)+";",n))}return!e&&!Q.allowEmpty||!A?e:(n--,e&&(e=""+o+e+o),wr(""+A+i+"{"+e,n)+wr("}",n))}var G8=/([[\].#*$><+~=|^:(),"'`\s])/g,cM=typeof CSS<"u"&&CSS.escape,Nu=function(A){return cM?cM(A):A.replace(G8,"\\$1")},hm=function(){function A(Q,e,t){this.type="style",this.isProcessed=!1;var g=t.sheet,n=t.Renderer;this.key=Q,this.options=t,this.style=e,g?this.renderer=g.renderer:n&&(this.renderer=new n)}var B=A.prototype;return B.prop=function(e,t,g){if(t===void 0)return this.style[e];var n=g?g.force:!1;if(!n&&this.style[e]===t)return this;var E=t;(!g||g.process!==!1)&&(E=this.options.jss.plugins.onChangeValue(t,e,this));var C=E==null||E===!1,o=e in this.style;if(C&&!o&&!n)return this;var i=C&&o;if(i?delete this.style[e]:this.style[e]=E,this.renderable&&this.renderer)return i?this.renderer.removeProperty(this.renderable,e):this.renderer.setProperty(this.renderable,e,E),this;var r=this.options.sheet;return r&&r.attached,this},A}(),UD=function(A){ic(B,A);function B(e,t,g){var n;n=A.call(this,e,t,g)||this;var E=g.selector,C=g.scoped,o=g.sheet,i=g.generateId;return E?n.selectorText=E:C!==!1&&(n.id=i(sD(sD(n)),o),n.selectorText="."+Nu(n.id)),n}var Q=B.prototype;return Q.applyTo=function(t){var g=this.renderer;if(g){var n=this.toJSON();for(var E in n)g.setProperty(t,E,n[E])}return this},Q.toJSON=function(){var t={};for(var g in this.style){var n=this.style[g];typeof n!="object"?t[g]=n:Array.isArray(n)&&(t[g]=SE(n))}return t},Q.toString=function(t){var g=this.options.sheet,n=g?g.options.link:!1,E=n?b({},t,{allowEmpty:!0}):t;return UI(this.selectorText,this.style,E)},Gm(B,[{key:"selector",set:function(t){if(t!==this.selectorText){this.selectorText=t;var g=this.renderer,n=this.renderable;if(!(!n||!g)){var E=g.setSelector(n,t);E||g.replaceRule(n,this)}}},get:function(){return this.selectorText}}]),B}(hm),h8={onCreateRule:function(B,Q,e){return B[0]==="@"||e.parent&&e.parent.type==="keyframes"?null:new UD(B,Q,e)}},Yw={indent:1,children:!0},p8=/@([\w-]+)/,R8=function(){function A(Q,e,t){this.type="conditional",this.isProcessed=!1,this.key=Q;var g=Q.match(p8);this.at=g?g[1]:"unknown",this.query=t.name||"@"+this.at,this.options=t,this.rules=new uc(b({},t,{parent:this}));for(var n in e)this.rules.add(n,e[n]);this.rules.process()}var B=A.prototype;return B.getRule=function(e){return this.rules.get(e)},B.indexOf=function(e){return this.rules.indexOf(e)},B.addRule=function(e,t,g){var n=this.rules.add(e,t,g);return n?(this.options.jss.plugins.onProcessRule(n),n):null},B.replaceRule=function(e,t,g){var n=this.rules.replace(e,t,g);return n&&this.options.jss.plugins.onProcessRule(n),n},B.toString=function(e){e===void 0&&(e=Yw);var t=ii(e),g=t.linebreak;if(e.indent==null&&(e.indent=Yw.indent),e.children==null&&(e.children=Yw.children),e.children===!1)return this.query+" {}";var n=this.rules.toString(e);return n?this.query+" {"+g+n+g+"}":""},A}(),m8=/@container|@media|@supports\s+/,Y8={onCreateRule:function(B,Q,e){return m8.test(B)?new R8(B,Q,e):null}},Nw={indent:1,children:!0},N8=/@keyframes\s+([\w-]+)/,fD=function(){function A(Q,e,t){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var g=Q.match(N8);g&&g[1]?this.name=g[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=t;var n=t.scoped,E=t.sheet,C=t.generateId;this.id=n===!1?this.name:Nu(C(this,E)),this.rules=new uc(b({},t,{parent:this}));for(var o in e)this.rules.add(o,e[o],b({},t,{parent:this}));this.rules.process()}var B=A.prototype;return B.toString=function(e){e===void 0&&(e=Nw);var t=ii(e),g=t.linebreak;if(e.indent==null&&(e.indent=Nw.indent),e.children==null&&(e.children=Nw.children),e.children===!1)return this.at+" "+this.id+" {}";var n=this.rules.toString(e);return n&&(n=""+g+n+g),this.at+" "+this.id+" {"+n+"}"},A}(),b8=/@keyframes\s+/,y8=/\$([\w-]+)/g,MD=function(B,Q){return typeof B=="string"?B.replace(y8,function(e,t){return t in Q?Q[t]:e}):B},wM=function(B,Q,e){var t=B[Q],g=MD(t,e);g!==t&&(B[Q]=g)},k8={onCreateRule:function(B,Q,e){return typeof B=="string"&&b8.test(B)?new fD(B,Q,e):null},onProcessStyle:function(B,Q,e){return Q.type!=="style"||!e||("animation-name"in B&&wM(B,"animation-name",e.keyframes),"animation"in B&&wM(B,"animation",e.keyframes)),B},onChangeValue:function(B,Q,e){var t=e.options.sheet;if(!t)return B;switch(Q){case"animation":return MD(B,t.keyframes);case"animation-name":return MD(B,t.keyframes);default:return B}}},J8=function(A){ic(B,A);function B(){return A.apply(this,arguments)||this}var Q=B.prototype;return Q.toString=function(t){var g=this.options.sheet,n=g?g.options.link:!1,E=n?b({},t,{allowEmpty:!0}):t;return UI(this.key,this.style,E)},B}(hm),v8={onCreateRule:function(B,Q,e){return e.parent&&e.parent.type==="keyframes"?new J8(B,Q,e):null}},Z8=function(){function A(Q,e,t){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=Q,this.style=e,this.options=t}var B=A.prototype;return B.toString=function(e){var t=ii(e),g=t.linebreak;if(Array.isArray(this.style)){for(var n="",E=0;E<this.style.length;E++)n+=UI(this.at,this.style[E]),this.style[E+1]&&(n+=g);return n}return UI(this.at,this.style,e)},A}(),L8=/@font-face/,S8={onCreateRule:function(B,Q,e){return L8.test(B)?new Z8(B,Q,e):null}},X8=function(){function A(Q,e,t){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=Q,this.style=e,this.options=t}var B=A.prototype;return B.toString=function(e){return UI(this.key,this.style,e)},A}(),H8={onCreateRule:function(B,Q,e){return B==="@viewport"||B==="@-ms-viewport"?new X8(B,Q,e):null}},x8=function(){function A(Q,e,t){this.type="simple",this.isProcessed=!1,this.key=Q,this.value=e,this.options=t}var B=A.prototype;return B.toString=function(e){if(Array.isArray(this.value)){for(var t="",g=0;g<this.value.length;g++)t+=this.key+" "+this.value[g]+";",this.value[g+1]&&(t+=`
`);return t}return this.key+" "+this.value+";"},A}(),W8={"@charset":!0,"@import":!0,"@namespace":!0},O8={onCreateRule:function(B,Q,e){return B in W8?new x8(B,Q,e):null}},FM=[h8,Y8,k8,v8,S8,H8,O8],T8={process:!0},DM={force:!0,process:!0},uc=function(){function A(Q){this.map={},this.raw={},this.index=[],this.counter=0,this.options=Q,this.classes=Q.classes,this.keyframes=Q.keyframes}var B=A.prototype;return B.add=function(e,t,g){var n=this.options,E=n.parent,C=n.sheet,o=n.jss,i=n.Renderer,r=n.generateId,I=n.scoped,a=b({classes:this.classes,parent:E,sheet:C,jss:o,Renderer:i,generateId:r,scoped:I,name:e,keyframes:this.keyframes,selector:void 0},g),d=e;e in this.raw&&(d=e+"-d"+this.counter++),this.raw[d]=t,d in this.classes&&(a.selector="."+Nu(this.classes[d]));var D=Yu(d,t,a);if(!D)return null;this.register(D);var U=a.index===void 0?this.index.length:a.index;return this.index.splice(U,0,D),D},B.replace=function(e,t,g){var n=this.get(e),E=this.index.indexOf(n);n&&this.remove(n);var C=g;return E!==-1&&(C=b({},g,{index:E})),this.add(e,t,C)},B.get=function(e){return this.map[e]},B.remove=function(e){this.unregister(e),delete this.raw[e.key],this.index.splice(this.index.indexOf(e),1)},B.indexOf=function(e){return this.index.indexOf(e)},B.process=function(){var e=this.options.jss.plugins;this.index.slice(0).forEach(e.onProcessRule,e)},B.register=function(e){this.map[e.key]=e,e instanceof UD?(this.map[e.selector]=e,e.id&&(this.classes[e.key]=e.id)):e instanceof fD&&this.keyframes&&(this.keyframes[e.name]=e.id)},B.unregister=function(e){delete this.map[e.key],e instanceof UD?(delete this.map[e.selector],delete this.classes[e.key]):e instanceof fD&&delete this.keyframes[e.name]},B.update=function(){var e,t,g;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(e=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1],g=arguments.length<=2?void 0:arguments[2]):(t=arguments.length<=0?void 0:arguments[0],g=arguments.length<=1?void 0:arguments[1],e=null),e)this.updateOne(this.get(e),t,g);else for(var n=0;n<this.index.length;n++)this.updateOne(this.index[n],t,g)},B.updateOne=function(e,t,g){g===void 0&&(g=T8);var n=this.options,E=n.jss.plugins,C=n.sheet;if(e.rules instanceof A){e.rules.update(t,g);return}var o=e.style;if(E.onUpdate(t,e,C,g),g.process&&o&&o!==e.style){E.onProcessStyle(e.style,e,C);for(var i in e.style){var r=e.style[i],I=o[i];r!==I&&e.prop(i,r,DM)}for(var a in o){var d=e.style[a],D=o[a];d==null&&d!==D&&e.prop(a,null,DM)}}},B.toString=function(e){for(var t="",g=this.options.sheet,n=g?g.options.link:!1,E=ii(e),C=E.linebreak,o=0;o<this.index.length;o++){var i=this.index[o],r=i.toString(e);!r&&!n||(t&&(t+=C),t+=r)}return t},A}(),pm=function(){function A(Q,e){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=b({},e,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),e.Renderer&&(this.renderer=new e.Renderer(this)),this.rules=new uc(this.options);for(var t in Q)this.rules.add(t,Q[t]);this.rules.process()}var B=A.prototype;return B.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},B.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},B.addRule=function(e,t,g){var n=this.queue;this.attached&&!n&&(this.queue=[]);var E=this.rules.add(e,t,g);return E?(this.options.jss.plugins.onProcessRule(E),this.attached?(this.deployed&&(n?n.push(E):(this.insertRule(E),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),E):(this.deployed=!1,E)):null},B.replaceRule=function(e,t,g){var n=this.rules.get(e);if(!n)return this.addRule(e,t,g);var E=this.rules.replace(e,t,g);return E&&this.options.jss.plugins.onProcessRule(E),this.attached?(this.deployed&&this.renderer&&(E?n.renderable&&this.renderer.replaceRule(n.renderable,E):this.renderer.deleteRule(n)),E):(this.deployed=!1,E)},B.insertRule=function(e){this.renderer&&this.renderer.insertRule(e)},B.addRules=function(e,t){var g=[];for(var n in e){var E=this.addRule(n,e[n],t);E&&g.push(E)}return g},B.getRule=function(e){return this.rules.get(e)},B.deleteRule=function(e){var t=typeof e=="object"?e:this.rules.get(e);return!t||this.attached&&!t.renderable?!1:(this.rules.remove(t),this.attached&&t.renderable&&this.renderer?this.renderer.deleteRule(t.renderable):!0)},B.indexOf=function(e){return this.rules.indexOf(e)},B.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},B.update=function(){var e;return(e=this.rules).update.apply(e,arguments),this},B.updateOne=function(e,t,g){return this.rules.updateOne(e,t,g),this},B.toString=function(e){return this.rules.toString(e)},A}(),V8=function(){function A(){this.plugins={internal:[],external:[]},this.registry={}}var B=A.prototype;return B.onCreateRule=function(e,t,g){for(var n=0;n<this.registry.onCreateRule.length;n++){var E=this.registry.onCreateRule[n](e,t,g);if(E)return E}return null},B.onProcessRule=function(e){if(!e.isProcessed){for(var t=e.options.sheet,g=0;g<this.registry.onProcessRule.length;g++)this.registry.onProcessRule[g](e,t);e.style&&this.onProcessStyle(e.style,e,t),e.isProcessed=!0}},B.onProcessStyle=function(e,t,g){for(var n=0;n<this.registry.onProcessStyle.length;n++)t.style=this.registry.onProcessStyle[n](t.style,t,g)},B.onProcessSheet=function(e){for(var t=0;t<this.registry.onProcessSheet.length;t++)this.registry.onProcessSheet[t](e)},B.onUpdate=function(e,t,g,n){for(var E=0;E<this.registry.onUpdate.length;E++)this.registry.onUpdate[E](e,t,g,n)},B.onChangeValue=function(e,t,g){for(var n=e,E=0;E<this.registry.onChangeValue.length;E++)n=this.registry.onChangeValue[E](n,t,g);return n},B.use=function(e,t){t===void 0&&(t={queue:"external"});var g=this.plugins[t.queue];g.indexOf(e)===-1&&(g.push(e),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(n,E){for(var C in E)C in n&&n[C].push(E[C]);return n},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},A}(),z8=function(){function A(){this.registry=[]}var B=A.prototype;return B.add=function(e){var t=this.registry,g=e.options.index;if(t.indexOf(e)===-1){if(t.length===0||g>=this.index){t.push(e);return}for(var n=0;n<t.length;n++)if(t[n].options.index>g){t.splice(n,0,e);return}}},B.reset=function(){this.registry=[]},B.remove=function(e){var t=this.registry.indexOf(e);this.registry.splice(t,1)},B.toString=function(e){for(var t=e===void 0?{}:e,g=t.attached,n=DA(t,["attached"]),E=ii(n),C=E.linebreak,o="",i=0;i<this.registry.length;i++){var r=this.registry[i];g!=null&&r.attached!==g||(o&&(o+=C),o+=r.toString(n))}return o},Gm(A,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),A}(),Or=new z8,GD=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),hD="2f1acc6c3a606b082e5eef5e54414ffb";GD[hD]==null&&(GD[hD]=0);var dM=GD[hD]++,uM=function(B){B===void 0&&(B={});var Q=0,e=function(g,n){Q+=1;var E="",C="";return n&&(n.options.classNamePrefix&&(C=n.options.classNamePrefix),n.options.jss.id!=null&&(E=String(n.options.jss.id))),B.minify?""+(C||"c")+dM+E+Q:C+g.key+"-"+dM+(E?"-"+E:"")+"-"+Q};return e},Rm=function(B){var Q;return function(){return Q||(Q=B()),Q}},j8=function(B,Q){try{return B.attributeStyleMap?B.attributeStyleMap.get(Q):B.style.getPropertyValue(Q)}catch{return""}},P8=function(B,Q,e){try{var t=e;if(Array.isArray(e)&&(t=SE(e)),B.attributeStyleMap)B.attributeStyleMap.set(Q,t);else{var g=t?t.indexOf("!important"):-1,n=g>-1?t.substr(0,g-1):t;B.style.setProperty(Q,n,g>-1?"important":"")}}catch{return!1}return!0},K8=function(B,Q){try{B.attributeStyleMap?B.attributeStyleMap.delete(Q):B.style.removeProperty(Q)}catch{}},q8=function(B,Q){return B.selectorText=Q,B.selectorText===Q},mm=Rm(function(){return document.querySelector("head")});function _8(A,B){for(var Q=0;Q<A.length;Q++){var e=A[Q];if(e.attached&&e.options.index>B.index&&e.options.insertionPoint===B.insertionPoint)return e}return null}function $8(A,B){for(var Q=A.length-1;Q>=0;Q--){var e=A[Q];if(e.attached&&e.options.insertionPoint===B.insertionPoint)return e}return null}function AO(A){for(var B=mm(),Q=0;Q<B.childNodes.length;Q++){var e=B.childNodes[Q];if(e.nodeType===8&&e.nodeValue.trim()===A)return e}return null}function BO(A){var B=Or.registry;if(B.length>0){var Q=_8(B,A);if(Q&&Q.renderer)return{parent:Q.renderer.element.parentNode,node:Q.renderer.element};if(Q=$8(B,A),Q&&Q.renderer)return{parent:Q.renderer.element.parentNode,node:Q.renderer.element.nextSibling}}var e=A.insertionPoint;if(e&&typeof e=="string"){var t=AO(e);if(t)return{parent:t.parentNode,node:t.nextSibling}}return!1}function QO(A,B){var Q=B.insertionPoint,e=BO(B);if(e!==!1&&e.parent){e.parent.insertBefore(A,e.node);return}if(Q&&typeof Q.nodeType=="number"){var t=Q,g=t.parentNode;g&&g.insertBefore(A,t.nextSibling);return}mm().appendChild(A)}var eO=Rm(function(){var A=document.querySelector('meta[property="csp-nonce"]');return A?A.getAttribute("content"):null}),UM=function(B,Q,e){try{"insertRule"in B?B.insertRule(Q,e):"appendRule"in B&&B.appendRule(Q)}catch{return!1}return B.cssRules[e]},fM=function(B,Q){var e=B.cssRules.length;return Q===void 0||Q>e?e:Q},tO=function(){var B=document.createElement("style");return B.textContent=`
`,B},gO=function(){function A(Q){this.getPropertyValue=j8,this.setProperty=P8,this.removeProperty=K8,this.setSelector=q8,this.hasInsertedRules=!1,this.cssRules=[],Q&&Or.add(Q),this.sheet=Q;var e=this.sheet?this.sheet.options:{},t=e.media,g=e.meta,n=e.element;this.element=n||tO(),this.element.setAttribute("data-jss",""),t&&this.element.setAttribute("media",t),g&&this.element.setAttribute("data-meta",g);var E=eO();E&&this.element.setAttribute("nonce",E)}var B=A.prototype;return B.attach=function(){if(!(this.element.parentNode||!this.sheet)){QO(this.element,this.sheet.options);var e=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&e&&(this.hasInsertedRules=!1,this.deploy())}},B.detach=function(){if(this.sheet){var e=this.element.parentNode;e&&e.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},B.deploy=function(){var e=this.sheet;if(e){if(e.options.link){this.insertRules(e.rules);return}this.element.textContent=`
`+e.toString()+`
`}},B.insertRules=function(e,t){for(var g=0;g<e.index.length;g++)this.insertRule(e.index[g],g,t)},B.insertRule=function(e,t,g){if(g===void 0&&(g=this.element.sheet),e.rules){var n=e,E=g;if(e.type==="conditional"||e.type==="keyframes"){var C=fM(g,t);if(E=UM(g,n.toString({children:!1}),C),E===!1)return!1;this.refCssRule(e,C,E)}return this.insertRules(n.rules,E),E}var o=e.toString();if(!o)return!1;var i=fM(g,t),r=UM(g,o,i);return r===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(e,i,r),r)},B.refCssRule=function(e,t,g){e.renderable=g,e.options.parent instanceof pm&&this.cssRules.splice(t,0,g)},B.deleteRule=function(e){var t=this.element.sheet,g=this.indexOf(e);return g===-1?!1:(t.deleteRule(g),this.cssRules.splice(g,1),!0)},B.indexOf=function(e){return this.cssRules.indexOf(e)},B.replaceRule=function(e,t){var g=this.indexOf(e);return g===-1?!1:(this.element.sheet.deleteRule(g),this.cssRules.splice(g,1),this.insertRule(t,g))},B.getRules=function(){return this.element.sheet.cssRules},A}(),nO=0,EO=function(){function A(Q){this.id=nO++,this.version="10.10.0",this.plugins=new V8,this.options={id:{minify:!1},createGenerateId:uM,Renderer:TI?gO:null,plugins:[]},this.generateId=uM({minify:!1});for(var e=0;e<FM.length;e++)this.plugins.use(FM[e],{queue:"internal"});this.setup(Q)}var B=A.prototype;return B.setup=function(e){return e===void 0&&(e={}),e.createGenerateId&&(this.options.createGenerateId=e.createGenerateId),e.id&&(this.options.id=b({},this.options.id,e.id)),(e.createGenerateId||e.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),e.insertionPoint!=null&&(this.options.insertionPoint=e.insertionPoint),"Renderer"in e&&(this.options.Renderer=e.Renderer),e.plugins&&this.use.apply(this,e.plugins),this},B.createStyleSheet=function(e,t){t===void 0&&(t={});var g=t,n=g.index;typeof n!="number"&&(n=Or.index===0?0:Or.index+1);var E=new pm(e,b({},t,{jss:this,generateId:t.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:n}));return this.plugins.onProcessSheet(E),E},B.removeStyleSheet=function(e){return e.detach(),Or.remove(e),this},B.createRule=function(e,t,g){if(t===void 0&&(t={}),g===void 0&&(g={}),typeof e=="object")return this.createRule(void 0,e,t);var n=b({},g,{name:e,jss:this,Renderer:this.options.Renderer});n.generateId||(n.generateId=this.generateId),n.classes||(n.classes={}),n.keyframes||(n.keyframes={});var E=Yu(e,t,n);return E&&this.plugins.onProcessRule(E),E},B.use=function(){for(var e=this,t=arguments.length,g=new Array(t),n=0;n<t;n++)g[n]=arguments[n];return g.forEach(function(E){e.plugins.use(E)}),this},A}(),Ym=function(B){return new EO(B)},bu=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function Nm(A){var B=null;for(var Q in A){var e=A[Q],t=typeof e;if(t==="function")B||(B={}),B[Q]=e;else if(t==="object"&&e!==null&&!Array.isArray(e)){var g=Nm(e);g&&(B||(B={}),B[Q]=g)}}return B}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */Ym();var bm=Date.now(),bw="fnValues"+bm,yw="fnStyle"+ ++bm,CO=function(){return{onCreateRule:function(Q,e,t){if(typeof e!="function")return null;var g=Yu(Q,{},t);return g[yw]=e,g},onProcessStyle:function(Q,e){if(bw in e||yw in e)return Q;var t={};for(var g in Q){var n=Q[g];typeof n=="function"&&(delete Q[g],t[g]=n)}return e[bw]=t,Q},onUpdate:function(Q,e,t,g){var n=e,E=n[yw];E&&(n.style=E(Q)||{});var C=n[bw];if(C)for(var o in C)n.prop(o,C[o](Q),g)}}};const oO=CO;var Wn="@global",pD="@global ",iO=function(){function A(Q,e,t){this.type="global",this.at=Wn,this.isProcessed=!1,this.key=Q,this.options=t,this.rules=new uc(b({},t,{parent:this}));for(var g in e)this.rules.add(g,e[g]);this.rules.process()}var B=A.prototype;return B.getRule=function(e){return this.rules.get(e)},B.addRule=function(e,t,g){var n=this.rules.add(e,t,g);return n&&this.options.jss.plugins.onProcessRule(n),n},B.replaceRule=function(e,t,g){var n=this.rules.replace(e,t,g);return n&&this.options.jss.plugins.onProcessRule(n),n},B.indexOf=function(e){return this.rules.indexOf(e)},B.toString=function(e){return this.rules.toString(e)},A}(),rO=function(){function A(Q,e,t){this.type="global",this.at=Wn,this.isProcessed=!1,this.key=Q,this.options=t;var g=Q.substr(pD.length);this.rule=t.jss.createRule(g,e,b({},t,{parent:this}))}var B=A.prototype;return B.toString=function(e){return this.rule?this.rule.toString(e):""},A}(),IO=/\s*,\s*/g;function ym(A,B){for(var Q=A.split(IO),e="",t=0;t<Q.length;t++)e+=B+" "+Q[t].trim(),Q[t+1]&&(e+=", ");return e}function aO(A,B){var Q=A.options,e=A.style,t=e?e[Wn]:null;if(t){for(var g in t)B.addRule(g,t[g],b({},Q,{selector:ym(g,A.selector)}));delete e[Wn]}}function sO(A,B){var Q=A.options,e=A.style;for(var t in e)if(!(t[0]!=="@"||t.substr(0,Wn.length)!==Wn)){var g=ym(t.substr(Wn.length),A.selector);B.addRule(g,e[t],b({},Q,{selector:g})),delete e[t]}}function lO(){function A(Q,e,t){if(!Q)return null;if(Q===Wn)return new iO(Q,e,t);if(Q[0]==="@"&&Q.substr(0,pD.length)===pD)return new rO(Q,e,t);var g=t.parent;return g&&(g.type==="global"||g.options.parent&&g.options.parent.type==="global")&&(t.scoped=!1),!t.selector&&t.scoped===!1&&(t.selector=Q),null}function B(Q,e){Q.type!=="style"||!e||(aO(Q,e),sO(Q,e))}return{onCreateRule:A,onProcessRule:B}}var MM=/\s*,\s*/g,cO=/&/g,wO=/\$([\w-]+)/g;function FO(){function A(t,g){return function(n,E){var C=t.getRule(E)||g&&g.getRule(E);return C?C.selector:E}}function B(t,g){for(var n=g.split(MM),E=t.split(MM),C="",o=0;o<n.length;o++)for(var i=n[o],r=0;r<E.length;r++){var I=E[r];C&&(C+=", "),C+=I.indexOf("&")!==-1?I.replace(cO,i):i+" "+I}return C}function Q(t,g,n){if(n)return b({},n,{index:n.index+1});var E=t.options.nestingLevel;E=E===void 0?1:E+1;var C=b({},t.options,{nestingLevel:E,index:g.indexOf(t)+1});return delete C.name,C}function e(t,g,n){if(g.type!=="style")return t;var E=g,C=E.options.parent,o,i;for(var r in t){var I=r.indexOf("&")!==-1,a=r[0]==="@";if(!(!I&&!a)){if(o=Q(E,C,o),I){var d=B(r,E.selector);i||(i=A(C,n)),d=d.replace(wO,i);var D=E.key+"-"+r;"replaceRule"in C?C.replaceRule(D,t[r],b({},o,{selector:d})):C.addRule(D,t[r],b({},o,{selector:d}))}else a&&C.addRule(r,{},o).addRule(E.key,t[r],{selector:E.selector});delete t[r]}}return t}return{onProcessStyle:e}}var DO=/[A-Z]/g,dO=/^ms-/,kw={};function uO(A){return"-"+A.toLowerCase()}function km(A){if(kw.hasOwnProperty(A))return kw[A];var B=A.replace(DO,uO);return kw[A]=dO.test(B)?"-"+B:B}function Al(A){var B={};for(var Q in A){var e=Q.indexOf("--")===0?Q:km(Q);B[e]=A[Q]}return A.fallbacks&&(Array.isArray(A.fallbacks)?B.fallbacks=A.fallbacks.map(Al):B.fallbacks=Al(A.fallbacks)),B}function UO(){function A(Q){if(Array.isArray(Q)){for(var e=0;e<Q.length;e++)Q[e]=Al(Q[e]);return Q}return Al(Q)}function B(Q,e,t){if(e.indexOf("--")===0)return Q;var g=km(e);return e===g?Q:(t.prop(g,Q),null)}return{onProcessStyle:A,onChangeValue:B}}var AA=bu&&CSS?CSS.px:"px",Va=bu&&CSS?CSS.ms:"ms",to=bu&&CSS?CSS.percent:"%",fO={"animation-delay":Va,"animation-duration":Va,"background-position":AA,"background-position-x":AA,"background-position-y":AA,"background-size":AA,border:AA,"border-bottom":AA,"border-bottom-left-radius":AA,"border-bottom-right-radius":AA,"border-bottom-width":AA,"border-left":AA,"border-left-width":AA,"border-radius":AA,"border-right":AA,"border-right-width":AA,"border-top":AA,"border-top-left-radius":AA,"border-top-right-radius":AA,"border-top-width":AA,"border-width":AA,"border-block":AA,"border-block-end":AA,"border-block-end-width":AA,"border-block-start":AA,"border-block-start-width":AA,"border-block-width":AA,"border-inline":AA,"border-inline-end":AA,"border-inline-end-width":AA,"border-inline-start":AA,"border-inline-start-width":AA,"border-inline-width":AA,"border-start-start-radius":AA,"border-start-end-radius":AA,"border-end-start-radius":AA,"border-end-end-radius":AA,margin:AA,"margin-bottom":AA,"margin-left":AA,"margin-right":AA,"margin-top":AA,"margin-block":AA,"margin-block-end":AA,"margin-block-start":AA,"margin-inline":AA,"margin-inline-end":AA,"margin-inline-start":AA,padding:AA,"padding-bottom":AA,"padding-left":AA,"padding-right":AA,"padding-top":AA,"padding-block":AA,"padding-block-end":AA,"padding-block-start":AA,"padding-inline":AA,"padding-inline-end":AA,"padding-inline-start":AA,"mask-position-x":AA,"mask-position-y":AA,"mask-size":AA,height:AA,width:AA,"min-height":AA,"max-height":AA,"min-width":AA,"max-width":AA,bottom:AA,left:AA,top:AA,right:AA,inset:AA,"inset-block":AA,"inset-block-end":AA,"inset-block-start":AA,"inset-inline":AA,"inset-inline-end":AA,"inset-inline-start":AA,"box-shadow":AA,"text-shadow":AA,"column-gap":AA,"column-rule":AA,"column-rule-width":AA,"column-width":AA,"font-size":AA,"font-size-delta":AA,"letter-spacing":AA,"text-decoration-thickness":AA,"text-indent":AA,"text-stroke":AA,"text-stroke-width":AA,"word-spacing":AA,motion:AA,"motion-offset":AA,outline:AA,"outline-offset":AA,"outline-width":AA,perspective:AA,"perspective-origin-x":to,"perspective-origin-y":to,"transform-origin":to,"transform-origin-x":to,"transform-origin-y":to,"transform-origin-z":to,"transition-delay":Va,"transition-duration":Va,"vertical-align":AA,"flex-basis":AA,"shape-margin":AA,size:AA,gap:AA,grid:AA,"grid-gap":AA,"row-gap":AA,"grid-row-gap":AA,"grid-column-gap":AA,"grid-template-rows":AA,"grid-template-columns":AA,"grid-auto-rows":AA,"grid-auto-columns":AA,"box-shadow-x":AA,"box-shadow-y":AA,"box-shadow-blur":AA,"box-shadow-spread":AA,"font-line-height":AA,"text-shadow-x":AA,"text-shadow-y":AA,"text-shadow-blur":AA};function Jm(A){var B=/(-[a-z])/g,Q=function(n){return n[1].toUpperCase()},e={};for(var t in A)e[t]=A[t],e[t.replace(B,Q)]=A[t];return e}var MO=Jm(fO);function Tr(A,B,Q){if(B==null)return B;if(Array.isArray(B))for(var e=0;e<B.length;e++)B[e]=Tr(A,B[e],Q);else if(typeof B=="object")if(A==="fallbacks")for(var t in B)B[t]=Tr(t,B[t],Q);else for(var g in B)B[g]=Tr(A+"-"+g,B[g],Q);else if(typeof B=="number"&&isNaN(B)===!1){var n=Q[A]||MO[A];return n&&!(B===0&&n===AA)?typeof n=="function"?n(B).toString():""+B+n:B.toString()}return B}function GO(A){A===void 0&&(A={});var B=Jm(A);function Q(t,g){if(g.type!=="style")return t;for(var n in t)t[n]=Tr(n,t[n],B);return t}function e(t,g){return Tr(g,t,B)}return{onProcessStyle:Q,onChangeValue:e}}function RD(A,B){(B==null||B>A.length)&&(B=A.length);for(var Q=0,e=new Array(B);Q<B;Q++)e[Q]=A[Q];return e}function hO(A){if(Array.isArray(A))return RD(A)}function pO(A){if(typeof Symbol<"u"&&A[Symbol.iterator]!=null||A["@@iterator"]!=null)return Array.from(A)}function RO(A,B){if(A){if(typeof A=="string")return RD(A,B);var Q=Object.prototype.toString.call(A).slice(8,-1);if(Q==="Object"&&A.constructor&&(Q=A.constructor.name),Q==="Map"||Q==="Set")return Array.from(A);if(Q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q))return RD(A,B)}}function mO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function YO(A){return hO(A)||pO(A)||RO(A)||mO()}var hr="",mD="",vm="",Zm="",NO=TI&&"ontouchstart"in document.documentElement;if(TI){var Jw={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},bO=document.createElement("p"),vw=bO.style,yO="Transform";for(var Zw in Jw)if(Zw+yO in vw){hr=Zw,mD=Jw[Zw];break}hr==="Webkit"&&"msHyphens"in vw&&(hr="ms",mD=Jw.ms,Zm="edge"),hr==="Webkit"&&"-apple-trailing-word"in vw&&(vm="apple")}var KA={js:hr,css:mD,vendor:vm,browser:Zm,isTouch:NO};function kO(A){return A[1]==="-"||KA.js==="ms"?A:"@"+KA.css+"keyframes"+A.substr(10)}var JO={noPrefill:["appearance"],supportedProperty:function(B){return B!=="appearance"?!1:KA.js==="ms"?"-webkit-"+B:KA.css+B}},vO={noPrefill:["color-adjust"],supportedProperty:function(B){return B!=="color-adjust"?!1:KA.js==="Webkit"?KA.css+"print-"+B:B}},ZO=/[-\s]+(.)?/g;function LO(A,B){return B?B.toUpperCase():""}function yu(A){return A.replace(ZO,LO)}function jn(A){return yu("-"+A)}var SO={noPrefill:["mask"],supportedProperty:function(B,Q){if(!/^mask/.test(B))return!1;if(KA.js==="Webkit"){var e="mask-image";if(yu(e)in Q)return B;if(KA.js+jn(e)in Q)return KA.css+B}return B}},XO={noPrefill:["text-orientation"],supportedProperty:function(B){return B!=="text-orientation"?!1:KA.vendor==="apple"&&!KA.isTouch?KA.css+B:B}},HO={noPrefill:["transform"],supportedProperty:function(B,Q,e){return B!=="transform"?!1:e.transform?B:KA.css+B}},xO={noPrefill:["transition"],supportedProperty:function(B,Q,e){return B!=="transition"?!1:e.transition?B:KA.css+B}},WO={noPrefill:["writing-mode"],supportedProperty:function(B){return B!=="writing-mode"?!1:KA.js==="Webkit"||KA.js==="ms"&&KA.browser!=="edge"?KA.css+B:B}},OO={noPrefill:["user-select"],supportedProperty:function(B){return B!=="user-select"?!1:KA.js==="Moz"||KA.js==="ms"||KA.vendor==="apple"?KA.css+B:B}},TO={supportedProperty:function(B,Q){if(!/^break-/.test(B))return!1;if(KA.js==="Webkit"){var e="WebkitColumn"+jn(B);return e in Q?KA.css+"column-"+B:!1}if(KA.js==="Moz"){var t="page"+jn(B);return t in Q?"page-"+B:!1}return!1}},VO={supportedProperty:function(B,Q){if(!/^(border|margin|padding)-inline/.test(B))return!1;if(KA.js==="Moz")return B;var e=B.replace("-inline","");return KA.js+jn(e)in Q?KA.css+e:!1}},zO={supportedProperty:function(B,Q){return yu(B)in Q?B:!1}},jO={supportedProperty:function(B,Q){var e=jn(B);return B[0]==="-"||B[0]==="-"&&B[1]==="-"?B:KA.js+e in Q?KA.css+B:KA.js!=="Webkit"&&"Webkit"+e in Q?"-webkit-"+B:!1}},PO={supportedProperty:function(B){return B.substring(0,11)!=="scroll-snap"?!1:KA.js==="ms"?""+KA.css+B:B}},KO={supportedProperty:function(B){return B!=="overscroll-behavior"?!1:KA.js==="ms"?KA.css+"scroll-chaining":B}},qO={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},_O={supportedProperty:function(B,Q){var e=qO[B];return e&&KA.js+jn(e)in Q?KA.css+e:!1}},Lm={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},$O=Object.keys(Lm),AT=function(B){return KA.css+B},BT={supportedProperty:function(B,Q,e){var t=e.multiple;if($O.indexOf(B)>-1){var g=Lm[B];if(!Array.isArray(g))return KA.js+jn(g)in Q?KA.css+g:!1;if(!t)return!1;for(var n=0;n<g.length;n++)if(!(KA.js+jn(g[0])in Q))return!1;return g.map(AT)}return!1}},Sm=[JO,vO,SO,XO,HO,xO,WO,OO,TO,VO,zO,jO,PO,KO,_O,BT],GM=Sm.filter(function(A){return A.supportedProperty}).map(function(A){return A.supportedProperty}),QT=Sm.filter(function(A){return A.noPrefill}).reduce(function(A,B){return A.push.apply(A,YO(B.noPrefill)),A},[]),pr,RE={};if(TI){pr=document.createElement("p");var Lw=window.getComputedStyle(document.documentElement,"");for(var Sw in Lw)isNaN(Sw)||(RE[Lw[Sw]]=Lw[Sw]);QT.forEach(function(A){return delete RE[A]})}function YD(A,B){if(B===void 0&&(B={}),!pr)return A;if(RE[A]!=null)return RE[A];(A==="transition"||A==="transform")&&(B[A]=A in pr.style);for(var Q=0;Q<GM.length&&(RE[A]=GM[Q](A,pr.style,B),!RE[A]);Q++);try{pr.style[A]=""}catch{return!1}return RE[A]}var go={},eT={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},tT=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,Mn;function gT(A,B,Q){if(B==="var")return"var";if(B==="all")return"all";if(Q==="all")return", all";var e=B?YD(B):", "+YD(Q);return e||B||Q}TI&&(Mn=document.createElement("p"));function hM(A,B){var Q=B;if(!Mn||A==="content")return B;if(typeof Q!="string"||!isNaN(parseInt(Q,10)))return Q;var e=A+Q;if(go[e]!=null)return go[e];try{Mn.style[A]=Q}catch{return go[e]=!1,!1}if(eT[A])Q=Q.replace(tT,gT);else if(Mn.style[A]===""&&(Q=KA.css+Q,Q==="-ms-flex"&&(Mn.style[A]="-ms-flexbox"),Mn.style[A]=Q,Mn.style[A]===""))return go[e]=!1,!1;return Mn.style[A]="",go[e]=Q,go[e]}function nT(){function A(t){if(t.type==="keyframes"){var g=t;g.at=kO(g.at)}}function B(t){for(var g in t){var n=t[g];if(g==="fallbacks"&&Array.isArray(n)){t[g]=n.map(B);continue}var E=!1,C=YD(g);C&&C!==g&&(E=!0);var o=!1,i=hM(C,SE(n));i&&i!==n&&(o=!0),(E||o)&&(E&&delete t[g],t[C||g]=i||n)}return t}function Q(t,g){return g.type!=="style"?t:B(t)}function e(t,g){return hM(g,SE(t))||t}return{onProcessRule:A,onProcessStyle:Q,onChangeValue:e}}function ET(){var A=function(Q,e){return Q.length===e.length?Q>e?1:-1:Q.length-e.length};return{onProcessStyle:function(Q,e){if(e.type!=="style")return Q;for(var t={},g=Object.keys(Q).sort(A),n=0;n<g.length;n++)t[g[n]]=Q[g[n]];return t}}}function CT(){return{plugins:[oO(),lO(),FO(),UO(),GO(),typeof window>"u"?null:nT(),ET()]}}function Xm(A={}){const{baseClasses:B,newClasses:Q,Component:e}=A;if(!Q)return B;const t=b({},B);return Object.keys(Q).forEach(g=>{Q[g]&&(t[g]=`${B[g]} ${Q[g]}`)}),t}const oT={set:(A,B,Q,e)=>{let t=A.get(B);t||(t=new Map,A.set(B,t)),t.set(Q,e)},get:(A,B,Q)=>{const e=A.get(B);return e?e.get(Q):void 0},delete:(A,B,Q)=>{A.get(B).delete(Q)}},ho=oT;function Hm(){var A;const B=ou();return(A=B==null?void 0:B.$$material)!=null?A:B}const iT=Ym(CT()),rT=u8(),IT=new Map,aT={disableGeneration:!1,generateClassName:rT,jss:iT,sheetsCache:null,sheetsManager:IT,sheetsRegistry:null},sT=G.createContext(aT);let pM=-1e9;function lT(){return pM+=1,pM}const cT=["variant"];function RM(A){return A.length===0}function wT(A){const{variant:B}=A,Q=DA(A,cT);let e=B||"";return Object.keys(Q).sort().forEach(t=>{t==="color"?e+=RM(e)?A[t]:FA(A[t]):e+=`${RM(e)?t:FA(t)}${FA(A[t].toString())}`}),e}const FT={},DT=FT;function dT(A){const B=typeof A=="function";return{create:(Q,e)=>{let t;try{t=B?A(Q):A}catch(C){throw C}if(!e||!Q.components||!Q.components[e]||!Q.components[e].styleOverrides&&!Q.components[e].variants)return t;const g=Q.components[e].styleOverrides||{},n=Q.components[e].variants||[],E=b({},t);return Object.keys(g).forEach(C=>{E[C]=VQ(E[C]||{},g[C])}),n.forEach(C=>{const o=wT(C.props);E[o]=VQ(E[o]||{},C.style)}),E},options:{}}}const uT=["name","classNamePrefix","Component","defaultTheme"];function UT({state:A,stylesOptions:B},Q,e){if(B.disableGeneration)return Q||{};A.cacheClasses||(A.cacheClasses={value:null,lastProp:null,lastJSS:{}});let t=!1;return A.classes!==A.cacheClasses.lastJSS&&(A.cacheClasses.lastJSS=A.classes,t=!0),Q!==A.cacheClasses.lastProp&&(A.cacheClasses.lastProp=Q,t=!0),t&&(A.cacheClasses.value=Xm({baseClasses:A.cacheClasses.lastJSS,newClasses:Q,Component:e})),A.cacheClasses.value}function fT({state:A,theme:B,stylesOptions:Q,stylesCreator:e,name:t},g){if(Q.disableGeneration)return;let n=ho.get(Q.sheetsManager,e,B);n||(n={refs:0,staticSheet:null,dynamicStyles:null},ho.set(Q.sheetsManager,e,B,n));const E=b({},e.options,Q,{theme:B,flip:typeof Q.flip=="boolean"?Q.flip:B.direction==="rtl"});E.generateId=E.serverGenerateClassName||E.generateClassName;const C=Q.sheetsRegistry;if(n.refs===0){let o;Q.sheetsCache&&(o=ho.get(Q.sheetsCache,e,B));const i=e.create(B,t);o||(o=Q.jss.createStyleSheet(i,b({link:!1},E)),o.attach(),Q.sheetsCache&&ho.set(Q.sheetsCache,e,B,o)),C&&C.add(o),n.staticSheet=o,n.dynamicStyles=Nm(i)}if(n.dynamicStyles){const o=Q.jss.createStyleSheet(n.dynamicStyles,b({link:!0},E));o.update(g),o.attach(),A.dynamicSheet=o,A.classes=Xm({baseClasses:n.staticSheet.classes,newClasses:o.classes}),C&&C.add(o)}else A.classes=n.staticSheet.classes;n.refs+=1}function MT({state:A},B){A.dynamicSheet&&A.dynamicSheet.update(B)}function GT({state:A,theme:B,stylesOptions:Q,stylesCreator:e}){if(Q.disableGeneration)return;const t=ho.get(Q.sheetsManager,e,B);t.refs-=1;const g=Q.sheetsRegistry;t.refs===0&&(ho.delete(Q.sheetsManager,e,B),Q.jss.removeStyleSheet(t.staticSheet),g&&g.remove(t.staticSheet)),A.dynamicSheet&&(Q.jss.removeStyleSheet(A.dynamicSheet),g&&g.remove(A.dynamicSheet))}function hT(A,B){const Q=G.useRef([]);let e;const t=G.useMemo(()=>({}),B);Q.current!==t&&(Q.current=t,e=A()),G.useEffect(()=>()=>{e&&e()},[t])}function Eg(A,B={}){const{name:Q,classNamePrefix:e,Component:t,defaultTheme:g=DT}=B,n=DA(B,uT),E=dT(A),C=Q||e||"makeStyles";return E.options={index:lT(),name:Q,meta:C,classNamePrefix:C},(i={})=>{const r=Hm()||g,I=b({},G.useContext(sT),n),a=G.useRef(),d=G.useRef();return hT(()=>{const U={name:Q,state:{},stylesCreator:E,stylesOptions:I,theme:r};return fT(U,i),d.current=!1,a.current=U,()=>{GT(U)}},[r,E]),G.useEffect(()=>{d.current&&MT(a.current,i),d.current=!0}),UT(a.current,i.classes,t)}}const pT=Eg(()=>({root:{display:"flex",height:"100%"},toolbar:{height:"70px"},content:{flexGrow:"1",padding:"2em",width:"100%"}}));var ND={exports:{}};(function(A,B){(function(Q,e){A.exports=e()})(MN,function(){(function(n){function E(){return new Promise(function(a,d){var D="wss://javascript.info/article/websocket/chat/ws";console.log("[WS]: Start testing"),console.log("[WS]: Connecting to "+D);try{var U=new WebSocket(D);U.onopen=function(l){var F="test-msg";console.log("[WS]: Connection established"),console.log("[WS]: Sending data to socket, msg: "+F),U.send(F)},U.onmessage=function(l){console.log("[WS]: Data received from server: "+l.data),console.log("[WS]: Finish testing - OK"),a()},U.onerror=function(l){console.log("[WS]: ",l.message),console.log("[WS]: Finish testing - ERROR"),d()}}catch(l){console.log("[WS]: ",l),d()}})}function C(){return new Promise(function(a,d){if(console.log("[WebWorker]: Start testing"),typeof Worker<"u"){console.log("[WebWorker]: Has Web Worker support");try{var D=new Worker(window.URL.createObjectURL(new Blob(["onmessage = function(e) {console.log('[WebWorker]: Message received from main script');var workerResult = e.data[0];console.log('[WebWorker]: Posting message back to main script');postMessage(workerResult);}"])));D.onmessage=function(U){console.log("[WebWorker]: Message received from worker: ",U.data),console.log("[WebWorker]: Finish testing - OK"),a()},D.onerror=function(U){console.error("[WebWorker]: Finish testing - ERROR"),d()},D.postMessage(["test-msg"])}catch{console.error("[WebWorker]: Finish testing - ERROR"),d()}}else console.log("[WebWorker]: No Web Worker support"),d()})}function o(){return new Promise(function(a,d){console.log("[ORIGN]: Start testing");var D=window.location.protocol,U=window.location.hostname;D==="https:"||D==="file:"||D==="http:"&&(U.indexOf("localhost")>-1||U.indexOf("127.0.0.1")>-1)?(console.log("[ORIGN]: Secure"),console.log("[ORIGN]: Finish testing - OK"),a()):(console.log("[ORIGN]: Not secure"),console.log("[ORIGN]: Finish testing - ERROR"),d())})}function i(){return new Promise(function(a,d){console.log("[AUDIO CONTEXT]: Start testing");var D=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,U=window.AudioContext||window.webkitAudioContext||window.mozAudioContext;D&&U?(console.log("[AUDIO CONTEXT]: Audio supported"),console.log("[AUDIO CONTEXT]: Finish testing - OK"),a()):(console.log("[AUDIO CONTEXT]: Audio NOT supported"),console.log("[AUDIO CONTEXT DETAILS]:",r()),console.log("[AUDIO CONTEXT]: Finish testing - ERROR"),d())})}function r(){var a="";return a+="getUserMedia: ",a+=navigator.getUserMedia?"1":"0",a+=", ",a+="mediaDevices: ",a+=navigator.mediaDevices?"1":"0",a+=", ",a+="mediaDevices.getUserMedia: ",a+=navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?"1":"0",a+=", ",a+="webkitGUM: ",a+=navigator.webkitGetUserMedia?"1":"0",a+=", ",a+="mozGUM: ",a+=navigator.mozGetUserMedia?"1":"0",a+=", ",a+="msGUM: ",a+=navigator.msGetUserMedia?"1":"0",a+=`
`,a+=`window: 
`,a+="AudioContext: ",a+=window.AudioContext?"1":"0",a+=", ",a+="webkitAC: ",a+=window.webkitAudioContext?"1":"0",a+=", ",a+="mozAC: ",a+=window.mozAudioContext?"1":"0",a+=`
`,a+="userAgent: ",a+=navigator.userAgent,a}function I(){var a=this,d=Object.keys(this);function D(U){return a[U]()}return d=d.filter(U=>U!=="run"&&U!=="getAudioDebugInfo"),d.reduce((U,l)=>U.then(()=>D(l)),Promise.resolve())}n.alanDiagnostic={testSocket:E,testWorker:C,testOrignSecure:o,testAudioContext:i,getAudioDebugInfo:r,run:I}})(window),function(n){var E="studio.alan.app",C={baseURL:"wss://"+(E.indexOf("$")===0||E===""?window.location.hostname:E),codec:"opus",version:"2.0.45",platform:"web"};function o(){var D=this;this._worker=new Worker(window.URL.createObjectURL(new Blob([`(function(ns) {
    'use strict';

    var SENT_TS    = 1;
    var REMOTE_TS  = 2;
    var TIMESTAMP  = 3;
    var AUDIO_DATA = 4;
    var JSON_DATA  = 5;

    AlanFrame.fields = [
        propUint64(SENT_TS,   'sentTs'),
        propUint64(REMOTE_TS, 'remoteTs'),
        propUint64(TIMESTAMP, 'timestamp'),
        propBytes(AUDIO_DATA, 'audioData'),
        propJson(JSON_DATA,   'jsonData'),
    ];

    function AlanFrameProp(type, name, sizeF, readF, writeF) {
        this.type   = type;
        this.name   = name;
        this.sizeF  = sizeF;
        this.writeF = writeF;
        this.readF  = readF;
    }

    function fixedSize(size) {
        return function() {
            return size;
        }
    }

    function bufferSize(buffer) {
        return 4 + byteLength(buffer);
    }

    function writeUIntN(uint8array, value, nBytes, offset) {
        for (var i = 0; i < nBytes; i++ ) {
            uint8array[offset + i] = 0xFF & value;
            value /= 256;
        }
    }

    function readUIntN(uint8array, nBytes, offset) {
        var r = 0;
        for (var i = nBytes - 1; i >= 0; i-- ) {
            r *= 256;
            r += 0xFF & uint8array[offset + i];
        }
        return r;
    }

    function writeUInt64(uint8array, value, offset) {
        writeUIntN(uint8array, value, 8, offset);
    }

    function readUInt64(uint8array, offset) {
        return readUIntN(uint8array, 8, offset);
    }

    function writeUInt32(uint8array, value, offset) {
        writeUIntN(uint8array, value, 4, offset);
    }

    function readUInt32(uint8array, offset) {
        return readUIntN(uint8array, 4, offset);
    }

    function writeBuffer(uint8array, buffer, offset) {
        buffer = toUint8(buffer);
        writeUInt32(uint8array, buffer.length, offset);
        for (var i = 0; i < buffer.length; i++ ) {
            uint8array[offset + 4 + i] = buffer[i];
        }
    }

    function readBuffer(uint8array, offset) {
        var size = readUInt32(uint8array, offset);
        if (size > 1024 * 1024) {
            throw new Error('buffer too big');
        }
        return uint8array.subarray(offset + 4, offset + 4 + size);
    }

    function readUTF8(uint8array, offset) {
        var size = readUInt32(uint8array, offset);
        if (size > 1024 * 1024) {
            throw new Error('string too big');
        }
        return String.fromCharCode.apply(null, uint8array.slice(offset + 4, offset + 4 + size));
    }

    function writeUTF8(uint8array, string, offset) {
        writeUInt32(uint8array, string.length, offset);
        for (var i = 0; i < string.length; i++ ) {
            uint8array[offset + 4 + i] = string.charCodeAt(i);
        }
    }

    function sizeUTF8(string) {
        return 4 + string.length;
    }

    function propUint32(type, name) {
        return new AlanFrameProp(type, name, fixedSize(4), readUInt32, writeUInt32);
    }

    function propUint64(type, name) {
        return new AlanFrameProp(type, name, fixedSize(8), readUInt64, writeUInt64);
    }

    function propBytes(type, name) {
        return new AlanFrameProp(type, name, bufferSize, readBuffer, writeBuffer);
    }

    function propJson(type, name) {
        return new AlanFrameProp(type, name, sizeUTF8, readUTF8, writeUTF8);
    }

    AlanFrame.fieldByType = function(type) {
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var frame = AlanFrame.fields[i];
            if (frame.type === type) {
                return frame;
            }
        }
        throw new Error('invalid field: ' + type);
    };

    function AlanFrame() {
        this.version = 1;
    }

    AlanFrame.prototype.write = function() {
        var result = new Uint8Array(this.writeSize());
        var offset = 1;
        result[0]  = 1;
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var field = AlanFrame.fields[i];
            var value = this[field.name];
            if (value) {
                result[offset++] = field.type;
                field.writeF(result, value, offset);
                offset += field.sizeF(value);
            }
        }
        return result.buffer;
    };

    /**
     * @returns UInt8Array
     */
    AlanFrame.prototype.writeSize = function() {
        var size = 1;
        for (var i = 0; i < AlanFrame.fields.length; i++ ) {
            var field = AlanFrame.fields[i];
            var value = this[field.name];
            if (value) {
                size += 1 + field.sizeF(value);
            }
        }
        return size;
    };

    AlanFrame.prototype.toString = function() {
        var first = true, str = '';
        for (var k in this) {
            if (this.hasOwnProperty(k)) {
                if (first) {
                    str += k + ' = ';
                    first = false;
                } else {
                    str += ', ' + k + ' = ';
                }
                var v = this[k];
                if (typeof(v) === 'object') {
                    str += 'bytes[' + byteLength(v) + ']';
                } else {
                    str += v;
                }
            }
        }
        return str;
    };

    function byteLength(b) {
        if (b instanceof Uint8Array) {
            return b.length;
        }
        if (b instanceof ArrayBuffer) {
            return b.byteLength;
        }
    }

    function toArrayBuffer(buffer) {
        if (buffer instanceof ArrayBuffer) {
            return buffer;
        }
        return buffer.buffer;
    }

    function toUint8(buffer) {
        if (buffer instanceof Uint8Array) {
            return buffer;
        }
        if (buffer instanceof ArrayBuffer) {
            return new Uint8Array(buffer);
        }
        throw new Error('invalid buffer type');
    }

    function parse(uint8array) {
        uint8array = toUint8(uint8array);
        var r = new AlanFrame();
        var offset = 0;
        r.version = uint8array[offset++];
        while (offset < uint8array.length) {
            var frame = AlanFrame.fieldByType(uint8array[offset++]);
            r[frame.name] = frame.readF(uint8array, offset);
            offset += frame.sizeF(r[frame.name]);
        }
        return r;
    }

    ns.create = function() {
        return new AlanFrame();
    };

    ns.parse = parse;

})(typeof(window)            !== 'undefined' ? (function() {window.alanFrame = {}; return window.alanFrame; })() :
   typeof(WorkerGlobalScope) !== 'undefined' ? (function() {alanFrame = {}; return alanFrame; })() :
   exports);


'use strict';



var ALAN_OFF       = 'off';
var ALAN_SPEAKING  = 'speaking';
var ALAN_LISTENING = 'listening';

function ConnectionImpl(config, auth, mode) {
    var _this = this;
    this._config = config;
    this._auth = auth;
    this._mode = mode;
    this._projectId = config.projectId;
    this._url = config.url;
    this._connected = false;
    this._authorized = false;
    this._dialogId = null;
    this._callId = 1;
    this._callSent = {};
    this._callWait = [];
    this._failed = false;
    this._closed = false;
    this._reconnectTimeout = 100;
    this._cleanups = [];
    this._format = null;
    this._formatSent = false;
    this._frameQueue = [];
    this._remoteSentTs = 0;
    this._remoteRecvTs = 0;
    this._rtt = 25;
    this._rttAlpha = 1./16;
    this._alanState = ALAN_OFF;
    this._sendTimer = setInterval(_this._flushQueue.bind(_this), 50);
    this._visualState = {};
    this._addCleanup(function() {clearInterval(_this._sendTimer);});
    this._connect();
    console.log('Alan: connection created');
}

ConnectionImpl.prototype._addCleanup = function(f) {
    this._cleanups.push(f);
};

ConnectionImpl.prototype._onConnectStatus = function(s) {
    console.log('Alan: connection status - ' + s);
    this._fire('connectStatus', s);
};

ConnectionImpl.prototype._fire = function(event, object) {
    if (event === 'options') {
        if (object.versions) {
            object.versions['alanbase:web'] = this._config.version;
        }
    }
    postMessage(['fireEvent', event, object]);
};

ConnectionImpl.prototype._connect = function() {
    var _this = this;
    if (this._socket) {
        console.error('socket is already connected');
        return;
    }
    console.log('Alan: connecting - ' + getConnectionDetails(this._url));
    this._socket = new WebSocket(this._url);
    this._socket.binaryType = 'arraybuffer';
    console.time('Alan: connection time');
    this._socket.onopen = function(e) {
        console.info('Alan: connected');
        _this._connected = true;
        _this._reconnectTimeout = 100;
        _this._fire('connection', {status: 'connected'});
        console.timeEnd('Alan: connection time');
        if (_this._auth) {
            _this._fire('connection', {status: 'authorizing'});
            _this._callAuth();
        } else {
            _this._callWait.forEach(function(c) {  _this._sendCall(c); });
            _this._callWait = [];
        }
    };
    this._socket.onmessage = function(msg) {
        if (msg.data instanceof ArrayBuffer) {
            var f = alanFrame.parse(msg.data);
            if (f.sentTs > 0) {
                _this._remoteSentTs = f.sentTs;
                _this._remoteRecvTs = Date.now();
            } else {
                _this._remoteSentTs = null;
                _this._remoteRecvTs = null;
            }
            var rtt = 0;
            if (f.remoteTs) {
                rtt = Date.now() - f.remoteTs;
            }
            _this._rtt = _this._rttAlpha * rtt  + (1 - _this._rttAlpha) * _this._rtt;
            var uint8 = new Uint8Array(f.audioData);
            var frame = [];
            var batch = 10000;
            for (var offset = 0; offset < uint8.byteLength; offset += batch) {
                var b = uint8.subarray(offset, Math.min(uint8.byteLength, offset + batch));
                let a = String.fromCharCode.apply(null, b);
                frame.push(a);
            }
            frame = frame.join('');
            postMessage(['alanAudio', 'playFrame', frame]);
        } else if (typeof(msg.data) === 'string') {
            msg = JSON.parse(msg.data);
            if (msg.i) {
                var c = _this._callSent[msg.i];
                delete _this._callSent[msg.i];
                if (c && c.callback) {
                    c.callback(msg.e, msg.r);
                }
            } else if (msg.e) {
                if (msg.e === 'text') {
                    postMessage(['alanAudio', 'playText', msg.p]);
                } else if (msg.e === 'afterText') {
                    postMessage(['alanAudio', 'playAfterText', msg.p]);
                } else if (msg.e === 'showPopup') {
                    postMessage(['alanAudio', 'showPopup', msg.p]);
                } else if (msg.e === 'command') {
                    postMessage(['alanAudio', 'playCommand', msg.p]);
                } else if (msg.e === 'inactivity') {
                    postMessage(['alanAudio', 'stop']);
                } else {
                    _this._fire(msg.e, msg.p);
                }
            }
        } else {
            console.error('invalid message type');
        }
    };
    this._socket.onerror = function(evt) {
        console.error('Alan: connection closed due to error: ', evt);
    };
    this._socket.onclose = function(evt) {
        console.info('Alan: connection closed');
        _this._connected = false;
        _this._authorized = false;
        _this._socket = null;
        _this._onConnectStatus('disconnected');
        if (!_this._failed && _this._reconnectTimeout && !_this._closed) {
            console.log('Alan: reconnecting in %s ms.', _this._reconnectTimeout);
            _this._reConnect = setTimeout(_this._connect.bind(_this), _this._reconnectTimeout);
            if (_this._reconnectTimeout < 3000) {
                _this._reconnectTimeout *= 2;
            } else {
                _this._reconnectTimeout += 500;
            }
            _this._reconnectTimeout = Math.min(7000, _this._reconnectTimeout);
        }
    };
    this._addCleanup(function() {
        if (this._socket) {
            this._socket.close();
            this._socket = null;
        }
    });
};

ConnectionImpl.prototype._callAuth = function() {
    var _this = this;
    var callback = function(err, r) {
        if (!err && r.status === 'authorized') {
            _this._authorized = true;
            _this._formatSent = false;
            if (r.dialogId) {
                postMessage(['setDialogId', r.dialogId]);
                _this._dialogId = r.dialogId;
            }
            _this._onAuthorized();
            _this._onConnectStatus('authorized');
        } else if (err === 'auth-failed') {
            _this._onConnectStatus('auth-failed');
            if (_this._socket) {
                _this._socket.close();
                _this._socket = null;
                _this._failed = true;
            }
        } else {
            _this._onConnectStatus('invalid-auth-response');
            console.log('Alan: invalid auth response', err, r);
        }
    };
    var authParam = this._auth;
    authParam.timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (this._dialogId) {
        authParam.dialogId = this._dialogId;
    }
    authParam.mode = this._mode;
    this._sendCall({cid: this._callId++, method: '_auth_', callback: callback, param: authParam});
    return this;
};

ConnectionImpl.prototype._sendCall = function(call) {
    this._sendFormatIfNeeded(false);
    this._socket.send(JSON.stringify({i: call.cid, m: call.method, p: call.param}));
    if (call.callback) {
        this._callSent[call.cid] = call;
    }
};

ConnectionImpl.prototype._onAuthorized = function() {
    var _this = this;
    this._callWait.forEach(function(c) {
        _this._sendCall(c);
    });
    this._callWait = [];
};

ConnectionImpl.prototype.close = function() {
    for (var i = 0; i < this._cleanups.length; i++ ) {
        this._cleanups[i]();
    }
    this._cleanups = [];
    this._closed = true;
    
    if (this._socket && (this._socket.readyState === WebSocket.OPEN || this._socket.readyState === WebSocket.CONNECTING)) {
        this._socket.close();
        this._socket = null;
    }
    console.log('Alan: closed connection to: ' + getConnectionDetails(this._url));
    //close(); TODO: delete it!
};

ConnectionImpl.prototype.call = function(cid, method, param) {
    var call = {cid: cid, method: method, param: param, callback: function(err, obj) {
        if (cid) {
            postMessage(['callback', cid, err, obj]);
        }
    }};
    if (this._authorized || this._connected && !this._auth) {
        this._sendCall(call);
    } else {
        this._callWait.push(call);
    }
};

ConnectionImpl.prototype.setVisual = function(state) {
    this._visualState = state;
    this.call(null, '_visual_', state);
};

ConnectionImpl.prototype._sendFrame = function(frame) {
    if (!this._socket) {
        console.error('sendFrame to closed socket');
        return;
    }
    frame.sentTs = Date.now();
    if (this._remoteSentTs > 0 && this._remoteRecvTs > 0) {
        frame.remoteTs = this._remoteSentTs + Date.now() - this._remoteRecvTs;
    }
    this._socket.send(frame.write());
};

ConnectionImpl.prototype._listen = function() {
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({signal: 'listen'});
    this._frameQueue.push(f);
    this._alanState = ALAN_LISTENING;
};

ConnectionImpl.prototype._stopListen = function() {
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({signal: 'stopListen'});
    this._frameQueue.push(f);
    this._alanState = ALAN_OFF;
};

ConnectionImpl.prototype._onAudioFormat = function(format) {
    this._formatSent = false;
    this._format = format;
};

ConnectionImpl.prototype._onMicFrame = function(sampleRate, frame) {
    if (this._alanState === ALAN_SPEAKING) {
        return;
    }
    if (this._alanState === ALAN_OFF) {
        this._listen();
    }
    if (this._alanState !== ALAN_LISTENING) {
        console.error('invalid alan state: ' + this._alanState);
        return;
    }
    this._sendFormatIfNeeded(true);
    var f = alanFrame.create();
    f.audioData = frame;
    this._frameQueue.push(f);
};

ConnectionImpl.prototype._sendFormatIfNeeded = function(inQueue) {
    if (!this._format || this._formatSent) {
        return;
    }
    this._formatSent = true;
    var f = alanFrame.create();
    f.jsonData = JSON.stringify({format: this._format});
    if (inQueue) {
        this._frameQueue.push(f);
    } else {
        this._sendFrame(f);
    }
};

ConnectionImpl.prototype._flushQueue = function() {
    if (!this._socket || !this._connected) {
        var d = 0;
        while (this._frameQueue.length > 100 && !this._frameQueue[0].jsonData) {
            this._frameQueue.shift();
            d++;
        }
        if (d > 0) {
            console.error('dropped: %s, frames', d);
        }
        return;
    }
    while (this._frameQueue.length > 0 && this._socket && this._socket.bufferedAmount < 64 * 1024) {
        this._sendFrame(this._frameQueue.shift());
    }
};

function getConnectionDetails(url){
    var urlParts = url.split('/');
    var projectId = urlParts[4];
    var environment = urlParts[5];
    var host = urlParts[2];

    if (projectId && environment && host) {
        return ' (ProjectID: ' + projectId + ', environment: ' + environment + ', host: ' + host + ')';
    }

    return url;
}

function connectProject(config, auth, mode) {
    var c = new ConnectionImpl(config, auth, mode);
    c.onAudioEvent = function(event, arg1, arg2) {
        if (event === 'format') {
            c._onAudioFormat(arg1);
        } else if (event === 'frame') {
            c._onMicFrame(arg1, arg2);
        } else if (event === 'micStop' || event === 'playStart') {
            c._stopListen();
        } else {
            console.error('unknown audio event: ' + event, arg1, arg2);
        }
    };
    return c;
}

var factories = {
    connectProject: connectProject,
};

var currentConnect = null;

onmessage = function(e) {
    var name = e.data[0];
    try {
        if (!currentConnect) {
            currentConnect = factories[name].apply(null, e.data.slice(1, e.data.length));
        } else {
            currentConnect[name].apply(currentConnect, e.data.slice(1, e.data.length));
        }
    } catch(e) {
        console.error('error calling: ' + name, e);
    }
};
`],{type:"text/javascript"}))),this._worker.onmessage=function(U){if(U.data[0]==="fireEvent"){D._fire(U.data[1],U.data[2]);return}if(U.data[0]==="alanAudio"){if(U.data[1]==="playText"){alanAudio.playText(U.data[2]);return}if(U.data[1]==="playAfterText"){alanAudio.playAfterText(U.data[2]);return}if(U.data[1]==="playAudio"||U.data[1]==="playFrame"){alanAudio.playAudio(U.data[2]);return}if(U.data[1]==="playEvent"||U.data[1]==="playCommand"){alanAudio.playEvent(U.data[2]);return}if(U.data[1]==="showPopup"){alanAudio.showPopup(U.data[2]);return}if(U.data[1]==="stop"){alanAudio.stop();return}}if(U.data[0]==="callback"){D._callback[U.data[1]](U.data[2],U.data[3]),delete D._callback[U.data[1]];return}if(U.data[0]==="setDialogId"){D._dialogId=U.data[1];return}console.error("invalid event",U.data)},this._worker.onerror=function(U){console.error("error in worker: "+U.filename+":"+U.lineno+" - "+U.message)},this._handlers={},this._cleanups=[],this._callback={},this._callIds=1,this._config={}}o.prototype.on=function(D,U){var l=this._handlers[D];l||(l=[],this._handlers[D]=l),l.push(U)},o.prototype.off=function(D,U){var l=this._handlers[D];if(l){var F=l.indexOf(U);F>=0&&l.splice(F,1)}},o.prototype.getSettings=function(){return{server:C.baseURL,projectId:this._config.projectId,dialogId:this._dialogId}},o.prototype.setVisual=function(D){this._worker.postMessage(["setVisual",D])},o.prototype.call=function(D,U,l){var F=null;l&&(F=this._callIds++,this._callback[F]=l),this._worker.postMessage(["call",F,D,U])},o.prototype.close=function(){console.log("closing connection to: "+this._url),this._cleanups.forEach(function(D){D()}),this._worker.postMessage(["close"]),this._worker.terminate()},o.prototype._fire=function(D,U){var l=this._handlers[D];if(l)for(var F=0;F<l.length;F++)l[F](U)},o.prototype._addCleanup=function(D){this._cleanups.push(D)};function i(D,U){var l={};for(var F in U)l[F]=U[F];for(var F in D)l[F]=D[F];return!U||U&&U.platform==null?l.platform=C.platform:l.platform=C.platform+":"+U.platform,!U||U&&U.platformVersion==null?l.platformVersion=C.version:l.platformVersion=C.version+":"+U.platformVersion,U&&U.appName&&(l.appName=U.appName),l}function r(D){return D.match(/^[A-Z0-9]{64}\/(prod|stage|testing)$/gi)}function I(D,U,l,F,c){var w=new o;if(l&&(C.baseURL="wss://"+l),w._config.projectId=D,w._config.codec=C.codec,w._config.version=C.version,w._config.url=C.baseURL+"/ws_project/"+D,!r(D))throw new Error("Wrong projectId was provided: ",D);w._worker.postMessage(["connectProject",w._config,i(U,c),F]);function M(k,Z){alanAudio.on(k,Z),w._addCleanup(function(){alanAudio.off(k,Z)})}function Y(k){function Z(J,W){k==="frame"&&alanAudio.isPlaying()||w._worker.postMessage(["onAudioEvent",k,J,W])}M(k,Z)}function p(k){function Z(J){w._fire(k,J)}M(k,Z)}return Y("frame"),Y("micStop"),Y("playStart"),p("text"),p("command"),w._worker.postMessage(["onAudioEvent","format",alanAudio.getFormat()]),w}function a(D,U,l,F,c){var w=new o;if(l&&(C.baseURL="wss://"+l),w._config.projectId=D,w._config.codec=C.codec,w._config.version=C.version,w._config.url=C.baseURL+"/ws_project/"+D,!r(D))throw new Error("Wrong projectId was provided");w._worker.postMessage(["connectProject",w._config,i(U,c),F]);function M(k,Z){alanAudio.on(k,Z),w._addCleanup(function(){alanAudio.off(k,Z)})}function Y(k){function Z(J,W){k==="frame"&&alanAudio.isPlaying()||w._worker.postMessage(["onAudioEvent",k,J,W])}M(k,Z)}function p(k){function Z(J){w._fire(k,J)}M(k,Z)}return Y("frame"),Y("micStop"),Y("playStart"),p("text"),p("command"),w}function d(D,U){var l=new o;return U&&(C.baseURL="wss://"+U),l._config.version=C.version,l._config.url=C.baseURL+"/ws_tutor",l._worker.postMessage(["connectProject",l._config,D]),l}n.alanSDKVersion=C.version,n.alan={sdkVersion:C.version,diagnostic:n.alanDiagnostic,projectTest:a,project:I,tutor:d}}(window),function(n){var E="playIdle",C="playActive",o="playStopped",i=!1,r="micIdle",I="micActive",a="micStopped",d="processingIdle",D="processingActive",U="audioRunning",l={bufferLength:4096,sampleRate:16e3,encoderApplication:2048,encodePCM:!1,micTimeout:4e3};const F=window.URL.createObjectURL(new Blob([`

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

// \`/\` should be present at the end if \`scriptDirectory\` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;

var nodeFS;
var nodePath;

if (ENVIRONMENT_IS_NODE) {
  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = require('path').dirname(scriptDirectory) + '/';
  } else {
    scriptDirectory = __dirname + '/';
  }

// include: node_shell_read.js


read_ = function shell_read(filename, binary) {
  var ret = tryParseAsDataURI(filename);
  if (ret) {
    return binary ? ret : ret.toString();
  }
  if (!nodeFS) nodeFS = require('fs');
  if (!nodePath) nodePath = require('path');
  filename = nodePath['normalize'](filename);
  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');
};

readBinary = function readBinary(filename) {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

// end include: node_shell_read.js


  arguments_ = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  process['on']('unhandledRejection', abort);

  quit_ = function(status) {
    process['exit'](status);
  };

  Module['inspect'] = function () { return '[Emscripten Module object]'; };

} else
if (ENVIRONMENT_IS_SHELL) {

  if (typeof read != 'undefined') {
    read_ = function shell_read(f) {
      var data = tryParseAsDataURI(f);
      if (data) {
        return intArrayToString(data);
      }
      return read(f);
    };
  }

  readBinary = function readBinary(f) {
    var data;
    data = tryParseAsDataURI(f);
    if (data) {
      return data;
    }
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit === 'function') {
    quit_ = function(status) {
      quit(status);
    };
  }

  if (typeof print !== 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console === 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document !== 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {

// include: web_or_worker_shell_read.js


  read_ = function shell_read(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
    } catch (err) {
      var data = tryParseAsDataURI(url);
      if (data) {
        return intArrayToString(data);
      }
      throw err;
    }
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
      } catch (err) {
        var data = tryParseAsDataURI(url);
        if (data) {
          return data;
        }
        throw err;
      }
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      var data = tryParseAsDataURI(url);
      if (data) {
        onload(data.buffer);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

// end include: web_or_worker_shell_read.js
  }

  setWindowTitle = function(title) { document.title = title };
} else
{
}

// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];
if (Module['thisProgram']) thisProgram = Module['thisProgram'];
if (Module['quit']) quit_ = Module['quit'];

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message




var STACK_ALIGN = 16;

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}

// include: runtime_functions.js


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // 'WebAssembly.Function' constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === 'function') {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ('\0asm')
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import 'e' 'f' (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export 'f' (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at 'e.f'), that it reroutes to an export (at 'f')
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

function getEmptyTableSlot() {
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    return freeTableIndexes.pop();
  }
  // Grow the table
  try {
    wasmTable.grow(1);
  } catch (err) {
    if (!(err instanceof RangeError)) {
      throw err;
    }
    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
  }
  return wasmTable.length - 1;
}

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < wasmTable.length; i++) {
      var item = wasmTable.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.

  var ret = getEmptyTableSlot();

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    wasmTable.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    var wrapped = convertJsFunctionToWasm(func, sig);
    wasmTable.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunction(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {

  return addFunctionWasm(func, sig);
}

// end include: runtime_functions.js
// include: runtime_debug.js


// end include: runtime_debug.js
function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];

if (typeof WebAssembly !== 'object') {
  abort('no native wasm support detected');
}

// include: runtime_safe_heap.js


// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

// end include: runtime_safe_heap.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  argTypes = argTypes || [];
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs && !opts) {
    return getCFunc(ident);
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((Uint8Array|Array<number>), number)} */
function allocate(slab, allocator) {
  var ret;

  if (allocator == ALLOC_STACK) {
    ret = stackAlloc(slab.length);
  } else {
    ret = _malloc(slab.length);
  }

  if (slab.subarray || slab.slice) {
    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);
  } else {
    HEAPU8.set(new Uint8Array(slab), ret);
  }
  return ret;
}

// include: runtime_strings.js


// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}

// end include: runtime_strings.js
// include: runtime_strings_extra.js


// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var str = '';

    // If maxBytesToRead is not passed explicitly, it will be undefined, and the for-loop's condition
    // will always evaluate to true. The loop is then terminated on the first null char.
    for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) break;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }

    return str;
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}

// end include: runtime_strings_extra.js
// Memory management

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

var INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 16777216;

// include: runtime_init_table.js
// In regular non-RELOCATABLE mode the table is exported
// from the wasm module and this will be assigned once
// the exports are available.
var wasmTable;

// end include: runtime_init_table.js
// include: runtime_stack_check.js


// end include: runtime_stack_check.js
// include: runtime_assertions.js


// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;

function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  runtimeInitialized = true;
  
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  runtimeExited = true;
}

function postRun() {

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module['preloadedImages'] = {}; // maps url to image data
Module['preloadedAudios'] = {}; // maps url to audio data

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  what = 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  var e = new WebAssembly.RuntimeError(what);

  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// {{MEM_INITIALIZER}}

// include: memoryprofiler.js


// end include: memoryprofiler.js
// include: URIUtils.js


function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = 'file://';

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}

// end include: URIUtils.js
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary(file) {
  try {
    if (file == wasmBinaryFile && wasmBinary) {
      return new Uint8Array(wasmBinary);
    }
    var binary = tryParseAsDataURI(file);
    if (binary) {
      return binary;
    }
    if (readBinary) {
      return readBinary(file);
    } else {
      throw 'sync fetching of the wasm failed: you can preload it to Module[wasmBinary] manually, or emcc.py will do that for you when generating HTML (but not JS)';
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      // Let's not use fetch to get objects over file:// as it's most likely Cordova which doesn't support fetch for file://
      && !isFileURI(wasmBinaryFile)
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw 'failed to load wasm binary file at ' + wasmBinaryFile;
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary(wasmBinaryFile);
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return Promise.resolve().then(function() { return getBinary(wasmBinaryFile); });
}

function instantiateSync(file, info) {
  var instance;
  var module;
  var binary;
  try {
    binary = getBinary(file);
    module = new WebAssembly.Module(binary);
    instance = new WebAssembly.Instance(module, info);
  } catch (e) {
    var str = e.toString();
    err('failed to compile wasm module: ' + str);
    if (str.indexOf('imported Memory') >= 0 ||
        str.indexOf('memory import') >= 0) {
      err('Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time).');
    }
    throw e;
  }
  return [instance, module];
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;

    Module['asm'] = exports;

    wasmMemory = Module['asm']['memory'];
    updateGlobalBufferAndViews(wasmMemory.buffer);

    wasmTable = Module['asm']['__indirect_function_table'];

    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');

  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }

  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);

      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  var result = instantiateSync(wasmBinaryFile, info);
  receiveInstance(result[0], result[1]);
  return Module['asm']; // exports were assigned here
}

// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};






  function callRuntimeCallbacks(callbacks) {
      while(callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == 'function') {
          callback(Module); // Pass the module as the first argument.
          continue;
        }
        var func = callback.func;
        if (typeof func === 'number') {
          if (callback.arg === undefined) {
            wasmTable.get(func)();
          } else {
            wasmTable.get(func)(callback.arg);
          }
        } else {
          func(callback.arg === undefined ? null : callback.arg);
        }
      }
    }

  function demangle(func) {
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[wd_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var error = new Error();
      if (!error.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          error = e;
        }
        if (!error.stack) {
          return '(no stack trace available)';
        }
      }
      return error.stack.toString();
    }

  function _abort() {
      abort();
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function abortOnCannotGrowMemory(requestedSize) {
      abort('OOM');
    }
  function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

  var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {
        var buffer = SYSCALLS.buffers[stream];
        if (curr === 0 || curr === 10) {
          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));
          buffer.length = 0;
        } else {
          buffer.push(curr);
        }
      },varargs:undefined,get:function() {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];
        return ret;
      },getStr:function(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },get64:function(low, high) {
        return low;
      }};
  function _fd_close(fd) {
      return 0;
    }

  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
  }

  function flush_NO_FILESYSTEM() {
      // flush anything remaining in the buffers during shutdown
      if (typeof _fflush !== 'undefined') _fflush(0);
      var buffers = SYSCALLS.buffers;
      if (buffers[1].length) SYSCALLS.printChar(1, 10);
      if (buffers[2].length) SYSCALLS.printChar(2, 10);
    }
  function _fd_write(fd, iov, iovcnt, pnum) {
      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0
      var num = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAP32[(((iov)+(i*8))>>2)];
        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];
        for (var j = 0; j < len; j++) {
          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);
        }
        num += len;
      }
      HEAP32[((pnum)>>2)]=num
      return 0;
    }

  function _setTempRet0($i) {
      setTempRet0(($i) | 0);
    }
var ASSERTIONS = false;



/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


// Copied from https://github.com/strophe/strophejs/blob/e06d027/src/polyfills.js#L149

// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

/**
 * Decodes a base64 string.
 * @param {string} input The string to decode.
 */
var decodeBase64 = typeof atob === 'function' ? atob : function (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  var output = '';
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
  input = input.replace(/[^A-Za-z0-9+/=]/g, '');
  do {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));

    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;

    output = output + String.fromCharCode(chr1);

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3);
    }
  } while (i < input.length);
  return output;
};

// Converts a string of base64 into a byte array.
// Throws error on invalid input.
function intArrayFromBase64(s) {
  if (typeof ENVIRONMENT_IS_NODE === 'boolean' && ENVIRONMENT_IS_NODE) {
    var buf;
    try {
      // TODO: Update Node.js externs, Closure does not recognize the following Buffer.from()
      /**@suppress{checkTypes}*/
      buf = Buffer.from(s, 'base64');
    } catch (_) {
      buf = new Buffer(s, 'base64');
    }
    return new Uint8Array(buf['buffer'], buf['byteOffset'], buf['byteLength']);
  }

  try {
    var decoded = decodeBase64(s);
    var bytes = new Uint8Array(decoded.length);
    for (var i = 0 ; i < decoded.length ; ++i) {
      bytes[i] = decoded.charCodeAt(i);
    }
    return bytes;
  } catch (_) {
    throw new Error('Converting base64 string to bytes failed.');
  }
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}



__ATINIT__.push({ func: function() { ___wasm_call_ctors() } });
var asmLibraryArg = {
  'abort': _abort,
  'emscripten_memcpy_big': _emscripten_memcpy_big,
  'emscripten_resize_heap': _emscripten_resize_heap,
  'fd_close': _fd_close,
  'fd_seek': _fd_seek,
  'fd_write': _fd_write,
  'setTempRet0': _setTempRet0
};
var asm = createWasm();
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module['___wasm_call_ctors'] = asm['__wasm_call_ctors']

/** @type {function(...*):?} */
var _opus_encoder_create = Module['_opus_encoder_create'] = asm['opus_encoder_create']

/** @type {function(...*):?} */
var _opus_encode_float = Module['_opus_encode_float'] = asm['opus_encode_float']

/** @type {function(...*):?} */
var _opus_encoder_ctl = Module['_opus_encoder_ctl'] = asm['opus_encoder_ctl']

/** @type {function(...*):?} */
var _opus_encoder_destroy = Module['_opus_encoder_destroy'] = asm['opus_encoder_destroy']

/** @type {function(...*):?} */
var _speex_resampler_init = Module['_speex_resampler_init'] = asm['speex_resampler_init']

/** @type {function(...*):?} */
var _speex_resampler_destroy = Module['_speex_resampler_destroy'] = asm['speex_resampler_destroy']

/** @type {function(...*):?} */
var _speex_resampler_process_interleaved_float = Module['_speex_resampler_process_interleaved_float'] = asm['speex_resampler_process_interleaved_float']

/** @type {function(...*):?} */
var ___errno_location = Module['___errno_location'] = asm['__errno_location']

/** @type {function(...*):?} */
var stackSave = Module['stackSave'] = asm['stackSave']

/** @type {function(...*):?} */
var stackRestore = Module['stackRestore'] = asm['stackRestore']

/** @type {function(...*):?} */
var stackAlloc = Module['stackAlloc'] = asm['stackAlloc']

/** @type {function(...*):?} */
var _malloc = Module['_malloc'] = asm['malloc']

/** @type {function(...*):?} */
var _free = Module['_free'] = asm['free']

/** @type {function(...*):?} */
var dynCall_jiji = Module['dynCall_jiji'] = asm['dynCall_jiji']





// === Auto-generated postamble setup entry stuff ===



var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = 'ExitStatus';
  this.message = 'Program terminated with exit(' + status + ')';
  this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
}
Module['run'] = run;

/** @param {boolean|number=} implicit */
function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
  } else {

    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);

    ABORT = true;
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

noExitRuntime = true;

run();





'use strict';

const OggOpusEncoder = function( config, Module ){
  if ( !Module ) {
    throw new Error('Module with exports required to initialize an encoder instance');
  }

  this.config = Object.assign({ 
    encoderApplication: 2049, // 2048 = Voice (Lower fidelity)
                              // 2049 = Full Band Audio (Highest fidelity)
                              // 2051 = Restricted Low Delay (Lowest latency)
    encoderFrameSize: 20, // Specified in ms.
    encoderSampleRate: 48000, // Desired encoding sample rate. Audio will be resampled
    maxFramesPerPage: 40, // Tradeoff latency with overhead
    numberOfChannels: 1,
    originalSampleRate: 44100,
    resampleQuality: 3,  // Value between 0 and 10 inclusive. 10 being highest quality.
    serial: Math.floor(Math.random() * 4294967296),
    encodeRaw: true,
    encodePCM: false,
  }, config );

  this._opus_encoder_create = Module._opus_encoder_create;
  this._opus_encoder_destroy = Module._opus_encoder_destroy;
  this._opus_encoder_ctl = Module._opus_encoder_ctl;
  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;
  this._speex_resampler_init = Module._speex_resampler_init;
  this._speex_resampler_destroy = Module._speex_resampler_destroy;
  this._opus_encode_float = Module._opus_encode_float;
  this._free = Module._free;
  this._malloc = Module._malloc;
  this.HEAPU8 = Module.HEAPU8;
  this.HEAP32 = Module.HEAP32;
  this.HEAPF32 = Module.HEAPF32;

  this.pageIndex = 0;
  this.granulePosition = 0;
  this.segmentData = new Uint8Array( 65025 ); // Maximum length of oggOpus data
  this.segmentDataIndex = 0;
  this.segmentTable = new Uint8Array( 255 ); // Maximum data segments
  this.segmentTableIndex = 0;
  this.framesInPage = 0;

  this.initChecksumTable();
  this.initCodec();
  this.initResampler();

  //print(\`config = \${JSON.stringify(this.config)}\`);

  if ( this.config.numberOfChannels === 1 ) {
    this.interleave = function( buffers ) { return buffers[0]; };
  }
};

OggOpusEncoder.prototype.encode = function( buffers ) {
    // Determine bufferLength dynamically
    if ( !this.bufferLength ) {
        this.bufferLength = buffers[0].length;
        this.interleavedBuffers = new Float32Array( this.bufferLength * this.config.numberOfChannels );
    }

    var samples = this.interleave(buffers);
    if (this.config.encodePCM) {
        var buff = samples.subarray(0, samples.length).slice(0, samples.length).buffer
        var page = new Uint8Array(buff);
        return [{message: 'page', page: page}];
    }

    var sampleIndex = 0;
    var exportPages = [];

    while ( sampleIndex < samples.length ) {
        var lengthToCopy = Math.min( this.resampleBufferLength - this.resampleBufferIndex, samples.length - sampleIndex );
        this.resampleBuffer.set( samples.subarray( sampleIndex, sampleIndex+lengthToCopy ), this.resampleBufferIndex );
        sampleIndex += lengthToCopy;
        this.resampleBufferIndex += lengthToCopy;

        if ( this.resampleBufferIndex === this.resampleBufferLength ) {
            this._speex_resampler_process_interleaved_float( this.resampler, this.resampleBufferPointer, this.resampleSamplesPerChannelPointer, this.encoderBufferPointer, this.encoderSamplesPerChannelPointer );
            var packetLength = this._opus_encode_float( this.encoder, this.encoderBufferPointer, this.encoderSamplesPerChannel, this.encoderOutputPointer, this.encoderOutputMaxLength );
            if (this.config.encodeRaw) {
                this.resampleBufferIndex = 0;
                if (packetLength > 0) {
                    var page = this.encoderOutputBuffer.subarray(0, packetLength).slice(0, packetLength);
                    exportPages.push({message: 'page', page: page});
                }
            } else {
                exportPages.concat(this.segmentPacket( packetLength ));
                this.resampleBufferIndex = 0;

                this.framesInPage++;
                if ( this.framesInPage >= this.config.maxFramesPerPage ) {
                    exportPages.push( this.generatePage() );
                }
            }
        }
    }
    return exportPages;
};

OggOpusEncoder.prototype.destroy = function() {
  if ( this.encoder ) {
    this._free(this.encoderSamplesPerChannelPointer);
    delete this.encoderSamplesPerChannelPointer;
    this._free(this.encoderBufferPointer);
    delete this.encoderBufferPointer;
    this._free(this.encoderOutputPointer);
    delete this.encoderOutputPointer;
    this._free(this.resampleSamplesPerChannelPointer);
    delete this.resampleSamplesPerChannelPointer;
    this._free(this.resampleBufferPointer);
    delete this.resampleBufferPointer;
    this._speex_resampler_destroy(this.resampler);
    delete this.resampler;
    this._opus_encoder_destroy(this.encoder);
    delete this.encoder;
  }
};

OggOpusEncoder.prototype.flush = function() {
  if (this.config.encodeRaw) {
    this.resampleBufferIndex = 0;	  
    return [];
  }
  var exportPage;
  if ( this.framesInPage ) {
    exportPage = this.generatePage();
  }
  // discard any pending data in resample buffer (only a few ms worth)
  this.resampleBufferIndex = 0;
  return exportPage;
};

OggOpusEncoder.prototype.encodeFinalFrame = function() {
  const exportPages = [];

  // Encode the data remaining in the resample buffer.
  if ( this.resampleBufferIndex > 0 ) {
    const dataToFill = (this.resampleBufferLength - this.resampleBufferIndex) / this.config.numberOfChannels;
    const numBuffers = Math.ceil(dataToFill / this.bufferLength);

    for ( var i = 0; i < numBuffers; i++ ) { 
      var finalFrameBuffers = [];
      for ( var j = 0; j < this.config.numberOfChannels; j++ ) {
        finalFrameBuffers.push( new Float32Array( this.bufferLength ));
      }
      exportPages.concat(this.encode( finalFrameBuffers ));
    }
  }
  if (this.config.encodeRaw) {
	return exportPages;
  }

  this.headerType += 4;
  exportPages.push(this.generatePage());
  return exportPages;
};

OggOpusEncoder.prototype.getChecksum = function( data ){
  var checksum = 0;
  for ( var i = 0; i < data.length; i++ ) {
    checksum = (checksum << 8) ^ this.checksumTable[ ((checksum>>>24) & 0xff) ^ data[i] ];
  }
  return checksum >>> 0;
};

OggOpusEncoder.prototype.generateCommentPage = function(){
  var segmentDataView = new DataView( this.segmentData.buffer );
  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'
  segmentDataView.setUint32( 4, 1936154964, true ) // Magic Signature 'Tags'
  segmentDataView.setUint32( 8, 10, true ); // Vendor Length
  segmentDataView.setUint32( 12, 1868784978, true ); // Vendor name 'Reco'
  segmentDataView.setUint32( 16, 1919247474, true ); // Vendor name 'rder'
  segmentDataView.setUint16( 20, 21322, true ); // Vendor name 'JS'
  segmentDataView.setUint32( 22, 0, true ); // User Comment List Length
  this.segmentTableIndex = 1;
  this.segmentDataIndex = this.segmentTable[0] = 26;
  this.headerType = 0;
  return this.generatePage();
};

OggOpusEncoder.prototype.generateIdPage = function(){
  var segmentDataView = new DataView( this.segmentData.buffer );
  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'
  segmentDataView.setUint32( 4, 1684104520, true ) // Magic Signature 'Head'
  segmentDataView.setUint8( 8, 1, true ); // Version
  segmentDataView.setUint8( 9, this.config.numberOfChannels, true ); // Channel count
  segmentDataView.setUint16( 10, 3840, true ); // pre-skip (80ms)
  segmentDataView.setUint32( 12, this.config.originalSampleRateOverride || this.config.originalSampleRate, true ); // original sample rate
  segmentDataView.setUint16( 16, 0, true ); // output gain
  segmentDataView.setUint8( 18, 0, true ); // channel map 0 = mono or stereo
  this.segmentTableIndex = 1;
  this.segmentDataIndex = this.segmentTable[0] = 19;
  this.headerType = 2;
  return this.generatePage();
};

OggOpusEncoder.prototype.generatePage = function(){
  var granulePosition = ( this.lastPositiveGranulePosition === this.granulePosition) ? -1 : this.granulePosition;
  var pageBuffer = new ArrayBuffer(  27 + this.segmentTableIndex + this.segmentDataIndex );
  var pageBufferView = new DataView( pageBuffer );
  var page = new Uint8Array( pageBuffer );

  pageBufferView.setUint32( 0, 1399285583, true); // Capture Pattern starts all page headers 'OggS'
  pageBufferView.setUint8( 4, 0, true ); // Version
  pageBufferView.setUint8( 5, this.headerType, true ); // 1 = continuation, 2 = beginning of stream, 4 = end of stream

  // Number of samples upto and including this page at 48000Hz, into signed 64 bit Little Endian integer
  // Javascript Number maximum value is 53 bits or 2^53 - 1 
  pageBufferView.setUint32( 6, granulePosition, true );
  if (granulePosition < 0) {
    pageBufferView.setInt32( 10, Math.ceil(granulePosition/4294967297) - 1, true );
  }
  else {
    pageBufferView.setInt32( 10, Math.floor(granulePosition/4294967296), true );
  }

  pageBufferView.setUint32( 14, this.config.serial, true ); // Bitstream serial number
  pageBufferView.setUint32( 18, this.pageIndex++, true ); // Page sequence number
  pageBufferView.setUint8( 26, this.segmentTableIndex, true ); // Number of segments in page.
  page.set( this.segmentTable.subarray(0, this.segmentTableIndex), 27 ); // Segment Table
  page.set( this.segmentData.subarray(0, this.segmentDataIndex), 27 + this.segmentTableIndex ); // Segment Data
  pageBufferView.setUint32( 22, this.getChecksum( page ), true ); // Checksum

  var exportPage = { message: 'page', page: page, samplePosition: this.granulePosition };
  this.segmentTableIndex = 0;
  this.segmentDataIndex = 0;
  this.framesInPage = 0;
  if ( granulePosition > 0 ) {
    this.lastPositiveGranulePosition = granulePosition;
  }

  return exportPage;
};

OggOpusEncoder.prototype.initChecksumTable = function(){
  this.checksumTable = [];
  for ( var i = 0; i < 256; i++ ) {
    var r = i << 24;
    for ( var j = 0; j < 8; j++ ) {
      r = ((r & 0x80000000) != 0) ? ((r << 1) ^ 0x04c11db7) : (r << 1);
    }
    this.checksumTable[i] = (r & 0xffffffff);
  }
};

OggOpusEncoder.prototype.setOpusControl = function( control, value ){
  var location = this._malloc( 4 );
  this.HEAP32[ location >> 2 ] = value;
  this._opus_encoder_ctl( this.encoder, control, location );
  this._free( location );
};

OggOpusEncoder.prototype.initCodec = function() {
  var errLocation = this._malloc( 4 );
  this.encoder = this._opus_encoder_create( this.config.encoderSampleRate, this.config.numberOfChannels, this.config.encoderApplication, errLocation );
  this._free( errLocation );

  if ( this.config.encoderBitRate ) {
    this.setOpusControl( 4002, this.config.encoderBitRate );
  }

  if ( this.config.encoderComplexity ) {
    this.setOpusControl( 4010, this.config.encoderComplexity );
  }

  this.encoderSamplesPerChannel = this.config.encoderSampleRate * this.config.encoderFrameSize / 1000;
  this.encoderSamplesPerChannelPointer = this._malloc( 4 );
  this.HEAP32[ this.encoderSamplesPerChannelPointer >> 2 ] = this.encoderSamplesPerChannel;

  this.encoderBufferLength = this.encoderSamplesPerChannel * this.config.numberOfChannels;
  this.encoderBufferPointer = this._malloc( this.encoderBufferLength * 4 ); // 4 bytes per sample
  this.encoderBuffer = this.HEAPF32.subarray( this.encoderBufferPointer >> 2, (this.encoderBufferPointer >> 2) + this.encoderBufferLength );

  this.encoderOutputMaxLength = 4000;
  this.encoderOutputPointer = this._malloc( this.encoderOutputMaxLength );
  this.encoderOutputBuffer = this.HEAPU8.subarray( this.encoderOutputPointer, this.encoderOutputPointer + this.encoderOutputMaxLength );
};

OggOpusEncoder.prototype.initResampler = function() {
  var errLocation = this._malloc( 4 );
  this.resampler = this._speex_resampler_init( this.config.numberOfChannels, this.config.originalSampleRate, this.config.encoderSampleRate, this.config.resampleQuality, errLocation );
  this._free( errLocation );

  this.resampleBufferIndex = 0;
  this.resampleSamplesPerChannel = this.config.originalSampleRate * this.config.encoderFrameSize / 1000;
  this.resampleSamplesPerChannelPointer = this._malloc( 4 );
  this.HEAP32[ this.resampleSamplesPerChannelPointer >> 2 ] = this.resampleSamplesPerChannel;

  this.resampleBufferLength = this.resampleSamplesPerChannel * this.config.numberOfChannels;
  this.resampleBufferPointer = this._malloc( this.resampleBufferLength * 4 ); // 4 bytes per sample
  this.resampleBuffer = this.HEAPF32.subarray( this.resampleBufferPointer >> 2, (this.resampleBufferPointer >> 2) + this.resampleBufferLength );
};

OggOpusEncoder.prototype.interleave = function( buffers ) {
  for ( var i = 0; i < this.bufferLength; i++ ) {
    for ( var channel = 0; channel < this.config.numberOfChannels; channel++ ) {
      this.interleavedBuffers[ i * this.config.numberOfChannels + channel ] = buffers[ channel ][ i ];
    }
  }

  return this.interleavedBuffers;
};

OggOpusEncoder.prototype.segmentPacket = function( packetLength ) {
  var packetIndex = 0;
  var exportPages = [];

  while ( packetLength >= 0 ) {

    if ( this.segmentTableIndex === 255 ) {
      exportPages.push( this.generatePage() );
      this.headerType = 1;
    }

    var segmentLength = Math.min( packetLength, 255 );
    this.segmentTable[ this.segmentTableIndex++ ] = segmentLength;
    this.segmentData.set( this.encoderOutputBuffer.subarray( packetIndex, packetIndex + segmentLength ), this.segmentDataIndex );
    this.segmentDataIndex += segmentLength;
    packetIndex += segmentLength;
    packetLength -= 255;
  }

  this.granulePosition += ( 48 * this.config.encoderFrameSize );
  if ( this.segmentTableIndex === 255 ) {
    exportPages.push( this.generatePage() );
    this.headerType = 0;
  }

  return exportPages;
};

var print = ()=> {};

// Run in AudioWorkletGlobal scope
if (typeof registerProcessor === 'function') {

  class EncoderWorklet extends AudioWorkletProcessor {

    constructor(){
      super();
      print = (text)=> {
          this.port.postMessage( {message: 'print', text: text} );
      };
      this.continueProcess = true;
      this.port.onmessage = ({ data }) => {
        if (this.encoder) {
          switch( data['command'] ){
            case 'getHeaderPages':
			  if (!this.encoder.config.encodeRaw) {
			    this.postPage(this.encoder.generateIdPage());
	            this.postPage(this.encoder.generateCommentPage());
			  }
              break;

            case 'done':
              this.encoder.encodeFinalFrame().forEach(pageData => this.postPage(pageData));
              this.encoder.destroy();
              delete this.encoder;
              this.port.postMessage( {message: 'done'} );
              break;

            case 'flush':
              this.postPage(this.encoder.flush());
              this.port.postMessage( {message: 'flushed'} );
              break;

            default:
              // Ignore any unknown commands and continue recieving commands
          }
        }

        switch( data['command'] ){

          case 'close':
            this.continueProcess = false;
            break;

          case 'init':
            this.encoder = new OggOpusEncoder( data, Module );
            this.port.postMessage( {message: 'ready'} );
            break;

          default:
            // Ignore any unknown commands and continue recieving commands
        }
      }
    }

    process(inputs) {
      if (this.encoder && inputs[0] && inputs[0].length && inputs[0][0] && inputs[0][0].length){
        this.encoder.encode( inputs[0] ).forEach(pageData => this.postPage(pageData));
      }
      return this.continueProcess;
    }

    postPage(pageData) {
      if (pageData) {
        this.port.postMessage( pageData, [pageData.page.buffer] );
      }
    }
  }

  registerProcessor('encoder-worklet', EncoderWorklet);
}

// run in scriptProcessor worker scope
else {
  var encoder;
  var postPageGlobal = (pageData) => {
    if (pageData) {
      postMessage( pageData, [pageData.page.buffer] );
    }
  }
    print = (text)=> {
        postMessage({message: 'print', text: text} );
    };

  onmessage = ({ data }) => {
    if (encoder) {
      switch( data['command'] ){

        case 'encode':
          encoder.encode( data['buffers'] ).forEach(pageData => postPageGlobal(pageData));
          break;

        case 'getHeaderPages':
          postPageGlobal(encoder.generateIdPage());
          postPageGlobal(encoder.generateCommentPage());
          break;

        case 'done':
          encoder.encodeFinalFrame().forEach(pageData => postPageGlobal(pageData));
          encoder.destroy();
          encoder = null;
          postMessage( {message: 'done'} );
          break;

        case 'flush':
          postPageGlobal(encoder.flush());
          postMessage( {message: 'flushed'} );
          break;

        default:
          // Ignore any unknown commands and continue recieving commands
      }
    }

    switch( data['command'] ){

      case 'close':
        close();
        break;

      case 'init':
        encoder = new OggOpusEncoder( data, Module );
        postMessage( {message: 'ready'} );
        break;

      default:
        // Ignore any unknown commands and continue recieving commands
    }
  };
}


// Exports for unit testing.
var module = module || {};
module.exports = {
  Module: Module,
  OggOpusEncoder: OggOpusEncoder
};

`],{type:"text/javascript"})),c=w(F);function w(gA){const yA=`importScripts( "${gA}" );`;return URL.createObjectURL(new Blob([yA],{type:"text/javascript"}))}var M=new Worker(c);URL.revokeObjectURL(c);var Y={},p=a,k=o,Z=d,J=[],W=null,T=null,j=window.AudioContext||window.webkitAudioContext,P=null,_=!1,$=!!document.documentMode,QA=!$&&!!window.StyleMedia,H=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),K=navigator.userAgent.match(/safari/i)&&navigator.vendor.match(/apple/i)&&navigator.maxTouchPoints;QA||H?T=new j({sampleRate:l.sampleRate}):T=new j,T.resume().then(()=>OA(U));var BA=null,dA=null,rA=T.createGain(),JA=T.createGain();JA.gain.value=1;var MA=null,SA=T.createScriptProcessor(l.bufferLength,1,1);SA.onaudioprocess=({inputBuffer:gA})=>eB(gA),SA.connect(T.destination),M.start&&M.start();var eA=({data:gA})=>{switch(gA.message){case"ready":console.log("Alan: audio worker initialized");break;case"page":k!==C&&Z!==D&&OA("frame",l.sampleRate,gA.page);break;case"done":M.removeEventListener("message",eA);break;case"print":console.log("AUDIO-WORKER",gA.text);break}};M.addEventListener("message",eA),M.postMessage({command:"init",originalSampleRate:T.sampleRate,encoderSampleRate:l.sampleRate,encoderApplication:l.encoderApplication,encodePCM:l.encodePCM});function tA(){return dA?Promise.resolve(dA):navigator.mediaDevices.getUserMedia({audio:!0}).then(gA=>{OA("micAllowed"),BA=gA,dA=T.createMediaStreamSource(gA),dA.connect(rA),rA.connect(SA)})}function eB(gA){if(!(p!==I||k===C||_)){var yA=[gA.getChannelData(0)];M.postMessage({command:"encode",buffers:yA})}}function _A(){k=E,UA(!0)}function EB(){return W||(W=document.createElement("audio"),W.addEventListener("ended",function(){_A()}),document.body.appendChild(W),W.setAttribute("autoplay","true"),W)}function XA(gA){for(var yA=window.atob(gA),VA=yA.length,HA=new Uint8Array(VA),cB=0;cB<VA;cB++)HA[cB]=yA.charCodeAt(cB);return HA.buffer}function oB(gA){if(Z=d,K){const VA="data:audio/mpeg;base64,";gA.startsWith(VA)&&(gA=gA.substring(VA.length));var yA=XA(gA);T.decodeAudioData(yA,HA=>{MA=T.createBufferSource(),MA.addEventListener("ended",cB=>_A()),MA.connect(rA),MA.connect(JA),JA.connect(T.destination),MA.loop=!1,MA.buffer=HA,MA.start(0)},HA=>console.error(`Error with decoding audio data: ${HA.err}`))}else EB().muted=!1,EB().setAttribute("src",gA)}function ZA(){K?MA&&MA.stop():W&&(W.pause(),W.currentTime=0,W.src="")}function LA(){K||EB().setAttribute("src",""),tB()}function UA(gA){if(T.state!=="suspended"&&(gA&&!J.length&&LA(),!(!J.length||k===C))){for(;J.length&&k!==C;){var yA=J.shift();yA.event?OA("command",yA.event):yA.text?OA("text",yA.text):yA.afterText?OA("afterText",yA.afterText):yA.popup?OA("popup",yA.popup):yA.audio?(i||p!==a)&&(k=C,OA("playStart"),oB(yA.audio)):console.error("invalid queue item")}gA&&k!==C&&tB()}}function tB(){OA("playStop")}function OA(gA,yA,VA){var HA=Y[gA];if(HA)for(var cB=0;cB<HA.length;cB++)HA[cB](yA,VA)}n.getFormat=function(){return{send:{codec:"opus",sampleRate:16e3},recv:{codec:"mp3;base64",sampleRate:16e3}}},n.isAudioRunning=function(){return T&&T.state==="running"},n.isPlaying=function(){return k===C},n.enableVoice=function(){i=!0,EB().muted=!1},n.disableVoice=function(){i=!1,EB().muted=!0},n.setProcessingState=function(){Z=D},n.playText=function(gA){gA&&gA.ctx&&gA.ctx.opts&&gA.ctx.opts.force===!0?OA("text",gA):T.resume().then(()=>{J.push({text:gA}),UA()})},n.playAfterText=function(gA){T.resume().then(()=>{J.push({afterText:gA}),UA()})},n.playCommand=function(gA){T.resume().then(()=>{J.push({event:gA}),UA()})},n.showPopup=function(gA){gA.popup.force?OA("popup",gA):T.resume().then(()=>{J.push({popup:gA}),UA()})},n.playEvent=function(gA){n.playCommand(gA)},n.playAudio=function(gA){T.resume().then(()=>{J.push({audio:gA}),UA()})},n.on=function(gA,yA){var VA=Y[gA];VA==null?Y[gA]=[yA]:VA.push(yA)},n.off=function(gA,yA){var VA=Y[gA];if(VA){var HA=VA.indexOf(yA);HA>=0&&VA.splice(HA,1)}},n.resumeAudioCtx=function(){T.resume()};var cA=!1;function hB(gA){cA=gA}n.isMicAllowed=function(){return cA},n.start=function(gA){P&&(clearTimeout(P),P=null),Z=d,EB().setAttribute("src",""),k=E,tA().then(()=>{p=I,OA("micStart")}).then(()=>{hB(!0),K||T.resume()}).catch(yA=>{OA("micFail",yA)}),gA&&(gA(),gA=null)},n.stop=function(){dA&&(p=r),P&&(clearTimeout(P),P=null),P=setTimeout(iB,l.micTimeout),OA("micStop"),k=o,J=[],ZA()},n.skipExternalSounds=function(gA){_=gA};function iB(){console.log("stopping the mic."),p=a,dA&&(dA.disconnect(),dA=null),rA.disconnect(),BA&&(BA.getTracks?BA.getTracks().forEach(gA=>gA.stop()):BA.stop(),BA=null)}}(typeof window<"u"?function(){return window.alanAudio={},window.alanAudio}():B);var Q=this&&this.__assign||function(){return Q=Object.assign||function(n){for(var E,C=1,o=arguments.length;C<o;C++){E=arguments[C];for(var i in E)Object.prototype.hasOwnProperty.call(E,i)&&(n[i]=E[i])}return n},Q.apply(this,arguments)},e=this&&this.__awaiter||function(n,E,C,o){function i(r){return r instanceof C?r:new C(function(I){I(r)})}return new(C||(C=Promise))(function(r,I){function a(U){try{D(o.next(U))}catch(l){I(l)}}function d(U){try{D(o.throw(U))}catch(l){I(l)}}function D(U){U.done?r(U.value):i(U.value).then(a,d)}D((o=o.apply(n,E||[])).next())})},t=this&&this.__generator||function(n,E){var C={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,i,r,I;return I={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(I[Symbol.iterator]=function(){return this}),I;function a(D){return function(U){return d([D,U])}}function d(D){if(o)throw new TypeError("Generator is already executing.");for(;C;)try{if(o=1,i&&(r=D[0]&2?i.return:D[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,D[1])).done)return r;switch(i=0,r&&(D=[D[0]&2,r.value]),D[0]){case 0:case 1:r=D;break;case 4:return C.label++,{value:D[1],done:!1};case 5:C.label++,i=D[1],D=[0];continue;case 7:D=C.ops.pop(),C.trys.pop();continue;default:if(r=C.trys,!(r=r.length>0&&r[r.length-1])&&(D[0]===6||D[0]===2)){C=0;continue}if(D[0]===3&&(!r||D[1]>r[0]&&D[1]<r[3])){C.label=D[1];break}if(D[0]===6&&C.label<r[1]){C.label=r[1],r=D;break}if(r&&C.label<r[2]){C.label=r[2],C.ops.push(D);break}r[2]&&C.ops.pop(),C.trys.pop();continue}D=E.call(n,C)}catch(U){D=[6,U],i=0}finally{o=r=0}if(D[0]&5)throw D[1];return{value:D[0]?D[1]:void 0,done:!0}}},g=this&&this.__spreadArray||function(n,E,C){if(C||arguments.length===2)for(var o=0,i=E.length,r;o<i;o++)(r||!(o in E))&&(r||(r=Array.prototype.slice.call(E,0,o)),r[o]=E[o]);return n.concat(r||Array.prototype.slice.call(E))};return function(){var n=Object.defineProperty,E=function(h,u,f){return u in h?n(h,u,{enumerable:!0,configurable:!0,writable:!0,value:f}):h[u]=f},C=function(h,u,f){return E(h,typeof u!="symbol"?u+"":u,f),f};function o(){return'<div class="alan-btn__chat-incomming-msg-wrapper"> <div class="alan-btn__chat-incomming-msg msg-1">&nbsp;</div> <div class="alan-btn__chat-incomming-msg msg-2">&nbsp;</div> <div class="alan-btn__chat-incomming-msg msg-3">&nbsp;</div>  </div>'}function i(h){var u;return((u=h.ctx)===null||u===void 0?void 0:u.final)!==!1}function r(h){return h.initLoad||i(h)?"":'<div style="margin-top: 12px;margin-bottom: 12px;">'.concat(o(),"</div>")}function I(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var a=I();function d(h){a=h}var D=/[&<>"']/,U=new RegExp(D.source,"g"),l=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,F=new RegExp(l.source,"g"),c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},w=function(h){return c[h]};function M(h,u){if(u){if(D.test(h))return h.replace(U,w)}else if(l.test(h))return h.replace(F,w);return h}var Y=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function p(h){return h.replace(Y,function(u,f){return f=f.toLowerCase(),f==="colon"?":":f.charAt(0)==="#"?f.charAt(1)==="x"?String.fromCharCode(parseInt(f.substring(2),16)):String.fromCharCode(+f.substring(1)):""})}var k=/(^|[^\[])\^/g;function Z(h,u){h=typeof h=="string"?h:h.source,u=u||"";var f={replace:function(m,y){return y=y.source||y,y=y.replace(k,"$1"),h=h.replace(m,y),f},getRegex:function(){return new RegExp(h,u)}};return f}var J=/[^\w:]/g,W=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function T(h,u,f){if(h){var m=void 0;try{m=decodeURIComponent(p(f)).replace(J,"").toLowerCase()}catch{return null}if(m.indexOf("javascript:")===0||m.indexOf("vbscript:")===0||m.indexOf("data:")===0)return null}u&&!W.test(f)&&(f=QA(u,f));try{f=encodeURI(f).replace(/%25/g,"%")}catch{return null}return f}var j={},P=/^[^:]+:\/*[^/]*$/,_=/^([^:]+:)[\s\S]*$/,$=/^([^:]+:\/*[^/]*)[\s\S]*$/;function QA(h,u){j[" "+h]||(P.test(h)?j[" "+h]=h+"/":j[" "+h]=BA(h,"/",!0)),h=j[" "+h];var f=h.indexOf(":")===-1;return u.substring(0,2)==="//"?f?u:h.replace(_,"$1")+u:u.charAt(0)==="/"?f?u:h.replace($,"$1")+u:h+u}var H={exec:function(){}};function K(h,u){var f=h.replace(/\|/g,function(V,x,O){for(var nA=!1,EA=x;--EA>=0&&O[EA]==="\\";)nA=!nA;return nA?"|":" |"}),m=f.split(/ \|/),y=0;if(m[0].trim()||m.shift(),m.length>0&&!m[m.length-1].trim()&&m.pop(),m.length>u)m.splice(u);else for(;m.length<u;)m.push("");for(;y<m.length;y++)m[y]=m[y].trim().replace(/\\\|/g,"|");return m}function BA(h,u,f){var m=h.length;if(m===0)return"";for(var y=0;y<m;){var V=h.charAt(m-y-1);if(V===u&&!f)y++;else if(V!==u&&f)y++;else break}return h.slice(0,m-y)}function dA(h,u){if(h.indexOf(u[1])===-1)return-1;for(var f=h.length,m=0,y=0;y<f;y++)if(h[y]==="\\")y++;else if(h[y]===u[0])m++;else if(h[y]===u[1]&&(m--,m<0))return y;return-1}function rA(h,u){!h||h.silent||(u&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(h.sanitize||h.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(h.highlight||h.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),h.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),h.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),h.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),h.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(h.headerIds||h.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function JA(h,u,f,m){var y=u.href,V=u.title?M(u.title):null,x=h[1].replace(/\\([\[\]])/g,"$1");if(h[0].charAt(0)!=="!"){m.state.inLink=!0;var O={type:"link",raw:f,href:y,title:V,text:x,tokens:m.inlineTokens(x)};return m.state.inLink=!1,O}return{type:"image",raw:f,href:y,title:V,text:M(x)}}function MA(h,u){var f=h.match(/^(\s+)(?:```)/);if(f===null)return u;var m=f[1];return u.split(`
`).map(function(y){var V=y.match(/^\s+/);if(V===null)return y;var x=V[0];return x.length>=m.length?y.slice(m.length):y}).join(`
`)}var SA=function(){function h(u){this.options=u||a}return h.prototype.space=function(u){var f=this.rules.block.newline.exec(u);if(f&&f[0].length>0)return{type:"space",raw:f[0]}},h.prototype.code=function(u){var f=this.rules.block.code.exec(u);if(f){var m=f[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:f[0],codeBlockStyle:"indented",text:this.options.pedantic?m:BA(m,`
`)}}},h.prototype.fences=function(u){var f=this.rules.block.fences.exec(u);if(f){var m=f[0],y=MA(m,f[3]||"");return{type:"code",raw:m,lang:f[2]?f[2].trim().replace(this.rules.inline._escapes,"$1"):f[2],text:y}}},h.prototype.heading=function(u){var f=this.rules.block.heading.exec(u);if(f){var m=f[2].trim();if(/#$/.test(m)){var y=BA(m,"#");(this.options.pedantic||!y||/ $/.test(y))&&(m=y.trim())}return{type:"heading",raw:f[0],depth:f[1].length,text:m,tokens:this.lexer.inline(m)}}},h.prototype.hr=function(u){var f=this.rules.block.hr.exec(u);if(f)return{type:"hr",raw:f[0]}},h.prototype.blockquote=function(u){var f=this.rules.block.blockquote.exec(u);if(f){var m=f[0].replace(/^ *>[ \t]?/gm,""),y=this.lexer.state.top;this.lexer.state.top=!0;var V=this.lexer.blockTokens(m);return this.lexer.state.top=y,{type:"blockquote",raw:f[0],tokens:V,text:m}}},h.prototype.list=function(u){var f=this.rules.block.list.exec(u);if(f){var m=void 0,y=void 0,V=void 0,x=void 0,O=void 0,nA=void 0,EA=void 0,sA=void 0,GA=void 0,mA=void 0,z=void 0,RA=void 0,uA=f[1].trim(),WA=uA.length>1,fA={type:"list",raw:"",ordered:WA,start:WA?+uA.slice(0,-1):"",loose:!1,items:[]};uA=WA?"\\d{1,9}\\".concat(uA.slice(-1)):"\\".concat(uA),this.options.pedantic&&(uA=WA?uA:"[*+-]");for(var rB=new RegExp("^( {0,3}".concat(uA,")((?:[	 ][^\\n]*)?(?:\\n|$))"));u&&(RA=!1,!(!(f=rB.exec(u))||this.rules.block.hr.test(u)));){if(m=f[0],u=u.substring(m.length),sA=f[2].split(`
`,1)[0].replace(/^\t+/,function(oQ){return" ".repeat(3*oQ.length)}),GA=u.split(`
`,1)[0],this.options.pedantic?(x=2,z=sA.trimLeft()):(x=f[2].search(/[^ ]/),x=x>4?1:x,z=sA.slice(x),x+=f[1].length),nA=!1,!sA&&/^ *$/.test(GA)&&(m+=GA+`
`,u=u.substring(GA.length+1),RA=!0),!RA)for(var IB=new RegExp("^ {0,".concat(Math.min(3,x-1),"}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))")),dQ=new RegExp("^ {0,".concat(Math.min(3,x-1),"}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)")),UB=new RegExp("^ {0,".concat(Math.min(3,x-1),"}(?:```|~~~)")),zB=new RegExp("^ {0,".concat(Math.min(3,x-1),"}#"));u&&(mA=u.split(`
`,1)[0],GA=mA,this.options.pedantic&&(GA=GA.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(UB.test(GA)||zB.test(GA)||IB.test(GA)||dQ.test(u)));){if(GA.search(/[^ ]/)>=x||!GA.trim())z+=`
`+GA.slice(x);else{if(nA||sA.search(/[^ ]/)>=4||UB.test(sA)||zB.test(sA)||dQ.test(sA))break;z+=`
`+GA}!nA&&!GA.trim()&&(nA=!0),m+=mA+`
`,u=u.substring(mA.length+1),sA=GA.slice(x)}fA.loose||(EA?fA.loose=!0:/\n *\n *$/.test(m)&&(EA=!0)),this.options.gfm&&(y=/^\[[ xX]\] /.exec(z),y&&(V=y[0]!=="[ ] ",z=z.replace(/^\[[ xX]\] +/,""))),fA.items.push({type:"list_item",raw:m,task:!!y,checked:V,loose:!1,text:z}),fA.raw+=m}fA.items[fA.items.length-1].raw=m.trimRight(),fA.items[fA.items.length-1].text=z.trimRight(),fA.raw=fA.raw.trimRight();var eQ=fA.items.length;for(O=0;O<eQ;O++)if(this.lexer.state.top=!1,fA.items[O].tokens=this.lexer.blockTokens(fA.items[O].text,[]),!fA.loose){var NB=fA.items[O].tokens.filter(function(oQ){return oQ.type==="space"}),Dt=NB.length>0&&NB.some(function(oQ){return/\n.*\n/.test(oQ.raw)});fA.loose=Dt}if(fA.loose)for(O=0;O<eQ;O++)fA.items[O].loose=!0;return fA}},h.prototype.html=function(u){var f=this.rules.block.html.exec(u);if(f){var m={type:"html",block:!0,raw:f[0],pre:!this.options.sanitizer&&(f[1]==="pre"||f[1]==="script"||f[1]==="style"),text:f[0]};if(this.options.sanitize){var y=this.options.sanitizer?this.options.sanitizer(f[0]):M(f[0]);m.type="paragraph",m.text=y,m.tokens=this.lexer.inline(y)}return m}},h.prototype.def=function(u){var f=this.rules.block.def.exec(u);if(f){var m=f[1].toLowerCase().replace(/\s+/g," "),y=f[2]?f[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",V=f[3]?f[3].substring(1,f[3].length-1).replace(this.rules.inline._escapes,"$1"):f[3];return{type:"def",tag:m,raw:f[0],href:y,title:V}}},h.prototype.table=function(u){var f=this.rules.block.table.exec(u);if(f){var m={type:"table",header:K(f[1]).map(function(EA){return{text:EA}}),align:f[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:f[3]&&f[3].trim()?f[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(m.header.length===m.align.length){m.raw=f[0];var y=m.align.length,V=void 0,x=void 0,O=void 0,nA=void 0;for(V=0;V<y;V++)/^ *-+: *$/.test(m.align[V])?m.align[V]="right":/^ *:-+: *$/.test(m.align[V])?m.align[V]="center":/^ *:-+ *$/.test(m.align[V])?m.align[V]="left":m.align[V]=null;for(y=m.rows.length,V=0;V<y;V++)m.rows[V]=K(m.rows[V],m.header.length).map(function(EA){return{text:EA}});for(y=m.header.length,x=0;x<y;x++)m.header[x].tokens=this.lexer.inline(m.header[x].text);for(y=m.rows.length,x=0;x<y;x++)for(nA=m.rows[x],O=0;O<nA.length;O++)nA[O].tokens=this.lexer.inline(nA[O].text);return m}}},h.prototype.lheading=function(u){var f=this.rules.block.lheading.exec(u);if(f)return{type:"heading",raw:f[0],depth:f[2].charAt(0)==="="?1:2,text:f[1],tokens:this.lexer.inline(f[1])}},h.prototype.paragraph=function(u){var f=this.rules.block.paragraph.exec(u);if(f){var m=f[1].charAt(f[1].length-1)===`
`?f[1].slice(0,-1):f[1];return{type:"paragraph",raw:f[0],text:m,tokens:this.lexer.inline(m)}}},h.prototype.text=function(u){var f=this.rules.block.text.exec(u);if(f)return{type:"text",raw:f[0],text:f[0],tokens:this.lexer.inline(f[0])}},h.prototype.escape=function(u){var f=this.rules.inline.escape.exec(u);if(f)return{type:"escape",raw:f[0],text:M(f[1])}},h.prototype.tag=function(u){var f=this.rules.inline.tag.exec(u);if(f)return!this.lexer.state.inLink&&/^<a /i.test(f[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(f[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(f[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(f[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:f[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(f[0]):M(f[0]):f[0]}},h.prototype.link=function(u){var f=this.rules.inline.link.exec(u);if(f){var m=f[2].trim();if(!this.options.pedantic&&/^</.test(m)){if(!/>$/.test(m))return;var y=BA(m.slice(0,-1),"\\");if((m.length-y.length)%2===0)return}else{var V=dA(f[2],"()");if(V>-1){var x=f[0].indexOf("!")===0?5:4,O=x+f[1].length+V;f[2]=f[2].substring(0,V),f[0]=f[0].substring(0,O).trim(),f[3]=""}}var nA=f[2],EA="";if(this.options.pedantic){var sA=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(nA);sA&&(nA=sA[1],EA=sA[3])}else EA=f[3]?f[3].slice(1,-1):"";return nA=nA.trim(),/^</.test(nA)&&(this.options.pedantic&&!/>$/.test(m)?nA=nA.slice(1):nA=nA.slice(1,-1)),JA(f,{href:nA&&nA.replace(this.rules.inline._escapes,"$1"),title:EA&&EA.replace(this.rules.inline._escapes,"$1")},f[0],this.lexer)}},h.prototype.reflink=function(u,f){var m;if((m=this.rules.inline.reflink.exec(u))||(m=this.rules.inline.nolink.exec(u))){var y=(m[2]||m[1]).replace(/\s+/g," ");if(y=f[y.toLowerCase()],!y){var V=m[0].charAt(0);return{type:"text",raw:V,text:V}}return JA(m,y,m[0],this.lexer)}},h.prototype.emStrong=function(u,f,m){m===void 0&&(m="");var y=this.rules.inline.emStrong.lDelim.exec(u);if(y&&!(y[3]&&m.match(/[\p{L}\p{N}]/u))){var V=y[1]||y[2]||"";if(!V||V&&(m===""||this.rules.inline.punctuation.exec(m))){var x=y[0].length-1,O=void 0,nA=void 0,EA=x,sA=0,GA=y[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(GA.lastIndex=0,f=f.slice(-1*u.length+x);(y=GA.exec(f))!=null;)if(O=y[1]||y[2]||y[3]||y[4]||y[5]||y[6],!!O){if(nA=O.length,y[3]||y[4]){EA+=nA;continue}else if((y[5]||y[6])&&x%3&&!((x+nA)%3)){sA+=nA;continue}if(EA-=nA,!(EA>0)){nA=Math.min(nA,nA+EA+sA);var mA=u.slice(0,x+y.index+(y[0].length-O.length)+nA);if(Math.min(x,nA)%2){var z=mA.slice(1,-1);return{type:"em",raw:mA,text:z,tokens:this.lexer.inlineTokens(z)}}var RA=mA.slice(2,-2);return{type:"strong",raw:mA,text:RA,tokens:this.lexer.inlineTokens(RA)}}}}}},h.prototype.codespan=function(u){var f=this.rules.inline.code.exec(u);if(f){var m=f[2].replace(/\n/g," "),y=/[^ ]/.test(m),V=/^ /.test(m)&&/ $/.test(m);return y&&V&&(m=m.substring(1,m.length-1)),m=M(m,!0),{type:"codespan",raw:f[0],text:m}}},h.prototype.br=function(u){var f=this.rules.inline.br.exec(u);if(f)return{type:"br",raw:f[0]}},h.prototype.del=function(u){var f=this.rules.inline.del.exec(u);if(f)return{type:"del",raw:f[0],text:f[2],tokens:this.lexer.inlineTokens(f[2])}},h.prototype.autolink=function(u,f){var m=this.rules.inline.autolink.exec(u);if(m){var y=void 0,V=void 0;return m[2]==="@"?(y=M(this.options.mangle?f(m[1]):m[1]),V="mailto:"+y):(y=M(m[1]),V=y),{type:"link",raw:m[0],text:y,href:V,tokens:[{type:"text",raw:y,text:y}]}}},h.prototype.url=function(u,f){var m;if(m=this.rules.inline.url.exec(u)){var y=void 0,V=void 0;if(m[2]==="@")y=M(this.options.mangle?f(m[0]):m[0]),V="mailto:"+y;else{var x=void 0;do x=m[0],m[0]=this.rules.inline._backpedal.exec(m[0])[0];while(x!==m[0]);y=M(m[0]),m[1]==="www."?V="http://"+m[0]:V=m[0]}return{type:"link",raw:m[0],text:y,href:V,tokens:[{type:"text",raw:y,text:y}]}}},h.prototype.inlineText=function(u,f){var m=this.rules.inline.text.exec(u);if(m){var y=void 0;return this.lexer.state.inRawBlock?y=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(m[0]):M(m[0]):m[0]:y=M(this.options.smartypants?f(m[0]):m[0]),{type:"text",raw:m[0],text:y}}},h}(),eA={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:H,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};eA._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/,eA._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,eA.def=Z(eA.def).replace("label",eA._label).replace("title",eA._title).getRegex(),eA.bullet=/(?:[*+-]|\d{1,9}[.)])/,eA.listItemStart=Z(/^( *)(bull) */).replace("bull",eA.bullet).getRegex(),eA.list=Z(eA.list).replace(/bull/g,eA.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+eA.def.source+")").getRegex(),eA._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",eA._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,eA.html=Z(eA.html,"i").replace("comment",eA._comment).replace("tag",eA._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),eA.lheading=Z(eA.lheading).replace(/bull/g,eA.bullet).getRegex(),eA.paragraph=Z(eA._paragraph).replace("hr",eA.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",eA._tag).getRegex(),eA.blockquote=Z(eA.blockquote).replace("paragraph",eA.paragraph).getRegex(),eA.normal=Q({},eA),eA.gfm=Q(Q({},eA.normal),{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),eA.gfm.table=Z(eA.gfm.table).replace("hr",eA.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",eA._tag).getRegex(),eA.gfm.paragraph=Z(eA._paragraph).replace("hr",eA.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",eA.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",eA._tag).getRegex(),eA.pedantic=Q(Q({},eA.normal),{html:Z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",eA._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:H,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Z(eA.normal._paragraph).replace("hr",eA.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",eA.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});var tA={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:H,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:H,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};tA._uc_punctuation="\\u00A1\\u00A7\\u00AB\\u00B6\\u00B7\\u00BB\\u00BF\\u037E\\u0387\\u055A-\\u055F\\u0589\\u058A\\u05BE\\u05C0\\u05C3\\u05C6\\u05F3\\u05F4\\u0609\\u060A\\u060C\\u060D\\u061B\\u061E\\u061F\\u066A-\\u066D\\u06D4\\u0700-\\u070D\\u07F7-\\u07F9\\u0830-\\u083E\\u085E\\u0964\\u0965\\u0970\\u0AF0\\u0DF4\\u0E4F\\u0E5A\\u0E5B\\u0F04-\\u0F12\\u0F14\\u0F3A-\\u0F3D\\u0F85\\u0FD0-\\u0FD4\\u0FD9\\u0FDA\\u104A-\\u104F\\u10FB\\u1360-\\u1368\\u1400\\u166D\\u166E\\u169B\\u169C\\u16EB-\\u16ED\\u1735\\u1736\\u17D4-\\u17D6\\u17D8-\\u17DA\\u1800-\\u180A\\u1944\\u1945\\u1A1E\\u1A1F\\u1AA0-\\u1AA6\\u1AA8-\\u1AAD\\u1B5A-\\u1B60\\u1BFC-\\u1BFF\\u1C3B-\\u1C3F\\u1C7E\\u1C7F\\u1CC0-\\u1CC7\\u1CD3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205E\\u207D\\u207E\\u208D\\u208E\\u2308-\\u230B\\u2329\\u232A\\u2768-\\u2775\\u27C5\\u27C6\\u27E6-\\u27EF\\u2983-\\u2998\\u29D8-\\u29DB\\u29FC\\u29FD\\u2CF9-\\u2CFC\\u2CFE\\u2CFF\\u2D70\\u2E00-\\u2E2E\\u2E30-\\u2E42\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301F\\u3030\\u303D\\u30A0\\u30FB\\uA4FE\\uA4FF\\uA60D-\\uA60F\\uA673\\uA67E\\uA6F2-\\uA6F7\\uA874-\\uA877\\uA8CE\\uA8CF\\uA8F8-\\uA8FA\\uA8FC\\uA92E\\uA92F\\uA95F\\uA9C1-\\uA9CD\\uA9DE\\uA9DF\\uAA5C-\\uAA5F\\uAADE\\uAADF\\uAAF0\\uAAF1\\uABEB\\uFD3E\\uFD3F\\uFE10-\\uFE19\\uFE30-\\uFE52\\uFE54-\\uFE61\\uFE63\\uFE68\\uFE6A\\uFE6B\\uFF01-\\uFF03\\uFF05-\\uFF0A\\uFF0C-\\uFF0F\\uFF1A\\uFF1B\\uFF1F\\uFF20\\uFF3B-\\uFF3D\\uFF3F\\uFF5B\\uFF5D\\uFF5F-\\uFF65",tA._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"+tA._uc_punctuation,tA.punctuation=Z(tA.punctuation).replace(/punctuation/g,tA._punctuation).getRegex(),tA.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,tA.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,tA._comment=Z(eA._comment).replace("(?:-->|$)","-->").getRegex(),tA.emStrong.lDelim=Z(tA.emStrong.lDelim).replace(/punct/g,tA._punctuation).getRegex(),tA.emStrong.rDelimAst=Z(tA.emStrong.rDelimAst,"g").replace(/punct/g,tA._punctuation).getRegex(),tA.emStrong.rDelimUnd=Z(tA.emStrong.rDelimUnd,"g").replace(/punct/g,tA._punctuation).getRegex(),tA._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,tA._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,tA._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,tA.autolink=Z(tA.autolink).replace("scheme",tA._scheme).replace("email",tA._email).getRegex(),tA._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,tA.tag=Z(tA.tag).replace("comment",tA._comment).replace("attribute",tA._attribute).getRegex(),tA._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,tA._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,tA._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,tA.link=Z(tA.link).replace("label",tA._label).replace("href",tA._href).replace("title",tA._title).getRegex(),tA.reflink=Z(tA.reflink).replace("label",tA._label).replace("ref",eA._label).getRegex(),tA.nolink=Z(tA.nolink).replace("ref",eA._label).getRegex(),tA.reflinkSearch=Z(tA.reflinkSearch,"g").replace("reflink",tA.reflink).replace("nolink",tA.nolink).getRegex(),tA.normal=Q({},tA),tA.pedantic=Q(Q({},tA.normal),{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Z(/^!?\[(label)\]\((.*?)\)/).replace("label",tA._label).getRegex(),reflink:Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",tA._label).getRegex()}),tA.gfm=Q(Q({},tA.normal),{escape:Z(tA.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),tA.gfm.url=Z(tA.gfm.url,"i").replace("email",tA.gfm._extended_email).getRegex(),tA.breaks=Q(Q({},tA.gfm),{br:Z(tA.br).replace("{2,}","*").getRegex(),text:Z(tA.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function eB(h){return h.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function _A(h){var u="",f,m,y=h.length;for(f=0;f<y;f++)m=h.charCodeAt(f),Math.random()>.5&&(m="x"+m.toString(16)),u+="&#"+m+";";return u}var EB=function(){function h(u){this.tokens=[],this.tokens.links=Object.create(null),this.options=u||a,this.options.tokenizer=this.options.tokenizer||new SA,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};var f={block:eA.normal,inline:tA.normal};this.options.pedantic?(f.block=eA.pedantic,f.inline=tA.pedantic):this.options.gfm&&(f.block=eA.gfm,this.options.breaks?f.inline=tA.breaks:f.inline=tA.gfm),this.tokenizer.rules=f}return Object.defineProperty(h,"rules",{get:function(){return{block:eA,inline:tA}},enumerable:!1,configurable:!0}),h.lex=function(u,f){var m=new h(f);return m.lex(u)},h.lexInline=function(u,f){var m=new h(f);return m.inlineTokens(u)},h.prototype.lex=function(u){u=u.replace(/\r\n|\r/g,`
`),this.blockTokens(u,this.tokens);for(var f;f=this.inlineQueue.shift();)this.inlineTokens(f.src,f.tokens);return this.tokens},h.prototype.blockTokens=function(u,f){var m=this;f===void 0&&(f=[]),this.options.pedantic?u=u.replace(/\t/g,"    ").replace(/^ +$/gm,""):u=u.replace(/^( *)(\t+)/gm,function(GA,mA,z){return mA+"    ".repeat(z.length)});for(var y,V,x,O,nA=function(){if(EA.options.extensions&&EA.options.extensions.block&&EA.options.extensions.block.some(function(uA){return(y=uA.call({lexer:m},u,f))?(u=u.substring(y.raw.length),f.push(y),!0):!1}))return"continue";if(y=EA.tokenizer.space(u))return u=u.substring(y.raw.length),y.raw.length===1&&f.length>0?f[f.length-1].raw+=`
`:f.push(y),"continue";if(y=EA.tokenizer.code(u))return u=u.substring(y.raw.length),V=f[f.length-1],V&&(V.type==="paragraph"||V.type==="text")?(V.raw+=`
`+y.raw,V.text+=`
`+y.text,EA.inlineQueue[EA.inlineQueue.length-1].src=V.text):f.push(y),"continue";if((y=EA.tokenizer.fences(u))||(y=EA.tokenizer.heading(u))||(y=EA.tokenizer.hr(u))||(y=EA.tokenizer.blockquote(u))||(y=EA.tokenizer.list(u))||(y=EA.tokenizer.html(u)))return u=u.substring(y.raw.length),f.push(y),"continue";if(y=EA.tokenizer.def(u))return u=u.substring(y.raw.length),V=f[f.length-1],V&&(V.type==="paragraph"||V.type==="text")?(V.raw+=`
`+y.raw,V.text+=`
`+y.raw,EA.inlineQueue[EA.inlineQueue.length-1].src=V.text):EA.tokens.links[y.tag]||(EA.tokens.links[y.tag]={href:y.href,title:y.title}),"continue";if((y=EA.tokenizer.table(u))||(y=EA.tokenizer.lheading(u)))return u=u.substring(y.raw.length),f.push(y),"continue";if(x=u,EA.options.extensions&&EA.options.extensions.startBlock){var GA=1/0,mA=u.slice(1),z;EA.options.extensions.startBlock.forEach(function(uA){z=uA.call({lexer:this},mA),typeof z=="number"&&z>=0&&(GA=Math.min(GA,z))}),GA<1/0&&GA>=0&&(x=u.substring(0,GA+1))}if(EA.state.top&&(y=EA.tokenizer.paragraph(x)))return V=f[f.length-1],O&&V.type==="paragraph"?(V.raw+=`
`+y.raw,V.text+=`
`+y.text,EA.inlineQueue.pop(),EA.inlineQueue[EA.inlineQueue.length-1].src=V.text):f.push(y),O=x.length!==u.length,u=u.substring(y.raw.length),"continue";if(y=EA.tokenizer.text(u))return u=u.substring(y.raw.length),V=f[f.length-1],V&&V.type==="text"?(V.raw+=`
`+y.raw,V.text+=`
`+y.text,EA.inlineQueue.pop(),EA.inlineQueue[EA.inlineQueue.length-1].src=V.text):f.push(y),"continue";if(u){var RA="Infinite loop on byte: "+u.charCodeAt(0);if(EA.options.silent)return console.error(RA),"break";throw new Error(RA)}},EA=this;u;){var sA=nA();if(sA==="break")break}return this.state.top=!0,f},h.prototype.inline=function(u,f){return f===void 0&&(f=[]),this.inlineQueue.push({src:u,tokens:f}),f},h.prototype.inlineTokens=function(u,f){var m=this;f===void 0&&(f=[]);var y,V,x,O=u,nA,EA,sA;if(this.tokens.links){var GA=Object.keys(this.tokens.links);if(GA.length>0)for(;(nA=this.tokenizer.rules.inline.reflinkSearch.exec(O))!=null;)GA.includes(nA[0].slice(nA[0].lastIndexOf("[")+1,-1))&&(O=O.slice(0,nA.index)+"["+"a".repeat(nA[0].length-2)+"]"+O.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(nA=this.tokenizer.rules.inline.blockSkip.exec(O))!=null;)O=O.slice(0,nA.index)+"["+"a".repeat(nA[0].length-2)+"]"+O.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(nA=this.tokenizer.rules.inline.escapedEmSt.exec(O))!=null;)O=O.slice(0,nA.index+nA[0].length-2)+"++"+O.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(var mA=function(){if(EA||(sA=""),EA=!1,z.options.extensions&&z.options.extensions.inline&&z.options.extensions.inline.some(function(IB){return(y=IB.call({lexer:m},u,f))?(u=u.substring(y.raw.length),f.push(y),!0):!1}))return"continue";if(y=z.tokenizer.escape(u))return u=u.substring(y.raw.length),f.push(y),"continue";if(y=z.tokenizer.tag(u))return u=u.substring(y.raw.length),V=f[f.length-1],V&&y.type==="text"&&V.type==="text"?(V.raw+=y.raw,V.text+=y.text):f.push(y),"continue";if(y=z.tokenizer.link(u))return u=u.substring(y.raw.length),f.push(y),"continue";if(y=z.tokenizer.reflink(u,z.tokens.links))return u=u.substring(y.raw.length),V=f[f.length-1],V&&y.type==="text"&&V.type==="text"?(V.raw+=y.raw,V.text+=y.text):f.push(y),"continue";if((y=z.tokenizer.emStrong(u,O,sA))||(y=z.tokenizer.codespan(u))||(y=z.tokenizer.br(u))||(y=z.tokenizer.del(u))||(y=z.tokenizer.autolink(u,_A))||!z.state.inLink&&(y=z.tokenizer.url(u,_A)))return u=u.substring(y.raw.length),f.push(y),"continue";if(x=u,z.options.extensions&&z.options.extensions.startInline){var uA=1/0,WA=u.slice(1),fA;z.options.extensions.startInline.forEach(function(IB){fA=IB.call({lexer:this},WA),typeof fA=="number"&&fA>=0&&(uA=Math.min(uA,fA))}),uA<1/0&&uA>=0&&(x=u.substring(0,uA+1))}if(y=z.tokenizer.inlineText(x,eB))return u=u.substring(y.raw.length),y.raw.slice(-1)!=="_"&&(sA=y.raw.slice(-1)),EA=!0,V=f[f.length-1],V&&V.type==="text"?(V.raw+=y.raw,V.text+=y.text):f.push(y),"continue";if(u){var rB="Infinite loop on byte: "+u.charCodeAt(0);if(z.options.silent)return console.error(rB),"break";throw new Error(rB)}},z=this;u;){var RA=mA();if(RA==="break")break}return f},h}(),XA=function(){function h(u){this.options=u||a}return h.prototype.code=function(u,f,m){var y=(f||"").match(/\S*/)[0];if(this.options.highlight){var V=this.options.highlight(u,y);V!=null&&V!==u&&(m=!0,u=V)}return u=u.replace(/\n$/,"")+`
`,y?'<pre><code class="'+this.options.langPrefix+M(y)+'">'+(m?u:M(u,!0))+`</code></pre>
`:"<pre><code>"+(m?u:M(u,!0))+`</code></pre>
`},h.prototype.blockquote=function(u){return`<blockquote>
`.concat(u,`</blockquote>
`)},h.prototype.html=function(u,f){return u},h.prototype.heading=function(u,f,m,y){if(this.options.headerIds){var V=this.options.headerPrefix+y.slug(m);return"<h".concat(f,' id="').concat(V,'">').concat(u,"</h").concat(f,`>
`)}return"<h".concat(f,">").concat(u,"</h").concat(f,`>
`)},h.prototype.hr=function(){return this.options.xhtml?`<hr/>
`:`<hr>
`},h.prototype.list=function(u,f,m){var y=f?"ol":"ul",V=f&&m!==1?' start="'+m+'"':"";return"<"+y+V+`>
`+u+"</"+y+`>
`},h.prototype.listitem=function(u){return"<li>".concat(u,`</li>
`)},h.prototype.table=function(u,f){return f&&(f="<tbody>".concat(f,"</tbody>")),`<table>
<thead>
`+u+`</thead>
`+f+`</table>
`},h.prototype.tablerow=function(u){return`<tr>
</svg>
</svg>
