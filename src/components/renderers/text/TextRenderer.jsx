import React from "react";
import cardinal from "../../../model/CardinalDirections.js";
import "./TextRenderer.css"

const TextRenderer = ({ rover }) => {
    return (
        <span>
            Position: (x: {rover.getPosition().x} | y: {rover.getPosition().y} | {cardinal.asNameArray()[rover.getFacingCardinal()]})
        </span>
    );
};

export default TextRenderer;