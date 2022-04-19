import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";




export const Header = ()=>{
    return (
        <div>
            <h3>What to learn?</h3>
            <Input/>
            <Button text={"Enter"} />
          
        </div>
    )
}