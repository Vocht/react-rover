import Rover from "./Rover";
import cardinal from "./CardinalDirections.js";

describe("Rover Class", () => {
    describe("initialization", () => {
        it("should initialize with the correct position", () => {
            const rover = new Rover(100, 200);
            expect(rover.getPosition()).toEqual({ x: 100, y: 200 });
        });

        it("should initialize with the correct facing direction", () => {
            const rover = new Rover(100, 200);
            expect(rover.getFacingCardinal()).toEqual(cardinal.NORTH);
        });
    });

    describe("movement", () => {
        describe("move", () => {
            it("should return a new rover with updated position when moved", () => {
                const rover = new Rover(100, 200);

                const newRover1 = rover.move(10, 20);
                expect(newRover1.getPosition()).toEqual({ x: 110, y: 220 });

                const newRover2 = newRover1.move(-30, -40);
                expect(newRover2.getPosition()).toEqual({ x: 80, y: 180 });
            });

            it("should return a new rover with preserved cardinal facing when moved", () => {
                const rover = new Rover(100, 200);
                expect(rover.getFacingCardinal()).toEqual(cardinal.NORTH);

                const newRover1 = rover.move(10, 20);
                expect(newRover1.getFacingCardinal()).toEqual(cardinal.NORTH);

                const newRover2 = newRover1.move(-30, -40);
                expect(newRover2.getFacingCardinal()).toEqual(cardinal.NORTH);
            });
        });

        describe("moveForward()", () => {
            it("should handle moveForward", () => {
                const rover = new Rover(0, 0);

                const newRover = rover.moveForward();

                expect(newRover.getPosition()).toEqual({ x: 0, y: -10 });
            });

            it("should handle multiple moveForward", () => {
                const rover = new Rover(0, 0);

                const newRover1 = rover.moveForward();
                const newRover2 = newRover1.moveForward();

                expect(newRover2.getPosition()).toEqual({ x: 0, y: -20 });
            });

            it("should handle moving in the direction of the facing cardinal", () => {
                const rover = new Rover(0, 0, cardinal.EAST);

                const newRover = rover.moveForward();

                expect(newRover.getPosition()).toEqual({ x: 10, y: 0 });
            });
        });

        describe("moveBackward()", () => {
            it("should handle moveBackward", () => {
                const rover = new Rover(0, 0);

                const newRover = rover.moveBackward();

                expect(newRover.getPosition()).toEqual({ x: 0, y: 10 });
            });

            it("should handle multiple moveBackward", () => {
                const rover = new Rover(0, 0);

                const newRover1 = rover.moveBackward();
                const newRover2 = newRover1.moveBackward();

                expect(newRover2.getPosition()).toEqual({ x: 0, y: 20 });
            });
        });

        describe("turnLeft()", () => {
            it("should handle turnLeft", () => {
                const rover = new Rover(0, 0);

                const newRover = rover.turnLeft();

                expect(newRover.getFacingCardinal()).toEqual(cardinal.NORTHWEST);
            });

            it("should handle multiple turnLeft", () => {
                const rover = new Rover(0, 0);

                const newRover = rover.turnLeft();
                const newRover2 = newRover.turnLeft();

                expect(newRover2.getFacingCardinal()).toEqual(cardinal.WEST);
            });
        })

        describe("turnRight()", () => {
            it("should handle turnRight", () => {
                const rover = new Rover(0, 0);

                const newRover = rover.turnRight();

                expect(newRover.getFacingCardinal()).toEqual(cardinal.NORTHEAST);
            });

            it("should handle multiple turnRight", () => {
                const rover = new Rover(0, 0);

                const newRover = rover.turnRight();
                const newRover2 = newRover.turnRight();

                expect(newRover2.getFacingCardinal()).toEqual(cardinal.EAST);
            });
        })
    });
});