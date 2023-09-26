var s1=Object.defineProperty;var o1=(ii,Mr,Br)=>Mr in ii?s1(ii,Mr,{enumerable:!0,configurable:!0,writable:!0,value:Br}):ii[Mr]=Br;var ue=(ii,Mr,Br)=>(o1(ii,typeof Mr!="symbol"?Mr+"":Mr,Br),Br);(async()=>{(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const ii="modulepreload",Mr=function(a){return"/"+a},Br={},Ku=function(a,e,t){if(!e||e.length===0)return a();const n=document.getElementsByTagName("link");return Promise.all(e.map(r=>{if(r=Mr(r),r in Br)return;Br[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(t)for(let l=n.length-1;l>=0;l--){const c=n[l];if(c.href===r&&(!i||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":ii,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((l,c)=>{o.addEventListener("load",l),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>a())},gs="156",$u=0,ol=1,Zu=2,ll=1,Ju=2,Tr=3,gr=0,At=1,qt=2,kr=0,Ri=1,cl=2,hl=3,ul=4,Qu=5,Ci=100,ed=101,td=102,dl=103,pl=104,rd=200,id=201,nd=202,ad=203,fl=204,ml=205,sd=206,od=207,ld=208,cd=209,hd=210,ud=0,dd=1,pd=2,vs=3,fd=4,md=5,gd=6,vd=7,gl=0,_d=1,xd=2,zr=0,yd=1,Sd=2,Md=3,Td=4,bd=5,vl=300,Ui=301,Pi=302,_s=303,xs=304,da=306,Li=1e3,Yt=1001,pa=1002,_t=1003,ys=1004,fa=1005,Rt=1006,_l=1007,ni=1008,Gr=1009,Ed=1010,wd=1011,Ss=1012,xl=1013,Hr=1014,br=1015,Cn=1016,yl=1017,Sl=1018,ai=1020,Ad=1021,Kt=1023,Rd=1024,Cd=1025,si=1026,Di=1027,Ud=1028,Ml=1029,Pd=1030,Tl=1031,bl=1033,Ms=33776,Ts=33777,bs=33778,Es=33779,El=35840,wl=35841,Al=35842,Rl=35843,Ld=36196,Cl=37492,Ul=37496,Pl=37808,Ll=37809,Dl=37810,Il=37811,Nl=37812,Ol=37813,Fl=37814,Bl=37815,kl=37816,zl=37817,Gl=37818,Hl=37819,Vl=37820,Wl=37821,ws=36492,Xl=36494,jl=36495,Dd=36283,ql=36284,Yl=36285,Kl=36286,Un=2300,Ii=2301,As=2302,$l=2400,Zl=2401,Jl=2402,Id=2500,Nd=0,Ql=1,Rs=2,ec=3e3,oi=3001,Od=3200,tc=3201,rc=0,Fd=1,li="",Qe="srgb",xt="srgb-linear",ma="display-p3",Cs=7680,Bd=519,kd=512,zd=513,Gd=514,Hd=515,Vd=516,Wd=517,Xd=518,jd=519,Us=35044,ic="300 es",Ps=1035,Er=2e3,ga=2001;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let r=0,i=n.length;r<i;r++)n[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nc=1234567;const Pn=Math.PI/180,Oi=180/Math.PI;function rr(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[a&255]+Ct[a>>8&255]+Ct[a>>16&255]+Ct[a>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function yt(a,e,t){return Math.max(e,Math.min(t,a))}function Ls(a,e){return(a%e+e)%e}function qd(a,e,t,n,r){return n+(a-e)*(r-n)/(t-e)}function Yd(a,e,t){return a!==e?(t-a)/(e-a):0}function Ln(a,e,t){return(1-t)*a+t*e}function Kd(a,e,t,n){return Ln(a,e,1-Math.exp(-t*n))}function $d(a,e=1){return e-Math.abs(Ls(a,e*2)-e)}function Zd(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Jd(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Qd(a,e){return a+Math.floor(Math.random()*(e-a+1))}function ep(a,e){return a+Math.random()*(e-a)}function tp(a){return a*(.5-Math.random())}function rp(a){a!==void 0&&(nc=a);let e=nc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ip(a){return a*Pn}function np(a){return a*Oi}function Ds(a){return(a&a-1)===0&&a!==0}function ac(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function va(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function ap(a,e,t,n,r){const i=Math.cos,s=Math.sin,o=i(t/2),l=s(t/2),c=i((e+n)/2),h=s((e+n)/2),u=i((e-n)/2),d=s((e-n)/2),p=i((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":a.set(o*h,l*u,l*d,o*c);break;case"YZY":a.set(l*d,o*h,l*u,o*c);break;case"ZXZ":a.set(l*u,l*d,o*h,o*c);break;case"XZX":a.set(o*h,l*v,l*p,o*c);break;case"YXY":a.set(l*p,o*h,l*v,o*c);break;case"ZYZ":a.set(l*v,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vr(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function it(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Is={DEG2RAD:Pn,RAD2DEG:Oi,generateUUID:rr,clamp:yt,euclideanModulo:Ls,mapLinear:qd,inverseLerp:Yd,lerp:Ln,damp:Kd,pingpong:$d,smoothstep:Zd,smootherstep:Jd,randInt:Qd,randFloat:ep,randFloatSpread:tp,seededRandom:rp,degToRad:ip,radToDeg:np,isPowerOfTwo:Ds,ceilPowerOfTwo:ac,floorPowerOfTwo:va,setQuaternionFromProperEuler:ap,normalize:it,denormalize:vr};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*n-s*r+e.x,this.y=i*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,r,i,s,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,s,o,l,c)}set(e,t,n,r,i,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=i,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],v=n[8],g=r[0],m=r[3],f=r[6],y=r[1],_=r[4],x=r[7],S=r[2],b=r[5],R=r[8];return i[0]=s*g+o*y+l*S,i[3]=s*m+o*_+l*b,i[6]=s*f+o*x+l*R,i[1]=c*g+h*y+u*S,i[4]=c*m+h*_+u*b,i[7]=c*f+h*x+u*R,i[2]=d*g+p*y+v*S,i[5]=d*m+p*_+v*b,i[8]=d*f+p*x+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-n*i*h+n*o*l+r*i*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,d=o*l-h*i,p=c*i-s*l,v=t*u+n*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=u*g,e[1]=(r*c-h*n)*g,e[2]=(o*n-r*s)*g,e[3]=d*g,e[4]=(h*t-r*l)*g,e[5]=(r*i-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(s*t-n*i)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,s,o){const l=Math.cos(i),c=Math.sin(i);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ns.makeScale(e,t)),this}rotate(e){return this.premultiply(Ns.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ns.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new $e;function sc(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Dn(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function sp(){const a=Dn("canvas");return a.style.display="block",a}const oc={};function In(a){a in oc||(oc[a]=!0,console.warn(a))}function Fi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Os(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const op=new $e().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),lp=new $e().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function cp(a){return a.convertSRGBToLinear().applyMatrix3(lp)}function hp(a){return a.applyMatrix3(op).convertLinearToSRGB()}const up={[xt]:a=>a,[Qe]:a=>a.convertSRGBToLinear(),[ma]:cp},dp={[xt]:a=>a,[Qe]:a=>a.convertLinearToSRGB(),[ma]:hp},Ht={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return xt},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=up[e],r=dp[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let Bi;class lc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bi===void 0&&(Bi=Dn("canvas")),Bi.width=e.width,Bi.height=e.height;const n=Bi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dn("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let s=0;s<i.length;s++)i[s]=Fi(i[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pp=0;class cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=rr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let i;if(Array.isArray(r)){i=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?i.push(Fs(r[s].image)):i.push(Fs(r[s]))}else i=Fs(r);n.url=i}return t||(e.images[this.uuid]=n),n}}function Fs(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?lc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fp=0;class St extends Ni{constructor(e=St.DEFAULT_IMAGE,t=St.DEFAULT_MAPPING,n=Yt,r=Yt,i=Rt,s=ni,o=Kt,l=Gr,c=St.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=rr(),this.name="",this.source=new cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(In("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===oi?Qe:li),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return In("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Qe?oi:ec}set encoding(e){In("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===oi?Qe:li}}St.DEFAULT_IMAGE=null,St.DEFAULT_MAPPING=vl,St.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*i,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*i,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*i,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],u=s[5],d=s[9],p=s[2],v=s[6],g=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(d-v)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(d+v)<.1&&Math.abs(o+u+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(o+1)/2,y=(u+1)/2,_=(g+1)/2,x=(l+h)/4,S=(c+p)/4,b=(d+v)/4;return f>y&&f>_?f<.01?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(f),r=x/n,i=S/n):y>_?y<.01?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(y),n=x/r,i=b/r):_<.01?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=S/i,r=b/i),this.set(n,r,i,t),this}let m=Math.sqrt((v-d)*(v-d)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(v-d)/m,this.y=(c-p)/m,this.z=(h-l)/m,this.w=Math.acos((o+u+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mp extends Ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(In("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===oi?Qe:li),this.texture=new St(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends mp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hc extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gp extends St{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,s,o){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3];const d=i[s+0],p=i[s+1],v=i[s+2],g=i[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(u!==g||l!==d||c!==p||h!==v){let m=1-o;const f=l*d+c*p+h*v+u*g,y=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const S=Math.sqrt(_),b=Math.atan2(S,f*y);m=Math.sin(m*b)/S,o=Math.sin(o*b)/S}const x=o*y;if(l=l*m+d*x,c=c*m+p*x,h=h*m+v*x,u=u*m+g*x,m===1-o){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,s){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=i[s],d=i[s+1],p=i[s+2],v=i[s+3];return e[t]=o*v+h*u+l*p-c*d,e[t+1]=l*v+h*d+c*u-o*p,e[t+2]=c*v+h*p+o*d-l*u,e[t+3]=h*v-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,i=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),u=o(i/2),d=l(n/2),p=l(r/2),v=l(i/2);switch(s){case"XYZ":this._x=d*h*u+c*p*v,this._y=c*p*u-d*h*v,this._z=c*h*v+d*p*u,this._w=c*h*u-d*p*v;break;case"YXZ":this._x=d*h*u+c*p*v,this._y=c*p*u-d*h*v,this._z=c*h*v-d*p*u,this._w=c*h*u+d*p*v;break;case"ZXY":this._x=d*h*u-c*p*v,this._y=c*p*u+d*h*v,this._z=c*h*v+d*p*u,this._w=c*h*u-d*p*v;break;case"ZYX":this._x=d*h*u-c*p*v,this._y=c*p*u+d*h*v,this._z=c*h*v-d*p*u,this._w=c*h*u+d*p*v;break;case"YZX":this._x=d*h*u+c*p*v,this._y=c*p*u+d*h*v,this._z=c*h*v-d*p*u,this._w=c*h*u-d*p*v;break;case"XZY":this._x=d*h*u-c*p*v,this._y=c*p*u-d*h*v,this._z=c*h*v+d*p*u,this._w=c*h*u+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],i=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(i-c)*p,this._z=(s-r)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(i+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(i-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(s-r)/p,this._x=(i+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,i=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+s*o+r*c-i*l,this._y=r*h+s*l+i*o-n*c,this._z=i*h+s*c+n*l-r*o,this._w=s*h-n*o-r*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,i=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,i=e.elements,s=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*s,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*s,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,i=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*r-o*n,h=l*n+o*t-i*r,u=l*r+i*n-s*t,d=-i*t-s*n-o*r;return this.x=c*l+d*-i+h*-o-u*-s,this.y=h*l+d*-s+u*-i-c*-o,this.z=u*l+d*-o+c*-s-h*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,i=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-i*o,this.y=i*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bs.copy(this).projectOnVector(e),this.sub(Bs)}reflect(e){return this.sub(Bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new B,uc=new ir;class _r{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ar.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ar.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox),ki.applyMatrix4(e.matrixWorld),this.union(ki);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const i=r.attributes.position;for(let s=0,o=i.count;s<o;s++)Ar.fromBufferAttribute(i,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Ar)}else r.boundingBox===null&&r.computeBoundingBox(),ki.copy(r.boundingBox),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const n=e.children;for(let r=0,i=n.length;r<i;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ar),Ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nn),_a.subVectors(this.max,Nn),zi.subVectors(e.a,Nn),Gi.subVectors(e.b,Nn),Hi.subVectors(e.c,Nn),Vr.subVectors(Gi,zi),Wr.subVectors(Hi,Gi),hi.subVectors(zi,Hi);let t=[0,-Vr.z,Vr.y,0,-Wr.z,Wr.y,0,-hi.z,hi.y,Vr.z,0,-Vr.x,Wr.z,0,-Wr.x,hi.z,0,-hi.x,-Vr.y,Vr.x,0,-Wr.y,Wr.x,0,-hi.y,hi.x,0];return!ks(t,zi,Gi,Hi,_a)||(t=[1,0,0,0,1,0,0,0,1],!ks(t,zi,Gi,Hi,_a))?!1:(xa.crossVectors(Vr,Wr),t=[xa.x,xa.y,xa.z],ks(t,zi,Gi,Hi,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wr=[new B,new B,new B,new B,new B,new B,new B,new B],Ar=new B,ki=new _r,zi=new B,Gi=new B,Hi=new B,Vr=new B,Wr=new B,hi=new B,Nn=new B,_a=new B,xa=new B,ui=new B;function ks(a,e,t,n,r){for(let i=0,s=a.length-3;i<=s;i+=3){ui.fromArray(a,i);const o=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const vp=new _r,On=new B,zs=new B;class $t{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vp.setFromPoints(e).getCenter(n);let r=0;for(let i=0,s=e.length;i<s;i++)r=Math.max(r,n.distanceToSquared(e[i]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;On.subVectors(e,this.center);const t=On.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(On,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(On.copy(e.center).add(zs)),this.expandByPoint(On.copy(e.center).sub(zs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rr=new B,Gs=new B,ya=new B,Xr=new B,Hs=new B,Sa=new B,Vs=new B;class Ma{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,t),Rr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gs.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Gs);const i=e.distanceTo(t)*.5,s=-this.direction.dot(ya),o=Xr.dot(this.direction),l=-Xr.dot(ya),c=Xr.lengthSq(),h=Math.abs(1-s*s);let u,d,p,v;if(h>0)if(u=s*l-o,d=s*o-l,v=i*h,u>=0)if(d>=-v)if(d<=v){const g=1/h;u*=g,d*=g,p=u*(u+s*d+2*o)+d*(s*u+d+2*l)+c}else d=i,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d=-i,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-s*i+o)),d=u>0?-i:Math.min(Math.max(-i,-l),i),p=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-i,-l),i),p=d*(d+2*l)+c):(u=Math.max(0,-(s*i+o)),d=u>0?i:Math.min(Math.max(-i,-l),i),p=-u*u+d*(d+2*l)+c);else d=s>0?-i:i,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Gs).addScaledVector(ya,d),p}intersectSphere(e,t){Rr.subVectors(e.center,this.origin);const n=Rr.dot(this.direction),r=Rr.dot(Rr)-n*n,i=e.radius*e.radius;if(r>i)return null;const s=Math.sqrt(i-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(i=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(i=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),n>s||i>r||((i>n||isNaN(n))&&(n=i),(s<r||isNaN(r))&&(r=s),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,t,n,r,i){Hs.subVectors(t,e),Sa.subVectors(n,e),Vs.crossVectors(Hs,Sa);let s=this.direction.dot(Vs),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Xr.subVectors(this.origin,e);const l=o*this.direction.dot(Sa.crossVectors(Xr,Sa));if(l<0)return null;const c=o*this.direction.dot(Hs.cross(Xr));if(c<0||l+c>s)return null;const h=-o*Xr.dot(Vs);return h<0?null:this.at(h/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,r,i,s,o,l,c,h,u,d,p,v,g,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,s,o,l,c,h,u,d,p,v,g,m)}set(e,t,n,r,i,s,o,l,c,h,u,d,p,v,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=i,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Vi.setFromMatrixColumn(e,0).length(),i=1/Vi.setFromMatrixColumn(e,1).length(),s=1/Vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,i=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(i),u=Math.sin(i);if(e.order==="XYZ"){const d=s*h,p=s*u,v=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+v*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=v+p*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,v=c*h,g=c*u;t[0]=d+g*o,t[4]=v*o-p,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-v,t[6]=g+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,v=c*h,g=c*u;t[0]=d-g*o,t[4]=-s*u,t[8]=v+p*o,t[1]=p+v*o,t[5]=s*h,t[9]=g-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*h,p=s*u,v=o*h,g=o*u;t[0]=l*h,t[4]=v*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*c,v=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=v*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+v,t[10]=d-g*u}else if(e.order==="XZY"){const d=s*l,p=s*c,v=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=s*h,t[9]=p*u-v,t[2]=v*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_p,e,xp)}lookAt(e,t,n){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),jr.crossVectors(n,Vt),jr.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),jr.crossVectors(n,Vt)),jr.normalize(),Ta.crossVectors(Vt,jr),r[0]=jr.x,r[4]=Ta.x,r[8]=Vt.x,r[1]=jr.y,r[5]=Ta.y,r[9]=Vt.y,r[2]=jr.z,r[6]=Ta.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,i=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],v=n[2],g=n[6],m=n[10],f=n[14],y=n[3],_=n[7],x=n[11],S=n[15],b=r[0],R=r[4],O=r[8],M=r[12],A=r[1],K=r[5],F=r[9],U=r[13],N=r[2],z=r[6],H=r[10],X=r[14],V=r[3],G=r[7],k=r[11],w=r[15];return i[0]=s*b+o*A+l*N+c*V,i[4]=s*R+o*K+l*z+c*G,i[8]=s*O+o*F+l*H+c*k,i[12]=s*M+o*U+l*X+c*w,i[1]=h*b+u*A+d*N+p*V,i[5]=h*R+u*K+d*z+p*G,i[9]=h*O+u*F+d*H+p*k,i[13]=h*M+u*U+d*X+p*w,i[2]=v*b+g*A+m*N+f*V,i[6]=v*R+g*K+m*z+f*G,i[10]=v*O+g*F+m*H+f*k,i[14]=v*M+g*U+m*X+f*w,i[3]=y*b+_*A+x*N+S*V,i[7]=y*R+_*K+x*z+S*G,i[11]=y*O+_*F+x*H+S*k,i[15]=y*M+_*U+x*X+S*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],v=e[3],g=e[7],m=e[11],f=e[15];return v*(+i*l*u-r*c*u-i*o*d+n*c*d+r*o*p-n*l*p)+g*(+t*l*p-t*c*d+i*s*d-r*s*p+r*c*h-i*l*h)+m*(+t*c*u-t*o*p-i*s*u+n*s*p+i*o*h-n*c*h)+f*(-r*o*h-t*l*u+t*o*d+r*s*u-n*s*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],v=e[12],g=e[13],m=e[14],f=e[15],y=u*m*c-g*d*c+g*l*p-o*m*p-u*l*f+o*d*f,_=v*d*c-h*m*c-v*l*p+s*m*p+h*l*f-s*d*f,x=h*g*c-v*u*c+v*o*p-s*g*p-h*o*f+s*u*f,S=v*u*l-h*g*l-v*o*d+s*g*d+h*o*m-s*u*m,b=t*y+n*_+r*x+i*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=y*R,e[1]=(g*d*i-u*m*i-g*r*p+n*m*p+u*r*f-n*d*f)*R,e[2]=(o*m*i-g*l*i+g*r*c-n*m*c-o*r*f+n*l*f)*R,e[3]=(u*l*i-o*d*i-u*r*c+n*d*c+o*r*p-n*l*p)*R,e[4]=_*R,e[5]=(h*m*i-v*d*i+v*r*p-t*m*p-h*r*f+t*d*f)*R,e[6]=(v*l*i-s*m*i-v*r*c+t*m*c+s*r*f-t*l*f)*R,e[7]=(s*d*i-h*l*i+h*r*c-t*d*c-s*r*p+t*l*p)*R,e[8]=x*R,e[9]=(v*u*i-h*g*i-v*n*p+t*g*p+h*n*f-t*u*f)*R,e[10]=(s*g*i-v*o*i+v*n*c-t*g*c-s*n*f+t*o*f)*R,e[11]=(h*o*i-s*u*i-h*n*c+t*u*c+s*n*p-t*o*p)*R,e[12]=S*R,e[13]=(h*g*r-v*u*r+v*n*d-t*g*d-h*n*m+t*u*m)*R,e[14]=(v*o*r-s*g*r-v*n*l+t*g*l+s*n*m-t*o*m)*R,e[15]=(s*u*r-h*o*r+h*n*l-t*u*l-s*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),i=1-n,s=e.x,o=e.y,l=e.z,c=i*s,h=i*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*s,0,c*l-r*o,h*l+r*s,i*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,s){return this.set(1,n,i,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,i=t._x,s=t._y,o=t._z,l=t._w,c=i+i,h=s+s,u=o+o,d=i*c,p=i*h,v=i*u,g=s*h,m=s*u,f=o*u,y=l*c,_=l*h,x=l*u,S=n.x,b=n.y,R=n.z;return r[0]=(1-(g+f))*S,r[1]=(p+x)*S,r[2]=(v-_)*S,r[3]=0,r[4]=(p-x)*b,r[5]=(1-(d+f))*b,r[6]=(m+y)*b,r[7]=0,r[8]=(v+_)*R,r[9]=(m-y)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let i=Vi.set(r[0],r[1],r[2]).length();const s=Vi.set(r[4],r[5],r[6]).length(),o=Vi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],nr.copy(this);const l=1/i,c=1/s,h=1/o;return nr.elements[0]*=l,nr.elements[1]*=l,nr.elements[2]*=l,nr.elements[4]*=c,nr.elements[5]*=c,nr.elements[6]*=c,nr.elements[8]*=h,nr.elements[9]*=h,nr.elements[10]*=h,t.setFromRotationMatrix(nr),n.x=i,n.y=s,n.z=o,this}makePerspective(e,t,n,r,i,s,o=Er){const l=this.elements,c=2*i/(t-e),h=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let p,v;if(o===Er)p=-(s+i)/(s-i),v=-2*s*i/(s-i);else if(o===ga)p=-s/(s-i),v=-s*i/(s-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,i,s,o=Er){const l=this.elements,c=1/(t-e),h=1/(n-r),u=1/(s-i),d=(t+e)*c,p=(n+r)*h;let v,g;if(o===Er)v=(s+i)*u,g=-2*u;else if(o===ga)v=i*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vi=new B,nr=new Xe,_p=new B(0,0,0),xp=new B(1,1,1),jr=new B,Ta=new B,Vt=new B,dc=new Xe,pc=new ir;class Wi{constructor(e=0,t=0,n=0,r=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,i=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pc.setFromEuler(this),this.setFromQuaternion(pc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yp=0;const mc=new B,Xi=new ir,Cr=new Xe,ba=new B,Fn=new B,Sp=new B,Mp=new ir,gc=new B(1,0,0),vc=new B(0,1,0),_c=new B(0,0,1),Tp={type:"added"},bp={type:"removed"};class nt extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DEFAULT_UP.clone();const e=new B,t=new Wi,n=new ir,r=new B(1,1,1);function i(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(i),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new $e}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(gc,e)}rotateY(e){return this.rotateOnAxis(vc,e)}rotateZ(e){return this.rotateOnAxis(_c,e)}translateOnAxis(e,t){return mc.copy(e).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gc,e)}translateY(e){return this.translateOnAxis(vc,e)}translateZ(e){return this.translateOnAxis(_c,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cr.lookAt(Fn,ba,this.up):Cr.lookAt(ba,Fn,this.up),this.quaternion.setFromRotationMatrix(Cr),r&&(Cr.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Cr),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const i=this.children[n].getObjectByProperty(e,t);if(i!==void 0)return i}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectsByProperty(e,t);s.length>0&&(n=n.concat(s))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fn,e,Sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fn,Mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const i=t[n];(i.matrixWorldAutoUpdate===!0||e===!0)&&i.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let i=0,s=r.length;i<s;i++){const o=r[i];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];i(e.shapes,u)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));r.material=o}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(i(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}nt.DEFAULT_UP=new B(0,1,0),nt.DEFAULT_MATRIX_AUTO_UPDATE=!0,nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ar=new B,Ur=new B,Ws=new B,Pr=new B,ji=new B,qi=new B,xc=new B,Xs=new B,js=new B,qs=new B;let Ea=!1;class Zt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ar.subVectors(e,t),r.cross(ar);const i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ar.subVectors(r,t),Ur.subVectors(n,t),Ws.subVectors(e,t);const s=ar.dot(ar),o=ar.dot(Ur),l=ar.dot(Ws),c=Ur.dot(Ur),h=Ur.dot(Ws),u=s*c-o*o;if(u===0)return i.set(-2,-1,-1);const d=1/u,p=(c*l-o*h)*d,v=(s*h-o*l)*d;return i.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pr),Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getUV(e,t,n,r,i,s,o,l){return Ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ea=!0),this.getInterpolation(e,t,n,r,i,s,o,l)}static getInterpolation(e,t,n,r,i,s,o,l){return this.getBarycoord(e,t,n,r,Pr),l.setScalar(0),l.addScaledVector(i,Pr.x),l.addScaledVector(s,Pr.y),l.addScaledVector(o,Pr.z),l}static isFrontFacing(e,t,n,r){return ar.subVectors(n,t),Ur.subVectors(e,t),ar.cross(Ur).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ar.subVectors(this.c,this.b),Ur.subVectors(this.a,this.b),ar.cross(Ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,i){return Ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ea=!0),Zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}getInterpolation(e,t,n,r,i){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,i)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,i=this.c;let s,o;ji.subVectors(r,n),qi.subVectors(i,n),Xs.subVectors(e,n);const l=ji.dot(Xs),c=qi.dot(Xs);if(l<=0&&c<=0)return t.copy(n);js.subVectors(e,r);const h=ji.dot(js),u=qi.dot(js);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector(ji,s);qs.subVectors(e,i);const p=ji.dot(qs),v=qi.dot(qs);if(v>=0&&p<=v)return t.copy(i);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(qi,o);const m=h*v-p*u;if(m<=0&&u-h>=0&&p-v>=0)return xc.subVectors(i,r),o=(u-h)/(u-h+(p-v)),t.copy(r).addScaledVector(xc,o);const f=1/(m+g+d);return s=g*f,o=d*f,t.copy(n).addScaledVector(ji,s).addScaledVector(qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ep=0;class sr extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=Ri,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=ml,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==gr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(i){const s=[];for(const o in i){const l=i[o];delete l.metadata,s.push(l)}return s}if(t){const i=r(e.textures),s=r(e.images);i.length>0&&(n.textures=i),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let i=0;i!==r;++i)n[i]=t[i].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},wa={h:0,s:0,l:0};function Ys(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ht.workingColorSpace){if(e=Ls(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=Ys(s,i,e+1/3),this.g=Ys(s,i,e),this.b=Ys(s,i,e-1/3)}return Ht.toWorkingColorSpace(this,r),this}setStyle(e,t=Qe){function n(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=r[1],s=i.length;if(s===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qe){const n=yc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qe){return Ht.fromWorkingColorSpace(Ut.copy(this),e),Math.round(yt(Ut.r*255,0,255))*65536+Math.round(yt(Ut.g*255,0,255))*256+Math.round(yt(Ut.b*255,0,255))}getHexString(e=Qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,r=Ut.g,i=Ut.b,s=Math.max(n,r,i),o=Math.min(n,r,i);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case n:l=(r-i)/u+(r<i?6:0);break;case r:l=(i-n)/u+2;break;case i:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Qe){Ht.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,r=Ut.b;return e!==Qe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(or),or.h+=e,or.s+=t,or.l+=n,this.setHSL(or.h,or.s,or.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(wa);const n=Ln(or.h,wa.h,t),r=Ln(or.s,wa.s,t),i=Ln(or.l,wa.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ge;Ge.NAMES=yc;class Lr extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new B,Aa=new Fe;class It{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Us,this.updateRange={offset:0,count:-1},this.gpuType=br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Aa.fromBufferAttribute(this,t),Aa.applyMatrix3(e),this.setXY(t,Aa.x,Aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Us&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Sc extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mc extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wp=0;const Jt=new Xe,Ks=new nt,Yi=new B,Wt=new _r,Bn=new _r,Mt=new B;class Pt extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sc(e)?Mc:Sc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const i=new $e().getNormalMatrix(e);n.applyNormalMatrix(i),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Ks.lookAt(e),Ks.updateMatrix(),this.applyMatrix4(Ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const i=e[n];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const i=t[n];Wt.setFromBufferAttribute(i),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $t);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Bn.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(Wt.min,Bn.min),Wt.expandByPoint(Mt),Mt.addVectors(Wt.max,Bn.max),Wt.expandByPoint(Mt)):(Wt.expandByPoint(Bn.min),Wt.expandByPoint(Bn.max))}Wt.getCenter(n);let r=0;for(let i=0,s=e.count;i<s;i++)Mt.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let i=0,s=t.length;i<s;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Mt.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(e,c),Mt.add(Yi)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,i=t.normal.array,s=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let A=0;A<o;A++)c[A]=new B,h[A]=new B;const u=new B,d=new B,p=new B,v=new Fe,g=new Fe,m=new Fe,f=new B,y=new B;function _(A,K,F){u.fromArray(r,A*3),d.fromArray(r,K*3),p.fromArray(r,F*3),v.fromArray(s,A*2),g.fromArray(s,K*2),m.fromArray(s,F*2),d.sub(u),p.sub(u),g.sub(v),m.sub(v);const U=1/(g.x*m.y-m.x*g.y);isFinite(U)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(U),y.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(U),c[A].add(f),c[K].add(f),c[F].add(f),h[A].add(y),h[K].add(y),h[F].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let A=0,K=x.length;A<K;++A){const F=x[A],U=F.start,N=F.count;for(let z=U,H=U+N;z<H;z+=3)_(n[z+0],n[z+1],n[z+2])}const S=new B,b=new B,R=new B,O=new B;function M(A){R.fromArray(i,A*3),O.copy(R);const K=c[A];S.copy(K),S.sub(R.multiplyScalar(R.dot(K))).normalize(),b.crossVectors(O,K);const F=b.dot(h[A])<0?-1:1;l[A*4]=S.x,l[A*4+1]=S.y,l[A*4+2]=S.z,l[A*4+3]=F}for(let A=0,K=x.length;A<K;++A){const F=x[A],U=F.start,N=F.count;for(let z=U,H=U+N;z<H;z+=3)M(n[z+0]),M(n[z+1]),M(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new B,i=new B,s=new B,o=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),h.subVectors(s,i),u.subVectors(r,i),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),i.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,i),u.subVectors(r,i),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let f=0;f<h;f++)d[v++]=c[p++]}return new It(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const i=e.morphAttributes;for(const c in i){const h=[],u=i[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new Xe,di=new Ma,Ra=new $t,bc=new B,Ki=new B,$i=new B,Zi=new B,$s=new B,Ca=new B,Ua=new Fe,Pa=new Fe,La=new Fe,Ec=new B,wc=new B,Ac=new B,Da=new B,Ia=new B;class Tt extends nt{constructor(e=new Pt,t=new Lr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,i=n.length;r<i;r++){const s=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(i&&o){Ca.set(0,0,0);for(let l=0,c=i.length;l<c;l++){const h=o[l],u=i[l];h!==0&&($s.fromBufferAttribute(u,e),s?Ca.addScaledVector($s,h):Ca.addScaledVector($s.sub(t),h))}t.add(Ca)}return t}raycast(e,t){const n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(i),di.copy(e.ray).recast(e.near),!(Ra.containsPoint(di.origin)===!1&&(di.intersectSphere(Ra,bc)===null||di.origin.distanceToSquared(bc)>(e.far-e.near)**2))&&(Tc.copy(i).invert(),di.copy(e.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let r;const i=this.geometry,s=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,h=i.attributes.uv1,u=i.attributes.normal,d=i.groups,p=i.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=s[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,S=_;x<S;x+=3){const b=o.getX(x),R=o.getX(x+1),O=o.getX(x+2);r=Na(this,f,e,n,c,h,u,b,R,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const y=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);r=Na(this,s,e,n,c,h,u,y,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=s[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,S=_;x<S;x+=3){const b=x,R=x+1,O=x+2;r=Na(this,f,e,n,c,h,u,b,R,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const y=m,_=m+1,x=m+2;r=Na(this,s,e,n,c,h,u,y,_,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ap(a,e,t,n,r,i,s,o){let l;if(e.side===At?l=n.intersectTriangle(s,i,r,!0,o):l=n.intersectTriangle(r,i,s,e.side===gr,o),l===null)return null;Ia.copy(o),Ia.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Ia);return c<t.near||c>t.far?null:{distance:c,point:Ia.clone(),object:a}}function Na(a,e,t,n,r,i,s,o,l,c){a.getVertexPosition(o,Ki),a.getVertexPosition(l,$i),a.getVertexPosition(c,Zi);const h=Ap(a,e,t,n,Ki,$i,Zi,Da);if(h){r&&(Ua.fromBufferAttribute(r,o),Pa.fromBufferAttribute(r,l),La.fromBufferAttribute(r,c),h.uv=Zt.getInterpolation(Da,Ki,$i,Zi,Ua,Pa,La,new Fe)),i&&(Ua.fromBufferAttribute(i,o),Pa.fromBufferAttribute(i,l),La.fromBufferAttribute(i,c),h.uv1=Zt.getInterpolation(Da,Ki,$i,Zi,Ua,Pa,La,new Fe),h.uv2=h.uv1),s&&(Ec.fromBufferAttribute(s,o),wc.fromBufferAttribute(s,l),Ac.fromBufferAttribute(s,c),h.normal=Zt.getInterpolation(Da,Ki,$i,Zi,Ec,wc,Ac,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new B,materialIndex:0};Zt.getNormal(Ki,$i,Zi,u.normal),h.face=u}return h}class Ji extends Pt{constructor(e=1,t=1,n=1,r=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:s};const o=this;r=Math.floor(r),i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],u=[];let d=0,p=0;v("z","y","x",-1,-1,n,t,e,s,i,0),v("z","y","x",1,-1,n,t,-e,s,i,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,i,4),v("x","y","z",-1,-1,e,t,-n,r,i,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2));function v(g,m,f,y,_,x,S,b,R,O,M){const A=x/R,K=S/O,F=x/2,U=S/2,N=b/2,z=R+1,H=O+1;let X=0,V=0;const G=new B;for(let k=0;k<H;k++){const w=k*K-U;for(let D=0;D<z;D++){const q=D*A-F;G[g]=q*y,G[m]=w*_,G[f]=N,c.push(G.x,G.y,G.z),G[g]=0,G[m]=0,G[f]=b>0?1:-1,h.push(G.x,G.y,G.z),u.push(D/R),u.push(1-k/O),X+=1}}for(let k=0;k<O;k++)for(let w=0;w<R;w++){const D=d+w+z*k,q=d+w+z*(k+1),Y=d+(w+1)+z*(k+1),$=d+(w+1)+z*k;l.push(D,q,$),l.push(q,Y,$),V+=6}o.addGroup(p,V,M),p+=V,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const r=a[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ot(a){const e={};for(let t=0;t<a.length;t++){const n=Qi(a[t]);for(const r in n)e[r]=n[r]}return e}function Rp(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Rc(a){return a.getRenderTarget()===null?a.outputColorSpace:xt}const Zs={clone:Qi,merge:Ot};var Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qr extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=Rp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const i=this.uniforms[r].value;i&&i.isTexture?t.uniforms[r]={type:"t",value:i.toJSON(e).uuid}:i&&i.isColor?t.uniforms[r]={type:"c",value:i.getHex()}:i&&i.isVector2?t.uniforms[r]={type:"v2",value:i.toArray()}:i&&i.isVector3?t.uniforms[r]={type:"v3",value:i.toArray()}:i&&i.isVector4?t.uniforms[r]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?t.uniforms[r]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?t.uniforms[r]={type:"m4",value:i.toArray()}:t.uniforms[r]={value:i}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cc extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Er}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends Cc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oi*2*Math.atan(Math.tan(Pn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pn*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;i+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const en=-90,tn=1;class Pp extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Ft(en,tn,e,t);r.layers=this.layers,this.add(r);const i=new Ft(en,tn,e,t);i.layers=this.layers,this.add(i);const s=new Ft(en,tn,e,t);s.layers=this.layers,this.add(s);const o=new Ft(en,tn,e,t);o.layers=this.layers,this.add(o);const l=new Ft(en,tn,e,t);l.layers=this.layers,this.add(l);const c=new Ft(en,tn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,i,s,o,l]=t;for(const c of t)this.remove(c);if(e===Er)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,i,s,o,l,c]=this.children,h=e.getRenderTarget(),u=e.xr.enabled;e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,i),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Uc extends St{constructor(e,t,n,r,i,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,r,i,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lp extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(In("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===oi?Qe:li),this.texture=new Uc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ji(5,5,5),i=new qr({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:kr});i.uniforms.tEquirect.value=t;const s=new Tt(r,i),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=Rt),new Pp(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,r){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(i)}}const Js=new B,Dp=new B,Ip=new $e;class pi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Js.subVectors(n,t).cross(Dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Js),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ip.getNormalMatrix(e),r=this.coplanarPoint(Js).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new $t,Oa=new B;class Qs{constructor(e=new pi,t=new pi,n=new pi,r=new pi,i=new pi,s=new pi){this.planes=[e,t,n,r,i,s]}set(e,t,n,r,i,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Er){const n=this.planes,r=e.elements,i=r[0],s=r[1],o=r[2],l=r[3],c=r[4],h=r[5],u=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],f=r[12],y=r[13],_=r[14],x=r[15];if(n[0].setComponents(l-i,d-c,m-p,x-f).normalize(),n[1].setComponents(l+i,d+c,m+p,x+f).normalize(),n[2].setComponents(l+s,d+h,m+v,x+y).normalize(),n[3].setComponents(l-s,d-h,m-v,x-y).normalize(),n[4].setComponents(l-o,d-u,m-g,x-_).normalize(),t===Er)n[5].setComponents(l+o,d+u,m+g,x+_).normalize();else if(t===ga)n[5].setComponents(o,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Oa.x=r.normal.x>0?e.max.x:e.min.x,Oa.y=r.normal.y>0?e.max.y:e.min.y,Oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pc(){let a=null,e=!1,t=null,n=null;function r(i,s){t(i,s),n=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function Np(a,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const u=c.array,d=c.usage,p=a.createBuffer();a.bindBuffer(h,p),a.bufferData(h,u,d),c.onUploadCallback();let v;if(u instanceof Float32Array)v=a.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=a.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=a.SHORT;else if(u instanceof Uint32Array)v=a.UNSIGNED_INT;else if(u instanceof Int32Array)v=a.INT;else if(u instanceof Int8Array)v=a.BYTE;else if(u instanceof Uint8Array)v=a.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function i(c,h,u){const d=h.array,p=h.updateRange;a.bindBuffer(u,c),p.count===-1?a.bufferSubData(u,0,d):(t?a.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):a.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,r(c,h)):u.version<c.version&&(i(u.buffer,c,h),u.version=c.version)}return{get:s,remove:o,update:l}}class rn extends Pt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const i=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,p=[],v=[],g=[],m=[];for(let f=0;f<h;f++){const y=f*d-s;for(let _=0;_<c;_++){const x=_*u-i;v.push(x,-y,0),g.push(0,0,1),m.push(_/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const _=y+c*f,x=y+c*(f+1),S=y+1+c*(f+1),b=y+1+c*f;p.push(_,x,b),p.push(x,S,b)}this.setIndex(p),this.setAttribute("position",new Nt(v,3)),this.setAttribute("normal",new Nt(g,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
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
#endif`,Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qp=`#ifdef USE_IRIDESCENCE
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
#endif`,Yp=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nf=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
} // validated`,af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,sf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pf=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mf=`#ifdef USE_GRADIENTMAP
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
}`,Tf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,If=`struct PhysicalMaterial {
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Nf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Of=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Bf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xf=`#if defined( USE_POINTS_UV )
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
#endif`,jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kf=`#ifdef USE_MORPHNORMALS
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
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`#ifdef USE_MORPHTARGETS
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
#endif`,Jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,im=`#ifdef USE_NORMALMAP
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
#endif`,nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xm=`float getShadowMask() {
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
}`,ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,Gm=`#if DEPTH_PACKING == 3200
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
}`,Hm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Vm=`#define DISTANCE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,Km=`uniform vec3 diffuse;
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
}`,$m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Zm=`#define LAMBERT
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
}`,Jm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,Qm=`#define MATCAP
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
}`,eg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,tg=`#define NORMAL
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
}`,rg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,ig=`#define PHONG
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
}`,ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
}`,ag=`#define STANDARD
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
}`,og=`#define TOON
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
}`,lg=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
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
}`,ug=`uniform vec3 color;
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
}`,dg=`uniform float rotation;
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
}`,pg=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Op,alphahash_pars_fragment:Fp,alphamap_fragment:Bp,alphamap_pars_fragment:kp,alphatest_fragment:zp,alphatest_pars_fragment:Gp,aomap_fragment:Hp,aomap_pars_fragment:Vp,begin_vertex:Wp,beginnormal_vertex:Xp,bsdfs:jp,iridescence_fragment:qp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:Jp,color_fragment:Qp,color_pars_fragment:ef,color_pars_vertex:tf,color_vertex:rf,common:nf,cube_uv_reflection_fragment:af,defaultnormal_vertex:sf,displacementmap_pars_vertex:of,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,colorspace_fragment:uf,colorspace_pars_fragment:df,envmap_fragment:pf,envmap_common_pars_fragment:ff,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:Rf,envmap_vertex:vf,fog_vertex:_f,fog_pars_vertex:xf,fog_fragment:yf,fog_pars_fragment:Sf,gradientmap_pars_fragment:Mf,lightmap_fragment:Tf,lightmap_pars_fragment:bf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:wf,lights_pars_begin:Af,lights_toon_fragment:Cf,lights_toon_pars_fragment:Uf,lights_phong_fragment:Pf,lights_phong_pars_fragment:Lf,lights_physical_fragment:Df,lights_physical_pars_fragment:If,lights_fragment_begin:Nf,lights_fragment_maps:Of,lights_fragment_end:Ff,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Gf,map_fragment:Hf,map_pars_fragment:Vf,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:jf,metalnessmap_pars_fragment:qf,morphcolor_vertex:Yf,morphnormal_vertex:Kf,morphtarget_pars_vertex:$f,morphtarget_vertex:Zf,normal_fragment_begin:Jf,normal_fragment_maps:Qf,normal_pars_fragment:em,normal_pars_vertex:tm,normal_vertex:rm,normalmap_pars_fragment:im,clearcoat_normal_fragment_begin:nm,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:sm,iridescence_pars_fragment:om,opaque_fragment:lm,packing:cm,premultiplied_alpha_fragment:hm,project_vertex:um,dithering_fragment:dm,dithering_pars_fragment:pm,roughnessmap_fragment:fm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:gm,shadowmap_pars_vertex:vm,shadowmap_vertex:_m,shadowmask_pars_fragment:xm,skinbase_vertex:ym,skinning_pars_vertex:Sm,skinning_vertex:Mm,skinnormal_vertex:Tm,specularmap_fragment:bm,specularmap_pars_fragment:Em,tonemapping_fragment:wm,tonemapping_pars_fragment:Am,transmission_fragment:Rm,transmission_pars_fragment:Cm,uv_pars_fragment:Um,uv_pars_vertex:Pm,uv_vertex:Lm,worldpos_vertex:Dm,background_vert:Im,background_frag:Nm,backgroundCube_vert:Om,backgroundCube_frag:Fm,cube_vert:Bm,cube_frag:km,depth_vert:zm,depth_frag:Gm,distanceRGBA_vert:Hm,distanceRGBA_frag:Vm,equirect_vert:Wm,equirect_frag:Xm,linedashed_vert:jm,linedashed_frag:qm,meshbasic_vert:Ym,meshbasic_frag:Km,meshlambert_vert:$m,meshlambert_frag:Zm,meshmatcap_vert:Jm,meshmatcap_frag:Qm,meshnormal_vert:eg,meshnormal_frag:tg,meshphong_vert:rg,meshphong_frag:ig,meshphysical_vert:ng,meshphysical_frag:ag,meshtoon_vert:sg,meshtoon_frag:og,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:dg,sprite_frag:pg},Re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},xr={basic:{uniforms:Ot([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Ot([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Ot([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Ot([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Ot([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Ot([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Ot([Re.points,Re.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Ot([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Ot([Re.common,Re.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Ot([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Ot([Re.sprite,Re.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Ot([Re.common,Re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Ot([Re.lights,Re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};xr.physical={uniforms:Ot([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Fa={r:0,b:0,g:0};function fg(a,e,t,n,r,i,s){const o=new Ge(0);let l=i===!0?0:1,c,h,u=null,d=0,p=null;function v(m,f){let y=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_===null?g(o,l):_&&_.isColor&&(g(_,1),y=!0);const x=a.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),_&&(_.isCubeTexture||_.mapping===da)?(h===void 0&&(h=new Tt(new Ji(1,1,1),new qr({name:"BackgroundCubeMaterial",uniforms:Qi(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=_.colorSpace!==Qe,(u!==_||d!==_.version||p!==a.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=a.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Tt(new rn(2,2),new qr({name:"BackgroundMaterial",uniforms:Qi(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=_.colorSpace!==Qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Fa,Rc(a)),n.buffers.color.setClear(Fa.r,Fa.g,Fa.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:v}}function mg(a,e,t,n){const r=a.getParameter(a.MAX_VERTEX_ATTRIBS),i=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||i!==null,o={},l=m(null);let c=l,h=!1;function u(N,z,H,X,V){let G=!1;if(s){const k=g(X,H,z);c!==k&&(c=k,p(c.object)),G=f(N,X,H,V),G&&y(N,X,H,V)}else{const k=z.wireframe===!0;(c.geometry!==X.id||c.program!==H.id||c.wireframe!==k)&&(c.geometry=X.id,c.program=H.id,c.wireframe=k,G=!0)}V!==null&&t.update(V,a.ELEMENT_ARRAY_BUFFER),(G||h)&&(h=!1,O(N,z,H,X),V!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function d(){return n.isWebGL2?a.createVertexArray():i.createVertexArrayOES()}function p(N){return n.isWebGL2?a.bindVertexArray(N):i.bindVertexArrayOES(N)}function v(N){return n.isWebGL2?a.deleteVertexArray(N):i.deleteVertexArrayOES(N)}function g(N,z,H){const X=H.wireframe===!0;let V=o[N.id];V===void 0&&(V={},o[N.id]=V);let G=V[z.id];G===void 0&&(G={},V[z.id]=G);let k=G[X];return k===void 0&&(k=m(d()),G[X]=k),k}function m(N){const z=[],H=[],X=[];for(let V=0;V<r;V++)z[V]=0,H[V]=0,X[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:X,object:N,attributes:{},index:null}}function f(N,z,H,X){const V=c.attributes,G=z.attributes;let k=0;const w=H.getAttributes();for(const D in w)if(w[D].location>=0){const q=V[D];let Y=G[D];if(Y===void 0&&(D==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),D==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor)),q===void 0||q.attribute!==Y||Y&&q.data!==Y.data)return!0;k++}return c.attributesNum!==k||c.index!==X}function y(N,z,H,X){const V={},G=z.attributes;let k=0;const w=H.getAttributes();for(const D in w)if(w[D].location>=0){let q=G[D];q===void 0&&(D==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),D==="instanceColor"&&N.instanceColor&&(q=N.instanceColor));const Y={};Y.attribute=q,q&&q.data&&(Y.data=q.data),V[D]=Y,k++}c.attributes=V,c.attributesNum=k,c.index=X}function _(){const N=c.newAttributes;for(let z=0,H=N.length;z<H;z++)N[z]=0}function x(N){S(N,0)}function S(N,z){const H=c.newAttributes,X=c.enabledAttributes,V=c.attributeDivisors;H[N]=1,X[N]===0&&(a.enableVertexAttribArray(N),X[N]=1),V[N]!==z&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,z),V[N]=z)}function b(){const N=c.newAttributes,z=c.enabledAttributes;for(let H=0,X=z.length;H<X;H++)z[H]!==N[H]&&(a.disableVertexAttribArray(H),z[H]=0)}function R(N,z,H,X,V,G,k){k===!0?a.vertexAttribIPointer(N,z,H,V,G):a.vertexAttribPointer(N,z,H,X,V,G)}function O(N,z,H,X){if(n.isWebGL2===!1&&(N.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const V=X.attributes,G=H.getAttributes(),k=z.defaultAttributeValues;for(const w in G){const D=G[w];if(D.location>=0){let q=V[w];if(q===void 0&&(w==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),w==="instanceColor"&&N.instanceColor&&(q=N.instanceColor)),q!==void 0){const Y=q.normalized,$=q.itemSize,ae=t.get(q);if(ae===void 0)continue;const Q=ae.buffer,te=ae.type,pe=ae.bytesPerElement,Ue=n.isWebGL2===!0&&(te===a.INT||te===a.UNSIGNED_INT||q.gpuType===xl);if(q.isInterleavedBufferAttribute){const ce=q.data,P=ce.stride,Ne=q.offset;if(ce.isInstancedInterleavedBuffer){for(let be=0;be<D.locationSize;be++)S(D.location+be,ce.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let be=0;be<D.locationSize;be++)x(D.location+be);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let be=0;be<D.locationSize;be++)R(D.location+be,$/D.locationSize,te,Y,P*pe,(Ne+$/D.locationSize*be)*pe,Ue)}else{if(q.isInstancedBufferAttribute){for(let ce=0;ce<D.locationSize;ce++)S(D.location+ce,q.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ce=0;ce<D.locationSize;ce++)x(D.location+ce);a.bindBuffer(a.ARRAY_BUFFER,Q);for(let ce=0;ce<D.locationSize;ce++)R(D.location+ce,$/D.locationSize,te,Y,$*pe,$/D.locationSize*ce*pe,Ue)}}else if(k!==void 0){const Y=k[w];if(Y!==void 0)switch(Y.length){case 2:a.vertexAttrib2fv(D.location,Y);break;case 3:a.vertexAttrib3fv(D.location,Y);break;case 4:a.vertexAttrib4fv(D.location,Y);break;default:a.vertexAttrib1fv(D.location,Y)}}}}b()}function M(){F();for(const N in o){const z=o[N];for(const H in z){const X=z[H];for(const V in X)v(X[V].object),delete X[V];delete z[H]}delete o[N]}}function A(N){if(o[N.id]===void 0)return;const z=o[N.id];for(const H in z){const X=z[H];for(const V in X)v(X[V].object),delete X[V];delete z[H]}delete o[N.id]}function K(N){for(const z in o){const H=o[z];if(H[N.id]===void 0)continue;const X=H[N.id];for(const V in X)v(X[V].object),delete X[V];delete H[N.id]}}function F(){U(),h=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:K,initAttributes:_,enableAttribute:x,disableUnusedAttributes:b}}function gg(a,e,t,n){const r=n.isWebGL2;let i;function s(c){i=c}function o(c,h){a.drawArrays(i,c,h),t.update(h,i,1)}function l(c,h,u){if(u===0)return;let d,p;if(r)d=a,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](i,c,h,u),t.update(h,i,u)}this.setMode=s,this.render=o,this.renderInstances=l}function vg(a,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function i(R){if(R==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=i(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),d=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),f=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,x=s||e.has("OES_texture_float"),S=_&&x,b=s?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:b}}function _g(a){const e=this;let t=null,n=0,r=!1,i=!1;const s=new pi,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||r;return r=d,n=u.length,p},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=a.get(u);if(!r||v===null||v.length===0||i&&!m)i?h(null):c();else{const y=i?0:n,_=y*4;let x=f.clippingState||null;l.value=x,x=h(v,d,_,p);for(let S=0;S!==_;++S)x[S]=t[S];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,v){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const f=p+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,x=p;_!==g;++_,x+=4)s.copy(u[_]).applyMatrix4(y,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function xg(a){let e=new WeakMap;function t(s,o){return o===_s?s.mapping=Ui:o===xs&&(s.mapping=Pi),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===_s||o===xs)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Lp(l.height/2);return c.fromEquirectangularTexture(a,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:n,dispose:i}}class eo extends Cc{constructor(e=-1,t=1,n=1,r=-1,i=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let i=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(i,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const nn=4,Lc=[.125,.215,.35,.446,.526,.582],mi=20,to=new eo,Dc=new Ge;let ro=null;const gi=(1+Math.sqrt(5))/2,an=1/gi,Ic=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,gi,an),new B(0,gi,-an),new B(an,0,gi),new B(-an,0,gi),new B(gi,an,0),new B(-gi,an,0)];class Nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ro=this._renderer.getRenderTarget(),this._setSize(256);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ro),e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ro=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Cn,format:Kt,colorSpace:xt,depthBuffer:!1},r=Oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(e,t,n);const{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yg(i)),this._blurMaterial=Sg(i,e,t)}return r}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,n,r){const i=new Ft(90,1,t,n),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Dc),l.toneMapping=zr,l.autoClear=!1;const u=new Lr({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),d=new Tt(new Ji,u);let p=!1;const v=e.background;v?v.isColor&&(u.color.copy(v),e.background=null,p=!0):(u.color.copy(Dc),p=!0);for(let g=0;g<6;g++){const m=g%3;m===0?(i.up.set(0,s[g],0),i.lookAt(o[g],0,0)):m===1?(i.up.set(0,0,s[g]),i.lookAt(0,o[g],0)):(i.up.set(0,s[g],0),i.lookAt(0,0,o[g]));const f=this._cubeSize;Ba(r,m*f,g>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,i),l.render(e,i)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ui||e.mapping===Pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const i=r?this._cubemapMaterial:this._equirectMaterial,s=new Tt(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;Ba(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,to)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const i=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Ic[(r-1)%Ic.length];this._blur(e,r-1,r,i,s)}t.autoClear=n}_blur(e,t,n,r,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",i),this._halfBlur(s,e,n,n,r,"longitudinal",i)}_halfBlur(e,t,n,r,i,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Tt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(i)?Math.PI/(2*p):2*Math.PI/(2*mi-1),g=i/v,m=isFinite(i)?1+Math.floor(h*g):mi;m>mi&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const f=[];let y=0;for(let R=0;R<mi;++R){const O=R/g,M=Math.exp(-O*O/2);f.push(M),R===0?y+=M:R<m&&(y+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-n;const x=this._sizeLods[r],S=3*x*(r>_-nn?r-_+nn:0),b=4*(this._cubeSize-x);Ba(t,S,b,3*x,2*x),l.setRenderTarget(t),l.render(u,to)}}function yg(a){const e=[],t=[],n=[];let r=a;const i=a-nn+1+Lc.length;for(let s=0;s<i;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>a-nn?l=Lc[s-a+nn-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,v=6,g=3,m=2,f=1,y=new Float32Array(g*v*p),_=new Float32Array(m*v*p),x=new Float32Array(f*v*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,O=b>2?0:-1,M=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];y.set(M,g*v*b),_.set(d,m*v*b);const A=[b,b,b,b,b,b];x.set(A,f*v*b)}const S=new Pt;S.setAttribute("position",new It(y,g)),S.setAttribute("uv",new It(_,m)),S.setAttribute("faceIndex",new It(x,f)),e.push(S),r>nn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oc(a,e,t){const n=new ci(a,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ba(a,e,t,n,r){a.viewport.set(e,t,n,r),a.scissor.set(e,t,n,r)}function Sg(a,e,t){const n=new Float32Array(mi),r=new B(0,1,0);return new qr({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:io(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Fc(){return new qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Bc(){return new qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function io(){return`

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
	`}function Mg(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_s||l===xs,h=l===Ui||l===Pi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Nc(a)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new Nc(a));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",i),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Tg(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function bg(a,e,t,n){const r={},i=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}d.removeEventListener("dispose",s),delete r[d.id];const p=i.get(d);p&&(e.remove(p),i.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const v in d)e.update(d[v],a.ARRAY_BUFFER);const p=u.morphAttributes;for(const v in p){const g=p[v];for(let m=0,f=g.length;m<f;m++)e.update(g[m],a.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,v=u.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let _=0,x=y.length;_<x;_+=3){const S=y[_+0],b=y[_+1],R=y[_+2];d.push(S,b,b,R,R,S)}}else if(v!==void 0){const y=v.array;g=v.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const S=_+0,b=_+1,R=_+2;d.push(S,b,b,R,R,S)}}else return;const m=new(sc(d)?Mc:Sc)(d,1);m.version=g;const f=i.get(u);f&&e.remove(f),i.set(u,m)}function h(u){const d=i.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return i.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Eg(a,e,t,n){const r=n.isWebGL2;let i;function s(d){i=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,p){a.drawElements(i,p,o,d*l),t.update(p,i,1)}function u(d,p,v){if(v===0)return;let g,m;if(r)g=a,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](i,p,o,d*l,v),t.update(p,i,v)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=u}function wg(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(i,s,o){switch(t.calls++,s){case a.TRIANGLES:t.triangles+=o*(i/3);break;case a.LINES:t.lines+=o*(i/2);break;case a.LINE_STRIP:t.lines+=o*(i-1);break;case a.LINE_LOOP:t.lines+=o*i;break;case a.POINTS:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ag(a,e){return a[0]-e[0]}function Rg(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Cg(a,e,t){const n={},r=new Float32Array(8),i=new WeakMap,s=new et,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let m=i.get(h);if(m===void 0||m.count!==g){let _=function(){N.dispose(),i.delete(h),h.removeEventListener("dispose",_)};var p=_;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let A=0;x===!0&&(A=1),S===!0&&(A=2),b===!0&&(A=3);let K=h.attributes.position.count*A,F=1;K>e.maxTextureSize&&(F=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const U=new Float32Array(K*F*4*g),N=new hc(U,K,F,g);N.type=br,N.needsUpdate=!0;const z=A*4;for(let H=0;H<g;H++){const X=R[H],V=O[H],G=M[H],k=K*F*4*H;for(let w=0;w<X.count;w++){const D=w*z;x===!0&&(s.fromBufferAttribute(X,w),U[k+D+0]=s.x,U[k+D+1]=s.y,U[k+D+2]=s.z,U[k+D+3]=0),S===!0&&(s.fromBufferAttribute(V,w),U[k+D+4]=s.x,U[k+D+5]=s.y,U[k+D+6]=s.z,U[k+D+7]=0),b===!0&&(s.fromBufferAttribute(G,w),U[k+D+8]=s.x,U[k+D+9]=s.y,U[k+D+10]=s.z,U[k+D+11]=G.itemSize===4?s.w:1)}}m={count:g,texture:N,size:new Fe(K,F)},i.set(h,m),h.addEventListener("dispose",_)}let f=0;for(let _=0;_<d.length;_++)f+=d[_];const y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(a,"morphTargetBaseInfluence",y),u.getUniforms().setValue(a,"morphTargetInfluences",d),u.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==v){g=[];for(let x=0;x<v;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<v;x++){const S=g[x];S[0]=x,S[1]=d[x]}g.sort(Rg);for(let x=0;x<8;x++)x<v&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Ag);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const S=o[x],b=S[0],R=S[1];b!==Number.MAX_SAFE_INTEGER&&R?(m&&h.getAttribute("morphTarget"+x)!==m[b]&&h.setAttribute("morphTarget"+x,m[b]),f&&h.getAttribute("morphNormal"+x)!==f[b]&&h.setAttribute("morphNormal"+x,f[b]),r[x]=R,y+=R):(m&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),f&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const _=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(a,"morphTargetBaseInfluence",_),u.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:l}}function Ug(a,e,t,n){let r=new WeakMap;function i(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return u}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:s}}const kc=new St,zc=new hc,Gc=new gp,Hc=new Uc,Vc=[],Wc=[],Xc=new Float32Array(16),jc=new Float32Array(9),qc=new Float32Array(4);function sn(a,e,t){const n=a[0];if(n<=0||n>0)return a;const r=e*t;let i=Vc[r];if(i===void 0&&(i=new Float32Array(r),Vc[r]=i),e!==0){n.toArray(i,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(i,o)}return i}function mt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function gt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function ka(a,e){let t=Wc[e];t===void 0&&(t=new Int32Array(e),Wc[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Pg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Lg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;a.uniform2fv(this.addr,e),gt(t,e)}}function Dg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;a.uniform3fv(this.addr,e),gt(t,e)}}function Ig(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;a.uniform4fv(this.addr,e),gt(t,e)}}function Ng(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;qc.set(n),a.uniformMatrix2fv(this.addr,!1,qc),gt(t,n)}}function Og(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;jc.set(n),a.uniformMatrix3fv(this.addr,!1,jc),gt(t,n)}}function Fg(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Xc.set(n),a.uniformMatrix4fv(this.addr,!1,Xc),gt(t,n)}}function Bg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function kg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;a.uniform2iv(this.addr,e),gt(t,e)}}function zg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;a.uniform3iv(this.addr,e),gt(t,e)}}function Gg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;a.uniform4iv(this.addr,e),gt(t,e)}}function Hg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Vg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;a.uniform2uiv(this.addr,e),gt(t,e)}}function Wg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;a.uniform3uiv(this.addr,e),gt(t,e)}}function Xg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;a.uniform4uiv(this.addr,e),gt(t,e)}}function jg(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||kc,r)}function qg(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gc,r)}function Yg(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Hc,r)}function Kg(a,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(a.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||zc,r)}function $g(a){switch(a){case 5126:return Pg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ig;case 35674:return Ng;case 35675:return Og;case 35676:return Fg;case 5124:case 35670:return Bg;case 35667:case 35671:return kg;case 35668:case 35672:return zg;case 35669:case 35673:return Gg;case 5125:return Hg;case 36294:return Vg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Kg}}function Zg(a,e){a.uniform1fv(this.addr,e)}function Jg(a,e){const t=sn(e,this.size,2);a.uniform2fv(this.addr,t)}function Qg(a,e){const t=sn(e,this.size,3);a.uniform3fv(this.addr,t)}function ev(a,e){const t=sn(e,this.size,4);a.uniform4fv(this.addr,t)}function tv(a,e){const t=sn(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function rv(a,e){const t=sn(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function iv(a,e){const t=sn(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function nv(a,e){a.uniform1iv(this.addr,e)}function av(a,e){a.uniform2iv(this.addr,e)}function sv(a,e){a.uniform3iv(this.addr,e)}function ov(a,e){a.uniform4iv(this.addr,e)}function lv(a,e){a.uniform1uiv(this.addr,e)}function cv(a,e){a.uniform2uiv(this.addr,e)}function hv(a,e){a.uniform3uiv(this.addr,e)}function uv(a,e){a.uniform4uiv(this.addr,e)}function dv(a,e,t){const n=this.cache,r=e.length,i=ka(t,r);mt(n,i)||(a.uniform1iv(this.addr,i),gt(n,i));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||kc,i[s])}function pv(a,e,t){const n=this.cache,r=e.length,i=ka(t,r);mt(n,i)||(a.uniform1iv(this.addr,i),gt(n,i));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Gc,i[s])}function fv(a,e,t){const n=this.cache,r=e.length,i=ka(t,r);mt(n,i)||(a.uniform1iv(this.addr,i),gt(n,i));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Hc,i[s])}function mv(a,e,t){const n=this.cache,r=e.length,i=ka(t,r);mt(n,i)||(a.uniform1iv(this.addr,i),gt(n,i));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||zc,i[s])}function gv(a){switch(a){case 5126:return Zg;case 35664:return Jg;case 35665:return Qg;case 35666:return ev;case 35674:return tv;case 35675:return rv;case 35676:return iv;case 5124:case 35670:return nv;case 35667:case 35671:return av;case 35668:case 35672:return sv;case 35669:case 35673:return ov;case 5125:return lv;case 36294:return cv;case 36295:return hv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return mv}}class vv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=$g(t.type)}}class _v{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=gv(t.type)}}class xv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let i=0,s=r.length;i!==s;++i){const o=r[i];o.setValue(e,t[o.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function Yc(a,e){a.seq.push(e),a.map[e.id]=e}function yv(a,e,t){const n=a.name,r=n.length;for(no.lastIndex=0;;){const i=no.exec(n),s=no.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Yc(t,c===void 0?new vv(o,a,e):new _v(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new xv(o),Yc(t,h)),t=h}}}class za{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const i=e.getActiveUniform(t,r),s=e.getUniformLocation(t,i.name);yv(i,s,this)}}setValue(e,t,n,r){const i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,s=t.length;i!==s;++i){const o=t[i],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,i=e.length;r!==i;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Kc(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Sv=0;function Mv(a,e){const t=a.split(`
`),n=[],r=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let s=r;s<i;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}function Tv(a){switch(a){case xt:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),["Linear","( value )"]}}function $c(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),r=a.getShaderInfoLog(e).trim();if(n&&r==="")return"";const i=/ERROR: 0:(\d+)/.exec(r);if(i){const s=parseInt(i[1]);return t.toUpperCase()+`

`+r+`

`+Mv(a.getShaderSource(e),s)}else return r}function bv(a,e){const t=Tv(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Ev(a,e){let t;switch(e){case yd:t="Linear";break;case Sd:t="Reinhard";break;case Md:t="OptimizedCineon";break;case Td:t="ACESFilmic";break;case bd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wv(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(kn).join(`
`)}function Av(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rv(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const i=a.getActiveAttrib(e,r),s=i.name;let o=1;i.type===a.FLOAT_MAT2&&(o=2),i.type===a.FLOAT_MAT3&&(o=3),i.type===a.FLOAT_MAT4&&(o=4),t[s]={type:i.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function kn(a){return a!==""}function Zc(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jc(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(a){return a.replace(Cv,Pv)}const Uv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Pv(a,e){let t=je[e];if(t===void 0){const n=Uv.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ao(t)}const Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qc(a){return a.replace(Lv,Dv)}function Dv(a,e,t,n){let r="";for(let i=parseInt(e);i<parseInt(t);i++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return r}function eh(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Iv(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===ll?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Tr&&(e="SHADOWMAP_TYPE_VSM"),e}function Nv(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ui:case Pi:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ov(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Pi:e="ENVMAP_MODE_REFRACTION";break}return e}function Fv(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case gl:e="ENVMAP_BLENDING_MULTIPLY";break;case _d:e="ENVMAP_BLENDING_MIX";break;case xd:e="ENVMAP_BLENDING_ADD";break}return e}function Bv(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function kv(a,e,t,n){const r=a.getContext(),i=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Iv(t),c=Nv(t),h=Ov(t),u=Fv(t),d=Bv(t),p=t.isWebGL2?"":wv(t),v=Av(i),g=r.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(kn).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(kn).join(`
`),f.length>0&&(f+=`
`)):(m=[eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kn).join(`
`),f=[p,eh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zr?"#define TONE_MAPPING":"",t.toneMapping!==zr?je.tonemapping_pars_fragment:"",t.toneMapping!==zr?Ev("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,bv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kn).join(`
`)),s=ao(s),s=Zc(s,t),s=Jc(s,t),o=ao(o),o=Zc(o,t),o=Jc(o,t),s=Qc(s),o=Qc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=y+m+s,x=y+f+o,S=Kc(r,r.VERTEX_SHADER,_),b=Kc(r,r.FRAGMENT_SHADER,x);if(r.attachShader(g,S),r.attachShader(g,b),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),a.debug.checkShaderErrors){const M=r.getProgramInfoLog(g).trim(),A=r.getShaderInfoLog(S).trim(),K=r.getShaderInfoLog(b).trim();let F=!0,U=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(F=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(r,g,S,b);else{const N=$c(r,S,"vertex"),z=$c(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+N+`
`+z)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(A===""||K==="")&&(U=!1);U&&(this.diagnostics={runnable:F,programLog:M,vertexShader:{log:A,prefix:m},fragmentShader:{log:K,prefix:f}})}r.deleteShader(S),r.deleteShader(b);let R;this.getUniforms=function(){return R===void 0&&(R=new za(r,g)),R};let O;return this.getAttributes=function(){return O===void 0&&(O=Rv(r,g)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=b,this}let zv=0;class Gv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hv(e),t.set(e,n)),n}}class Hv{constructor(e){this.id=zv++,this.code=e,this.usedTimes=0}}function Vv(a,e,t,n,r,i,s){const o=new fc,l=new Gv,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,A,K,F,U){const N=F.fog,z=U.geometry,H=M.isMeshStandardMaterial?F.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),V=X&&X.mapping===da?X.image.height:null,G=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const k=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,w=k!==void 0?k.length:0;let D=0;z.morphAttributes.position!==void 0&&(D=1),z.morphAttributes.normal!==void 0&&(D=2),z.morphAttributes.color!==void 0&&(D=3);let q,Y,$,ae;if(G){const rt=xr[G];q=rt.vertexShader,Y=rt.fragmentShader}else q=M.vertexShader,Y=M.fragmentShader,l.update(M),$=l.getVertexShaderID(M),ae=l.getFragmentShaderID(M);const Q=a.getRenderTarget(),te=U.isInstancedMesh===!0,pe=!!M.map,Ue=!!M.matcap,ce=!!X,P=!!M.aoMap,Ne=!!M.lightMap,be=!!M.bumpMap,Me=!!M.normalMap,we=!!M.displacementMap,Oe=!!M.emissiveMap,le=!!M.metalnessMap,fe=!!M.roughnessMap,xe=M.anisotropy>0,se=M.clearcoat>0,Pe=M.iridescence>0,E=M.sheen>0,T=M.transmission>0,I=xe&&!!M.anisotropyMap,oe=se&&!!M.clearcoatMap,re=se&&!!M.clearcoatNormalMap,ee=se&&!!M.clearcoatRoughnessMap,me=Pe&&!!M.iridescenceMap,he=Pe&&!!M.iridescenceThicknessMap,W=E&&!!M.sheenColorMap,Ae=E&&!!M.sheenRoughnessMap,Te=!!M.specularMap,_e=!!M.specularColorMap,ge=!!M.specularIntensityMap,Ee=T&&!!M.transmissionMap,Le=T&&!!M.thicknessMap,De=!!M.gradientMap,L=!!M.alphaMap,ve=M.alphaTest>0,j=!!M.alphaHash,de=!!M.extensions,Se=!!z.attributes.uv1,He=!!z.attributes.uv2,Ie=!!z.attributes.uv3;let Be=zr;return M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Be=a.toneMapping),{isWebGL2:h,shaderID:G,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:Y,defines:M.defines,customVertexShaderID:$,customFragmentShaderID:ae,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:te,instancingColor:te&&U.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Q===null?a.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:xt,map:pe,matcap:Ue,envMap:ce,envMapMode:ce&&X.mapping,envMapCubeUVHeight:V,aoMap:P,lightMap:Ne,bumpMap:be,normalMap:Me,displacementMap:d&&we,emissiveMap:Oe,normalMapObjectSpace:Me&&M.normalMapType===Fd,normalMapTangentSpace:Me&&M.normalMapType===rc,metalnessMap:le,roughnessMap:fe,anisotropy:xe,anisotropyMap:I,clearcoat:se,clearcoatMap:oe,clearcoatNormalMap:re,clearcoatRoughnessMap:ee,iridescence:Pe,iridescenceMap:me,iridescenceThicknessMap:he,sheen:E,sheenColorMap:W,sheenRoughnessMap:Ae,specularMap:Te,specularColorMap:_e,specularIntensityMap:ge,transmission:T,transmissionMap:Ee,thicknessMap:Le,gradientMap:De,opaque:M.transparent===!1&&M.blending===Ri,alphaMap:L,alphaTest:ve,alphaHash:j,combine:M.combine,mapUv:pe&&g(M.map.channel),aoMapUv:P&&g(M.aoMap.channel),lightMapUv:Ne&&g(M.lightMap.channel),bumpMapUv:be&&g(M.bumpMap.channel),normalMapUv:Me&&g(M.normalMap.channel),displacementMapUv:we&&g(M.displacementMap.channel),emissiveMapUv:Oe&&g(M.emissiveMap.channel),metalnessMapUv:le&&g(M.metalnessMap.channel),roughnessMapUv:fe&&g(M.roughnessMap.channel),anisotropyMapUv:I&&g(M.anisotropyMap.channel),clearcoatMapUv:oe&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:W&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(M.sheenRoughnessMap.channel),specularMapUv:Te&&g(M.specularMap.channel),specularColorMapUv:_e&&g(M.specularColorMap.channel),specularIntensityMapUv:ge&&g(M.specularIntensityMap.channel),transmissionMapUv:Ee&&g(M.transmissionMap.channel),thicknessMapUv:Le&&g(M.thicknessMap.channel),alphaMapUv:L&&g(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Me||xe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:He,vertexUv3s:Ie,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(pe||L),fog:!!N,useFog:M.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:D,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&K.length>0,shadowMapType:a.shadowMap.type,toneMapping:Be,useLegacyLights:a._useLegacyLights,decodeVideoTexture:pe&&M.map.isVideoTexture===!0&&M.map.colorSpace===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qt,flipSided:M.side===At,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:de&&M.extensions.derivatives===!0,extensionFragDepth:de&&M.extensions.fragDepth===!0,extensionDrawBuffers:de&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const K in M.defines)A.push(K),A.push(M.defines[K]);return M.isRawShaderMaterial===!1&&(y(A,M),_(A,M),A.push(a.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function y(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function _(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function x(M){const A=v[M.type];let K;if(A){const F=xr[A];K=Zs.clone(F.uniforms)}else K=M.uniforms;return K}function S(M,A){let K;for(let F=0,U=c.length;F<U;F++){const N=c[F];if(N.cacheKey===A){K=N,++K.usedTimes;break}}return K===void 0&&(K=new kv(a,A,M,i),c.push(K)),K}function b(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:S,releaseProgram:b,releaseShaderCache:R,programs:c,dispose:O}}function Wv(){let a=new WeakMap;function e(i){let s=a.get(i);return s===void 0&&(s={},a.set(i,s)),s}function t(i){a.delete(i)}function n(i,s,o){a.get(i)[s]=o}function r(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Xv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function th(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function rh(){const a=[];let e=0;const t=[],n=[],r=[];function i(){e=0,t.length=0,n.length=0,r.length=0}function s(u,d,p,v,g,m){let f=a[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},a[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function o(u,d,p,v,g,m){const f=s(u,d,p,v,g,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(u,d,p,v,g,m){const f=s(u,d,p,v,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Xv),n.length>1&&n.sort(d||th),r.length>1&&r.sort(d||th)}function h(){for(let u=e,d=a.length;u<d;u++){const p=a[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:i,push:o,unshift:l,finish:h,sort:c}}function jv(){let a=new WeakMap;function e(n,r){const i=a.get(n);let s;return i===void 0?(s=new rh,a.set(n,[s])):r>=i.length?(s=new rh,i.push(s)):s=i[r],s}function t(){a=new WeakMap}return{get:e,dispose:t}}function qv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ge};break;case"SpotLight":t={position:new B,direction:new B,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new B,halfWidth:new B,halfHeight:new B};break}return a[e.id]=t,t}}}function Yv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Kv=0;function $v(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Zv(a,e){const t=new qv,n=Yv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new B);const i=new B,s=new Xe,o=new Xe;function l(h,u){let d=0,p=0,v=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let g=0,m=0,f=0,y=0,_=0,x=0,S=0,b=0,R=0,O=0;h.sort($v);const M=u===!0?Math.PI:1;for(let K=0,F=h.length;K<F;K++){const U=h[K],N=U.color,z=U.intensity,H=U.distance,X=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=N.r*z*M,p+=N.g*z*M,v+=N.b*z*M;else if(U.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(U.sh.coefficients[V],z);else if(U.isDirectionalLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const G=U.shadow,k=n.get(U);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,r.directionalShadow[g]=k,r.directionalShadowMap[g]=X,r.directionalShadowMatrix[g]=U.shadow.matrix,x++}r.directional[g]=V,g++}else if(U.isSpotLight){const V=t.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(N).multiplyScalar(z*M),V.distance=H,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,r.spot[f]=V;const G=U.shadow;if(U.map&&(r.spotLightMap[R]=U.map,R++,G.updateMatrices(U),U.castShadow&&O++),r.spotLightMatrix[f]=G.matrix,U.castShadow){const k=n.get(U);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,r.spotShadow[f]=k,r.spotShadowMap[f]=X,b++}f++}else if(U.isRectAreaLight){const V=t.get(U);V.color.copy(N).multiplyScalar(z),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),r.rectArea[y]=V,y++}else if(U.isPointLight){const V=t.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*M),V.distance=U.distance,V.decay=U.decay,U.castShadow){const G=U.shadow,k=n.get(U);k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,r.pointShadow[m]=k,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=U.shadow.matrix,S++}r.point[m]=V,m++}else if(U.isHemisphereLight){const V=t.get(U);V.skyColor.copy(U.color).multiplyScalar(z*M),V.groundColor.copy(U.groundColor).multiplyScalar(z*M),r.hemi[_]=V,_++}}y>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==g||A.pointLength!==m||A.spotLength!==f||A.rectAreaLength!==y||A.hemiLength!==_||A.numDirectionalShadows!==x||A.numPointShadows!==S||A.numSpotShadows!==b||A.numSpotMaps!==R)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=y,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=b+R-O,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=O,A.directionalLength=g,A.pointLength=m,A.spotLength=f,A.rectAreaLength=y,A.hemiLength=_,A.numDirectionalShadows=x,A.numPointShadows=S,A.numSpotShadows=b,A.numSpotMaps=R,r.version=Kv++)}function c(h,u){let d=0,p=0,v=0,g=0,m=0;const f=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){const x=h[y];if(x.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(f),d++}else if(x.isSpotLight){const S=r.spot[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(f),v++}else if(x.isRectAreaLight){const S=r.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),o.identity(),s.copy(x.matrixWorld),s.premultiply(f),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(f),p++}else if(x.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function ih(a,e){const t=new Zv(a,e),n=[],r=[];function i(){n.length=0,r.length=0}function s(h){n.push(h)}function o(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:i,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function Jv(a,e){let t=new WeakMap;function n(i,s=0){const o=t.get(i);let l;return o===void 0?(l=new ih(a,e),t.set(i,[l])):s>=o.length?(l=new ih(a,e),o.push(l)):l=o[s],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class nh extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ah extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
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
}`;function t0(a,e,t){let n=new Qs;const r=new Fe,i=new Fe,s=new et,o=new nh({depthPacking:tc}),l=new ah,c={},h=t.maxTextureSize,u={[gr]:At,[At]:gr,[qt]:qt},d=new qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Qv,fragmentShader:e0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Pt;v.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Tt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let f=this.type;this.render=function(S,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const O=a.getRenderTarget(),M=a.getActiveCubeFace(),A=a.getActiveMipmapLevel(),K=a.state;K.setBlending(kr),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const F=f!==Tr&&this.type===Tr,U=f===Tr&&this.type!==Tr;for(let N=0,z=S.length;N<z;N++){const H=S[N],X=H.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const V=X.getFrameExtents();if(r.multiply(V),i.copy(X.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(i.x=Math.floor(h/V.x),r.x=i.x*V.x,X.mapSize.x=i.x),r.y>h&&(i.y=Math.floor(h/V.y),r.y=i.y*V.y,X.mapSize.y=i.y)),X.map===null||F===!0||U===!0){const k=this.type!==Tr?{minFilter:_t,magFilter:_t}:{};X.map!==null&&X.map.dispose(),X.map=new ci(r.x,r.y,k),X.map.texture.name=H.name+".shadowMap",X.camera.updateProjectionMatrix()}a.setRenderTarget(X.map),a.clear();const G=X.getViewportCount();for(let k=0;k<G;k++){const w=X.getViewport(k);s.set(i.x*w.x,i.y*w.y,i.x*w.z,i.y*w.w),K.viewport(s),X.updateMatrices(H,k),n=X.getFrustum(),x(b,R,X.camera,H,this.type)}X.isPointLightShadow!==!0&&this.type===Tr&&y(X,R),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,a.setRenderTarget(O,M,A)};function y(S,b){const R=e.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ci(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(b,null,R,d,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(b,null,R,p,g,null)}function _(S,b,R,O){let M=null;const A=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)M=A;else if(M=R.isPointLight===!0?l:o,a.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const K=M.uuid,F=b.uuid;let U=c[K];U===void 0&&(U={},c[K]=U);let N=U[F];N===void 0&&(N=M.clone(),U[F]=N),M=N}if(M.visible=b.visible,M.wireframe=b.wireframe,O===Tr?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:u[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const K=a.properties.get(M);K.light=R}return M}function x(S,b,R,O,M){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Tr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const K=e.update(S),F=S.material;if(Array.isArray(F)){const U=K.groups;for(let N=0,z=U.length;N<z;N++){const H=U[N],X=F[H.materialIndex];if(X&&X.visible){const V=_(S,X,O,M);a.renderBufferDirect(R,null,K,V,S,H)}}}else if(F.visible){const U=_(S,F,O,M);a.renderBufferDirect(R,null,K,U,S,null)}}const A=S.children;for(let K=0,F=A.length;K<F;K++)x(A[K],b,R,O,M)}}function r0(a,e,t){const n=t.isWebGL2;function r(){let L=!1;const ve=new et;let j=null;const de=new et(0,0,0,0);return{setMask:function(Se){j!==Se&&!L&&(a.colorMask(Se,Se,Se,Se),j=Se)},setLocked:function(Se){L=Se},setClear:function(Se,He,Ie,Be,rt){rt===!0&&(Se*=Be,He*=Be,Ie*=Be),ve.set(Se,He,Ie,Be),de.equals(ve)===!1&&(a.clearColor(Se,He,Ie,Be),de.copy(ve))},reset:function(){L=!1,j=null,de.set(-1,0,0,0)}}}function i(){let L=!1,ve=null,j=null,de=null;return{setTest:function(Se){Se?Q(a.DEPTH_TEST):te(a.DEPTH_TEST)},setMask:function(Se){ve!==Se&&!L&&(a.depthMask(Se),ve=Se)},setFunc:function(Se){if(j!==Se){switch(Se){case ud:a.depthFunc(a.NEVER);break;case dd:a.depthFunc(a.ALWAYS);break;case pd:a.depthFunc(a.LESS);break;case vs:a.depthFunc(a.LEQUAL);break;case fd:a.depthFunc(a.EQUAL);break;case md:a.depthFunc(a.GEQUAL);break;case gd:a.depthFunc(a.GREATER);break;case vd:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}j=Se}},setLocked:function(Se){L=Se},setClear:function(Se){de!==Se&&(a.clearDepth(Se),de=Se)},reset:function(){L=!1,ve=null,j=null,de=null}}}function s(){let L=!1,ve=null,j=null,de=null,Se=null,He=null,Ie=null,Be=null,rt=null;return{setTest:function(Ye){L||(Ye?Q(a.STENCIL_TEST):te(a.STENCIL_TEST))},setMask:function(Ye){ve!==Ye&&!L&&(a.stencilMask(Ye),ve=Ye)},setFunc:function(Ye,at,ot){(j!==Ye||de!==at||Se!==ot)&&(a.stencilFunc(Ye,at,ot),j=Ye,de=at,Se=ot)},setOp:function(Ye,at,ot){(He!==Ye||Ie!==at||Be!==ot)&&(a.stencilOp(Ye,at,ot),He=Ye,Ie=at,Be=ot)},setLocked:function(Ye){L=Ye},setClear:function(Ye){rt!==Ye&&(a.clearStencil(Ye),rt=Ye)},reset:function(){L=!1,ve=null,j=null,de=null,Se=null,He=null,Ie=null,Be=null,rt=null}}}const o=new r,l=new i,c=new s,h=new WeakMap,u=new WeakMap;let d={},p={},v=new WeakMap,g=[],m=null,f=!1,y=null,_=null,x=null,S=null,b=null,R=null,O=null,M=!1,A=null,K=null,F=null,U=null,N=null;const z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,X=0;const V=a.getParameter(a.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=X>=2);let G=null,k={};const w=a.getParameter(a.SCISSOR_BOX),D=a.getParameter(a.VIEWPORT),q=new et().fromArray(w),Y=new et().fromArray(D);function $(L,ve,j,de){const Se=new Uint8Array(4),He=a.createTexture();a.bindTexture(L,He),a.texParameteri(L,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(L,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ie=0;Ie<j;Ie++)n&&(L===a.TEXTURE_3D||L===a.TEXTURE_2D_ARRAY)?a.texImage3D(ve,0,a.RGBA,1,1,de,0,a.RGBA,a.UNSIGNED_BYTE,Se):a.texImage2D(ve+Ie,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Se);return He}const ae={};ae[a.TEXTURE_2D]=$(a.TEXTURE_2D,a.TEXTURE_2D,1),ae[a.TEXTURE_CUBE_MAP]=$(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ae[a.TEXTURE_2D_ARRAY]=$(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ae[a.TEXTURE_3D]=$(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Q(a.DEPTH_TEST),l.setFunc(vs),we(!1),Oe(ol),Q(a.CULL_FACE),be(kr);function Q(L){d[L]!==!0&&(a.enable(L),d[L]=!0)}function te(L){d[L]!==!1&&(a.disable(L),d[L]=!1)}function pe(L,ve){return p[L]!==ve?(a.bindFramebuffer(L,ve),p[L]=ve,n&&(L===a.DRAW_FRAMEBUFFER&&(p[a.FRAMEBUFFER]=ve),L===a.FRAMEBUFFER&&(p[a.DRAW_FRAMEBUFFER]=ve)),!0):!1}function Ue(L,ve){let j=g,de=!1;if(L)if(j=v.get(ve),j===void 0&&(j=[],v.set(ve,j)),L.isWebGLMultipleRenderTargets){const Se=L.texture;if(j.length!==Se.length||j[0]!==a.COLOR_ATTACHMENT0){for(let He=0,Ie=Se.length;He<Ie;He++)j[He]=a.COLOR_ATTACHMENT0+He;j.length=Se.length,de=!0}}else j[0]!==a.COLOR_ATTACHMENT0&&(j[0]=a.COLOR_ATTACHMENT0,de=!0);else j[0]!==a.BACK&&(j[0]=a.BACK,de=!0);de&&(t.isWebGL2?a.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function ce(L){return m!==L?(a.useProgram(L),m=L,!0):!1}const P={[Ci]:a.FUNC_ADD,[ed]:a.FUNC_SUBTRACT,[td]:a.FUNC_REVERSE_SUBTRACT};if(n)P[dl]=a.MIN,P[pl]=a.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(P[dl]=L.MIN_EXT,P[pl]=L.MAX_EXT)}const Ne={[rd]:a.ZERO,[id]:a.ONE,[nd]:a.SRC_COLOR,[fl]:a.SRC_ALPHA,[hd]:a.SRC_ALPHA_SATURATE,[ld]:a.DST_COLOR,[sd]:a.DST_ALPHA,[ad]:a.ONE_MINUS_SRC_COLOR,[ml]:a.ONE_MINUS_SRC_ALPHA,[cd]:a.ONE_MINUS_DST_COLOR,[od]:a.ONE_MINUS_DST_ALPHA};function be(L,ve,j,de,Se,He,Ie,Be){if(L===kr){f===!0&&(te(a.BLEND),f=!1);return}if(f===!1&&(Q(a.BLEND),f=!0),L!==Qu){if(L!==y||Be!==M){if((_!==Ci||b!==Ci)&&(a.blendEquation(a.FUNC_ADD),_=Ci,b=Ci),Be)switch(L){case Ri:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case cl:a.blendFunc(a.ONE,a.ONE);break;case hl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case ul:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ri:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case cl:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case hl:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case ul:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,S=null,R=null,O=null,y=L,M=Be}return}Se=Se||ve,He=He||j,Ie=Ie||de,(ve!==_||Se!==b)&&(a.blendEquationSeparate(P[ve],P[Se]),_=ve,b=Se),(j!==x||de!==S||He!==R||Ie!==O)&&(a.blendFuncSeparate(Ne[j],Ne[de],Ne[He],Ne[Ie]),x=j,S=de,R=He,O=Ie),y=L,M=!1}function Me(L,ve){L.side===qt?te(a.CULL_FACE):Q(a.CULL_FACE);let j=L.side===At;ve&&(j=!j),we(j),L.blending===Ri&&L.transparent===!1?be(kr):be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const de=L.stencilWrite;c.setTest(de),de&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),fe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(a.SAMPLE_ALPHA_TO_COVERAGE):te(a.SAMPLE_ALPHA_TO_COVERAGE)}function we(L){A!==L&&(L?a.frontFace(a.CW):a.frontFace(a.CCW),A=L)}function Oe(L){L!==$u?(Q(a.CULL_FACE),L!==K&&(L===ol?a.cullFace(a.BACK):L===Zu?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):te(a.CULL_FACE),K=L}function le(L){L!==F&&(H&&a.lineWidth(L),F=L)}function fe(L,ve,j){L?(Q(a.POLYGON_OFFSET_FILL),(U!==ve||N!==j)&&(a.polygonOffset(ve,j),U=ve,N=j)):te(a.POLYGON_OFFSET_FILL)}function xe(L){L?Q(a.SCISSOR_TEST):te(a.SCISSOR_TEST)}function se(L){L===void 0&&(L=a.TEXTURE0+z-1),G!==L&&(a.activeTexture(L),G=L)}function Pe(L,ve,j){j===void 0&&(G===null?j=a.TEXTURE0+z-1:j=G);let de=k[j];de===void 0&&(de={type:void 0,texture:void 0},k[j]=de),(de.type!==L||de.texture!==ve)&&(G!==j&&(a.activeTexture(j),G=j),a.bindTexture(L,ve||ae[L]),de.type=L,de.texture=ve)}function E(){const L=k[G];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function T(){try{a.compressedTexImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function I(){try{a.compressedTexImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{a.texSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{a.texSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{a.texStorage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{a.texStorage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{a.texImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{a.texImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(L){q.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function ge(L){Y.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Ee(L,ve){let j=u.get(ve);j===void 0&&(j=new WeakMap,u.set(ve,j));let de=j.get(L);de===void 0&&(de=a.getUniformBlockIndex(ve,L.name),j.set(L,de))}function Le(L,ve){const j=u.get(ve).get(L);h.get(ve)!==j&&(a.uniformBlockBinding(ve,j,L.__bindingPointIndex),h.set(ve,j))}function De(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),n===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},G=null,k={},p={},v=new WeakMap,g=[],m=null,f=!1,y=null,_=null,x=null,S=null,b=null,R=null,O=null,M=!1,A=null,K=null,F=null,U=null,N=null,q.set(0,0,a.canvas.width,a.canvas.height),Y.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Q,disable:te,bindFramebuffer:pe,drawBuffers:Ue,useProgram:ce,setBlending:be,setMaterial:Me,setFlipSided:we,setCullFace:Oe,setLineWidth:le,setPolygonOffset:fe,setScissorTest:xe,activeTexture:se,bindTexture:Pe,unbindTexture:E,compressedTexImage2D:T,compressedTexImage3D:I,texImage2D:Ae,texImage3D:Te,updateUBOMapping:Ee,uniformBlockBinding:Le,texStorage2D:he,texStorage3D:W,texSubImage2D:oe,texSubImage3D:re,compressedTexSubImage2D:ee,compressedTexSubImage3D:me,scissor:_e,viewport:ge,reset:De}}function i0(a,e,t,n,r,i,s){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,T){return f?new OffscreenCanvas(E,T):Dn("canvas")}function _(E,T,I,oe){let re=1;if((E.width>oe||E.height>oe)&&(re=oe/Math.max(E.width,E.height)),re<1||T===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ee=T?va:Math.floor,me=ee(re*E.width),he=ee(re*E.height);g===void 0&&(g=y(me,he));const W=I?y(me,he):g;return W.width=me,W.height=he,W.getContext("2d").drawImage(E,0,0,me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+me+"x"+he+")."),W}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function x(E){return Ds(E.width)&&Ds(E.height)}function S(E){return o?!1:E.wrapS!==Yt||E.wrapT!==Yt||E.minFilter!==_t&&E.minFilter!==Rt}function b(E,T){return E.generateMipmaps&&T&&E.minFilter!==_t&&E.minFilter!==Rt}function R(E){a.generateMipmap(E)}function O(E,T,I,oe,re=!1){if(o===!1)return T;if(E!==null){if(a[E]!==void 0)return a[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee=T;return T===a.RED&&(I===a.FLOAT&&(ee=a.R32F),I===a.HALF_FLOAT&&(ee=a.R16F),I===a.UNSIGNED_BYTE&&(ee=a.R8)),T===a.RED_INTEGER&&(I===a.UNSIGNED_BYTE&&(ee=a.R8UI),I===a.UNSIGNED_SHORT&&(ee=a.R16UI),I===a.UNSIGNED_INT&&(ee=a.R32UI),I===a.BYTE&&(ee=a.R8I),I===a.SHORT&&(ee=a.R16I),I===a.INT&&(ee=a.R32I)),T===a.RG&&(I===a.FLOAT&&(ee=a.RG32F),I===a.HALF_FLOAT&&(ee=a.RG16F),I===a.UNSIGNED_BYTE&&(ee=a.RG8)),T===a.RGBA&&(I===a.FLOAT&&(ee=a.RGBA32F),I===a.HALF_FLOAT&&(ee=a.RGBA16F),I===a.UNSIGNED_BYTE&&(ee=oe===Qe&&re===!1?a.SRGB8_ALPHA8:a.RGBA8),I===a.UNSIGNED_SHORT_4_4_4_4&&(ee=a.RGBA4),I===a.UNSIGNED_SHORT_5_5_5_1&&(ee=a.RGB5_A1)),(ee===a.R16F||ee===a.R32F||ee===a.RG16F||ee===a.RG32F||ee===a.RGBA16F||ee===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function M(E,T,I){return b(E,I)===!0||E.isFramebufferTexture&&E.minFilter!==_t&&E.minFilter!==Rt?Math.log2(Math.max(T.width,T.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?T.mipmaps.length:1}function A(E){return E===_t||E===ys||E===fa?a.NEAREST:a.LINEAR}function K(E){const T=E.target;T.removeEventListener("dispose",K),U(T),T.isVideoTexture&&v.delete(T)}function F(E){const T=E.target;T.removeEventListener("dispose",F),z(T)}function U(E){const T=n.get(E);if(T.__webglInit===void 0)return;const I=E.source,oe=m.get(I);if(oe){const re=oe[T.__cacheKey];re.usedTimes--,re.usedTimes===0&&N(E),Object.keys(oe).length===0&&m.delete(I)}n.remove(E)}function N(E){const T=n.get(E);a.deleteTexture(T.__webglTexture);const I=E.source,oe=m.get(I);delete oe[T.__cacheKey],s.memory.textures--}function z(E){const T=E.texture,I=n.get(E),oe=n.get(T);if(oe.__webglTexture!==void 0&&(a.deleteTexture(oe.__webglTexture),s.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(I.__webglFramebuffer[re]))for(let ee=0;ee<I.__webglFramebuffer[re].length;ee++)a.deleteFramebuffer(I.__webglFramebuffer[re][ee]);else a.deleteFramebuffer(I.__webglFramebuffer[re]);I.__webglDepthbuffer&&a.deleteRenderbuffer(I.__webglDepthbuffer[re])}else{if(Array.isArray(I.__webglFramebuffer))for(let re=0;re<I.__webglFramebuffer.length;re++)a.deleteFramebuffer(I.__webglFramebuffer[re]);else a.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&a.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&a.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let re=0;re<I.__webglColorRenderbuffer.length;re++)I.__webglColorRenderbuffer[re]&&a.deleteRenderbuffer(I.__webglColorRenderbuffer[re]);I.__webglDepthRenderbuffer&&a.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let re=0,ee=T.length;re<ee;re++){const me=n.get(T[re]);me.__webglTexture&&(a.deleteTexture(me.__webglTexture),s.memory.textures--),n.remove(T[re])}n.remove(T),n.remove(E)}let H=0;function X(){H=0}function V(){const E=H;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),H+=1,E}function G(E){const T=[];return T.push(E.wrapS),T.push(E.wrapT),T.push(E.wrapR||0),T.push(E.magFilter),T.push(E.minFilter),T.push(E.anisotropy),T.push(E.internalFormat),T.push(E.format),T.push(E.type),T.push(E.generateMipmaps),T.push(E.premultiplyAlpha),T.push(E.flipY),T.push(E.unpackAlignment),T.push(E.colorSpace),T.join()}function k(E,T){const I=n.get(E);if(E.isVideoTexture&&se(E),E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){const oe=E.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(I,E,T);return}}t.bindTexture(a.TEXTURE_2D,I.__webglTexture,a.TEXTURE0+T)}function w(E,T){const I=n.get(E);if(E.version>0&&I.__version!==E.version){pe(I,E,T);return}t.bindTexture(a.TEXTURE_2D_ARRAY,I.__webglTexture,a.TEXTURE0+T)}function D(E,T){const I=n.get(E);if(E.version>0&&I.__version!==E.version){pe(I,E,T);return}t.bindTexture(a.TEXTURE_3D,I.__webglTexture,a.TEXTURE0+T)}function q(E,T){const I=n.get(E);if(E.version>0&&I.__version!==E.version){Ue(I,E,T);return}t.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+T)}const Y={[Li]:a.REPEAT,[Yt]:a.CLAMP_TO_EDGE,[pa]:a.MIRRORED_REPEAT},$={[_t]:a.NEAREST,[ys]:a.NEAREST_MIPMAP_NEAREST,[fa]:a.NEAREST_MIPMAP_LINEAR,[Rt]:a.LINEAR,[_l]:a.LINEAR_MIPMAP_NEAREST,[ni]:a.LINEAR_MIPMAP_LINEAR},ae={[kd]:a.NEVER,[jd]:a.ALWAYS,[zd]:a.LESS,[Hd]:a.LEQUAL,[Gd]:a.EQUAL,[Xd]:a.GEQUAL,[Vd]:a.GREATER,[Wd]:a.NOTEQUAL};function Q(E,T,I){if(I?(a.texParameteri(E,a.TEXTURE_WRAP_S,Y[T.wrapS]),a.texParameteri(E,a.TEXTURE_WRAP_T,Y[T.wrapT]),(E===a.TEXTURE_3D||E===a.TEXTURE_2D_ARRAY)&&a.texParameteri(E,a.TEXTURE_WRAP_R,Y[T.wrapR]),a.texParameteri(E,a.TEXTURE_MAG_FILTER,$[T.magFilter]),a.texParameteri(E,a.TEXTURE_MIN_FILTER,$[T.minFilter])):(a.texParameteri(E,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(E,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(E===a.TEXTURE_3D||E===a.TEXTURE_2D_ARRAY)&&a.texParameteri(E,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(T.wrapS!==Yt||T.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(E,a.TEXTURE_MAG_FILTER,A(T.magFilter)),a.texParameteri(E,a.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==_t&&T.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(a.texParameteri(E,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(E,a.TEXTURE_COMPARE_FUNC,ae[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===_t||T.minFilter!==fa&&T.minFilter!==ni||T.type===br&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===Cn&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(a.texParameterf(E,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function te(E,T){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,T.addEventListener("dispose",K));const oe=T.source;let re=m.get(oe);re===void 0&&(re={},m.set(oe,re));const ee=G(T);if(ee!==E.__cacheKey){re[ee]===void 0&&(re[ee]={texture:a.createTexture(),usedTimes:0},s.memory.textures++,I=!0),re[ee].usedTimes++;const me=re[E.__cacheKey];me!==void 0&&(re[E.__cacheKey].usedTimes--,me.usedTimes===0&&N(T)),E.__cacheKey=ee,E.__webglTexture=re[ee].texture}return I}function pe(E,T,I){let oe=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(oe=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(oe=a.TEXTURE_3D);const re=te(E,T),ee=T.source;t.bindTexture(oe,E.__webglTexture,a.TEXTURE0+I);const me=n.get(ee);if(ee.version!==me.__version||re===!0){t.activeTexture(a.TEXTURE0+I),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.NONE);const he=S(T)&&x(T.image)===!1;let W=_(T.image,he,!1,h);W=Pe(T,W);const Ae=x(W)||o,Te=i.convert(T.format,T.colorSpace);let _e=i.convert(T.type),ge=O(T.internalFormat,Te,_e,T.colorSpace,T.isVideoTexture);Q(oe,T,Ae);let Ee;const Le=T.mipmaps,De=o&&T.isVideoTexture!==!0,L=me.__version===void 0||re===!0,ve=M(T,W,Ae);if(T.isDepthTexture)ge=a.DEPTH_COMPONENT,o?T.type===br?ge=a.DEPTH_COMPONENT32F:T.type===Hr?ge=a.DEPTH_COMPONENT24:T.type===ai?ge=a.DEPTH24_STENCIL8:ge=a.DEPTH_COMPONENT16:T.type===br&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===si&&ge===a.DEPTH_COMPONENT&&T.type!==Ss&&T.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Hr,_e=i.convert(T.type)),T.format===Di&&ge===a.DEPTH_COMPONENT&&(ge=a.DEPTH_STENCIL,T.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ai,_e=i.convert(T.type))),L&&(De?t.texStorage2D(a.TEXTURE_2D,1,ge,W.width,W.height):t.texImage2D(a.TEXTURE_2D,0,ge,W.width,W.height,0,Te,_e,null));else if(T.isDataTexture)if(Le.length>0&&Ae){De&&L&&t.texStorage2D(a.TEXTURE_2D,ve,ge,Le[0].width,Le[0].height);for(let j=0,de=Le.length;j<de;j++)Ee=Le[j],De?t.texSubImage2D(a.TEXTURE_2D,j,0,0,Ee.width,Ee.height,Te,_e,Ee.data):t.texImage2D(a.TEXTURE_2D,j,ge,Ee.width,Ee.height,0,Te,_e,Ee.data);T.generateMipmaps=!1}else De?(L&&t.texStorage2D(a.TEXTURE_2D,ve,ge,W.width,W.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,W.width,W.height,Te,_e,W.data)):t.texImage2D(a.TEXTURE_2D,0,ge,W.width,W.height,0,Te,_e,W.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){De&&L&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ve,ge,Le[0].width,Le[0].height,W.depth);for(let j=0,de=Le.length;j<de;j++)Ee=Le[j],T.format!==Kt?Te!==null?De?t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,0,Ee.width,Ee.height,W.depth,Te,Ee.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,j,ge,Ee.width,Ee.height,W.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(a.TEXTURE_2D_ARRAY,j,0,0,0,Ee.width,Ee.height,W.depth,Te,_e,Ee.data):t.texImage3D(a.TEXTURE_2D_ARRAY,j,ge,Ee.width,Ee.height,W.depth,0,Te,_e,Ee.data)}else{De&&L&&t.texStorage2D(a.TEXTURE_2D,ve,ge,Le[0].width,Le[0].height);for(let j=0,de=Le.length;j<de;j++)Ee=Le[j],T.format!==Kt?Te!==null?De?t.compressedTexSubImage2D(a.TEXTURE_2D,j,0,0,Ee.width,Ee.height,Te,Ee.data):t.compressedTexImage2D(a.TEXTURE_2D,j,ge,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(a.TEXTURE_2D,j,0,0,Ee.width,Ee.height,Te,_e,Ee.data):t.texImage2D(a.TEXTURE_2D,j,ge,Ee.width,Ee.height,0,Te,_e,Ee.data)}else if(T.isDataArrayTexture)De?(L&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ve,ge,W.width,W.height,W.depth),t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,Te,_e,W.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,ge,W.width,W.height,W.depth,0,Te,_e,W.data);else if(T.isData3DTexture)De?(L&&t.texStorage3D(a.TEXTURE_3D,ve,ge,W.width,W.height,W.depth),t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,Te,_e,W.data)):t.texImage3D(a.TEXTURE_3D,0,ge,W.width,W.height,W.depth,0,Te,_e,W.data);else if(T.isFramebufferTexture){if(L)if(De)t.texStorage2D(a.TEXTURE_2D,ve,ge,W.width,W.height);else{let j=W.width,de=W.height;for(let Se=0;Se<ve;Se++)t.texImage2D(a.TEXTURE_2D,Se,ge,j,de,0,Te,_e,null),j>>=1,de>>=1}}else if(Le.length>0&&Ae){De&&L&&t.texStorage2D(a.TEXTURE_2D,ve,ge,Le[0].width,Le[0].height);for(let j=0,de=Le.length;j<de;j++)Ee=Le[j],De?t.texSubImage2D(a.TEXTURE_2D,j,0,0,Te,_e,Ee):t.texImage2D(a.TEXTURE_2D,j,ge,Te,_e,Ee);T.generateMipmaps=!1}else De?(L&&t.texStorage2D(a.TEXTURE_2D,ve,ge,W.width,W.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,Te,_e,W)):t.texImage2D(a.TEXTURE_2D,0,ge,Te,_e,W);b(T,Ae)&&R(oe),me.__version=ee.version,T.onUpdate&&T.onUpdate(T)}E.__version=T.version}function Ue(E,T,I){if(T.image.length!==6)return;const oe=te(E,T),re=T.source;t.bindTexture(a.TEXTURE_CUBE_MAP,E.__webglTexture,a.TEXTURE0+I);const ee=n.get(re);if(re.version!==ee.__version||oe===!0){t.activeTexture(a.TEXTURE0+I),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.NONE);const me=T.isCompressedTexture||T.image[0].isCompressedTexture,he=T.image[0]&&T.image[0].isDataTexture,W=[];for(let j=0;j<6;j++)!me&&!he?W[j]=_(T.image[j],!1,!0,c):W[j]=he?T.image[j].image:T.image[j],W[j]=Pe(T,W[j]);const Ae=W[0],Te=x(Ae)||o,_e=i.convert(T.format,T.colorSpace),ge=i.convert(T.type),Ee=O(T.internalFormat,_e,ge,T.colorSpace),Le=o&&T.isVideoTexture!==!0,De=ee.__version===void 0||oe===!0;let L=M(T,Ae,Te);Q(a.TEXTURE_CUBE_MAP,T,Te);let ve;if(me){Le&&De&&t.texStorage2D(a.TEXTURE_CUBE_MAP,L,Ee,Ae.width,Ae.height);for(let j=0;j<6;j++){ve=W[j].mipmaps;for(let de=0;de<ve.length;de++){const Se=ve[de];T.format!==Kt?_e!==null?Le?t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,de,0,0,Se.width,Se.height,_e,Se.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,de,Ee,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,de,0,0,Se.width,Se.height,_e,ge,Se.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,de,Ee,Se.width,Se.height,0,_e,ge,Se.data)}}}else{ve=T.mipmaps,Le&&De&&(ve.length>0&&L++,t.texStorage2D(a.TEXTURE_CUBE_MAP,L,Ee,W[0].width,W[0].height));for(let j=0;j<6;j++)if(he){Le?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,W[j].width,W[j].height,_e,ge,W[j].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ee,W[j].width,W[j].height,0,_e,ge,W[j].data);for(let de=0;de<ve.length;de++){const Se=ve[de].image[j].image;Le?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,de+1,0,0,Se.width,Se.height,_e,ge,Se.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,de+1,Ee,Se.width,Se.height,0,_e,ge,Se.data)}}else{Le?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_e,ge,W[j]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ee,_e,ge,W[j]);for(let de=0;de<ve.length;de++){const Se=ve[de];Le?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,de+1,0,0,_e,ge,Se.image[j]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+j,de+1,Ee,_e,ge,Se.image[j])}}}b(T,Te)&&R(a.TEXTURE_CUBE_MAP),ee.__version=re.version,T.onUpdate&&T.onUpdate(T)}E.__version=T.version}function ce(E,T,I,oe,re,ee){const me=i.convert(I.format,I.colorSpace),he=i.convert(I.type),W=O(I.internalFormat,me,he,I.colorSpace);if(!n.get(T).__hasExternalTextures){const Ae=Math.max(1,T.width>>ee),Te=Math.max(1,T.height>>ee);re===a.TEXTURE_3D||re===a.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,W,Ae,Te,T.depth,0,me,he,null):t.texImage2D(re,ee,W,Ae,Te,0,me,he,null)}t.bindFramebuffer(a.FRAMEBUFFER,E),xe(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,oe,re,n.get(I).__webglTexture,0,fe(T)):(re===a.TEXTURE_2D||re>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,oe,re,n.get(I).__webglTexture,ee),t.bindFramebuffer(a.FRAMEBUFFER,null)}function P(E,T,I){if(a.bindRenderbuffer(a.RENDERBUFFER,E),T.depthBuffer&&!T.stencilBuffer){let oe=a.DEPTH_COMPONENT16;if(I||xe(T)){const re=T.depthTexture;re&&re.isDepthTexture&&(re.type===br?oe=a.DEPTH_COMPONENT32F:re.type===Hr&&(oe=a.DEPTH_COMPONENT24));const ee=fe(T);xe(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ee,oe,T.width,T.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,ee,oe,T.width,T.height)}else a.renderbufferStorage(a.RENDERBUFFER,oe,T.width,T.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,E)}else if(T.depthBuffer&&T.stencilBuffer){const oe=fe(T);I&&xe(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,oe,a.DEPTH24_STENCIL8,T.width,T.height):xe(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,oe,a.DEPTH24_STENCIL8,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,E)}else{const oe=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let re=0;re<oe.length;re++){const ee=oe[re],me=i.convert(ee.format,ee.colorSpace),he=i.convert(ee.type),W=O(ee.internalFormat,me,he,ee.colorSpace),Ae=fe(T);I&&xe(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ae,W,T.width,T.height):xe(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ae,W,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,W,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ne(E,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,E),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const I=n.get(T.depthTexture).__webglTexture,oe=fe(T);if(T.depthTexture.format===si)xe(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,I,0,oe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,I,0);else if(T.depthTexture.format===Di)xe(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,I,0,oe):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function be(E){const T=n.get(E),I=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!T.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ne(T.__webglFramebuffer,E)}else if(I){T.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[oe]),T.__webglDepthbuffer[oe]=a.createRenderbuffer(),P(T.__webglDepthbuffer[oe],E,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=a.createRenderbuffer(),P(T.__webglDepthbuffer,E,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function Me(E,T,I){const oe=n.get(E);T!==void 0&&ce(oe.__webglFramebuffer,E,E.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),I!==void 0&&be(E)}function we(E){const T=E.texture,I=n.get(E),oe=n.get(T);E.addEventListener("dispose",F),E.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=a.createTexture()),oe.__version=T.version,s.memory.textures++);const re=E.isWebGLCubeRenderTarget===!0,ee=E.isWebGLMultipleRenderTargets===!0,me=x(E)||o;if(re){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(o&&T.mipmaps&&T.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let W=0;W<T.mipmaps.length;W++)I.__webglFramebuffer[he][W]=a.createFramebuffer()}else I.__webglFramebuffer[he]=a.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<T.mipmaps.length;he++)I.__webglFramebuffer[he]=a.createFramebuffer()}else I.__webglFramebuffer=a.createFramebuffer();if(ee)if(r.drawBuffers){const he=E.texture;for(let W=0,Ae=he.length;W<Ae;W++){const Te=n.get(he[W]);Te.__webglTexture===void 0&&(Te.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&xe(E)===!1){const he=ee?T:[T];I.__webglMultisampledFramebuffer=a.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let W=0;W<he.length;W++){const Ae=he[W];I.__webglColorRenderbuffer[W]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,I.__webglColorRenderbuffer[W]);const Te=i.convert(Ae.format,Ae.colorSpace),_e=i.convert(Ae.type),ge=O(Ae.internalFormat,Te,_e,Ae.colorSpace,E.isXRRenderTarget===!0),Ee=fe(E);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ee,ge,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+W,a.RENDERBUFFER,I.__webglColorRenderbuffer[W])}a.bindRenderbuffer(a.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=a.createRenderbuffer(),P(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(re){t.bindTexture(a.TEXTURE_CUBE_MAP,oe.__webglTexture),Q(a.TEXTURE_CUBE_MAP,T,me);for(let he=0;he<6;he++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let W=0;W<T.mipmaps.length;W++)ce(I.__webglFramebuffer[he][W],E,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,W);else ce(I.__webglFramebuffer[he],E,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);b(T,me)&&R(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const he=E.texture;for(let W=0,Ae=he.length;W<Ae;W++){const Te=he[W],_e=n.get(Te);t.bindTexture(a.TEXTURE_2D,_e.__webglTexture),Q(a.TEXTURE_2D,Te,me),ce(I.__webglFramebuffer,E,Te,a.COLOR_ATTACHMENT0+W,a.TEXTURE_2D,0),b(Te,me)&&R(a.TEXTURE_2D)}t.unbindTexture()}else{let he=a.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?he=E.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,oe.__webglTexture),Q(he,T,me),o&&T.mipmaps&&T.mipmaps.length>0)for(let W=0;W<T.mipmaps.length;W++)ce(I.__webglFramebuffer[W],E,T,a.COLOR_ATTACHMENT0,he,W);else ce(I.__webglFramebuffer,E,T,a.COLOR_ATTACHMENT0,he,0);b(T,me)&&R(he),t.unbindTexture()}E.depthBuffer&&be(E)}function Oe(E){const T=x(E)||o,I=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0,re=I.length;oe<re;oe++){const ee=I[oe];if(b(ee,T)){const me=E.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,he=n.get(ee).__webglTexture;t.bindTexture(me,he),R(me),t.unbindTexture()}}}function le(E){if(o&&E.samples>0&&xe(E)===!1){const T=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],I=E.width,oe=E.height;let re=a.COLOR_BUFFER_BIT;const ee=[],me=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=n.get(E),W=E.isWebGLMultipleRenderTargets===!0;if(W)for(let Ae=0;Ae<T.length;Ae++)t.bindFramebuffer(a.FRAMEBUFFER,he.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,he.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ae=0;Ae<T.length;Ae++){ee.push(a.COLOR_ATTACHMENT0+Ae),E.depthBuffer&&ee.push(me);const Te=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Te===!1&&(E.depthBuffer&&(re|=a.DEPTH_BUFFER_BIT),E.stencilBuffer&&(re|=a.STENCIL_BUFFER_BIT)),W&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]),Te===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[me]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[me])),W){const _e=n.get(T[Ae]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,_e,0)}a.blitFramebuffer(0,0,I,oe,0,0,I,oe,re,a.NEAREST),p&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),W)for(let Ae=0;Ae<T.length;Ae++){t.bindFramebuffer(a.FRAMEBUFFER,he.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,he.__webglColorRenderbuffer[Ae]);const Te=n.get(T[Ae]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,he.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.TEXTURE_2D,Te,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function fe(E){return Math.min(u,E.samples)}function xe(E){const T=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function se(E){const T=s.render.frame;v.get(E)!==T&&(v.set(E,T),E.update())}function Pe(E,T){const I=E.colorSpace,oe=E.format,re=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Ps||I!==xt&&I!==li&&(I===Qe||I===ma?o===!1?e.has("EXT_sRGB")===!0&&oe===Kt?(E.format=Ps,E.minFilter=Rt,E.generateMipmaps=!1):T=lc.sRGBToLinear(T):(oe!==Kt||re!==Gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),T}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.setTexture2D=k,this.setTexture2DArray=w,this.setTexture3D=D,this.setTextureCube=q,this.rebindTextures=Me,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=xe}const n0=0,vt=1;function a0(a,e,t){const n=t.isWebGL2;function r(i,s=li){let o;const l=s===Qe||s===ma?vt:n0;if(i===Gr)return a.UNSIGNED_BYTE;if(i===yl)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Sl)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Ed)return a.BYTE;if(i===wd)return a.SHORT;if(i===Ss)return a.UNSIGNED_SHORT;if(i===xl)return a.INT;if(i===Hr)return a.UNSIGNED_INT;if(i===br)return a.FLOAT;if(i===Cn)return n?a.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(i===Ad)return a.ALPHA;if(i===Kt)return a.RGBA;if(i===Rd)return a.LUMINANCE;if(i===Cd)return a.LUMINANCE_ALPHA;if(i===si)return a.DEPTH_COMPONENT;if(i===Di)return a.DEPTH_STENCIL;if(i===Ps)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(i===Ud)return a.RED;if(i===Ml)return a.RED_INTEGER;if(i===Pd)return a.RG;if(i===Tl)return a.RG_INTEGER;if(i===bl)return a.RGBA_INTEGER;if(i===Ms||i===Ts||i===bs||i===Es)if(l===vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ms)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ts)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Es)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ms)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ts)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Es)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===El||i===wl||i===Al||i===Rl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===El)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ld)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===Cl||i===Ul)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Cl)return l===vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ul)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pl||i===Ll||i===Dl||i===Il||i===Nl||i===Ol||i===Fl||i===Bl||i===kl||i===zl||i===Gl||i===Hl||i===Vl||i===Wl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Pl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ll)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Il)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wl)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ws||i===Xl||i===jl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===ws)return l===vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dd||i===ql||i===Yl||i===Kl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===ws)return o.COMPRESSED_RED_RGTC1_EXT;if(i===ql)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ai?n?a.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[i]!==void 0?a[i]:null}return{convert:r}}class s0 extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vi extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o0={type:"move"};class so{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class l0 extends St{constructor(e,t,n,r,i,s,o,l,c,h){if(h=h!==void 0?h:si,h!==si&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===si&&(n=Hr),n===void 0&&h===Di&&(n=ai),super(null,r,i,s,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class c0 extends Ni{constructor(e,t){super();const n=this;let r=null,i=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,v=null;const g=t.getContextAttributes();let m=null,f=null;const y=[],_=[],x=new Ft;x.layers.enable(1),x.viewport=new et;const S=new Ft;S.layers.enable(2),S.viewport=new et;const b=[x,S],R=new s0;R.layers.enable(1),R.layers.enable(2);let O=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let D=y[w];return D===void 0&&(D=new so,y[w]=D),D.getTargetRaySpace()},this.getControllerGrip=function(w){let D=y[w];return D===void 0&&(D=new so,y[w]=D),D.getGripSpace()},this.getHand=function(w){let D=y[w];return D===void 0&&(D=new so,y[w]=D),D.getHandSpace()};function A(w){const D=_.indexOf(w.inputSource);if(D===-1)return;const q=y[D];q!==void 0&&(q.update(w.inputSource,w.frame,c||s),q.dispatchEvent({type:w.type,data:w.inputSource}))}function K(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",F);for(let w=0;w<y.length;w++){const D=_[w];D!==null&&(_[w]=null,y[w].disconnect(D))}O=null,M=null,e.setRenderTarget(m),p=null,d=null,u=null,r=null,f=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){i=w,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){o=w,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(w){c=w},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(w){if(r=w,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",K),r.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const D={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,D),r.updateRenderState({baseLayer:p}),f=new ci(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:Gr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let D=null,q=null,Y=null;g.depth&&(Y=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,D=g.stencil?Di:si,q=g.stencil?ai:Hr);const $={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer($),r.updateRenderState({layers:[d]}),f=new ci(d.textureWidth,d.textureHeight,{format:Kt,type:Gr,depthTexture:new l0(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ae=e.properties.get(f);ae.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),k.setContext(r),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(w){for(let D=0;D<w.removed.length;D++){const q=w.removed[D],Y=_.indexOf(q);Y>=0&&(_[Y]=null,y[Y].disconnect(q))}for(let D=0;D<w.added.length;D++){const q=w.added[D];let Y=_.indexOf(q);if(Y===-1){for(let ae=0;ae<y.length;ae++)if(ae>=_.length){_.push(q),Y=ae;break}else if(_[ae]===null){_[ae]=q,Y=ae;break}if(Y===-1)break}const $=y[Y];$&&$.connect(q)}}const U=new B,N=new B;function z(w,D,q){U.setFromMatrixPosition(D.matrixWorld),N.setFromMatrixPosition(q.matrixWorld);const Y=U.distanceTo(N),$=D.projectionMatrix.elements,ae=q.projectionMatrix.elements,Q=$[14]/($[10]-1),te=$[14]/($[10]+1),pe=($[9]+1)/$[5],Ue=($[9]-1)/$[5],ce=($[8]-1)/$[0],P=(ae[8]+1)/ae[0],Ne=Q*ce,be=Q*P,Me=Y/(-ce+P),we=Me*-ce;D.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(we),w.translateZ(Me),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert();const Oe=Q+Me,le=te+Me,fe=Ne-we,xe=be+(Y-we),se=pe*te/le*Oe,Pe=Ue*te/le*Oe;w.projectionMatrix.makePerspective(fe,xe,se,Pe,Oe,le),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}function H(w,D){D===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(D.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(r===null)return;R.near=S.near=x.near=w.near,R.far=S.far=x.far=w.far,(O!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,M=R.far);const D=w.parent,q=R.cameras;H(R,D);for(let Y=0;Y<q.length;Y++)H(q[Y],D);q.length===2?z(R,x,S):R.projectionMatrix.copy(x.projectionMatrix),X(w,R,D)};function X(w,D,q){q===null?w.matrix.copy(D.matrixWorld):(w.matrix.copy(q.matrixWorld),w.matrix.invert(),w.matrix.multiply(D.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(D.projectionMatrix),w.projectionMatrixInverse.copy(D.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Oi*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(w){l=w,d!==null&&(d.fixedFoveation=w),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=w)};let V=null;function G(w,D){if(h=D.getViewerPose(c||s),v=D,h!==null){const q=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Y=!1;q.length!==R.cameras.length&&(R.cameras.length=0,Y=!0);for(let $=0;$<q.length;$++){const ae=q[$];let Q=null;if(p!==null)Q=p.getViewport(ae);else{const pe=u.getViewSubImage(d,ae);Q=pe.viewport,$===0&&(e.setRenderTargetTextures(f,pe.colorTexture,d.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(f))}let te=b[$];te===void 0&&(te=new Ft,te.layers.enable($),te.viewport=new et,b[$]=te),te.matrix.fromArray(ae.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ae.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Q.x,Q.y,Q.width,Q.height),$===0&&(R.matrix.copy(te.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Y===!0&&R.cameras.push(te)}}for(let q=0;q<y.length;q++){const Y=_[q],$=y[q];Y!==null&&$!==void 0&&$.update(Y,D,c||s)}V&&V(w,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),v=null}const k=new Pc;k.setAnimationLoop(G),this.setAnimationLoop=function(w){V=w},this.dispose=function(){}}}function h0(a,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Rc(a)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(m,f):f.isMeshToonMaterial?(i(m,f),u(m,f)):f.isMeshPhongMaterial?(i(m,f),h(m,f)):f.isMeshStandardMaterial?(i(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(i(m,f),v(m,f)):f.isMeshDepthMaterial?i(m,f):f.isMeshDistanceMaterial?(i(m,f),g(m,f)):f.isMeshNormalMaterial?i(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===At&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===At&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const _=a._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=_*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===At&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function u0(a,e,t,n){let r={},i={},s=[];const o=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=r[y.id];x===void 0&&(v(y),x=h(y),r[y.id]=x,y.addEventListener("dispose",m));const S=_.program;n.updateUBOMapping(y,S);const b=e.render.frame;i[y.id]!==b&&(d(y),i[y.id]=b)}function h(y){const _=u();y.__bindingPointIndex=_;const x=a.createBuffer(),S=y.__size,b=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,x),a.bufferData(a.UNIFORM_BUFFER,S,b),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=r[y.id],x=y.uniforms,S=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,_);for(let b=0,R=x.length;b<R;b++){const O=x[b];if(p(O,b,S)===!0){const M=O.__offset,A=Array.isArray(O.value)?O.value:[O.value];let K=0;for(let F=0;F<A.length;F++){const U=A[F],N=g(U);typeof U=="number"?(O.__data[0]=U,a.bufferSubData(a.UNIFORM_BUFFER,M+K,O.__data)):U.isMatrix3?(O.__data[0]=U.elements[0],O.__data[1]=U.elements[1],O.__data[2]=U.elements[2],O.__data[3]=U.elements[0],O.__data[4]=U.elements[3],O.__data[5]=U.elements[4],O.__data[6]=U.elements[5],O.__data[7]=U.elements[0],O.__data[8]=U.elements[6],O.__data[9]=U.elements[7],O.__data[10]=U.elements[8],O.__data[11]=U.elements[0]):(U.toArray(O.__data,K),K+=N.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,M,O.__data)}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function p(y,_,x){const S=y.value;if(x[_]===void 0){if(typeof S=="number")x[_]=S;else{const b=Array.isArray(S)?S:[S],R=[];for(let O=0;O<b.length;O++)R.push(b[O].clone());x[_]=R}return!0}else if(typeof S=="number"){if(x[_]!==S)return x[_]=S,!0}else{const b=Array.isArray(x[_])?x[_]:[x[_]],R=Array.isArray(S)?S:[S];for(let O=0;O<b.length;O++){const M=b[O];if(M.equals(R[O])===!1)return M.copy(R[O]),!0}}return!1}function v(y){const _=y.uniforms;let x=0;const S=16;let b=0;for(let R=0,O=_.length;R<O;R++){const M=_[R],A={boundary:0,storage:0},K=Array.isArray(M.value)?M.value:[M.value];for(let F=0,U=K.length;F<U;F++){const N=K[F],z=g(N);A.boundary+=z.boundary,A.storage+=z.storage}if(M.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,R>0){b=x%S;const F=S-b;b!==0&&F-A.boundary<0&&(x+=S-b,M.__offset=x)}x+=A.storage}return b=x%S,b>0&&(x+=S-b),y.__size=x,y.__cache={},this}function g(y){const _={boundary:0,storage:0};return typeof y=="number"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=s.indexOf(_.__bindingPointIndex);s.splice(x,1),a.deleteBuffer(r[_.id]),delete r[_.id],delete i[_.id]}function f(){for(const y in r)a.deleteBuffer(r[y]);s=[],r={},i={}}return{bind:l,update:c,dispose:f}}class sh{constructor(e={}){const{canvas:t=sp(),context:n=null,depth:r=!0,stencil:i=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=s;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Qe,this._useLegacyLights=!1,this.toneMapping=zr,this.toneMappingExposure=1;const _=this;let x=!1,S=0,b=0,R=null,O=-1,M=null;const A=new et,K=new et;let F=null;const U=new Ge(0);let N=0,z=t.width,H=t.height,X=1,V=null,G=null;const k=new et(0,0,z,H),w=new et(0,0,z,H);let D=!1;const q=new Qs;let Y=!1,$=!1,ae=null;const Q=new Xe,te=new Fe,pe=new B,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return R===null?X:1}let P=n;function Ne(C,Z){for(let ne=0;ne<C.length;ne++){const J=C[ne],ie=t.getContext(J,Z);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gs}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",de,!1),P===null){const Z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Z.shift(),P=Ne(Z,C),P===null)throw Ne(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let be,Me,we,Oe,le,fe,xe,se,Pe,E,T,I,oe,re,ee,me,he,W,Ae,Te,_e,ge,Ee,Le;function De(){be=new Tg(P),Me=new vg(P,be,e),be.init(Me),ge=new a0(P,be,Me),we=new r0(P,be,Me),Oe=new wg(P),le=new Wv,fe=new i0(P,be,we,le,Me,ge,Oe),xe=new xg(_),se=new Mg(_),Pe=new Np(P,Me),Ee=new mg(P,be,Pe,Me),E=new bg(P,Pe,Oe,Ee),T=new Ug(P,E,Pe,Oe),Ae=new Cg(P,Me,fe),me=new _g(le),I=new Vv(_,xe,se,be,Me,Ee,me),oe=new h0(_,le),re=new jv,ee=new Jv(be,Me),W=new fg(_,xe,se,we,T,d,l),he=new t0(_,T,Me),Le=new u0(P,Oe,Me,we),Te=new gg(P,be,Oe,Me),_e=new Eg(P,be,Oe,Me),Oe.programs=I.programs,_.capabilities=Me,_.extensions=be,_.properties=le,_.renderLists=re,_.shadowMap=he,_.state=we,_.info=Oe}De();const L=new c0(_,P);this.xr=L,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=be.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=be.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(C){C!==void 0&&(X=C,this.setSize(z,H,!1))},this.getSize=function(C){return C.set(z,H)},this.setSize=function(C,Z,ne=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=C,H=Z,t.width=Math.floor(C*X),t.height=Math.floor(Z*X),ne===!0&&(t.style.width=C+"px",t.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(z*X,H*X).floor()},this.setDrawingBufferSize=function(C,Z,ne){z=C,H=Z,X=ne,t.width=Math.floor(C*ne),t.height=Math.floor(Z*ne),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(k)},this.setViewport=function(C,Z,ne,J){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,Z,ne,J),we.viewport(A.copy(k).multiplyScalar(X).floor())},this.getScissor=function(C){return C.copy(w)},this.setScissor=function(C,Z,ne,J){C.isVector4?w.set(C.x,C.y,C.z,C.w):w.set(C,Z,ne,J),we.scissor(K.copy(w).multiplyScalar(X).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(C){we.setScissorTest(D=C)},this.setOpaqueSort=function(C){V=C},this.setTransparentSort=function(C){G=C},this.getClearColor=function(C){return C.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(C=!0,Z=!0,ne=!0){let J=0;if(C){let ie=!1;if(R!==null){const Ce=R.texture.format;ie=Ce===bl||Ce===Tl||Ce===Ml}if(ie){const Ce=R.texture.type,ke=Ce===Gr||Ce===Hr||Ce===Ss||Ce===ai||Ce===yl||Ce===Sl,ze=W.getClearColor(),Ve=W.getClearAlpha(),Ke=ze.r,ye=ze.g,We=ze.b;ke?(p[0]=Ke,p[1]=ye,p[2]=We,p[3]=Ve,P.clearBufferuiv(P.COLOR,0,p)):(v[0]=Ke,v[1]=ye,v[2]=We,v[3]=Ve,P.clearBufferiv(P.COLOR,0,v))}else J|=P.COLOR_BUFFER_BIT}Z&&(J|=P.DEPTH_BUFFER_BIT),ne&&(J|=P.STENCIL_BUFFER_BIT),P.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",de,!1),re.dispose(),ee.dispose(),le.dispose(),xe.dispose(),se.dispose(),T.dispose(),Ee.dispose(),Le.dispose(),I.dispose(),L.dispose(),L.removeEventListener("sessionstart",Ye),L.removeEventListener("sessionend",at),ae&&(ae.dispose(),ae=null),ot.stop()};function ve(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const C=Oe.autoReset,Z=he.enabled,ne=he.autoUpdate,J=he.needsUpdate,ie=he.type;De(),Oe.autoReset=C,he.enabled=Z,he.autoUpdate=ne,he.needsUpdate=J,he.type=ie}function de(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Se(C){const Z=C.target;Z.removeEventListener("dispose",Se),He(Z)}function He(C){Ie(C),le.remove(C)}function Ie(C){const Z=le.get(C).programs;Z!==void 0&&(Z.forEach(function(ne){I.releaseProgram(ne)}),C.isShaderMaterial&&I.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,ne,J,ie,Ce){Z===null&&(Z=Ue);const ke=ie.isMesh&&ie.matrixWorld.determinant()<0,ze=Qr(C,Z,ne,J,ie);we.setMaterial(J,ke);let Ve=ne.index,Ke=1;if(J.wireframe===!0){if(Ve=E.getWireframeAttribute(ne),Ve===void 0)return;Ke=2}const ye=ne.drawRange,We=ne.attributes.position;let ft=ye.start*Ke,st=(ye.start+ye.count)*Ke;Ce!==null&&(ft=Math.max(ft,Ce.start*Ke),st=Math.min(st,(Ce.start+Ce.count)*Ke)),Ve!==null?(ft=Math.max(ft,0),st=Math.min(st,Ve.count)):We!=null&&(ft=Math.max(ft,0),st=Math.min(st,We.count));const Et=st-ft;if(Et<0||Et===1/0)return;Ee.setup(ie,J,ze,ne,Ve);let er,lt=Te;if(Ve!==null&&(er=Pe.get(Ve),lt=_e,lt.setIndex(er)),ie.isMesh)J.wireframe===!0?(we.setLineWidth(J.wireframeLinewidth*ce()),lt.setMode(P.LINES)):lt.setMode(P.TRIANGLES);else if(ie.isLine){let qe=J.linewidth;qe===void 0&&(qe=1),we.setLineWidth(qe*ce()),ie.isLineSegments?lt.setMode(P.LINES):ie.isLineLoop?lt.setMode(P.LINE_LOOP):lt.setMode(P.LINE_STRIP)}else ie.isPoints?lt.setMode(P.POINTS):ie.isSprite&&lt.setMode(P.TRIANGLES);if(ie.isInstancedMesh)lt.renderInstances(ft,Et,ie.count);else if(ne.isInstancedBufferGeometry){const qe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,ei=Math.min(ne.instanceCount,qe);lt.renderInstances(ft,Et,ei)}else lt.render(ft,Et)},this.compile=function(C,Z){function ne(J,ie,Ce){J.transparent===!0&&J.side===qt&&J.forceSinglePass===!1?(J.side=At,J.needsUpdate=!0,Dt(J,ie,Ce),J.side=gr,J.needsUpdate=!0,Dt(J,ie,Ce),J.side=qt):Dt(J,ie,Ce)}m=ee.get(C),m.init(),y.push(m),C.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(m.pushLight(J),J.castShadow&&m.pushShadow(J))}),m.setupLights(_._useLegacyLights),C.traverse(function(J){const ie=J.material;if(ie)if(Array.isArray(ie))for(let Ce=0;Ce<ie.length;Ce++){const ke=ie[Ce];ne(ke,C,J)}else ne(ie,C,J)}),y.pop(),m=null};let Be=null;function rt(C){Be&&Be(C)}function Ye(){ot.stop()}function at(){ot.start()}const ot=new Pc;ot.setAnimationLoop(rt),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(C){Be=C,L.setAnimationLoop(C),C===null?ot.stop():ot.start()},L.addEventListener("sessionstart",Ye),L.addEventListener("sessionend",at),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(Z),Z=L.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,Z,R),m=ee.get(C,y.length),m.init(),y.push(m),Q.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),q.setFromProjectionMatrix(Q),$=this.localClippingEnabled,Y=me.init(this.clippingPlanes,$),g=re.get(C,f.length),g.init(),f.push(g),Jr(C,Z,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(V,G),this.info.render.frame++,Y===!0&&me.beginShadows();const ne=m.state.shadowsArray;if(he.render(ne,C,Z),Y===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(g,C),m.setupLights(_._useLegacyLights),Z.isArrayCamera){const J=Z.cameras;for(let ie=0,Ce=J.length;ie<Ce;ie++){const ke=J[ie];cr(g,C,ke,ke.viewport)}}else cr(g,C,Z);R!==null&&(fe.updateMultisampleRenderTarget(R),fe.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(_,C,Z),Ee.resetDefaultState(),O=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Jr(C,Z,ne,J){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){J&&pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Q);const Ce=T.update(C),ke=C.material;ke.visible&&g.push(C,Ce,ke,ne,pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const Ce=T.update(C),ke=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pe.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),pe.copy(Ce.boundingSphere.center)),pe.applyMatrix4(C.matrixWorld).applyMatrix4(Q)),Array.isArray(ke)){const ze=Ce.groups;for(let Ve=0,Ke=ze.length;Ve<Ke;Ve++){const ye=ze[Ve],We=ke[ye.materialIndex];We&&We.visible&&g.push(C,Ce,We,ne,pe.z,ye)}}else ke.visible&&g.push(C,Ce,ke,ne,pe.z,null)}}const ie=C.children;for(let Ce=0,ke=ie.length;Ce<ke;Ce++)Jr(ie[Ce],Z,ne,J)}function cr(C,Z,ne,J){const ie=C.opaque,Ce=C.transmissive,ke=C.transparent;m.setupLightsView(ne),Y===!0&&me.setGlobalState(_.clippingPlanes,ne),Ce.length>0&&hr(ie,Ce,Z,ne),J&&we.viewport(A.copy(J)),ie.length>0&&kt(ie,Z,ne),Ce.length>0&&kt(Ce,Z,ne),ke.length>0&&kt(ke,Z,ne),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function hr(C,Z,ne,J){const ie=Me.isWebGL2;ae===null&&(ae=new ci(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Cn:Gr,minFilter:ni,samples:ie?4:0})),_.getDrawingBufferSize(te),ie?ae.setSize(te.x,te.y):ae.setSize(va(te.x),va(te.y));const Ce=_.getRenderTarget();_.setRenderTarget(ae),_.getClearColor(U),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear();const ke=_.toneMapping;_.toneMapping=zr,kt(C,ne,J),fe.updateMultisampleRenderTarget(ae),fe.updateRenderTargetMipmap(ae);let ze=!1;for(let Ve=0,Ke=Z.length;Ve<Ke;Ve++){const ye=Z[Ve],We=ye.object,ft=ye.geometry,st=ye.material,Et=ye.group;if(st.side===qt&&We.layers.test(J.layers)){const er=st.side;st.side=At,st.needsUpdate=!0,ur(We,ne,J,ft,st,Et),st.side=er,st.needsUpdate=!0,ze=!0}}ze===!0&&(fe.updateMultisampleRenderTarget(ae),fe.updateRenderTargetMipmap(ae)),_.setRenderTarget(Ce),_.setClearColor(U,N),_.toneMapping=ke}function kt(C,Z,ne){const J=Z.isScene===!0?Z.overrideMaterial:null;for(let ie=0,Ce=C.length;ie<Ce;ie++){const ke=C[ie],ze=ke.object,Ve=ke.geometry,Ke=J===null?ke.material:J,ye=ke.group;ze.layers.test(ne.layers)&&ur(ze,Z,ne,Ve,Ke,ye)}}function ur(C,Z,ne,J,ie,Ce){C.onBeforeRender(_,Z,ne,J,ie,Ce),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(_,Z,ne,J,C,Ce),ie.transparent===!0&&ie.side===qt&&ie.forceSinglePass===!1?(ie.side=At,ie.needsUpdate=!0,_.renderBufferDirect(ne,Z,J,ie,C,Ce),ie.side=gr,ie.needsUpdate=!0,_.renderBufferDirect(ne,Z,J,ie,C,Ce),ie.side=qt):_.renderBufferDirect(ne,Z,J,ie,C,Ce),C.onAfterRender(_,Z,ne,J,ie,Ce)}function Dt(C,Z,ne){Z.isScene!==!0&&(Z=Ue);const J=le.get(C),ie=m.state.lights,Ce=m.state.shadowsArray,ke=ie.state.version,ze=I.getParameters(C,ie.state,Ce,Z,ne),Ve=I.getProgramCacheKey(ze);let Ke=J.programs;J.environment=C.isMeshStandardMaterial?Z.environment:null,J.fog=Z.fog,J.envMap=(C.isMeshStandardMaterial?se:xe).get(C.envMap||J.environment),Ke===void 0&&(C.addEventListener("dispose",Se),Ke=new Map,J.programs=Ke);let ye=Ke.get(Ve);if(ye!==void 0){if(J.currentProgram===ye&&J.lightsStateVersion===ke)return dr(C,ze),ye}else ze.uniforms=I.getUniforms(C),C.onBuild(ne,ze,_),C.onBeforeCompile(ze,_),ye=I.acquireProgram(ze,Ve),Ke.set(Ve,ye),J.uniforms=ze.uniforms;const We=J.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=me.uniform),dr(C,ze),J.needsLights=ls(C),J.lightsStateVersion=ke,J.needsLights&&(We.ambientLightColor.value=ie.state.ambient,We.lightProbe.value=ie.state.probe,We.directionalLights.value=ie.state.directional,We.directionalLightShadows.value=ie.state.directionalShadow,We.spotLights.value=ie.state.spot,We.spotLightShadows.value=ie.state.spotShadow,We.rectAreaLights.value=ie.state.rectArea,We.ltc_1.value=ie.state.rectAreaLTC1,We.ltc_2.value=ie.state.rectAreaLTC2,We.pointLights.value=ie.state.point,We.pointLightShadows.value=ie.state.pointShadow,We.hemisphereLights.value=ie.state.hemi,We.directionalShadowMap.value=ie.state.directionalShadowMap,We.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,We.spotShadowMap.value=ie.state.spotShadowMap,We.spotLightMatrix.value=ie.state.spotLightMatrix,We.spotLightMap.value=ie.state.spotLightMap,We.pointShadowMap.value=ie.state.pointShadowMap,We.pointShadowMatrix.value=ie.state.pointShadowMatrix);const ft=ye.getUniforms(),st=za.seqWithValue(ft.seq,We);return J.currentProgram=ye,J.uniformsList=st,ye}function dr(C,Z){const ne=le.get(C);ne.outputColorSpace=Z.outputColorSpace,ne.instancing=Z.instancing,ne.instancingColor=Z.instancingColor,ne.skinning=Z.skinning,ne.morphTargets=Z.morphTargets,ne.morphNormals=Z.morphNormals,ne.morphColors=Z.morphColors,ne.morphTargetsCount=Z.morphTargetsCount,ne.numClippingPlanes=Z.numClippingPlanes,ne.numIntersection=Z.numClipIntersection,ne.vertexAlphas=Z.vertexAlphas,ne.vertexTangents=Z.vertexTangents,ne.toneMapping=Z.toneMapping}function Qr(C,Z,ne,J,ie){Z.isScene!==!0&&(Z=Ue),fe.resetTextureUnits();const Ce=Z.fog,ke=J.isMeshStandardMaterial?Z.environment:null,ze=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xt,Ve=(J.isMeshStandardMaterial?se:xe).get(J.envMap||ke),Ke=J.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ye=!!ne.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),We=!!ne.morphAttributes.position,ft=!!ne.morphAttributes.normal,st=!!ne.morphAttributes.color;let Et=zr;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Et=_.toneMapping);const er=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,lt=er!==void 0?er.length:0,qe=le.get(J),ei=m.state.lights;if(Y===!0&&($===!0||C!==M)){const wt=C===M&&J.id===O;me.setState(J,C,wt)}let En=!1;J.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ei.state.version||qe.outputColorSpace!==ze||ie.isInstancedMesh&&qe.instancing===!1||!ie.isInstancedMesh&&qe.instancing===!0||ie.isSkinnedMesh&&qe.skinning===!1||!ie.isSkinnedMesh&&qe.skinning===!0||ie.isInstancedMesh&&qe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&qe.instancingColor===!1&&ie.instanceColor!==null||qe.envMap!==Ve||J.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==me.numPlanes||qe.numIntersection!==me.numIntersection)||qe.vertexAlphas!==Ke||qe.vertexTangents!==ye||qe.morphTargets!==We||qe.morphNormals!==ft||qe.morphColors!==st||qe.toneMapping!==Et||Me.isWebGL2===!0&&qe.morphTargetsCount!==lt)&&(En=!0):(En=!0,qe.__version=J.version);let tr=qe.currentProgram;En===!0&&(tr=Dt(J,Z,ie));let ra=!1,Fr=!1,wn=!1;const ut=tr.getUniforms(),pr=qe.uniforms;if(we.useProgram(tr.program)&&(ra=!0,Fr=!0,wn=!0),J.id!==O&&(O=J.id,Fr=!0),ra||M!==C){ut.setValue(P,"projectionMatrix",C.projectionMatrix),ut.setValue(P,"viewMatrix",C.matrixWorldInverse);const wt=ut.map.cameraPosition;wt!==void 0&&wt.setValue(P,pe.setFromMatrixPosition(C.matrixWorld)),Me.logarithmicDepthBuffer&&ut.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ut.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Fr=!0,wn=!0)}if(ie.isSkinnedMesh){ut.setOptional(P,ie,"bindMatrix"),ut.setOptional(P,ie,"bindMatrixInverse");const wt=ie.skeleton;wt&&(Me.floatVertexTextures?(wt.boneTexture===null&&wt.computeBoneTexture(),ut.setValue(P,"boneTexture",wt.boneTexture,fe),ut.setValue(P,"boneTextureSize",wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Sr=ne.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0&&Me.isWebGL2===!0)&&Ae.update(ie,ne,tr),(Fr||qe.receiveShadow!==ie.receiveShadow)&&(qe.receiveShadow=ie.receiveShadow,ut.setValue(P,"receiveShadow",ie.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(pr.envMap.value=Ve,pr.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),Fr&&(ut.setValue(P,"toneMappingExposure",_.toneMappingExposure),qe.needsLights&&ta(pr,wn),Ce&&J.fog===!0&&oe.refreshFogUniforms(pr,Ce),oe.refreshMaterialUniforms(pr,J,X,H,ae),za.upload(P,qe.uniformsList,pr,fe)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(za.upload(P,qe.uniformsList,pr,fe),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ut.setValue(P,"center",ie.center),ut.setValue(P,"modelViewMatrix",ie.modelViewMatrix),ut.setValue(P,"normalMatrix",ie.normalMatrix),ut.setValue(P,"modelMatrix",ie.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const wt=J.uniformsGroups;for(let Ai=0,ia=wt.length;Ai<ia;Ai++)if(Me.isWebGL2){const Xt=wt[Ai];Le.update(Xt,tr),Le.bind(Xt,tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tr}function ta(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function ls(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,Z,ne){le.get(C.texture).__webglTexture=Z,le.get(C.depthTexture).__webglTexture=ne;const J=le.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=ne===void 0,J.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,Z){const ne=le.get(C);ne.__webglFramebuffer=Z,ne.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(C,Z=0,ne=0){R=C,S=Z,b=ne;let J=!0,ie=null,Ce=!1,ke=!1;if(C){const ze=le.get(C);ze.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(P.FRAMEBUFFER,null),J=!1):ze.__webglFramebuffer===void 0?fe.setupRenderTarget(C):ze.__hasExternalTextures&&fe.rebindTextures(C,le.get(C.texture).__webglTexture,le.get(C.depthTexture).__webglTexture);const Ve=C.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(ke=!0);const Ke=le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ke[Z])?ie=Ke[Z][ne]:ie=Ke[Z],Ce=!0):Me.isWebGL2&&C.samples>0&&fe.useMultisampledRTT(C)===!1?ie=le.get(C).__webglMultisampledFramebuffer:Array.isArray(Ke)?ie=Ke[ne]:ie=Ke,A.copy(C.viewport),K.copy(C.scissor),F=C.scissorTest}else A.copy(k).multiplyScalar(X).floor(),K.copy(w).multiplyScalar(X).floor(),F=D;if(we.bindFramebuffer(P.FRAMEBUFFER,ie)&&Me.drawBuffers&&J&&we.drawBuffers(C,ie),we.viewport(A),we.scissor(K),we.setScissorTest(F),Ce){const ze=le.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ze.__webglTexture,ne)}else if(ke){const ze=le.get(C.texture),Ve=Z||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ze.__webglTexture,ne||0,Ve)}O=-1},this.readRenderTargetPixels=function(C,Z,ne,J,ie,Ce,ke){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(ze=ze[ke]),ze){we.bindFramebuffer(P.FRAMEBUFFER,ze);try{const Ve=C.texture,Ke=Ve.format,ye=Ve.type;if(Ke!==Kt&&ge.convert(Ke)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=ye===Cn&&(be.has("EXT_color_buffer_half_float")||Me.isWebGL2&&be.has("EXT_color_buffer_float"));if(ye!==Gr&&ge.convert(ye)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ye===br&&(Me.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-J&&ne>=0&&ne<=C.height-ie&&P.readPixels(Z,ne,J,ie,ge.convert(Ke),ge.convert(ye),Ce)}finally{const Ve=R!==null?le.get(R).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(C,Z,ne=0){const J=Math.pow(2,-ne),ie=Math.floor(Z.image.width*J),Ce=Math.floor(Z.image.height*J);fe.setTexture2D(Z,0),P.copyTexSubImage2D(P.TEXTURE_2D,ne,0,0,C.x,C.y,ie,Ce),we.unbindTexture()},this.copyTextureToTexture=function(C,Z,ne,J=0){const ie=Z.image.width,Ce=Z.image.height,ke=ge.convert(ne.format),ze=ge.convert(ne.type);fe.setTexture2D(ne,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,ne.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,ne.unpackAlignment),Z.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,J,C.x,C.y,ie,Ce,ke,ze,Z.image.data):Z.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,J,C.x,C.y,Z.mipmaps[0].width,Z.mipmaps[0].height,ke,Z.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,J,C.x,C.y,ke,ze,Z.image),J===0&&ne.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,ne,J,ie=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=C.max.x-C.min.x+1,ke=C.max.y-C.min.y+1,ze=C.max.z-C.min.z+1,Ve=ge.convert(J.format),Ke=ge.convert(J.type);let ye;if(J.isData3DTexture)fe.setTexture3D(J,0),ye=P.TEXTURE_3D;else if(J.isDataArrayTexture)fe.setTexture2DArray(J,0),ye=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,J.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,J.unpackAlignment);const We=P.getParameter(P.UNPACK_ROW_LENGTH),ft=P.getParameter(P.UNPACK_IMAGE_HEIGHT),st=P.getParameter(P.UNPACK_SKIP_PIXELS),Et=P.getParameter(P.UNPACK_SKIP_ROWS),er=P.getParameter(P.UNPACK_SKIP_IMAGES),lt=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,lt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,lt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,C.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,C.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,C.min.z),ne.isDataTexture||ne.isData3DTexture?P.texSubImage3D(ye,ie,Z.x,Z.y,Z.z,Ce,ke,ze,Ve,Ke,lt.data):ne.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(ye,ie,Z.x,Z.y,Z.z,Ce,ke,ze,Ve,lt.data)):P.texSubImage3D(ye,ie,Z.x,Z.y,Z.z,Ce,ke,ze,Ve,Ke,lt),P.pixelStorei(P.UNPACK_ROW_LENGTH,We),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft),P.pixelStorei(P.UNPACK_SKIP_PIXELS,st),P.pixelStorei(P.UNPACK_SKIP_ROWS,Et),P.pixelStorei(P.UNPACK_SKIP_IMAGES,er),ie===0&&J.generateMipmaps&&P.generateMipmap(ye),we.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?fe.setTextureCube(C,0):C.isData3DTexture?fe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?fe.setTexture2DArray(C,0):fe.setTexture2D(C,0),we.unbindTexture()},this.resetState=function(){S=0,b=0,R=null,we.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Er}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Qe?oi:ec}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===oi?Qe:xt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class d0 extends sh{}d0.prototype.isWebGL1Renderer=!0;class p0 extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class oh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Us,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=rr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new B;class zn{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[r+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class lh extends sr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let on;const Gn=new B,ln=new B,cn=new B,hn=new Fe,Hn=new Fe,ch=new Xe,Ga=new B,Vn=new B,Ha=new B,hh=new Fe,oo=new Fe,uh=new Fe;class f0 extends nt{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",on===void 0){on=new Pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oh(t,5);on.setIndex([0,1,2,0,2,3]),on.setAttribute("position",new zn(n,3,0,!1)),on.setAttribute("uv",new zn(n,2,3,!1))}this.geometry=on,this.material=e!==void 0?e:new lh,this.center=new Fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ln.setFromMatrixScale(this.matrixWorld),ch.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ln.multiplyScalar(-cn.z);const n=this.material.rotation;let r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));const s=this.center;Va(Ga.set(-.5,-.5,0),cn,s,ln,r,i),Va(Vn.set(.5,-.5,0),cn,s,ln,r,i),Va(Ha.set(.5,.5,0),cn,s,ln,r,i),hh.set(0,0),oo.set(1,0),uh.set(1,1);let o=e.ray.intersectTriangle(Ga,Vn,Ha,!1,Gn);if(o===null&&(Va(Vn.set(-.5,.5,0),cn,s,ln,r,i),oo.set(0,1),o=e.ray.intersectTriangle(Ga,Ha,Vn,!1,Gn),o===null))return;const l=e.ray.origin.distanceTo(Gn);l<e.near||l>e.far||t.push({distance:l,point:Gn.clone(),uv:Zt.getInterpolation(Gn,Ga,Vn,Ha,hh,oo,uh,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Va(a,e,t,n,r,i){hn.subVectors(a,t).addScalar(.5).multiply(n),r!==void 0?(Hn.x=i*hn.x-r*hn.y,Hn.y=r*hn.x+i*hn.y):Hn.copy(hn),a.copy(e),a.x+=Hn.x,a.y+=Hn.y,a.applyMatrix4(ch)}const dh=new B,ph=new et,fh=new et,m0=new B,mh=new Xe,un=new B,lo=new $t,gh=new Xe,co=new Ma;class g0 extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _r),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)un.fromBufferAttribute(t,n),this.applyBoneTransform(n,un),this.boundingBox.expandByPoint(un)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $t),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)un.fromBufferAttribute(t,n),this.applyBoneTransform(n,un),this.boundingSphere.expandByPoint(un)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(r),e.ray.intersectsSphere(lo)!==!1&&(gh.copy(r).invert(),co.copy(e.ray).applyMatrix4(gh),!(this.boundingBox!==null&&co.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,co)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;ph.fromBufferAttribute(r.attributes.skinIndex,e),fh.fromBufferAttribute(r.attributes.skinWeight,e),dh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){const s=fh.getComponent(i);if(s!==0){const o=ph.getComponent(i);mh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(m0.copy(dh).applyMatrix4(mh),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class vh extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class v0 extends St{constructor(e=null,t=1,n=1,r,i,s,o,l,c=_t,h=_t,u,d){super(null,s,o,l,c,h,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _h=new Xe,_0=new Xe;class ho{constructor(e=[],t=[]){this.uuid=rr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let i=0,s=e.length;i<s;i++){const o=e[i]?e[i].matrixWorld:_0;_h.multiplyMatrices(o,t[i]),_h.toArray(n,i*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ho(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=ac(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new v0(t,e,e,Kt,br);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const i=e.bones[n];let s=t[i];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",i),s=new vh),this.bones.push(s),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){const s=t[r];e.bones.push(s.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class uo extends It{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const dn=new Xe,xh=new Xe,Wa=[],yh=new _r,x0=new Xe,Wn=new Tt,Xn=new $t;class y0 extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,x0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _r),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dn),yh.copy(e.boundingBox).applyMatrix4(dn),this.boundingBox.union(yh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $t),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,dn),Xn.copy(e.boundingSphere).applyMatrix4(dn),this.boundingSphere.union(Xn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Wn.geometry=this.geometry,Wn.material=this.material,Wn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xn.copy(this.boundingSphere),Xn.applyMatrix4(n),e.ray.intersectsSphere(Xn)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,dn),xh.multiplyMatrices(n,dn),Wn.matrixWorld=xh,Wn.raycast(e,Wa);for(let s=0,o=Wa.length;s<o;s++){const l=Wa[s];l.instanceId=i,l.object=this,t.push(l)}Wa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class po extends sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sh=new B,Mh=new B,Th=new Xe,fo=new Ma,Xa=new $t;class mo extends nt{constructor(e=new Pt,t=new po){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,i=t.count;r<i;r++)Sh.fromBufferAttribute(t,r-1),Mh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Sh.distanceTo(Mh);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(r),Xa.radius+=i,e.ray.intersectsSphere(Xa)===!1)return;Th.copy(r).invert(),fo.copy(e.ray).applyMatrix4(Th);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new B,h=new B,u=new B,d=new B,p=this.isLineSegments?2:1,v=n.index,g=n.attributes.position;if(v!==null){const m=Math.max(0,s.start),f=Math.min(v.count,s.start+s.count);for(let y=m,_=f-1;y<_;y+=p){const x=v.getX(y),S=v.getX(y+1);if(c.fromBufferAttribute(g,x),h.fromBufferAttribute(g,S),fo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,s.start),f=Math.min(g.count,s.start+s.count);for(let y=m,_=f-1;y<_;y+=p){if(c.fromBufferAttribute(g,y),h.fromBufferAttribute(g,y+1),fo.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,i=n.length;r<i;r++){const s=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}const bh=new B,Eh=new B;class wh extends mo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,i=t.count;r<i;r+=2)bh.fromBufferAttribute(t,r),Eh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+bh.distanceTo(Eh);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class S0 extends mo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ah extends sr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rh=new Xe,go=new Ma,ja=new $t,qa=new B;class M0 extends nt{constructor(e=new Pt,t=new Ah){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(r),ja.radius+=i,e.ray.intersectsSphere(ja)===!1)return;Rh.copy(r).invert(),go.copy(e.ray).applyMatrix4(Rh);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=u,v=d;p<v;p++){const g=c.getX(p);qa.fromBufferAttribute(h,g),Ch(qa,g,l,r,e,t,this)}}else{const u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let p=u,v=d;p<v;p++)qa.fromBufferAttribute(h,p),Ch(qa,p,l,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,i=n.length;r<i;r++){const s=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function Ch(a,e,t,n,r,i,s){const o=go.distanceSqToPoint(a);if(o<t){const l=new B;go.closestPointToPoint(a,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;i.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class T0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),i=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const i=n.length;let s;t?s=t:s=e*n[i-1];let o=0,l=i-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-s,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===s)return r/(i-1);const h=n[r],u=n[r+1]-h,d=(s-h)/u;return(r+d)/(i-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const i=this.getPoint(n),s=this.getPoint(r),o=t||(i.isVector2?new Fe:new B);return o.copy(s).sub(i).normalize(),o}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new B,r=[],i=[],s=[],o=new B,l=new Xe;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new B)}i[0]=new B,s[0]=new B;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),s[0].crossVectors(r[0],i[0]);for(let p=1;p<=e;p++){if(i[p]=i[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(yt(r[p-1].dot(r[p]),-1,1));i[p].applyMatrix4(l.makeRotationAxis(o,v))}s[p].crossVectors(r[p],i[p])}if(t===!0){let p=Math.acos(yt(i[0].dot(i[e]),-1,1));p/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(p=-p);for(let v=1;v<=e;v++)i[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),s[v].crossVectors(r[v],i[v])}return{tangents:r,normals:i,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function vo(){let a=0,e=0,t=0,n=0;function r(i,s,o,l){a=i,e=o,t=-3*i+3*s-2*o-l,n=2*i-2*s+o+l}return{initCatmullRom:function(i,s,o,l,c){r(s,o,c*(o-i),c*(l-s))},initNonuniformCatmullRom:function(i,s,o,l,c,h,u){let d=(s-i)/c-(o-i)/(c+h)+(o-s)/h,p=(o-s)/h-(l-s)/(h+u)+(l-o)/u;d*=h,p*=h,r(s,o,d,p)},calc:function(i){const s=i*i,o=s*i;return a+e*i+t*s+n*o}}}const Ya=new B,_o=new vo,xo=new vo,yo=new vo;class b0 extends T0{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){const n=t,r=this.points,i=r.length,s=(i-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:l===0&&o===i-1&&(o=i-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%i]:(Ya.subVectors(r[0],r[1]).add(r[0]),c=Ya);const u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?h=r[(o+2)%i]:(Ya.subVectors(r[i-1],r[i-2]).add(r[i-1]),h=Ya),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);g<1e-4&&(g=1),v<1e-4&&(v=g),m<1e-4&&(m=g),_o.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,v,g,m),xo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,v,g,m),yo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,v,g,m)}else this.curveType==="catmullrom"&&(_o.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),xo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),yo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(_o.calc(l),xo.calc(l),yo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class So extends Pt{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const h=[],u=new B,d=new B,p=[],v=[],g=[],m=[];for(let f=0;f<=n;f++){const y=[],_=f/n;let x=0;f===0&&s===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){const b=S/t;u.x=-e*Math.cos(r+b*i)*Math.sin(s+_*o),u.y=e*Math.cos(s+_*o),u.z=e*Math.sin(r+b*i)*Math.sin(s+_*o),v.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(b+x,1-_),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const _=h[f][y+1],x=h[f][y],S=h[f+1][y],b=h[f+1][y+1];(f!==0||s>0)&&p.push(_,x,b),(f!==n-1||l<Math.PI)&&p.push(x,S,b)}this.setIndex(p),this.setAttribute("position",new Nt(v,3)),this.setAttribute("normal",new Nt(g,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mo extends sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rc,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yr extends Mo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Kr(a,e,t){return Uh(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function Ka(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Uh(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function E0(a){function e(r,i){return a[r]-a[i]}const t=a.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Ph(a,e,t){const n=a.length,r=new a.constructor(n);for(let i=0,s=0;s!==n;++i){const o=t[i]*e;for(let l=0;l!==e;++l)r[s++]=a[o+l]}return r}function Lh(a,e,t,n){let r=1,i=a[0];for(;i!==void 0&&i[n]===void 0;)i=a[r++];if(i===void 0)return;let s=i[n];if(s!==void 0)if(Array.isArray(s))do s=i[n],s!==void 0&&(e.push(i.time),t.push.apply(t,s)),i=a[r++];while(i!==void 0);else if(s.toArray!==void 0)do s=i[n],s!==void 0&&(e.push(i.time),s.toArray(t,t.length)),i=a[r++];while(i!==void 0);else do s=i[n],s!==void 0&&(e.push(i.time),t.push(s)),i=a[r++];while(i!==void 0)}class jn{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],i=t[n-1];e:{t:{let s;r:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<i)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(i=r,r=t[++n],e<r)break t}s=t.length;break r}if(!(e>=i)){const o=t[1];e<o&&(n=2,i=o);for(let l=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=i,i=t[--n-1],e>=i)break t}s=n,n=0;break r}break e}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let s=0;s!==r;++s)t[s]=n[i+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class w0 extends jn{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(e,t,n){const r=this.parameterPositions;let i=e-2,s=e+1,o=r[i],l=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case Zl:i=e,o=2*t-n;break;case Jl:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zl:s=e,l=2*n-t;break;case Jl:s=1,l=n+r[1]-r[0];break;default:s=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=i*h,this._offsetNext=s*h}interpolate_(e,t,n,r){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,v=(n-t)/(r-t),g=v*v,m=g*v,f=-d*m+2*d*g-d*v,y=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*v+1,_=(-1-p)*m+(1.5+p)*g+.5*v,x=p*m-p*g;for(let S=0;S!==o;++S)i[S]=f*s[h+S]+y*s[c+S]+_*s[l+S]+x*s[u+S];return i}}class A0 extends jn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)i[d]=s[c+d]*u+s[l+d]*h;return i}}class R0 extends jn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class yr{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ka(t,this.TimeBufferType),this.values=Ka(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ka(e.times,Array),values:Ka(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new R0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new A0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new w0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Un:t=this.InterpolantFactoryMethodDiscrete;break;case Ii:t=this.InterpolantFactoryMethodLinear;break;case As:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Un;case this.InterpolantFactoryMethodLinear:return Ii;case this.InterpolantFactoryMethodSmooth:return As}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let i=0,s=r-1;for(;i!==r&&n[i]<e;)++i;for(;s!==-1&&n[s]>t;)--s;if(++s,i!==0||s!==r){i>=s&&(s=Math.max(s,1),i=s-1);const o=this.getValueSize();this.times=Kr(n,i,s),this.values=Kr(this.values,i*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,i=n.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==i;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(r!==void 0&&Uh(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Kr(this.times),t=Kr(this.values),n=this.getValueSize(),r=this.getInterpolation()===As,i=e.length-1;let s=1;for(let o=1;o<i;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{const u=o*n,d=u-n,p=u+n;for(let v=0;v!==n;++v){const g=t[u+v];if(g!==t[d+v]||g!==t[p+v]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const u=o*n,d=s*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++s}}if(i>0){e[s]=e[i];for(let o=i*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=Kr(e,0,s),this.values=Kr(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=Kr(this.times,0),t=Kr(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}yr.prototype.TimeBufferType=Float32Array,yr.prototype.ValueBufferType=Float32Array,yr.prototype.DefaultInterpolation=Ii;class pn extends yr{}pn.prototype.ValueTypeName="bool",pn.prototype.ValueBufferType=Array,pn.prototype.DefaultInterpolation=Un,pn.prototype.InterpolantFactoryMethodLinear=void 0,pn.prototype.InterpolantFactoryMethodSmooth=void 0;class Dh extends yr{}Dh.prototype.ValueTypeName="color";class fn extends yr{}fn.prototype.ValueTypeName="number";class C0 extends jn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let h=c+o;c!==h;c+=4)ir.slerpFlat(i,0,s,c-o,s,c,l);return i}}class _i extends yr{InterpolantFactoryMethodLinear(e){return new C0(this.times,this.values,this.getValueSize(),e)}}_i.prototype.ValueTypeName="quaternion",_i.prototype.DefaultInterpolation=Ii,_i.prototype.InterpolantFactoryMethodSmooth=void 0;class mn extends yr{}mn.prototype.ValueTypeName="string",mn.prototype.ValueBufferType=Array,mn.prototype.DefaultInterpolation=Un,mn.prototype.InterpolantFactoryMethodLinear=void 0,mn.prototype.InterpolantFactoryMethodSmooth=void 0;class gn extends yr{}gn.prototype.ValueTypeName="vector";class U0{constructor(e,t=-1,n,r=Id){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=rr(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(L0(n[s]).scale(r));const i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,s=n.length;i!==s;++i)t.push(yr.toJSON(n[i]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const i=t.length,s=[];for(let o=0;o<i;o++){let l=[],c=[];l.push((o+i-1)%i,o,(o+1)%i),c.push(0,1,0);const h=E0(l);l=Ph(l,1,h),c=Ph(c,1,h),!r&&l[0]===0&&(l.push(i),c.push(c[0])),s.push(new fn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},i=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(i);if(h&&h.length>1){const u=h[1];let d=r[u];d||(r[u]=d=[]),d.push(c)}}const s=[];for(const o in r)s.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,d,p,v){if(d.length!==0){const g=[],m=[];Lh(d,g,m,p),g.length!==0&&v.push(new h(u,g,m))}},r=[],i=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let v=0;v<u[p].morphTargets.length;v++)d[u[p].morphTargets[v]]=-1;for(const v in d){const g=[],m=[];for(let f=0;f!==u[p].morphTargets.length;++f){const y=u[p];g.push(y.time),m.push(y.morphTarget===v?1:0)}r.push(new fn(".morphTargetInfluence["+v+"]",g,m))}l=d.length*s}else{const d=".bones["+t[h].name+"]";n(gn,d+".position",u,"pos",r),n(_i,d+".quaternion",u,"rot",r),n(gn,d+".scale",u,"scl",r)}}return r.length===0?null:new this(i,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const i=this.tracks[n];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function P0(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fn;case"vector":case"vector2":case"vector3":case"vector4":return gn;case"color":return Dh;case"quaternion":return _i;case"bool":case"boolean":return pn;case"string":return mn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function L0(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=P0(a.type);if(a.times===void 0){const t=[],n=[];Lh(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const vn={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class D0{constructor(e,t,n){const r=this;let i=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,i===!1&&r.onStart!==void 0&&r.onStart(h,s,o),i=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,o),s===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],v=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const I0=new D0;class _n{constructor(e){this.manager=e!==void 0?e:I0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_n.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dr={};class N0 extends Error{constructor(e,t){super(e),this.response=t}}class Ih extends _n{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=vn.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(Dr[e]!==void 0){Dr[e].push({onLoad:t,onProgress:n,onError:r});return}Dr[e]=[],Dr[e].push({onLoad:t,onProgress:n,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Dr[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,v=p!==0;let g=0;const m=new ReadableStream({start(f){y();function y(){u.read().then(({done:_,value:x})=>{if(_)f.close();else{g+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:p});for(let b=0,R=h.length;b<R;b++){const O=h[b];O.onProgress&&O.onProgress(S)}f.enqueue(x),y()}})}}});return new Response(m)}else throw new N0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{vn.add(e,c);const h=Dr[e];delete Dr[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Dr[e];if(h===void 0)throw this.manager.itemError(e),c;delete Dr[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class O0 extends _n{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,s=vn.get(e);if(s!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(s),i.manager.itemEnd(e)},0),s;const o=Dn("img");function l(){h(),vn.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(u){h(),r&&r(u),i.manager.itemError(e),i.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}}class F0 extends _n{constructor(e){super(e)}load(e,t,n,r){const i=new St,s=new O0(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}}class $a extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const To=new Xe,Nh=new B,Oh=new B;class bo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class B0 extends bo{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Oi*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class k0 extends $a{constructor(e,t,n=0,r=Math.PI/3,i=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=r,this.penumbra=i,this.decay=s,this.map=null,this.shadow=new B0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fh=new Xe,qn=new B,Eo=new B;class z0 extends bo{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),qn.setFromMatrixPosition(e.matrixWorld),n.position.copy(qn),Eo.copy(n.position),Eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Eo),n.updateMatrixWorld(),r.makeTranslation(-qn.x,-qn.y,-qn.z),Fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh)}}class G0 extends $a{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new z0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class H0 extends bo{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bh extends $a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new H0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class V0 extends $a{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class W0 extends Pt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class X0 extends _n{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,s=vn.get(e);if(s!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(s),i.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(l){vn.add(e,l),t&&t(l),i.manager.itemEnd(e)}).catch(function(l){r&&r(l),i.manager.itemError(e),i.manager.itemEnd(e)}),i.manager.itemStart(e)}}const Ao="\\[\\]\\.:\\/",j0=new RegExp("["+Ao+"]","g"),Ro="[^"+Ao+"]",q0="[^"+Ao.replace("\\.","")+"]",Y0=/((?:WC+[\/:])*)/.source.replace("WC",Ro),K0=/(WCOD+)?/.source.replace("WCOD",q0),$0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ro),Z0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ro),J0=new RegExp("^"+Y0+K0+$0+Z0+"$"),Q0=["material","materials","bones","map"];class e_{constructor(e,t,n){const r=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(j0,"")}static parseTrackName(e){const t=J0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const i=n.nodeName.substring(r+1);Q0.indexOf(i)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=i)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(i){for(let s=0;s<i.length;s++){const o=i[s];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let i=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[r];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(i!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=i}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=e_,tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray],tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class t_ extends wh{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Pt;r.setAttribute("position",new Nt(t,3)),r.setAttribute("color",new Nt(n,3));const i=new po({vertexColors:!0,toneMapped:!1});super(r,i),this.type="AxesHelper"}setColors(e,t,n){const r=new Ge,i=this.geometry.attributes.color.array;return r.set(e),r.toArray(i,0),r.toArray(i,3),r.set(t),r.toArray(i,6),r.toArray(i,9),r.set(n),r.toArray(i,12),r.toArray(i,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gs}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gs);class xn{static createButton(e){const t=document.createElement("button");function n(){let l=null;async function c(u){u.addEventListener("end",h),await e.xr.setSession(u),t.textContent="EXIT VR",l=u}function h(){l.removeEventListener("end",h),t.textContent="ENTER VR",l=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR",t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){if(l===null){const u={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",u).then(c)}else l.end()}}function r(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function i(){r(),t.textContent="VR NOT SUPPORTED"}function s(l){r(),console.warn("Exception when trying to call xr.isSessionSupported",l),t.textContent="VR NOT ALLOWED"}function o(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",o(t),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?n():i(),l&&xn.xrSessionIsGranted&&t.click()}).catch(s),t;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",o(l),l}}static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{xn.xrSessionIsGranted=!0})}}}xn.xrSessionIsGranted=!1,xn.registerSessionGrantedListener();class ct{}class kh{}class r_ extends kh{constructor(e,t){super(),this.componentClass=e,this.condition=t}match(e){const t=e.get(this.componentClass);return t===void 0?!1:this.condition(t)}}class Je{constructor(){ue(this,"ecs")}updateAll(e,t){for(const n of e)this.update(n,t)}}class i_{constructor(){ue(this,"map",new Map)}add(e){this.map.set(e.constructor,e)}get(e){return this.map.get(e)}has(e){return this.map.has(e)}hasAll(e){for(let t of e)if(t instanceof kh){if(!t.match(this.map))return!1}else if(!this.map.has(t))return!1;return!0}delete(e){this.map.delete(e)}}class n_{constructor(e){ue(this,"component");this.component=new e}assign(e){for(const t of Object.keys(e))e[t]!==void 0&&(this.component[t]=e[t]);return this}build(){return this.component}}function ht(a){return new n_(a)}function zh(a,e){return new r_(a,e)}class a_{constructor(){ue(this,"nextEntityID",1);ue(this,"entitiesToDestroy",new Array);ue(this,"entities",new Map);ue(this,"systems",new Map)}addEntity(...e){let t=this.nextEntityID;this.nextEntityID++,this.entities.set(t,new i_);for(const n of e)for(const r of n)this.addComponent(t,r.build());return t}removeEntity(e){this.entitiesToDestroy.push(e)}destroyEntity(e){this.entities.delete(e);for(let t of this.systems.values())t.delete(e)}addComponent(e,t){var n;(n=this.entities.get(e))==null||n.add(t),this.checkE(e)}getComponents(e){return this.entities.get(e)}removeComponent(e,t){var n;(n=this.entities.get(e))==null||n.delete(t),this.checkE(e)}checkE(e){for(let t of this.systems.keys())this.checkES(e,t)}checkES(e,t){var i,s;let n=this.entities.get(e),r=t.query;n!=null&&n.hasAll(r)?(i=this.systems.get(t))==null||i.add(e):(s=this.systems.get(t))==null||s.delete(e)}addSystem(e){if(e.query.length==0){console.warn("System "+e+" not added: empty components list.");return}e.ecs=this,this.systems.set(e,new Set);for(let t of this.entities.keys())this.checkES(t,e)}removeSystem(e){this.systems.delete(e)}update(e){for(let[t,n]of this.systems.entries())t.updateAll(n,e);for(;this.entitiesToDestroy.length>0;)this.destroyEntity(this.entitiesToDestroy.pop())}find(e,t=()=>!0){for(const[n,r]of this.entities.entries())if(r.hasAll(e)&&t(r,n))return n}findAll(e){const t=[];for(const[n,r]of this.entities.entries())r.hasAll(e)&&t.push(n);return t}}class Co extends ct{constructor(){super(...arguments);ue(this,"everySeconds",.5);ue(this,"countdownToSpawn",0)}}class Uo extends ct{constructor(){super(...arguments);ue(this,"size",new Fe)}}function Gh(a){let e=0;for(const t of a)e=e|1<<t;return e}function s_(a,e){return a<<16|e}class yn{constructor(e=[0],t){ue(this,"membership");ue(this,"filter");this.membership=e,this.filter=t!==void 0?t:[...e]}getMask(){return s_(Gh(this.membership),Gh(this.filter))}}class Ir{constructor(){ue(this,"rigidBodyDesc");ue(this,"colliderDesc");ue(this,"rigidBody");ue(this,"collider");ue(this,"collisionGroups",new yn);ue(this,"solverGroups",new yn);ue(this,"userData")}}class Nr extends ct{constructor(){super(...arguments);ue(this,"index",0);ue(this,"trigger",{value:0,pressed:!1})}}class Po extends ct{constructor(){super(...arguments);ue(this,"countdown",0)}}class pt extends ct{constructor(){super(...arguments);ue(this,"position",new B);ue(this,"quaternion",new ir);ue(this,"scale",new B(1,1,1))}}class Yn extends ct{}var Lt=(a=>(a.RoadSegment="RoadSegment",a.Barrier="Barrier",a.Bullet="Bullet",a.Enemy="Enemy",a.Text="Text",a.Gun="Gun",a.None="None",a))(Lt||{});class Kn extends ct{constructor(){super(...arguments);ue(this,"mesh","None");ue(this,"castShadow",!1);ue(this,"receiveShadow",!0)}}class xi extends ct{constructor(){super(...arguments);ue(this,"visible",!0)}}class Za extends ct{constructor(){super(...arguments);ue(this,"pan",new Fe(0,0))}}class Hh extends ct{}class Vh extends ct{}class Ja extends ct{constructor(){super(...arguments);ue(this,"id",0)}}class Wh extends ct{}class yi extends ct{constructor(){super(...arguments);ue(this,"text","");ue(this,"fontSize",.9);ue(this,"color",16711680);ue(this,"needsUpdate",!0)}}class o_ extends ct{}class Lo extends ct{constructor(){super(...arguments);ue(this,"curve");ue(this,"t",999);ue(this,"speed",.1);ue(this,"points",[]);ue(this,"rotationMatrix",new Xe);ue(this,"arial",new $t(new B(0,5,-10),3))}}class Qa extends ct{constructor(){super(...arguments);ue(this,"health",70)}}class Si extends ct{}class Mi extends ct{}class l_ extends Je{constructor(){super(...arguments);ue(this,"query",[Uo])}update(t,n){const{renderer:r}=n,i=this.ecs.getComponents(t),{size:s}=i.get(Uo);window.devicePixelRatio!==r.getPixelRatio()&&r.setPixelRatio(window.devicePixelRatio);const o=r.domElement.offsetWidth,l=r.domElement.offsetHeight;(s.width!==o||s.height!==l)&&(r.setSize(o,l,!1),s.set(o,l),console.log(s))}}class c_ extends Je{constructor(){super(...arguments);ue(this,"query",[Si,Ir,pt])}update(t,n){const{world:r}=n,i=this.ecs.getComponents(t).get(Ir);if(i.colliderDesc===void 0||i.rigidBodyDesc===void 0)throw new Error("unable to instantiate undefined collider or rigid body");i.colliderDesc.setCollisionGroups(i.collisionGroups.getMask()).setSolverGroups(i.solverGroups.getMask());const s=r.createRigidBody(i.rigidBodyDesc),o=r.createCollider(i.colliderDesc,s);i.rigidBody=s,i.collider=o,s.userData={...i.userData,entity:t},console.log("add collider",o)}}class h_ extends Je{constructor(t){super();ue(this,"query",[Mi,Ir]);this.world=t}update(t){const n=this.ecs.getComponents(t).get(Ir);if(n.collider===void 0||n.rigidBody===void 0)throw new Error("unable to destroy undefined collider or rigid body");this.world.removeCollider(n.collider,!0),this.world.removeRigidBody(n.rigidBody),console.log("destroy collider",n.collider)}}class u_ extends Je{constructor(){super(...arguments);ue(this,"query",[Ir,pt])}update(t){const n=this.ecs.getComponents(t),{position:r,quaternion:i}=n.get(pt),{collider:s}=n.get(Ir);if(s===void 0)throw new Error("collider is undefined, unable to change transform");const o=s.translation(),l=s.rotation();r.set(o.x,o.y,o.z),i.set(l.x,l.y,l.z,l.w)}}class d_ extends Je{constructor(){super(...arguments);ue(this,"query",[Mi])}update(t){this.ecs.removeEntity(t),console.log("destroy entity",t)}}class p_ extends Je{constructor(){super(...arguments);ue(this,"query",[Si])}update(t){this.ecs.removeComponent(t,Si)}}var Do=(a=>(a.Collide="Collide",a))(Do||{});class f_{constructor(e,t,n,r,i,s,o,l){this.scene=e,this.camera=t,this.world=n,this.renderer=r,this.RAPIER=i,this.assets=s,this.gameModel=o,this.events=l}}class m_ extends Je{constructor(t){super();ue(this,"query",[Yn]);this.eventQueue=t}update(t,n){n.world.step(this.eventQueue),this.eventQueue.drainCollisionEvents((r,i)=>{var h,u;const s=n.world.getCollider(r),o=n.world.getCollider(i),l=((h=s.parent())==null?void 0:h.userData).entity,c=((u=o.parent())==null?void 0:u.userData).entity;n.events.emit(Do.Collide,{entity1:l,entity2:c})})}}class g_ extends Je{constructor(){super(...arguments);ue(this,"query",[Yn])}update(t,n){const{renderer:r,scene:i,camera:s}=n;s.aspect=r.domElement.width/r.domElement.height,s.updateProjectionMatrix(),r.render(i,s)}}class v_ extends Je{constructor(t=20,n=.01,r=new B(0,0,0),i=s=>!0){super();ue(this,"query",[Yn]);ue(this,"onRotate");ue(this,"azimuthalAngle",0);ue(this,"polarAngle",Math.PI/8);this.radius=t,this.sensitivity=n,this.center=r,this.startPredicate=i;let s=new Fe;const o=h=>{s=new Fe,h instanceof TouchEvent?s.set(h.changedTouches[0].clientX,h.changedTouches[0].clientY):s.set(h.clientX,h.clientY),this.startPredicate(s)&&(document.addEventListener("mousemove",l),document.addEventListener("mouseup",c),document.addEventListener("touchmove",l),document.addEventListener("touchend",c))},l=h=>{const u=new Fe;h instanceof TouchEvent?u.set(h.changedTouches[0].clientX,h.changedTouches[0].clientY):u.set(h.clientX,h.clientY);const d=u.clone().sub(s);this.rotateDelta(d),s=u},c=()=>{document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",c)};document.addEventListener("mousedown",o),document.addEventListener("touchstart",o)}update(t,n){if(n.renderer.xr.getSession()!==null)return;const{camera:r}=n,i=this.polarAngle,s=this.azimuthalAngle,o=this.radius,{sin:l,cos:c,abs:h}=Math,u=new B(o*c(h(i))*l(s),o*l(i),o*c(h(i))*c(s));r.position.copy(u),r.lookAt(0,0,0),r.position.add(this.center)}rotateDelta(t){const n=this.polarAngle+t.y*this.sensitivity,r=this.azimuthalAngle-t.x*this.sensitivity;this.setRotation(n,r)}setRotation(t,n){const{PI:r}=Math,i=r*2,s=Math.PI/2;this.polarAngle=Math.min(s,Math.max(-s,t%i)),this.azimuthalAngle=n%i,this.onRotate!==void 0&&this.onRotate()}getPolarAngle(){return this.polarAngle}getAzimuthalAngle(){return this.azimuthalAngle}}class Or{static delta(){return this._delta}static deltaSeconds(){return this._delta*.001}static init(){this._currentTime=Date.now()}static update(){const e=Date.now(),t=e-this._currentTime;this._currentTime=e,this._delta=Math.min(t,50)}}ue(Or,"_currentTime",0),ue(Or,"_delta",0);class __ extends Je{constructor(){super(...arguments);ue(this,"query",[Po])}update(t){const n=this.ecs.getComponents(t).get(Po);if(n.countdown<=0){this.ecs.addComponent(t,new Mi),console.log("destroy by countdown",t);return}n.countdown-=Or.deltaSeconds()}}class x_ extends Je{constructor(){super(...arguments);ue(this,"query",[Za,pt,xi])}update(t,n){const r=this.ecs.getComponents(t),{position:i}=r.get(pt),{pan:s}=r.get(Za),o=r.get(xi),{gameModel:l}=n,c=l.getNextBarrierSegment();if(c===void 0){o.visible=!1;return}i.set(s.x,l.getBarrierHeight()+s.y,c.position),o.visible=!0}}class y_ extends Je{constructor(){super(...arguments);ue(this,"query",[Hh,yi])}update(t,n){const r=this.ecs.getComponents(t).get(yi),i=n.gameModel.getPassedCount().toString();i!==r.text&&(r.text=i,r.needsUpdate=!0)}}class S_ extends Je{constructor(){super(...arguments);ue(this,"query",[Vh,yi])}update(t,n){const r=this.ecs.getComponents(t).get(yi),i=n.gameModel.getAttemptCount().toString();i!==r.text&&(r.text=i,r.color=17561,r.needsUpdate=!0)}}function Sn(a){return[ht(Si),ht(xi).assign({visible:a.visible}),ht(pt).assign({position:a.position,quaternion:a.quaternion,scale:a.scale}),ht(Kn).assign({mesh:a.mesh,castShadow:a.castShadow,receiveShadow:a.receiveShadow})]}function M_(a){return[...Sn({mesh:Lt.Barrier,castShadow:!0,receiveShadow:!1}),ht(Ja).assign({id:a}),ht(Wh)]}function Xh(a,e,t=new yn,n=new yn,r){return[ht(Ir).assign({rigidBodyDesc:a,colliderDesc:e,collisionGroups:t,solverGroups:n,userData:r})]}function T_(a){return[ht(Po).assign({countdown:a})]}const jh=1.25,qh=10,Yh=.03,Kh=1;function b_(a,e,t){const n=t.clone().multiplyScalar(500);return[...Sn({mesh:Lt.Bullet}),...Xh(a.RigidBodyDesc.dynamic().setLinvel(n.x,n.y,n.z).setCcdEnabled(!0).setGravityScale(0).setAdditionalMass(1).setTranslation(e.x,e.y,e.z),a.ColliderDesc.ball(Yh),new yn([Kh])),...T_(2),ht(o_)]}function E_(a=.2){return[ht(Co).assign({everySeconds:a})]}function w_(){return[ht(Uo)]}function A_(a){return[ht(Nr).assign({index:a})]}function $h(a){return[...Sn({mesh:Lt.Gun}),...A_(a),...E_()]}function R_(a){return[...Sn({mesh:Lt.RoadSegment}),ht(Ja).assign({id:a})]}function C_(){return[ht(Yn)]}function Zh(a=""){return[...Sn({mesh:Lt.Text}),ht(yi).assign({text:a})]}function U_(){return[...Zh(),ht(Za).assign({pan:new Fe(0,1.5)}),ht(Hh)]}function P_(){return[...Zh(),ht(Za).assign({pan:new Fe(qh/2-.3,1.5)}),ht(Vh)]}function L_(a,e,t,n){return[...Sn({mesh:Lt.Enemy,receiveShadow:!1,castShadow:!0,position:t}),...Xh(a.RigidBodyDesc.fixed(),a.ColliderDesc.trimesh(e.helicopter.trimesh.vertices,e.helicopter.trimesh.indices).setSensor(!0).setActiveEvents(a.ActiveEvents.COLLISION_EVENTS).setRotation(new ir().setFromEuler(new Wi(Math.PI/2))),new yn([Kh])),ht(Lo).assign({arial:n}),ht(Qa)]}class D_ extends Je{constructor(){super(...arguments);ue(this,"query",[Co,Nr,pt])}update(t,n){const{RAPIER:r,assets:i}=n,s=this.ecs.getComponents(t),o=s.get(Co),{trigger:l}=s.get(Nr),{position:c,quaternion:h,scale:u}=s.get(pt);if(l.pressed&&o.countdownToSpawn<=0){const d=new Xe().compose(c,h,u).multiply(i.gun.bulletSpawnTransform),p=new B,v=new B;p.setFromMatrixPosition(d),v.setFromMatrixColumn(d,2).multiplyScalar(-1),this.ecs.addEntity(b_(r,p,v)),o.countdownToSpawn=o.everySeconds;return}o.countdownToSpawn-=Or.deltaSeconds()}}function I_(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Jh={exports:{}};(function(a){var e=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function r(l,c,h){this.fn=l,this.context=c,this.once=h||!1}function i(l,c,h,u,d){if(typeof h!="function")throw new TypeError("The listener must be a function");var p=new r(h,u||l,d),v=t?t+c:c;return l._events[v]?l._events[v].fn?l._events[v]=[l._events[v],p]:l._events[v].push(p):(l._events[v]=p,l._eventsCount++),l}function s(l,c){--l._eventsCount===0?l._events=new n:delete l._events[c]}function o(){this._events=new n,this._eventsCount=0}o.prototype.eventNames=function(){var l=[],c,h;if(this._eventsCount===0)return l;for(h in c=this._events)e.call(c,h)&&l.push(t?h.slice(1):h);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(c)):l},o.prototype.listeners=function(l){var c=t?t+l:l,h=this._events[c];if(!h)return[];if(h.fn)return[h.fn];for(var u=0,d=h.length,p=new Array(d);u<d;u++)p[u]=h[u].fn;return p},o.prototype.listenerCount=function(l){var c=t?t+l:l,h=this._events[c];return h?h.fn?1:h.length:0},o.prototype.emit=function(l,c,h,u,d,p){var v=t?t+l:l;if(!this._events[v])return!1;var g=this._events[v],m=arguments.length,f,y;if(g.fn){switch(g.once&&this.removeListener(l,g.fn,void 0,!0),m){case 1:return g.fn.call(g.context),!0;case 2:return g.fn.call(g.context,c),!0;case 3:return g.fn.call(g.context,c,h),!0;case 4:return g.fn.call(g.context,c,h,u),!0;case 5:return g.fn.call(g.context,c,h,u,d),!0;case 6:return g.fn.call(g.context,c,h,u,d,p),!0}for(y=1,f=new Array(m-1);y<m;y++)f[y-1]=arguments[y];g.fn.apply(g.context,f)}else{var _=g.length,x;for(y=0;y<_;y++)switch(g[y].once&&this.removeListener(l,g[y].fn,void 0,!0),m){case 1:g[y].fn.call(g[y].context);break;case 2:g[y].fn.call(g[y].context,c);break;case 3:g[y].fn.call(g[y].context,c,h);break;case 4:g[y].fn.call(g[y].context,c,h,u);break;default:if(!f)for(x=1,f=new Array(m-1);x<m;x++)f[x-1]=arguments[x];g[y].fn.apply(g[y].context,f)}}return!0},o.prototype.on=function(l,c,h){return i(this,l,c,h,!1)},o.prototype.once=function(l,c,h){return i(this,l,c,h,!0)},o.prototype.removeListener=function(l,c,h,u){var d=t?t+l:l;if(!this._events[d])return this;if(!c)return s(this,d),this;var p=this._events[d];if(p.fn)p.fn===c&&(!u||p.once)&&(!h||p.context===h)&&s(this,d);else{for(var v=0,g=[],m=p.length;v<m;v++)(p[v].fn!==c||u&&!p[v].once||h&&p[v].context!==h)&&g.push(p[v]);g.length?this._events[d]=g.length===1?g[0]:g:s(this,d)}return this},o.prototype.removeAllListeners=function(l){var c;return l?(c=t?t+l:l,this._events[c]&&s(this,c)):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=t,o.EventEmitter=o,a.exports=o})(Jh);var N_=Jh.exports;const Io=I_(N_);class Qh{static get(){return++this.idCounter}}ue(Qh,"idCounter",0);class O_{constructor(e=!0,t=0,n=0){ue(this,"id",Qh.get());this.hasBarrier=e,this.position=t,this.nextPosition=n}update(e,t){this.nextPosition=this.position;const n=e*t;this.position+=n,this.nextPosition=this.position+n}}var es=(a=>(a.AddSegment="AddSegment",a.RemoveSegment="RemoveSegment",a))(es||{});class F_ extends Io{constructor(){super(...arguments);ue(this,"segments",[]);ue(this,"velocity",5);ue(this,"frontDistance",-80);ue(this,"backDistance",20);ue(this,"segmentSize",10);ue(this,"segmentCount",0);ue(this,"barrierFrequency",2);ue(this,"barrierHeight",jh)}deleteBackSegments(){let t=this.segments.length>0;for(;t;){const n=this.segments[0];n.position>this.backDistance?(this.segments.splice(0,1),this.emit("RemoveSegment",n)):t=!1}}addFrontSegments(){let t=this.backDistance;this.segments.length>0&&(t=this.segments[this.segments.length-1].position-this.segmentSize);const{frontDistance:n,segmentSize:r}=this;for(let i=t;i>=n;i-=r){this.segmentCount++;const s=this.segmentCount%this.barrierFrequency===0,o=new O_(s,i,i);this.segments.push(o),this.emit("AddSegment",o)}}updateSegments(t){for(const n of this.segments)n.update(t,this.velocity)}update(t){this.deleteBackSegments(),this.addFrontSegments(),this.updateSegments(t)}getSegmentById(t){for(const n of this.segments)if(n.id===t)return n}getClosestBarrier(t){for(let n=this.segments.length-1;n>=0;n--){const r=this.segments[n];if(r.hasBarrier&&r.position>-(this.segmentSize*this.barrierFrequency)+t)return this.getSegmentById(r.id)}}}class B_ extends Io{constructor(){super();ue(this,"road",new F_);ue(this,"headPosition",new B);ue(this,"headCollisionEnabled",!0);ue(this,"nextBarrierSegment");ue(this,"passedCount",0);ue(this,"attemptCount",3);ue(this,"segmentPassedMap",new Set);this.road.on(es.RemoveSegment,t=>{this.segmentPassedMap.delete(t)})}updateRoad(t){this.road.update(t)}updateNextBarrier(){const t=this.road.getClosestBarrier(this.headPosition.z);t!==void 0&&(this.segmentPassedMap.has(t.id)||(this.segmentPassedMap.add(t.id),this.nextBarrierSegment=t,this.updatePassesCount(),this.updateAttemptCount()))}updatePassesCount(){this.passedCount++}updateAttemptCount(){this.headCollisionEnabled&&this.headPosition.y>this.road.barrierHeight&&this.decreaseAttempts()}decreaseAttempts(){this.attemptCount>0&&this.attemptCount--}update(t){this.updateRoad(t),this.updateNextBarrier()}getNextBarrierSegment(){return this.nextBarrierSegment}getBarrierHeight(){return this.road.barrierHeight}setHeadPosition(t){this.headPosition.copy(t)}getHeadPosition(){return this.headPosition}setHeadCollisionEnabled(t){this.headCollisionEnabled=t}getRoad(){return this.road}getAttemptCount(){return this.attemptCount}getPassedCount(){return this.passedCount}}class k_ extends Je{constructor(){super(...arguments);ue(this,"query",[Yn]);ue(this,"firstTime",!0);ue(this,"assets");ue(this,"RAPIER");ue(this,"roadSegmentEntityMap",new Map);ue(this,"onAddRoadSegment",t=>{const{ecs:n,roadSegmentEntityMap:r}=this,i=n.addEntity(R_(t.id));let s;t.hasBarrier&&(s=n.addEntity(M_(t.id))),r.set(t.id,{segment:i,barrier:s})});ue(this,"onRemoveRoadSegment",t=>{const{ecs:n,roadSegmentEntityMap:r}=this,i=r.get(t.id);i!==void 0&&(n.addComponent(i.segment,new Mi),i.barrier&&n.addComponent(i.segment,new Mi),r.delete(t.id))})}update(t,n){this.firstTime&&(this.firstTime=!1,this.initGameModel(n));const{gameModel:r,renderer:i}=n;if(r.setHeadCollisionEnabled(!1),i.xr.getSession()){r.setHeadCollisionEnabled(!0);const s=n.renderer.xr.getCamera();r.setHeadPosition(s.position)}n.gameModel.update(Or.deltaSeconds())}initGameModel(t){this.assets=t.assets,this.RAPIER=t.RAPIER,this.listenGameModel(t.gameModel),this.ecs.addEntity(L_(this.RAPIER,this.assets,new B(0,30,0))),t.events.on(Do.Collide,n=>{const r=this.ecs.getComponents(n.entity1),i=this.ecs.getComponents(n.entity2);console.log(r,i)})}listenGameModel(t){t.getRoad().on(es.AddSegment,this.onAddRoadSegment),t.getRoad().on(es.RemoveSegment,this.onRemoveRoadSegment)}}class z_ extends Je{constructor(){super(...arguments);ue(this,"query",[Wh,pt])}update(t,n){const r=this.ecs.getComponents(t),{position:i}=r.get(pt);i.y=n.gameModel.getRoad().barrierHeight,i.x=qh/2}}class G_ extends Je{constructor(){super(...arguments);ue(this,"query",[Ja,pt])}update(t,n){const r=this.ecs.getComponents(t),{id:i}=r.get(Ja),{position:s}=r.get(pt),o=n.gameModel.getRoad().getSegmentById(i);o&&(s.z=o.position)}}const H_=new B(0,1,0),V_=new ir().setFromEuler(new Wi(-Math.PI/2,0,0)),eu=new Xe;class W_ extends Je{constructor(){super(...arguments);ue(this,"query",[Lo,pt,Ir])}update(t,n){const r=this.ecs.getComponents(t),i=r.get(Lo),{position:s,quaternion:o}=r.get(pt),{rigidBody:l}=r.get(Ir);i.t+=i.speed*Or.deltaSeconds(),i.t>1&&(i.t=0,i.curve=X_(s,i.arial)),i.curve.getPoint(i.t,s),eu.lookAt(n.gameModel.getHeadPosition(),s,H_),o.setFromRotationMatrix(eu).multiply(V_),l&&(l.setTranslation(s,!1),l.setRotation(o,!1))}}function X_(a,e){const t=[];t.push(a.clone());for(let n=0;n<3;n++)t.push(j_(e));return new b0(t)}function j_(a){const e=2*Math.PI*Math.random(),t=Math.acos(2*Math.random()-1),n=a.radius*Math.cbrt(Math.random()),r=n*Math.sin(t)*Math.cos(e),i=n*Math.sin(t)*Math.sin(e),s=n*Math.cos(t);return new B(r,i,s).add(a.center)}class ts extends Tt{constructor(){const e=ts.SkyShader,t=new qr({name:"SkyShader",fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:Zs.clone(e.uniforms),side:At,depthWrite:!1});super(new Ji(1,1,1),t),this.isSky=!0}}ts.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new B},up:{value:new B(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPos );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function tu(a,e){if(e===Nd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Rs||e===Ql){let t=a.getIndex();if(t===null){const s=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,r=[];if(e===Rs)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=a.clone();return i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class q_ extends _n{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new J_(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new hx(t)})}load(e,t,n,r){const i=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=wo.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),i.manager.itemError(e),i.manager.itemEnd(e)},l=new Ih(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{i.parse(c,s,function(h){t(h),i.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i;const s={},o={},l=new TextDecoder;if(typeof e=="string")i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ru){try{s[Ze.KHR_BINARY_GLTF]=new ux(e)}catch(h){r&&r(h);return}i=JSON.parse(s[Ze.KHR_BINARY_GLTF].content)}else i=JSON.parse(l.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new bx(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);o[u.name]=u,s[u.name]=!0}if(i.extensionsUsed)for(let h=0;h<i.extensionsUsed.length;++h){const u=i.extensionsUsed[h],d=i.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:s[u]=new $_;break;case Ze.KHR_DRACO_MESH_COMPRESSION:s[u]=new dx(i,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:s[u]=new px;break;case Ze.KHR_MESH_QUANTIZATION:s[u]=new fx;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}}function Y_(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class K_{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const i=t[n];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const i=t.json,s=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e];let o;const l=new Ge(16777215);s.color!==void 0&&l.setRGB(...s.color,xt);const c=s.range!==void 0?s.range:0;switch(s.type){case"directional":o=new Bh(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new G0(l),o.distance=c;break;case"spot":o=new k0(l),o.distance=c,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,o.angle=s.spot.outerConeAngle,o.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return o.position.set(0,0,0),o.decay=2,Zr(o,s),s.intensity!==void 0&&(o.intensity=s.intensity),o.name=t.createUniqueName(s.name||"light_"+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(s){return n._getNodeRef(t.cache,i,s)})}}class $_{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Lr}extendParams(e,t,n){const r=[];e.color=new Ge(1,1,1),e.opacity=1;const i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const s=i.baseColorFactor;e.color.setRGB(...s,xt),e.opacity=s[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",i.baseColorTexture,Qe))}return Promise.all(r)}}class Z_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class J_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(o,o)}return Promise.all(i)}}class Q_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(i)}}class ex{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=r.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.setRGB(...s.sheenColorFactor,xt),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Qe)),s.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(i)}}class tx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&i.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(i)}}class rx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&i.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(...o,xt),Promise.all(i)}}class ix{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class nx{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&i.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(...o,xt),s.specularColorTexture!==void 0&&i.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,Qe)),Promise.all(i)}}class ax{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Yr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],s=r.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&i.push(n.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(i)}}class sx{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const i=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,s)}}class ox{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;const s=i.extensions[t],o=r.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lx{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;const s=i.extensions[t],o=r.images[s.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,s.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cx{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],i=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(p){return p.buffer}):s.ready.then(function(){const p=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(p),h,u,d,r.mode,r.filter),p})})}else return null}}class hx{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const l of r.primitives)if(l.mode!==Qt.TRIANGLES&&l.mode!==Qt.TRIANGLE_STRIP&&l.mode!==Qt.TRIANGLE_FAN&&l.mode!==void 0)return null;const i=n.extensions[this.name].attributes,s=[],o={};for(const l in i)s.push(this.parser.getDependency("accessor",i[l]).then(c=>(o[l]=c,o[l])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,d=[];for(const p of h){const v=new Xe,g=new B,m=new ir,f=new B(1,1,1),y=new y0(p.geometry,p.material,u);for(let _=0;_<u;_++)o.TRANSLATION&&g.fromBufferAttribute(o.TRANSLATION,_),o.ROTATION&&m.fromBufferAttribute(o.ROTATION,_),o.SCALE&&f.fromBufferAttribute(o.SCALE,_),y.setMatrixAt(_,v.compose(g,m,f));for(const _ in o)_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&p.geometry.setAttribute(_,o[_]);nt.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),d.push(y)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const ru="glTF",$n=12,iu={JSON:1313821514,BIN:5130562};class ux{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$n),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ru)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-$n,i=new DataView(e,$n);let s=0;for(;s<r;){const o=i.getUint32(s,!0);s+=4;const l=i.getUint32(s,!0);if(s+=4,l===iu.JSON){const c=new Uint8Array(e,$n+s,o);this.content=n.decode(c)}else if(l===iu.BIN){const c=$n+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const h in s){const u=Oo[h]||h.toLowerCase();o[u]=s[h]}for(const h in e.attributes){const u=Oo[h]||h.toLowerCase();if(s[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Mn[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",i).then(function(h){return new Promise(function(u){r.decodeDracoFile(h,function(d){for(const p in d.attributes){const v=d.attributes[p],g=l[p];g!==void 0&&(v.normalized=g)}u(d)},o,c)})})}}class px{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class fx{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class nu extends jn{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let s=0;s!==r;s++)t[s]=n[i+s];return t}interpolate_(e,t,n,r){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=r-t,u=(n-t)/h,d=u*u,p=d*u,v=e*c,g=v-c,m=-2*p+3*d,f=p-d,y=1-m,_=f-d+u;for(let x=0;x!==o;x++){const S=s[g+x+o],b=s[g+x+l]*h,R=s[v+x+o],O=s[v+x]*h;i[x]=y*S+_*b+m*R+f*O}return i}}const mx=new ir;class gx extends nu{interpolate_(e,t,n,r){const i=super.interpolate_(e,t,n,r);return mx.fromArray(i).normalize().toArray(i),i}}const Qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Mn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},au={9728:_t,9729:Rt,9984:ys,9985:_l,9986:fa,9987:ni},su={33071:Yt,33648:pa,10497:Li},No={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Oo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$r={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vx={CUBICSPLINE:void 0,LINEAR:Ii,STEP:Un},Fo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _x(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Mo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gr})),a.DefaultMaterial}function Ti(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zr(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xx(a,e,t){let n=!1,r=!1,i=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(i=!0),n&&r&&i)break}if(!n&&!r&&!i)return Promise.resolve(a);const s=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;s.push(d)}if(r){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(d)}if(i){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(a.morphAttributes.position=h),r&&(a.morphAttributes.normal=u),i&&(a.morphAttributes.color=d),a.morphTargetsRelative=!0,a})}function yx(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Sx(a){let e;const t=a.extensions&&a.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bo(t.attributes):e=a.indices+":"+Bo(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,r=a.targets.length;n<r;n++)e+=":"+Bo(a.targets[n]);return e}function Bo(a){let e="";const t=Object.keys(a).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+a[t[n]]+";";return e}function ko(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Mx(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Tx=new Xe;class bx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Y_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,i=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,i=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&i<98?this.textureLoader=new F0(this.options.manager):this.textureLoader=new X0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ih(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:n,userData:{}};Ti(i,o,r),Zr(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,i=t.length;r<i;r++){const s=t[r].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let r=0,i=e.length;r<i;r++){const s=e[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),i=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,h]of s.children.entries())i(h,o.children[c])};return i(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(i){return i.loadNode&&i.loadNode(t)});break;case"mesh":r=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(i,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(i,s){n.load(wo.resolveURL(t.uri,r.path),i,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,i=t.byteOffset||0;return n.slice(i,i+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const s=No[r.type],o=Mn[r.componentType],l=r.normalized===!0,c=new o(r.count*s);return Promise.resolve(new It(c,s,l))}const i=[];return r.bufferView!==void 0?i.push(this.getDependency("bufferView",r.bufferView)):i.push(null),r.sparse!==void 0&&(i.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(i).then(function(s){const o=s[0],l=No[r.type],c=Mn[r.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,v=r.normalized===!0;let g,m;if(p&&p!==u){const f=Math.floor(d/p),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let _=t.cache.get(y);_||(g=new c(o,f*p,r.count*p/h),_=new oh(g,p/h),t.cache.add(y,_)),m=new zn(_,l,d%p/h,v)}else o===null?g=new c(r.count*l):g=new c(o,d,r.count*l),m=new It(g,l,v);if(r.sparse!==void 0){const f=No.SCALAR,y=Mn[r.sparse.indices.componentType],_=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,S=new y(s[1],_,r.sparse.count*f),b=new c(s[2],x,r.sparse.count*l);o!==null&&(m=new It(m.array.slice(),m.itemSize,m.normalized));for(let R=0,O=S.length;R<O;R++){const M=S[R];if(m.setX(M,b[R*l]),l>=2&&m.setY(M,b[R*l+1]),l>=3&&m.setZ(M,b[R*l+2]),l>=4&&m.setW(M,b[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r];let s=this.textureLoader;if(i.uri){const o=n.manager.getHandler(i.uri);o!==null&&(s=o)}return this.loadTextureImage(e,r,s)}loadTextureImage(e,t,n){const r=this,i=this.json,s=i.textures[e],o=i.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(i.samplers||{})[s.sampler]||{};return h.magFilter=au[u.magFilter]||Rt,h.minFilter=au[u.minFilter]||ni,h.wrapS=su[u.wrapS]||Li,h.wrapT=su[u.wrapT]||Li,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=r.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=n.getDependency("bufferView",s.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:s.mimeType});return l=o.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let v=d;t.isImageBitmapLoader===!0&&(v=function(g){const m=new St(g);m.needsUpdate=!0,d(m)}),t.load(wo.resolveURL(u,i.path),v,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=s.mimeType||Mx(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,r){const i=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(s=s.clone(),s.channel=n.texCoord),i.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=i.associations.get(s);s=i.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),i.associations.set(s,l)}}return r!==void 0&&(s.colorSpace=r),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ah,sr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new po,sr.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||i||s){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),i&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),i&&(l.vertexColors=!0),s&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Mo}loadMaterial(e){const t=this,n=this.json,r=this.extensions,i=n.materials[e];let s;const o={},l=i.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const u=r[Ze.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),c.push(u.extendParams(o,i,t))}else{const u=i.pbrMetallicRoughness||{};if(o.color=new Ge(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],xt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Qe)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=qt);const h=i.alphaMode||Fo.OPAQUE;if(h===Fo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Fo.MASK&&(o.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&s!==Lr&&(c.push(t.assignTexture(o,"normalMap",i.normalTexture)),o.normalScale=new Fe(1,1),i.normalTexture.scale!==void 0)){const u=i.normalTexture.scale;o.normalScale.set(u,u)}return i.occlusionTexture!==void 0&&s!==Lr&&(c.push(t.assignTexture(o,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&s!==Lr&&(o.emissive=new Ge().setRGB(...i.emissiveFactor,xt)),i.emissiveTexture!==void 0&&s!==Lr&&c.push(t.assignTexture(o,"emissiveMap",i.emissiveTexture,Qe)),Promise.all(c).then(function(){const u=new s(o);return i.name&&(u.name=i.name),Zr(u,i),t.associations.set(u,{materials:e}),i.extensions&&Ti(r,u,i),u})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function i(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ou(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Sx(c),u=r[h];if(u)s.push(u.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=i(c):d=ou(new Pt,c,t),r[h]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,r=this.extensions,i=n.meshes[e],s=i.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const h=s[l].material===void 0?_x(this.cache):this.getDependency("material",s[l].material);o.push(h)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,v=h.length;p<v;p++){const g=h[p],m=s[p];let f;const y=c[p];if(m.mode===Qt.TRIANGLES||m.mode===Qt.TRIANGLE_STRIP||m.mode===Qt.TRIANGLE_FAN||m.mode===void 0)f=i.isSkinnedMesh===!0?new g0(g,y):new Tt(g,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Qt.TRIANGLE_STRIP?f.geometry=tu(f.geometry,Ql):m.mode===Qt.TRIANGLE_FAN&&(f.geometry=tu(f.geometry,Rs));else if(m.mode===Qt.LINES)f=new wh(g,y);else if(m.mode===Qt.LINE_STRIP)f=new mo(g,y);else if(m.mode===Qt.LINE_LOOP)f=new S0(g,y);else if(m.mode===Qt.POINTS)f=new M0(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&yx(f,i),f.name=t.createUniqueName(i.name||"mesh_"+e),Zr(f,i),m.extensions&&Ti(r,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,v=u.length;p<v;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return i.extensions&&Ti(r,u[0],i),u[0];const d=new vi;i.extensions&&Ti(r,d,i),t.associations.set(d,{meshes:e});for(let p=0,v=u.length;p<v;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(Is.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new eo(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,i=t.joints.length;r<i;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const i=r.pop(),s=r,o=[],l=[];for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u){o.push(u);const d=new Xe;i!==null&&d.fromArray(i.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ho(o,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],i=r.name?r.name:"animation_"+e,s=[],o=[],l=[],c=[],h=[];for(let u=0,d=r.channels.length;u<d;u++){const p=r.channels[u],v=r.samplers[p.sampler],g=p.target,m=g.node,f=r.parameters!==void 0?r.parameters[v.input]:v.input,y=r.parameters!==void 0?r.parameters[v.output]:v.output;g.node!==void 0&&(s.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",y)),c.push(v),h.push(g))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],v=u[2],g=u[3],m=u[4],f=[];for(let y=0,_=d.length;y<_;y++){const x=d[y],S=p[y],b=v[y],R=g[y],O=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,S,b,R,O);if(M)for(let A=0;A<M.length;A++)f.push(M[A])}return new U0(i,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(i){const s=n._getNodeRef(n.meshCache,r.mesh,i);return r.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),s})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),s=[],o=r.children||[];for(let c=0,h=o.length;c<h;c++)s.push(n.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([i,Promise.all(s),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Tx)});for(let p=0,v=u.length;p<v;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const i=t.nodes[e],s=i.name?r.createUniqueName(i.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),i.camera!==void 0&&o.push(r.getDependency("camera",i.camera).then(function(c){return r._getNodeRef(r.cameraCache,i.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(i.isBone===!0?h=new vh:c.length>1?h=new vi:c.length===1?h=c[0]:h=new nt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(i.name&&(h.userData.name=i.name,h.name=s),Zr(h,i),i.extensions&&Ti(n,h,i),i.matrix!==void 0){const u=new Xe;u.fromArray(i.matrix),h.applyMatrix4(u)}else i.translation!==void 0&&h.position.fromArray(i.translation),i.rotation!==void 0&&h.quaternion.fromArray(i.rotation),i.scale!==void 0&&h.scale.fromArray(i.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,i=new vi;n.name&&(i.name=r.createUniqueName(n.name)),Zr(i,n),n.extensions&&Ti(t,i,n);const s=n.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(r.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)i.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of r.associations)(d instanceof sr||d instanceof St)&&u.set(d,p);return h.traverse(d=>{const p=r.associations.get(d);p!=null&&u.set(d,p)}),u};return r.associations=c(i),i})}_createAnimationTracks(e,t,n,r,i){const s=[],o=e.name?e.name:e.uuid,l=[];$r[i.path]===$r.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch($r[i.path]){case $r.weights:c=fn;break;case $r.rotation:c=_i;break;case $r.position:case $r.scale:c=gn;break;default:switch(n.itemSize){case 1:c=fn;break;case 2:case 3:default:c=gn;break}break}const h=r.interpolation!==void 0?vx[r.interpolation]:Ii,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const v=new c(l[d]+"."+$r[i.path],t.array,u,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),s.push(v)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ko(t.constructor),r=new Float32Array(t.length);for(let i=0,s=t.length;i<s;i++)r[i]=t[i]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const n=this instanceof _i?gx:nu;return new n(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ex(a,e,t){const n=e.attributes,r=new _r;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),o.normalized){const h=ko(Mn[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=e.targets;if(i!==void 0){const o=new B,l=new B;for(let c=0,h=i.length;c<h;c++){const u=i[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,v=d.max;if(p!==void 0&&v!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(v[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(v[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(v[2]))),d.normalized){const g=ko(Mn[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}a.boundingBox=r;const s=new $t;r.getCenter(s.center),s.radius=r.min.distanceTo(r.max)/2,a.boundingSphere=s}function ou(a,e,t){const n=e.attributes,r=[];function i(s,o){return t.getDependency("accessor",s).then(function(l){a.setAttribute(o,l)})}for(const s in n){const o=Oo[s]||s.toLowerCase();o in a.attributes||r.push(i(n[s],o))}if(e.indices!==void 0&&!a.index){const s=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});r.push(s)}return Ht.workingColorSpace!==xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ht.workingColorSpace}" not supported.`),Zr(a,e),Ex(a,e,t),Promise.all(r).then(function(){return e.targets!==void 0?xx(a,e.targets,t):a})}const wx="/assets/models-8f04ab13.glb";async function Ax(){const a=await Nx(wx),e=Ux(a),t=Px(a),n=Lx(a),r=Rx(a);return{gun:e,road:t,barrier:n,helicopter:r}}function Rx(a){var s;const e=lu(a.scene,"helicopter").children[0],t=zo(e),n=lu(e,"helicopter_body"),r=n.geometry.attributes.position.array,i=new Uint32Array((s=n.geometry.getIndex())==null?void 0:s.array);return{model:t,trimesh:{vertices:r,indices:i}}}function Cx(a){const e={};return a.traverse(t=>{t.name==="MainRotor_2"&&(e.mainRotor=t),t.name==="TailRotor_1"&&(e.tailRotor=t)}),e}function Ux(a){const e=rs(a.scene,"gun");e.scale.y*=-1,e.scale.multiplyScalar(.5),e.rotation.x=Math.PI*-1.25,e.updateMatrixWorld();const t=rs(e,"bullet_spawn");t.visible=!1;const n=t.matrixWorld.clone();return{model:zo(e),bulletSpawnTransform:n}}function Px(a){const e=rs(a.scene,"road");return e.position.set(0,0,0),e.rotation.z=Math.PI/2,{model:zo(e)}}function Lx(a){const e=rs(a.scene,"barrier");e.position.y=-jh;const t=Dx(e),n=Ix(t);return{model:t,trimesh:n}}function Dx(a){a.updateMatrixWorld();const e=[];a.traverse(n=>{n instanceof Tt&&n.geometry instanceof Pt&&n.visible&&(n.geometry.applyMatrix4(a.matrixWorld),n.position.set(0,0,0),n.quaternion.identity(),n.scale.set(1,1,1),e.push(n))});const t=new nt;for(const n of e)t.add(n);return t}function Ix(a){var r;const e=a.children[0],t=e.geometry.attributes.position.array,n=new Uint32Array(((r=e.geometry.index)==null?void 0:r.array)||[]);return{vertices:t,indices:n}}function zo(a){const e=new nt;return e.add(a),e}function rs(a,e){let t;if(a.traverse(n=>{t===void 0&&n.userData.type===e&&(t=n)}),t===void 0)throw new Error(`object ${e} is not found in assets`);return t}function lu(a,e){let t;if(a.traverse(n=>{t===void 0&&n.name===e&&(t=n)}),t===void 0)throw new Error(`object ${e} is not found in assets`);return t}async function Nx(a){return await new Promise(e=>new q_().load(a,e))}class Go extends ct{constructor(){super(...arguments);ue(this,"mainRotor");ue(this,"tailRotor")}}class bi extends ct{constructor(){super(...arguments);ue(this,"healthBar",new f0)}}class lr extends ct{constructor(){super(...arguments);ue(this,"view",new nt)}}function Ox(){var a=Object.create(null);function e(r,i){var s=r.id,o=r.name,l=r.dependencies;l===void 0&&(l=[]);var c=r.init;c===void 0&&(c=function(){});var h=r.getTransferables;if(h===void 0&&(h=null),!a[s])try{l=l.map(function(d){return d&&d.isWorkerModule&&(e(d,function(p){if(p instanceof Error)throw p}),d=a[d.id].value),d}),c=n("<"+o+">.init",c),h&&(h=n("<"+o+">.getTransferables",h));var u=null;typeof c=="function"?u=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:u,getTransferables:h},i(u)}catch(d){d&&d.noLog||console.error(d),i(d)}}function t(r,i){var s,o=r.id,l=r.args;(!a[o]||typeof a[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(h,function(u){return i(u instanceof Error?u:new Error(""+u))}):h(c)}catch(u){i(u)}function h(u){try{var d=a[o].getTransferables&&a[o].getTransferables(u);(!d||!Array.isArray(d)||!d.length)&&(d=void 0),i(u,d)}catch(p){console.error(p),i(p)}}}function n(r,i){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+r.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(r){var i=r.data,s=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,h){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},h||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function Fx(a){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(r){if(typeof r=="function")return r.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,n=a.init;t=Array.isArray(t)?t.map(function(i){return i&&i._getInitResult?i._getInitResult():i}):[];var r=Promise.all(t).then(function(i){return n.apply(null,i)});return e._getInitResult=function(){return r},r},e}var cu=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return cu=function(){return a},a},Bx=0,kx=0,Ho=!1,Zn=Object.create(null),Jn=Object.create(null),Vo=Object.create(null);function Tn(a){if((!a||typeof a.init!="function")&&!Ho)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,n=a.getTransferables,r=a.workerId;if(!cu())return Fx(a);r==null&&(r="#default");var i="workerModule"+ ++Bx,s=a.name||i,o=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Ho=!0,c=Tn({workerId:r,name:"<"+s+"> function dependency: "+c.name,init:`function(){return (
`+is(c)+`
)}`}),Ho=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(!o){o=hu(r,"registerModule",l.workerModuleData);var u=function(){o=null,Jn[r].delete(u)};(Jn[r]||(Jn[r]=new Set)).add(u)}return o.then(function(d){var p=d.isCallable;if(p)return hu(r,"callModule",{id:i,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:i,name:s,dependencies:e,init:is(t),getTransferables:n&&is(n)},l}function zx(a){Jn[a]&&Jn[a].forEach(function(e){e()}),Zn[a]&&(Zn[a].terminate(),delete Zn[a])}function is(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Gx(a){var e=Zn[a];if(!e){var t=is(Ox);e=Zn[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var r=n.data,i=r.messageId,s=Vo[i];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete Vo[i],s(r)}}return e}function hu(a,e,t){return new Promise(function(n,r){var i=++kx;Vo[i]=function(s){s.success?n(s.result):r(new Error("Error in worker "+e+" call: "+s.error))},Gx(a).postMessage({messageId:i,action:e,data:t})})}function uu(){var a=function(e){function t(G,k,w,D,q,Y,$,ae){var Q=1-$;ae.x=Q*Q*G+2*Q*$*w+$*$*q,ae.y=Q*Q*k+2*Q*$*D+$*$*Y}function n(G,k,w,D,q,Y,$,ae,Q,te){var pe=1-Q;te.x=pe*pe*pe*G+3*pe*pe*Q*w+3*pe*Q*Q*q+Q*Q*Q*$,te.y=pe*pe*pe*k+3*pe*pe*Q*D+3*pe*Q*Q*Y+Q*Q*Q*ae}function r(G,k){for(var w=/([MLQCZ])([^MLQCZ]*)/g,D,q,Y,$,ae;D=w.exec(G);){var Q=D[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(te){return parseFloat(te)});switch(D[1]){case"M":$=q=Q[0],ae=Y=Q[1];break;case"L":(Q[0]!==$||Q[1]!==ae)&&k("L",$,ae,$=Q[0],ae=Q[1]);break;case"Q":{k("Q",$,ae,$=Q[2],ae=Q[3],Q[0],Q[1]);break}case"C":{k("C",$,ae,$=Q[4],ae=Q[5],Q[0],Q[1],Q[2],Q[3]);break}case"Z":($!==q||ae!==Y)&&k("L",$,ae,q,Y);break}}}function i(G,k,w){w===void 0&&(w=16);var D={x:0,y:0};r(G,function(q,Y,$,ae,Q,te,pe,Ue,ce){switch(q){case"L":k(Y,$,ae,Q);break;case"Q":{for(var P=Y,Ne=$,be=1;be<w;be++)t(Y,$,te,pe,ae,Q,be/(w-1),D),k(P,Ne,D.x,D.y),P=D.x,Ne=D.y;break}case"C":{for(var Me=Y,we=$,Oe=1;Oe<w;Oe++)n(Y,$,te,pe,Ue,ce,ae,Q,Oe/(w-1),D),k(Me,we,D.x,D.y),Me=D.x,we=D.y;break}}})}var s="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function h(G,k){var w=G.getContext?G.getContext("webgl",c):G,D=l.get(w);if(!D){let Me=function(se){var Pe=Ue[se];if(!Pe&&(Pe=Ue[se]=w.getExtension(se),!Pe))throw new Error(se+" not supported");return Pe},we=function(se,Pe){var E=w.createShader(Pe);return w.shaderSource(E,se),w.compileShader(E),E},Oe=function(se,Pe,E,T){if(!ce[se]){var I={},oe={},re=w.createProgram();w.attachShader(re,we(Pe,w.VERTEX_SHADER)),w.attachShader(re,we(E,w.FRAGMENT_SHADER)),w.linkProgram(re),ce[se]={program:re,transaction:function(ee){w.useProgram(re),ee({setUniform:function(me,he){for(var W=[],Ae=arguments.length-2;Ae-- >0;)W[Ae]=arguments[Ae+2];var Te=oe[he]||(oe[he]=w.getUniformLocation(re,he));w["uniform"+me].apply(w,[Te].concat(W))},setAttribute:function(me,he,W,Ae,Te){var _e=I[me];_e||(_e=I[me]={buf:w.createBuffer(),loc:w.getAttribLocation(re,me),data:null}),w.bindBuffer(w.ARRAY_BUFFER,_e.buf),w.vertexAttribPointer(_e.loc,he,w.FLOAT,!1,0,0),w.enableVertexAttribArray(_e.loc),pe?w.vertexAttribDivisor(_e.loc,Ae):Me("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(_e.loc,Ae),Te!==_e.data&&(w.bufferData(w.ARRAY_BUFFER,Te,W),_e.data=Te)}})}}}ce[se].transaction(T)},le=function(se,Pe){Ne++;try{w.activeTexture(w.TEXTURE0+Ne);var E=P[se];E||(E=P[se]=w.createTexture(),w.bindTexture(w.TEXTURE_2D,E),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MIN_FILTER,w.NEAREST),w.texParameteri(w.TEXTURE_2D,w.TEXTURE_MAG_FILTER,w.NEAREST)),w.bindTexture(w.TEXTURE_2D,E),Pe(E,Ne)}finally{Ne--}},fe=function(se,Pe,E){var T=w.createFramebuffer();be.push(T),w.bindFramebuffer(w.FRAMEBUFFER,T),w.activeTexture(w.TEXTURE0+Pe),w.bindTexture(w.TEXTURE_2D,se),w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,se,0);try{E(T)}finally{w.deleteFramebuffer(T),w.bindFramebuffer(w.FRAMEBUFFER,be[--be.length-1]||null)}},xe=function(){Ue={},ce={},P={},Ne=-1,be.length=0};var q=Me,Y=we,$=Oe,ae=le,Q=fe,te=xe,pe=typeof WebGL2RenderingContext<"u"&&w instanceof WebGL2RenderingContext,Ue={},ce={},P={},Ne=-1,be=[];w.canvas.addEventListener("webglcontextlost",function(se){xe(),se.preventDefault()},!1),l.set(w,D={gl:w,isWebGL2:pe,getExtension:Me,withProgram:Oe,withTexture:le,withTextureFramebuffer:fe,handleContextLoss:xe})}k(D)}function u(G,k,w,D,q,Y,$,ae){$===void 0&&($=15),ae===void 0&&(ae=null),h(G,function(Q){var te=Q.gl,pe=Q.withProgram,Ue=Q.withTexture;Ue("copy",function(ce,P){te.texImage2D(te.TEXTURE_2D,0,te.RGBA,q,Y,0,te.RGBA,te.UNSIGNED_BYTE,k),pe("copy",s,o,function(Ne){var be=Ne.setUniform,Me=Ne.setAttribute;Me("aUV",2,te.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),be("1i","image",P),te.bindFramebuffer(te.FRAMEBUFFER,ae||null),te.disable(te.BLEND),te.colorMask($&8,$&4,$&2,$&1),te.viewport(w,D,q,Y),te.scissor(w,D,q,Y),te.drawArrays(te.TRIANGLES,0,3)})})})}function d(G,k,w){var D=G.width,q=G.height;h(G,function(Y){var $=Y.gl,ae=new Uint8Array(D*q*4);$.readPixels(0,0,D,q,$.RGBA,$.UNSIGNED_BYTE,ae),G.width=k,G.height=w,u($,ae,0,0,D,q)})}var p=Object.freeze({__proto__:null,withWebGLContext:h,renderImageData:u,resizeWebGLCanvasWithoutClearing:d});function v(G,k,w,D,q,Y){Y===void 0&&(Y=1);var $=new Uint8Array(G*k),ae=D[2]-D[0],Q=D[3]-D[1],te=[];i(w,function(Me,we,Oe,le){te.push({x1:Me,y1:we,x2:Oe,y2:le,minX:Math.min(Me,Oe),minY:Math.min(we,le),maxX:Math.max(Me,Oe),maxY:Math.max(we,le)})}),te.sort(function(Me,we){return Me.maxX-we.maxX});for(var pe=0;pe<G;pe++)for(var Ue=0;Ue<k;Ue++){var ce=Ne(D[0]+ae*(pe+.5)/G,D[1]+Q*(Ue+.5)/k),P=Math.pow(1-Math.abs(ce)/q,Y)/2;ce<0&&(P=1-P),P=Math.max(0,Math.min(255,Math.round(P*255))),$[Ue*G+pe]=P}return $;function Ne(Me,we){for(var Oe=1/0,le=1/0,fe=te.length;fe--;){var xe=te[fe];if(xe.maxX+le<=Me)break;if(Me+le>xe.minX&&we-le<xe.maxY&&we+le>xe.minY){var se=f(Me,we,xe.x1,xe.y1,xe.x2,xe.y2);se<Oe&&(Oe=se,le=Math.sqrt(Oe))}}return be(Me,we)&&(le=-le),le}function be(Me,we){for(var Oe=0,le=te.length;le--;){var fe=te[le];if(fe.maxX<=Me)break;var xe=fe.y1>we!=fe.y2>we&&Me<(fe.x2-fe.x1)*(we-fe.y1)/(fe.y2-fe.y1)+fe.x1;xe&&(Oe+=fe.y1<fe.y2?1:-1)}return Oe!==0}}function g(G,k,w,D,q,Y,$,ae,Q,te){Y===void 0&&(Y=1),ae===void 0&&(ae=0),Q===void 0&&(Q=0),te===void 0&&(te=0),m(G,k,w,D,q,Y,$,null,ae,Q,te)}function m(G,k,w,D,q,Y,$,ae,Q,te,pe){Y===void 0&&(Y=1),Q===void 0&&(Q=0),te===void 0&&(te=0),pe===void 0&&(pe=0);for(var Ue=v(G,k,w,D,q,Y),ce=new Uint8Array(Ue.length*4),P=0;P<Ue.length;P++)ce[P*4+pe]=Ue[P];u($,ce,Q,te,G,k,1<<3-pe,ae)}function f(G,k,w,D,q,Y){var $=q-w,ae=Y-D,Q=$*$+ae*ae,te=Q?Math.max(0,Math.min(1,((G-w)*$+(k-D)*ae)/Q)):0,pe=G-(w+te*$),Ue=k-(D+te*ae);return pe*pe+Ue*Ue}var y=Object.freeze({__proto__:null,generate:v,generateIntoCanvas:g,generateIntoFramebuffer:m}),_="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",S="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",b=new Float32Array([0,0,2,0,0,2]),R=null,O=!1,M={},A=new WeakMap;function K(G){if(!O&&!z(G))throw new Error("WebGL generation not supported")}function F(G,k,w,D,q,Y,$){if(Y===void 0&&(Y=1),$===void 0&&($=null),!$&&($=R,!$)){var ae=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!ae)throw new Error("OffscreenCanvas or DOM canvas not supported");$=R=ae.getContext("webgl",{depth:!1})}K($);var Q=new Uint8Array(G*k*4);h($,function(ce){var P=ce.gl,Ne=ce.withTexture,be=ce.withTextureFramebuffer;Ne("readable",function(Me,we){P.texImage2D(P.TEXTURE_2D,0,P.RGBA,G,k,0,P.RGBA,P.UNSIGNED_BYTE,null),be(Me,we,function(Oe){N(G,k,w,D,q,Y,P,Oe,0,0,0),P.readPixels(0,0,G,k,P.RGBA,P.UNSIGNED_BYTE,Q)})})});for(var te=new Uint8Array(G*k),pe=0,Ue=0;pe<Q.length;pe+=4)te[Ue++]=Q[pe];return te}function U(G,k,w,D,q,Y,$,ae,Q,te){Y===void 0&&(Y=1),ae===void 0&&(ae=0),Q===void 0&&(Q=0),te===void 0&&(te=0),N(G,k,w,D,q,Y,$,null,ae,Q,te)}function N(G,k,w,D,q,Y,$,ae,Q,te,pe){Y===void 0&&(Y=1),Q===void 0&&(Q=0),te===void 0&&(te=0),pe===void 0&&(pe=0),K($);var Ue=[];i(w,function(ce,P,Ne,be){Ue.push(ce,P,Ne,be)}),Ue=new Float32Array(Ue),h($,function(ce){var P=ce.gl,Ne=ce.isWebGL2,be=ce.getExtension,Me=ce.withProgram,we=ce.withTexture,Oe=ce.withTextureFramebuffer,le=ce.handleContextLoss;if(we("rawDistances",function(fe,xe){(G!==fe._lastWidth||k!==fe._lastHeight)&&P.texImage2D(P.TEXTURE_2D,0,P.RGBA,fe._lastWidth=G,fe._lastHeight=k,0,P.RGBA,P.UNSIGNED_BYTE,null),Me("main",_,x,function(se){var Pe=se.setAttribute,E=se.setUniform,T=!Ne&&be("ANGLE_instanced_arrays"),I=!Ne&&be("EXT_blend_minmax");Pe("aUV",2,P.STATIC_DRAW,0,b),Pe("aLineSegment",4,P.DYNAMIC_DRAW,1,Ue),E.apply(void 0,["4f","uGlyphBounds"].concat(D)),E("1f","uMaxDistance",q),E("1f","uExponent",Y),Oe(fe,xe,function(oe){P.enable(P.BLEND),P.colorMask(!0,!0,!0,!0),P.viewport(0,0,G,k),P.scissor(0,0,G,k),P.blendFunc(P.ONE,P.ONE),P.blendEquationSeparate(P.FUNC_ADD,Ne?P.MAX:I.MAX_EXT),P.clear(P.COLOR_BUFFER_BIT),Ne?P.drawArraysInstanced(P.TRIANGLES,0,3,Ue.length/4):T.drawArraysInstancedANGLE(P.TRIANGLES,0,3,Ue.length/4)})}),Me("post",s,S,function(se){se.setAttribute("aUV",2,P.STATIC_DRAW,0,b),se.setUniform("1i","tex",xe),P.bindFramebuffer(P.FRAMEBUFFER,ae),P.disable(P.BLEND),P.colorMask(pe===0,pe===1,pe===2,pe===3),P.viewport(Q,te,G,k),P.scissor(Q,te,G,k),P.drawArrays(P.TRIANGLES,0,3)})}),P.isContextLost())throw le(),new Error("webgl context lost")})}function z(G){var k=!G||G===R?M:G.canvas||G,w=A.get(k);if(w===void 0){O=!0;var D=null;try{var q=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],Y=F(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,G);w=Y&&q.length===Y.length&&Y.every(function($,ae){return $===q[ae]}),w||(D="bad trial run results",console.info(q,Y))}catch($){w=!1,D=$.message}D&&console.warn("WebGL SDF generation not supported:",D),O=!1,A.set(k,w)}return w}var H=Object.freeze({__proto__:null,generate:F,generateIntoCanvas:U,generateIntoFramebuffer:N,isSupported:z});function X(G,k,w,D,q,Y){q===void 0&&(q=Math.max(D[2]-D[0],D[3]-D[1])/2),Y===void 0&&(Y=1);try{return F.apply(H,arguments)}catch($){return console.info("WebGL SDF generation failed, falling back to JS",$),v.apply(y,arguments)}}function V(G,k,w,D,q,Y,$,ae,Q,te){q===void 0&&(q=Math.max(D[2]-D[0],D[3]-D[1])/2),Y===void 0&&(Y=1),ae===void 0&&(ae=0),Q===void 0&&(Q=0),te===void 0&&(te=0);try{return U.apply(H,arguments)}catch(pe){return console.info("WebGL SDF generation failed, falling back to JS",pe),g.apply(y,arguments)}}return e.forEachPathCommand=r,e.generate=X,e.generateIntoCanvas=V,e.javascript=y,e.pathToLineSegments=i,e.webgl=H,e.webglUtils=p,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function Hx(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},r={};n.L=1,r[1]="L",Object.keys(t).forEach(function(le,fe){n[le]=1<<fe+1,r[n[le]]=le}),Object.freeze(n);var i=n.LRI|n.RLI|n.FSI,s=n.L|n.R|n.AL,o=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|i|n.PDI|l,h=null;function u(){if(!h){h=new Map;var le=function(xe){if(t.hasOwnProperty(xe)){var se=0;t[xe].split(",").forEach(function(Pe){var E=Pe.split("+"),T=E[0],I=E[1];T=parseInt(T,36),I=I?parseInt(I,36):0,h.set(se+=T,n[xe]);for(var oe=0;oe<I;oe++)h.set(++se,n[xe])})}};for(var fe in t)le(fe)}}function d(le){return u(),h.get(le.codePointAt(0))||n.L}function p(le){return r[d(le)]}var v={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function g(le,fe){var xe=36,se=0,Pe=new Map,E=fe&&new Map,T;return le.split(",").forEach(function I(oe){if(oe.indexOf("+")!==-1)for(var re=+oe;re--;)I(T);else{T=oe;var ee=oe.split(">"),me=ee[0],he=ee[1];me=String.fromCodePoint(se+=parseInt(me,xe)),he=String.fromCodePoint(se+=parseInt(he,xe)),Pe.set(me,he),fe&&E.set(he,me)}}),{map:Pe,reverseMap:E}}var m,f,y;function _(){if(!m){var le=g(v.pairs,!0),fe=le.map,xe=le.reverseMap;m=fe,f=xe,y=g(v.canonical,!1).map}}function x(le){return _(),m.get(le)||null}function S(le){return _(),f.get(le)||null}function b(le){return _(),y.get(le)||null}var R=n.L,O=n.R,M=n.EN,A=n.ES,K=n.ET,F=n.AN,U=n.CS,N=n.B,z=n.S,H=n.ON,X=n.BN,V=n.NSM,G=n.AL,k=n.LRO,w=n.RLO,D=n.LRE,q=n.RLE,Y=n.PDF,$=n.LRI,ae=n.RLI,Q=n.FSI,te=n.PDI;function pe(le,fe){for(var xe=125,se=new Uint32Array(le.length),Pe=0;Pe<le.length;Pe++)se[Pe]=d(le[Pe]);var E=new Map;function T(zt,mr){var Gt=se[zt];se[zt]=mr,E.set(Gt,E.get(Gt)-1),Gt&o&&E.set(o,E.get(o)-1),E.set(mr,(E.get(mr)||0)+1),mr&o&&E.set(o,(E.get(o)||0)+1)}for(var I=new Uint8Array(le.length),oe=new Map,re=[],ee=null,me=0;me<le.length;me++)ee||re.push(ee={start:me,end:le.length-1,level:fe==="rtl"?1:fe==="ltr"?0:qu(me,!1)}),se[me]&N&&(ee.end=me,ee=null);for(var he=q|D|w|k|i|te|Y|N,W=function(zt){return zt+(zt&1?1:2)},Ae=function(zt){return zt+(zt&1?2:1)},Te=0;Te<re.length;Te++){ee=re[Te];var _e=[{_level:ee.level,_override:0,_isolate:0}],ge=void 0,Ee=0,Le=0,De=0;E.clear();for(var L=ee.start;L<=ee.end;L++){var ve=se[L];if(ge=_e[_e.length-1],E.set(ve,(E.get(ve)||0)+1),ve&o&&E.set(o,(E.get(o)||0)+1),ve&he)if(ve&(q|D)){I[L]=ge._level;var j=(ve===q?Ae:W)(ge._level);j<=xe&&!Ee&&!Le?_e.push({_level:j,_override:0,_isolate:0}):Ee||Le++}else if(ve&(w|k)){I[L]=ge._level;var de=(ve===w?Ae:W)(ge._level);de<=xe&&!Ee&&!Le?_e.push({_level:de,_override:ve&w?O:R,_isolate:0}):Ee||Le++}else if(ve&i){ve&Q&&(ve=qu(L+1,!0)===1?ae:$),I[L]=ge._level,ge._override&&T(L,ge._override);var Se=(ve===ae?Ae:W)(ge._level);Se<=xe&&Ee===0&&Le===0?(De++,_e.push({_level:Se,_override:0,_isolate:1,_isolInitIndex:L})):Ee++}else if(ve&te){if(Ee>0)Ee--;else if(De>0){for(Le=0;!_e[_e.length-1]._isolate;)_e.pop();var He=_e[_e.length-1]._isolInitIndex;He!=null&&(oe.set(He,L),oe.set(L,He)),_e.pop(),De--}ge=_e[_e.length-1],I[L]=ge._level,ge._override&&T(L,ge._override)}else ve&Y?(Ee===0&&(Le>0?Le--:!ge._isolate&&_e.length>1&&(_e.pop(),ge=_e[_e.length-1])),I[L]=ge._level):ve&N&&(I[L]=ee.level);else I[L]=ge._level,ge._override&&ve!==X&&T(L,ge._override)}for(var Ie=[],Be=null,rt=ee.start;rt<=ee.end;rt++){var Ye=se[rt];if(!(Ye&l)){var at=I[rt],ot=Ye&i,Jr=Ye===te;Be&&at===Be._level?(Be._end=rt,Be._endsWithIsolInit=ot):Ie.push(Be={_start:rt,_end:rt,_level:at,_startsWithPDI:Jr,_endsWithIsolInit:ot})}}for(var cr=[],hr=0;hr<Ie.length;hr++){var kt=Ie[hr];if(!kt._startsWithPDI||kt._startsWithPDI&&!oe.has(kt._start)){for(var ur=[Be=kt],Dt=void 0;Be&&Be._endsWithIsolInit&&(Dt=oe.get(Be._end))!=null;)for(var dr=hr+1;dr<Ie.length;dr++)if(Ie[dr]._start===Dt){ur.push(Be=Ie[dr]);break}for(var Qr=[],ta=0;ta<ur.length;ta++)for(var ls=ur[ta],C=ls._start;C<=ls._end;C++)Qr.push(C);for(var Z=I[Qr[0]],ne=ee.level,J=Qr[0]-1;J>=0;J--)if(!(se[J]&l)){ne=I[J];break}var ie=Qr[Qr.length-1],Ce=I[ie],ke=ee.level;if(!(se[ie]&i)){for(var ze=ie+1;ze<=ee.end;ze++)if(!(se[ze]&l)){ke=I[ze];break}}cr.push({_seqIndices:Qr,_sosType:Math.max(ne,Z)%2?O:R,_eosType:Math.max(ke,Ce)%2?O:R})}}for(var Ve=0;Ve<cr.length;Ve++){var Ke=cr[Ve],ye=Ke._seqIndices,We=Ke._sosType,ft=Ke._eosType,st=I[ye[0]]&1?O:R;if(E.get(V))for(var Et=0;Et<ye.length;Et++){var er=ye[Et];if(se[er]&V){for(var lt=We,qe=Et-1;qe>=0;qe--)if(!(se[ye[qe]]&l)){lt=se[ye[qe]];break}T(er,lt&(i|te)?H:lt)}}if(E.get(M))for(var ei=0;ei<ye.length;ei++){var En=ye[ei];if(se[En]&M)for(var tr=ei-1;tr>=-1;tr--){var ra=tr===-1?We:se[ye[tr]];if(ra&s){ra===G&&T(En,F);break}}}if(E.get(G))for(var Fr=0;Fr<ye.length;Fr++){var wn=ye[Fr];se[wn]&G&&T(wn,O)}if(E.get(A)||E.get(U))for(var ut=1;ut<ye.length-1;ut++){var pr=ye[ut];if(se[pr]&(A|U)){for(var Sr=0,wt=0,Ai=ut-1;Ai>=0&&(Sr=se[ye[Ai]],!!(Sr&l));Ai--);for(var ia=ut+1;ia<ye.length&&(wt=se[ye[ia]],!!(wt&l));ia++);Sr===wt&&(se[pr]===A?Sr===M:Sr&(M|F))&&T(pr,Sr)}}if(E.get(M))for(var Xt=0;Xt<ye.length;Xt++){var i1=ye[Xt];if(se[i1]&M){for(var cs=Xt-1;cs>=0&&se[ye[cs]]&(K|l);cs--)T(ye[cs],M);for(Xt++;Xt<ye.length&&se[ye[Xt]]&(K|l|M);Xt++)se[ye[Xt]]!==M&&T(ye[Xt],M)}}if(E.get(K)||E.get(A)||E.get(U))for(var na=0;na<ye.length;na++){var Iu=ye[na];if(se[Iu]&(K|A|U)){T(Iu,H);for(var hs=na-1;hs>=0&&se[ye[hs]]&l;hs--)T(ye[hs],H);for(var us=na+1;us<ye.length&&se[ye[us]]&l;us++)T(ye[us],H)}}if(E.get(M))for(var Zo=0,Nu=We;Zo<ye.length;Zo++){var Ou=ye[Zo],Jo=se[Ou];Jo&M?Nu===R&&T(Ou,R):Jo&s&&(Nu=Jo)}if(E.get(o)){var aa=O|M|F,Fu=aa|R,ds=[];{for(var An=[],Rn=0;Rn<ye.length;Rn++)if(se[ye[Rn]]&o){var sa=le[ye[Rn]],Bu=void 0;if(x(sa)!==null)if(An.length<63)An.push({char:sa,seqIndex:Rn});else break;else if((Bu=S(sa))!==null)for(var oa=An.length-1;oa>=0;oa--){var Qo=An[oa].char;if(Qo===Bu||Qo===S(b(sa))||x(b(Qo))===sa){ds.push([An[oa].seqIndex,Rn]),An.length=oa;break}}}ds.sort(function(zt,mr){return zt[0]-mr[0]})}for(var el=0;el<ds.length;el++){for(var ku=ds[el],ps=ku[0],tl=ku[1],zu=!1,fr=0,rl=ps+1;rl<tl;rl++){var Gu=ye[rl];if(se[Gu]&Fu){zu=!0;var Hu=se[Gu]&aa?O:R;if(Hu===st){fr=Hu;break}}}if(zu&&!fr){fr=We;for(var il=ps-1;il>=0;il--){var Vu=ye[il];if(se[Vu]&Fu){var Wu=se[Vu]&aa?O:R;Wu!==st?fr=Wu:fr=st;break}}}if(fr){if(se[ye[ps]]=se[ye[tl]]=fr,fr!==st){for(var la=ps+1;la<ye.length;la++)if(!(se[ye[la]]&l)){d(le[ye[la]])&V&&(se[ye[la]]=fr);break}}if(fr!==st){for(var ca=tl+1;ca<ye.length;ca++)if(!(se[ye[ca]]&l)){d(le[ye[ca]])&V&&(se[ye[ca]]=fr);break}}}}for(var ti=0;ti<ye.length;ti++)if(se[ye[ti]]&o){for(var Xu=ti,nl=ti,al=We,ha=ti-1;ha>=0;ha--)if(se[ye[ha]]&l)Xu=ha;else{al=se[ye[ha]]&aa?O:R;break}for(var ju=ft,ua=ti+1;ua<ye.length;ua++)if(se[ye[ua]]&(o|l))nl=ua;else{ju=se[ye[ua]]&aa?O:R;break}for(var sl=Xu;sl<=nl;sl++)se[ye[sl]]=al===ju?al:st;ti=nl}}}for(var jt=ee.start;jt<=ee.end;jt++){var n1=I[jt],fs=se[jt];if(n1&1?fs&(R|M|F)&&I[jt]++:fs&O?I[jt]++:fs&(F|M)&&(I[jt]+=2),fs&l&&(I[jt]=jt===0?ee.level:I[jt-1]),jt===ee.end||d(le[jt])&(z|N))for(var ms=jt;ms>=0&&d(le[ms])&c;ms--)I[ms]=ee.level}}return{levels:I,paragraphs:re};function qu(zt,mr){for(var Gt=zt;Gt<le.length;Gt++){var ri=se[Gt];if(ri&(O|G))return 1;if(ri&(N|R)||mr&&ri===te)return 0;if(ri&i){var Yu=a1(Gt);Gt=Yu===-1?le.length:Yu}}return 0}function a1(zt){for(var mr=1,Gt=zt+1;Gt<le.length;Gt++){var ri=se[Gt];if(ri&N)break;if(ri&te){if(--mr===0)return Gt}else ri&i&&mr++}return-1}}var Ue="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ce;function P(){if(!ce){var le=g(Ue,!0),fe=le.map,xe=le.reverseMap;xe.forEach(function(se,Pe){fe.set(Pe,se)}),ce=fe}}function Ne(le){return P(),ce.get(le)||null}function be(le,fe,xe,se){var Pe=le.length;xe=Math.max(0,xe==null?0:+xe),se=Math.min(Pe-1,se==null?Pe-1:+se);for(var E=new Map,T=xe;T<=se;T++)if(fe[T]&1){var I=Ne(le[T]);I!==null&&E.set(T,I)}return E}function Me(le,fe,xe,se){var Pe=le.length;xe=Math.max(0,xe==null?0:+xe),se=Math.min(Pe-1,se==null?Pe-1:+se);var E=[];return fe.paragraphs.forEach(function(T){var I=Math.max(xe,T.start),oe=Math.min(se,T.end);if(I<oe){for(var re=fe.levels.slice(I,oe+1),ee=oe;ee>=I&&d(le[ee])&c;ee--)re[ee]=T.level;for(var me=T.level,he=1/0,W=0;W<re.length;W++){var Ae=re[W];Ae>me&&(me=Ae),Ae<he&&(he=Ae|1)}for(var Te=me;Te>=he;Te--)for(var _e=0;_e<re.length;_e++)if(re[_e]>=Te){for(var ge=_e;_e+1<re.length&&re[_e+1]>=Te;)_e++;_e>ge&&E.push([ge+I,_e+I])}}}),E}function we(le,fe,xe,se){var Pe=Oe(le,fe,xe,se),E=[].concat(le);return Pe.forEach(function(T,I){E[I]=(fe.levels[T]&1?Ne(le[T]):null)||le[T]}),E.join("")}function Oe(le,fe,xe,se){for(var Pe=Me(le,fe,xe,se),E=[],T=0;T<le.length;T++)E[T]=T;return Pe.forEach(function(I){for(var oe=I[0],re=I[1],ee=E.slice(oe,re+1),me=ee.length;me--;)E[re-me]=ee[me]}),E}return e.closingToOpeningBracket=S,e.getBidiCharType=d,e.getBidiCharTypeName=p,e.getCanonicalBracket=b,e.getEmbeddingLevels=pe,e.getMirroredCharacter=Ne,e.getMirroredCharactersMap=be,e.getReorderSegments=Me,e.getReorderedIndices=Oe,e.getReorderedString=we,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const du=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Wo(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,r){let i=je[r];return i?Wo(i):n}return a.replace(e,t)}const bt=[];for(let a=0;a<256;a++)bt[a]=(a<16?"0":"")+a.toString(16);function Vx(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[a&255]+bt[a>>8&255]+bt[a>>16&255]+bt[a>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toUpperCase()}const Ei=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let r in n)Object.prototype.hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a},Wx=Date.now(),pu=new WeakMap,fu=new Map;let Xx=1e10;function Xo(a,e){const t=Kx(e);let n=pu.get(a);if(n||pu.set(a,n=Object.create(null)),n[t])return new n[t];const r=`_onBeforeCompile${t}`,i=function(c,h){a.onBeforeCompile.call(this,c,h);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let d=fu[u];if(!d){const p=jx(this,c,e,t);d=fu[u]=p}c.vertexShader=d.vertexShader,c.fragmentShader=d.fragmentShader,Ei(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Wx}}),this[r]&&this[r](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const h=Object.create(c,l);return Object.defineProperty(h,"baseMaterial",{value:a}),Object.defineProperty(h,"id",{value:Xx++}),h.uuid=Vx(),h.uniforms=Ei({},c.uniforms,e.uniforms),h.defines=Ei({},c.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=Ei({},c.extensions,e.extensions),h._listeners=void 0,h},l={constructor:{value:s},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[r]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(Ei(this.extensions,c.extensions),Ei(this.defines,c.defines),Ei(this.uniforms,Zs.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Xo(a.isDerivedMaterial?a.getDepthMaterial():new nh({depthPacking:tc}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Xo(a.isDerivedMaterial?a.getDistanceMaterial():new ah,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:h}=this;c&&c.dispose(),h&&h.dispose(),a.dispose.call(this)}}};return n[t]=s,new s}function jx(a,{vertexShader:e,fragmentShader:t},n,r){let{vertexDefs:i,vertexMainIntro:s,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:h,fragmentMainOutro:u,fragmentColorTransform:d,customRewriter:p,timeUniform:v}=n;if(i=i||"",s=s||"",o=o||"",c=c||"",h=h||"",u=u||"",(l||p)&&(e=Wo(e)),(d||p)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Wo(t)),p){let g=p({vertexShader:e,fragmentShader:t});e=g.vertexShader,t=g.fragmentShader}if(d){let g=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(g.push(m),"")),u=`${d}
${g.join(`
`)}
${u}`}if(v){const g=`
uniform float ${v};
`;i=g+i,c=g+c}return l&&(e=`vec3 troika_position_${r};
vec3 troika_normal_${r};
vec2 troika_uv_${r};
${e}
`,i=`${i}
void troikaVertexTransform${r}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,s=`
troika_position_${r} = vec3(position);
troika_normal_${r} = vec3(normal);
troika_uv_${r} = vec2(uv);
troikaVertexTransform${r}(troika_position_${r}, troika_normal_${r}, troika_uv_${r});
${s}
`,e=e.replace(/\b(position|normal|uv)\b/g,(g,m,f,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,f))?m:`troika_${m}_${r}`),a.map&&a.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${r}`))),e=mu(e,r,i,s,o),t=mu(t,r,c,h,u),{vertexShader:e,fragmentShader:t}}function mu(a,e,t,n,r){return(n||r||t)&&(a=a.replace(du,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${r}
}`),a}function qx(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Yx=0;const gu=new Map;function Kx(a){const e=JSON.stringify(a,qx);let t=gu.get(e);return t==null&&gu.set(e,t=++Yx),t}function $x(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(r){var i=e._bin,s=new Uint8Array(r);if(i.readASCII(s,0,4)=="ttcf"){var o=4;i.readUshort(s,o),o+=2,i.readUshort(s,o),o+=2;var l=i.readUint(s,o);o+=4;for(var c=[],h=0;h<l;h++){var u=i.readUint(s,o);o+=4,c.push(e._readFont(s,u))}return c}return[e._readFont(s,0)]},_readFont:function(r,i){var s=e._bin,o=i;s.readFixed(r,i),i+=4;var l=s.readUshort(r,i);i+=2,s.readUshort(r,i),i+=2,s.readUshort(r,i),i+=2,s.readUshort(r,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],h={_data:r,_offset:o},u={},d=0;d<l;d++){var p=s.readASCII(r,i,4);i+=4,s.readUint(r,i),i+=4;var v=s.readUint(r,i);i+=4;var g=s.readUint(r,i);i+=4,u[p]={offset:v,length:g}}for(d=0;d<c.length;d++){var m=c[d];u[m]&&(h[m.trim()]=e[m.trim()].parse(r,u[m].offset,u[m].length,h))}return h},_tabOffset:function(r,i,s){for(var o=e._bin,l=o.readUshort(r,s+4),c=s+12,h=0;h<l;h++){var u=o.readASCII(r,c,4);c+=4,o.readUint(r,c),c+=4;var d=o.readUint(r,c);if(c+=4,o.readUint(r,c),c+=4,u==i)return d}return 0}};e._bin={readFixed:function(r,i){return(r[i]<<8|r[i+1])+(r[i+2]<<8|r[i+3])/65540},readF2dot14:function(r,i){return e._bin.readShort(r,i)/16384},readInt:function(r,i){return e._bin._view(r).getInt32(i)},readInt8:function(r,i){return e._bin._view(r).getInt8(i)},readShort:function(r,i){return e._bin._view(r).getInt16(i)},readUshort:function(r,i){return e._bin._view(r).getUint16(i)},readUshorts:function(r,i,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(r,i+2*l));return o},readUint:function(r,i){return e._bin._view(r).getUint32(i)},readUint64:function(r,i){return 4294967296*e._bin.readUint(r,i)+e._bin.readUint(r,i+4)},readASCII:function(r,i,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(r[i+l]);return o},readUnicode:function(r,i,s){for(var o="",l=0;l<s;l++){var c=r[i++]<<8|r[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(r,i,s){var o=e._bin._tdec;return o&&i==0&&s==r.length?o.decode(r):e._bin.readASCII(r,i,s)},readBytes:function(r,i,s){for(var o=[],l=0;l<s;l++)o.push(r[i+l]);return o},readASCIIArray:function(r,i,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(r[i+l]));return o},_view:function(r){return r._dataView||(r._dataView=r.buffer?new DataView(r.buffer,r.byteOffset,r.byteLength):new DataView(new Uint8Array(r).buffer))}},e._lctf={},e._lctf.parse=function(r,i,s,o,l){var c=e._bin,h={},u=i;c.readFixed(r,i),i+=4;var d=c.readUshort(r,i);i+=2;var p=c.readUshort(r,i);i+=2;var v=c.readUshort(r,i);return i+=2,h.scriptList=e._lctf.readScriptList(r,u+d),h.featureList=e._lctf.readFeatureList(r,u+p),h.lookupList=e._lctf.readLookupList(r,u+v,l),h},e._lctf.readLookupList=function(r,i,s){var o=e._bin,l=i,c=[],h=o.readUshort(r,i);i+=2;for(var u=0;u<h;u++){var d=o.readUshort(r,i);i+=2;var p=e._lctf.readLookupTable(r,l+d,s);c.push(p)}return c},e._lctf.readLookupTable=function(r,i,s){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(r,i),i+=2,c.flag=o.readUshort(r,i),i+=2;var h=o.readUshort(r,i);i+=2;for(var u=c.ltype,d=0;d<h;d++){var p=o.readUshort(r,i);i+=2;var v=s(r,u,l+p,c);c.tabs.push(v)}return c},e._lctf.numOfOnes=function(r){for(var i=0,s=0;s<32;s++)r>>>s&1&&i++;return i},e._lctf.readClassDef=function(r,i){var s=e._bin,o=[],l=s.readUshort(r,i);if(i+=2,l==1){var c=s.readUshort(r,i);i+=2;var h=s.readUshort(r,i);i+=2;for(var u=0;u<h;u++)o.push(c+u),o.push(c+u),o.push(s.readUshort(r,i)),i+=2}if(l==2){var d=s.readUshort(r,i);for(i+=2,u=0;u<d;u++)o.push(s.readUshort(r,i)),i+=2,o.push(s.readUshort(r,i)),i+=2,o.push(s.readUshort(r,i)),i+=2}return o},e._lctf.getInterval=function(r,i){for(var s=0;s<r.length;s+=3){var o=r[s],l=r[s+1];if(r[s+2],o<=i&&i<=l)return s}return-1},e._lctf.readCoverage=function(r,i){var s=e._bin,o={};o.fmt=s.readUshort(r,i),i+=2;var l=s.readUshort(r,i);return i+=2,o.fmt==1&&(o.tab=s.readUshorts(r,i,l)),o.fmt==2&&(o.tab=s.readUshorts(r,i,3*l)),o},e._lctf.coverageIndex=function(r,i){var s=r.tab;if(r.fmt==1)return s.indexOf(i);if(r.fmt==2){var o=e._lctf.getInterval(s,i);if(o!=-1)return s[o+2]+(i-s[o])}return-1},e._lctf.readFeatureList=function(r,i){var s=e._bin,o=i,l=[],c=s.readUshort(r,i);i+=2;for(var h=0;h<c;h++){var u=s.readASCII(r,i,4);i+=4;var d=s.readUshort(r,i);i+=2;var p=e._lctf.readFeatureTable(r,o+d);p.tag=u.trim(),l.push(p)}return l},e._lctf.readFeatureTable=function(r,i){var s=e._bin,o=i,l={},c=s.readUshort(r,i);i+=2,c>0&&(l.featureParams=o+c);var h=s.readUshort(r,i);i+=2,l.tab=[];for(var u=0;u<h;u++)l.tab.push(s.readUshort(r,i+2*u));return l},e._lctf.readScriptList=function(r,i){var s=e._bin,o=i,l={},c=s.readUshort(r,i);i+=2;for(var h=0;h<c;h++){var u=s.readASCII(r,i,4);i+=4;var d=s.readUshort(r,i);i+=2,l[u.trim()]=e._lctf.readScriptTable(r,o+d)}return l},e._lctf.readScriptTable=function(r,i){var s=e._bin,o=i,l={},c=s.readUshort(r,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(r,o+c));var h=s.readUshort(r,i);i+=2;for(var u=0;u<h;u++){var d=s.readASCII(r,i,4);i+=4;var p=s.readUshort(r,i);i+=2,l[d.trim()]=e._lctf.readLangSysTable(r,o+p)}return l},e._lctf.readLangSysTable=function(r,i){var s=e._bin,o={};s.readUshort(r,i),i+=2,o.reqFeature=s.readUshort(r,i),i+=2;var l=s.readUshort(r,i);return i+=2,o.features=s.readUshorts(r,i,l),o},e.CFF={},e.CFF.parse=function(r,i,s){var o=e._bin;(r=new Uint8Array(r.buffer,i,s))[i=0],r[++i],r[++i],r[++i],i++;var l=[];i=e.CFF.readIndex(r,i,l);for(var c=[],h=0;h<l.length-1;h++)c.push(o.readASCII(r,i+l[h],l[h+1]-l[h]));i+=l[l.length-1];var u=[];i=e.CFF.readIndex(r,i,u);var d=[];for(h=0;h<u.length-1;h++)d.push(e.CFF.readDict(r,i+u[h],i+u[h+1]));i+=u[u.length-1];var p=d[0],v=[];i=e.CFF.readIndex(r,i,v);var g=[];for(h=0;h<v.length-1;h++)g.push(o.readASCII(r,i+v[h],v[h+1]-v[h]));if(i+=v[v.length-1],e.CFF.readSubrs(r,i,p),p.CharStrings){i=p.CharStrings,v=[],i=e.CFF.readIndex(r,i,v);var m=[];for(h=0;h<v.length-1;h++)m.push(o.readBytes(r,i+v[h],v[h+1]-v[h]));p.CharStrings=m}if(p.ROS){i=p.FDArray;var f=[];for(i=e.CFF.readIndex(r,i,f),p.FDArray=[],h=0;h<f.length-1;h++){var y=e.CFF.readDict(r,i+f[h],i+f[h+1]);e.CFF._readFDict(r,y,g),p.FDArray.push(y)}i+=f[f.length-1],i=p.FDSelect,p.FDSelect=[];var _=r[i];if(i++,_!=3)throw _;var x=o.readUshort(r,i);for(i+=2,h=0;h<x+1;h++)p.FDSelect.push(o.readUshort(r,i),r[i+2]),i+=3}return p.Encoding&&(p.Encoding=e.CFF.readEncoding(r,p.Encoding,p.CharStrings.length)),p.charset&&(p.charset=e.CFF.readCharset(r,p.charset,p.CharStrings.length)),e.CFF._readFDict(r,p,g),p},e.CFF._readFDict=function(r,i,s){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(r,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(r,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=s[i[l]-426+35])},e.CFF.readSubrs=function(r,i,s){var o=e._bin,l=[];i=e.CFF.readIndex(r,i,l);var c,h=l.length;c=h<1240?107:h<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var u=0;u<l.length-1;u++)s.Subrs.push(o.readBytes(r,i+l[u],l[u+1]-l[u]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(r,i){for(var s=0;s<r.charset.length;s++)if(r.charset[s]==i)return s;return-1},e.CFF.glyphBySE=function(r,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(r,e.CFF.tableSE[i])},e.CFF.readEncoding=function(r,i,s){e._bin;var o=[".notdef"],l=r[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=r[i];i++;for(var h=0;h<c;h++)o.push(r[i+h]);return o},e.CFF.readCharset=function(r,i,s){var o=e._bin,l=[".notdef"],c=r[i];if(i++,c==0)for(var h=0;h<s;h++){var u=o.readUshort(r,i);i+=2,l.push(u)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){u=o.readUshort(r,i),i+=2;var d=0;for(c==1?(d=r[i],i++):(d=o.readUshort(r,i),i+=2),h=0;h<=d;h++)l.push(u),u++}}return l},e.CFF.readIndex=function(r,i,s){var o=e._bin,l=o.readUshort(r,i)+1,c=r[i+=2];if(i++,c==1)for(var h=0;h<l;h++)s.push(r[i+h]);else if(c==2)for(h=0;h<l;h++)s.push(o.readUshort(r,i+2*h));else if(c==3)for(h=0;h<l;h++)s.push(16777215&o.readUint(r,i+3*h-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(r,i,s){var o=e._bin,l=r[i],c=r[i+1];r[i+2],r[i+3],r[i+4];var h=1,u=null,d=null;l<=20&&(u=l,h=1),l==12&&(u=100*l+c,h=2),21<=l&&l<=27&&(u=l,h=1),l==28&&(d=o.readShort(r,i+1),h=3),29<=l&&l<=31&&(u=l,h=1),32<=l&&l<=246&&(d=l-139,h=1),247<=l&&l<=250&&(d=256*(l-247)+c+108,h=2),251<=l&&l<=254&&(d=256*-(l-251)-c-108,h=2),l==255&&(d=o.readInt(r,i+1)/65535,h=5),s.val=d??"o"+u,s.size=h},e.CFF.readCharString=function(r,i,s){for(var o=i+s,l=e._bin,c=[];i<o;){var h=r[i],u=r[i+1];r[i+2],r[i+3],r[i+4];var d=1,p=null,v=null;h<=20&&(p=h,d=1),h==12&&(p=100*h+u,d=2),h!=19&&h!=20||(p=h,d=2),21<=h&&h<=27&&(p=h,d=1),h==28&&(v=l.readShort(r,i+1),d=3),29<=h&&h<=31&&(p=h,d=1),32<=h&&h<=246&&(v=h-139,d=1),247<=h&&h<=250&&(v=256*(h-247)+u+108,d=2),251<=h&&h<=254&&(v=256*-(h-251)-u-108,d=2),h==255&&(v=l.readInt(r,i+1)/65535,d=5),c.push(v??"o"+p),i+=d}return c},e.CFF.readDict=function(r,i,s){for(var o=e._bin,l={},c=[];i<s;){var h=r[i],u=r[i+1];r[i+2],r[i+3],r[i+4];var d=1,p=null,v=null;if(h==28&&(v=o.readShort(r,i+1),d=3),h==29&&(v=o.readInt(r,i+1),d=5),32<=h&&h<=246&&(v=h-139,d=1),247<=h&&h<=250&&(v=256*(h-247)+u+108,d=2),251<=h&&h<=254&&(v=256*-(h-251)-u-108,d=2),h==255)throw v=o.readInt(r,i+1)/65535,d=5,"unknown number";if(h==30){var g=[];for(d=1;;){var m=r[i+d];d++;var f=m>>4,y=15&m;if(f!=15&&g.push(f),y!=15&&g.push(y),y==15)break}for(var _="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],S=0;S<g.length;S++)_+=x[g[S]];v=parseFloat(_)}h<=21&&(p=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][h],d=1,h==12&&(p=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][u],d=2)),p!=null?(l[p]=c.length==1?c[0]:c,c=[]):c.push(v),i+=d}return l},e.cmap={},e.cmap.parse=function(r,i,s){r=new Uint8Array(r.buffer,i,s),i=0;var o=e._bin,l={};o.readUshort(r,i),i+=2;var c=o.readUshort(r,i);i+=2;var h=[];l.tables=[];for(var u=0;u<c;u++){var d=o.readUshort(r,i);i+=2;var p=o.readUshort(r,i);i+=2;var v=o.readUint(r,i);i+=4;var g="p"+d+"e"+p,m=h.indexOf(v);if(m==-1){var f;m=l.tables.length,h.push(v);var y=o.readUshort(r,v);y==0?f=e.cmap.parse0(r,v):y==4?f=e.cmap.parse4(r,v):y==6?f=e.cmap.parse6(r,v):y==12?f=e.cmap.parse12(r,v):console.debug("unknown format: "+y,d,p,v),l.tables.push(f)}if(l[g]!=null)throw"multiple tables for one platform+encoding";l[g]=m}return l},e.cmap.parse0=function(r,i){var s=e._bin,o={};o.format=s.readUshort(r,i),i+=2;var l=s.readUshort(r,i);i+=2,s.readUshort(r,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(r[i+c]);return o},e.cmap.parse4=function(r,i){var s=e._bin,o=i,l={};l.format=s.readUshort(r,i),i+=2;var c=s.readUshort(r,i);i+=2,s.readUshort(r,i),i+=2;var h=s.readUshort(r,i);i+=2;var u=h/2;l.searchRange=s.readUshort(r,i),i+=2,l.entrySelector=s.readUshort(r,i),i+=2,l.rangeShift=s.readUshort(r,i),i+=2,l.endCount=s.readUshorts(r,i,u),i+=2*u,i+=2,l.startCount=s.readUshorts(r,i,u),i+=2*u,l.idDelta=[];for(var d=0;d<u;d++)l.idDelta.push(s.readShort(r,i)),i+=2;for(l.idRangeOffset=s.readUshorts(r,i,u),i+=2*u,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(s.readUshort(r,i)),i+=2;return l},e.cmap.parse6=function(r,i){var s=e._bin,o={};o.format=s.readUshort(r,i),i+=2,s.readUshort(r,i),i+=2,s.readUshort(r,i),i+=2,o.firstCode=s.readUshort(r,i),i+=2;var l=s.readUshort(r,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(r,i)),i+=2;return o},e.cmap.parse12=function(r,i){var s=e._bin,o={};o.format=s.readUshort(r,i),i+=2,i+=2,s.readUint(r,i),i+=4,s.readUint(r,i),i+=4;var l=s.readUint(r,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var h=i+12*c,u=s.readUint(r,h+0),d=s.readUint(r,h+4),p=s.readUint(r,h+8);o.groups.push([u,d,p])}return o},e.glyf={},e.glyf.parse=function(r,i,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(r,i){var s=e._bin,o=r._data,l=e._tabOffset(o,"glyf",r._offset)+r.loca[i];if(r.loca[i]==r.loca[i+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var h=0;h<c.noc;h++)c.endPts.push(s.readUshort(o,l)),l+=2;var u=s.readUshort(o,l);if(l+=2,o.length-l<u)return null;c.instructions=s.readBytes(o,l,u),l+=u;var d=c.endPts[c.noc-1]+1;for(c.flags=[],h=0;h<d;h++){var p=o[l];if(l++,c.flags.push(p),(8&p)!=0){var v=o[l];l++;for(var g=0;g<v;g++)c.flags.push(p),h++}}for(c.xs=[],h=0;h<d;h++){var m=(2&c.flags[h])!=0,f=(16&c.flags[h])!=0;m?(c.xs.push(f?o[l]:-o[l]),l++):f?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],h=0;h<d;h++)m=(4&c.flags[h])!=0,f=(32&c.flags[h])!=0,m?(c.ys.push(f?o[l]:-o[l]),l++):f?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var y=0,_=0;for(h=0;h<d;h++)y+=c.xs[h],_+=c.ys[h],c.xs[h]=y,c.ys[h]=_}else{var x;c.parts=[];do{x=s.readUshort(o,l),l+=2;var S={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(S),S.glyphIndex=s.readUshort(o,l),l+=2,1&x){var b=s.readShort(o,l);l+=2;var R=s.readShort(o,l);l+=2}else b=s.readInt8(o,l),l++,R=s.readInt8(o,l),l++;2&x?(S.m.tx=b,S.m.ty=R):(S.p1=b,S.p2=R),8&x?(S.m.a=S.m.d=s.readF2dot14(o,l),l+=2):64&x?(S.m.a=s.readF2dot14(o,l),l+=2,S.m.d=s.readF2dot14(o,l),l+=2):128&x&&(S.m.a=s.readF2dot14(o,l),l+=2,S.m.b=s.readF2dot14(o,l),l+=2,S.m.c=s.readF2dot14(o,l),l+=2,S.m.d=s.readF2dot14(o,l),l+=2)}while(32&x);if(256&x){var O=s.readUshort(o,l);for(l+=2,c.instr=[],h=0;h<O;h++)c.instr.push(o[l]),l++}}return c},e.GPOS={},e.GPOS.parse=function(r,i,s,o){return e._lctf.parse(r,i,s,o,e.GPOS.subt)},e.GPOS.subt=function(r,i,s,o){var l=e._bin,c=s,h={};if(h.fmt=l.readUshort(r,s),s+=2,i==1||i==2||i==3||i==7||i==8&&h.fmt<=2){var u=l.readUshort(r,s);s+=2,h.coverage=e._lctf.readCoverage(r,u+c)}if(i==1&&h.fmt==1){var d=l.readUshort(r,s);s+=2;var p=e._lctf.numOfOnes(d);d!=0&&(h.pos=e.GPOS.readValueRecord(r,s,d))}else if(i==2&&h.fmt>=1&&h.fmt<=2){d=l.readUshort(r,s),s+=2;var v=l.readUshort(r,s);s+=2,p=e._lctf.numOfOnes(d);var g=e._lctf.numOfOnes(v);if(h.fmt==1){h.pairsets=[];var m=l.readUshort(r,s);s+=2;for(var f=0;f<m;f++){var y=c+l.readUshort(r,s);s+=2;var _=l.readUshort(r,y);y+=2;for(var x=[],S=0;S<_;S++){var b=l.readUshort(r,y);y+=2,d!=0&&(F=e.GPOS.readValueRecord(r,y,d),y+=2*p),v!=0&&(U=e.GPOS.readValueRecord(r,y,v),y+=2*g),x.push({gid2:b,val1:F,val2:U})}h.pairsets.push(x)}}if(h.fmt==2){var R=l.readUshort(r,s);s+=2;var O=l.readUshort(r,s);s+=2;var M=l.readUshort(r,s);s+=2;var A=l.readUshort(r,s);for(s+=2,h.classDef1=e._lctf.readClassDef(r,c+R),h.classDef2=e._lctf.readClassDef(r,c+O),h.matrix=[],f=0;f<M;f++){var K=[];for(S=0;S<A;S++){var F=null,U=null;d!=0&&(F=e.GPOS.readValueRecord(r,s,d),s+=2*p),v!=0&&(U=e.GPOS.readValueRecord(r,s,v),s+=2*g),K.push({val1:F,val2:U})}h.matrix.push(K)}}}else{if(i==9&&h.fmt==1){var N=l.readUshort(r,s);s+=2;var z=l.readUint(r,s);if(s+=4,o.ltype==9)o.ltype=N;else if(o.ltype!=N)throw"invalid extension substitution";return e.GPOS.subt(r,o.ltype,c+z)}console.debug("unsupported GPOS table LookupType",i,"format",h.fmt)}return h},e.GPOS.readValueRecord=function(r,i,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(r,i):0),i+=1&s?2:0,l.push(2&s?o.readShort(r,i):0),i+=2&s?2:0,l.push(4&s?o.readShort(r,i):0),i+=4&s?2:0,l.push(8&s?o.readShort(r,i):0),i+=8&s?2:0,l},e.GSUB={},e.GSUB.parse=function(r,i,s,o){return e._lctf.parse(r,i,s,o,e.GSUB.subt)},e.GSUB.subt=function(r,i,s,o){var l=e._bin,c=s,h={};if(h.fmt=l.readUshort(r,s),s+=2,i!=1&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==4||i==5&&h.fmt<=2||i==6&&h.fmt<=2){var u=l.readUshort(r,s);s+=2,h.coverage=e._lctf.readCoverage(r,c+u)}if(i==1&&h.fmt>=1&&h.fmt<=2){if(h.fmt==1)h.delta=l.readShort(r,s),s+=2;else if(h.fmt==2){var d=l.readUshort(r,s);s+=2,h.newg=l.readUshorts(r,s,d),s+=2*h.newg.length}}else if(i==4){h.vals=[],d=l.readUshort(r,s),s+=2;for(var p=0;p<d;p++){var v=l.readUshort(r,s);s+=2,h.vals.push(e.GSUB.readLigatureSet(r,c+v))}}else if(i==5&&h.fmt==2){if(h.fmt==2){var g=l.readUshort(r,s);s+=2,h.cDef=e._lctf.readClassDef(r,c+g),h.scset=[];var m=l.readUshort(r,s);for(s+=2,p=0;p<m;p++){var f=l.readUshort(r,s);s+=2,h.scset.push(f==0?null:e.GSUB.readSubClassSet(r,c+f))}}}else if(i==6&&h.fmt==3){if(h.fmt==3){for(p=0;p<3;p++){d=l.readUshort(r,s),s+=2;for(var y=[],_=0;_<d;_++)y.push(e._lctf.readCoverage(r,c+l.readUshort(r,s+2*_)));s+=2*d,p==0&&(h.backCvg=y),p==1&&(h.inptCvg=y),p==2&&(h.ahedCvg=y)}d=l.readUshort(r,s),s+=2,h.lookupRec=e.GSUB.readSubstLookupRecords(r,s,d)}}else{if(i==7&&h.fmt==1){var x=l.readUshort(r,s);s+=2;var S=l.readUint(r,s);if(s+=4,o.ltype==9)o.ltype=x;else if(o.ltype!=x)throw"invalid extension substitution";return e.GSUB.subt(r,o.ltype,c+S)}console.debug("unsupported GSUB table LookupType",i,"format",h.fmt)}return h},e.GSUB.readSubClassSet=function(r,i){var s=e._bin.readUshort,o=i,l=[],c=s(r,i);i+=2;for(var h=0;h<c;h++){var u=s(r,i);i+=2,l.push(e.GSUB.readSubClassRule(r,o+u))}return l},e.GSUB.readSubClassRule=function(r,i){var s=e._bin.readUshort,o={},l=s(r,i),c=s(r,i+=2);i+=2,o.input=[];for(var h=0;h<l-1;h++)o.input.push(s(r,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(r,i,c),o},e.GSUB.readSubstLookupRecords=function(r,i,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(r,i),o(r,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(r,i){var s=e._bin,o=i,l=[],c=s.readUshort(r,i);i+=2;for(var h=0;h<c;h++){var u=s.readUshort(r,i);i+=2,l.push(e.GSUB.readChainSubClassRule(r,o+u))}return l},e.GSUB.readChainSubClassRule=function(r,i){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var h=s.readUshort(r,i);i+=2,c==1&&h--,o[l[c]]=s.readUshorts(r,i,h),i+=2*o[l[c]].length}return h=s.readUshort(r,i),i+=2,o.subst=s.readUshorts(r,i,2*h),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(r,i){var s=e._bin,o=i,l=[],c=s.readUshort(r,i);i+=2;for(var h=0;h<c;h++){var u=s.readUshort(r,i);i+=2,l.push(e.GSUB.readLigature(r,o+u))}return l},e.GSUB.readLigature=function(r,i){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(r,i),i+=2;var l=s.readUshort(r,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(r,i)),i+=2;return o},e.head={},e.head.parse=function(r,i,s){var o=e._bin,l={};return o.readFixed(r,i),i+=4,l.fontRevision=o.readFixed(r,i),i+=4,o.readUint(r,i),i+=4,o.readUint(r,i),i+=4,l.flags=o.readUshort(r,i),i+=2,l.unitsPerEm=o.readUshort(r,i),i+=2,l.created=o.readUint64(r,i),i+=8,l.modified=o.readUint64(r,i),i+=8,l.xMin=o.readShort(r,i),i+=2,l.yMin=o.readShort(r,i),i+=2,l.xMax=o.readShort(r,i),i+=2,l.yMax=o.readShort(r,i),i+=2,l.macStyle=o.readUshort(r,i),i+=2,l.lowestRecPPEM=o.readUshort(r,i),i+=2,l.fontDirectionHint=o.readShort(r,i),i+=2,l.indexToLocFormat=o.readShort(r,i),i+=2,l.glyphDataFormat=o.readShort(r,i),i+=2,l},e.hhea={},e.hhea.parse=function(r,i,s){var o=e._bin,l={};return o.readFixed(r,i),i+=4,l.ascender=o.readShort(r,i),i+=2,l.descender=o.readShort(r,i),i+=2,l.lineGap=o.readShort(r,i),i+=2,l.advanceWidthMax=o.readUshort(r,i),i+=2,l.minLeftSideBearing=o.readShort(r,i),i+=2,l.minRightSideBearing=o.readShort(r,i),i+=2,l.xMaxExtent=o.readShort(r,i),i+=2,l.caretSlopeRise=o.readShort(r,i),i+=2,l.caretSlopeRun=o.readShort(r,i),i+=2,l.caretOffset=o.readShort(r,i),i+=2,i+=8,l.metricDataFormat=o.readShort(r,i),i+=2,l.numberOfHMetrics=o.readUshort(r,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(r,i,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},h=0,u=0,d=0;d<o.maxp.numGlyphs;d++)d<o.hhea.numberOfHMetrics&&(h=l.readUshort(r,i),i+=2,u=l.readShort(r,i),i+=2),c.aWidth.push(h),c.lsBearing.push(u);return c},e.kern={},e.kern.parse=function(r,i,s,o){var l=e._bin,c=l.readUshort(r,i);if(i+=2,c==1)return e.kern.parseV1(r,i-2,s,o);var h=l.readUshort(r,i);i+=2;for(var u={glyph1:[],rval:[]},d=0;d<h;d++){i+=2,s=l.readUshort(r,i),i+=2;var p=l.readUshort(r,i);i+=2;var v=p>>>8;if((v&=15)!=0)throw"unknown kern table format: "+v;i=e.kern.readFormat0(r,i,u)}return u},e.kern.parseV1=function(r,i,s,o){var l=e._bin;l.readFixed(r,i),i+=4;var c=l.readUint(r,i);i+=4;for(var h={glyph1:[],rval:[]},u=0;u<c;u++){l.readUint(r,i),i+=4;var d=l.readUshort(r,i);i+=2,l.readUshort(r,i),i+=2;var p=d>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;i=e.kern.readFormat0(r,i,h)}return h},e.kern.readFormat0=function(r,i,s){var o=e._bin,l=-1,c=o.readUshort(r,i);i+=2,o.readUshort(r,i),i+=2,o.readUshort(r,i),i+=2,o.readUshort(r,i),i+=2;for(var h=0;h<c;h++){var u=o.readUshort(r,i);i+=2;var d=o.readUshort(r,i);i+=2;var p=o.readShort(r,i);i+=2,u!=l&&(s.glyph1.push(u),s.rval.push({glyph2:[],vals:[]}));var v=s.rval[s.rval.length-1];v.glyph2.push(d),v.vals.push(p),l=u}return i},e.loca={},e.loca.parse=function(r,i,s,o){var l=e._bin,c=[],h=o.head.indexToLocFormat,u=o.maxp.numGlyphs+1;if(h==0)for(var d=0;d<u;d++)c.push(l.readUshort(r,i+(d<<1))<<1);if(h==1)for(d=0;d<u;d++)c.push(l.readUint(r,i+(d<<2)));return c},e.maxp={},e.maxp.parse=function(r,i,s){var o=e._bin,l={},c=o.readUint(r,i);return i+=4,l.numGlyphs=o.readUshort(r,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(r,i),i+=2,l.maxContours=o.readUshort(r,i),i+=2,l.maxCompositePoints=o.readUshort(r,i),i+=2,l.maxCompositeContours=o.readUshort(r,i),i+=2,l.maxZones=o.readUshort(r,i),i+=2,l.maxTwilightPoints=o.readUshort(r,i),i+=2,l.maxStorage=o.readUshort(r,i),i+=2,l.maxFunctionDefs=o.readUshort(r,i),i+=2,l.maxInstructionDefs=o.readUshort(r,i),i+=2,l.maxStackElements=o.readUshort(r,i),i+=2,l.maxSizeOfInstructions=o.readUshort(r,i),i+=2,l.maxComponentElements=o.readUshort(r,i),i+=2,l.maxComponentDepth=o.readUshort(r,i),i+=2),l},e.name={},e.name.parse=function(r,i,s){var o=e._bin,l={};o.readUshort(r,i),i+=2;var c=o.readUshort(r,i);i+=2,o.readUshort(r,i);for(var h,u=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],d=i+=2,p=0;p<c;p++){var v=o.readUshort(r,i);i+=2;var g=o.readUshort(r,i);i+=2;var m=o.readUshort(r,i);i+=2;var f=o.readUshort(r,i);i+=2;var y=o.readUshort(r,i);i+=2;var _=o.readUshort(r,i);i+=2;var x,S=u[f],b=d+12*c+_;if(v==0)x=o.readUnicode(r,b,y/2);else if(v==3&&g==0)x=o.readUnicode(r,b,y/2);else if(g==0)x=o.readASCII(r,b,y);else if(g==1)x=o.readUnicode(r,b,y/2);else if(g==3)x=o.readUnicode(r,b,y/2);else{if(v!=1)throw"unknown encoding "+g+", platformID: "+v;x=o.readASCII(r,b,y),console.debug("reading unknown MAC encoding "+g+" as ASCII")}var R="p"+v+","+m.toString(16);l[R]==null&&(l[R]={}),l[R][S!==void 0?S:f]=x,l[R]._lang=m}for(var O in l)if(l[O].postScriptName!=null&&l[O]._lang==1033)return l[O];for(var O in l)if(l[O].postScriptName!=null&&l[O]._lang==0)return l[O];for(var O in l)if(l[O].postScriptName!=null&&l[O]._lang==3084)return l[O];for(var O in l)if(l[O].postScriptName!=null)return l[O];for(var O in l){h=O;break}return console.debug("returning name table with languageID "+l[h]._lang),l[h]},e["OS/2"]={},e["OS/2"].parse=function(r,i,s){var o=e._bin.readUshort(r,i);i+=2;var l={};if(o==0)e["OS/2"].version0(r,i,l);else if(o==1)e["OS/2"].version1(r,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(r,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(r,i,l)}return l},e["OS/2"].version0=function(r,i,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(r,i),i+=2,s.usWeightClass=o.readUshort(r,i),i+=2,s.usWidthClass=o.readUshort(r,i),i+=2,s.fsType=o.readUshort(r,i),i+=2,s.ySubscriptXSize=o.readShort(r,i),i+=2,s.ySubscriptYSize=o.readShort(r,i),i+=2,s.ySubscriptXOffset=o.readShort(r,i),i+=2,s.ySubscriptYOffset=o.readShort(r,i),i+=2,s.ySuperscriptXSize=o.readShort(r,i),i+=2,s.ySuperscriptYSize=o.readShort(r,i),i+=2,s.ySuperscriptXOffset=o.readShort(r,i),i+=2,s.ySuperscriptYOffset=o.readShort(r,i),i+=2,s.yStrikeoutSize=o.readShort(r,i),i+=2,s.yStrikeoutPosition=o.readShort(r,i),i+=2,s.sFamilyClass=o.readShort(r,i),i+=2,s.panose=o.readBytes(r,i,10),i+=10,s.ulUnicodeRange1=o.readUint(r,i),i+=4,s.ulUnicodeRange2=o.readUint(r,i),i+=4,s.ulUnicodeRange3=o.readUint(r,i),i+=4,s.ulUnicodeRange4=o.readUint(r,i),i+=4,s.achVendID=[o.readInt8(r,i),o.readInt8(r,i+1),o.readInt8(r,i+2),o.readInt8(r,i+3)],i+=4,s.fsSelection=o.readUshort(r,i),i+=2,s.usFirstCharIndex=o.readUshort(r,i),i+=2,s.usLastCharIndex=o.readUshort(r,i),i+=2,s.sTypoAscender=o.readShort(r,i),i+=2,s.sTypoDescender=o.readShort(r,i),i+=2,s.sTypoLineGap=o.readShort(r,i),i+=2,s.usWinAscent=o.readUshort(r,i),i+=2,s.usWinDescent=o.readUshort(r,i),i+=2},e["OS/2"].version1=function(r,i,s){var o=e._bin;return i=e["OS/2"].version0(r,i,s),s.ulCodePageRange1=o.readUint(r,i),i+=4,s.ulCodePageRange2=o.readUint(r,i),i+=4},e["OS/2"].version2=function(r,i,s){var o=e._bin;return i=e["OS/2"].version1(r,i,s),s.sxHeight=o.readShort(r,i),i+=2,s.sCapHeight=o.readShort(r,i),i+=2,s.usDefault=o.readUshort(r,i),i+=2,s.usBreak=o.readUshort(r,i),i+=2,s.usMaxContext=o.readUshort(r,i),i+=2},e["OS/2"].version5=function(r,i,s){var o=e._bin;return i=e["OS/2"].version2(r,i,s),s.usLowerOpticalPointSize=o.readUshort(r,i),i+=2,s.usUpperOpticalPointSize=o.readUshort(r,i),i+=2},e.post={},e.post.parse=function(r,i,s){var o=e._bin,l={};return l.version=o.readFixed(r,i),i+=4,l.italicAngle=o.readFixed(r,i),i+=4,l.underlinePosition=o.readShort(r,i),i+=2,l.underlineThickness=o.readShort(r,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(r,i){var s=r.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,h=0;h<l.endCount.length;h++)if(i<=l.endCount[h]){c=h;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(h=0;h<l.groups.length;h++){var u=l.groups[h];if(u[0]<=i&&i<=u[1])return u[2]+(i-u[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(r,i){var s={cmds:[],crds:[]};if(r.SVG&&r.SVG.entries[i]){var o=r.SVG.entries[i];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),r.SVG.entries[i]=o),o)}if(r.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:r.CFF.Private?r.CFF.Private.defaultWidthX:0,open:!1},c=r.CFF,h=r.CFF.Private;if(c.ROS){for(var u=0;c.FDSelect[u+2]<=i;)u+=2;h=c.FDArray[c.FDSelect[u+1]].Private}e.U._drawCFF(r.CFF.CharStrings[i],l,c,h,s)}else r.glyf&&e.U._drawGlyf(i,r,s);return s},e.U._drawGlyf=function(r,i,s){var o=i.glyf[r];o==null&&(o=i.glyf[r]=e.glyf._parseGlyf(i,r)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,i,s))},e.U._simpleGlyph=function(r,i){for(var s=0;s<r.noc;s++){for(var o=s==0?0:r.endPts[s-1]+1,l=r.endPts[s],c=o;c<=l;c++){var h=c==o?l:c-1,u=c==l?o:c+1,d=1&r.flags[c],p=1&r.flags[h],v=1&r.flags[u],g=r.xs[c],m=r.ys[c];if(c==o)if(d){if(!p){e.U.P.moveTo(i,g,m);continue}e.U.P.moveTo(i,r.xs[h],r.ys[h])}else p?e.U.P.moveTo(i,r.xs[h],r.ys[h]):e.U.P.moveTo(i,(r.xs[h]+g)/2,(r.ys[h]+m)/2);d?p&&e.U.P.lineTo(i,g,m):v?e.U.P.qcurveTo(i,g,m,r.xs[u],r.ys[u]):e.U.P.qcurveTo(i,g,m,(g+r.xs[u])/2,(m+r.ys[u])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(r,i,s){for(var o=0;o<r.parts.length;o++){var l={cmds:[],crds:[]},c=r.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var h=c.m,u=0;u<l.crds.length;u+=2){var d=l.crds[u],p=l.crds[u+1];s.crds.push(d*h.a+p*h.b+h.tx),s.crds.push(d*h.c+p*h.d+h.ty)}for(u=0;u<l.cmds.length;u++)s.cmds.push(l.cmds[u])}},e.U._getGlyphClass=function(r,i){var s=e._lctf.getInterval(i,r);return s==-1?0:i[s+2]},e.U.getPairAdjustment=function(r,i,s){var o=!1;if(r.GPOS)for(var l=r.GPOS,c=l.lookupList,h=l.featureList,u=[],d=0;d<h.length;d++){var p=h[d];if(p.tag=="kern"){o=!0;for(var v=0;v<p.tab.length;v++)if(!u[p.tab[v]]){u[p.tab[v]]=!0;for(var g=c[p.tab[v]],m=0;m<g.tabs.length;m++)if(g.tabs[m]!=null){var f,y=g.tabs[m];if((!y.coverage||(f=e._lctf.coverageIndex(y.coverage,i))!=-1)&&g.ltype!=1&&g.ltype==2){var _=null;if(y.fmt==1){var x=y.pairsets[f];for(d=0;d<x.length;d++)x[d].gid2==s&&(_=x[d])}else if(y.fmt==2){var S=e.U._getGlyphClass(i,y.classDef1),b=e.U._getGlyphClass(s,y.classDef2);_=y.matrix[S][b]}if(_){var R=0;return _.val1&&_.val1[2]&&(R+=_.val1[2]),_.val2&&_.val2[0]&&(R+=_.val2[0]),R}}}}}}if(r.kern&&!o){var O=r.kern.glyph1.indexOf(i);if(O!=-1){var M=r.kern.rval[O].glyph2.indexOf(s);if(M!=-1)return r.kern.rval[O].vals[M]}}return 0},e.U._applySubs=function(r,i,s,o){for(var l=r.length-i-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var h,u=s.tabs[c];if(!u.coverage||(h=e._lctf.coverageIndex(u.coverage,r[i]))!=-1){if(s.ltype==1)r[i],u.fmt==1?r[i]=r[i]+u.delta:r[i]=u.newg[h];else if(s.ltype==4)for(var d=u.vals[h],p=0;p<d.length;p++){var v=d[p],g=v.chain.length;if(!(g>l)){for(var m=!0,f=0,y=0;y<g;y++){for(;r[i+f+(1+y)]==-1;)f++;v.chain[y]!=r[i+f+(1+y)]&&(m=!1)}if(m){for(r[i]=v.nglyph,y=0;y<g+f;y++)r[i+y+1]=-1;break}}}else if(s.ltype==5&&u.fmt==2)for(var _=e._lctf.getInterval(u.cDef,r[i]),x=u.cDef[_+2],S=u.scset[x],b=0;b<S.length;b++){var R=S[b],O=R.input;if(!(O.length>l)){for(m=!0,y=0;y<O.length;y++){var M=e._lctf.getInterval(u.cDef,r[i+1+y]);if(_==-1&&u.cDef[M+2]!=O[y]){m=!1;break}}if(m){var A=R.substLookupRecords;for(p=0;p<A.length;p+=2)A[p],A[p+1]}}}else if(s.ltype==6&&u.fmt==3){if(!e.U._glsCovered(r,u.backCvg,i-u.backCvg.length)||!e.U._glsCovered(r,u.inptCvg,i)||!e.U._glsCovered(r,u.ahedCvg,i+u.inptCvg.length))continue;var K=u.lookupRec;for(b=0;b<K.length;b+=2){_=K[b];var F=o[K[b+1]];e.U._applySubs(r,i+_,F,o)}}}}},e.U._glsCovered=function(r,i,s){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],r[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(r,i,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var h=i[c];if(h!=-1){for(var u=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,d=e.U.glyphToPath(r,h),p=0;p<d.crds.length;p+=2)o.crds.push(d.crds[p]+l),o.crds.push(d.crds[p+1]);for(s&&o.cmds.push(s),p=0;p<d.cmds.length;p++)o.cmds.push(d.cmds[p]);s&&o.cmds.push("X"),l+=r.hmtx.aWidth[h],c<i.length-1&&(l+=e.U.getPairAdjustment(r,h,u))}}return o},e.U.P={},e.U.P.moveTo=function(r,i,s){r.cmds.push("M"),r.crds.push(i,s)},e.U.P.lineTo=function(r,i,s){r.cmds.push("L"),r.crds.push(i,s)},e.U.P.curveTo=function(r,i,s,o,l,c,h){r.cmds.push("C"),r.crds.push(i,s,o,l,c,h)},e.U.P.qcurveTo=function(r,i,s,o,l){r.cmds.push("Q"),r.crds.push(i,s,o,l)},e.U.P.closePath=function(r){r.cmds.push("Z")},e.U._drawCFF=function(r,i,s,o,l){for(var c=i.stack,h=i.nStems,u=i.haveWidth,d=i.width,p=i.open,v=0,g=i.x,m=i.y,f=0,y=0,_=0,x=0,S=0,b=0,R=0,O=0,M=0,A=0,K={val:0,size:0};v<r.length;){e.CFF.getCharString(r,v,K);var F=K.val;if(v+=K.size,F=="o1"||F=="o18")c.length%2!=0&&!u&&(d=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(F=="o3"||F=="o23")c.length%2!=0&&!u&&(d=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(F=="o4")c.length>1&&!u&&(d=c.shift()+o.nominalWidthX,u=!0),p&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,g,m),p=!0;else if(F=="o5")for(;c.length>0;)g+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,g,m);else if(F=="o6"||F=="o7")for(var U=c.length,N=F=="o6",z=0;z<U;z++){var H=c.shift();N?g+=H:m+=H,N=!N,e.U.P.lineTo(l,g,m)}else if(F=="o8"||F=="o24"){U=c.length;for(var X=0;X+6<=U;)f=g+c.shift(),y=m+c.shift(),_=f+c.shift(),x=y+c.shift(),g=_+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,f,y,_,x,g,m),X+=6;F=="o24"&&(g+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,g,m))}else{if(F=="o11")break;if(F=="o1234"||F=="o1235"||F=="o1236"||F=="o1237")F=="o1234"&&(y=m,_=(f=g+c.shift())+c.shift(),A=x=y+c.shift(),b=x,O=m,g=(R=(S=(M=_+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,f,y,_,x,M,A),e.U.P.curveTo(l,S,b,R,O,g,m)),F=="o1235"&&(f=g+c.shift(),y=m+c.shift(),_=f+c.shift(),x=y+c.shift(),M=_+c.shift(),A=x+c.shift(),S=M+c.shift(),b=A+c.shift(),R=S+c.shift(),O=b+c.shift(),g=R+c.shift(),m=O+c.shift(),c.shift(),e.U.P.curveTo(l,f,y,_,x,M,A),e.U.P.curveTo(l,S,b,R,O,g,m)),F=="o1236"&&(f=g+c.shift(),y=m+c.shift(),_=f+c.shift(),A=x=y+c.shift(),b=x,R=(S=(M=_+c.shift())+c.shift())+c.shift(),O=b+c.shift(),g=R+c.shift(),e.U.P.curveTo(l,f,y,_,x,M,A),e.U.P.curveTo(l,S,b,R,O,g,m)),F=="o1237"&&(f=g+c.shift(),y=m+c.shift(),_=f+c.shift(),x=y+c.shift(),M=_+c.shift(),A=x+c.shift(),S=M+c.shift(),b=A+c.shift(),R=S+c.shift(),O=b+c.shift(),Math.abs(R-g)>Math.abs(O-m)?g=R+c.shift():m=O+c.shift(),e.U.P.curveTo(l,f,y,_,x,M,A),e.U.P.curveTo(l,S,b,R,O,g,m));else if(F=="o14"){if(c.length>0&&!u&&(d=c.shift()+s.nominalWidthX,u=!0),c.length==4){var V=c.shift(),G=c.shift(),k=c.shift(),w=c.shift(),D=e.CFF.glyphBySE(s,k),q=e.CFF.glyphBySE(s,w);e.U._drawCFF(s.CharStrings[D],i,s,o,l),i.x=V,i.y=G,e.U._drawCFF(s.CharStrings[q],i,s,o,l)}p&&(e.U.P.closePath(l),p=!1)}else if(F=="o19"||F=="o20")c.length%2!=0&&!u&&(d=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0,v+=h+7>>3;else if(F=="o21")c.length>2&&!u&&(d=c.shift()+o.nominalWidthX,u=!0),m+=c.pop(),g+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,g,m),p=!0;else if(F=="o22")c.length>1&&!u&&(d=c.shift()+o.nominalWidthX,u=!0),g+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,g,m),p=!0;else if(F=="o25"){for(;c.length>6;)g+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,g,m);f=g+c.shift(),y=m+c.shift(),_=f+c.shift(),x=y+c.shift(),g=_+c.shift(),m=x+c.shift(),e.U.P.curveTo(l,f,y,_,x,g,m)}else if(F=="o26")for(c.length%2&&(g+=c.shift());c.length>0;)f=g,y=m+c.shift(),g=_=f+c.shift(),m=(x=y+c.shift())+c.shift(),e.U.P.curveTo(l,f,y,_,x,g,m);else if(F=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)y=m,_=(f=g+c.shift())+c.shift(),x=y+c.shift(),g=_+c.shift(),m=x,e.U.P.curveTo(l,f,y,_,x,g,m);else if(F=="o10"||F=="o29"){var Y=F=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var $=c.pop(),ae=Y.Subrs[$+Y.Bias];i.x=g,i.y=m,i.nStems=h,i.haveWidth=u,i.width=d,i.open=p,e.U._drawCFF(ae,i,s,o,l),g=i.x,m=i.y,h=i.nStems,u=i.haveWidth,d=i.width,p=i.open}}else if(F=="o30"||F=="o31"){var Q=c.length,te=(X=0,F=="o31");for(X+=Q-(U=-3&Q);X<U;)te?(y=m,_=(f=g+c.shift())+c.shift(),m=(x=y+c.shift())+c.shift(),U-X==5?(g=_+c.shift(),X++):g=_,te=!1):(f=g,y=m+c.shift(),_=f+c.shift(),x=y+c.shift(),g=_+c.shift(),U-X==5?(m=x+c.shift(),X++):m=x,te=!0),e.U.P.curveTo(l,f,y,_,x,g,m),X+=4}else{if((F+"").charAt(0)=="o")throw console.debug("Unknown operation: "+F,r),F;c.push(F)}}}i.x=g,i.y=m,i.nStems=h,i.haveWidth=u,i.width=d,i.open=p};var t=e,n={Typr:t};return a.Typr=t,a.default=n,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}function Zx(){return function(a){var e=Uint8Array,t=Uint16Array,n=Uint32Array,r=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(F,U){for(var N=new t(31),z=0;z<31;++z)N[z]=U+=1<<F[z-1];var H=new n(N[30]);for(z=1;z<30;++z)for(var X=N[z];X<N[z+1];++X)H[X]=X-N[z]<<5|z;return[N,H]},l=o(r,2),c=l[0],h=l[1];c[28]=258,h[258]=28;for(var u=o(i,0)[0],d=new t(32768),p=0;p<32768;++p){var v=(43690&p)>>>1|(21845&p)<<1;v=(61680&(v=(52428&v)>>>2|(13107&v)<<2))>>>4|(3855&v)<<4,d[p]=((65280&v)>>>8|(255&v)<<8)>>>1}var g=function(F,U,N){for(var z=F.length,H=0,X=new t(U);H<z;++H)++X[F[H]-1];var V,G=new t(U);for(H=0;H<U;++H)G[H]=G[H-1]+X[H-1]<<1;if(N){V=new t(1<<U);var k=15-U;for(H=0;H<z;++H)if(F[H])for(var w=H<<4|F[H],D=U-F[H],q=G[F[H]-1]++<<D,Y=q|(1<<D)-1;q<=Y;++q)V[d[q]>>>k]=w}else for(V=new t(z),H=0;H<z;++H)F[H]&&(V[H]=d[G[F[H]-1]++]>>>15-F[H]);return V},m=new e(288);for(p=0;p<144;++p)m[p]=8;for(p=144;p<256;++p)m[p]=9;for(p=256;p<280;++p)m[p]=7;for(p=280;p<288;++p)m[p]=8;var f=new e(32);for(p=0;p<32;++p)f[p]=5;var y=g(m,9,1),_=g(f,5,1),x=function(F){for(var U=F[0],N=1;N<F.length;++N)F[N]>U&&(U=F[N]);return U},S=function(F,U,N){var z=U/8|0;return(F[z]|F[z+1]<<8)>>(7&U)&N},b=function(F,U){var N=U/8|0;return(F[N]|F[N+1]<<8|F[N+2]<<16)>>(7&U)},R=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],O=function(F,U,N){var z=new Error(U||R[F]);if(z.code=F,Error.captureStackTrace&&Error.captureStackTrace(z,O),!N)throw z;return z},M=function(F,U,N){var z=F.length;if(!z||N&&!N.l&&z<5)return U||new e(0);var H=!U||N,X=!N||N.i;N||(N={}),U||(U=new e(3*z));var V,G=function(ge){var Ee=U.length;if(ge>Ee){var Le=new e(Math.max(2*Ee,ge));Le.set(U),U=Le}},k=N.f||0,w=N.p||0,D=N.b||0,q=N.l,Y=N.d,$=N.m,ae=N.n,Q=8*z;do{if(!q){N.f=k=S(F,w,1);var te=S(F,w+1,3);if(w+=3,!te){var pe=F[(xe=((V=w)/8|0)+(7&V&&1)+4)-4]|F[xe-3]<<8,Ue=xe+pe;if(Ue>z){X&&O(0);break}H&&G(D+pe),U.set(F.subarray(xe,Ue),D),N.b=D+=pe,N.p=w=8*Ue;continue}if(te==1)q=y,Y=_,$=9,ae=5;else if(te==2){var ce=S(F,w,31)+257,P=S(F,w+10,15)+4,Ne=ce+S(F,w+5,31)+1;w+=14;for(var be=new e(Ne),Me=new e(19),we=0;we<P;++we)Me[s[we]]=S(F,w+3*we,7);w+=3*P;var Oe=x(Me),le=(1<<Oe)-1,fe=g(Me,Oe,1);for(we=0;we<Ne;){var xe,se=fe[S(F,w,le)];if(w+=15&se,(xe=se>>>4)<16)be[we++]=xe;else{var Pe=0,E=0;for(xe==16?(E=3+S(F,w,3),w+=2,Pe=be[we-1]):xe==17?(E=3+S(F,w,7),w+=3):xe==18&&(E=11+S(F,w,127),w+=7);E--;)be[we++]=Pe}}var T=be.subarray(0,ce),I=be.subarray(ce);$=x(T),ae=x(I),q=g(T,$,1),Y=g(I,ae,1)}else O(1);if(w>Q){X&&O(0);break}}H&&G(D+131072);for(var oe=(1<<$)-1,re=(1<<ae)-1,ee=w;;ee=w){var me=(Pe=q[b(F,w)&oe])>>>4;if((w+=15&Pe)>Q){X&&O(0);break}if(Pe||O(2),me<256)U[D++]=me;else{if(me==256){ee=w,q=null;break}var he=me-254;if(me>264){var W=r[we=me-257];he=S(F,w,(1<<W)-1)+c[we],w+=W}var Ae=Y[b(F,w)&re],Te=Ae>>>4;if(Ae||O(3),w+=15&Ae,I=u[Te],Te>3&&(W=i[Te],I+=b(F,w)&(1<<W)-1,w+=W),w>Q){X&&O(0);break}H&&G(D+131072);for(var _e=D+he;D<_e;D+=4)U[D]=U[D-I],U[D+1]=U[D+1-I],U[D+2]=U[D+2-I],U[D+3]=U[D+3-I];D=_e}}N.l=q,N.p=ee,N.b=D,q&&(k=1,N.m=$,N.d=Y,N.n=ae)}while(!k);return D==U.length?U:function(ge,Ee,Le){(Ee==null||Ee<0)&&(Ee=0),(Le==null||Le>ge.length)&&(Le=ge.length);var De=new(ge instanceof t?t:ge instanceof n?n:e)(Le-Ee);return De.set(ge.subarray(Ee,Le)),De}(U,0,D)},A=new e(0),K=typeof TextDecoder<"u"&&new TextDecoder;try{K.decode(A,{stream:!0})}catch{}return a.convert_streams=function(F){var U=new DataView(F),N=0;function z(){var ce=U.getUint16(N);return N+=2,ce}function H(){var ce=U.getUint32(N);return N+=4,ce}function X(ce){pe.setUint16(Ue,ce),Ue+=2}function V(ce){pe.setUint32(Ue,ce),Ue+=4}for(var G={signature:H(),flavor:H(),length:H(),numTables:z(),reserved:z(),totalSfntSize:H(),majorVersion:z(),minorVersion:z(),metaOffset:H(),metaLength:H(),metaOrigLength:H(),privOffset:H(),privLength:H()},k=0;Math.pow(2,k)<=G.numTables;)k++;k--;for(var w=16*Math.pow(2,k),D=16*G.numTables-w,q=12,Y=[],$=0;$<G.numTables;$++)Y.push({tag:H(),offset:H(),compLength:H(),origLength:H(),origChecksum:H()}),q+=16;var ae,Q=new Uint8Array(12+16*Y.length+Y.reduce(function(ce,P){return ce+P.origLength+4},0)),te=Q.buffer,pe=new DataView(te),Ue=0;return V(G.flavor),X(G.numTables),X(w),X(k),X(D),Y.forEach(function(ce){V(ce.tag),V(ce.origChecksum),V(q),V(ce.origLength),ce.outOffset=q,(q+=ce.origLength)%4!=0&&(q+=4-q%4)}),Y.forEach(function(ce){var P,Ne=F.slice(ce.offset,ce.offset+ce.compLength);if(ce.compLength!=ce.origLength){var be=new Uint8Array(ce.origLength);P=new Uint8Array(Ne,2),M(P,be)}else be=new Uint8Array(Ne);Q.set(be,ce.outOffset);var Me=0;(q=ce.outOffset+ce.origLength)%4!=0&&(Me=4-q%4),Q.set(new Uint8Array(Me).buffer,ce.outOffset+ce.origLength),ae=q+Me}),te.slice(0,ae)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function Jx(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},r=1,i=2,s=4,o=8,l=16,c=32;let h;function u(S){if(!h){const b={R:i,L:r,D:s,C:l,U:c,T:o};h=new Map;for(let R in n){let O=0;n[R].split(",").forEach(M=>{let[A,K]=M.split("+");A=parseInt(A,36),K=K?parseInt(K,36):0,h.set(O+=A,b[R]);for(let F=K;F--;)h.set(++O,b[R])})}}return h.get(S)||c}const d=1,p=2,v=3,g=4,m=[null,"isol","init","fina","medi"];function f(S){const b=new Uint8Array(S.length);let R=c,O=d,M=-1;for(let A=0;A<S.length;A++){const K=S.codePointAt(A);let F=u(K)|0,U=d;F&o||(R&(r|s|l)?F&(i|s|l)?(U=v,(O===d||O===v)&&b[M]++):F&(r|c)&&(O===p||O===g)&&b[M]--:R&(i|c)&&(O===p||O===g)&&b[M]--,O=b[A]=U,R=F,M=A,K>65535&&A++)}return b}function y(S,b){const R=[];for(let M=0;M<b.length;M++){const A=b.codePointAt(M);A>65535&&M++,R.push(a.U.codeToGlyph(S,A))}const O=S.GSUB;if(O){const{lookupList:M,featureList:A}=O;let K;const F=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,U=[];A.forEach(N=>{if(F.test(N.tag))for(let z=0;z<N.tab.length;z++){if(U[N.tab[z]])continue;U[N.tab[z]]=!0;const H=M[N.tab[z]],X=/^(isol|init|fina|medi)$/.test(N.tag);X&&!K&&(K=f(b));for(let V=0;V<R.length;V++)(!K||!X||m[K[V]]===N.tag)&&a.U._applySubs(R,V,H,M)}})}return R}function _(...S){for(let b=0;b<S.length;b++)if(typeof S[b]=="number")return S[b]}function x(S){const b=Object.create(null),R=S["OS/2"],O=S.hhea,M=S.head.unitsPerEm,A=_(R&&R.sTypoAscender,O&&O.ascender,M),K={unitsPerEm:M,ascender:A,descender:_(R&&R.sTypoDescender,O&&O.descender,0),capHeight:_(R&&R.sCapHeight,A),xHeight:_(R&&R.sxHeight,A),lineGap:_(R&&R.sTypoLineGap,O&&O.lineGap),supportsCodePoint(F){return a.U.codeToGlyph(S,F)>0},forEachGlyph(F,U,N,z){let H=0;const X=1/K.unitsPerEm*U,V=y(S,F);let G=0,k=-1;return V.forEach((w,D)=>{if(w!==-1){let q=b[w];if(!q){const{cmds:Y,crds:$}=a.U.glyphToPath(S,w);let ae="",Q=0;for(let P=0,Ne=Y.length;P<Ne;P++){const be=t[Y[P]];ae+=Y[P];for(let Me=1;Me<=be;Me++)ae+=(Me>1?",":"")+$[Q++]}let te,pe,Ue,ce;if($.length){te=pe=1/0,Ue=ce=-1/0;for(let P=0,Ne=$.length;P<Ne;P+=2){let be=$[P],Me=$[P+1];be<te&&(te=be),Me<pe&&(pe=Me),be>Ue&&(Ue=be),Me>ce&&(ce=Me)}}else te=Ue=pe=ce=0;q=b[w]={index:w,advanceWidth:S.hmtx.aWidth[w],xMin:te,yMin:pe,xMax:Ue,yMax:ce,path:ae,pathCommandCount:Y.length}}k!==-1&&(H+=a.U.getPairAdjustment(S,k,w)*X),z.call(null,q,H,G),q.advanceWidth&&(H+=q.advanceWidth*X),N&&(H+=N*U),k=w}G+=F.codePointAt(G)>65535?2:1}),H}};return K}return function(S){const b=new Uint8Array(S,0,4),R=a._bin.readASCII(b,0,4);if(R==="wOFF")S=e(S);else if(R==="wOF2")throw new Error("woff2 fonts not supported");return x(a.parse(S)[0])}}const Qx=Tn({name:"Typr Font Parser",dependencies:[$x,Zx,Jx],init(a,e,t){const n=a(),r=e();return t(n,r)}});function ey(){return function(a){class e{constructor(){this.buckets=new Map}add(x){const S=x>>5;this.buckets.set(S,(this.buckets.get(S)||0)|1<<(31&x))}has(x){const S=this.buckets.get(x>>5);return S!==void 0&&(S&1<<(31&x))!=0}serialize(){const x=[];return this.buckets.forEach((S,b)=>{x.push(`${(+b).toString(36)}:${S.toString(36)}`)}),x.join(",")}deserialize(x){this.buckets.clear(),x.split(",").forEach(S=>{const b=S.split(":");this.buckets.set(parseInt(b[0],36),parseInt(b[1],36))})}}const t=Math.pow(2,8),n=t-1,r=~n;function i(_){const x=function(b){return b&r}(_).toString(16),S=function(b){return(b&r)+t-1}(_).toString(16);return`codepoint-index/plane${_>>16}/${x}-${S}.json`}function s(_,x){const S=_&n;let b=x.codePointAt(S/6|0);return b=(b||48)-48,(b&1<<S%6)!=0}function o(_,x){var S;(S=_,S.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(b=>b.split("-").map(R=>parseInt(R.trim(),16)))).forEach(([b,R=b])=>{x(b,R)})}function l(_,x){o(_,(S,b)=>{for(let R=S;R<=b;R++)x(R)})}let c={},h={};const u=new WeakMap;function d(_){let x=u.get(_);return x||(x=new e,l(_.ranges,S=>x.add(S)),u.set(_,x)),x}const p=new Map;function v(_){let x=p.get(_);return x||(x=fetch(_).then(S=>S.json()),p.set(_,x)),x}function g(_,x,S){return _[x]?x:_[S]?S:function(b){for(const R in b)return R}(_)}function m(_,x){let S=x;if(!_.includes(S)){S=1/0;for(let b=0;b<_.length;b++)Math.abs(_[b]-x)<Math.abs(S-x)&&(S=_[b])}return S}let f;function y(_){return f||(f=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",x=>{f.add(x)})),f.has(_)}return a.CodePointSet=e,a.clearCache=function(){c={},h={}},a.getFontsForString=function(_,x={}){const{lang:S="en",category:b="sans-serif",style:R="normal",weight:O=400}=x,M=(x.dataUrl||"https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v0.3.2/packages/data").replace(/\/$/g,""),A=new Map,K=new Uint8Array(_.length),F={},U={},N=new Array(_.length),z=new Map;for(let H=0;H<_.length;H++){const X=_.codePointAt(H),V=i(X);N[H]=V,c[V]||z.has(V)||z.set(V,v(`${M}/${V}`).then(G=>{c[V]=G})),X>65535&&H++}return Promise.all(z.values()).then(()=>{z.clear();for(let H=0;H<_.length;H++){const X=_.codePointAt(H);let V=null;const G=c[N[H]];e:for(let k in G){let w=U[k];if(w===void 0&&(w=U[k]=new RegExp(k).test(S)),w){for(let D in G[k])if(s(X,G[k][D])){V=D;break e}}}V||(console.debug(`No font coverage for U+${X.toString(16)}`),V="latin"),N[H]=V,h[V]||z.has(V)||z.set(V,v(`${M}/font-meta/${V}.json`).then(k=>{h[V]=k})),X>65535&&H++}return Promise.all(z.values())}).then(()=>{var H;let X=null;for(let V=0;V<_.length;V++){const G=_.codePointAt(V);if(X&&(y(G)||d(X).has(G)))K[V]=K[V-1];else{X=h[N[V]];let k=F[X.id];if(!k){const{typeforms:D}=X,q=g(D,b,"sans-serif"),Y=g(D[q],R,"normal"),$=m((H=D[q])===null||H===void 0?void 0:H[Y],O);k=F[X.id]=`${M}/font-files/${X.id}/${q}.${Y}.${$}.woff`}let w=A.get(k);w==null&&(w=A.size,A.set(k,w)),K[V]=w}G>65535&&(V++,K[V]=K[V-1])}return{fontUrls:Array.from(A.keys()),chars:K}})},Object.defineProperty(a,"__esModule",{value:!0}),a}({})}function ty(a,e){const t=Object.create(null),n=Object.create(null);function r(s,o){const l=c=>{console.error(`Failure loading font ${s}`,c)};try{const c=new XMLHttpRequest;c.open("get",s,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const h=a(c.response);h.src=s,o(h)}catch(h){l(h)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(s,o){let l=t[s];l?o(l):n[s]?n[s].push(o):(n[s]=[o],r(s,c=>{c.src=s,t[s]=c,n[s].forEach(h=>h(c)),delete n[s]}))}return function(s,o,{lang:l,fonts:c=[],style:h="normal",weight:u="normal"}={}){const d=new Uint8Array(s.length),p=[];s.length||f();const v=new Map,g=[];if(h!=="italic"&&(h="normal"),typeof u!="number"&&(u=u==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(_=>!_.lang||_.lang.test(l)).reverse(),c.length){let _=0;(function x(S=0){for(let b=S,R=s.length;b<R;b++){const O=s.codePointAt(b);if(_===1&&p[d[b-1]].supportsCodePoint(O)||/\s/.test(s[b]))d[b]=d[b-1],_===2&&(g[g.length-1][1]=b);else for(let M=d[b],A=c.length;M<=A;M++)if(M===A){const K=_===2?g[g.length-1]:g[g.length]=[b,b];K[1]=b,_=2}else{d[b]=M;const{src:K,unicodeRange:F}=c[M];if(!F||y(O,F)){const U=t[K];if(!U){i(K,()=>{x(b)});return}if(U.supportsCodePoint(O)){let N=v.get(U);typeof N!="number"&&(N=p.length,p.push(U),v.set(U,N)),d[b]=N,_=1;break}}}O>65535&&b+1<R&&(d[b+1]=d[b],b++,_===2&&(g[g.length-1][1]=b))}m()})()}else g.push([0,s.length-1]),m();function m(){if(g.length){const _=g.map(x=>s.substring(x[0],x[1]+1)).join(`
`);e.getFontsForString(_,{lang:l,style:h,weight:u}).then(({fontUrls:x,chars:S})=>{const b=p.length;let R=0;g.forEach(M=>{for(let A=0,K=M[1]-M[0];A<=K;A++)d[M[0]+A]=S[R++]+b;R++});let O=0;x.forEach((M,A)=>{i(M,K=>{p[A+b]=K,++O===x.length&&f()})})})}else f()}function f(){o({chars:d,fonts:p})}function y(_,x){for(let S=0;S<x.length;S++){const[b,R=b]=x[S];if(b<=_&&_<=R)return!0}return!1}}}const ry=Tn({name:"FontResolver",dependencies:[ty,Qx,ey],init(a,e,t){return a(e,t())}});function iy(a,e){const t=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function i({text:p,lang:v,fonts:g,style:m,weight:f,preResolvedFonts:y},_){const x=({chars:S,fonts:b})=>{let R,O;const M=[];for(let A=0;A<S.length;A++)S[A]!==O?(O=S[A],M.push(R={start:A,end:A,fontObj:b[S[A]]})):R.end=A;_(M)};y?x(y):a(p,x,{lang:v,fonts:g,style:m,weight:f})}function s({text:p="",font:v,lang:g="en",sdfGlyphSize:m=64,fontSize:f=400,fontWeight:y=1,fontStyle:_="normal",letterSpacing:x=0,lineHeight:S="normal",maxWidth:b=1/0,direction:R,textAlign:O="left",textIndent:M=0,whiteSpace:A="normal",overflowWrap:K="normal",anchorX:F=0,anchorY:U=0,metricsOnly:N=!1,preResolvedFonts:z=null,includeCaretPositions:H=!1,chunkedBoundsSize:X=8192,colorRanges:V=null},G){const k=h(),w={fontLoad:0,typesetting:0};p.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),p=p.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),f=+f,x=+x,b=+b,S=S||"normal",M=+M,i({text:p,lang:g,style:_,weight:y,fonts:typeof v=="string"?[{src:v}]:v,preResolvedFonts:z},D=>{w.fontLoad=h()-k;const q=isFinite(b);let Y=null,$=null,ae=null,Q=null,te=null,pe=null,Ue=null,ce=null,P=0,Ne=0,be=A!=="nowrap";const Me=new Map,we=h();let Oe=M,le=0,fe=new u;const xe=[fe];D.forEach(I=>{const{fontObj:oe}=I,{ascender:re,descender:ee,unitsPerEm:me,lineGap:he,capHeight:W,xHeight:Ae}=oe;let Te=Me.get(oe);if(!Te){const De=f/me,L=S==="normal"?(re-ee+he)*De:S*f,ve=(L-(re-ee)*De)/2,j=Math.min(L,(re-ee)*De),de=(re+ee)/2*De+j/2;Te={index:Me.size,src:oe.src,fontObj:oe,fontSizeMult:De,unitsPerEm:me,ascender:re*De,descender:ee*De,capHeight:W*De,xHeight:Ae*De,lineHeight:L,baseline:-ve-re*De,caretTop:(re+ee)/2*De+j/2,caretBottom:de-j},Me.set(oe,Te)}const{fontSizeMult:_e}=Te,ge=p.slice(I.start,I.end+1);let Ee,Le;oe.forEachGlyph(ge,f,x,(De,L,ve)=>{L+=le,ve+=I.start,Ee=L,Le=De;const j=p.charAt(ve),de=De.advanceWidth*_e,Se=fe.count;let He;if("isEmpty"in De||(De.isWhitespace=!!j&&new RegExp(n).test(j),De.canBreakAfter=!!j&&r.test(j),De.isEmpty=De.xMin===De.xMax||De.yMin===De.yMax||t.test(j)),!De.isWhitespace&&!De.isEmpty&&Ne++,be&&q&&!De.isWhitespace&&L+de+Oe>b&&Se){if(fe.glyphAt(Se-1).glyphObj.canBreakAfter)He=new u,Oe=-L;else for(let Be=Se;Be--;)if(Be===0&&K==="break-word"){He=new u,Oe=-L;break}else if(fe.glyphAt(Be).glyphObj.canBreakAfter){He=fe.splitAt(Be+1);const rt=He.glyphAt(0).x;Oe-=rt;for(let Ye=He.count;Ye--;)He.glyphAt(Ye).x-=rt;break}He&&(fe.isSoftWrapped=!0,fe=He,xe.push(fe),P=b)}let Ie=fe.glyphAt(fe.count);Ie.glyphObj=De,Ie.x=L+Oe,Ie.width=de,Ie.charIndex=ve,Ie.fontData=Te,j===`
`&&(fe=new u,xe.push(fe),Oe=-(L+de+x*f)+M)}),le=Ee+Le.advanceWidth*_e+x*f});let se=0;xe.forEach(I=>{let oe=!0;for(let re=I.count;re--;){const ee=I.glyphAt(re);oe&&!ee.glyphObj.isWhitespace&&(I.width=ee.x+ee.width,I.width>P&&(P=I.width),oe=!1);let{lineHeight:me,capHeight:he,xHeight:W,baseline:Ae}=ee.fontData;me>I.lineHeight&&(I.lineHeight=me);const Te=Ae-I.baseline;Te<0&&(I.baseline+=Te,I.cap+=Te,I.ex+=Te),I.cap=Math.max(I.cap,I.baseline+he),I.ex=Math.max(I.ex,I.baseline+W)}I.baseline-=se,I.cap-=se,I.ex-=se,se+=I.lineHeight});let Pe=0,E=0;if(F&&(typeof F=="number"?Pe=-F:typeof F=="string"&&(Pe=-P*(F==="left"?0:F==="center"?.5:F==="right"?1:l(F)))),U&&(typeof U=="number"?E=-U:typeof U=="string"&&(E=U==="top"?0:U==="top-baseline"?-xe[0].baseline:U==="top-cap"?-xe[0].cap:U==="top-ex"?-xe[0].ex:U==="middle"?se/2:U==="bottom"?se:U==="bottom-baseline"?xe[xe.length-1].baseline:l(U)*se)),!N){const I=e.getEmbeddingLevels(p,R);Y=new Uint16Array(Ne),$=new Uint8Array(Ne),ae=new Float32Array(Ne*2),Q={},Ue=[1/0,1/0,-1/0,-1/0],ce=[],H&&(pe=new Float32Array(p.length*4)),V&&(te=new Uint8Array(Ne*3));let oe=0,re=-1,ee=-1,me,he;if(xe.forEach((W,Ae)=>{let{count:Te,width:_e}=W;if(Te>0){let ge=0;for(let j=Te;j--&&W.glyphAt(j).glyphObj.isWhitespace;)ge++;let Ee=0,Le=0;if(O==="center")Ee=(P-_e)/2;else if(O==="right")Ee=P-_e;else if(O==="justify"&&W.isSoftWrapped){let j=0;for(let de=Te-ge;de--;)W.glyphAt(de).glyphObj.isWhitespace&&j++;Le=(P-_e)/j}if(Le||Ee){let j=0;for(let de=0;de<Te;de++){let Se=W.glyphAt(de);const He=Se.glyphObj;Se.x+=Ee+j,Le!==0&&He.isWhitespace&&de<Te-ge&&(j+=Le,Se.width+=Le)}}const De=e.getReorderSegments(p,I,W.glyphAt(0).charIndex,W.glyphAt(W.count-1).charIndex);for(let j=0;j<De.length;j++){const[de,Se]=De[j];let He=1/0,Ie=-1/0;for(let Be=0;Be<Te;Be++)if(W.glyphAt(Be).charIndex>=de){let rt=Be,Ye=Be;for(;Ye<Te;Ye++){let at=W.glyphAt(Ye);if(at.charIndex>Se)break;Ye<Te-ge&&(He=Math.min(He,at.x),Ie=Math.max(Ie,at.x+at.width))}for(let at=rt;at<Ye;at++){const ot=W.glyphAt(at);ot.x=Ie-(ot.x+ot.width-He)}break}}let L;const ve=j=>L=j;for(let j=0;j<Te;j++){const de=W.glyphAt(j);L=de.glyphObj;const Se=L.index,He=I.levels[de.charIndex]&1;if(He){const Ie=e.getMirroredCharacter(p[de.charIndex]);Ie&&de.fontData.fontObj.forEachGlyph(Ie,0,0,ve)}if(H){const{charIndex:Ie,fontData:Be}=de,rt=de.x+Pe,Ye=de.x+de.width+Pe;pe[Ie*4]=He?Ye:rt,pe[Ie*4+1]=He?rt:Ye,pe[Ie*4+2]=W.baseline+Be.caretBottom+E,pe[Ie*4+3]=W.baseline+Be.caretTop+E;const at=Ie-re;at>1&&c(pe,re,at),re=Ie}if(V){const{charIndex:Ie}=de;for(;Ie>ee;)ee++,V.hasOwnProperty(ee)&&(he=V[ee])}if(!L.isWhitespace&&!L.isEmpty){const Ie=oe++,{fontSizeMult:Be,src:rt,index:Ye}=de.fontData,at=Q[rt]||(Q[rt]={});at[Se]||(at[Se]={path:L.path,pathBounds:[L.xMin,L.yMin,L.xMax,L.yMax]});const ot=de.x+Pe,Jr=W.baseline+E;ae[Ie*2]=ot,ae[Ie*2+1]=Jr;const cr=ot+L.xMin*Be,hr=Jr+L.yMin*Be,kt=ot+L.xMax*Be,ur=Jr+L.yMax*Be;cr<Ue[0]&&(Ue[0]=cr),hr<Ue[1]&&(Ue[1]=hr),kt>Ue[2]&&(Ue[2]=kt),ur>Ue[3]&&(Ue[3]=ur),Ie%X===0&&(me={start:Ie,end:Ie,rect:[1/0,1/0,-1/0,-1/0]},ce.push(me)),me.end++;const Dt=me.rect;if(cr<Dt[0]&&(Dt[0]=cr),hr<Dt[1]&&(Dt[1]=hr),kt>Dt[2]&&(Dt[2]=kt),ur>Dt[3]&&(Dt[3]=ur),Y[Ie]=Se,$[Ie]=Ye,V){const dr=Ie*3;te[dr]=he>>16&255,te[dr+1]=he>>8&255,te[dr+2]=he&255}}}}}),pe){const W=p.length-re;W>1&&c(pe,re,W)}}const T=[];Me.forEach(({index:I,src:oe,unitsPerEm:re,ascender:ee,descender:me,lineHeight:he,capHeight:W,xHeight:Ae})=>{T[I]={src:oe,unitsPerEm:re,ascender:ee,descender:me,lineHeight:he,capHeight:W,xHeight:Ae}}),w.typesetting=h()-we,G({glyphIds:Y,glyphFontIndices:$,glyphPositions:ae,glyphData:Q,fontData:T,caretPositions:pe,glyphColors:te,chunkedBounds:ce,fontSize:f,topBaseline:E+xe[0].baseline,blockBounds:[Pe,E-se,Pe+P,E],visibleBounds:Ue,timings:w})})}function o(p,v){s({...p,metricsOnly:!0},g=>{const[m,f,y,_]=g.blockBounds;v({width:y-m,height:_-f})})}function l(p){let v=p.match(/^([\d.]+)%$/),g=v?parseFloat(v[1]):NaN;return isNaN(g)?0:g/100}function c(p,v,g){const m=p[v*4],f=p[v*4+1],y=p[v*4+2],_=p[v*4+3],x=(f-m)/g;for(let S=0;S<g;S++){const b=(v+S)*4;p[b]=m+x*S,p[b+1]=m+x*(S+1),p[b+2]=y,p[b+3]=_}}function h(){return(self.performance||Date).now()}function u(){this.data=[]}const d=["glyphObj","x","width","charIndex","fontData"];return u.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(p){let v=u.flyweight;return v.data=this.data,v.index=p,v},splitAt(p){let v=new u;return v.data=this.data.splice(p*d.length),v}},u.flyweight=d.reduce((p,v,g,m)=>(Object.defineProperty(p,v,{get(){return this.data[this.index*d.length+g]},set(f){this.data[this.index*d.length+g]=f}}),p),{data:null,index:0}),{typeset:s,measure:o}}const wi=()=>(self.performance||Date).now(),ns=uu();let vu;function ny(a,e,t,n,r,i,s,o,l,c,h=!0){return h?sy(a,e,t,n,r,i,s,o,l,c).then(null,u=>(vu||(console.warn("WebGL SDF generation failed, falling back to JS",u),vu=!0),yu(a,e,t,n,r,i,s,o,l,c))):yu(a,e,t,n,r,i,s,o,l,c)}const as=[],ay=5;let jo=0;function _u(){const a=wi();for(;as.length&&wi()-a<ay;)as.shift()();jo=as.length?setTimeout(_u,0):0}const sy=(...a)=>new Promise((e,t)=>{as.push(()=>{const n=wi();try{ns.webgl.generateIntoCanvas(...a),e({timing:wi()-n})}catch(r){t(r)}}),jo||(jo=setTimeout(_u,0))}),oy=4,ly=2e3,xu={};let cy=0;function yu(a,e,t,n,r,i,s,o,l,c){const h="TroikaTextSDFGenerator_JS_"+cy++%oy;let u=xu[h];return u||(u=xu[h]={workerModule:Tn({name:h,workerId:h,dependencies:[uu,wi],init(d,p){const v=d().javascript.generate;return function(...g){const m=p();return{textureData:v(...g),timing:p()-m}}},getTransferables(d){return[d.textureData.buffer]}}),requests:0,idleTimer:null}),u.requests++,clearTimeout(u.idleTimer),u.workerModule(a,e,t,n,r,i).then(({textureData:d,timing:p})=>{const v=wi(),g=new Uint8Array(d.length*4);for(let m=0;m<d.length;m++)g[m*4+c]=d[m];return ns.webglUtils.renderImageData(s,g,o,l,a,e,1<<3-c),p+=wi()-v,--u.requests===0&&(u.idleTimer=setTimeout(()=>{zx(h)},ly)),{timing:p}})}function hy(a){a._warm||(ns.webgl.isSupported(a),a._warm=!0)}const uy=ns.webglUtils.resizeWebGLCanvasWithoutClearing,Qn={defaultFontURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},dy=new Ge;function bn(){return(self.performance||Date).now()}const Su=Object.create(null);function py(a,e){a=my({},a);const t=bn(),{defaultFontURL:n}=Qn,r=[];if(n&&r.push({label:"default",src:Tu(n)}),a.font&&r.push({label:"user",src:Tu(a.font)}),a.font=r,a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||Qn.sdfGlyphSize,a.colorRanges!=null){let d={};for(let p in a.colorRanges)if(a.colorRanges.hasOwnProperty(p)){let v=a.colorRanges[p];typeof v!="number"&&(v=dy.set(v).getHex()),d[p]=v}a.colorRanges=d}Object.freeze(a);const{textureWidth:i,sdfExponent:s}=Qn,{sdfGlyphSize:o}=a,l=i/o*4;let c=Su[o];if(!c){const d=document.createElement("canvas");d.width=i,d.height=o*256/l,c=Su[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:d,sdfTexture:new St(d,void 0,void 0,void 0,Rt,Rt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,fy(c)}const{sdfTexture:h,sdfCanvas:u}=c;vy(a).then(d=>{const{glyphIds:p,glyphFontIndices:v,fontData:g,glyphPositions:m,fontSize:f,timings:y}=d,_=[],x=new Float32Array(p.length*4);let S=0,b=0;const R=bn(),O=g.map(U=>{let N=c.glyphsByFont.get(U.src);return N||c.glyphsByFont.set(U.src,N=new Map),N});p.forEach((U,N)=>{const z=v[N],{src:H,unitsPerEm:X}=g[z];let V=O[z].get(U);if(!V){const{path:q,pathBounds:Y}=d.glyphData[H][U],$=Math.max(Y[2]-Y[0],Y[3]-Y[1])/o*(Qn.sdfMargin*o+.5),ae=c.glyphCount++,Q=[Y[0]-$,Y[1]-$,Y[2]+$,Y[3]+$];O[z].set(U,V={path:q,atlasIndex:ae,sdfViewBox:Q}),_.push(V)}const{sdfViewBox:G}=V,k=m[b++],w=m[b++],D=f/X;x[S++]=k+G[0]*D,x[S++]=w+G[1]*D,x[S++]=k+G[2]*D,x[S++]=w+G[3]*D,p[N]=V.atlasIndex}),y.quads=(y.quads||0)+(bn()-R);const M=bn();y.sdf={};const A=u.height,K=Math.ceil(c.glyphCount/l),F=Math.pow(2,Math.ceil(Math.log2(K*o)));F>A&&(console.info(`Increasing SDF texture size ${A}->${F}`),uy(u,i,F),h.dispose()),Promise.all(_.map(U=>Mu(U,c,a.gpuAccelerateSDF).then(({timing:N})=>{y.sdf[U.atlasIndex]=N}))).then(()=>{_.length&&!c.contextLost&&(bu(c),h.needsUpdate=!0),y.sdfTotal=bn()-M,y.total=bn()-t,e(Object.freeze({parameters:a,sdfTexture:h,sdfGlyphSize:o,sdfExponent:s,glyphBounds:x,glyphAtlasIndices:p,glyphColors:d.glyphColors,caretPositions:d.caretPositions,chunkedBounds:d.chunkedBounds,ascender:d.ascender,descender:d.descender,lineHeight:d.lineHeight,capHeight:d.capHeight,xHeight:d.xHeight,topBaseline:d.topBaseline,blockBounds:d.blockBounds,visibleBounds:d.visibleBounds,timings:d.timings}))})}),Promise.resolve().then(()=>{c.contextLost||hy(u)})}function Mu({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:r,contextLost:i},s){if(i)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=Qn,c=Math.max(t[2]-t[0],t[3]-t[1]),h=Math.floor(e/4),u=h%(o/n)*n,d=Math.floor(h/(o/n))*n,p=e%4;return ny(n,n,a,t,c,l,r,u,d,p,s)}function fy(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const n=[];a.glyphsByFont.forEach(r=>{r.forEach(i=>{n.push(Mu(i,a,!0))})}),Promise.all(n).then(()=>{bu(a),a.sdfTexture.needsUpdate=!0})})}function my(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let ss;function Tu(a){return ss||(ss=typeof document>"u"?{}:document.createElement("a")),ss.href=a,ss.href}function bu(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:n,height:r}=e,i=a.sdfCanvas.getContext("webgl");let s=t.image.data;(!s||s.length!==n*r*4)&&(s=new Uint8Array(n*r*4),t.image={width:n,height:r,data:s},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,n,r,i.RGBA,i.UNSIGNED_BYTE,s)}}const gy=Tn({name:"Typesetter",dependencies:[iy,ry,Hx],init(a,e,t){return a(e,t())}}),vy=Tn({name:"Typesetter",dependencies:[gy],init(a){return function(e){return new Promise(t=>{a.typeset(e,t)})}},getTransferables(a){const e=[];for(let t in a)a[t]&&a[t].buffer&&e.push(a[t].buffer);return e}}),Eu={};function _y(a){let e=Eu[a];if(!e){const t=new rn(1,1,a,a),n=t.clone(),r=t.attributes,i=n.attributes,s=new Pt,o=r.uv.count;for(let l=0;l<o;l++)i.position.array[l*3]*=-1,i.normal.array[l*3+2]*=-1;["position","normal","uv"].forEach(l=>{s.setAttribute(l,new Nt([...r[l].array,...i[l].array],r[l].itemSize))}),s.setIndex([...t.index.array,...n.index.array.map(l=>l+o)]),s.translate(.5,.5,0),e=Eu[a]=s}return e}const xy="aTroikaGlyphBounds",wu="aTroikaGlyphIndex",yy="aTroikaGlyphColor";class Sy extends W0{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new $t,this.boundingBox=new _r}computeBoundingSphere(){}computeBoundingBox(){}setSide(e){const t=this.getIndex().count;this.setDrawRange(e===At?t/2:0,e===qt?t:t/2)}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=_y(e);["position","normal","uv"].forEach(n=>{this.attributes[n]=t.attributes[n].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,n,r,i){qo(this,xy,e,4),qo(this,wu,t,1),qo(this,yy,i,3),this._blockBounds=n,this._chunkedBounds=r,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:n}=this;if(t){const{PI:r,floor:i,min:s,max:o,sin:l,cos:c}=Math,h=r/2,u=r*2,d=Math.abs(t),p=e[0]/d,v=e[2]/d,g=i((p+h)/u)!==i((v+h)/u)?-d:s(l(p)*d,l(v)*d),m=i((p-h)/u)!==i((v-h)/u)?d:o(l(p)*d,l(v)*d),f=i((p+r)/u)!==i((v+r)/u)?d*2:o(d-c(p)*d,d-c(v)*d);n.min.set(g,e[1],t<0?-f:0),n.max.set(m,e[3],t<0?0:f)}else n.min.set(e[0],e[1],0),n.max.set(e[2],e[3],0);n.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(wu).count,n=this._chunkedBounds;if(n)for(let r=n.length;r--;){t=n[r].end;let i=n[r].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}}function qo(a,e,t,n){const r=a.getAttribute(e);t?r&&r.array.length===t.length?(r.array.set(t),r.needsUpdate=!0):(a.setAttribute(e,new uo(t,n)),delete a._maxInstanceCount,a.dispose()):r&&a.deleteAttribute(e)}const My=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Ty=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,by=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Ey=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function wy(a){const e=Xo(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new Fe},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new et(0,0,0,0)},uTroikaClipRect:{value:new et(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new Fe},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ge},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new $e},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:My,vertexTransform:Ty,fragmentDefs:by,fragmentColorTransform:Ey,customRewriter({vertexShader:t,fragmentShader:n}){let r=/\buniform\s+vec3\s+diffuse\b/;return r.test(n)&&(n=n.replace(r,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),r.test(t)||(t=t.replace(du,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Yo=new Lr({color:16777215,side:qt,transparent:!0}),Au=8421504,Ru=new Xe,os=new B,Ko=new B,ea=[],Ay=new B,$o="+x+y";function Cu(a){return Array.isArray(a)?a[0]:a}let Uu=()=>{const a=new Tt(new rn(1,1),Yo);return Uu=()=>a,a},Pu=()=>{const a=new Tt(new rn(1,1,32,1),Yo);return Pu=()=>a,a};const Ry={type:"syncstart"},Cy={type:"synccomplete"},Lu=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],Uy=Lu.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class Du extends Tt{constructor(){const e=new Sy;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang="en",this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Au,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=$o,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(Ry),py({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const n=this._queuedSyncs;n&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{n.forEach(r=>r&&r())})),this.dispatchEvent(Cy),e&&e()})))}onBeforeRender(e,t,n,r,i,s){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i),i._hadOwnSide=i.hasOwnProperty("side"),this.geometry.setSide(i._actualSide=i.side),i.side=gr}onAfterRender(e,t,n,r,i,s){i._hadOwnSide?i.side=i._actualSide:delete i.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Yo.clone());if((!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=wy(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let n=e._outlineMtl;return n||(n=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),n.isTextOutlineMaterial=!0,n.depthWrite=!1,n.map=null,e.addEventListener("dispose",function r(){e.removeEventListener("dispose",r),n.dispose()})),[n,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Cu(this.material).getDepthMaterial()}get customDistanceMaterial(){return Cu(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,n=e.uniforms,r=this.textRenderInfo;if(r){const{sdfTexture:o,blockBounds:l}=r;n.uTroikaSDFTexture.value=o,n.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),n.uTroikaSDFGlyphSize.value=r.sdfGlyphSize,n.uTroikaSDFExponent.value=r.sdfExponent,n.uTroikaTotalBounds.value.fromArray(l),n.uTroikaUseGlyphColors.value=!t&&!!r.glyphColors;let c=0,h=0,u=0,d,p,v,g=0,m=0;if(t){let{outlineWidth:y,outlineOffsetX:_,outlineOffsetY:x,outlineBlur:S,outlineOpacity:b}=this;c=this._parsePercent(y)||0,h=Math.max(0,this._parsePercent(S)||0),d=b,g=this._parsePercent(_)||0,m=this._parsePercent(x)||0}else u=Math.max(0,this._parsePercent(this.strokeWidth)||0),u&&(v=this.strokeColor,n.uTroikaStrokeColor.value.set(v??Au),p=this.strokeOpacity,p==null&&(p=1)),d=this.fillOpacity;n.uTroikaDistanceOffset.value=c,n.uTroikaPositionOffset.value.set(g,m),n.uTroikaBlurRadius.value=h,n.uTroikaStrokeWidth.value=u,n.uTroikaStrokeOpacity.value=p,n.uTroikaFillOpacity.value=d??1,n.uTroikaCurveRadius.value=this.curveRadius||0;let f=this.clipRect;if(f&&Array.isArray(f)&&f.length===4)n.uTroikaClipRect.value.fromArray(f);else{const y=(this.fontSize||.1)*100;n.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(n.uTroikaClipRect.value)}n.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Ge;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let s=this.orientation||$o;if(s!==e._orientation){let o=n.uTroikaOrient.value;s=s.replace(/[^-+xyz]/g,"");let l=s!==$o&&s.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,h,u,d]=l;os.set(0,0,0)[h]=c==="-"?1:-1,Ko.set(0,0,0)[d]=u==="-"?-1:1,Ru.lookAt(Ay,os.cross(Ko),Ko),o.setFromMatrix4(Ru)}else o.identity();e._orientation=s}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),n=t?parseFloat(t[1]):NaN;e=(isNaN(n)?0:n/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new Fe){t.copy(e);const n=this.curveRadius;return n&&(t.x=Math.atan2(e.x,Math.abs(n)-Math.abs(e.z))*Math.abs(n)),t}worldPositionToTextCoords(e,t=new Fe){return os.copy(e),this.localPositionToTextCoords(this.worldToLocal(os),t)}raycast(e,t){const{textRenderInfo:n,curveRadius:r}=this;if(n){const i=n.blockBounds,s=r?Pu():Uu(),o=s.geometry,{position:l,uv:c}=o.attributes;for(let h=0;h<c.count;h++){let u=i[0]+c.getX(h)*(i[2]-i[0]);const d=i[1]+c.getY(h)*(i[3]-i[1]);let p=0;r&&(p=r-Math.cos(u/r)*r,u=Math.sin(u/r)*r),l.setXYZ(h,u,d,p)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,s.matrixWorld=this.matrixWorld,s.material.side=this.material.side,ea.length=0,s.raycast(e,ea);for(let h=0;h<ea.length;h++)ea[h].object=this,t.push(ea[h])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,Uy.forEach(n=>{this[n]=e[n]}),this}clone(){return new this.constructor().copy(this)}}Lu.forEach(a=>{const e="_private_"+a;Object.defineProperty(Du.prototype,a,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});class Py extends Je{constructor(){super(...arguments);ue(this,"query",[Si,Kn])}update(t,n){const{assets:r,scene:i}=n,s=this.ecs.getComponents(t),{mesh:o,castShadow:l,receiveShadow:c}=s.get(Kn),h=Iy(r,o);h.traverse(d=>{d.castShadow=l,d.receiveShadow=c}),i.add(h);const u=new lr;u.view=h,this.ecs.addComponent(t,u),console.log("add view",u.view)}}const Ly=new So(Yh,16,16),Dy=new Lr({color:16711680});function Iy(a,e){switch(e){case Lt.RoadSegment:return a.road.model.clone();case Lt.Barrier:return a.barrier.model.clone();case Lt.Enemy:return a.helicopter.model.clone();case Lt.Gun:return a.gun.model.clone();case Lt.Bullet:return new Tt(Ly,Dy);case Lt.Text:return new Du;case Lt.None:return new nt}}class Ny extends Je{constructor(){super(...arguments);ue(this,"query",[Mi,lr])}update(t){const n=this.ecs.getComponents(t),{view:r}=n.get(lr);r.parent&&r.parent.remove(r),console.log("remove view",r)}}class Oy extends Je{constructor(){super(...arguments);ue(this,"query",[pt,lr])}update(t){const n=this.ecs.getComponents(t),{position:r,quaternion:i,scale:s}=n.get(pt),{view:o}=n.get(lr);o.position.copy(r),o.quaternion.copy(i),o.scale.copy(s)}}class Fy extends Je{constructor(){super(...arguments);ue(this,"query",[xi,lr])}update(t){const n=this.ecs.getComponents(t),{view:r}=n.get(lr),{visible:i}=n.get(xi);r.visible=i}}class By extends Je{constructor(t){super();ue(this,"gamepads",[]);ue(this,"query",[Nr]);t.forEach((n,r)=>{n.addEventListener("connected",i=>{this.gamepads[r]=i.data.gamepad}),n.addEventListener("disconnected",()=>{this.gamepads[r]=void 0})})}update(t){const n=this.ecs.getComponents(t).get(Nr),r=this.gamepads[n.index];r&&(n.trigger.pressed=r.buttons[0].pressed,n.trigger.value=r.buttons[0].value)}}class ky extends Je{constructor(t){super();ue(this,"query",[Nr,pt]);this.controllers=t}update(t){const n=this.ecs.getComponents(t),{index:r}=n.get(Nr),{position:i,quaternion:s,scale:o}=n.get(pt);i.copy(this.controllers[r].position),s.copy(this.controllers[r].quaternion),o.copy(this.controllers[r].scale)}}class zy extends Je{constructor(t){super();ue(this,"query",[Nr,xi]);this.controllers=t}update(t){const n=this.ecs.getComponents(t),{index:r}=n.get(Nr),i=n.get(xi);i.visible=this.controllers[r].visible}}const Gy=1.5,Hy=.1,Vy=1.5,Wy="#0f8705",Xy="#5bc978";class jy extends lh{constructor(t,n){super({depthWrite:!1,depthTest:!1});ue(this,"uniforms",{});this.uniforms={backColor:{value:t},progressColor:{value:n},progress:{value:1}}}onBeforeCompile(t){Object.assign(t.uniforms,this.uniforms);const[n,r]=qy(t.fragmentShader);t.vertexShader=["#define USE_UV",t.vertexShader].join(`
`),t.fragmentShader=["#define USE_UV",n,"uniform vec3 backColor;","uniform vec3 progressColor;","uniform float progress;","void main() {",r,"gl_FragColor.xyz = mix(progressColor, backColor, step(progress, vUv.x));","}"].join(`
`)}setProgress(t){this.uniforms.progress.value=Math.max(0,Math.min(t,1))}}function qy(a){const e=a.indexOf("void main()");if(e===-1)throw new Error("No main function found in the shader source.");const t=a.substring(0,e),n=a.indexOf("{",e)+1,r=a.lastIndexOf("}");if(n===-1||r===-1)throw new Error("Could not determine the main function body.");const i=a.substring(n,r);return[t,i.trim()]}const Yy=new jy(new Ge(Wy),new Ge(Xy));class Ky extends Je{constructor(){super(...arguments);ue(this,"query",[Si,Qa,zh(Kn,({mesh:t})=>t===Lt.Enemy)])}update(t,n){const r=new bi,{healthBar:i}=r;i.material=Yy,i.scale.set(Gy,Hy,0),n.scene.add(i),this.ecs.addComponent(t,r)}}class $y extends Je{constructor(){super(...arguments);ue(this,"query",[Si,lr,zh(Kn,({mesh:t})=>t===Lt.Enemy)])}update(t){const n=this.ecs.getComponents(t),{view:r}=n.get(lr),i=Cx(r),s=new Go;s.mainRotor=i.mainRotor,s.tailRotor=i.tailRotor,this.ecs.addComponent(t,s)}}class Zy extends Je{constructor(){super(...arguments);ue(this,"query",[Go])}update(t){const n=this.ecs.getComponents(t),{mainRotor:r,tailRotor:i}=n.get(Go);!r||!i||(r.rotation.y+=Or.deltaSeconds()*10,i.visible=!1)}}class Jy extends Je{constructor(){super(...arguments);ue(this,"query",[yi,lr])}update(t){const n=this.ecs.getComponents(t),r=n.get(yi),{view:i}=n.get(lr);if(!r.needsUpdate)return;const{text:s,fontSize:o,color:l}=r,c=i;c.text=s,c.fontSize=o,c.color=l,c.sync(),r.needsUpdate=!1}}class Qy extends Je{constructor(){super(...arguments);ue(this,"query",[bi,pt])}update(t){const n=this.ecs.getComponents(t),{position:r}=n.get(pt),{healthBar:i}=n.get(bi);i.position.copy(r),i.position.y+=Vy}}class e1 extends Je{constructor(){super(...arguments);ue(this,"query",[Mi,bi])}update(t,n){const r=this.ecs.getComponents(t),{healthBar:i}=r.get(bi);n.scene.remove(i)}}class t1 extends Je{constructor(){super(...arguments);ue(this,"query",[Qa,bi])}update(t){const n=this.ecs.getComponents(t),{health:r}=n.get(Qa),{healthBar:i}=n.get(bi);i.material.setProgress(r/100)}}Ku(()=>import("./rapier-8c074953.js").then(async a=>(await a.__tla,a)),[]).then(async a=>{const e=await Ax(),t=r1();t.shadowMap.enabled=!0;const n=new a_,r=new p0;t.xr.enabled=!0;const i=t.xr.getControllerGrip(0),s=t.xr.getControllerGrip(1),o=[i,s],l=new t_;l.position.y=1,r.add(l);const c=new Bh;c.castShadow=!0,c.shadow.mapSize.width=512,c.shadow.mapSize.height=512,c.shadow.camera.near=.5,c.shadow.camera.far=500,c.shadow.camera.left=-20,c.shadow.camera.right=20,c.shadow.camera.top=20,c.shadow.camera.bottom=-20,c.intensity=2,r.add(c);const h=new B_,u=new ts;u.scale.setScalar(1e4),r.add(u);const d=u.material.uniforms;d.turbidity.value=10,d.rayleigh.value=.1,d.mieCoefficient.value=7e-5,d.mieDirectionalG.value=.8;const p={elevation:90,azimuth:180},v=Is.degToRad(90-p.elevation),g=Is.degToRad(p.azimuth);c.position.setFromSphericalCoords(50,v,g),d.sunPosition.value.copy(c.position);const m=new V0;m.intensity=1,r.add(m);const f=new Ft(75,1,.01,100);f.position.z=2,f.position.y=1;const y={x:0,y:-9.81,z:0},_=new a.World(y);r.background=new Ge("gray");const x=new a.EventQueue(!0);n.addSystem(new By(o)),n.addSystem(new zy(o)),n.addSystem(new ky(o)),n.addSystem(new k_),n.addSystem(new G_),n.addSystem(new z_),n.addSystem(new W_),n.addSystem(new x_),n.addSystem(new y_),n.addSystem(new S_),n.addSystem(new D_),n.addSystem(new __),n.addSystem(new v_),n.addSystem(new Py),n.addSystem(new $y),n.addSystem(new Ky),n.addSystem(new c_),n.addSystem(new p_),n.addSystem(new m_(x)),n.addSystem(new u_),n.addSystem(new Oy),n.addSystem(new Fy),n.addSystem(new Jy),n.addSystem(new Zy),n.addSystem(new Qy),n.addSystem(new t1),n.addSystem(new Ny),n.addSystem(new e1),n.addSystem(new h_(_)),n.addSystem(new d_),n.addSystem(new l_),n.addSystem(new g_),n.addEntity(w_()),n.addEntity(C_()),n.addEntity(U_()),n.addEntity(P_()),n.addEntity($h(1)),n.addEntity($h(0));const S=new f_(r,f,_,t,a,e,h,new Io);document.body.appendChild(xn.createButton(t)),Or.init(),t.setAnimationLoop(()=>{n.update(S),Or.update()})});const r1=()=>{const a=new sh;return a.setPixelRatio(window.devicePixelRatio),document.getElementById("app").appendChild(a.domElement),a}})();
