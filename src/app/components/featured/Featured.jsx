import React from 'react';
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b className={styles.bold}>Hey lama dev here!</b> Discover my stories and creative ideas.
            </h1>
        <div className={styles.post}>
            <div className={styles.imgContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainter}>
                <h1 className={styles.postTitle}>Post Title</h1>
                <p className={styles.postDesc}>
                    Post Description
                </p>
                <button className={styles.button}>Read More</button>
            </div>
        </div>
        </div>
    );
};

export default Featured;