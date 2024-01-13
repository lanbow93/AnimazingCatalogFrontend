import styles from './components.module.scss';

interface HiddenModalProps {
  status: string;
  message: string;
  isModalActive: boolean;
  isCloseWindow: boolean;
  handleModal: ((value: boolean) => void) | (() => void);
}

export function HiddenModal(props: HiddenModalProps) {
  return (
    <div
      className={
        props.isModalActive
          ? `${styles.modalSection}`
          : `${styles.hidden} ${styles.modalSection}`
      }
    >
      <div className={styles.hiddenModal}>
        <h1>{props.status}</h1>
        <h2>{props.message}</h2>

        {props.isCloseWindow ? (
          <button onClick={() => props.handleModal(false)}>Close</button>
        ) : (
          <button onClick={() => props.handleModal(false)}>Confirm</button>
        )}
      </div>
    </div>
  );
}
