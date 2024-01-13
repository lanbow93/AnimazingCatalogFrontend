import styles from './components.module.scss';

interface HiddenModalProps {
  status: string;
  message: string;
  closeModal: (value: boolean) => void;
  confirmFunction?: () => void;
}

export function HiddenModal(props: HiddenModalProps) {
  return (
    <div className='hiddenModal'>
      <h1>{props.status}</h1>
      <h2>{props.message}</h2>
      <button onClick={() => props.closeModal(false)}>Close</button>
      <button
        onClick={() => props.confirmFunction?.()}
        className={props.confirmFunction ? '' : 'hidden'}
      >
        Confirm
      </button>
    </div>
  );
}
