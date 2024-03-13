import React, { useState } from "react";

const HoverableSvg = ({children}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Accessed the single child element (SVG)
    const child = React.Children.only(children);

    // Cloned the child element (SVG) with modified prop(Fill-color)
    const hoverableChild = React.cloneElement(child, {
        fill: isHovered ? 'hsl(0, 94%, 66%)' : "#FFF",
    });

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
    
            {hoverableChild}
        </svg>
    );

};

export default HoverableSvg;