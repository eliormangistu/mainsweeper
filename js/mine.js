'use strict'

const MINES = '💣'


function onInit() {
    var gBoard = createBoard()
    renderBoard(gBoard)

}

var gLevel = {
    SIZE: 4,
    MINES: 2
}

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}


function createBoard() {
    var board = []
    for (var i = 0; i < 4; i++) {
        cinema[i] = []
        for (var j = 0; j < 4; j++) {
            var cell = {
                eachcell: {
                    minesAroundCount: 4,
                    isShown: false,
                    isMine: false,
                    isMarked: true

                }
            }
            board[i][j] = cell
        }

        board[1][3] === MINES
        board[2][2] === MINES
        console.table(board);
        return board
    }
}


function renderBoard() {
    var strHTML = ``

    for (var i = 0; i < gBoard.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < gBoard[0].length; j++) {

            var cells = gBoard[i][j]

            var clasName = `cell ${i}-${j}`

            strHTML += `<td class= ${clasName}">
         </td>`

        }
        strHTML += '</tr>'
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}














// function createCells() {
//     var cells = []
//     for (var i = 0; i < 4; i++) {
//         cells[i] = []
//         for (var j = 0; j < 4; j++) {
//             cells[i][j] = cells.push(eachcell)
//         }
//     } console.table(cells)
//     return cells
// }
















// const MINES = '💣'
// var gMines

// function createMine() {
//     const mines = {
//         location: {
//             i: 3,
//             j: 1,
//         },
//         location: {
//             i: 0,
//             j: 2
//         }
//     }
//     gMines.push(mines)
//     board[mines.location.i][mines.location.j] = MINES

// }

// function createMines() {
//     gMines - []
//     for (var i = 0; i < 2; i++) {
//         createMine(board)
//     }
// }

// setMinesNegsCount()
// function setMinesNegsCount(rowIdx, colIdx, mat) {
//     var negsCount = []
//     for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {

//         if (i < 0 || i >= gBoard.length) continue

//         for (var j = colIdx - 1; j <= colIdx + 1; j++) {

//             if (i === rowIdx && j === colIdx) continue

//             if (j < 0 || j >= gBoard[i].length) continue

//             var currCell = gBoard[i][j]
//             if (currCell === MINES) negsCount.push({ i: i + 1, j: j + 1 })

//         }
//         return board
//     }
//     console.log(negsCount);
// }
