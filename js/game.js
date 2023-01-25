'use stirct'
// const MINES = '💣'
// const EMPTY = ''
// var gMines
// var gBoard


// function onInit() {
//     gBoard = buildBoard(4)
//     renderBoard(gBoard)

// }

// function buildBoard(length) {
//     var board = []
//     for (var i = 0; i < length; i++) {
//         board[i] = []
//         for (var j = 0; j < length; j++) {
//             board[i][j] = EMPTY

//             if (i === 3 && j === 1) board[i][j] = MINES
//             if (i === 0 && j === 2) board[i][j] = MINES
//         }
//     }
//     console.table(board)
//     return board
// }

// function renderBoard(board) {
//     var strHTML = '<table><tbody>'

//     for (var i = 0; i < board.length; i++) {
//         strHTML += '<tr>'
//         for (var j = 0; j < board[0].length; j++) {

//             var currCell = board[i][j]

//             var clasName = `cell cell-${i}-${j}`

//             strHTML += `<td class= ${clasName}"${currCell}>
//          </td>`

//         }
//         strHTML += '</tr>'
//     }
//     strHTML += '</tbody></table>'
//     var elBoard = document.querySelector('.board')
//     elBoard.innerHTML = strHTML
// }



// function setMinesNegsCount(rowIdx, colIdx) {
//     var negsCount = []
//     for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {

//         if (i < 0 || i >= gBoard.length) continue

//         for (var j = colIdx - 1; j <= colIdx + 1; j++) {

//             if (i === rowIdx && j === colIdx) continue

//             if (j < 0 || j >= gBoard[i].length) continue
//             if (gBoard[i][j] === MINES) negsCount++
//         }
//     }
//     console.log(negsCount);
//     return negsCount
// }

// function createMine(board) {
//     var mines = {
//         location: {
//             i: 3,
//             j: 1,
//         },
//         location: {
//             i: 0,
//             j: 2
//         },
//         currCellContent: ''
//     }
//     gMines.push(mines)
//     board[mines.location.i][mines.location.j] = MINES
    
//     return mines
// }


// function createMines() {
//     gMines - []
//     for (var i = 0; i < 2; i++) {
//         createMine(board)
//     }
// }

// function renderCell(locatin, value) {

//     var elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
//     elCell.innerHTML = value

// }

// function createMines() {
    //     gMines = []
    //     for (var i = 0; i < 2; i++) {
        //         createMine(mines)
        //     }
        // }
        
        // function renderMines() {
        //     for (var i = 0; i < gMines.length; i++) {
        //         var currMine = gMines[i]
        //         renderBoard(currMine.location)
        //     }
        // }




// function buildBoard() {
//     var board = []
//     for (var i = 0; i < 4; i++) {
//         board [i] = []
//         for (var j = 0; j < 4; j++) {
//             const cell = {mines}
//             board[i][j] =

//         }

//         console.table(board);
//         return board

//     }
// }








function onCellClicked() {

}



    // function createMine(board) {
    //     var mines = {
    //         location: {
    //             i: 2,
    //             j: 2
    //         },
    //         currCellContent: EMPTY
    //     }
    //     gMines.push(mines)
    //     board[mines.location.i][mines.location.j] = MINES
    // }

    // function createMines() {
    //     gMines = []
    //     for (var i = 0; i < 2; i++) {
    //         createMine(board)
    //     }
    // }






    // function renderCell(location, value) {
    //     // Select the elCell and set the value
    //     const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    //     elCell.innerHTML = value
    // }










    // function buildBoard() {
    //     var size = 4
    //     var board = []
    //     for (var i = 0; i < size; i++) {
    //         board.push([])
    //         for (var j = 0; j < size; j++) {
    //             board[i][j] = (Math.random() > 0.7) ? MINES : EMPTY
    //         }

    //     }
    //     console.table(board);
    //     return board
    // }

    // gBoard = setMinesNegsCount()
    // function setMinesNegsCount(board ,rowIdx, colIdx) {
    //     var negsCount = 0
    //     for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
    //         if (i < 0 || i >= gBoard.length) continue
    //         for (var j = colIdx - 1; j <= colIdx + 1; j++) {
    //             if (j < 0 || j >= gBoard[i].length) continue
    //             if (i === rowIdx && j === colIdx) continue
    //             var currCell = gBoard[i][j]
    //             if (currCell === MINES) negsCount++
    //             // if (board[i][j]) negsCount++
    //         }
    //     }
    //     console.log(negsCount);
    //     return negsCount
    // }


    // function buildBoard(board) {
    //     var size = 4
    //     var board = []
    //     for (var i = 0; i < size; i++) {
    //         board.push([])
    //         for (var j = 0; j < size; j++) {
    //             board[i][j] = EMPTY
    //         }

    //     }
    //     console.table(board);
    //     return board
    // }


    //     board[i][j] = EMPTY
    //     if (i === 3 && j === 1) board[i][j] = MINES
    //     if (i === 0 && j === 2) board[i][j] = MINES
// }