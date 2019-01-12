function Asteroid() {

	this.vector = {x:0, y:0};
	this.position = {x: 0, y:0};

	this.width = 32;
	this.height = 32;

	this.update = function() {

		this.position.x += this.vector.x;
		this.position.y += this.vector.y;

	}

}; 

