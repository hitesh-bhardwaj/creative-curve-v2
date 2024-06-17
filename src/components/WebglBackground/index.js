import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '../lib';
import { Suspense } from 'react';

export default function WebglBackground() {
  return (
    <Suspense fallback={null}>
      <Canvas className='three_canvas'>
        <EffectComposer>
          <Fluid fluidColor='#000844' />
        </EffectComposer>
      </Canvas>
    </Suspense>
  );
}
