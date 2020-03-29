import React from 'react';

//export default function Header(props){
  export default function Header({children}){
  return(
    <header>
      <h1>{children}</h1>
    </header>
  )
}
//export default Header -- pode ser colocado antes da function
// <h1>{props.children}</h1>