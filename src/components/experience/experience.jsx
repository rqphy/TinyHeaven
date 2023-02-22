import { Canvas } from "@react-three/fiber"
import { Sky, OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import useMessage from "../../stores/useMessage"

import Island from "../island/island"
import Plane from "../plane/plane"

export default function Experience()
{
    const setMessageId = useMessage((state) => state.setMessageId)
    // const messageId = useMessage((state) => state.messageId)

    const plane = useRef()
    const controls = useRef()

    const handleOrbitMove = () =>
    {
        let azimuthAngle = controls.current.getAzimuthalAngle()
        if( plane )
        {
            updatePlane(azimuthAngle)
        }
        updateMessageId(azimuthAngle)
    }

    const updatePlane = (azimuthAngle) =>
    {
        plane.current.rotation.y = azimuthAngle + (Math.PI / 2)
        plane.current.position.x = Math.sin(azimuthAngle) * 3
        plane.current.position.z = Math.cos(azimuthAngle) * 3
    }

    const updateMessageId = (azimuthAngle) =>
    {
        let totMessages = 3
        let tempId = -1
        azimuthAngle /= 2*Math.PI
        if(azimuthAngle < 0)
        {
            azimuthAngle += 1
        }

        for(let i = 0; i < totMessages; i++)
        {
            if( azimuthAngle >= 0.02 + i / totMessages
                && azimuthAngle < 0.25 + i / totMessages
            ) {
                tempId = i
                break
            }
        }
        setMessageId(tempId)
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
        <OrbitControls
            ref={ controls }
            enableDamping={ true }
            enablePan={ false }
            minPolarAngle={ Math.PI / 2.06 }
            maxPolarAngle={ 0 }
            dampingFactor={ .05 }
            rotateSpeed={ .3 }
            maxDistance={ 8.0 }
            minDistance={ 3.8 }
            onChange={ handleOrbitMove  }
        />
        <directionalLight
            castShadow
            position={ [ 3, 1, -1 ] }
            intensity={ 1.5 }
            shadow-normalBias={ 0.04 }
            color={ '#e8dfdd' }
        />
        <ambientLight intensity={ 0.2 } />
        <Sky sunPosition={[ 3, 1, -1 ]} />
        <Island />
        <Plane reference={ plane } />
    </Canvas>
}