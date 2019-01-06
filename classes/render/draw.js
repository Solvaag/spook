
class Draw{
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    }

    draw_polygon(poly) {

    }

}

class Polygon {
    constructor(position, style) {
        this.position = position; // Expects a point
        this.style = style; // fill, stroke, clear
    }

    get get_position() {
        return this.position;
    }

    get get_style() {
        return this.style;
    }
}

class Rectangle extends Polygon{
    constructor(position, style, dimensions) {
        super(position, style);
        this.dimensions = dimensions;
    }

    draw(context){
        let width = this.dimensions[0];
        let height = this.dimensions[1];
        let pos = this.position.position()
        let x = pos.x;
        let y = pos.y;

        switch (this.style) {
            case 'fill':
                context.fillRect(x,y,width, height);
                break;
            case 'stroke':
                context.strokeRect(x,y,width, height);
                break;
            case 'clear':
                context.clearRect(x,y,width, height);
                break;
            default:
                console.log('No style specified.')
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

