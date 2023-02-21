import { Canvas } from "@react-three/fiber"

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
        {/* <OrbitControls makeDefault /> */}
        <mesh>
            <boxGeometry/>
            <meshBasicMaterial />
        </mesh>
    </Canvas>
}