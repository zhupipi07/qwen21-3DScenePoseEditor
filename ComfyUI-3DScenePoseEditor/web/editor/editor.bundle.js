var Ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},um=0,kd=1,fm=2;var nf=1,nh=2,$n=3,mn=0,$t=1,Ot=2,bi=0,ws=1,Fd=2,Bd=3,Hd=4,pm=5,Vi=100,mm=101,gm=102,_m=103,bm=104,vm=200,ym=201,xm=202,Mm=203,Ol=204,kl=205,Em=206,Sm=207,wm=208,Tm=209,Am=210,Rm=211,Pm=212,Cm=213,Lm=214,Fl=0,Bl=1,Hl=2,Ps=3,Vl=4,zl=5,Gl=6,Wl=7,sf=0,Im=1,Dm=2,vi=0,Um=1,Nm=2,Om=3,ih=4,km=5,Fm=6,Bm=7,Vd="attached",Hm="detached",rf=300,Cs=301,Ls=302,Xl=303,ql=304,_a=306,Wi=1e3,Kn=1001,br=1002,Yt=1003,sh=1004;var Es=1005;var en=1006,ur=1007;var Dn=1008;var Qn=1009,of=1010,af=1011,vr=1012,rh=1013,Xi=1014,An=1015,Lr=1016,oh=1017,ah=1018,Is=1020,lf=35902,cf=1021,hf=1022,pn=1023,df=1024,uf=1025,Ts=1026,Ds=1027,lh=1028,ch=1029,ff=1030,hh=1031;var dh=1033,Co=33776,Lo=33777,Io=33778,Do=33779,jl=35840,Yl=35841,$l=35842,Kl=35843,Zl=36196,Ql=37492,Jl=37496,ec=37808,tc=37809,nc=37810,ic=37811,sc=37812,rc=37813,oc=37814,ac=37815,lc=37816,cc=37817,hc=37818,dc=37819,uc=37820,fc=37821,Uo=36492,pc=36494,mc=36495,pf=36283,gc=36284,_c=36285,bc=36286;var Us=2300,Ns=2301,Ja=2302,zd=2400,Gd=2401,Wd=2402,Vm=2500;var mf=0,ba=1,Ir=2,zm=3200,Gm=3201;var va=0,Wm=1,gi="",Et="srgb",Lt="srgb-linear",uh="display-p3",ya="display-p3-linear",Oo="linear",gt="srgb",ko="rec709",Fo="p3";var ls=7680;var Xd=519,Xm=512,qm=513,jm=514,gf=515,Ym=516,$m=517,Km=518,Zm=519,vc=35044,_f=35048;var qd="300 es",Zn=2e3,Bo=2001,Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jd=1234567,fr=Math.PI/180,Os=180/Math.PI;function Rn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[s&255]+qt[s>>8&255]+qt[s>>16&255]+qt[s>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function fh(s,e){return(s%e+e)%e}function Qm(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Jm(s,e,t){return s!==e?(t-s)/(e-s):0}function pr(s,e,t){return(1-t)*s+t*e}function eg(s,e,t,n){return pr(s,e,1-Math.exp(-t*n))}function tg(s,e=1){return e-Math.abs(fh(s,e*2)-e)}function ng(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ig(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function sg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function rg(s,e){return s+Math.random()*(e-s)}function og(s){return s*(.5-Math.random())}function ag(s){s!==void 0&&(jd=s);let e=jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lg(s){return s*fr}function cg(s){return s*Os}function hg(s){return(s&s-1)===0&&s!==0}function dg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ug(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fg(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ct(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Me={DEG2RAD:fr,RAD2DEG:Os,generateUUID:Rn,clamp:Pt,euclideanModulo:fh,mapLinear:Qm,inverseLerp:Jm,lerp:pr,damp:eg,pingpong:tg,smoothstep:ng,smootherstep:ig,randInt:sg,randFloat:rg,randFloatSpread:og,seededRandom:ag,degToRad:lg,radToDeg:cg,isPowerOfTwo:hg,ceilPowerOfTwo:dg,floorPowerOfTwo:ug,setQuaternionFromProperEuler:fg,normalize:ct,denormalize:Tn},te=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Te=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],b=i[1],v=i[4],M=i[7],R=i[2],T=i[5],A=i[8];return r[0]=o*_+a*b+l*R,r[3]=o*p+a*v+l*T,r[6]=o*m+a*M+l*A,r[1]=c*_+h*b+d*R,r[4]=c*p+h*v+d*T,r[7]=c*m+h*M+d*A,r[2]=u*_+f*b+g*R,r[5]=u*p+f*v+g*T,r[8]=u*m+f*M+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(el.makeScale(e,t)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,t){return this.premultiply(el.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},el=new Te;function bf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pg(){let s=yr("canvas");return s.style.display="block",s}var Yd={};function No(s){s in Yd||(Yd[s]=!0,console.warn(s))}function mg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function gg(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _g(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var $d=new Te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kd=new Te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),nr={[Lt]:{transfer:Oo,primaries:ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Et]:{transfer:gt,primaries:ko,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ya]:{transfer:Oo,primaries:Fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Kd),fromReference:s=>s.applyMatrix3($d)},[uh]:{transfer:gt,primaries:Fo,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Kd),fromReference:s=>s.applyMatrix3($d).convertLinearToSRGB()}},bg=new Set([Lt,ya]),Ze={enabled:!0,_workingColorSpace:Lt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!bg.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=nr[e].toReference,i=nr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return nr[s].primaries},getTransfer:function(s){return s===gi?Oo:nr[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(nr[e].luminanceCoefficients)}};function As(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function tl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var cs,yc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=yr("canvas")),cs.width=e.width,cs.height=e.height;let n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(As(t[n]/255)*255):t[n]=As(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vg=0,Ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(nl(i[o].image)):r.push(nl(i[o]))}else r=nl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function nl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yg=0,Vt=class s extends Jn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Kn,i=Kn,r=en,o=Dn,a=pn,l=Qn,c=s.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Rn(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=rf;Vt.DEFAULT_ANISOTROPY=1;var st=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,M=(f+1)/2,R=(m+1)/2,T=(h+u)/4,A=(d+_)/4,C=(g+p)/4;return v>M&&v>R?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=A/n):M>R?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=C/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=A/r,i=C/r),this.set(n,i,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xc=class extends Jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vo=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mc=class extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oe=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let p=1-a,m=l*u+c*f+h*g+d*_,b=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){let R=Math.sqrt(v),T=Math.atan2(R,m*b);p=Math.sin(p*T)/R,a=Math.sin(a*T)/R}let M=a*b;if(l=l*p+u*M,c=c*p+f*M,h=h*p+g*M,d=d*p+_*M,p===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},x=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},il=new x,Zd=new oe,at=class{constructor(e=new x(1/0,1/0,1/0),t=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),to.subVectors(this.max,ir),hs.subVectors(e.a,ir),ds.subVectors(e.b,ir),us.subVectors(e.c,ir),ci.subVectors(ds,hs),hi.subVectors(us,ds),Ui.subVectors(hs,us);let t=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ui.z,Ui.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ui.z,0,-Ui.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ui.y,Ui.x,0];return!sl(t,hs,ds,us,to)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,hs,ds,us,to))?!1:(no.crossVectors(ci,hi),t=[no.x,no.y,no.z],sl(t,hs,ds,us,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gn=[new x,new x,new x,new x,new x,new x,new x,new x],Mn=new x,eo=new at,hs=new x,ds=new x,us=new x,ci=new x,hi=new x,Ui=new x,ir=new x,to=new x,no=new x,Ni=new x;function sl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ni.fromArray(s,r);let a=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var xg=new at,sr=new x,rl=new x,ln=class{constructor(e=new x,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):xg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);let t=sr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(sr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(rl)),this.expandByPoint(sr.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Wn=new x,ol=new x,io=new x,di=new x,al=new x,so=new x,ll=new x,ti=class{constructor(e=new x,t=new x(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ol.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),di.copy(this.origin).sub(ol);let r=e.distanceTo(t)*.5,o=-this.direction.dot(io),a=di.dot(this.direction),l=-di.dot(io),c=di.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ol).addScaledVector(io,u),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);let n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,i,r){al.subVectors(t,e),so.subVectors(n,e),ll.crossVectors(al,so);let o=this.direction.dot(ll),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);let l=a*this.direction.dot(so.crossVectors(di,so));if(l<0)return null;let c=a*this.direction.dot(al.cross(di));if(c<0||l+c>o)return null;let h=-a*di.dot(ll);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class s{constructor(e,t,n,i,r,o,a,l,c,h,d,u,f,g,_,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,d,u,f,g,_,p)}set(e,t,n,i,r,o,a,l,c,h,d,u,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mg,e,Eg)}lookAt(e,t,n){let i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ui.crossVectors(n,on),ui.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ui.crossVectors(n,on)),ui.normalize(),ro.crossVectors(on,ui),i[0]=ui.x,i[4]=ro.x,i[8]=on.x,i[1]=ui.y,i[5]=ro.y,i[9]=on.y,i[2]=ui.z,i[6]=ro.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],b=n[3],v=n[7],M=n[11],R=n[15],T=i[0],A=i[4],C=i[8],O=i[12],y=i[1],S=i[5],N=i[9],k=i[13],V=i[2],X=i[6],B=i[10],Y=i[14],G=i[3],ie=i[7],se=i[11],pe=i[15];return r[0]=o*T+a*y+l*V+c*G,r[4]=o*A+a*S+l*X+c*ie,r[8]=o*C+a*N+l*B+c*se,r[12]=o*O+a*k+l*Y+c*pe,r[1]=h*T+d*y+u*V+f*G,r[5]=h*A+d*S+u*X+f*ie,r[9]=h*C+d*N+u*B+f*se,r[13]=h*O+d*k+u*Y+f*pe,r[2]=g*T+_*y+p*V+m*G,r[6]=g*A+_*S+p*X+m*ie,r[10]=g*C+_*N+p*B+m*se,r[14]=g*O+_*k+p*Y+m*pe,r[3]=b*T+v*y+M*V+R*G,r[7]=b*A+v*S+M*X+R*ie,r[11]=b*C+v*N+M*B+R*se,r[15]=b*O+v*k+M*Y+R*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*f-n*l*f)+_*(+t*l*f-t*c*u+r*o*u-i*o*f+i*c*h-r*l*h)+p*(+t*c*d-t*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+m*(-i*a*h-t*l*d+t*a*u+i*o*d-n*o*u+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],b=d*p*c-_*u*c+_*l*f-a*p*f-d*l*m+a*u*m,v=g*u*c-h*p*c-g*l*f+o*p*f+h*l*m-o*u*m,M=h*_*c-g*d*c+g*a*f-o*_*f-h*a*m+o*d*m,R=g*d*l-h*_*l-g*a*u+o*_*u+h*a*p-o*d*p,T=t*b+n*v+i*M+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=b*A,e[1]=(_*u*r-d*p*r-_*i*f+n*p*f+d*i*m-n*u*m)*A,e[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*m+n*l*m)*A,e[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*f-n*l*f)*A,e[4]=v*A,e[5]=(h*p*r-g*u*r+g*i*f-t*p*f-h*i*m+t*u*m)*A,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*m-t*l*m)*A,e[7]=(o*u*r-h*l*r+h*i*c-t*u*c-o*i*f+t*l*f)*A,e[8]=M*A,e[9]=(g*d*r-h*_*r-g*n*f+t*_*f+h*n*m-t*d*m)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*m+t*a*m)*A,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*f-t*a*f)*A,e[12]=R*A,e[13]=(h*_*i-g*d*i+g*n*u-t*_*u-h*n*p+t*d*p)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*p-t*a*p)*A,e[15]=(o*d*i-h*a*i+h*n*l-t*d*l-o*n*u+t*a*u)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,_=o*h,p=o*d,m=a*d,b=l*c,v=l*h,M=l*d,R=n.x,T=n.y,A=n.z;return i[0]=(1-(_+m))*R,i[1]=(f+M)*R,i[2]=(g-v)*R,i[3]=0,i[4]=(f-M)*T,i[5]=(1-(u+m))*T,i[6]=(p+b)*T,i[7]=0,i[8]=(g+v)*A,i[9]=(p-b)*A,i[10]=(1-(u+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=fs.set(i[0],i[1],i[2]).length(),o=fs.set(i[4],i[5],i[6]).length(),a=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);let c=1/r,h=1/o,d=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,t.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Zn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),f,g;if(a===Zn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Bo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Zn){let l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(o-r),u=(t+e)*c,f=(n+i)*h,g,_;if(a===Zn)g=(o+r)*d,_=-2*d;else if(a===Bo)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fs=new x,En=new be,Mg=new x(0,0,0),Eg=new x(1,1,1),ui=new x,ro=new x,on=new x,Qd=new be,Jd=new oe,yt=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yt.DEFAULT_ORDER="XYZ";var xr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Sg=0,eu=new x,ps=new oe,Xn=new be,oo=new x,rr=new x,wg=new x,Tg=new oe,tu=new x(1,0,0),nu=new x(0,1,0),iu=new x(0,0,1),su={type:"added"},Ag={type:"removed"},ms={type:"childadded",child:null},cl={type:"childremoved",child:null},tt=class s extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new x,t=new yt,n=new oe,i=new x(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new Te}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(tu,e)}rotateY(e){return this.rotateOnAxis(nu,e)}rotateZ(e){return this.rotateOnAxis(iu,e)}translateOnAxis(e,t){return eu.copy(e).applyQuaternion(this.quaternion),this.position.add(eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tu,e)}translateY(e){return this.translateOnAxis(nu,e)}translateZ(e){return this.translateOnAxis(iu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(rr,oo,this.up):Xn.lookAt(oo,rr,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Xn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(su),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ag),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(su),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};tt.DEFAULT_UP=new x(0,1,0);tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new x,qn=new x,hl=new x,jn=new x,gs=new x,_s=new x,ru=new x,dl=new x,ul=new x,fl=new x,pl=new st,ml=new st,gl=new st,zi=class s{constructor(e=new x,t=new x,n=new x){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Sn.subVectors(e,t),i.cross(Sn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Sn.subVectors(i,t),qn.subVectors(n,t),hl.subVectors(e,t);let o=Sn.dot(Sn),a=Sn.dot(qn),l=Sn.dot(hl),c=qn.dot(qn),h=qn.dot(hl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(e,t,n,i){return Sn.subVectors(n,t),qn.subVectors(e,t),Sn.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Sn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;gs.subVectors(i,n),_s.subVectors(r,n),dl.subVectors(e,n);let l=gs.dot(dl),c=_s.dot(dl);if(l<=0&&c<=0)return t.copy(n);ul.subVectors(e,i);let h=gs.dot(ul),d=_s.dot(ul);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(gs,o);fl.subVectors(e,r);let f=gs.dot(fl),g=_s.dot(fl);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(_s,a);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return ru.subVectors(r,i),a=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(ru,a);let m=1/(p+_+u);return o=_*m,a=u*m,t.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function _l(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=fh(e,1),t=Pt(t,0,1),n=Pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=_l(o,r,e+1/3),this.g=_l(o,r,e),this.b=_l(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=vf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=tl(e.r),this.g=tl(e.g),this.b=tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ze.fromWorkingColorSpace(jt.copy(this),e),Math.round(Pt(jt.r*255,0,255))*65536+Math.round(Pt(jt.g*255,0,255))*256+Math.round(Pt(jt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(jt.copy(this),t);let n=jt.r,i=jt.g,r=jt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Et){Ze.fromWorkingColorSpace(jt.copy(this),e);let t=jt.r,n=jt.g,i=jt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(ao);let n=pr(fi.h,ao.h,t),i=pr(fi.s,ao.s,t),r=pr(fi.l,ao.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new ae;ae.NAMES=vf;var Rg=0,Jt=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=ws,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=kl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ol&&(n.blendSrc=this.blendSrc),this.blendDst!==kl&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},wt=class extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yt,this.combine=sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Rt=new x,lo=new te,Le=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vc&&(e.usage=this.usage),e}};var zo=class extends Le{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Go=class extends Le{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends Le{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pg=0,fn=new be,bl=new tt,bs=new x,an=new at,or=new at,Nt=new x,Fe=class s extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bf(e)?Go:zo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Te().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return bl.lookAt(e),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ye(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new at);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(an.min,or.min),an.expandByPoint(Nt),Nt.addVectors(an.max,or.max),an.expandByPoint(Nt)):(an.expandByPoint(or.min),an.expandByPoint(or.max))}an.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Nt.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(e,c),Nt.add(bs)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new x,l[C]=new x;let c=new x,h=new x,d=new x,u=new te,f=new te,g=new te,_=new x,p=new x;function m(C,O,y){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,O),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,O),g.fromBufferAttribute(r,y),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(S),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),a[C].add(_),a[O].add(_),a[y].add(_),l[C].add(p),l[O].add(p),l[y].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,O=b.length;C<O;++C){let y=b[C],S=y.start,N=y.count;for(let k=S,V=S+N;k<V;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let v=new x,M=new x,R=new x,T=new x;function A(C){R.fromBufferAttribute(i,C),T.copy(R);let O=a[C];v.copy(O),v.sub(R.multiplyScalar(R.dot(O))).normalize(),M.crossVectors(T,O);let S=M.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,S)}for(let C=0,O=b.length;C<O;++C){let y=b[C],S=y.start,N=y.count;for(let k=S,V=S+N;k<V;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new x,r=new x,o=new x,a=new x,l=new x,c=new x,h=new x,d=new x;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Le(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ou=new be,Oi=new ti,co=new ln,au=new x,ho=new x,uo=new x,fo=new x,vl=new x,po=new x,lu=new x,mo=new x,J=class extends tt{constructor(e=new Fe,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(vl.fromBufferAttribute(d,e),o?po.addScaledVector(vl,h):po.addScaledVector(vl.sub(t),h))}t.add(po)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(co.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(co,au)===null||Oi.origin.distanceToSquared(au)>(e.far-e.near)**2))&&(ou.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(ou),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,R=v;M<R;M+=3){let T=a.getX(M),A=a.getX(M+1),C=a.getX(M+2);i=go(this,m,e,n,c,h,d,T,A,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);i=go(this,o,e,n,c,h,d,b,v,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=b,R=v;M<R;M+=3){let T=M,A=M+1,C=M+2;i=go(this,m,e,n,c,h,d,T,A,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=p,v=p+1,M=p+2;i=go(this,o,e,n,c,h,d,b,v,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Cg(s,e,t,n,i,r,o,a){let l;if(e.side===$t?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===mn,a),l===null)return null;mo.copy(a),mo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(mo);return c<t.near||c>t.far?null:{distance:c,point:mo.clone(),object:s}}function go(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ho),s.getVertexPosition(l,uo),s.getVertexPosition(c,fo);let h=Cg(s,e,t,n,ho,uo,fo,lu);if(h){let d=new x;zi.getBarycoord(lu,ho,uo,fo,d),i&&(h.uv=zi.getInterpolatedAttribute(i,a,l,c,d,new te)),r&&(h.uv1=zi.getInterpolatedAttribute(r,a,l,c,d,new te)),o&&(h.normal=zi.getInterpolatedAttribute(o,a,l,c,d,new x),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new x,materialIndex:0};zi.getNormal(ho,uo,fo,u.normal),h.face=u,h.barycoord=d}return h}var _t=class s extends Fe{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2));function g(_,p,m,b,v,M,R,T,A,C,O){let y=M/A,S=R/C,N=M/2,k=R/2,V=T/2,X=A+1,B=C+1,Y=0,G=0,ie=new x;for(let se=0;se<B;se++){let pe=se*S-k;for(let He=0;He<X;He++){let Qe=He*y-N;ie[_]=Qe*b,ie[p]=pe*v,ie[m]=V,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[p]=0,ie[m]=T>0?1:-1,h.push(ie.x,ie.y,ie.z),d.push(He/A),d.push(1-se/C),Y+=1}}for(let se=0;se<C;se++)for(let pe=0;pe<A;pe++){let He=u+pe+X*se,Qe=u+pe+X*(se+1),q=u+(pe+1)+X*(se+1),ee=u+(pe+1)+X*se;l.push(He,Qe,ee),l.push(Qe,q,ee),G+=6}a.addGroup(f,G,O),f+=G,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ks(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){let e={};for(let t=0;t<s.length;t++){let n=ks(s[t]);for(let i in n)e[i]=n[i]}return e}function Lg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var ph={clone:ks,merge:Qt},Ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ig,this.fragmentShader=Dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Lg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wo=class extends tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pi=new x,cu=new te,hu=new te,Ct=class extends Wo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,cu,hu),t.subVectors(hu,cu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vs=-90,ys=1,Ec=class extends tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ct(vs,ys,e,t);i.layers=this.layers,this.add(i);let r=new Ct(vs,ys,e,t);r.layers=this.layers,this.add(r);let o=new Ct(vs,ys,e,t);o.layers=this.layers,this.add(o);let a=new Ct(vs,ys,e,t);a.layers=this.layers,this.add(a);let l=new Ct(vs,ys,e,t);l.layers=this.layers,this.add(l);let c=new Ct(vs,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Xo=class extends Vt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Cs,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sc=class extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _t(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:bi});r.uniforms.tEquirect.value=t;let o=new J(i,r),a=t.minFilter;return t.minFilter===Dn&&(t.minFilter=en),new Ec(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},yl=new x,Ug=new x,Ng=new Te,wn=class{constructor(e=new x(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=yl.subVectors(n,t).cross(Ug.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(yl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ng.getNormalMatrix(e),i=this.coplanarPoint(yl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new ln,_o=new x,Mr=class{constructor(e=new wn,t=new wn,n=new wn,i=new wn,r=new wn,o=new wn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],b=i[13],v=i[14],M=i[15];if(n[0].setComponents(l-r,u-c,p-f,M-m).normalize(),n[1].setComponents(l+r,u+c,p+f,M+m).normalize(),n[2].setComponents(l+o,u+h,p+g,M+b).normalize(),n[3].setComponents(l-o,u-h,p-g,M-b).normalize(),n[4].setComponents(l-a,u-d,p-_,M-v).normalize(),t===Zn)n[5].setComponents(l+a,u+d,p+_,M+v).normalize();else if(t===Bo)n[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(_o.x=i.normal.x>0?e.max.x:e.min.x,_o.y=i.normal.y>0?e.max.y:e.min.y,_o.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xf(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Og(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var yi=class s extends Fe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let b=m*u-o;for(let v=0;v<c;v++){let M=v*d-r;g.push(M,-b,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let v=b+c*m,M=b+c*(m+1),R=b+1+c*(m+1),T=b+1+c*m;f.push(v,M,T),f.push(M,R,T)}this.setIndex(f),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fg=`#ifdef USE_ALPHAHASH
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
#endif`,Bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gg=`#ifdef USE_AOMAP
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
#endif`,Wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$g=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Zg=`#ifdef USE_BUMPMAP
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
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,o0=`#define PI 3.141592653589793
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
} // validated`,a0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l0=`vec3 transformedNormal = objectNormal;
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
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`
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
}`,m0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
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
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,P0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,N0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,O0=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,j0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r_=`#ifdef USE_NORMALMAP
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
#endif`,o_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,u_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E_=`#ifdef USE_SKINNING
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
#endif`,S_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w_=`#ifdef USE_SKINNING
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
#endif`,T_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k_=`uniform sampler2D t2D;
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
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z_=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,G_=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W_=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,X_=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K_=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Z_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Q_=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,J_=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,eb=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,tb=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,nb=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,ib=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sb=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,rb=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,ob=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,ab=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,lb=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,cb=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,hb=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,db=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ub=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,fb=`uniform vec3 color;
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
}`,pb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,mb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Be={alphahash_fragment:kg,alphahash_pars_fragment:Fg,alphamap_fragment:Bg,alphamap_pars_fragment:Hg,alphatest_fragment:Vg,alphatest_pars_fragment:zg,aomap_fragment:Gg,aomap_pars_fragment:Wg,batching_pars_vertex:Xg,batching_vertex:qg,begin_vertex:jg,beginnormal_vertex:Yg,bsdfs:$g,iridescence_fragment:Kg,bumpmap_pars_fragment:Zg,clipping_planes_fragment:Qg,clipping_planes_pars_fragment:Jg,clipping_planes_pars_vertex:e0,clipping_planes_vertex:t0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:s0,color_vertex:r0,common:o0,cube_uv_reflection_fragment:a0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:h0,emissivemap_fragment:d0,emissivemap_pars_fragment:u0,colorspace_fragment:f0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:_0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:P0,envmap_vertex:v0,fog_vertex:y0,fog_pars_vertex:x0,fog_fragment:M0,fog_pars_fragment:E0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:w0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:A0,lights_pars_begin:R0,lights_toon_fragment:C0,lights_toon_pars_fragment:L0,lights_phong_fragment:I0,lights_phong_pars_fragment:D0,lights_physical_fragment:U0,lights_physical_pars_fragment:N0,lights_fragment_begin:O0,lights_fragment_maps:k0,lights_fragment_end:F0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:H0,logdepthbuf_pars_vertex:V0,logdepthbuf_vertex:z0,map_fragment:G0,map_pars_fragment:W0,map_particle_fragment:X0,map_particle_pars_fragment:q0,metalnessmap_fragment:j0,metalnessmap_pars_fragment:Y0,morphinstance_vertex:$0,morphcolor_vertex:K0,morphnormal_vertex:Z0,morphtarget_pars_vertex:Q0,morphtarget_vertex:J0,normal_fragment_begin:e_,normal_fragment_maps:t_,normal_pars_fragment:n_,normal_pars_vertex:i_,normal_vertex:s_,normalmap_pars_fragment:r_,clearcoat_normal_fragment_begin:o_,clearcoat_normal_fragment_maps:a_,clearcoat_pars_fragment:l_,iridescence_pars_fragment:c_,opaque_fragment:h_,packing:d_,premultiplied_alpha_fragment:u_,project_vertex:f_,dithering_fragment:p_,dithering_pars_fragment:m_,roughnessmap_fragment:g_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:b_,shadowmap_pars_vertex:v_,shadowmap_vertex:y_,shadowmask_pars_fragment:x_,skinbase_vertex:M_,skinning_pars_vertex:E_,skinning_vertex:S_,skinnormal_vertex:w_,specularmap_fragment:T_,specularmap_pars_fragment:A_,tonemapping_fragment:R_,tonemapping_pars_fragment:P_,transmission_fragment:C_,transmission_pars_fragment:L_,uv_pars_fragment:I_,uv_pars_vertex:D_,uv_vertex:U_,worldpos_vertex:N_,background_vert:O_,background_frag:k_,backgroundCube_vert:F_,backgroundCube_frag:B_,cube_vert:H_,cube_frag:V_,depth_vert:z_,depth_frag:G_,distanceRGBA_vert:W_,distanceRGBA_frag:X_,equirect_vert:q_,equirect_frag:j_,linedashed_vert:Y_,linedashed_frag:$_,meshbasic_vert:K_,meshbasic_frag:Z_,meshlambert_vert:Q_,meshlambert_frag:J_,meshmatcap_vert:eb,meshmatcap_frag:tb,meshnormal_vert:nb,meshnormal_frag:ib,meshphong_vert:sb,meshphong_frag:rb,meshphysical_vert:ob,meshphysical_frag:ab,meshtoon_vert:lb,meshtoon_frag:cb,points_vert:hb,points_frag:db,shadow_vert:ub,shadow_frag:fb,sprite_vert:pb,sprite_frag:mb},re={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},In={basic:{uniforms:Qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ae(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Qt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Qt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Qt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ae(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Qt([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Qt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Qt([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Qt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Qt([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Qt([re.common,re.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Qt([re.lights,re.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};In.physical={uniforms:Qt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var bo={r:0,b:0,g:0},Fi=new yt,gb=new be;function _b(s,e,t,n,i,r,o){let a=new ae(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function _(b){let v=!1,M=g(b);M===null?m(a,l):M&&M.isColor&&(m(M,1),v=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(b,v){let M=g(v);M&&(M.isCubeTexture||M.mapping===_a)?(h===void 0&&(h=new J(new _t(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ks(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fi.copy(v.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gb.makeRotationFromEuler(Fi)),h.material.toneMapped=Ze.getTransfer(M.colorSpace)!==gt,(d!==M||u!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new J(new yi(2,2),new tn({name:"BackgroundMaterial",uniforms:ks(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,v){b.getRGB(bo,yf(s)),n.buffers.color.setClear(bo.r,bo.g,bo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(a,l)},render:_,addToRenderList:p}}function bb(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(y,S,N,k,V){let X=!1,B=d(k,N,S);r!==B&&(r=B,c(r.object)),X=f(y,k,N,V),X&&g(y,k,N,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(y,S,N,k),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function d(y,S,N){let k=N.wireframe===!0,V=n[y.id];V===void 0&&(V={},n[y.id]=V);let X=V[S.id];X===void 0&&(X={},V[S.id]=X);let B=X[k];return B===void 0&&(B=u(l()),X[k]=B),B}function u(y){let S=[],N=[],k=[];for(let V=0;V<t;V++)S[V]=0,N[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,S,N,k){let V=r.attributes,X=S.attributes,B=0,Y=N.getAttributes();for(let G in Y)if(Y[G].location>=0){let se=V[G],pe=X[G];if(pe===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),se===void 0||se.attribute!==pe||pe&&se.data!==pe.data)return!0;B++}return r.attributesNum!==B||r.index!==k}function g(y,S,N,k){let V={},X=S.attributes,B=0,Y=N.getAttributes();for(let G in Y)if(Y[G].location>=0){let se=X[G];se===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(se=y.instanceColor));let pe={};pe.attribute=se,se&&se.data&&(pe.data=se.data),V[G]=pe,B++}r.attributes=V,r.attributesNum=B,r.index=k}function _(){let y=r.newAttributes;for(let S=0,N=y.length;S<N;S++)y[S]=0}function p(y){m(y,0)}function m(y,S){let N=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;N[y]=1,k[y]===0&&(s.enableVertexAttribArray(y),k[y]=1),V[y]!==S&&(s.vertexAttribDivisor(y,S),V[y]=S)}function b(){let y=r.newAttributes,S=r.enabledAttributes;for(let N=0,k=S.length;N<k;N++)S[N]!==y[N]&&(s.disableVertexAttribArray(N),S[N]=0)}function v(y,S,N,k,V,X,B){B===!0?s.vertexAttribIPointer(y,S,N,V,X):s.vertexAttribPointer(y,S,N,k,V,X)}function M(y,S,N,k){_();let V=k.attributes,X=N.getAttributes(),B=S.defaultAttributeValues;for(let Y in X){let G=X[Y];if(G.location>=0){let ie=V[Y];if(ie===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ie!==void 0){let se=ie.normalized,pe=ie.itemSize,He=e.get(ie);if(He===void 0)continue;let Qe=He.buffer,q=He.type,ee=He.bytesPerElement,ve=q===s.INT||q===s.UNSIGNED_INT||ie.gpuType===rh;if(ie.isInterleavedBufferAttribute){let fe=ie.data,Oe=fe.stride,Re=ie.offset;if(fe.isInstancedInterleavedBuffer){for(let qe=0;qe<G.locationSize;qe++)m(G.location+qe,fe.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let qe=0;qe<G.locationSize;qe++)p(G.location+qe);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let qe=0;qe<G.locationSize;qe++)v(G.location+qe,pe/G.locationSize,q,se,Oe*ee,(Re+pe/G.locationSize*qe)*ee,ve)}else{if(ie.isInstancedBufferAttribute){for(let fe=0;fe<G.locationSize;fe++)m(G.location+fe,ie.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let fe=0;fe<G.locationSize;fe++)p(G.location+fe);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let fe=0;fe<G.locationSize;fe++)v(G.location+fe,pe/G.locationSize,q,se,pe*ee,pe/G.locationSize*fe*ee,ve)}}else if(B!==void 0){let se=B[Y];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(G.location,se);break;case 3:s.vertexAttrib3fv(G.location,se);break;case 4:s.vertexAttrib4fv(G.location,se);break;default:s.vertexAttrib1fv(G.location,se)}}}}b()}function R(){C();for(let y in n){let S=n[y];for(let N in S){let k=S[N];for(let V in k)h(k[V].object),delete k[V];delete S[N]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let S=n[y.id];for(let N in S){let k=S[N];for(let V in k)h(k[V].object),delete k[V];delete S[N]}delete n[y.id]}function A(y){for(let S in n){let N=n[S];if(N[y.id]===void 0)continue;let k=N[y.id];for(let V in k)h(k[V].object),delete k[V];delete N[y.id]}}function C(){O(),o=!0,r!==i&&(r=i,c(r.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:O,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function vb(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<u.length;_++)t.update(g,n,u[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yb(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==pn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Qn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==An&&!C)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){let A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:R,maxSamples:T}}function xb(s){let e=this,t=null,n=0,i=!1,r=!1,o=new wn,a=new Te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,v=b*4,M=m.clippingState||null;l.value=M,M=h(g,u,v,f);for(let R=0;R!==v;++R)M[R]=t[R];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,M=f;v!==_;++v,M+=4)o.copy(d[v]).applyMatrix4(b,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Mb(s){let e=new WeakMap;function t(o,a){return a===Xl?o.mapping=Cs:a===ql&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xl||a===ql)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Sc(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Fs=class extends Wo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ss=4,du=[.125,.215,.35,.446,.526,.582],Gi=20,xl=new Fs,uu=new ae,Ml=null,El=0,Sl=0,wl=!1,Hi=(1+Math.sqrt(5))/2,xs=1/Hi,fu=[new x(-Hi,xs,0),new x(Hi,xs,0),new x(-xs,0,Hi),new x(xs,0,Hi),new x(0,Hi,-xs),new x(0,Hi,xs),new x(-1,1,-1),new x(1,1,-1),new x(-1,1,1),new x(1,1,1)],qo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ml=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ml,El,Sl),this._renderer.xr.enabled=wl,e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ml=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Lr,format:pn,colorSpace:Lt,depthBuffer:!1},i=pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eb(r)),this._blurMaterial=Sb(r,e,t)}return i}_compileMaterial(e){let t=new J(this._lodPlanes[0],e);this._renderer.compile(t,xl)}_sceneToCubeUV(e,t,n,i){let a=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(uu),h.toneMapping=vi,h.autoClear=!1;let f=new wt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new J(new _t,f),_=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(uu),_=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):b===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let v=this._cubeSize;vo(i,b*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Cs||e.mapping===Ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new J(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;vo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fu[(i-r-1)%fu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new J(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Gi;p>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gi}`);let m=[],b=0;for(let A=0;A<Gi;++A){let C=A/_,O=Math.exp(-C*C/2);m.push(O),A===0?b+=O:A<p&&(b+=2*O)}for(let A=0;A<m.length;A++)m[A]=m[A]/b;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;let M=this._sizeLods[i],R=3*M*(i>v-Ss?i-v+Ss:0),T=4*(this._cubeSize-M);vo(t,R,T,3*M,2*M),l.setRenderTarget(t),l.render(d,xl)}};function Eb(s){let e=[],t=[],n=[],i=s,r=s-Ss+1+du.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ss?l=du[o-s+Ss-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,p=2,m=1,b=new Float32Array(_*g*f),v=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,C=T>2?0:-1,O=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];b.set(O,_*g*T),v.set(u,p*g*T);let y=[T,T,T,T,T,T];M.set(y,m*g*T)}let R=new Fe;R.setAttribute("position",new Le(b,_)),R.setAttribute("uv",new Le(v,p)),R.setAttribute("faceIndex",new Le(M,m)),e.push(R),i>Ss&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pu(s,e,t){let n=new ei(s,e,t);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Sb(s,e,t){let n=new Float32Array(Gi),i=new x(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mh(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function mu(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function gu(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}function wb(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xl||l===ql,h=l===Cs||l===Ls;if(c||h){let d=e.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new qo(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new qo(s)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Tb(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&No("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ab(s,e,t,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],s.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(f!==null){let b=f.array;_=f.version;for(let v=0,M=b.length;v<M;v+=3){let R=b[v+0],T=b[v+1],A=b[v+2];u.push(R,T,T,A,A,R)}}else if(g!==void 0){let b=g.array;_=g.version;for(let v=0,M=b.length/3-1;v<M;v+=3){let R=v+0,T=v+1,A=v+2;u.push(R,T,T,A,A,R)}}else return;let p=new(bf(u)?Go:zo)(u,1);p.version=_;let m=r.get(d);m&&e.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Rb(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function d(u,f,g,_){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let m=0;for(let b=0;b<g;b++)m+=f[b];for(let b=0;b<_.length;b++)t.update(m,n,_[b])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Pb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cb(s,e,t){let n=new WeakMap,i=new st;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let O=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let M=a.attributes.position.count*v,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*R*4*d),A=new Vo(T,M,R,d);A.type=An,A.needsUpdate=!0;let C=v*4;for(let y=0;y<d;y++){let S=p[y],N=m[y],k=b[y],V=M*R*4*y;for(let X=0;X<S.count;X++){let B=X*C;f===!0&&(i.fromBufferAttribute(S,X),T[V+B+0]=i.x,T[V+B+1]=i.y,T[V+B+2]=i.z,T[V+B+3]=0),g===!0&&(i.fromBufferAttribute(N,X),T[V+B+4]=i.x,T[V+B+5]=i.y,T[V+B+6]=i.z,T[V+B+7]=0),_===!0&&(i.fromBufferAttribute(k,X),T[V+B+8]=i.x,T[V+B+9]=i.y,T[V+B+10]=i.z,T[V+B+11]=k.itemSize===4?i.w:1)}}u={count:d,texture:A,size:new te(M,R)},n.set(a,u),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Lb(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var jo=class extends Vt{constructor(e,t,n,i,r,o,a,l,c,h=Ts){if(h!==Ts&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ts&&(n=Xi),n===void 0&&h===Ds&&(n=Is),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Mf=new Vt,_u=new jo(1,1),Ef=new Vo,Sf=new Mc,wf=new Xo,bu=[],vu=[],yu=new Float32Array(16),xu=new Float32Array(9),Mu=new Float32Array(4);function zs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=bu[i];if(r===void 0&&(r=new Float32Array(i),bu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function It(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function xa(s,e){let t=vu[e];t===void 0&&(t=new Int32Array(e),vu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ib(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Db(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function Ub(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function Nb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function Ob(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Mu.set(n),s.uniformMatrix2fv(this.addr,!1,Mu),Dt(t,n)}}function kb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;xu.set(n),s.uniformMatrix3fv(this.addr,!1,xu),Dt(t,n)}}function Fb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;yu.set(n),s.uniformMatrix4fv(this.addr,!1,yu),Dt(t,n)}}function Bb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Hb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function Vb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function zb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function Gb(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Wb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function Xb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function qb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function jb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(_u.compareFunction=gf,r=_u):r=Mf,t.setTexture2D(e||r,i)}function Yb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sf,i)}function $b(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wf,i)}function Kb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ef,i)}function Zb(s){switch(s){case 5126:return Ib;case 35664:return Db;case 35665:return Ub;case 35666:return Nb;case 35674:return Ob;case 35675:return kb;case 35676:return Fb;case 5124:case 35670:return Bb;case 35667:case 35671:return Hb;case 35668:case 35672:return Vb;case 35669:case 35673:return zb;case 5125:return Gb;case 36294:return Wb;case 36295:return Xb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return Kb}}function Qb(s,e){s.uniform1fv(this.addr,e)}function Jb(s,e){let t=zs(e,this.size,2);s.uniform2fv(this.addr,t)}function ev(s,e){let t=zs(e,this.size,3);s.uniform3fv(this.addr,t)}function tv(s,e){let t=zs(e,this.size,4);s.uniform4fv(this.addr,t)}function nv(s,e){let t=zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function iv(s,e){let t=zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sv(s,e){let t=zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rv(s,e){s.uniform1iv(this.addr,e)}function ov(s,e){s.uniform2iv(this.addr,e)}function av(s,e){s.uniform3iv(this.addr,e)}function lv(s,e){s.uniform4iv(this.addr,e)}function cv(s,e){s.uniform1uiv(this.addr,e)}function hv(s,e){s.uniform2uiv(this.addr,e)}function dv(s,e){s.uniform3uiv(this.addr,e)}function uv(s,e){s.uniform4uiv(this.addr,e)}function fv(s,e,t){let n=this.cache,i=e.length,r=xa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Mf,r[o])}function pv(s,e,t){let n=this.cache,i=e.length,r=xa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Sf,r[o])}function mv(s,e,t){let n=this.cache,i=e.length,r=xa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||wf,r[o])}function gv(s,e,t){let n=this.cache,i=e.length,r=xa(t,i);It(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ef,r[o])}function _v(s){switch(s){case 5126:return Qb;case 35664:return Jb;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return ov;case 35668:case 35672:return av;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return hv;case 36295:return dv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}var wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zb(t.type)}},Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_v(t.type)}},Ac=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Tl=/(\w+)(\])?(\[|\.)?/g;function Eu(s,e){s.seq.push(e),s.map[e.id]=e}function bv(s,e,t){let n=s.name,i=n.length;for(Tl.lastIndex=0;;){let r=Tl.exec(n),o=Tl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Eu(t,c===void 0?new wc(a,s,e):new Tc(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Ac(a),Eu(t,d)),t=d}}}var Rs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);bv(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Su(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var vv=37297,yv=0;function xv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Mv(s){let e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(s),n;switch(e===t?n="":e===Fo&&t===ko?n="LinearDisplayP3ToLinearSRGB":e===ko&&t===Fo&&(n="LinearSRGBToLinearDisplayP3"),s){case Lt:case ya:return[n,"LinearTransferOETF"];case Et:case uh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function wu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+xv(s.getShaderSource(e),o)}else return i}function Ev(s,e){let t=Mv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Sv(s,e){let t;switch(e){case Um:t="Linear";break;case Nm:t="Reinhard";break;case Om:t="Cineon";break;case ih:t="ACESFilmic";break;case Fm:t="AgX";break;case Bm:t="Neutral";break;case km:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yo=new x;function wv(){Ze.getLuminanceCoefficients(yo);let s=yo.x.toFixed(4),e=yo.y.toFixed(4),t=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Av(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function dr(s){return s!==""}function Tu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Au(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(s){return s.replace(Pv,Lv)}var Cv=new Map;function Lv(s,e){let t=Be[e];if(t===void 0){let n=Cv.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}var Iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ru(s){return s.replace(Iv,Dv)}function Dv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===nf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function Nv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cs:case Ls:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ov(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ls&&(e="ENVMAP_MODE_REFRACTION"),e}function kv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sf:e="ENVMAP_BLENDING_MULTIPLY";break;case Im:e="ENVMAP_BLENDING_MIX";break;case Dm:e="ENVMAP_BLENDING_ADD";break}return e}function Fv(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Bv(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Uv(t),c=Nv(t),h=Ov(t),d=kv(t),u=Fv(t),f=Tv(t),g=Av(r),_=i.createProgram(),p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),m.length>0&&(m+=`
`)):(p=[Pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),m=[Pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Be.tonemapping_pars_fragment:"",t.toneMapping!==vi?Sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Ev("linearToOutputTexel",t.outputColorSpace),wv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=Rc(o),o=Tu(o,t),o=Au(o,t),a=Rc(a),a=Tu(a,t),a=Au(a,t),o=Ru(o),a=Ru(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=b+p+o,M=b+m+a,R=Su(i,i.VERTEX_SHADER,v),T=Su(i,i.FRAGMENT_SHADER,M);i.attachShader(_,R),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(S){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(R).trim(),V=i.getShaderInfoLog(T).trim(),X=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,T);else{let Y=wu(i,R,"vertex"),G=wu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+Y+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(k===""||V==="")&&(B=!1);B&&(S.diagnostics={runnable:X,programLog:N,vertexShader:{log:k,prefix:p},fragmentShader:{log:V,prefix:m}})}i.deleteShader(R),i.deleteShader(T),C=new Rs(i,_),O=Rv(i,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let O;this.getAttributes=function(){return O===void 0&&A(this),O};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,vv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}var Hv=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cc(e),t.set(e,n)),n}},Cc=class{constructor(e){this.id=Hv++,this.code=e,this.usedTimes=0}};function Vv(s,e,t,n,i,r,o){let a=new xr,l=new Pc,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.reverseDepthBuffer,f=i.vertexTextures,g=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,N,k,V){let X=k.fog,B=V.geometry,Y=y.isMeshStandardMaterial?k.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),ie=G&&G.mapping===_a?G.image.height:null,se=_[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let pe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,He=pe!==void 0?pe.length:0,Qe=0;B.morphAttributes.position!==void 0&&(Qe=1),B.morphAttributes.normal!==void 0&&(Qe=2),B.morphAttributes.color!==void 0&&(Qe=3);let q,ee,ve,fe;if(se){let Xt=In[se];q=Xt.vertexShader,ee=Xt.fragmentShader}else q=y.vertexShader,ee=y.fragmentShader,l.update(y),ve=l.getVertexShaderID(y),fe=l.getFragmentShaderID(y);let Oe=s.getRenderTarget(),Re=V.isInstancedMesh===!0,qe=V.isBatchedMesh===!0,it=!!y.map,je=!!y.matcap,L=!!G,Gt=!!y.aoMap,Ge=!!y.lightMap,$e=!!y.bumpMap,Pe=!!y.normalMap,ht=!!y.displacementMap,Ie=!!y.emissiveMap,P=!!y.metalnessMap,E=!!y.roughnessMap,H=y.anisotropy>0,$=y.clearcoat>0,Z=y.dispersion>0,j=y.iridescence>0,Ee=y.sheen>0,le=y.transmission>0,me=H&&!!y.anisotropyMap,Je=$&&!!y.clearcoatMap,Q=$&&!!y.clearcoatNormalMap,ge=$&&!!y.clearcoatRoughnessMap,Ce=j&&!!y.iridescenceMap,De=j&&!!y.iridescenceThicknessMap,_e=Ee&&!!y.sheenColorMap,We=Ee&&!!y.sheenRoughnessMap,ke=!!y.specularMap,dt=!!y.specularColorMap,I=!!y.specularIntensityMap,ue=le&&!!y.transmissionMap,W=le&&!!y.thicknessMap,K=!!y.gradientMap,he=!!y.alphaMap,ce=y.alphaTest>0,ze=!!y.alphaHash,vt=!!y.extensions,Wt=vi;y.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Wt=s.toneMapping);let Ke={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:ee,defines:y.defines,customVertexShaderID:ve,customFragmentShaderID:fe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:qe,batchingColor:qe&&V._colorsTexture!==null,instancing:Re,instancingColor:Re&&V.instanceColor!==null,instancingMorph:Re&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Oe===null?s.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Lt,alphaToCoverage:!!y.alphaToCoverage,map:it,matcap:je,envMap:L,envMapMode:L&&G.mapping,envMapCubeUVHeight:ie,aoMap:Gt,lightMap:Ge,bumpMap:$e,normalMap:Pe,displacementMap:f&&ht,emissiveMap:Ie,normalMapObjectSpace:Pe&&y.normalMapType===Wm,normalMapTangentSpace:Pe&&y.normalMapType===va,metalnessMap:P,roughnessMap:E,anisotropy:H,anisotropyMap:me,clearcoat:$,clearcoatMap:Je,clearcoatNormalMap:Q,clearcoatRoughnessMap:ge,dispersion:Z,iridescence:j,iridescenceMap:Ce,iridescenceThicknessMap:De,sheen:Ee,sheenColorMap:_e,sheenRoughnessMap:We,specularMap:ke,specularColorMap:dt,specularIntensityMap:I,transmission:le,transmissionMap:ue,thicknessMap:W,gradientMap:K,opaque:y.transparent===!1&&y.blending===ws&&y.alphaToCoverage===!1,alphaMap:he,alphaTest:ce,alphaHash:ze,combine:y.combine,mapUv:it&&p(y.map.channel),aoMapUv:Gt&&p(y.aoMap.channel),lightMapUv:Ge&&p(y.lightMap.channel),bumpMapUv:$e&&p(y.bumpMap.channel),normalMapUv:Pe&&p(y.normalMap.channel),displacementMapUv:ht&&p(y.displacementMap.channel),emissiveMapUv:Ie&&p(y.emissiveMap.channel),metalnessMapUv:P&&p(y.metalnessMap.channel),roughnessMapUv:E&&p(y.roughnessMap.channel),anisotropyMapUv:me&&p(y.anisotropyMap.channel),clearcoatMapUv:Je&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:Q&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:De&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:We&&p(y.sheenRoughnessMap.channel),specularMapUv:ke&&p(y.specularMap.channel),specularColorMapUv:dt&&p(y.specularColorMap.channel),specularIntensityMapUv:I&&p(y.specularIntensityMap.channel),transmissionMapUv:ue&&p(y.transmissionMap.channel),thicknessMapUv:W&&p(y.thicknessMap.channel),alphaMapUv:he&&p(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Pe||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(it||he),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:Qe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Wt,decodeVideoTexture:it&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ot,flipSided:y.side===$t,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&y.extensions.multiDraw===!0||qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function b(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)S.push(N),S.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(v(S,y),M(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function v(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){let S=_[y.type],N;if(S){let k=In[S];N=ph.clone(k.uniforms)}else N=y.uniforms;return N}function T(y,S){let N;for(let k=0,V=h.length;k<V;k++){let X=h[k];if(X.cacheKey===S){N=X,++N.usedTimes;break}}return N===void 0&&(N=new Bv(s,S,y,r),h.push(N)),N}function A(y){if(--y.usedTimes===0){let S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function C(y){l.remove(y)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:R,acquireProgram:T,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:O}}function zv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Gv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Cu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Lu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,u,f,g,_,p){let m=s[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),e++,m}function a(d,u,f,g,_,p){let m=o(d,u,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(d,u,f,g,_,p){let m=o(d,u,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(d,u){t.length>1&&t.sort(d||Gv),n.length>1&&n.sort(u||Cu),i.length>1&&i.sort(u||Cu)}function h(){for(let d=e,u=s.length;d<u;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Wv(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Lu,s.set(n,[o])):i>=r.length?(o=new Lu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Xv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new x,color:new ae};break;case"SpotLight":t={position:new x,direction:new x,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new x,color:new ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new x,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":t={color:new ae,position:new x,halfWidth:new x,halfHeight:new x};break}return s[e.id]=t,t}}}function qv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var jv=0;function Yv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $v(s){let e=new Xv,t=qv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new x);let i=new x,r=new be,o=new be;function a(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,b=0,v=0,M=0,R=0,T=0,A=0;c.sort(Yv);for(let O=0,y=c.length;O<y;O++){let S=c[O],N=S.color,k=S.intensity,V=S.distance,X=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=N.r*k,d+=N.g*k,u+=N.b*k;else if(S.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(S.sh.coefficients[B],k);A++}else if(S.isDirectionalLight){let B=e.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let Y=S.shadow,G=t.get(S);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=S.shadow.matrix,b++}n.directional[f]=B,f++}else if(S.isSpotLight){let B=e.get(S);B.position.setFromMatrixPosition(S.matrixWorld),B.color.copy(N).multiplyScalar(k),B.distance=V,B.coneCos=Math.cos(S.angle),B.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),B.decay=S.decay,n.spot[_]=B;let Y=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,Y.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[_]=Y.matrix,S.castShadow){let G=t.get(S);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=X,M++}_++}else if(S.isRectAreaLight){let B=e.get(S);B.color.copy(N).multiplyScalar(k),B.halfWidth.set(S.width*.5,0,0),B.halfHeight.set(0,S.height*.5,0),n.rectArea[p]=B,p++}else if(S.isPointLight){let B=e.get(S);if(B.color.copy(S.color).multiplyScalar(S.intensity),B.distance=S.distance,B.decay=S.decay,S.castShadow){let Y=S.shadow,G=t.get(S);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=S.shadow.matrix,v++}n.point[g]=B,g++}else if(S.isHemisphereLight){let B=e.get(S);B.skyColor.copy(S.color).multiplyScalar(k),B.groundColor.copy(S.groundColor).multiplyScalar(k),n.hemi[m]=B,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==b||C.numPointShadows!==v||C.numSpotShadows!==M||C.numSpotMaps!==R||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=b,C.numPointShadows=v,C.numSpotShadows=M,C.numSpotMaps=R,C.numLightProbes=A,n.version=jv++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let v=c[m];if(v.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(v.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(v.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Iu(s){let e=new $v(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Kv(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Iu(s),e.set(i,[a])):r>=o.length?(a=new Iu(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Lc=class extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ic=class extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qv=`uniform sampler2D shadow_pass;
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
}`;function Jv(s,e,t){let n=new Mr,i=new te,r=new te,o=new st,a=new Lc({depthPacking:Gm}),l=new Ic,c={},h=t.maxTextureSize,d={[mn]:$t,[$t]:mn,[Ot]:Ot},u=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Zv,fragmentShader:Qv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Fe;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new J(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nf;let m=this.type;this.render=function(T,A,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let O=s.getRenderTarget(),y=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),N=s.state;N.setBlending(bi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=m!==$n&&this.type===$n,V=m===$n&&this.type!==$n;for(let X=0,B=T.length;X<B;X++){let Y=T[X],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let ie=G.getFrameExtents();if(i.multiply(ie),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ie.x),i.x=r.x*ie.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ie.y),i.y=r.y*ie.y,G.mapSize.y=r.y)),G.map===null||k===!0||V===!0){let pe=this.type!==$n?{minFilter:Yt,magFilter:Yt}:{};G.map!==null&&G.map.dispose(),G.map=new ei(i.x,i.y,pe),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let se=G.getViewportCount();for(let pe=0;pe<se;pe++){let He=G.getViewport(pe);o.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),N.viewport(o),G.updateMatrices(Y,pe),n=G.getFrustum(),M(A,C,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===$n&&b(G,C),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(O,y,S)};function b(T,A){let C=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ei(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,C,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,C,f,_,null)}function v(T,A,C,O){let y=null,S=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)y=S;else if(y=C.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let N=y.uuid,k=A.uuid,V=c[N];V===void 0&&(V={},c[N]=V);let X=V[k];X===void 0&&(X=y.clone(),V[k]=X,A.addEventListener("dispose",R)),y=X}if(y.visible=A.visible,y.wireframe=A.wireframe,O===$n?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=s.properties.get(y);N.light=C}return y}function M(T,A,C,O,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===$n)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let k=e.update(T),V=T.material;if(Array.isArray(V)){let X=k.groups;for(let B=0,Y=X.length;B<Y;B++){let G=X[B],ie=V[G.materialIndex];if(ie&&ie.visible){let se=v(T,ie,O,y);T.onBeforeShadow(s,T,A,C,k,se,G),s.renderBufferDirect(C,null,k,se,T,G),T.onAfterShadow(s,T,A,C,k,se,G)}}}else if(V.visible){let X=v(T,V,O,y);T.onBeforeShadow(s,T,A,C,k,X,null),s.renderBufferDirect(C,null,k,X,T,null),T.onAfterShadow(s,T,A,C,k,X,null)}}let N=T.children;for(let k=0,V=N.length;k<V;k++)M(N[k],A,C,O,y)}function R(T){T.target.removeEventListener("dispose",R);for(let C in c){let O=c[C],y=T.target.uuid;y in O&&(O[y].dispose(),delete O[y])}}}var ey={[Fl]:Bl,[Hl]:Gl,[Vl]:Wl,[Ps]:zl,[Bl]:Fl,[Gl]:Hl,[Wl]:Vl,[zl]:Ps};function ty(s){function e(){let I=!1,ue=new st,W=null,K=new st(0,0,0,0);return{setMask:function(he){W!==he&&!I&&(s.colorMask(he,he,he,he),W=he)},setLocked:function(he){I=he},setClear:function(he,ce,ze,vt,Wt){Wt===!0&&(he*=vt,ce*=vt,ze*=vt),ue.set(he,ce,ze,vt),K.equals(ue)===!1&&(s.clearColor(he,ce,ze,vt),K.copy(ue))},reset:function(){I=!1,W=null,K.set(-1,0,0,0)}}}function t(){let I=!1,ue=!1,W=null,K=null,he=null;return{setReversed:function(ce){ue=ce},setTest:function(ce){ce?ve(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(ce){W!==ce&&!I&&(s.depthMask(ce),W=ce)},setFunc:function(ce){if(ue&&(ce=ey[ce]),K!==ce){switch(ce){case Fl:s.depthFunc(s.NEVER);break;case Bl:s.depthFunc(s.ALWAYS);break;case Hl:s.depthFunc(s.LESS);break;case Ps:s.depthFunc(s.LEQUAL);break;case Vl:s.depthFunc(s.EQUAL);break;case zl:s.depthFunc(s.GEQUAL);break;case Gl:s.depthFunc(s.GREATER);break;case Wl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ce}},setLocked:function(ce){I=ce},setClear:function(ce){he!==ce&&(s.clearDepth(ce),he=ce)},reset:function(){I=!1,W=null,K=null,he=null}}}function n(){let I=!1,ue=null,W=null,K=null,he=null,ce=null,ze=null,vt=null,Wt=null;return{setTest:function(Ke){I||(Ke?ve(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(Ke){ue!==Ke&&!I&&(s.stencilMask(Ke),ue=Ke)},setFunc:function(Ke,Xt,yn){(W!==Ke||K!==Xt||he!==yn)&&(s.stencilFunc(Ke,Xt,yn),W=Ke,K=Xt,he=yn)},setOp:function(Ke,Xt,yn){(ce!==Ke||ze!==Xt||vt!==yn)&&(s.stencilOp(Ke,Xt,yn),ce=Ke,ze=Xt,vt=yn)},setLocked:function(Ke){I=Ke},setClear:function(Ke){Wt!==Ke&&(s.clearStencil(Ke),Wt=Ke)},reset:function(){I=!1,ue=null,W=null,K=null,he=null,ce=null,ze=null,vt=null,Wt=null}}}let i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],f=null,g=!1,_=null,p=null,m=null,b=null,v=null,M=null,R=null,T=new ae(0,0,0),A=0,C=!1,O=null,y=null,S=null,N=null,k=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,B=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=B>=2);let G=null,ie={},se=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),He=new st().fromArray(se),Qe=new st().fromArray(pe);function q(I,ue,W,K){let he=new Uint8Array(4),ce=s.createTexture();s.bindTexture(I,ce),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ze=0;ze<W;ze++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(ue+ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return ce}let ee={};ee[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ve(s.DEPTH_TEST),r.setFunc(Ps),Ge(!1),$e(kd),ve(s.CULL_FACE),L(bi);function ve(I){c[I]!==!0&&(s.enable(I),c[I]=!0)}function fe(I){c[I]!==!1&&(s.disable(I),c[I]=!1)}function Oe(I,ue){return h[I]!==ue?(s.bindFramebuffer(I,ue),h[I]=ue,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ue),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function Re(I,ue){let W=u,K=!1;if(I){W=d.get(ue),W===void 0&&(W=[],d.set(ue,W));let he=I.textures;if(W.length!==he.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,ze=he.length;ce<ze;ce++)W[ce]=s.COLOR_ATTACHMENT0+ce;W.length=he.length,K=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,K=!0);K&&s.drawBuffers(W)}function qe(I){return f!==I?(s.useProgram(I),f=I,!0):!1}let it={[Vi]:s.FUNC_ADD,[mm]:s.FUNC_SUBTRACT,[gm]:s.FUNC_REVERSE_SUBTRACT};it[_m]=s.MIN,it[bm]=s.MAX;let je={[vm]:s.ZERO,[ym]:s.ONE,[xm]:s.SRC_COLOR,[Ol]:s.SRC_ALPHA,[Am]:s.SRC_ALPHA_SATURATE,[wm]:s.DST_COLOR,[Em]:s.DST_ALPHA,[Mm]:s.ONE_MINUS_SRC_COLOR,[kl]:s.ONE_MINUS_SRC_ALPHA,[Tm]:s.ONE_MINUS_DST_COLOR,[Sm]:s.ONE_MINUS_DST_ALPHA,[Rm]:s.CONSTANT_COLOR,[Pm]:s.ONE_MINUS_CONSTANT_COLOR,[Cm]:s.CONSTANT_ALPHA,[Lm]:s.ONE_MINUS_CONSTANT_ALPHA};function L(I,ue,W,K,he,ce,ze,vt,Wt,Ke){if(I===bi){g===!0&&(fe(s.BLEND),g=!1);return}if(g===!1&&(ve(s.BLEND),g=!0),I!==pm){if(I!==_||Ke!==C){if((p!==Vi||v!==Vi)&&(s.blendEquation(s.FUNC_ADD),p=Vi,v=Vi),Ke)switch(I){case ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fd:s.blendFunc(s.ONE,s.ONE);break;case Bd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fd:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,b=null,M=null,R=null,T.set(0,0,0),A=0,_=I,C=Ke}return}he=he||ue,ce=ce||W,ze=ze||K,(ue!==p||he!==v)&&(s.blendEquationSeparate(it[ue],it[he]),p=ue,v=he),(W!==m||K!==b||ce!==M||ze!==R)&&(s.blendFuncSeparate(je[W],je[K],je[ce],je[ze]),m=W,b=K,M=ce,R=ze),(vt.equals(T)===!1||Wt!==A)&&(s.blendColor(vt.r,vt.g,vt.b,Wt),T.copy(vt),A=Wt),_=I,C=!1}function Gt(I,ue){I.side===Ot?fe(s.CULL_FACE):ve(s.CULL_FACE);let W=I.side===$t;ue&&(W=!W),Ge(W),I.blending===ws&&I.transparent===!1?L(bi):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),i.setMask(I.colorWrite);let K=I.stencilWrite;o.setTest(K),K&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ht(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(I){O!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),O=I)}function $e(I){I!==um?(ve(s.CULL_FACE),I!==y&&(I===kd?s.cullFace(s.BACK):I===fm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),y=I}function Pe(I){I!==S&&(X&&s.lineWidth(I),S=I)}function ht(I,ue,W){I?(ve(s.POLYGON_OFFSET_FILL),(N!==ue||k!==W)&&(s.polygonOffset(ue,W),N=ue,k=W)):fe(s.POLYGON_OFFSET_FILL)}function Ie(I){I?ve(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function P(I){I===void 0&&(I=s.TEXTURE0+V-1),G!==I&&(s.activeTexture(I),G=I)}function E(I,ue,W){W===void 0&&(G===null?W=s.TEXTURE0+V-1:W=G);let K=ie[W];K===void 0&&(K={type:void 0,texture:void 0},ie[W]=K),(K.type!==I||K.texture!==ue)&&(G!==W&&(s.activeTexture(W),G=W),s.bindTexture(I,ue||ee[I]),K.type=I,K.texture=ue)}function H(){let I=ie[G];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(I){He.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),He.copy(I))}function _e(I){Qe.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Qe.copy(I))}function We(I,ue){let W=l.get(ue);W===void 0&&(W=new WeakMap,l.set(ue,W));let K=W.get(I);K===void 0&&(K=s.getUniformBlockIndex(ue,I.name),W.set(I,K))}function ke(I,ue){let K=l.get(ue).get(I);a.get(ue)!==K&&(s.uniformBlockBinding(ue,K,I.__bindingPointIndex),a.set(ue,K))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},G=null,ie={},h={},d=new WeakMap,u=[],f=null,g=!1,_=null,p=null,m=null,b=null,v=null,M=null,R=null,T=new ae(0,0,0),A=0,C=!1,O=null,y=null,S=null,N=null,k=null,He.set(0,0,s.canvas.width,s.canvas.height),Qe.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:ve,disable:fe,bindFramebuffer:Oe,drawBuffers:Re,useProgram:qe,setBlending:L,setMaterial:Gt,setFlipSided:Ge,setCullFace:$e,setLineWidth:Pe,setPolygonOffset:ht,setScissorTest:Ie,activeTexture:P,bindTexture:E,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:ge,texImage3D:Ce,updateUBOMapping:We,uniformBlockBinding:ke,texStorage2D:Je,texStorage3D:Q,texSubImage2D:j,texSubImage3D:Ee,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:De,viewport:_e,reset:dt}}function Du(s,e,t,n){let i=ny(n);switch(t){case cf:return s*e;case df:return s*e;case uf:return s*e*2;case lh:return s*e/i.components*i.byteLength;case ch:return s*e/i.components*i.byteLength;case ff:return s*e*2/i.components*i.byteLength;case hh:return s*e*2/i.components*i.byteLength;case hf:return s*e*3/i.components*i.byteLength;case pn:return s*e*4/i.components*i.byteLength;case dh:return s*e*4/i.components*i.byteLength;case Co:case Lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Io:case Do:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yl:case Kl:return Math.max(s,16)*Math.max(e,8)/4;case jl:case $l:return Math.max(s,8)*Math.max(e,8)/2;case Zl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case rc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ac:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case lc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case cc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Uo:case pc:case mc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pf:case gc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _c:case bc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ny(s){switch(s){case Qn:case of:return{byteLength:1,components:1};case vr:case af:case Lr:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case Xi:case rh:case An:return{byteLength:4,components:1};case lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function iy(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return f?new OffscreenCanvas(P,E):yr("canvas")}function _(P,E,H){let $=1,Z=Ie(P);if((Z.width>H||Z.height>H)&&($=H/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let j=Math.floor($*Z.width),Ee=Math.floor($*Z.height);d===void 0&&(d=g(j,Ee));let le=E?g(j,Ee):d;return le.width=j,le.height=Ee,le.getContext("2d").drawImage(P,0,0,j,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+Ee+")."),le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==Yt&&P.minFilter!==en}function m(P){s.generateMipmap(P)}function b(P,E,H,$,Z=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=E;if(E===s.RED&&(H===s.FLOAT&&(j=s.R32F),H===s.HALF_FLOAT&&(j=s.R16F),H===s.UNSIGNED_BYTE&&(j=s.R8)),E===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.R8UI),H===s.UNSIGNED_SHORT&&(j=s.R16UI),H===s.UNSIGNED_INT&&(j=s.R32UI),H===s.BYTE&&(j=s.R8I),H===s.SHORT&&(j=s.R16I),H===s.INT&&(j=s.R32I)),E===s.RG&&(H===s.FLOAT&&(j=s.RG32F),H===s.HALF_FLOAT&&(j=s.RG16F),H===s.UNSIGNED_BYTE&&(j=s.RG8)),E===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RG8UI),H===s.UNSIGNED_SHORT&&(j=s.RG16UI),H===s.UNSIGNED_INT&&(j=s.RG32UI),H===s.BYTE&&(j=s.RG8I),H===s.SHORT&&(j=s.RG16I),H===s.INT&&(j=s.RG32I)),E===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGB8UI),H===s.UNSIGNED_SHORT&&(j=s.RGB16UI),H===s.UNSIGNED_INT&&(j=s.RGB32UI),H===s.BYTE&&(j=s.RGB8I),H===s.SHORT&&(j=s.RGB16I),H===s.INT&&(j=s.RGB32I)),E===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),H===s.UNSIGNED_INT&&(j=s.RGBA32UI),H===s.BYTE&&(j=s.RGBA8I),H===s.SHORT&&(j=s.RGBA16I),H===s.INT&&(j=s.RGBA32I)),E===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),E===s.RGBA){let Ee=Z?Oo:Ze.getTransfer($);H===s.FLOAT&&(j=s.RGBA32F),H===s.HALF_FLOAT&&(j=s.RGBA16F),H===s.UNSIGNED_BYTE&&(j=Ee===gt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(P,E){let H;return P?E===null||E===Xi||E===Is?H=s.DEPTH24_STENCIL8:E===An?H=s.DEPTH32F_STENCIL8:E===vr&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===Is?H=s.DEPTH_COMPONENT24:E===An?H=s.DEPTH_COMPONENT32F:E===vr&&(H=s.DEPTH_COMPONENT16),H}function M(P,E){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Yt&&P.minFilter!==en?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){let E=P.target;E.removeEventListener("dispose",R),A(E),E.isVideoTexture&&h.delete(E)}function T(P){let E=P.target;E.removeEventListener("dispose",T),O(E)}function A(P){let E=n.get(P);if(E.__webglInit===void 0)return;let H=P.source,$=u.get(H);if($){let Z=$[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(P),Object.keys($).length===0&&u.delete(H)}n.remove(P)}function C(P){let E=n.get(P);s.deleteTexture(E.__webglTexture);let H=P.source,$=u.get(H);delete $[E.__cacheKey],o.memory.textures--}function O(P){let E=n.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let Z=0;Z<E.__webglFramebuffer[$].length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[$][Z]);else s.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)s.deleteFramebuffer(E.__webglFramebuffer[$]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let H=P.textures;for(let $=0,Z=H.length;$<Z;$++){let j=n.get(H[$]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(P)}let y=0;function S(){y=0}function N(){let P=y;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),y+=1,P}function k(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function V(P,E){let H=n.get(P);if(P.isVideoTexture&&Pe(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){let $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(H,P,E);return}}t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+E)}function X(P,E){let H=n.get(P);if(P.version>0&&H.__version!==P.version){Qe(H,P,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+E)}function B(P,E){let H=n.get(P);if(P.version>0&&H.__version!==P.version){Qe(H,P,E);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+E)}function Y(P,E){let H=n.get(P);if(P.version>0&&H.__version!==P.version){q(H,P,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+E)}let G={[Wi]:s.REPEAT,[Kn]:s.CLAMP_TO_EDGE,[br]:s.MIRRORED_REPEAT},ie={[Yt]:s.NEAREST,[sh]:s.NEAREST_MIPMAP_NEAREST,[Es]:s.NEAREST_MIPMAP_LINEAR,[en]:s.LINEAR,[ur]:s.LINEAR_MIPMAP_NEAREST,[Dn]:s.LINEAR_MIPMAP_LINEAR},se={[Xm]:s.NEVER,[Zm]:s.ALWAYS,[qm]:s.LESS,[gf]:s.LEQUAL,[jm]:s.EQUAL,[Km]:s.GEQUAL,[Ym]:s.GREATER,[$m]:s.NOTEQUAL};function pe(P,E){if(E.type===An&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===en||E.magFilter===ur||E.magFilter===Es||E.magFilter===Dn||E.minFilter===en||E.minFilter===ur||E.minFilter===Es||E.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,G[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,G[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,G[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ie[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ie[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Yt||E.minFilter!==Es&&E.minFilter!==Dn||E.type===An&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function He(P,E){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",R));let $=E.source,Z=u.get($);Z===void 0&&(Z={},u.set($,Z));let j=k(E);if(j!==P.__cacheKey){Z[j]===void 0&&(Z[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Z[j].usedTimes++;let Ee=Z[P.__cacheKey];Ee!==void 0&&(Z[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&C(E)),P.__cacheKey=j,P.__webglTexture=Z[j].texture}return H}function Qe(P,E,H){let $=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=s.TEXTURE_3D);let Z=He(P,E),j=E.source;t.bindTexture($,P.__webglTexture,s.TEXTURE0+H);let Ee=n.get(j);if(j.version!==Ee.__version||Z===!0){t.activeTexture(s.TEXTURE0+H);let le=Ze.getPrimaries(Ze.workingColorSpace),me=E.colorSpace===gi?null:Ze.getPrimaries(E.colorSpace),Je=E.colorSpace===gi||le===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Q=_(E.image,!1,i.maxTextureSize);Q=ht(E,Q);let ge=r.convert(E.format,E.colorSpace),Ce=r.convert(E.type),De=b(E.internalFormat,ge,Ce,E.colorSpace,E.isVideoTexture);pe($,E);let _e,We=E.mipmaps,ke=E.isVideoTexture!==!0,dt=Ee.__version===void 0||Z===!0,I=j.dataReady,ue=M(E,Q);if(E.isDepthTexture)De=v(E.format===Ds,E.type),dt&&(ke?t.texStorage2D(s.TEXTURE_2D,1,De,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,De,Q.width,Q.height,0,ge,Ce,null));else if(E.isDataTexture)if(We.length>0){ke&&dt&&t.texStorage2D(s.TEXTURE_2D,ue,De,We[0].width,We[0].height);for(let W=0,K=We.length;W<K;W++)_e=We[W],ke?I&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Ce,_e.data):t.texImage2D(s.TEXTURE_2D,W,De,_e.width,_e.height,0,ge,Ce,_e.data);E.generateMipmaps=!1}else ke?(dt&&t.texStorage2D(s.TEXTURE_2D,ue,De,Q.width,Q.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,ge,Ce,Q.data)):t.texImage2D(s.TEXTURE_2D,0,De,Q.width,Q.height,0,ge,Ce,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ke&&dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,De,We[0].width,We[0].height,Q.depth);for(let W=0,K=We.length;W<K;W++)if(_e=We[W],E.format!==pn)if(ge!==null)if(ke){if(I)if(E.layerUpdates.size>0){let he=Du(_e.width,_e.height,E.format,E.type);for(let ce of E.layerUpdates){let ze=_e.data.subarray(ce*he/_e.data.BYTES_PER_ELEMENT,(ce+1)*he/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,ce,_e.width,_e.height,1,ge,ze,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,Q.depth,ge,_e.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,De,_e.width,_e.height,Q.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,Q.depth,ge,Ce,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,W,De,_e.width,_e.height,Q.depth,0,ge,Ce,_e.data)}else{ke&&dt&&t.texStorage2D(s.TEXTURE_2D,ue,De,We[0].width,We[0].height);for(let W=0,K=We.length;W<K;W++)_e=We[W],E.format!==pn?ge!==null?ke?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,W,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Ce,_e.data):t.texImage2D(s.TEXTURE_2D,W,De,_e.width,_e.height,0,ge,Ce,_e.data)}else if(E.isDataArrayTexture)if(ke){if(dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,De,Q.width,Q.height,Q.depth),I)if(E.layerUpdates.size>0){let W=Du(Q.width,Q.height,E.format,E.type);for(let K of E.layerUpdates){let he=Q.data.subarray(K*W/Q.data.BYTES_PER_ELEMENT,(K+1)*W/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ge,Ce,he)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ge,Ce,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,De,Q.width,Q.height,Q.depth,0,ge,Ce,Q.data);else if(E.isData3DTexture)ke?(dt&&t.texStorage3D(s.TEXTURE_3D,ue,De,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ge,Ce,Q.data)):t.texImage3D(s.TEXTURE_3D,0,De,Q.width,Q.height,Q.depth,0,ge,Ce,Q.data);else if(E.isFramebufferTexture){if(dt)if(ke)t.texStorage2D(s.TEXTURE_2D,ue,De,Q.width,Q.height);else{let W=Q.width,K=Q.height;for(let he=0;he<ue;he++)t.texImage2D(s.TEXTURE_2D,he,De,W,K,0,ge,Ce,null),W>>=1,K>>=1}}else if(We.length>0){if(ke&&dt){let W=Ie(We[0]);t.texStorage2D(s.TEXTURE_2D,ue,De,W.width,W.height)}for(let W=0,K=We.length;W<K;W++)_e=We[W],ke?I&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,ge,Ce,_e):t.texImage2D(s.TEXTURE_2D,W,De,ge,Ce,_e);E.generateMipmaps=!1}else if(ke){if(dt){let W=Ie(Q);t.texStorage2D(s.TEXTURE_2D,ue,De,W.width,W.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,Ce,Q)}else t.texImage2D(s.TEXTURE_2D,0,De,ge,Ce,Q);p(E)&&m($),Ee.__version=j.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function q(P,E,H){if(E.image.length!==6)return;let $=He(P,E),Z=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+H);let j=n.get(Z);if(Z.version!==j.__version||$===!0){t.activeTexture(s.TEXTURE0+H);let Ee=Ze.getPrimaries(Ze.workingColorSpace),le=E.colorSpace===gi?null:Ze.getPrimaries(E.colorSpace),me=E.colorSpace===gi||Ee===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Je=E.isCompressedTexture||E.image[0].isCompressedTexture,Q=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let K=0;K<6;K++)!Je&&!Q?ge[K]=_(E.image[K],!0,i.maxCubemapSize):ge[K]=Q?E.image[K].image:E.image[K],ge[K]=ht(E,ge[K]);let Ce=ge[0],De=r.convert(E.format,E.colorSpace),_e=r.convert(E.type),We=b(E.internalFormat,De,_e,E.colorSpace),ke=E.isVideoTexture!==!0,dt=j.__version===void 0||$===!0,I=Z.dataReady,ue=M(E,Ce);pe(s.TEXTURE_CUBE_MAP,E);let W;if(Je){ke&&dt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,We,Ce.width,Ce.height);for(let K=0;K<6;K++){W=ge[K].mipmaps;for(let he=0;he<W.length;he++){let ce=W[he];E.format!==pn?De!==null?ke?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,ce.width,ce.height,De,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,We,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,0,0,ce.width,ce.height,De,_e,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,he,We,ce.width,ce.height,0,De,_e,ce.data)}}}else{if(W=E.mipmaps,ke&&dt){W.length>0&&ue++;let K=Ie(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ue,We,K.width,K.height)}for(let K=0;K<6;K++)if(Q){ke?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ge[K].width,ge[K].height,De,_e,ge[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,ge[K].width,ge[K].height,0,De,_e,ge[K].data);for(let he=0;he<W.length;he++){let ze=W[he].image[K].image;ke?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,ze.width,ze.height,De,_e,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,We,ze.width,ze.height,0,De,_e,ze.data)}}else{ke?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,De,_e,ge[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,De,_e,ge[K]);for(let he=0;he<W.length;he++){let ce=W[he];ke?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,0,0,De,_e,ce.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,he+1,We,De,_e,ce.image[K])}}}p(E)&&m(s.TEXTURE_CUBE_MAP),j.__version=Z.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ee(P,E,H,$,Z,j){let Ee=r.convert(H.format,H.colorSpace),le=r.convert(H.type),me=b(H.internalFormat,Ee,le,H.colorSpace);if(!n.get(E).__hasExternalTextures){let Q=Math.max(1,E.width>>j),ge=Math.max(1,E.height>>j);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,me,Q,ge,E.depth,0,Ee,le,null):t.texImage2D(Z,j,me,Q,ge,0,Ee,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),$e(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,n.get(H).__webglTexture,0,Ge(E)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,n.get(H).__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(P,E,H){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){let $=E.depthTexture,Z=$&&$.isDepthTexture?$.type:null,j=v(E.stencilBuffer,Z),Ee=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=Ge(E);$e(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,j,E.width,E.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,j,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,j,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,P)}else{let $=E.textures;for(let Z=0;Z<$.length;Z++){let j=$[Z],Ee=r.convert(j.format,j.colorSpace),le=r.convert(j.type),me=b(j.internalFormat,Ee,le,j.colorSpace),Je=Ge(E);H&&$e(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,me,E.width,E.height):$e(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,me,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,me,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function fe(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);let $=n.get(E.depthTexture).__webglTexture,Z=Ge(E);if(E.depthTexture.format===Ts)$e(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(E.depthTexture.format===Ds)$e(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Oe(P){let E=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let $=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){let Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=$}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");fe(E.__webglFramebuffer,P)}else if(H){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=s.createRenderbuffer(),ve(E.__webglDepthbuffer[$],P,!1);else{let Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ve(E.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Z)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(P,E,H){let $=n.get(P);E!==void 0&&ee($.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Oe(P)}function qe(P){let E=P.texture,H=n.get(P),$=n.get(E);P.addEventListener("dispose",T);let Z=P.textures,j=P.isWebGLCubeRenderTarget===!0,Ee=Z.length>1;if(Ee||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=E.version,o.memory.textures++),j){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let me=0;me<E.mipmaps.length;me++)H.__webglFramebuffer[le][me]=s.createFramebuffer()}else H.__webglFramebuffer[le]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)H.__webglFramebuffer[le]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Ee)for(let le=0,me=Z.length;le<me;le++){let Je=n.get(Z[le]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&$e(P)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<Z.length;le++){let me=Z[le];H.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[le]);let Je=r.convert(me.format,me.colorSpace),Q=r.convert(me.type),ge=b(me.internalFormat,Je,Q,me.colorSpace,P.isXRRenderTarget===!0),Ce=Ge(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,ge,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,H.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(H.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),pe(s.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)ee(H.__webglFramebuffer[le][me],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else ee(H.__webglFramebuffer[le],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(E)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let le=0,me=Z.length;le<me;le++){let Je=Z[le],Q=n.get(Je);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture),pe(s.TEXTURE_2D,Je),ee(H.__webglFramebuffer,P,Je,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),p(Je)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),pe(le,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)ee(H.__webglFramebuffer[me],P,E,s.COLOR_ATTACHMENT0,le,me);else ee(H.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,le,0);p(E)&&m(le),t.unbindTexture()}P.depthBuffer&&Oe(P)}function it(P){let E=P.textures;for(let H=0,$=E.length;H<$;H++){let Z=E[H];if(p(Z)){let j=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ee=n.get(Z).__webglTexture;t.bindTexture(j,Ee),m(j),t.unbindTexture()}}}let je=[],L=[];function Gt(P){if(P.samples>0){if($e(P)===!1){let E=P.textures,H=P.width,$=P.height,Z=s.COLOR_BUFFER_BIT,j=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=n.get(P),le=E.length>1;if(le)for(let me=0;me<E.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<E.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);let Je=n.get(E[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,H,$,0,0,H,$,Z,s.NEAREST),l===!0&&(je.length=0,L.length=0,je.push(s.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(je.push(j),L.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<E.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);let Je=n.get(E[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ge(P){return Math.min(i.maxSamples,P.samples)}function $e(P){let E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pe(P){let E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function ht(P,E){let H=P.colorSpace,$=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Lt&&H!==gi&&(Ze.getTransfer(H)===gt?($!==pn||Z!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function Ie(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=Re,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=$e}function sy(s,e){function t(n,i=gi){let r,o=Ze.getTransfer(i);if(n===Qn)return s.UNSIGNED_BYTE;if(n===oh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===of)return s.BYTE;if(n===af)return s.SHORT;if(n===vr)return s.UNSIGNED_SHORT;if(n===rh)return s.INT;if(n===Xi)return s.UNSIGNED_INT;if(n===An)return s.FLOAT;if(n===Lr)return s.HALF_FLOAT;if(n===cf)return s.ALPHA;if(n===hf)return s.RGB;if(n===pn)return s.RGBA;if(n===df)return s.LUMINANCE;if(n===uf)return s.LUMINANCE_ALPHA;if(n===Ts)return s.DEPTH_COMPONENT;if(n===Ds)return s.DEPTH_STENCIL;if(n===lh)return s.RED;if(n===ch)return s.RED_INTEGER;if(n===ff)return s.RG;if(n===hh)return s.RG_INTEGER;if(n===dh)return s.RGBA_INTEGER;if(n===Co||n===Lo||n===Io||n===Do)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jl||n===Yl||n===$l||n===Kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zl||n===Ql||n===Jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zl||n===Ql)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jl)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===dc||n===uc||n===fc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ec)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ac)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uo||n===pc||n===mc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Uo)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pf||n===gc||n===_c||n===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Dc=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},et=class extends tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ry={type:"move"},mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ry)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ay=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Vt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tn({vertexShader:oy,fragmentShader:ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nc=class extends Jn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=new Uc,p=t.getContextAttributes(),m=null,b=null,v=[],M=[],R=new te,T=null,A=new Ct;A.layers.enable(1),A.viewport=new st;let C=new Ct;C.layers.enable(2),C.viewport=new st;let O=[A,C],y=new Dc;y.layers.enable(1),y.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=v[q];return ee===void 0&&(ee=new mr,v[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=v[q];return ee===void 0&&(ee=new mr,v[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=v[q];return ee===void 0&&(ee=new mr,v[q]=ee),ee.getHandSpace()};function k(q){let ee=M.indexOf(q.inputSource);if(ee===-1)return;let ve=v[ee];ve!==void 0&&(ve.update(q.inputSource,q.frame,c||o),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",X);for(let q=0;q<v.length;q++){let ee=M[q];ee!==null&&(M[q]=null,v[q].disconnect(ee))}S=null,N=null,_.reset(),e.setRenderTarget(m),f=null,u=null,d=null,i=null,b=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",V),i.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){let ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ei(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,ve=null,fe=null;p.depth&&(fe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?Ds:Ts,ve=p.stencil?Is:Xi);let Oe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(Oe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new ei(u.textureWidth,u.textureHeight,{format:pn,type:Qn,depthTexture:new jo(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let ee=0;ee<q.removed.length;ee++){let ve=q.removed[ee],fe=M.indexOf(ve);fe>=0&&(M[fe]=null,v[fe].disconnect(ve))}for(let ee=0;ee<q.added.length;ee++){let ve=q.added[ee],fe=M.indexOf(ve);if(fe===-1){for(let Re=0;Re<v.length;Re++)if(Re>=M.length){M.push(ve),fe=Re;break}else if(M[Re]===null){M[Re]=ve,fe=Re;break}if(fe===-1)break}let Oe=v[fe];Oe&&Oe.connect(ve)}}let B=new x,Y=new x;function G(q,ee,ve){B.setFromMatrixPosition(ee.matrixWorld),Y.setFromMatrixPosition(ve.matrixWorld);let fe=B.distanceTo(Y),Oe=ee.projectionMatrix.elements,Re=ve.projectionMatrix.elements,qe=Oe[14]/(Oe[10]-1),it=Oe[14]/(Oe[10]+1),je=(Oe[9]+1)/Oe[5],L=(Oe[9]-1)/Oe[5],Gt=(Oe[8]-1)/Oe[0],Ge=(Re[8]+1)/Re[0],$e=qe*Gt,Pe=qe*Ge,ht=fe/(-Gt+Ge),Ie=ht*-Gt;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ie),q.translateZ(ht),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Oe[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let P=qe+ht,E=it+ht,H=$e-Ie,$=Pe+(fe-Ie),Z=je*it/E*P,j=L*it/E*P;q.projectionMatrix.makePerspective(H,$,Z,j,P,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ee=q.near,ve=q.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ve=_.depthFar)),y.near=C.near=A.near=ee,y.far=C.far=A.far=ve,(S!==y.near||N!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,N=y.far);let fe=q.parent,Oe=y.cameras;ie(y,fe);for(let Re=0;Re<Oe.length;Re++)ie(Oe[Re],fe);Oe.length===2?G(y,A,C):y.projectionMatrix.copy(A.projectionMatrix),se(q,y,fe)};function se(q,ee,ve){ve===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Os*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let pe=null;function He(q,ee){if(h=ee.getViewerPose(c||o),g=ee,h!==null){let ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let fe=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,fe=!0);for(let Re=0;Re<ve.length;Re++){let qe=ve[Re],it=null;if(f!==null)it=f.getViewport(qe);else{let L=d.getViewSubImage(u,qe);it=L.viewport,Re===0&&(e.setRenderTargetTextures(b,L.colorTexture,u.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(b))}let je=O[Re];je===void 0&&(je=new Ct,je.layers.enable(Re),je.viewport=new st,O[Re]=je),je.matrix.fromArray(qe.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(qe.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(it.x,it.y,it.width,it.height),Re===0&&(y.matrix.copy(je.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),fe===!0&&y.cameras.push(je)}let Oe=i.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){let Re=d.getDepthInformation(ve[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,i.renderState)}}for(let ve=0;ve<v.length;ve++){let fe=M[ve],Oe=v[ve];fe!==null&&Oe!==void 0&&Oe.update(fe,ee,c||o)}pe&&pe(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let Qe=new xf;Qe.setAnimationLoop(He),this.setAnimationLoop=function(q){pe=q},this.dispose=function(){}}},Bi=new yt,ly=new be;function cy(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,yf(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,b,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===$t&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===$t&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=e.get(m),v=b.envMap,M=b.envMapRotation;v&&(p.envMap.value=v,Bi.copy(M),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),p.envMapRotation.value.setFromMatrix4(ly.makeRotationFromEuler(Bi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$t&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hy(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let M=v.program;n.uniformBlockBinding(b,M)}function c(b,v){let M=i[b.id];M===void 0&&(g(b),M=h(b),i[b.id]=M,b.addEventListener("dispose",p));let R=v.program;n.updateUBOMapping(b,R);let T=e.render.frame;r[b.id]!==T&&(u(b),r[b.id]=T)}function h(b){let v=d();b.__bindingPointIndex=v;let M=s.createBuffer(),R=b.__size,T=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,M),M}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let v=i[b.id],M=b.uniforms,R=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,A=M.length;T<A;T++){let C=Array.isArray(M[T])?M[T]:[M[T]];for(let O=0,y=C.length;O<y;O++){let S=C[O];if(f(S,T,O,R)===!0){let N=S.__offset,k=Array.isArray(S.value)?S.value:[S.value],V=0;for(let X=0;X<k.length;X++){let B=k[X],Y=_(B);typeof B=="number"||typeof B=="boolean"?(S.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,N+V,S.__data)):B.isMatrix3?(S.__data[0]=B.elements[0],S.__data[1]=B.elements[1],S.__data[2]=B.elements[2],S.__data[3]=0,S.__data[4]=B.elements[3],S.__data[5]=B.elements[4],S.__data[6]=B.elements[5],S.__data[7]=0,S.__data[8]=B.elements[6],S.__data[9]=B.elements[7],S.__data[10]=B.elements[8],S.__data[11]=0):(B.toArray(S.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,v,M,R){let T=b.value,A=v+"_"+M;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{let C=R[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(b){let v=b.uniforms,M=0,R=16;for(let A=0,C=v.length;A<C;A++){let O=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,S=O.length;y<S;y++){let N=O[y],k=Array.isArray(N.value)?N.value:[N.value];for(let V=0,X=k.length;V<X;V++){let B=k[V],Y=_(B),G=M%R,ie=G%Y.boundary,se=G+ie;M+=ie,se!==0&&R-se<Y.storage&&(M+=R-se),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=Y.storage}}}let T=M%R;return T>0&&(M+=R-T),b.__size=M,b.__cache={},this}function _(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function p(b){let v=b.target;v.removeEventListener("dispose",p);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var Yo=class{constructor(e={}){let{canvas:t=pg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let f=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=vi,this.toneMappingExposure=1;let v=this,M=!1,R=0,T=0,A=null,C=-1,O=null,y=new st,S=new st,N=null,k=new ae(0),V=0,X=t.width,B=t.height,Y=1,G=null,ie=null,se=new st(0,0,X,B),pe=new st(0,0,X,B),He=!1,Qe=new Mr,q=!1,ee=!1,ve=new be,fe=new be,Oe=new x,Re=new st,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function je(){return A===null?Y:1}let L=n;function Gt(w,D){return t.getContext(w,D)}try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),L===null){let D="webgl2";if(L=Gt(D,w),L===null)throw Gt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ge,$e,Pe,ht,Ie,P,E,H,$,Z,j,Ee,le,me,Je,Q,ge,Ce,De,_e,We,ke,dt,I;function ue(){Ge=new Tb(L),Ge.init(),ke=new sy(L,Ge),$e=new yb(L,Ge,e,ke),Pe=new ty(L),$e.reverseDepthBuffer&&Pe.buffers.depth.setReversed(!0),ht=new Pb(L),Ie=new zv,P=new iy(L,Ge,Pe,Ie,$e,ke,ht),E=new Mb(v),H=new wb(v),$=new Og(L),dt=new bb(L,$),Z=new Ab(L,$,ht,dt),j=new Lb(L,Z,$,ht),De=new Cb(L,$e,P),Q=new xb(Ie),Ee=new Vv(v,E,H,Ge,$e,dt,Q),le=new cy(v,Ie),me=new Wv,Je=new Kv(Ge),Ce=new _b(v,E,H,Pe,j,u,l),ge=new Jv(v,j,$e),I=new hy(L,ht,$e,Pe),_e=new vb(L,Ge,ht),We=new Rb(L,Ge,ht),ht.programs=Ee.programs,v.capabilities=$e,v.extensions=Ge,v.properties=Ie,v.renderLists=me,v.shadowMap=ge,v.state=Pe,v.info=ht}ue();let W=new Nc(v,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(X,B,!1))},this.getSize=function(w){return w.set(X,B)},this.setSize=function(w,D,F=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,B=D,t.width=Math.floor(w*Y),t.height=Math.floor(D*Y),F===!0&&(t.style.width=w+"px",t.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(X*Y,B*Y).floor()},this.setDrawingBufferSize=function(w,D,F){X=w,B=D,Y=F,t.width=Math.floor(w*F),t.height=Math.floor(D*F),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(se)},this.setViewport=function(w,D,F,z){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,D,F,z),Pe.viewport(y.copy(se).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(pe)},this.setScissor=function(w,D,F,z){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,D,F,z),Pe.scissor(S.copy(pe).multiplyScalar(Y).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(w){Pe.setScissorTest(He=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(w=!0,D=!0,F=!0){let z=0;if(w){let U=!1;if(A!==null){let ne=A.texture.format;U=ne===dh||ne===hh||ne===ch}if(U){let ne=A.texture.type,de=ne===Qn||ne===Xi||ne===vr||ne===Is||ne===oh||ne===ah,ye=Ce.getClearColor(),xe=Ce.getClearAlpha(),Ue=ye.r,Ne=ye.g,Se=ye.b;de?(f[0]=Ue,f[1]=Ne,f[2]=Se,f[3]=xe,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Ue,g[1]=Ne,g[2]=Se,g[3]=xe,L.clearBufferiv(L.COLOR,0,g))}else z|=L.COLOR_BUFFER_BIT}D&&(z|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),me.dispose(),Je.dispose(),Ie.dispose(),E.dispose(),H.dispose(),j.dispose(),dt.dispose(),I.dispose(),Ee.dispose(),W.dispose(),W.removeEventListener("sessionstart",Yr),W.removeEventListener("sessionend",er),zn.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let w=ht.autoReset,D=ge.enabled,F=ge.autoUpdate,z=ge.needsUpdate,U=ge.type;ue(),ht.autoReset=w,ge.enabled=D,ge.autoUpdate=F,ge.needsUpdate=z,ge.type=U}function ce(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ze(w){let D=w.target;D.removeEventListener("dispose",ze),vt(D)}function vt(w){Wt(w),Ie.remove(w)}function Wt(w){let D=Ie.get(w).programs;D!==void 0&&(D.forEach(function(F){Ee.releaseProgram(F)}),w.isShaderMaterial&&Ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,F,z,U,ne){D===null&&(D=qe);let de=U.isMesh&&U.matrixWorld.determinant()<0,ye=Nd(w,D,F,z,U);Pe.setMaterial(z,de);let xe=F.index,Ue=1;if(z.wireframe===!0){if(xe=Z.getWireframeAttribute(F),xe===void 0)return;Ue=2}let Ne=F.drawRange,Se=F.attributes.position,lt=Ne.start*Ue,mt=(Ne.start+Ne.count)*Ue;ne!==null&&(lt=Math.max(lt,ne.start*Ue),mt=Math.min(mt,(ne.start+ne.count)*Ue)),xe!==null?(lt=Math.max(lt,0),mt=Math.min(mt,xe.count)):Se!=null&&(lt=Math.max(lt,0),mt=Math.min(mt,Se.count));let Mt=mt-lt;if(Mt<0||Mt===1/0)return;dt.setup(U,z,ye,F,xe);let sn,rt=_e;if(xe!==null&&(sn=$.get(xe),rt=We,rt.setIndex(sn)),U.isMesh)z.wireframe===!0?(Pe.setLineWidth(z.wireframeLinewidth*je()),rt.setMode(L.LINES)):rt.setMode(L.TRIANGLES);else if(U.isLine){let we=z.linewidth;we===void 0&&(we=1),Pe.setLineWidth(we*je()),U.isLineSegments?rt.setMode(L.LINES):U.isLineLoop?rt.setMode(L.LINE_LOOP):rt.setMode(L.LINE_STRIP)}else U.isPoints?rt.setMode(L.POINTS):U.isSprite&&rt.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)rt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))rt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let we=U._multiDrawStarts,Ht=U._multiDrawCounts,ot=U._multiDrawCount,xn=xe?$.get(xe).bytesPerElement:1,as=Ie.get(z).currentProgram.getUniforms();for(let rn=0;rn<ot;rn++)as.setValue(L,"_gl_DrawID",rn),rt.render(we[rn]/xn,Ht[rn])}else if(U.isInstancedMesh)rt.renderInstances(lt,Mt,U.count);else if(F.isInstancedBufferGeometry){let we=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ht=Math.min(F.instanceCount,we);rt.renderInstances(lt,Mt,Ht)}else rt.render(lt,Mt)};function Ke(w,D,F){w.transparent===!0&&w.side===Ot&&w.forceSinglePass===!1?(w.side=$t,w.needsUpdate=!0,Di(w,D,F),w.side=mn,w.needsUpdate=!0,Di(w,D,F),w.side=Ot):Di(w,D,F)}this.compile=function(w,D,F=null){F===null&&(F=w),p=Je.get(F),p.init(D),b.push(p),F.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==F&&w.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let z=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ne=U.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){let ye=ne[de];Ke(ye,F,U),z.add(ye)}else Ke(ne,F,U),z.add(ne)}),b.pop(),p=null,z},this.compileAsync=function(w,D,F=null){let z=this.compile(w,D,F);return new Promise(U=>{function ne(){if(z.forEach(function(de){Ie.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){U(w);return}setTimeout(ne,10)}Ge.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Xt=null;function yn(w){Xt&&Xt(w)}function Yr(){zn.stop()}function er(){zn.start()}let zn=new xf;zn.setAnimationLoop(yn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(w){Xt=w,W.setAnimationLoop(w),w===null?zn.stop():zn.start()},W.addEventListener("sessionstart",Yr),W.addEventListener("sessionend",er),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,D,A),p=Je.get(w,b.length),p.init(D),b.push(p),fe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Qe.setFromProjectionMatrix(fe),ee=this.localClippingEnabled,q=Q.init(this.clippingPlanes,ee),_=me.get(w,m.length),_.init(),m.push(_),W.enabled===!0&&W.isPresenting===!0){let ne=v.xr.getDepthSensingMesh();ne!==null&&tr(ne,D,-1/0,v.sortObjects)}tr(w,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,ie),it=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,it&&Ce.addToRenderList(_,w),this.info.render.frame++,q===!0&&Q.beginShadows();let F=p.state.shadowsArray;ge.render(F,w,D),q===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=_.opaque,U=_.transmissive;if(p.setupLights(),D.isArrayCamera){let ne=D.cameras;if(U.length>0)for(let de=0,ye=ne.length;de<ye;de++){let xe=ne[de];Kr(z,U,w,xe)}it&&Ce.render(w);for(let de=0,ye=ne.length;de<ye;de++){let xe=ne[de];$r(_,w,xe,xe.viewport)}}else U.length>0&&Kr(z,U,w,D),it&&Ce.render(w),$r(_,w,D);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,D),dt.resetDefaultState(),C=-1,O=null,b.pop(),b.length>0?(p=b[b.length-1],q===!0&&Q.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function tr(w,D,F,z){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)F=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Qe.intersectsSprite(w)){z&&Re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(fe);let de=j.update(w),ye=w.material;ye.visible&&_.push(w,de,ye,F,Re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Qe.intersectsObject(w))){let de=j.update(w),ye=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Re.copy(w.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Re.copy(de.boundingSphere.center)),Re.applyMatrix4(w.matrixWorld).applyMatrix4(fe)),Array.isArray(ye)){let xe=de.groups;for(let Ue=0,Ne=xe.length;Ue<Ne;Ue++){let Se=xe[Ue],lt=ye[Se.materialIndex];lt&&lt.visible&&_.push(w,de,lt,F,Re.z,Se)}}else ye.visible&&_.push(w,de,ye,F,Re.z,null)}}let ne=w.children;for(let de=0,ye=ne.length;de<ye;de++)tr(ne[de],D,F,z)}function $r(w,D,F,z){let U=w.opaque,ne=w.transmissive,de=w.transparent;p.setupLightsView(F),q===!0&&Q.setGlobalState(v.clippingPlanes,F),z&&Pe.viewport(y.copy(z)),U.length>0&&rs(U,D,F),ne.length>0&&rs(ne,D,F),de.length>0&&rs(de,D,F),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Kr(w,D,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new ei(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Lr:Qn,minFilter:Dn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ne=p.state.transmissionRenderTarget[z.id],de=z.viewport||y;ne.setSize(de.z,de.w);let ye=v.getRenderTarget();v.setRenderTarget(ne),v.getClearColor(k),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),it&&Ce.render(F);let xe=v.toneMapping;v.toneMapping=vi;let Ue=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),q===!0&&Q.setGlobalState(v.clippingPlanes,z),rs(w,F,z),P.updateMultisampleRenderTarget(ne),P.updateRenderTargetMipmap(ne),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Se=0,lt=D.length;Se<lt;Se++){let mt=D[Se],Mt=mt.object,sn=mt.geometry,rt=mt.material,we=mt.group;if(rt.side===Ot&&Mt.layers.test(z.layers)){let Ht=rt.side;rt.side=$t,rt.needsUpdate=!0,os(Mt,F,z,sn,rt,we),rt.side=Ht,rt.needsUpdate=!0,Ne=!0}}Ne===!0&&(P.updateMultisampleRenderTarget(ne),P.updateRenderTargetMipmap(ne))}v.setRenderTarget(ye),v.setClearColor(k,V),Ue!==void 0&&(z.viewport=Ue),v.toneMapping=xe}function rs(w,D,F){let z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ne=w.length;U<ne;U++){let de=w[U],ye=de.object,xe=de.geometry,Ue=z===null?de.material:z,Ne=de.group;ye.layers.test(F.layers)&&os(ye,D,F,xe,Ue,Ne)}}function os(w,D,F,z,U,ne){w.onBeforeRender(v,D,F,z,U,ne),w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(v,D,F,z,w,ne),U.transparent===!0&&U.side===Ot&&U.forceSinglePass===!1?(U.side=$t,U.needsUpdate=!0,v.renderBufferDirect(F,D,z,U,w,ne),U.side=mn,U.needsUpdate=!0,v.renderBufferDirect(F,D,z,U,w,ne),U.side=Ot):v.renderBufferDirect(F,D,z,U,w,ne),w.onAfterRender(v,D,F,z,U,ne)}function Di(w,D,F){D.isScene!==!0&&(D=qe);let z=Ie.get(w),U=p.state.lights,ne=p.state.shadowsArray,de=U.state.version,ye=Ee.getParameters(w,U.state,ne,D,F),xe=Ee.getProgramCacheKey(ye),Ue=z.programs;z.environment=w.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(w.isMeshStandardMaterial?H:E).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",ze),Ue=new Map,z.programs=Ue);let Ne=Ue.get(xe);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===de)return Qr(w,ye),Ne}else ye.uniforms=Ee.getUniforms(w),w.onBeforeCompile(ye,v),Ne=Ee.acquireProgram(ye,xe),Ue.set(xe,Ne),z.uniforms=ye.uniforms;let Se=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=Q.uniform),Qr(w,ye),z.needsLights=Jr(w),z.lightsStateVersion=de,z.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ne,z.uniformsList=null,Ne}function Zr(w){if(w.uniformsList===null){let D=w.currentProgram.getUniforms();w.uniformsList=Rs.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Qr(w,D){let F=Ie.get(w);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function Nd(w,D,F,z,U){D.isScene!==!0&&(D=qe),P.resetTextureUnits();let ne=D.fog,de=z.isMeshStandardMaterial?D.environment:null,ye=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Lt,xe=(z.isMeshStandardMaterial?H:E).get(z.envMap||de),Ue=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ne=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Se=!!F.morphAttributes.position,lt=!!F.morphAttributes.normal,mt=!!F.morphAttributes.color,Mt=vi;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=v.toneMapping);let sn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,rt=sn!==void 0?sn.length:0,we=Ie.get(z),Ht=p.state.lights;if(q===!0&&(ee===!0||w!==O)){let un=w===O&&z.id===C;Q.setState(z,w,un)}let ot=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ht.state.version||we.outputColorSpace!==ye||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==xe||z.fog===!0&&we.fog!==ne||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Q.numPlanes||we.numIntersection!==Q.numIntersection)||we.vertexAlphas!==Ue||we.vertexTangents!==Ne||we.morphTargets!==Se||we.morphNormals!==lt||we.morphColors!==mt||we.toneMapping!==Mt||we.morphTargetsCount!==rt)&&(ot=!0):(ot=!0,we.__version=z.version);let xn=we.currentProgram;ot===!0&&(xn=Di(z,D,U));let as=!1,rn=!1,Ka=!1,St=xn.getUniforms(),li=we.uniforms;if(Pe.useProgram(xn.program)&&(as=!0,rn=!0,Ka=!0),z.id!==C&&(C=z.id,rn=!0),as||O!==w){$e.reverseDepthBuffer?(ve.copy(w.projectionMatrix),gg(ve),_g(ve),St.setValue(L,"projectionMatrix",ve)):St.setValue(L,"projectionMatrix",w.projectionMatrix),St.setValue(L,"viewMatrix",w.matrixWorldInverse);let un=St.map.cameraPosition;un!==void 0&&un.setValue(L,Oe.setFromMatrixPosition(w.matrixWorld)),$e.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&St.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),O!==w&&(O=w,rn=!0,Ka=!0)}if(U.isSkinnedMesh){St.setOptional(L,U,"bindMatrix"),St.setOptional(L,U,"bindMatrixInverse");let un=U.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),St.setValue(L,"boneTexture",un.boneTexture,P))}U.isBatchedMesh&&(St.setOptional(L,U,"batchingTexture"),St.setValue(L,"batchingTexture",U._matricesTexture,P),St.setOptional(L,U,"batchingIdTexture"),St.setValue(L,"batchingIdTexture",U._indirectTexture,P),St.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",U._colorsTexture,P));let Za=F.morphAttributes;if((Za.position!==void 0||Za.normal!==void 0||Za.color!==void 0)&&De.update(U,F,xn),(rn||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,St.setValue(L,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(li.envMap.value=xe,li.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(li.envMapIntensity.value=D.environmentIntensity),rn&&(St.setValue(L,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&$a(li,Ka),ne&&z.fog===!0&&le.refreshFogUniforms(li,ne),le.refreshMaterialUniforms(li,z,Y,B,p.state.transmissionRenderTarget[w.id]),Rs.upload(L,Zr(we),li,P)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Rs.upload(L,Zr(we),li,P),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&St.setValue(L,"center",U.center),St.setValue(L,"modelViewMatrix",U.modelViewMatrix),St.setValue(L,"normalMatrix",U.normalMatrix),St.setValue(L,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let un=z.uniformsGroups;for(let Qa=0,dm=un.length;Qa<dm;Qa++){let Od=un[Qa];I.update(Od,xn),I.bind(Od,xn)}}return xn}function $a(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Jr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,D,F){Ie.get(w.texture).__webglTexture=D,Ie.get(w.depthTexture).__webglTexture=F;let z=Ie.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=F===void 0,z.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){let F=Ie.get(w);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,F=0){A=w,R=D,T=F;let z=!0,U=null,ne=!1,de=!1;if(w){let xe=Ie.get(w);if(xe.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(xe.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(xe.__hasExternalTextures)P.rebindTextures(w,Ie.get(w.texture).__webglTexture,Ie.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Se=w.depthTexture;if(xe.__boundDepthTexture!==Se){if(Se!==null&&Ie.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}let Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(de=!0);let Ne=Ie.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?U=Ne[D][F]:U=Ne[D],ne=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?U=Ie.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?U=Ne[F]:U=Ne,y.copy(w.viewport),S.copy(w.scissor),N=w.scissorTest}else y.copy(se).multiplyScalar(Y).floor(),S.copy(pe).multiplyScalar(Y).floor(),N=He;if(Pe.bindFramebuffer(L.FRAMEBUFFER,U)&&z&&Pe.drawBuffers(w,U),Pe.viewport(y),Pe.scissor(S),Pe.setScissorTest(N),ne){let xe=Ie.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe.__webglTexture,F)}else if(de){let xe=Ie.get(w.texture),Ue=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xe.__webglTexture,F||0,Ue)}C=-1},this.readRenderTargetPixels=function(w,D,F,z,U,ne,de){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){Pe.bindFramebuffer(L.FRAMEBUFFER,ye);try{let xe=w.texture,Ue=xe.format,Ne=xe.type;if(!$e.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-z&&F>=0&&F<=w.height-U&&L.readPixels(D,F,z,U,ke.convert(Ue),ke.convert(Ne),ne)}finally{let xe=A!==null?Ie.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(w,D,F,z,U,ne,de){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ie.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){let xe=w.texture,Ue=xe.format,Ne=xe.type;if(!$e.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-z&&F>=0&&F<=w.height-U){Pe.bindFramebuffer(L.FRAMEBUFFER,ye);let Se=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Se),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),L.readPixels(D,F,z,U,ke.convert(Ue),ke.convert(Ne),0);let lt=A!==null?Ie.get(A).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,lt);let mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await mg(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Se),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne),L.deleteBuffer(Se),L.deleteSync(mt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,F=0){w.isTexture!==!0&&(No("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);let z=Math.pow(2,-F),U=Math.floor(w.image.width*z),ne=Math.floor(w.image.height*z),de=D!==null?D.x:0,ye=D!==null?D.y:0;P.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,F,0,0,de,ye,U,ne),Pe.unbindTexture()},this.copyTextureToTexture=function(w,D,F=null,z=null,U=0){w.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],D=arguments[2],U=arguments[3]||0,F=null);let ne,de,ye,xe,Ue,Ne;F!==null?(ne=F.max.x-F.min.x,de=F.max.y-F.min.y,ye=F.min.x,xe=F.min.y):(ne=w.image.width,de=w.image.height,ye=0,xe=0),z!==null?(Ue=z.x,Ne=z.y):(Ue=0,Ne=0);let Se=ke.convert(D.format),lt=ke.convert(D.type);P.setTexture2D(D,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);let mt=L.getParameter(L.UNPACK_ROW_LENGTH),Mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),sn=L.getParameter(L.UNPACK_SKIP_PIXELS),rt=L.getParameter(L.UNPACK_SKIP_ROWS),we=L.getParameter(L.UNPACK_SKIP_IMAGES),Ht=w.isCompressedTexture?w.mipmaps[U]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,xe),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Ue,Ne,ne,de,Se,lt,Ht.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Ue,Ne,Ht.width,Ht.height,Se,Ht.data):L.texSubImage2D(L.TEXTURE_2D,U,Ue,Ne,ne,de,Se,lt,Ht),L.pixelStorei(L.UNPACK_ROW_LENGTH,mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,sn),L.pixelStorei(L.UNPACK_SKIP_ROWS,rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we),U===0&&D.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(w,D,F=null,z=null,U=0){w.isTexture!==!0&&(No("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,z=arguments[1]||null,w=arguments[2],D=arguments[3],U=arguments[4]||0);let ne,de,ye,xe,Ue,Ne,Se,lt,mt,Mt=w.isCompressedTexture?w.mipmaps[U]:w.image;F!==null?(ne=F.max.x-F.min.x,de=F.max.y-F.min.y,ye=F.max.z-F.min.z,xe=F.min.x,Ue=F.min.y,Ne=F.min.z):(ne=Mt.width,de=Mt.height,ye=Mt.depth,xe=0,Ue=0,Ne=0),z!==null?(Se=z.x,lt=z.y,mt=z.z):(Se=0,lt=0,mt=0);let sn=ke.convert(D.format),rt=ke.convert(D.type),we;if(D.isData3DTexture)P.setTexture3D(D,0),we=L.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)P.setTexture2DArray(D,0),we=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);let Ht=L.getParameter(L.UNPACK_ROW_LENGTH),ot=L.getParameter(L.UNPACK_IMAGE_HEIGHT),xn=L.getParameter(L.UNPACK_SKIP_PIXELS),as=L.getParameter(L.UNPACK_SKIP_ROWS),rn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(we,U,Se,lt,mt,ne,de,ye,sn,rt,Mt.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(we,U,Se,lt,mt,ne,de,ye,sn,Mt.data):L.texSubImage3D(we,U,Se,lt,mt,ne,de,ye,sn,rt,Mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ht),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xn),L.pixelStorei(L.UNPACK_SKIP_ROWS,as),L.pixelStorei(L.UNPACK_SKIP_IMAGES,rn),U===0&&D.generateMipmaps&&L.generateMipmap(we),Pe.unbindTexture()},this.initRenderTarget=function(w){Ie.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Pe.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,Pe.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===uh?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===ya?"display-p3":"srgb"}};var $o=class extends tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yt,this.environmentIntensity=1,this.environmentRotation=new yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xi=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vc,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zt=new x,Mi=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),i=ct(i,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Le(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Uu=new x,Nu=new st,Ou=new st,dy=new x,ku=new be,xo=new x,Al=new ln,Fu=new be,Rl=new ti,Bs=class extends J{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vd,this.bindMatrix=new be,this.bindMatrixInverse=new be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new at),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xo),this.boundingBox.expandByPoint(xo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xo),this.boundingSphere.expandByPoint(xo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Al.copy(this.boundingSphere),Al.applyMatrix4(i),e.ray.intersectsSphere(Al)!==!1&&(Fu.copy(i).invert(),Rl.copy(e.ray).applyMatrix4(Fu),!(this.boundingBox!==null&&Rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Nu.fromBufferAttribute(i.attributes.skinIndex,e),Ou.fromBufferAttribute(i.attributes.skinWeight,e),Uu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Ou.getComponent(r);if(o!==0){let a=Nu.getComponent(r);ku.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(dy.copy(Uu).applyMatrix4(ku),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},qi=class extends tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ko=class extends Vt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Yt,h=Yt,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bu=new be,uy=new be,Un=class s{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:uy;Bu.multiplyMatrices(a,t[r]),Bu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ko(t,e,e,pn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new qi),this.bones.push(o),this.boneInverses.push(new be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},ji=class extends Le{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ms=new be,Hu=new be,Mo=[],Vu=new at,fy=new be,ar=new J,lr=new ln,Zo=class extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,fy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new at),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),Vu.copy(e.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Vu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ms),lr.copy(e.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),e.ray.intersectsSphere(lr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ms),Hu.multiplyMatrices(n,Ms),ar.matrixWorld=Hu,ar.raycast(e,Mo);for(let o=0,a=Mo.length;o<a;o++){let l=Mo[o];l.instanceId=r,l.object=this,t.push(l)}Mo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ko(new Float32Array(i*this.count),i,this.count,lh,An));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var kt=class extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qo=new x,Jo=new x,zu=new be,cr=new ti,Eo=new ln,Pl=new x,Gu=new x,zt=class extends tt{constructor(e=new Fe,t=new kt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Qo.fromBufferAttribute(t,i-1),Jo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Qo.distanceTo(Jo);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;zu.copy(i).invert(),cr.copy(e.ray).applyMatrix4(zu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){let m=h.getX(_),b=h.getX(_+1),v=So(this,e,cr,l,m,b);v&&t.push(v)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(f),m=So(this,e,cr,l,_,p);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){let m=So(this,e,cr,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){let _=So(this,e,cr,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function So(s,e,t,n,i,r){let o=s.geometry.attributes.position;if(Qo.fromBufferAttribute(o,i),Jo.fromBufferAttribute(o,r),t.distanceSqToSegment(Qo,Jo,Pl,Gu)>n)return;Pl.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Pl);if(!(l<e.near||l>e.far))return{distance:l,point:Gu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var Wu=new x,Xu=new x,cn=class extends zt{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Wu.fromBufferAttribute(t,i),Xu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wu.distanceTo(Xu);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ea=class extends zt{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Er=class extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qu=new be,Oc=new ti,wo=new ln,To=new x,ta=class extends tt{constructor(e=new Fe,t=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(i),wo.radius+=r,e.ray.intersectsSphere(wo)===!1)return;qu.copy(i).invert(),Oc.copy(e.ray).applyMatrix4(qu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,_=f;g<_;g++){let p=c.getX(g);To.fromBufferAttribute(d,p),ju(To,p,l,i,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,_=f;g<_;g++)To.fromBufferAttribute(d,g),ju(To,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ju(s,e,t,n,i,r,o){let a=Oc.distanceSqToPoint(s);if(a<t){let l=new x;Oc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new te:new x);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new x,i=[],r=[],o=[],a=new x,l=new be;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new x)}r[0]=new x,o[0]=new x;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Pt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Pt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sr=class extends gn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new te){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},kc=class extends Sr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function gh(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Ao=new x,Cl=new gh,Ll=new gh,Il=new gh,Fc=class extends gn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new x){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ao.subVectors(i[0],i[1]).add(i[0]),c=Ao);let d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ao.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Cl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,p),Ll.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,p),Il.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ll.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Il.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Cl.calc(l),Ll.calc(l),Il.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new x().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yu(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function py(s,e){let t=1-s;return t*t*e}function my(s,e){return 2*(1-s)*s*e}function gy(s,e){return s*s*e}function gr(s,e,t,n){return py(s,e)+my(s,t)+gy(s,n)}function _y(s,e){let t=1-s;return t*t*t*e}function by(s,e){let t=1-s;return 3*t*t*s*e}function vy(s,e){return 3*(1-s)*s*s*e}function yy(s,e){return s*s*s*e}function _r(s,e,t,n,i){return _y(s,e)+by(s,t)+vy(s,n)+yy(s,i)}var na=class extends gn{constructor(e=new te,t=new te,n=new te,i=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new te){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,i.x,r.x,o.x,a.x),_r(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bc=class extends gn{constructor(e=new x,t=new x,n=new x,i=new x){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new x){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,i.x,r.x,o.x,a.x),_r(e,i.y,r.y,o.y,a.y),_r(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ia=class extends gn{constructor(e=new te,t=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hc=class extends gn{constructor(e=new x,t=new x){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new x){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new x){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends gn{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,i.x,r.x,o.x),gr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends gn{constructor(e=new x,t=new x,n=new x){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new x){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,i.x,r.x,o.x),gr(e,i.y,r.y,o.y),gr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new te){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Yu(a,l.x,c.x,h.x,d.x),Yu(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new te().fromArray(i))}return this}},$u=Object.freeze({__proto__:null,ArcCurve:kc,CatmullRomCurve3:Fc,CubicBezierCurve:na,CubicBezierCurve3:Bc,EllipseCurve:Sr,LineCurve:ia,LineCurve3:Hc,QuadraticBezierCurve:sa,QuadraticBezierCurve3:Vc,SplineCurve:ra}),zc=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $u[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new $u[i.type]().fromJSON(i))}return this}},Gc=class extends zc{constructor(e){super(),this.type="Path",this.currentPoint=new te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ia(this.currentPoint.clone(),new te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new sa(this.currentPoint.clone(),new te(e,t),new te(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new na(this.currentPoint.clone(),new te(e,t),new te(n,i),new te(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ra(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Sr(e,t,n,i,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wc=class s extends Fe{constructor(e=[new te(0,-.5),new te(.5,0),new te(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Pt(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new x,u=new te,f=new x,g=new x,_=new x,p=0,m=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:p=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:p=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let b=0;b<=t;b++){let v=n+b*h*i,M=Math.sin(v),R=Math.cos(v);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*M,d.y=e[T].y,d.z=e[T].x*R,o.push(d.x,d.y,d.z),u.x=b/t,u.y=T/(e.length-1),a.push(u.x,u.y);let A=l[3*T+0]*M,C=l[3*T+1],O=l[3*T+0]*R;c.push(A,C,O)}}for(let b=0;b<t;b++)for(let v=0;v<e.length-1;v++){let M=v+b*e.length,R=M,T=M+e.length,A=M+e.length+1,C=M+1;r.push(R,T,C),r.push(A,C,T)}this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("uv",new Ye(a,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},oa=class s extends Wc{constructor(e=1,t=1,n=4,i=8){let r=new Gc;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}};var Tt=class s extends Fe{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,_=[],p=n/2,m=0;b(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(f,2));function b(){let M=new x,R=new x,T=0,A=(t-e)/n;for(let C=0;C<=r;C++){let O=[],y=C/r,S=y*(t-e)+e;for(let N=0;N<=i;N++){let k=N/i,V=k*l+a,X=Math.sin(V),B=Math.cos(V);R.x=S*X,R.y=-y*n+p,R.z=S*B,d.push(R.x,R.y,R.z),M.set(X,A,B).normalize(),u.push(M.x,M.y,M.z),f.push(k,1-y),O.push(g++)}_.push(O)}for(let C=0;C<i;C++)for(let O=0;O<r;O++){let y=_[O][C],S=_[O+1][C],N=_[O+1][C+1],k=_[O][C+1];e>0&&(h.push(y,S,k),T+=3),t>0&&(h.push(S,N,k),T+=3)}c.addGroup(m,T,0),m+=T}function v(M){let R=g,T=new te,A=new x,C=0,O=M===!0?e:t,y=M===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,p*y,0),u.push(0,y,0),f.push(.5,.5),g++;let S=g;for(let N=0;N<=i;N++){let V=N/i*l+a,X=Math.cos(V),B=Math.sin(V);A.x=O*B,A.y=p*y,A.z=O*X,d.push(A.x,A.y,A.z),u.push(0,y,0),T.x=X*.5+.5,T.y=B*.5*y+.5,f.push(T.x,T.y),g++}for(let N=0;N<i;N++){let k=R+N,V=S+N;M===!0?h.push(V,V+1,k):h.push(V+1,V,k),C+=3}c.addGroup(m,C,M===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Xc=class s extends Fe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let v=new x,M=new x,R=new x;for(let T=0;T<t.length;T+=3)f(t[T+0],v),f(t[T+1],M),f(t[T+2],R),l(v,M,R,b)}function l(b,v,M,R){let T=R+1,A=[];for(let C=0;C<=T;C++){A[C]=[];let O=b.clone().lerp(M,C/T),y=v.clone().lerp(M,C/T),S=T-C;for(let N=0;N<=S;N++)N===0&&C===T?A[C][N]=O:A[C][N]=O.clone().lerp(y,N/S)}for(let C=0;C<T;C++)for(let O=0;O<2*(T-C)-1;O++){let y=Math.floor(O/2);O%2===0?(u(A[C][y+1]),u(A[C+1][y]),u(A[C][y])):(u(A[C][y+1]),u(A[C+1][y+1]),u(A[C+1][y]))}}function c(b){let v=new x;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(b),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let b=new x;for(let v=0;v<r.length;v+=3){b.x=r[v+0],b.y=r[v+1],b.z=r[v+2];let M=p(b)/2/Math.PI+.5,R=m(b)/Math.PI+.5;o.push(M,1-R)}g(),d()}function d(){for(let b=0;b<o.length;b+=6){let v=o[b+0],M=o[b+2],R=o[b+4],T=Math.max(v,M,R),A=Math.min(v,M,R);T>.9&&A<.1&&(v<.2&&(o[b+0]+=1),M<.2&&(o[b+2]+=1),R<.2&&(o[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,v){let M=b*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function g(){let b=new x,v=new x,M=new x,R=new x,T=new te,A=new te,C=new te;for(let O=0,y=0;O<r.length;O+=9,y+=6){b.set(r[O+0],r[O+1],r[O+2]),v.set(r[O+3],r[O+4],r[O+5]),M.set(r[O+6],r[O+7],r[O+8]),T.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),R.copy(b).add(v).add(M).divideScalar(3);let S=p(R);_(T,y+0,b,S),_(A,y+2,v,S),_(C,y+4,M,S)}}function _(b,v,M,R){R<0&&b.x===1&&(o[v]=b.x-1),M.x===0&&M.z===0&&(o[v]=R/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Yi=class s extends Xc{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var Pn=class s extends Fe{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new x,u=new x,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let b=[],v=m/n,M=0;m===0&&o===0?M=.5/t:m===n&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){let T=R/t;d.x=-e*Math.cos(i+T*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(i+T*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(T+M,1-v),b.push(c++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){let v=h[m][b+1],M=h[m][b],R=h[m+1][b],T=h[m+1][b+1];(m!==0||o>0)&&f.push(v,M,T),(m!==n-1||l<Math.PI)&&f.push(M,R,T)}this.setIndex(f),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ei=class s extends Fe{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new x,d=new x,u=new x;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let _=g/i*r,p=f/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let _=(i+1)*f+g-1,p=(i+1)*(f-1)+g-1,m=(i+1)*(f-1)+g,b=(i+1)*f+g;o.push(_,p,b),o.push(p,m,b)}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ft=class extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hn=class extends Ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ro(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function xy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function My(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ku(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Tf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Si=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qc=class extends Si{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zd,endingEnd:zd}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gd:r=e,a=2*t-n;break;case Wd:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gd:o=e,l=2*n-t;break;case Wd:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,b=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,v=(-1-f)*p+(1.5+f)*_+.5*g,M=f*p-f*_;for(let R=0;R!==a;++R)r[R]=m*o[h+R]+b*o[c+R]+v*o[l+R]+M*o[d+R];return r}},jc=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Yc=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},_n=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ro(t,this.TimeBufferType),this.values=Ro(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ro(e.times,Array),values:Ro(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Ns:t=this.InterpolantFactoryMethodLinear;break;case Ja:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return Ja}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&xy(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ja,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Ns;var wi=class extends _n{constructor(e,t,n){super(e,t,n)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Us;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends _n{};aa.prototype.ValueTypeName="color";var ni=class extends _n{};ni.prototype.ValueTypeName="number";var $c=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)oe.slerpFlat(r,0,o,c-a,o,c,l);return r}},ii=class extends _n{InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}};ii.prototype.ValueTypeName="quaternion";ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends _n{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Us;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var si=class extends _n{};si.prototype.ValueTypeName="vector";var la=class{constructor(e="",t=-1,n=[],i=Vm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Sy(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(_n.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=My(l);l=Ku(l,1,h),c=Ku(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ni(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let d=h[1],u=i[d];u||(i[d]=u=[]),u.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(d,u,f,g,_){if(f.length!==0){let p=[],m=[];Tf(f,p,m,g),p.length!==0&&_.push(new d(u,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let d=0;d<c.length;d++){let u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let f={},g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(let _ in f){let p=[],m=[];for(let b=0;b!==u[g].morphTargets.length;++b){let v=u[g];p.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new ni(".morphTargetInfluence["+_+"]",p,m))}l=f.length*o}else{let f=".bones["+t[d].name+"]";n(si,f+".position",u,"pos",i),n(ii,f+".quaternion",u,"rot",i),n(si,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Ey(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ni;case"vector":case"vector2":case"vector3":case"vector4":return si;case"color":return aa;case"quaternion":return ii;case"bool":case"boolean":return wi;case"string":return Ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Sy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ey(s.type);if(s.times===void 0){let t=[],n=[];Tf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var _i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},wr=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},wy=new wr,Cn=class{constructor(e){this.manager=e!==void 0?e:wy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Cn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yn={},Kc=class extends Error{constructor(e,t){super(e),this.response=t}},Ai=class extends Cn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=_i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:i});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Yn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,_=0,p=new ReadableStream({start(m){b();function b(){d.read().then(({done:v,value:M})=>{if(v)m.close();else{_+=M.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,A=h.length;T<A;T++){let C=h[T];C.onProgress&&C.onProgress(R)}m.enqueue(M),b()}},v=>{m.error(v)})}}});return new Response(p)}else throw new Kc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{_i.add(e,c);let h=Yn[e];delete Yn[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Yn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Yn[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Tr=class extends Cn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=_i.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=yr("img");function l(){h(),_i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ca=class extends Cn{constructor(e){super(e)}load(e,t,n,i){let r=new Vt,o=new Tr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},$i=class extends tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ha=class extends $i{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Dl=new be,Zu=new x,Qu=new x,Ar=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zu),Qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qu),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zc=class extends Ar{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},da=class extends $i{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ju=new be,hr=new x,Ul=new x,Qc=class extends Ar{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new te(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new x(1,0,0),new x(-1,0,0),new x(0,0,1),new x(0,0,-1),new x(0,1,0),new x(0,-1,0)],this._cubeUps=[new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,1,0),new x(0,0,1),new x(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(hr),Ul.copy(n.position),Ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ul),n.updateMatrixWorld(),i.makeTranslation(-hr.x,-hr.y,-hr.z),Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju)}},ua=class extends $i{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Jc=class extends Ar{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ri=class extends $i{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DEFAULT_UP),this.updateMatrix(),this.target=new tt,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},fa=class extends $i{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Pi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var pa=class extends Cn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=_i.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),_i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(e,l),r.manager.itemStart(e)}};var _h="\\[\\]\\.:\\/",Ty=new RegExp("["+_h+"]","g"),bh="[^"+_h+"]",Ay="[^"+_h.replace("\\.","")+"]",Ry=/((?:WC+[\/:])*)/.source.replace("WC",bh),Py=/(WCOD+)?/.source.replace("WCOD",Ay),Cy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),Ly=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),Iy=new RegExp("^"+Ry+Py+Cy+Ly+"$"),Dy=["material","materials","bones","map"],eh=class{constructor(e,t,n){let i=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ty,"")}static parseTrackName(e){let t=Iy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Dy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=eh;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tS=new Float32Array(1);var Rr=class{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},ef=new be,Hs=class{constructor(e,t,n=0,i=1/0){this.ray=new ti(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ef.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ef),this}intersectObject(e,t=!0,n=[]){return th(e,this,n,t),n.sort(tf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)th(e[i],this,n,t);return n.sort(tf),n}};function tf(s,e){return s.distance-e.distance}function th(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)th(r[o],e,t,!0)}}var Pr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var mi=new x,Po=new be,Nl=new be,ma=class extends cn{constructor(e){let t=Af(e),n=new Fe,i=[],r=[],o=new ae(0,0,1),a=new ae(0,1,0);for(let c=0;c<t.length;c++){let h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new Ye(i,3)),n.setAttribute("color",new Ye(r,3));let l=new kt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");Nl.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){let a=t[r];a.parent&&a.parent.isBone&&(Po.multiplyMatrices(Nl,a.matrixWorld),mi.setFromMatrixPosition(Po),i.setXYZ(o,mi.x,mi.y,mi.z),Po.multiplyMatrices(Nl,a.parent.matrixWorld),mi.setFromMatrixPosition(Po),i.setXYZ(o+1,mi.x,mi.y,mi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}};function Af(s){let e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Af(s.children[t]));return e}var Cr=class extends cn{constructor(e=10,t=10,n=4473924,i=8947848){n=new ae(n),i=new ae(i);let r=t/2,o=e/t,a=e/2,l=[],c=[];for(let u=0,f=0,g=-a;u<=t;u++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let _=u===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}let h=new Fe;h.setAttribute("position",new Ye(l,3)),h.setAttribute("color",new Ye(c,3));let d=new kt({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var ga=class extends cn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Fe;i.setAttribute("position",new Ye(t,3)),i.setAttribute("color",new Ye(n,3));let r=new kt({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){let i=new ae,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Vs=class extends Jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Rf={type:"change"},yh={type:"start"},Cf={type:"end"},Ma=new ti,Pf=new wn,Uy=Math.cos(70*Me.DEG2RAD),Ut=new x,nn=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vh=1e-6,Ea=class extends Vs{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.enabled=!0,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ki.ROTATE,MIDDLE:Ki.DOLLY,RIGHT:Ki.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new x,this._lastQuaternion=new oe,this._lastTargetPosition=new x,this._quat=new oe().setFromUnitVectors(e.up,new x(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pr,this._sphericalDelta=new Pr,this._scale=1,this._panOffset=new x,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new x,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Oy.bind(this),this._onPointerDown=Ny.bind(this),this._onPointerUp=ky.bind(this),this._onContextMenu=Wy.bind(this),this._onMouseWheel=Hy.bind(this),this._onKeyDown=Vy.bind(this),this._onTouchStart=zy.bind(this),this._onTouchMove=Gy.bind(this),this._onMouseDown=Fy.bind(this),this._onMouseMove=By.bind(this),this._interceptControlDown=Xy.bind(this),this._interceptControlUp=qy.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rf),this.update(),this.state=ut.NONE}update(e=null){let t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ut.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new x(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new x(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ma.origin.copy(this.object.position),Ma.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ma.direction))<Uy?this.object.lookAt(this.target):(Pf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ma.intersectPlane(Pf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vh||this._lastTargetPosition.distanceToSquared(this.target)>vh?(this.dispatchEvent(Rf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?nn/60*this.autoRotateSpeed*e:nn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Ut.copy(i).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/t.clientHeight),this._rotateUp(nn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ny(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Oy(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ky(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cf),this.state=ut.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Fy(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ut.DOLLY;break;case Ki.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}break;case Ki.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(yh)}function By(s){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Hy(s){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(s.preventDefault(),this.dispatchEvent(yh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Cf))}function Vy(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function zy(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ut.TOUCH_ROTATE;break;case Zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case Zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ut.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(yh)}function Gy(s){switch(this._trackPointer(s),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ut.NONE}}function Wy(s){this.enabled!==!1&&s.preventDefault()}function Xy(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qy(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Qi=new Hs,Kt=new x,Ci=new x,bt=new oe,Lf={X:new x(1,0,0),Y:new x(0,1,0),Z:new x(0,0,1)},xh={type:"change"},If={type:"mouseDown",mode:null},Df={type:"mouseUp",mode:null},Uf={type:"objectChange"},Ra=class extends Vs{constructor(e,t=null){super(void 0,t);let n=new Eh(this);this._root=n;let i=new Sh;this._gizmo=i,n.add(i);let r=new wh;this._plane=r,n.add(r);let o=this;function a(v,M){let R=M;Object.defineProperty(o,v,{get:function(){return R!==void 0?R:M},set:function(T){R!==T&&(R=T,r[v]=T,i[v]=T,o.dispatchEvent({type:v+"-changed",value:T}),o.dispatchEvent(xh))}}),o[v]=M,r[v]=M,i[v]=M}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);let l=new x,c=new x,h=new oe,d=new oe,u=new x,f=new oe,g=new x,_=new x,p=new x,m=0,b=new x;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",h),a("worldQuaternionStart",d),a("cameraPosition",u),a("cameraQuaternion",f),a("pointStart",g),a("pointEnd",_),a("rotationAxis",p),a("rotationAngle",m),a("eye",b),this._offset=new x,this._startNorm=new x,this._endNorm=new x,this._cameraScale=new x,this._parentPosition=new x,this._parentQuaternion=new oe,this._parentQuaternionInv=new oe,this._parentScale=new x,this._worldScaleStart=new x,this._worldQuaternionInv=new oe,this._worldScale=new x,this._positionStart=new x,this._quaternionStart=new oe,this._scaleStart=new x,this._getPointer=jy.bind(this),this._onPointerDown=$y.bind(this),this._onPointerHover=Yy.bind(this),this._onPointerMove=Ky.bind(this),this._onPointerUp=Zy.bind(this),t!==null&&this.connect()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Qi.setFromCamera(e,this.camera);let t=Mh(this._gizmo.picker[this.mode],Qi);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Qi.setFromCamera(e,this.camera);let t=Mh(this._plane,Qi,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,If.mode=this.mode,this.dispatchEvent(If)}}pointerMove(e){let t=this.axis,n=this.mode,i=this.object,r=this.space;if(n==="scale"?r="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(r="world"),i===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Qi.setFromCamera(e,this.camera);let o=Mh(this._plane,Qi,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),i.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(i.position.applyQuaternion(bt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.position.applyQuaternion(this._quaternionStart)),r==="world"&&(i.parent&&i.position.add(Kt.setFromMatrixPosition(i.parent.matrixWorld)),t.search("X")!==-1&&(i.position.x=Math.round(i.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(i.position.y=Math.round(i.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(i.position.z=Math.round(i.position.z/this.translationSnap)*this.translationSnap),i.parent&&i.position.sub(Kt.setFromMatrixPosition(i.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ci.set(a,a,a)}else Kt.copy(this.pointStart),Ci.copy(this.pointEnd),Kt.applyQuaternion(this._worldQuaternionInv),Ci.applyQuaternion(this._worldQuaternionInv),Ci.divide(Kt),t.search("X")===-1&&(Ci.x=1),t.search("Y")===-1&&(Ci.y=1),t.search("Z")===-1&&(Ci.z=1);i.scale.copy(this._scaleStart).multiply(Ci),this.scaleSnap&&(t.search("X")!==-1&&(i.scale.x=Math.round(i.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(i.scale.y=Math.round(i.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(i.scale.z=Math.round(i.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);let a=20/this.worldPosition.distanceTo(Kt.setFromMatrixPosition(this.camera.matrixWorld)),l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Kt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Lf[t]),Kt.copy(Lf[t]),r==="local"&&Kt.applyQuaternion(this.worldQuaternion),Kt.cross(this.eye),Kt.length()===0?l=!0:this.rotationAngle=this._offset.dot(Kt.normalize())*a),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&t!=="E"&&t!=="XYZE"?(i.quaternion.copy(this._quaternionStart),i.quaternion.multiply(bt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),i.quaternion.copy(bt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),i.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(xh),this.dispatchEvent(Uf)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Df.mode=this.mode,this.dispatchEvent(Df)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(xh),this.dispatchEvent(Uf),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Qi}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}};function jy(s){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:s.button};{let e=this.domElement.getBoundingClientRect();return{x:(s.clientX-e.left)/e.width*2-1,y:-(s.clientY-e.top)/e.height*2+1,button:s.button}}}function Yy(s){if(this.enabled)switch(s.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(s));break}}function $y(s){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(s)),this.pointerDown(this._getPointer(s)))}function Ky(s){this.enabled&&this.pointerMove(this._getPointer(s))}function Zy(s){this.enabled&&(this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(s)))}function Mh(s,e,t){let n=e.intersectObject(s,!0);for(let i=0;i<n.length;i++)if(n[i].object.visible||t)return n[i];return!1}var Sa=new yt,ft=new x(0,1,0),Nf=new x(0,0,0),Of=new be,wa=new oe,Aa=new oe,Nn=new x,kf=new be,Nr=new x(1,0,0),Ji=new x(0,1,0),Or=new x(0,0,1),Ta=new x,Dr=new x,Ur=new x,Eh=class extends tt{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){let t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}},Sh=class extends tt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";let e=new wt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new kt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;let i=t.clone();i.opacity=.5;let r=e.clone();r.color.setHex(16711680);let o=e.clone();o.color.setHex(65280);let a=e.clone();a.color.setHex(255);let l=e.clone();l.color.setHex(16711680),l.opacity=.5;let c=e.clone();c.color.setHex(65280),c.opacity=.5;let h=e.clone();h.color.setHex(255),h.opacity=.5;let d=e.clone();d.opacity=.25;let u=e.clone();u.color.setHex(16776960),u.opacity=.25,e.clone().color.setHex(16776960);let g=e.clone();g.color.setHex(7895160);let _=new Tt(0,.04,.1,12);_.translate(0,.05,0);let p=new _t(.08,.08,.08);p.translate(0,.04,0);let m=new Fe;m.setAttribute("position",new Ye([0,0,0,1,0,0],3));let b=new Tt(.0075,.0075,.5,3);b.translate(0,.25,0);function v(X,B){let Y=new Ei(X,.0075,3,64,B*Math.PI*2);return Y.rotateY(Math.PI/2),Y.rotateX(Math.PI/2),Y}function M(){let X=new Fe;return X.setAttribute("position",new Ye([0,0,0,1,1,1],3)),X}let R={X:[[new J(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new J(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new J(b,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new J(_,o),[0,.5,0]],[new J(_,o),[0,-.5,0],[Math.PI,0,0]],[new J(b,o)]],Z:[[new J(_,a),[0,0,.5],[Math.PI/2,0,0]],[new J(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new J(b,a),null,[Math.PI/2,0,0]]],XYZ:[[new J(new Yi(.1,0),d.clone()),[0,0,0]]],XY:[[new J(new _t(.15,.15,.01),h.clone()),[.15,.15,0]]],YZ:[[new J(new _t(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new _t(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},T={X:[[new J(new Tt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new J(new Tt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new J(new Tt(.2,0,.6,4),n),[0,.3,0]],[new J(new Tt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new J(new Tt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new J(new Tt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new J(new Yi(.2,0),n)]],XY:[[new J(new _t(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new J(new _t(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new _t(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},A={START:[[new J(new Yi(.01,2),i),null,null,null,"helper"]],END:[[new J(new Yi(.01,2),i),null,null,null,"helper"]],DELTA:[[new zt(M(),i),null,null,null,"helper"]],X:[[new zt(m,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new zt(m,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new zt(m,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},C={XYZE:[[new J(v(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new J(v(.5,.5),r)]],Y:[[new J(v(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new J(v(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new J(v(.75,1),u),null,[0,Math.PI/2,0]]]},O={AXIS:[[new zt(m,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},y={XYZE:[[new J(new Pn(.25,10,8),n)]],X:[[new J(new Ei(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new J(new Ei(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new J(new Ei(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new J(new Ei(.75,.1,2,24),n)]]},S={X:[[new J(p,r),[.5,0,0],[0,0,-Math.PI/2]],[new J(b,r),[0,0,0],[0,0,-Math.PI/2]],[new J(p,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new J(p,o),[0,.5,0]],[new J(b,o)],[new J(p,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new J(p,a),[0,0,.5],[Math.PI/2,0,0]],[new J(b,a),[0,0,0],[Math.PI/2,0,0]],[new J(p,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new J(new _t(.15,.15,.01),h),[.15,.15,0]]],YZ:[[new J(new _t(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new _t(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new J(new _t(.1,.1,.1),d.clone())]]},N={X:[[new J(new Tt(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new J(new Tt(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new J(new Tt(.2,0,.6,4),n),[0,.3,0]],[new J(new Tt(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new J(new Tt(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new J(new Tt(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new J(new _t(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new J(new _t(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new J(new _t(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new J(new _t(.2,.2,.2),n),[0,0,0]]]},k={X:[[new zt(m,i.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new zt(m,i.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new zt(m,i.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function V(X){let B=new tt;for(let Y in X)for(let G=X[Y].length;G--;){let ie=X[Y][G][0].clone(),se=X[Y][G][1],pe=X[Y][G][2],He=X[Y][G][3],Qe=X[Y][G][4];ie.name=Y,ie.tag=Qe,se&&ie.position.set(se[0],se[1],se[2]),pe&&ie.rotation.set(pe[0],pe[1],pe[2]),He&&ie.scale.set(He[0],He[1],He[2]),ie.updateMatrix();let q=ie.geometry.clone();q.applyMatrix4(ie.matrix),ie.geometry=q,ie.renderOrder=1/0,ie.position.set(0,0,0),ie.rotation.set(0,0,0),ie.scale.set(1,1,1),B.add(ie)}return B}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=V(R)),this.add(this.gizmo.rotate=V(C)),this.add(this.gizmo.scale=V(S)),this.add(this.picker.translate=V(T)),this.add(this.picker.rotate=V(y)),this.add(this.picker.scale=V(N)),this.add(this.helper.translate=V(A)),this.add(this.helper.rotate=V(O)),this.add(this.helper.scale=V(k)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){let n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Aa;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let r=0;r<i.length;r++){let o=i[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(bt.setFromEuler(Sa.set(0,0,0)),o.quaternion.copy(n).multiply(bt),Math.abs(ft.copy(Nr).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(bt.setFromEuler(Sa.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(bt),Math.abs(ft.copy(Ji).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(bt.setFromEuler(Sa.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(bt),Math.abs(ft.copy(Or).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(bt.setFromEuler(Sa.set(0,Math.PI/2,0)),ft.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Of.lookAt(Nf,ft,Ji)),o.quaternion.multiply(bt),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Kt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Kt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Kt),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(ft.copy(Nr).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(ft.copy(Ji).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(ft.copy(Or).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(ft.copy(Or).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(ft.copy(Nr).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(ft.copy(Ji).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(wa.copy(n),ft.copy(this.eye).applyQuaternion(bt.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Of.lookAt(this.eye,Nf,Ji)),o.name==="X"&&(bt.setFromAxisAngle(Nr,Math.atan2(-ft.y,ft.z)),bt.multiplyQuaternions(wa,bt),o.quaternion.copy(bt)),o.name==="Y"&&(bt.setFromAxisAngle(Ji,Math.atan2(ft.x,ft.z)),bt.multiplyQuaternions(wa,bt),o.quaternion.copy(bt)),o.name==="Z"&&(bt.setFromAxisAngle(Or,Math.atan2(ft.y,ft.x)),bt.multiplyQuaternions(wa,bt),o.quaternion.copy(bt))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(l){return o.name===l}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}},wh=class extends J{constructor(){super(new yi(1e5,1e5,2,2),new wt({visible:!1,wireframe:!0,side:Ot,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Ta.copy(Nr).applyQuaternion(t==="local"?this.worldQuaternion:Aa),Dr.copy(Ji).applyQuaternion(t==="local"?this.worldQuaternion:Aa),Ur.copy(Or).applyQuaternion(t==="local"?this.worldQuaternion:Aa),ft.copy(Dr),this.mode){case"translate":case"scale":switch(this.axis){case"X":ft.copy(this.eye).cross(Ta),Nn.copy(Ta).cross(ft);break;case"Y":ft.copy(this.eye).cross(Dr),Nn.copy(Dr).cross(ft);break;case"Z":ft.copy(this.eye).cross(Ur),Nn.copy(Ur).cross(ft);break;case"XY":Nn.copy(Ur);break;case"YZ":Nn.copy(Ta);break;case"XZ":ft.copy(Ur),Nn.copy(Dr);break;case"XYZ":case"E":Nn.set(0,0,0);break}break;default:Nn.set(0,0,0)}Nn.length()===0?this.quaternion.copy(this.cameraQuaternion):(kf.lookAt(Kt.set(0,0,0),Nn,ft),this.quaternion.setFromRotationMatrix(kf)),super.updateMatrixWorld(e)}};var Qy=new x(0,1,0),lS=new x(0,0,1);function Jy(s,e,t){(!Number.isFinite(t)||t<=0)&&(t=1);let n=s,i=n/t;return i>e&&(i=e,n=i*t),{x:Math.round((s-n)/2),y:Math.round((e-i)/2),width:Math.max(1,Math.round(n)),height:Math.max(1,Math.round(i))}}var Pa=class{constructor(e,t,n){this.editor=e,this.canvas=t,this.container=n,this.shotView=!1,this.capturing=!1,this.lastPointer={x:0,y:0},this.pointerDown={x:0,y:0,time:0},this._hoverRaf=0,this._saved=null,this._raycaster=new Hs,this._pointer=new te,this._depthCanvas=document.createElement("canvas"),this.scene=new $o,this.scene.background=new ae(1514016),this.world=new et,this.world.name="\u4E16\u754C",this.scene.add(this.world),this.helperGroup=new et,this.helperGroup.name="\u7F16\u8F91\u5668\u8F85\u52A9",this.scene.add(this.helperGroup),this.renderer=new Yo({canvas:t,antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this._quality=this.editor.state.render.quality||"balanced";try{let i=this.renderer.getContext(),r=i.getExtension("WEBGL_debug_renderer_info"),o=r?String(i.getParameter(r.UNMASKED_RENDERER_WEBGL)||""):"";this.editor.state.render.quality==="balanced"&&/(Intel|UHD Graphics|AMD Radeon.*Graphics|Microsoft Basic)/i.test(o)&&(this._quality="performance",this.editor.state.render.quality="performance")}catch{}this.renderer.setPixelRatio(Math.min(this.qualityPixelRatio(),window.devicePixelRatio||1)),this.renderer.outputColorSpace=Et,this.renderer.toneMapping=ih,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=nh,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.renderer.setClearColor(1514016,1),this._needsRender=!0,this._loopRunning=!1,this._loop=this._loop.bind(this),this.editorCamera=new Ct(38,1,.05,200),this.editorCamera.position.set(4.2,2.4,4.6),this.editorTarget=new x(0,1,0),this.editorCamera.lookAt(this.editorTarget),this.shotCamera=new Ct(38,.75,.05,200),this.shotCamera.position.set(0,1.35,4.2),this.shotTarget=new x(0,1.05,0),this.shotRoll=0,this.applyShotCamera(),this.controls=new Ea(this.editorCamera,t),this.controls.target.copy(this.editorTarget),this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.minDistance=.35,this.controls.maxDistance=45,this.controls.maxPolarAngle=Math.PI*.495,this.controls.screenSpacePanning=!0,this.controls.update(),this.controls.addEventListener("change",()=>{this.invalidate()}),this.transform=new Ra(this.editorCamera,t),this.transform.setSize(.55),this.transform.setSpace("world"),this.transform.addEventListener("dragging-changed",i=>{this.controls.enabled=!i.value,i.value?this.editor.beginTransform?.():this.editor.endTransform?.()}),this.transform.addEventListener("objectChange",()=>{this.editor.onTransformChange?.(this.transform.object),this.invalidate()}),this.transform.addEventListener("change",()=>this.invalidate()),this.transform.addEventListener("axis-changed",()=>this.invalidate()),this.scene.add(this.transform.getHelper()),this.setupLights(),this.setupGround(),this.applyQuality(this._quality,{silent:!0}),this._resizeObserver=new ResizeObserver(()=>this.resize()),this._resizeObserver.observe(n),this.resize(),t.addEventListener("pointerdown",i=>this.onPointerDown(i)),t.addEventListener("pointerup",i=>this.onPointerUp(i)),t.addEventListener("pointermove",i=>this.onPointerMove(i)),t.addEventListener("pointerleave",()=>{this.canvas.style.cursor="",this.editor.hoverJoint?.(null)}),t.addEventListener("contextmenu",i=>i.preventDefault()),t.addEventListener("dblclick",i=>this.onDoubleClick(i)),this._scheduleLoop()}setupLights(){let e=new ha(13097215,2827294,1.35);this.scene.add(e);let t=new Ri(16772829,2.5);t.position.set(4.5,7,5.5),t.castShadow=!0,t.shadow.mapSize.set(2048,2048),t.shadow.camera.near=.5,t.shadow.camera.far=30,t.shadow.camera.left=-7,t.shadow.camera.right=7,t.shadow.camera.top=8,t.shadow.camera.bottom=-3,t.shadow.bias=-4e-4,t.shadow.normalBias=.025,t.shadow.radius=3,this.scene.add(t),this.keyLight=t;let n=new Ri(10405119,.9);n.position.set(-5,3.5,-2.5),this.scene.add(n);let i=new Ri(16764831,.65);i.position.set(.5,3.5,-6),this.scene.add(i),this.scene.add(new fa(16777215,.12))}setupGround(){this.ground=new J(new yi(60,60),new Ft({color:2764599,roughness:.95,metalness:0})),this.ground.rotation.x=-Math.PI/2,this.ground.position.y=-.001,this.ground.receiveShadow=!0,this.ground.name="\u5730\u9762",this.ground.userData.isGround=!0,this.scene.add(this.ground),this.grid=new Cr(24,24,6648196,3423304),this.grid.position.y=.003,this.grid.material.transparent=!0,this.grid.material.opacity=.62,this.grid.name="\u7F51\u683C",this.scene.add(this.grid)}setGridVisible(e){this.grid.visible=!!e,this.invalidate()}setGroundVisible(e){this.ground.visible=!!e,this.invalidate()}adaptToSceneHeight(e){let t=Math.max(.3,Number(e)||1.75);if(this._sceneSpan&&Math.abs(t-this._sceneSpan)<.005)return;this._sceneSpan=t,this._sceneHeight=t;let n=Math.max(1,t/2);this.ground.scale.setScalar(n);let i=Math.max(24,Math.ceil(t*4/4)*4);(!this._gridSize||Math.abs(this._gridSize-i)>.5)&&(this.grid&&(this.grid.parent?.remove(this.grid),this.grid.geometry?.dispose?.(),this.grid.material?.dispose?.()),this.grid=new Cr(i,24,6648196,3423304),this.grid.position.y=.003,this.grid.material.transparent=!0,this.grid.material.opacity=.62,this.grid.name="\u7F51\u683C",this.grid.visible=!!this.editor.state.scene.grid,this.scene.add(this.grid),this._gridSize=i);let r=Math.max(200,t*30);if(this.editorCamera.far=r,this.editorCamera.near=Math.max(.02,t/5e3),this.editorCamera.updateProjectionMatrix(),this.shotCamera.far=r,this.shotCamera.near=Math.max(.02,t/5e3),this.shotCamera.updateProjectionMatrix(),this.controls.maxDistance=Math.max(45,t*12),this.controls.minDistance=Math.max(.05,t/2e3),this.keyLight){let o=Math.max(7,t*1.6),a=this.keyLight.shadow;a.camera.left=-o,a.camera.right=o,a.camera.top=o,a.camera.bottom=-o,a.camera.far=Math.max(30,t*12),a.camera.updateProjectionMatrix()}this.invalidate(!0)}setGroundColor(e){this.ground.material.color.set(e),this.invalidate()}setBackground(e){this.scene.background.set(e),this.renderer.setClearColor(e,1),this.invalidate()}resize(){let e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);this.renderer.setPixelRatio(Math.min(this.qualityPixelRatio(),window.devicePixelRatio||1)),this.renderer.setSize(e,t,!1),this.editorCamera.aspect=e/t,this.editorCamera.updateProjectionMatrix(),this.shotCamera.aspect=this.editor.state.output.width/this.editor.state.output.height,this.shotCamera.updateProjectionMatrix(),this.invalidate()}applyShotCamera(){this.shotCamera.position.copy(this.shotPosition||this.shotCamera.position),this.shotCamera.up.copy(Qy),this.shotCamera.lookAt(this.shotTarget),this.shotRoll&&this.shotCamera.quaternion.multiply(new oe().setFromAxisAngle(new x(0,0,1),this.shotRoll)),this.shotCamera.updateMatrixWorld(!0)}getShotState(){return{position:this.shotCamera.position.toArray(),target:this.shotTarget.toArray(),fov:this.shotCamera.fov,roll:this.shotRoll}}setShotState(e={}){Array.isArray(e.position)&&(this.shotCamera.position.fromArray(e.position),this.shotPosition=this.shotCamera.position.clone()),Array.isArray(e.target)&&this.shotTarget.fromArray(e.target),Number.isFinite(e.fov)&&(this.shotCamera.fov=e.fov,this.shotCamera.updateProjectionMatrix()),this.shotRoll=Number(e.roll)||0,this.applyShotCamera(),this.shotView&&(this.controls.target.copy(this.shotTarget),this.controls.update())}frameShot(e,t={}){let n=t.fov??this.shotCamera.fov,i=this.editor.state.output.width/this.editor.state.output.height,r=e.getCenter(new x),o=e.getSize(new x),a=Math.max(o.y,.6),l=Math.max(o.x,.6)/Math.max(.2,i),c=Me.degToRad(n)/2,h=Math.max(a,l)/(2*Math.tan(c));h*=t.margin??1.38;let d=t.yaw??.18,u=t.elevation??.12,f=new x(Math.sin(d)*Math.cos(u),u,Math.cos(d)*Math.cos(u)).normalize(),g=r.clone();g.y=t.targetY??r.y;let _=g.clone().add(f.multiplyScalar(h));this.shotTarget.copy(g),this.shotCamera.position.copy(_),this.shotCamera.fov=n,this.shotCamera.aspect=i,this.shotCamera.updateProjectionMatrix(),this.shotRoll=t.roll??0,this.shotPosition=_.clone(),this.applyShotCamera(),this.shotView&&(this.controls.target.copy(this.shotTarget),this.controls.update()),this.invalidate()}applyCameraPreset(e,t){let n=t.getCenter(new x),i=t.getSize(new x),r=this.editor.state.output.width/this.editor.state.output.height,o=e.fov||38,a=Me.degToRad(o)/2,c=Math.max(i.y,i.x/Math.max(.2,r),.8)/(2*Math.tan(a)),h=e.distanceFactor?Math.max(.8,c*e.distanceFactor):Math.max(e.distance||4,c*1.45),d=e.yaw||0,u=new x(Math.sin(d),0,Math.cos(d)).normalize(),f=n.clone();f.y=e.targetFactor!==void 0?n.y+i.y*e.targetFactor:e.target??n.y;let g=e.heightFactor!==void 0?Math.max(.06,n.y+i.y*e.heightFactor):e.height??f.y+.3,_=new x(f.x+u.x*h,g,f.z+u.z*h);this.shotTarget.copy(f),this.shotCamera.position.copy(_),this.shotCamera.fov=o,this.shotCamera.aspect=r,this.shotCamera.updateProjectionMatrix(),this.shotRoll=e.roll||0,this.shotPosition=_.clone(),this.applyShotCamera(),this.shotView&&(this.controls.target.copy(this.shotTarget),this.controls.update(),this.shotCamera.position.y<.05&&(this.shotCamera.position.y=.05,this.controls.update())),this.invalidate()}focusOn(e,{selectedOnly:t=!1}={}){if(!e||e.isEmpty())return;let n=e.getCenter(new x),i=e.getSize(new x),o=Math.max(i.length()*.5,.6)/Math.tan(Me.degToRad(this.editorCamera.fov)/2)*.95,a=new x(.65,.35,1).normalize();this.editorTarget.copy(n),this.editorCamera.position.copy(n.clone().add(a.multiplyScalar(o))),this.editorCamera.near=Math.max(.02,o/200),this.editorCamera.far=Math.max(100,o*30),this.editorCamera.updateProjectionMatrix(),this.controls.target.copy(n),this.controls.update(),this.invalidate()}setShotView(e){if(e=!!e,e===this.shotView)return;let t=Math.max(.3,Number(this._sceneHeight)||1.75);e?(this.editorTarget.copy(this.controls.target),this.transform.detach(),this.shotView=!0,this.controls.object=this.shotCamera,this.controls.target.copy(this.shotTarget),this.controls.minDistance=Math.max(.05,t/2e3),this.controls.maxDistance=Math.max(30,t*12),this.controls.minPolarAngle=.02,this.controls.maxPolarAngle=Math.PI*.98,this.controls.update(),this.shotCamera.position.y<.05&&(this.shotCamera.position.y=.05),this.editor.onShotViewChanged?.(!0)):(this.shotView=!1,this.shotPosition=this.shotCamera.position.clone(),this.controls.object=this.editorCamera,this.controls.target.copy(this.editorTarget),this.controls.minDistance=Math.max(.1,t/1e3),this.controls.maxDistance=Math.max(45,t*12),this.controls.minPolarAngle=0,this.controls.maxPolarAngle=Math.PI*.495,this.controls.update(),this.editor.onShotViewChanged?.(!1)),this.invalidate()}_loop(){if(this._loopRunning=!1,this.capturing)return;let e=this.controls.update();if(e&&(this._needsRender=!0),this.shotView&&this.shotCamera.position.y<.05&&(this.shotCamera.position.y=.05,this._needsRender=!0),!!this._needsRender){this.shotView&&(this.shotTarget.copy(this.controls.target),this.shotPosition=this.shotCamera.position.clone(),this.applyShotCamera());for(let t of this.editor.characters||[])t.updateHandles?.();this.renderFrame(),this._needsRender=!1,e&&(this._needsRender=!0,this._scheduleLoop())}}_scheduleLoop(){this._loopRunning||this.capturing||(this._loopRunning=!0,requestAnimationFrame(this._loop))}invalidate(e=!1){this._needsRender=!0,e&&(this.renderer.shadowMap.needsUpdate=!0),this._scheduleLoop()}qualityPixelRatio(e=this._quality){return e==="performance"?1:e==="quality"?2:1.5}applyQuality(e,{silent:t=!1}={}){if(this._quality=["performance","balanced","quality"].includes(e)?e:"balanced",this.renderer.setPixelRatio(Math.min(this.qualityPixelRatio(),window.devicePixelRatio||1)),this.keyLight){let n=this._quality==="quality"?2048:1024;this.keyLight.shadow.mapSize.x!==n&&(this.keyLight.shadow.mapSize.set(n,n),this.keyLight.shadow.map?.dispose(),this.keyLight.shadow.map=null)}this.renderer.shadowMap.enabled=this.editor.state.render.shadows!==!1,this.renderer.shadowMap.needsUpdate=!0,t||this.resize(),this.invalidate(!0)}renderFrame(){let e=this.container.clientWidth,t=this.container.clientHeight;if(this.shotView){let n=this.editor.state.output.width/this.editor.state.output.height,i=Jy(e,t,n);this.renderer.setScissorTest(!0),this.renderer.setViewport(0,0,e,t),this.renderer.setScissor(0,0,e,t),this.renderer.setClearColor(329224,1),this.renderer.clear(),this.renderer.setViewport(i.x,i.y,i.width,i.height),this.renderer.setScissor(i.x,i.y,i.width,i.height),this.shotCamera.aspect=n,this.shotCamera.updateProjectionMatrix(),this.renderer.render(this.scene,this.shotCamera),this.renderer.setScissorTest(!1),this.renderer.setViewport(0,0,e,t)}else this.renderer.setScissorTest(!1),this.renderer.setViewport(0,0,e,t),this.renderer.setClearColor(this.scene.background||1514016,1),this.renderer.render(this.scene,this.editorCamera)}projectToScreen(e,t,n,i=this.shotCamera){let r=e.clone().project(i);return r.z<-1.2||r.z>1.2?null:{x:(r.x*.5+.5)*t,y:(-r.y*.5+.5)*n,z:r.z}}getPointerNdc(e){let t=this.canvas.getBoundingClientRect();return this._pointer.x=(e.clientX-t.left)/t.width*2-1,this._pointer.y=-((e.clientY-t.top)/t.height)*2+1,this._pointer}getActiveCamera(){return this.shotView?this.shotCamera:this.editorCamera}onPointerDown(e){this.pointerDown={x:e.clientX,y:e.clientY,time:performance.now()}}onPointerUp(e){Math.hypot(e.clientX-this.pointerDown.x,e.clientY-this.pointerDown.y)>4||performance.now()-this.pointerDown.time>600||e.button===0&&(this.shotView||this.transform.dragging||this.pick(e,e.altKey))}onPointerMove(e){this.capturing||this.shotView||this._hoverRaf||(this._hoverRaf=requestAnimationFrame(()=>{this._hoverRaf=0;let t=this.pickJoint(e,!1);this.canvas.style.cursor=t?"pointer":"",this.editor.hoverJoint?.(t)}))}pickJoint(e,t=!1){if(!this.editor.poseMode)return null;let n=this.editor.selectedCharacter?.();if(!n)return null;let i=this.getActiveCamera();this._raycaster.setFromCamera(this.getPointerNdc(e),i);let r=n.handles.filter(l=>l.visible),o=this._raycaster.intersectObjects(r,!1);if(!o.length)return null;let a=o[0].object;return t&&this.editor.selectJoint(n,a.userData.role,a),a.userData}pick(e,t=!1){let n=this.getActiveCamera(),i=this.getPointerNdc(e);if(this.pickJoint(e,!0))return;this._raycaster.setFromCamera(i,n);let o=[];for(let h of this.editor.characters||[])h.root.visible&&o.push(h.root);for(let h of this.editor.props||[])h.group.visible&&o.push(h.group);let a=this._raycaster.intersectObjects(o,!0);if(!a.length){this.editor.selectEntity?.(null);return}let l=[];for(let h of a){let d=h.object;for(;d&&!d.userData?.entityId;)d=d.parent;let u=d?.userData?.entityId;u&&!l.includes(u)&&l.push(u)}if(!l.length){this.editor.selectEntity?.(null);return}let c=l[0];if(t){let h=l.indexOf(this.editor.selectedId);c=l[(h+1)%l.length]}this.editor.selectEntity?.(c)}onDoubleClick(e){let t=this.getActiveCamera();this._raycaster.setFromCamera(this.getPointerNdc(e),t);let n=this._raycaster.intersectObjects(this.world.children,!0);if(n.length){let i=n[0].object;for(;i&&!i.userData?.entityId;)i=i.parent;let r=i?this.editor.getEntity(i.userData.entityId):null;r?.getBounds&&this.focusOn(r.getBounds())}}_hideHelpersForCapture(){let e={helperVisible:this.helperGroup.visible,gridVisible:this.grid.visible,groundVisible:this.ground.visible,transformVisible:this.transform.getHelper().visible,controlsEnabled:this.controls.enabled,shadowEnabled:this.renderer.shadowMap.enabled,scissorTest:this.renderer.getScissorTest?.()};return this.helperGroup.visible=!1,this.grid.visible=!1,this.transform.getHelper().visible=!1,this.transform.detach(),e}_restoreHelpers(e){this.helperGroup.visible=e.helperVisible,this.grid.visible=e.gridVisible,this.ground.visible=e.groundVisible,this.transform.getHelper().visible=e.transformVisible,this.controls.enabled=e.controlsEnabled,this.renderer.shadowMap.enabled=e.shadowEnabled,this.renderer.shadowMap.needsUpdate=!0}beginCapture(e,t){if(this.capturing)throw new Error("\u622A\u56FE\u6B63\u5728\u8FDB\u884C\u4E2D");return this.capturing=!0,this._saved={width:this.container.clientWidth,height:this.container.clientHeight,pixelRatio:this.renderer.getPixelRatio(),size:this.renderer.getSize(new te),shotView:this.shotView,bg:this.scene.background?.clone?.()||new ae(1514016),near:this.shotCamera.near,far:this.shotCamera.far,aspect:this.shotCamera.aspect,helper:this._hideHelpersForCapture()},this.shotCamera.aspect=e/t,this.shotCamera.updateProjectionMatrix(),this.shotCamera.updateMatrixWorld(!0),this.renderer.setPixelRatio(1),this.renderer.setSize(e,t,!1),this.renderer.setScissorTest(!1),this.renderer.setViewport(0,0,e,t),this.renderer.shadowMap.enabled=this.editor.state.render.shadows!==!1,this.renderer.shadowMap.needsUpdate=!0,this.controls.enabled=!1,{width:e,height:t}}endCapture(){if(!this._saved){this.capturing=!1;return}let e=this._saved;this._saved=null,this.capturing=!1,this.renderer.setPixelRatio(e.pixelRatio),this.renderer.setSize(e.width,e.height,!1),this.shotCamera.aspect=e.aspect,this.shotCamera.updateProjectionMatrix(),e.bg&&(this.scene.background=e.bg),this._restoreHelpers(e.helper),this.renderer.setScissorTest(!1),this.renderer.setViewport(0,0,e.width,e.height),this.resize(),this.editor.attachSelected?.(),this.invalidate(!0)}setCaptureBackground(e){this.scene.background?.set&&this.scene.background.set(e),this.renderer.setClearColor(e,1),this.renderer.setScissorTest(!1),this.renderer.setViewport(0,0,this.renderer.domElement.width,this.renderer.domElement.height),this.renderer.clear()}buildStickFigure(){let e=new et;e.name="\u6BD4\u4F8B\u4E2D\u6027\u706B\u67F4\u4EBA";let t=new Ft({color:16769981,roughness:.72,metalness:0,emissive:2824974,emissiveIntensity:.35}),n=new Ft({color:16777215,roughness:.55,emissive:3355443,emissiveIntensity:.25}),i=[],r=(l,c,h)=>{if(!l||!c)return;let d=c.clone().sub(l),u=d.length();if(u<1e-4)return;let f=new Tt(h,h,u,6,1),g=new J(f,t);g.position.copy(l).add(c).multiplyScalar(.5),g.quaternion.setFromUnitVectors(new x(0,1,0),d.normalize()),g.castShadow=!1,g.receiveShadow=!1,e.add(g),i.push(f)},o=(l,c)=>{if(!l)return;let h=new Pn(c,12,9),d=new J(h,n);d.position.copy(l),d.castShadow=!1,d.receiveShadow=!1,e.add(d),i.push(h)},a=(l,c)=>l&&c?l.clone().add(c).multiplyScalar(.5):l||c||null;for(let l of this.editor.characters||[]){if(!l.root.visible||!l.loaded)continue;let c=l.getCanonicalJoints(),h=Math.max(.6,(Number(l.bodyHeight)||Number(l.height)||1.75)/1.75),d=X=>X*h,u=c.neck,f=a(c.leftHip,c.rightHip),g=c.leftShoulder,_=c.rightShoulder,p=c.leftElbow,m=c.rightElbow,b=c.leftWrist,v=c.rightWrist,M=c.leftHip,R=c.rightHip,T=c.leftKnee,A=c.rightKnee,C=c.leftAnkle,O=c.rightAnkle,y=l.mapping.head,S=y?y.getWorldPosition(new x):u?.clone().add(new x(0,.2*h,0)),N=S?S.clone().add(new x(0,.1*h,0)):null;r(u,f,d(.02)),r(u,g,d(.018)),r(u,_,d(.018)),r(g,p,d(.018)),r(p,b,d(.016)),r(_,m,d(.018)),r(m,v,d(.016)),r(f,M,d(.018)),r(f,R,d(.018)),r(M,T,d(.021)),r(T,C,d(.019)),r(R,A,d(.021)),r(A,O,d(.019)),r(u,S,d(.018));let k=l.mapping.leftToes?.getWorldPosition(new x),V=l.mapping.rightToes?.getWorldPosition(new x);r(C,k||C?.clone().add(new x(0,0,.1*h)),d(.014)),r(O,V||O?.clone().add(new x(0,0,.1*h)),d(.014)),o(u,d(.03)),o(f,d(.038)),o(g,d(.027)),o(_,d(.027)),o(p,d(.024)),o(m,d(.024)),o(b,d(.021)),o(v,d(.021)),o(M,d(.027)),o(R,d(.027)),o(T,d(.025)),o(A,d(.025)),o(C,d(.023)),o(O,d(.023)),o(N,d(.088))}return e.userData.dispose=()=>{for(let l of i)l.dispose();t.dispose(),n.dispose()},e}renderSceneDataURL(e="clay"){let t=this.editor.state.scene.background||"#20242b",n=this.editor.state.render.characterMode||"body";this.setCaptureBackground(t),this.scene.overrideMaterial=null;let i=[],r=[],o=[],a=null;if(n==="stick"){a=this.buildStickFigure();for(let h of this.editor.characters||[])o.push([h.root,h.root.visible]),h.root.visible=!1;a.children.length&&this.scene.add(a)}let l=(h,d)=>{h.traverse(u=>{u.isMesh&&(i.push([u,u.material]),u.material=d)})};if(e==="clay"||e==="mono"){let h=e==="mono"?10133670:12892326,d=e==="mono"?9080984:9410724,u=new Ft({color:h,roughness:.82,metalness:.02}),f=new Ft({color:d,roughness:.82,metalness:.02});if(r.push(u,f),n!=="stick")for(let g of this.editor.characters||[])g.root.visible&&l(g.root,u);for(let g of this.editor.props||[])g.group.visible&&l(g.group,f)}else if(e==="color"){let h=new Ft({color:14201999,roughness:.8,metalness:0});if(r.push(h),n!=="stick")for(let d of this.editor.characters||[])d.root.visible&&l(d.root,h);for(let d of this.editor.props||[]){if(!d.group.visible)continue;let u=new Ft({color:d.color||"#8f98a4",roughness:.82,metalness:.02});r.push(u),l(d.group,u)}}this.renderer.shadowMap.enabled=this.editor.state.render.shadows!==!1,this.renderer.render(this.scene,this.shotCamera);let c=this.renderer.domElement.toDataURL("image/png");for(let[h,d]of i)h.material=d;for(let[h,d]of o)h.visible=d;a&&(this.scene.remove(a),a.userData.dispose?.());for(let h of r)h.dispose();return c}renderDepthDataURL(){let e=this.renderer.domElement.width,t=this.renderer.domElement.height,n=this.shotCamera.position.distanceTo(this.shotTarget),i=Math.max(.05,n-6),r=Math.max(8,n+6),o=new tn({uniforms:{uNear:{value:i},uFar:{value:r}},vertexShader:`
        #include <common>
        #include <morphtarget_pars_vertex>
        #include <skinning_pars_vertex>
        varying float vDepth;
        void main() {
          #include <skinbase_vertex>
          #include <begin_vertex>
          #include <morphtarget_vertex>
          #include <skinning_vertex>
          #include <project_vertex>
          vDepth = -mvPosition.z;
        }
      `,fragmentShader:`
        varying float vDepth;
        uniform float uNear;
        uniform float uFar;
        void main() {
          float t = clamp((vDepth - uNear) / max(0.0001, uFar - uNear), 0.0, 1.0);
          float value = 1.0 - t;
          gl_FragColor = vec4(value, value, value, 1.0);
        }
      `,side:Ot});this.scene.overrideMaterial=o,this.scene.background=null,this.renderer.shadowMap.enabled=!1,this.renderer.setClearColor(0,1),this.renderer.setScissorTest(!1),this.renderer.setViewport(0,0,e,t),this.renderer.clear(),this.renderer.render(this.scene,this.shotCamera),this._depthCanvas.width=e,this._depthCanvas.height=t;let a=this._depthCanvas.getContext("2d",{willReadFrequently:!0});a.fillStyle="#000000",a.fillRect(0,0,e,t),a.drawImage(this.renderer.domElement,0,0,e,t);let l=this._depthCanvas.toDataURL("image/png");return this.scene.overrideMaterial=null,this.scene.background=new ae(this.editor.state.scene.background||"#20242b"),this.renderer.shadowMap.enabled=this.editor.state.render.shadows!==!1,this.renderer.shadowMap.needsUpdate=!0,this.invalidate(),o.dispose(),l}_withVisibility(e,t){let n=new Map;for(let[i,r]of e)n.set(i,i.visible),i.visible=r;try{return t()}finally{for(let[i,r]of n)i.visible=r}}_renderFlatMask(e){let t=new wt({color:16777215});this.scene.overrideMaterial=t,this.scene.background=null,this.renderer.shadowMap.enabled=!1,this.renderer.setClearColor(0,1),this.renderer.setScissorTest(!1),this.renderer.clear(),this.renderer.render(this.scene,this.shotCamera);let n=this.renderer.domElement.toDataURL("image/png");return this.scene.overrideMaterial=null,this.scene.background=new ae(this.editor.state.scene.background||"#20242b"),this.renderer.shadowMap.enabled=this.editor.state.render.shadows!==!1,this.renderer.shadowMap.needsUpdate=!0,this.invalidate(),t.dispose(),n}renderMaskDataURL(e){let t=[];for(let n of this.editor.characters||[])t.push([n.root,e==="people"]);for(let n of this.editor.props||[])t.push([n.group,e==="props"]);return t.push([this.ground,e==="ground"]),this._withVisibility(t,()=>this._renderFlatMask())}renderRegionDataURL(){let e=new Map,t=l=>new wt({color:l}),n=t(16731486),i=t(4841612),r=t(5211903),o=(l,c)=>{l.traverse(h=>{h.isMesh&&(e.set(h,h.material),h.material=c)})};for(let l of this.editor.characters||[])o(l.root,n);for(let l of this.editor.props||[])o(l.group,i);this.ground&&o(this.ground,r),this.scene.overrideMaterial=null,this.scene.background=null,this.renderer.shadowMap.enabled=!1,this.renderer.setClearColor(0,1),this.renderer.setScissorTest(!1),this.renderer.clear(),this.renderer.render(this.scene,this.shotCamera);let a=this.renderer.domElement.toDataURL("image/png");for(let[l,c]of e)l.material=c;return n.dispose(),i.dispose(),r.dispose(),this.scene.background=new ae(this.editor.state.scene.background||"#20242b"),this.renderer.shadowMap.enabled=this.editor.state.render.shadows!==!1,this.renderer.shadowMap.needsUpdate=!0,this.invalidate(),a}dispose(){this._resizeObserver.disconnect(),this.controls.dispose(),this.transform.dispose(),this.renderer.dispose()}};function Th(s,e){if(e===mf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ir||e===ba){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Ir)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ca=class extends Cn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Dh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new jh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Pi.extractUrlBase(e);o=Pi.resolveURL(c,this.path)}else o=Pi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ai(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zf){try{o[Xe.KHR_BINARY_GLTF]=new Yh(e)}catch(d){i&&i(d);return}r=JSON.parse(o[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new td(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Xe.KHR_MATERIALS_UNLIT:o[d]=new Lh;break;case Xe.KHR_DRACO_MESH_COMPRESSION:o[d]=new $h(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:o[d]=new Kh;break;case Xe.KHR_MESH_QUANTIZATION:o[d]=new Zh;break;default:u.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function ex(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ch=class{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ae(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Lt);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ri(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ua(h),c.distance=d;break;case"spot":c=new da(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Lh=class{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return wt}extendParams(e,t,n){let i=[];e.color=new ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Lt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(i)}},Ih=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Dh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new te(a,a)}return Promise.all(r)}},Uh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Nh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Oh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ae(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Lt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},kh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Fh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ae().setRGB(a[0],a[1],a[2],Lt),Promise.all(r)}},Bh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Hh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ae().setRGB(a[0],a[1],a[2],Lt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}},Vh=class{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},zh=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Wh=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Xh=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},qh=class{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}},jh=class{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==bn.TRIANGLES&&c.mode!==bn.TRIANGLE_STRIP&&c.mode!==bn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(let g of d){let _=new be,p=new x,m=new oe,b=new x(1,1,1),v=new Zo(g.geometry,g.material,u);for(let M=0;M<u;M++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,M),l.SCALE&&b.fromBufferAttribute(l.SCALE,M),v.setMatrixAt(M,_.compose(p,m,b));for(let M in l)if(M==="_COLOR_0"){let R=l[M];v.instanceColor=new ji(R.array,R.itemSize,R.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);tt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},zf="glTF",kr=12,Ff={JSON:1313821514,BIN:5130562},Yh=class{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,kr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-kr,r=new DataView(e,kr),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Ff.JSON){let c=new Uint8Array(e,kr+o,a);this.content=n.decode(c)}else if(l===Ff.BIN){let c=kr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$h=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let d=Jh[h]||h.toLowerCase();a[d]=o[h]}for(let h in e.attributes){let d=Jh[h]||h.toLowerCase();if(o[h]!==void 0){let u=n.accessors[e.attributes[h]],f=Gs[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}d(f)},a,c,Lt,u)})})}},Kh=class{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Zh=class{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}},La=class extends Si{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*c,_=g-c,p=-2*f+3*u,m=f-u,b=1-p,v=m-u+d;for(let M=0;M!==a;M++){let R=o[_+M+a],T=o[_+M+l]*h,A=o[g+M+a],C=o[g+M]*h;r[M]=b*R+v*T+p*A+m*C}return r}},tx=new oe,Qh=class extends La{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return tx.fromArray(r).normalize().toArray(r),r}},bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bf={9728:Yt,9729:en,9984:sh,9985:ur,9986:Es,9987:Dn},Hf={33071:Kn,33648:br,10497:Wi},Ah={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nx={CUBICSPLINE:void 0,LINEAR:Ns,STEP:Us},Rh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ix(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mn})),s.DefaultMaterial}function es(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ri(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(u)}if(i){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function rx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ox(s){let e,t=s.extensions&&s.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ph(t.attributes):e=s.indices+":"+Ph(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ph(s.targets[n]);return e}function Ph(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ed(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ax(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var lx=new be,td=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ex,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new ca(this.options.manager):this.textureLoader=new pa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ai(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return es(r,a,i),ri(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Pi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ah[i.type],a=Gs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Le(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Ah[i.type],c=Gs[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,p;if(f&&f!==d){let m=Math.floor(u/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,v=t.cache.get(b);v||(_=new c(a,m*f,i.count*f/h),v=new xi(_,f/h),t.cache.add(b,v)),p=new Mi(v,l,u%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,u,i.count*l),p=new Le(_,l,g);if(i.sparse!==void 0){let m=Ah.SCALAR,b=Gs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,R=new b(o[1],v,i.sparse.count*m),T=new c(o[2],M,i.sparse.count*l);a!==null&&(p=new Le(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,C=R.length;A<C;A++){let O=R[A];if(p.setX(O,T[A*l]),l>=2&&p.setY(O,T[A*l+1]),l>=3&&p.setZ(O,T[A*l+2]),l>=4&&p.setW(O,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let u=(r.samplers||{})[o.sampler]||{};return h.magFilter=Bf[u.magFilter]||en,h.minFilter=Bf[u.minFilter]||Dn,h.wrapS=Hf[u.wrapS]||Wi,h.wrapT=Hf[u.wrapT]||Wi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let u=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){let p=new Vt(_);p.needsUpdate=!0,u(p)}),t.load(Pi.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),ri(d,o),d.userData.mimeType=o.mimeType||ax(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Er,Jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new kt,Jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ft}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){let d=i[Xe.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{let d=r.pbrMetallicRoughness||{};if(a.color=new ae(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Lt),a.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Et)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ot);let h=r.alphaMode||Rh.OPAQUE;if(h===Rh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Rh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==wt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new te(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==wt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==wt){let d=r.emissiveFactor;a.emissive=new ae().setRGB(d[0],d[1],d[2],Lt)}return r.emissiveTexture!==void 0&&o!==wt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(c).then(function(){let d=new o(a);return r.name&&(d.name=r.name),ri(d,r),t.associations.set(d,{materials:e}),r.extensions&&es(i,d,r),d})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Vf(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=ox(c),d=i[h];if(d)o.push(d.promise);else{let u;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Vf(new Fe,c,t),i[h]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?ix(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],p=o[f],m,b=c[f];if(p.mode===bn.TRIANGLES||p.mode===bn.TRIANGLE_STRIP||p.mode===bn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Bs(_,b):new J(_,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===bn.TRIANGLE_STRIP?m.geometry=Th(m.geometry,ba):p.mode===bn.TRIANGLE_FAN&&(m.geometry=Th(m.geometry,Ir));else if(p.mode===bn.LINES)m=new cn(_,b);else if(p.mode===bn.LINE_STRIP)m=new zt(_,b);else if(p.mode===bn.LINE_LOOP)m=new ea(_,b);else if(p.mode===bn.POINTS)m=new ta(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&rx(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ri(m,r),p.extensions&&es(i,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&es(i,d[0],r),d[0];let u=new et;r.extensions&&es(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ct(Me.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Fs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let d=o[c];if(d){a.push(d);let u=new be;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Un(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){let f=i.channels[d],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,b=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",b)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],g=d[2],_=d[3],p=d[4],m=[];for(let b=0,v=u.length;b<v;b++){let M=u[b],R=f[b],T=g[b],A=_[b],C=p[b];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let O=n._createAnimationTracks(M,R,T,A,C);if(O)for(let y=0;y<O.length;y++)m.push(O[y])}return new la(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,lx)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new qi:c.length>1?h=new et:c.length===1?h=c[0]:h=new tt,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(r.name&&(h.userData.name=r.name,h.name=o),ri(h,r),r.extensions&&es(n,h,r),r.matrix!==void 0){let d=new be;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new et;n.name&&(r.name=i.createUniqueName(n.name)),ri(r,n),n.extensions&&es(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,d=l.length;h<d;h++)r.add(l[h]);let c=h=>{let d=new Map;for(let[u,f]of i.associations)(u instanceof Jt||u instanceof Vt)&&d.set(u,f);return h.traverse(u=>{let f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];Li[r.path]===Li.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(Li[r.path]){case Li.weights:c=ni;break;case Li.rotation:c=ii;break;case Li.position:case Li.scale:c=si;break;default:n.itemSize===1?c=ni:c=si;break}let h=i.interpolation!==void 0?nx[i.interpolation]:Ns,d=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){let g=new c(l[u]+"."+Li[r.path],t.array,d,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ed(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ii?Qh:La;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function cx(s,e,t){let n=e.attributes,i=new at;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new x(l[0],l[1],l[2]),new x(c[0],c[1],c[2])),a.normalized){let h=ed(Gs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new x,l=new x;for(let c=0,h=r.length;c<h;c++){let d=r[c];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let _=ed(Gs[u.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new ln;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Vf(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Jh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ze.workingColorSpace!==Lt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),ri(s,e),cx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?sx(s,e.targets,t):s})}var nd=new WeakMap,Ia=class extends Cn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){let r=new Ai(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Et,n).catch(n)}decodeDracoFile(e,t,n,i,r=Lt,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(nd.has(e)){let l=nd.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),nd.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new Fe;e.index&&t.setIndex(new Le(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new Le(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Et)return;let n=new ae;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Ze.toWorkingColorSpace(n,Et),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new Ai(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=hx.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){let o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function hx(){let s,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(d){h({draco:d})},DracoDecoderModule(s)});break;case"decode":let l=a.buffer,c=a.taskConfig;e.then(h=>{let d=h.draco,u=new d.Decoder;try{let f=t(d,u,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{d.destroy(u)}});break}};function t(o,a,l,c){let h=c.attributeIDs,d=c.attributeTypes,u,f,g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)u=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,u);else if(g===o.POINT_CLOUD)u=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let _={index:null,attributes:[]};for(let p in h){let m=self[d[p]],b,v;if(c.useUniqueIDs)v=h[p],b=a.GetAttributeByUniqueId(u,v);else{if(v=a.GetAttributeId(u,o[h[p]]),v===-1)continue;b=a.GetAttribute(u,v)}let M=i(o,a,u,p,m,b);p==="color"&&(M.vertexColorSpace=c.vertexColorSpace),_.attributes.push(M)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,u)),o.destroy(u),_}function n(o,a,l){let h=l.num_faces()*3,d=h*4,u=o._malloc(d);a.GetTrianglesUInt32Array(l,d,u);let f=new Uint32Array(o.HEAPF32.buffer,u,h).slice();return o._free(u),{array:f,itemSize:1}}function i(o,a,l,c,h,d){let u=d.num_components(),g=l.num_points()*u,_=g*h.BYTES_PER_ELEMENT,p=r(o,h),m=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,d,p,_,m);let b=new h(o.HEAPF32.buffer,m,g).slice();return o._free(m),{name:c,array:b,itemSize:u}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var Gf=(function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,o=WebAssembly.instantiate(a(i),{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function a(m){for(var b=new Uint8Array(m.length),v=0;v<m.length;++v){var M=m.charCodeAt(v);b[v]=M>96?M-97:M>64?M-39:M+4}for(var R=0,v=0;v<m.length;++v)b[R++]=b[v]<60?n[b[v]]:(b[v]-60)*64+b[++v];return b.buffer.slice(0,R)}function l(m,b,v,M,R,T){var A=r.exports.sbrk,C=v+3&-4,O=A(C*M),y=A(R.length),S=new Uint8Array(r.exports.memory.buffer);S.set(R,y);var N=m(O,v,M,y,R.length);if(N==0&&T&&T(O,C,M),b.set(S.subarray(O,O+v*M)),A(O-A(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(m){var b={object:new Worker(m),pending:0,requests:{}};return b.object.onmessage=function(v){var M=v.data;b.pending-=M.count,b.requests[M.id][M.action](M.value),delete b.requests[M.id]},b}function g(m){for(var b="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+p.toString(),v=new Blob([b],{type:"text/javascript"}),M=URL.createObjectURL(v),R=0;R<m;++R)d[R]=f(M);URL.revokeObjectURL(M)}function _(m,b,v,M,R){for(var T=d[0],A=1;A<d.length;++A)d[A].pending<T.pending&&(T=d[A]);return new Promise(function(C,O){var y=new Uint8Array(v),S=u++;T.pending+=m,T.requests[S]={resolve:C,reject:O},T.object.postMessage({id:S,count:m,size:b,source:y,mode:M,filter:R},[y.buffer])})}function p(m){o.then(function(){var b=m.data;try{var v=new Uint8Array(b.count*b.size);l(r.exports[b.mode],v,b.count,b.size,b.source,r.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:v},[v.buffer])}catch(M){self.postMessage({id:b.id,count:b.count,action:"reject",value:M})}})}return{ready:o,supported:!0,useWorkers:function(m){g(m)},decodeVertexBuffer:function(m,b,v,M,R){l(r.exports.meshopt_decodeVertexBuffer,m,b,v,M,r.exports[c[R]])},decodeIndexBuffer:function(m,b,v,M){l(r.exports.meshopt_decodeIndexBuffer,m,b,v,M)},decodeIndexSequence:function(m,b,v,M){l(r.exports.meshopt_decodeIndexSequence,m,b,v,M)},decodeGltfBuffer:function(m,b,v,M,R,T){l(r.exports[h[R]],m,b,v,M,r.exports[c[T]])},decodeGltfBufferAsync:function(m,b,v,M,R){return d.length>0?_(m,b,v,h[M],c[R]):o.then(function(){var T=new Uint8Array(m*b);return l(r.exports[h[M]],T,m,b,v,r.exports[c[R]]),T})}}})();var Da=(s,e,t)=>new Promise((n,i)=>{var r=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(s,e)).next())}),nt=(s,e,t)=>new Promise((n,i)=>{var r=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(s,e)).next())}),Wf=class extends tt{constructor(s){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${s}`,this.expressionName=s,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(s){this._binds.push(s)}deleteBind(s){let e=this._binds.indexOf(s);e>=0&&this._binds.splice(e,1)}applyWeight(s){var e;let t=this.outputWeight;t*=(e=s?.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(n=>n.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(s=>s.clearAppliedWeight())}};function Tp(s,e,t){var n,i;let r=s.parser.json,o=(n=r.nodes)==null?void 0:n[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;let a=o.mesh;if(a==null)return null;let l=(i=r.meshes)==null?void 0:i[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;let c=l.primitives.length,h=[];return t.traverse(d=>{h.length<c&&d.isMesh&&h.push(d)}),h}function Xf(s,e){return nt(this,null,function*(){let t=yield s.parser.getDependency("node",e);return Tp(s,e,t)})}function qf(s){return nt(this,null,function*(){let e=yield s.parser.getDependencies("node"),t=new Map;return e.forEach((n,i)=>{let r=Tp(s,i,n);r!=null&&t.set(i,r)}),t})}var md={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function Ap(s){return Math.max(Math.min(s,1),0)}var jf=class Rp{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){let e={},t=new Set(Object.values(md));return Object.entries(this._expressionMap).forEach(([n,i])=>{t.has(n)&&(e[n]=i)}),e}get customExpressionMap(){let e={},t=new Set(Object.values(md));return Object.entries(this._expressionMap).forEach(([n,i])=>{t.has(n)||(e[n]=i)}),e}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new Rp().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){let t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;let n=this.getExpression(e);return(t=n?.weight)!=null?t:null}setValue(e,t){let n=this.getExpression(e);n&&(n.weight=Ap(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){let t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){let e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1,i=t.expressionName;this.blinkExpressionNames.indexOf(i)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(i)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(i)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(i=>{e-=i.overrideBlinkAmount,t-=i.overrideLookAtAmount,n-=i.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},Fr={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",MatcapColor:"matcapColor",RimColor:"rimColor",OutlineColor:"outlineColor"},dx={_Color:Fr.Color,_EmissionColor:Fr.EmissionColor,_ShadeColor:Fr.ShadeColor,_RimColor:Fr.RimColor,_OutlineColor:Fr.OutlineColor},ux=new ae,Pp=class Cp{constructor({material:e,type:t,targetValue:n,targetAlpha:i}){this.material=e,this.type=t,this.targetValue=n,this.targetAlpha=i??1;let r=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:r,alpha:o}}applyWeight(e){let{color:t,alpha:n}=this._state;if(t!=null){let{propertyName:i,deltaValue:r}=t,o=this.material[i];o?.add(ux.copy(r).multiplyScalar(e))}if(n!=null){let{propertyName:i,deltaValue:r}=n;this.material[i]!=null&&(this.material[i]+=r*e)}}clearAppliedWeight(){let{color:e,alpha:t}=this._state;if(e!=null){let{propertyName:n,initialValue:i}=e,r=this.material[n];r?.copy(i)}if(t!=null){let{propertyName:n,initialValue:i}=t;this.material[n]!=null&&(this.material[n]=i)}}_initColorBindState(){var e,t,n;let{material:i,type:r,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[r])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(n=i.name)!=null?n:"(no name)"}, the type ${r} but the material or the type is not supported.`),null;let h=i[l].clone(),d=new ae(o.r-h.r,o.g-h.g,o.b-h.b);return{propertyName:l,initialValue:h,deltaValue:d}}_initAlphaBindState(){var e,t,n;let{material:i,type:r,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a?.[r])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(n=i.name)!=null?n:"(no name)"}, the type ${r} but the material or the type does not support alpha.`),null;if(l==null)return null;let c=i[l],h=o-c;return{propertyName:l,initialValue:c,deltaValue:h}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(Cp._propertyNameMapMap).find(([n])=>this.material[n]===!0))==null?void 0:e[1])!=null?t:null}};Pp._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var Yf=Pp,Va=class{constructor({primitives:s,index:e,weight:t}){this.primitives=s,this.index=e,this.weight=t}applyWeight(s){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*s)})}clearAppliedWeight(){this.primitives.forEach(s=>{var e;((e=s.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(s.morphTargetInfluences[this.index]=0)})}},$f=new te,Lp=class Ip{constructor({material:e,scale:t,offset:n}){var i,r;this.material=e,this.scale=t,this.offset=n;let o=(i=Object.entries(Ip._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:i[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(r=e.name)!=null?r:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;let c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;let h=c.offset.clone(),d=c.repeat.clone(),u=n.clone().sub(h),f=t.clone().sub(d);this._properties.push({name:a,initialOffset:h,deltaOffset:u,initialScale:d,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{let n=this.material[t.name];n!==void 0&&(n.offset.add($f.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add($f.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{let t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};Lp._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var Kf=Lp,fx=new Set(["1.0","1.0-beta"]),Dp=class Up{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return nt(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return nt(this,null,function*(){let t=yield this._v1Import(e);if(t)return t;let n=yield this._v0Import(e);return n||null})}_v1Import(e){return nt(this,null,function*(){var t,n;let i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;let o=(n=i.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;let a=o.specVersion;if(!fx.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.expressions;if(!l)return null;let c=new Set(Object.values(md)),h=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([u,f])=>{if(f!=null){if(!c.has(u)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${u}" detected. Ignoring the expression`);return}h.set(u,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([u,f])=>{if(c.has(u)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${u}". Ignoring the expression`);return}h.set(u,f)});let d=new jf;return yield Promise.all(Array.from(h.entries()).map(u=>nt(this,[u],function*([f,g]){var _,p,m,b,v,M,R;let T=new Wf(f);if(e.scene.add(T),T.isBinary=(_=g.isBinary)!=null?_:!1,T.overrideBlink=(p=g.overrideBlink)!=null?p:"none",T.overrideLookAt=(m=g.overrideLookAt)!=null?m:"none",T.overrideMouth=(b=g.overrideMouth)!=null?b:"none",(v=g.morphTargetBinds)==null||v.forEach(A=>nt(this,null,function*(){var C;if(A.node===void 0||A.index===void 0)return;let O=yield Xf(e,A.node),y=A.index;if(!O.every(S=>Array.isArray(S.morphTargetInfluences)&&y<S.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${g.name} attempts to index morph #${y} but not found.`);return}T.addBind(new Va({primitives:O,index:y,weight:(C=A.weight)!=null?C:1}))})),g.materialColorBinds||g.textureTransformBinds){let A=[];e.scene.traverse(C=>{let O=C.material;O&&(Array.isArray(O)?A.push(...O):A.push(O))}),(M=g.materialColorBinds)==null||M.forEach(C=>nt(this,null,function*(){A.filter(y=>{var S;let N=(S=this.parser.associations.get(y))==null?void 0:S.materials;return C.material===N}).forEach(y=>{T.addBind(new Yf({material:y,type:C.type,targetValue:new ae().fromArray(C.targetValue),targetAlpha:C.targetValue[3]}))})})),(R=g.textureTransformBinds)==null||R.forEach(C=>nt(this,null,function*(){A.filter(y=>{var S;let N=(S=this.parser.associations.get(y))==null?void 0:S.materials;return C.material===N}).forEach(y=>{var S,N;T.addBind(new Kf({material:y,offset:new te().fromArray((S=C.offset)!=null?S:[0,0]),scale:new te().fromArray((N=C.scale)!=null?N:[1,1])}))})}))}d.registerExpression(T)}))),d})}_v0Import(e){return nt(this,null,function*(){var t;let n=this.parser.json,i=(t=n.extensions)==null?void 0:t.VRM;if(!i)return null;let r=i.blendShapeMaster;if(!r)return null;let o=new jf,a=r.blendShapeGroups;if(!a)return o;let l=new Set;return yield Promise.all(a.map(c=>nt(this,null,function*(){var h;let d=c.presetName,u=d!=null&&Up.v0v1PresetNameMap[d]||null,f=u??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${d} has duplicated entries. Ignoring the expression`);return}l.add(f);let g=new Wf(f);e.scene.add(g),g.isBinary=(h=c.isBinary)!=null?h:!1,c.binds&&c.binds.forEach(p=>nt(this,null,function*(){var m;if(p.mesh===void 0||p.index===void 0)return;let b=[];if((m=n.nodes)==null||m.forEach((M,R)=>{M.mesh===p.mesh&&b.push(R)}),b.length===0){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to bind a morph target to the mesh #${p.mesh} but the mesh is not found or not used in the scene. Ignoring the bind.`);return}let v=p.index;yield Promise.all(b.map(M=>nt(this,null,function*(){var R;let T=yield Xf(e,M);if(!T.every(A=>Array.isArray(A.morphTargetInfluences)&&v<A.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${v}th morph but not found.`);return}g.addBind(new Va({primitives:T,index:v,weight:.01*((R=p.weight)!=null?R:100)}))})))}));let _=c.materialValues;_&&_.length!==0&&_.forEach(p=>{if(p.materialName===void 0||p.propertyName===void 0||p.targetValue===void 0)return;let m=[];e.scene.traverse(v=>{if(v.material){let M=v.material;Array.isArray(M)?m.push(...M.filter(R=>(R.name===p.materialName||R.name===p.materialName+" (Outline)")&&m.indexOf(R)===-1)):M.name===p.materialName&&m.indexOf(M)===-1&&m.push(M)}});let b=p.propertyName;m.forEach(v=>{if(b==="_MainTex_ST"){let R=new te(p.targetValue[0],p.targetValue[1]),T=new te(p.targetValue[2],p.targetValue[3]);T.y=1-T.y-R.y,g.addBind(new Kf({material:v,scale:R,offset:T}));return}let M=dx[b];if(M){g.addBind(new Yf({material:v,type:M,targetValue:new ae().fromArray(p.targetValue),targetAlpha:p.targetValue[3]}));return}console.warn(b+" is not supported")})}),o.registerExpression(g)}))),o})}};Dp.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var px=Dp;var xd=class js{constructor(e,t){this._firstPersonOnlyLayer=js.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=js.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new js(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=js.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=js.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(i=>{n.type==="firstPersonOnly"?(i.layers.set(this._firstPersonOnlyLayer),i.traverse(r=>r.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(i.layers.set(this._thirdPersonOnlyLayer),i.traverse(r=>r.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(i)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,i){let r=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){let a=e[o],l=e[o+1],c=e[o+2],h=t[a],d=n[a];if(h[0]>0&&i.includes(d[0])||h[1]>0&&i.includes(d[1])||h[2]>0&&i.includes(d[2])||h[3]>0&&i.includes(d[3]))continue;let u=t[l],f=n[l];if(u[0]>0&&i.includes(f[0])||u[1]>0&&i.includes(f[1])||u[2]>0&&i.includes(f[2])||u[3]>0&&i.includes(f[3]))continue;let g=t[c],_=n[c];g[0]>0&&i.includes(_[0])||g[1]>0&&i.includes(_[1])||g[2]>0&&i.includes(_[2])||g[3]>0&&i.includes(_[3])||(e[r++]=a,e[r++]=l,e[r++]=c)}return r}_createErasedMesh(e,t){let n=new Bs(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);let i=n.geometry,r=i.getAttribute("skinIndex"),o=r instanceof Rr?[]:r.array,a=[];for(let _=0;_<o.length;_+=4)a.push([o[_],o[_+1],o[_+2],o[_+3]]);let l=i.getAttribute("skinWeight"),c=l instanceof Rr?[]:l.array,h=[];for(let _=0;_<c.length;_+=4)h.push([c[_],c[_+1],c[_+2],c[_+3]]);let d=i.getIndex();if(!d)throw new Error("The geometry doesn't have an index buffer");let u=Array.from(d.array),f=this._excludeTriangles(u,h,a,t),g=[];for(let _=0;_<f;_++)g[_]=u[_];return i.setIndex(g),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new Un(e.skeleton.bones,e.skeleton.boneInverses),new be),n}_createHeadlessModelForSkinnedMesh(e,t){let n=[];if(t.skeleton.bones.forEach((r,o)=>{this._isEraseTarget(r)&&n.push(o)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);let i=this._createErasedMesh(t,n);e.add(i)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{let t=new et;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{let i=n;this._createHeadlessModelForSkinnedMesh(t,i)})}else if(e.type==="SkinnedMesh"){let t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};xd.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;xd.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var Zf=xd,mx=new Set(["1.0","1.0-beta"]),gx=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(s){this.parser=s}afterRoot(s){return nt(this,null,function*(){let e=s.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");s.userData.vrmFirstPerson=yield this._import(s,e)}})}_import(s,e){return nt(this,null,function*(){if(e==null)return null;let t=yield this._v1Import(s,e);if(t)return t;let n=yield this._v0Import(s,e);return n||null})}_v1Import(s,e){return nt(this,null,function*(){var t,n;let i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;let o=(n=i.extensions)==null?void 0:n.VRMC_vrm;if(!o)return null;let a=o.specVersion;if(!mx.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.firstPerson,c=[],h=yield qf(s);return Array.from(h.entries()).forEach(([d,u])=>{var f,g;let _=(f=l?.meshAnnotations)==null?void 0:f.find(p=>p.node===d);c.push({meshes:u,type:(g=_?.type)!=null?g:"auto"})}),new Zf(e,c)})}_v0Import(s,e){return nt(this,null,function*(){var t;let n=this.parser.json,i=(t=n.extensions)==null?void 0:t.VRM;if(!i)return null;let r=i.firstPerson;if(!r)return null;let o=[],a=yield qf(s);return Array.from(a.entries()).forEach(([l,c])=>{let h=n.nodes[l],d=r.meshAnnotations?r.meshAnnotations.find(u=>u.mesh===h.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(d?.firstPersonFlag)})}),new Zf(e,o)})}_convertV0FlagToV1Type(s){return s==="FirstPersonOnly"?"firstPersonOnly":s==="ThirdPersonOnly"?"thirdPersonOnly":s==="Both"?"both":"auto"}};var Qf=new x,Jf=new x,_x=new oe,ep=class extends et{constructor(s){super(),this.vrmHumanoid=s,this._boneAxesMap=new Map,Object.values(s.humanBones).forEach(e=>{let t=new ga(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(s=>{s.geometry.dispose(),s.material.dispose()})}updateMatrixWorld(s){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(Qf,_x,Jf);let n=Qf.set(.1,.1,.1).divide(Jf);t.matrix.copy(e.node.matrixWorld).scale(n)}),super.updateMatrixWorld(s)}},id=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"];var bx={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function Np(s){return s.invert?s.invert():s.inverse(),s}var ts=new x,ns=new oe,gd=class{constructor(s){this.humanBones=s,this.restPose=this.getAbsolutePose()}getAbsolutePose(){let s={};return Object.keys(this.humanBones).forEach(e=>{let t=e,n=this.getBoneNode(t);n&&(ts.copy(n.position),ns.copy(n.quaternion),s[t]={position:ts.toArray(),rotation:ns.toArray()})}),s}getPose(){let s={};return Object.keys(this.humanBones).forEach(e=>{let t=e,n=this.getBoneNode(t);if(!n)return;ts.set(0,0,0),ns.identity();let i=this.restPose[t];i?.position&&ts.fromArray(i.position).negate(),i?.rotation&&Np(ns.fromArray(i.rotation)),ts.add(n.position),ns.premultiply(n.quaternion),s[t]={position:ts.toArray(),rotation:ns.toArray()}}),s}setPose(s){Object.entries(s).forEach(([e,t])=>{let n=e,i=this.getBoneNode(n);if(!i)return;let r=this.restPose[n];r&&(t?.position&&(i.position.fromArray(t.position),r.position&&i.position.add(ts.fromArray(r.position))),t?.rotation&&(i.quaternion.fromArray(t.rotation),r.rotation&&i.quaternion.multiply(ns.fromArray(r.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([s,e])=>{let t=this.getBoneNode(s);t&&(e?.position&&t.position.fromArray(e.position),e?.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(s){var e;return(e=this.humanBones[s])!=null?e:void 0}getBoneNode(s){var e,t;return(t=(e=this.humanBones[s])==null?void 0:e.node)!=null?t:null}},sd=new x,vx=new oe,yx=new x,tp=class Op extends gd{static _setupTransforms(e){let t=new tt;t.name="VRMHumanoidRig";let n={},i={},r={},o={};id.forEach(l=>{var c;let h=e.getBoneNode(l);if(h){let d=new x,u=new oe;h.updateWorldMatrix(!0,!1),h.matrixWorld.decompose(d,u,sd),n[l]=d,i[l]=u,r[l]=h.quaternion.clone();let f=new oe;(c=h.parent)==null||c.matrixWorld.decompose(sd,f,sd),o[l]=f}});let a={};return id.forEach(l=>{var c;let h=e.getBoneNode(l);if(h){let d=n[l],u=l,f;for(;f==null&&(u=bx[u],u!=null);)f=n[u];let g=new tt;g.name="Normalized_"+h.name,(u?(c=a[u])==null?void 0:c.node:t).add(g),g.position.copy(d),f&&g.position.sub(f),a[l]={node:g}}}),{rigBones:a,root:t,parentWorldRotations:o,boneRotations:r}}constructor(e){let{rigBones:t,root:n,parentWorldRotations:i,boneRotations:r}=Op._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=i,this._boneRotations=r}update(){id.forEach(e=>{let t=this.original.getBoneNode(e);if(t!=null){let n=this.getBoneNode(e),i=this._parentWorldRotations[e],r=vx.copy(i).invert(),o=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(i).premultiply(r).multiply(o),e==="hips"){let a=n.getWorldPosition(yx);t.parent.updateWorldMatrix(!0,!1);let l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}},np=class kp{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var n;this.autoUpdateHumanBones=(n=t?.autoUpdateHumanBones)!=null?n:!0,this._rawHumanBones=new gd(e),this._normalizedHumanBones=new tp(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new gd(e.humanBones),this._normalizedHumanBones=new tp(this._rawHumanBones),this}clone(){return new kp(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},xx={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},Mx=new Set(["1.0","1.0-beta"]),ip={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},Ex=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(s,e){this.parser=s,this.helperRoot=e?.helperRoot,this.autoUpdateHumanBones=e?.autoUpdateHumanBones}afterRoot(s){return nt(this,null,function*(){s.userData.vrmHumanoid=yield this._import(s)})}_import(s){return nt(this,null,function*(){let e=yield this._v1Import(s);if(e)return e;let t=yield this._v0Import(s);return t||null})}_v1Import(s){return nt(this,null,function*(){var e,t;let n=this.parser.json;if(!(((e=n.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;let r=(t=n.extensions)==null?void 0:t.VRMC_vrm;if(!r)return null;let o=r.specVersion;if(!Mx.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;let a=r.humanoid;if(!a)return null;let l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,c={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(d=>nt(this,[d],function*([u,f]){let g=u,_=f.node;if(l){let m=ip[g];m!=null&&(g=m)}let p=yield this.parser.getDependency("node",_);if(p==null){console.warn(`A glTF node bound to the humanoid bone ${g} (index = ${_}) does not exist`);return}c[g]={node:p}}))));let h=new np(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(s.scene.add(h.normalizedHumanBonesRoot),this.helperRoot){let d=new ep(h);this.helperRoot.add(d),d.renderOrder=this.helperRoot.renderOrder}return h})}_v0Import(s){return nt(this,null,function*(){var e;let n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;let i=n.humanoid;if(!i)return null;let r={};i.humanBones!=null&&(yield Promise.all(i.humanBones.map(a=>nt(this,null,function*(){let l=a.bone,c=a.node;if(l==null||c==null)return;if(c<0){console.warn(`A glTF node index for the humanoid bone ${l} is negative (${c}), ignoring this bone.`);return}let h=yield this.parser.getDependency("node",c);if(h==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}let d=ip[l],u=d??l;if(r[u]!=null){console.warn(`Multiple bone entries for ${u} detected (index = ${c}), ignoring duplicated entries.`);return}r[u]={node:h}}))));let o=new np(this._ensureRequiredBonesExist(r),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(s.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){let a=new ep(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(s){let e=Object.values(xx).filter(t=>s[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return s}},sp=class extends Fe{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new Le(new Float32Array(195),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Le(new Uint16Array(189),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,s=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,s=!0),s&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let s=0;s<64;s++){let e=s/63*this._currentTheta;this._attrPos.setXYZ(s+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<63;s++)this._attrIndex.setXYZ(s*3,0,s+1,s+2);this._attrIndex.needsUpdate=!0}},Sx=class extends Fe{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new x,this._currentTail=new x,this._attrPos=new Le(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Le(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,s=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),s=!0),s&&this._buildPosition()}_buildPosition(){for(let s=0;s<32;s++){let e=s/16*Math.PI;this._attrPos.setXYZ(s,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+s,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+s,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<32;s++){let e=(s+1)%32;this._attrIndex.setXY(s*2,s,e),this._attrIndex.setXY(64+s*2,32+s,32+e),this._attrIndex.setXY(128+s*2,64+s,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Ua=new oe,rp=new oe,Br=new x,op=new x,ap=Math.sqrt(2)/2,wx=new oe(0,0,-ap,ap),Tx=new x(0,1,0),Ax=class extends et{constructor(s){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=s;{let e=new sp;e.radius=.5;let t=new wt({color:65280,transparent:!0,opacity:.5,side:Ot,depthTest:!1,depthWrite:!1});this._meshPitch=new J(e,t),this.add(this._meshPitch)}{let e=new sp;e.radius=.5;let t=new wt({color:16711680,transparent:!0,opacity:.5,side:Ot,depthTest:!1,depthWrite:!1});this._meshYaw=new J(e,t),this.add(this._meshYaw)}{let e=new Sx;e.radius=.1;let t=new kt({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new cn(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(s){let e=Me.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();let t=Me.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(Br),this.vrmLookAt.getLookAtWorldQuaternion(Ua),Ua.multiply(this.vrmLookAt.getFaceFrontQuaternion(rp)),this._meshYaw.position.copy(Br),this._meshYaw.quaternion.copy(Ua),this._meshPitch.position.copy(Br),this._meshPitch.quaternion.copy(Ua),this._meshPitch.quaternion.multiply(rp.setFromAxisAngle(Tx,e)),this._meshPitch.quaternion.multiply(wx);let{target:n,autoUpdate:i}=this.vrmLookAt;n!=null&&i&&(n.getWorldPosition(op).sub(Br),this._lineTarget.geometry.tail.copy(op),this._lineTarget.geometry.update(),this._lineTarget.position.copy(Br)),super.updateMatrixWorld(s)}},Rx=new x,Px=new x;function _d(s,e){return s.matrixWorld.decompose(Rx,e,Px),e}function ka(s){return[Math.atan2(-s.z,s.x),Math.atan2(s.y,Math.sqrt(s.x*s.x+s.z*s.z))]}function lp(s){let e=Math.round(s/2/Math.PI);return s-2*Math.PI*e}var cp=new x(0,0,1),Cx=new x,Lx=new x,Ix=new x,Dx=new oe,rd=new oe,hp=new oe,Ux=new oe,od=new yt,Fp=class Bp{constructor(e,t){this.offsetFromHeadBone=new x,this.autoUpdate=!0,this.faceFront=new x(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new oe)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new yt)}getEuler(e){return e.set(Me.DEG2RAD*this._pitch,Me.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new Bp(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){let t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){let t=this.humanoid.getRawBoneNode("head");return _d(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(cp)<.01)return e.copy(this._restHeadWorldQuaternion).invert();let[t,n]=ka(this.faceFront);return od.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(od).premultiply(Ux.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(rd),this.getFaceFrontQuaternion(hp),e.copy(cp).applyQuaternion(rd).applyQuaternion(hp).applyEuler(this.getEuler(od))}lookAt(e){let t=Dx.copy(this._restHeadWorldQuaternion).multiply(Np(this.getLookAtWorldQuaternion(rd))),n=this.getLookAtWorldPosition(Lx),i=Ix.copy(e).sub(n).applyQuaternion(t).normalize(),[r,o]=ka(this.faceFront),[a,l]=ka(i),c=lp(a-r),h=lp(o-l);this._yaw=Me.RAD2DEG*c,this._pitch=Me.RAD2DEG*h,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(Cx)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Fp.EULER_ORDER="YXZ";var Nx=Fp,Ox=new x(0,0,1),On=new oe,Ws=new oe,vn=new yt(0,0,0,"YXZ"),Fa=class{constructor(s,e,t,n,i){this.humanoid=s,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=i,this.faceFront=new x(0,0,1),this._restQuatLeftEye=new oe,this._restQuatRightEye=new oe,this._restLeftEyeParentWorldQuat=new oe,this._restRightEyeParentWorldQuat=new oe;let r=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");r&&(this._restQuatLeftEye.copy(r.quaternion),_d(r.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),_d(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(s,e){let t=this.humanoid.getRawBoneNode("leftEye"),n=this.humanoid.getRawBoneNode("rightEye"),i=this.humanoid.getNormalizedBoneNode("leftEye"),r=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?vn.x=-Me.DEG2RAD*this.rangeMapVerticalDown.map(-e):vn.x=Me.DEG2RAD*this.rangeMapVerticalUp.map(e),s<0?vn.y=-Me.DEG2RAD*this.rangeMapHorizontalInner.map(-s):vn.y=Me.DEG2RAD*this.rangeMapHorizontalOuter.map(s),On.setFromEuler(vn),this._getWorldFaceFrontQuat(Ws),i.quaternion.copy(Ws).multiply(On).multiply(Ws.invert()),On.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(i.quaternion).multiply(On).premultiply(On.invert()).multiply(this._restQuatLeftEye)),n&&(e<0?vn.x=-Me.DEG2RAD*this.rangeMapVerticalDown.map(-e):vn.x=Me.DEG2RAD*this.rangeMapVerticalUp.map(e),s<0?vn.y=-Me.DEG2RAD*this.rangeMapHorizontalOuter.map(-s):vn.y=Me.DEG2RAD*this.rangeMapHorizontalInner.map(s),On.setFromEuler(vn),this._getWorldFaceFrontQuat(Ws),r.quaternion.copy(Ws).multiply(On).multiply(Ws.invert()),On.copy(this._restRightEyeParentWorldQuat),n.quaternion.copy(r.quaternion).multiply(On).premultiply(On.invert()).multiply(this._restQuatRightEye))}lookAt(s){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=Me.RAD2DEG*s.y,t=Me.RAD2DEG*s.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(s){if(this.faceFront.distanceToSquared(Ox)<.01)return s.identity();let[e,t]=ka(this.faceFront);return vn.set(0,.5*Math.PI+e,t,"YZX"),s.setFromEuler(vn)}};Fa.type="bone";var bd=class{constructor(s,e,t,n,i){this.expressions=s,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=n,this.rangeMapVerticalUp=i}applyYawPitch(s,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),s<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-s))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(s)))}lookAt(s){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let e=Me.RAD2DEG*s.y,t=Me.RAD2DEG*s.x;this.applyYawPitch(e,t)}};bd.type="expression";var dp=class{constructor(s,e){this.inputMaxValue=s,this.outputScale=e}map(s){return this.outputScale*Ap(s/this.inputMaxValue)}},kx=new Set(["1.0","1.0-beta"]),Na=.01,Fx=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(s,e){this.parser=s,this.helperRoot=e?.helperRoot}afterRoot(s){return nt(this,null,function*(){let e=s.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");let t=s.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");s.userData.vrmLookAt=yield this._import(s,e,t)}})}_import(s,e,t){return nt(this,null,function*(){if(e==null||t==null)return null;let n=yield this._v1Import(s,e,t);if(n)return n;let i=yield this._v0Import(s,e,t);return i||null})}_v1Import(s,e,t){return nt(this,null,function*(){var n,i,r;let o=this.parser.json;if(!(((n=o.extensionsUsed)==null?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;let l=(i=o.extensions)==null?void 0:i.VRMC_vrm;if(!l)return null;let c=l.specVersion;if(!kx.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;let h=l.lookAt;if(!h)return null;let d=h.type==="expression"?1:10,u=this._v1ImportRangeMap(h.rangeMapHorizontalInner,d),f=this._v1ImportRangeMap(h.rangeMapHorizontalOuter,d),g=this._v1ImportRangeMap(h.rangeMapVerticalDown,d),_=this._v1ImportRangeMap(h.rangeMapVerticalUp,d),p;h.type==="expression"?p=new bd(t,u,f,g,_):p=new Fa(e,u,f,g,_);let m=this._importLookAt(e,p);return m.offsetFromHeadBone.fromArray((r=h.offsetFromHeadBone)!=null?r:[0,.06,0]),m})}_v1ImportRangeMap(s,e){var t,n;let i=(t=s?.inputMaxValue)!=null?t:90,r=(n=s?.outputScale)!=null?n:e;return i<Na&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),i=Na),new dp(i,r)}_v0Import(s,e,t){return nt(this,null,function*(){var n,i,r,o;let l=(n=this.parser.json.extensions)==null?void 0:n.VRM;if(!l)return null;let c=l.firstPerson;if(!c)return null;let h=c.lookAtTypeName==="BlendShape"?1:10,d=this._v0ImportDegreeMap(c.lookAtHorizontalInner,h),u=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,h),f=this._v0ImportDegreeMap(c.lookAtVerticalDown,h),g=this._v0ImportDegreeMap(c.lookAtVerticalUp,h),_;c.lookAtTypeName==="BlendShape"?_=new bd(t,d,u,f,g):_=new Fa(e,d,u,f,g);let p=this._importLookAt(e,_);return c.firstPersonBoneOffset?p.offsetFromHeadBone.set((i=c.firstPersonBoneOffset.x)!=null?i:0,(r=c.firstPersonBoneOffset.y)!=null?r:.06,-((o=c.firstPersonBoneOffset.z)!=null?o:0)):p.offsetFromHeadBone.set(0,.06,0),p.faceFront.set(0,0,-1),_ instanceof Fa&&_.faceFront.set(0,0,-1),p})}_v0ImportDegreeMap(s,e){var t,n;let i=s?.curve;JSON.stringify(i)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let r=(t=s?.xRange)!=null?t:90,o=(n=s?.yRange)!=null?n:e;return r<Na&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),r=Na),new dp(r,o)}_importLookAt(s,e){let t=new Nx(s,e);if(this.helperRoot){let n=new Ax(t);this.helperRoot.add(n),n.renderOrder=this.helperRoot.renderOrder}return t}};function Bx(s,e){return typeof s!="string"||s===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(s)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(s)||/^data:.*,.*$/i.test(s)||/^blob:.*$/i.test(s)?s:e+s)}var Hx=new Set(["1.0","1.0-beta"]),Vx=class{get name(){return"VRMMetaLoaderPlugin"}constructor(s,e){var t,n,i;this.parser=s,this.needThumbnailImage=(t=e?.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(n=e?.acceptLicenseUrls)!=null?n:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(i=e?.acceptV0Meta)!=null?i:!0}afterRoot(s){return nt(this,null,function*(){s.userData.vrmMeta=yield this._import(s)})}_import(s){return nt(this,null,function*(){let e=yield this._v1Import(s);if(e!=null)return e;let t=yield this._v0Import(s);return t??null})}_v1Import(s){return nt(this,null,function*(){var e,t,n;let i=this.parser.json;if(!(((e=i.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;let o=(t=i.extensions)==null?void 0:t.VRMC_vrm;if(o==null)return null;let a=o.specVersion;if(!Hx.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let l=o.meta;if(!l)return null;let c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let d;return this.needThumbnailImage&&l.thumbnailImage!=null&&(d=(n=yield this._extractGLTFImage(l.thumbnailImage))!=null?n:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:d,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(s){return nt(this,null,function*(){var e;let n=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!n)return null;let i=n.meta;if(!i)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let r;return this.needThumbnailImage&&i.texture!=null&&i.texture!==-1&&(r=yield this.parser.getDependency("texture",i.texture)),{metaVersion:"0",allowedUserName:i.allowedUserName,author:i.author,commercialUssageName:i.commercialUssageName,contactInformation:i.contactInformation,licenseName:i.licenseName,otherLicenseUrl:i.otherLicenseUrl,otherPermissionUrl:i.otherPermissionUrl,reference:i.reference,sexualUssageName:i.sexualUssageName,texture:r??void 0,title:i.title,version:i.version,violentUssageName:i.violentUssageName}})}_extractGLTFImage(s){return nt(this,null,function*(){var e;let n=(e=this.parser.json.images)==null?void 0:e[s];if(n==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${s}] of glTF as a thumbnail but the image doesn't exist`),null;let i=n.uri;if(n.bufferView!=null){let o=yield this.parser.getDependency("bufferView",n.bufferView),a=new Blob([o],{type:n.mimeType});i=URL.createObjectURL(a)}return i==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${s}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new Tr().loadAsync(Bx(i,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},zx=class{constructor(s){this.scene=s.scene,this.meta=s.meta,this.humanoid=s.humanoid,this.expressionManager=s.expressionManager,this.firstPerson=s.firstPerson,this.lookAt=s.lookAt}update(s){this.humanoid.update(),this.lookAt&&this.lookAt.update(s),this.expressionManager&&this.expressionManager.update()}};var Gx=class extends zx{constructor(s){super(s),this.materials=s.materials,this.springBoneManager=s.springBoneManager,this.nodeConstraintManager=s.nodeConstraintManager}update(s){super.update(s),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(s),this.materials&&this.materials.forEach(e=>{e.update&&e.update(s)})}},Wx=Object.defineProperty,up=Object.getOwnPropertySymbols,Xx=Object.prototype.hasOwnProperty,qx=Object.prototype.propertyIsEnumerable,fp=(s,e,t)=>e in s?Wx(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,pp=(s,e)=>{for(var t in e||(e={}))Xx.call(e,t)&&fp(s,t,e[t]);if(up)for(var t of up(e))qx.call(e,t)&&fp(s,t,e[t]);return s},ss=(s,e,t)=>new Promise((n,i)=>{var r=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(s,e)).next())}),jx={"":3e3,srgb:3001};function Yx(s,e){parseInt("169",10)>=152?s.colorSpace=e:s.encoding=jx[e]}var $x=class{get pending(){return Promise.all(this._pendings)}constructor(s,e){this._parser=s,this._materialParams=e,this._pendings=[]}assignPrimitive(s,e){e!=null&&(this._materialParams[s]=e)}assignColor(s,e,t){if(e!=null){let n=new ae().fromArray(e);t&&n.convertSRGBToLinear(),this._materialParams[s]=n}}assignTexture(s,e,t){return ss(this,null,function*(){let n=ss(this,null,function*(){if(e!=null){let i=yield this._parser.assignTexture(this._materialParams,s,e);if(i==null){console.warn("GLTFMToonMaterialParamsAssignHelper: Failed to load texture. The rendering result may be wrong");return}t&&Yx(i,"srgb")}});return this._pendings.push(n),n})}assignTextureByIndex(s,e,t){return ss(this,null,function*(){return this.assignTexture(s,e!=null?{index:e}:void 0,t)})}},Kx=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,Zx=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

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

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

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

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

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

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS, r144+ uses NUM_SPOT_LIGHT_COORDS
    #if THREE_VRM_THREE_REVISION >= 144
      #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_COORDS > 0
      SpotLightShadow spotLightShadow;
      #endif
    #elif defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS and vSpotShadowCoord, r144+ uses NUM_SPOT_LIGHT_COORDS and vSpotLightCoord
      // COMPAT: pre-r166 does not have shadowIntensity, r166+ has shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif THREE_VRM_THREE_REVISION >= 144
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

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

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, rimLightingMixFactor );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,Qx={None:"none",Normal:"normal",LitShadeRate:"litShadeRate",UV:"uv"},mp={None:"none",WorldCoordinates:"worldCoordinates",ScreenCoordinates:"screenCoordinates"},Jx={3e3:"",3001:"srgb"};function ad(s){return parseInt("169",10)>=152?s.colorSpace:Jx[s.encoding]}var eM=class extends tn{constructor(s={}){var e;super({vertexShader:Kx,fragmentShader:Zx}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=va,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=Qx.None,this._outlineWidthMode=mp.None,this._isOutline=!1,s.transparentWithZWrite&&(s.depthWrite=!0),delete s.transparentWithZWrite,s.fog=!0,s.lights=!0,s.clipping=!0,this.uniforms=ph.merge([re.common,re.normalmap,re.emissivemap,re.fog,re.lights,{litFactor:{value:new ae(1,1,1)},mapUvTransform:{value:new Te},colorAlpha:{value:1},normalMapUvTransform:{value:new Te},shadeColorFactor:{value:new ae(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new Te},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new Te},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new ae(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new Te},parametricRimColorFactor:{value:new ae(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new Te},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new ae(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new Te},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new Te},outlineWidthFactor:{value:0},outlineColorFactor:{value:new ae(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new Te},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=s.uniforms)!=null?e:{}]),this.setValues(s),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureColorSpace:${ad(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${ad(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${ad(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{let n=parseInt("169",10),i=Object.entries(pp(pp({},this._generateDefines()),this.defines)).filter(([r,o])=>!!o).map(([r,o])=>`#define ${r} ${o}`).join(`
`)+`
`;t.vertexShader=i+t.vertexShader,t.fragmentShader=i+t.fragmentShader,n<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(s){this.uniforms.litFactor.value=s}get map(){return this.uniforms.map.value}set map(s){this.uniforms.map.value=s}get normalMap(){return this.uniforms.normalMap.value}set normalMap(s){this.uniforms.normalMap.value=s}get normalScale(){return this.uniforms.normalScale.value}set normalScale(s){this.uniforms.normalScale.value=s}get emissive(){return this.uniforms.emissive.value}set emissive(s){this.uniforms.emissive.value=s}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(s){this.uniforms.emissiveIntensity.value=s}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(s){this.uniforms.emissiveMap.value=s}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(s){this.uniforms.shadeColorFactor.value=s}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(s){this.uniforms.shadeMultiplyTexture.value=s}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(s){this.uniforms.shadingShiftFactor.value=s}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(s){this.uniforms.shadingShiftTexture.value=s}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(s){this.uniforms.shadingShiftTextureScale.value=s}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(s){this.uniforms.shadingToonyFactor.value=s}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(s){this.uniforms.giEqualizationFactor.value=s}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(s){this.uniforms.matcapFactor.value=s}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(s){this.uniforms.matcapTexture.value=s}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(s){this.uniforms.parametricRimColorFactor.value=s}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(s){this.uniforms.rimMultiplyTexture.value=s}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(s){this.uniforms.rimLightingMixFactor.value=s}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(s){this.uniforms.parametricRimFresnelPowerFactor.value=s}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(s){this.uniforms.parametricRimLiftFactor.value=s}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(s){this.uniforms.outlineWidthMultiplyTexture.value=s}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(s){this.uniforms.outlineWidthFactor.value=s}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(s){this.uniforms.outlineColorFactor.value=s}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(s){this.uniforms.outlineLightingMixFactor.value=s}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(s){this.uniforms.uvAnimationMaskTexture.value=s}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(s){this.uniforms.uvAnimationScrollXOffset.value=s}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(s){this.uniforms.uvAnimationScrollYOffset.value=s}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(s){this.uniforms.uvAnimationRotationPhase.value=s}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(s){this._ignoreVertexColor=s,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(s){this._v0CompatShade=s,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(s){this._debugMode=s,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(s){this._outlineWidthMode=s,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(s){this._isOutline=s,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(s){this._uploadUniformsWorkaround(),this._updateUVAnimation(s)}copy(s){return super.copy(s),this.map=s.map,this.normalMap=s.normalMap,this.emissiveMap=s.emissiveMap,this.shadeMultiplyTexture=s.shadeMultiplyTexture,this.shadingShiftTexture=s.shadingShiftTexture,this.matcapTexture=s.matcapTexture,this.rimMultiplyTexture=s.rimMultiplyTexture,this.outlineWidthMultiplyTexture=s.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=s.uvAnimationMaskTexture,this.normalMapType=s.normalMapType,this.uvAnimationScrollXSpeedFactor=s.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=s.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=s.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=s.ignoreVertexColor,this.v0CompatShade=s.v0CompatShade,this.debugMode=s.debugMode,this.outlineWidthMode=s.outlineWidthMode,this.isOutline=s.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(s){this.uniforms.uvAnimationScrollXOffset.value+=s*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=s*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=s*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){let s=parseInt("169",10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:s,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===mp.ScreenCoordinates}}_updateTextureMatrix(s,e){s.value&&(s.value.matrixAutoUpdate&&s.value.updateMatrix(),e.value.copy(s.value.matrix))}},tM=new Set(["1.0","1.0-beta"]),Hp=class Ba{get name(){return Ba.EXTENSION_NAME}constructor(e,t={}){var n,i,r,o;this.parser=e,this.materialType=(n=t.materialType)!=null?n:eM,this.renderOrderOffset=(i=t.renderOrderOffset)!=null?i:0,this.v0CompatShade=(r=t.v0CompatShade)!=null?r:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return ss(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return ss(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){let n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){return ss(this,null,function*(){var t;let n=this.parser,r=(t=n.json.meshes)==null?void 0:t[e];if(r==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);let o=r.primitives,a=yield n.loadMesh(e);if(o.length===1){let l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{let l=a;for(let c=0;c<o.length;c++){let h=l.children[c],d=o[c].material;d!=null&&this._setupPrimitive(h,d)}}return a})}_removeUnlitExtensionIfMToonExists(){let n=this.parser.json.materials;n?.map((i,r)=>{var o;this._getMToonExtension(r)&&((o=i.extensions)!=null&&o.KHR_materials_unlit)&&delete i.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;let o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(n=o.extensions)==null?void 0:n[Ba.EXTENSION_NAME];if(a==null)return;let l=a.specVersion;if(!tM.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${Ba.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){return ss(this,null,function*(){var n;delete t.metalness,delete t.roughness;let i=new $x(this.parser,t);i.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),i.assignColor("shadeColorFactor",e.shadeColorFactor),i.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),i.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),i.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),i.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)==null?void 0:n.scale),i.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),i.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),i.assignColor("matcapFactor",e.matcapFactor),i.assignTexture("matcapTexture",e.matcapTexture,!0),i.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),i.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),i.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),i.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),i.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),i.assignPrimitive("outlineWidthMode",e.outlineWidthMode),i.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),i.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),i.assignColor("outlineColorFactor",e.outlineColorFactor),i.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),i.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),i.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),i.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),i.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),i.assignPrimitive("v0CompatShade",this.v0CompatShade),i.assignPrimitive("debugMode",this.debugMode),yield i.pending})}_setupPrimitive(e,t){let n=this._getMToonExtension(t);if(n){let i=this._parseRenderOrder(n);e.renderOrder=i+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){let t=e.material;if(!(t instanceof Jt)||!this._shouldGenerateOutline(t))return;e.material=[t];let n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=$t,e.material.push(n);let i=e.geometry,r=i.index?i.index.count:i.attributes.position.count/3;i.addGroup(0,r,0),i.addGroup(0,r,1)}_addToMaterialSet(e){let t=e.material,n=new Set;Array.isArray(t)?t.forEach(i=>n.add(i)):n.add(t);for(let i of n)this._mToonMaterialSet.add(i)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};Hp.EXTENSION_NAME="VRMC_materials_mtoon";var nM=Hp,iM=(s,e,t)=>new Promise((n,i)=>{var r=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(s,e)).next())}),Vp=class vd{get name(){return vd.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return iM(this,null,function*(){let n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");let i=n.emissiveMultiplier;t.emissiveIntensity=i})}_getHDREmissiveMultiplierExtension(e){var t,n;let o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(n=o.extensions)==null?void 0:n[vd.EXTENSION_NAME];if(a!=null)return a}};Vp.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var sM=Vp,rM=Object.defineProperty,oM=Object.defineProperties,aM=Object.getOwnPropertyDescriptors,gp=Object.getOwnPropertySymbols,lM=Object.prototype.hasOwnProperty,cM=Object.prototype.propertyIsEnumerable,_p=(s,e,t)=>e in s?rM(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,kn=(s,e)=>{for(var t in e||(e={}))lM.call(e,t)&&_p(s,t,e[t]);if(gp)for(var t of gp(e))cM.call(e,t)&&_p(s,t,e[t]);return s},bp=(s,e)=>oM(s,aM(e)),hM=(s,e,t)=>new Promise((n,i)=>{var r=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(s,e)).next())});function Xs(s){return Math.pow(s,2.2)}var dM=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(s){var e;this.parser=s,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;let t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return hM(this,null,function*(){var s;let e=this.parser.json,t=(s=e.extensions)==null?void 0:s.VRM,n=t?.materialProperties;n&&(this._populateRenderQueueMap(n),n.forEach((i,r)=>{var o,a;let l=(o=e.materials)==null?void 0:o[r];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${r}] of glTF but the material doesn't exist`);return}if(i.shader==="VRM/MToon"){let c=this._parseV0MToonProperties(i,l);e.materials[r]=c}else if((a=i.shader)!=null&&a.startsWith("VRM/Unlit")){let c=this._parseV0UnlitProperties(i,l);e.materials[r]=c}else i.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${i.shader}`)}))})}_parseV0MToonProperties(s,e){var t,n,i,r,o,a,l,c,h,d,u,f,g,_,p,m,b,v,M,R,T,A,C,O,y,S,N,k,V,X,B,Y,G,ie,se,pe,He,Qe,q,ee,ve,fe,Oe,Re,qe,it,je,L,Gt,Ge,$e,Pe,ht,Ie,P;let E=(n=(t=s.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?n:!1,$=((i=s.floatProperties)==null?void 0:i._ZWrite)===1&&E,Z=this._v0ParseRenderQueue(s),j=(o=(r=s.keywordMap)==null?void 0:r._ALPHATEST_ON)!=null?o:!1,Ee=E?"BLEND":j?"MASK":"OPAQUE",le=j?(l=(a=s.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,Je=((h=(c=s.floatProperties)==null?void 0:c._CullMode)!=null?h:2)===0,Q=this._portTextureTransform(s),ge=((u=(d=s.vectorProperties)==null?void 0:d._Color)!=null?u:[1,1,1,1]).map((ne,de)=>de===3?ne:Xs(ne)),Ce=(f=s.textureProperties)==null?void 0:f._MainTex,De=Ce!=null?{index:Ce,extensions:kn({},Q)}:void 0,_e=(_=(g=s.floatProperties)==null?void 0:g._BumpScale)!=null?_:1,We=(p=s.textureProperties)==null?void 0:p._BumpMap,ke=We!=null?{index:We,scale:_e,extensions:kn({},Q)}:void 0,dt=((b=(m=s.vectorProperties)==null?void 0:m._EmissionColor)!=null?b:[0,0,0,1]).map(Xs),I=(v=s.textureProperties)==null?void 0:v._EmissionMap,ue=I!=null?{index:I,extensions:kn({},Q)}:void 0,W=((R=(M=s.vectorProperties)==null?void 0:M._ShadeColor)!=null?R:[.97,.81,.86,1]).map(Xs),K=(T=s.textureProperties)==null?void 0:T._ShadeTexture,he=K!=null?{index:K,extensions:kn({},Q)}:void 0,ce=(C=(A=s.floatProperties)==null?void 0:A._ShadeShift)!=null?C:0,ze=(y=(O=s.floatProperties)==null?void 0:O._ShadeToony)!=null?y:.9;ze=Me.lerp(ze,1,.5+.5*ce),ce=-ce-(1-ze);let vt=(N=(S=s.floatProperties)==null?void 0:S._IndirectLightIntensity)!=null?N:.1,Wt=vt?1-vt:void 0,Ke=(k=s.textureProperties)==null?void 0:k._SphereAdd,Xt=Ke!=null?[1,1,1]:void 0,yn=Ke!=null?{index:Ke}:void 0,Yr=(X=(V=s.floatProperties)==null?void 0:V._RimLightingMix)!=null?X:0,er=(B=s.textureProperties)==null?void 0:B._RimTexture,zn=er!=null?{index:er,extensions:kn({},Q)}:void 0,tr=((G=(Y=s.vectorProperties)==null?void 0:Y._RimColor)!=null?G:[0,0,0,1]).map(Xs),$r=(se=(ie=s.floatProperties)==null?void 0:ie._RimFresnelPower)!=null?se:1,Kr=(He=(pe=s.floatProperties)==null?void 0:pe._RimLift)!=null?He:0,rs=["none","worldCoordinates","screenCoordinates"][(q=(Qe=s.floatProperties)==null?void 0:Qe._OutlineWidthMode)!=null?q:0],os=(ve=(ee=s.floatProperties)==null?void 0:ee._OutlineWidth)!=null?ve:0;os=.01*os;let Di=(fe=s.textureProperties)==null?void 0:fe._OutlineWidthTexture,Zr=Di!=null?{index:Di,extensions:kn({},Q)}:void 0,Qr=((Re=(Oe=s.vectorProperties)==null?void 0:Oe._OutlineColor)!=null?Re:[0,0,0]).map(Xs),$a=((it=(qe=s.floatProperties)==null?void 0:qe._OutlineColorMode)!=null?it:0)===1?(L=(je=s.floatProperties)==null?void 0:je._OutlineLightingMix)!=null?L:1:0,Jr=(Gt=s.textureProperties)==null?void 0:Gt._UvAnimMaskTexture,w=Jr!=null?{index:Jr,extensions:kn({},Q)}:void 0,D=($e=(Ge=s.floatProperties)==null?void 0:Ge._UvAnimScrollX)!=null?$e:0,F=(ht=(Pe=s.floatProperties)==null?void 0:Pe._UvAnimScrollY)!=null?ht:0;F!=null&&(F=-F);let z=(P=(Ie=s.floatProperties)==null?void 0:Ie._UvAnimRotation)!=null?P:0,U={specVersion:"1.0",transparentWithZWrite:$,renderQueueOffsetNumber:Z,shadeColorFactor:W,shadeMultiplyTexture:he,shadingShiftFactor:ce,shadingToonyFactor:ze,giEqualizationFactor:Wt,matcapFactor:Xt,matcapTexture:yn,rimLightingMixFactor:Yr,rimMultiplyTexture:zn,parametricRimColorFactor:tr,parametricRimFresnelPowerFactor:$r,parametricRimLiftFactor:Kr,outlineWidthMode:rs,outlineWidthFactor:os,outlineWidthMultiplyTexture:Zr,outlineColorFactor:Qr,outlineLightingMixFactor:$a,uvAnimationMaskTexture:w,uvAnimationScrollXSpeedFactor:D,uvAnimationScrollYSpeedFactor:F,uvAnimationRotationSpeedFactor:z};return bp(kn({},e),{pbrMetallicRoughness:{baseColorFactor:ge,baseColorTexture:De},normalTexture:ke,emissiveTexture:ue,emissiveFactor:dt,alphaMode:Ee,alphaCutoff:le,doubleSided:Je,extensions:{VRMC_materials_mtoon:U}})}_parseV0UnlitProperties(s,e){var t,n,i,r,o;let a=s.shader==="VRM/UnlitTransparentZWrite",l=s.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(s),h=s.shader==="VRM/UnlitCutout",d=l?"BLEND":h?"MASK":"OPAQUE",u=h?(n=(t=s.floatProperties)==null?void 0:t._Cutoff)!=null?n:.5:void 0,f=this._portTextureTransform(s),g=((r=(i=s.vectorProperties)==null?void 0:i._Color)!=null?r:[1,1,1,1]).map(Xs),_=(o=s.textureProperties)==null?void 0:o._MainTex,p=_!=null?{index:_,extensions:kn({},f)}:void 0,m={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:g,shadeMultiplyTexture:p};return bp(kn({},e),{pbrMetallicRoughness:{baseColorFactor:g,baseColorTexture:p},alphaMode:d,alphaCutoff:u,extensions:{VRMC_materials_mtoon:m}})}_portTextureTransform(s){var e,t,n,i,r;let o=(e=s.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};let a=[(t=o?.[0])!=null?t:0,(n=o?.[1])!=null?n:0],l=[(i=o?.[2])!=null?i:1,(r=o?.[3])!=null?r:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(s){var e,t;let n=s.shader==="VRM/UnlitTransparentZWrite",i=((e=s.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||s.shader==="VRM/UnlitTransparent"||n,r=((t=s.floatProperties)==null?void 0:t._ZWrite)===1||n,o=0;if(i){let a=s.renderQueue;a!=null&&(r?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(s){let e=new Set,t=new Set;s.forEach(n=>{var i,r;let o=n.shader==="VRM/UnlitTransparentZWrite",a=((i=n.keywordMap)==null?void 0:i._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||o,l=((r=n.floatProperties)==null?void 0:r._ZWrite)===1||o;if(a){let c=n.renderQueue;c!=null&&(l?t.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((n,i)=>{let r=Math.min(Math.max(i-e.size+1,-9),0);this._renderQueueMapTransparent.set(n,r)}),Array.from(t).sort().forEach((n,i)=>{let r=Math.min(Math.max(i,0),9);this._renderQueueMapTransparentZWrite.set(n,r)})}},vp=(s,e,t)=>new Promise((n,i)=>{var r=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(s,e)).next())}),Ii=new x,ld=class extends et{constructor(s){super(),this._attrPosition=new Le(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(_f);let e=new Fe;e.setAttribute("position",this._attrPosition);let t=new kt({color:16711935,depthTest:!1,depthWrite:!1});this._line=new zt(e,t),this.add(this._line),this.constraint=s}updateMatrixWorld(s){Ii.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,Ii.x,Ii.y,Ii.z),this.constraint.source&&Ii.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,Ii.x,Ii.y,Ii.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(s)}};function yp(s,e){return e.set(s.elements[12],s.elements[13],s.elements[14])}var uM=new x,fM=new x;function pM(s,e){return s.decompose(uM,e,fM),e}function za(s){return s.invert?s.invert():s.inverse(),s}var Md=class{constructor(s,e){this.destination=s,this.source=e,this.weight=1}},mM=new x,gM=new x,_M=new x,bM=new oe,vM=new oe,yM=new oe,xM=class extends Md{get aimAxis(){return this._aimAxis}set aimAxis(s){this._aimAxis=s,this._v3AimAxis.set(s==="PositiveX"?1:s==="NegativeX"?-1:0,s==="PositiveY"?1:s==="NegativeY"?-1:0,s==="PositiveZ"?1:s==="NegativeZ"?-1:0)}get dependencies(){let s=new Set([this.source]);return this.destination.parent&&s.add(this.destination.parent),s}constructor(s,e){super(s,e),this._aimAxis="PositiveX",this._v3AimAxis=new x(1,0,0),this._dstRestQuat=new oe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);let s=bM.identity(),e=vM.identity();this.destination.parent&&(pM(this.destination.parent.matrixWorld,s),za(e.copy(s)));let t=mM.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(s),n=yp(this.source.matrixWorld,gM).sub(yp(this.destination.matrixWorld,_M)).normalize(),i=yM.setFromUnitVectors(t,n).premultiply(e).multiply(s).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}};function MM(s,e){let t=[s],n=s.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(i=>{e(i)})}var EM=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(s){this._constraints.add(s);let e=this._objectConstraintsMap.get(s.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(s.destination,e)),e.add(s)}deleteConstraint(s){this._constraints.delete(s),this._objectConstraintsMap.get(s.destination).delete(s)}setInitState(){let s=new Set,e=new Set;for(let t of this._constraints)this._processConstraint(t,s,e,n=>n.setInitState())}update(){let s=new Set,e=new Set;for(let t of this._constraints)this._processConstraint(t,s,e,n=>n.update())}_processConstraint(s,e,t,n){if(t.has(s))return;if(e.has(s))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(s);let i=s.dependencies;for(let r of i)MM(r,o=>{let a=this._objectConstraintsMap.get(o);if(a)for(let l of a)this._processConstraint(l,e,t,n)});n(s),t.add(s)}},SM=new oe,wM=new oe,TM=class extends Md{get dependencies(){return new Set([this.source])}constructor(s,e){super(s,e),this._dstRestQuat=new oe,this._invSrcRestQuat=new oe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),za(this._invSrcRestQuat.copy(this.source.quaternion))}update(){let s=SM.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=wM.copy(this._dstRestQuat).multiply(s);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},AM=new x,RM=new oe,PM=new oe,CM=class extends Md{get rollAxis(){return this._rollAxis}set rollAxis(s){this._rollAxis=s,this._v3RollAxis.set(s==="X"?1:0,s==="Y"?1:0,s==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(s,e){super(s,e),this._rollAxis="X",this._v3RollAxis=new x(1,0,0),this._dstRestQuat=new oe,this._invDstRestQuat=new oe,this._invSrcRestQuatMulDstRestQuat=new oe}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),za(this._invDstRestQuat.copy(this._dstRestQuat)),za(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){let s=RM.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=AM.copy(this._v3RollAxis).applyQuaternion(s),n=PM.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(s);this.destination.quaternion.copy(this._dstRestQuat).slerp(n,this.weight)}},LM=new Set(["1.0","1.0-beta"]),zp=class Gr{get name(){return Gr.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}afterRoot(e){return vp(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return vp(this,null,function*(){var t;let n=this.parser.json;if(!(((t=n.extensionsUsed)==null?void 0:t.indexOf(Gr.EXTENSION_NAME))!==-1))return null;let r=new EM,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;let h=n.nodes[l],d=(c=h?.extensions)==null?void 0:c[Gr.EXTENSION_NAME];if(d==null)return;let u=d.specVersion;if(!LM.has(u)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${Gr.EXTENSION_NAME} specVersion "${u}"`);return}let f=d.constraint;if(f.roll!=null){let g=this._importRollConstraint(a,o,f.roll);r.addConstraint(g)}else if(f.aim!=null){let g=this._importAimConstraint(a,o,f.aim);r.addConstraint(g)}else if(f.rotation!=null){let g=this._importRotationConstraint(a,o,f.rotation);r.addConstraint(g)}}),e.scene.updateMatrixWorld(),r.setInitState(),r})}_importRollConstraint(e,t,n){let{source:i,rollAxis:r,weight:o}=n,a=t[i],l=new CM(e,a);if(r!=null&&(l.rollAxis=r),o!=null&&(l.weight=o),this.helperRoot){let c=new ld(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,n){let{source:i,aimAxis:r,weight:o}=n,a=t[i],l=new xM(e,a);if(r!=null&&(l.aimAxis=r),o!=null&&(l.weight=o),this.helperRoot){let c=new ld(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,n){let{source:i,weight:r}=n,o=t[i],a=new TM(e,o);if(r!=null&&(a.weight=r),this.helperRoot){let l=new ld(a);this.helperRoot.add(l)}return a}};zp.EXTENSION_NAME="VRMC_node_constraint";var IM=zp,Oa=(s,e,t)=>new Promise((n,i)=>{var r=l=>{try{a(t.next(l))}catch(c){i(c)}},o=l=>{try{a(t.throw(l))}catch(c){i(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);a((t=t.apply(s,e)).next())}),Ed=class{},cd=new x,is=new x,Gp=class extends Ed{get type(){return"capsule"}constructor(s){var e,t,n,i;super(),this.offset=(e=s?.offset)!=null?e:new x(0,0,0),this.tail=(t=s?.tail)!=null?t:new x(0,0,0),this.radius=(n=s?.radius)!=null?n:0,this.inside=(i=s?.inside)!=null?i:!1}calculateCollision(s,e,t,n){cd.setFromMatrixPosition(s),is.subVectors(this.tail,this.offset).applyMatrix4(s),is.sub(cd);let i=is.lengthSq();n.copy(e).sub(cd);let r=is.dot(n);r<=0||(i<=r||is.multiplyScalar(r/i),n.sub(is));let o=n.length(),a=this.inside?this.radius-t-o:o-t-this.radius;return a<0&&(n.multiplyScalar(1/o),this.inside&&n.negate()),a}},hd=new x,xp=new Te,Wp=class extends Ed{get type(){return"plane"}constructor(s){var e,t;super(),this.offset=(e=s?.offset)!=null?e:new x(0,0,0),this.normal=(t=s?.normal)!=null?t:new x(0,0,1)}calculateCollision(s,e,t,n){n.setFromMatrixPosition(s),n.negate().add(e),xp.getNormalMatrix(s),hd.copy(this.normal).applyNormalMatrix(xp).normalize();let i=n.dot(hd)-t;return n.copy(hd),i}},DM=new x,Xp=class extends Ed{get type(){return"sphere"}constructor(s){var e,t,n;super(),this.offset=(e=s?.offset)!=null?e:new x(0,0,0),this.radius=(t=s?.radius)!=null?t:0,this.inside=(n=s?.inside)!=null?n:!1}calculateCollision(s,e,t,n){n.subVectors(e,DM.setFromMatrixPosition(s));let i=n.length(),r=this.inside?this.radius-t-i:i-t-this.radius;return r<0&&(n.multiplyScalar(1/i),this.inside&&n.negate()),r}},Fn=new x,UM=class extends Fe{constructor(s){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new x,this._currentTail=new x,this._shape=s,this._attrPos=new Le(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Le(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,s=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),s=!0);let t=Fn.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),s=!0),s&&this._buildPosition()}_buildPosition(){Fn.copy(this._currentTail).sub(this._currentOffset);let s=Fn.length()/this._currentRadius;for(let n=0;n<=16;n++){let i=n/16*Math.PI;this._attrPos.setXYZ(n,-Math.sin(i),-Math.cos(i),0),this._attrPos.setXYZ(17+n,s+Math.sin(i),Math.cos(i),0),this._attrPos.setXYZ(34+n,-Math.sin(i),0,-Math.cos(i)),this._attrPos.setXYZ(51+n,s+Math.sin(i),0,Math.cos(i))}for(let n=0;n<32;n++){let i=n/16*Math.PI;this._attrPos.setXYZ(68+n,0,Math.sin(i),Math.cos(i)),this._attrPos.setXYZ(100+n,s,Math.sin(i),Math.cos(i))}let e=Math.atan2(Fn.y,Math.sqrt(Fn.x*Fn.x+Fn.z*Fn.z)),t=-Math.atan2(Fn.z,Fn.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<34;s++){let e=(s+1)%34;this._attrIndex.setXY(s*2,s,e),this._attrIndex.setXY(68+s*2,34+s,34+e)}for(let s=0;s<32;s++){let e=(s+1)%32;this._attrIndex.setXY(136+s*2,68+s,68+e),this._attrIndex.setXY(200+s*2,100+s,100+e)}this._attrIndex.needsUpdate=!0}},NM=class extends Fe{constructor(s){super(),this.worldScale=1,this._currentOffset=new x,this._currentNormal=new x,this._shape=s,this._attrPos=new Le(new Float32Array(18),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Le(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),s=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),s=!0),s&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},OM=class extends Fe{constructor(s){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new x,this._shape=s,this._attrPos=new Le(new Float32Array(288),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Le(new Uint16Array(192),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1,e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,s=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),s=!0),s&&this._buildPosition()}_buildPosition(){for(let s=0;s<32;s++){let e=s/16*Math.PI;this._attrPos.setXYZ(s,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+s,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+s,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<32;s++){let e=(s+1)%32;this._attrIndex.setXY(s*2,s,e),this._attrIndex.setXY(64+s*2,32+s,32+e),this._attrIndex.setXY(128+s*2,64+s,64+e)}this._attrIndex.needsUpdate=!0}},kM=new x,dd=class extends et{constructor(s){if(super(),this.matrixAutoUpdate=!1,this.collider=s,this.collider.shape instanceof Xp)this._geometry=new OM(this.collider.shape);else if(this.collider.shape instanceof Gp)this._geometry=new UM(this.collider.shape);else if(this.collider.shape instanceof Wp)this._geometry=new NM(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");let e=new kt({color:16711935,depthTest:!1,depthWrite:!1});this._line=new cn(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(s){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=kM.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(s)}},FM=class extends Fe{constructor(s){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new x,this._springBone=s,this._attrPos=new Le(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new Le(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let s=!1,e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,s=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),s=!0),s&&this._buildPosition()}_buildPosition(){for(let s=0;s<32;s++){let e=s/16*Math.PI;this._attrPos.setXYZ(s,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+s,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+s,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let s=0;s<32;s++){let e=(s+1)%32;this._attrIndex.setXY(s*2,s,e),this._attrIndex.setXY(64+s*2,32+s,32+e),this._attrIndex.setXY(128+s*2,64+s,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},BM=new x,HM=class extends et{constructor(s){super(),this.matrixAutoUpdate=!1,this.springBone=s,this._geometry=new FM(this.springBone);let e=new kt({color:16776960,depthTest:!1,depthWrite:!1});this._line=new cn(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(s){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);let e=this.matrix.elements;this._geometry.worldScale=BM.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(s)}},ud=class extends tt{constructor(s){super(),this.colliderMatrix=new be,this.shape=s}updateWorldMatrix(s,e){super.updateWorldMatrix(s,e),VM(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function VM(s,e,t){let n=e.elements;s.copy(e),t&&(s.elements[12]=n[0]*t.x+n[4]*t.y+n[8]*t.z+n[12],s.elements[13]=n[1]*t.x+n[5]*t.y+n[9]*t.z+n[13],s.elements[14]=n[2]*t.x+n[6]*t.y+n[10]*t.z+n[14])}var zM=new be;function GM(s){return s.invert?s.invert():s.getInverse(zM.copy(s)),s}var WM=class{constructor(s){this._inverseCache=new be,this._shouldUpdateInverse=!0,this.matrix=s;let e={set:(t,n,i)=>(this._shouldUpdateInverse=!0,t[n]=i,!0)};this._originalElements=s.elements,s.elements=new Proxy(s.elements,e)}get inverse(){return this._shouldUpdateInverse&&(GM(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},fd=new be,qs=new x,Hr=new x,Vr=new x,zr=new x,XM=new be,qM=class{constructor(s,e,t={},n=[]){this._currentTail=new x,this._prevTail=new x,this._boneAxis=new x,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new be,this._initialLocalRotation=new oe,this._initialLocalChildPosition=new x;var i,r,o,a,l,c;this.bone=s,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(i=t.hitRadius)!=null?i:0,stiffness:(r=t.stiffness)!=null?r:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new x(0,-1,0),dragForce:(c=t.dragForce)!=null?c:.4},this.colliderGroups=n}get dependencies(){let s=new Set,e=this.bone.parent;e&&s.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let n=0;n<this.colliderGroups[t].colliders.length;n++)s.add(this.colliderGroups[t].colliders[n]);return s}get center(){return this._center}set center(s){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=s,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new WM(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:fd}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);let s=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(s),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);let s=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(s),this._prevTail.copy(this._currentTail)}update(s){if(s<=0)return;this._calcWorldSpaceBoneLength();let e=Hr.copy(this._boneAxis).transformDirection(this._initialLocalMatrix).transformDirection(this._parentMatrixWorld);zr.copy(this._currentTail).add(qs.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(e,this.settings.stiffness*s).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*s),Vr.setFromMatrixPosition(this.bone.matrixWorld),zr.sub(Vr).normalize().multiplyScalar(this._worldSpaceBoneLength).add(Vr),this._collision(zr),this._prevTail.copy(this._currentTail),this._currentTail.copy(zr).applyMatrix4(this._getMatrixWorldToCenter());let t=XM.multiplyMatrices(this._parentMatrixWorld,this._initialLocalMatrix).invert();this.bone.quaternion.setFromUnitVectors(this._boneAxis,qs.copy(zr).applyMatrix4(t).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(s){for(let e=0;e<this.colliderGroups.length;e++)for(let t=0;t<this.colliderGroups[e].colliders.length;t++){let n=this.colliderGroups[e].colliders[t],i=n.shape.calculateCollision(n.colliderMatrix,s,this.settings.hitRadius,qs);if(i<0){s.addScaledVector(qs,-i),s.sub(Vr);let r=s.length();s.multiplyScalar(this._worldSpaceBoneLength/r).add(Vr)}}}_calcWorldSpaceBoneLength(){qs.setFromMatrixPosition(this.bone.matrixWorld),this.child?Hr.setFromMatrixPosition(this.child.matrixWorld):(Hr.copy(this._initialLocalChildPosition),Hr.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=qs.sub(Hr).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:fd}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:fd}};function jM(s,e){let t=[],n=s;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(i=>{e(i)})}function yd(s,e){s.children.forEach(t=>{e(t)||yd(t,e)})}function YM(s){var e;let t=new Map;for(let n of s){let i=n;do{let r=((e=t.get(i))!=null?e:0)+1;if(r===s.size)return i;t.set(i,r),i=i.parent}while(i!==null)}return null}var Mp=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){let s=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{s.add(t)})}),Array.from(s)}get colliders(){let s=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{s.add(t)})}),Array.from(s)}addJoint(s){this._joints.add(s);let e=this._objectSpringBonesMap.get(s.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(s.bone,e)),e.add(s),this._isSortedJointsDirty=!0}addSpringBone(s){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(s)}deleteJoint(s){this._joints.delete(s),this._objectSpringBonesMap.get(s.bone).delete(s),this._isSortedJointsDirty=!0}deleteSpringBone(s){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(s)}setInitState(){this._sortJoints();for(let s=0;s<this._sortedJoints.length;s++){let e=this._sortedJoints[s];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let s=0;s<this._sortedJoints.length;s++){let e=this._sortedJoints[s];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(s){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){let t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(s),yd(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;let s=[],e=new Set,t=new Set,n=new Set;for(let r of this._joints)this._insertJointSort(r,e,t,s,n);this._sortedJoints=s;let i=YM(n);this._ancestors=[],i&&(this._ancestors.push(i),yd(i,r=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(r))==null?void 0:o.size)!=null?a:0)>0?!0:(this._ancestors.push(r),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(s,e,t,n,i){if(t.has(s))return;if(e.has(s)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(s);let r=s.dependencies;for(let o of r){let a=!1,l=null;jM(o,c=>{let h=this._objectSpringBonesMap.get(c);if(h)for(let d of h)a=!0,this._insertJointSort(d,e,t,n,i);else a||(l=c)}),l&&i.add(l)}n.push(s),t.add(s)}_relevantChildrenUpdated(s){var e,t;return((t=(e=this._objectSpringBonesMap.get(s))==null?void 0:e.size)!=null?t:0)>0?!0:(s.updateWorldMatrix(!1,!1),!1)}},Ep="VRMC_springBone_extended_collider",$M=new Set(["1.0","1.0-beta"]),KM=new Set(["1.0"]),qp=class Ys{get name(){return Ys.EXTENSION_NAME}constructor(e,t){var n;this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot,this.useExtendedColliders=(n=t?.useExtendedColliders)!=null?n:!0}afterRoot(e){return Oa(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Oa(this,null,function*(){let t=yield this._v1Import(e);if(t!=null)return t;let n=yield this._v0Import(e);return n??null})}_v1Import(e){return Oa(this,null,function*(){var t,n,i,r,o;let a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf(Ys.EXTENSION_NAME))!==-1))return null;let c=new Mp,h=yield e.parser.getDependencies("node"),d=(n=a.extensions)==null?void 0:n[Ys.EXTENSION_NAME];if(!d)return null;let u=d.specVersion;if(!$M.has(u))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Ys.EXTENSION_NAME} specVersion "${u}"`),null;let f=(i=d.colliders)==null?void 0:i.map((_,p)=>{var m,b,v,M,R,T,A,C,O,y,S,N,k,V,X;let B=h[_.node];if(B==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${p} attempted to reference a node #${_.node} but not found. Skipping the collider`),null;let Y=_.shape,G=(m=_.extensions)==null?void 0:m[Ep];if(this.useExtendedColliders&&G!=null){let ie=G.specVersion;if(!KM.has(ie))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Ep} specVersion "${ie}". Fallbacking to the ${Ys.EXTENSION_NAME} definition`);else{let se=G.shape;if(se.sphere)return this._importSphereCollider(B,{offset:new x().fromArray((b=se.sphere.offset)!=null?b:[0,0,0]),radius:(v=se.sphere.radius)!=null?v:0,inside:(M=se.sphere.inside)!=null?M:!1});if(se.capsule)return this._importCapsuleCollider(B,{offset:new x().fromArray((R=se.capsule.offset)!=null?R:[0,0,0]),radius:(T=se.capsule.radius)!=null?T:0,tail:new x().fromArray((A=se.capsule.tail)!=null?A:[0,0,0]),inside:(C=se.capsule.inside)!=null?C:!1});if(se.plane)return this._importPlaneCollider(B,{offset:new x().fromArray((O=se.plane.offset)!=null?O:[0,0,0]),normal:new x().fromArray((y=se.plane.normal)!=null?y:[0,0,1])})}}if(Y.sphere)return this._importSphereCollider(B,{offset:new x().fromArray((S=Y.sphere.offset)!=null?S:[0,0,0]),radius:(N=Y.sphere.radius)!=null?N:0,inside:!1});if(Y.capsule)return this._importCapsuleCollider(B,{offset:new x().fromArray((k=Y.capsule.offset)!=null?k:[0,0,0]),radius:(V=Y.capsule.radius)!=null?V:0,tail:new x().fromArray((X=Y.capsule.tail)!=null?X:[0,0,0]),inside:!1});console.warn(`VRMSpringBoneLoaderPlugin: The collider #${p} has no valid shape. Skipping the collider`)}),g=(r=d.colliderGroups)==null?void 0:r.map((_,p)=>{var m;return{colliders:((m=_.colliders)!=null?m:[]).map(v=>{let M=f?.[v];return M??(console.warn(`VRMSpringBoneLoaderPlugin: The collider group #${p} attempted to reference a collider #${v} but not found. Skipping the collider`),null)}).filter(v=>v!=null),name:_.name}});return(o=d.springs)==null||o.forEach((_,p)=>{var m;let b=_.joints,v=(m=_.colliderGroups)==null?void 0:m.map(T=>{let A=g?.[T];return A??(console.warn(`VRMSpringBoneLoaderPlugin: The spring #${p} attempted to reference a collider group #${T} but not found. Skipping the collider group`),null)}).filter(T=>T!=null),M=_.center!=null?h[_.center]:void 0,R;b.forEach(T=>{if(R){let A=R.node,C=h[A],O=T.node,y=h[O],S={hitRadius:R.hitRadius,dragForce:R.dragForce,gravityPower:R.gravityPower,stiffness:R.stiffness,gravityDir:R.gravityDir!=null?new x().fromArray(R.gravityDir):void 0},N=this._importJoint(C,y,S,v);M&&(N.center=M),c.addJoint(N)}R=T})}),c.setInitState(),c})}_v0Import(e){return Oa(this,null,function*(){var t,n,i;let r=e.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;let a=(n=r.extensions)==null?void 0:n.VRM,l=a?.secondaryAnimation;if(!l)return null;let c=l?.boneGroups;if(!c)return null;let h=new Mp,d=yield e.parser.getDependencies("node"),u=(i=l.colliderGroups)==null?void 0:i.map((f,g)=>{var _;let p=d[f.node];return p==null?(console.warn(`VRMSpringBoneLoaderPlugin: The collider group #${g} attempted to reference a node #${f.node} but not found. Skipping the collider group`),null):{colliders:((_=f.colliders)!=null?_:[]).map((b,v)=>{var M,R,T;let A=new x(0,0,0);return b.offset&&A.set((M=b.offset.x)!=null?M:0,(R=b.offset.y)!=null?R:0,b.offset.z?-b.offset.z:0),this._importSphereCollider(p,{offset:A,radius:(T=b.radius)!=null?T:0,inside:!1})})}});return c?.forEach((f,g)=>{let _=f.bones;_&&_.forEach(p=>{var m,b,v,M;let R=d[p];if(R==null){console.warn(`VRMSpringBoneLoaderPlugin: The spring bone group #${g} attempted to reference a node #${p} but not found. Skipping the node`);return}let T=new x;f.gravityDir?T.set((m=f.gravityDir.x)!=null?m:0,(b=f.gravityDir.y)!=null?b:0,(v=f.gravityDir.z)!=null?v:0):T.set(0,-1,0);let A=f.center!=null?d[f.center]:void 0,C={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:T},O=(M=f.colliderGroups)==null?void 0:M.map(y=>{let S=u?.[y];return S??(console.warn(`VRMSpringBoneLoaderPlugin: The spring #${g} attempted to reference a collider group #${y} but not found. Skipping the collider group`),null)}).filter(y=>y!=null);R.traverse(y=>{var S;let N=(S=y.children[0])!=null?S:null,k=this._importJoint(y,N,C,O);A&&(k.center=A),h.addJoint(k)})})}),e.scene.updateMatrixWorld(),h.setInitState(),h})}_importJoint(e,t,n,i){let r=new qM(e,t,n,i);if(this.jointHelperRoot){let o=new HM(r);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return r}_importSphereCollider(e,t){let n=new Xp(t),i=new ud(n);if(e.add(i),this.colliderHelperRoot){let r=new dd(i);this.colliderHelperRoot.add(r),r.renderOrder=this.colliderHelperRoot.renderOrder}return i}_importCapsuleCollider(e,t){let n=new Gp(t),i=new ud(n);if(e.add(i),this.colliderHelperRoot){let r=new dd(i);this.colliderHelperRoot.add(r),r.renderOrder=this.colliderHelperRoot.renderOrder}return i}_importPlaneCollider(e,t){let n=new Wp(t),i=new ud(n);if(e.add(i),this.colliderHelperRoot){let r=new dd(i);this.colliderHelperRoot.add(r),r.renderOrder=this.colliderHelperRoot.renderOrder}return i}};qp.EXTENSION_NAME="VRMC_springBone";var ZM=qp,jp=class{get name(){return"VRMLoaderPlugin"}constructor(s,e){var t,n,i,r,o,a,l,c,h,d;this.parser=s;let u=e?.helperRoot,f=e?.autoUpdateHumanBones;this.expressionPlugin=(t=e?.expressionPlugin)!=null?t:new px(s),this.firstPersonPlugin=(n=e?.firstPersonPlugin)!=null?n:new gx(s),this.humanoidPlugin=(i=e?.humanoidPlugin)!=null?i:new Ex(s,{helperRoot:u,autoUpdateHumanBones:f}),this.lookAtPlugin=(r=e?.lookAtPlugin)!=null?r:new Fx(s,{helperRoot:u}),this.metaPlugin=(o=e?.metaPlugin)!=null?o:new Vx(s),this.mtoonMaterialPlugin=(a=e?.mtoonMaterialPlugin)!=null?a:new nM(s),this.materialsHDREmissiveMultiplierPlugin=(l=e?.materialsHDREmissiveMultiplierPlugin)!=null?l:new sM(s),this.materialsV0CompatPlugin=(c=e?.materialsV0CompatPlugin)!=null?c:new dM(s),this.springBonePlugin=(h=e?.springBonePlugin)!=null?h:new ZM(s,{colliderHelperRoot:u,jointHelperRoot:u}),this.nodeConstraintPlugin=(d=e?.nodeConstraintPlugin)!=null?d:new IM(s,{helperRoot:u})}beforeRoot(){return Da(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(s){return Da(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(s)})}getMaterialType(s){let e=this.mtoonMaterialPlugin.getMaterialType(s);return e??null}extendMaterialParams(s,e){return Da(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(s,e),yield this.mtoonMaterialPlugin.extendMaterialParams(s,e)})}afterRoot(s){return Da(this,null,function*(){yield this.metaPlugin.afterRoot(s),yield this.humanoidPlugin.afterRoot(s),yield this.expressionPlugin.afterRoot(s),yield this.lookAtPlugin.afterRoot(s),yield this.firstPersonPlugin.afterRoot(s),yield this.springBonePlugin.afterRoot(s),yield this.nodeConstraintPlugin.afterRoot(s),yield this.mtoonMaterialPlugin.afterRoot(s);let e=s.userData.vrmMeta,t=s.userData.vrmHumanoid;if(e&&t){let n=new Gx({scene:s.scene,expressionManager:s.userData.vrmExpressionManager,firstPerson:s.userData.vrmFirstPerson,humanoid:t,lookAt:s.userData.vrmLookAt,meta:e,materials:s.userData.vrmMToonMaterials,springBoneManager:s.userData.vrmSpringBoneManager,nodeConstraintManager:s.userData.vrmNodeConstraintManager});s.userData.vrm=n}})}};function QM(s){let e=new Set;return s.traverse(t=>{if(!t.isMesh)return;let n=t;e.add(n)}),e}function Sp(s,e,t){if(e.size===1){let o=e.values().next().value;if(o.weight===1)return s[o.index]}let n=new Float32Array(s[0].count*3),i=0;if(t)i=1;else for(let o of e)i+=o.weight;for(let o of e){let a=s[o.index],l=o.weight/i;for(let c=0;c<a.count;c++)n[c*3+0]+=a.getX(c)*l,n[c*3+1]+=a.getY(c)*l,n[c*3+2]+=a.getZ(c)*l}return new Le(n,3)}function JM(s){var e;let t=QM(s.scene),n=new Map,i=(e=s.expressionManager)==null?void 0:e.expressionMap;if(i!=null)for(let[r,o]of Object.entries(i)){let a=new Set;for(let l of o.binds)if(l instanceof Va){if(l.weight!==0)for(let c of l.primitives){let h=n.get(c);h==null&&(h=new Map,n.set(c,h));let d=h.get(r);d==null&&(d=new Set,h.set(r,d)),d.add(l)}a.add(l)}for(let l of a)o.deleteBind(l)}for(let r of t){let o=n.get(r);if(o==null)continue;let a=r.geometry.morphAttributes;r.geometry.morphAttributes={};let l=r.geometry.clone();r.geometry=l;let c=l.morphTargetsRelative,h=a.position!=null,d=a.normal!=null,u={},f={},g=[];if(h||d){h&&(u.position=[]),d&&(u.normal=[]);let _=0;for(let[p,m]of o)h&&(u.position[_]=Sp(a.position,m,c)),d&&(u.normal[_]=Sp(a.normal,m,c)),i?.[p].addBind(new Va({index:_,weight:1,primitives:[r]})),f[p]=_,g.push(0),_++}l.morphAttributes=u,r.morphTargetDictionary=f,r.morphTargetInfluences=g}}function Ga(s,e,t){if(s.getComponent)return s.getComponent(e,t);{let n=s.array[e*s.itemSize+t];return s.normalized&&(n=Me.denormalize(n,s.array)),n}}function Yp(s,e,t,n){s.setComponent?s.setComponent(e,t,n):(s.normalized&&(n=Me.normalize(n,s.array)),s.array[e*s.itemSize+t]=n)}function eE(s){var e;let t=tE(s),n=new Set;for(let d of t)n.has(d.geometry)&&(d.geometry=aE(d.geometry)),n.add(d.geometry);let i=new Map;for(let d of n){let u=d.getAttribute("skinIndex"),f=(e=i.get(u))!=null?e:new Map;i.set(u,f);let g=d.getAttribute("skinWeight"),_=nE(u,g);f.set(g,_)}let r=new Map;for(let d of t){let u=iE(d,i);r.set(d,u)}let o=[];for(let[d,u]of r){let f=!1;for(let g of o)if(sE(u,g.boneInverseMap)){f=!0,g.meshes.add(d);for(let[p,m]of u)g.boneInverseMap.set(p,m);break}f||o.push({boneInverseMap:u,meshes:new Set([d])})}let a=new Map,l=new pd,c=new pd,h=new pd;for(let d of o){let{boneInverseMap:u,meshes:f}=d,g=Array.from(u.keys()),_=Array.from(u.values()),p=new Un(g,_),m=c.getOrCreate(p);for(let b of f){let v=b.geometry.getAttribute("skinIndex"),M=l.getOrCreate(v),R=b.skeleton.bones,T=R.map(O=>h.getOrCreate(O)).join(","),A=`${M};${m};${T}`,C=a.get(A);C==null&&(C=v.clone(),rE(C,R,g),a.set(A,C)),b.geometry.setAttribute("skinIndex",C)}for(let b of f)b.bind(p,new be)}}function tE(s){let e=new Set;return s.traverse(t=>{if(!t.isSkinnedMesh)return;let n=t;e.add(n)}),e}function nE(s,e){let t=new Set;for(let n=0;n<s.count;n++)for(let i=0;i<s.itemSize;i++){let r=Ga(s,n,i);Ga(e,n,i)!==0&&t.add(r)}return t}function iE(s,e){let t=new Map,n=s.skeleton,i=s.geometry,r=i.getAttribute("skinIndex"),o=i.getAttribute("skinWeight"),a=e.get(r),l=a?.get(o);if(!l)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(let c of l)t.set(n.bones[c],n.boneInverses[c]);return t}function sE(s,e){for(let[t,n]of s.entries()){let i=e.get(t);if(i!=null&&!oE(n,i))return!1}return!0}function rE(s,e,t){let n=new Map;for(let r of e)n.set(r,n.size);let i=new Map;for(let[r,o]of t.entries()){let a=n.get(o);i.set(a,r)}for(let r=0;r<s.count;r++)for(let o=0;o<s.itemSize;o++){let a=Ga(s,r,o),l=i.get(a);Yp(s,r,o,l)}s.needsUpdate=!0}function oE(s,e,t){if(t=t||1e-4,s.elements.length!=e.elements.length)return!1;for(let n=0,i=s.elements.length;n<i;n++)if(Math.abs(s.elements[n]-e.elements[n])>t)return!1;return!0}var pd=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(s){return this._objectIndexMap.get(s)}getOrCreate(s){let e=this._objectIndexMap.get(s);return e==null&&(e=this._index,this._objectIndexMap.set(s,e),this._index++),e}};function aE(s){var e,t,n,i;let r=new Fe;r.name=s.name,r.setIndex(s.index);for(let[o,a]of Object.entries(s.attributes))r.setAttribute(o,a);for(let[o,a]of Object.entries(s.morphAttributes)){let l=o;r.morphAttributes[l]=a.concat()}r.morphTargetsRelative=s.morphTargetsRelative,r.groups=[];for(let o of s.groups)r.addGroup(o.start,o.count,o.materialIndex);return r.boundingSphere=(t=(e=s.boundingSphere)==null?void 0:e.clone())!=null?t:null,r.boundingBox=(i=(n=s.boundingBox)==null?void 0:n.clone())!=null?i:null,r.drawRange.start=s.drawRange.start,r.drawRange.count=s.drawRange.count,r.userData=s.userData,r}function wp(s){if(Object.values(s).forEach(e=>{e?.isTexture&&e.dispose()}),s.isShaderMaterial){let e=s.uniforms;e&&Object.values(e).forEach(t=>{let n=t.value;n?.isTexture&&n.dispose()})}s.dispose()}function lE(s){let e=s.geometry;e&&e.dispose();let t=s.skeleton;t&&t.dispose();let n=s.material;n&&(Array.isArray(n)?n.forEach(i=>wp(i)):n&&wp(n))}function cE(s){s.traverse(lE)}function hE(s,e){var t,n;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");let i=(t=e?.experimentalSameBoneCounts)!=null?t:!1,r=[];s.traverse(l=>{l.type==="SkinnedMesh"&&r.push(l)});let o=new Map,a=0;for(let l of r){let h=l.geometry.getAttribute("skinIndex");if(o.has(h))continue;let d=new Map,u=new Map;for(let f=0;f<h.count;f++)for(let g=0;g<h.itemSize;g++){let _=Ga(h,f,g),p=d.get(_);p==null&&(p=d.size,d.set(_,p),u.set(p,_)),Yp(h,f,g,p)}h.needsUpdate=!0,o.set(h,u),a=Math.max(a,d.size)}for(let l of r){let h=l.geometry.getAttribute("skinIndex"),d=o.get(h),u=[],f=[],g=i?a:d.size;for(let p=0;p<g;p++){let m=(n=d.get(p))!=null?n:0;u.push(l.skeleton.bones[m]),f.push(l.skeleton.boneInverses[m])}let _=new Un(u,f);l.bind(_,new be)}}function dE(s,e){let t=s.position.count,n=new Array(t),i=0,r=e.array;for(let o=0;o<r.length;o++){let a=r[o];n[a]||(n[a]=!0,i++)}return{isVertexUsed:n,vertexCount:t,verticesUsed:i}}function uE(s){let e=[],t=[],n=0;for(let i=0;i<s.length;i++)if(s[i]){let r=n++;e[i]=r,t[r]=i}return{originalIndexNewIndexMap:e,newIndexOriginalIndexMap:t}}function fE(s,e){var t,n,i,r;e.name=s.name,e.morphTargetsRelative=s.morphTargetsRelative,s.groups.forEach(o=>{e.addGroup(o.start,o.count,o.materialIndex)}),e.boundingBox=(n=(t=s.boundingBox)==null?void 0:t.clone())!=null?n:null,e.boundingSphere=(r=(i=s.boundingSphere)==null?void 0:i.clone())!=null?r:null,e.setDrawRange(s.drawRange.start,s.drawRange.count),e.userData=s.userData}function pE(s,e,t){let n=e.array,i=new n.constructor(n.length);for(let r=0;r<n.length;r++){let o=n[r];i[r]=t[o]}s.setIndex(new Le(i,e.itemSize,e.normalized))}function Wa(s,e,t){let n=s.constructor,i=new n(e.length*t),r=!0;for(let o=0;o<e.length;o++){let l=e[o]*t,c=o*t;for(let h=0;h<t;h++){let d=s[l+h];i[c+h]=d,r=r&&d===0}}return[i,r]}function mE(s){var e;let t=new Map,n=[];for(let[i,r]of Object.entries(s))if(r.isInterleavedBufferAttribute){let o=r,a=o.data,l=(e=t.get(a))!=null?e:[];t.set(a,l),l.push([i,o])}else{let o=r;n.push([i,o])}return[t,n]}function gE(s,e,t){let[n,i]=mE(e);for(let[r,o]of n){let a=r.array,{stride:l}=r,[c,h]=Wa(a,t,l),d=new xi(c,l);d.setUsage(r.usage);for(let[u,f]of o){let{itemSize:g,offset:_,normalized:p}=f,m=new Mi(d,g,_,p);s.setAttribute(u,m)}}for(let[r,o]of i){let a=o.array,{itemSize:l,normalized:c}=o,[h,d]=Wa(a,t,l);s.setAttribute(r,new Le(h,l,c))}}function _E(s){var e;let t=new Map,n=[];for(let[i,r]of Object.entries(s)){let o=i;for(let a=0;a<r.length;a++){let l=r[a];if(l.isInterleavedBufferAttribute){let c=l,h=c.data,d=(e=t.get(h))!=null?e:[];t.set(h,d),d.push([o,a,c])}else{let c=l;n.push([o,a,c])}}}return[t,n]}function bE(s,e,t){var n,i;let r=!0,[o,a]=_E(e),l={};for(let[c,h]of o){let d=c.array,{stride:u}=c,[f,g]=Wa(d,t,u);r=r&&g;let _=new xi(f,u);_.setUsage(c.usage);for(let[p,m,b]of h){let{itemSize:v,offset:M,normalized:R}=b,T=new Mi(_,v,M,R);(n=l[p])!=null||(l[p]=[]),l[p][m]=T}}for(let[c,h,d]of a){let u=d,f=u.array,{itemSize:g,normalized:_}=u,[p,m]=Wa(f,t,g);r=r&&m,(i=l[c])!=null||(l[c]=[]),l[c][h]=new Le(p,g,_)}s.morphAttributes=r?{}:l}function vE(s){let e=new Map;s.traverse(t=>{if(!t.isMesh)return;let n=t,i=n.geometry,r=i.index;if(r==null)return;let o=e.get(i);if(o!=null){n.geometry=o;return}let{isVertexUsed:a,vertexCount:l,verticesUsed:c}=dE(i.attributes,r);if(c===l)return;let{originalIndexNewIndexMap:h,newIndexOriginalIndexMap:d}=uE(a),u=new Fe;fE(i,u),e.set(i,u),pE(u,r,h),gE(u,i.attributes,d),bE(u,i.morphAttributes,d),n.geometry=u}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function yE(s){var e;((e=s.meta)==null?void 0:e.metaVersion)==="0"&&(s.scene.rotation.y=Math.PI)}var Bn=class{constructor(){}};Bn.combineMorphs=JM;Bn.combineSkeletons=eE;Bn.deepDispose=cE;Bn.removeUnnecessaryJoints=hE;Bn.removeUnnecessaryVertices=vE;Bn.rotateVRM0=yE;var oi=["hips","spine","chest","neck","head","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes"],Sd={hips:"\u9AA8\u76C6",spine:"\u810A\u67F1",chest:"\u80F8\u90E8",neck:"\u8116\u5B50",head:"\u5934\u90E8",leftShoulder:"\u5DE6\u9501\u9AA8",leftUpperArm:"\u5DE6\u4E0A\u81C2",leftLowerArm:"\u5DE6\u5C0F\u81C2",leftHand:"\u5DE6\u624B",rightShoulder:"\u53F3\u9501\u9AA8",rightUpperArm:"\u53F3\u4E0A\u81C2",rightLowerArm:"\u53F3\u5C0F\u81C2",rightHand:"\u53F3\u624B",leftUpperLeg:"\u5DE6\u5927\u817F",leftLowerLeg:"\u5DE6\u5C0F\u817F",leftFoot:"\u5DE6\u811A",leftToes:"\u5DE6\u811A\u8DBE",rightUpperLeg:"\u53F3\u5927\u817F",rightLowerLeg:"\u53F3\u5C0F\u817F",rightFoot:"\u53F3\u811A",rightToes:"\u53F3\u811A\u8DBE"},xE=new Set(oi.filter(s=>s.startsWith("left")||s.startsWith("right"))),ME=[["hips",/^(hips?|pelvis|lowerbody|hip)$/],["spine",/^(spine|spine0?1|spine001|waist)$/],["chest",/^(chest|spine0?2|spine002|upperchest|torso)$/],["neck",/^neck/],["head",/^head/],["shoulder",/^(shoulder|clavicle|collar|scapula)/],["lowerArm",/^(lowerarm|forearm|loarm|elbow|forearmtwist)/],["upperArm",/^(upperarm|uparm|arm|armtwist)/],["hand",/^(hand|wrist|handend|handtip)$/],["lowerLeg",/^(lowerleg|calf|shin|knee|leg)$/],["upperLeg",/^(upperleg|upleg|thigh|upperthigh|thighupper)$/],["toes",/^(toe|toes|ball|toebase)/],["foot",/^(foot|ankle)/]];function $p(s){return String(s||"").replace(/([a-z0-9])([A-Z])/g,"$1 $2").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)}function Kp(s){let e=String(s||"").toLowerCase();return e=e.replace(/^armature[|:_\-\s]*/,""),e=e.replace(/^mixamorig[:_\-\s]*/,""),e=e.replace(/^bip\d*[:_\-\s]*/,""),e=e.replace(/^j[_\-\s]?bip[_\-\s]*/,""),e=e.replace(/^cc[_\-\s]?base[_\-\s]*/,""),e=e.replace(/[_.:\-\s]+/g,""),e}function EE(s){let e=$p(s);if(!e.length)return"";if(e.includes("left")||e[0]==="l"||e[e.length-1]==="l")return"left";if(e.includes("right")||e[0]==="r"||e[e.length-1]==="r")return"right";let t=Kp(s);return t.startsWith("left")?"left":t.startsWith("right")?"right":/^l[a-z]/.test(t)?"left":/^r[a-z]/.test(t)?"right":""}function SE(s){return $p(s).filter(t=>!["left","right","l","r","mixamorig","bip","bip01","bip001","j","armature"].includes(t)).join("")}function Zp(s){let e={},t=new Set,n=s.map(i=>{let r=EE(i.name);return{bone:i,side:r,base:Kp(i.name).replace(/^(left|right)/,"").replace(/^[lr](?=[a-z])/,"")}});for(let i of oi){let r=null,o=-1,a=i.endsWith("Toes")?"toes":i.replace(/^(left|right)/,"").replace(/^./,l=>l.toLowerCase());for(let l of n){if(t.has(l.bone.uuid))continue;let c=0;for(let[h,d]of ME)h===a&&(d.test(l.base)||d.test(SE(l.bone.name)))&&(c+=10);if(c!==0){if(xE.has(i)){let h=i.startsWith("left")?"left":"right";if(l.side!==h)continue;c+=4}else if(l.side)continue;c+=Math.max(0,4-Math.abs(l.base.length-i.length)/8),l.base===a.toLowerCase()&&(c+=6),c>o&&(o=c,r=l.bone)}}r&&(e[i]=r,t.add(r.uuid))}for(let i of["left","right"]){let r=`${i}UpperLeg`;if(e[r])continue;let o=n.find(a=>!t.has(a.bone.uuid)&&a.side===i&&a.base==="leg");o&&(e[r]=o.bone,t.add(o.bone.uuid))}return e}function Qp(s){let e={};if(!s?.humanoid)return e;for(let t of oi)try{let n=s.humanoid.getNormalizedBoneNode(t);n&&(e[t]=n)}catch{}return e}function Jp(s){let e=new Map;return s.traverse(t=>{if(t.isBone&&e.set(t.uuid,t),t.isSkinnedMesh&&t.skeleton)for(let n of t.skeleton.bones||[])e.set(n.uuid,n)}),[...e.values()]}function wE(){try{let s=new Ia;return s.setDecoderPath(new URL("./draco/",import.meta.url).href),s}catch{return null}}function TE(s){let e=new Ca(s),t=wE();t&&e.setDRACOLoader(t);try{e.setMeshoptDecoder(Gf)}catch{}return e.register(n=>new jp(n)),e}async function Xa(s,e){let t=new wr,n=s?.files||[],i=new Map,r=new Map;for(let h of n){let d=h.url;if(!d)continue;let u=decodeURIComponent(String(h.name||h.url).split("/").pop()||"").toLowerCase();u&&i.set(u,d);let f=String(h.relative||h.name||"").replace(/\\/g,"/").replace(/^\/+/,"").toLowerCase();f&&r.set(f,d)}t.setURLModifier(h=>{if(!n.length||h.startsWith("data:")||h.startsWith("blob:"))return h;let u=decodeURIComponent(String(h).split("?")[0].split("#")[0]).replace(/\\/g,"/").toLowerCase(),f=u.split("/").pop();if(i.has(f))return i.get(f);for(let[g,_]of r)if(u.endsWith("/"+g)||u===g)return _;return h}),t.onProgress=(h,d,u)=>{e&&u&&e(d/u)};let o=TE(t),a=s.entryUrl||s.url;if(!a)throw new Error("\u6A21\u578B\u7F3A\u5C11\u4E0B\u8F7D\u5730\u5740");let l=await o.loadAsync(a),c=l.userData?.vrm||null;if(c)try{Bn.removeUnnecessaryVertices(c.scene),Bn.combineSkeletons(c.scene),Bn.rotateVRM0(c)}catch(h){console.warn("[3D Editor] VRM \u4F18\u5316\u5931\u8D25\uFF0C\u7EE7\u7EED\u52A0\u8F7D",h)}return{gltf:l,vrm:c,scene:c?.scene||l.scene,animations:l.animations||[]}}function qa(s){s.traverse(e=>{if(!e.isMesh)return;e.castShadow=!0,e.receiveShadow=!0,e.frustumCulled=!1;let t=Array.isArray(e.material)?e.material:[e.material];for(let n of t)n&&(n.side=mn,n.map&&(n.map.anisotropy=4),n.isMeshStandardMaterial&&(n.envMapIntensity=.65))})}function wd(s,e="asset",t=null){return new Promise((n,i)=>{let r=new URLSearchParams({name:s.name||"file",kind:e}),o=new XMLHttpRequest;o.open("POST",`/3d_editor/upload?${r.toString()}`,!0),o.setRequestHeader("Content-Type","application/octet-stream"),o.upload.onprogress=a=>{a.lengthComputable&&t&&t(a.loaded/a.total)},o.onload=()=>{let a=null;try{a=JSON.parse(o.responseText||"{}")}catch{a=null}o.status>=200&&o.status<300&&a?.ok?n(a):i(new Error(a?.error||`\u4E0A\u4F20\u5931\u8D25 (HTTP ${o.status})`))},o.onerror=()=>i(new Error("\u4E0A\u4F20\u5931\u8D25\uFF1A\u7F51\u7EDC\u9519\u8BEF")),o.send(s)})}async function ja(s,e,t){let n=[...s];if(!n.length)throw new Error("\u6CA1\u6709\u9009\u62E9\u6587\u4EF6");let i=n.find(l=>/\.(glb|vrm)$/i.test(l.name))||n.find(l=>/\.gltf$/i.test(l.name));if(!i)throw new Error("\u8BF7\u9009\u62E9 .glb\u3001.gltf \u6216 .vrm \u6587\u4EF6");if(n.length>1&&!/\.gltf$/i.test(i.name))throw new Error("\u591A\u6587\u4EF6\u5BFC\u5165\u53EA\u7528\u4E8E .gltf + .bin + \u8D34\u56FE\uFF1BGLB/VRM \u8BF7\u53EA\u9009\u4E00\u4E2A\u6587\u4EF6");let r=[],o=0;for(let l of n){o+=l.size||1;let c=await wd(l,e,h=>{if(t){let d=r.reduce((u,f)=>u+(f.size||0),0);t((d+(l.size||0)*h)/o)}});r.push({...c,originalName:l.name,relative:l.webkitRelativePath||l.name,size:l.size,isEntry:l===i})}let a=r.find(l=>l.isEntry)||r[0];return{kind:/\.vrm$/i.test(i.name)?"vrm":/\.glb$/i.test(i.name)?"glb":"gltf",name:i.name.replace(/\.[^.]+$/,""),entryUrl:a.url,url:a.url,files:r,originalName:i.name}}function $s(s){let e={};for(let[t,n]of Object.entries(s||{}))n?.name&&(e[t]=n.name);return e}function em(s,e){let t=new Map,n=new Map;for(let r of s)n.set(r.uuid,r),t.has(r.name)||t.set(r.name,r);let i={};for(let[r,o]of Object.entries(e||{})){let a=t.get(o)||n.get(o);a&&(i[r]=a)}return i}function Ks(s){s&&s.traverse(e=>{e.geometry&&e.geometry.dispose?.();let t=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let n of t){for(let i of Object.keys(n)){let r=n[i];r&&r.isTexture&&r.dispose?.()}n.dispose?.()}})}var Hn=s=>{let e={};for(let[t,n]of Object.entries(s))e[t]=[...n];for(let t of Object.keys(s)){if(!t.startsWith("left"))continue;let n="right"+t.slice(4);s[n]||(e[n]=[-s[t][0],s[t][1],s[t][2]])}return e},Td={hips:[0,.95,0],spine:[0,1.1,0],chest:[0,1.28,0],neck:[0,1.48,0],head:[0,1.6,0],leftShoulder:[.06,1.42,0],leftUpperArm:[.18,1.42,0],leftElbow:[.45,1.42,0],leftWrist:[.7,1.42,0],leftHip:[.1,.92,0],leftKnee:[.1,.5,0],leftAnkle:[.1,.09,0],leftToe:[.1,.04,.13]},AE=Hn(Td),RE=Hn({...Td,leftElbow:[.42,1.23,.02],leftWrist:[.5,.98,.05]}),PE=Hn({...Td,hips:[.02,.95,0],spine:[.02,1.1,.01],chest:[.01,1.28,.02],neck:[.01,1.47,.02],head:[.01,1.59,.03],leftShoulder:[.06,1.41,.02],leftUpperArm:[.18,1.41,.02],leftElbow:[.28,1.17,.05],leftWrist:[.26,.94,.1],leftHip:[.12,.92,0],leftKnee:[.14,.5,.01],leftAnkle:[.14,.09,0],leftToe:[.14,.04,.13]}),CE=Hn({hips:[0,.56,0],spine:[0,.73,.01],chest:[0,.91,.03],neck:[0,1.1,.03],head:[0,1.22,.04],leftShoulder:[.06,1.05,.03],leftUpperArm:[.18,1.05,.03],leftElbow:[.22,.82,.12],leftWrist:[.18,.62,.34],leftHip:[.1,.55,.02],leftKnee:[.15,.56,.38],leftAnkle:[.15,.1,.38],leftToe:[.15,.04,.52]}),LE=Hn({hips:[0,.5,0],spine:[0,.68,.06],chest:[0,.86,.12],neck:[0,1.02,.14],head:[0,1.12,.15],leftShoulder:[.06,.99,.14],leftUpperArm:[.18,.99,.14],leftElbow:[.29,.88,.32],leftWrist:[.35,.82,.46],leftHip:[.1,.5,.02],leftKnee:[.16,.45,.33],leftAnkle:[.16,.1,.14],leftToe:[.16,.04,.27]}),IE={...Hn({hips:[0,.53,0],spine:[0,.7,0],chest:[0,.88,0],neck:[0,1.08,0],head:[0,1.2,0],leftShoulder:[.06,1,0],leftUpperArm:[.18,1,0],leftElbow:[.24,.78,.12],leftWrist:[.2,.58,.3],leftHip:[.1,.53,0],leftKnee:[.13,.54,.38],leftAnkle:[.13,.1,.38],leftToe:[.13,.04,.5]}),rightHip:[-.1,.52,-.02],rightKnee:[-.13,.28,-.22],rightAnkle:[-.13,.08,-.5],rightToe:[-.13,.03,-.62]},DE={...Hn({hips:[0,.96,0],spine:[0,1.11,.01],chest:[0,1.29,.02],neck:[0,1.49,.02],head:[0,1.61,.02],leftShoulder:[.06,1.42,0],leftUpperArm:[.18,1.42,0],leftElbow:[.3,1.2,-.16],leftWrist:[.28,.98,-.2],leftHip:[.1,.93,.02],leftKnee:[.11,.52,.22],leftAnkle:[.11,.1,.28],leftToe:[.11,.04,.4]}),rightElbow:[-.28,1.18,.12],rightWrist:[-.22,.98,.2],rightHip:[-.1,.93,-.02],rightKnee:[-.11,.52,-.18],rightAnkle:[-.11,.1,-.28],rightToe:[-.11,.04,-.16]},UE={...Hn({hips:[0,.95,0],spine:[0,1.08,.08],chest:[0,1.24,.16],neck:[0,1.42,.18],head:[0,1.53,.18],leftShoulder:[.06,1.38,.14],leftUpperArm:[.18,1.38,.14],leftElbow:[.32,1.2,-.1],leftWrist:[.26,1.02,-.25],leftHip:[.1,.93,.02],leftKnee:[.12,.58,.3],leftAnkle:[.12,.18,.18],leftToe:[.12,.12,.3]}),rightElbow:[-.26,1.2,.32],rightWrist:[-.18,1.06,.5],rightHip:[-.1,.93,-.02],rightKnee:[-.12,.55,-.25],rightAnkle:[-.12,.12,-.42],rightToe:[-.12,.06,-.3]},NE={...Hn({hips:[0,.95,0],spine:[0,1.1,.01],chest:[.03,1.28,.03],neck:[.02,1.48,.02],head:[.02,1.6,.02],leftShoulder:[.06,1.42,0],leftUpperArm:[.18,1.42,0],leftElbow:[.28,1.25,.2],leftWrist:[.15,1.32,.28],leftHip:[.1,.92,.12],leftKnee:[.12,.5,.25],leftAnkle:[.12,.09,.3],leftToe:[.12,.04,.43]}),rightElbow:[-.1,1.42,.32],rightWrist:[-.02,1.42,.58],rightHip:[-.1,.92,-.12],rightKnee:[-.12,.5,-.2],rightAnkle:[-.12,.09,-.18],rightToe:[-.12,.04,-.05]},OE=Hn({hips:[0,.2,0],spine:[0,.22,-.2],chest:[0,.24,-.4],neck:[0,.26,-.55],head:[0,.27,-.66],leftShoulder:[.06,.3,-.4],leftUpperArm:[.18,.3,-.4],leftElbow:[.4,.24,-.45],leftWrist:[.6,.2,-.5],leftHip:[.1,.18,0],leftKnee:[.1,.12,-.4],leftAnkle:[.1,.08,-.8],leftToe:[.1,.06,-.95]}),ai={tPose:{key:"tPose",label:"T \u5B57\u7AD9\u59FF",joints:AE,hipsOffset:[0,0,0]},aPose:{key:"aPose",label:"\u81EA\u7136\u7AD9\u59FF",joints:RE,hipsOffset:[0,0,0]},relaxed:{key:"relaxed",label:"\u653E\u677E\u7AD9\u59FF",joints:PE,hipsOffset:[0,0,0],headEuler:[0,.12,.03]},sitting:{key:"sitting",label:"\u5750\u59FF",joints:CE,hipsOffset:[0,-.4,0],headEuler:[0,-.08,0]},crouch:{key:"crouch",label:"\u8E72\u59FF",joints:LE,hipsOffset:[0,-.45,0],headEuler:[.12,0,0]},kneel:{key:"kneel",label:"\u5355\u819D\u8DEA\u5730",joints:IE,hipsOffset:[0,-.42,0]},walk:{key:"walk",label:"\u884C\u8D70",joints:DE,hipsOffset:[0,0,0],headEuler:[0,.1,0]},run:{key:"run",label:"\u5954\u8DD1",joints:UE,hipsOffset:[0,0,0],headEuler:[-.08,.12,0]},punch:{key:"punch",label:"\u51FA\u62F3",joints:NE,hipsOffset:[0,-.02,0],headEuler:[0,-.1,0]},lying:{key:"lying",label:"\u8EBA\u59FF",joints:OE,hipsOffset:[0,-.75,0],headEuler:[0,0,.1]}},Wr=[{key:"3:4",label:"3:4 \u7AD6\u56FE",width:960,height:1280},{key:"2:3",label:"2:3 \u7AD6\u56FE",width:832,height:1248},{key:"9:16",label:"9:16 \u7AD6\u56FE",width:768,height:1344},{key:"1:1",label:"1:1 \u65B9\u56FE",width:1024,height:1024},{key:"4:3",label:"4:3 \u6A2A\u56FE",width:1280,height:960},{key:"16:9",label:"16:9 \u6A2A\u56FE",width:1344,height:768},{key:"21:9",label:"21:9 \u5BBD\u94F6\u5E55",width:1344,height:576}],Ad=[{key:"eye",label:"\u5E73\u89C6",fov:38,distance:4.2,height:1.35,target:1,yaw:0},{key:"low",label:"\u4F4E\u89D2\u5EA6",fov:36,distance:3.6,height:.45,target:1.05,yaw:.18},{key:"high",label:"\u9AD8\u89D2\u5EA6",fov:36,distance:4.8,height:2.8,target:1,yaw:.15},{key:"close",label:"\u534A\u8EAB\u7279\u5199",fov:32,distance:2.2,height:1.35,target:1.25,yaw:.2},{key:"wide",label:"\u5168\u8EAB\u5E7F\u89D2",fov:52,distance:6,height:1.3,target:.95,yaw:.28},{key:"dutch",label:"\u8377\u5170\u89D2",fov:34,distance:4,height:1.1,target:1.05,yaw:.6,roll:.16},{key:"top",label:"\u4FEF\u62CD",fov:40,distance:5.2,height:4.6,target:.9,yaw:.2},{key:"worm",label:"\u866B\u773C\u4EF0\u89C6",fov:64,targetFactor:.08,heightFactor:-.44,distanceFactor:1.05,yaw:.16},{key:"lowWide",label:"\u4F4E\u673A\u4F4D\u5E7F\u89D2",fov:74,targetFactor:.12,heightFactor:-.38,distanceFactor:1.18,yaw:.04},{key:"dutchLow",label:"\u4F4E\u89D2\u5EA6\u8377\u5170\u89D2",fov:52,targetFactor:.05,heightFactor:-.34,distanceFactor:1,yaw:.35,roll:-.2},{key:"topExtreme",label:"\u6781\u9650\u4FEF\u62CD",fov:62,targetFactor:.02,heightFactor:2.8,distanceFactor:.7,yaw:.28}],Rd=[{key:"clay",label:"\u767D\u6A21 / \u7ED3\u6784\u4F18\u5148",hint:"\u6700\u7A33\u5B9A\u7684\u6784\u56FE\u53C2\u8003"},{key:"color",label:"\u5F69\u8272\u767D\u6A21",hint:"\u9053\u5177\u548C\u4EBA\u7269\u5206\u533A\u4E0A\u8272\uFF0C\u7A7A\u95F4\u66F4\u6613\u8BFB"},{key:"texture",label:"\u539F\u6750\u8D28 / \u9884\u89C8",hint:"\u4FDD\u7559\u6A21\u578B\u989C\u8272\u548C\u8D34\u56FE"},{key:"mono",label:"\u5355\u8272\u7070\u6A21",hint:"\u9690\u85CF\u670D\u88C5\u989C\u8272\u5E26\u6765\u7684\u5E72\u6270"}],Pd=[{key:"stick",label:"\u706B\u67F4\u4EBA\uFF08\u63A8\u8350\uFF09",hint:"\u4E0D\u8BA9 3D \u4EBA\u5076\u7684\u8EAB\u6750\u6BD4\u4F8B\u5F71\u54CD\u53C2\u8003\u4EBA\u7269"},{key:"body",label:"\u4EBA\u5076\u8EAB\u4F53",hint:"\u59FF\u52BF\u66F4\u76F4\u89C2\uFF0C\u4F46\u8EAB\u6750\u8F6E\u5ED3\u4F1A\u8FDB\u5165\u53C2\u8003\u56FE"}];var kE=13218714,FE=9403753,BE=6187896,tm=2629916,HE=1;function VE(){return`char_${Date.now().toString(36)}_${HE++}`}function Xr(s,e=.72){return new Ft({color:s,roughness:e,metalness:.02})}function dn(s,e,t,n){let i=new x().fromArray(e),r=i.length();if(r<1e-4)return null;let o=new oa(t,Math.max(.008,r-t*2),5,10),a=new J(o,n);return a.position.copy(i).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new x(0,1,0),i.clone().normalize()),a.castShadow=!0,a.receiveShadow=!0,s.add(a),a}function Zs(s,e,t,n){let i=new J(new Pn(t,16,12),n);return i.position.fromArray(e),i.castShadow=!0,i.receiveShadow=!0,s.add(i),i}function Qs(s,e,t,n){let i=new J(new _t(t[0],t[1],t[2]),n);return i.position.fromArray(e),i.castShadow=!0,i.receiveShadow=!0,s.add(i),i}function At(s,e,t){let n=new qi;return n.name=s,n.position.fromArray(t),e.add(n),n}function nm(s={}){let e=Me.clamp(Number(s.bodyScale)||1,.2,10),t=Me.clamp(Number(s.limbScale)||1,.2,10),n=Y=>Y*e,i=Y=>Y*t,r=Math.pow(e,.65),o=new et;o.name="\u5185\u7F6E\u4EBA\u5076";let a={},l=Xr(kE),c=Xr(FE,.8),h=Xr(BE,.85),d=At("hips",o,[0,.95,0]),u=At("spine",d,[0,.15,0]),f=At("chest",u,[0,.18,0]),g=At("neck",f,[0,.2,0]),_=At("head",g,[0,.1,0]),p=At("leftShoulder",f,[n(.06),.14,0]),m=At("leftUpperArm",p,[n(.12),0,0]),b=At("leftLowerArm",m,[i(.27),0,0]),v=At("leftHand",b,[i(.25),0,0]),M=At("rightShoulder",f,[-n(.06),.14,0]),R=At("rightUpperArm",M,[-n(.12),0,0]),T=At("rightLowerArm",R,[-i(.27),0,0]),A=At("rightHand",T,[-i(.25),0,0]),C=At("leftUpperLeg",d,[n(.1),-.03,0]),O=At("leftLowerLeg",C,[0,i(-.42),0]),y=At("leftFoot",O,[0,i(-.41),0]),S=At("leftToes",y,[0,-.04,n(.13)]),N=At("rightUpperLeg",d,[-n(.1),-.03,0]),k=At("rightLowerLeg",N,[0,i(-.42),0]),V=At("rightFoot",k,[0,i(-.41),0]),X=At("rightToes",V,[0,-.04,n(.13)]);Object.assign(a,{hips:d,spine:u,chest:f,neck:g,head:_,leftShoulder:p,leftUpperArm:m,leftLowerArm:b,leftHand:v,rightShoulder:M,rightUpperArm:R,rightLowerArm:T,rightHand:A,leftUpperLeg:C,leftLowerLeg:O,leftFoot:y,leftToes:S,rightUpperLeg:N,rightLowerLeg:k,rightFoot:V,rightToes:X}),Zs(d,[0,.02,0],n(.115),c).scale.set(1.15,.8,.9),dn(u,[0,.18,0],n(.105),h).scale.set(1.18,1,.82),dn(f,[0,.2,0],n(.12),h).scale.set(1.22,1,.86),dn(g,[0,.1,0],n(.045),l),Zs(_,[0,.09*r,0],.115*r,l).scale.set(.94,1.05,.98),Zs(_,[0,.105*r,.106*r],.018*r,c).scale.set(1.2,.7,.7),Zs(_,[-.042*r,.112*r,.1*r],.012*r,Xr(tm,.4)),Zs(_,[.042*r,.112*r,.1*r],.012*r,Xr(tm,.4)),dn(p,[n(.12),0,0],n(.038),l),dn(M,[-n(.12),0,0],n(.038),l),dn(m,[i(.27),0,0],n(.043),l),dn(R,[-i(.27),0,0],n(.043),l),dn(b,[i(.25),0,0],n(.036),l),dn(T,[-i(.25),0,0],n(.036),l),Qs(v,[i(.04),0,0],[n(.09),n(.13),n(.045)],l),Qs(A,[-i(.04),0,0],[n(.09),n(.13),n(.045)],l),dn(C,[0,i(-.42),0],n(.067),l),dn(N,[0,i(-.42),0],n(.067),l),dn(O,[0,i(-.41),0],n(.052),l),dn(k,[0,i(-.41),0],n(.052),l),Qs(y,[0,-.03,n(.055)],[n(.095),n(.065),n(.23)],c),Qs(V,[0,-.03,n(.055)],[n(.095),n(.065),n(.23)],c),Qs(S,[0,-.01,n(.045)],[n(.09),n(.045),n(.1)],c),Qs(X,[0,-.01,n(.045)],[n(.09),n(.045),n(.1)],c);for(let[Y,G]of[["hips",.075],["spine",.045],["chest",.05],["neck",.04],["leftShoulder",.04],["leftUpperArm",.042],["leftLowerArm",.035],["leftHand",.035],["rightShoulder",.04],["rightUpperArm",.042],["rightLowerArm",.035],["rightHand",.035],["leftUpperLeg",.062],["leftLowerLeg",.05],["leftFoot",.045],["leftToes",.035],["rightUpperLeg",.062],["rightLowerLeg",.05],["rightFoot",.045],["rightToes",.035]])Zs(a[Y],[0,0,0],n(G),c);return o.updateMatrixWorld(!0),{model:o,bones:a,mapping:a,kind:"builtin",bodyScale:e,limbScale:t}}var Vn=class s{constructor(e,t={}){this.editor=e,this.type="character",this.id=t.id||VE(),this.name=t.name||"\u89D2\u8272",this.kind=t.kind||"builtin",this.asset=t.asset||null,this.visible=t.visible!==!1,this.root=new et,this.root.name=this.name,this.root.userData.entityId=this.id,this.modelHolder=new et,this.root.add(this.modelHolder),this.editor.viewport.world.add(this.root),this.model=null,this.vrm=null,this.bones=[],this.mapping={},this.mappingNames={},this.rest=new Map,this.handles=[],this.handleGroup=new et,this.handleGroup.name="\u5173\u8282\u63A7\u5236\u70B9",this.editor.viewport.helperGroup.add(this.handleGroup),this.skeletonHelper=null,this.selectedRole=null,this.presetKey="aPose",this.height=1.75,this.bodyHeight=t.body?.height??1.75,this.bodyScale=t.body?.bodyScale??1,this.limbScale=t.body?.limbScale??1,this._baseHeight=1.75,this.loaded=!1,this.loadError=null,this.hipsOffset=new x,this._tmpVec=new x,this._boundsCache=null,t.transform&&(this.root.position.fromArray(t.transform.position||[0,0,0]),this.root.rotation.fromArray(t.transform.rotation||[0,0,0]),this.root.scale.fromArray(t.transform.scale||[1,1,1]))}static async createBuiltin(e,t={}){let n=new s(e,{...t,kind:"builtin"}),i=t.body||{},r=nm({bodyScale:i.bodyScale??1,limbScale:i.limbScale??1});n.model=r.model,n.modelHolder.add(r.model),n.bones=Object.values(r.bones),n.mapping={...r.mapping},n.mappingNames=$s(n.mapping),n.bodyScale=r.bodyScale,n.limbScale=r.limbScale,n.bodyHeight=Me.clamp(Number(i.height)||1.75,.2,300);let o=new at().setFromObject(r.model);return n._baseHeight=Math.max(1e-4,o.getSize(new x).y),n.modelHolder.scale.setScalar(n.bodyHeight/n._baseHeight),n.modelHolder.updateMatrixWorld(!0),n.height=n.bodyHeight,n.finalizePoseRig(),n.loaded=!0,n.root.visible=n.visible,t.pose?n.applyPose(t.pose):n.applyPosePreset(ai.aPose,{ground:!0,record:!1}),n}setBodyHeight(e){if(this.kind!=="builtin")return;this.invalidateBounds();let t=Me.clamp(Number(e)||1.75,.2,300);this.bodyHeight=t,this.modelHolder.scale.setScalar(t/Math.max(1e-4,this._baseHeight)),this.modelHolder.updateMatrixWorld(!0),this.height=t,this.groundCharacter(),this.updateHandles(),this.editor.adaptViewportToScene?.(),this.editor.onCharacterPoseChanged?.(this)}setBodyShape({bodyScale:e=this.bodyScale,limbScale:t=this.limbScale}={}){if(this.kind!=="builtin")return;this.invalidateBounds();let n=Me.clamp(Number(e)||1,.2,10),i=Me.clamp(Number(t)||1,.2,10);if(Math.abs(n-this.bodyScale)<1e-4&&Math.abs(i-this.limbScale)<1e-4)return;let r=this.serializePose(),o=this.root.position.clone(),a=this.root.rotation.clone(),l=this.root.scale.clone(),c=this.bodyHeight;this.modelHolder.remove(this.model),Ks(this.model);let h=nm({bodyScale:n,limbScale:i});this.model=h.model,this.modelHolder.add(h.model),this.bones=Object.values(h.bones),this.mapping={...h.mapping},this.mappingNames=$s(this.mapping),this.bodyScale=h.bodyScale,this.limbScale=h.limbScale,this.modelHolder.scale.setScalar(1),this.modelHolder.position.set(0,0,0),this.modelHolder.updateMatrixWorld(!0);let d=new at().setFromObject(h.model);this._baseHeight=Math.max(1e-4,d.getSize(new x).y),this.modelHolder.scale.setScalar(c/this._baseHeight),this.modelHolder.updateMatrixWorld(!0),this.root.position.copy(o),this.root.rotation.copy(a),this.root.scale.copy(l),this.finalizePoseRig(),this.applyPose(r),this.groundCharacter(),this.height=c,this.updateHandles(),this.editor.adaptViewportToScene?.(),this.editor.onCharacterPoseChanged?.(this)}static async createFromAsset(e,t,n={}){let i=new s(e,{...n,kind:t.kind||"glb",asset:t});try{let r=await Xa(t,n.onProgress);if(i.model=r.scene,i.vrm=r.vrm,i.modelHolder.add(i.model),qa(i.model),i.normalizeModel(),i.bones=Jp(i.model),!i.bones.length)throw new Error("\u6CA1\u6709\u68C0\u6D4B\u5230\u9AA8\u9ABC\u3002\u8FD9\u4E2A\u6587\u4EF6\u66F4\u50CF\u9759\u6001\u9053\u5177\uFF0C\u8BF7\u7528\u300C\u5BFC\u5165\u9053\u5177\u6A21\u578B\u300D\u52A0\u8F7D\u3002");if(i.vrm)i.mapping=Qp(i.vrm),i.mappingNames=$s(i.mapping);else{let o=Zp(i.bones);if(n.mapping&&Object.keys(n.mapping).length){let a=em(i.bones,n.mapping);i.mapping=Object.keys(a).length?a:o}else i.mapping=o;i.mappingNames=$s(i.mapping)}return Object.keys(i.mapping).length<4&&(i.loadError="\u6CA1\u6709\u8BC6\u522B\u5230\u8DB3\u591F\u7684\u4EBA\u5F62\u9AA8\u9ABC\uFF0C\u8BF7\u68C0\u67E5\u6A21\u578B\u662F\u5426\u4E3A\u7ED1\u5B9A\u597D\u7684\u4EBA\u5F62\u89D2\u8272\uFF0C\u6216\u5728\u9AA8\u9ABC\u6620\u5C04\u4E2D\u624B\u52A8\u6307\u5B9A\u3002"),i.finalizePoseRig(),i.loaded=!0,i.root.visible=i.visible,n.pose?i.applyPose(n.pose):i.loadError||i.applyPosePreset(ai.aPose,{ground:!0,record:!1}),i}catch(r){i.loadError=r?.message||String(r),i.loaded=!1;try{i.modelHolder.clear(),Ks(i.model)}catch{}throw i.dispose(),r}}normalizeModel(){if(!this.model)return;this.modelHolder.updateMatrixWorld(!0);let e=new at().setFromObject(this.model);(!Number.isFinite(e.min.y)||e.isEmpty())&&(e=new at(new x(-.5,0,-.5),new x(.5,1.7,.5)));let t=Math.max(1e-4,e.max.y-e.min.y),i=Me.clamp(1.72/t,.01,1e3);this.model.scale.setScalar(i),this.model.updateMatrixWorld(!0),e=new at().setFromObject(this.model);let r=e.getCenter(new x);this.model.position.x-=r.x,this.model.position.z-=r.z,this.model.position.y-=e.min.y,this.model.updateMatrixWorld(!0),this.height=e.max.y-e.min.y}finalizePoseRig(){this.rest.clear();for(let e of Object.values(this.mapping))e&&this.rest.set(e,{position:e.position.clone(),quaternion:e.quaternion.clone()});this.buildHandles(),this.refreshSkeletonHelper()}refreshSkeletonHelper(){if(this.skeletonHelper&&(this.skeletonHelper.parent?.remove(this.skeletonHelper),this.skeletonHelper.geometry?.dispose?.(),this.skeletonHelper.material?.dispose?.(),this.skeletonHelper=null),!this.model||this.vrm)return;let e=null;if(this.model.traverse(n=>{!e&&n.isSkinnedMesh&&n.skeleton&&(e=n.skeleton)}),!e)return;let t=new ma(this.model);t.material.depthTest=!1,t.material.transparent=!0,t.material.opacity=.38,t.material.color.set(8246268),t.renderOrder=5,t.visible=!1,t.name="\u9AA8\u67B6\u7EBF",this.editor.viewport.helperGroup.add(t),this.skeletonHelper=t}buildHandles(){for(let e of this.handles)e.geometry?.dispose?.(),e.material?.dispose?.(),e.parent?.remove(e);this.handles=[];for(let e of oi){let t=this.mapping[e];if(!t)continue;let n=e.startsWith("left")?"left":e.startsWith("right")?"right":"center",i=n==="left"?8108287:n==="right"?16756859:10217412,r=new wt({color:i,depthTest:!1,depthWrite:!1,transparent:!0,opacity:.92}),o=new J(new Pn(1,12,10),r);o.userData={type:"joint",character:this,role:e,bone:t},o.renderOrder=20,o.visible=!1,this.handleGroup.add(o),this.handles.push(o)}this.updateHandles()}updateHandles(){if(!this.root.visible){for(let n of this.handles)n.visible=!1;return}let e=this.editor.poseMode&&this.editor.selectedId===this.id,t=.022*Math.max(.85,Math.min(1.5,this.height/1.72));for(let n of this.handles){let i=n.userData.bone;i&&(i.getWorldPosition(this._tmpVec),n.position.copy(this._tmpVec),n.scale.setScalar(n===this.editor.selectedJoint?t*1.6:t),n.visible=e,n.material.opacity=n===this.editor.selectedJoint?1:.86)}this.skeletonHelper&&(this.skeletonHelper.visible=e&&this.editor.showSkeleton)}setVisible(e){this.visible=!!e,this.root.visible=this.visible,this.updateHandles()}setSelectedRole(e){this.selectedRole=e,this.updateHandles()}getBone(e){return this.mapping[e]||null}getWorldPosition(e,t=null){let n=this.mapping[e];return n?n.getWorldPosition(new x):t}resetPose({record:e=!1,ground:t=!0}={}){e&&this.editor.pushUndo();for(let[n,i]of this.rest)n.quaternion.copy(i.quaternion),n.position.copy(i.position);this.hipsOffset.set(0,0,0),this.model?.updateMatrixWorld(!0),this.vrm?.update(0),t&&this.groundCharacter(),this.presetKey="",this.editor.onCharacterPoseChanged?.(this)}applyPosePreset(e,{ground:t=!0,record:n=!0}={}){let i=typeof e=="string"?ai[e]:e;if(!i)return;n&&this.editor.pushUndo(),this.resetPose({record:!1,ground:!1});let r=this.mapping.hips,o=r?this.rest.get(r)?.position:null;if(r&&o){let u=new x().fromArray(i.hipsOffset||[0,0,0]);r.position.copy(o).add(u),this.hipsOffset.copy(u)}this.model?.updateMatrixWorld(!0);let a=i.joints||{},l=this.root.getWorldQuaternion(new oe),c=(u,f)=>{let g=a[u],_=a[f];if(!g||!_)return null;let p=new x().fromArray(_).sub(new x().fromArray(g));return p.lengthSq()<1e-8?null:p.normalize().applyQuaternion(l)},h=u=>{let f=this.mapping[u];if(!f||!f.parent)return;let g=this.childRole(u),_=g?this.mapping[g]:null;if(!_)return;this.root.updateMatrixWorld(!0);let p=f.getWorldPosition(new x),b=_.getWorldPosition(new x).sub(p);if(b.lengthSq()<1e-10)return;b.normalize();let v=c(...this.directionArgs(u));if(!v)return;let M=new oe().setFromUnitVectors(b,v),R=f.getWorldQuaternion(new oe),T=f.parent.getWorldQuaternion(new oe),A=M.multiply(R);f.quaternion.copy(T.invert().multiply(A)),f.updateMatrixWorld(!0)};for(let u of["hips","spine","chest","neck","leftShoulder","leftUpperArm","leftLowerArm","rightShoulder","rightUpperArm","rightLowerArm","leftUpperLeg","leftLowerLeg","leftFoot","rightUpperLeg","rightLowerLeg","rightFoot"])h(u);let d=this.mapping.head;if(d&&i.headEuler){let u=this.rest.get(d);if(u){let f=new oe().setFromEuler(new yt(...i.headEuler));d.quaternion.copy(u.quaternion).multiply(f)}}this.root.updateMatrixWorld(!0),this.vrm?.update(0),t&&this.groundCharacter(),this.presetKey=i.key||"",this.editor.onCharacterPoseChanged?.(this)}directionArgs(e){return{hips:["hips","spine"],spine:["spine","chest"],chest:["chest","neck"],neck:["neck","head"],leftShoulder:["leftShoulder","leftUpperArm"],leftUpperArm:["leftUpperArm","leftElbow"],leftLowerArm:["leftElbow","leftWrist"],rightShoulder:["rightShoulder","rightUpperArm"],rightUpperArm:["rightUpperArm","rightElbow"],rightLowerArm:["rightElbow","rightWrist"],leftUpperLeg:["leftHip","leftKnee"],leftLowerLeg:["leftKnee","leftAnkle"],leftFoot:["leftAnkle","leftToe"],rightUpperLeg:["rightHip","rightKnee"],rightLowerLeg:["rightKnee","rightAnkle"],rightFoot:["rightAnkle","rightToe"]}[e]||[null,null]}childRole(e){return{hips:"spine",spine:"chest",chest:"neck",neck:"head",leftShoulder:"leftUpperArm",leftUpperArm:"leftLowerArm",leftLowerArm:"leftHand",rightShoulder:"rightUpperArm",rightUpperArm:"rightLowerArm",rightLowerArm:"rightHand",leftUpperLeg:"leftLowerLeg",leftLowerLeg:"leftFoot",leftFoot:"leftToes",rightUpperLeg:"rightLowerLeg",rightLowerLeg:"rightFoot",rightFoot:"rightToes"}[e]||null}groundCharacter(){this.invalidateBounds();let e=this.getBounds();if(e.isEmpty())return;let t=.005-e.min.y;Math.abs(t)>1e-4&&(this.root.position.y+=t,this.root.updateMatrixWorld(!0),this.invalidateBounds())}setMapping(e,t){let n=this.bones.find(i=>i.name===t)||null;n?this.mapping[e]=n:delete this.mapping[e],this.mappingNames=$s(this.mapping),this.finalizePoseRig(),this.applyPosePreset(this.presetKey||"aPose",{ground:!1,record:!1}),this.editor.onCharacterPoseChanged?.(this)}serializePose(){let e={};for(let r of oi){let o=this.mapping[r];if(!o)continue;let a=o.quaternion;e[r]=[a.x,a.y,a.z,a.w]}let t=this.mapping.hips,n=t?this.rest.get(t):null,i=[0,0,0];return t&&n&&(i=[t.position.x-n.position.x,t.position.y-n.position.y,t.position.z-n.position.z]),{type:"quaternions",preset:this.presetKey||"",bones:e,hipsOffset:i}}applyPose(e){if(!e||!e.bones)return;this.resetPose({record:!1,ground:!1});for(let[i,r]of Object.entries(e.bones)){let o=this.mapping[i];!o||!Array.isArray(r)||r.length!==4||o.quaternion.set(r[0],r[1],r[2],r[3])}let t=this.mapping.hips,n=t?this.rest.get(t):null;t&&n&&Array.isArray(e.hipsOffset)&&(t.position.copy(n.position).add(new x().fromArray(e.hipsOffset)),this.hipsOffset.fromArray(e.hipsOffset)),this.root.updateMatrixWorld(!0),this.vrm?.update(0),this.invalidateBounds(),this.presetKey=e.preset||"",this.editor.onCharacterPoseChanged?.(this)}getCanonicalJoints(){let e=r=>this.getWorldPosition(r,null),t={neck:e("neck"),rightShoulder:e("rightUpperArm"),rightElbow:e("rightLowerArm"),rightWrist:e("rightHand"),leftShoulder:e("leftUpperArm"),leftElbow:e("leftLowerArm"),leftWrist:e("leftHand"),rightHip:e("rightUpperLeg"),rightKnee:e("rightLowerLeg"),rightAnkle:e("rightFoot"),leftHip:e("leftUpperLeg"),leftKnee:e("leftLowerLeg"),leftAnkle:e("leftFoot")};!t.neck&&t.leftShoulder&&t.rightShoulder&&(t.neck=t.leftShoulder.clone().add(t.rightShoulder).multiplyScalar(.5));let n=this.mapping.head,i=n?n.getWorldPosition(new x):t.neck?.clone();if(i){let r=n?n.getWorldQuaternion(new oe):new oe,o=new x(0,0,1).applyQuaternion(r).normalize(),a=new x(1,0,0).applyQuaternion(r).normalize(),l=new x(0,1,0).applyQuaternion(r).normalize(),c=i.clone().add(o.multiplyScalar(.085)).add(l.clone().multiplyScalar(.035));t.nose=c,t.rightEye=c.clone().add(a.clone().multiplyScalar(-.034)).add(l.clone().multiplyScalar(.015)),t.leftEye=c.clone().add(a.clone().multiplyScalar(.034)).add(l.clone().multiplyScalar(.015)),t.rightEar=i.clone().add(a.clone().multiplyScalar(-.07)),t.leftEar=i.clone().add(a.clone().multiplyScalar(.07))}return t}getBounds(){if(this._boundsCache)return this._boundsCache.clone();this.root.updateMatrixWorld(!0);let e=new at;return this.root.traverse(t=>{!t.isMesh||!t.geometry||(t.isSkinnedMesh?(t.computeBoundingBox?.(),t.boundingBox&&e.union(t.boundingBox.clone().applyMatrix4(t.matrixWorld))):(t.geometry.computeBoundingBox?.(),t.geometry.boundingBox&&e.union(t.geometry.boundingBox.clone().applyMatrix4(t.matrixWorld))))}),e.isEmpty()&&e.setFromCenterAndSize(new x(0,this.height/2,0),new x(.6,this.height,.6)),this._boundsCache=e,e.clone()}invalidateBounds(){this._boundsCache=null}serialize(){return{id:this.id,type:"character",name:this.name,kind:this.kind,asset:this.asset?{kind:this.asset.kind,name:this.asset.name,entryUrl:this.asset.entryUrl,url:this.asset.url,files:(this.asset.files||[]).map(e=>({name:e.originalName||e.name,relative:e.relative||e.originalName||e.name,url:e.url}))}:null,transform:{position:this.root.position.toArray(),rotation:this.root.rotation.toArray().slice(0,3),scale:this.root.scale.toArray()},visible:this.visible,pose:this.serializePose(),mapping:this.kind==="builtin"||this.vrm?{}:this.mappingNames,height:this.height,body:this.kind==="builtin"?{height:this.bodyHeight,bodyScale:this.bodyScale,limbScale:this.limbScale}:void 0}}dispose(){this.editor.viewport.helperGroup.remove(this.handleGroup);for(let e of this.handles)e.geometry?.dispose?.(),e.material?.dispose?.();this.handles=[],this.skeletonHelper&&(this.skeletonHelper.parent?.remove(this.skeletonHelper),this.skeletonHelper.geometry?.dispose?.(),this.skeletonHelper.material?.dispose?.(),this.skeletonHelper=null),this.root.parent?.remove(this.root),Ks(this.root)}};var zE=1;function GE(){return`prop_${Date.now().toString(36)}_${zE++}`}var WE="#8a8f98",XE={chair:"#8a6a4a",table:"#95724d",bed:"#8a6f5a",sofa:"#6f7d8c",wall:"#c9c3b8",floor:"#6b6258",box:"#8a94a3",sphere:"#8a94a3",cylinder:"#8a94a3",cone:"#8a94a3"};function im(s,e=.8){return new Ft({color:new ae(s),roughness:e,metalness:.02})}function Bt(s,e,t,n){let i=new J(new _t(t[0],t[1],t[2]),e);return i.position.fromArray(n),i.castShadow=!0,i.receiveShadow=!0,s.add(i),i}function sm(s,e,t,n,i,r,o=[0,0,0]){let a=new J(new Tt(t,n,i,24,1),e);return a.position.fromArray(r),a.rotation.fromArray(o),a.castShadow=!0,a.receiveShadow=!0,s.add(a),a}function qE(s,e,t,n){let i=new J(new Pn(t,28,18),e);return i.position.fromArray(n),i.castShadow=!0,i.receiveShadow=!0,s.add(i),i}var Ya=[{key:"box",label:"\u65B9\u5757",icon:"\u25A1"},{key:"sphere",label:"\u7403\u4F53",icon:"\u25CB"},{key:"cylinder",label:"\u5706\u67F1",icon:"\u25AF"},{key:"cone",label:"\u5706\u9525",icon:"\u25B3"},{key:"wall",label:"\u5899\u677F",icon:"\u25A5"},{key:"floor",label:"\u5730\u677F",icon:"\u25AC"},{key:"table",label:"\u684C\u5B50",icon:"\u25A4"},{key:"chair",label:"\u6905\u5B50",icon:"\u25A3"},{key:"bed",label:"\u5E8A",icon:"\u25AD"},{key:"sofa",label:"\u6C99\u53D1",icon:"\u25B0"}],Ln=class s{constructor(e,t={}){this.editor=e,this.type="prop",this.id=t.id||GE(),this.name=t.name||"\u9053\u5177",this.kind=t.kind||"primitive",this.shape=t.shape||"box",this.isScene=!!t.isScene,this.color=t.color||(this.kind==="primitive"?XE[this.shape]:null)||WE,this.asset=t.asset||null,this.visible=t.visible!==!1,this.group=new et,this.group.name=this.name,this.group.userData.entityId=this.id,this.group.userData.isProp=!0,this._boundsCache=null,this.modelHolder=new et,this.group.add(this.modelHolder),this.editor.viewport.world.add(this.group),this.material=im(this.color),t.transform&&(this.group.position.fromArray(t.transform.position||[0,0,0]),this.group.rotation.fromArray(t.transform.rotation||[0,0,0]),this.group.scale.fromArray(t.transform.scale||[1,1,1])),this.kind==="primitive"&&this.buildPrimitive(this.shape),this.setVisible(this.visible)}static createPrimitive(e,t="box",n={}){let i=new s(e,{...n,kind:"primitive",shape:t});return n.transform||(i.group.position.y=0,i.dropToFloor()),i}static async createFromAsset(e,t,n={}){let i=new s(e,{...n,kind:"asset",asset:t});try{let r=await Xa(t,n.onProgress);if(i.modelHolder.add(r.scene),qa(r.scene),n.normalize===!1){i.modelHolder.updateMatrixWorld(!0);let o=new at().setFromObject(i.modelHolder);o.isEmpty()||(i.modelHolder.position.y-=o.min.y),i.modelHolder.updateMatrixWorld(!0)}else i.normalizeModel(n.targetSize||1.4);return i.kind=t.kind||"glb",i.isScene&&i.modelHolder.traverse(o=>{o.isMesh&&(o.castShadow=!1,o.receiveShadow=!0,o.frustumCulled=!0,o.isSkinnedMesh||(o.updateMatrix(),o.matrixAutoUpdate=!1))}),i.setVisible(i.visible),i}catch(r){throw i.dispose(),r}}normalizeModel(e=1.4){let t=new at().setFromObject(this.modelHolder);if(t.isEmpty())return;let n=t.getSize(new x),i=Math.max(n.x,n.y,n.z);if(i>1e-4){let a=e/i;this.modelHolder.scale.setScalar(a)}this.modelHolder.updateMatrixWorld(!0);let r=new at().setFromObject(this.modelHolder),o=r.getCenter(new x);this.modelHolder.position.x-=o.x,this.modelHolder.position.z-=o.z,this.modelHolder.position.y-=r.min.y,this.modelHolder.updateMatrixWorld(!0)}buildPrimitive(e){this.modelHolder.clear(),this.shape=e,this.material=im(this.color);let t=this.material;if(e==="sphere")qE(this.modelHolder,t,.5,[0,.5,0]);else if(e==="cylinder")sm(this.modelHolder,t,.45,.45,1,[0,.5,0]);else if(e==="cone")sm(this.modelHolder,t,.02,.5,1,[0,.5,0]);else if(e==="wall")Bt(this.modelHolder,t,[3,2.6,.16],[0,1.3,0]);else if(e==="floor")Bt(this.modelHolder,t,[4,.12,4],[0,.06,0]);else if(e==="table"){Bt(this.modelHolder,t,[1.35,.08,.8],[0,.76,0]);for(let n of[-.58,.58])for(let i of[-.31,.31])Bt(this.modelHolder,t,[.07,.76,.07],[n,.38,i])}else if(e==="chair"){Bt(this.modelHolder,t,[.5,.07,.5],[0,.46,0]),Bt(this.modelHolder,t,[.5,.55,.07],[0,.75,-.215]);for(let n of[-.21,.21])for(let i of[-.21,.21])Bt(this.modelHolder,t,[.055,.46,.055],[n,.23,i])}else e==="bed"?(Bt(this.modelHolder,t,[1.65,.28,2.05],[0,.27,0]),Bt(this.modelHolder,t,[1.55,.2,1.92],[0,.51,.02]),Bt(this.modelHolder,t,[1.65,.85,.09],[0,.66,-1.02]),Bt(this.modelHolder,t,[.52,.12,.35],[0,.68,.55])):e==="sofa"?(Bt(this.modelHolder,t,[2.1,.38,.88],[0,.32,0]),Bt(this.modelHolder,t,[2.1,.55,.18],[0,.62,-.35]),Bt(this.modelHolder,t,[.18,.48,.88],[-.98,.45,0]),Bt(this.modelHolder,t,[.18,.48,.88],[.98,.45,0]),Bt(this.modelHolder,t,[.82,.12,.72],[-.48,.55,.02]),Bt(this.modelHolder,t,[.82,.12,.72],[.48,.55,.02])):Bt(this.modelHolder,t,[.8,.8,.8],[0,.4,0]);this.modelHolder.updateMatrixWorld(!0)}setColor(e){this.color=e;let t=this.material||this.modelHolder.children.find(n=>n.material)?.material;t?.color&&t.color.set(e)}setVisible(e){this.visible=!!e,this.group.visible=this.visible}dropToFloor(){this.invalidateBounds();let e=this.getBounds();if(!e.isEmpty()){let t=.005-e.min.y;this.group.position.y+=t,this.invalidateBounds()}}getBounds(){if(this._boundsCache)return this._boundsCache.clone();let e=new at().setFromObject(this.group);return e.isEmpty()&&e.setFromCenterAndSize(new x(0,.5,0),new x(1,1,1)),this._boundsCache=e,e.clone()}invalidateBounds(){this._boundsCache=null}serialize(){return{id:this.id,type:"prop",name:this.name,kind:this.asset?this.asset.kind||"glb":"primitive",isScene:this.isScene,shape:this.shape,color:this.color,asset:this.asset?{kind:this.asset.kind,name:this.asset.name,entryUrl:this.asset.entryUrl,url:this.asset.url,files:(this.asset.files||[]).map(e=>({name:e.originalName||e.name,relative:e.relative||e.originalName||e.name,url:e.url}))}:null,transform:{position:this.group.position.toArray(),rotation:this.group.rotation.toArray().slice(0,3),scale:this.group.scale.toArray()},visible:this.visible}}dispose(){this.group.parent?.remove(this.group),this.material?.dispose?.(),Ks(this.modelHolder)}};var Js=["nose","neck","rightShoulder","rightElbow","rightWrist","leftShoulder","leftElbow","leftWrist","rightHip","rightKnee","rightAnkle","leftHip","leftKnee","leftAnkle","rightEye","leftEye","rightEar","leftEar"],rm=["#ff2d2d","#ff6a00","#ffb000","#ffe000","#b8ff00","#5cff00","#00ff44","#00ff9d","#00ffd5","#00e5ff","#00a2ff","#005cff","#2d2dff","#6a00ff","#b000ff","#ff00e0","#ff0090","#ff0044"],jE=[[1,2],[1,5],[2,3],[3,4],[5,6],[6,7],[1,8],[8,9],[9,10],[1,11],[11,12],[12,13],[1,0],[0,14],[14,16],[0,15],[15,17]];function YE(s,e,t){let n=document.createElement("canvas");n.width=e,n.height=t;let i=n.getContext("2d");i.fillStyle="#000000",i.fillRect(0,0,e,t);let r=s.viewport.shotCamera;r.aspect=e/t,r.updateProjectionMatrix(),r.updateMatrixWorld(!0);let o=Math.min(e,t)/900,a=Math.max(2,Math.round(7*o)),l=Math.max(2,Math.round(4*o));i.lineCap="round",i.lineJoin="round";for(let c of s.characters||[]){if(!c.root.visible||!c.loaded)continue;let h=c.getCanonicalJoints(),d={};for(let u of Js){let f=h[u];if(!f)continue;let g=s.viewport.projectToScreen(f,e,t,r);g&&(d[u]=g)}for(let[u,f]of jE){let g=d[Js[u]],_=d[Js[f]];!g||!_||(i.strokeStyle=rm[f]||"#ffffff",i.globalAlpha=.82,i.lineWidth=a,i.beginPath(),i.moveTo(g.x,g.y),i.lineTo(_.x,_.y),i.stroke())}i.globalAlpha=1;for(let u=0;u<Js.length;u+=1){let f=d[Js[u]];f&&(i.fillStyle=rm[u]||"#ffffff",i.beginPath(),i.arc(f.x,f.y,l,0,Math.PI*2),i.fill())}}return n.toDataURL("image/png")}function $E(s){let e=[];for(let t of s.characters||[]){let n=t.getCanonicalJoints(),i={};for(let r of Js)i[r]=n[r]?n[r].toArray().map(o=>Number(o.toFixed(5))):null;e.push({id:t.id,name:t.name,kind:t.kind,joints:i,boneRotations:t.serializePose()})}return JSON.stringify({version:1,camera:s.viewport.getShotState(),output:{width:s.state.output.width,height:s.state.output.height},characters:e},null,2)}async function Cd(s){let e=Math.max(64,Math.round(s.state.output.width)),t=Math.max(64,Math.round(s.state.output.height));s.viewport.beginCapture(e,t);let n={};try{n.scene=s.viewport.renderSceneDataURL(s.state.render.style),n.depth=s.viewport.renderDepthDataURL(),n.pose=YE(s,e,t),n.region=s.viewport.renderRegionDataURL(),n.people_mask=s.viewport.renderMaskDataURL("people"),n.props_mask=s.viewport.renderMaskDataURL("props"),n.ground_mask=s.viewport.renderMaskDataURL("ground"),n.preview=n.scene}finally{s.viewport.endCapture()}let i=$E(s),r=s.viewport.getShotState();return{images:n,width:e,height:t,poseJson:i,camera:r,prompt:s.state.prompt,negativePrompt:s.state.negativePrompt,renderStyle:s.state.render.style,scene:s.serializeScene()}}function Ld(s,e){let t=document.createElement("a");t.href=s,t.download=e,document.body.append(t),t.click(),t.remove()}function om(s,e){let t=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),n=URL.createObjectURL(t),i=document.createElement("a");i.href=n,i.download=e,document.body.append(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(n),2e3)}var am="1.0.0",lm="dsp.editor.autosave.v1";var Id="\u628A\u56FE1\u76843D\u573A\u666F\u63A7\u5236\u56FE\u53D8\u6210\u4E00\u5F20\u5B8C\u6210\u5EA6\u5F88\u9AD8\u7684\u6210\u56FE\uFF1A\u6CBF\u7528\u56FE1\u7684\u955C\u5934\u89D2\u5EA6\u3001\u6784\u56FE\u3001\u4EBA\u7269\u59FF\u52BF\u3001\u8EAB\u4F53\u4F4D\u7F6E\uFF0C\u4EE5\u53CA\u5927\u578B\u5BB6\u5177\u3001\u5899\u4F53\u3001\u80CC\u666F\u7684\u7A7A\u95F4\u5173\u7CFB\uFF1B\u56FE1\u7684\u955C\u5934\u900F\u89C6\u5305\u62EC\u4F4E\u89D2\u5EA6\u4EF0\u89C6\u548C\u9AD8\u89D2\u5EA6\u4FEF\u62CD\uFF0C\u5B8C\u6574\u6CBF\u7528\u3002\u56FE2\u662F\u7B2C\u4E00\u4E2A\u89D2\u8272\u53C2\u8003\uFF1A\u56FE1\u6700\u5DE6\u8FB9\u4EBA\u7269\u7684\u8138\u578B\u3001\u4E94\u5B98\u3001\u53D1\u578B\u3001\u8EAB\u6750\u3001\u80F8\u8170\u81C0\u6BD4\u4F8B\u3001\u56DB\u80A2\u7C97\u7EC6\u548C\u670D\u88C5\u6CBF\u7528\u56FE2\u3002\u56FE3\u662F\u573A\u666F\u53C2\u8003\uFF1A\u628A\u56FE1\u7684\u767D\u6A21\u7A7A\u95F4\u8F6C\u5316\u6210\u56FE3\u91CC\u7684\u5EFA\u7B51\u3001\u5BB6\u5177\u3001\u6750\u8D28\u3001\u8272\u8C03\u548C\u5149\u7EBF\uFF0C\u6700\u7EC8\u753B\u9762\u5448\u73B0\u56FE3\u90A3\u79CD\u5B8C\u6574\u7684\u771F\u5B9E\u573A\u666F\uFF1B\u56FE3\u63D0\u4F9B\u73AF\u5883\u3001\u5EFA\u7B51\u3001\u5BB6\u5177\u3001\u6750\u8D28\u3001\u8272\u8C03\u548C\u5149\u7EBF\u3002\u56FE4\u8D77\u662F\u5176\u4F59\u89D2\u8272\u53C2\u8003\uFF1A\u6309\u56FE1\u4E2D\u4EBA\u7269\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\uFF0C\u7B2C\u4E8C\u4E2A\u3001\u7B2C\u4E09\u4E2A\u4EBA\u7269\u5206\u522B\u4F7F\u7528\u56FE4\u3001\u56FE5\u2026\u2026\u4E2D\u5BF9\u5E94\u4EBA\u7269\u7684\u8138\u578B\u3001\u4E94\u5B98\u3001\u53D1\u578B\u3001\u8EAB\u6750\u3001\u80F8\u8170\u81C0\u6BD4\u4F8B\u3001\u56DB\u80A2\u7C97\u7EC6\u548C\u670D\u88C5\u3002\u56FE1\u91CC\u51FA\u73B0\u51E0\u4E2A\u4EBA\u7269\uFF0C\u6700\u7EC8\u753B\u9762\u5C31\u4FDD\u7559\u51E0\u4E2A\u4EBA\u7269\uFF1B\u6BCF\u4E2A\u4EBA\u7269\u7684\u4F4D\u7F6E\u3001\u59FF\u52BF\u548C\u524D\u540E\u906E\u6321\u5173\u7CFB\u6CBF\u7528\u56FE1\u3002\u753B\u9762\u91CC\u7684\u4EBA\u7269\u6570\u91CF\u548C\u4F4D\u7F6E\u6765\u81EA\u56FE1\uFF0C\u7B2C\u4E00\u4E2A\u4EBA\u7269\u5916\u89C2\u6765\u81EA\u56FE2\uFF0C\u5176\u4F59\u4EBA\u7269\u5916\u89C2\u6765\u81EA\u56FE4\u8D77\u7684\u89D2\u8272\u53C2\u8003\u3002\u56FE1\u8D1F\u8D23\u59FF\u52BF\u548C\u7A7A\u95F4\uFF0C\u56FE2\u548C\u56FE4\u8D77\u8D1F\u8D23\u4EBA\u7269\u5916\u89C2\uFF0C\u56FE3\u8D1F\u8D23\u573A\u666F\u3002\u6700\u7EC8\u753B\u9762\u662F\u4E00\u5F20\u771F\u5B9E\u62CD\u6444\u8D28\u611F\u7684\u4EBA\u50CF\u6444\u5F71\uFF1A\u76AE\u80A4\u5E72\u51C0\u3001\u670D\u88C5\u9762\u6599\u771F\u5B9E\u3001\u5BB6\u5177\u548C\u5EFA\u7B51\u6750\u8D28\u81EA\u7136\u3001\u5149\u7EBF\u67D4\u548C\u3001\u9634\u5F71\u81EA\u7136\u3002\u753B\u9762\u91CC\u51FA\u73B0\u5B8C\u6574\u7684\u4EBA\u7269\u3001\u670D\u88C5\u3001\u5BB6\u5177\u3001\u5EFA\u7B51\u548C\u5149\u7EBF\uFF0C\u6240\u6709\u7F16\u8F91\u5668\u8F85\u52A9\u5143\u7D20\u90FD\u8F6C\u5316\u6210\u771F\u5B9E\u7684\u573A\u666F\u5185\u5BB9\u3002",KE="";function ZE(s="id"){return globalThis.crypto?.randomUUID?`${s}_${crypto.randomUUID().replace(/-/g,"")}`:`${s}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}function Ve(s){return String(s??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function xt(s,e=2){let t=Number(s);return Number.isFinite(t)?Number(t.toFixed(e)).toString():"0"}function cm(s=Date.now()){let e=new Date(s);return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}var jr=.2,Dd=300;function hm(s){let e=Math.min(Dd,Math.max(jr,Number(s)||1.75));return Math.round(Math.log(e/jr)/Math.log(Dd/jr)*1e3)/10}function QE(s){let e=Math.min(100,Math.max(0,Number(s)||0));return jr*Math.pow(Dd/jr,e/100)}function qr(){return{version:1,meta:{name:"\u672A\u547D\u540D\u573A\u666F",app:"3d-scene-pose-editor"},scene:{background:"#20242b",groundColor:"#2a2f37",grid:!0,ground:!0,snap:.1},camera:{position:[0,1.35,4.2],target:[0,1.05,0],fov:38,roll:0},output:{width:960,height:1280,aspect:"3:4"},render:{style:"color",shadows:!0,characterMode:"stick",quality:"balanced"},references:{character:[],style:[]},prompt:Id,negativePrompt:KE,capture:{token:null,updated:null},settings:{autoGround:!0}}}function JE(s){return Wr.find(e=>e.key===s)||Wr[0]}var Ud=class{constructor(){this.state=qr(),this.characters=[],this.props=[],this.selectedId=null,this.selectedJoint=null,this.poseMode=!1,this.mode="select",this.undoStack=[],this.redoStack=[],this.changedSinceCapture=!1,this._restoring=!1,this._applying=!1,this._lastAutosave=0,this._autosaveTimer=0,this._toastTimer=0,this.embedded=window.parent!==window,this.receivedParentLoad=!1,this._bindElements(),this.viewport=new Pa(this,this.canvas,this.canvasWrap),this._bindUI(),this._bindMessages(),this.renderAll(),this.postToParent("dsp-ready",{version:am}),this.embedded?setTimeout(()=>{this.receivedParentLoad||this.loadInitial()},700):this.loadInitial()}_bindElements(){this.canvas=document.getElementById("viewport"),this.canvasWrap=document.getElementById("canvas-wrap"),this.tabContent=document.getElementById("tab-content"),this.inspectorEl=document.getElementById("inspector"),this.outputSummaryEl=document.getElementById("output-summary"),this.sceneNameEl=document.getElementById("scene-name"),this.saveStateEl=document.getElementById("save-state"),this.statusEl=document.getElementById("status-text"),this.captureStateEl=document.getElementById("capture-state"),this.viewPill=document.getElementById("view-pill"),this.outputPill=document.getElementById("output-pill"),this.emptyHint=document.getElementById("empty-hint"),this.shotHint=document.getElementById("shot-hint"),this.dropOverlay=document.getElementById("drop-overlay"),this.loadingOverlay=document.getElementById("loading-overlay"),this.loadingText=document.getElementById("loading-text"),this.loadingBar=document.getElementById("loading-bar"),this.inspectorKind=document.getElementById("inspector-kind"),this.modalRoot=document.getElementById("modal-root"),this.toastRoot=document.getElementById("toast-root")}_bindUI(){document.querySelectorAll(".tab").forEach(e=>{e.addEventListener("click",()=>this.setTab(e.dataset.tab))}),document.querySelectorAll(".mode-btn").forEach(e=>{e.addEventListener("click",()=>this.setMode(e.dataset.mode))}),document.getElementById("btn-undo").addEventListener("click",()=>this.undo()),document.getElementById("btn-redo").addEventListener("click",()=>this.redo()),document.getElementById("btn-help").addEventListener("click",()=>this.showHelp()),document.getElementById("btn-preview").addEventListener("click",()=>this.showPreview()),document.getElementById("btn-apply").addEventListener("click",()=>this.applyToNode()),document.getElementById("btn-close").addEventListener("click",()=>this.closeEditor()),document.getElementById("btn-shot-settings").addEventListener("click",()=>this.setTab("camera")),document.getElementById("toggle-grid").addEventListener("change",e=>{this.state.scene.grid=e.target.checked,this.viewport.setGridVisible(e.target.checked),this.markDirty()}),document.getElementById("toggle-snap").addEventListener("change",e=>{this.state.scene.snap=e.target.checked?.1:0,this.viewport.transform.setTranslationSnap(e.target.checked?.1:null),this.viewport.transform.setRotationSnap(e.target.checked?Me.degToRad(5):null),this.markDirty()}),document.getElementById("toggle-camera").addEventListener("change",e=>{this.viewport.setShotView(e.target.checked)}),this.sceneNameEl.addEventListener("change",()=>{this.state.meta.name=this.sceneNameEl.value.trim()||"\u672A\u547D\u540D\u573A\u666F",this.markDirty()}),document.getElementById("file-character").addEventListener("change",e=>{let t=[...e.target.files];e.target.value="",t.length&&this.importCharacter(t)}),document.getElementById("file-prop").addEventListener("change",e=>{let t=[...e.target.files];e.target.value="",t.length&&this.importProp(t)}),document.getElementById("file-scene-model").addEventListener("change",e=>{let t=[...e.target.files];e.target.value="",t.length&&this.importSceneModel(t)}),document.getElementById("file-ref-character").addEventListener("change",e=>{let t=[...e.target.files];e.target.value="",t.length&&this.uploadRefs("character",t)}),document.getElementById("file-ref-style").addEventListener("change",e=>{let t=[...e.target.files];e.target.value="",t.length&&this.uploadRefs("style",t)}),document.getElementById("file-scene-import").addEventListener("change",async e=>{let t=e.target.files[0];if(e.target.value="",!!t)try{let n=JSON.parse(await t.text());await this.loadSceneData(n),this.toast("\u5DF2\u5BFC\u5165\u573A\u666F","good")}catch(n){this.toast(`\u5BFC\u5165\u5931\u8D25\uFF1A${n.message}`,"error")}}),this.canvasWrap.addEventListener("dragover",e=>{e.preventDefault(),this.dropOverlay.classList.remove("hidden")}),this.canvasWrap.addEventListener("dragleave",e=>{this.canvasWrap.contains(e.relatedTarget)||this.dropOverlay.classList.add("hidden")}),this.canvasWrap.addEventListener("drop",async e=>{e.preventDefault(),this.dropOverlay.classList.add("hidden");let t=[...e.dataTransfer?.files||[]];if(!t.length)return;let n=t.filter(r=>/\.(glb|gltf|vrm|bin|png|jpe?g|webp)$/i.test(r.name));t.some(r=>/\.(glb|gltf|vrm)$/i.test(r.name))?await this.importCharacter(n):t.every(r=>r.type.startsWith("image/"))?await this.uploadRefs(e.shiftKey?"style":"character",t):this.toast("\u65E0\u6CD5\u8BC6\u522B\u62D6\u5165\u7684\u6587\u4EF6\uFF0C\u8BF7\u4F7F\u7528 GLB / GLTF / VRM \u6216\u56FE\u7247","warn")}),window.addEventListener("keydown",e=>this.onKeyDown(e)),window.addEventListener("beforeunload",()=>this.saveAutosave()),window.addEventListener("resize",()=>this.updateOutputSummary()),this.tabContent.addEventListener("click",e=>this.onTabClick(e)),this.tabContent.addEventListener("change",e=>this.onTabChange(e)),this.tabContent.addEventListener("input",e=>this.onTabInput(e)),this.tabContent.addEventListener("pointerdown",e=>this.onTabPointerDown(e)),this.inspectorEl.addEventListener("click",e=>this.onInspectorClick(e)),this.inspectorEl.addEventListener("change",e=>this.onInspectorChange(e)),this.inspectorEl.addEventListener("input",e=>this.onInspectorInput(e)),this.inspectorEl.addEventListener("pointerdown",e=>this.onInspectorPointerDown(e))}_bindMessages(){window.addEventListener("message",e=>{if(e.origin!==location.origin||e.source!==window.parent)return;let t=e.data||{};t.type==="dsp-load"&&(this.receivedParentLoad=!0,this.loadFromParent(t.payload||{}))})}postToParent(e,t={}){if(this.embedded)try{window.parent.postMessage({type:e,...t},location.origin)}catch(n){console.warn("[3D Editor] postMessage \u5931\u8D25",n)}}async loadFromParent(e){let t=null;try{t=typeof e.scene_data=="string"?JSON.parse(e.scene_data):e.scene_data}catch{t=null}if(t&&(t.characters?.length||t.props?.length||t.version)){await this.loadSceneData(t);let n=String(e.prompt||"").trim();n&&n!==Id&&(this.state.prompt=n),e.negative_prompt&&(this.state.negativePrompt=e.negative_prompt),t?.output?.width||(Number(e.width)>0&&(this.state.output.width=Number(e.width)),Number(e.height)>0&&(this.state.output.height=Number(e.height))),this.refreshAll()}else await this.createDefaultScene(!1),e.prompt&&(this.state.prompt=e.prompt,this.refreshAll());this.setStatus("\u5DF2\u4ECE\u8282\u70B9\u8F7D\u5165\u573A\u666F")}async loadInitial(){try{let e=localStorage.getItem(lm);if(e){let t=JSON.parse(e);if(t&&(t.characters?.length||t.props?.length)){await this.loadSceneData(t),this.toast("\u5DF2\u6062\u590D\u4E0A\u6B21\u7F16\u8F91\u7684\u573A\u666F","good");return}}}catch(e){console.warn("[3D Editor] \u81EA\u52A8\u4FDD\u5B58\u6062\u590D\u5931\u8D25",e)}await this.createDefaultScene(!1)}async createDefaultScene(e=!0){if(e&&!await this.confirm("\u65B0\u5EFA\u573A\u666F\u4F1A\u6E05\u7A7A\u5F53\u524D\u573A\u666F\uFF0C\u7EE7\u7EED\uFF1F","\u65B0\u5EFA\u573A\u666F"))return;this._restoring=!0,this.clearEntities(),this.state=qr(),this.viewport.setBackground(this.state.scene.background),this.viewport.setGroundColor(this.state.scene.groundColor),this.viewport.setGridVisible(!0),this.viewport.setGroundVisible(!0),this.viewport.setShotState(this.state.camera),this.viewport.setShotView(!1),this.state.meta.name="\u672A\u547D\u540D\u573A\u666F",this.sceneNameEl.value=this.state.meta.name;let t=await Vn.createBuiltin(this,{name:"\u5185\u7F6E\u4EBA\u5076"});this.characters.push(t),this.selectedId=t.id,this.poseMode=!1,this.mode="select",this.applyPresetToCharacter(t,"aPose",!1),this.viewport.frameShot(new at().setFromObject(t.root)),this.changedSinceCapture=!1,this.state.capture={token:null,updated:null},this._restoring=!1,this.attachSelected(),this.refreshAll(),this.markDirty(),this.setStatus("\u5DF2\u521B\u5EFA\u9ED8\u8BA4\u573A\u666F")}setTab(e){this.currentTab=e,document.querySelectorAll(".tab").forEach(t=>{t.classList.toggle("active",t.dataset.tab===e)}),e==="pose"&&this.selectedCharacter()&&this.setMode("pose"),this.renderTab()}renderAll(){this.sceneNameEl.value=this.state.meta.name||"\u672A\u547D\u540D\u573A\u666F",this.renderTab(),this.renderInspector(),this.updateOutputSummary(),this.updateCaptureState(),this.updateModeButtons(),this.updateEmptyHint(),this.viewport.invalidate(!0)}renderTab(){let e=this.currentTab||"objects";e==="objects"?this.tabContent.innerHTML=this.objectsHTML():e==="pose"?this.tabContent.innerHTML=this.poseHTML():e==="camera"?this.tabContent.innerHTML=this.cameraHTML():e==="refs"?this.tabContent.innerHTML=this.refsHTML():this.tabContent.innerHTML=this.sceneHTML()}objectsHTML(){let e=this.characters.map(o=>`
        <div class="entity-item character ${o.id===this.selectedId?"selected":""}" data-action="select" data-id="${o.id}">
          <div class="entity-icon">\u4EBA</div>
          <div class="entity-name">${Ve(o.name)}${o.loadError?" \u26A0":""}</div>
          <span class="entity-meta">${o.vrm?"VRM":o.kind==="builtin"?"\u5185\u7F6E":"GLB"}</span>
          <button class="eye-btn ${o.visible?"":"off"}" data-action="toggle-visible" data-id="${o.id}" title="\u663E\u793A/\u9690\u85CF">\u25C9</button>
        </div>`).join(""),t=this.props.filter(o=>o.isScene),n=this.props.filter(o=>!o.isScene),i=t.map(o=>`
        <div class="entity-item prop ${o.id===this.selectedId?"selected":""}" data-action="select" data-id="${o.id}">
          <div class="entity-icon">\u666F</div>
          <div class="entity-name">${Ve(o.name)}</div>
          <span class="entity-meta">\u573A\u666F\u767D\u6A21</span>
          <button class="eye-btn ${o.visible?"":"off"}" data-action="toggle-visible" data-id="${o.id}" title="\u663E\u793A/\u9690\u85CF">\u25C9</button>
        </div>`).join(""),r=n.map(o=>`
        <div class="entity-item prop ${o.id===this.selectedId?"selected":""}" data-action="select" data-id="${o.id}">
          <div class="entity-icon">\u7269</div>
          <div class="entity-name">${Ve(o.name)}</div>
          <span class="entity-meta">${o.kind==="primitive"?"\u51E0\u4F55\u4F53":"\u6A21\u578B"}</span>
          <button class="eye-btn ${o.visible?"":"off"}" data-action="toggle-visible" data-id="${o.id}" title="\u663E\u793A/\u9690\u85CF">\u25C9</button>
        </div>`).join("");return`
      <div class="section">
        <div class="section-title"><span>\u89D2\u8272</span><span class="hint">${this.characters.length} \u4E2A</span></div>
        <div class="btn-grid">
          <button class="action-btn primary" data-action="add-builtin">\uFF0B \u5185\u7F6E\u4EBA\u5076</button>
          <button class="action-btn" data-action="import-character">\u5BFC\u5165 GLB / VRM</button>
        </div>
        <div class="help-text">\u5185\u7F6E\u4EBA\u5076\u9002\u5408\u5FEB\u901F\u6446\u59FF\u52BF\uFF1B\u5BFC\u5165\u81EA\u5DF1\u7684\u89D2\u8272\u540E\u53EF\u76F4\u63A5\u65CB\u8F6C\u5173\u8282\u3002VRM \u4F1A\u81EA\u52A8\u8BC6\u522B\u4EBA\u5F62\u9AA8\u9ABC\u3002</div>
        <div class="entity-list">${e||'<div class="small-note">\u8FD8\u6CA1\u6709\u89D2\u8272\u3002\u5148\u52A0\u4E00\u4E2A\u5185\u7F6E\u4EBA\u5076\u8BD5\u8BD5\u3002</div>'}</div>
      </div>
      <div class="section">
        <div class="section-title"><span>\u573A\u666F\u767D\u6A21</span><span class="hint">${t.length} \u4E2A</span></div>
        <div class="btn-grid">
          <button class="action-btn" data-action="import-scene-model">\u5BFC\u5165\u573A\u666F\u767D\u6A21 (GLB/GLTF)</button>
          <button class="action-btn" data-action="add-primitive" data-shape="wall">\uFF0B \u5899\u677F</button>
        </div>
        <div class="help-text">\u4E0A\u4F20\u4F60\u81EA\u5DF1\u7684\u623F\u95F4\u3001\u5EFA\u7B51\u6216\u8857\u533A\u767D\u6A21\uFF1B\u5B83\u4F1A\u8FDB\u5165 image1\uFF0C\u6700\u7EC8\u573A\u666F\u7531\u573A\u666F\u53C2\u8003\u56FE image3 \u751F\u6210\u3002</div>
        <div class="entity-list" style="margin-top:8px">${i||'<div class="small-note">\u6CA1\u6709\u573A\u666F\u767D\u6A21\uFF1B\u4E5F\u53EF\u4EE5\u53EA\u7528\u5899\u677F/\u5730\u677F\u642D\u7C97\u573A\u666F\u3002</div>'}</div>
      </div>
      <div class="section">
        <div class="section-title"><span>\u9053\u5177</span><span class="hint">${n.length} \u4E2A</span></div>
        <div class="btn-grid">
          <button class="action-btn" data-action="import-prop">\u5BFC\u5165\u9053\u5177\u6A21\u578B</button>
          <button class="action-btn" data-action="add-primitive" data-shape="box">\uFF0B \u65B9\u5757</button>
        </div>
        <div class="btn-grid three" style="margin-top:6px">
          ${Ya.filter(o=>o.key!=="box").map(o=>`<button class="action-btn small" data-action="add-primitive" data-shape="${o.key}" title="${Ve(o.label)}">${o.icon} ${Ve(o.label)}</button>`).join("")}
        </div>
        <div class="entity-list" style="margin-top:8px">${r||'<div class="small-note">\u7528\u65B9\u5757\u3001\u5899\u677F\u3001\u684C\u5B50\u3001\u5E8A\u7B49\u5FEB\u901F\u642D\u4E00\u4E2A\u7C97\u573A\u666F\u3002</div>'}</div>
      </div>
      <div class="section">
        <div class="section-title"><span>\u5FEB\u6377\u64CD\u4F5C</span></div>
        <div class="btn-grid">
          <button class="action-btn" data-action="duplicate">\u590D\u5236\u9009\u4E2D</button>
          <button class="action-btn danger" data-action="delete">\u5220\u9664\u9009\u4E2D</button>
          <button class="action-btn" data-action="face-camera">\u9762\u5411\u955C\u5934</button>
          <button class="action-btn" data-action="drop">\u843D\u5230\u5730\u9762</button>
        </div>
      </div>`}poseHTML(){let e=this.selectedCharacter();if(!e)return`<div class="inspector-empty">\u5148\u5728\u300C\u5BF9\u8C61\u300D\u91CC\u9009\u4E2D\u4E00\u4E2A\u89D2\u8272\uFF0C\u518D\u6765\u6446\u59FF\u52BF\u3002<br><br>\u4E5F\u53EF\u4EE5\u70B9\u4E0B\u9762\u7684\u6309\u94AE\u6DFB\u52A0\u5185\u7F6E\u4EBA\u5076\u3002</div>
        <button class="action-btn primary" data-action="add-builtin">\uFF0B \u6DFB\u52A0\u5185\u7F6E\u4EBA\u5076</button>`;let t=Object.values(ai).map(a=>`<button class="preset-btn ${e.presetKey===a.key?"active":""}" data-action="apply-preset" data-preset="${a.key}">${Ve(a.label)}</button>`).join(""),n=oi.filter(a=>e.mapping[a]).map(a=>{let l=e.mapping[a],c=this.selectedJoint?.userData?.bone===l,h=a.startsWith("left")?"left":a.startsWith("right")?"right":"";return`<div class="bone-row ${c?"selected":""}" data-action="select-bone" data-role="${a}">
          <span class="bone-dot ${h}"></span>
          <span class="bone-name">${Sd[a]||a}</span>
          <span class="bone-real" title="${Ve(l.name)}">${Ve(l.name)}</span>
        </div>`}).join(""),i=this.selectedJoint?.userData?.bone,r="";if(i){let a=new yt().setFromQuaternion(i.quaternion,"XYZ");r=`<div class="bone-sliders">
        ${["x","y","z"].map(c=>`<div class="slider-row"><label>${c.toUpperCase()}</label>
              <input type="range" min="-180" max="180" step="1" value="${Math.round(Me.radToDeg(a[c]))}" data-bone-axis="${c}" />
              <output>${Math.round(Me.radToDeg(a[c]))}\xB0</output></div>`).join("")}
        <div class="inline-row" style="margin-top:5px">
          <button class="action-btn small" data-action="reset-bone">\u91CD\u7F6E\u8FD9\u4E2A\u5173\u8282</button>
          <button class="action-btn small" data-action="deselect-bone">\u53D6\u6D88\u9009\u62E9</button>
        </div>
      </div>`}let o=e.loadError?`<div class="help-text" style="color:#ffb45e">${Ve(e.loadError)}</div>`:"";return`
      <div class="section">
        <div class="section-title"><span>${Ve(e.name)}</span><span class="hint">${e.vrm?"VRM \u4EBA\u5F62\u9AA8\u9ABC":e.kind==="builtin"?"\u5185\u7F6E\u4EBA\u5076":"\u81EA\u52A8\u6620\u5C04"}</span></div>
        ${o}
        <div class="btn-grid">
          <button class="action-btn primary" data-action="pose-to-all">\u5E94\u7528\u59FF\u52BF\u5230\u6240\u6709\u89D2\u8272</button>
          <button class="action-btn" data-action="reset-pose">\u91CD\u7F6E\u59FF\u52BF</button>
          <button class="action-btn" data-action="copy-pose">\u590D\u5236\u59FF\u52BF</button>
          <button class="action-btn" data-action="paste-pose">\u7C98\u8D34\u59FF\u52BF</button>
        </div>
        <label class="check" style="margin-top:8px"><input type="checkbox" id="auto-ground" ${this.state.settings.autoGround?"checked":""} />\u5E94\u7528\u59FF\u52BF\u540E\u81EA\u52A8\u843D\u5730</label>
      </div>
      <div class="section">
        <div class="section-title"><span>\u59FF\u52BF\u9884\u8BBE</span><span class="hint">\u70B9\u4E00\u4E0B\u76F4\u63A5\u5957\u7528</span></div>
        <div class="preset-grid">${t}</div>
      </div>
      <div class="section">
        <div class="section-title"><span>\u5173\u8282</span><span class="hint">\u5728\u89C6\u53E3\u91CC\u70B9\u5173\u8282\u7403\uFF0C\u6216\u4ECE\u5217\u8868\u9009</span></div>
        <div class="bone-list">${n||'<div class="small-note">\u6CA1\u6709\u53EF\u7528\u5173\u8282\u3002\u8BF7\u5728\u53F3\u4FA7\u5C5E\u6027\u91CC\u68C0\u67E5\u9AA8\u9ABC\u6620\u5C04\u3002</div>'}</div>
        ${r}
      </div>`}cameraHTML(){let e=this.state,t=e.output;return`
      <div class="section">
        <div class="section-title"><span>\u955C\u5934</span><span class="hint">${this.viewport.shotView?"\u6B63\u5728\u955C\u5934\u89C6\u56FE":"\u81EA\u7531\u89C6\u56FE"}</span></div>
        <div class="btn-grid">
          <button class="action-btn ${this.viewport.shotView?"primary":""}" data-action="camera-view">${this.viewport.shotView?"\u9000\u51FA\u955C\u5934\u89C6\u56FE":"\u8FDB\u5165\u955C\u5934\u89C6\u56FE"}</button>
          <button class="action-btn" data-action="frame-selection">\u5BF9\u51C6\u9009\u4E2D\u5BF9\u8C61</button>
          <button class="action-btn" data-action="reset-camera">\u91CD\u7F6E\u955C\u5934</button>
          <button class="action-btn" data-action="camera-to-all">\u6846\u4F4F\u6574\u4E2A\u573A\u666F</button>
        </div>
        <div class="help-text">\u955C\u5934\u89C6\u56FE\u91CC\u62D6\u52A8\u9F20\u6807\u662F\u8F6C\u955C\u5934\uFF1B\u6784\u56FE\u6EE1\u610F\u540E\u518D\u70B9\u300C\u5E94\u7528\u5230\u8282\u70B9\u300D\u3002\u300C\u866B\u773C\u4EF0\u89C6 / \u6781\u9650\u4FEF\u62CD\u300D\u652F\u6301\u63A5\u8FD1\u5730\u9762\u6216\u9AD8\u673A\u4F4D\uFF0C\u955C\u5934\u4F1A\u81EA\u52A8\u505C\u5728\u5730\u9762\u4EE5\u4E0A\u3002</div>
        <div class="field"><label>\u89C6\u573A\u89D2</label><div class="field-body inline-row">
          <input type="range" min="18" max="100" step="1" value="${Math.round(this.viewport.shotCamera.fov)}" data-camera="fov" />
          <span class="mono" style="flex:0 0 38px;text-align:right">${Math.round(this.viewport.shotCamera.fov)}\xB0</span>
        </div></div>
        <div class="field"><label>\u955C\u5934\u503E\u659C</label><div class="field-body inline-row">
          <input type="range" min="-25" max="25" step="1" value="${Math.round(Me.radToDeg(this.viewport.shotRoll))}" data-camera="roll" />
          <span class="mono" style="flex:0 0 38px;text-align:right">${Math.round(Me.radToDeg(this.viewport.shotRoll))}\xB0</span>
        </div></div>
        <div class="camera-readout" style="margin-top:8px">
          <span>\u8DDD\u79BB <b>${xt(this.viewport.shotCamera.position.distanceTo(this.viewport.shotTarget),2)} m</b></span>
          <span>\u76EE\u6807\u9AD8 <b>${xt(this.viewport.shotTarget.y,2)} m</b></span>
          <span>\u673A\u4F4D\u9AD8 <b>${xt(this.viewport.shotCamera.position.y,2)} m</b></span>
          <span>FOV <b>${Math.round(this.viewport.shotCamera.fov)}\xB0</b></span>
        </div>
      </div>
      <div class="section">
        <div class="section-title"><span>\u673A\u4F4D\u9884\u8BBE</span></div>
        <div class="shot-preset-grid">
          ${Ad.map(n=>`<button class="action-btn small" data-action="camera-preset" data-preset="${n.key}">${Ve(n.label)}</button>`).join("")}
        </div>
      </div>
      <div class="section">
        <div class="section-title"><span>\u8F93\u51FA\u753B\u5E45</span><span class="hint">\u51B3\u5B9A Qwen \u53C2\u8003\u56FE\u6BD4\u4F8B</span></div>
        <div class="aspect-grid">
          ${Wr.map(n=>`<button class="aspect-btn ${e.output.aspect===n.key?"active":""}" data-action="output-preset" data-preset="${n.key}">${n.key}</button>`).join("")}
        </div>
        <div class="inline-row" style="margin-top:8px">
          <input type="number" min="128" max="3072" step="8" value="${t.width}" data-output="width" />
          <span class="muted">\xD7</span>
          <input type="number" min="128" max="3072" step="8" value="${t.height}" data-output="height" />
        </div>
        <div class="small-note" style="margin-top:5px">\u5EFA\u8BAE 960\xD71280 \u6216 832\xD71248\uFF1BQwen \u4F1A\u6309\u76F8\u540C\u6BD4\u4F8B\u751F\u6210\u3002\u663E\u5B58 8GB \u4E0D\u5EFA\u8BAE\u8D85\u8FC7\u7EA6 130 \u4E07\u50CF\u7D20\u3002</div>
      </div>`}refsHTML(){let e=(t,n,i)=>{let o=(this.state.references[t]||[]).map((a,l)=>`
          <div class="thumb ${a.primary?"selected":""}" data-action="set-primary-ref" data-group="${t}" data-index="${l}" title="\u70B9\u51FB\u8BBE\u4E3A\u4E3B\u53C2\u8003">
            <img src="${Ve(a.url)}" alt="" />
            ${a.primary?'<span class="primary-badge">\u4E3B\u53C2\u8003</span>':""}
            <button class="thumb-x" data-action="delete-ref" data-group="${t}" data-index="${l}" title="\u5220\u9664">\u2715</button>
          </div>`).join("");return`<div class="ref-section">
        <div class="ref-head"><div><b>${n}</b><br><small>${i}</small></div>
          <button class="action-btn small" data-action="upload-ref" data-group="${t}">\u4E0A\u4F20</button></div>
        <div class="thumb-grid">
          ${o}
          <div class="upload-tile" data-action="upload-ref" data-group="${t}"><b>\uFF0B</b><span>\u6DFB\u52A0\u56FE\u7247</span></div>
        </div>
      </div>`};return`
      ${e("character","\u89D2\u8272\u53C2\u8003\uFF08image2 \u8D77\uFF0C\u53EF\u591A\u4EBA\uFF09","\u7B2C\u4E00\u5F20\u63A5 image2\uFF0C\u5176\u4F59\u6309\u987A\u5E8F\u63A5 image4\u3001image5\u2026\u2026\uFF0C\u6BCF\u4EBA\u72EC\u7ACB\u9001\u5165 Qwen")}
      ${e("style","\u573A\u666F\u53C2\u8003\uFF08image3\uFF09","\u5FC5\u987B\u4E0A\u4F20\uFF1B\u6700\u7EC8\u573A\u666F\u7531\u5B83\u751F\u6210\uFF0C\u5EFA\u8BAE\u7528\u6CA1\u6709\u4EBA\u7684\u623F\u95F4/\u5EFA\u7B51/\u73AF\u5883\u56FE")}
      ${(this.state.references.style||[]).length?"":'<div class="help-text" style="color:#ffb45e">\u8FD8\u6CA1\u6709\u573A\u666F\u53C2\u8003\u56FE\u3002\u5DE5\u4F5C\u6D41\u9700\u8981 image3 \u6765\u751F\u6210\u6700\u7EC8\u573A\u666F\uFF0C\u8BF7\u5148\u4E0A\u4F20\u4E00\u5F20\u5B8C\u6574\u7684\u623F\u95F4/\u5EFA\u7B51/\u73AF\u5883\u53C2\u8003\u3002</div>'}
      <div class="help-text">\u591A\u4EBA\u540C\u6846\uFF1A\u6309\u56FE1\u4EBA\u7269\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u4E0A\u4F20\u89D2\u8272\u53C2\u8003\uFF1B\u7B2C\u4E00\u5F20\u63A5 image2\uFF0C\u7B2C\u4E8C\u4E2A\u63A5 image4\uFF0C\u7B2C\u4E09\u4E2A\u63A5 image5\uFF0C\u4F9D\u6B64\u7C7B\u63A8\u3002\u573A\u666F\u53C2\u8003\u4F18\u5148\u7528\u6CA1\u6709\u4EBA\u7684\u73AF\u5883\u56FE\uFF0C\u51CF\u5C11\u573A\u666F\u91CC\u7684\u4EBA\u7269\u5E72\u6270\u3002</div>
      <div class="section">
        <div class="section-title"><span>\u63D0\u793A\u8BCD</span><button class="link-btn" data-action="prompt-template">\u6062\u590D\u7ED3\u6784\u6A21\u677F</button></div>
        <textarea data-text="prompt" rows="9" placeholder="\u7528\u6B63\u5411\u8BED\u8A00\u63CF\u8FF0\u6700\u7EC8\u753B\u9762\uFF1A\u4EBA\u7269\u3001\u670D\u88C5\u3001\u73AF\u5883\u3001\u5149\u7EBF\u3001\u6750\u8D28\u3001\u98CE\u683C\u2026\u2026">${Ve(this.state.prompt)}</textarea>
        <div class="section-title" style="margin-top:10px"><span>\u8D1F\u5411\u63D0\u793A\u8BCD\uFF08\u53EF\u9009\uFF09</span></div>
        <textarea data-text="negative" rows="3" placeholder="\u4EC5\u5728\u4F7F\u7528 cfg > 1 \u65F6\u751F\u6548\uFF1B\u4E3B\u63D0\u793A\u8BCD\u5EFA\u8BAE\u7528\u6B63\u5411\u63CF\u8FF0">${Ve(this.state.negativePrompt)}</textarea>
        <div class="help-text">\u63D0\u793A\u8BCD\u91CC\u5199\u300C\u56FE1\u300D\u300C\u56FE2\u300D\u300C\u56FE3\u300D\u300C\u56FE4\u2026\u300D\uFF1A\u56FE1 = 3D \u767D\u6A21/\u706B\u67F4\u4EBA\u7ED3\u6784\uFF0C\u56FE2 = \u7B2C\u4E00\u4E2A\u89D2\u8272\uFF0C\u56FE3 = \u573A\u666F\u53C2\u8003\uFF0C\u56FE4 \u8D77 = \u5176\u4F59\u89D2\u8272\u3002\u4E3B\u63D0\u793A\u8BCD\u7528\u6B63\u5411\u8BED\u8A00\uFF0C\u6548\u679C\u901A\u5E38\u66F4\u7A33\u5B9A\u3002</div>
      </div>`}sceneHTML(){let e=this.state.scene,t=this.state.render;return`
      <div class="section">
        <div class="section-title"><span>\u573A\u666F\u5916\u89C2</span></div>
        <div class="field"><label>\u80CC\u666F\u8272</label><div class="field-body inline-row">
          <input type="color" value="${e.background}" data-scene="background" />
          <span class="small-note">\u622A\u56FE\u80CC\u666F\uFF0C\u5EFA\u8BAE\u6DF1\u7070\u6216\u4E2D\u7070</span>
        </div></div>
        <div class="field"><label>\u5730\u9762\u8272</label><div class="field-body inline-row">
          <input type="color" value="${e.groundColor}" data-scene="groundColor" />
          <label class="check"><input type="checkbox" data-scene="ground" ${e.ground?"checked":""}/>\u663E\u793A\u5730\u9762</label>
        </div></div>
        <label class="check"><input type="checkbox" data-scene="grid" ${e.grid?"checked":""}/>\u663E\u793A\u7F51\u683C</label>
        <div class="field" style="margin-top:8px"><label>\u5438\u9644</label><div class="field-body">
          <select data-scene="snap">
            <option value="0" ${e.snap===0?"selected":""}>\u5173\u95ED</option>
            <option value="0.1" ${e.snap===.1?"selected":""}>0.1 m</option>
            <option value="0.25" ${e.snap===.25?"selected":""}>0.25 m</option>
            <option value="0.5" ${e.snap===.5?"selected":""}>0.5 m</option>
          </select>
        </div></div>
      </div>
      <div class="section">
        <div class="section-title"><span>\u4EBA\u7269\u63A7\u5236\u56FE</span><span class="hint">\u6BD4\u4F8B\u4E2D\u6027</span></div>
        <select data-render="characterMode">
          ${Pd.map(n=>`<option value="${n.key}" ${(t.characterMode||"stick")===n.key?"selected":""}>${Ve(n.label)} \u2014 ${Ve(n.hint)}</option>`).join("")}
        </select>
        <div class="help-text">\u300C\u706B\u67F4\u4EBA\u300D\u53EA\u4FDD\u7559\u5173\u8282\u4F4D\u7F6E\u548C\u59FF\u52BF\uFF0C\u4E0D\u5E26\u80F8\u8170\u81C0\u548C\u56DB\u80A2\u7C97\u7EC6\uFF0C\u6240\u4EE5 3D \u4EBA\u5076\u7684\u8EAB\u6750\u6BD4\u4F8B\u4E0D\u4F1A\u5F71\u54CD\u53C2\u8003\u56FE\u4EBA\u7269\uFF1B\u753B\u9762\u4ECD\u7136\u4FDD\u7559\u9053\u5177\u3001\u5899\u4F53\u548C\u955C\u5934\u6784\u56FE\u3002</div>
      </div>
      <div class="section">
        <div class="section-title"><span>\u622A\u56FE\u98CE\u683C</span></div>
        <select data-render="style">
          ${Rd.map(n=>`<option value="${n.key}" ${t.style===n.key?"selected":""}>${Ve(n.label)} \u2014 ${Ve(n.hint)}</option>`).join("")}
        </select>
        <div class="field" style="margin-top:8px"><label>\u89C6\u53E3\u6027\u80FD</label><div class="field-body">
          <select data-render="quality">
            <option value="performance" ${(t.quality||"balanced")==="performance"?"selected":""}>\u6027\u80FD\u4F18\u5148 \u2014 1.0\xD7 \u5206\u8FA8\u7387\u30011024 \u9634\u5F71</option>
            <option value="balanced" ${(t.quality||"balanced")==="balanced"?"selected":""}>\u5E73\u8861 \u2014 1.5\xD7 \u5206\u8FA8\u7387\u30011024 \u9634\u5F71\uFF08\u63A8\u8350\uFF09</option>
            <option value="quality" ${(t.quality||"balanced")==="quality"?"selected":""}>\u9AD8\u8D28\u91CF \u2014 2.0\xD7 \u5206\u8FA8\u7387\u30012048 \u9634\u5F71</option>
          </select>
        </div></div>
        <label class="check" style="margin-top:8px"><input type="checkbox" data-render="shadows" ${t.shadows?"checked":""}/>\u6E32\u67D3\u9634\u5F71\uFF08\u66F4\u6709\u7A7A\u95F4\u611F\uFF0C\u4E5F\u7A0D\u6162\uFF09</label>
        <div class="help-text">\u89C6\u53E3\u91C7\u7528\u6309\u9700\u6E32\u67D3\uFF1A\u9759\u6B62\u65F6\u51E0\u4E4E\u4E0D\u5360 GPU\uFF0C\u62D6\u52A8\u955C\u5934/\u5173\u8282\u624D\u91CD\u753B\uFF1B\u9634\u5F71\u8D34\u56FE\u4E5F\u53EA\u5728\u573A\u666F\u53D8\u5316\u65F6\u66F4\u65B0\u3002\u573A\u666F\u767D\u6A21\u9ED8\u8BA4\u4E0D\u6295\u5C04\u9634\u5F71\uFF0C\u51CF\u5C11\u5927\u6A21\u578B\u7684\u6027\u80FD\u538B\u529B\u3002</div>
      </div>
      <div class="section">
        <div class="section-title"><span>\u573A\u666F\u767D\u6A21</span><span class="hint">${this.props.filter(n=>n.isScene).length} \u4E2A</span></div>
        <button class="action-btn" data-action="import-scene-model" style="width:100%">\u5BFC\u5165\u81EA\u5DF1\u7684\u573A\u666F\u767D\u6A21 (GLB/GLTF)</button>
        <div class="help-text">\u4E0A\u4F20\u623F\u95F4\u3001\u5EFA\u7B51\u3001\u8857\u533A\u7B49\u767D\u6A21\uFF0C\u5B83\u4F1A\u53C2\u4E0E image1 \u7684\u7ED3\u6784\uFF1B\u6700\u7EC8\u573A\u666F\u7531\u300C\u53C2\u8003\u300D\u91CC\u7684\u573A\u666F\u53C2\u8003\u56FE image3 \u751F\u6210\u3002</div>
      </div>
      <div class="section">
        <div class="section-title"><span>\u573A\u666F\u6587\u4EF6</span></div>
        <div class="btn-grid">
          <button class="action-btn primary" data-action="save-library">\u4FDD\u5B58\u5230\u573A\u666F\u5E93</button>
          <button class="action-btn" data-action="open-library">\u6253\u5F00\u573A\u666F\u5E93</button>
          <button class="action-btn" data-action="export-scene">\u5BFC\u51FA JSON</button>
          <button class="action-btn" data-action="import-scene">\u5BFC\u5165 JSON</button>
          <button class="action-btn wide" data-action="new-scene">\u65B0\u5EFA\u7A7A\u767D\u573A\u666F</button>
        </div>
        <div class="small-note" style="margin-top:6px">\u573A\u666F\u6587\u4EF6\u53EA\u4FDD\u5B58\u6A21\u578B\u548C\u53C2\u8003\u56FE\u7684\u94FE\u63A5\uFF0C\u6A21\u578B\u672C\u4F53\u5728 ComfyUI/input/3d_scene_editor/assets \u91CC\u3002</div>
      </div>
      <div class="section">
        <div class="section-title"><span>\u5F53\u524D\u8FDE\u63A5</span></div>
        <div class="kv"><span>\u6A21\u5F0F</span><b>${this.embedded?"ComfyUI \u8282\u70B9\u5185\u5D4C":"\u72EC\u7ACB\u7F16\u8F91"}</b></div>
        <div class="kv"><span>\u573A\u666F\u8282\u70B9</span><b>${this.state.capture.token?"\u5DF2\u5E94\u7528":"\u672A\u5E94\u7528"}</b></div>
        <div class="kv"><span>\u7248\u672C</span><b>${am}</b></div>
      </div>`}renderInspector(){let e=this.getEntity(this.selectedId);if(this.inspectorKind.textContent=e?e.type==="character"?"\u89D2\u8272":"\u9053\u5177":"\u573A\u666F",!e){this.inspectorEl.innerHTML=`
        <div class="inspector-empty">
          \u5728\u89C6\u53E3\u6216\u5DE6\u4FA7\u5217\u8868\u9009\u62E9\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u8FD9\u91CC\u4F1A\u663E\u793A\u4F4D\u7F6E\u3001\u65CB\u8F6C\u3001\u7F29\u653E\u548C\u6750\u8D28\u3002
          <br><br>
          \u5C0F\u6280\u5DE7\uFF1A<span class="kbd">P</span> \u6253\u5F00\u6446\u59FF\u52BF\uFF0C<span class="kbd">F</span> \u805A\u7126\uFF0C<span class="kbd">Ctrl+Z</span> \u64A4\u9500\u3002
        </div>
        <div class="section" style="margin-top:14px">
          <div class="section-title"><span>\u573A\u666F\u6982\u89C8</span></div>
          <div class="kv"><span>\u89D2\u8272</span><b>${this.characters.length}</b></div>
          <div class="kv"><span>\u9053\u5177</span><b>${this.props.length}</b></div>
          <div class="kv"><span>\u753B\u5E45</span><b>${this.state.output.width} \xD7 ${this.state.output.height}</b></div>
          <div class="kv"><span>\u955C\u5934</span><b>${Math.round(this.viewport.shotCamera.fov)}\xB0</b></div>
        </div>`;return}if(e.type==="character"){let n=this.selectedJoint?.userData?.bone,i=e.kind==="builtin"||e.vrm?"":`<details class="mapping-details">
              <summary>\u9AA8\u9ABC\u6620\u5C04\uFF08\u9AD8\u7EA7\uFF09</summary>
              <div class="mapping-table">
                ${oi.map(r=>`<div class="mapping-row"><label>${Sd[r]||r}</label>
                    <select data-mapping-role="${r}">
                      <option value="">\u672A\u6307\u5B9A</option>
                      ${e.bones.map(o=>`<option value="${Ve(o.name)}" ${e.mapping[r]===o?"selected":""}>${Ve(o.name)}</option>`).join("")}
                    </select></div>`).join("")}
              </div>
            </details>`;this.inspectorEl.innerHTML=`
        <div class="section">
          <div class="section-title"><span>${Ve(e.name)}</span><span class="badge ${e.kind==="builtin"?"builtin":e.vrm?"vrm":"glb"}">${e.kind==="builtin"?"\u5185\u7F6E":e.vrm?"VRM":"GLB"}</span></div>
          <div class="field"><label>\u540D\u79F0</label><div class="field-body"><input type="text" value="${Ve(e.name)}" data-entity-name /></div></div>
          ${e.loadError?`<div class="help-text" style="color:#ffb45e">${Ve(e.loadError)}</div>`:""}
          <div class="kv"><span>\u9AA8\u9ABC</span><b>${Object.keys(e.mapping).length} / ${e.bones.length}</b></div>
          <div class="kv"><span>\u8EAB\u9AD8</span><b>${xt(e.height,2)} m</b></div>
          <div class="kv"><span>\u5F53\u524D\u59FF\u52BF</span><b>${e.presetKey?Ve(ai[e.presetKey]?.label||e.presetKey):"\u81EA\u5B9A\u4E49"}</b></div>
        </div>
        ${e.kind==="builtin"?`
        <div class="section">
          <div class="section-title"><span>\u4EBA\u5076\u8EAB\u6750</span><span class="hint">0.2\u2013300 m</span></div>
          <div class="field"><label>\u8EAB\u9AD8</label><div class="field-body">
            <input type="range" min="0" max="100" step="0.5" value="${hm(e.bodyHeight)}" data-body-height-slider />
            <div class="inline-row" style="margin-top:4px">
              <input type="number" min="0.2" max="300" step="0.1" value="${xt(e.bodyHeight,2)}" data-body-height-number />
              <span class="muted">m</span>
              <span class="small-note" data-body-height-label>\u5F53\u524D ${xt(e.height,2)} m</span>
            </div>
          </div></div>
          <div class="btn-grid" style="margin:5px 0 9px">
            ${[1.75,10,50,100].map(r=>`<button class="action-btn small" data-body-height-preset="${r}">${r===1.75?"\u5E38\u4EBA 1.75m":r+"m"}</button>`).join("")}
          </div>
          <div class="field"><label>\u4EBA\u5076\u5927\u5C0F</label><div class="field-body">
            <input type="range" min="0.2" max="10" step="0.05" value="${xt(e.bodyScale,2)}" data-body-scale-slider />
            <div class="inline-row" style="margin-top:4px">
              <input type="number" min="0.2" max="10" step="0.05" value="${xt(e.bodyScale,2)}" data-body-scale-number />
              <span class="muted">\u500D\uFF08\u6A2A\u5411\u4F53\u578B\uFF09</span>
            </div>
          </div></div>
          <div class="field"><label>\u56DB\u80A2\u957F\u5EA6</label><div class="field-body">
            <input type="range" min="0.2" max="10" step="0.05" value="${xt(e.limbScale,2)}" data-body-limb-slider />
            <div class="inline-row" style="margin-top:4px">
              <input type="number" min="0.2" max="10" step="0.05" value="${xt(e.limbScale,2)}" data-body-limb-number />
              <span class="muted">\u500D\uFF08\u624B\u81C2 + \u817F\uFF09</span>
            </div>
          </div></div>
          <div class="small-note">\u8EAB\u9AD8\u8303\u56F4 0.2\u2013300m\uFF0C\u53EF\u505A\u201C\u548C\u5927\u697C\u4E00\u6837\u9AD8\u201D\u7684\u4EBA\uFF1B\u4EBA\u5076\u5927\u5C0F\u548C\u56DB\u80A2\u957F\u5EA6\u8303\u56F4 0.2\u201310\xD7\u3002\u6539\u8EAB\u9AD8\u4F1A\u540C\u6B65\u7F29\u653E\u5730\u9762\u3001\u7F51\u683C\u3001\u955C\u5934\u8FDC\u88C1\u526A\u548C\u9634\u5F71\u89C6\u9525\uFF1B\u6539\u4F53\u578B/\u56DB\u80A2\u4F1A\u91CD\u5EFA\u4EBA\u5076\u9AA8\u67B6\uFF0C\u4F46\u4FDD\u7559\u5F53\u524D\u59FF\u52BF\u3002</div>
        </div>`:""}
        <div class="section">
          <div class="section-title"><span>\u53D8\u6362</span></div>
          ${this.transformHTML("position","\u4F4D\u7F6E",e.root.position)}
          ${this.transformHTML("rotation","\u65CB\u8F6C\xB0",e.root.rotation,Me.radToDeg)}
          ${this.transformHTML("scale","\u7F29\u653E",e.root.scale)}
          <div class="btn-grid" style="margin-top:7px">
            <button class="action-btn" data-action="face-camera">\u9762\u5411\u955C\u5934</button>
            <button class="action-btn" data-action="drop">\u843D\u5230\u5730\u9762</button>
          </div>
        </div>
        <div class="section">
          <div class="section-title"><span>\u59FF\u52BF</span></div>
          ${n?`<div class="kv"><span>\u5F53\u524D\u5173\u8282</span><b>${Ve(n.name)}</b></div>`:'<div class="help-text">\u6309 <span class="kbd">P</span> \u6216\u70B9\u300C\u6446\u59FF\u52BF\u300D\uFF0C\u518D\u70B9\u5173\u8282\u7403\u3002</div>'}
          <div class="btn-grid">
            <button class="action-btn" data-action="duplicate">\u590D\u5236\u89D2\u8272</button>
            <button class="action-btn danger" data-action="delete">\u5220\u9664\u89D2\u8272</button>
          </div>
          ${i}
        </div>`;return}let t=e;this.inspectorEl.innerHTML=`
      <div class="section">
        <div class="section-title"><span>${Ve(t.name)}</span><span class="badge glb">${t.kind==="primitive"?"\u51E0\u4F55\u4F53":"\u6A21\u578B"}</span></div>
        <div class="field"><label>\u540D\u79F0</label><div class="field-body"><input type="text" value="${Ve(t.name)}" data-entity-name /></div></div>
        <div class="field"><label>\u989C\u8272</label><div class="field-body inline-row">
          <input type="color" value="${t.color||"#8a8f98"}" data-prop-color />
          <span class="small-note">\u5F69\u8272\u767D\u6A21\u4F7F\u7528\uFF1B\u539F\u6750\u8D28\u4E0D\u53D7\u5F71\u54CD</span>
        </div></div>
      </div>
      <div class="section">
        <div class="section-title"><span>\u53D8\u6362</span></div>
        ${this.transformHTML("position","\u4F4D\u7F6E",t.group.position)}
        ${this.transformHTML("rotation","\u65CB\u8F6C\xB0",t.group.rotation,Me.radToDeg)}
        ${this.transformHTML("scale","\u7F29\u653E",t.group.scale)}
        <div class="btn-grid" style="margin-top:7px">
          <button class="action-btn" data-action="drop">\u843D\u5230\u5730\u9762</button>
          <button class="action-btn" data-action="duplicate">\u590D\u5236\u9053\u5177</button>
        </div>
      </div>
      <div class="section">
        <button class="action-btn danger" data-action="delete" style="width:100%">\u5220\u9664\u9053\u5177</button>
      </div>`}transformHTML(e,t,n,i=r=>r){return`<div class="field"><label>${t}</label><div class="field-body">
      <div class="num-grid">${["x","y","z"].map(o=>`<div class="num-field"><span>${o.toUpperCase()}</span><input type="number" step="${e==="rotation"?1:.01}" value="${xt(i(n[o]),e==="rotation"?1:2)}" data-transform="${e}.${o}" /></div>`).join("")}</div></div></div>`}syncInspectorValues(){let e=this.getEntity(this.selectedId);if(!e)return;let t=e.type==="character"?e.root:e.group;for(let n of["position","rotation","scale"])for(let i of["x","y","z"]){let r=this.inspectorEl.querySelector(`[data-transform="${n}.${i}"]`);if(!r||document.activeElement===r)continue;let o=t[n][i];r.value=xt(n==="rotation"?Me.radToDeg(o):o,n==="rotation"?1:2)}if(e.type==="character"&&e.kind==="builtin"){let n=(r,o,a=l=>l)=>{let l=this.inspectorEl.querySelector(r);!l||document.activeElement===l||(l.value=a(o))};n("[data-body-height-slider]",hm(e.bodyHeight),r=>String(r)),n("[data-body-height-number]",e.bodyHeight,r=>xt(r,2)),n("[data-body-scale-slider]",e.bodyScale,r=>xt(r,2)),n("[data-body-scale-number]",e.bodyScale,r=>xt(r,2)),n("[data-body-limb-slider]",e.limbScale,r=>xt(r,2)),n("[data-body-limb-number]",e.limbScale,r=>xt(r,2));let i=this.inspectorEl.querySelector("[data-body-height-label]");i&&(i.textContent=`\u5F53\u524D ${xt(e.height,2)} m`)}if(e.type==="character"&&this.selectedJoint){let n=this.selectedJoint.userData.bone,i=new yt().setFromQuaternion(n.quaternion,"XYZ");for(let r of["x","y","z"]){let o=this.tabContent.querySelector(`[data-bone-axis="${r}"]`);if(!o)continue;let a=Math.round(Me.radToDeg(i[r]));document.activeElement!==o&&(o.value=a);let l=o.parentElement?.querySelector("output");l&&(l.textContent=`${a}\xB0`)}}}updateOutputSummary(){let e=this.state.output,t=Rd.find(r=>r.key===this.state.render.style),n=Pd.find(r=>r.key===(this.state.render.characterMode||"stick")),i=this.state.references;this.outputSummaryEl.innerHTML=`
      <div class="output-line"><span>\u753B\u5E45</span><b>${e.width} \xD7 ${e.height} \xB7 ${e.aspect}</b></div>
      <div class="output-line"><span>\u622A\u56FE\u98CE\u683C</span><b>${Ve(t?.label||"\u767D\u6A21")}</b></div>
      <div class="output-line"><span>\u4EBA\u7269\u63A7\u5236\u56FE</span><b>${Ve(n?.label||"\u706B\u67F4\u4EBA")}</b></div>
      <div class="output-line"><span>\u89D2\u8272 / \u9053\u5177</span><b>${this.characters.length} / ${this.props.length}</b></div>
      <div class="output-line"><span>\u53C2\u8003\u56FE</span><b>${i.character.length} / ${i.style.length}</b></div>
      <div class="output-line"><span>\u63A7\u5236\u56FE</span><b class="capture-badge ${this.state.capture.token&&!this.changedSinceCapture?"ok":"stale"}"><i class="dot"></i>${this.state.capture.token&&!this.changedSinceCapture?"\u5DF2\u5E94\u7528":"\u5F85\u5E94\u7528"}</b></div>
      <div class="small-note" style="margin-top:6px">\u8F93\u51FA\u5230\u8282\u70B9\uFF1A\u573A\u666F\u3001\u6DF1\u5EA6\u3001\u59FF\u52BF\u3001\u533A\u57DF\u8272\u5757\u3001\u4EBA\u7269/\u9053\u5177\u906E\u7F69\u3001\u53C2\u8003\u56FE\u3002</div>`,this.outputPill.textContent=`${e.width} \xD7 ${e.height} \xB7 ${e.aspect}`}updateCaptureState(){!!this.state.capture.token?this.changedSinceCapture?(this.captureStateEl.textContent="\u573A\u666F\u5DF2\u4FEE\u6539 \xB7 \u9700\u91CD\u65B0\u5E94\u7528",this.captureStateEl.className="capture-state stale"):(this.captureStateEl.textContent=`\u5DF2\u5E94\u7528 \xB7 ${cm(this.state.capture.updated||Date.now())}`,this.captureStateEl.className="capture-state ok"):(this.captureStateEl.textContent="\u5C1A\u672A\u5E94\u7528",this.captureStateEl.className="capture-state stale")}updateModeButtons(){let e=this.poseMode?"pose":this.mode;document.querySelectorAll(".mode-btn").forEach(r=>{r.classList.toggle("active",r.dataset.mode===e)});let t=document.getElementById("toggle-grid"),n=document.getElementById("toggle-snap"),i=document.getElementById("toggle-camera");t&&(t.checked=!!this.state.scene.grid),n&&(n.checked=!!this.state.scene.snap),i&&(i.checked=!!this.viewport.shotView),this.viewPill.textContent=this.viewport.shotView?"\u955C\u5934\u89C6\u56FE":"\u81EA\u7531\u89C6\u56FE",this.shotHint.classList.toggle("hidden",!this.viewport.shotView),this.viewport.setGridVisible(!!this.state.scene.grid),this.viewport.setGroundVisible(!!this.state.scene.ground)}updateEmptyHint(){this.emptyHint.classList.toggle("hidden",this.characters.length+this.props.length>0)}renderStatus(e){this.statusEl.textContent=e}setStatus(e){this.renderStatus(e)}markDirty(e=!0){if(!this._restoring){this.changedSinceCapture=!0,this.saveStateEl.textContent="\u672A\u4FDD\u5B58",this.viewport.invalidate(e);for(let t of this.characters)t.invalidateBounds?.();for(let t of this.props)t.invalidateBounds?.();this._dirtyRaf||(this._dirtyRaf=requestAnimationFrame(()=>{this._dirtyRaf=null,this.updateCaptureState(),this.updateOutputSummary()})),this.scheduleAutosave()}}scheduleAutosave(){clearTimeout(this._autosaveTimer),this._autosaveTimer=setTimeout(()=>this.saveAutosave(),900)}saveAutosave(){if(!this._restoring)try{let e=this.serializeScene();localStorage.setItem(lm,JSON.stringify(e)),this._lastAutosave=Date.now(),this.saveStateEl.textContent=`\u5DF2\u81EA\u52A8\u4FDD\u5B58 ${cm(this._lastAutosave)}`}catch(e){console.warn("[3D Editor] \u81EA\u52A8\u4FDD\u5B58\u5931\u8D25",e),this.saveStateEl.textContent="\u81EA\u52A8\u4FDD\u5B58\u5931\u8D25"}}serializeScene(){let e=this.viewport.getShotState();return{version:1,meta:{name:this.state.meta.name||"\u672A\u547D\u540D\u573A\u666F",app:"3d-scene-pose-editor",savedAt:Date.now()},scene:{...this.state.scene},camera:e,output:{...this.state.output},render:{...this.state.render},characters:this.characters.map(t=>t.serialize()),props:this.props.map(t=>t.serialize()),references:{character:(this.state.references.character||[]).map(t=>({...t})),style:(this.state.references.style||[]).map(t=>({...t}))},prompt:this.state.prompt,negativePrompt:this.state.negativePrompt,capture:{token:this.state.capture.token||null,updated:this.state.capture.updated||null},settings:{...this.state.settings}}}async loadSceneData(e,{quiet:t=!1}={}){if(!e||typeof e!="object")throw new Error("\u573A\u666F\u6570\u636E\u683C\u5F0F\u4E0D\u6B63\u786E");let n=qr();this._restoring=!0,t||this.showLoading("\u6B63\u5728\u6062\u590D\u573A\u666F\u2026",4);try{this.viewport.setShotView(!1),this.viewport.transform.detach(),this.clearEntities(),this.state={...n,meta:{...n.meta,...e.meta||{}},scene:{...n.scene,...e.scene||{}},camera:{...n.camera,...e.camera||{}},output:{...n.output,...e.output||{}},render:{...n.render,...e.render||{}},references:{character:Array.isArray(e.references?.character)?e.references.character:[],style:Array.isArray(e.references?.style)?e.references.style:[]},prompt:typeof e.prompt=="string"?e.prompt:n.prompt,negativePrompt:typeof e.negativePrompt=="string"?e.negativePrompt:n.negativePrompt,capture:{token:e.capture?.token||null,updated:e.capture?.updated||null},settings:{...n.settings,...e.settings||{}}},this.sceneNameEl.value=this.state.meta.name,this.viewport.setBackground(this.state.scene.background),this.viewport.setGroundColor(this.state.scene.groundColor),this.viewport.setGridVisible(this.state.scene.grid),this.viewport.setGroundVisible(this.state.scene.ground),this.viewport.applyQuality(this.state.render.quality||"balanced",{silent:!0}),this.viewport.transform.setTranslationSnap(this.state.scene.snap||null),this.viewport.transform.setRotationSnap(this.state.scene.snap?Me.degToRad(5):null),this.viewport.setShotState(this.state.camera);let i=Array.isArray(e.characters)?e.characters:[];for(let o=0;o<i.length;o+=1){let a=i[o];if(a){try{let l;a.kind==="builtin"||!a.asset?l=await Vn.createBuiltin(this,{id:a.id,name:a.name||"\u5185\u7F6E\u4EBA\u5076",transform:a.transform,visible:a.visible!==!1,body:a.body}):l=await Vn.createFromAsset(this,a.asset,{id:a.id,name:a.name||a.asset.name||"\u89D2\u8272",transform:a.transform,visible:a.visible!==!1,mapping:a.mapping}),a.pose&&l.applyPose(a.pose),this.characters.push(l)}catch(l){console.error("[3D Editor] \u89D2\u8272\u52A0\u8F7D\u5931\u8D25",a,l),this.toast(`\u89D2\u8272\u300C${a.name||"\u672A\u547D\u540D"}\u300D\u52A0\u8F7D\u5931\u8D25\uFF1A${l.message}`,"error")}t||this.setLoadingProgress(10+(o+1)/Math.max(1,i.length)*45)}}let r=Array.isArray(e.props)?e.props:[];for(let o=0;o<r.length;o+=1){let a=r[o];if(a){try{let l;a.isScene&&a.asset?l=await Ln.createFromAsset(this,a.asset,{id:a.id,name:a.name||"\u573A\u666F\u767D\u6A21",isScene:!0,normalize:!1,color:a.color,transform:a.transform,visible:a.visible!==!1}):a.kind==="primitive"||!a.asset?l=new Ln(this,{id:a.id,name:a.name||"\u9053\u5177",kind:"primitive",shape:a.shape||"box",color:a.color,transform:a.transform,visible:a.visible!==!1}):l=await Ln.createFromAsset(this,a.asset,{id:a.id,name:a.name||a.asset.name||"\u9053\u5177",transform:a.transform,visible:a.visible!==!1}),this.props.push(l)}catch(l){console.error("[3D Editor] \u9053\u5177\u52A0\u8F7D\u5931\u8D25",a,l),this.toast(`\u9053\u5177\u300C${a.name||"\u672A\u547D\u540D"}\u300D\u52A0\u8F7D\u5931\u8D25\uFF1A${l.message}`,"error")}t||this.setLoadingProgress(55+(o+1)/Math.max(1,r.length)*40)}}this.selectedId=this.characters[0]?.id||this.props[0]?.id||null,this.selectedJoint=null,this.poseMode=!1,this.mode="select",this.changedSinceCapture=!1,this.toast("\u573A\u666F\u5DF2\u8F7D\u5165","good")}finally{this._restoring=!1,t||this.hideLoading(),this.attachSelected(),this.refreshAll()}}clearEntities(){for(let e of this.characters)e.dispose();for(let e of this.props)e.dispose();this.characters=[],this.props=[],this.selectedId=null,this.selectedJoint=null,this.viewport.transform.detach()}refreshAll(){this.adaptViewportToScene(),this.renderTab(),this.renderInspector(),this.updateOutputSummary(),this.updateCaptureState(),this.updateModeButtons(),this.updateEmptyHint(),this.viewport.invalidate(!0)}adaptViewportToScene(){let e=1.75;for(let t of this.characters||[])e=Math.max(e,Number(t.bodyHeight)||Number(t.height)||1.75);for(let t of this.props||[]){if(!t.isScene)continue;let n=t.getBounds();if(!n.isEmpty()){let i=n.getSize(new x);e=Math.max(e,i.x,i.y,i.z)}}this.viewport.adaptToSceneHeight(e)}getEntity(e){return this.characters.find(t=>t.id===e)||this.props.find(t=>t.id===e)||null}selectedCharacter(){return this.characters.find(e=>e.id===this.selectedId)||null}selectEntity(e){this.selectedId=e,this.selectedJoint=null,this.getEntity(e)?.type==="character"&&this.poseMode&&(this.selectedJoint=null),this.attachSelected(),this.showPreviewSelection(),this.renderTab(),this.renderInspector(),this.updateEmptyHint()}showPreviewSelection(){for(let e of this.characters)e.setSelectedRole(e.id===this.selectedId?e.selectedRole:null);this.viewport.invalidate()}selectJoint(e,t,n){this.selectedId=e.id,this.selectedJoint=n,this.poseMode=!0,this.mode="pose",this.attachSelected(),this.renderTab(),this.renderInspector(),this.updateModeButtons()}deselectJoint(){this.selectedJoint=null,this.viewport.transform.detach(),this.viewport.invalidate(),this.renderTab(),this.renderInspector()}setMode(e){if(e==="pose"){let t=this.selectedCharacter()||this.characters[0];if(!t){this.toast("\u5148\u6DFB\u52A0\u4E00\u4E2A\u89D2\u8272","warn");return}if(this.selectedId!==t.id&&(this.selectedId=t.id),this.poseMode=!0,this.mode="pose",!this.selectedJoint){let n=t.mapping.hips,i=t.handles.find(r=>r.userData.bone===n);i&&(this.selectedJoint=i)}this.attachSelected(),this.currentTab!=="pose"&&this.setTab("pose")}else this.poseMode=!1,this.mode=e,this.selectedJoint=null,this.attachSelected();this.updateModeButtons(),this.renderInspector(),this.renderTab()}attachSelected(){let e=this.viewport.transform;if(e.detach(),this.viewport.invalidate(),this.poseMode&&this.selectedJoint){e.setMode("rotate"),e.setSpace("local"),e.attach(this.selectedJoint.userData.bone);return}let t=this.getEntity(this.selectedId);if(!t)return;let n=t.type==="character"?t.root:t.group;if(this.mode==="move"||this.mode==="rotate"||this.mode==="scale"){let i=this.mode==="move"?"translate":this.mode;e.setMode(i),e.setSpace("world"),e.attach(n)}}beginTransform(){this.pushUndo()}endTransform(){this.markDirty(),this.syncInspectorValues()}onTransformChange(e){if(e?.isBone&&this.selectedJoint?.userData?.bone===e){this.markDirty(),this.syncInspectorValues();return}this.markDirty(),this.syncInspectorValues()}onCharacterPoseChanged(e){this._restoring||(this.markDirty(),e.id===this.selectedId&&this.syncInspectorValues())}onShotViewChanged(){this.updateModeButtons(),this.currentTab==="camera"&&this.renderTab()}applyPresetToCharacter(e,t,n=!0){e&&(e.applyPosePreset(t,{ground:this.state.settings.autoGround,record:n}),this.markDirty(),this.renderTab(),this.renderInspector())}async addBuiltin(){let e=await Vn.createBuiltin(this,{name:`\u5185\u7F6E\u4EBA\u5076 ${this.characters.length+1}`});e.root.position.x=this.characters.length*1.1,e.applyPosePreset(ai.aPose,{ground:!0,record:!1}),this.characters.push(e),this.selectedId=e.id,this.poseMode=!1,this.mode="select",this.attachSelected(),this.viewport.frameShot(e.getBounds()),this.markDirty(),this.refreshAll(),this.setStatus("\u5DF2\u6DFB\u52A0\u5185\u7F6E\u4EBA\u5076")}async importCharacter(e){this.showLoading("\u6B63\u5728\u4E0A\u4F20\u89D2\u8272\u6A21\u578B\u2026",2);try{let t=await ja(e,"character",i=>this.setLoadingProgress(2+i*35));this.loadingText.textContent="\u6B63\u5728\u89E3\u6790\u9AA8\u9ABC\u548C\u6750\u8D28\u2026";let n=await Vn.createFromAsset(this,t,{name:t.name,onProgress:i=>this.setLoadingProgress(40+i*45)});n.root.position.x=this.characters.length*1.1,n.applyPosePreset(ai.aPose,{ground:!0,record:!1}),this.characters.push(n),this.selectedId=n.id,this.poseMode=!1,this.mode="select",this.attachSelected(),this.viewport.frameShot(n.getBounds()),this.markDirty(),this.refreshAll(),this.setStatus(`${n.name} \u5DF2\u5BFC\u5165`),this.toast(n.loadError?n.loadError:`\u5DF2\u5BFC\u5165 ${n.name}\uFF08\u8BC6\u522B ${Object.keys(n.mapping).length} \u4E2A\u5173\u8282\uFF09`,n.loadError?"warn":"good")}catch(t){console.error(t),this.toast(`\u89D2\u8272\u5BFC\u5165\u5931\u8D25\uFF1A${t.message}`,"error")}finally{this.hideLoading()}}async importProp(e){this.showLoading("\u6B63\u5728\u4E0A\u4F20\u9053\u5177\u6A21\u578B\u2026",2);try{let t=await ja(e,"prop",i=>this.setLoadingProgress(2+i*45));this.loadingText.textContent="\u6B63\u5728\u89E3\u6790\u9053\u5177\u2026";let n=await Ln.createFromAsset(this,t,{name:t.name,onProgress:i=>this.setLoadingProgress(48+i*42)});n.group.position.x=this.props.length*.8,this.props.push(n),this.selectedId=n.id,this.poseMode=!1,this.mode="select",this.attachSelected(),this.markDirty(),this.refreshAll(),this.setStatus(`${n.name} \u5DF2\u5BFC\u5165`),this.toast(`\u5DF2\u5BFC\u5165\u9053\u5177 ${n.name}`,"good")}catch(t){console.error(t),this.toast(`\u9053\u5177\u5BFC\u5165\u5931\u8D25\uFF1A${t.message}`,"error")}finally{this.hideLoading()}}async importSceneModel(e){this.showLoading("\u6B63\u5728\u4E0A\u4F20\u573A\u666F\u767D\u6A21\u2026",2);try{let t=await ja(e,"scene",i=>this.setLoadingProgress(2+i*45));this.loadingText.textContent="\u6B63\u5728\u89E3\u6790\u573A\u666F\u767D\u6A21\u2026";let n=await Ln.createFromAsset(this,t,{name:`\u573A\u666F\u767D\u6A21 \xB7 ${t.name}`,isScene:!0,normalize:!1,color:"#b9b6ae",onProgress:i=>this.setLoadingProgress(48+i*42)});this.props.push(n),this.selectedId=n.id,this.poseMode=!1,this.mode="select",this.attachSelected(),this.markDirty(),this.refreshAll(),this.frameAll(),this.setStatus(`${n.name} \u5DF2\u5BFC\u5165`),this.toast("\u573A\u666F\u767D\u6A21\u5DF2\u5BFC\u5165\uFF1Aimage1 \u4F1A\u5E26\u4E0A\u5B83\uFF0C\u6700\u7EC8\u573A\u666F\u7531 image3 \u573A\u666F\u53C2\u8003\u751F\u6210","good")}catch(t){console.error(t),this.toast(`\u573A\u666F\u767D\u6A21\u5BFC\u5165\u5931\u8D25\uFF1A${t.message}`,"error")}finally{this.hideLoading()}}addPrimitive(e){let t=Ln.createPrimitive(this,e,{name:`${Ya.find(n=>n.key===e)?.label||"\u9053\u5177"} ${this.props.length+1}`});t.group.position.x=this.props.length*.55,this.props.push(t),this.selectedId=t.id,this.poseMode=!1,this.mode="move",this.attachSelected(),this.markDirty(),this.refreshAll(),this.setStatus(`\u5DF2\u6DFB\u52A0${Ya.find(n=>n.key===e)?.label||"\u9053\u5177"}`)}async duplicateSelected(){let e=this.getEntity(this.selectedId);if(e){if(e.type==="character"){let t;e.kind==="builtin"?t=await Vn.createBuiltin(this,{name:`${e.name} \u526F\u672C`,body:{height:e.bodyHeight,bodyScale:e.bodyScale,limbScale:e.limbScale}}):t=await Vn.createFromAsset(this,e.asset,{name:`${e.name} \u526F\u672C`,mapping:e.mappingNames}),t.root.position.copy(e.root.position).add(new x(.6,0,.3)),t.root.rotation.copy(e.root.rotation),t.root.scale.copy(e.root.scale),t.applyPose(e.serializePose()),this.characters.push(t),this.selectedId=t.id}else{let t;e.kind==="primitive"?t=Ln.createPrimitive(this,e.shape,{name:`${e.name} \u526F\u672C`,color:e.color}):t=await Ln.createFromAsset(this,e.asset,{name:`${e.name} \u526F\u672C`,isScene:e.isScene,normalize:e.isScene?!1:void 0,color:e.color}),t.group.position.copy(e.group.position).add(new x(.4,0,.4)),t.group.rotation.copy(e.group.rotation),t.group.scale.copy(e.group.scale),this.props.push(t),this.selectedId=t.id}this.attachSelected(),this.markDirty(),this.refreshAll(),this.toast("\u5DF2\u590D\u5236","good")}}async deleteSelected(){let e=this.getEntity(this.selectedId);!e||!await this.confirm(`\u5220\u9664\u300C${e.name}\u300D\uFF1F`,"\u5220\u9664\u5BF9\u8C61")||(e.type==="character"?this.characters=this.characters.filter(n=>n!==e):this.props=this.props.filter(n=>n!==e),e.dispose(),this.selectedId=this.characters[0]?.id||this.props[0]?.id||null,this.selectedJoint=null,this.viewport.transform.detach(),this.markDirty(),this.refreshAll(),this.toast("\u5DF2\u5220\u9664","good"))}faceCamera(){let e=this.getEntity(this.selectedId);if(!e||e.type!=="character")return;let t=this.viewport.shotCamera,n=t.position.x-e.root.position.x,i=t.position.z-e.root.position.z;e.root.rotation.y=Math.atan2(n,i),this.markDirty(),this.syncInspectorValues()}dropSelected(){let e=this.getEntity(this.selectedId);if(!e)return;let t=e.getBounds();if(!t.isEmpty()){let n=.01-t.min.y;e.type==="character"?e.root.position.y+=n:e.group.position.y+=n}this.markDirty(),this.syncInspectorValues()}resetCamera(){this.viewport.setShotState(qr().camera),this.state.camera=qr().camera,this.viewport.frameShot(new at().setFromObject(this.viewport.world)),this.markDirty(),this.renderTab()}frameSelection(){let t=this.getEntity(this.selectedId)?.getBounds?.()||new at().setFromObject(this.viewport.world);this.viewport.frameShot(t),this.viewport.shotView||this.viewport.focusOn(t),this.markDirty(),this.renderTab()}frameAll(){let e=new at;for(let t of this.characters)e.union(t.getBounds());for(let t of this.props)e.union(t.getBounds());e.isEmpty()&&e.setFromCenterAndSize(new x(0,1,0),new x(4,3,4)),this.viewport.frameShot(e),this.viewport.shotView||this.viewport.focusOn(e),this.markDirty(),this.renderTab()}applyCameraPreset(e){let t=Ad.find(r=>r.key===e);if(!t)return;let i=this.getEntity(this.selectedId)?.getBounds?.()||new at().setFromObject(this.viewport.world);this.viewport.applyCameraPreset(t,i),this.markDirty(),this.renderTab()}updateShotCamera(e){Number.isFinite(e.fov)&&(this.viewport.shotCamera.fov=e.fov),Number.isFinite(e.roll)&&(this.viewport.shotRoll=Me.degToRad(e.roll)),this.viewport.shotCamera.updateProjectionMatrix(),this.viewport.applyShotCamera(),this.markDirty(),this.renderTab()}setOutput(e,t,n=null){let i=Math.max(128,Math.min(3072,Math.round(Number(e)/8)*8||960)),r=Math.max(128,Math.min(3072,Math.round(Number(t)/8)*8||1280));this.state.output.width=i,this.state.output.height=r,this.state.output.aspect=n||this.findAspect(i,r)||`${i}:${r}`,this.viewport.shotCamera.aspect=i/r,this.viewport.shotCamera.updateProjectionMatrix(),this.viewport.resize(),this.markDirty(),this.updateOutputSummary(),this.renderTab()}findAspect(e,t){let n=e/t;return Wr.find(r=>Math.abs(r.width/r.height-n)<.02)?.key||null}setAspect(e){let t=JE(e);this.setOutput(t.width,t.height,t.key)}async uploadRefs(e,t){let n=[...t].filter(i=>i.type.startsWith("image/")||/\.(png|jpe?g|webp)$/i.test(i.name));if(!n.length){this.toast("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6","warn");return}this.showLoading("\u6B63\u5728\u4E0A\u4F20\u53C2\u8003\u56FE\u2026",10);try{let i=this.state.references[e]||[];for(let r=0;r<n.length;r+=1){let o=n[r],a=await wd(o,"character_ref",l=>this.setLoadingProgress(10+(r+l)/n.length*85));i.push({url:a.url,name:o.name,primary:i.length===0}),this.state.references[e]=i}this.markDirty(),this.renderTab(),this.toast(`\u5DF2\u6DFB\u52A0 ${n.length} \u5F20\u53C2\u8003\u56FE`,"good")}catch(i){console.error(i),this.toast(`\u53C2\u8003\u56FE\u4E0A\u4F20\u5931\u8D25\uFF1A${i.message}`,"error")}finally{this.hideLoading()}}setPrimaryRef(e,t){(this.state.references[e]||[]).forEach((i,r)=>{i.primary=r===t}),this.markDirty(),this.renderTab()}deleteRef(e,t){let n=this.state.references[e]||[];n.splice(t,1),n.length&&!n.some(i=>i.primary)&&(n[0].primary=!0),this.state.references[e]=n,this.markDirty(),this.renderTab()}onTabClick(e){let t=e.target.closest("[data-action]");if(!t)return;let n=t.dataset.action;if(n==="select")this.selectEntity(t.dataset.id);else if(n==="toggle-visible"){let i=this.getEntity(t.dataset.id);i&&(i.setVisible(!i.visible),this.markDirty(),this.renderTab())}else if(n==="add-builtin")this.addBuiltin();else if(n==="import-character")document.getElementById("file-character").click();else if(n==="import-prop")document.getElementById("file-prop").click();else if(n==="import-scene-model")document.getElementById("file-scene-model").click();else if(n==="add-primitive")this.addPrimitive(t.dataset.shape);else if(n==="duplicate")this.duplicateSelected();else if(n==="delete")this.deleteSelected();else if(n==="face-camera")this.faceCamera();else if(n==="drop")this.dropSelected();else if(n==="apply-preset"){let i=this.selectedCharacter();i&&this.applyPresetToCharacter(i,t.dataset.preset)}else if(n==="pose-to-all"){let i=this.selectedCharacter();if(!i)return;let r=i.serializePose();for(let o of this.characters)o!==i&&o.applyPose(r);this.markDirty(),this.renderTab(),this.toast("\u5DF2\u628A\u5F53\u524D\u59FF\u52BF\u5E94\u7528\u5230\u6240\u6709\u89D2\u8272","good")}else if(n==="reset-pose"){let i=this.selectedCharacter();i&&(i.resetPose({record:!0}),this.markDirty(),this.renderTab(),this.renderInspector())}else if(n==="copy-pose"){let i=this.selectedCharacter();i&&(this.poseClipboard=i.serializePose(),this.toast("\u59FF\u52BF\u5DF2\u590D\u5236","good"))}else if(n==="paste-pose"){let i=this.selectedCharacter();i&&this.poseClipboard&&(this.pushUndo(),i.applyPose(this.poseClipboard),this.markDirty(),this.renderTab(),this.renderInspector(),this.toast("\u59FF\u52BF\u5DF2\u7C98\u8D34","good"))}else if(n==="select-bone"){let i=this.selectedCharacter();if(i){let r=i.handles.find(o=>o.userData.role===t.dataset.role);r&&this.selectJoint(i,t.dataset.role,r)}}else if(n==="reset-bone"){let i=this.selectedCharacter(),r=this.selectedJoint?.userData?.bone;if(i&&r){this.pushUndo();let o=i.rest.get(r);o&&r.quaternion.copy(o.quaternion),i.model?.updateMatrixWorld(!0),i.vrm?.update(0),this.markDirty(),this.renderTab(),this.renderInspector()}}else n==="deselect-bone"?this.deselectJoint():n==="camera-view"?this.viewport.setShotView(!this.viewport.shotView):n==="frame-selection"?this.frameSelection():n==="camera-to-all"?this.frameAll():n==="reset-camera"?this.resetCamera():n==="camera-preset"?this.applyCameraPreset(t.dataset.preset):n==="output-preset"?this.setAspect(t.dataset.preset):n==="upload-ref"?document.getElementById(`file-ref-${t.dataset.group}`).click():n==="set-primary-ref"?this.setPrimaryRef(t.dataset.group,Number(t.dataset.index)):n==="delete-ref"?(e.stopPropagation(),this.deleteRef(t.dataset.group,Number(t.dataset.index))):n==="prompt-template"?(this.state.prompt=Id,this.markDirty(!1),this.renderTab()):n==="save-library"?this.saveToLibrary():n==="open-library"?this.openLibrary():n==="export-scene"?this.exportScene():n==="import-scene"?document.getElementById("file-scene-import").click():n==="new-scene"&&this.createDefaultScene(!0)}onTabChange(e){let t=e.target;if(t.id==="auto-ground")this.state.settings.autoGround=t.checked,this.markDirty();else if(t.dataset.camera==="fov")this.updateShotCamera({fov:Number(t.value)});else if(t.dataset.camera==="roll")this.updateShotCamera({roll:Number(t.value)});else if(t.dataset.output)this.setOutput(t.dataset.output==="width"?Number(t.value):this.state.output.width,t.dataset.output==="height"?Number(t.value):this.state.output.height);else if(t.dataset.scene){let n=t.dataset.scene;n==="grid"||n==="ground"?(this.state.scene[n]=t.checked,n==="grid"&&this.viewport.setGridVisible(t.checked),n==="ground"&&this.viewport.setGroundVisible(t.checked)):n==="snap"?(this.state.scene.snap=Number(t.value),this.viewport.transform.setTranslationSnap(this.state.scene.snap||null),this.viewport.transform.setRotationSnap(this.state.scene.snap?Me.degToRad(5):null)):(this.state.scene[n]=t.value,n==="background"&&this.viewport.setBackground(t.value),n==="groundColor"&&this.viewport.setGroundColor(t.value)),this.markDirty()}else if(t.dataset.render){let n=t.dataset.render;n==="shadows"?(this.state.render.shadows=t.checked,this.viewport.applyQuality(this.state.render.quality||"balanced",{silent:!0}),this.viewport.invalidate(!0)):n==="quality"?(this.state.render.quality=t.value,this.viewport.applyQuality(t.value)):(this.state.render[n]=t.value,n==="characterMode"&&this.toast(t.value==="stick"?"\u622A\u56FE\u5C06\u4F7F\u7528\u706B\u67F4\u4EBA\uFF1A\u53EA\u4FDD\u7559\u59FF\u52BF\uFF0C\u4E0D\u8F93\u51FA 3D \u4EBA\u5076\u7684\u8EAB\u6750\u6BD4\u4F8B":"\u622A\u56FE\u5C06\u4F7F\u7528\u4EBA\u5076\u8EAB\u4F53\uFF1A\u8EAB\u6750\u8F6E\u5ED3\u4F1A\u8FDB\u5165\u53C2\u8003\u56FE","good")),this.markDirty(!1),this.updateOutputSummary(),this.renderTab()}else t.dataset.text&&(this.state[t.dataset.text==="prompt"?"prompt":"negativePrompt"]=t.value,this.markDirty(!1))}onTabInput(e){let t=e.target;if(t.dataset.camera==="fov"||t.dataset.camera==="roll"){let n=t.parentElement?.querySelector(".mono");n&&(n.textContent=`${Math.round(Number(t.value))}\xB0`)}else if(t.dataset.boneAxis){let n=this.selectedJoint?.userData?.bone;if(!n)return;let i=t.dataset.boneAxis,r=new yt().setFromQuaternion(n.quaternion,"XYZ");r[i]=Me.degToRad(Number(t.value)),n.quaternion.setFromEuler(r);let o=this.selectedCharacter();o?.model?.updateMatrixWorld(!0),o?.vrm?.update(0);let a=t.parentElement?.querySelector("output");a&&(a.textContent=`${Math.round(Number(t.value))}\xB0`),this.markDirty()}else t.dataset.text?(this.state[t.dataset.text==="prompt"?"prompt":"negativePrompt"]=t.value,this.markDirty(!1)):t.dataset.output}onTabPointerDown(e){e.target.dataset?.boneAxis&&this.pushUndo()}onInspectorClick(e){let t=e.target.closest("[data-action]");if(t){let i=t.dataset.action;i==="duplicate"?this.duplicateSelected():i==="delete"?this.deleteSelected():i==="face-camera"?this.faceCamera():i==="drop"&&this.dropSelected();return}let n=e.target.closest("[data-body-height-preset]");if(n){let i=this.selectedCharacter();i?.kind==="builtin"&&(this.pushUndo(),i.setBodyHeight(Number(n.dataset.bodyHeightPreset)),this.markDirty(),this.renderInspector(),this.updateOutputSummary(),this.toast(`\u4EBA\u5076\u8EAB\u9AD8\u8BBE\u4E3A ${xt(i.bodyHeight,1)} m`,"good"))}}onInspectorChange(e){let t=e.target,n=this.getEntity(this.selectedId);if(n){if(t.dataset.entityName!==void 0)this.pushUndo(),n.name=t.value.trim()||"\u672A\u547D\u540D",n.root?n.root.name=n.name:n.group.name=n.name,this.markDirty(),this.renderTab(),this.renderInspector();else if(t.dataset.transform){let[i,r]=t.dataset.transform.split("."),o=n.type==="character"?n.root:n.group,a=Number(t.value);if(!Number.isFinite(a))return;i==="rotation"&&(a=Me.degToRad(a)),i==="scale"&&(a=Math.max(.001,a)),this.pushUndo(),o[i][r]=a,this.markDirty(),this.syncInspectorValues()}else if(t.dataset.propColor)n.type==="prop"&&(this.pushUndo(),n.setColor(t.value),this.markDirty());else if(t.dataset.mappingRole)n.type==="character"&&(this.pushUndo(),n.setMapping(t.dataset.mappingRole,t.value),this.markDirty(),this.renderTab(),this.renderInspector());else if(n.type==="character"&&n.kind==="builtin"){if(t.dataset.bodyHeightNumber!==void 0)n.setBodyHeight(Number(t.value)),this.markDirty(),this.renderInspector(),this.updateOutputSummary();else if(t.dataset.bodyScaleNumber!==void 0||t.dataset.bodyScaleSlider!==void 0){let i=t.dataset.bodyScaleNumber!==void 0?Number(t.value):Number(t.parentElement.querySelector("[data-body-scale-number]")?.value||n.bodyScale);n.setBodyShape({bodyScale:i}),this.markDirty(),this.renderInspector(),this.updateOutputSummary()}else if(t.dataset.bodyLimbNumber!==void 0||t.dataset.bodyLimbSlider!==void 0){let i=t.dataset.bodyLimbNumber!==void 0?Number(t.value):Number(t.parentElement.querySelector("[data-body-limb-number]")?.value||n.limbScale);n.setBodyShape({limbScale:i}),this.markDirty(),this.renderInspector(),this.updateOutputSummary()}}}}onInspectorInput(e){let t=e.target,n=this.getEntity(this.selectedId);if(n){if(t.dataset.propColor&&n.type==="prop"){n.setColor(t.value),this.markDirty();return}if(!(n.type!=="character"||n.kind!=="builtin")){if(t.dataset.bodyHeightSlider!==void 0){let i=QE(t.value),r=t.parentElement?.querySelector("[data-body-height-number]");r&&(r.value=xt(i,2));let o=t.parentElement?.querySelector("[data-body-height-label]");o&&(o.textContent=`\u5F53\u524D ${xt(i,2)} m`),n.setBodyHeight(i),this.markDirty(),this.updateOutputSummary()}else if(t.dataset.bodyScaleSlider!==void 0){let i=t.parentElement?.querySelector("[data-body-scale-number]");i&&(i.value=xt(t.value,2))}else if(t.dataset.bodyLimbSlider!==void 0){let i=t.parentElement?.querySelector("[data-body-limb-number]");i&&(i.value=xt(t.value,2))}}}}onInspectorPointerDown(e){(e.target.dataset?.transform||e.target.dataset?.entityName!==void 0||e.target.dataset?.bodyHeightSlider!==void 0||e.target.dataset?.bodyHeightNumber!==void 0||e.target.dataset?.bodyScaleSlider!==void 0||e.target.dataset?.bodyScaleNumber!==void 0||e.target.dataset?.bodyLimbSlider!==void 0||e.target.dataset?.bodyLimbNumber!==void 0)&&this.pushUndo()}pushUndo(){if(!this._restoring)try{let e=JSON.stringify(this.serializeScene());if(this.undoStack[this.undoStack.length-1]===e)return;this.undoStack.push(e),this.undoStack.length>40&&this.undoStack.shift(),this.redoStack=[],this.updateUndoButtons()}catch(e){console.warn("[3D Editor] \u64A4\u9500\u5FEB\u7167\u5931\u8D25",e)}}updateUndoButtons(){let e=document.getElementById("btn-undo"),t=document.getElementById("btn-redo");e&&(e.disabled=this.undoStack.length===0),t&&(t.disabled=this.redoStack.length===0)}async undo(){if(!this.undoStack.length)return;this.redoStack.push(JSON.stringify(this.serializeScene()));let e=this.undoStack.pop();this.updateUndoButtons();try{await this.loadSceneData(JSON.parse(e),{quiet:!0}),this.toast("\u5DF2\u64A4\u9500","good")}catch(t){this.toast(`\u64A4\u9500\u5931\u8D25\uFF1A${t.message}`,"error")}}async redo(){if(!this.redoStack.length)return;this.undoStack.push(JSON.stringify(this.serializeScene()));let e=this.redoStack.pop();this.updateUndoButtons();try{await this.loadSceneData(JSON.parse(e),{quiet:!0}),this.toast("\u5DF2\u91CD\u505A","good")}catch(t){this.toast(`\u91CD\u505A\u5931\u8D25\uFF1A${t.message}`,"error")}}async applyToNode(){if(this._applying)return;if(!this.characters.length&&!this.props.length){this.toast("\u573A\u666F\u662F\u7A7A\u7684\uFF0C\u5148\u6DFB\u52A0\u89D2\u8272\u6216\u9053\u5177","warn");return}if(!(this.state.references.style||[]).length){this.toast("\u8BF7\u5148\u5728\u300C\u53C2\u8003\u300D\u4E0A\u4F20\u573A\u666F\u53C2\u8003\u56FE\uFF08image3\uFF09\uFF1A\u6700\u7EC8\u573A\u666F\u7531\u5B83\u751F\u6210\uFF0C\u767D\u6A21\u53EA\u63D0\u4F9B\u7ED3\u6784\u3002","error"),this.setTab("refs");return}this._applying=!0;let e=document.getElementById("btn-apply");e.disabled=!0;let t={...this.state.capture},n=ZE("cap");this.state.capture={token:n,updated:Date.now()},this.changedSinceCapture=!1,this.showLoading("\u6B63\u5728\u6E32\u67D3\u63A7\u5236\u56FE\u2026",8);try{this.loadingText.textContent="\u6B63\u5728\u6E32\u67D3\u573A\u666F / \u6DF1\u5EA6 / \u59FF\u52BF / \u906E\u7F69\u2026",this.setLoadingProgress(18);let i=await Cd(this);i.scene.capture={token:n,updated:Date.now()},this.setLoadingProgress(62),this.loadingText.textContent="\u6B63\u5728\u4E0A\u4F20\u63A7\u5236\u56FE\u5230 ComfyUI\u2026";let r=await fetch("/3d_editor/capture",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n,width:i.width,height:i.height,images:i.images,prompt:this.state.prompt,negative_prompt:this.state.negativePrompt,camera:i.camera,pose_json:i.poseJson,scene:i.scene,render_style:i.renderStyle})}),o=await r.json().catch(()=>({}));if(!r.ok||!o.ok)throw new Error(o.error||`\u4E0A\u4F20\u5931\u8D25 (HTTP ${r.status})`);this.setLoadingProgress(92),this.state.capture={token:n,updated:Date.now()},this.changedSinceCapture=!1,this.saveAutosave();let a={scene_data:JSON.stringify(i.scene),prompt:this.state.prompt,negative_prompt:this.state.negativePrompt,width:i.width,height:i.height,preview:i.images.scene,capture_token:n};this.postToParent("dsp-apply",a),this.refreshAll(),this.setStatus("\u63A7\u5236\u56FE\u5DF2\u4FDD\u5B58\uFF0C\u53EF\u4EE5\u56DE\u5230 ComfyUI \u8FD0\u884C\u5DE5\u4F5C\u6D41"),this.toast("\u5DF2\u5E94\u7528\u5230\u8282\u70B9\uFF1A\u573A\u666F\u622A\u56FE\u3001\u6DF1\u5EA6\u3001\u59FF\u52BF\u3001\u906E\u7F69\u548C\u53C2\u8003\u56FE\u90FD\u5DF2\u4FDD\u5B58","good"),this.embedded||this.showImagePreview(i.images.scene,"\u573A\u666F\u622A\u56FE")}catch(i){console.error(i),this.state.capture=t,this.changedSinceCapture=!0,this.toast(`\u5E94\u7528\u5931\u8D25\uFF1A${i.message}`,"error"),this.updateCaptureState()}finally{this._applying=!1,e.disabled=!1,this.hideLoading()}}async showPreview(){if(!this._applying){this.showLoading("\u6B63\u5728\u751F\u6210\u63A7\u5236\u56FE\u9884\u89C8\u2026",10);try{let e=await Cd(this);this.setLoadingProgress(100),this.hideLoading();let t=[["scene","\u573A\u666F\u622A\u56FE"],["depth","\u6DF1\u5EA6\u56FE"],["pose","\u59FF\u52BF\u9AA8\u67B6"],["region","\u533A\u57DF\u8272\u5757"],["people_mask","\u4EBA\u7269\u906E\u7F69"],["props_mask","\u9053\u5177\u906E\u7F69"],["ground_mask","\u5730\u9762\u906E\u7F69"]],n=this.openModal({title:"\u63A7\u5236\u56FE\u9884\u89C8",subtitle:"\u8FD9\u4E9B\u5C31\u662F\u4F1A\u4F20\u7ED9 ComfyUI / Qwen \u7684\u7ED3\u6784\u63A7\u5236\u56FE",wide:!0,body:`<div class="preview-tabs">${t.map(([r,o],a)=>`<button class="preview-tab ${a===0?"active":""}" data-preview-key="${r}">${o}</button>`).join("")}</div>
          <div class="preview-frame"><img id="preview-image" src="${e.images.scene}" alt="\u63A7\u5236\u56FE\u9884\u89C8" /></div>`,footer:'<button class="action-btn" data-preview-download>\u4E0B\u8F7D\u5F53\u524D\u56FE</button><button class="btn primary" data-preview-close>\u5173\u95ED</button>'}),i="scene";n.el.addEventListener("click",r=>{let o=r.target.closest("[data-preview-key]");o&&(i=o.dataset.previewKey,n.el.querySelectorAll("[data-preview-key]").forEach(a=>a.classList.toggle("active",a===o)),n.el.querySelector("#preview-image").src=e.images[i]),r.target.closest("[data-preview-download]")&&Ld(e.images[i],`control_${i}.png`),r.target.closest("[data-preview-close]")&&n.close()})}catch(e){this.hideLoading(),console.error(e),this.toast(`\u9884\u89C8\u5931\u8D25\uFF1A${e.message}`,"error")}}}showImagePreview(e,t){let n=this.openModal({title:t,wide:!0,body:`<div class="preview-frame"><img src="${e}" alt="${Ve(t)}" /></div>`,footer:'<button class="action-btn" data-preview-download>\u4E0B\u8F7D PNG</button><button class="btn primary" data-preview-close>\u5173\u95ED</button>'});n.el.addEventListener("click",i=>{i.target.closest("[data-preview-download]")&&Ld(e,"scene_capture.png"),i.target.closest("[data-preview-close]")&&n.close()})}async closeEditor(){if(!(this.changedSinceCapture&&this.state.capture.token&&!await this.confirm("\u573A\u666F\u5728\u5E94\u7528\u540E\u53C8\u6709\u4FEE\u6539\uFF0C\u5173\u95ED\u540E\u8282\u70B9\u4ECD\u4F7F\u7528\u4E0A\u4E00\u6B21\u7684\u63A7\u5236\u56FE\u3002\u7EE7\u7EED\u5173\u95ED\uFF1F","\u5173\u95ED\u7F16\u8F91\u5668"))){if(this.saveAutosave(),!this.embedded){this.toast("\u72EC\u7ACB\u7F16\u8F91\u6A21\u5F0F\uFF1A\u53EF\u76F4\u63A5\u5173\u95ED\u6D4F\u89C8\u5668\u6807\u7B7E\u9875","warn");return}this.postToParent("dsp-close",{})}}async saveToLibrary(){let e=await this.promptDialog("\u4FDD\u5B58\u573A\u666F","\u7ED9\u8FD9\u4E2A\u573A\u666F\u8D77\u4E2A\u540D\u5B57",this.state.meta.name||"\u672A\u547D\u540D\u573A\u666F");if(e)try{let t=this.serializeScene();t.meta.name=e;let n=await fetch("/3d_editor/scenes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,data:t})}),i=await n.json();if(!n.ok||!i.ok)throw new Error(i.error||"\u4FDD\u5B58\u5931\u8D25");this.state.meta.name=e,this.sceneNameEl.value=e,this.toast(`\u573A\u666F\u300C${e}\u300D\u5DF2\u4FDD\u5B58`,"good")}catch(t){this.toast(`\u4FDD\u5B58\u573A\u666F\u5931\u8D25\uFF1A${t.message}`,"error")}}async openLibrary(){try{let n=(await(await fetch("/3d_editor/scenes")).json()).scenes||[],i=this.openModal({title:"\u573A\u666F\u5E93",subtitle:"\u4FDD\u5B58\u7684\u573A\u666F\u4F1A\u653E\u5728 ComfyUI/input/3d_scene_editor/scenes",body:`<div class="scene-list">${n.length?n.map(r=>`<div class="scene-row">
                    <div class="scene-row-name">${Ve(r.title||r.name)}<div class="scene-row-meta">${Ve(r.updated_text||"")} \xB7 ${Math.round((r.size||0)/1024)} KB</div></div>
                    <button class="action-btn small" data-scene-load="${Ve(r.name)}">\u8F7D\u5165</button>
                    <button class="action-btn small danger" data-scene-delete="${Ve(r.name)}">\u5220\u9664</button>
                  </div>`).join(""):'<div class="small-note">\u8FD8\u6CA1\u6709\u4FDD\u5B58\u8FC7\u573A\u666F\u3002\u5148\u5728\u300C\u573A\u666F \u2192 \u4FDD\u5B58\u5230\u573A\u666F\u5E93\u300D\u91CC\u5B58\u4E00\u4E2A\u3002</div>'}</div>`,footer:'<button class="btn" data-modal-close>\u5173\u95ED</button>'});i.el.addEventListener("click",async r=>{let o=r.target.closest("[data-scene-load]");if(o)try{let l=await fetch(`/3d_editor/scenes/${encodeURIComponent(o.dataset.sceneLoad)}`),c=await l.json();if(!l.ok||!c.ok)throw new Error(c.error||"\u8BFB\u53D6\u5931\u8D25");i.close(),await this.loadSceneData(c.data)}catch(l){this.toast(`\u8F7D\u5165\u5931\u8D25\uFF1A${l.message}`,"error")}let a=r.target.closest("[data-scene-delete]");if(a){if(!await this.confirm(`\u5220\u9664\u573A\u666F\u300C${a.dataset.sceneDelete}\u300D\uFF1F`,"\u5220\u9664\u573A\u666F"))return;await fetch(`/3d_editor/scenes/${encodeURIComponent(a.dataset.sceneDelete)}`,{method:"DELETE"}),i.close(),this.openLibrary()}r.target.closest("[data-modal-close]")&&i.close()})}catch(e){this.toast(`\u6253\u5F00\u573A\u666F\u5E93\u5931\u8D25\uFF1A${e.message}`,"error")}}exportScene(){let e=this.serializeScene(),t=(this.state.meta.name||"scene").replace(/[\\/:*?"<>|]+/g,"_");om(e,`${t}.scene.json`),this.toast("\u573A\u666F JSON \u5DF2\u5BFC\u51FA","good")}showHelp(){let e=this.openModal({title:"3D \u573A\u666F\u4E0E\u59FF\u52BF\u7F16\u8F91\u5668",subtitle:"\u628A\u300C\u6446\u4EBA\u7269 + \u5E03\u7C97\u573A\u666F + \u8C03\u955C\u5934\u300D\u53D8\u6210 Qwen \u7684\u7ED3\u6784\u63A7\u5236\u56FE",wide:!0,body:`
        <div class="help-grid">
          <div class="help-card">
            <h4>\u4E09\u6B65\u4E0A\u624B</h4>
            <ul>
              <li>\u5728\u300C\u5BF9\u8C61\u300D\u91CC\u52A0\u5185\u7F6E\u4EBA\u5076\uFF0C\u6216\u5BFC\u5165\u81EA\u5DF1\u7684 GLB / VRM\u3002</li>
              <li>\u70B9\u300C\u6446\u59FF\u52BF\u300D\uFF0C\u62D6\u5173\u8282\u7403\u6216\u70B9\u9884\u8BBE\uFF1B\u7528\u300C\u955C\u5934\u300D\u8C03\u6784\u56FE\u548C\u753B\u5E45\u3002</li>
              <li>\u4E0A\u4F20\u89D2\u8272\u53C2\u8003\u56FE\uFF0C\u70B9\u300C\u5E94\u7528\u5230\u8282\u70B9\u300D\uFF0C\u56DE ComfyUI \u8FD0\u884C\u5DE5\u4F5C\u6D41\u3002</li>
            </ul>
          </div>
          <div class="help-card">
            <h4>\u64CD\u4F5C</h4>
            <p><span class="kbd">Q</span> \u9009\u62E9 \xB7 <span class="kbd">W</span> \u79FB\u52A8 \xB7 <span class="kbd">E</span> \u65CB\u8F6C \xB7 <span class="kbd">R</span> \u7F29\u653E \xB7 <span class="kbd">P</span> \u6446\u59FF\u52BF<br>
            <span class="kbd">F</span> \u805A\u7126 \xB7 <span class="kbd">Del</span> \u5220\u9664 \xB7 <span class="kbd">Ctrl+Z</span> \u64A4\u9500 \xB7 <span class="kbd">Esc</span> \u9000\u51FA\u955C\u5934\u89C6\u56FE \xB7 <span class="kbd">Alt</span>+\u70B9\u51FB \u5728\u91CD\u53E0\u4EBA\u7269\u95F4\u5207\u6362</p>
          </div>
          <div class="help-card">
            <h4>\u600E\u4E48\u4FDD\u8BC1\u59FF\u52BF\u548C\u6784\u56FE</h4>
            <p>Qwen 2.1 \u8D70\u53C2\u8003\u56FE\u7F16\u8F91\uFF1A\u573A\u666F\u622A\u56FE\u662F image1\uFF0C\u7B2C\u4E00\u4E2A\u89D2\u8272\u662F image2\uFF0C\u573A\u666F\u53C2\u8003\u662F image3\uFF0C\u5176\u4F59\u89D2\u8272\u4ECE image4 \u8D77\u9010\u4E2A\u8F93\u5165\u3002\u9ED8\u8BA4\u300C\u706B\u67F4\u4EBA\u300D\u63A7\u5236\u56FE\u53EA\u4FDD\u7559\u5173\u8282\u4F4D\u7F6E\u548C\u59FF\u52BF\uFF0C\u4E0D\u5E26 3D \u4EBA\u5076\u7684\u80F8\u8170\u81C0\u548C\u56DB\u80A2\u7C97\u7EC6\uFF1B\u6700\u7EC8\u4EBA\u7269\u8EAB\u6750\u6765\u81EA image2 \u8D77\u7684\u89D2\u8272\u53C2\u8003\uFF0C\u6700\u7EC8\u573A\u666F\u6765\u81EA image3\u3002\u5185\u7F6E\u4EBA\u5076\u8FD8\u53EF\u4EE5\u8C03\u8EAB\u9AD8 0.2\u2013300m\u3001\u5927\u5C0F\u548C\u56DB\u80A2\u957F\u5EA6\uFF0C\u7528\u6765\u505A\u5DE8\u578B\u4EBA\u7269\u6216\u8C03\u6574\u6784\u56FE\u3002</p>
          </div>
          <div class="help-card">
            <h4>\u8F93\u51FA\u7ED9\u8282\u70B9</h4>
            <p>\u573A\u666F\u622A\u56FE\u3001\u6DF1\u5EA6\u56FE\u3001OpenPose \u9AA8\u67B6\u3001\u533A\u57DF\u8272\u5757\u3001\u4EBA\u7269/\u9053\u5177\u906E\u7F69\u3001\u89D2\u8272\u53C2\u8003\u62FC\u56FE\u3001\u89D2\u8272\u53C2\u8003\u6279\u6B21\u3001\u573A\u666F\u53C2\u8003\u3001\u63D0\u793A\u8BCD\u548C\u573A\u666F JSON\u3002\u5DE5\u4F5C\u6D41\u7528 image1 + image2 \u7B2C\u4E00\u4E2A\u89D2\u8272 + image3 \u573A\u666F\u53C2\u8003 + image4 \u8D77\u7684\u5176\u4F59\u89D2\u8272 + VNCCS \u59FF\u52BF LoRA\uFF1B\u6CA1\u6709 image3 \u65F6\u8282\u70B9\u4F1A\u63D0\u793A\u4E0A\u4F20\u573A\u666F\u53C2\u8003\u3002</p>
          </div>
          <div class="help-card">
            <h4>\u663E\u5B58\u5EFA\u8BAE</h4>
            <p>8GB \u663E\u5B58\u5EFA\u8BAE 960\xD71280 \u5DE6\u53F3\uFF1B\u5148\u8DD1\u540C\u76EE\u5F55\u7684 Fast 12 \u6B65\u5DE5\u4F5C\u6D41\u770B\u6784\u56FE\uFF0C\u518D\u7528 24 \u6B65\u51FA\u6210\u54C1\u3002\u573A\u666F\u91CC\u7684\u6A21\u578B\u8D8A\u7B80\u5355\uFF0CQwen \u8D8A\u5BB9\u6613\u4FDD\u6301\u7ED3\u6784\u3002</p>
          </div>
          <div class="help-card">
            <h4>\u591A\u4EBA / \u6781\u7AEF\u89C6\u89D2</h4>
            <p>\u591A\u4EBA\u540C\u6846\u65F6\uFF0C\u6BCF\u4E2A\u89D2\u8272\u72EC\u7ACB\u6446\u59FF\u52BF\uFF1B\u89D2\u8272\u53C2\u8003\u6309\u56FE1\u4ECE\u5DE6\u5230\u53F3\u4E0A\u4F20\uFF0C\u8282\u70B9\u4F1A\u628A\u7B2C\u4E00\u5F20\u63A5 image2\u3001\u5176\u4F59\u63A5 image4\u2026\u2026\uFF0C\u4E0D\u518D\u62FC\u6210\u4E00\u5F20\u3002\u573A\u666F\u53C2\u8003\u4F18\u5148\u7528\u65E0\u4EBA\u73AF\u5883\u56FE\u3002\u91CD\u53E0\u4EBA\u7269\u7528 Alt+\u70B9\u51FB\u5207\u6362\u3002\u866B\u773C\u4EF0\u89C6 / \u6781\u9650\u4FEF\u62CD\u5728\u300C\u955C\u5934 \u2192 \u673A\u4F4D\u9884\u8BBE\u300D\u91CC\uFF0C\u955C\u5934\u4F1A\u81EA\u52A8\u9650\u5236\u5728\u5730\u9762\u4EE5\u4E0A\u3002</p>
          </div>
          <div class="help-card">
            <h4>\u6027\u80FD</h4>
            <p>\u89C6\u53E3\u9759\u6B62\u65F6\u4E0D\u6E32\u67D3\uFF0C\u62D6\u52A8\u624D\u91CD\u753B\uFF1B\u9634\u5F71\u4E5F\u53EA\u968F\u573A\u666F\u53D8\u5316\u66F4\u65B0\u3002\u5982\u679C\u5927\u573A\u666F\u6216\u9AD8\u5206\u5C4F\u4ECD\u89C9\u5F97\u5361\uFF0C\u5728\u300C\u573A\u666F \u2192 \u89C6\u53E3\u6027\u80FD\u300D\u5207\u5230\u300C\u6027\u80FD\u4F18\u5148\u300D\uFF081.0\xD7 \u5206\u8FA8\u7387\u30011024 \u9634\u5F71\uFF09\u3002\u573A\u666F\u767D\u6A21\u9ED8\u8BA4\u4E0D\u6295\u5C04\u9634\u5F71\u3002</p>
          </div>
          <div class="help-card">
            <h4>\u4FDD\u5B58\u4E0E\u6062\u590D</h4>
            <p>\u7F16\u8F91\u5668\u4F1A\u81EA\u52A8\u4FDD\u5B58\u5230\u6D4F\u89C8\u5668\uFF1B\u91CD\u8981\u573A\u666F\u8BF7\u300C\u4FDD\u5B58\u5230\u573A\u666F\u5E93\u300D\u6216\u5BFC\u51FA JSON\u3002\u6A21\u578B\u672C\u4F53\u4FDD\u5B58\u5728 <span class="mono">ComfyUI/input/3d_scene_editor/assets</span>\u3002</p>
          </div>
        </div>`,footer:'<button class="btn primary" data-modal-close>\u77E5\u9053\u4E86</button>'});e.el.addEventListener("click",t=>{t.target.closest("[data-modal-close]")&&e.close()})}openModal({title:e,subtitle:t="",body:n="",footer:i="",wide:r=!1,narrow:o=!1}){let a=document.createElement("div");a.className="modal-backdrop",a.innerHTML=`<div class="modal-card ${r?"wide":""} ${o?"narrow":""}">
      <div class="modal-head"><div><div class="modal-title">${Ve(e)}</div>${t?`<div class="modal-sub">${Ve(t)}</div>`:""}</div><button class="modal-close" type="button">\u2715</button></div>
      <div class="modal-body">${n}</div>
      ${i?`<div class="modal-foot">${i}</div>`:""}
    </div>`,this.modalRoot.append(a);let l=()=>a.remove();return a.querySelector(".modal-close").addEventListener("click",l),a.addEventListener("mousedown",c=>{c.target===a&&l()}),{el:a,body:a.querySelector(".modal-body"),close:l}}confirm(e,t="\u786E\u8BA4"){return new Promise(n=>{let i=this.openModal({title:t,narrow:!0,body:`<div class="help-text" style="font-size:12px;color:#cdd6e3">${Ve(e)}</div>`,footer:'<button class="btn" data-no>\u53D6\u6D88</button><button class="btn primary" data-yes>\u786E\u5B9A</button>'});i.el.addEventListener("click",r=>{r.target.closest("[data-yes]")?(i.close(),n(!0)):(r.target.closest("[data-no]")||r.target.closest(".modal-close"))&&(i.close(),n(!1))})})}promptDialog(e,t,n=""){return new Promise(i=>{let r=this.openModal({title:e,narrow:!0,body:`<div class="field"><label>${Ve(t)}</label><div class="field-body"><input type="text" id="prompt-dialog-input" value="${Ve(n)}" /></div></div>`,footer:'<button class="btn" data-no>\u53D6\u6D88</button><button class="btn primary" data-yes>\u786E\u5B9A</button>'}),o=r.el.querySelector("#prompt-dialog-input");setTimeout(()=>o?.focus(),50);let a=l=>{r.close(),i(l)};r.el.addEventListener("click",l=>{l.target.closest("[data-yes]")?a(o.value.trim()):(l.target.closest("[data-no]")||l.target.closest(".modal-close"))&&a(null)}),o?.addEventListener("keydown",l=>{l.key==="Enter"&&a(o.value.trim()),l.key==="Escape"&&a(null)})})}toast(e,t="info"){let n=document.createElement("div");n.className=`toast ${t}`,n.textContent=e,this.toastRoot.append(n),setTimeout(()=>n.remove(),3800)}showLoading(e="\u6B63\u5728\u52A0\u8F7D\u2026",t=0){this.loadingText.textContent=e,this.loadingBar.style.width=`${Math.max(0,Math.min(100,t))}%`,this.loadingOverlay.classList.remove("hidden")}setLoadingProgress(e){this.loadingBar.style.width=`${Math.max(0,Math.min(100,e))}%`}hideLoading(){this.loadingOverlay.classList.add("hidden"),this.loadingBar.style.width="0%"}onKeyDown(e){let t=e.target?.tagName?.toLowerCase();if(["input","textarea","select"].includes(t)||e.target?.isContentEditable){e.key==="Escape"&&e.target.blur();return}if(e.ctrlKey||e.metaKey){e.key.toLowerCase()==="z"?(e.preventDefault(),e.shiftKey?this.redo():this.undo()):e.key.toLowerCase()==="y"?(e.preventDefault(),this.redo()):e.key.toLowerCase()==="s"&&(e.preventDefault(),this.saveAutosave(),this.toast("\u5DF2\u4FDD\u5B58\u5230\u6D4F\u89C8\u5668\u81EA\u52A8\u4FDD\u5B58","good"));return}if(e.key==="Escape"){this.viewport.shotView?this.viewport.setShotView(!1):this.selectedJoint?this.deselectJoint():this.selectEntity(null);return}let n=e.key.toLowerCase();if(n==="q")this.setMode("select");else if(n==="w")this.setMode("move");else if(n==="e")this.setMode("rotate");else if(n==="r")this.setMode("scale");else if(n==="p")this.setMode("pose");else if(n==="f"){let i=this.getEntity(this.selectedId);i?.getBounds&&this.viewport.focusOn(i.getBounds())}else n==="g"?(this.state.scene.grid=!this.state.scene.grid,this.viewport.setGridVisible(this.state.scene.grid),this.updateModeButtons(),this.markDirty()):(e.key==="Delete"||e.key==="Backspace")&&this.selectedId&&(e.preventDefault(),this.deleteSelected())}},eS=new Ud;window.dspEditor=eS;
