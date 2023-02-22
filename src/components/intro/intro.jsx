import * as THREE from 'three'


import { useEffect, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js'

const animateCamera = (position, camera) =>
{
    new TWEEN.Tween(camera.position)
        .to(position, 1500)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start()
        .onComplete(function ()
        {
            TWEEN.remove(this)
        })
}

export default function Intro()
{
    const camera = useThree(state => state.camera)

    useEffect(() =>
    {
        animateCamera({x: 0, y: 0.275, z: 6}, camera)
    }, [])

    useFrame(state =>
    {
        TWEEN.update()
        return null
    })
}