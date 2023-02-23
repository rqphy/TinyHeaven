import { Canvas } from "@react-three/fiber"
import { Sky, OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import useMessage from "../../stores/useMessage"

import Island from "../island/island"
import Plane from "../plane/plane"
import Intro from "../intro/intro"

export default function Experience()
{
    const setMessageId = useMessage((state) => state.setMessageId)
    const messagesLength = useMessage((state) => state.messagesLength)

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
        let tempId = -1
        azimuthAngle /= 2*Math.PI
        if(azimuthAngle < 0)
        {
            azimuthAngle += 1
        }

        for(let i = 0; i < messagesLength; i++)
        {
            if( azimuthAngle >= 0.08 + i / messagesLength
                && azimuthAngle < 0.25 + i / messagesLength
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
            position: [ -1, -1, 6 ]
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
            position={ [ 3, 1, 0.5 ] }
            intensity={ 1.5 }
            shadow-normalBias={ 0.09 }
            color={ '#e8dfdd' }
        />
        <ambientLight intensity={ 0.2 } />
        <Sky sunPosition={[ 3, 1, 0.5 ]} />
        <Island />
        <Plane reference={ plane } />
        <Intro />
    </Canvas>
}