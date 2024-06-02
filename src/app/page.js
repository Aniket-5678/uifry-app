
import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <div>
      <Hero/>
      <Features/>
      <Testimonial/>
    </div>



    </main>
  );
}
