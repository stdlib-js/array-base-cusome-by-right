// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";function t(e,r,t,n,o,a,l){var i,c;return i=s(e),c=s(t),i.accessorProtocol||c.accessorProtocol?(function(e,r,s,t,n,o,a){var l,i,c,d,m,f,j,h;for(i=e.data,c=s.data,d=e.accessors[0],m=s.accessors[1],j=n,f=!1,l=0,h=i.length-1;h>=0;h--)!1===f&&o.call(a,d(i,h),h,i)&&(l+=1)>=r&&(f=!0),m(c,j,f),j+=t}(i,r,c,n,o,a,l),t):(function(e,r,s,t,n,o,a){var l,i,c,d;for(i=!1,l=0,c=n,d=e.length-1;d>=0;d--)!1===i&&o.call(a,e[d],d,e)&&(l+=1)>=r&&(i=!0),s[c]=i,c+=t}(e,r,t,n,o,a,l),t)}function n(e,s,n,o){return t(e,s,r(!1,e.length),1,0,n,o)}e(n,"assign",t);export{t as assign,n as default};
//# sourceMappingURL=index.mjs.map
