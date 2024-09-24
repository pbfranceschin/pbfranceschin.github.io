'use client';
import styles from './Animate.module.css';
import { useState, useEffect, useRef } from 'react';

export default function AnimatePresence ({ id, children, style, trigger }) {
    const [enter, setEnter] = useState(true);
    const isMounted = useRef(false);

    useEffect(() => {
        if(isMounted.current){
            setEnter(false);
            setTimeout(() => {
                setEnter(true);
            }, 1000);
        }
        isMounted.current = true;
    }, [trigger]);

    return (
        <div 
        id={id}
        className={`${styles.container} ${enter ? styles.rollIn : styles.rollOut }`}
        style={style ?? {}}
        >
            {children}
        </div>
    )
}