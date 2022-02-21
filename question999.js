// Question 999.Available Captures for Rook

const numRookCaptures = (board) => {
    let row, column;
    let count = 0;

    // Locates the rook's coordinates within the board.

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === 'R') {
                row = i;
                column = j;
            }
        }
    }

    let rowOfRook = board[row];
    let colOfRook = []

    //By finding the rooks coordinates, the problem is reduced to  
    //searching one row and one column. The below loop finds all
    //characters in column containing the rook and pushes the result
    //into the colOfRook array.

    for (let j = 0; j < 8; j++) {
        colOfRook.push(board[j][column])
    }

    //The next step is to determine the number of available pawns the rook
    //can capture in the four cardinal directions( west, east, north and south). 
    //This involves traversing the colOfRook and rowOfRook arrays found earlier.


    //Using the the rowOfRook array, the below loop checks 
    //all elements west of the rook and determines 
    //if the first non '.' character is a pawn. 

    for (let w = rowOfRook.indexOf('R') + 1; w < 8; w++) {
        if (rowOfRook[w] != '.') {
            if (rowOfRook[w] == 'p') {
                count++;
                break
            }
            else {
                break;
            }
        }
    }

    //Using the the rowOfRook array, the below loop checks 
    //all elements east of the rook and determines 
    //if the first non '.' character is a pawn. Note that the 
    //loop moves from right to left of rowOfRook.

    for (let e = rowOfRook.indexOf('R') - 1; e >= 0; e--) {
        if (rowOfRook[e] != '.') {
            if (rowOfRook[e] == 'p') {
                count++;
                break
            }
            else {
                break;
            }
        }
    }

    //Now using the colOfRook array, the below loop checks
    //all elements south of the rook.

    for (let s = colOfRook.indexOf('R') + 1; s < 8; s++) {
        if (colOfRook[s] != '.') {
            if (colOfRook[s] == 'p') {
                count++;
                break
            }
            else {
                break;
            }
        }
    }

    //Using the colOfRook array, the below loop checks
    //all elements north of the rook. Note that the 
    //loop moves from right to left of colOfRook.

    for (let n = colOfRook.indexOf('R') - 1; n >= 0; n--) {
        if (colOfRook[n] != '.') {
            if (colOfRook[n] == 'p') {
                count++;
                break
            }
            else {
                break;
            }
        }
    }

    return count
};
