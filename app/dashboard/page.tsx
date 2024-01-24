
import { SearchBox } from '../components/SearchBox';
import styles from './page.module.scss';
export default function Dashboard(){
    
    return <div className={styles.dashboard}>
      <div className={styles.greeting}>
        <div className={styles.textArea}>
          <h1>Search</h1>
        </div>
        <div className={styles.searchBox}>
          <SearchBox />
        </div>
      </div>
    </div>
}