'use client';
import styles from './Animate.module.css';
import { useState, useEffect, useRef } from 'react';

export default function AnimatePresence ({ id, children, style, trigger }) {
    const [animationState, setAnimationState] = useState('in');
    const childrenRef = useRef(children);
    const prevTriggerRef = useRef(trigger);

    useEffect(() => {
        console.log('Trigger changed:', trigger);
        if (trigger !== prevTriggerRef.current) {
            console.log('Starting exit animation');
            setAnimationState('out');
            
            const timeoutId = setTimeout(() => {
                console.log('Exit animation complete, updating children and starting entrance animation');
                childrenRef.current = children;
                setAnimationState('in');
            }, 250); // Match this with your animation duration

            prevTriggerRef.current = trigger;

            return () => clearTimeout(timeoutId);
        }
    }, [trigger, children]);

    useEffect(() => {
        console.log('Animation state updated:', animationState);
    }, [animationState]);

    return (
        <div 
            id={id}
            className={`${styles.container} ${animationState === 'in' ? styles.rollIn : styles.rollOut}`}
            style={style ?? {}}
        >
            {children}
        </div>
    );
}