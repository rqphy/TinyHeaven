import * as THREE from 'three'
import { useGLTF } from "@react-three/drei"
import { useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"


export default function Island()
{
    const [started, setStarted] = useState(false)
    const vec = new THREE.Vector3()

    const island = useGLTF('./low_poly_flying_island/scene.gltf')

    useEffect(() =>
    {
        setStarted(true)
    })

    useFrame(state =>
    {
        if(started)
        {
            state.camera.lookAt(0, 0, 0)
            state.camera.position.lerp(vec.set(0, 1, 6), .02)
        } return null
    })

    return <primitive
        object={ island.scene }
        scale={ 0.08 }
        rotation={[ 0, Math.PI * 2.2, 0 ]}
        position={[ 0, -1.2, 0 ]}
    />
}