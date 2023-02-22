import * as THREE from 'three'

import { useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"

export default function Intro()
{
    const [started, setStarted] = useState(false)
    const vec = new THREE.Vector3()

    useEffect(() =>
    {
        setStarted(true)
    }, [])

    useFrame(state =>
    {
        console.log(state.camera.position.z, started)

        if(state.camera.position.z < 6.1)
        {
            setStarted(false)
            return null
        }
        if(started)
        {
            state.camera.lookAt(0, 0, 0)
            state.camera.position.lerp(vec.set(0, 1, 6), .02)
        }
        return null
    })
}