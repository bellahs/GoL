
function generator(matLen, gr, grEat, pred, r, ev, mg) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < r; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < ev; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    for (let i = 0; i < mg; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    }
    return matrix;

}
GrassArr = []
GrassEaterArr = []
PredatorArr = []
RainArr = []
EvilArr = []
MagArr = []
let side = 20;

let matrix = generator(15, 45, 15, 5, 6, 6, 6);

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                GrassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gr = new GrassEater(x, y)
                GrassEaterArr.push(gr)
            }
            else if (matrix[y][x] == 3) {
                var gr = new Predator(x, y)
                PredatorArr.push(gr)
            }
            else if (matrix[y][x] == 4) {
                var gr = new Rain(x, y)
                RainArr.push(gr)
            }
            else if (matrix[y][x] == 5) {
                var gr = new Evil(x, y)
                EvilArr.push(gr)
            }
            else if (matrix[y][x] == 6) {
                var gr = new Mag(x, y)
                MagArr.push(gr)
            }
        }
    }
}




function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("#05ff00");
            }
            else if (matrix[y][x] == 2) {
                fill("#fffb00");
            }
            else if (matrix[y][x] == 3) {
                fill("#ff0000")
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac")
            }
            else if (matrix[y][x] == 6) {
                fill("white")
            } else if (matrix[y][x] == 5) {
                fill('black');
            }
            else if (matrix[y][x] == 4) {
                fill("#00eaff")
            }



            rect(x * side, y * side, side, side);

            

        }
    }




    for (var i in GrassArr) {
        GrassArr[i].mul();

    }
    for (var i in GrassEaterArr) {
        GrassEaterArr[i].mul()
        GrassEaterArr[i].eat()
    }

    for (var i in PredatorArr) {
        PredatorArr[i].mul()
        PredatorArr[i].eat()
    }

    for (var i in RainArr) {
        if (GrassArr.length <= 5) {
            RainArr[i].mul()
        }
    }
    for (var i in EvilArr) {
        if (PredatorArr.length <= 5) {
            EvilArr[i].mul()
        }
    }
    for (var i in MagArr) {
        if (GrassEaterArr.length <= 5) {
            MagArr[i].mul()
        }
    }

}