import styles from './components.module.scss';

export function LoadingScreen() {
  return (
    <div className={styles.loadingScreen}> 
    <div className={styles.loadingImage}>
    <h1>...Loading...</h1>
    <img src='/loading.gif' alt='Adorable Dancing Totoro By CL Terry' />
    </div>
      
    </div>
  );
}
