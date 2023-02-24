import Link from "next/link";
import { use, useEffect, useState } from "react";
import styles from "@/styles/UseEffectThree.module.css"

export default function UseEffectThree() {
    const [number, setNumber] = useState(0)

    const [value, setValue] = useState(-10)

    useEffect(() => {
        setValue(value + 10)
    }, [number])

    return(
        <>
        <div className={styles.content}>
            <Link className={styles.homeButton} href="/">Home</Link>
            <div>
                <div className={styles.counter}>
                    <button className={styles.click} onClick={() => setNumber(number + 1)}>Click me</button>
                </div>
                <div className={styles.text}>
                    <div>
                    UseEffectThree
                    </div>
                    <div>
                        {value}
                    </div>
                </div>
            </div>
        </div>        
        </>
    )
}