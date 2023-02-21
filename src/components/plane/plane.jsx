import { useGLTF, useAnimations } from "@react-three/drei"
import { useEffect } from "react"

export default function Plane()
{
    const plane = useGLTF('./low_poly_plane/scene.gltf')

    return <primitive
        object={ plane.scene }
        position={[ 0, 1, 0 ]}
        scale={ 0.1 }
    />
}