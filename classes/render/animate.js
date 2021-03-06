
class AnimatedImage {
    constructor(image, frame_rows, frame_columns, tile_size, position) {
        this.image = image;
        this.frame_rows = frame_rows;
        this.frame_columns = frame_columns;
        this.tile_size = tile_size;
        this.position = position;
        this.sub_images = this.split_image();
        this.index = 0;
        this.update_rate = 1;
        this.frame = 0;
    }

    split_image() {
        console.log("I happened!");
        let sequence = [];

        for (let row = 0; row < this.frame_rows; row++) {
            for (let col = 0; col < this.frame_columns; col++) {
                let sx = col * this.tile_size;
                let sy = row * this.tile_size;
                let s_width = this.tile_size;
                let s_height = this.tile_size;
                const splice = new ImageSplice(sx, sy, s_width, s_height, this.position.x, this.position.y, this.tile_size, this.tile_size);
                sequence.push(splice);
                console.log(splice)
            }
        }

        return sequence;

    }

    next() {

        this.frame = (this.frame + 1) % this.update_rate;


        if (this.frame === 0) {
            this.index = (this.index + 1)  % this.sub_images.length;
        }

    }

    move(point2d) {
        this.position.merge(point2d);
    }

    draw(context) {
        let pointer = this.index;
        let i = this.sub_images[pointer];

        context.drawImage(this.image, i.sx, i.sy, i.s_width, i.s_height, this.position.x, this.position.y, i.delta_width, i.delta_height);
        this.next();
    }

    set frame_rate(input) {
        if (input > 0) {
            this.update_rate = input;
        }
    }

}

class ImageSplice {
    constructor(sx, sy, s_width, s_height, delta_x, delta_y, delta_width, delta_height) {
        this.sx = sx;
        this.sy = sy;
        this.s_width = s_width;
        this.s_height = s_height;
        this.delta_x = delta_x;
        this.delta_y = delta_y;
        this.delta_width = delta_width;
        this.delta_height = delta_height;
    }

}