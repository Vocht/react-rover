import cardinalDirections from "./CardinalDirections.js";

class Rover {
    cardinal = cardinalDirections.asArray();

    constructor(x, y, cardinalIndex = 0) {
        this.position = { x, y };
        this.facingCardinal = this.cardinal[cardinalIndex];
    }

    move(dx, dy, cardinalIndex = this.cardinal.indexOf(this.facingCardinal)) {
        return new Rover(
            this.position.x + dx,
            this.position.y + dy,
            cardinalIndex
        );
    }

    getPosition() {
        return this.position;
    }

    moveForward() {
        const { dx, dy } = this.getMovementOffset();
        return this.move(dx, dy);
    }

    moveBackward() {
        const { dx, dy } = this.getMovementOffset();
        return this.move(-dx, -dy); // Reverse direction
    }

    turnLeft() {
        return new Rover(
            this.position.x,
            this.position.y,
            (this.cardinal.indexOf(this.facingCardinal) - 1 + this.cardinal.length) % this.cardinal.length
        );
    }

    turnRight() {
        return new Rover(
            this.position.x,
            this.position.y,
            (this.cardinal.indexOf(this.facingCardinal) + 1) % this.cardinal.length
        );
    }

    getFacingCardinal() {
        return this.facingCardinal;
    }

    getMovementOffset() {
        // Define movement offsets for each cardinal direction
        const offsets = [
            { dx: 0, dy: -10 }, // NORTH
            { dx: 7, dy: -7 }, // NORTHEAST
            { dx: 10, dy: 0 }, // EAST
            { dx: 7, dy: 7 }, // SOUTHEAST
            { dx: 0, dy: 10 }, // SOUTH
            { dx: -7, dy: 7 }, // SOUTHWEST
            { dx: -10, dy: 0 }, // WEST
            { dx: -7, dy: -7 }, // NORTHWEST
        ];

        return offsets[this.facingCardinal];
    }
}

export default Rover;