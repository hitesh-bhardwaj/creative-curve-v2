import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '../lib';
import { Suspense } from 'react';

export default function WebglBackground() {
  return (
      <Canvas className='three_canvas'>
        <Suspense fallback={null}>
            <EffectComposer>
            <Fluid fluidColor='#000844' />
            </EffectComposer>
        </Suspense>
      </Canvas>
  );
}
