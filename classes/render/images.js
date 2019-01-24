
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