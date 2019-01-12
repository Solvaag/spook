

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

    confirm_load() {
        if (this.image.complete) {
            this.load_status = 0;
            return this.load_status;
        } else {
            return this.load_status;
        }
    }

    on_load() {
        return function(){
            console.log(this);
        };
    }

    is_loaded() {
        return this.load_status === 0;
    }

}