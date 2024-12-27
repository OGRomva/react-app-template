import { useEffect, useState } from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
    const [value, setValue] = useState(0);
    let isHonest: boolean = true;

    useEffect(() => {
        if (value % 2 == 0) {
            console.log(true)
        } else {
            console.log(false)
        }
    }, [value])

    const increment = () => {
        setValue(value + 1);
    }

    const decrement = () => {
        setValue(value - 1);
    }

    return <div className={styles.Counter}>
        <div className={styles.Field}>{value}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
}