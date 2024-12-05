import React from "react";

const ButtonController = ({ onForward, onBackward, onTurnLeft, onTurnRight }) => {
    return (
        <div>
            <button onClick={onForward}>Forward</button>
            <button onClick={onBackward}>Backward</button>
            <button onClick={onTurnLeft}>Turn Left</button>
            <button onClick={onTurnRight}>Turn Right</button>
        </div>
    );
};

export default ButtonController;