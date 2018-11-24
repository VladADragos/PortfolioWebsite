const enlarge =(e)=>{
    
    let parent = e.currentTarget.parentNode;
    let target = e.currentTarget;    
    for(let i=0;i<3;i++){
      if(parent.childNodes[i].classList[1] =="enlarge"){
        parent.childNodes[i].classList.remove("enlarge");
        target.classList.add("enlarge");
      }
    }
    
 
  }
  export default enlarge;