import { Canvas } from '@react-three/fiber';
import { EffectComposer } from '@react-three/postprocessing';
import { Fluid } from '../lib';
import { Suspense } from 'react';

export default function WebglBackground() {
  return (
      <Canvas className='three_canvas'>
            <EffectComposer>
                <Suspense fallback={null}>
                    <Fluid fluidColor='#000844' />
                </Suspense>
            </EffectComposer>
      </Canvas>
  );
}
