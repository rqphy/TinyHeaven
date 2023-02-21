import { useGLTF } from "@react-three/drei"


export default function Island()
{
    const island = useGLTF('./low_poly_flying_island/scene.gltf')

    return <primitive
        object={ island.scene }
        scale={ 0.08 }
        rotation={[ 0, Math.PI * 2.2, 0 ]}
        position={[ 0, -1.2, 0 ]}
    />
}