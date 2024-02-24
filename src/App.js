import DynamicTable from './components/table/Table';
import TableBody from './components/table/TableBody';
import TableHeader from './components/table/TableHeader';
import styles from './App.module.css';

const header = [
  { key: 'id', value: 'Serial No' },
  { key: 'name', value: 'Student Name' },
  { key: 'roll', value: 'Roll Number' },
  { key: 'city', value: 'Location' },
  { key: 'age', value: 'Age' },
  { key: 'action', value: '' },
];

const data = [
  { id: 1, name: 'Bubu', roll: 12, city: 'Chuchura', age: 24 },
  { id: 2, name: 'Dudu', roll: 24, city: 'Chandannagar', age: 26 },
  { id: 3, name: 'Ghontu', roll: 36, city: 'Shirampur', age: 28 },
  { id: 4, name: 'Montu', roll: 48, city: 'Barrakpore', age: 21 },
  { id: 5, name: 'Ghoton', roll: 60, city: 'Bally', age: 20 },
];

function App() {
  const handleClick = (id) => {
    console.log('Clicked Item Id :', id);
  }

  return (
    <div className={styles.wrapper}>
      <h1>Dynamic Table</h1>
      <DynamicTable>
        <TableHeader className={styles.header}>
          {
            header.map((item, index) => {
              return <th key={index} className={`${styles.colOdd} ${styles.common}`}>{item.value}</th>
            })
          }
          
        </TableHeader>
        <TableBody>
          {
            data.map((item, index)  => {
              return(
                <tr key={index} className={ (index%2 === 0) ? styles.evenRow : styles.oddRow }>
                  <td className={styles.dataCol}>{ item.id }</td>
                  <td className={styles.dataCol}>{ item.name }</td>
                  <td className={styles.dataCol}>{ item.roll }</td>
                  <td className={styles.dataCol}>{ item.city }</td>
                  <td className={styles.dataCol}>32</td>
                  <td className={styles.dataCol}>
                    <button className={styles.button} onClick={() => handleClick(item.id)}>Click</button>
                  </td>
                </tr>
              )
            })
          }
        </TableBody>
      </DynamicTable>
    </div>
  );
}

export default App;
