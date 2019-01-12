var spaceship = {

	posX: 0,
	posY: 0,
	topSpeed: 5,
	vector2: {
		x: 0,
		y: 0
	},
	radians: 0, 
	dimensions: {
		width: 32,
		height: 32,
	},

	worldPosition: {x: 0, y:0},

	mouseEvent: {},
	hasHitCameraBound: false,

	update: function(events) {

		this.mouseEvent = events.mouseEvent;

		//this.posX = this.posX  + this.vector2.x;
		//this.posY = this.posY + this.vector2.y;

		
		this.radians = this.getRadiansFromMouse();

		this.getShipDirection();

	},

	getRadiansFromMouse: function () { // mouse event

		if (mouseEvent !== null) {
			var spaceshipCenter = spaceship.getCenter();
			var dx =  mouseEvent.clientX - spaceshipCenter.x;

			var dy =  mouseEvent.clientY - spaceshipCenter.y;
			var radians = Math.atan2(dy, dx);
						
			return radians;

		} else {
			return 0;

		}
			

	},

	accelerate: function() { // mouse event

		if (mouseEvent !== null) {
			var direction = this.getShipDirection(); 

			var dx =  0;
			var dy =  0;
			
			switch (direction) {
			case 0: 
				
				dx = -1;
				break;
			case 1: 
				
				dx = -1;
				dy = -1;
				break;
			case 2: 
				
				dy = -1;
				break;
			case 3: 
				
				dx = +1;
				dy = -1;
				break;
			case 4: 
				
				dx = +1;
				break;
			case 5: 
				
				dx = +1;
				dy = +1;
				break;
			case 6: 
				
				dy = +1;
				break;
			case 7: 

				dy = +1;
				dx = -1;
				break;

			}

			
			this.vector2.x += dx;
			this.vector2.y += dy; 
			
		} else {
			// do nothing
		}
	},

	decelerate: function() {},

	fullStop: function() {

		this.vector2.x = 0;
		this.vector2.y = 0;

		console.log("Full Stop!");

	},

	getCenter: function() {
		var _centerX = this.posX + 16;
		var _centerY = this.posY + 16;
		return {x: _centerX, y:_centerY};
	},

	getRadians: function() {
		return this.radians;
	},


	getVector: function() {
		return this.vector2;
	},

	shipHasHitBound: function() {
		this.hasHitCameraBound = true;
	},

	getShipDirection: function() {


		var direction = 0;

		var shipDegrees = this.convertRadiansToDegrees(this.radians);

		//console.log(shipDegrees);

		if (shipDegrees > 337.5 || shipDegrees < 22.5) {
			// do nothing 
		} 
		else if (shipDegrees < 67.5) {
			direction = 1;
		}
		else if (shipDegrees < 112.5){
			direction = 2;
		}
		else if (shipDegrees < 157.5){
			direction = 3;
		}
		else if (shipDegrees < 202.5){
			direction = 4;
		}
		else if (shipDegrees < 247.5){
			direction = 5;
		}
		else if (shipDegrees < 292.5){
			direction = 6;
		}
		else if (shipDegrees < 337.5){
			direction = 7;
		}
 
		return direction;
	},

	getShipCompassDirection: function(direction) {

		var result = 0;

		switch (direction) {
			case 0: 
				result = "West";
				break;
			case 1: 
				result = "North West";
				break;
			case 2: 
				result = "North";
				break;
			case 3: 
				result = "North East";
				break;
			case 4: 
				result = "East";
				break;
			case 5: 
				result = "South East";
				break;
			case 6: 
				result = "South";
				break;
			case 7: 
				result = "South West";
				break;

		}

		return result; 
	},


	convertRadiansToDegrees: function (radians) {

		var value = ((radians / (Math.PI / 180)) + 180) % 360;

		return value; 
	}


};