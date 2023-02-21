import { useGLTF, useAnimations } from "@react-three/drei"
import { useEffect } from "react"

export default function Plane()
{
    const plane = useGLTF('./low_poly_plane/scene.gltf')
    const animations = useAnimations(plane.animations, plane.scene)

    useEffect(() =>
    {
        console.log(animations)
        const action = animations.actions['Animation']

        action
            .fadeIn(0.5)
            .play()
    })

    return <primitive
        object={ plane.scene }
        position={[ 0, 0.2, 2 ]}
        scale={ 0.1 }
        rotation={[ 0, Math.PI / 2, 0 ]}
    />
}