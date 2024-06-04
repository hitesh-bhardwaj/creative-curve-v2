import RippleImage from "@/components/webgl/RippleImage";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Page3() {
    return (
        <>
            <div>
                <Canvas camera={{ position: [0, 0, 2], fov: 50 }} style={{height: "100vh", width: "100vw"}}>
                    <Suspense>
                        <RippleImage src="/img/Img1.jpg" />
                    </Suspense>
                </Canvas>
            </div>
        </>
    )
}