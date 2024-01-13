import styles from './components.module.scss';

export function LoadingScreen() {
  return (
    <div className='/loading.gif'>
      <img src='/loading.gif' alt='Adorable Dancing Totoro By CL Terry' />
      <h1>...Loading...</h1>
    </div>
  );
}
