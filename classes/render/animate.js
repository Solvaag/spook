
class AnimatedImage {
    constructor(image, frame_rows, frame_columns, tile_size, position) {
        this.image = image;
        this.frame_rows = frame_rows;
        this.frame_columns = frame_columns;
        this.tile_size = tile_size;
        this.position = position;
        this.sub_images = this.split_image();
        this.index = 0;
    }

    split_image() {
        let sequence = [];

        for (let row = 0; row < this.frame_rows; row++) {
            for (let col = 0; col < this.frame_columns; col++) {
                let sx = col * this.tile_size;
                let sy = row * this.tile_size;
                let s_width = this.tile_size;
                let s_height = this.tile_size;
                let splice = new ImageSplice(sx, sy, s_width, s_height, this.position.x, this.position.y, this.tile_size, this.tile_size);
                sequence.push(splice)
            }
        }

        return sequence;

    }

    next() {
        this.index = (this.index + 1)  % this.sub_images.length;
    }

    move(point2d) {
        this.position.merge(point2d);

        for (let splice of this.sub_images) {
            splice.delta_x = this.position.x;
            splice.delta_y = this.position.y;
        }
    }

    draw(context) {
        let pointer = this.index;
        let i = this.sub_images[pointer];
        context.drawImage(this.image, i.sx, i.sy, i.s_width, i.s_height, i.delta_x, i.delta_y, i.delta_width, i.delta_height);
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