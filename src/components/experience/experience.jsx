import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useControls } from "leva"
import { useRef } from "react"

import Island from "../island/island"
import Plane from "../plane/plane"

export default function Experience()
{
    const { color } = useControls('ambientLight', {
        color: '#e8dfdd'
    })

    const plane = useRef()
    const controls = useRef()

    const updatePlane = () =>
    {
        const azimuthAngle = controls.current.getAzimuthalAngle()
        if(!plane) return
        plane.current.rotation.y = azimuthAngle + (Math.PI / 2)
        plane.current.position.x = Math.sin(azimuthAngle) * 3
        plane.current.position.z = Math.cos(azimuthAngle) * 3
    }

    return <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 0, 1, 6 ]
        } }
    >
        <directionalLight
            castShadow
            position={ [ 3, 1, 1 ] }
            intensity={ 1.5 }
            shadow-normalBias={ 0.04 }
            color={ color }
        />
        <ambientLight intensity={ 0.2 } />
        <OrbitControls
            ref={ controls }
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={0}
            enableDamping={true}
            dampingFactor={.05}
            rotateSpeed={.3}
            onChange={ updatePlane  }
        />
        <Island />
        <Plane reference={ plane } />
    </Canvas>
}