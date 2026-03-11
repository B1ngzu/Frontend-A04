import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src="/img/banner.jpg"
        alt="Banner background"
        fill
        style={{ objectFit: "cover" }}
        className={styles.bannerImage}
      />
      <div className={styles.overlay}>
        <h1 className={styles.title}>where every event finds its venue</h1>
        <p className={styles.description}>
          Finding the perfect venue has never been easier. Whether it&apos;s a wedding,
          corporate event, or private party, we connecting people to the perfect place.
        </p>
      </div>
    </div>
  );
}
