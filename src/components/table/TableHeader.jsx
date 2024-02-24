import styles from './TableHeader.module.css';

const TableHeader = ({ children, className }) => {
  return (
    <thead className={className ? className : styles.defaultHead}>
      <tr className={styles.row}>
        {children}
      </tr>
    </thead>
  );
}

export default TableHeader;