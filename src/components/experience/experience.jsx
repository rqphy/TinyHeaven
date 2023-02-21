import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import Island from "../island/island"

export default function Experience()
{
    return <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0, 1, 6 ]
        } }
    >
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } shadow-normalBias={ 0.04 } />
        <OrbitControls
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={0}
            enableDamping={true}
            dampingFactor={.05}
            rotateSpeed={.3}
        />
        <Island />
    </Canvas>
}