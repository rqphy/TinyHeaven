import { useGLTF, useAnimations } from "@react-three/drei"
import { useEffect } from "react"

export default function Plane({ reference })
{
    const plane = useGLTF('./low_poly_plane/scene.gltf')
    const animations = useAnimations(plane.animations, plane.scene)

    useEffect(() =>
    {
        const action = animations.actions['Animation']

        action
            .fadeIn(0.5)
            .play()
    })

    return <primitive
        ref={ reference }
        object={ plane.scene }
        position={[ 0, -0.2, 2 ]}
        scale={ 0.03 }
        rotation={[ 0, Math.PI / 2, 0 ]}
    />
}