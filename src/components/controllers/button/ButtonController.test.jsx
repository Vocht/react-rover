import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ButtonController from "./ButtonController.jsx";
import Rover from "../../../model/Rover.js";

describe("Controller Component", () => {
    it("calls the correct callback functions when their respective button is clicked", () => {
        const rover = new Rover(300, 200);

        const moveForwardSpy = jest.fn();
        const moveBackwardSpy = jest.fn();
        const turnLeftSpy = jest.fn();
        const turnRightSpy = jest.fn();

        render(
            <ButtonController
                onForward={moveForwardSpy}
                onBackward={moveBackwardSpy}
                onTurnLeft={turnLeftSpy}
                onTurnRight={turnRightSpy}
            />
        );

        const forwardButton = screen.getByText("Forward");
        const backwardButton = screen.getByText("Backward");
        const turnLeftButton = screen.getByText("Turn Left");
        const turnRightButton = screen.getByText("Turn Right");

        fireEvent.click(forwardButton);
        fireEvent.click(backwardButton);
        fireEvent.click(turnLeftButton);
        fireEvent.click(turnRightButton);

        expect(moveForwardSpy).toHaveBeenCalledTimes(1);
        expect(moveBackwardSpy).toHaveBeenCalledTimes(1);
        expect(turnLeftSpy).toHaveBeenCalledTimes(1);
        expect(turnRightSpy).toHaveBeenCalledTimes(1);
    });
});