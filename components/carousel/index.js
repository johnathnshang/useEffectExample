import Image from "next/image"
import { useState } from "react"
import styles from '@/components/carousel/carousel.module.css'

export default function Carousel() {
    const [img, setImg] = useState(0)

    const changeImg = (change) => {
        if(change == "backward") {
            setImg(img - 1)

            if(img == 0) {
                setImg(5)
            }
            console.log(img)
        } else if(change == "forward") {
            setImg(img + 1)

            if(img == 5) {
                setImg(0)
            }
            console.log(img)
        }
    }

    return(
        <>
            <div style={{               
                            backgroundImage: "url(/carousel-images/" + img + ".jpg)",
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat",
                            width: 500,
                            height: 300
            }}>
                <Image
                    className={styles.arrow}
                    src = {"/icons/leftArrow.png"}
                    alt = {"/icons/leftArrow.png"}
                    width = {50}
                    height = {50}
                    onClick = {() => changeImg("forward")}
                />

                <Image
                    className={styles.arrow}
                    src = {"/icons/rightArrow.png"}
                    alt = {"/icons/rightArrow.png"}
                    width = {50}
                    height = {50}
                    onClick = {() => changeImg("backward")}
                />

            </div>
        </>
    )
}