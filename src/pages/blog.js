import React, { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

const blog = () => {
  // fetch data from api and set it to state
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
      .then((res) => res.json())
      .then((data) => setData(data))
      .then((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={styles.main}>
        {data.map((e) => {
          return (
            <div className={styles.card} key={e.id}>
              <Link href={'/blogposts/learn-javascript'}>
                <h2 className={inter.className}>
                  {e.title} <span>-&gt;</span>
                </h2>
                <p className={inter.className}>{e.content}..</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default blog;
