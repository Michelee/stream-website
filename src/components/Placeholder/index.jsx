import styles from './index.module.css';

function Placeholder({ children, height = '100px' }) {
  return (
    <div className={styles.placeholder} style={{height}}>{children}</div>
  );
}

export default Placeholder;
