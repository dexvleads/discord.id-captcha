const A = '<circle cx="12" cy="12" r="8" stroke-width="3" stroke-dasharray="15 10" fill="none" stroke-linecap="round" transform="rotate(0 12 12)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.9s" values="0 12 12;360 12 12"/></circle>'
  , t = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>';
function e(A, t, e, r, o=!0, n) {
    return `<div class="frc-container">\n<svg class="frc-icon" role="img" xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24">${A}</svg>\n<div class="frc-content">\n    <span class="frc-text" ${n ? `title="${n}"` : ""}>${t}</span>\n    ${r ? `<button type="button" class="frc-button">${r}</button>` : ""}\n    ${o ? '<progress class="frc-progress" value="0">0%</progress>' : ""}\n</div>\n</div>\n<input name="frc-captcha-solution" class="frc-captcha-solution" style="display: none;" type="hidden" value="${e}">`
}
function r(A, r=!0) {
    return e(t, "Verification failed: " + A, ".ERROR", r ? "Retry" : void 0)
}
const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , n = "=".charCodeAt(0)
  , s = new Uint8Array(256);
for (let A = 0; A < o.length; A++)
    s[o.charCodeAt(A)] = A;
function i(A) {
    const t = A.length;
    let e = "";
    for (let r = 0; r < t; r += 3) {
        const t = A[r + 0]
          , n = A[r + 1]
          , s = A[r + 2];
        e += o.charAt(t >>> 2),
        e += o.charAt((3 & t) << 4 | n >>> 4),
        e += o.charAt((15 & n) << 2 | s >>> 6),
        e += o.charAt(63 & s)
    }
    return t % 3 == 2 ? e = e.substring(0, e.length - 1) + "=" : t % 3 == 1 && (e = e.substring(0, e.length - 2) + "=="),
    e
}
function a(A) {
    const t = A.length;
    let e = 3 * t >>> 2;
    A.charCodeAt(t - 1) === n && e--,
    A.charCodeAt(t - 2) === n && e--;
    const r = new Uint8Array(e);
    for (let e = 0, o = 0; e < t; e += 4) {
        const t = s[A.charCodeAt(e + 0)]
          , n = s[A.charCodeAt(e + 1)]
          , i = s[A.charCodeAt(e + 2)]
          , a = s[A.charCodeAt(e + 3)];
        r[o++] = t << 2 | n >> 4,
        r[o++] = (15 & n) << 4 | i >> 2,
        r[o++] = (3 & i) << 6 | 63 & a
    }
    return r
}
async function c(A, t) {
    const e = await g(A + "?sitekey=" + t, {
        headers: [["x-frc-client", "js-0.6.0"]],
        mode: "cors"
    }, 2);
    if (e.ok)
        return (await e.json()).data.puzzle;
    throw Error(`Failure in getting puzzle: ${e.status} ${e.statusText}`)
}
async function g(A, t, e) {
    let r = 500;
    return fetch(A, t).catch((async o => {
        if (1 === e)
            throw o;
        return await new Promise((A => setTimeout(A, r))),
        r *= 4,
        g(A, t, e - 1)
    }
    ))
}
const h = window.URL || window.webkitURL;
class l {
    constructor(A, t={}) {
        this.worker = null,
        this.valid = !1,
        this.needsReInit = !1,
        this.hasBeenStarted = !1,
        this.hasBeenDestroyed = !1,
        this.opts = Object.assign({
            forceJSFallback: !1,
            startMode: "focus",
            puzzleEndpoint: "https://lookup.discord.id/api/v1/puzzle",
            startedCallback: () => 0,
            readyCallback: () => 0,
            doneCallback: () => 0,
            errorCallback: () => 0
        }, t),
        this.e = A,
        A.innerText = "Captcha initializing..",
        function() {
            if (!document.querySelector("#frc-style")) {
                const A = document.createElement("style");
                A.type = "text/css",
                A.id = "frc-style",
                A.innerHTML = ".frc-captcha *{margin:0;padding:0;border:0;text-align:initial;border-radius:4px;filter:none!important;transition:none!important;font-weight:400;font-size:14px;line-height:1.35;text-decoration:none;background-color:initial;color:#222}.frc-captcha{position:relative;width:280px;border:1px solid #ddd;padding-bottom:12px;background-color:#fff}.frc-container{display:flex;align-items:center;min-height:52px}.frc-icon{fill:#222;stroke:#222;flex-shrink:0;margin:8px 8px 0}.frc-icon.frc-warning{fill:#c00}.frc-content{white-space:nowrap;display:flex;flex-direction:column;margin:4px 6px 0 0;overflow-x:auto;flex-grow:1}.frc-banner{position:absolute;bottom:0;right:6px;line-height:1}.frc-banner *{font-size:10px;opacity:.8}.frc-banner b{font-weight:700}.frc-progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:3px 0;height:4px;border:none;background-color:#eee;color:#222;width:100%;transition:.5s linear}.frc-progress::-webkit-progress-bar{background:#eee}.frc-progress::-webkit-progress-value{background:#222}.frc-progress::-moz-progress-bar{background:#222}.frc-button{cursor:pointer;padding:2px 6px;background-color:#f1f1f1;border:1px solid transparent;text-align:center;font-weight:600}.frc-button:focus{border:1px solid #333}.frc-button:hover{background-color:#ddd}.dark.frc-captcha{color:#fff;background-color:#222}.dark.frc-captcha *{color:#fff}.dark.frc-captcha button{background-color:#444}.dark .frc-icon{fill:#fff;stroke:#fff}.dark .frc-progress{background-color:#444}.dark .frc-progress::-webkit-progress-bar{background:#444}.dark .frc-progress::-webkit-progress-value{background:#ddd}.dark .frc-progress::-moz-progress-bar{background:#ddd}",
                document.head.appendChild(A)
            }
        }(),
        this.init("auto" === this.opts.startMode || "auto" === this.e.dataset.start)
    }
    init(A) {
        var t;
        if (this.hasBeenDestroyed)
            console.error("Captcha widget has been destroyed using destroy(), it can not be used anymore.");
        else if (this.initWorker(),
        this.setupSolver(),
        A)
            this.start();
        else if ("none" !== this.e.dataset.start && ("focus" === this.opts.startMode || "focus" === this.e.dataset.start)) {
            const A = function(A) {
                for (; "FORM" !== A.tagName; )
                    if (!(A = A.parentElement))
                        return null;
                return A
            }(this.e);
            A ? (t = () => {
                this.hasBeenStarted || this.start()
            }
            ,
            A.addEventListener("focusin", t, {
                once: !0,
                passive: !0
            })) : console.log("Captcha div seems not to be contained in a form, autostart will not work")
        }
    }
    async setupSolver() {
        if (this.opts.forceJSFallback)
            this.worker.postMessage({
                type: "js"
            });
        else
            try {
                const A = WebAssembly.compile(a("AGFzbQEAAAABKghgAABgAn9/AGADf39/AX9gAX8AYAR/f39/AGAAAX9gAX8Bf2ACf38BfwINAQNlbnYFYWJvcnQABAMMCwcGAwAAAQIFAQIABQMBAAEGFgR/AUEAC38BQQALfwBBAwt/AEHgDAsHbgkGbWVtb3J5AgAHX19hbGxvYwABCF9fcmV0YWluAAIJX19yZWxlYXNlAAMJX19jb2xsZWN0AAQHX19yZXNldAAFC19fcnR0aV9iYXNlAwMNVWludDhBcnJheV9JRAMCDHNvbHZlQmxha2UyYgAKCAELCvgSC5IBAQV/IABB8P///wNLBEAACyMBQRBqIgQgAEEPakFwcSICQRAgAkEQSxsiBmoiAj8AIgVBEHQiA0sEQCAFIAIgA2tB//8DakGAgHxxQRB2IgMgBSADShtAAEEASARAIANAAEEASARAAAsLCyACJAEgBEEQayICIAY2AgAgAkEBNgIEIAIgATYCCCACIAA2AgwgBAsEACAACwMAAQsDAAELBgAjACQBC7sCAQF/AkAgAUUNACAAQQA6AAAgACABakEEayICQQA6AAMgAUECTQ0AIABBADoAASAAQQA6AAIgAkEAOgACIAJBADoAASABQQZNDQAgAEEAOgADIAJBADoAACABQQhNDQAgAEEAIABrQQNxIgJqIgBBADYCACAAIAEgAmtBfHEiAmpBHGsiAUEANgIYIAJBCE0NACAAQQA2AgQgAEEANgIIIAFBADYCECABQQA2AhQgAkEYTQ0AIABBADYCDCAAQQA2AhAgAEEANgIUIABBADYCGCABQQA2AgAgAUEANgIEIAFBADYCCCABQQA2AgwgACAAQQRxQRhqIgFqIQAgAiABayEBA0AgAUEgTwRAIABCADcDACAAQgA3AwggAEIANwMQIABCADcDGCABQSBrIQEgAEEgaiEADAELCwsLcgACfyAARQRAQQxBAhABIQALIAALQQA2AgAgAEEANgIEIABBADYCCCABQfD///8DIAJ2SwRAQcAKQfAKQRJBORAAAAsgASACdCIBQQAQASICIAEQBiAAKAIAGiAAIAI2AgAgACACNgIEIAAgATYCCCAAC88BAQJ/QaABQQAQASIAQQxBAxABQYABQQAQBzYCACAAQQxBBBABQQhBAxAHNgIEIABCADcDCCAAQQA2AhAgAEIANwMYIABCADcDICAAQgA3AyggAEIANwMwIABCADcDOCAAQgA3A0AgAEIANwNIIABCADcDUCAAQgA3A1ggAEIANwNgIABCADcDaCAAQgA3A3AgAEIANwN4IABCADcDgAEgAEIANwOIASAAQgA3A5ABQYABQQUQASIBQYABEAYgACABNgKYASAAQSA2ApwBIAAL3AkCBH8TfiAAKAIEIQIgACgCmAEiAyEFA0AgBEGAAUgEQCAEIAVqIAEgBGopAwA3AwAgBEEIaiEEDAELCyACKAIEKQMAIQ4gAigCBCkDCCEPIAIoAgQpAxAhCSACKAIEKQMYIRAgAigCBCkDICEKIAIoAgQpAyghCyACKAIEKQMwIQwgAigCBCkDOCENQoiS853/zPmE6gAhBkK7zqqm2NDrs7t/IQdCq/DT9K/uvLc8IRNC8e30+KWn/aelfyEIIAApAwhC0YWa7/rPlIfRAIUhEUKf2PnZwpHagpt/IRRClIX5pcDKib5gIRJC+cL4m5Gjs/DbACEVQQAhBANAIARBwAFIBEAgCiAGIBEgDiAKIAMgBEGACGoiAS0AAEEDdGopAwB8fCIOhUIgiiIGfCIRhUIYiiEKIBEgBiAOIAogAyABLQABQQN0aikDAHx8Ig6FQhCKIgZ8IRYgDCATIBIgCSAMIAMgAS0ABEEDdGopAwB8fCIThUIgiiIRfCIShUIYiiEMIA0gCCAVIBAgDSADIAEtAAZBA3RqKQMAfHwiCYVCIIoiEHwiCIVCGIohDSAIIBAgCSANIAMgAS0AB0EDdGopAwB8fCIQhUIQiiIIfCEJIBMgDCADIAEtAAVBA3RqKQMAfHwiFyARhUIQiiIYIBJ8IhEgCCAOIAsgByAUIA8gCyADIAEtAAJBA3RqKQMAfHwiD4VCIIoiB3wiFIVCGIoiCyAUIAcgDyALIAMgAS0AA0EDdGopAwB8fCIPhUIQiiIHfCIShUI/iiIOIAMgAS0ACEEDdGopAwB8fCIThUIgiiIIfCILIBMgCyAOhUIYiiIUIAMgAS0ACUEDdGopAwB8fCIOIAiFQhCKIhV8IhMgFIVCP4ohCyAJIAYgDyAMIBGFQj+KIg8gAyABLQAKQQN0aikDAHx8IgaFQiCKIgh8IgwgBiAMIA+FQhiKIgYgAyABLQALQQN0aikDAHx8Ig8gCIVCEIoiEXwiCCAGhUI/iiEMIBYgByAXIAkgDYVCP4oiCSADIAEtAAxBA3RqKQMAfHwiBoVCIIoiB3wiDSAGIAkgDYVCGIoiFyADIAEtAA1BA3RqKQMAfHwiCSAHhUIQiiIUfCIGIBeFQj+KIQ0gEiAYIBAgCiAWhUI/iiIQIAMgAS0ADkEDdGopAwB8fCIHhUIgiiISfCIKIAcgCiAQhUIYiiIWIAMgAS0AD0EDdGopAwB8fCIQIBKFQhCKIhJ8IgcgFoVCP4ohCiAEQRBqIQQMAQsLIAIoAgQgAigCBCkDACAGIA6FhTcDACACKAIEIAIoAgQpAwggByAPhYU3AwggAigCBCACKAIEKQMQIAkgE4WFNwMQIAIoAgQgAigCBCkDGCAIIBCFhTcDGCACKAIEIAIoAgQpAyAgCiARhYU3AyAgAigCBCACKAIEKQMoIAsgFIWFNwMoIAIoAgQgAigCBCkDMCAMIBKFhTcDMCACKAIEIAIoAgQpAzggDSAVhYU3AzggACAONwMYIAAgDzcDICAAIAk3AyggACAQNwMwIAAgCjcDOCAAIAs3A0AgACAMNwNIIAAgDTcDUCAAIAY3A1ggACAHNwNgIAAgEzcDaCAAIAg3A3AgACARNwN4IAAgFDcDgAEgACASNwOIASAAIBU3A5ABC+ECAQR/IAAoAghBgAFHBEBB0AlBgApBH0EJEAAACyAAKAIAIQQQCCIDKAIEIQUgA0KAATcDCCAEKAJ8IgAgAmohBgNAIAAgBkkEQCAEIAA2AnwgAygCBCICKAIEIAMoApwBrUKIkveV/8z5hOoAhTcDACACKAIEQrvOqqbY0Ouzu383AwggAigCBEKr8NP0r+68tzw3AxAgAigCBELx7fT4paf9p6V/NwMYIAIoAgRC0YWa7/rPlIfRADcDICACKAIEQp/Y+dnCkdqCm383AyggAigCBELr+obav7X2wR83AzAgAigCBEL5wvibkaOz8NsANwM4IAMgBBAJIAUoAgQpAwCnIAFJBEBBACAFKAIAIgFBEGsoAgwiAksEQEHwC0GwDEHNDUEFEAAAC0EMQQMQASIAIAE2AgAgACACNgIIIAAgATYCBCAADwsgAEEBaiEADAELC0EMQQMQAUEAQQAQBwsMAEGgDSQAQaANJAELC/oECQBBgQgLvwEBAgMEBQYHCAkKCwwNDg8OCgQICQ8NBgEMAAILBwUDCwgMAAUCDw0KDgMGBwEJBAcJAwENDAsOAgYFCgQADwgJAAUHAgQKDw4BCwwGCAMNAgwGCgALCAMEDQcFDw4BCQwFAQ8ODQQKAAcGAwkCCAsNCwcODAEDCQUADwQIBgIKBg8OCQsDAAgMAg0HAQQKBQoCCAQHBgEFDwsJDgMMDQAAAQIDBAUGBwgJCgsMDQ4PDgoECAkPDQYBDAACCwcFAwBBwAkLKRoAAAABAAAAAQAAABoAAABJAG4AdgBhAGwAaQBkACAAaQBuAHAAdQB0AEHwCQsxIgAAAAEAAAABAAAAIgAAAHMAcgBjAC8AcwBvAGwAdgBlAHIAVwBhAHMAbQAuAHQAcwBBsAoLKxwAAAABAAAAAQAAABwAAABJAG4AdgBhAGwAaQBkACAAbABlAG4AZwB0AGgAQeAKCzUmAAAAAQAAAAEAAAAmAAAAfgBsAGkAYgAvAGEAcgByAGEAeQBiAHUAZgBmAGUAcgAuAHQAcwBBoAsLNSYAAAABAAAAAQAAACYAAAB+AGwAaQBiAC8AcwB0AGEAdABpAGMAYQByAHIAYQB5AC4AdABzAEHgCwszJAAAAAEAAAABAAAAJAAAAEkAbgBkAGUAeAAgAG8AdQB0ACAAbwBmACAAcgBhAG4AZwBlAEGgDAszJAAAAAEAAAABAAAAJAAAAH4AbABpAGIALwB0AHkAcABlAGQAYQByAHIAYQB5AC4AdABzAEHgDAsuBgAAACAAAAAAAAAAIAAAAAAAAAAgAAAAAAAAAGEAAAACAAAAIQIAAAIAAAAkAg=="));
                this.worker.postMessage({
                    type: "module",
                    module: await A
                })
            } catch (A) {
                console.log("Captcha failed to initialize WebAssembly, falling back to Javascript solver: " + A.toString()),
                this.worker.postMessage({
                    type: "js"
                })
            }
    }
    makeButtonStart() {
        const A = this.e.querySelector("button");
        A && (A.addEventListener("click", ( () => this.start()), {
            once: !0,
            passive: !0
        }),
        A.addEventListener("touchstart", ( () => this.start()), {
            once: !0,
            passive: !0
        }))
    }
    onWorkerError(A) {
        this.needsReInit = !0,
        this.e.innerHTML = r("Background worker error " + A.message),
        this.makeButtonStart(),
        this.opts.forceJSFallback = !0
    }
    initWorker() {
        this.worker && this.worker.terminate();
        const t = new Blob(['!function(){"use strict";function t(t){const e={},r=t.exports,n=r.memory,s=r.__alloc,o=r.__retain,a=r.__rtti_base||-1;return e.__allocArray=(t,e)=>{const r=function(t){return new Uint32Array(n.buffer)[(a+4>>>2)+2*t]}(t),i=31-Math.clz32(r>>>6&31),c=e.length,f=s(c<<i,0),l=s(12,t),u=new Uint32Array(n.buffer);u[l+0>>>2]=o(f),u[l+4>>>2]=f,u[l+8>>>2]=c<<i;const y=n.buffer,p=new Uint8Array(y);if(16384&r)for(let t=0;t<c;++t)p[(f>>>i)+t]=o(e[t]);else p.set(e,f>>>i);return l},e.__getUint8Array=t=>{const e=new Uint32Array(n.buffer),r=e[t+4>>>2];return new Uint8Array(n.buffer,r,e[r-4>>>2]>>>0)},function(t,e={}){const r=t.__argumentsLength?e=>{t.__argumentsLength.value=e}:t.__setArgumentsLength||t.__setargc||(()=>({}));for(const n in t){if(!Object.prototype.hasOwnProperty.call(t,n))continue;const s=t[n],o=n.split(".")[0];"function"==typeof s&&s!==r?(e[o]=(...t)=>(r(t.length),s(...t))).original=s:e[o]=s}return e}(r,e)}class e{constructor(t){this.b=new Uint8Array(128),this.h=new Uint32Array(16),this.t=0,this.c=0,this.v=new Uint32Array(32),this.m=new Uint32Array(32),this.outlen=t}}function r(t,e){return t[e]^t[e+1]<<8^t[e+2]<<16^t[e+3]<<24}function n(t,e,r,n,s,o,a,i){const c=e[a],f=e[a+1],l=e[i],u=e[i+1];let y,p,w,h,_=t[r],A=t[r+1],g=t[n],U=t[n+1],b=t[s],m=t[s+1],d=t[o],v=t[o+1];y=_+g,p=(_&g|(_|g)&~y)>>>31,_=y,A=A+U+p,y=_+c,p=(_&c|(_|c)&~y)>>>31,_=y,A=A+f+p,w=d^_,h=v^A,d=h,v=w,y=b+d,p=(b&d|(b|d)&~y)>>>31,b=y,m=m+v+p,w=g^b,h=U^m,g=w>>>24^h<<8,U=h>>>24^w<<8,y=_+g,p=(_&g|(_|g)&~y)>>>31,_=y,A=A+U+p,y=_+l,p=(_&l|(_|l)&~y)>>>31,_=y,A=A+u+p,w=d^_,h=v^A,d=w>>>16^h<<16,v=h>>>16^w<<16,y=b+d,p=(b&d|(b|d)&~y)>>>31,b=y,m=m+v+p,w=g^b,h=U^m,g=h>>>31^w<<1,U=w>>>31^h<<1,t[r]=_,t[r+1]=A,t[n]=g,t[n+1]=U,t[s]=b,t[s+1]=m,t[o]=d,t[o+1]=v}const s=[4089235720,1779033703,2227873595,3144134277,4271175723,1013904242,1595750129,2773480762,2917565137,1359893119,725511199,2600822924,4215389547,528734635,327033209,1541459225],o=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,28,20,8,16,18,30,26,12,2,24,0,4,22,14,10,6,22,16,24,0,10,4,30,26,20,28,6,12,14,2,18,8,14,18,6,2,26,24,22,28,4,12,10,20,8,0,30,16,18,0,10,14,4,8,20,30,28,2,22,24,12,16,6,26,4,24,12,20,0,22,16,6,8,26,14,10,30,28,2,18,24,10,2,30,28,26,8,20,0,14,12,6,18,4,16,22,26,22,14,28,24,2,6,18,10,0,30,8,16,12,4,20,12,30,28,18,22,6,0,16,24,4,26,14,2,8,20,10,20,4,16,8,14,12,2,10,30,22,18,28,6,24,26,0,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,28,20,8,16,18,30,26,12,2,24,0,4,22,14,10,6];function a(t,e){const a=t.v,i=t.m;for(let e=0;e<16;e++)a[e]=t.h[e],a[e+16]=s[e];a[24]=a[24]^t.t,a[25]=a[25]^t.t/4294967296,e&&(a[28]=~a[28],a[29]=~a[29]);for(let e=0;e<32;e++)i[e]=r(t.b,4*e);for(let t=0;t<12;t++)n(a,i,0,8,16,24,o[16*t+0],o[16*t+1]),n(a,i,2,10,18,26,o[16*t+2],o[16*t+3]),n(a,i,4,12,20,28,o[16*t+4],o[16*t+5]),n(a,i,6,14,22,30,o[16*t+6],o[16*t+7]),n(a,i,0,10,20,30,o[16*t+8],o[16*t+9]),n(a,i,2,12,22,24,o[16*t+10],o[16*t+11]),n(a,i,4,14,16,26,o[16*t+12],o[16*t+13]),n(a,i,6,8,18,28,o[16*t+14],o[16*t+15]);for(let e=0;e<16;e++)t.h[e]=t.h[e]^a[e]^a[e+16]}function i(t,e){for(let e=0;e<16;e++)t.h[e]=s[e];t.b.set(e),t.h[0]^=16842752^t.outlen}function c(t,e){const r=new Uint8Array(3),n=new DataView(r.buffer);return n.setUint8(0,t),n.setUint16(1,e),r}let f,l;Uint8Array.prototype.slice||Object.defineProperty(Uint8Array.prototype,"slice",{value:function(t,e){return new Uint8Array(Array.prototype.slice.call(this,t,e))}}),self.ASC_TARGET=0;let u=new Promise((t=>l=t)),y=!1;self.onerror=t=>{self.postMessage({type:"error",message:JSON.stringify(t)})},self.onmessage=async r=>{const n=r.data,s=n.type;try{if("module"===s){const e=await async function(e){const r=await async function(e){const r={env:{abort(){throw Error("Wasm aborted")}}};return{exports:t(await WebAssembly.instantiate(e,r))}}(e),n=r.exports.__retain(r.exports.__allocArray(r.exports.Uint8Array_ID,new Uint8Array(128)));let s=r.exports.__getUint8Array(n);return(t,e,o=4294967295)=>{s.set(t);const a=r.exports.solveBlake2b(n,e,o);s=r.exports.__getUint8Array(n);const i=r.exports.__getUint8Array(a);return r.exports.__release(a),[s,i]}}(n.module);self.postMessage({type:"ready",solver:2}),f=2,l(e)}else if("js"===s){const t=await async function(){return(t,r,n=4294967295)=>[t,function(t,r,n){if(128!=t.length)throw Error("Invalid input");const s=t.buffer,o=new DataView(s),c=new e(32);c.t=128;const f=o.getUint32(124,!0),l=f+n;for(let e=f;e<l;e++)if(o.setUint32(124,e,!0),i(c,t),a(c,!0),c.h[0]<r)return 0==ASC_TARGET?new Uint8Array(c.h.buffer):Uint8Array.wrap(c.h.buffer);return new Uint8Array(0)}(t,r,n)]}();self.postMessage({type:"ready",solver:1}),f=1,l(t)}else if("start"===s){if(y)return;y=!0;const t=await u;self.postMessage({type:"started"});let e=Date.now(),r=0;const s=function(t,e){const r=[];for(let n=0;n<e;n++){const e=new Uint8Array(128);e.set(t),e[120]=n,r.push(e)}return r}(n.buffer,n.n),a=new Uint8Array(8*n.n);for(var o=0;o<s.length;o++){const e=Date.now();let i;for(var p=0;p<256;p++){s[o][123]=p;const[e,r]=t(s[o],n.threshold);if(0!==r.length){i=e;break}console.warn("FC: Internal error or no solution found")}const c=new DataView(i.slice(-4).buffer).getUint32(0,!0),f=(Date.now()-e)/1e3;r+=c,a.set(i.slice(-8),8*o),self.postMessage({type:"progress",n:n.n,h:c,t:f,i:o})}const i=(Date.now()-e)/1e3,l={type:"done",solution:a,h:r,t:i,diagnostics:c(f,i),solver:f};self.postMessage(l)}}catch(t){setTimeout((()=>{throw t}))}}}();'],{
            type: "text/javascript"
        });
        this.worker = new Worker(h.createObjectURL(t)),
        this.worker.onerror = A => this.onWorkerError(A),
        this.worker.onmessage = t => {
            if (this.hasBeenDestroyed)
                return;
            const r = t.data;
            if (r)
                if ("progress" === r.type)
                    !function(A, t) {
                        const e = A.querySelector(".frc-progress")
                          , r = (t.i + 1) / t.n;
                        e && (e.value = r,
                        e.innerText = r.toFixed(2) + "%",
                        e.title = t.i + 1 + "/" + t.n + " (" + (t.h / t.t * .001).toFixed(0) + "K/s)")
                    }(this.e, r);
                else if ("ready" === r.type)
                    this.e.innerHTML = e('<path d="M17,11c0.34,0,0.67,0.04,1,0.09V6.27L10.5,3L3,6.27v4.91c0,4.54,3.2,8.79,7.5,9.82c0.55-0.13,1.08-0.32,1.6-0.55 C11.41,19.47,11,18.28,11,17C11,13.69,13.69,11,17,11z"/><path d="M17,13c-2.21,0-4,1.79-4,4c0,2.21,1.79,4,4,4s4-1.79,4-4C21,14.79,19.21,13,17,13z M17,14.38"/>', "Anti-Robot Verification", ".UNSTARTED", "Press to Start", !1),
                    this.makeButtonStart(),
                    this.opts.readyCallback();
                else if ("started" === r.type)
                    this.e.innerHTML = e(A, "Verifying you are not a robot..", ".UNFINISHED", void 0, !0),
                    this.opts.startedCallback();
                else if ("done" === r.type) {
                    const A = this.handleDone(r);
                    this.opts.doneCallback(A);
                    const t = this.e.dataset.callback;
                    t && window[t](this)
                } else
                    "error" === r.type && this.onWorkerError(r)
        }
    }
    expire() {
        this.e.innerHTML = e(t, "Anti-Robot verification expired", ".EXPIRED", "Restart"),
        this.makeButtonStart()
    }
    async start() {
        if (this.hasBeenDestroyed)
            return void console.error("Can not start Captcha widget which has been destroyed");
        this.hasBeenStarted = !0;
        const t = this.e.dataset.sitekey;
        if (!t)
            return console.error("Captcha: sitekey not set on frc-captcha element"),
            void (this.e.innerHTML = r("Website problem: sitekey not set", !1));
        if (this.needsReInit)
            return this.needsReInit = !1,
            void this.init(!0);
        try {
            this.e.innerHTML = e(A, "Fetching challenge..", ".FETCHING", void 0, !0),
            this.puzzle = function(A) {
                const t = A.split(".")
                  , e = t[1]
                  , r = a(e);
                return {
                    signature: t[0],
                    base64: e,
                    buffer: r,
                    n: r[14],
                    threshold: (o = r[15],
                    o > 255 ? o = 255 : o < 0 && (o = 0),
                    Math.pow(2, (255.999 - o) / 8) >>> 0),
                    expiry: 3e5 * r[13]
                };
                var o
            }(await c(this.opts.puzzleEndpoint, t)),
            setTimeout(( () => this.expire()), this.puzzle.expiry - 3e4)
        } catch (A) {
            this.e.innerHTML = r(A.toString()),
            this.makeButtonStart();
            const t = "error_getting_puzzle";
            this.opts.errorCallback({
                code: t,
                description: A.toString(),
                error: A
            });
            const e = this.e.dataset["callback-error"];
            return void (e && window[e](this))
        }
        this.worker.postMessage({
            type: "start",
            buffer: this.puzzle.buffer,
            n: this.puzzle.n,
            threshold: this.puzzle.threshold
        })
    }
    handleDone(A) {
        this.valid = !0;
        const t = `${this.puzzle.signature}.${this.puzzle.base64}.${i(A.solution)}.${i(A.diagnostics)}`;
        return this.e.innerHTML = function(A, t) {
            const r = `Completed: ${t.t.toFixed(0)}s (${(t.h / t.t * .001).toFixed(0)}K/s)${1 === t.solver ? " JS Fallback" : ""}`;
            return e(`<title>${r}</title><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"><animate attributeName="opacity" dur="1.0s" values="0;1"/></path>`, "I'm not a robot", A, void 0, !1, r)
        }(t, A),
        this.worker && this.worker.terminate(),
        this.needsReInit = !0,
        t
    }
    destroy() {
        this.worker && this.worker.terminate(),
        this.worker = null,
        this.needsReInit = !1,
        this.hasBeenStarted = !1,
        this.e && (this.e.remove(),
        delete this.e),
        this.hasBeenDestroyed = !0
    }
    reset() {
        this.hasBeenDestroyed ? console.error("Captcha widget has been destroyed, it can not be used anymore") : (this.worker && this.worker.terminate(),
        this.worker = null,
        this.needsReInit = !1,
        this.hasBeenStarted = !1,
        this.init("auto" === this.opts.startMode || "auto" === this.e.dataset.start))
    }
}
const I = window.friendlyChallenge;
let C = I ? I.autoWidget : null;
const f = function() {
    const A = document.querySelectorAll(".frc-captcha");
    return 0 === A.length && console.warn("Captcha: No div was found with .frc-captcha class"),
    A
}();
for (let A of f) {
    const t = A;
    t && !t.dataset.attached && (C = new l(t),
    t.dataset.attached = "1")
}
window.friendlyChallenge = {
    WidgetInstance: l,
    autoWidget: C
};
