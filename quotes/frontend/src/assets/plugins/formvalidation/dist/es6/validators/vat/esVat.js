export default function t(t){let e=t;if(/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(e)){e=e.substr(2)}if(!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(e)){return{meta:{},valid:false}}const s=t=>{const e=parseInt(t.substr(0,8),10);return`${"TRWAGMYFPDXBNJZSQVHLCKE"[e%23]}`===t.substr(8,1)};const r=t=>{const e=["XYZ".indexOf(t.charAt(0)),t.substr(1)].join("");const s="TRWAGMYFPDXBNJZSQVHLCKE"[parseInt(e,10)%23];return`${s}`===t.substr(8,1)};const n=t=>{const e=t.charAt(0);let s;if("KLM".indexOf(e)!==-1){s=parseInt(t.substr(1,8),10);s="TRWAGMYFPDXBNJZSQVHLCKE"[s%23];return`${s}`===t.substr(8,1)}else if("ABCDEFGHJNPQRSUVW".indexOf(e)!==-1){const e=[2,1,2,1,2,1,2];let s=0;let r=0;for(let n=0;n<7;n++){r=parseInt(t.charAt(n+1),10)*e[n];if(r>9){r=Math.floor(r/10)+r%10}s+=r}s=10-s%10;if(s===10){s=0}return`${s}`===t.substr(8,1)||"JABCDEFGHI"[s]===t.substr(8,1)}return false};const a=e.charAt(0);if(/^[0-9]$/.test(a)){return{meta:{type:"DNI"},valid:s(e)}}else if(/^[XYZ]$/.test(a)){return{meta:{type:"NIE"},valid:r(e)}}else{return{meta:{type:"CIF"},valid:n(e)}}}