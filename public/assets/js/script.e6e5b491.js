document.getElementById("email-form");const e=document.getElementById("email-input"),t=document.getElementById("email-submit");let n=document.getElementById("email-error");t.addEventListener("click",t=>{e.validity.valid||(""==e.value?n.innerText="Oops! Please add your email":n.innerText="Oops! Please check your email",t.preventDefault())}),e.addEventListener("blur",t=>{""==e.value&&(n.innerText="")});