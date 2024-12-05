import React, { useRef, useEffect } from "react";

const CanvasRenderer = ({ rover }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 600;
        canvas.height = 400;
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const { x, y } = rover.getPosition();
        const facingDirection = rover.getFacingCardinal();

        context.clearRect(0, 0, canvas.width, canvas.height);

        drawTriangle(context, x, y, 20, facingDirection);
    }, [rover]);

    function drawTriangle(context, x, y, size, facingDirection) {
        const radians = ((facingDirection * 45) - 90) * (Math.PI / 180); // Convert to radians and rotate -90°
        const topX = x + Math.cos(radians) * size;
        const topY = y + Math.sin(radians) * size;
        const leftX = x + Math.cos(radians + Math.PI * 0.75) * size;
        const leftY = y + Math.sin(radians + Math.PI * 0.75) * size;
        const rightX = x + Math.cos(radians - Math.PI * 0.75) * size;
        const rightY = y + Math.sin(radians - Math.PI * 0.75) * size;

        context.fillStyle = "red";
        context.beginPath();
        context.moveTo(topX, topY); // Top point
        context.lineTo(leftX, leftY); // Bottom left
        context.lineTo(rightX, rightY); // Bottom right
        context.closePath();
        context.fill();
    }

    return <canvas ref={canvasRef} />;
};

export default CanvasRenderer;