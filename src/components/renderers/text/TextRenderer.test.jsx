import React from "react";
import Rover from "../../../model/Rover.js";
import { render, screen } from "@testing-library/react";
import TextRenderer from "./TextRenderer.jsx";

describe("TextRenderer Component", () => {
    it("should print the position and facing direction of the rover", () => {
        const rover = new Rover(300, 200);

        render(<TextRenderer rover={rover} />);

        expect(screen.getByText("Position: (x: 300 | y: 200 | NORTH)")).toBeInTheDocument();
    });
});