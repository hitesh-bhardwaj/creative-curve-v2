import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'
// import gsap from "gsap";
import { WebGLRenderTarget } from 'three'
import { useEffect } from 'react'

export default function Ripple() {

    const vertex = `
        uniform float uTime;

        varying vec2 vUv;

        void main() {

            vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
            gl_Position = projectionMatrix * mvPosition;
            
            vUv = uv;
        }
    `

    const fragment = `
        uniform sampler2D uTexture;
        uniform sampler2D uDisplacement;
        uniform sampler2D uTitle;
        
        
        uniform float uTime;
        uniform float uProgress;
        
        varying vec2 vUv;
        
        float PI = 3.141592653589793238;
        
        void main() {
        vec4 displacement = texture2D(uDisplacement, vUv);
        
        float theta = displacement.r * 2. * PI;     // Angle Between 0 an 2PI
        vec2 direction = vec2(sin(theta), cos(theta));
        vec2 newUv = vUv + direction * displacement.r * 0.1;
        
        vec4 color = texture2D(uTexture, newUv);
        
        float grayScale = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        // float grayScale = dot(color.rgb, vec3(0.));
        
        vec3 pixi = mix(vec3(grayScale), color.rgb, theta / (2. * PI));
        
        gl_FragColor = vec4(pixi, 1.0);
        
        
        }
    `

    useEffect(()=> {
        /**
 * Base
 */
// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
const scene1 = new THREE.Scene()

/**
 * Textures
 */
 const textureLoader = new THREE.TextureLoader()
 const brush = textureLoader.load('/brush.png')
 const bg = textureLoader.load('/textures/bg.jpg')

 // Sizes Object initialisation
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * Object
 */
const material = new THREE.ShaderMaterial({
   vertexShader: vertex,
   fragmentShader: fragment,
   side: THREE.DoubleSide,
   uniforms: {
       uTime: {value: 0},
       uMouseMove: {value: null},
       uTexture: {value: bg},
       uDisplacement: {value: null},
       uProgress: {value: 0},
   }
});

const max = 50
const meshes = []

var geometry = new THREE.PlaneGeometry(64, 64, 1, 1)
var fullScreenGeometry = new THREE.PlaneGeometry(sizes.width, sizes.height, 1, 1)

for (let i = 0; i < max; i++) {
    const mat = new THREE.MeshBasicMaterial({
        map: brush,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        depthWrite: false
    });
    const mesh = new THREE.Mesh(geometry, mat)
    mesh.visible = true
    mesh.rotation.z = 2 * Math.PI * Math.random()
    scene.add(mesh)
    meshes.push(mesh)
    
}

const background = new THREE.Mesh(fullScreenGeometry, material);
scene1.add(background);


/**
 * Sizes
 */
// sizes.width= window.innerWidth,
// sizes.height= window.innerHeight


window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

/////////////////////////////////////////////////////////////////////

/**
 * Mouse Move Event
 */
const mouse = new THREE.Vector2(0, 0)
window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX - sizes.width / 2;
	mouse.y = sizes.height / 2 - event.clientY;
}, false)



let currentWave = 0
const prevMouse = new THREE.Vector2(0, 0)

const setNewWave = (x, y, index) => {
    let mesh = meshes[index]
    mesh.visible = true
    mesh.position.x = x
    mesh.position.y = y
    mesh.scale.x = mesh.scale.y = 2.5
    mesh.material.opacity = 0.2
}
const trackMousePos = () => {
    if (Math.abs(mouse.x - prevMouse.x)<1 && Math.abs(mouse.y - prevMouse.y)<1) {
        // nothing
    } else {
        setNewWave(mouse.x, mouse.y, currentWave)
        currentWave = (currentWave + 1) % max
    }
    prevMouse.x = mouse.x
    prevMouse.y = mouse.y
}

/**
 * Camera
 */
// Orthographique Camera
const frustumSize = sizes.height
const aspect = sizes.width / sizes.height
const camera = new THREE.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, -1000, 1000)
camera.position.z = 2
scene.add(camera)

// Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000)
// camera.position.z = 2
// scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x161149)
renderer.physicallyCorrectLights = true
renderer.outputEncoding = THREE.sRGBEncoding

// Render Target
const baseTexture = new WebGLRenderTarget(
    sizes.width,
    sizes.height,
    {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        encoding: THREE.sRGBEncoding
    }
)



/**
 * Animate
 */
 const clock = new THREE.Clock()

const tick = () => {

    trackMousePos()

    const elapsedTime = clock.getElapsedTime()

    // Link Meshes Position to Mouse Position
    meshes.forEach(mesh => {
        if(mesh.visible) {
        // mesh.position.x = mouse.x
        // mesh.position.y = mouse.y
        mesh.rotation.z += 0.02
        mesh.material.opacity *= 0.95
        mesh.scale.x = 0.982 * mesh.scale.x + 0.108
        mesh.scale.y = mesh.scale.x
        if(mesh.material.opacity < 0.002) {mesh.visible = false}
        }

    })

    // Upadte uTime Uniform
    material.uniforms.uTime.value = elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.setRenderTarget(baseTexture)
    renderer.render(scene, camera)
    material.uniforms.uDisplacement.value = baseTexture.texture
    renderer.setRenderTarget(null)
    renderer.clear()
    renderer.render(scene1, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
    },[]);

    return (
        <>
            <div className="h-screen w-screen">
                <canvas className="webgl"/>
            </div>
        </>
    )
}

// import * as THREE from 'three';
// import { useEffect, useRef, useMemo } from 'react';
// import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
// import { OrthographicCamera, OrbitControls, useTexture, shaderMaterial } from '@react-three/drei';

// const vertexShader = `
//   uniform float uTime;
//   varying vec2 vUv;
//   void main() {
//     vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
//     gl_Position = projectionMatrix * mvPosition;
//     vUv = uv;
//   }
// `;

// const fragmentShader = `
//   uniform sampler2D uTexture;
//   uniform sampler2D uDisplacement;
//   uniform float uTime;
//   uniform float uProgress;
//   varying vec2 vUv;
//   float PI = 3.141592653589793238;
//   void main() {
//     vec4 displacement = texture2D(uDisplacement, vUv);
//     float theta = displacement.r * 2. * PI;
//     vec2 direction = vec2(sin(theta), cos(theta));
//     vec2 newUv = vUv + direction * displacement.r * 0.1;
//     vec4 color = texture2D(uTexture, newUv);
//     float grayScale = dot(color.rgb, vec3(0.299, 0.587, 0.114));
//     vec3 pixi = mix(vec3(grayScale), color.rgb, theta / (2. * PI));
//     gl_FragColor = vec4(pixi, 1.0);
//   }
// `;

// const RippleShaderMaterial = shaderMaterial(
//   {
//     uTime: 0,
//     uTexture: null,
//     uDisplacement: null,
//     uProgress: 0,
//   },
//   vertexShader,
//   fragmentShader
// );

// extend({ RippleShaderMaterial });

// const RippleEffect = () => {
//   const { size, gl, scene, camera } = useThree();
//   const meshRef = useRef();
//   const displacementTarget = useMemo(() => new THREE.WebGLRenderTarget(size.width, size.height), [size]);
//   const [brush, bg] = useTexture(['/brush.png', '/textures/bg.jpg']);
//   const uniforms = useMemo(() => ({
//     uTime: { value: 0 },
//     uTexture: { value: bg },
//     uDisplacement: { value: null },
//     uProgress: { value: 0 },
//   }), [bg]);

//   const meshes = useMemo(() => {
//     const max = 50;
//     const temp = [];
//     for (let i = 0; i < max; i++) {
//       const mat = new THREE.MeshBasicMaterial({
//         map: brush,
//         transparent: true,
//         blending: THREE.AdditiveBlending,
//         depthTest: false,
//         depthWrite: false,
//       });
//       const mesh = new THREE.Mesh(new THREE.PlaneGeometry(64, 64, 1, 1), mat);
//       mesh.visible = false;
//       scene.add(mesh);
//       temp.push(mesh);
//     }
//     return temp;
//   }, [brush, scene]);

//   let currentWave = 0;
//   const prevMouse = new THREE.Vector2(0, 0);
//   const mouse = new THREE.Vector3(0, 0, 0);

//   const setNewWave = (x, y, index) => {
//     const mesh = meshes[index];
//     mesh.visible = true;
//     mesh.position.set(x, y, 0);
//     mesh.scale.set(2.5, 2.5, 1);
//     mesh.material.opacity = 0.2;
//   };

//   const trackMousePos = () => {
//     if (Math.abs(mouse.x - prevMouse.x) >= 1 || Math.abs(mouse.y - prevMouse.y) >= 1) {
//       setNewWave(mouse.x, mouse.y, currentWave);
//       currentWave = (currentWave + 1) % meshes.length;
//       prevMouse.set(mouse.x, mouse.y);
//     }
//   };

//   const handleMouseMove = (event) => {
//     const rect = gl.domElement.getBoundingClientRect();
//     mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
//     mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
//     mouse.unproject(camera);
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [gl, camera]);

//   useEffect(() => {
//     const handleResize = () => {
//       displacementTarget.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [displacementTarget]);

//   useFrame(({ clock }) => {
//     const elapsedTime = clock.getElapsedTime();
//     uniforms.uTime.value = elapsedTime;
//     trackMousePos();

//     meshes.forEach((mesh) => {
//       if (mesh.visible) {
//         mesh.rotation.z += 0.02;
//         mesh.material.opacity *= 0.95;
//         mesh.scale.multiplyScalar(0.982);
//         if (mesh.material.opacity < 0.002) {
//           mesh.visible = false;
//         }
//       }
//     });

//     // Render to the render target
//     gl.setRenderTarget(displacementTarget);
//     gl.render(scene, camera);
//     uniforms.uDisplacement.value = displacementTarget.texture;

//     // Clear the render target
//     gl.setRenderTarget(null);
//     gl.render(scene, camera);
//   });

//   return (
//     <mesh ref={meshRef}>
//       <planeGeometry args={[size.width, size.height]} />
//       <rippleShaderMaterial uniforms={uniforms} />
//     </mesh>
//   );
// };

// const Ripple = () => {
//   return (
//     <div className="h-screen w-screen">
//       <Canvas>
//         {/* <color attach="background" args={[0x161149]} /> */}
//         <OrthographicCamera makeDefault position={[0, 0, 2]} />
//         {/* <OrbitControls /> */}
//         <RippleEffect />
//       </Canvas>
//     </div>
//   );
// };

// export default Ripple;

