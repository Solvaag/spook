
class ImageManager {

    constructor(manager) {
        this.manager = manager;
        this.images = new Map();
        this.loaded = true;
        this.loaded_count = 0;
        this.total_count = 0;
    }

    load_image(id, url, callback){
        this.total_count++;
        this.loaded = false;

        let image = new Image();
        image.src = url;
        image.onload = callback;
        this.images.set(id, image);
    }

    all_done() {
        return this.loaded;
    }

    item_loaded() {
        this.loaded_count++;
        console.log("Image loaded!");

        if(this.loaded_count === this.total_count) {
            this.loaded = true;
            console.log("All images loaded!");
            if (this.onload) {
                this.onload();
                this.onload = undefined;
            }
        }
    }
}

class SpriteSheet {

    constructor(image, columns, tile_height, tile_width) {
        this.image = image;
        this.columns = columns;
        this.rows = (image.height / tile_height);
        this.tile_height = tile_height;
        this.tile_width = tile_width;
        this.images = this.split_image();
    }

    split_image() {
        let sequence = [];
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                let sx = col * this.tile_width;
                let sy = row * this.tile_height;
                let s_width = this.tile_width;
                let s_height = this.tile_height;
                const sprite = new SpriteElement(sx, sy, s_width, s_height);
                sequence.push(sprite);
            }
        }
        return sequence;
    }

    draw(sprite_id, position, canvas) {
        let sprite = this.images[sprite_id];

        let delta_width = this.tile_width;
        let delta_height = this.tile_height;
        canvas.drawImage(this.image, sprite.sx, sprite.sy, sprite.s_width, sprite.s_height, position.x, position.y, delta_width, delta_height);

    }

}

class SpriteElement {
    constructor (sx, sy, s_width, s_height){
        this.sx = sx;
        this.sy = sy;
        this.s_width = s_width;
        this.s_height = s_height;
    }
}