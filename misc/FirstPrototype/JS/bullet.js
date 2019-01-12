function Bullet(vector2, currentPos) {
	this.vector = vector2;
	this.lifetime = 120;
	this.getDimensions: function() {},
	this.currentPos = currentPos;
	this.previousPos = {x:320, y:240};
	this.update = function() {
					this.currentPos.x += this.vector.x;
					this.currentPos.y += this.vector.y;
					this.lifetime--; };
};

