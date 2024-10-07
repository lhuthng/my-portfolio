import React, { useEffect } from 'react';
import bo1 from '../images/bo-1.png';
import bo2 from '../images/bo-2.png';
import bo3 from '../images/bo-3.png';
import bo4 from '../images/bo-4.png';
import bo5 from '../images/bo-5.png';
import bo6 from '../images/bo-6.png';
import bo7 from '../images/bo-7.png';
import bo8 from '../images/bo-8.png';
import bo9 from '../images/bo-9.png';
import bo10 from '../images/bo-10.png';
import bo11 from '../images/bo-11.png';
import bo12 from '../images/bo-12.png';
import bo13 from '../images/bo-13.png';

interface Props {
	backgroundColor?: string;
}

const backgroundObjects = [ bo1, bo2, bo3, bo4, bo5, bo6, bo7, bo8, bo9, bo10, bo11, bo12, bo13].map(bo => {
    const image = new Image();
    image.src = bo;
    return image;
});

class Star {
	x: number;
	y: number;
	alpha: number;
	dir: number;
	type: number;
	constructor(width: number, height: number) {
		this.x = Math.random() * width;
		this.y = Math.random() * height;
		this.type = Math.floor(Math.random() * 3);
		this.alpha = Math.random();
		this.dir = (0.2 + Math.random() * 0.8) / 50;
	}
	
	update(): Star {
		this.alpha += this.dir;
		if (this.alpha > 1 && this.dir > 0) {
			this.alpha = 2 - this.alpha;
			this.dir *= -1;
		}
		else if (this.alpha < 0 && this.dir < 0) {
			this.alpha *= -1;
			this.dir *= -1;
		}
		return this;
	}
	
	draw(canvas: CanvasRenderingContext2D): Star {
		const color = `rgba(255, 255, 255, ${this.alpha || 1})`;
		canvas.fillStyle = color;
		switch (this.type) {
			case 1: 
				canvas.fillRect(this.x, this.y, 2, 2); break;
			case 2: 
				canvas.fillRect(this.x + 2, this.y, 2, 6);
				canvas.fillRect(this.x, this.y + 2, 6, 2);
				break;
			default:
				canvas.fillRect(this.x, this.y, 4, 4); break;
		}
		return this;
	}
}

class FloatingObject {
	x: number;
	y: number;
	rotation: number;
	index: number;
	lifeTime: number;
	dir: {
		x: number;
		y: number;
		rotation: number;
	}
	alpha: number;
	initialTime: number;
	constructor(width: number, height: number, initialTime: number) {
		this.x = Math.random() * width;
		this.y = Math.random() * height;
		this.rotation = Math.random() * 3.14;
		this.index = Math.floor(Math.random() * backgroundObjects.length);
		this.lifeTime = 10 + Math.random() * 50;
		this.dir = {
			x: (Math.random() - 0.5) / 6,
			y: (Math.random() - 0.5) / 6,
			rotation: ((Math.random() - 0.5) / 628),
		}
		this.initialTime = initialTime - Math.random() * this.lifeTime * 1000;
		this.alpha = 0;
	}
	init(width: number, height: number, initialTime: number) {
		this.x = Math.random() * width;
		this.y = Math.random() * height;
		this.rotation = Math.random() * 3.14;
		this.index = Math.floor(Math.random() * backgroundObjects.length);
		this.lifeTime = 10 + Math.random() * 50;
		this.dir = {
			x: (Math.random() - 0.5) / 6,
			y: (Math.random() - 0.5) / 6,
			rotation: ((Math.random() - 0.5) / 628)
		}
		this.initialTime = initialTime;
		this.alpha = 0;
	}
	update(time: number, width: number, height: number): FloatingObject {
		const { x: dx, y: dy, rotation: dr } = this.dir;
		this.x += dx;
		this.y += dy;
		this.rotation += dr;
		
		const ellapsedTime = (time - this.initialTime) / 1000;
		if (ellapsedTime > this.lifeTime) {
			this.init(width, height, time);
		}
		else if (ellapsedTime > this.lifeTime / 2) {
			this.alpha = 1 - (2 * ellapsedTime - this.lifeTime) / this.lifeTime;
		}
		else {
			this.alpha = 1 - (this.lifeTime - 2 * ellapsedTime) / this.lifeTime;
		}
		return this;
	}

	draw(canvas: CanvasRenderingContext2D): FloatingObject {
		const image = backgroundObjects[this.index];
		canvas.translate(this.x ,this.y);
		canvas.rotate(this.rotation);
		canvas.globalAlpha = this.alpha;
		canvas.drawImage(image, -image.width / 1, -image.height / 2);
		canvas.globalAlpha = 1;
		canvas.rotate(-this.rotation);
		canvas.translate(-this.x, -this.y);
		return this;
	}
}

const StarBackground: React.FC<Props> = (props: Props) => {
	const { backgroundColor = 'black' } = props;
	useEffect(() => {
		const canvas = document.getElementById('starfield') as HTMLCanvasElement;

		if (canvas) {
			const c = canvas.getContext('2d');
            

			if (c) {
                
				let initialWidth = window.visualViewport?.width || window.innerWidth;
				let initialHeight = window.visualViewport?.height || window.innerHeight;

				const setCanvasExtents = () => {
					canvas.width = initialWidth;
					canvas.height = initialHeight;
				};

				setCanvasExtents();

				window.onresize = () => {
					setCanvasExtents();
				};

				let stars: Star[];
				let floatingObjects: FloatingObject[];
				const clear = () => {
					c.fillStyle = backgroundColor;
					c.fillRect(0, 0, canvas.width, canvas.height);
				};

				const init = (time: number) => {
					requestAnimationFrame(tick);
					const starCount = initialWidth * initialHeight * 1000 / (1920 * 1080);
					const objectCount = initialWidth * initialHeight * 25 / (1920 * 1080);
					stars = Array.from({ length: starCount >> 0 }, () => new Star(initialWidth, initialHeight));
					floatingObjects = Array.from( { length: objectCount >> 0 }, () => new FloatingObject(initialWidth, initialHeight, time));
				};

				const tick = (time: number) => {
					clear();
					stars.forEach(star => star.update().draw(c));
					floatingObjects.forEach(floatingObject => floatingObject.update(time, initialWidth, initialHeight).draw(c));

					requestAnimationFrame(tick);
				};

				requestAnimationFrame(init);

				// add window resize listener:
				window.addEventListener('resize', function () {
					initialWidth = window.visualViewport?.width || window.innerWidth;
					initialHeight = window.visualViewport?.height || window.innerHeight;
					setCanvasExtents();
				});
			} else {
				console.error('Could not get 2d context from canvas element');
			}
		} else {
			console.error('Could not find canvas element with id "starfield"');
		}

		return () => {
			window.onresize = null;
		};
	}, [backgroundColor]);

	return (
		<canvas
			id="starfield"
			style={{
				padding: 0,
				margin: 0,
				position: 'fixed',
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
				zIndex: -888,
				opacity: 1,
				pointerEvents: 'none',
				mixBlendMode: 'screen',
			}}
		></canvas>
	);
}

export default StarBackground;