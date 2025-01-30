import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { easing } from "maath" /* Se importa dicha librería para... */

const HeroCamera = ({ children, isMobile }) => {
    const group = useRef()

    useFrame((state, delta) => {
        if (group.current) {
            easing.damp3(group.current.rotation,[-state.pointer.y/3, -state.pointer.x/5, 0],0.25, delta)
        }
        if (!isMobile) {
            easing.dampE(group.current.rotation,[-state.pointer.y/3, -state.pointer.x/5, 0],0.25, delta)
        }
    })
    return(
        <group ref={group}>
            {children}
        </group>
    )
}

export default HeroCamera