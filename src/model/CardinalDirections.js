const cardinalDirections = {
    NORTH: 0,
    NORTHEAST: 1,
    EAST: 2,
    SOUTHEAST: 3,
    SOUTH: 4,
    SOUTHWEST: 5,
    WEST: 6,
    NORTHWEST: 7,
    asArray: function() {
        return [
            this.NORTH,
            this.NORTHEAST,
            this.EAST,
            this.SOUTHEAST,
            this.SOUTH,
            this.SOUTHWEST,
            this.WEST,
            this.NORTHWEST
        ]
    },
    asNameArray: function() {
        return [
            "NORTH",
            "NORTHEAST",
            "EAST",
            "SOUTHEAST",
            "SOUTH",
            "SOUTHWEST",
            "WEST",
            "NORTHWEST"
        ];
    }
}

export default cardinalDirections;