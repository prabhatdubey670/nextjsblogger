import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
const inter = Inter({ subsets: ['latin'] });

const navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={inter.className}>
          <Link href="/">
            {' '}
            <li>Home</li>{' '}
          </Link>
          <Link href="/about">
            {' '}
            <li>About</li>
          </Link>
          <Link href="/blog">
            {' '}
            <li>Blog</li>
          </Link>
          <Link href="/contact">
            {' '}
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
