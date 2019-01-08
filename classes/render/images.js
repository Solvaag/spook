

class ImageResource {

    constructor (path, msg_target) {
        this.path = path;
        this.msg_target = msg_target;
        this.load_status = -1;
        this.image = null;
        this.load_image();
    }

    load_image() {

        this.image = new Image();
        this.image.onload = this.on_load();
        this.image.src = this.path;

    }

    on_load() {
        return function(){
            let self = this;
            self.load_status = 0;
            self.msg_target.set(this.path, 0);
        };
    }

    is_loaded() {
        return this.load_status === 0;
    }

}