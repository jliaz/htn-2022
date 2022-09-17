import React, { useRef, useEffect } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const uploadedImage = require(`./capybara.jpeg`);
        if (!uploadedImage) return null;

        const image = new Image();
        image.src = uploadedImage;

        console.log(image);
        
        image.onload = () => {
            console.log("image loaded");
            
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          context.drawImage(image, 100, 100, canvas.width, canvas.height);
        };
    }, [])

    return <canvas ref={canvasRef} {...props} />
}

export default Canvas;