var queensAttacktheKing = function (queens, king) {

    let northWestMap = new Map()
    let southEastMap = new Map()

    let southWestMap = new Map()
    let northEastMap = new Map()

    let northMap = new Map()
    let southMap = new Map()

    let eastMap = new Map();
    let westMap = new Map();

    for (let [x, y] of queens) { // Using destructoring
        let slope = (king[1] - y) / (king[0] - x)
        let eDistance = Math.sqrt((king[0] - x) * (king[0] - x) + (king[1] - y) * (king[1] - y)) //Eudclidean distance formula

        //The below two nested if statements find all queens in the intermediate 
        //directions(NE,SE,NW,SW) which can attack the king.
        if (slope == 1) {
            if (x > king[0]) {
                southEastMap.set(Math.floor(eDistance), [x, y])
            } else {
                northWestMap.set(Math.floor(eDistance), [x, y])
            }
        }

        if (slope == -1) {
            if (x < king[0]) {
                northEastMap.set(Math.floor(eDistance), [x, y])
            } else {
                southWestMap.set(Math.floor(eDistance), [x, y])
            }
        }

        //The below two nested if statements find all queens in the cardinal 
        //directions(N,S,W,E) which can attack the king.
        if (slope == 0) {
            if (x < king[0]) {
                southMap.set(Math.floor(eDistance), [x, y])
            } else {
                northMap.set(Math.floor(eDistance), [x, y])
            }
        }
        if (!Number.isFinite(slope)) { // Checks if the slope equals to Infinity.
            if (y > king[1]) {
                westMap.set(Math.floor(eDistance), [x, y])
            } else {
                eastMap.set(Math.floor(eDistance), [x, y])
            }
        }
    }


    return [
        southEastMap.get(Math.min(...southEastMap.keys())),
        northWestMap.get(Math.min(...northWestMap.keys())),
        southWestMap.get(Math.min(...southWestMap.keys())),
        northEastMap.get(Math.min(...northEastMap.keys())),
        northMap.get(Math.min(...northMap.keys())),
        southMap.get(Math.min(...southMap.keys())),
        eastMap.get(Math.min(...eastMap.keys())),
        westMap.get(Math.min(...westMap.keys()))
    ].filter(result => result != undefined)

}