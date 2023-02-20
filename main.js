
const ex=document.querySelector("#change")
const s1=document.querySelector(".s1")
const s2=document.querySelector(".s2")
const alls=document.querySelectorAll("select")
const t1=document.querySelector('#t1')
const t2=document.querySelector('#t2')
for(let i=0;i<alls.length;i++){
    for(let j in countries){
        var s="";
        var op=""
        
        if(i==0){
            
            if(j==="en-GB"){
                s="selected"
            }
           
            op=`<option ${s} value="${j}" id="${j}">${countries[j]}</option>`
            
        }
        else {
            if(j==="fr-FR"){
                s="selected"
            }
            
            op=`<option ${s} value="${j}" id="${j}">${countries[j]}</option>`
        }  
        alls[i].insertAdjacentHTML("beforeend",op); 
     }
}

ex.addEventListener('click',()=>{
    let c=s1.value
    s1.value=s2.value
    s2.value=c;
    let t=t1.value
    t1.value=t2.value
    t2.value=t
    return ''
})