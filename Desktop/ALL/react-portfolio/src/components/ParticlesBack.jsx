import React from 'react'
import { useCallback } from "react";
import Particles from "react-particles";

import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.



const ParticlesBack = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
     
        await loadSlim(engine);

    
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    
    return <div><Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        background: {
        //     color: {
        //         value: "bg-gray-700",
        //     },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                fpsLimit:60,

                interactivity:{
                    events:{
                        onClick:{
                            enable:true,
                            mode:"push",
                        }
                    }
                },
                onHover: {
                    enable: true,
                    mode:"repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 3,
                },
                repulse: {
                    distance: 100,
                    duration: 0.3,
                },
                // grab:{
                //     distance:200,
                //     link_linked:{
                //         opacity:0.4,
                //     }
                // }
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                direction:"none",
                enable: true,
                outModes: {
                    default:"bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 1500,
                },
                limit:65,
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3},
            },
        },
        detectRetina: true,
    }}
/></div>
}

export default ParticlesBack