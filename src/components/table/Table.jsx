import styles from './Table.module.css';

const DynamicTable = ({ children }) => {
  return(
    <>
      <table className={styles.collapse}>
        {children}
      </table>
    </>
  );
}

export default DynamicTable;