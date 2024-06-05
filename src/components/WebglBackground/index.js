'use client'
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Fluid } from "../lib";

export default function WebglBackground () {
    return (
        <>
            <Canvas className='three_canvas'>
                <EffectComposer>
                    <Fluid fluidColor='#5D0099' />
                </EffectComposer>
            </Canvas>
        </>
    )
}