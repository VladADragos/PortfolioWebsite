import React from 'react'


type Props = {
  classes: string
}
const WithClasses:React.FC<Props> =({children,classes})=>{



if(classes){
 const map: Map<string,string> = new Map();

 classes.split(" ").forEach((className)=>{
    map.set(className.split("-")[0],className);

 });
  const childrenWithProps =  React.Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
        let filtered = child.props.className.split(" ").filter(
            (e)=>!map.has(e.split("-")[0])
            );
        console.log("original",  child.props.className.split(" "));
        console.log("newclasses",  filtered);
      return React.cloneElement(child, { className: `${classes} ${filtered.join(" ")}` });
    }
    return child;
  });

  return <div>{childrenWithProps}</div>;
}else{
    return <>{children}</>
}

}

export default WithClasses;