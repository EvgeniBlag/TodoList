import React from "react";
import { isPropertySignature } from "typescript";

type ButtonPropsType={
text:string

}


export const Button = (props:ButtonPropsType) =>{
    return (
        <div className="myButton">
          <input type="button" value={props.text }/>
         
         
        </div>
    )
}