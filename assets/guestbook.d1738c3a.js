export function __vite_legacy_guard(){import("data:text/javascript,")}import"./main.550236f9.js";import{N as e,c as t}from"./vendor.68218932.js";const o=new e({backendUrl:"https://uxtafleoaetvphdawoed.nhost.run"}),n=e=>{document.getElementById(e).style.display="none"},a=e=>{document.getElementById(e).style.display="block"},s=e=>{e.forEach((e=>{const{name:t,comment:o,created_at:n}=e,a=new Date(n),s=a.toLocaleDateString(),d=a.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),m=t||"Anonymous",c=document.createElement("tr"),i=document.createElement("td"),r=document.createElement("td"),l=document.createElement("td");var g;i.innerText=m,r.innerText=o,l.innerText=`${s} ${d}`,c.appendChild(l),c.appendChild(i),c.appendChild(r),g=c,document.querySelector("#guestbookPosts > table > tbody").appendChild(g)}))},d=async(e=!1)=>{let t=JSON.parse(localStorage.getItem("posts")),n=localStorage.getItem("last_updated");if(t&&n&&!e){const e=new Date(n),o=(new Date).getTime()-e.getTime();if(o>=36e5&&(localStorage.removeItem("posts"),localStorage.removeItem("last_updated"),t=[],n=""),o<3e5)return t}const{error:a,data:s}=await o.graphql.request('\n  query Posts(\n    $timesincemodified: timestamptz = ""\n  ) {\n    posts(order_by: {created_at: desc},\n      where: {created_at: {\n        _gte: $timesincemodified\n      }}) {\n      name\n      created_at\n      comment\n    }\n  }\n  ',{timesincemodified:n||"1970-01-01"});if(a)throw a;const d=[...s.posts||[],...t||[]];return(e=>{localStorage.setItem("posts",JSON.stringify(e)),localStorage.setItem("last_updated",(new Date).toISOString())})(d),d};(async()=>{try{s(await d()),a("guestbookPosts"),n("guestbookLoading")}catch(e){t(e),a("guestbookLoading"),document.getElementById("guestbookLoading").innerText=e}})();const m=()=>{document.querySelector(".h-captcha").innerHTML="",hcaptcha.render(document.getElementsByClassName("h-captcha")[0])},c=e=>{const t=document.getElementById("errorPosting"),o=document.getElementById("guestbookError"),n=document.getElementById("postDialog");o.innerText=e,t.style.display="block",n.style.display="none"};window.postFunction=async e=>{const t=document.getElementById("guestbookName"),o=document.getElementById("guestbookComment"),i=t.value,r=o.value;if(n("postDialog"),a("postSubmitting"),r)if(i.length>32||r.length>128)c(`${i.length>32&&!(r.length>128)?"Name":""}${!(i.length>32)&&r.length>128?"Comment":""}${i.length>32&&r.length>128?"Name and comment":""} too long!`);else try{const l=await fetch("https://old-flower-8394.fly.dev/post",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i,comment:r,captcha_response:e})});if(n("postSubmitting"),201===l.status)return m(),t.value="",o.value="",a("postDialog"),n("guestbookPosts"),a("guestbookLoading"),document.querySelector("#guestbookPosts > table > tbody").innerHTML="\n<TABLE BORDER=1>\n  <TR>\n     <TH>Date</TH>\n     <TH>Name</TH>\n     <TH>Comment</TH>\n  </TR>\n</TABLE>",void setTimeout((async()=>{const e=await d(!0);s(e),a("guestbookPosts"),n("guestbookLoading")}),1500);const g=await l.text();c(g)}catch(l){return void c(l)}else c("Comment cannot be empty!")},window.retryForm=()=>{m();const e=document.getElementById("errorPosting"),t=document.getElementById("postDialog");e.style.display="none",t.style.display="block"};
