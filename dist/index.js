"use strict";var h=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var d=h(function(D,m){
var y=require('@stdlib/array-base-arraylike2object/dist');function R(r,a,s,t,o,v,l){var i,e,n,c;for(e=!1,i=0,n=o,c=r.length-1;c>=0;c--)e===!1&&v.call(l,r[c],c,r)&&(i+=1,i>=a&&(e=!0)),s[n]=e,n+=t;return s}function b(r,a,s,t,o,v,l){var i,e,n,c,q,f,g,u;for(e=r.data,n=s.data,c=r.accessors[0],q=s.accessors[1],g=o,f=!1,i=0,u=e.length-1;u>=0;u--)f===!1&&v.call(l,c(e,u),u,e)&&(i+=1,i>=a&&(f=!0)),q(n,g,f),g+=t;return n}function j(r,a,s,t,o,v,l){var i,e;return i=y(r),e=y(s),i.accessorProtocol||e.accessorProtocol?(b(i,a,e,t,o,v,l),s):(R(r,a,s,t,o,v,l),s)}m.exports=j
});var x=h(function(E,p){
var k=require('@stdlib/array-base-filled/dist'),B=d();function O(r,a,s,t){var o=k(!1,r.length);return B(r,a,o,1,0,s,t)}p.exports=O
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=x(),z=d();w(P,"assign",z);module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
