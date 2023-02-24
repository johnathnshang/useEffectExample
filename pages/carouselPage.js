import Link from "next/link";
import Carousel from "@/components/carousel";
import styles from  "@/styles/CarouselPage.module.css"

export default function CarouselPage() {
    return(
        <>
        <div className={styles.content}>
            <Link className={styles.homeButton} href="/">Home</Link>
            <Carousel/> 
        </div>
        </>
    )
}