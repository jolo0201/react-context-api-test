import { useContext } from "react";
import { ColorContext } from "../context/color-context";

const ComponentA = () => {
    const colorCtx = useContext(ColorContext);
    const {selectedColor, onColorChange} = colorCtx;

    return(
        <>
            <h1 style={{color: selectedColor}}>Color Context API</h1>
            <p>Context API is a solution for a more elegant way of passing data between components by creating global variables, without the need to pass props down the component.</p>
            <div style={{backgroundColor: selectedColor, width: '100%', height: 200}}></div>
            <hr/>
            <h3>Selected Color: {selectedColor}</h3>
   
            <button onClick={()=>onColorChange('Green')} style={{color: 'green'}}>Green</button>
            <button onClick={()=>onColorChange('Blue')} style={{color: 'blue'}}>Blue</button>
            <button onClick={()=>onColorChange('Pink')} style={{color: 'pink'}}>Pink</button>
            <button onClick={()=>onColorChange('Yellow')} style={{color: 'yellow'}}>Yellow</button>
            <button onClick={()=>onColorChange('Red')} style={{color: 'red'}}>Red</button>
        </>
    );
}

export default ComponentA;
