'use strict'

const MINES = '💣'
const FLAGS = '🚩'

var gLevel
var gGame
var gBoard
var gMines
var gElSelectedCell = null


function onInit() {
    gBoard = buildBoard()
    renderBoard(gBoard)

}

gLevel = {
    SIZE: 4,
    MINES: 2
}

gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}


function buildBoard() {
    var board = []
    for (var i = 0; i < 4; i++) {
        board[i] = []
        for (var j = 0; j < 4; j++) {
            const cell = {
                minesAroundCount: 4,
                isShown: false,
                isMine: false,
                isMarked: true

            }

            board[i][j] = cell
        }
    }

    board[0][3].isMine = true
    board[1][2].isMine = true
    // console.log(board)
    return board
}


function onCellClicked(elCell, i, j) {
    const cell = gBoard[i][j]



    // if (cell.isShown || cell.isMarked) return

    console.log('Cell clicked: ', elCell, i, j);


    if (!cell.isShown) {
        elCell.innerHTML = cell.isMine ? MINES : countNegs(i, j, gBoard)
        elCell.classList.add('show')

    }

    
}

function onCellMarked(elCell,i,j) {
    
    console.log('elc', elCell,i,j);
}


document.oncontextmenu = RightMouseDown;
document.onmousedown = mouseDown;

function mouseDown(elCell) {
      if (elCell.which == 3) {
        alert(FLAGS)
      }
}

function RightMouseDown() {
    return false;
}


function renderBoard() {
    var strHTML = ``

    for (var i = 0; i < gBoard.length; i++) {
        strHTML += '<tr>\n'
        for (var j = 0; j < gBoard[0].length; j++) {
            const cell = gBoard[i][j]

            var cellToShow = cell.isMine ? MINES : countNegs(i, j, gBoard)
            // var cellToHide = cell.isMarked ? FLAGS : ''

            strHTML += `\t<td class = "cell  ${cellToShow}  "onClick="onCellClicked(this,${i}, ${j})" "onClick = "onCellMarked(this,${i}, ${j})" ></td>\n`



        }
        strHTML += '</tr>\n'
    }
    // console.log(strHTML);
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}



// var res = countNegs(0,2,gBoard)
// console.log('negs count',res);
function countNegs(rowIdx, colIdx, board) {
    var negsCount = 0
    // console.log(board);
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {

        if (i < 0 || i >= board.length) continue

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {

            if (i === rowIdx && j === colIdx) continue

            if (j < 0 || j >= board[i].length) continue

            var currCell = board[i][j]
            if (currCell.isMine) negsCount++

        }
    }
    return negsCount
}


function gameOver() {

}


