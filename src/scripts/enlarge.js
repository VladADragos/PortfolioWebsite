const enlarge =(e)=>{
      
    let parent = e.currentTarget.parentNode;
    let target = e.currentTarget;
    let set = false;
    let infoStyle = target.childNodes[1].style;
    let imageStyle = target.childNodes[0].style;
    
    for(let i=0;i<3;i++){
      if(parent.childNodes[i].classList[1] =="enlarge"){
        parent.childNodes[i].classList.remove("enlarge");
        target.classList.add("enlarge");
      }
    }
    
 
  }
  export default enlarge;