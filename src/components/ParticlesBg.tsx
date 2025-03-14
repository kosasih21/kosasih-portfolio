import { useEffect, useState } from 'react';
import {Particles, initParticlesEngine} from '@tsparticles/react';
import {
    type Container,
  } from "@tsparticles/engine";
import { loadSlim } from '@tsparticles/slim';

const ParticlesBg = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
          await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
    }, []);


    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };
      
    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                style={{
                    position: 'absolute', // ✅ Dynamic height based on parent container
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                }}
                options={{
                    fullScreen: { enable: true, zIndex: -1 },
                    particles: {
                        number: {
                            value: 100,
                            density: { enable: true, area: 800 },
                        },
                        color: {
                            value: ['#00ff00', '#32cd32', '#7fff00', '#228b22', '#66ff66', '#00cc00'],
                            animation: {
                                h: {
                                    enable: false,
                                },
                                s: {
                                    enable: false,
                                },
                                l: {
                                    enable: false,
                                },
                            },
                        },                                         
                        shape: {
                            type: ['circle', 'triangle', 'square'], // Cycles between circle and triangle
                        },
                        opacity: { value: 0.5 },
                        size: {
                            value: 2.75,
                            random: true,
                        },                        
                        move: {
                            enable: true,
                            speed: 2,
                            direction: 'bottom',
                            outModes: { default: 'out' },
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: '#00ff00',
                            opacity: 0.5,
                            width: 1,
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                            push: {
                                quantity: 4,
                            },
                        },
                    },
                    detectRetina: true,
                }}
            />
        );
    }
};

export default ParticlesBg;
