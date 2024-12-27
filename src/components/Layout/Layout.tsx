
// import Header from './Header/Header';
import { Children, FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import styles from './Layout.module.scss';

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return <div className={styles.Layout}>
        <Header></Header>
        <div className={styles.InnerBox}>
            {children}
        </div>
    </div>
}