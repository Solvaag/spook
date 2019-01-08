

class GameBoard {

    constructor(row_length, column_length, position) {
        this.row_length = row_length;
        this.column_length = column_length;
        this.game_board = [];
        this.position = position;

        this.generate_board();
    }

    generate_board() {

        for (let row = 0; row < this.column_length; row++) {
            let cell_line = [];
            for (let col = 0; col < this.row_length; col++) {
                let cell = new BoardCell('black', 0, col, row, 0);
                cell_line.push(cell);
            }
            this.game_board.push(cell_line);
        }
    }

    get get_position() {
        return this.position;
    }

    read_cell(row, col) {
        return this.game_board[row][col];
    }

    write_cell(row, col, value) {
        this.game_board[row][col].tile_value = value;
    }

    get board_as_list(){
        let result = [];

        for (let row = 0; row < this.column_length; row++) {
            for (let col = 0; col < this.row_length; col++) {
                let cell = this.read_cell(row, col);
                result.push(cell);
            }
        }

        return result;

    }

    get board_as_priority_map() {
        let board_map = new Map();

        for (let row = 0; row < this.column_length; row++) {
            for (let col = 0; col < this.row_length; col++) {
                let cell = this.read_cell(row, col);
                let level = cell.z_level;
                if (board_map.has(level)) {
                    let lane = board_map.get(level);
                    lane.push(cell);
                } else {
                    board_map.set(level, [])
                    let lane = board_map.get(level);
                    lane.push(cell);
                }
            }
        }

        return board_map;
    }

}

class BoardCell {

    constructor (color, tile_value, column, row, z_level) {
        this.color = color;
        this.tile_value = tile_value;
        this.column = column;
        this.row = row;
        this.z_level = z_level;
    }

    make_position(tile_size) {
        let x = tile_size * this.column;
        let y = tile_size * this.row;

        return new Point2D(x,y);
    }

}