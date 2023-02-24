import Link from "next/link"
import { useEffect, useState } from "react"
import styles from "@/styles/UseEffectTwo.module.css"

export default function UseEffectTwo() {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log(number)
        setNumber(number + 50)
    }, [])
    return(
        <>
        <div className={styles.content}>
            <Link className={styles.homeButton} href="/">Home</Link>
            <div className={styles.text}>
                <div>
                    UseEffectTwo
                </div>
                <div>
                    {number}
                </div>
            </div>
        </div>
        </>
    )
}