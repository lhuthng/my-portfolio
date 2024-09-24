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
	speedFactor?: number;
	backgroundColor?: string;
	starCount?: number;
    objectCount?: number;
}

const backgroundObjects = [ bo1, bo2, bo3, bo4, bo5, bo6, bo7, bo8, bo9, bo10, bo11, bo12, bo13].map(bo => {
    const image = new Image();
    image.src = bo;
    return image;
});

export default function StarBackground(props: Props) {
	const { speedFactor = 0.05, backgroundColor = 'black', starCount = 2000, objectCount = 15 } = props;

	useEffect(() => {
		const canvas = document.getElementById('starfield') as HTMLCanvasElement;

		if (canvas) {
			const c = canvas.getContext('2d');
            

			if (c) {
                c.filter = 'drop-shadow(0 0 0.3rem white)';
                
				let w = window.innerWidth;
				let h = window.innerHeight;

				const setCanvasExtents = () => {
					canvas.width = w;
					canvas.height = h;
				};

				setCanvasExtents();

				window.onresize = () => {
					setCanvasExtents();
				};

				const makeStars = (count: number) => {
					const out = [];
					for (let i = 0; i < count; i++) {
						const s = {
                            x: Math.random() * window.innerWidth - window.innerWidth / 2,
                            y: Math.random() * window.innerHeight - window.innerHeight / 2,
                            type: Math.floor(Math.random() * 3),
                            a: Math.random(),
                            r: (0.2 + Math.random() * 0.8) / 50
						};
						out.push(s);
					}
					return out;
				};

                const makeObjects = (count: number) => {
                    const out = [];
                    for (let i = 0; i < count; i++) {
                        out.push({
                            x: Math.random() * window.innerWidth - window.innerWidth / 2,
                            y: Math.random() * window.innerHeight - window.innerHeight / 2,
                            r: Math.random() * 3.14,
                            index: Math.floor(Math.random() * backgroundObjects.length),
                            d: {
                                x: (Math.random() - 0.5) / 10,
                                y: (Math.random() - 0.5) / 10,
                                r: ((Math.random() - 0.5) / 3141)
                            }
                        })
                    }
                    return out;
                }

				let stars = makeStars(starCount);
                let objects = makeObjects(objectCount);

				const clear = () => {
					c.fillStyle = backgroundColor;
					c.fillRect(0, 0, canvas.width, canvas.height);
				};

				const putPixel = (x: number, y: number, type?: number, alpha?: number) => {
					const rgb = `rgba(255, 255, 255, ${alpha || 1})`;
					c.fillStyle = rgb;
                    switch (type) {
                        case 1: 
                            c.fillRect(x, y, 2, 2); break;
                        case 2: 
                            c.fillRect(x + 2, y, 2, 6);
                            c.fillRect(x, y + 2, 6, 2);
                            break;
                        default:
                            c.fillRect(x, y, 4, 4); break;
                    }
				};

				const init = (time: number) => {
					requestAnimationFrame(tick);
				};

				const tick = (time: number) => {
					clear();
					for (var i = 0; i < stars.length; i++) {
						const star = stars[i];
                        const { x, y, a, r } = star;
                        star.a += r;
                        if (a > 1 && r > 0) {
                            star.a = 2 - a;
                            star.r *= -1;
                        } 
                        else if (a < 0 && r < 0) {
                            star.a = -star.a;
                            star.r *= -1;
                        }
						putPixel(canvas.width / 2 + x, canvas.height / 2 + y, star.type, star.a);
					}
                    for (var i = 0; i < objects.length; i++) {
                        const object = objects[i];
                        object.x += object.d.x;
                        object.y += object.d.y;
                        object.r += object.d.r;
                        const image = backgroundObjects[object.index];
                        const x = canvas.width / 2 + object.x;
                        const y = canvas.height / 2 + object.y;
                        c.translate(x, y);
                        c.rotate(object.r);
                        c.drawImage(image, 
                            - image.width / 2, 
                            - image.height / 2
                        );
                        c.rotate(-object.r);
                        c.translate(-x, -y);
                    }

					requestAnimationFrame(tick);
				};

				requestAnimationFrame(init);

				// add window resize listener:
				window.addEventListener('resize', function () {
					w = window.innerWidth;
					h = window.innerHeight;
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
	}, [backgroundColor, speedFactor, starCount]);

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
				zIndex: 0,
				opacity: 1,
				pointerEvents: 'none',
				mixBlendMode: 'screen',
			}}
		></canvas>
	);
}