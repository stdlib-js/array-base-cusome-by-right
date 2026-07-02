"use strict";var h=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(e){throw (a=0, e)}};};var d=h(function(D,m){
var y=require('@stdlib/array-base-arraylike2object/dist');function R(r,a,e,t,o,v,l){var i,s,n,c;for(s=!1,i=0,n=o,c=r.length-1;c>=0;c--)s===!1&&v.call(l,r[c],c,r)&&(i+=1,i>=a&&(s=!0)),e[n]=s,n+=t;return e}function b(r,a,e,t,o,v,l){var i,s,n,c,q,f,g,u;for(s=r.data,n=e.data,c=r.accessors[0],q=e.accessors[1],g=o,f=!1,i=0,u=s.length-1;u>=0;u--)f===!1&&v.call(l,c(s,u),u,s)&&(i+=1,i>=a&&(f=!0)),q(n,g,f),g+=t;return n}function j(r,a,e,t,o,v,l){var i,s;return i=y(r),s=y(e),i.accessorProtocol||s.accessorProtocol?(b(i,a,s,t,o,v,l),e):(R(r,a,e,t,o,v,l),e)}m.exports=j
});var x=h(function(E,p){
var k=require('@stdlib/array-base-filled/dist'),B=d();function O(r,a,e,t){var o=k(!1,r.length);return B(r,a,o,1,0,e,t)}p.exports=O
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=x(),z=d();w(P,"assign",z);module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
