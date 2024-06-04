import { EffectComposer } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber';
import { Fluid } from '../lib';
import { UseCanvas } from '@14islands/r3f-scroll-rig';

const CursorBg = () => {
    return (
        <UseCanvas
        style={{width: "100vw", height: "100vh"}}
         >
          <EffectComposer>
            <Fluid fluidColor='#0000ff' />
          </EffectComposer>
        </UseCanvas>
    );
};

export default CursorBg;