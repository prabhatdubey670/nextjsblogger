import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css';

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.main}>
      <h1>Title of Blog : {slug}</h1>
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis
        explicabo cupiditate suscipit ipsum hic repellendus fugit velit, unde,
        quos deleniti neque dolore corrupti tempore.
      </div>
    </div>
  );
}
