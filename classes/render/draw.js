
class Draw{
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    }

    draw_polygon(poly) {

        poly.draw(this.context);

    }

}

/*
class Style{

    valid_style_keys = ['stroke_style', 'fill_style', 'stroke_color', 'fill_color', 'close_path'];

    styles = new Map();

    constructor(args) {
        /*
        * args should be a map
        * */ /*
        this.args = args;
        this.process_arguments();
    }

    process_arguments(){

        for (let [key, value] of this.args) {
            if (this.valid_style(key)) {
                this.styles[key] = value;
            }
        }

    }

    valid_style(style_key){
        return this.valid_style_keys.includes(style_key);
    }
} */


class Polygon {


    constructor(position, geometry) {
        this.position = position; // Expects a point
        this.geometry = geometry; // should be a list of Points
    }

    get get_position() {
        return this.position;
    }


    get get_geometry() {
        return this.geometry;
    }

    draw(context) {


        context.moveTo(this.position.x, this.position.y);

        for (let point of this.geometry) {
            context.lineTo(point.x, point.y);
        }

    }
}


class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get get_x() {
        return this.x;
    }

    get get_y() {
        return this.y;
    }

    get position() {
        return {x:this.x, y:this.y};
    }

    merge(point) {
        this.x += point.x;
        this.y += point.y;
    }
}

class Point3D extends Point2D {
    constructor(x, y, z) {
        super(x,y);
        this.z = z;
    }

    get get_z() {
        return this.z;
    }

    get position() {
        return {x:this.x, y:this.y, z:this.z};
    }
}

