import React, { useEffect } from "react";

const KeyboardController = ({ onForward, onBackward, onTurnLeft, onTurnRight }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case "w": // Forward
                case "W":
                    onForward();
                    break;
                case "s": // Backward
                case "S":
                    onBackward();
                    break;
                case "a": // Turn Left
                case "A":
                    onTurnLeft();
                    break;
                case "d": // Turn Right
                case "D":
                    onTurnRight();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onForward, onBackward, onTurnLeft, onTurnRight]);

    return (
        <span>
            Button controller active: Use WASD to move
        </span>
    );
};

export default KeyboardController;