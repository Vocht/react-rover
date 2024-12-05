import React, { useState } from "react";
import Rover from "./model/Rover.js";
import CanvasRenderer from "./components/renderers/canvas/CanvasRenderer.jsx";
import TextRenderer from "./components/renderers/text/TextRenderer.jsx";
import ButtonController from "./components/controllers/button/ButtonController.jsx";
import KeyboardController from "./components/controllers/keyboard/KeyboardController.jsx";

const App = () => {
    const [rover, setRover] = useState(new Rover(300, 200));

    const moveForward = () => { setRover(rover.moveForward()) }
    const moveBackward = () => { setRover(rover.moveBackward()) }
    const turnLeft = () => { setRover(rover.turnLeft()) }
    const turnRight = () => { setRover(rover.turnRight()) }

    return (
        <>
            <CanvasRenderer rover={ rover } />
            <br/>
            <TextRenderer rover={ rover } />
            <br/>
            <ButtonController
                onForward={ moveForward }
                onBackward={ moveBackward }
                onTurnLeft={ turnLeft }
                onTurnRight={ turnRight }
            />
            <KeyboardController
                onForward={ moveForward }
                onBackward={ moveBackward }
                onTurnLeft={ turnLeft }
                onTurnRight={ turnRight }
            />
        </>
    )};

export default App;