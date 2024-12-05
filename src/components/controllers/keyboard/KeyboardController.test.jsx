import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import KeyboardController from "./KeyboardController";

describe("KeyboardController Component", () => {
    it("should call moveForward when 'W' is pressed", async () => {
        const moveForwardMock = jest.fn();
        render(
            <KeyboardController
                onForward={moveForwardMock}
                onBackward={() => {}}
                onTurnLeft={() => {}}
                onTurnRight={() => {}}
            />
        );

        await userEvent.keyboard("w");

        expect(moveForwardMock).toHaveBeenCalledTimes(1);
    });

    it("should call moveBackward when 'S' is pressed", async () => {
        const moveBackwardMock = jest.fn();
        render(
            <KeyboardController
                onForward={() => {}}
                onBackward={moveBackwardMock}
                onTurnLeft={() => {}}
                onTurnRight={() => {}}
            />
        );

        await userEvent.keyboard("s");

        expect(moveBackwardMock).toHaveBeenCalledTimes(1);
    });

    it("should call turnLeft when 'A' is pressed", async () => {
        const turnLeftMock = jest.fn();
        render(
            <KeyboardController
                onForward={() => {}}
                onbackward={() => {}}
                onTurnLeft={turnLeftMock}
                onTurnRight={() => {}}
            />
        );

        await userEvent.keyboard("a");

        expect(turnLeftMock).toHaveBeenCalledTimes(1);
    });

    it("should call turnRight when 'D' is pressed", async () => {
        const turnRightMock = jest.fn();
        render(
            <KeyboardController
                onForward={() => {}}
                onBackward={() => {}}
                onTurnLeft={() => {}}
                onTurnRight={turnRightMock}
            />
        );

        await userEvent.keyboard("d");

        expect(turnRightMock).toHaveBeenCalledTimes(1);
    });
});