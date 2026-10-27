(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function X0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vp={exports:{}},pl={},Wp={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),Y0=Symbol.for("react.portal"),q0=Symbol.for("react.fragment"),$0=Symbol.for("react.strict_mode"),K0=Symbol.for("react.profiler"),J0=Symbol.for("react.provider"),Z0=Symbol.for("react.context"),Q0=Symbol.for("react.forward_ref"),e_=Symbol.for("react.suspense"),t_=Symbol.for("react.memo"),n_=Symbol.for("react.lazy"),ih=Symbol.iterator;function i_(t){return t===null||typeof t!="object"?null:(t=ih&&t[ih]||t["@@iterator"],typeof t=="function"?t:null)}var jp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xp=Object.assign,Yp={};function ws(t,e,n){this.props=t,this.context=e,this.refs=Yp,this.updater=n||jp}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qp(){}qp.prototype=ws.prototype;function qu(t,e,n){this.props=t,this.context=e,this.refs=Yp,this.updater=n||jp}var $u=qu.prototype=new qp;$u.constructor=qu;Xp($u,ws.prototype);$u.isPureReactComponent=!0;var rh=Array.isArray,$p=Object.prototype.hasOwnProperty,Ku={current:null},Kp={key:!0,ref:!0,__self:!0,__source:!0};function Jp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$p.call(e,i)&&!Kp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ao,type:t,key:s,ref:o,props:r,_owner:Ku.current}}function r_(t,e){return{$$typeof:Ao,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ju(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ao}function s_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sh=/\/+/g;function Bl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?s_(""+t.key):e.toString(36)}function Ta(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ao:case Y0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Bl(o,0):i,rh(r)?(n="",t!=null&&(n=t.replace(sh,"$&/")+"/"),Ta(r,e,n,"",function(c){return c})):r!=null&&(Ju(r)&&(r=r_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(sh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",rh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Bl(s,a);o+=Ta(s,e,n,l,r)}else if(l=i_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Bl(s,a++),o+=Ta(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fo(t,e,n){if(t==null)return t;var i=[],r=0;return Ta(t,i,"","",function(s){return e.call(n,s,r++)}),i}function o_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var en={current:null},wa={transition:null},a_={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:wa,ReactCurrentOwner:Ku};function Zp(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Fo,forEach:function(t,e,n){Fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fo(t,function(){e++}),e},toArray:function(t){return Fo(t,function(e){return e})||[]},only:function(t){if(!Ju(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=ws;Xe.Fragment=q0;Xe.Profiler=K0;Xe.PureComponent=qu;Xe.StrictMode=$0;Xe.Suspense=e_;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a_;Xe.act=Zp;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Xp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ku.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$p.call(e,l)&&!Kp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ao,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:Z0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:J0,_context:t},t.Consumer=t};Xe.createElement=Jp;Xe.createFactory=function(t){var e=Jp.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Q0,render:t}};Xe.isValidElement=Ju;Xe.lazy=function(t){return{$$typeof:n_,_payload:{_status:-1,_result:t},_init:o_}};Xe.memo=function(t,e){return{$$typeof:t_,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=wa.transition;wa.transition={};try{t()}finally{wa.transition=e}};Xe.unstable_act=Zp;Xe.useCallback=function(t,e){return en.current.useCallback(t,e)};Xe.useContext=function(t){return en.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return en.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return en.current.useEffect(t,e)};Xe.useId=function(){return en.current.useId()};Xe.useImperativeHandle=function(t,e,n){return en.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return en.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return en.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return en.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return en.current.useReducer(t,e,n)};Xe.useRef=function(t){return en.current.useRef(t)};Xe.useState=function(t){return en.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return en.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return en.current.useTransition()};Xe.version="18.3.1";Wp.exports=Xe;var ye=Wp.exports;const l_=X0(ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_=ye,u_=Symbol.for("react.element"),d_=Symbol.for("react.fragment"),h_=Object.prototype.hasOwnProperty,f_=c_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p_={key:!0,ref:!0,__self:!0,__source:!0};function Qp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)h_.call(e,i)&&!p_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:u_,type:t,key:s,ref:o,props:r,_owner:f_.current}}pl.Fragment=d_;pl.jsx=Qp;pl.jsxs=Qp;Vp.exports=pl;var S=Vp.exports,jc={},em={exports:{}},Sn={},tm={exports:{}},nm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,I){var D=P.length;P.push(I);e:for(;0<D;){var j=D-1>>>1,Z=P[j];if(0<r(Z,I))P[j]=I,P[D]=Z,D=j;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var I=P[0],D=P.pop();if(D!==I){P[0]=D;e:for(var j=0,Z=P.length,q=Z>>>1;j<q;){var J=2*(j+1)-1,oe=P[J],ge=J+1,he=P[ge];if(0>r(oe,D))ge<Z&&0>r(he,oe)?(P[j]=he,P[ge]=D,j=ge):(P[j]=oe,P[J]=D,j=J);else if(ge<Z&&0>r(he,D))P[j]=he,P[ge]=D,j=ge;else break e}}return I}function r(P,I){var D=P.sortIndex-I.sortIndex;return D!==0?D:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var I=n(c);I!==null;){if(I.callback===null)i(c);else if(I.startTime<=P)i(c),I.sortIndex=I.expirationTime,e(l,I);else break;I=n(c)}}function y(P){if(x=!1,_(P),!v)if(n(l)!==null)v=!0,$(b);else{var I=n(c);I!==null&&F(y,I.startTime-P)}}function b(P,I){v=!1,x&&(x=!1,u(U),U=-1),p=!0;var D=h;try{for(_(I),f=n(l);f!==null&&(!(f.expirationTime>I)||P&&!k());){var j=f.callback;if(typeof j=="function"){f.callback=null,h=f.priorityLevel;var Z=j(f.expirationTime<=I);I=t.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(l)&&i(l),_(I)}else i(l);f=n(l)}if(f!==null)var q=!0;else{var J=n(c);J!==null&&F(y,J.startTime-I),q=!1}return q}finally{f=null,h=D,p=!1}}var C=!1,R=null,U=-1,E=5,T=-1;function k(){return!(t.unstable_now()-T<E)}function Y(){if(R!==null){var P=t.unstable_now();T=P;var I=!0;try{I=R(!0,P)}finally{I?te():(C=!1,R=null)}}else C=!1}var te;if(typeof g=="function")te=function(){g(Y)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,B=N.port2;N.port1.onmessage=Y,te=function(){B.postMessage(null)}}else te=function(){m(Y,0)};function $(P){R=P,C||(C=!0,te())}function F(P,I){U=m(function(){P(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,$(b))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var D=h;h=I;try{return P()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var D=h;h=P;try{return I()}finally{h=D}},t.unstable_scheduleCallback=function(P,I,D){var j=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?j+D:j):D=j,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=D+Z,P={id:d++,callback:I,priorityLevel:P,startTime:D,expirationTime:Z,sortIndex:-1},D>j?(P.sortIndex=D,e(c,P),n(l)===null&&P===n(c)&&(x?(u(U),U=-1):x=!0,F(y,D-j))):(P.sortIndex=Z,e(l,P),v||p||(v=!0,$(b))),P},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(P){var I=h;return function(){var D=h;h=I;try{return P.apply(this,arguments)}finally{h=D}}}})(nm);tm.exports=nm;var m_=tm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_=ye,yn=m_;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var im=new Set,oo={};function Rr(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(oo[t]=e,t=0;t<e.length;t++)im.add(e[t])}var _i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xc=Object.prototype.hasOwnProperty,__=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oh={},ah={};function v_(t){return Xc.call(ah,t)?!0:Xc.call(oh,t)?!1:__.test(t)?ah[t]=!0:(oh[t]=!0,!1)}function x_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function y_(t,e,n,i){if(e===null||typeof e>"u"||x_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new tn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new tn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new tn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new tn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new tn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new tn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new tn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new tn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new tn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zu=/[\-:]([a-z])/g;function Qu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zu,Qu);Bt[e]=new tn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zu,Qu);Bt[e]=new tn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zu,Qu);Bt[e]=new tn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new tn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new tn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ed(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(y_(e,n,r,i)&&(n=null),i||r===null?v_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mi=g_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),Xr=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),td=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),sm=Symbol.for("react.context"),nd=Symbol.for("react.forward_ref"),qc=Symbol.for("react.suspense"),$c=Symbol.for("react.suspense_list"),id=Symbol.for("react.memo"),bi=Symbol.for("react.lazy"),om=Symbol.for("react.offscreen"),lh=Symbol.iterator;function Ns(t){return t===null||typeof t!="object"?null:(t=lh&&t[lh]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,Hl;function js(t){if(Hl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hl=e&&e[1]||""}return`
`+Hl+t}var Gl=!1;function Vl(t,e){if(!t||Gl)return"";Gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?js(t):""}function S_(t){switch(t.tag){case 5:return js(t.type);case 16:return js("Lazy");case 13:return js("Suspense");case 19:return js("SuspenseList");case 0:case 2:case 15:return t=Vl(t.type,!1),t;case 11:return t=Vl(t.type.render,!1),t;case 1:return t=Vl(t.type,!0),t;default:return""}}function Kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case Xr:return"Portal";case Yc:return"Profiler";case td:return"StrictMode";case qc:return"Suspense";case $c:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sm:return(t.displayName||"Context")+".Consumer";case rm:return(t._context.displayName||"Context")+".Provider";case nd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case id:return e=t.displayName||null,e!==null?e:Kc(t.type)||"Memo";case bi:e=t._payload,t=t._init;try{return Kc(t(e))}catch{}}return null}function M_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kc(e);case 8:return e===td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function am(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function E_(t){var e=am(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function zo(t){t._valueTracker||(t._valueTracker=E_(t))}function lm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=am(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jc(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ch(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cm(t,e){e=e.checked,e!=null&&ed(t,"checked",e,!1)}function Zc(t,e){cm(t,e);var n=qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qc(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qc(t,e,n){(e!=="number"||Oa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xs=Array.isArray;function os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function eu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Xs(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qi(n)}}function um(t,e){var n=qi(e.value),i=qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function hh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ko,hm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ks={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T_=["Webkit","ms","Moz","O"];Object.keys(Ks).forEach(function(t){T_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ks[e]=Ks[t]})});function fm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ks.hasOwnProperty(t)&&Ks[t]?(""+e).trim():e+"px"}function pm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=fm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var w_=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nu(t,e){if(e){if(w_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ru=null;function rd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var su=null,as=null,ls=null;function fh(t){if(t=bo(t)){if(typeof su!="function")throw Error(re(280));var e=t.stateNode;e&&(e=xl(e),su(t.stateNode,t.type,e))}}function mm(t){as?ls?ls.push(t):ls=[t]:as=t}function gm(){if(as){var t=as,e=ls;if(ls=as=null,fh(t),e)for(t=0;t<e.length;t++)fh(e[t])}}function _m(t,e){return t(e)}function vm(){}var Wl=!1;function xm(t,e,n){if(Wl)return t(e,n);Wl=!0;try{return _m(t,e,n)}finally{Wl=!1,(as!==null||ls!==null)&&(vm(),gm())}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var i=xl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var ou=!1;if(_i)try{var Ds={};Object.defineProperty(Ds,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Ds,Ds),window.removeEventListener("test",Ds,Ds)}catch{ou=!1}function A_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Js=!1,za=null,ka=!1,au=null,R_={onError:function(t){Js=!0,za=t}};function C_(t,e,n,i,r,s,o,a,l){Js=!1,za=null,A_.apply(R_,arguments)}function b_(t,e,n,i,r,s,o,a,l){if(C_.apply(this,arguments),Js){if(Js){var c=za;Js=!1,za=null}else throw Error(re(198));ka||(ka=!0,au=c)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ym(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ph(t){if(Cr(t)!==t)throw Error(re(188))}function P_(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ph(r),t;if(s===i)return ph(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Sm(t){return t=P_(t),t!==null?Mm(t):null}function Mm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mm(t);if(e!==null)return e;t=t.sibling}return null}var Em=yn.unstable_scheduleCallback,mh=yn.unstable_cancelCallback,L_=yn.unstable_shouldYield,N_=yn.unstable_requestPaint,yt=yn.unstable_now,D_=yn.unstable_getCurrentPriorityLevel,sd=yn.unstable_ImmediatePriority,Tm=yn.unstable_UserBlockingPriority,Ba=yn.unstable_NormalPriority,U_=yn.unstable_LowPriority,wm=yn.unstable_IdlePriority,ml=null,ti=null;function I_(t){if(ti&&typeof ti.onCommitFiberRoot=="function")try{ti.onCommitFiberRoot(ml,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:z_,F_=Math.log,O_=Math.LN2;function z_(t){return t>>>=0,t===0?32:31-(F_(t)/O_|0)|0}var Bo=64,Ho=4194304;function Ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ha(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ys(a):(s&=o,s!==0&&(i=Ys(s)))}else o=n&~r,o!==0?i=Ys(o):s!==0&&(i=Ys(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function k_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=k_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function lu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Am(){var t=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),t}function jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ro(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function H_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function od(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Rm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cm,ad,bm,Pm,Lm,cu=!1,Go=[],Oi=null,zi=null,ki=null,co=new Map,uo=new Map,Li=[],G_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gh(t,e){switch(t){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function Us(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=bo(e),e!==null&&ad(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function V_(t,e,n,i,r){switch(e){case"focusin":return Oi=Us(Oi,t,e,n,i,r),!0;case"dragenter":return zi=Us(zi,t,e,n,i,r),!0;case"mouseover":return ki=Us(ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return co.set(s,Us(co.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,uo.set(s,Us(uo.get(s)||null,t,e,n,i,r)),!0}return!1}function Nm(t){var e=hr(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=ym(n),e!==null){t.blockedOn=e,Lm(t.priority,function(){bm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Aa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ru=i,n.target.dispatchEvent(i),ru=null}else return e=bo(n),e!==null&&ad(e),t.blockedOn=n,!1;e.shift()}return!0}function _h(t,e,n){Aa(t)&&n.delete(e)}function W_(){cu=!1,Oi!==null&&Aa(Oi)&&(Oi=null),zi!==null&&Aa(zi)&&(zi=null),ki!==null&&Aa(ki)&&(ki=null),co.forEach(_h),uo.forEach(_h)}function Is(t,e){t.blockedOn===e&&(t.blockedOn=null,cu||(cu=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,W_)))}function ho(t){function e(r){return Is(r,t)}if(0<Go.length){Is(Go[0],t);for(var n=1;n<Go.length;n++){var i=Go[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Oi!==null&&Is(Oi,t),zi!==null&&Is(zi,t),ki!==null&&Is(ki,t),co.forEach(e),uo.forEach(e),n=0;n<Li.length;n++)i=Li[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Li.length&&(n=Li[0],n.blockedOn===null);)Nm(n),n.blockedOn===null&&Li.shift()}var cs=Mi.ReactCurrentBatchConfig,Ga=!0;function j_(t,e,n,i){var r=it,s=cs.transition;cs.transition=null;try{it=1,ld(t,e,n,i)}finally{it=r,cs.transition=s}}function X_(t,e,n,i){var r=it,s=cs.transition;cs.transition=null;try{it=4,ld(t,e,n,i)}finally{it=r,cs.transition=s}}function ld(t,e,n,i){if(Ga){var r=uu(t,e,n,i);if(r===null)tc(t,e,i,Va,n),gh(t,i);else if(V_(r,t,e,n,i))i.stopPropagation();else if(gh(t,i),e&4&&-1<G_.indexOf(t)){for(;r!==null;){var s=bo(r);if(s!==null&&Cm(s),s=uu(t,e,n,i),s===null&&tc(t,e,i,Va,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else tc(t,e,i,null,n)}}var Va=null;function uu(t,e,n,i){if(Va=null,t=rd(i),t=hr(t),t!==null)if(e=Cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ym(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Va=t,null}function Dm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(D_()){case sd:return 1;case Tm:return 4;case Ba:case U_:return 16;case wm:return 536870912;default:return 16}default:return 16}}var Di=null,cd=null,Ra=null;function Um(){if(Ra)return Ra;var t,e=cd,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ra=r.slice(t,1<i?1-i:void 0)}function Ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function vh(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vo:vh,this.isPropagationStopped=vh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ud=Mn(As),Co=pt({},As,{view:0,detail:0}),Y_=Mn(Co),Xl,Yl,Fs,gl=pt({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Xl=t.screenX-Fs.screenX,Yl=t.screenY-Fs.screenY):Yl=Xl=0,Fs=t),Xl)},movementY:function(t){return"movementY"in t?t.movementY:Yl}}),xh=Mn(gl),q_=pt({},gl,{dataTransfer:0}),$_=Mn(q_),K_=pt({},Co,{relatedTarget:0}),ql=Mn(K_),J_=pt({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),Z_=Mn(J_),Q_=pt({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ev=Mn(Q_),tv=pt({},As,{data:0}),yh=Mn(tv),nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rv[t])?!!e[t]:!1}function dd(){return sv}var ov=pt({},Co,{key:function(t){if(t.key){var e=nv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(t){return t.type==="keypress"?Ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),av=Mn(ov),lv=pt({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sh=Mn(lv),cv=pt({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),uv=Mn(cv),dv=pt({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),hv=Mn(dv),fv=pt({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pv=Mn(fv),mv=[9,13,27,32],hd=_i&&"CompositionEvent"in window,Zs=null;_i&&"documentMode"in document&&(Zs=document.documentMode);var gv=_i&&"TextEvent"in window&&!Zs,Im=_i&&(!hd||Zs&&8<Zs&&11>=Zs),Mh=" ",Eh=!1;function Fm(t,e){switch(t){case"keyup":return mv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Om(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function _v(t,e){switch(t){case"compositionend":return Om(e);case"keypress":return e.which!==32?null:(Eh=!0,Mh);case"textInput":return t=e.data,t===Mh&&Eh?null:t;default:return null}}function vv(t,e){if(qr)return t==="compositionend"||!hd&&Fm(t,e)?(t=Um(),Ra=cd=Di=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Im&&e.locale!=="ko"?null:e.data;default:return null}}var xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xv[t.type]:e==="textarea"}function zm(t,e,n,i){mm(i),e=Wa(e,"onChange"),0<e.length&&(n=new ud("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Qs=null,fo=null;function yv(t){$m(t,0)}function _l(t){var e=Jr(t);if(lm(e))return t}function Sv(t,e){if(t==="change")return e}var km=!1;if(_i){var $l;if(_i){var Kl="oninput"in document;if(!Kl){var wh=document.createElement("div");wh.setAttribute("oninput","return;"),Kl=typeof wh.oninput=="function"}$l=Kl}else $l=!1;km=$l&&(!document.documentMode||9<document.documentMode)}function Ah(){Qs&&(Qs.detachEvent("onpropertychange",Bm),fo=Qs=null)}function Bm(t){if(t.propertyName==="value"&&_l(fo)){var e=[];zm(e,fo,t,rd(t)),xm(yv,e)}}function Mv(t,e,n){t==="focusin"?(Ah(),Qs=e,fo=n,Qs.attachEvent("onpropertychange",Bm)):t==="focusout"&&Ah()}function Ev(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _l(fo)}function Tv(t,e){if(t==="click")return _l(e)}function wv(t,e){if(t==="input"||t==="change")return _l(e)}function Av(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:Av;function po(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xc.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ch(t,e){var n=Rh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rh(n)}}function Hm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gm(){for(var t=window,e=Oa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oa(t.document)}return e}function fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Rv(t){var e=Gm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hm(n.ownerDocument.documentElement,n)){if(i!==null&&fd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ch(n,s);var o=Ch(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cv=_i&&"documentMode"in document&&11>=document.documentMode,$r=null,du=null,eo=null,hu=!1;function bh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hu||$r==null||$r!==Oa(i)||(i=$r,"selectionStart"in i&&fd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),eo&&po(eo,i)||(eo=i,i=Wa(du,"onSelect"),0<i.length&&(e=new ud("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=$r)))}function Wo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Kr={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},Jl={},Vm={};_i&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function vl(t){if(Jl[t])return Jl[t];if(!Kr[t])return t;var e=Kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vm)return Jl[t]=e[n];return t}var Wm=vl("animationend"),jm=vl("animationiteration"),Xm=vl("animationstart"),Ym=vl("transitionend"),qm=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,e){qm.set(t,e),Rr(e,[t])}for(var Zl=0;Zl<Ph.length;Zl++){var Ql=Ph[Zl],bv=Ql.toLowerCase(),Pv=Ql[0].toUpperCase()+Ql.slice(1);Ji(bv,"on"+Pv)}Ji(Wm,"onAnimationEnd");Ji(jm,"onAnimationIteration");Ji(Xm,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(Ym,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lv=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function Lh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,b_(i,e,void 0,t),t.currentTarget=null}function $m(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Lh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Lh(r,a,c),s=l}}}if(ka)throw t=au,ka=!1,au=null,t}function at(t,e){var n=e[_u];n===void 0&&(n=e[_u]=new Set);var i=t+"__bubble";n.has(i)||(Km(e,t,2,!1),n.add(i))}function ec(t,e,n){var i=0;e&&(i|=4),Km(n,t,i,e)}var jo="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[jo]){t[jo]=!0,im.forEach(function(n){n!=="selectionchange"&&(Lv.has(n)||ec(n,!1,t),ec(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[jo]||(e[jo]=!0,ec("selectionchange",!1,e))}}function Km(t,e,n,i){switch(Dm(e)){case 1:var r=j_;break;case 4:r=X_;break;default:r=ld}n=r.bind(null,e,n,t),r=void 0,!ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function tc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xm(function(){var c=s,d=rd(n),f=[];e:{var h=qm.get(t);if(h!==void 0){var p=ud,v=t;switch(t){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":p=av;break;case"focusin":v="focus",p=ql;break;case"focusout":v="blur",p=ql;break;case"beforeblur":case"afterblur":p=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=uv;break;case Wm:case jm:case Xm:p=Z_;break;case Ym:p=hv;break;case"scroll":p=Y_;break;case"wheel":p=pv;break;case"copy":case"cut":case"paste":p=ev;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Sh}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,_;g!==null;){_=g;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,u!==null&&(y=lo(g,u),y!=null&&x.push(go(g,y,_)))),m)break;g=g.return}0<x.length&&(h=new p(h,v,null,n,d),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==ru&&(v=n.relatedTarget||n.fromElement)&&(hr(v)||v[vi]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?hr(v):null,v!==null&&(m=Cr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=xh,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Sh,y="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?h:Jr(p),_=v==null?h:Jr(v),h=new x(y,g+"leave",p,n,d),h.target=m,h.relatedTarget=_,y=null,hr(d)===c&&(x=new x(u,g+"enter",v,n,d),x.target=_,x.relatedTarget=m,y=x),m=y,p&&v)t:{for(x=p,u=v,g=0,_=x;_;_=br(_))g++;for(_=0,y=u;y;y=br(y))_++;for(;0<g-_;)x=br(x),g--;for(;0<_-g;)u=br(u),_--;for(;g--;){if(x===u||u!==null&&x===u.alternate)break t;x=br(x),u=br(u)}x=null}else x=null;p!==null&&Nh(f,h,p,x,!1),v!==null&&m!==null&&Nh(f,m,v,x,!0)}}e:{if(h=c?Jr(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=Sv;else if(Th(h))if(km)b=wv;else{b=Ev;var C=Mv}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=Tv);if(b&&(b=b(t,c))){zm(f,b,n,d);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Qc(h,"number",h.value)}switch(C=c?Jr(c):window,t){case"focusin":(Th(C)||C.contentEditable==="true")&&($r=C,du=c,eo=null);break;case"focusout":eo=du=$r=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,bh(f,n,d);break;case"selectionchange":if(Cv)break;case"keydown":case"keyup":bh(f,n,d)}var R;if(hd)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else qr?Fm(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Im&&n.locale!=="ko"&&(qr||U!=="onCompositionStart"?U==="onCompositionEnd"&&qr&&(R=Um()):(Di=d,cd="value"in Di?Di.value:Di.textContent,qr=!0)),C=Wa(c,U),0<C.length&&(U=new yh(U,t,null,n,d),f.push({event:U,listeners:C}),R?U.data=R:(R=Om(n),R!==null&&(U.data=R)))),(R=gv?_v(t,n):vv(t,n))&&(c=Wa(c,"onBeforeInput"),0<c.length&&(d=new yh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=R))}$m(f,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=lo(t,n),s!=null&&i.unshift(go(t,s,r)),s=lo(t,e),s!=null&&i.push(go(t,s,r))),t=t.return}return i}function br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=lo(n,s),l!=null&&o.unshift(go(n,l,a))):r||(l=lo(n,s),l!=null&&o.push(go(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Nv=/\r\n?/g,Dv=/\u0000|\uFFFD/g;function Dh(t){return(typeof t=="string"?t:""+t).replace(Nv,`
`).replace(Dv,"")}function Xo(t,e,n){if(e=Dh(e),Dh(t)!==e&&n)throw Error(re(425))}function ja(){}var fu=null,pu=null;function mu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,Uv=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,Iv=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(t){return Uh.resolve(null).then(t).catch(Fv)}:gu;function Fv(t){setTimeout(function(){throw t})}function nc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ho(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ho(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ih(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),ei="__reactFiber$"+Rs,_o="__reactProps$"+Rs,vi="__reactContainer$"+Rs,_u="__reactEvents$"+Rs,Ov="__reactListeners$"+Rs,zv="__reactHandles$"+Rs;function hr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vi]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ih(t);t!==null;){if(n=t[ei])return n;t=Ih(t)}return e}t=n,n=t.parentNode}return null}function bo(t){return t=t[ei]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function xl(t){return t[_o]||null}var vu=[],Zr=-1;function Zi(t){return{current:t}}function ct(t){0>Zr||(t.current=vu[Zr],vu[Zr]=null,Zr--)}function ot(t,e){Zr++,vu[Zr]=t.current,t.current=e}var $i={},qt=Zi($i),ln=Zi(!1),yr=$i;function ms(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function Xa(){ct(ln),ct(qt)}function Fh(t,e,n){if(qt.current!==$i)throw Error(re(168));ot(qt,e),ot(ln,n)}function Jm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,M_(t)||"Unknown",r));return pt({},n,i)}function Ya(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,yr=qt.current,ot(qt,t),ot(ln,ln.current),!0}function Oh(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Jm(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,ct(ln),ct(qt),ot(qt,t)):ct(ln),ot(ln,n)}var di=null,yl=!1,ic=!1;function Zm(t){di===null?di=[t]:di.push(t)}function kv(t){yl=!0,Zm(t)}function Qi(){if(!ic&&di!==null){ic=!0;var t=0,e=it;try{var n=di;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}di=null,yl=!1}catch(r){throw di!==null&&(di=di.slice(t+1)),Em(sd,Qi),r}finally{it=e,ic=!1}}return null}var Qr=[],es=0,qa=null,$a=0,wn=[],An=0,Sr=null,fi=1,pi="";function or(t,e){Qr[es++]=$a,Qr[es++]=qa,qa=t,$a=e}function Qm(t,e,n){wn[An++]=fi,wn[An++]=pi,wn[An++]=Sr,Sr=t;var i=fi;t=pi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,fi=1<<32-Xn(e)+r|n<<r|i,pi=s+t}else fi=1<<s|n<<r|i,pi=t}function pd(t){t.return!==null&&(or(t,1),Qm(t,1,0))}function md(t){for(;t===qa;)qa=Qr[--es],Qr[es]=null,$a=Qr[--es],Qr[es]=null;for(;t===Sr;)Sr=wn[--An],wn[An]=null,pi=wn[--An],wn[An]=null,fi=wn[--An],wn[An]=null}var vn=null,_n=null,ut=!1,Hn=null;function eg(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,_n=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:fi,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,_n=null,!0):!1;default:return!1}}function xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yu(t){if(ut){var e=_n;if(e){var n=e;if(!zh(t,e)){if(xu(t))throw Error(re(418));e=Bi(n.nextSibling);var i=vn;e&&zh(t,e)?eg(i,n):(t.flags=t.flags&-4097|2,ut=!1,vn=t)}}else{if(xu(t))throw Error(re(418));t.flags=t.flags&-4097|2,ut=!1,vn=t}}}function kh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Yo(t){if(t!==vn)return!1;if(!ut)return kh(t),ut=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mu(t.type,t.memoizedProps)),e&&(e=_n)){if(xu(t))throw tg(),Error(re(418));for(;e;)eg(t,e),e=Bi(e.nextSibling)}if(kh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=vn?Bi(t.stateNode.nextSibling):null;return!0}function tg(){for(var t=_n;t;)t=Bi(t.nextSibling)}function gs(){_n=vn=null,ut=!1}function gd(t){Hn===null?Hn=[t]:Hn.push(t)}var Bv=Mi.ReactCurrentBatchConfig;function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function qo(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bh(t){var e=t._init;return e(t._payload)}function ng(t){function e(u,g){if(t){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Wi(u,g),u.index=0,u.sibling=null,u}function s(u,g,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=2,g):_):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,_,y){return g===null||g.tag!==6?(g=uc(_,u.mode,y),g.return=u,g):(g=r(g,_),g.return=u,g)}function l(u,g,_,y){var b=_.type;return b===Yr?d(u,g,_.props.children,y,_.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===bi&&Bh(b)===g.type)?(y=r(g,_.props),y.ref=Os(u,g,_),y.return=u,y):(y=Ia(_.type,_.key,_.props,null,u.mode,y),y.ref=Os(u,g,_),y.return=u,y)}function c(u,g,_,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=dc(_,u.mode,y),g.return=u,g):(g=r(g,_.children||[]),g.return=u,g)}function d(u,g,_,y,b){return g===null||g.tag!==7?(g=gr(_,u.mode,y,b),g.return=u,g):(g=r(g,_),g.return=u,g)}function f(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=uc(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oo:return _=Ia(g.type,g.key,g.props,null,u.mode,_),_.ref=Os(u,null,g),_.return=u,_;case Xr:return g=dc(g,u.mode,_),g.return=u,g;case bi:var y=g._init;return f(u,y(g._payload),_)}if(Xs(g)||Ns(g))return g=gr(g,u.mode,_,null),g.return=u,g;qo(u,g)}return null}function h(u,g,_,y){var b=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(u,g,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Oo:return _.key===b?l(u,g,_,y):null;case Xr:return _.key===b?c(u,g,_,y):null;case bi:return b=_._init,h(u,g,b(_._payload),y)}if(Xs(_)||Ns(_))return b!==null?null:d(u,g,_,y,null);qo(u,_)}return null}function p(u,g,_,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(_)||null,a(g,u,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Oo:return u=u.get(y.key===null?_:y.key)||null,l(g,u,y,b);case Xr:return u=u.get(y.key===null?_:y.key)||null,c(g,u,y,b);case bi:var C=y._init;return p(u,g,_,C(y._payload),b)}if(Xs(y)||Ns(y))return u=u.get(_)||null,d(g,u,y,b,null);qo(g,y)}return null}function v(u,g,_,y){for(var b=null,C=null,R=g,U=g=0,E=null;R!==null&&U<_.length;U++){R.index>U?(E=R,R=null):E=R.sibling;var T=h(u,R,_[U],y);if(T===null){R===null&&(R=E);break}t&&R&&T.alternate===null&&e(u,R),g=s(T,g,U),C===null?b=T:C.sibling=T,C=T,R=E}if(U===_.length)return n(u,R),ut&&or(u,U),b;if(R===null){for(;U<_.length;U++)R=f(u,_[U],y),R!==null&&(g=s(R,g,U),C===null?b=R:C.sibling=R,C=R);return ut&&or(u,U),b}for(R=i(u,R);U<_.length;U++)E=p(R,u,U,_[U],y),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?U:E.key),g=s(E,g,U),C===null?b=E:C.sibling=E,C=E);return t&&R.forEach(function(k){return e(u,k)}),ut&&or(u,U),b}function x(u,g,_,y){var b=Ns(_);if(typeof b!="function")throw Error(re(150));if(_=b.call(_),_==null)throw Error(re(151));for(var C=b=null,R=g,U=g=0,E=null,T=_.next();R!==null&&!T.done;U++,T=_.next()){R.index>U?(E=R,R=null):E=R.sibling;var k=h(u,R,T.value,y);if(k===null){R===null&&(R=E);break}t&&R&&k.alternate===null&&e(u,R),g=s(k,g,U),C===null?b=k:C.sibling=k,C=k,R=E}if(T.done)return n(u,R),ut&&or(u,U),b;if(R===null){for(;!T.done;U++,T=_.next())T=f(u,T.value,y),T!==null&&(g=s(T,g,U),C===null?b=T:C.sibling=T,C=T);return ut&&or(u,U),b}for(R=i(u,R);!T.done;U++,T=_.next())T=p(R,u,U,T.value,y),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?U:T.key),g=s(T,g,U),C===null?b=T:C.sibling=T,C=T);return t&&R.forEach(function(Y){return e(u,Y)}),ut&&or(u,U),b}function m(u,g,_,y){if(typeof _=="object"&&_!==null&&_.type===Yr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Oo:e:{for(var b=_.key,C=g;C!==null;){if(C.key===b){if(b=_.type,b===Yr){if(C.tag===7){n(u,C.sibling),g=r(C,_.props.children),g.return=u,u=g;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===bi&&Bh(b)===C.type){n(u,C.sibling),g=r(C,_.props),g.ref=Os(u,C,_),g.return=u,u=g;break e}n(u,C);break}else e(u,C);C=C.sibling}_.type===Yr?(g=gr(_.props.children,u.mode,y,_.key),g.return=u,u=g):(y=Ia(_.type,_.key,_.props,null,u.mode,y),y.ref=Os(u,g,_),y.return=u,u=y)}return o(u);case Xr:e:{for(C=_.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),g=r(g,_.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=dc(_,u.mode,y),g.return=u,u=g}return o(u);case bi:return C=_._init,m(u,g,C(_._payload),y)}if(Xs(_))return v(u,g,_,y);if(Ns(_))return x(u,g,_,y);qo(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,_),g.return=u,u=g):(n(u,g),g=uc(_,u.mode,y),g.return=u,u=g),o(u)):n(u,g)}return m}var _s=ng(!0),ig=ng(!1),Ka=Zi(null),Ja=null,ts=null,_d=null;function vd(){_d=ts=Ja=null}function xd(t){var e=Ka.current;ct(Ka),t._currentValue=e}function Su(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function us(t,e){Ja=t,_d=ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(_d!==t)if(t={context:t,memoizedValue:e,next:null},ts===null){if(Ja===null)throw Error(re(308));ts=t,Ja.dependencies={lanes:0,firstContext:t}}else ts=ts.next=t;return e}var fr=null;function yd(t){fr===null?fr=[t]:fr.push(t)}function rg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,yd(e)):(n.next=r.next,r.next=n),e.interleaved=n,xi(t,i)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function Sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(t,n)}return r=i.interleaved,r===null?(e.next=e,yd(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(t,n)}function ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,od(t,n)}}function Hh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Za(t,e,n,i){var r=t.updateQueue;Pi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=pt({},f,h);break e;case 2:Pi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=o,t.lanes=o,t.memoizedState=f}}function Gh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Po={},ni=Zi(Po),vo=Zi(Po),xo=Zi(Po);function pr(t){if(t===Po)throw Error(re(174));return t}function Md(t,e){switch(ot(xo,e),ot(vo,t),ot(ni,Po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tu(e,t)}ct(ni),ot(ni,e)}function vs(){ct(ni),ct(vo),ct(xo)}function og(t){pr(xo.current);var e=pr(ni.current),n=tu(e,t.type);e!==n&&(ot(vo,t),ot(ni,n))}function Ed(t){vo.current===t&&(ct(ni),ct(vo))}var ht=Zi(0);function Qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rc=[];function Td(){for(var t=0;t<rc.length;t++)rc[t]._workInProgressVersionPrimary=null;rc.length=0}var Pa=Mi.ReactCurrentDispatcher,sc=Mi.ReactCurrentBatchConfig,Mr=0,ft=null,wt=null,Nt=null,el=!1,to=!1,yo=0,Hv=0;function Gt(){throw Error(re(321))}function wd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function Ad(t,e,n,i,r,s){if(Mr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pa.current=t===null||t.memoizedState===null?jv:Xv,t=n(i,r),to){s=0;do{if(to=!1,yo=0,25<=s)throw Error(re(301));s+=1,Nt=wt=null,e.updateQueue=null,Pa.current=Yv,t=n(i,r)}while(to)}if(Pa.current=tl,e=wt!==null&&wt.next!==null,Mr=0,Nt=wt=ft=null,el=!1,e)throw Error(re(300));return t}function Rd(){var t=yo!==0;return yo=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?ft.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Nn(){if(wt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Nt===null?ft.memoizedState:Nt.next;if(e!==null)Nt=e,wt=t;else{if(t===null)throw Error(re(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Nt===null?ft.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function So(t,e){return typeof e=="function"?e(t):e}function oc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Mr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ft.lanes|=d,Er|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ac(t){var e=Nn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ag(){}function lg(t,e){var n=ft,i=Nn(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,Cd(dg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Mo(9,ug.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(re(349));Mr&30||cg(n,e,r)}return r}function cg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ug(t,e,n,i){e.value=n,e.getSnapshot=i,hg(e)&&fg(t)}function dg(t,e,n){return n(function(){hg(e)&&fg(t)})}function hg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function fg(t){var e=xi(t,1);e!==null&&Yn(e,t,1,-1)}function Vh(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=Wv.bind(null,ft,t),[e.memoizedState,t]}function Mo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function pg(){return Nn().memoizedState}function La(t,e,n,i){var r=Zn();ft.flags|=t,r.memoizedState=Mo(1|e,n,void 0,i===void 0?null:i)}function Sl(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&wd(i,o.deps)){r.memoizedState=Mo(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Mo(1|e,n,s,i)}function Wh(t,e){return La(8390656,8,t,e)}function Cd(t,e){return Sl(2048,8,t,e)}function mg(t,e){return Sl(4,2,t,e)}function gg(t,e){return Sl(4,4,t,e)}function _g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vg(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4,4,_g.bind(null,e,t),n)}function bd(){}function xg(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function yg(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Sg(t,e,n){return Mr&21?($n(n,e)||(n=Am(),ft.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function Gv(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=sc.transition;sc.transition={};try{t(!1),e()}finally{it=n,sc.transition=i}}function Mg(){return Nn().memoizedState}function Vv(t,e,n){var i=Vi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Eg(t))Tg(e,n);else if(n=rg(t,e,n,i),n!==null){var r=Qt();Yn(n,t,i,r),wg(n,e,i)}}function Wv(t,e,n){var i=Vi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Eg(t))Tg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,yd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=rg(t,e,r,i),n!==null&&(r=Qt(),Yn(n,t,i,r),wg(n,e,i))}}function Eg(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Tg(t,e){to=el=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,od(t,n)}}var tl={readContext:Ln,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},jv={readContext:Ln,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:Wh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,La(4194308,4,_g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return La(4194308,4,t,e)},useInsertionEffect:function(t,e){return La(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Vv.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Vh,useDebugValue:bd,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Vh(!1),e=t[0];return t=Gv.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Zn();if(ut){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ut===null)throw Error(re(349));Mr&30||cg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wh(dg.bind(null,i,s,t),[t]),i.flags|=2048,Mo(9,ug.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ut.identifierPrefix;if(ut){var n=pi,i=fi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Hv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xv={readContext:Ln,useCallback:xg,useContext:Ln,useEffect:Cd,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:yg,useReducer:oc,useRef:pg,useState:function(){return oc(So)},useDebugValue:bd,useDeferredValue:function(t){var e=Nn();return Sg(e,wt.memoizedState,t)},useTransition:function(){var t=oc(So)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:ag,useSyncExternalStore:lg,useId:Mg,unstable_isNewReconciler:!1},Yv={readContext:Ln,useCallback:xg,useContext:Ln,useEffect:Cd,useImperativeHandle:vg,useInsertionEffect:mg,useLayoutEffect:gg,useMemo:yg,useReducer:ac,useRef:pg,useState:function(){return ac(So)},useDebugValue:bd,useDeferredValue:function(t){var e=Nn();return wt===null?e.memoizedState=t:Sg(e,wt.memoizedState,t)},useTransition:function(){var t=ac(So)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:ag,useSyncExternalStore:lg,useId:Mg,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ml={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Vi(t),s=gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Yn(e,t,r,i),ba(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=Vi(t),s=gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Yn(e,t,r,i),ba(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=Vi(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(Yn(e,t,i,n),ba(e,t,i))}};function jh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,i)||!po(r,s):!0}function Ag(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=cn(e)?yr:qt.current,i=e.contextTypes,s=(i=i!=null)?ms(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ml,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ml.enqueueReplaceState(e,e.state,null)}function Eu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Sd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=cn(e)?yr:qt.current,r.context=ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ml.enqueueReplaceState(r,r.state,null),Za(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,e){try{var n="",i=e;do n+=S_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Tu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qv=typeof WeakMap=="function"?WeakMap:Map;function Rg(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){il||(il=!0,Uu=i),Tu(t,e)},n}function Cg(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Tu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Tu(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Yh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new qv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=lx.bind(null,t,e,n),e.then(t,t))}function qh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $h(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var $v=Mi.ReactCurrentOwner,an=!1;function Jt(t,e,n,i){e.child=t===null?ig(e,null,n,i):_s(e,t.child,n,i)}function Kh(t,e,n,i,r){n=n.render;var s=e.ref;return us(e,r),i=Ad(t,e,n,i,s,r),n=Rd(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(ut&&n&&pd(e),e.flags|=1,Jt(t,e,i,r),e.child)}function Jh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Od(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,bg(t,e,s,i,r)):(t=Ia(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,i)&&t.ref===e.ref)return yi(t,e,r)}return e.flags|=1,t=Wi(s,i),t.ref=e.ref,t.return=e,e.child=t}function bg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(po(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,yi(t,e,r)}return wu(t,e,n,i,r)}function Pg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(is,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(is,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(is,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(is,mn),mn|=i;return Jt(t,e,r,n),e.child}function Lg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wu(t,e,n,i,r){var s=cn(n)?yr:qt.current;return s=ms(e,s),us(e,r),n=Ad(t,e,n,i,s,r),i=Rd(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(ut&&i&&pd(e),e.flags|=1,Jt(t,e,n,r),e.child)}function Zh(t,e,n,i,r){if(cn(n)){var s=!0;Ya(e)}else s=!1;if(us(e,r),e.stateNode===null)Na(t,e),Ag(e,n,i),Eu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ln(c):(c=cn(n)?yr:qt.current,c=ms(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Xh(e,o,i,c),Pi=!1;var h=e.memoizedState;o.state=h,Za(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ln.current||Pi?(typeof d=="function"&&(Mu(e,n,d,i),l=e.memoizedState),(a=Pi||jh(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,sg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:kn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=cn(n)?yr:qt.current,l=ms(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Xh(e,o,i,l),Pi=!1,h=e.memoizedState,o.state=h,Za(e,i,o,r);var v=e.memoizedState;a!==f||h!==v||ln.current||Pi?(typeof p=="function"&&(Mu(e,n,p,i),v=e.memoizedState),(c=Pi||jh(e,n,c,i,h,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Au(t,e,n,i,s,r)}function Au(t,e,n,i,r,s){Lg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Oh(e,n,!1),yi(t,e,s);i=e.stateNode,$v.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_s(e,t.child,null,s),e.child=_s(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&Oh(e,n,!0),e.child}function Ng(t){var e=t.stateNode;e.pendingContext?Fh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fh(t,e.context,!1),Md(t,e.containerInfo)}function Qh(t,e,n,i,r){return gs(),gd(r),e.flags|=256,Jt(t,e,n,i),e.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Cu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dg(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(ht,r&1),t===null)return yu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wl(o,i,0,null),t=gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cu(n),e.memoizedState=Ru,t):Pd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Kv(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Wi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Wi(a,s):(s=gr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Cu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ru,i}return s=t.child,t=s.sibling,i=Wi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Pd(t,e){return e=wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $o(t,e,n,i){return i!==null&&gd(i),_s(e,t.child,null,n),t=Pd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Kv(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=lc(Error(re(422))),$o(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wl({mode:"visible",children:i.children},r,0,null),s=gr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_s(e,t.child,null,o),e.child.memoizedState=Cu(o),e.memoizedState=Ru,s);if(!(e.mode&1))return $o(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=lc(s,i,void 0),$o(t,e,o,i)}if(a=(o&t.childLanes)!==0,an||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(t,r),Yn(i,t,r,-1))}return Fd(),i=lc(Error(re(421))),$o(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=cx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,_n=Bi(r.nextSibling),vn=e,ut=!0,Hn=null,t!==null&&(wn[An++]=fi,wn[An++]=pi,wn[An++]=Sr,fi=t.id,pi=t.overflow,Sr=e),e=Pd(e,i.children),e.flags|=4096,e)}function ef(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Su(t.return,e,n)}function cc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ug(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ef(t,n,e);else if(t.tag===19)ef(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Qa(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Qa(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cc(e,!0,n,null,s);break;case"together":cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Na(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jv(t,e,n){switch(e.tag){case 3:Ng(e),gs();break;case 5:og(e);break;case 1:cn(e.type)&&Ya(e);break;case 4:Md(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Ka,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?Dg(t,e,n):(ot(ht,ht.current&1),t=yi(t,e,n),t!==null?t.sibling:null);ot(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ug(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,Pg(t,e,n)}return yi(t,e,n)}var Ig,bu,Fg,Og;Ig=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bu=function(){};Fg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,pr(ni.current);var s=null;switch(n){case"input":r=Jc(t,r),i=Jc(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=eu(t,r),i=eu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ja)}nu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Og=function(t,e,n,i){n!==i&&(e.flags|=4)};function zs(t,e){if(!ut)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Zv(t,e,n){var i=e.pendingProps;switch(md(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return cn(e.type)&&Xa(),Vt(e),null;case 3:return i=e.stateNode,vs(),ct(ln),ct(qt),Td(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Yo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Ou(Hn),Hn=null))),bu(t,e),Vt(e),null;case 5:Ed(e);var r=pr(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)Fg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Vt(e),null}if(t=pr(ni.current),Yo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[_o]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<qs.length;r++)at(qs[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":ch(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":dh(i,s),at("invalid",i)}nu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xo(i.textContent,a,t),r=["children",""+a]):oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":zo(i),uh(i,s,!0);break;case"textarea":zo(i),hh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ja)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[_o]=i,Ig(t,e,!1,!1),e.stateNode=t;e:{switch(o=iu(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<qs.length;r++)at(qs[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":ch(t,i),r=Jc(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),at("invalid",t);break;case"textarea":dh(t,i),r=eu(t,i),at("invalid",t);break;default:r=i}nu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ao(t,l):typeof l=="number"&&ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&ed(t,s,l,o))}switch(n){case"input":zo(t),uh(t,i,!1);break;case"textarea":zo(t),hh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?os(t,!!i.multiple,s,!1):i.defaultValue!=null&&os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ja)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)Og(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=pr(xo.current),pr(ni.current),Yo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Xo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Vt(e),null;case 13:if(ct(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ut&&_n!==null&&e.mode&1&&!(e.flags&128))tg(),gs(),e.flags|=98560,s=!1;else if(s=Yo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ei]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Hn!==null&&(Ou(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?At===0&&(At=3):Fd())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return vs(),bu(t,e),t===null&&mo(e.stateNode.containerInfo),Vt(e),null;case 10:return xd(e.type._context),Vt(e),null;case 17:return cn(e.type)&&Xa(),Vt(e),null;case 19:if(ct(ht),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)zs(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qa(t),o!==null){for(e.flags|=128,zs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>ys&&(e.flags|=128,i=!0,zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Qa(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ut)return Vt(e),null}else 2*yt()-s.renderingStartTime>ys&&n!==1073741824&&(e.flags|=128,i=!0,zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ht.current,ot(ht,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Id(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Qv(t,e){switch(md(e),e.tag){case 1:return cn(e.type)&&Xa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vs(),ct(ln),ct(qt),Td(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ed(e),null;case 13:if(ct(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ht),null;case 4:return vs(),null;case 10:return xd(e.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var Ko=!1,Xt=!1,ex=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function Pu(t,e,n){try{n()}catch(i){_t(t,e,i)}}var tf=!1;function tx(t,e){if(fu=Ga,t=Gm(),fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pu={focusedElem:t,selectionRange:n},Ga=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:kn(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){_t(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=tf,tf=!1,v}function no(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Pu(e,n,s)}r=r.next}while(r!==i)}}function El(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Lu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zg(t){var e=t.alternate;e!==null&&(t.alternate=null,zg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[_o],delete e[_u],delete e[Ov],delete e[zv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kg(t){return t.tag===5||t.tag===3||t.tag===4}function nf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ja));else if(i!==4&&(t=t.child,t!==null))for(Nu(t,e,n),t=t.sibling;t!==null;)Nu(t,e,n),t=t.sibling}function Du(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Du(t,e,n),t=t.sibling;t!==null;)Du(t,e,n),t=t.sibling}var Ot=null,Bn=!1;function Ei(t,e,n){for(n=n.child;n!==null;)Bg(t,e,n),n=n.sibling}function Bg(t,e,n){if(ti&&typeof ti.onCommitFiberUnmount=="function")try{ti.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:Xt||ns(n,e);case 6:var i=Ot,r=Bn;Ot=null,Ei(t,e,n),Ot=i,Bn=r,Ot!==null&&(Bn?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(Bn?(t=Ot,n=n.stateNode,t.nodeType===8?nc(t.parentNode,n):t.nodeType===1&&nc(t,n),ho(t)):nc(Ot,n.stateNode));break;case 4:i=Ot,r=Bn,Ot=n.stateNode.containerInfo,Bn=!0,Ei(t,e,n),Ot=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pu(n,e,o),r=r.next}while(r!==i)}Ei(t,e,n);break;case 1:if(!Xt&&(ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){_t(n,e,a)}Ei(t,e,n);break;case 21:Ei(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Ei(t,e,n),Xt=i):Ei(t,e,n);break;default:Ei(t,e,n)}}function rf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ex),e.forEach(function(i){var r=ux.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ot=a.stateNode,Bn=!1;break e;case 3:Ot=a.stateNode.containerInfo,Bn=!0;break e;case 4:Ot=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(Ot===null)throw Error(re(160));Bg(s,o,r),Ot=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hg(e,t),e=e.sibling}function Hg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Jn(t),i&4){try{no(3,t,t.return),El(3,t)}catch(x){_t(t,t.return,x)}try{no(5,t,t.return)}catch(x){_t(t,t.return,x)}}break;case 1:Un(e,t),Jn(t),i&512&&n!==null&&ns(n,n.return);break;case 5:if(Un(e,t),Jn(t),i&512&&n!==null&&ns(n,n.return),t.flags&32){var r=t.stateNode;try{ao(r,"")}catch(x){_t(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&cm(r,s),iu(a,o);var c=iu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?pm(r,f):d==="dangerouslySetInnerHTML"?hm(r,f):d==="children"?ao(r,f):ed(r,d,f,c)}switch(a){case"input":Zc(r,s);break;case"textarea":um(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?os(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?os(r,!!s.multiple,s.defaultValue,!0):os(r,!!s.multiple,s.multiple?[]:"",!1))}r[_o]=s}catch(x){_t(t,t.return,x)}}break;case 6:if(Un(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){_t(t,t.return,x)}}break;case 3:if(Un(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(x){_t(t,t.return,x)}break;case 4:Un(e,t),Jn(t);break;case 13:Un(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Dd=yt())),i&4&&rf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||d,Un(e,t),Xt=c):Un(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(pe=t,d=t.child;d!==null;){for(f=pe=d;pe!==null;){switch(h=pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:no(4,h,h.return);break;case 1:ns(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){_t(i,n,x)}}break;case 5:ns(h,h.return);break;case 22:if(h.memoizedState!==null){of(f);continue}}p!==null?(p.return=h,pe=p):of(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fm("display",o))}catch(x){_t(t,t.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){_t(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Un(e,t),Jn(t),i&4&&rf(t);break;case 21:break;default:Un(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kg(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ao(r,""),i.flags&=-33);var s=nf(t);Du(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=nf(t);Nu(t,a,o);break;default:throw Error(re(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nx(t,e,n){pe=t,Gg(t)}function Gg(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ko;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=Ko;var c=Xt;if(Ko=o,(Xt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?af(r):l!==null?(l.return=o,pe=l):af(r);for(;s!==null;)pe=s,Gg(s),s=s.sibling;pe=r,Ko=a,Xt=c}sf(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):sf(t)}}function sf(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||El(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ho(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Xt||e.flags&512&&Lu(e)}catch(h){_t(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function of(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function af(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{El(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Lu(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{Lu(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var ix=Math.ceil,nl=Mi.ReactCurrentDispatcher,Ld=Mi.ReactCurrentOwner,Pn=Mi.ReactCurrentBatchConfig,Ke=0,Ut=null,Mt=null,kt=0,mn=0,is=Zi(0),At=0,Eo=null,Er=0,Tl=0,Nd=0,io=null,sn=null,Dd=0,ys=1/0,ui=null,il=!1,Uu=null,Gi=null,Jo=!1,Ui=null,rl=0,ro=0,Iu=null,Da=-1,Ua=0;function Qt(){return Ke&6?yt():Da!==-1?Da:Da=yt()}function Vi(t){return t.mode&1?Ke&2&&kt!==0?kt&-kt:Bv.transition!==null?(Ua===0&&(Ua=Am()),Ua):(t=it,t!==0||(t=window.event,t=t===void 0?16:Dm(t.type)),t):1}function Yn(t,e,n,i){if(50<ro)throw ro=0,Iu=null,Error(re(185));Ro(t,n,i),(!(Ke&2)||t!==Ut)&&(t===Ut&&(!(Ke&2)&&(Tl|=n),At===4&&Ni(t,kt)),un(t,i),n===1&&Ke===0&&!(e.mode&1)&&(ys=yt()+500,yl&&Qi()))}function un(t,e){var n=t.callbackNode;B_(t,e);var i=Ha(t,t===Ut?kt:0);if(i===0)n!==null&&mh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&mh(n),e===1)t.tag===0?kv(lf.bind(null,t)):Zm(lf.bind(null,t)),Iv(function(){!(Ke&6)&&Qi()}),n=null;else{switch(Rm(i)){case 1:n=sd;break;case 4:n=Tm;break;case 16:n=Ba;break;case 536870912:n=wm;break;default:n=Ba}n=Kg(n,Vg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vg(t,e){if(Da=-1,Ua=0,Ke&6)throw Error(re(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var i=Ha(t,t===Ut?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=sl(t,i);else{e=i;var r=Ke;Ke|=2;var s=jg();(Ut!==t||kt!==e)&&(ui=null,ys=yt()+500,mr(t,e));do try{ox();break}catch(a){Wg(t,a)}while(!0);vd(),nl.current=s,Ke=r,Mt!==null?e=0:(Ut=null,kt=0,e=At)}if(e!==0){if(e===2&&(r=lu(t),r!==0&&(i=r,e=Fu(t,r))),e===1)throw n=Eo,mr(t,0),Ni(t,i),un(t,yt()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!rx(r)&&(e=sl(t,i),e===2&&(s=lu(t),s!==0&&(i=s,e=Fu(t,s))),e===1))throw n=Eo,mr(t,0),Ni(t,i),un(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:ar(t,sn,ui);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=Dd+500-yt(),10<e)){if(Ha(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=gu(ar.bind(null,t,sn,ui),e);break}ar(t,sn,ui);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ix(i/1960))-i,10<i){t.timeoutHandle=gu(ar.bind(null,t,sn,ui),i);break}ar(t,sn,ui);break;case 5:ar(t,sn,ui);break;default:throw Error(re(329))}}}return un(t,yt()),t.callbackNode===n?Vg.bind(null,t):null}function Fu(t,e){var n=io;return t.current.memoizedState.isDehydrated&&(mr(t,e).flags|=256),t=sl(t,e),t!==2&&(e=sn,sn=n,e!==null&&Ou(e)),t}function Ou(t){sn===null?sn=t:sn.push.apply(sn,t)}function rx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~Nd,e&=~Tl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function lf(t){if(Ke&6)throw Error(re(327));ds();var e=Ha(t,0);if(!(e&1))return un(t,yt()),null;var n=sl(t,e);if(t.tag!==0&&n===2){var i=lu(t);i!==0&&(e=i,n=Fu(t,i))}if(n===1)throw n=Eo,mr(t,0),Ni(t,e),un(t,yt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ar(t,sn,ui),un(t,yt()),null}function Ud(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(ys=yt()+500,yl&&Qi())}}function Tr(t){Ui!==null&&Ui.tag===0&&!(Ke&6)&&ds();var e=Ke;Ke|=1;var n=Pn.transition,i=it;try{if(Pn.transition=null,it=1,t)return t()}finally{it=i,Pn.transition=n,Ke=e,!(Ke&6)&&Qi()}}function Id(){mn=is.current,ct(is)}function mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Uv(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(md(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xa();break;case 3:vs(),ct(ln),ct(qt),Td();break;case 5:Ed(i);break;case 4:vs();break;case 13:ct(ht);break;case 19:ct(ht);break;case 10:xd(i.type._context);break;case 22:case 23:Id()}n=n.return}if(Ut=t,Mt=t=Wi(t.current,null),kt=mn=e,At=0,Eo=null,Nd=Tl=Er=0,sn=io=null,fr!==null){for(e=0;e<fr.length;e++)if(n=fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}fr=null}return t}function Wg(t,e){do{var n=Mt;try{if(vd(),Pa.current=tl,el){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}el=!1}if(Mr=0,Nt=wt=ft=null,to=!1,yo=0,Ld.current=null,n===null||n.return===null){At=1,Eo=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=qh(o);if(p!==null){p.flags&=-257,$h(p,o,a,s,e),p.mode&1&&Yh(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Yh(s,c,e),Fd();break e}l=Error(re(426))}}else if(ut&&a.mode&1){var m=qh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),$h(m,o,a,s,e),gd(xs(l,a));break e}}s=l=xs(l,a),At!==4&&(At=2),io===null?io=[s]:io.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Rg(s,l,e);Hh(s,u);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Gi===null||!Gi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Cg(s,a,e);Hh(s,y);break e}}s=s.return}while(s!==null)}Yg(n)}catch(b){e=b,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function jg(){var t=nl.current;return nl.current=tl,t===null?tl:t}function Fd(){(At===0||At===3||At===2)&&(At=4),Ut===null||!(Er&268435455)&&!(Tl&268435455)||Ni(Ut,kt)}function sl(t,e){var n=Ke;Ke|=2;var i=jg();(Ut!==t||kt!==e)&&(ui=null,mr(t,e));do try{sx();break}catch(r){Wg(t,r)}while(!0);if(vd(),Ke=n,nl.current=i,Mt!==null)throw Error(re(261));return Ut=null,kt=0,At}function sx(){for(;Mt!==null;)Xg(Mt)}function ox(){for(;Mt!==null&&!L_();)Xg(Mt)}function Xg(t){var e=$g(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?Yg(t):Mt=e,Ld.current=null}function Yg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Qv(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Mt=null;return}}else if(n=Zv(n,e,mn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);At===0&&(At=5)}function ar(t,e,n){var i=it,r=Pn.transition;try{Pn.transition=null,it=1,ax(t,e,n,i)}finally{Pn.transition=r,it=i}return null}function ax(t,e,n,i){do ds();while(Ui!==null);if(Ke&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(H_(t,s),t===Ut&&(Mt=Ut=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,Kg(Ba,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=it;it=1;var a=Ke;Ke|=4,Ld.current=null,tx(t,n),Hg(n,t),Rv(pu),Ga=!!fu,pu=fu=null,t.current=n,nx(n),N_(),Ke=a,it=o,Pn.transition=s}else t.current=n;if(Jo&&(Jo=!1,Ui=t,rl=r),s=t.pendingLanes,s===0&&(Gi=null),I_(n.stateNode),un(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(il)throw il=!1,t=Uu,Uu=null,t;return rl&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===Iu?ro++:(ro=0,Iu=t):ro=0,Qi(),null}function ds(){if(Ui!==null){var t=Rm(rl),e=Pn.transition,n=it;try{if(Pn.transition=null,it=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,rl=0,Ke&6)throw Error(re(331));var r=Ke;for(Ke|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var d=pe;switch(d.tag){case 0:case 11:case 15:no(8,d,s)}var f=d.child;if(f!==null)f.return=d,pe=f;else for(;pe!==null;){d=pe;var h=d.sibling,p=d.return;if(zg(d),d===c){pe=null;break}if(h!==null){h.return=p,pe=h;break}pe=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:no(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var g=t.current;for(pe=g;pe!==null;){o=pe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,pe=_;else e:for(o=g;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:El(9,a)}}catch(b){_t(a,a.return,b)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(Ke=r,Qi(),ti&&typeof ti.onPostCommitFiberRoot=="function")try{ti.onPostCommitFiberRoot(ml,t)}catch{}i=!0}return i}finally{it=n,Pn.transition=e}}return!1}function cf(t,e,n){e=xs(n,e),e=Rg(t,e,1),t=Hi(t,e,1),e=Qt(),t!==null&&(Ro(t,1,e),un(t,e))}function _t(t,e,n){if(t.tag===3)cf(t,t,n);else for(;e!==null;){if(e.tag===3){cf(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=xs(n,t),t=Cg(e,t,1),e=Hi(e,t,1),t=Qt(),e!==null&&(Ro(e,1,t),un(e,t));break}}e=e.return}}function lx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(kt&n)===n&&(At===4||At===3&&(kt&130023424)===kt&&500>yt()-Dd?mr(t,0):Nd|=n),un(t,e)}function qg(t,e){e===0&&(t.mode&1?(e=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):e=1);var n=Qt();t=xi(t,e),t!==null&&(Ro(t,e,n),un(t,n))}function cx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qg(t,n)}function ux(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),qg(t,n)}var $g;$g=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,Jv(t,e,n);an=!!(t.flags&131072)}else an=!1,ut&&e.flags&1048576&&Qm(e,$a,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Na(t,e),t=e.pendingProps;var r=ms(e,qt.current);us(e,n),r=Ad(null,e,i,t,r,n);var s=Rd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(s=!0,Ya(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sd(e),r.updater=Ml,e.stateNode=r,r._reactInternals=e,Eu(e,i,t,n),e=Au(null,e,i,!0,s,n)):(e.tag=0,ut&&s&&pd(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Na(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hx(i),t=kn(i,t),r){case 0:e=wu(null,e,i,t,n);break e;case 1:e=Zh(null,e,i,t,n);break e;case 11:e=Kh(null,e,i,t,n);break e;case 14:e=Jh(null,e,i,kn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),wu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Zh(t,e,i,r,n);case 3:e:{if(Ng(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,sg(t,e),Za(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xs(Error(re(423)),e),e=Qh(t,e,i,n,r);break e}else if(i!==r){r=xs(Error(re(424)),e),e=Qh(t,e,i,n,r);break e}else for(_n=Bi(e.stateNode.containerInfo.firstChild),vn=e,ut=!0,Hn=null,n=ig(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),i===r){e=yi(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return og(e),t===null&&yu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,mu(i,r)?o=null:s!==null&&mu(i,s)&&(e.flags|=32),Lg(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&yu(e),null;case 13:return Dg(t,e,n);case 4:return Md(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_s(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Kh(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(Ka,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!ln.current){e=yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Su(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Su(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,us(e,n),r=Ln(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),Jh(t,e,i,r,n);case 15:return bg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Na(t,e),e.tag=1,cn(i)?(t=!0,Ya(e)):t=!1,us(e,n),Ag(e,i,r),Eu(e,i,r,n),Au(null,e,i,!0,t,n);case 19:return Ug(t,e,n);case 22:return Pg(t,e,n)}throw Error(re(156,e.tag))};function Kg(t,e){return Em(t,e)}function dx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new dx(t,e,n,i)}function Od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hx(t){if(typeof t=="function")return Od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nd)return 11;if(t===id)return 14}return 2}function Wi(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ia(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Od(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yr:return gr(n.children,r,s,e);case td:o=8,r|=8;break;case Yc:return t=bn(12,n,e,r|2),t.elementType=Yc,t.lanes=s,t;case qc:return t=bn(13,n,e,r),t.elementType=qc,t.lanes=s,t;case $c:return t=bn(19,n,e,r),t.elementType=$c,t.lanes=s,t;case om:return wl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rm:o=10;break e;case sm:o=9;break e;case nd:o=11;break e;case id:o=14;break e;case bi:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function gr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function wl(t,e,n,i){return t=bn(22,t,i,e),t.elementType=om,t.lanes=n,t.stateNode={isHidden:!1},t}function uc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function dc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jl(0),this.expirationTimes=jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zd(t,e,n,i,r,s,o,a,l){return t=new fx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sd(s),t}function px(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Jg(t){if(!t)return $i;t=t._reactInternals;e:{if(Cr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(cn(n))return Jm(t,n,e)}return e}function Zg(t,e,n,i,r,s,o,a,l){return t=zd(n,i,!0,t,r,s,o,a,l),t.context=Jg(null),n=t.current,i=Qt(),r=Vi(n),s=gi(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,Ro(t,r,i),un(t,i),t}function Al(t,e,n,i){var r=e.current,s=Qt(),o=Vi(r);return n=Jg(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,o),t!==null&&(Yn(t,r,o,s),ba(t,r,o)),o}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function uf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kd(t,e){uf(t,e),(t=t.alternate)&&uf(t,e)}function mx(){return null}var Qg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bd(t){this._internalRoot=t}Rl.prototype.render=Bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Al(t,e,null,null)};Rl.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){Al(null,t,null,null)}),e[vi]=null}};function Rl(t){this._internalRoot=t}Rl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Li.length&&e!==0&&e<Li[n].priority;n++);Li.splice(n,0,t),n===0&&Nm(t)}};function Hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function df(){}function gx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ol(o);s.call(c)}}var o=Zg(e,i,t,0,null,!1,!1,"",df);return t._reactRootContainer=o,t[vi]=o.current,mo(t.nodeType===8?t.parentNode:t),Tr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ol(l);a.call(c)}}var l=zd(t,0,!1,null,null,!1,!1,"",df);return t._reactRootContainer=l,t[vi]=l.current,mo(t.nodeType===8?t.parentNode:t),Tr(function(){Al(e,l,n,i)}),l}function bl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ol(o);a.call(l)}}Al(e,o,t,r)}else o=gx(n,e,t,r,i);return ol(o)}Cm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ys(e.pendingLanes);n!==0&&(od(e,n|1),un(e,yt()),!(Ke&6)&&(ys=yt()+500,Qi()))}break;case 13:Tr(function(){var i=xi(t,1);if(i!==null){var r=Qt();Yn(i,t,1,r)}}),kd(t,1)}};ad=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=Qt();Yn(e,t,134217728,n)}kd(t,134217728)}};bm=function(t){if(t.tag===13){var e=Vi(t),n=xi(t,e);if(n!==null){var i=Qt();Yn(n,t,e,i)}kd(t,e)}};Pm=function(){return it};Lm=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};su=function(t,e,n){switch(e){case"input":if(Zc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=xl(i);if(!r)throw Error(re(90));lm(i),Zc(i,r)}}}break;case"textarea":um(t,n);break;case"select":e=n.value,e!=null&&os(t,!!n.multiple,e,!1)}};_m=Ud;vm=Tr;var _x={usingClientEntryPoint:!1,Events:[bo,Jr,xl,mm,gm,Ud]},ks={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vx={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sm(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||mx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{ml=Zo.inject(vx),ti=Zo}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_x;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(e))throw Error(re(200));return px(t,e,null,n)};Sn.createRoot=function(t,e){if(!Hd(t))throw Error(re(299));var n=!1,i="",r=Qg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zd(t,1,!1,null,null,n,!1,i,r),t[vi]=e.current,mo(t.nodeType===8?t.parentNode:t),new Bd(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Sm(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Tr(t)};Sn.hydrate=function(t,e,n){if(!Cl(e))throw Error(re(200));return bl(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!Hd(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Qg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Zg(e,null,t,1,n??null,r,!1,s,o),t[vi]=e.current,mo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Rl(e)};Sn.render=function(t,e,n){if(!Cl(e))throw Error(re(200));return bl(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Cl(t))throw Error(re(40));return t._reactRootContainer?(Tr(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1};Sn.unstable_batchedUpdates=Ud;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cl(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return bl(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function e0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e0)}catch(t){console.error(t)}}e0(),em.exports=Sn;var xx=em.exports,hf=xx;jc.createRoot=hf.createRoot,jc.hydrateRoot=hf.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="160",yx=0,ff=1,Sx=2,t0=1,n0=2,ci=3,Ki=0,dn=1,hi=2,ji=0,hs=1,pf=2,mf=3,gf=4,Mx=5,ur=100,Ex=101,Tx=102,_f=103,vf=104,wx=200,Ax=201,Rx=202,Cx=203,zu=204,ku=205,bx=206,Px=207,Lx=208,Nx=209,Dx=210,Ux=211,Ix=212,Fx=213,Ox=214,zx=0,kx=1,Bx=2,al=3,Hx=4,Gx=5,Vx=6,Wx=7,i0=0,jx=1,Xx=2,Xi=0,Yx=1,qx=2,$x=3,r0=4,Kx=5,Jx=6,s0=300,Ss=301,Ms=302,Bu=303,Hu=304,Pl=306,Gu=1e3,Wn=1001,Vu=1002,Zt=1003,xf=1004,hc=1005,Rn=1006,Zx=1007,To=1008,Yi=1009,Qx=1010,ey=1011,Vd=1012,o0=1013,Ii=1014,Fi=1015,wo=1016,a0=1017,l0=1018,_r=1020,ty=1021,jn=1023,ny=1024,iy=1025,vr=1026,Es=1027,ry=1028,c0=1029,sy=1030,u0=1031,d0=1033,fc=33776,pc=33777,mc=33778,gc=33779,yf=35840,Sf=35841,Mf=35842,Ef=35843,h0=36196,Tf=37492,wf=37496,Af=37808,Rf=37809,Cf=37810,bf=37811,Pf=37812,Lf=37813,Nf=37814,Df=37815,Uf=37816,If=37817,Ff=37818,Of=37819,zf=37820,kf=37821,_c=36492,Bf=36494,Hf=36495,oy=36283,Gf=36284,Vf=36285,Wf=36286,f0=3e3,xr=3001,ay=3200,ly=3201,p0=0,cy=1,Cn="",zt="srgb",Si="srgb-linear",Wd="display-p3",Ll="display-p3-linear",ll="linear",lt="srgb",cl="rec709",ul="p3",Pr=7680,jf=519,uy=512,dy=513,hy=514,m0=515,fy=516,py=517,my=518,gy=519,Xf=35044,Yf="300 es",Wu=1035,mi=2e3,dl=2001;class Cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vc=Math.PI/180,hl=180/Math.PI;function Lo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function on(t,e,n){return Math.max(e,Math.min(n,t))}function _y(t,e){return(t%e+e)%e}function xc(t,e,n){return(1-n)*t+n*e}function qf(t){return(t&t-1)===0&&t!==0}function ju(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Bs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],v=i[8],x=r[0],m=r[3],u=r[6],g=r[1],_=r[4],y=r[7],b=r[2],C=r[5],R=r[8];return s[0]=o*x+a*g+l*b,s[3]=o*m+a*_+l*C,s[6]=o*u+a*y+l*R,s[1]=c*x+d*g+f*b,s[4]=c*m+d*_+f*C,s[7]=c*u+d*y+f*R,s[2]=h*x+p*g+v*b,s[5]=h*m+p*_+v*C,s[8]=h*u+p*y+v*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*s,p=c*s-o*l,v=n*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yc.makeScale(e,n)),this}rotate(e){return this.premultiply(yc.makeRotation(-e)),this}translate(e,n){return this.premultiply(yc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yc=new je;function g0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function vy(){const t=fl("canvas");return t.style.display="block",t}const $f={};function so(t){t in $f||($f[t]=!0,console.warn(t))}const Kf=new je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jf=new je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qo={[Si]:{transfer:ll,primaries:cl,toReference:t=>t,fromReference:t=>t},[zt]:{transfer:lt,primaries:cl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ll]:{transfer:ll,primaries:ul,toReference:t=>t.applyMatrix3(Jf),fromReference:t=>t.applyMatrix3(Kf)},[Wd]:{transfer:lt,primaries:ul,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jf),fromReference:t=>t.applyMatrix3(Kf).convertLinearToSRGB()}},xy=new Set([Si,Ll]),rt={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!xy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Qo[e].toReference,r=Qo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Qo[t].primaries},getTransfer:function(t){return t===Cn?ll:Qo[t].transfer}};function fs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Sc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Lr;class _0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lr===void 0&&(Lr=fl("canvas")),Lr.width=e.width,Lr.height=e.height;const i=Lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Lr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=fs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fs(n[i]/255)*255):n[i]=fs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yy=0;class v0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Lo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mc(r[o].image)):s.push(Mc(r[o]))}else s=Mc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Mc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sy=0;class xn extends Cs{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=Wn,r=Wn,s=Rn,o=To,a=jn,l=Yi,c=xn.DEFAULT_ANISOTROPY,d=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Lo(),this.name="",this.source=new v0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(so("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===xr?zt:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gu:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Vu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gu:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Vu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return so("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?xr:f0}set encoding(e){so("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xr?zt:Cn}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=s0;xn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,b=(u+1)/2,C=(d+h)/4,R=(f+x)/4,U=(v+m)/4;return _>y&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=R/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=U/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=R/s,r=U/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(f-x)/g,this.z=(h-d)/g,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class My extends Cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(so("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===xr?zt:Cn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new v0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends My{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class x0 extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ey extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(f!==x||l!==h||c!==p||d!==v){let m=1-a;const u=l*h+c*p+d*v+f*x,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const b=Math.sqrt(_),C=Math.atan2(b,u*g);m=Math.sin(m*C)/b,a=Math.sin(a*C)/b}const y=a*g;if(l=l*m+h*y,c=c*m+p*y,d=d*m+v*y,f=f*m+x*y,m===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=b,c*=b,d*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+d*f+l*p-c*h,e[n+1]=l*v+d*h+c*f-a*p,e[n+2]=c*v+d*p+a*h-l*f,e[n+3]=d*v-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*d*f+c*p*v,this._y=c*p*f-h*d*v,this._z=c*d*v+h*p*f,this._w=c*d*f-h*p*v;break;case"YXZ":this._x=h*d*f+c*p*v,this._y=c*p*f-h*d*v,this._z=c*d*v-h*p*f,this._w=c*d*f+h*p*v;break;case"ZXY":this._x=h*d*f-c*p*v,this._y=c*p*f+h*d*v,this._z=c*d*v+h*p*f,this._w=c*d*f-h*p*v;break;case"ZYX":this._x=h*d*f-c*p*v,this._y=c*p*f+h*d*v,this._z=c*d*v-h*p*f,this._w=c*d*f+h*p*v;break;case"YZX":this._x=h*d*f+c*p*v,this._y=c*p*f+h*d*v,this._z=c*d*v-h*p*f,this._w=c*d*f-h*p*v;break;case"XZY":this._x=h*d*f-c*p*v,this._y=c*p*f-h*d*v,this._z=c*d*v+h*p*f,this._w=c*d*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new z,Zf=new No;class Do{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(In.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(In.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=In.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(s,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),ta.subVectors(this.max,Hs),Nr.subVectors(e.a,Hs),Dr.subVectors(e.b,Hs),Ur.subVectors(e.c,Hs),Ti.subVectors(Dr,Nr),wi.subVectors(Ur,Dr),nr.subVectors(Nr,Ur);let n=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-nr.z,nr.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,nr.z,0,-nr.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-nr.y,nr.x,0];return!Tc(n,Nr,Dr,Ur,ta)||(n=[1,0,0,0,1,0,0,0,1],!Tc(n,Nr,Dr,Ur,ta))?!1:(na.crossVectors(Ti,wi),n=[na.x,na.y,na.z],Tc(n,Nr,Dr,Ur,ta))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new z,new z,new z,new z,new z,new z,new z,new z],In=new z,ea=new Do,Nr=new z,Dr=new z,Ur=new z,Ti=new z,wi=new z,nr=new z,Hs=new z,ta=new z,na=new z,ir=new z;function Tc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ir.fromArray(t,s);const a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=n.dot(ir),d=i.dot(ir);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Ty=new Do,Gs=new z,wc=new z;class Nl{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ty.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const n=Gs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Gs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(wc)),this.expandByPoint(Gs.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new z,Ac=new z,ia=new z,Ai=new z,Rc=new z,ra=new z,Cc=new z;class y0{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ac.copy(e).add(n).multiplyScalar(.5),ia.copy(n).sub(e).normalize(),Ai.copy(this.origin).sub(Ac);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ia),a=Ai.dot(this.direction),l=-Ai.dot(ia),c=Ai.lengthSq(),d=Math.abs(1-o*o);let f,h,p,v;if(d>0)if(f=o*l-a,h=o*a-l,v=s*d,f>=0)if(h>=-v)if(h<=v){const x=1/d;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ac).addScaledVector(ia,h),p}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){Rc.subVectors(n,e),ra.subVectors(i,e),Cc.crossVectors(Rc,ra);let o=this.direction.dot(Cc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(ra.crossVectors(Ai,ra));if(l<0)return null;const c=a*this.direction.dot(Rc.cross(Ai));if(c<0||l+c>o)return null;const d=-a*Ai.dot(Cc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,o,a,l,c,d,f,h,p,v,x,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,f,h,p,v,x,m)}set(e,n,i,r,s,o,a,l,c,d,f,h,p,v,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*d,p=o*f,v=a*d,x=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,v=c*d,x=c*f;n[0]=h+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*d,n[9]=-a,n[2]=p*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,v=c*d,x=c*f;n[0]=h-x*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*d,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,v=a*d,x=a*f;n[0]=l*d,n[4]=v*c-p,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*d,n[4]=x-h*f,n[8]=v*f+p,n[1]=f,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*f+v,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+x,n[5]=o*d,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*d,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wy,e,Ay)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ri.crossVectors(i,fn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ri.crossVectors(i,fn)),Ri.normalize(),sa.crossVectors(fn,Ri),r[0]=Ri.x,r[4]=sa.x,r[8]=fn.x,r[1]=Ri.y,r[5]=sa.y,r[9]=fn.y,r[2]=Ri.z,r[6]=sa.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],v=i[2],x=i[6],m=i[10],u=i[14],g=i[3],_=i[7],y=i[11],b=i[15],C=r[0],R=r[4],U=r[8],E=r[12],T=r[1],k=r[5],Y=r[9],te=r[13],N=r[2],B=r[6],$=r[10],F=r[14],P=r[3],I=r[7],D=r[11],j=r[15];return s[0]=o*C+a*T+l*N+c*P,s[4]=o*R+a*k+l*B+c*I,s[8]=o*U+a*Y+l*$+c*D,s[12]=o*E+a*te+l*F+c*j,s[1]=d*C+f*T+h*N+p*P,s[5]=d*R+f*k+h*B+p*I,s[9]=d*U+f*Y+h*$+p*D,s[13]=d*E+f*te+h*F+p*j,s[2]=v*C+x*T+m*N+u*P,s[6]=v*R+x*k+m*B+u*I,s[10]=v*U+x*Y+m*$+u*D,s[14]=v*E+x*te+m*F+u*j,s[3]=g*C+_*T+y*N+b*P,s[7]=g*R+_*k+y*B+b*I,s[11]=g*U+_*Y+y*$+b*D,s[15]=g*E+_*te+y*F+b*j,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],v=e[3],x=e[7],m=e[11],u=e[15];return v*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*d-s*l*d)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*h+r*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],v=e[12],x=e[13],m=e[14],u=e[15],g=f*m*c-x*h*c+x*l*p-a*m*p-f*l*u+a*h*u,_=v*h*c-d*m*c-v*l*p+o*m*p+d*l*u-o*h*u,y=d*x*c-v*f*c+v*a*p-o*x*p-d*a*u+o*f*u,b=v*f*l-d*x*l-v*a*h+o*x*h+d*a*m-o*f*m,C=n*g+i*_+r*y+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=g*R,e[1]=(x*h*s-f*m*s-x*r*p+i*m*p+f*r*u-i*h*u)*R,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*u+i*l*u)*R,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*R,e[4]=_*R,e[5]=(d*m*s-v*h*s+v*r*p-n*m*p-d*r*u+n*h*u)*R,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*u-n*l*u)*R,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*p+n*l*p)*R,e[8]=y*R,e[9]=(v*f*s-d*x*s-v*i*p+n*x*p+d*i*u-n*f*u)*R,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*u+n*a*u)*R,e[11]=(d*a*s-o*f*s-d*i*c+n*f*c+o*i*p-n*a*p)*R,e[12]=b*R,e[13]=(d*x*r-v*f*r+v*i*h-n*x*h-d*i*m+n*f*m)*R,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*R,e[15]=(o*f*r-d*a*r+d*i*l-n*f*l-o*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,f=a+a,h=s*c,p=s*d,v=s*f,x=o*d,m=o*f,u=a*f,g=l*c,_=l*d,y=l*f,b=i.x,C=i.y,R=i.z;return r[0]=(1-(x+u))*b,r[1]=(p+y)*b,r[2]=(v-_)*b,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(h+u))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(v+_)*R,r[9]=(m-g)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),a=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,d=1/o,f=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=d,Fn.elements[5]*=d,Fn.elements[6]*=d,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=mi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===mi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===dl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=mi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*d;let v,x;if(a===mi)v=(o+s)*f,x=-2*f;else if(a===dl)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ir=new z,Fn=new Et,wy=new z(0,0,0),Ay=new z(1,1,1),Ri=new z,sa=new z,fn=new z,Qf=new Et,ep=new No;class Dl{constructor(e=0,n=0,i=0,r=Dl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ep.setFromEuler(this),this.setFromQuaternion(ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dl.DEFAULT_ORDER="XYZ";class S0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ry=0;const tp=new z,Fr=new No,oi=new Et,oa=new z,Vs=new z,Cy=new z,by=new No,np=new z(1,0,0),ip=new z(0,1,0),rp=new z(0,0,1),Py={type:"added"},Ly={type:"removed"};class Rt extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new z,n=new Dl,i=new No,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new je}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(np,e)}rotateY(e){return this.rotateOnAxis(ip,e)}rotateZ(e){return this.rotateOnAxis(rp,e)}translateOnAxis(e,n){return tp.copy(e).applyQuaternion(this.quaternion),this.position.add(tp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(np,e)}translateY(e){return this.translateOnAxis(ip,e)}translateZ(e){return this.translateOnAxis(rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?oa.copy(e):oa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Vs,oa,this.up):oi.lookAt(oa,Vs,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(oi),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Py)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ly)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,Cy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,by,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new z(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new z,ai=new z,bc=new z,li=new z,Or=new z,zr=new z,sp=new z,Pc=new z,Lc=new z,Nc=new z;let aa=!1;class Gn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),ai.subVectors(i,n),bc.subVectors(e,n);const o=On.dot(On),a=On.dot(ai),l=On.dot(bc),c=ai.dot(ai),d=ai.dot(bc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*d)*h,v=(o*d-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getUV(e,n,i,r,s,o,a,l){return aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),aa=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),ai.subVectors(e,n),On.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),On.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),aa=!0),Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Or.subVectors(r,i),zr.subVectors(s,i),Pc.subVectors(e,i);const l=Or.dot(Pc),c=zr.dot(Pc);if(l<=0&&c<=0)return n.copy(i);Lc.subVectors(e,r);const d=Or.dot(Lc),f=zr.dot(Lc);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Or,o);Nc.subVectors(e,s);const p=Or.dot(Nc),v=zr.dot(Nc);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(zr,a);const m=d*v-p*f;if(m<=0&&f-d>=0&&p-v>=0)return sp.subVectors(s,r),a=(f-d)/(f-d+(p-v)),n.copy(r).addScaledVector(sp,a);const u=1/(m+x+h);return o=x*u,a=h*u,n.copy(i).addScaledVector(Or,o).addScaledVector(zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},la={h:0,s:0,l:0};function Dc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=_y(e,1),n=on(n,0,1),i=on(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Dc(o,s,e+1/3),this.g=Dc(o,s,e),this.b=Dc(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=zt){const i=M0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=Sc(e.r),this.g=Sc(e.g),this.b=Sc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return rt.fromWorkingColorSpace(jt.copy(this),e),Math.round(on(jt.r*255,0,255))*65536+Math.round(on(jt.g*255,0,255))*256+Math.round(on(jt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=zt){rt.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==zt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(la);const i=xc(Ci.h,la.h,n),r=xc(Ci.s,la.s,n),s=xc(Ci.l,la.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Je;Je.NAMES=M0;let Ny=0;class bs extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=hs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zu,this.blendDst=ku,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zu&&(i.blendSrc=this.blendSrc),this.blendDst!==ku&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==al&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jd extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=i0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new z,ca=new Ze;class qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Xf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ca.fromBufferAttribute(this,n),ca.applyMatrix3(e),this.setXY(n,ca.x,ca.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bs(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bs(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bs(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xf&&(e.usage=this.usage),e}}class E0 extends qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class T0 extends qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yt extends qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Dy=0;const Tn=new Et,Uc=new Rt,kr=new z,pn=new Do,Ws=new Do,Lt=new z;class Dn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(g0(e)?T0:E0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(pn.min,Ws.min),pn.expandByPoint(Lt),Lt.addVectors(pn.max,Ws.max),pn.expandByPoint(Lt)):(pn.expandByPoint(Ws.min),pn.expandByPoint(Ws.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Lt.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(e,c),Lt.add(kr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let T=0;T<a;T++)c[T]=new z,d[T]=new z;const f=new z,h=new z,p=new z,v=new Ze,x=new Ze,m=new Ze,u=new z,g=new z;function _(T,k,Y){f.fromArray(r,T*3),h.fromArray(r,k*3),p.fromArray(r,Y*3),v.fromArray(o,T*2),x.fromArray(o,k*2),m.fromArray(o,Y*2),h.sub(f),p.sub(f),x.sub(v),m.sub(v);const te=1/(x.x*m.y-m.x*x.y);isFinite(te)&&(u.copy(h).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(te),g.copy(p).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(te),c[T].add(u),c[k].add(u),c[Y].add(u),d[T].add(g),d[k].add(g),d[Y].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,k=y.length;T<k;++T){const Y=y[T],te=Y.start,N=Y.count;for(let B=te,$=te+N;B<$;B+=3)_(i[B+0],i[B+1],i[B+2])}const b=new z,C=new z,R=new z,U=new z;function E(T){R.fromArray(s,T*3),U.copy(R);const k=c[T];b.copy(k),b.sub(R.multiplyScalar(R.dot(k))).normalize(),C.crossVectors(U,k);const te=C.dot(d[T])<0?-1:1;l[T*4]=b.x,l[T*4+1]=b.y,l[T*4+2]=b.z,l[T*4+3]=te}for(let T=0,k=y.length;T<k;++T){const Y=y[T],te=Y.start,N=Y.count;for(let B=te,$=te+N;B<$;B+=3)E(i[B+0]),E(i[B+1]),E(i[B+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,d=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let u=0;u<d;u++)h[v++]=c[p++]}return new qn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Dn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const op=new Et,rr=new y0,ua=new Nl,ap=new z,Br=new z,Hr=new z,Gr=new z,Ic=new z,da=new z,ha=new Ze,fa=new Ze,pa=new Ze,lp=new z,cp=new z,up=new z,ma=new z,ga=new z;class Pe extends Rt{constructor(e=new Dn,n=new jd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){da.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(Ic.fromBufferAttribute(f,e),o?da.addScaledVector(Ic,d):da.addScaledVector(Ic.sub(n),d))}n.add(da)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(ua.containsPoint(rr.origin)===!1&&(rr.intersectSphere(ua,ap)===null||rr.origin.distanceToSquared(ap)>(e.far-e.near)**2))&&(op.copy(s).invert(),rr.copy(e.ray).applyMatrix4(op),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],u=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,b=_;y<b;y+=3){const C=a.getX(y),R=a.getX(y+1),U=a.getX(y+2);r=_a(this,u,e,i,c,d,f,C,R,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const g=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=_a(this,o,e,i,c,d,f,g,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],u=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,b=_;y<b;y+=3){const C=y,R=y+1,U=y+2;r=_a(this,u,e,i,c,d,f,C,R,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const g=m,_=m+1,y=m+2;r=_a(this,o,e,i,c,d,f,g,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Uy(t,e,n,i,r,s,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ki,a),l===null)return null;ga.copy(a),ga.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ga);return c<n.near||c>n.far?null:{distance:c,point:ga.clone(),object:t}}function _a(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Br),t.getVertexPosition(l,Hr),t.getVertexPosition(c,Gr);const d=Uy(t,e,n,i,Br,Hr,Gr,ma);if(d){r&&(ha.fromBufferAttribute(r,a),fa.fromBufferAttribute(r,l),pa.fromBufferAttribute(r,c),d.uv=Gn.getInterpolation(ma,Br,Hr,Gr,ha,fa,pa,new Ze)),s&&(ha.fromBufferAttribute(s,a),fa.fromBufferAttribute(s,l),pa.fromBufferAttribute(s,c),d.uv1=Gn.getInterpolation(ma,Br,Hr,Gr,ha,fa,pa,new Ze),d.uv2=d.uv1),o&&(lp.fromBufferAttribute(o,a),cp.fromBufferAttribute(o,l),up.fromBufferAttribute(o,c),d.normal=Gn.getInterpolation(ma,Br,Hr,Gr,lp,cp,up,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};Gn.getNormal(Br,Hr,Gr,f.normal),d.face=f}return d}class Vn extends Dn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(f,2));function v(x,m,u,g,_,y,b,C,R,U,E){const T=y/R,k=b/U,Y=y/2,te=b/2,N=C/2,B=R+1,$=U+1;let F=0,P=0;const I=new z;for(let D=0;D<$;D++){const j=D*k-te;for(let Z=0;Z<B;Z++){const q=Z*T-Y;I[x]=q*g,I[m]=j*_,I[u]=N,c.push(I.x,I.y,I.z),I[x]=0,I[m]=0,I[u]=C>0?1:-1,d.push(I.x,I.y,I.z),f.push(Z/R),f.push(1-D/U),F+=1}}for(let D=0;D<U;D++)for(let j=0;j<R;j++){const Z=h+j+B*D,q=h+j+B*(D+1),J=h+(j+1)+B*(D+1),oe=h+(j+1)+B*D;l.push(Z,q,oe),l.push(q,J,oe),P+=6}a.addGroup(p,P,E),p+=P,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Ts(t[n]);for(const r in i)e[r]=i[r]}return e}function Iy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function w0(t){return t.getRenderTarget()===null?t.outputColorSpace:rt.workingColorSpace}const Fy={clone:Ts,merge:$t};var Oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oy,this.fragmentShader=zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class A0 extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gn extends A0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vr=-90,Wr=1;class ky extends Rt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Vr,Wr,e,n);r.layers=this.layers,this.add(r);const s=new gn(Vr,Wr,e,n);s.layers=this.layers,this.add(s);const o=new gn(Vr,Wr,e,n);o.layers=this.layers,this.add(o);const a=new gn(Vr,Wr,e,n);a.layers=this.layers,this.add(a);const l=new gn(Vr,Wr,e,n);l.layers=this.layers,this.add(l);const c=new gn(Vr,Wr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class R0 extends xn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ss,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class By extends wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(so("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xr?zt:Cn),this.texture=new R0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vn(5,5,5),s=new Ar({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:ji});s.uniforms.tEquirect.value=n;const o=new Pe(r,s),a=n.minFilter;return n.minFilter===To&&(n.minFilter=Rn),new ky(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Fc=new z,Hy=new z,Gy=new je;class lr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Fc.subVectors(i,n).cross(Hy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Gy.getNormalMatrix(e),r=this.coplanarPoint(Fc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Nl,va=new z;class Xd{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,o=new lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],p=r[8],v=r[9],x=r[10],m=r[11],u=r[12],g=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-u).normalize(),i[1].setComponents(l+s,h+c,m+p,y+u).normalize(),i[2].setComponents(l+o,h+d,m+v,y+g).normalize(),i[3].setComponents(l-o,h-d,m-v,y-g).normalize(),i[4].setComponents(l-a,h-f,m-x,y-_).normalize(),n===mi)i[5].setComponents(l+a,h+f,m+x,y+_).normalize();else if(n===dl)i[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(va.x=r.normal.x>0?e.max.x:e.min.x,va.y=r.normal.y>0?e.max.y:e.min.y,va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function C0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Vy(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,p=f.byteLength,v=t.createBuffer();t.bindBuffer(d,v),t.bufferData(d,f,h),c.onUploadCallback();let x;if(f instanceof Float32Array)x=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=t.SHORT;else if(f instanceof Uint32Array)x=t.UNSIGNED_INT;else if(f instanceof Int32Array)x=t.INT;else if(f instanceof Int8Array)x=t.BYTE;else if(f instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,d,f){const h=d.array,p=d._updateRange,v=d.updateRanges;if(t.bindBuffer(f,c),p.count===-1&&v.length===0&&t.bufferSubData(f,0,h),v.length!==0){for(let x=0,m=v.length;x<m;x++){const u=v[x];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:o,remove:a,update:l}}class Yd extends Dn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,h=n/l,p=[],v=[],x=[],m=[];for(let u=0;u<d;u++){const g=u*h-o;for(let _=0;_<c;_++){const y=_*f-s;v.push(y,-g,0),x.push(0,0,1),m.push(_/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const _=g+c*u,y=g+c*(u+1),b=g+1+c*(u+1),C=g+1+c*u;p.push(_,y,C),p.push(y,b,C)}this.setIndex(p),this.setAttribute("position",new Yt(v,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yd(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zy=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,eS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_S=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yS="gl_FragColor = linearToOutputTexel( gl_FragColor );",SS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,MS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,DS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,US=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,XS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$S=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,KS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,JS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,oM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,aM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_M=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,JM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ME=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Wy,alphahash_pars_fragment:jy,alphamap_fragment:Xy,alphamap_pars_fragment:Yy,alphatest_fragment:qy,alphatest_pars_fragment:$y,aomap_fragment:Ky,aomap_pars_fragment:Jy,batching_pars_vertex:Zy,batching_vertex:Qy,begin_vertex:eS,beginnormal_vertex:tS,bsdfs:nS,iridescence_fragment:iS,bumpmap_pars_fragment:rS,clipping_planes_fragment:sS,clipping_planes_pars_fragment:oS,clipping_planes_pars_vertex:aS,clipping_planes_vertex:lS,color_fragment:cS,color_pars_fragment:uS,color_pars_vertex:dS,color_vertex:hS,common:fS,cube_uv_reflection_fragment:pS,defaultnormal_vertex:mS,displacementmap_pars_vertex:gS,displacementmap_vertex:_S,emissivemap_fragment:vS,emissivemap_pars_fragment:xS,colorspace_fragment:yS,colorspace_pars_fragment:SS,envmap_fragment:MS,envmap_common_pars_fragment:ES,envmap_pars_fragment:TS,envmap_pars_vertex:wS,envmap_physical_pars_fragment:OS,envmap_vertex:AS,fog_vertex:RS,fog_pars_vertex:CS,fog_fragment:bS,fog_pars_fragment:PS,gradientmap_pars_fragment:LS,lightmap_fragment:NS,lightmap_pars_fragment:DS,lights_lambert_fragment:US,lights_lambert_pars_fragment:IS,lights_pars_begin:FS,lights_toon_fragment:zS,lights_toon_pars_fragment:kS,lights_phong_fragment:BS,lights_phong_pars_fragment:HS,lights_physical_fragment:GS,lights_physical_pars_fragment:VS,lights_fragment_begin:WS,lights_fragment_maps:jS,lights_fragment_end:XS,logdepthbuf_fragment:YS,logdepthbuf_pars_fragment:qS,logdepthbuf_pars_vertex:$S,logdepthbuf_vertex:KS,map_fragment:JS,map_pars_fragment:ZS,map_particle_fragment:QS,map_particle_pars_fragment:eM,metalnessmap_fragment:tM,metalnessmap_pars_fragment:nM,morphcolor_vertex:iM,morphnormal_vertex:rM,morphtarget_pars_vertex:sM,morphtarget_vertex:oM,normal_fragment_begin:aM,normal_fragment_maps:lM,normal_pars_fragment:cM,normal_pars_vertex:uM,normal_vertex:dM,normalmap_pars_fragment:hM,clearcoat_normal_fragment_begin:fM,clearcoat_normal_fragment_maps:pM,clearcoat_pars_fragment:mM,iridescence_pars_fragment:gM,opaque_fragment:_M,packing:vM,premultiplied_alpha_fragment:xM,project_vertex:yM,dithering_fragment:SM,dithering_pars_fragment:MM,roughnessmap_fragment:EM,roughnessmap_pars_fragment:TM,shadowmap_pars_fragment:wM,shadowmap_pars_vertex:AM,shadowmap_vertex:RM,shadowmask_pars_fragment:CM,skinbase_vertex:bM,skinning_pars_vertex:PM,skinning_vertex:LM,skinnormal_vertex:NM,specularmap_fragment:DM,specularmap_pars_fragment:UM,tonemapping_fragment:IM,tonemapping_pars_fragment:FM,transmission_fragment:OM,transmission_pars_fragment:zM,uv_pars_fragment:kM,uv_pars_vertex:BM,uv_vertex:HM,worldpos_vertex:GM,background_vert:VM,background_frag:WM,backgroundCube_vert:jM,backgroundCube_frag:XM,cube_vert:YM,cube_frag:qM,depth_vert:$M,depth_frag:KM,distanceRGBA_vert:JM,distanceRGBA_frag:ZM,equirect_vert:QM,equirect_frag:eE,linedashed_vert:tE,linedashed_frag:nE,meshbasic_vert:iE,meshbasic_frag:rE,meshlambert_vert:sE,meshlambert_frag:oE,meshmatcap_vert:aE,meshmatcap_frag:lE,meshnormal_vert:cE,meshnormal_frag:uE,meshphong_vert:dE,meshphong_frag:hE,meshphysical_vert:fE,meshphysical_frag:pE,meshtoon_vert:mE,meshtoon_frag:gE,points_vert:_E,points_frag:vE,shadow_vert:xE,shadow_frag:yE,sprite_vert:SE,sprite_frag:ME},ce={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Qn={basic:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:$t([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:$t([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:$t([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:$t([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:$t([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:$t([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:$t([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:$t([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:$t([ce.common,ce.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:$t([ce.lights,ce.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Qn.physical={uniforms:$t([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const xa={r:0,b:0,g:0};function EE(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function v(m,u){let g=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?n:e).get(_)),_===null?x(a,l):_&&_.isColor&&(x(_,1),g=!0);const y=t.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Pl)?(d===void 0&&(d=new Pe(new Vn(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:Ts(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=rt.getTransfer(_.colorSpace)!==lt,(f!==_||h!==_.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=_,h=_.version,p=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Pe(new Yd(2,2),new Ar({name:"BackgroundMaterial",uniforms:Ts(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=rt.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,u){m.getRGB(xa,w0(t)),i.buffers.color.setClear(xa.r,xa.g,xa.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:v}}function TE(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,d=!1;function f(N,B,$,F,P){let I=!1;if(o){const D=x(F,$,B);c!==D&&(c=D,p(c.object)),I=u(N,F,$,P),I&&g(N,F,$,P)}else{const D=B.wireframe===!0;(c.geometry!==F.id||c.program!==$.id||c.wireframe!==D)&&(c.geometry=F.id,c.program=$.id,c.wireframe=D,I=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(I||d)&&(d=!1,U(N,B,$,F),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function v(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function x(N,B,$){const F=$.wireframe===!0;let P=a[N.id];P===void 0&&(P={},a[N.id]=P);let I=P[B.id];I===void 0&&(I={},P[B.id]=I);let D=I[F];return D===void 0&&(D=m(h()),I[F]=D),D}function m(N){const B=[],$=[],F=[];for(let P=0;P<r;P++)B[P]=0,$[P]=0,F[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:F,object:N,attributes:{},index:null}}function u(N,B,$,F){const P=c.attributes,I=B.attributes;let D=0;const j=$.getAttributes();for(const Z in j)if(j[Z].location>=0){const J=P[Z];let oe=I[Z];if(oe===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),J===void 0||J.attribute!==oe||oe&&J.data!==oe.data)return!0;D++}return c.attributesNum!==D||c.index!==F}function g(N,B,$,F){const P={},I=B.attributes;let D=0;const j=$.getAttributes();for(const Z in j)if(j[Z].location>=0){let J=I[Z];J===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));const oe={};oe.attribute=J,J&&J.data&&(oe.data=J.data),P[Z]=oe,D++}c.attributes=P,c.attributesNum=D,c.index=F}function _(){const N=c.newAttributes;for(let B=0,$=N.length;B<$;B++)N[B]=0}function y(N){b(N,0)}function b(N,B){const $=c.newAttributes,F=c.enabledAttributes,P=c.attributeDivisors;$[N]=1,F[N]===0&&(t.enableVertexAttribArray(N),F[N]=1),P[N]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,B),P[N]=B)}function C(){const N=c.newAttributes,B=c.enabledAttributes;for(let $=0,F=B.length;$<F;$++)B[$]!==N[$]&&(t.disableVertexAttribArray($),B[$]=0)}function R(N,B,$,F,P,I,D){D===!0?t.vertexAttribIPointer(N,B,$,P,I):t.vertexAttribPointer(N,B,$,F,P,I)}function U(N,B,$,F){if(i.isWebGL2===!1&&(N.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const P=F.attributes,I=$.getAttributes(),D=B.defaultAttributeValues;for(const j in I){const Z=I[j];if(Z.location>=0){let q=P[j];if(q===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(q=N.instanceColor)),q!==void 0){const J=q.normalized,oe=q.itemSize,ge=n.get(q);if(ge===void 0)continue;const he=ge.buffer,Ue=ge.type,Re=ge.bytesPerElement,we=i.isWebGL2===!0&&(Ue===t.INT||Ue===t.UNSIGNED_INT||q.gpuType===o0);if(q.isInterleavedBufferAttribute){const $e=q.data,H=$e.stride,Tt=q.offset;if($e.isInstancedInterleavedBuffer){for(let Te=0;Te<Z.locationSize;Te++)b(Z.location+Te,$e.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let Te=0;Te<Z.locationSize;Te++)y(Z.location+Te);t.bindBuffer(t.ARRAY_BUFFER,he);for(let Te=0;Te<Z.locationSize;Te++)R(Z.location+Te,oe/Z.locationSize,Ue,J,H*Re,(Tt+oe/Z.locationSize*Te)*Re,we)}else{if(q.isInstancedBufferAttribute){for(let $e=0;$e<Z.locationSize;$e++)b(Z.location+$e,q.meshPerAttribute);N.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let $e=0;$e<Z.locationSize;$e++)y(Z.location+$e);t.bindBuffer(t.ARRAY_BUFFER,he);for(let $e=0;$e<Z.locationSize;$e++)R(Z.location+$e,oe/Z.locationSize,Ue,J,oe*Re,oe/Z.locationSize*$e*Re,we)}}else if(D!==void 0){const J=D[j];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(Z.location,J);break;case 3:t.vertexAttrib3fv(Z.location,J);break;case 4:t.vertexAttrib4fv(Z.location,J);break;default:t.vertexAttrib1fv(Z.location,J)}}}}C()}function E(){Y();for(const N in a){const B=a[N];for(const $ in B){const F=B[$];for(const P in F)v(F[P].object),delete F[P];delete B[$]}delete a[N]}}function T(N){if(a[N.id]===void 0)return;const B=a[N.id];for(const $ in B){const F=B[$];for(const P in F)v(F[P].object),delete F[P];delete B[$]}delete a[N.id]}function k(N){for(const B in a){const $=a[B];if($[N.id]===void 0)continue;const F=$[N.id];for(const P in F)v(F[P].object),delete F[P];delete $[N.id]}}function Y(){te(),d=!0,c!==l&&(c=l,p(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:te,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:y,disableUnusedAttributes:C}}function wE(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let p,v;if(r)p=t,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h;v++)this.render(d[v],f[v]);else{p.multiDrawArraysWEBGL(s,d,0,f,0,h);let v=0;for(let x=0;x<h;x++)v+=f[x];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function AE(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=o||e.has("OES_texture_float"),b=_&&y,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:C}}function RE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new lr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?d(null):c();else{const g=s?0:i,_=g*4;let y=u.clippingState||null;l.value=y,y=d(v,h,_,p);for(let b=0;b!==_;++b)y[b]=n[b];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const u=p+x*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,y=p;_!==x;++_,y+=4)o.copy(f[_]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function CE(t){let e=new WeakMap;function n(o,a){return a===Bu?o.mapping=Ss:a===Hu&&(o.mapping=Ms),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bu||a===Hu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new By(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class b0 extends A0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const rs=4,dp=[.125,.215,.35,.446,.526,.582],dr=20,Oc=new b0,hp=new Je;let zc=null,kc=0,Bc=0;const cr=(1+Math.sqrt(5))/2,jr=1/cr,fp=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,cr,jr),new z(0,cr,-jr),new z(jr,0,cr),new z(-jr,0,cr),new z(cr,jr,0),new z(-cr,jr,0)];class pp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){zc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,kc,Bc),e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ss||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:wo,format:jn,colorSpace:Si,depthBuffer:!1},r=mp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bE(s)),this._blurMaterial=PE(s,e,n)}return r}_compileMaterial(e){const n=new Pe(this._lodPlanes[0],e);this._renderer.compile(n,Oc)}_sceneToCubeUV(e,n,i,r){const a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(hp),d.toneMapping=Xi,d.autoClear=!1;const p=new jd({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),v=new Pe(new Vn,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(hp),x=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;ya(r,g*_,u>2?_:0,_,_),d.setRenderTarget(r),x&&d.render(v,a),d.render(e,a)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ss||e.mapping===Ms;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Oc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fp[(r-1)%fp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Pe(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*dr-1),x=s/v,m=isFinite(s)?1+Math.floor(d*x):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const u=[];let g=0;for(let R=0;R<dr;++R){const U=R/x,E=Math.exp(-U*U/2);u.push(E),R===0?g+=E:R<m&&(g+=2*E)}for(let R=0;R<u.length;R++)u[R]=u[R]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const y=this._sizeLods[r],b=3*y*(r>_-rs?r-_+rs:0),C=4*(this._cubeSize-y);ya(n,b,C,3*y,2*y),l.setRenderTarget(n),l.render(f,Oc)}}function bE(t){const e=[],n=[],i=[];let r=t;const s=t-rs+1+dp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-rs?l=dp[o-t+rs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,v=6,x=3,m=2,u=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),y=new Float32Array(u*v*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,U=C>2?0:-1,E=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];g.set(E,x*v*C),_.set(h,m*v*C);const T=[C,C,C,C,C,C];y.set(T,u*v*C)}const b=new Dn;b.setAttribute("position",new qn(g,x)),b.setAttribute("uv",new qn(_,m)),b.setAttribute("faceIndex",new qn(y,u)),e.push(b),r>rs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function mp(t,e,n){const i=new wr(t,e,n);return i.texture.mapping=Pl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function PE(t,e,n){const i=new Float32Array(dr),r=new z(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function gp(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function _p(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bu||l===Hu,d=l===Ss||l===Ms;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new pp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new pp(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function NE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function DE(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const x=p[v];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let _=0,y=g.length;_<y;_+=3){const b=g[_+0],C=g[_+1],R=g[_+2];h.push(b,C,C,R,R,b)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,y=g.length/3-1;_<y;_+=3){const b=_+0,C=_+1,R=_+2;h.push(b,C,C,R,R,b)}}else return;const m=new(g0(h)?T0:E0)(h,1);m.version=x;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function UE(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function d(p,v){t.drawElements(s,v,a,p*l),n.update(v,s,1)}function f(p,v,x){if(x===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,v,a,p*l,x),n.update(v,s,x)}function h(p,v,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<x;u++)this.render(p[u]/l,v[u]);else{m.multiDrawElementsWEBGL(s,v,0,a,p,0,x);let u=0;for(let g=0;g<x;g++)u+=v[g];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function IE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function FE(t,e){return t[0]-e[0]}function OE(t,e){return Math.abs(e[1])-Math.abs(t[1])}function zE(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let m=s.get(d);if(m===void 0||m.count!==x){let B=function(){te.dispose(),s.delete(d),d.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const _=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let E=0;_===!0&&(E=1),y===!0&&(E=2),b===!0&&(E=3);let T=d.attributes.position.count*E,k=1;T>e.maxTextureSize&&(k=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const Y=new Float32Array(T*k*4*x),te=new x0(Y,T,k,x);te.type=Fi,te.needsUpdate=!0;const N=E*4;for(let $=0;$<x;$++){const F=C[$],P=R[$],I=U[$],D=T*k*4*$;for(let j=0;j<F.count;j++){const Z=j*N;_===!0&&(o.fromBufferAttribute(F,j),Y[D+Z+0]=o.x,Y[D+Z+1]=o.y,Y[D+Z+2]=o.z,Y[D+Z+3]=0),y===!0&&(o.fromBufferAttribute(P,j),Y[D+Z+4]=o.x,Y[D+Z+5]=o.y,Y[D+Z+6]=o.z,Y[D+Z+7]=0),b===!0&&(o.fromBufferAttribute(I,j),Y[D+Z+8]=o.x,Y[D+Z+9]=o.y,Y[D+Z+10]=o.z,Y[D+Z+11]=I.itemSize===4?o.w:1)}}m={count:x,texture:te,size:new Ze(T,k)},s.set(d,m),d.addEventListener("dispose",B)}let u=0;for(let _=0;_<h.length;_++)u+=h[_];const g=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const v=h===void 0?0:h.length;let x=i[d.id];if(x===void 0||x.length!==v){x=[];for(let y=0;y<v;y++)x[y]=[y,0];i[d.id]=x}for(let y=0;y<v;y++){const b=x[y];b[0]=y,b[1]=h[y]}x.sort(OE);for(let y=0;y<8;y++)y<v&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(FE);const m=d.morphAttributes.position,u=d.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const b=a[y],C=b[0],R=b[1];C!==Number.MAX_SAFE_INTEGER&&R?(m&&d.getAttribute("morphTarget"+y)!==m[C]&&d.setAttribute("morphTarget"+y,m[C]),u&&d.getAttribute("morphNormal"+y)!==u[C]&&d.setAttribute("morphNormal"+y,u[C]),r[y]=R,g+=R):(m&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),u&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),r[y]=0)}const _=d.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function kE(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class P0 extends xn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:vr,d!==vr&&d!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===vr&&(i=Ii),i===void 0&&d===Es&&(i=_r),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const L0=new xn,N0=new P0(1,1);N0.compareFunction=m0;const D0=new x0,U0=new Ey,I0=new R0,vp=[],xp=[],yp=new Float32Array(16),Sp=new Float32Array(9),Mp=new Float32Array(4);function Ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=vp[r];if(s===void 0&&(s=new Float32Array(r),vp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ul(t,e){let n=xp[e];n===void 0&&(n=new Int32Array(e),xp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function BE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function WE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Mp.set(i),t.uniformMatrix2fv(this.addr,!1,Mp),bt(n,i)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Sp.set(i),t.uniformMatrix3fv(this.addr,!1,Sp),bt(n,i)}}function XE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;yp.set(i),t.uniformMatrix4fv(this.addr,!1,yp),bt(n,i)}}function YE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function JE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function e1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function t1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?N0:L0;n.setTexture2D(e||s,r)}function n1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||U0,r)}function i1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||I0,r)}function r1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||D0,r)}function s1(t){switch(t){case 5126:return BE;case 35664:return HE;case 35665:return GE;case 35666:return VE;case 35674:return WE;case 35675:return jE;case 35676:return XE;case 5124:case 35670:return YE;case 35667:case 35671:return qE;case 35668:case 35672:return $E;case 35669:case 35673:return KE;case 5125:return JE;case 36294:return ZE;case 36295:return QE;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return r1}}function o1(t,e){t.uniform1fv(this.addr,e)}function a1(t,e){const n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function l1(t,e){const n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function c1(t,e){const n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function u1(t,e){const n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function d1(t,e){const n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function h1(t,e){const n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function f1(t,e){t.uniform1iv(this.addr,e)}function p1(t,e){t.uniform2iv(this.addr,e)}function m1(t,e){t.uniform3iv(this.addr,e)}function g1(t,e){t.uniform4iv(this.addr,e)}function _1(t,e){t.uniform1uiv(this.addr,e)}function v1(t,e){t.uniform2uiv(this.addr,e)}function x1(t,e){t.uniform3uiv(this.addr,e)}function y1(t,e){t.uniform4uiv(this.addr,e)}function S1(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||L0,s[o])}function M1(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||U0,s[o])}function E1(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||I0,s[o])}function T1(t,e,n){const i=this.cache,r=e.length,s=Ul(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||D0,s[o])}function w1(t){switch(t){case 5126:return o1;case 35664:return a1;case 35665:return l1;case 35666:return c1;case 35674:return u1;case 35675:return d1;case 35676:return h1;case 5124:case 35670:return f1;case 35667:case 35671:return p1;case 35668:case 35672:return m1;case 35669:case 35673:return g1;case 5125:return _1;case 36294:return v1;case 36295:return x1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return T1}}class A1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=s1(n.type)}}class R1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=w1(n.type)}}class C1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Hc=/(\w+)(\])?(\[|\.)?/g;function Ep(t,e){t.seq.push(e),t.map[e.id]=e}function b1(t,e,n){const i=t.name,r=i.length;for(Hc.lastIndex=0;;){const s=Hc.exec(i),o=Hc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ep(n,c===void 0?new A1(a,t,e):new R1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new C1(a),Ep(n,f)),n=f}}}class Fa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);b1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Tp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const P1=37297;let L1=0;function N1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function D1(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===ul&&n===cl?i="LinearDisplayP3ToLinearSRGB":e===cl&&n===ul&&(i="LinearSRGBToLinearDisplayP3"),t){case Si:case Ll:return[i,"LinearTransferOETF"];case zt:case Wd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function wp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+N1(t.getShaderSource(e),o)}else return r}function U1(t,e){const n=D1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function I1(t,e){let n;switch(e){case Yx:n="Linear";break;case qx:n="Reinhard";break;case $x:n="OptimizedCineon";break;case r0:n="ACESFilmic";break;case Jx:n="AgX";break;case Kx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function F1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function O1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ss).join(`
`)}function z1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function k1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ss(t){return t!==""}function Ap(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xu(t){return t.replace(B1,G1)}const H1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function G1(t,e){let n=He[e];if(n===void 0){const i=H1.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xu(n)}const V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cp(t){return t.replace(V1,W1)}function W1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===t0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===n0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function X1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ss:case Ms:e="ENVMAP_TYPE_CUBE";break;case Pl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function q1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case i0:e="ENVMAP_BLENDING_MULTIPLY";break;case jx:e="ENVMAP_BLENDING_MIX";break;case Xx:e="ENVMAP_BLENDING_ADD";break}return e}function $1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function K1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=j1(n),c=X1(n),d=Y1(n),f=q1(n),h=$1(n),p=n.isWebGL2?"":F1(n),v=O1(n),x=z1(s),m=r.createProgram();let u,g,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ss).join(`
`),u.length>0&&(u+=`
`),g=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ss).join(`
`),g.length>0&&(g+=`
`)):(u=[bp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),g=[p,bp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xi?"#define TONE_MAPPING":"",n.toneMapping!==Xi?He.tonemapping_pars_fragment:"",n.toneMapping!==Xi?I1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,U1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ss).join(`
`)),o=Xu(o),o=Ap(o,n),o=Rp(o,n),a=Xu(a),a=Ap(a,n),a=Rp(a,n),o=Cp(o),a=Cp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=_+u+o,b=_+g+a,C=Tp(r,r.VERTEX_SHADER,y),R=Tp(r,r.FRAGMENT_SHADER,b);r.attachShader(m,C),r.attachShader(m,R),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function U(Y){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(C).trim(),B=r.getShaderInfoLog(R).trim();let $=!0,F=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,C,R);else{const P=wp(r,C,"vertex"),I=wp(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+P+`
`+I)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(N===""||B==="")&&(F=!1);F&&(Y.diagnostics={runnable:$,programLog:te,vertexShader:{log:N,prefix:u},fragmentShader:{log:B,prefix:g}})}r.deleteShader(C),r.deleteShader(R),E=new Fa(r,m),T=k1(r,m)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(m,P1)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=L1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=R,this}let J1=0;class Z1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Q1(e),n.set(e,i)),i}}class Q1{constructor(e){this.id=J1++,this.code=e,this.usedTimes=0}}function eT(t,e,n,i,r,s,o){const a=new S0,l=new Z1,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function m(E,T,k,Y,te){const N=Y.fog,B=te.geometry,$=E.isMeshStandardMaterial?Y.environment:null,F=(E.isMeshStandardMaterial?n:e).get(E.envMap||$),P=F&&F.mapping===Pl?F.image.height:null,I=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const D=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,j=D!==void 0?D.length:0;let Z=0;B.morphAttributes.position!==void 0&&(Z=1),B.morphAttributes.normal!==void 0&&(Z=2),B.morphAttributes.color!==void 0&&(Z=3);let q,J,oe,ge;if(I){const It=Qn[I];q=It.vertexShader,J=It.fragmentShader}else q=E.vertexShader,J=E.fragmentShader,l.update(E),oe=l.getVertexShaderID(E),ge=l.getFragmentShaderID(E);const he=t.getRenderTarget(),Ue=te.isInstancedMesh===!0,Re=te.isBatchedMesh===!0,we=!!E.map,$e=!!E.matcap,H=!!F,Tt=!!E.aoMap,Te=!!E.lightMap,Ne=!!E.bumpMap,_e=!!E.normalMap,st=!!E.displacementMap,Ie=!!E.emissiveMap,A=!!E.metalnessMap,M=!!E.roughnessMap,G=E.anisotropy>0,Q=E.clearcoat>0,ee=E.iridescence>0,ne=E.sheen>0,se=E.transmission>0,ue=G&&!!E.anisotropyMap,me=Q&&!!E.clearcoatMap,Ae=Q&&!!E.clearcoatNormalMap,Fe=Q&&!!E.clearcoatRoughnessMap,ie=ee&&!!E.iridescenceMap,Ve=ee&&!!E.iridescenceThicknessMap,Be=ne&&!!E.sheenColorMap,Le=ne&&!!E.sheenRoughnessMap,Ee=!!E.specularMap,ae=!!E.specularColorMap,be=!!E.specularIntensityMap,Ye=se&&!!E.transmissionMap,et=se&&!!E.thicknessMap,ze=!!E.gradientMap,le=!!E.alphaMap,L=E.alphaTest>0,de=!!E.alphaHash,K=!!E.extensions,Se=!!B.attributes.uv1,ve=!!B.attributes.uv2,Qe=!!B.attributes.uv3;let tt=Xi;return E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(tt=t.toneMapping),{isWebGL2:d,shaderID:I,shaderType:E.type,shaderName:E.name,vertexShader:q,fragmentShader:J,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Re,instancing:Ue,instancingColor:Ue&&te.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Si,map:we,matcap:$e,envMap:H,envMapMode:H&&F.mapping,envMapCubeUVHeight:P,aoMap:Tt,lightMap:Te,bumpMap:Ne,normalMap:_e,displacementMap:h&&st,emissiveMap:Ie,normalMapObjectSpace:_e&&E.normalMapType===cy,normalMapTangentSpace:_e&&E.normalMapType===p0,metalnessMap:A,roughnessMap:M,anisotropy:G,anisotropyMap:ue,clearcoat:Q,clearcoatMap:me,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Fe,iridescence:ee,iridescenceMap:ie,iridescenceThicknessMap:Ve,sheen:ne,sheenColorMap:Be,sheenRoughnessMap:Le,specularMap:Ee,specularColorMap:ae,specularIntensityMap:be,transmission:se,transmissionMap:Ye,thicknessMap:et,gradientMap:ze,opaque:E.transparent===!1&&E.blending===hs,alphaMap:le,alphaTest:L,alphaHash:de,combine:E.combine,mapUv:we&&x(E.map.channel),aoMapUv:Tt&&x(E.aoMap.channel),lightMapUv:Te&&x(E.lightMap.channel),bumpMapUv:Ne&&x(E.bumpMap.channel),normalMapUv:_e&&x(E.normalMap.channel),displacementMapUv:st&&x(E.displacementMap.channel),emissiveMapUv:Ie&&x(E.emissiveMap.channel),metalnessMapUv:A&&x(E.metalnessMap.channel),roughnessMapUv:M&&x(E.roughnessMap.channel),anisotropyMapUv:ue&&x(E.anisotropyMap.channel),clearcoatMapUv:me&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(E.sheenRoughnessMap.channel),specularMapUv:Ee&&x(E.specularMap.channel),specularColorMapUv:ae&&x(E.specularColorMap.channel),specularIntensityMapUv:be&&x(E.specularIntensityMap.channel),transmissionMapUv:Ye&&x(E.transmissionMap.channel),thicknessMapUv:et&&x(E.thicknessMap.channel),alphaMapUv:le&&x(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(_e||G),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:ve,vertexUv3s:Qe,pointsUvs:te.isPoints===!0&&!!B.attributes.uv&&(we||le),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:te.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Z,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:we&&E.map.isVideoTexture===!0&&rt.getTransfer(E.map.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===hi,flipSided:E.side===dn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:K&&E.extensions.derivatives===!0,extensionFragDepth:K&&E.extensions.fragDepth===!0,extensionDrawBuffers:K&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:K&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:K&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)T.push(k),T.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(g(T,E),_(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function g(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function _(E,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function y(E){const T=v[E.type];let k;if(T){const Y=Qn[T];k=Fy.clone(Y.uniforms)}else k=E.uniforms;return k}function b(E,T){let k;for(let Y=0,te=c.length;Y<te;Y++){const N=c[Y];if(N.cacheKey===T){k=N,++k.usedTimes;break}}return k===void 0&&(k=new K1(t,T,E,s),c.push(k)),k}function C(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function R(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:b,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:U}}function tT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function nT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Pp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Lp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,v,x,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=x,u.group=m),e++,u}function a(f,h,p,v,x,m){const u=o(f,h,p,v,x,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,v,x,m){const u=o(f,h,p,v,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||nT),i.length>1&&i.sort(h||Pp),r.length>1&&r.sort(h||Pp)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function iT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Lp,t.set(i,[o])):r>=s.length?(o=new Lp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function rT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Je};break;case"SpotLight":n={position:new z,direction:new z,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function sT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oT=0;function aT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lT(t,e){const n=new rT,i=sT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new z);const s=new z,o=new Et,a=new Et;function l(d,f){let h=0,p=0,v=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let x=0,m=0,u=0,g=0,_=0,y=0,b=0,C=0,R=0,U=0,E=0;d.sort(aT);const T=f===!0?Math.PI:1;for(let Y=0,te=d.length;Y<te;Y++){const N=d[Y],B=N.color,$=N.intensity,F=N.distance,P=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=B.r*$*T,p+=B.g*$*T,v+=B.b*$*T;else if(N.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(N.sh.coefficients[I],$);E++}else if(N.isDirectionalLight){const I=n.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const D=N.shadow,j=i.get(N);j.shadowBias=D.bias,j.shadowNormalBias=D.normalBias,j.shadowRadius=D.radius,j.shadowMapSize=D.mapSize,r.directionalShadow[x]=j,r.directionalShadowMap[x]=P,r.directionalShadowMatrix[x]=N.shadow.matrix,y++}r.directional[x]=I,x++}else if(N.isSpotLight){const I=n.get(N);I.position.setFromMatrixPosition(N.matrixWorld),I.color.copy(B).multiplyScalar($*T),I.distance=F,I.coneCos=Math.cos(N.angle),I.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),I.decay=N.decay,r.spot[u]=I;const D=N.shadow;if(N.map&&(r.spotLightMap[R]=N.map,R++,D.updateMatrices(N),N.castShadow&&U++),r.spotLightMatrix[u]=D.matrix,N.castShadow){const j=i.get(N);j.shadowBias=D.bias,j.shadowNormalBias=D.normalBias,j.shadowRadius=D.radius,j.shadowMapSize=D.mapSize,r.spotShadow[u]=j,r.spotShadowMap[u]=P,C++}u++}else if(N.isRectAreaLight){const I=n.get(N);I.color.copy(B).multiplyScalar($),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),r.rectArea[g]=I,g++}else if(N.isPointLight){const I=n.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity*T),I.distance=N.distance,I.decay=N.decay,N.castShadow){const D=N.shadow,j=i.get(N);j.shadowBias=D.bias,j.shadowNormalBias=D.normalBias,j.shadowRadius=D.radius,j.shadowMapSize=D.mapSize,j.shadowCameraNear=D.camera.near,j.shadowCameraFar=D.camera.far,r.pointShadow[m]=j,r.pointShadowMap[m]=P,r.pointShadowMatrix[m]=N.shadow.matrix,b++}r.point[m]=I,m++}else if(N.isHemisphereLight){const I=n.get(N);I.skyColor.copy(N.color).multiplyScalar($*T),I.groundColor.copy(N.groundColor).multiplyScalar($*T),r.hemi[_]=I,_++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const k=r.hash;(k.directionalLength!==x||k.pointLength!==m||k.spotLength!==u||k.rectAreaLength!==g||k.hemiLength!==_||k.numDirectionalShadows!==y||k.numPointShadows!==b||k.numSpotShadows!==C||k.numSpotMaps!==R||k.numLightProbes!==E)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=g,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+R-U,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=E,k.directionalLength=x,k.pointLength=m,k.spotLength=u,k.rectAreaLength=g,k.hemiLength=_,k.numDirectionalShadows=y,k.numPointShadows=b,k.numSpotShadows=C,k.numSpotMaps=R,k.numLightProbes=E,r.version=oT++)}function c(d,f){let h=0,p=0,v=0,x=0,m=0;const u=f.matrixWorldInverse;for(let g=0,_=d.length;g<_;g++){const y=d[g];if(y.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),h++}else if(y.isSpotLight){const b=r.spot[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),v++}else if(y.isRectAreaLight){const b=r.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),a.identity(),o.copy(y.matrixWorld),o.premultiply(u),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),p++}else if(y.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function Np(t,e){const n=new lT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Np(t,e),n.set(s,[l])):o>=a.length?(l=new Np(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class uT extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dT extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pT(t,e,n){let i=new Xd;const r=new Ze,s=new Ze,o=new Dt,a=new uT({depthPacking:ly}),l=new dT,c={},d=n.maxTextureSize,f={[Ki]:dn,[dn]:Ki,[hi]:hi},h=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:hT,fragmentShader:fT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Dn;v.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Pe(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=t0;let u=this.type;this.render=function(C,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(ji),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const te=u!==ci&&this.type===ci,N=u===ci&&this.type!==ci;for(let B=0,$=C.length;B<$;B++){const F=C[B],P=F.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const I=P.getFrameExtents();if(r.multiply(I),s.copy(P.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/I.x),r.x=s.x*I.x,P.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/I.y),r.y=s.y*I.y,P.mapSize.y=s.y)),P.map===null||te===!0||N===!0){const j=this.type!==ci?{minFilter:Zt,magFilter:Zt}:{};P.map!==null&&P.map.dispose(),P.map=new wr(r.x,r.y,j),P.map.texture.name=F.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const D=P.getViewportCount();for(let j=0;j<D;j++){const Z=P.getViewport(j);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),Y.viewport(o),P.updateMatrices(F,j),i=P.getFrustum(),y(R,U,P.camera,F,this.type)}P.isPointLightShadow!==!0&&this.type===ci&&g(P,U),P.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,T,k)};function g(C,R){const U=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new wr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(R,null,U,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(R,null,U,p,x,null)}function _(C,R,U,E){let T=null;const k=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(k!==void 0)T=k;else if(T=U.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=T.uuid,te=R.uuid;let N=c[Y];N===void 0&&(N={},c[Y]=N);let B=N[te];B===void 0&&(B=T.clone(),N[te]=B,R.addEventListener("dispose",b)),T=B}if(T.visible=R.visible,T.wireframe=R.wireframe,E===ci?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:f[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=t.properties.get(T);Y.light=U}return T}function y(C,R,U,E,T){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===ci)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const te=e.update(C),N=C.material;if(Array.isArray(N)){const B=te.groups;for(let $=0,F=B.length;$<F;$++){const P=B[$],I=N[P.materialIndex];if(I&&I.visible){const D=_(C,I,E,T);C.onBeforeShadow(t,C,R,U,te,D,P),t.renderBufferDirect(U,null,te,D,C,P),C.onAfterShadow(t,C,R,U,te,D,P)}}}else if(N.visible){const B=_(C,N,E,T);C.onBeforeShadow(t,C,R,U,te,B,null),t.renderBufferDirect(U,null,te,B,C,null),C.onAfterShadow(t,C,R,U,te,B,null)}}const Y=C.children;for(let te=0,N=Y.length;te<N;te++)y(Y[te],R,U,E,T)}function b(C){C.target.removeEventListener("dispose",b);for(const U in c){const E=c[U],T=C.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}function mT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const de=new Dt;let K=null;const Se=new Dt(0,0,0,0);return{setMask:function(ve){K!==ve&&!L&&(t.colorMask(ve,ve,ve,ve),K=ve)},setLocked:function(ve){L=ve},setClear:function(ve,Qe,tt,nt,It){It===!0&&(ve*=nt,Qe*=nt,tt*=nt),de.set(ve,Qe,tt,nt),Se.equals(de)===!1&&(t.clearColor(ve,Qe,tt,nt),Se.copy(de))},reset:function(){L=!1,K=null,Se.set(-1,0,0,0)}}}function s(){let L=!1,de=null,K=null,Se=null;return{setTest:function(ve){ve?Re(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(ve){de!==ve&&!L&&(t.depthMask(ve),de=ve)},setFunc:function(ve){if(K!==ve){switch(ve){case zx:t.depthFunc(t.NEVER);break;case kx:t.depthFunc(t.ALWAYS);break;case Bx:t.depthFunc(t.LESS);break;case al:t.depthFunc(t.LEQUAL);break;case Hx:t.depthFunc(t.EQUAL);break;case Gx:t.depthFunc(t.GEQUAL);break;case Vx:t.depthFunc(t.GREATER);break;case Wx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=ve}},setLocked:function(ve){L=ve},setClear:function(ve){Se!==ve&&(t.clearDepth(ve),Se=ve)},reset:function(){L=!1,de=null,K=null,Se=null}}}function o(){let L=!1,de=null,K=null,Se=null,ve=null,Qe=null,tt=null,nt=null,It=null;return{setTest:function(qe){L||(qe?Re(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(qe){de!==qe&&!L&&(t.stencilMask(qe),de=qe)},setFunc:function(qe,vt,Kn){(K!==qe||Se!==vt||ve!==Kn)&&(t.stencilFunc(qe,vt,Kn),K=qe,Se=vt,ve=Kn)},setOp:function(qe,vt,Kn){(Qe!==qe||tt!==vt||nt!==Kn)&&(t.stencilOp(qe,vt,Kn),Qe=qe,tt=vt,nt=Kn)},setLocked:function(qe){L=qe},setClear:function(qe){It!==qe&&(t.clearStencil(qe),It=qe)},reset:function(){L=!1,de=null,K=null,Se=null,ve=null,Qe=null,tt=null,nt=null,It=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,x=[],m=null,u=!1,g=null,_=null,y=null,b=null,C=null,R=null,U=null,E=new Je(0,0,0),T=0,k=!1,Y=null,te=null,N=null,B=null,$=null;const F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,I=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(D)[1]),P=I>=1):D.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),P=I>=2);let j=null,Z={};const q=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),oe=new Dt().fromArray(q),ge=new Dt().fromArray(J);function he(L,de,K,Se){const ve=new Uint8Array(4),Qe=t.createTexture();t.bindTexture(L,Qe),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<K;tt++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(de,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(de+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return Qe}const Ue={};Ue[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),Ue[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ue[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(t.DEPTH_TEST),l.setFunc(al),Ie(!1),A(ff),Re(t.CULL_FACE),_e(ji);function Re(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function we(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function $e(L,de){return p[L]!==de?(t.bindFramebuffer(L,de),p[L]=de,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=de),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=de)),!0):!1}function H(L,de){let K=x,Se=!1;if(L)if(K=v.get(de),K===void 0&&(K=[],v.set(de,K)),L.isWebGLMultipleRenderTargets){const ve=L.texture;if(K.length!==ve.length||K[0]!==t.COLOR_ATTACHMENT0){for(let Qe=0,tt=ve.length;Qe<tt;Qe++)K[Qe]=t.COLOR_ATTACHMENT0+Qe;K.length=ve.length,Se=!0}}else K[0]!==t.COLOR_ATTACHMENT0&&(K[0]=t.COLOR_ATTACHMENT0,Se=!0);else K[0]!==t.BACK&&(K[0]=t.BACK,Se=!0);Se&&(n.isWebGL2?t.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Tt(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const Te={[ur]:t.FUNC_ADD,[Ex]:t.FUNC_SUBTRACT,[Tx]:t.FUNC_REVERSE_SUBTRACT};if(i)Te[_f]=t.MIN,Te[vf]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Te[_f]=L.MIN_EXT,Te[vf]=L.MAX_EXT)}const Ne={[wx]:t.ZERO,[Ax]:t.ONE,[Rx]:t.SRC_COLOR,[zu]:t.SRC_ALPHA,[Dx]:t.SRC_ALPHA_SATURATE,[Lx]:t.DST_COLOR,[bx]:t.DST_ALPHA,[Cx]:t.ONE_MINUS_SRC_COLOR,[ku]:t.ONE_MINUS_SRC_ALPHA,[Nx]:t.ONE_MINUS_DST_COLOR,[Px]:t.ONE_MINUS_DST_ALPHA,[Ux]:t.CONSTANT_COLOR,[Ix]:t.ONE_MINUS_CONSTANT_COLOR,[Fx]:t.CONSTANT_ALPHA,[Ox]:t.ONE_MINUS_CONSTANT_ALPHA};function _e(L,de,K,Se,ve,Qe,tt,nt,It,qe){if(L===ji){u===!0&&(we(t.BLEND),u=!1);return}if(u===!1&&(Re(t.BLEND),u=!0),L!==Mx){if(L!==g||qe!==k){if((_!==ur||C!==ur)&&(t.blendEquation(t.FUNC_ADD),_=ur,C=ur),qe)switch(L){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pf:t.blendFunc(t.ONE,t.ONE);break;case mf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gf:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case mf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gf:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,b=null,R=null,U=null,E.set(0,0,0),T=0,g=L,k=qe}return}ve=ve||de,Qe=Qe||K,tt=tt||Se,(de!==_||ve!==C)&&(t.blendEquationSeparate(Te[de],Te[ve]),_=de,C=ve),(K!==y||Se!==b||Qe!==R||tt!==U)&&(t.blendFuncSeparate(Ne[K],Ne[Se],Ne[Qe],Ne[tt]),y=K,b=Se,R=Qe,U=tt),(nt.equals(E)===!1||It!==T)&&(t.blendColor(nt.r,nt.g,nt.b,It),E.copy(nt),T=It),g=L,k=!1}function st(L,de){L.side===hi?we(t.CULL_FACE):Re(t.CULL_FACE);let K=L.side===dn;de&&(K=!K),Ie(K),L.blending===hs&&L.transparent===!1?_e(ji):_e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Se=L.stencilWrite;c.setTest(Se),Se&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),G(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Re(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(L){Y!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),Y=L)}function A(L){L!==yx?(Re(t.CULL_FACE),L!==te&&(L===ff?t.cullFace(t.BACK):L===Sx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),te=L}function M(L){L!==N&&(P&&t.lineWidth(L),N=L)}function G(L,de,K){L?(Re(t.POLYGON_OFFSET_FILL),(B!==de||$!==K)&&(t.polygonOffset(de,K),B=de,$=K)):we(t.POLYGON_OFFSET_FILL)}function Q(L){L?Re(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function ee(L){L===void 0&&(L=t.TEXTURE0+F-1),j!==L&&(t.activeTexture(L),j=L)}function ne(L,de,K){K===void 0&&(j===null?K=t.TEXTURE0+F-1:K=j);let Se=Z[K];Se===void 0&&(Se={type:void 0,texture:void 0},Z[K]=Se),(Se.type!==L||Se.texture!==de)&&(j!==K&&(t.activeTexture(K),j=K),t.bindTexture(L,de||Ue[L]),Se.type=L,Se.texture=de)}function se(){const L=Z[j];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(L){oe.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function Ye(L){ge.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ge.copy(L))}function et(L,de){let K=f.get(de);K===void 0&&(K=new WeakMap,f.set(de,K));let Se=K.get(L);Se===void 0&&(Se=t.getUniformBlockIndex(de,L.name),K.set(L,Se))}function ze(L,de){const Se=f.get(de).get(L);d.get(de)!==Se&&(t.uniformBlockBinding(de,Se,L.__bindingPointIndex),d.set(de,Se))}function le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},j=null,Z={},p={},v=new WeakMap,x=[],m=null,u=!1,g=null,_=null,y=null,b=null,C=null,R=null,U=null,E=new Je(0,0,0),T=0,k=!1,Y=null,te=null,N=null,B=null,$=null,oe.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:we,bindFramebuffer:$e,drawBuffers:H,useProgram:Tt,setBlending:_e,setMaterial:st,setFlipSided:Ie,setCullFace:A,setLineWidth:M,setPolygonOffset:G,setScissorTest:Q,activeTexture:ee,bindTexture:ne,unbindTexture:se,compressedTexImage2D:ue,compressedTexImage3D:me,texImage2D:Ee,texImage3D:ae,updateUBOMapping:et,uniformBlockBinding:ze,texStorage2D:Be,texStorage3D:Le,texSubImage2D:Ae,texSubImage3D:Fe,compressedTexSubImage2D:ie,compressedTexSubImage3D:Ve,scissor:be,viewport:Ye,reset:le}}function gT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,M){return p?new OffscreenCanvas(A,M):fl("canvas")}function x(A,M,G,Q){let ee=1;if((A.width>Q||A.height>Q)&&(ee=Q/Math.max(A.width,A.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ne=M?ju:Math.floor,se=ne(ee*A.width),ue=ne(ee*A.height);f===void 0&&(f=v(se,ue));const me=G?v(se,ue):f;return me.width=se,me.height=ue,me.getContext("2d").drawImage(A,0,0,se,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+se+"x"+ue+")."),me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return qf(A.width)&&qf(A.height)}function u(A){return a?!1:A.wrapS!==Wn||A.wrapT!==Wn||A.minFilter!==Zt&&A.minFilter!==Rn}function g(A,M){return A.generateMipmaps&&M&&A.minFilter!==Zt&&A.minFilter!==Rn}function _(A){t.generateMipmap(A)}function y(A,M,G,Q,ee=!1){if(a===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=M;if(M===t.RED&&(G===t.FLOAT&&(ne=t.R32F),G===t.HALF_FLOAT&&(ne=t.R16F),G===t.UNSIGNED_BYTE&&(ne=t.R8)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ne=t.R8UI),G===t.UNSIGNED_SHORT&&(ne=t.R16UI),G===t.UNSIGNED_INT&&(ne=t.R32UI),G===t.BYTE&&(ne=t.R8I),G===t.SHORT&&(ne=t.R16I),G===t.INT&&(ne=t.R32I)),M===t.RG&&(G===t.FLOAT&&(ne=t.RG32F),G===t.HALF_FLOAT&&(ne=t.RG16F),G===t.UNSIGNED_BYTE&&(ne=t.RG8)),M===t.RGBA){const se=ee?ll:rt.getTransfer(Q);G===t.FLOAT&&(ne=t.RGBA32F),G===t.HALF_FLOAT&&(ne=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ne=se===lt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function b(A,M,G){return g(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==Rn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){return A===Zt||A===xf||A===hc?t.NEAREST:t.LINEAR}function R(A){const M=A.target;M.removeEventListener("dispose",R),E(M),M.isVideoTexture&&d.delete(M)}function U(A){const M=A.target;M.removeEventListener("dispose",U),k(M)}function E(A){const M=i.get(A);if(M.__webglInit===void 0)return;const G=A.source,Q=h.get(G);if(Q){const ee=Q[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(A),Object.keys(Q).length===0&&h.delete(G)}i.remove(A)}function T(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const G=A.source,Q=h.get(G);delete Q[M.__cacheKey],o.memory.textures--}function k(A){const M=A.texture,G=i.get(A),Q=i.get(M);if(Q.__webglTexture!==void 0&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(G.__webglFramebuffer[ee]))for(let ne=0;ne<G.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(G.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(G.__webglFramebuffer[ee]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[ee])}else{if(Array.isArray(G.__webglFramebuffer))for(let ee=0;ee<G.__webglFramebuffer.length;ee++)t.deleteFramebuffer(G.__webglFramebuffer[ee]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ee=0;ee<G.__webglColorRenderbuffer.length;ee++)G.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[ee]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ee=0,ne=M.length;ee<ne;ee++){const se=i.get(M[ee]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(A)}let Y=0;function te(){Y=0}function N(){const A=Y;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),Y+=1,A}function B(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function $(A,M){const G=i.get(A);if(A.isVideoTexture&&st(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(G,A,M);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function F(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){oe(G,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function P(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){oe(G,A,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function I(A,M){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ge(G,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const D={[Gu]:t.REPEAT,[Wn]:t.CLAMP_TO_EDGE,[Vu]:t.MIRRORED_REPEAT},j={[Zt]:t.NEAREST,[xf]:t.NEAREST_MIPMAP_NEAREST,[hc]:t.NEAREST_MIPMAP_LINEAR,[Rn]:t.LINEAR,[Zx]:t.LINEAR_MIPMAP_NEAREST,[To]:t.LINEAR_MIPMAP_LINEAR},Z={[uy]:t.NEVER,[gy]:t.ALWAYS,[dy]:t.LESS,[m0]:t.LEQUAL,[hy]:t.EQUAL,[my]:t.GEQUAL,[fy]:t.GREATER,[py]:t.NOTEQUAL};function q(A,M,G){if(G?(t.texParameteri(A,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,D[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,j[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,j[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Wn||M.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,C(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,C(M.minFilter)),M.minFilter!==Zt&&M.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Zt||M.minFilter!==hc&&M.minFilter!==To||M.type===Fi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===wo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function J(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));const Q=M.source;let ee=h.get(Q);ee===void 0&&(ee={},h.set(Q,ee));const ne=B(M);if(ne!==A.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[ne].usedTimes++;const se=ee[A.__cacheKey];se!==void 0&&(ee[A.__cacheKey].usedTimes--,se.usedTimes===0&&T(M)),A.__cacheKey=ne,A.__webglTexture=ee[ne].texture}return G}function oe(A,M,G){let Q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=J(A,M),ne=M.source;n.bindTexture(Q,A.__webglTexture,t.TEXTURE0+G);const se=i.get(ne);if(ne.version!==se.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);const ue=rt.getPrimaries(rt.workingColorSpace),me=M.colorSpace===Cn?null:rt.getPrimaries(M.colorSpace),Ae=M.colorSpace===Cn||ue===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Fe=u(M)&&m(M.image)===!1;let ie=x(M.image,Fe,!1,r.maxTextureSize);ie=Ie(M,ie);const Ve=m(ie)||a,Be=s.convert(M.format,M.colorSpace);let Le=s.convert(M.type),Ee=y(M.internalFormat,Be,Le,M.colorSpace,M.isVideoTexture);q(Q,M,Ve);let ae;const be=M.mipmaps,Ye=a&&M.isVideoTexture!==!0&&Ee!==h0,et=se.__version===void 0||ee===!0,ze=b(M,ie,Ve);if(M.isDepthTexture)Ee=t.DEPTH_COMPONENT,a?M.type===Fi?Ee=t.DEPTH_COMPONENT32F:M.type===Ii?Ee=t.DEPTH_COMPONENT24:M.type===_r?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:M.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===vr&&Ee===t.DEPTH_COMPONENT&&M.type!==Vd&&M.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ii,Le=s.convert(M.type)),M.format===Es&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,M.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=_r,Le=s.convert(M.type))),et&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Ee,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Ee,ie.width,ie.height,0,Be,Le,null));else if(M.isDataTexture)if(be.length>0&&Ve){Ye&&et&&n.texStorage2D(t.TEXTURE_2D,ze,Ee,be[0].width,be[0].height);for(let le=0,L=be.length;le<L;le++)ae=be[le],Ye?n.texSubImage2D(t.TEXTURE_2D,le,0,0,ae.width,ae.height,Be,Le,ae.data):n.texImage2D(t.TEXTURE_2D,le,Ee,ae.width,ae.height,0,Be,Le,ae.data);M.generateMipmaps=!1}else Ye?(et&&n.texStorage2D(t.TEXTURE_2D,ze,Ee,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,Be,Le,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,ie.width,ie.height,0,Be,Le,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Ee,be[0].width,be[0].height,ie.depth);for(let le=0,L=be.length;le<L;le++)ae=be[le],M.format!==jn?Be!==null?Ye?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,ae.width,ae.height,ie.depth,Be,ae.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,Ee,ae.width,ae.height,ie.depth,0,ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,ae.width,ae.height,ie.depth,Be,Le,ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,Ee,ae.width,ae.height,ie.depth,0,Be,Le,ae.data)}else{Ye&&et&&n.texStorage2D(t.TEXTURE_2D,ze,Ee,be[0].width,be[0].height);for(let le=0,L=be.length;le<L;le++)ae=be[le],M.format!==jn?Be!==null?Ye?n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,ae.width,ae.height,Be,ae.data):n.compressedTexImage2D(t.TEXTURE_2D,le,Ee,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage2D(t.TEXTURE_2D,le,0,0,ae.width,ae.height,Be,Le,ae.data):n.texImage2D(t.TEXTURE_2D,le,Ee,ae.width,ae.height,0,Be,Le,ae.data)}else if(M.isDataArrayTexture)Ye?(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Ee,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Be,Le,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,ie.width,ie.height,ie.depth,0,Be,Le,ie.data);else if(M.isData3DTexture)Ye?(et&&n.texStorage3D(t.TEXTURE_3D,ze,Ee,ie.width,ie.height,ie.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Be,Le,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,ie.width,ie.height,ie.depth,0,Be,Le,ie.data);else if(M.isFramebufferTexture){if(et)if(Ye)n.texStorage2D(t.TEXTURE_2D,ze,Ee,ie.width,ie.height);else{let le=ie.width,L=ie.height;for(let de=0;de<ze;de++)n.texImage2D(t.TEXTURE_2D,de,Ee,le,L,0,Be,Le,null),le>>=1,L>>=1}}else if(be.length>0&&Ve){Ye&&et&&n.texStorage2D(t.TEXTURE_2D,ze,Ee,be[0].width,be[0].height);for(let le=0,L=be.length;le<L;le++)ae=be[le],Ye?n.texSubImage2D(t.TEXTURE_2D,le,0,0,Be,Le,ae):n.texImage2D(t.TEXTURE_2D,le,Ee,Be,Le,ae);M.generateMipmaps=!1}else Ye?(et&&n.texStorage2D(t.TEXTURE_2D,ze,Ee,ie.width,ie.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Be,Le,ie)):n.texImage2D(t.TEXTURE_2D,0,Ee,Be,Le,ie);g(M,Ve)&&_(Q),se.__version=ne.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ge(A,M,G){if(M.image.length!==6)return;const Q=J(A,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+G);const ne=i.get(ee);if(ee.version!==ne.__version||Q===!0){n.activeTexture(t.TEXTURE0+G);const se=rt.getPrimaries(rt.workingColorSpace),ue=M.colorSpace===Cn?null:rt.getPrimaries(M.colorSpace),me=M.colorSpace===Cn||se===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ae=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,ie=[];for(let le=0;le<6;le++)!Ae&&!Fe?ie[le]=x(M.image[le],!1,!0,r.maxCubemapSize):ie[le]=Fe?M.image[le].image:M.image[le],ie[le]=Ie(M,ie[le]);const Ve=ie[0],Be=m(Ve)||a,Le=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type),ae=y(M.internalFormat,Le,Ee,M.colorSpace),be=a&&M.isVideoTexture!==!0,Ye=ne.__version===void 0||Q===!0;let et=b(M,Ve,Be);q(t.TEXTURE_CUBE_MAP,M,Be);let ze;if(Ae){be&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,et,ae,Ve.width,Ve.height);for(let le=0;le<6;le++){ze=ie[le].mipmaps;for(let L=0;L<ze.length;L++){const de=ze[L];M.format!==jn?Le!==null?be?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,0,0,de.width,de.height,Le,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,0,0,de.width,de.height,Le,Ee,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L,ae,de.width,de.height,0,Le,Ee,de.data)}}}else{ze=M.mipmaps,be&&Ye&&(ze.length>0&&et++,n.texStorage2D(t.TEXTURE_CUBE_MAP,et,ae,ie[0].width,ie[0].height));for(let le=0;le<6;le++)if(Fe){be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ie[le].width,ie[le].height,Le,Ee,ie[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ae,ie[le].width,ie[le].height,0,Le,Ee,ie[le].data);for(let L=0;L<ze.length;L++){const K=ze[L].image[le].image;be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,0,0,K.width,K.height,Le,Ee,K.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,ae,K.width,K.height,0,Le,Ee,K.data)}}else{be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Le,Ee,ie[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ae,Le,Ee,ie[le]);for(let L=0;L<ze.length;L++){const de=ze[L];be?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,0,0,Le,Ee,de.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,L+1,ae,Le,Ee,de.image[le])}}}g(M,Be)&&_(t.TEXTURE_CUBE_MAP),ne.__version=ee.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function he(A,M,G,Q,ee,ne){const se=s.convert(G.format,G.colorSpace),ue=s.convert(G.type),me=y(G.internalFormat,se,ue,G.colorSpace);if(!i.get(M).__hasExternalTextures){const Fe=Math.max(1,M.width>>ne),ie=Math.max(1,M.height>>ne);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ne,me,Fe,ie,M.depth,0,se,ue,null):n.texImage2D(ee,ne,me,Fe,ie,0,se,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),_e(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,i.get(G).__webglTexture,0,Ne(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,i.get(G).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(A,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let Q=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||_e(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Fi?Q=t.DEPTH_COMPONENT32F:ee.type===Ii&&(Q=t.DEPTH_COMPONENT24));const ne=Ne(M);_e(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,Q,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,Q,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const Q=Ne(M);G&&_e(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,M.width,M.height):_e(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const Q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<Q.length;ee++){const ne=Q[ee],se=s.convert(ne.format,ne.colorSpace),ue=s.convert(ne.type),me=y(ne.internalFormat,se,ue,ne.colorSpace),Ae=Ne(M);G&&_e(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,me,M.width,M.height):_e(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const Q=i.get(M.depthTexture).__webglTexture,ee=Ne(M);if(M.depthTexture.format===vr)_e(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Es)_e(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function we(A){const M=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Re(M.__webglFramebuffer,A)}else if(G){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]=t.createRenderbuffer(),Ue(M.__webglDepthbuffer[Q],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ue(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function $e(A,M,G){const Q=i.get(A);M!==void 0&&he(Q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&we(A)}function H(A){const M=A.texture,G=i.get(A),Q=i.get(M);A.addEventListener("dispose",U),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=M.version,o.memory.textures++);const ee=A.isWebGLCubeRenderTarget===!0,ne=A.isWebGLMultipleRenderTargets===!0,se=m(A)||a;if(ee){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let me=0;me<M.mipmaps.length;me++)G.__webglFramebuffer[ue][me]=t.createFramebuffer()}else G.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)G.__webglFramebuffer[ue]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const ue=A.texture;for(let me=0,Ae=ue.length;me<Ae;me++){const Fe=i.get(ue[me]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&_e(A)===!1){const ue=ne?M:[M];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){const Ae=ue[me];G.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const Fe=s.convert(Ae.format,Ae.colorSpace),ie=s.convert(Ae.type),Ve=y(Ae.internalFormat,Fe,ie,Ae.colorSpace,A.isXRRenderTarget===!0),Be=Ne(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,Ve,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,G.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),q(t.TEXTURE_CUBE_MAP,M,se);for(let ue=0;ue<6;ue++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)he(G.__webglFramebuffer[ue][me],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else he(G.__webglFramebuffer[ue],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(M,se)&&_(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const ue=A.texture;for(let me=0,Ae=ue.length;me<Ae;me++){const Fe=ue[me],ie=i.get(Fe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),q(t.TEXTURE_2D,Fe,se),he(G.__webglFramebuffer,A,Fe,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),g(Fe,se)&&_(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ue=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,Q.__webglTexture),q(ue,M,se),a&&M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)he(G.__webglFramebuffer[me],A,M,t.COLOR_ATTACHMENT0,ue,me);else he(G.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,ue,0);g(M,se)&&_(ue),n.unbindTexture()}A.depthBuffer&&we(A)}function Tt(A){const M=m(A)||a,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,ee=G.length;Q<ee;Q++){const ne=G[Q];if(g(ne,M)){const se=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(ne).__webglTexture;n.bindTexture(se,ue),_(se),n.unbindTexture()}}}function Te(A){if(a&&A.samples>0&&_e(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,Q=A.height;let ee=t.COLOR_BUFFER_BIT;const ne=[],se=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(A),me=A.isWebGLMultipleRenderTargets===!0;if(me)for(let Ae=0;Ae<M.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){ne.push(t.COLOR_ATTACHMENT0+Ae),A.depthBuffer&&ne.push(se);const Fe=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Fe===!1&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),me&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]),Fe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[se]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[se])),me){const ie=i.get(M[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,G,Q,0,0,G,Q,ee,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Ae=0;Ae<M.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,ue.__webglColorRenderbuffer[Ae]);const Fe=i.get(M[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Ne(A){return Math.min(r.maxSamples,A.samples)}function _e(A){const M=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function st(A){const M=o.render.frame;d.get(A)!==M&&(d.set(A,M),A.update())}function Ie(A,M){const G=A.colorSpace,Q=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Wu||G!==Si&&G!==Cn&&(rt.getTransfer(G)===lt?a===!1?e.has("EXT_sRGB")===!0&&Q===jn?(A.format=Wu,A.minFilter=Rn,A.generateMipmaps=!1):M=_0.sRGBToLinear(M):(Q!==jn||ee!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=N,this.resetTextureUnits=te,this.setTexture2D=$,this.setTexture2DArray=F,this.setTexture3D=P,this.setTextureCube=I,this.rebindTextures=$e,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=he,this.useMultisampledRTT=_e}function _T(t,e,n){const i=n.isWebGL2;function r(s,o=Cn){let a;const l=rt.getTransfer(o);if(s===Yi)return t.UNSIGNED_BYTE;if(s===a0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===l0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Qx)return t.BYTE;if(s===ey)return t.SHORT;if(s===Vd)return t.UNSIGNED_SHORT;if(s===o0)return t.INT;if(s===Ii)return t.UNSIGNED_INT;if(s===Fi)return t.FLOAT;if(s===wo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ty)return t.ALPHA;if(s===jn)return t.RGBA;if(s===ny)return t.LUMINANCE;if(s===iy)return t.LUMINANCE_ALPHA;if(s===vr)return t.DEPTH_COMPONENT;if(s===Es)return t.DEPTH_STENCIL;if(s===Wu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ry)return t.RED;if(s===c0)return t.RED_INTEGER;if(s===sy)return t.RG;if(s===u0)return t.RG_INTEGER;if(s===d0)return t.RGBA_INTEGER;if(s===fc||s===pc||s===mc||s===gc)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yf||s===Sf||s===Mf||s===Ef)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===yf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ef)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===h0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Tf||s===wf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Tf)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===wf)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Af||s===Rf||s===Cf||s===bf||s===Pf||s===Lf||s===Nf||s===Df||s===Uf||s===If||s===Ff||s===Of||s===zf||s===kf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Af)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rf)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cf)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bf)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Pf)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Lf)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nf)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Df)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Uf)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===If)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ff)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Of)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===zf)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kf)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===_c||s===Bf||s===Hf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===_c)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===oy||s===Gf||s===Vf||s===Wf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===_c)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Gf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Wf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_r?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class vT extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gt extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xT={type:"move"};class Gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class yT extends Cs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,v=null;const x=n.getContextAttributes();let m=null,u=null;const g=[],_=[],y=new Ze;let b=null;const C=new gn;C.layers.enable(1),C.viewport=new Dt;const R=new gn;R.layers.enable(2),R.viewport=new Dt;const U=[C,R],E=new vT;E.layers.enable(1),E.layers.enable(2);let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=g[q];return J===void 0&&(J=new Gc,g[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=g[q];return J===void 0&&(J=new Gc,g[q]=J),J.getGripSpace()},this.getHand=function(q){let J=g[q];return J===void 0&&(J=new Gc,g[q]=J),J.getHandSpace()};function Y(q){const J=_.indexOf(q.inputSource);if(J===-1)return;const oe=g[J];oe!==void 0&&(oe.update(q.inputSource,q.frame,c||o),oe.dispatchEvent({type:q.type,data:q.inputSource}))}function te(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",N);for(let q=0;q<g.length;q++){const J=_[q];J!==null&&(_[q]=null,g[q].disconnect(J))}T=null,k=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,u=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",te),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new wr(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,oe=null,ge=null;x.depth&&(ge=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=x.stencil?Es:vr,oe=x.stencil?_r:Ii);const he={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(he),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new wr(h.textureWidth,h.textureHeight,{format:jn,type:Yi,depthTexture:new P0(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ue=e.properties.get(u);Ue.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(q){for(let J=0;J<q.removed.length;J++){const oe=q.removed[J],ge=_.indexOf(oe);ge>=0&&(_[ge]=null,g[ge].disconnect(oe))}for(let J=0;J<q.added.length;J++){const oe=q.added[J];let ge=_.indexOf(oe);if(ge===-1){for(let Ue=0;Ue<g.length;Ue++)if(Ue>=_.length){_.push(oe),ge=Ue;break}else if(_[Ue]===null){_[Ue]=oe,ge=Ue;break}if(ge===-1)break}const he=g[ge];he&&he.connect(oe)}}const B=new z,$=new z;function F(q,J,oe){B.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(oe.matrixWorld);const ge=B.distanceTo($),he=J.projectionMatrix.elements,Ue=oe.projectionMatrix.elements,Re=he[14]/(he[10]-1),we=he[14]/(he[10]+1),$e=(he[9]+1)/he[5],H=(he[9]-1)/he[5],Tt=(he[8]-1)/he[0],Te=(Ue[8]+1)/Ue[0],Ne=Re*Tt,_e=Re*Te,st=ge/(-Tt+Te),Ie=st*-Tt;J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(st),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const A=Re+st,M=we+st,G=Ne-Ie,Q=_e+(ge-Ie),ee=$e*we/M*A,ne=H*we/M*A;q.projectionMatrix.makePerspective(G,Q,ee,ne,A,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function P(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;E.near=R.near=C.near=q.near,E.far=R.far=C.far=q.far,(T!==E.near||k!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,k=E.far);const J=q.parent,oe=E.cameras;P(E,J);for(let ge=0;ge<oe.length;ge++)P(oe[ge],J);oe.length===2?F(E,C,R):E.projectionMatrix.copy(C.projectionMatrix),I(q,E,J)};function I(q,J,oe){oe===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(oe.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=hl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let D=null;function j(q,J){if(d=J.getViewerPose(c||o),v=J,d!==null){const oe=d.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let ge=!1;oe.length!==E.cameras.length&&(E.cameras.length=0,ge=!0);for(let he=0;he<oe.length;he++){const Ue=oe[he];let Re=null;if(p!==null)Re=p.getViewport(Ue);else{const $e=f.getViewSubImage(h,Ue);Re=$e.viewport,he===0&&(e.setRenderTargetTextures(u,$e.colorTexture,h.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(u))}let we=U[he];we===void 0&&(we=new gn,we.layers.enable(he),we.viewport=new Dt,U[he]=we),we.matrix.fromArray(Ue.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ue.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Re.x,Re.y,Re.width,Re.height),he===0&&(E.matrix.copy(we.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ge===!0&&E.cameras.push(we)}}for(let oe=0;oe<g.length;oe++){const ge=_[oe],he=g[oe];ge!==null&&he!==void 0&&he.update(ge,J,c||o)}D&&D(q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),v=null}const Z=new C0;Z.setAnimationLoop(j),this.setAnimationLoop=function(q){D=q},this.dispose=function(){}}}function ST(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,w0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,_,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===dn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===dn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const _=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*_,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===dn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function MT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,_){const y=_.program;i.uniformBlockBinding(g,y)}function c(g,_){let y=r[g.id];y===void 0&&(v(g),y=d(g),r[g.id]=y,g.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(g,b);const C=e.render.frame;s[g.id]!==C&&(h(g),s[g.id]=C)}function d(g){const _=f();g.__bindingPointIndex=_;const y=t.createBuffer(),b=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const _=r[g.id],y=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,R=y.length;C<R;C++){const U=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,T=U.length;E<T;E++){const k=U[E];if(p(k,C,E,b)===!0){const Y=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let N=0;for(let B=0;B<te.length;B++){const $=te[B],F=x($);typeof $=="number"||typeof $=="boolean"?(k.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,Y+N,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=0,k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=0,k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=0):($.toArray(k.__data,N),N+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,y,b){const C=g.value,R=_+"_"+y;if(b[R]===void 0)return typeof C=="number"||typeof C=="boolean"?b[R]=C:b[R]=C.clone(),!0;{const U=b[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return b[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function v(g){const _=g.uniforms;let y=0;const b=16;for(let R=0,U=_.length;R<U;R++){const E=Array.isArray(_[R])?_[R]:[_[R]];for(let T=0,k=E.length;T<k;T++){const Y=E[T],te=Array.isArray(Y.value)?Y.value:[Y.value];for(let N=0,B=te.length;N<B;N++){const $=te[N],F=x($),P=y%b;P!==0&&b-P<F.boundary&&(y+=b-P),Y.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=y,y+=F.storage}}}const C=y%b;return C>0&&(y+=b-C),g.__size=y,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class F0{constructor(e={}){const{canvas:n=vy(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zt,this._useLegacyLights=!1,this.toneMapping=Xi,this.toneMappingExposure=1;const _=this;let y=!1,b=0,C=0,R=null,U=-1,E=null;const T=new Dt,k=new Dt;let Y=null;const te=new Je(0);let N=0,B=n.width,$=n.height,F=1,P=null,I=null;const D=new Dt(0,0,B,$),j=new Dt(0,0,B,$);let Z=!1;const q=new Xd;let J=!1,oe=!1,ge=null;const he=new Et,Ue=new Ze,Re=new z,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return R===null?F:1}let H=i;function Tt(w,O){for(let W=0;W<w.length;W++){const X=w[W],V=n.getContext(X,O);if(V!==null)return V}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gd}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",de,!1),H===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),H=Tt(O,w),H===null)throw Tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Te,Ne,_e,st,Ie,A,M,G,Q,ee,ne,se,ue,me,Ae,Fe,ie,Ve,Be,Le,Ee,ae,be,Ye;function et(){Te=new NE(H),Ne=new AE(H,Te,e),Te.init(Ne),ae=new _T(H,Te,Ne),_e=new mT(H,Te,Ne),st=new IE(H),Ie=new tT,A=new gT(H,Te,_e,Ie,Ne,ae,st),M=new CE(_),G=new LE(_),Q=new Vy(H,Ne),be=new TE(H,Te,Q,Ne),ee=new DE(H,Q,st,be),ne=new kE(H,ee,Q,st),Be=new zE(H,Ne,A),Fe=new RE(Ie),se=new eT(_,M,G,Te,Ne,be,Fe),ue=new ST(_,Ie),me=new iT,Ae=new cT(Te,Ne),Ve=new EE(_,M,G,_e,ne,h,l),ie=new pT(_,ne,Ne),Ye=new MT(H,st,Ne,_e),Le=new wE(H,Te,st,Ne),Ee=new UE(H,Te,st,Ne),st.programs=se.programs,_.capabilities=Ne,_.extensions=Te,_.properties=Ie,_.renderLists=me,_.shadowMap=ie,_.state=_e,_.info=st}et();const ze=new yT(_,H);this.xr=ze,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(B,$,!1))},this.getSize=function(w){return w.set(B,$)},this.setSize=function(w,O,W=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,$=O,n.width=Math.floor(w*F),n.height=Math.floor(O*F),W===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(B*F,$*F).floor()},this.setDrawingBufferSize=function(w,O,W){B=w,$=O,F=W,n.width=Math.floor(w*W),n.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(D)},this.setViewport=function(w,O,W,X){w.isVector4?D.set(w.x,w.y,w.z,w.w):D.set(w,O,W,X),_e.viewport(T.copy(D).multiplyScalar(F).floor())},this.getScissor=function(w){return w.copy(j)},this.setScissor=function(w,O,W,X){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,O,W,X),_e.scissor(k.copy(j).multiplyScalar(F).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(w){_e.setScissorTest(Z=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){I=w},this.getClearColor=function(w){return w.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(w=!0,O=!0,W=!0){let X=0;if(w){let V=!1;if(R!==null){const fe=R.texture.format;V=fe===d0||fe===u0||fe===c0}if(V){const fe=R.texture.type,Me=fe===Yi||fe===Ii||fe===Vd||fe===_r||fe===a0||fe===l0,Ce=Ve.getClearColor(),De=Ve.getClearAlpha(),Ge=Ce.r,Oe=Ce.g,ke=Ce.b;Me?(p[0]=Ge,p[1]=Oe,p[2]=ke,p[3]=De,H.clearBufferuiv(H.COLOR,0,p)):(v[0]=Ge,v[1]=Oe,v[2]=ke,v[3]=De,H.clearBufferiv(H.COLOR,0,v))}else X|=H.COLOR_BUFFER_BIT}O&&(X|=H.DEPTH_BUFFER_BIT),W&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",de,!1),me.dispose(),Ae.dispose(),Ie.dispose(),M.dispose(),G.dispose(),ne.dispose(),be.dispose(),Ye.dispose(),se.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",It),ze.removeEventListener("sessionend",qe),ge&&(ge.dispose(),ge=null),vt.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=st.autoReset,O=ie.enabled,W=ie.autoUpdate,X=ie.needsUpdate,V=ie.type;et(),st.autoReset=w,ie.enabled=O,ie.autoUpdate=W,ie.needsUpdate=X,ie.type=V}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function K(w){const O=w.target;O.removeEventListener("dispose",K),Se(O)}function Se(w){ve(w),Ie.remove(w)}function ve(w){const O=Ie.get(w).programs;O!==void 0&&(O.forEach(function(W){se.releaseProgram(W)}),w.isShaderMaterial&&se.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,X,V,fe){O===null&&(O=we);const Me=V.isMesh&&V.matrixWorld.determinant()<0,Ce=G0(w,O,W,X,V);_e.setMaterial(X,Me);let De=W.index,Ge=1;if(X.wireframe===!0){if(De=ee.getWireframeAttribute(W),De===void 0)return;Ge=2}const Oe=W.drawRange,ke=W.attributes.position;let xt=Oe.start*Ge,hn=(Oe.start+Oe.count)*Ge;fe!==null&&(xt=Math.max(xt,fe.start*Ge),hn=Math.min(hn,(fe.start+fe.count)*Ge)),De!==null?(xt=Math.max(xt,0),hn=Math.min(hn,De.count)):ke!=null&&(xt=Math.max(xt,0),hn=Math.min(hn,ke.count));const Pt=hn-xt;if(Pt<0||Pt===1/0)return;be.setup(V,X,Ce,W,De);let ii,dt=Le;if(De!==null&&(ii=Q.get(De),dt=Ee,dt.setIndex(ii)),V.isMesh)X.wireframe===!0?(_e.setLineWidth(X.wireframeLinewidth*$e()),dt.setMode(H.LINES)):dt.setMode(H.TRIANGLES);else if(V.isLine){let We=X.linewidth;We===void 0&&(We=1),_e.setLineWidth(We*$e()),V.isLineSegments?dt.setMode(H.LINES):V.isLineLoop?dt.setMode(H.LINE_LOOP):dt.setMode(H.LINE_STRIP)}else V.isPoints?dt.setMode(H.POINTS):V.isSprite&&dt.setMode(H.TRIANGLES);if(V.isBatchedMesh)dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)dt.renderInstances(xt,Pt,V.count);else if(W.isInstancedBufferGeometry){const We=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Fl=Math.min(W.instanceCount,We);dt.renderInstances(xt,Pt,Fl)}else dt.render(xt,Pt)};function Qe(w,O,W){w.transparent===!0&&w.side===hi&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,Io(w,O,W),w.side=Ki,w.needsUpdate=!0,Io(w,O,W),w.side=hi):Io(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),m=Ae.get(W),m.init(),g.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),w!==W&&w.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(_._useLegacyLights);const X=new Set;return w.traverse(function(V){const fe=V.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const Ce=fe[Me];Qe(Ce,W,V),X.add(Ce)}else Qe(fe,W,V),X.add(fe)}),g.pop(),m=null,X},this.compileAsync=function(w,O,W=null){const X=this.compile(w,O,W);return new Promise(V=>{function fe(){if(X.forEach(function(Me){Ie.get(Me).currentProgram.isReady()&&X.delete(Me)}),X.size===0){V(w);return}setTimeout(fe,10)}Te.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let tt=null;function nt(w){tt&&tt(w)}function It(){vt.stop()}function qe(){vt.start()}const vt=new C0;vt.setAnimationLoop(nt),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(w){tt=w,ze.setAnimationLoop(w),w===null?vt.stop():vt.start()},ze.addEventListener("sessionstart",It),ze.addEventListener("sessionend",qe),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(O),O=ze.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,O,R),m=Ae.get(w,g.length),m.init(),g.push(m),he.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(he),oe=this.localClippingEnabled,J=Fe.init(this.clippingPlanes,oe),x=me.get(w,u.length),x.init(),u.push(x),Kn(w,O,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(P,I),this.info.render.frame++,J===!0&&Fe.beginShadows();const W=m.state.shadowsArray;if(ie.render(W,w,O),J===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(x,w),m.setupLights(_._useLegacyLights),O.isArrayCamera){const X=O.cameras;for(let V=0,fe=X.length;V<fe;V++){const Me=X[V];Jd(x,w,Me,Me.viewport)}}else Jd(x,w,O);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,O),be.resetDefaultState(),U=-1,E=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Kn(w,O,W,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){X&&Re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);const Me=ne.update(w),Ce=w.material;Ce.visible&&x.push(w,Me,Ce,W,Re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const Me=ne.update(w),Ce=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Re.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Re.copy(Me.boundingSphere.center)),Re.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(Ce)){const De=Me.groups;for(let Ge=0,Oe=De.length;Ge<Oe;Ge++){const ke=De[Ge],xt=Ce[ke.materialIndex];xt&&xt.visible&&x.push(w,Me,xt,W,Re.z,ke)}}else Ce.visible&&x.push(w,Me,Ce,W,Re.z,null)}}const fe=w.children;for(let Me=0,Ce=fe.length;Me<Ce;Me++)Kn(fe[Me],O,W,X)}function Jd(w,O,W,X){const V=w.opaque,fe=w.transmissive,Me=w.transparent;m.setupLightsView(W),J===!0&&Fe.setGlobalState(_.clippingPlanes,W),fe.length>0&&H0(V,fe,O,W),X&&_e.viewport(T.copy(X)),V.length>0&&Uo(V,O,W),fe.length>0&&Uo(fe,O,W),Me.length>0&&Uo(Me,O,W),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function H0(w,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const fe=Ne.isWebGL2;ge===null&&(ge=new wr(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?wo:Yi,minFilter:To,samples:fe?4:0})),_.getDrawingBufferSize(Ue),fe?ge.setSize(Ue.x,Ue.y):ge.setSize(ju(Ue.x),ju(Ue.y));const Me=_.getRenderTarget();_.setRenderTarget(ge),_.getClearColor(te),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear();const Ce=_.toneMapping;_.toneMapping=Xi,Uo(w,W,X),A.updateMultisampleRenderTarget(ge),A.updateRenderTargetMipmap(ge);let De=!1;for(let Ge=0,Oe=O.length;Ge<Oe;Ge++){const ke=O[Ge],xt=ke.object,hn=ke.geometry,Pt=ke.material,ii=ke.group;if(Pt.side===hi&&xt.layers.test(X.layers)){const dt=Pt.side;Pt.side=dn,Pt.needsUpdate=!0,Zd(xt,W,X,hn,Pt,ii),Pt.side=dt,Pt.needsUpdate=!0,De=!0}}De===!0&&(A.updateMultisampleRenderTarget(ge),A.updateRenderTargetMipmap(ge)),_.setRenderTarget(Me),_.setClearColor(te,N),_.toneMapping=Ce}function Uo(w,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let V=0,fe=w.length;V<fe;V++){const Me=w[V],Ce=Me.object,De=Me.geometry,Ge=X===null?Me.material:X,Oe=Me.group;Ce.layers.test(W.layers)&&Zd(Ce,O,W,De,Ge,Oe)}}function Zd(w,O,W,X,V,fe){w.onBeforeRender(_,O,W,X,V,fe),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(_,O,W,X,w,fe),V.transparent===!0&&V.side===hi&&V.forceSinglePass===!1?(V.side=dn,V.needsUpdate=!0,_.renderBufferDirect(W,O,X,V,w,fe),V.side=Ki,V.needsUpdate=!0,_.renderBufferDirect(W,O,X,V,w,fe),V.side=hi):_.renderBufferDirect(W,O,X,V,w,fe),w.onAfterRender(_,O,W,X,V,fe)}function Io(w,O,W){O.isScene!==!0&&(O=we);const X=Ie.get(w),V=m.state.lights,fe=m.state.shadowsArray,Me=V.state.version,Ce=se.getParameters(w,V.state,fe,O,W),De=se.getProgramCacheKey(Ce);let Ge=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?G:M).get(w.envMap||X.environment),Ge===void 0&&(w.addEventListener("dispose",K),Ge=new Map,X.programs=Ge);let Oe=Ge.get(De);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===Me)return eh(w,Ce),Oe}else Ce.uniforms=se.getUniforms(w),w.onBuild(W,Ce,_),w.onBeforeCompile(Ce,_),Oe=se.acquireProgram(Ce,De),Ge.set(De,Oe),X.uniforms=Ce.uniforms;const ke=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=Fe.uniform),eh(w,Ce),X.needsLights=W0(w),X.lightsStateVersion=Me,X.needsLights&&(ke.ambientLightColor.value=V.state.ambient,ke.lightProbe.value=V.state.probe,ke.directionalLights.value=V.state.directional,ke.directionalLightShadows.value=V.state.directionalShadow,ke.spotLights.value=V.state.spot,ke.spotLightShadows.value=V.state.spotShadow,ke.rectAreaLights.value=V.state.rectArea,ke.ltc_1.value=V.state.rectAreaLTC1,ke.ltc_2.value=V.state.rectAreaLTC2,ke.pointLights.value=V.state.point,ke.pointLightShadows.value=V.state.pointShadow,ke.hemisphereLights.value=V.state.hemi,ke.directionalShadowMap.value=V.state.directionalShadowMap,ke.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ke.spotShadowMap.value=V.state.spotShadowMap,ke.spotLightMatrix.value=V.state.spotLightMatrix,ke.spotLightMap.value=V.state.spotLightMap,ke.pointShadowMap.value=V.state.pointShadowMap,ke.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function Qd(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Fa.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function eh(w,O){const W=Ie.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function G0(w,O,W,X,V){O.isScene!==!0&&(O=we),A.resetTextureUnits();const fe=O.fog,Me=X.isMeshStandardMaterial?O.environment:null,Ce=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Si,De=(X.isMeshStandardMaterial?G:M).get(X.envMap||Me),Ge=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ke=!!W.morphAttributes.position,xt=!!W.morphAttributes.normal,hn=!!W.morphAttributes.color;let Pt=Xi;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Pt=_.toneMapping);const ii=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,dt=ii!==void 0?ii.length:0,We=Ie.get(X),Fl=m.state.lights;if(J===!0&&(oe===!0||w!==E)){const En=w===E&&X.id===U;Fe.setState(X,w,En)}let mt=!1;X.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Fl.state.version||We.outputColorSpace!==Ce||V.isBatchedMesh&&We.batching===!1||!V.isBatchedMesh&&We.batching===!0||V.isInstancedMesh&&We.instancing===!1||!V.isInstancedMesh&&We.instancing===!0||V.isSkinnedMesh&&We.skinning===!1||!V.isSkinnedMesh&&We.skinning===!0||V.isInstancedMesh&&We.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&We.instancingColor===!1&&V.instanceColor!==null||We.envMap!==De||X.fog===!0&&We.fog!==fe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Fe.numPlanes||We.numIntersection!==Fe.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Oe||We.morphTargets!==ke||We.morphNormals!==xt||We.morphColors!==hn||We.toneMapping!==Pt||Ne.isWebGL2===!0&&We.morphTargetsCount!==dt)&&(mt=!0):(mt=!0,We.__version=X.version);let er=We.currentProgram;mt===!0&&(er=Io(X,O,V));let th=!1,Ls=!1,Ol=!1;const Ht=er.getUniforms(),tr=We.uniforms;if(_e.useProgram(er.program)&&(th=!0,Ls=!0,Ol=!0),X.id!==U&&(U=X.id,Ls=!0),th||E!==w){Ht.setValue(H,"projectionMatrix",w.projectionMatrix),Ht.setValue(H,"viewMatrix",w.matrixWorldInverse);const En=Ht.map.cameraPosition;En!==void 0&&En.setValue(H,Re.setFromMatrixPosition(w.matrixWorld)),Ne.logarithmicDepthBuffer&&Ht.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ht.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Ls=!0,Ol=!0)}if(V.isSkinnedMesh){Ht.setOptional(H,V,"bindMatrix"),Ht.setOptional(H,V,"bindMatrixInverse");const En=V.skeleton;En&&(Ne.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),Ht.setValue(H,"boneTexture",En.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ht.setOptional(H,V,"batchingTexture"),Ht.setValue(H,"batchingTexture",V._matricesTexture,A));const zl=W.morphAttributes;if((zl.position!==void 0||zl.normal!==void 0||zl.color!==void 0&&Ne.isWebGL2===!0)&&Be.update(V,W,er),(Ls||We.receiveShadow!==V.receiveShadow)&&(We.receiveShadow=V.receiveShadow,Ht.setValue(H,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(tr.envMap.value=De,tr.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ls&&(Ht.setValue(H,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&V0(tr,Ol),fe&&X.fog===!0&&ue.refreshFogUniforms(tr,fe),ue.refreshMaterialUniforms(tr,X,F,$,ge),Fa.upload(H,Qd(We),tr,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Fa.upload(H,Qd(We),tr,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ht.setValue(H,"center",V.center),Ht.setValue(H,"modelViewMatrix",V.modelViewMatrix),Ht.setValue(H,"normalMatrix",V.normalMatrix),Ht.setValue(H,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const En=X.uniformsGroups;for(let kl=0,j0=En.length;kl<j0;kl++)if(Ne.isWebGL2){const nh=En[kl];Ye.update(nh,er),Ye.bind(nh,er)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return er}function V0(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function W0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,O,W){Ie.get(w.texture).__webglTexture=O,Ie.get(w.depthTexture).__webglTexture=W;const X=Ie.get(w);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,O){const W=Ie.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,W=0){R=w,b=O,C=W;let X=!0,V=null,fe=!1,Me=!1;if(w){const De=Ie.get(w);De.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):De.__webglFramebuffer===void 0?A.setupRenderTarget(w):De.__hasExternalTextures&&A.rebindTextures(w,Ie.get(w.texture).__webglTexture,Ie.get(w.depthTexture).__webglTexture);const Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Me=!0);const Oe=Ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?V=Oe[O][W]:V=Oe[O],fe=!0):Ne.isWebGL2&&w.samples>0&&A.useMultisampledRTT(w)===!1?V=Ie.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?V=Oe[W]:V=Oe,T.copy(w.viewport),k.copy(w.scissor),Y=w.scissorTest}else T.copy(D).multiplyScalar(F).floor(),k.copy(j).multiplyScalar(F).floor(),Y=Z;if(_e.bindFramebuffer(H.FRAMEBUFFER,V)&&Ne.drawBuffers&&X&&_e.drawBuffers(w,V),_e.viewport(T),_e.scissor(k),_e.setScissorTest(Y),fe){const De=Ie.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,W)}else if(Me){const De=Ie.get(w.texture),Ge=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,De.__webglTexture,W||0,Ge)}U=-1},this.readRenderTargetPixels=function(w,O,W,X,V,fe,Me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){_e.bindFramebuffer(H.FRAMEBUFFER,Ce);try{const De=w.texture,Ge=De.format,Oe=De.type;if(Ge!==jn&&ae.convert(Ge)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Oe===wo&&(Te.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Oe!==Yi&&ae.convert(Oe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Fi&&(Ne.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&W>=0&&W<=w.height-V&&H.readPixels(O,W,X,V,ae.convert(Ge),ae.convert(Oe),fe)}finally{const De=R!==null?Ie.get(R).__webglFramebuffer:null;_e.bindFramebuffer(H.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(w,O,W=0){const X=Math.pow(2,-W),V=Math.floor(O.image.width*X),fe=Math.floor(O.image.height*X);A.setTexture2D(O,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,w.x,w.y,V,fe),_e.unbindTexture()},this.copyTextureToTexture=function(w,O,W,X=0){const V=O.image.width,fe=O.image.height,Me=ae.convert(W.format),Ce=ae.convert(W.type);A.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,w.x,w.y,V,fe,Me,Ce,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,Me,O.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,w.x,w.y,Me,Ce,O.image),X===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(w,O,W,X,V=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=w.max.x-w.min.x+1,Me=w.max.y-w.min.y+1,Ce=w.max.z-w.min.z+1,De=ae.convert(X.format),Ge=ae.convert(X.type);let Oe;if(X.isData3DTexture)A.setTexture3D(X,0),Oe=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)A.setTexture2DArray(X,0),Oe=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const ke=H.getParameter(H.UNPACK_ROW_LENGTH),xt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),hn=H.getParameter(H.UNPACK_SKIP_PIXELS),Pt=H.getParameter(H.UNPACK_SKIP_ROWS),ii=H.getParameter(H.UNPACK_SKIP_IMAGES),dt=W.isCompressedTexture?W.mipmaps[V]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,dt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,dt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,w.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,w.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Oe,V,O.x,O.y,O.z,fe,Me,Ce,De,Ge,dt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Oe,V,O.x,O.y,O.z,fe,Me,Ce,De,dt.data)):H.texSubImage3D(Oe,V,O.x,O.y,O.z,fe,Me,Ce,De,Ge,dt),H.pixelStorei(H.UNPACK_ROW_LENGTH,ke),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,hn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Pt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ii),V===0&&X.generateMipmaps&&H.generateMipmap(Oe),_e.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),_e.unbindTexture()},this.resetState=function(){b=0,C=0,R=null,_e.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Wd?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===Ll?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?xr:f0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xr?zt:Si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ET extends F0{}ET.prototype.isWebGL1Renderer=!0;class TT extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class O0 extends bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dp=new Et,Yu=new y0,Sa=new Nl,Ma=new z;class wT extends Rt{constructor(e=new Dn,n=new O0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),Sa.radius+=s,e.ray.intersectsSphere(Sa)===!1)return;Dp.copy(r).invert(),Yu.copy(e.ray).applyMatrix4(Dp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=h,x=p;v<x;v++){const m=c.getX(v);Ma.fromBufferAttribute(f,m),Up(Ma,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=h,x=p;v<x;v++)Ma.fromBufferAttribute(f,v),Up(Ma,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Up(t,e,n,i,r,s,o){const a=Yu.distanceSqToPoint(t);if(a<n){const l=new z;Yu.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Kt extends Dn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let v=0;const x=[],m=i/2;let u=0;g(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(p,2));function g(){const y=new z,b=new z;let C=0;const R=(n-e)/i;for(let U=0;U<=s;U++){const E=[],T=U/s,k=T*(n-e)+e;for(let Y=0;Y<=r;Y++){const te=Y/r,N=te*l+a,B=Math.sin(N),$=Math.cos(N);b.x=k*B,b.y=-T*i+m,b.z=k*$,f.push(b.x,b.y,b.z),y.set(B,R,$).normalize(),h.push(y.x,y.y,y.z),p.push(te,1-T),E.push(v++)}x.push(E)}for(let U=0;U<r;U++)for(let E=0;E<s;E++){const T=x[E][U],k=x[E+1][U],Y=x[E+1][U+1],te=x[E][U+1];d.push(T,k,te),d.push(k,Y,te),C+=6}c.addGroup(u,C,0),u+=C}function _(y){const b=v,C=new Ze,R=new z;let U=0;const E=y===!0?e:n,T=y===!0?1:-1;for(let Y=1;Y<=r;Y++)f.push(0,m*T,0),h.push(0,T,0),p.push(.5,.5),v++;const k=v;for(let Y=0;Y<=r;Y++){const N=Y/r*l+a,B=Math.cos(N),$=Math.sin(N);R.x=E*$,R.y=m*T,R.z=E*B,f.push(R.x,R.y,R.z),h.push(0,T,0),C.x=B*.5+.5,C.y=$*.5*T+.5,p.push(C.x,C.y),v++}for(let Y=0;Y<r;Y++){const te=b+Y,N=k+Y;y===!0?d.push(N,N+1,te):d.push(N+1,N,te),U+=3}c.addGroup(u,U,y===!0?1:2),u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ft extends Dn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new z,h=new z,p=[],v=[],x=[],m=[];for(let u=0;u<=i;u++){const g=[],_=u/i;let y=0;u===0&&o===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let b=0;b<=n;b++){const C=b/n;f.x=-e*Math.cos(r+C*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+_*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(C+y,1-_),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const _=d[u][g+1],y=d[u][g],b=d[u+1][g],C=d[u+1][g+1];(u!==0||o>0)&&p.push(_,y,C),(u!==i-1||l<Math.PI)&&p.push(y,b,C)}this.setIndex(p),this.setAttribute("position",new Yt(v,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Il extends Dn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new z,f=new z,h=new z;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const x=v/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(x),f.y=(e+n*Math.cos(m))*Math.sin(x),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const x=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,u=(r+1)*(p-1)+v,g=(r+1)*p+v;o.push(x,m,g),o.push(m,u,g)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rn extends bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=p0,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $d extends Rt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Vc=new Et,Ip=new z,Fp=new z;class z0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ip.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ip),Fp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fp),n.updateMatrixWorld(),Vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class AT extends z0{constructor(){super(new gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=hl*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class RT extends $d{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new AT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CT extends z0{constructor(){super(new b0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wc extends $d{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new CT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bT extends $d{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class k0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Op(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Op();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Op(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);const xe={REST:{thumb:[.3,.1],index:[.3,.2],middle:[.35,.25],ring:[.4,.3],pinky:[.45,.35]},OPEN:{thumb:[0,.3],index:[0,0],middle:[0,0],ring:[0,0],pinky:[0,0]},FLAT:{thumb:[.2,0],index:[0,0],middle:[0,0],ring:[0,0],pinky:[0,0]},FIST:{thumb:[.8,.1],index:[1.5,1.4],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[1.5,1.4]},INDEX_POINT:{thumb:[.8,.1],index:[0,0],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[1.5,1.4]},V_SHAPE:{thumb:[.8,.1],index:[0,.2],middle:[0,-.2],ring:[1.5,1.4],pinky:[1.5,1.4]},W_SHAPE:{thumb:[.9,0],index:[0,.2],middle:[0,0],ring:[0,-.2],pinky:[1.5,1.4]},THUMB_UP:{thumb:[-.4,.3],index:[1.5,1.4],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[1.5,1.4]},CUP:{thumb:[.4,.3],index:[.7,.6],middle:[.7,.6],ring:[.7,.6],pinky:[.7,.6]},PINCH:{thumb:[.7,.3],index:[.9,.8],middle:[.3,.1],ring:[.3,.1],pinky:[.3,.1]},L_SHAPE:{thumb:[-.4,.8],index:[0,0],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[1.5,1.4]},Y_SHAPE:{thumb:[-.5,.7],index:[1.5,1.4],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[0,.5]}},Ea={head:{x:0,y:0,z:0},neck:{x:0,y:0,z:0},spine:{x:0,y:0,z:0},chest:{x:0,y:0,z:0},leftShoulder:{x:0,y:0,z:-.1},leftArm:{x:.15,y:0,z:-.25},leftForearm:{x:.4,y:-.1,z:.3},leftHand:{x:0,y:0,z:0},leftFingers:xe.REST,rightShoulder:{x:0,y:0,z:.1},rightArm:{x:.15,y:0,z:.25},rightForearm:{x:.4,y:.1,z:-.3},rightHand:{x:0,y:0,z:0},rightFingers:xe.REST,expression:"neutral",mouthOpen:0},$s={A:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:{thumb:[.1,.6],index:[1.5,1.4],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[1.5,1.4]}},B:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:{thumb:[1.1,-.2],index:[0,0],middle:[0,0],ring:[0,0],pinky:[0,0]}},C:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.3,y:.4,z:-.5},rightHand:{x:0,y:-.6,z:.2},rightFingers:xe.CUP},D:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:{thumb:[.8,.2],index:[0,0],middle:[1.1,1],ring:[1.2,1.1],pinky:[1.3,1.2]}},E:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:{thumb:[1,0],index:[1.2,1.1],middle:[1.2,1.1],ring:[1.2,1.1],pinky:[1.2,1.1]}},F:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:xe.PINCH},G:{rightArm:{x:.4,y:.2,z:.4},rightForearm:{x:1.2,y:.6,z:-.4},rightHand:{x:0,y:-1.2,z:.3},rightFingers:{thumb:[.1,.6],index:[0,0],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[1.5,1.4]}},H:{rightArm:{x:.4,y:.2,z:.4},rightForearm:{x:1.2,y:.6,z:-.4},rightHand:{x:0,y:-1.2,z:.3},rightFingers:{thumb:[.1,.6],index:[0,0],middle:[0,0],ring:[1.5,1.4],pinky:[1.5,1.4]}},I:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:{thumb:[.9,.2],index:[1.5,1.4],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[0,0]}},J:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.4,y:-.6,z:.4},rightFingers:{thumb:[.9,.2],index:[1.5,1.4],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[0,0]}},K:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:{thumb:[.1,.5],index:[0,0],middle:[.4,.2],ring:[1.5,1.4],pinky:[1.5,1.4]}},L:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:xe.L_SHAPE},M:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.2,y:-.3,z:.2},rightFingers:{thumb:[.9,0],index:[1.4,1.2],middle:[1.4,1.2],ring:[1.4,1.2],pinky:[1.5,1.4]}},N:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.2,y:-.3,z:.2},rightFingers:{thumb:[.9,0],index:[1.4,1.2],middle:[1.4,1.2],ring:[1.5,1.4],pinky:[1.5,1.4]}},O:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.3,y:.4,z:-.5},rightHand:{x:0,y:-.5,z:.2},rightFingers:{thumb:[.8,.3],index:[.9,.8],middle:[.9,.8],ring:[.9,.8],pinky:[.9,.8]}},P:{rightArm:{x:.3,y:.2,z:.45},rightForearm:{x:1.1,y:.4,z:-.4},rightHand:{x:.5,y:-.8,z:.3},rightFingers:{thumb:[.1,.5],index:[0,0],middle:[.4,.2],ring:[1.5,1.4],pinky:[1.5,1.4]}},Q:{rightArm:{x:.3,y:.2,z:.45},rightForearm:{x:1.1,y:.4,z:-.4},rightHand:{x:.6,y:-.9,z:.3},rightFingers:{thumb:[.1,.6],index:[0,0],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[1.5,1.4]}},R:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:{thumb:[.9,.1],index:[0,.1],middle:[0,-.3],ring:[1.5,1.4],pinky:[1.5,1.4]}},S:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:{thumb:[.9,-.1],index:[1.5,1.4],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[1.5,1.4]}},T:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:{thumb:[.7,.2],index:[1.3,1.2],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[1.5,1.4]}},U:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:{thumb:[.9,.1],index:[0,0],middle:[0,0],ring:[1.5,1.4],pinky:[1.5,1.4]}},V:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:xe.V_SHAPE},W:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:xe.W_SHAPE},X:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:{thumb:[.8,.1],index:[.8,.9],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[1.5,1.4]}},Y:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.1,y:-.2,z:.1},rightFingers:xe.Y_SHAPE},Z:{rightArm:{x:.3,y:.1,z:.45},rightForearm:{x:1.4,y:.3,z:-.6},rightHand:{x:.2,y:-.4,z:.2},rightFingers:xe.INDEX_POINT}},Kd={HELLO:[{progress:0,head:{x:-.05,y:.05,z:0},rightArm:{x:.6,y:.3,z:.8},rightForearm:{x:1.7,y:.4,z:-.7},rightHand:{x:.2,y:-.3,z:.3},rightFingers:xe.FLAT,expression:"smile"},{progress:.5,head:{x:0,y:0,z:0},rightArm:{x:.7,y:.2,z:.95},rightForearm:{x:1.5,y:.2,z:-.5},rightHand:{x:.1,y:.2,z:-.2},rightFingers:xe.OPEN,expression:"smile"},{progress:1,head:{x:.02,y:-.02,z:0},rightArm:{x:.6,y:.2,z:.85},rightForearm:{x:1.6,y:.3,z:-.6},rightHand:{x:.15,y:-.2,z:.2},rightFingers:xe.OPEN,expression:"smile"}],"THANK-YOU":[{progress:0,head:{x:-.05,y:0,z:0},rightArm:{x:.8,y:.1,z:.4},rightForearm:{x:1.9,y:.5,z:-.7},rightHand:{x:.2,y:-.3,z:.1},rightFingers:xe.FLAT,expression:"smile"},{progress:.5,head:{x:.05,y:0,z:0},rightArm:{x:.5,y:0,z:.3},rightForearm:{x:.8,y:.1,z:-.2},rightHand:{x:-.2,y:0,z:0},rightFingers:xe.FLAT,expression:"smile"},{progress:1,head:{x:.08,y:0,z:0},rightArm:{x:.4,y:0,z:.25},rightForearm:{x:.5,y:0,z:-.1},rightHand:{x:-.3,y:0,z:0},rightFingers:xe.FLAT,expression:"smile"}],PLEASE:[{progress:0,head:{x:.05,y:0,z:0},rightArm:{x:.5,y:-.2,z:.4},rightForearm:{x:1.5,y:.7,z:-.6},rightHand:{x:.2,y:-.5,z:.3},rightFingers:xe.FLAT,expression:"smile"},{progress:.5,head:{x:.05,y:0,z:0},rightArm:{x:.6,y:-.1,z:.3},rightForearm:{x:1.4,y:.8,z:-.7},rightHand:{x:.1,y:-.6,z:.2},rightFingers:xe.FLAT,expression:"smile"},{progress:1,head:{x:.05,y:0,z:0},rightArm:{x:.5,y:-.2,z:.4},rightForearm:{x:1.5,y:.7,z:-.6},rightHand:{x:.2,y:-.5,z:.3},rightFingers:xe.FLAT,expression:"smile"}],YES:[{progress:0,head:{x:.1,y:0,z:0},rightArm:{x:.4,y:.1,z:.35},rightForearm:{x:1.3,y:.2,z:-.4},rightHand:{x:-.3,y:0,z:0},rightFingers:xe.FIST,expression:"smile"},{progress:.5,head:{x:-.05,y:0,z:0},rightArm:{x:.4,y:.1,z:.35},rightForearm:{x:1.3,y:.2,z:-.4},rightHand:{x:.4,y:0,z:0},rightFingers:xe.FIST,expression:"smile"},{progress:1,head:{x:.1,y:0,z:0},rightArm:{x:.4,y:.1,z:.35},rightForearm:{x:1.3,y:.2,z:-.4},rightHand:{x:-.3,y:0,z:0},rightFingers:xe.FIST,expression:"smile"}],NO:[{progress:0,head:{x:0,y:-.15,z:0},rightArm:{x:.4,y:.2,z:.4},rightForearm:{x:1.4,y:.3,z:-.5},rightHand:{x:.1,y:-.2,z:0},rightFingers:{thumb:[0,.4],index:[0,0],middle:[0,0],ring:[1.5,1.4],pinky:[1.5,1.4]},expression:"serious"},{progress:.5,head:{x:0,y:.15,z:0},rightArm:{x:.4,y:.2,z:.4},rightForearm:{x:1.4,y:.3,z:-.5},rightHand:{x:.2,y:-.2,z:0},rightFingers:{thumb:[.8,.1],index:[1.2,1],middle:[1.2,1],ring:[1.5,1.4],pinky:[1.5,1.4]},expression:"serious"},{progress:1,head:{x:0,y:-.1,z:0},rightArm:{x:.4,y:.2,z:.4},rightForearm:{x:1.4,y:.3,z:-.5},rightHand:{x:.2,y:-.2,z:0},rightFingers:{thumb:[.8,.1],index:[1.2,1],middle:[1.2,1],ring:[1.5,1.4],pinky:[1.5,1.4]},expression:"serious"}],HELP:[{progress:0,leftArm:{x:.3,y:.1,z:-.3},leftForearm:{x:1.1,y:-.4,z:.4},leftHand:{x:-.2,y:.2,z:0},leftFingers:xe.FLAT,rightArm:{x:.3,y:-.1,z:.3},rightForearm:{x:1.2,y:.4,z:-.4},rightHand:{x:0,y:-.2,z:0},rightFingers:xe.THUMB_UP,expression:"focused"},{progress:1,leftArm:{x:.5,y:.1,z:-.3},leftForearm:{x:1.3,y:-.4,z:.4},leftHand:{x:-.2,y:.2,z:0},leftFingers:xe.FLAT,rightArm:{x:.5,y:-.1,z:.3},rightForearm:{x:1.4,y:.4,z:-.4},rightHand:{x:0,y:-.2,z:0},rightFingers:xe.THUMB_UP,expression:"focused"}],WHERE:[{progress:0,head:{x:.05,y:.1,z:-.1},leftArm:{x:.35,y:-.2,z:-.4},leftForearm:{x:1,y:-.3,z:.3},leftHand:{x:-.3,y:.4,z:0},leftFingers:xe.OPEN,rightArm:{x:.35,y:.2,z:.4},rightForearm:{x:1,y:.3,z:-.3},rightHand:{x:-.3,y:-.4,z:0},rightFingers:xe.OPEN,expression:"question"},{progress:.5,head:{x:.05,y:-.1,z:.1},leftArm:{x:.35,y:-.1,z:-.5},leftForearm:{x:1,y:-.2,z:.4},leftHand:{x:-.3,y:.2,z:0},leftFingers:xe.OPEN,rightArm:{x:.35,y:.1,z:.5},rightForearm:{x:1,y:.2,z:-.4},rightHand:{x:-.3,y:-.2,z:0},rightFingers:xe.OPEN,expression:"question"},{progress:1,head:{x:.05,y:.1,z:-.1},leftArm:{x:.35,y:-.2,z:-.4},leftForearm:{x:1,y:-.3,z:.3},leftHand:{x:-.3,y:.4,z:0},leftFingers:xe.OPEN,rightArm:{x:.35,y:.2,z:.4},rightForearm:{x:1,y:.3,z:-.3},rightHand:{x:-.3,y:-.4,z:0},rightFingers:xe.OPEN,expression:"question"}],WHAT:[{progress:0,head:{x:-.05,y:0,z:.05},leftArm:{x:.3,y:-.1,z:-.35},leftForearm:{x:1.1,y:-.2,z:.2},leftHand:{x:-.2,y:.3,z:0},leftFingers:xe.OPEN,rightArm:{x:.3,y:.1,z:.35},rightForearm:{x:1.1,y:.2,z:-.2},rightHand:{x:-.2,y:-.3,z:0},rightFingers:xe.OPEN,expression:"question"},{progress:.5,head:{x:.05,y:0,z:-.05},leftArm:{x:.32,y:-.2,z:-.4},leftForearm:{x:1,y:-.3,z:.3},leftHand:{x:-.3,y:.4,z:0},leftFingers:xe.OPEN,rightArm:{x:.32,y:.2,z:.4},rightForearm:{x:1,y:.3,z:-.3},rightHand:{x:-.3,y:-.4,z:0},rightFingers:xe.OPEN,expression:"question"},{progress:1,head:{x:-.05,y:0,z:.05},leftArm:{x:.3,y:-.1,z:-.35},leftForearm:{x:1.1,y:-.2,z:.2},leftHand:{x:-.2,y:.3,z:0},leftFingers:xe.OPEN,rightArm:{x:.3,y:.1,z:.35},rightForearm:{x:1.1,y:.2,z:-.2},rightHand:{x:-.2,y:-.3,z:0},rightFingers:xe.OPEN,expression:"question"}],WHO:[{progress:0,head:{x:.05,y:.08,z:0},rightArm:{x:.7,y:.1,z:.35},rightForearm:{x:1.8,y:.5,z:-.6},rightHand:{x:.2,y:-.3,z:.1},rightFingers:{thumb:[.6,.4],index:[0,0],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[1.5,1.4]},expression:"question"},{progress:.5,head:{x:.05,y:.08,z:0},rightArm:{x:.7,y:.1,z:.35},rightForearm:{x:1.8,y:.5,z:-.6},rightHand:{x:.2,y:-.3,z:.1},rightFingers:{thumb:[.6,.4],index:[.8,.7],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[1.5,1.4]},expression:"question"},{progress:1,head:{x:.05,y:.08,z:0},rightArm:{x:.7,y:.1,z:.35},rightForearm:{x:1.8,y:.5,z:-.6},rightHand:{x:.2,y:-.3,z:.1},rightFingers:{thumb:[.6,.4],index:[0,0],middle:[1.5,1.4],ring:[1.5,1.4],pinky:[1.5,1.4]},expression:"question"}],NAME:[{progress:0,leftArm:{x:.3,y:.1,z:-.25},leftForearm:{x:1.2,y:-.5,z:.4},leftHand:{x:0,y:.5,z:0},leftFingers:{thumb:[.8,.1],index:[0,0],middle:[0,0],ring:[1.5,1.4],pinky:[1.5,1.4]},rightArm:{x:.4,y:-.1,z:.25},rightForearm:{x:1.4,y:.5,z:-.5},rightHand:{x:.2,y:-.4,z:0},rightFingers:{thumb:[.8,.1],index:[0,0],middle:[0,0],ring:[1.5,1.4],pinky:[1.5,1.4]},expression:"focused"},{progress:.4,rightForearm:{x:1.1,y:.4,z:-.4}},{progress:.7,rightForearm:{x:1.35,y:.5,z:-.5}},{progress:1,rightForearm:{x:1.1,y:.4,z:-.4}}],GO:[{progress:0,leftArm:{x:.3,y:0,z:-.2},leftForearm:{x:1.4,y:-.2,z:.2},leftHand:{x:.2,y:0,z:0},leftFingers:xe.INDEX_POINT,rightArm:{x:.3,y:0,z:.2},rightForearm:{x:1.4,y:.2,z:-.2},rightHand:{x:.2,y:0,z:0},rightFingers:xe.INDEX_POINT,expression:"focused"},{progress:.5,leftArm:{x:.6,y:0,z:-.2},leftForearm:{x:.7,y:-.1,z:.1},leftHand:{x:-.2,y:0,z:0},rightArm:{x:.6,y:0,z:.2},rightForearm:{x:.7,y:.1,z:-.1},rightHand:{x:-.2,y:0,z:0},expression:"focused"},{progress:1,leftArm:{x:.7,y:0,z:-.2},leftForearm:{x:.3,y:0,z:0},leftHand:{x:-.4,y:0,z:0},rightArm:{x:.7,y:0,z:.2},rightForearm:{x:.3,y:0,z:0},rightHand:{x:-.4,y:0,z:0},expression:"focused"}],STOP:[{progress:0,leftArm:{x:.3,y:.1,z:-.3},leftForearm:{x:1.1,y:-.4,z:.4},leftHand:{x:-.2,y:.3,z:0},leftFingers:xe.FLAT,rightArm:{x:.7,y:0,z:.4},rightForearm:{x:1.5,y:.3,z:-.5},rightHand:{x:.3,y:-.6,z:.2},rightFingers:xe.FLAT,expression:"serious"},{progress:.7,leftArm:{x:.3,y:.1,z:-.3},leftForearm:{x:1.1,y:-.4,z:.4},leftHand:{x:-.2,y:.3,z:0},leftFingers:xe.FLAT,rightArm:{x:.4,y:-.1,z:.2},rightForearm:{x:1,y:.4,z:-.3},rightHand:{x:0,y:-.7,z:.2},rightFingers:xe.FLAT,expression:"serious"},{progress:1,leftArm:{x:.3,y:.1,z:-.3},leftForearm:{x:1.1,y:-.4,z:.4},leftHand:{x:-.2,y:.3,z:0},leftFingers:xe.FLAT,rightArm:{x:.4,y:-.1,z:.2},rightForearm:{x:1,y:.4,z:-.3},rightHand:{x:0,y:-.7,z:.2},rightFingers:xe.FLAT,expression:"serious"}],DOCTOR:[{progress:0,leftArm:{x:.3,y:.1,z:-.3},leftForearm:{x:1.2,y:-.5,z:.4},leftHand:{x:-.3,y:.3,z:0},leftFingers:xe.FLAT,rightArm:{x:.4,y:-.1,z:.3},rightForearm:{x:1.4,y:.5,z:-.5},rightHand:{x:.2,y:-.4,z:0},rightFingers:{thumb:[.7,.2],index:[.7,.6],middle:[.7,.6],ring:[1.5,1.4],pinky:[1.5,1.4]},expression:"focused"},{progress:.5,rightForearm:{x:1.15,y:.45,z:-.4}},{progress:1,rightForearm:{x:1.3,y:.5,z:-.5}}],WATER:[{progress:0,head:{x:-.05,y:0,z:0},rightArm:{x:.7,y:.1,z:.35},rightForearm:{x:1.8,y:.5,z:-.6},rightHand:{x:.2,y:-.3,z:.1},rightFingers:xe.W_SHAPE,expression:"smile"},{progress:.4,rightForearm:{x:1.95,y:.55,z:-.65}},{progress:.7,rightForearm:{x:1.75,y:.45,z:-.55}},{progress:1,rightForearm:{x:1.95,y:.55,z:-.65}}],EMERGENCY:[{progress:0,head:{x:.05,y:-.05,z:0},rightArm:{x:.4,y:.1,z:.4},rightForearm:{x:1.4,y:.3,z:-.5},rightHand:{x:.1,y:-.4,z:.1},rightFingers:$s.E.rightFingers,expression:"serious"},{progress:.3,rightHand:{x:.1,y:.2,z:.1}},{progress:.6,rightHand:{x:.1,y:-.4,z:.1}},{progress:1,rightHand:{x:.1,y:.2,z:.1}}],SORRY:[{progress:0,head:{x:.1,y:0,z:-.05},rightArm:{x:.5,y:-.15,z:.35},rightForearm:{x:1.5,y:.7,z:-.6},rightHand:{x:.1,y:-.5,z:.2},rightFingers:xe.FIST,expression:"serious"},{progress:.5,head:{x:.12,y:0,z:-.05},rightArm:{x:.55,y:-.1,z:.3},rightForearm:{x:1.4,y:.8,z:-.7},rightHand:{x:0,y:-.6,z:.1},rightFingers:xe.FIST,expression:"serious"},{progress:1,head:{x:.1,y:0,z:-.05},rightArm:{x:.5,y:-.15,z:.35},rightForearm:{x:1.5,y:.7,z:-.6},rightHand:{x:.1,y:-.5,z:.2},rightFingers:xe.FIST,expression:"serious"}],GOOD:[{progress:0,leftArm:{x:.2,y:0,z:-.25},leftForearm:{x:1,y:-.4,z:.3},leftHand:{x:-.2,y:.3,z:0},leftFingers:xe.FLAT,rightArm:{x:.8,y:.1,z:.35},rightForearm:{x:1.9,y:.5,z:-.7},rightHand:{x:.2,y:-.3,z:.1},rightFingers:xe.FLAT,expression:"smile"},{progress:1,leftArm:{x:.3,y:.1,z:-.3},leftForearm:{x:1.1,y:-.4,z:.4},leftHand:{x:-.2,y:.3,z:0},leftFingers:xe.FLAT,rightArm:{x:.35,y:-.1,z:.25},rightForearm:{x:1.1,y:.4,z:-.4},rightHand:{x:-.1,y:-.3,z:.1},rightFingers:xe.FLAT,expression:"smile"}],BAD:[{progress:0,head:{x:.05,y:0,z:0},rightArm:{x:.8,y:.1,z:.35},rightForearm:{x:1.9,y:.5,z:-.7},rightHand:{x:.2,y:-.3,z:.1},rightFingers:xe.FLAT,expression:"serious"},{progress:.5,head:{x:.08,y:0,z:0},rightArm:{x:.5,y:.1,z:.3},rightForearm:{x:1,y:.2,z:-.3},rightHand:{x:-.2,y:-.8,z:.5},rightFingers:xe.FLAT,expression:"serious"},{progress:1,head:{x:.1,y:0,z:0},rightArm:{x:.4,y:.1,z:.35},rightForearm:{x:.8,y:.1,z:-.2},rightHand:{x:.5,y:-1.2,z:.3},rightFingers:xe.FLAT,expression:"serious"}]};function zn(t,e,n){return!t&&!e?{x:0,y:0,z:0}:t?e?{x:t.x+(e.x-t.x)*n,y:t.y+(e.y-t.y)*n,z:t.z+(e.z-t.z)*n}:{...t}:{...e}}function zp(t,e,n){if(!t&&!e)return xe.REST;if(!t)return{...e};if(!e)return{...t};const i={};for(const r of["thumb","index","middle","ring","pinky"]){const s=t[r]||[0,0],o=e[r]||[0,0],a=[s[0]+(o[0]-s[0])*n,s[1]+(o[1]-s[1])*n];if(s[2]!==void 0||o[2]!==void 0){const l=s[2]!==void 0?s[2]:o[2],c=o[2]!==void 0?o[2]:s[2];a.push(l+(c-l)*n)}i[r]=a}return i}const PT={"human-light":{skin:15845797,nail:16177348,hair:4860951,cloth:2837103},"human-tan":{skin:14262374,nail:15120522,hair:1774096,cloth:2055245},"human-brown":{skin:10840643,nail:12421736,hair:1182730,cloth:8007226},"human-deep":{skin:7029286,nail:8673338,hair:722694,cloth:3882892}},kp={neutral:{tilt:0,lift:0,curve:.12,open:0,squint:0},smile:{tilt:-.1,lift:.004,curve:.95,open:0,squint:.18},serious:{tilt:.28,lift:-.004,curve:-.1,open:0,squint:.05},focused:{tilt:.14,lift:-.002,curve:0,open:0,squint:.1},question:{tilt:-.22,lift:.014,curve:0,open:.22,squint:0}};class LT{constructor(e,n={}){this.scene=e,this.group=new gt,this.scene.add(this.group),this.currentStyle=n.style||"human-tan",this.currentPose=JSON.parse(JSON.stringify(Ea)),this.targetPose=JSON.parse(JSON.stringify(Ea)),this.transitionTime=.32,this.transitionProgress=1,this.previousPose=JSON.parse(JSON.stringify(Ea)),this.clock=new k0,this.idleTime=0,this.blinkTimer=0,this.isBlinking=!1,this.expression="neutral",this.mouthOpening=0,this.materials={},this._buildMaterials(),this._buildSkeleton(),this.setStyle(this.currentStyle)}_buildMaterials(){this.materials.skin=new rn({color:14870768,roughness:.2,metalness:.1}),this.materials.handSkin=new rn({color:16777215,roughness:.15,metalness:.2}),this.materials.fingernail=new rn({color:3900150,roughness:.1,metalness:.8}),this.materials.knuckleAccent=new rn({color:62206,emissive:46296,emissiveIntensity:.6,roughness:.2,metalness:.7}),this.materials.suit=new rn({color:988970,roughness:.6,metalness:.5}),this.materials.suitAccent=new rn({color:3900150,emissive:2450411,emissiveIntensity:.8,roughness:.2,metalness:.8}),this.materials.eyeWhite=new rn({color:16777215,roughness:.3}),this.materials.pupil=new rn({color:1182730,roughness:.2}),this.materials.iris=new rn({color:4862498,roughness:.3}),this.materials.hair=new rn({color:1774096,roughness:.85}),this.materials.mouth=new rn({color:10173765,roughness:.5}),this.materials.mouthInside=new rn({color:3804948,roughness:.8}),this.materials.joint=new rn({color:1976635,roughness:.4,metalness:.8})}setStyle(e){var s;this.currentStyle=e;const n=this.materials;n.skin.color.setHex(14870768),n.skin.roughness=.2,n.skin.metalness=.1,n.handSkin.color.setHex(16777215),n.handSkin.roughness=.15,n.handSkin.metalness=.2,n.fingernail.color.setHex(3900150),n.fingernail.roughness=.1,n.fingernail.metalness=.8,n.knuckleAccent.emissiveIntensity=.6,n.knuckleAccent.roughness=.2,n.knuckleAccent.metalness=.7,n.suit.color.setHex(988970),n.suit.roughness=.6,n.suit.metalness=.5,n.joint.color.setHex(1976635),n.joint.roughness=.4,n.joint.metalness=.8;const i=PT[e],r=!!i;if((s=this.techParts)==null||s.forEach(o=>o.visible=!r),this.face&&(this.face.group.visible=r),r){n.skin.color.setHex(i.skin),n.skin.roughness=.65,n.skin.metalness=0,n.handSkin.color.setHex(i.skin),n.handSkin.roughness=.55,n.handSkin.metalness=0,n.knuckleAccent.color.setHex(i.skin),n.knuckleAccent.emissive.setHex(0),n.knuckleAccent.emissiveIntensity=0,n.knuckleAccent.roughness=.6,n.knuckleAccent.metalness=0,n.fingernail.color.setHex(i.nail),n.fingernail.roughness=.35,n.fingernail.metalness=0,n.suit.color.setHex(i.cloth),n.suit.roughness=.85,n.suit.metalness=0,n.joint.color.setHex(i.cloth),n.joint.roughness=.85,n.joint.metalness=0,n.hair.color.setHex(i.hair);return}e==="pro-hands"?(n.knuckleAccent.color.setHex(3900150),n.knuckleAccent.emissive.setHex(2450411)):e==="natural"?(n.handSkin.color.setHex(14870768),n.knuckleAccent.color.setHex(9741240),n.knuckleAccent.emissive.setHex(0)):e==="cyber"?(n.handSkin.color.setHex(988970),n.handSkin.metalness=.9,n.knuckleAccent.color.setHex(62206),n.knuckleAccent.emissive.setHex(62206)):e==="high-contrast"&&(n.handSkin.roughness=.2,n.fingernail.color.setHex(0),n.knuckleAccent.color.setHex(16096779),n.knuckleAccent.emissive.setHex(16096779),n.suit.color.setHex(328968),n.skin.color.setHex(16777215))}_buildSkeleton(){this.rootJoint=new gt,this.rootJoint.position.set(0,-.32,0),this.group.add(this.rootJoint);const e=new Pe(new Kt(.23,.2,.44,20),this.materials.suit);e.position.y=.22,e.castShadow=!0,e.receiveShadow=!0,this.rootJoint.add(e);const n=new Vn(.015,.42,.18),i=new Pe(n,this.materials.suitAccent);i.position.set(-.225,.22,0),this.rootJoint.add(i);const r=new Pe(n,this.materials.suitAccent);r.position.set(.225,.22,0),this.rootJoint.add(r),this.chestJoint=new gt,this.chestJoint.position.set(0,.44,0),this.rootJoint.add(this.chestJoint);const s=new Pe(new Kt(.27,.23,.36,20),this.materials.suit);s.position.y=.18,s.castShadow=!0,this.chestJoint.add(s);const o=new Pe(new Kt(.055,.055,.015,16),this.materials.suitAccent);o.rotation.x=Math.PI/2,o.position.set(0,.22,.26),this.chestJoint.add(o),this.neckJoint=new gt,this.neckJoint.position.set(0,.36,0),this.chestJoint.add(this.neckJoint);const a=new Pe(new Kt(.095,.105,.18,16),this.materials.skin);a.position.y=.09,this.neckJoint.add(a),this.headJoint=new gt,this.headJoint.position.set(0,.18,0),this.neckJoint.add(this.headJoint);const l=new Pe(new Ft(.22,28,28),this.materials.skin);l.scale.set(1,1.14,1.05),l.position.y=.2,l.castShadow=!0,this.headJoint.add(l);const c=new Vn(.26,.06,.18),d=new Pe(c,this.materials.suitAccent);d.position.set(0,.22,.14),d.rotation.x=-.1,this.headJoint.add(d),this.techParts=[i,r,o,d],this._buildFace(),this.leftArm=this._buildArm("left"),this.chestJoint.add(this.leftArm.shoulderJoint),this.rightArm=this._buildArm("right"),this.chestJoint.add(this.rightArm.shoulderJoint)}_buildFace(){const e=this.materials,n=new gt;this.headJoint.add(n);const i=u=>{const g=new gt;g.position.set(u,.225,.192);const _=new Pe(new Ft(.031,18,14),e.eyeWhite),y=new Pe(new Ft(.019,16,12),e.iris);y.position.z=.026,y.scale.z=.5;const b=new Pe(new Ft(.0105,12,10),e.pupil);b.position.z=.033,b.scale.z=.4;const C=new Pe(new Ft(.0045,8,6),e.eyeWhite);return C.position.set(.006,.007,.039),g.add(_,y,b,C),n.add(g),g},r=i(-.075),s=i(.075),o=new Vn(.062,.011,.012),a=new Pe(o,e.hair),l=new Pe(o,e.hair);a.position.set(-.075,.275,.208),l.position.set(.075,.275,.208),n.add(a,l);const c=new Pe(new Ft(.021,14,12),e.skin);c.position.set(0,.162,.224),c.scale.set(.9,1.2,.9),n.add(c);const d=new Ft(.032,12,10),f=new Pe(d,e.skin),h=new Pe(d,e.skin);f.position.set(-.216,.19,-.01),h.position.set(.216,.19,-.01),f.scale.set(.45,1,.8),h.scale.set(.45,1,.8),n.add(f,h);const p=new gt;p.position.set(0,.105,.2135);const v=new Pe(new Ft(.03,14,10),e.mouthInside);v.scale.set(1,.05,.25);const x=new Pe(new Il(.04,.005,8,24,Math.PI),e.mouth);x.position.y=.012,p.add(v,x),n.add(p);const m=new Pe(new Ft(.24,32,20,0,Math.PI*2,0,Math.PI*.5),e.hair);m.scale.set(1,1.14,1.05),m.position.set(0,.22,-.01),m.rotation.x=-.5,m.castShadow=!0,n.add(m),this.face={group:n,eyeL:r,eyeR:s,browL:a,browR:l,mouth:p,lip:x,inside:v},this.faceState={tilt:0,lift:0,curve:.12,open:0,squint:0},this.blink={timer:2+Math.random()*2,phase:0},n.visible=!1}_updateFace(e){if(!this.face||!this.face.group.visible)return;const n=this.face,i=this.faceState,r=kp[this.expression]||kp.neutral,s=1-Math.exp(-e*10);for(const c of Object.keys(i))i[c]+=(r[c]-i[c])*s;typeof this.currentPose.mouthOpen=="number"&&(i.open=Math.max(i.open,this.currentPose.mouthOpen));const o=this.blink;o.timer-=e,o.timer<=0&&o.phase===0&&(o.phase=1e-4),o.phase>0&&(o.phase+=e/.16,o.phase>=1&&(o.phase=0,o.timer=2.5+Math.random()*3));const a=o.phase>0?Math.sin(o.phase*Math.PI):0,l=Math.max(.08,1-i.squint-a*.92);n.eyeL.scale.y=n.eyeR.scale.y=l,n.browL.rotation.z=-i.tilt,n.browR.rotation.z=i.tilt,n.browL.position.y=n.browR.position.y=.275+i.lift,n.lip.rotation.z=i.curve>=0?Math.PI:0,n.lip.scale.y=Math.max(.08,Math.abs(i.curve)),n.inside.visible=i.open>.04,n.inside.scale.y=.05+i.open*.9,n.lip.position.y=i.curve>=0?.012+i.open*.01:-.004}_buildArm(e="right"){const n=e==="left",i=n?-1:1,r=new gt;r.position.set(i*.29,.27,0);const s=new Pe(new Ft(.075,16,16),this.materials.joint);r.add(s);const o=new gt;r.add(o);const a=new Pe(new Kt(.062,.054,.34,16),this.materials.suit);a.position.y=-.17,a.castShadow=!0,o.add(a);const l=new gt;l.position.set(0,-.34,0),o.add(l);const c=new Pe(new Ft(.058,16,16),this.materials.joint);l.add(c);const d=new Pe(new Kt(.054,.046,.32,16),this.materials.suit);d.position.y=-.16,d.castShadow=!0,l.add(d);const f=new gt;f.position.set(0,-.32,0),l.add(f);const h=new Pe(new Kt(.046,.044,.04,16),this.materials.joint);f.add(h);const p=new gt;f.add(p);const v=new Pe(new Vn(.088,.105,.034),this.materials.handSkin);v.position.set(0,-.058,0),v.castShadow=!0,p.add(v);const x=new Pe(new Ft(.032,12,12),this.materials.handSkin);x.scale.set(1,1.4,.85),x.position.set(n?.042:-.042,-.042,.01),p.add(x);const m=this._buildPrecisionFingers(f,n);return{shoulderJoint:r,upperArmJoint:o,elbowJoint:l,wristJoint:f,fingers:m}}_buildPrecisionFingers(e,n){const i={};[{name:"index",x:n?.031:-.031,y:-.11,len1:.036,len2:.026,len3:.022,w:.015,splay:n?.08:-.08},{name:"middle",x:n?.01:-.01,y:-.114,len1:.04,len2:.028,len3:.024,w:.015,splay:0},{name:"ring",x:n?-.011:.011,y:-.11,len1:.036,len2:.025,len3:.022,w:.014,splay:n?-.06:.06},{name:"pinky",x:n?-.031:.031,y:-.102,len1:.028,len2:.02,len3:.018,w:.013,splay:n?-.14:.14}].forEach(h=>{const p=new gt;p.position.set(h.x,h.y,0),p.rotation.z=h.splay,e.add(p);const v=new Pe(new Ft(h.w*1.1,10,10),this.materials.knuckleAccent);p.add(v);const x=new Pe(new Kt(h.w*.95,h.w*.88,h.len1,12),this.materials.handSkin);x.position.y=-h.len1*.5,x.castShadow=!0,p.add(x);const m=new gt;m.position.set(0,-h.len1,0),p.add(m);const u=new Pe(new Ft(h.w*.9,10,10),this.materials.handSkin);m.add(u);const g=new Pe(new Kt(h.w*.85,h.w*.78,h.len2,12),this.materials.handSkin);g.position.y=-h.len2*.5,g.castShadow=!0,m.add(g);const _=new gt;_.position.set(0,-h.len2,0),m.add(_);const y=new Pe(new Kt(h.w*.78,h.w*.6,h.len3,12),this.materials.handSkin);y.position.y=-h.len3*.5,y.castShadow=!0,_.add(y);const b=new Pe(new Vn(h.w*.7,h.len3*.45,.005),this.materials.fingernail);b.position.set(0,-h.len3*.6,-h.w*.45),_.add(b),i[h.name]={base:p,mid:m,tip:_,defaultSplay:h.splay}});const s=n?.048:-.048,o=new gt;o.position.set(s,-.045,.015),o.rotation.z=n?-.55:.55,o.rotation.y=n?.35:-.35,e.add(o);const a=new Pe(new Ft(.018,10,10),this.materials.knuckleAccent);o.add(a);const l=new Pe(new Kt(.017,.015,.034,12),this.materials.handSkin);l.position.y=-.017,l.castShadow=!0,o.add(l);const c=new gt;c.position.set(0,-.034,0),o.add(c);const d=new Pe(new Kt(.015,.012,.03,12),this.materials.handSkin);d.position.y=-.015,d.castShadow=!0,c.add(d);const f=new Pe(new Vn(.012,.014,.005),this.materials.fingernail);return f.position.set(0,-.018,-.008),c.add(f),i.thumb={base:o,mid:c,tip:c,defaultSplay:n?-.55:.55},i}setPose(e,n=.3){this.previousPose=JSON.parse(JSON.stringify(this.currentPose)),this.targetPose=JSON.parse(JSON.stringify(e)),this.transitionTime=Math.max(.08,n),this.transitionProgress=0}resetToIdle(e=.35){this.setPose(Ea,e)}update(e){this.idleTime+=e,this.transitionProgress<1&&(this.transitionProgress+=e/this.transitionTime,this.transitionProgress>1&&(this.transitionProgress=1));const n=this.transitionProgress,i=n*n*(3-2*n);this.currentPose.head=zn(this.previousPose.head,this.targetPose.head,i),this.currentPose.neck=zn(this.previousPose.neck,this.targetPose.neck,i),this.currentPose.chest=zn(this.previousPose.chest,this.targetPose.chest,i),this.currentPose.leftShoulder=zn(this.previousPose.leftShoulder,this.targetPose.leftShoulder,i),this.currentPose.leftArm=zn(this.previousPose.leftArm,this.targetPose.leftArm,i),this.currentPose.leftForearm=zn(this.previousPose.leftForearm,this.targetPose.leftForearm,i),this.currentPose.leftHand=zn(this.previousPose.leftHand,this.targetPose.leftHand,i),this.currentPose.leftFingers=zp(this.previousPose.leftFingers,this.targetPose.leftFingers,i),this.currentPose.rightShoulder=zn(this.previousPose.rightShoulder,this.targetPose.rightShoulder,i),this.currentPose.rightArm=zn(this.previousPose.rightArm,this.targetPose.rightArm,i),this.currentPose.rightForearm=zn(this.previousPose.rightForearm,this.targetPose.rightForearm,i),this.currentPose.rightHand=zn(this.previousPose.rightHand,this.targetPose.rightHand,i),this.currentPose.rightFingers=zp(this.previousPose.rightFingers,this.targetPose.rightFingers,i),this.targetPose.expression&&(this.expression=this.targetPose.expression);const r=Math.sin(this.idleTime*2)*.018,s=Math.sin(this.idleTime*1.2)*.008;this.chestJoint&&this.currentPose.chest&&this.chestJoint.rotation.set(this.currentPose.chest.x+r,this.currentPose.chest.y+s,this.currentPose.chest.z),this.headJoint&&this.currentPose.head&&this.headJoint.rotation.set(this.currentPose.head.x+r*.5,this.currentPose.head.y,this.currentPose.head.z),this.leftArm&&(this.currentPose.leftShoulder&&this.leftArm.shoulderJoint.rotation.set(this.currentPose.leftShoulder.x,this.currentPose.leftShoulder.y,this.currentPose.leftShoulder.z),this.currentPose.leftArm&&this.leftArm.upperArmJoint.rotation.set(this.currentPose.leftArm.x,this.currentPose.leftArm.y,this.currentPose.leftArm.z),this.currentPose.leftForearm&&this.leftArm.elbowJoint.rotation.set(this.currentPose.leftForearm.x,this.currentPose.leftForearm.y,this.currentPose.leftForearm.z),this.currentPose.leftHand&&this.leftArm.wristJoint.rotation.set(this.currentPose.leftHand.x,this.currentPose.leftHand.y,this.currentPose.leftHand.z),this._applyPrecisionFingerRotations(this.leftArm.fingers,this.currentPose.leftFingers,!0)),this.rightArm&&(this.currentPose.rightShoulder&&this.rightArm.shoulderJoint.rotation.set(this.currentPose.rightShoulder.x,this.currentPose.rightShoulder.y,this.currentPose.rightShoulder.z),this.currentPose.rightArm&&this.rightArm.upperArmJoint.rotation.set(this.currentPose.rightArm.x,this.currentPose.rightArm.y,this.currentPose.rightArm.z),this.currentPose.rightForearm&&this.rightArm.elbowJoint.rotation.set(this.currentPose.rightForearm.x,this.currentPose.rightForearm.y,this.currentPose.rightForearm.z),this.currentPose.rightHand&&this.rightArm.wristJoint.rotation.set(this.currentPose.rightHand.x,this.currentPose.rightHand.y,this.currentPose.rightHand.z),this._applyPrecisionFingerRotations(this.rightArm.fingers,this.currentPose.rightFingers,!1)),this._updateFace(e)}_applyPrecisionFingerRotations(e,n,i){if(!(!e||!n))for(const[r,s]of Object.entries(n)){const o=e[r];if(!o)continue;const a=s[0]||0,l=s[1]||0,c=s[2]!==void 0?s[2]:o.defaultSplay;r==="thumb"?(o.base.rotation.x=a,o.base.rotation.z=(i?-.55:.55)+a*.3,o.tip.rotation.x=l):(o.base.rotation.x=a,o.base.rotation.z=c,o.mid&&(o.mid.rotation.x=l),o.tip&&o.tip!==o.mid&&(o.tip.rotation.x=l*.75))}}destroy(){this.scene.remove(this.group)}}const Bp={cyan:{name:"Cyber Teal",rimColor:62206,ringColor:3065014,keyIntensity:2.2},violet:{name:"Deep Violet",rimColor:12616956,ringColor:9647082,keyIntensity:2},amber:{name:"Sunset Gold",rimColor:16498468,ringColor:16096779,keyIntensity:2.4},arctic:{name:"Arctic Ice",rimColor:3718648,ringColor:165063,keyIntensity:2.2},stealth:{name:"OLED Stealth",rimColor:6583435,ringColor:4674921,keyIntensity:1.8}},NT=[{id:"human-light",label:"🙂 Human · Light",desc:"Human avatar with face, hair and clothing — light skin tone"},{id:"human-tan",label:"🙂 Human · Tan",desc:"Human avatar — medium skin tone"},{id:"human-brown",label:"🙂 Human · Brown",desc:"Human avatar — brown skin tone"},{id:"human-deep",label:"🙂 Human · Deep",desc:"Human avatar — deep skin tone"},{id:"pro-hands",label:"🌟 ASL Pro Hands",desc:"High-contrast palms & luminous knuckle accents"},{id:"natural",label:"👤 Realistic Human",desc:"Warm natural skin tones & realistic shading"},{id:"cyber",label:"🤖 Cyber Assistant",desc:"Futuristic android with neon vector hand lines"},{id:"high-contrast",label:"🌑 High-Contrast",desc:"Maximum contrast silhouette for accessibility"}];function DT({queueRef:t}){const e=ye.useRef(null),n=ye.useRef(null),i=ye.useRef(null),r=ye.useRef(null),s=ye.useRef(null),o=ye.useRef(null),a=ye.useRef(null),l=ye.useRef(null),[c,d]=ye.useState(null),[f,h]=ye.useState(null),[p,v]=ye.useState(null),[x,m]=ye.useState(1),[u,g]=ye.useState(!1),[_,y]=ye.useState("Avatar Ready"),[b,C]=ye.useState("cyan"),[R,U]=ye.useState("hands"),[E,T]=ye.useState("human-tan"),[k,Y]=ye.useState(!1),te=ye.useRef(x);te.current=x;const N=ye.useRef(u);N.current=u,ye.useEffect(()=>{const D=e.current;if(!D)return;const j=new TT;r.current=j;const Z=D.clientWidth||700,q=D.clientHeight||520,J=new gn(36,Z/q,.1,100);J.position.set(.1,.28,1.55);const oe=new F0({antialias:!0,alpha:!0,powerPreference:"high-performance"});oe.setSize(Z,q),oe.setPixelRatio(Math.min(window.devicePixelRatio,2)),oe.shadowMap.enabled=!0,oe.shadowMap.type=n0,oe.toneMapping=r0,oe.toneMappingExposure=1.2,D.appendChild(oe.domElement);const ge=new bT(16777215,1.4);j.add(ge);const he=new Wc(16777215,2);he.position.set(1.5,2.8,2.5),he.castShadow=!0,he.shadow.mapSize.width=1024,he.shadow.mapSize.height=1024,he.shadow.camera.near=.5,he.shadow.camera.far=10,j.add(he);const Ue=new Wc(10863848,1.2);Ue.position.set(-2,1.2,1.8),j.add(Ue);const Re=new RT(16775406,2.6);Re.position.set(0,.4,1.8),Re.target.position.set(0,.15,0),Re.angle=Math.PI/4,Re.penumbra=.5,Re.decay=1.2,j.add(Re),j.add(Re.target),l.current=Re;const we=new Wc(62206,2.4);we.position.set(0,1.6,-2.5),j.add(we),s.current=we;const $e=new Kt(.88,.96,.08,48),H=new rn({color:659480,roughness:.35,metalness:.85}),Tt=new Pe($e,H);Tt.position.y=-.44,Tt.receiveShadow=!0,j.add(Tt);const Te=new Il(.88,.012,16,64),Ne=new jd({color:62206}),_e=new Pe(Te,Ne);_e.rotation.x=Math.PI/2,_e.position.y=-.4,j.add(_e),o.current=Ne;const st=new Dn,Ie=60,A=new Float32Array(Ie*3);for(let K=0;K<Ie*3;K+=3)A[K]=(Math.random()-.5)*4,A[K+1]=Math.random()*2-.5,A[K+2]=(Math.random()-.5)*3-.5;st.setAttribute("position",new qn(A,3));const M=new O0({size:.02,color:5221630,transparent:!0,opacity:.35}),G=new wT(st,M);j.add(G);const Q=new LT(j,{style:"human-tan"});Q.group.rotation.y=0,n.current=Q;let ee=!1,ne={x:0,y:0},se={phi:-.04,theta:.08,radius:1.55,targetY:.2};const ue=()=>{const K=se.radius*Math.sin(se.theta)*Math.cos(se.phi),Se=se.targetY+.1+se.radius*Math.sin(se.phi),ve=se.radius*Math.cos(se.theta)*Math.cos(se.phi);J.position.set(K,Se,ve),J.lookAt(0,se.targetY,0)};a.current={setPreset:K=>{K==="hands"?(se.phi=-.04,se.theta=.08,se.radius=1.45,se.targetY=.18,Y(!0)):K==="face"?(se.phi=.08,se.theta=0,se.radius=1.35,se.targetY=.42,Y(!1)):K==="standard"?(se.phi=0,se.theta=0,se.radius=2,se.targetY=.24,Y(!1)):K==="full"&&(se.phi=0,se.theta=0,se.radius=2.7,se.targetY=.1,Y(!1)),ue()}},ue();const me=K=>{ee=!0,ne={x:K.clientX,y:K.clientY}},Ae=K=>{if(!ee)return;const Se=K.clientX-ne.x,ve=K.clientY-ne.y;ne={x:K.clientX,y:K.clientY},se.theta-=Se*.008,se.phi=Math.max(-.4,Math.min(.4,se.phi+ve*.008)),ue()},Fe=()=>{ee=!1},ie=K=>{K.preventDefault(),se.radius=Math.max(1.1,Math.min(3.2,se.radius+K.deltaY*.002)),ue()},Ve=oe.domElement;Ve.addEventListener("mousedown",me),window.addEventListener("mousemove",Ae),window.addEventListener("mouseup",Fe),Ve.addEventListener("wheel",ie,{passive:!1});const Be=K=>{K.touches.length===1&&(ee=!0,ne={x:K.touches[0].clientX,y:K.touches[0].clientY})},Le=K=>{if(!ee||K.touches.length!==1)return;const Se=K.touches[0].clientX-ne.x,ve=K.touches[0].clientY-ne.y;ne={x:K.touches[0].clientX,y:K.touches[0].clientY},se.theta-=Se*.01,se.phi=Math.max(-.4,Math.min(.4,se.phi+ve*.01)),ue()},Ee=()=>{ee=!1};Ve.addEventListener("touchstart",Be,{passive:!0}),window.addEventListener("touchmove",Le,{passive:!0}),window.addEventListener("touchend",Ee);let ae=null,be=0,Ye=0,et=0,ze;const le=new k0,L=()=>{var tt;ze=requestAnimationFrame(L);const K=le.getDelta(),Se=te.current,ve=N.current,Qe=ve?0:Math.min(K,.1)*Se;if(Q.update(Qe),G.rotation.y+=5e-4,!ve&&(!ae&&t.current.length>0&&(ae=t.current.shift(),i.current=ae,be=0,Ye=0,et=0,ae.type==="clip"?(d(ae.gloss),h("clip"),v(null),y(`Signing: ${ae.gloss}`)):ae.type==="fingerspell"&&(d(ae.gloss),h("fingerspell"),v(ae.letters[0]||""),y(`Fingerspelling: ${ae.gloss}`))),ae)){if(be+=Qe,ae.type==="clip"){const nt=Kd[ae.gloss];if(nt&&nt.length>0){const qe=(ae.duration_ms||900)/1e3/nt.length;if(be>=(Ye+1)*qe)if(Ye++,Ye<nt.length){const vt=nt[Ye];Q.setPose(vt,qe*.9)}else Q.resetToIdle(.35),ae=null,d(null),h(null),y("Avatar Ready");else Ye===0&&be<=Qe*2&&Q.setPose(nt[0],qe*.9)}else ae=null,d(null),h(null),y("Avatar Ready")}else if(ae.type==="fingerspell"){const nt=ae.letters||[];if(be>=(et+1)*.35)if(et++,et<nt.length){const qe=nt[et].toUpperCase();v(qe);const vt=$s[qe]||$s.A;Q.setPose(vt,.2)}else Q.resetToIdle(.35),ae=null,d(null),h(null),v(null),y("Avatar Ready");else if(et===0&&be<=Qe*2){const qe=((tt=nt[0])==null?void 0:tt.toUpperCase())||"A";v(qe);const vt=$s[qe]||$s.A;Q.setPose(vt,.2)}}}oe.render(j,J)};L();const de=()=>{if(!D)return;const K=D.clientWidth,Se=D.clientHeight||520;J.aspect=K/Se,J.updateProjectionMatrix(),oe.setSize(K,Se)};return window.addEventListener("resize",de),()=>{window.removeEventListener("resize",de),Ve.removeEventListener("mousedown",me),window.removeEventListener("mousemove",Ae),window.removeEventListener("mouseup",Fe),Ve.removeEventListener("wheel",ie),Ve.removeEventListener("touchstart",Be),window.removeEventListener("touchmove",Le),window.removeEventListener("touchend",Ee),cancelAnimationFrame(ze),oe.dispose(),Ve.parentNode&&Ve.parentNode.removeChild(Ve)}},[t]);const B=D=>{var j;T(D),(j=n.current)==null||j.setStyle(D)},$=D=>{C(D);const j=Bp[D];j&&s.current&&o.current&&(s.current.color.setHex(j.rimColor),o.current.color.setHex(j.ringColor))},F=D=>{var j;U(D),(j=a.current)==null||j.setPreset(D)},P=()=>{F(k?"standard":"hands")},I=()=>{i.current&&t.current.push({...i.current})};return S.jsxs("div",{className:`avatar-stage theme-${b}`,ref:e,children:[S.jsxs("div",{className:"avatar-hud-top",children:[S.jsxs("div",{className:"avatar-badge-group",children:[S.jsxs("div",{className:`hud-badge status-indicator ${c?"live-action":""}`,children:[S.jsx("span",{className:`hud-dot ${c?"active":""}`}),S.jsx("span",{className:"hud-status-text",children:_})]}),c&&S.jsxs("div",{className:"hud-badge sign-gloss-badge",children:[S.jsx("span",{className:"hud-label",children:f==="clip"?"ASL GLOSS":"FINGERSPELL"}),S.jsx("strong",{className:"gloss-title",children:c})]})]}),S.jsxs("div",{className:"hud-controls-group",children:[S.jsx("button",{type:"button",className:`hud-icon-btn ${k?"active-glow":""}`,onClick:P,title:k?"Reset to Normal View":"Zoom in on Hand Signs",children:k?"🔍 Normal View":"👐 Hand Zoom"}),S.jsx("div",{className:"speed-chips-wrap",title:"Playback Speed",children:[.5,1,1.5,2].map(D=>S.jsxs("button",{type:"button",className:`speed-chip-btn ${x===D?"active":""}`,onClick:()=>m(D),children:[D,"x"]},D))}),S.jsx("button",{type:"button",className:`hud-icon-btn ${u?"highlight":""}`,onClick:()=>g(D=>!D),title:u?"Resume sign animation":"Pause animation",children:u?"▶ Resume":"⏸ Pause"}),S.jsx("button",{type:"button",className:"hud-icon-btn",onClick:I,title:"Replay previous sign",children:"↺ Replay"})]})]}),p&&S.jsxs("div",{className:"fingerspell-overlay-card",children:[S.jsx("div",{className:"fingerspell-label",children:"FINGERSPELLING LETTER"}),S.jsx("div",{className:"fingerspell-char-box",children:p}),S.jsxs("div",{className:"fingerspell-word",children:["Word: ",c]})]}),S.jsxs("div",{className:"avatar-hud-bottom",children:[S.jsxs("div",{className:"avatar-style-selector-bar",children:[S.jsx("span",{className:"hud-sub-label",children:"Hand Clarity:"}),NT.map(D=>S.jsx("button",{type:"button",className:`style-chip-btn ${E===D.id?"active":""}`,onClick:()=>B(D.id),title:D.desc,children:D.label},D.id))]}),S.jsxs("div",{className:"camera-presets-bar",children:[S.jsx("span",{className:"hud-sub-label",children:"Angle:"}),S.jsx("button",{type:"button",className:`preset-btn ${R==="hands"?"active":""}`,onClick:()=>F("hands"),title:"High-Detail Focus on Hand Gestures",children:"👐 Hands Focus"}),S.jsx("button",{type:"button",className:`preset-btn ${R==="standard"?"active":""}`,onClick:()=>F("standard"),title:"Standard ASL Upper Body",children:"🧍 Upper Body"}),S.jsx("button",{type:"button",className:`preset-btn ${R==="face"?"active":""}`,onClick:()=>F("face"),title:"Focus on Facial Expressions",children:"👤 Face"})]}),S.jsxs("div",{className:"lighting-theme-bar",children:[S.jsx("span",{className:"hud-sub-label",children:"Mood:"}),Object.entries(Bp).map(([D,j])=>S.jsx("button",{type:"button",className:`theme-dot-btn ${b===D?"active":""}`,onClick:()=>$(D),title:`Lighting: ${j.name}`,children:S.jsx("span",{className:`dot-color ${D}`})},D))]})]}),S.jsx("div",{className:"avatar-hint-bar",children:S.jsx("span",{children:"🖱️ Drag to rotate 3D view • Scroll to zoom • Click “👐 Hand Zoom” for close-up finger articulation"})})]})}function UT({onFinalText:t,onInterimText:e,onListeningChange:n}){const[i,r]=ye.useState(!1),[s,o]=ye.useState(!0),[a,l]=ye.useState(""),[c,d]=ye.useState("en-US"),f=ye.useRef(null),h=ye.useRef(!1),p=ye.useRef(null);ye.useEffect(()=>{n==null||n(i)},[i,n]);const v=ye.useRef(t),x=ye.useRef(e);ye.useEffect(()=>{v.current=t,x.current=e},[t,e]),ye.useEffect(()=>{const u=window.SpeechRecognition||window.webkitSpeechRecognition;if(!u){o(!1);return}const g=new u;return g.continuous=!0,g.interimResults=!0,g.lang=c,g.maxAlternatives=1,g.onstart=()=>{h.current=!0,r(!0),l("")},g.onresult=_=>{var b,C,R;let y="";for(let U=_.resultIndex;U<_.results.length;U++){const E=_.results[U],T=((b=E[0])==null?void 0:b.transcript)||"";if(E.isFinal){const k=T.trim();k&&((C=v.current)==null||C.call(v,k))}else y+=T}(R=x.current)==null||R.call(x,y.trim())},g.onerror=_=>{switch(console.warn("Speech recognition error:",_.error),_.error){case"not-allowed":case"service-not-allowed":l("Microphone access blocked. Please click the lock/settings icon in your browser address bar and allow microphone permissions."),h.current=!1,r(!1);break;case"audio-capture":l("No microphone detected. Please connect a microphone and check system settings."),h.current=!1,r(!1);break;case"network":l("Network error: Unable to reach speech recognition service. Please check your internet connection or browser settings.");break;case"no-speech":break;case"aborted":break;default:l(`Speech recognition issue: ${_.error}`);break}},g.onend=()=>{var _;h.current?(p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{if(h.current)try{g.start()}catch(y){console.log("Recognition restart note:",y.message)}},150)):(r(!1),(_=x.current)==null||_.call(x,""))},f.current=g,()=>{if(h.current=!1,p.current&&clearTimeout(p.current),f.current)try{f.current.abort()}catch{}}},[]),ye.useEffect(()=>{if(f.current&&(f.current.lang=c,h.current))try{f.current.stop()}catch{}},[c]);const m=()=>{if(f.current)if(i||h.current){h.current=!1,r(!1),p.current&&clearTimeout(p.current);try{f.current.stop()}catch(u){console.warn("Stop error:",u)}e==null||e("")}else{l(""),h.current=!0;try{f.current.start(),r(!0)}catch(u){if(console.warn("Start error:",u),u.name==="InvalidStateError")try{f.current.stop(),setTimeout(()=>{h.current&&f.current.start()},100)}catch{l("Failed to initialize microphone. Please click again."),h.current=!1,r(!1)}else l("Failed to start speech recognition. "+(u.message||"")),h.current=!1,r(!1)}}};return s?S.jsxs("div",{className:"speech-controls-wrapper",children:[S.jsxs("div",{className:"speech-actions",children:[S.jsx("div",{className:`mic-button-aura-wrap ${i?"is-active":""}`,children:S.jsx("button",{id:"mic-toggle-btn",type:"button",onClick:m,className:`mic-button ${i?"listening":""}`,title:i?"Click to stop listening":"Click to activate microphone",children:i?S.jsxs(S.Fragment,{children:[S.jsx("span",{className:"mic-icon-pulse",children:"⏹"}),S.jsx("span",{className:"mic-btn-text",children:"Stop Listening"})]}):S.jsxs(S.Fragment,{children:[S.jsx("span",{className:"mic-icon",children:"🎙️"}),S.jsx("span",{className:"mic-btn-text",children:"Start Voice Input"})]})})}),i?S.jsxs("div",{className:"audio-visualizer-container","aria-label":"Audio Visualizer Active",children:[S.jsxs("div",{className:"audio-visualizer",children:[S.jsx("span",{className:"bar bar-1"}),S.jsx("span",{className:"bar bar-2"}),S.jsx("span",{className:"bar bar-3"}),S.jsx("span",{className:"bar bar-4"}),S.jsx("span",{className:"bar bar-5"}),S.jsx("span",{className:"bar bar-6"}),S.jsx("span",{className:"bar bar-7"}),S.jsx("span",{className:"bar bar-8"}),S.jsx("span",{className:"bar bar-9"}),S.jsx("span",{className:"bar bar-10"})]}),S.jsx("span",{className:"recording-indicator-tag",children:"● RECORDING"})]}):S.jsxs("div",{className:"speech-idle-hint",children:[S.jsx("span",{className:"hint-dot"}),S.jsx("span",{children:"Click to speak naturally in any supported language"})]}),S.jsxs("div",{className:"language-selector",children:[S.jsx("span",{className:"lang-icon",children:"🌐"}),S.jsxs("select",{id:"lang-select",value:c,onChange:u=>d(u.target.value),disabled:i,className:"lang-select",title:"Choose recognition language",children:[S.jsx("option",{value:"en-US",children:"🇺🇸 English (US)"}),S.jsx("option",{value:"en-IN",children:"🇮🇳 English (India)"}),S.jsx("option",{value:"en-GB",children:"🇬🇧 English (UK)"}),S.jsx("option",{value:"hi-IN",children:"🇮🇳 हिन्दी (Hindi)"}),S.jsx("option",{value:"ta-IN",children:"🇮🇳 தமிழ் (Tamil)"}),S.jsx("option",{value:"es-ES",children:"🇪🇸 Español"}),S.jsx("option",{value:"fr-FR",children:"🇫🇷 Français"}),S.jsx("option",{value:"de-DE",children:"🇩🇪 Deutsch"})]})]})]}),a&&S.jsxs("div",{className:"speech-error-box",role:"alert",children:[S.jsx("div",{className:"error-icon",children:"⚠️"}),S.jsxs("div",{className:"error-text",children:[S.jsx("span",{children:a}),S.jsx("button",{className:"error-dismiss-btn",onClick:()=>l(""),title:"Dismiss warning",children:"✕"})]})]})]}):S.jsxs("div",{className:"unsupported-banner",children:[S.jsxs("div",{className:"unsupported-header",children:[S.jsx("span",{className:"unsupported-icon",children:"🎙️⚠️"}),S.jsx("strong",{children:"Speech Recognition API Not Supported in this Browser"})]}),S.jsxs("p",{className:"unsupported-text",children:["Please open in ",S.jsx("strong",{children:"Google Chrome"})," or ",S.jsx("strong",{children:"Microsoft Edge"})," for live Web Speech ASR voice recognition, or use the high-speed manual text input below."]})]})}const IT=[{id:"all",label:"All Signs",icon:"✨"},{id:"greetings",label:"Greetings",icon:"👋"},{id:"questions",label:"Questions",icon:"❓"},{id:"emergency",label:"Emergency & Health",icon:"🚨"},{id:"actions",label:"Actions",icon:"⚡"},{id:"sentiments",label:"Sentiments",icon:"👍"}],Hp=[{gloss:"HELLO",category:"greetings",icon:"👋",desc:"Temple wave outward",duration:"900ms"},{gloss:"THANK-YOU",category:"greetings",icon:"🙏",desc:"Chin outward flat hand",duration:"900ms"},{gloss:"PLEASE",category:"greetings",icon:"🤲",desc:"Circular chest rub",duration:"900ms"},{gloss:"SORRY",category:"greetings",icon:"🙇",desc:"Fist circular chest rub",duration:"900ms"},{gloss:"WHERE",category:"questions",icon:"🧭",desc:"Palms up questioning sway",duration:"900ms"},{gloss:"WHAT",category:"questions",icon:"❔",desc:"Open palms side-to-side",duration:"900ms"},{gloss:"WHO",category:"questions",icon:"👤",desc:"Index finger circle chin",duration:"900ms"},{gloss:"NAME",category:"questions",icon:"🏷️",desc:"H-fingers tapping X",duration:"900ms"},{gloss:"HELP",category:"emergency",icon:"🆘",desc:"Thumbs up on flat palm lift",duration:"900ms"},{gloss:"DOCTOR",category:"emergency",icon:"🩺",desc:"M-fingers tap wrist pulse",duration:"900ms"},{gloss:"WATER",category:"emergency",icon:"💧",desc:"W-hand taps chin",duration:"900ms"},{gloss:"EMERGENCY",category:"emergency",icon:"🚨",desc:"E-handshake side to side",duration:"900ms"},{gloss:"GO",category:"actions",icon:"🏃",desc:"Index fingers flip forward",duration:"900ms"},{gloss:"STOP",category:"actions",icon:"🛑",desc:"Flat chop onto open palm",duration:"900ms"},{gloss:"YES",category:"sentiments",icon:"✅",desc:"Fist nodding up and down",duration:"900ms"},{gloss:"NO",category:"sentiments",icon:"❌",desc:"Snap fingers shut",duration:"900ms"},{gloss:"GOOD",category:"sentiments",icon:"🌟",desc:"Chin touch to left palm",duration:"900ms"},{gloss:"BAD",category:"sentiments",icon:"👎",desc:"Chin touch flipped down",duration:"900ms"}],FT="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),OT=["ASL","AI","CODE","FUTURE","ANTIGRAVITY","ROBOT","XYLOPHONE"];function zT({onTriggerSign:t,onTriggerFingerspell:e}){const[n,i]=ye.useState("all"),[r,s]=ye.useState(""),[o,a]=ye.useState(!1),l=ye.useMemo(()=>Hp.filter(c=>{const d=n==="all"||c.category===n,f=!r.trim()||c.gloss.toLowerCase().includes(r.toLowerCase())||c.desc.toLowerCase().includes(r.toLowerCase());return d&&f}),[n,r]);return S.jsxs("div",{className:"dictionary-container",children:[S.jsxs("div",{className:"dict-toolbar",children:[S.jsxs("div",{className:"dict-mode-tabs",children:[S.jsxs("button",{type:"button",className:`dict-mode-btn ${o?"":"active"}`,onClick:()=>a(!1),children:["📚 Sign Library (",Hp.length,")"]}),S.jsx("button",{type:"button",className:`dict-mode-btn ${o?"active":""}`,onClick:()=>a(!0),children:"🔤 A-Z Fingerspell Board"})]}),!o&&S.jsxs("div",{className:"dict-search-wrap",children:[S.jsx("span",{className:"search-icon",children:"🔍"}),S.jsx("input",{type:"text",className:"dict-search-input",placeholder:"Filter signs (e.g. hello, help, doctor)...",value:r,onChange:c=>s(c.target.value)}),r&&S.jsx("button",{type:"button",className:"dict-search-clear",onClick:()=>s(""),children:"✕"})]})]}),o?S.jsxs("div",{className:"fingerspell-board-wrap",children:[S.jsx("div",{className:"fingerspell-board-header",children:S.jsxs("div",{children:[S.jsx("h4",{className:"board-title",children:"Interactive ASL Fingerspelling Simulator"}),S.jsx("p",{className:"board-subtitle",children:"Click any letter to execute real-time 3D hand articulation"})]})}),S.jsx("div",{className:"alphabet-grid",children:FT.map(c=>S.jsxs("button",{type:"button",className:"alphabet-key-btn",onClick:()=>e(c),title:`Fingerspell letter ${c}`,children:[S.jsx("span",{className:"key-char",children:c}),S.jsx("span",{className:"key-sub",children:"ASL"})]},c))}),S.jsxs("div",{className:"fingerspell-quick-words",children:[S.jsx("span",{className:"quick-label",children:"Try fingerspelling words:"}),S.jsx("div",{className:"quick-word-chips",children:OT.map(c=>S.jsxs("button",{type:"button",className:"quick-word-chip",onClick:()=>e(c),children:["🔤 ",c]},c))})]})]}):S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"category-chips-row",children:IT.map(c=>S.jsxs("button",{type:"button",className:`category-chip ${n===c.id?"active":""}`,onClick:()=>i(c.id),children:[S.jsx("span",{children:c.icon}),S.jsx("span",{children:c.label})]},c.id))}),S.jsxs("div",{className:"sign-cards-grid",children:[l.map(c=>S.jsxs("button",{type:"button",className:"sign-action-card",onClick:()=>t(c.gloss),title:`Click to animate 3D sign for "${c.gloss}"`,children:[S.jsxs("div",{className:"card-top",children:[S.jsx("span",{className:"card-icon",children:c.icon}),S.jsx("span",{className:"card-badge",children:c.duration})]}),S.jsx("div",{className:"card-gloss",children:c.gloss}),S.jsx("div",{className:"card-desc",children:c.desc}),S.jsxs("div",{className:"card-footer-action",children:[S.jsx("span",{children:"Sign Now"}),S.jsx("span",{className:"arrow-icon",children:"▶"})]})]},c.gloss)),l.length===0&&S.jsxs("div",{className:"no-signs-found",children:[S.jsx("span",{className:"no-signs-icon",children:"🔎"}),S.jsxs("p",{children:["No predefined signs found matching “",r,"”."]}),S.jsxs("button",{type:"button",className:"quick-fingerspell-btn",onClick:()=>e(r.toUpperCase()),children:["🔤 Fingerspell “",r.toUpperCase(),"” on Avatar"]})]})]})]})]})}const kT=[{id:"all",label:"All"},{id:"voice",label:"🎙️ Voice"},{id:"typed",label:"⌨️ Typed"},{id:"prompt",label:"⚡ Quick"},{id:"direct",label:"📚 Dictionary"}];function BT(t){const e=new Date(t),n=new Date,i=new Date(Date.now()-864e5);return e.toDateString()===n.toDateString()?"Today":e.toDateString()===i.toDateString()?"Yesterday":e.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})}function HT({entries:t,onReplay:e,onDelete:n,onClear:i}){const[r,s]=ye.useState(""),[o,a]=ye.useState("all"),l=ye.useMemo(()=>{const p=r.trim().toLowerCase();return t.filter(v=>o!=="all"&&!(o==="direct"?["direct","keyboard"].includes(v.source):v.source===o)?!1:p?v.text.toLowerCase().includes(p)||v.tokens.some(x=>x.gloss.toLowerCase().includes(p)):!0)},[t,r,o]),c=ye.useMemo(()=>{const p=[];return l.forEach(v=>{const x=BT(v.at),m=p[p.length-1];m&&m.label===x?m.items.push(v):p.push({label:x,items:[v]})}),p},[l]),d=()=>{const p=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),v=document.createElement("a");v.href=URL.createObjectURL(p),v.download=`signsync-history-${new Date().toISOString().slice(0,10)}.json`,v.click(),URL.revokeObjectURL(v.href)},f=()=>{window.confirm(`Delete all ${t.length} history entries? This cannot be undone.`)&&i()},h=t.reduce((p,v)=>p+v.tokens.length,0);return S.jsxs("div",{className:"studio-card history-panel",children:[S.jsxs("div",{className:"card-header-bar",children:[S.jsxs("div",{children:[S.jsxs("h3",{className:"card-heading",children:["Translation History (",t.length,")"]}),S.jsxs("p",{className:"card-subheading",children:[t.length," phrases · ",h," signs · saved in this browser"]})]}),t.length>0&&S.jsxs("div",{className:"history-actions",children:[S.jsx("button",{type:"button",className:"transcript-action-btn",onClick:d,children:"⬇ Export"}),S.jsx("button",{type:"button",className:"transcript-action-btn danger",onClick:f,children:"Clear all"})]})]}),t.length>0&&S.jsxs("div",{className:"history-toolbar",children:[S.jsx("input",{className:"history-search",type:"search",placeholder:"Search phrases or signs…",value:r,onChange:p=>s(p.target.value)}),S.jsx("div",{className:"history-filters",children:kT.map(p=>S.jsx("button",{type:"button",className:`history-filter-chip ${o===p.id?"active":""}`,onClick:()=>a(p.id),children:p.label},p.id))})]}),t.length===0?S.jsxs("div",{className:"empty-history-state",children:[S.jsx("span",{className:"empty-icon",children:"🕘"}),S.jsx("p",{children:"No history yet."}),S.jsx("span",{className:"empty-sub",children:"Phrases you speak, type or pick from the dictionary will appear here."})]}):l.length===0?S.jsx("div",{className:"empty-history-state",children:S.jsx("p",{children:"No entries match your search."})}):S.jsx("div",{className:"history-list",children:c.map(p=>S.jsxs("div",{children:[S.jsx("div",{className:"history-day",children:p.label}),p.items.map(v=>{var x;return S.jsxs("div",{className:"history-entry",children:[S.jsxs("div",{className:"history-entry-top",children:[S.jsx("span",{className:"history-text",children:v.text}),S.jsxs("span",{className:"history-meta",children:[v.source," · ",new Date(v.at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]}),S.jsx("div",{className:"history-gloss",children:v.tokens.map((m,u)=>S.jsxs("span",{className:`history-chip ${m.type}`,title:m.type==="clip"?"3D sign":"Fingerspelled",children:[m.type==="fingerspell"?"🔤 ":"",m.gloss]},u))}),((x=v.unmapped)==null?void 0:x.length)>0&&S.jsxs("div",{className:"history-warn",children:["⚠ No sign yet for: ",v.unmapped.join(", ")]}),S.jsxs("div",{className:"history-entry-actions",children:[S.jsx("button",{type:"button",className:"history-btn primary",onClick:()=>e(v),children:"▶ Replay"}),S.jsx("button",{type:"button",className:"history-btn",onClick:()=>{var m;return(m=navigator.clipboard)==null?void 0:m.writeText(v.tokens.map(u=>u.gloss).join(" "))},children:"Copy gloss"}),S.jsx("button",{type:"button",className:"history-btn danger",onClick:()=>n(v.id),children:"Delete"})]})]},v.id)})]},p.label))})]})}const B0="signsync.history.v1",GT=200;function VT(){try{const t=localStorage.getItem(B0),e=t?JSON.parse(t):[];return Array.isArray(e)?e:[]}catch{return[]}}function WT(t){try{localStorage.setItem(B0,JSON.stringify(t.slice(0,GT)))}catch{}}function jT({text:t,source:e,tokens:n,unmapped:i=[]}){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,text:t,source:e,at:new Date().toISOString(),tokens:n,unmapped:i}}const Gp="http://127.0.0.1:8000",XT=[{label:"👋 Hello & Thank you",text:"Hello thank you"},{label:"🩺 Where is doctor?",text:"Where is doctor"},{label:"🆘 Emergency please help",text:"Emergency please help"},{label:"💧 Water please",text:"Water please"},{label:"✅ Yes good",text:"Yes good"},{label:"🛑 Please stop",text:"Please stop"}];function YT(t){if(!t)return[];const e=t.toUpperCase().replace(/[^A-Z0-9\s-]/g,"").split(/\s+/).filter(Boolean),n=[];let i=0;for(;i<e.length;){if(i+1<e.length&&e[i]==="THANK"&&e[i+1]==="YOU"){n.push("THANK-YOU"),i+=2;continue}n.push(e[i]),i++}return n.map(r=>!!Kd[r]?{gloss:r,type:"clip",duration_ms:900}:{gloss:r,type:"fingerspell",letters:r.split(""),duration_ms:350*r.length})}function qT(){const t=ye.useRef([]),[e,n]=ye.useState(""),[i,r]=ye.useState(""),[s,o]=ye.useState(!1),[a,l]=ye.useState([]),[c,d]=ye.useState(VT);ye.useEffect(()=>WT(c),[c]);const f=F=>d(P=>[jT(F),...P].slice(0,200)),h=F=>t.current.push(...F.tokens),p=F=>d(P=>P.filter(I=>I.id!==F)),[v,x]=ye.useState(""),[m,u]=ye.useState(!1),[g,_]=ye.useState("translate"),[y,b]=ye.useState(!1),[C,R]=ye.useState(!1);ye.useEffect(()=>{const F=async()=>{try{(await fetch(`${Gp}/api/health`,{method:"GET"})).ok?u(!0):u(!1)}catch{u(!1)}};F();const P=setInterval(F,4e3);return()=>clearInterval(P)},[]);const U=async(F,P="voice")=>{let I=[],D=[];if(m)try{const j=await fetch(`${Gp}/api/translate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:F})});if(j.ok){const Z=await j.json();Z.tokens&&Z.tokens.length>0&&(I=Z.tokens,D=Z.unmapped||[])}}catch{}I.length===0&&(I=YT(F)),I.length!==0&&(t.current.push(...I),f({text:F,source:P,tokens:I,unmapped:D}),I.forEach(j=>{l(Z=>[{word:j.gloss,type:j.type,source:P,at:new Date().toLocaleTimeString()},...Z].slice(0,30))}))},E=F=>{F&&(n(P=>P?P+" "+F:F),r(""),U(F,"voice"))},T=F=>{F==null||F.preventDefault();const P=v.trim();P&&(n(I=>I?I+" "+P:P),U(P,"typed"),x(""))},k=F=>{const I=!!Kd[F]?{gloss:F,type:"clip",duration_ms:900}:{gloss:F,type:"fingerspell",letters:F.split(""),duration_ms:350*F.length};t.current.push(I),f({text:F,source:"direct",tokens:[I]}),l(D=>[{word:F,type:I.type,source:"direct",at:new Date().toLocaleTimeString()},...D].slice(0,30))},Y=F=>{if(!F)return;const P=F.toUpperCase().replace(/[^A-Z]/g,"");if(!P)return;const I={gloss:P,type:"fingerspell",letters:P.split(""),duration_ms:350*P.length};t.current.push(I),f({text:P,source:"keyboard",tokens:[I]}),l(D=>[{word:P,type:"fingerspell",source:"keyboard",at:new Date().toLocaleTimeString()},...D].slice(0,30))},te=F=>{n(P=>P?P+" "+F:F),U(F,"prompt")},N=()=>{n(""),r("")},B=()=>{e&&(navigator.clipboard.writeText(e),R(!0),setTimeout(()=>R(!1),2e3))},$=()=>{l([]),t.current=[]};return S.jsxs("div",{className:"app-layout",children:[S.jsxs("header",{className:"app-navbar",children:[S.jsxs("div",{className:"navbar-brand",children:[S.jsxs("div",{className:"brand-logo-icon",children:[S.jsx("span",{className:"logo-symbol",children:"🤟"}),S.jsx("span",{className:"logo-glow-ring"})]}),S.jsxs("div",{children:[S.jsxs("div",{className:"brand-title",children:["SignSync ",S.jsx("span",{className:"brand-badge-ai",children:"AI"})]}),S.jsx("div",{className:"brand-tagline",children:"3D Sign Language Avatar & ASL Translation Studio"})]})]}),S.jsxs("div",{className:"navbar-telemetry",children:[S.jsxs("div",{className:`telemetry-pill ${m?"online":"local"}`,title:"Backend NLP Server",children:[S.jsx("span",{className:"telemetry-dot"}),S.jsx("span",{className:"telemetry-text",children:m?"FastAPI Server Connected":"Local Rule Engine Active"})]}),S.jsxs("div",{className:`telemetry-pill ${s?"recording":"ready"}`,title:"Web Speech ASR",children:[S.jsx("span",{className:"telemetry-dot"}),S.jsx("span",{className:"telemetry-text",children:s?"Microphone Live":"ASR Ready"})]}),S.jsx("button",{type:"button",className:"navbar-action-btn",onClick:()=>b(!0),title:"System architecture & ASL guide",children:"ℹ️ Guide"})]})]}),S.jsxs("main",{className:"studio-workspace-grid",children:[S.jsxs("section",{className:"studio-viewport-pane",children:[S.jsxs("div",{className:"pane-header-bar",children:[S.jsxs("div",{className:"pane-title-group",children:[S.jsx("span",{className:"pane-icon",children:"🤖"}),S.jsx("h2",{className:"pane-title",children:"3D Avatar Stage"})]}),S.jsx("span",{className:"viewport-resolution-tag",children:"WebGL 60 FPS • Real-Time Articulation"})]}),S.jsx("div",{className:"avatar-canvas-wrapper",children:S.jsx(DT,{queueRef:t})}),S.jsxs("div",{className:"quick-prompts-card",children:[S.jsxs("div",{className:"quick-prompts-header",children:[S.jsx("span",{className:"quick-title",children:"⚡ Instant Demo Phrases:"}),S.jsx("span",{className:"quick-sub",children:"Click to test instant translation & 3D signing"})]}),S.jsx("div",{className:"quick-prompts-list",children:XT.map(F=>S.jsx("button",{type:"button",className:"quick-prompt-btn",onClick:()=>te(F.text),title:`Translate & Sign: "${F.text}"`,children:F.label},F.label))})]})]}),S.jsxs("section",{className:"studio-controls-pane",children:[S.jsxs("div",{className:"control-tabs-bar",children:[S.jsxs("button",{type:"button",className:`control-tab-btn ${g==="translate"?"active":""}`,onClick:()=>_("translate"),children:[S.jsx("span",{className:"tab-icon",children:"🎙️"}),S.jsx("span",{children:"Live Translator"})]}),S.jsxs("button",{type:"button",className:`control-tab-btn ${g==="dictionary"?"active":""}`,onClick:()=>_("dictionary"),children:[S.jsx("span",{className:"tab-icon",children:"📚"}),S.jsx("span",{children:"ASL Dictionary"})]}),S.jsxs("button",{type:"button",className:`control-tab-btn ${g==="stream"?"active":""}`,onClick:()=>_("stream"),children:[S.jsx("span",{className:"tab-icon",children:"📊"}),S.jsxs("span",{children:["Sign Stream (",a.length,")"]})]}),S.jsxs("button",{type:"button",className:`control-tab-btn ${g==="history"?"active":""}`,onClick:()=>_("history"),children:[S.jsx("span",{className:"tab-icon",children:"🕘"}),S.jsxs("span",{children:["History (",c.length,")"]})]}),S.jsxs("button",{type:"button",className:`control-tab-btn ${g==="guide"?"active":""}`,onClick:()=>_("guide"),children:[S.jsx("span",{className:"tab-icon",children:"💡"}),S.jsx("span",{children:"ASL Grammar"})]})]}),g==="translate"&&S.jsxs("div",{className:"tab-content-panel",children:[S.jsxs("div",{className:"studio-card",children:[S.jsx("div",{className:"card-header-bar",children:S.jsxs("div",{children:[S.jsx("h3",{className:"card-heading",children:"Voice & Speech Input"}),S.jsx("p",{className:"card-subheading",children:"Continuous speech recognition with multi-language parsing"})]})}),S.jsx(UT,{onFinalText:E,onInterimText:r,onListeningChange:o})]}),S.jsxs("div",{className:"studio-card",style:{marginTop:16},children:[S.jsxs("div",{className:"card-header-bar",children:[S.jsxs("div",{className:"transcript-label-group",children:[S.jsx("span",{className:"terminal-dot red"}),S.jsx("span",{className:"terminal-dot yellow"}),S.jsx("span",{className:"terminal-dot green"}),S.jsx("h3",{className:"card-heading",style:{marginLeft:6},children:"Live Translation Transcript"})]}),e&&S.jsxs("div",{className:"transcript-actions-group",children:[S.jsx("button",{type:"button",onClick:B,className:"transcript-action-btn",title:"Copy transcript text",children:C?"✓ Copied":"📋 Copy"}),S.jsx("button",{type:"button",onClick:N,className:"transcript-action-btn danger",title:"Clear transcript text",children:"🗑 Clear"})]})]}),S.jsx("div",{className:"transcript-terminal-box",children:S.jsxs("div",{className:"transcript-body",children:[e&&S.jsx("span",{className:"final-transcript",children:e}),i&&S.jsxs("span",{className:"interim-transcript",children:[e?" ":"",i]}),!e&&!i&&S.jsxs("span",{className:"empty-transcript-placeholder",children:[S.jsx("span",{className:"placeholder-cursor",children:"_"}),"Speak through your microphone or type a sentence below to watch the 3D avatar generate sign language…"]})]})}),S.jsxs("form",{onSubmit:T,className:"manual-input-box",children:[S.jsxs("div",{className:"input-field-wrap",children:[S.jsx("span",{className:"input-prefix",children:"⌨️"}),S.jsx("input",{type:"text",className:"studio-input-field",placeholder:"Type any word or sentence (e.g., 'Hello thank you where is doctor') and hit Enter...",value:v,onChange:F=>x(F.target.value)}),v&&S.jsx("button",{type:"button",className:"input-clear-btn",onClick:()=>x(""),children:"✕"})]}),S.jsxs("button",{type:"submit",className:"studio-submit-btn",disabled:!v.trim(),children:[S.jsx("span",{children:"Translate & Sign"}),S.jsx("span",{className:"submit-arrow",children:"➔"})]})]})]})]}),g==="dictionary"&&S.jsx("div",{className:"tab-content-panel",children:S.jsx(zT,{onTriggerSign:k,onTriggerFingerspell:Y})}),g==="stream"&&S.jsx("div",{className:"tab-content-panel",children:S.jsxs("div",{className:"studio-card",children:[S.jsxs("div",{className:"card-header-bar",children:[S.jsxs("div",{children:[S.jsxs("h3",{className:"card-heading",children:["Sign Activity Stream (",a.length,")"]}),S.jsx("p",{className:"card-subheading",children:"Chronological record of all generated ASL glosses & fingerspells"})]}),a.length>0&&S.jsx("button",{type:"button",onClick:$,className:"transcript-action-btn danger",children:"Clear Log"})]}),a.length===0?S.jsxs("div",{className:"empty-history-state",children:[S.jsx("span",{className:"empty-icon",children:"📜"}),S.jsx("p",{children:"No signs performed yet."}),S.jsx("span",{className:"empty-sub",children:"Speak or type above, or click a sign in the dictionary!"})]}):S.jsx("div",{className:"history-stream-scroll",children:S.jsx("div",{className:"history-timeline",children:a.map((F,P)=>S.jsxs("div",{className:"stream-item-row",children:[S.jsx("div",{className:"stream-time-badge",children:F.at}),S.jsxs("div",{className:"stream-content",children:[S.jsx("span",{className:"stream-gloss-text",children:F.word}),S.jsxs("div",{className:"stream-tags",children:[S.jsx("span",{className:`stream-type-tag ${F.type}`,children:F.type==="clip"?"✨ 3D ASL Pose":"🔤 Fingerspelled"}),S.jsxs("span",{className:"stream-source-tag",children:["Source: ",F.source]})]})]}),S.jsx("button",{type:"button",className:"stream-replay-btn",onClick:()=>k(F.word),title:`Replay "${F.word}"`,children:"↺ Replay"})]},P))})})]})}),g==="history"&&S.jsx("div",{className:"tab-content-panel",children:S.jsx(HT,{entries:c,onReplay:h,onDelete:p,onClear:()=>d([])})}),g==="guide"&&S.jsx("div",{className:"tab-content-panel",children:S.jsxs("div",{className:"studio-card",children:[S.jsx("h3",{className:"card-heading",children:"ASL Grammar & Translation Pipeline"}),S.jsx("p",{className:"card-subheading",children:"How English voice/text translates into American Sign Language (ASL)"}),S.jsxs("div",{className:"guide-cards-list",children:[S.jsxs("div",{className:"guide-item-card",children:[S.jsx("div",{className:"guide-card-icon",children:"🧠"}),S.jsxs("div",{className:"guide-card-content",children:[S.jsx("h4",{children:"ASL Syntax & Topic-Comment Structure"}),S.jsxs("p",{children:["Unlike English (Subject-Verb-Object), ASL frequently follows a ",S.jsx("strong",{children:"Topic-Comment"})," or ",S.jsx("strong",{children:"Time-Topic-Comment"})," order. Auxiliary words (like “is”, “the”, “a”) are omitted in ASL gloss notation."]})]})]}),S.jsxs("div",{className:"guide-item-card",children:[S.jsx("div",{className:"guide-card-icon",children:"🔤"}),S.jsxs("div",{className:"guide-card-content",children:[S.jsx("h4",{children:"Automatic Fingerspelling Fallback"}),S.jsxs("p",{children:["Words not present in the 3D sign library (such as proper names, specific technical terms, or rare words) automatically switch to ",S.jsx("strong",{children:"A-Z fingerspelling"}),", animating each letter sequentially."]})]})]}),S.jsxs("div",{className:"guide-item-card",children:[S.jsx("div",{className:"guide-card-icon",children:"⚡"}),S.jsxs("div",{className:"guide-card-content",children:[S.jsx("h4",{children:"Procedural Forward-Kinematics"}),S.jsx("p",{children:"Joints (shoulders, elbows, wrists, and 5-finger articulations) interpolate smoothly via spherical Euler keyframing with natural physics damping and blinking micro-animations."})]})]})]})]})})]})]}),y&&S.jsx("div",{className:"modal-backdrop",onClick:()=>b(!1),children:S.jsxs("div",{className:"modal-window",onClick:F=>F.stopPropagation(),children:[S.jsxs("div",{className:"modal-header",children:[S.jsxs("div",{className:"modal-title-group",children:[S.jsx("span",{className:"modal-icon",children:"ℹ️"}),S.jsx("h3",{children:"About SignSync AI Studio"})]}),S.jsx("button",{type:"button",className:"modal-close-btn",onClick:()=>b(!1),children:"✕"})]}),S.jsxs("div",{className:"modal-body",children:[S.jsxs("p",{children:[S.jsx("strong",{children:"SignSync AI"})," is a real-time web-based assistive communication workstation that converts spoken speech and written text into 3D Sign Language animations."]}),S.jsxs("div",{className:"modal-features-grid",children:[S.jsxs("div",{className:"feature-box",children:[S.jsx("span",{className:"feature-icon",children:"🎙️"}),S.jsx("strong",{children:"Web Speech ASR"}),S.jsx("p",{children:"Continuous speech recognition supporting English, Hindi, Tamil, Spanish, and more."})]}),S.jsxs("div",{className:"feature-box",children:[S.jsx("span",{className:"feature-icon",children:"🤖"}),S.jsx("strong",{children:"Three.js 3D Avatar"}),S.jsx("p",{children:"Articulated humanoid skeleton with 5-finger hand shapes and facial expressions."})]}),S.jsxs("div",{className:"feature-box",children:[S.jsx("span",{className:"feature-icon",children:"⚡"}),S.jsx("strong",{children:"FastAPI NLP Engine"}),S.jsx("p",{children:"Deep-learning and rule-based ASL gloss tokenization and compound phrase matching."})]}),S.jsxs("div",{className:"feature-box",children:[S.jsx("span",{className:"feature-icon",children:"🔤"}),S.jsx("strong",{children:"A-Z Fingerspelling"}),S.jsx("p",{children:"Complete 26-letter hand shape system for continuous unknown word spelling."})]})]})]}),S.jsx("div",{className:"modal-footer",children:S.jsx("button",{type:"button",className:"modal-action-btn",onClick:()=>b(!1),children:"Got It"})})]})}),S.jsxs("footer",{className:"app-footer",children:[S.jsx("div",{className:"footer-left",children:S.jsx("span",{children:"SignSync AI Studio • Real-Time Procedural WebGL Sign Language Synthesis"})}),S.jsx("div",{className:"footer-right",children:S.jsx("span",{children:"WebGL 2.0 • Web Speech API • Three.js"})})]})]})}jc.createRoot(document.getElementById("root")).render(S.jsx(l_.StrictMode,{children:S.jsx(qT,{})}));
