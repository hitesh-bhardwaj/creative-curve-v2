import React from 'react';
import { Image } from '@/components/webgl/Image';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '@/components/lib';
import { Text as DreiText } from '@react-three/drei';
import { UseCanvas } from '@14islands/r3f-scroll-rig';
import { Canvas } from '@react-three/fiber';

export default function Page() {

const Text = () => {
    return (
        <group >
            <DreiText
                letterSpacing={-0.07}
                fontSize={0.94}
                renderOrder={1}
                position-y={0.8}
                color='#fff'>
                REACT POST
            </DreiText>

            <DreiText
                letterSpacing={-0.07}
                position-y={-0.12}
                fontSize={0.94}
                color='#fff'>
                FLUID-DISTORTION
            </DreiText>

            <DreiText
                maxWidth={4.2}
                textAlign='center'
                fontSize={0.1}
                lineHeight={1.5}
                position-y={-1}
                color='#fff'>
                A FLUID POST PROCESSING DISTORTION EFFECT MADE TO WORK WITH THE REACT-THREE-FIBER
                EFFECT COMPOSER. MOVE YOUR MOUSE AROUND TO SEE HOW IT INTERRACT WITH THE 3D OBJECTS
                IN THE SCENE.
            </DreiText>
        </group>
    )
}

  return (
    <>
        <Canvas style={{height: "100vh", width: "100vw"}}>
            <Text />
            <EffectComposer>
                <Fluid fluidColor='#5D5AD6' backgroundColor='#000' showBackground/>
            </EffectComposer>
        </Canvas>
        <Image className="Placeholder" src="/bg.jpg" />
    </>
  );
}