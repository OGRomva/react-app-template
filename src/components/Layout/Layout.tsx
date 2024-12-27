
// import Header from './Header/Header';
import Header from './Header/Header';
import styles from './Layout.module.scss';

export const Layout = () => {
    return <div className={styles.Layout}>
        <Header></Header>
        <div className={styles.InnerBox}>

        </div>
    </div>
}