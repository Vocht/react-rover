import React from "react";
import { render } from "@testing-library/react";
import CanvasRenderer from "./CanvasRenderer.jsx";
import Rover from "../../../model/Rover.js";

// Helper function to calculate expected triangle points
function calculateTrianglePoints(x, y, size, facingDirection) {
    const radians = ((facingDirection * 45) - 90) * (Math.PI / 180); // Convert to radians and rotate -90°
    return {
        top: {
            x: x + Math.cos(radians) * size,
            y: y + Math.sin(radians) * size,
        },
        left: {
            x: x + Math.cos(radians + Math.PI * 0.75) * size,
            y: y + Math.sin(radians + Math.PI * 0.75) * size,
        },
        right: {
            x: x + Math.cos(radians - Math.PI * 0.75) * size,
            y: y + Math.sin(radians - Math.PI * 0.75) * size,
        },
    };
}

describe("CanvasRenderer Component", () => {
    let mockGetContext;

    beforeEach(() => {
        // Mock the `getContext` method on canvas
        mockGetContext = jest.fn(() => ({
            clearRect: jest.fn(),
            beginPath: jest.fn(),
            moveTo: jest.fn(),
            lineTo: jest.fn(),
            closePath: jest.fn(),
            fill: jest.fn(),
            fillStyle: "",
        }));

        jest.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(mockGetContext);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("should render the canvas and draw a triangle at the rover's position facing the correct direction", () => {
        const rover = new Rover(300, 200); // Rover starting at (300, 200) facing NORTH (default)

        render(<CanvasRenderer rover={rover} />);

        const context = mockGetContext.mock.results[0].value;

        // Calculate expected triangle points for facing NORTH
        const size = 20;
        const { top, left, right } = calculateTrianglePoints(300, 200, size, rover.getFacingCardinal());

        // Ensure canvas was cleared
        expect(context.clearRect).toHaveBeenCalledWith(0, 0, 600, 400);

        // Ensure triangle was drawn with correct coordinates
        expect(context.beginPath).toHaveBeenCalled();
        expect(context.moveTo).toHaveBeenCalledWith(top.x, top.y); // Top point
        expect(context.lineTo).toHaveBeenCalledWith(left.x, left.y); // Bottom left
        expect(context.lineTo).toHaveBeenCalledWith(right.x, right.y); // Bottom right
        expect(context.closePath).toHaveBeenCalled();
        expect(context.fill).toHaveBeenCalled();
        expect(context.fillStyle).toBe("red");
    });

    it("should render the triangle facing northeast after the rover turns right", () => {
        const rover = new Rover(300, 200); // Rover starting at (300, 200) facing NORTH
        rover.turnRight(); // Turn to face NORTHEAST

        render(<CanvasRenderer rover={rover} />);

        const context = mockGetContext.mock.results[0].value;

        // Calculate expected triangle points for facing NORTHEAST
        const size = 20;
        const { top, left, right } = calculateTrianglePoints(300, 200, size, rover.getFacingCardinal());

        // Ensure canvas was cleared
        expect(context.clearRect).toHaveBeenCalledWith(0, 0, 600, 400);

        // Ensure triangle was drawn with correct coordinates
        expect(context.beginPath).toHaveBeenCalled();
        expect(context.moveTo).toHaveBeenCalledWith(top.x, top.y); // Top point
        expect(context.lineTo).toHaveBeenCalledWith(left.x, left.y); // Bottom left
        expect(context.lineTo).toHaveBeenCalledWith(right.x, right.y); // Bottom right
        expect(context.closePath).toHaveBeenCalled();
        expect(context.fill).toHaveBeenCalled();
        expect(context.fillStyle).toBe("red");
    });
});