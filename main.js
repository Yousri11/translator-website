
const ex=document.querySelector("#change")
const s1=document.querySelector(".s1")
const s2=document.querySelector(".s2")
const alls=document.querySelectorAll("select")

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
function change(s1,s){
    s1.remove(s1.selectedIndex)
    let a=document.querySelectorAll(`#${s}`)
    a[0].setAttribute("selected",true)
}
ex.addEventListener('click',()=>{
    /*let a=s1.value;
    let b=s2.value;
    change(s1,b);
    change(s2,a);
    console.log(s1)
    console.log(s2)
    return*/
})