
import { Counter, Layout } from 'components';
import styles from './App.module.scss';

function App() { 
  return (
    <div className={styles.App}>
      <Layout>
        <Counter></Counter>
      </Layout>
    </div>
  );
}

export default App;
