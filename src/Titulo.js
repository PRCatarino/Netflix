import React from 'react'

export default (props)=>{
    return (
        <p>
            <h1>
                {props.children}
            </h1>
            {props.subTitulo.map(s=><h2>{s}</h2>)}
          
        </p>
    );
}