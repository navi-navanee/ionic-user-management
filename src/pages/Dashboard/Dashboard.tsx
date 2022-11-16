import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './styles.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  mobilenumber: string,
  email: string,
  profileimage: string,
) {
  return { name, mobilenumber, email, profileimage };
}

const addStudent =(() => {
  console.log("im clicked");
  
})


const Dashboard: React.FC = () => {
  const rows = [
    createData('Navaneeth', '9056314586', 'navaneethdevanofficial@gmail.com', 'sfasdfsd'),
    createData('Heloo', '9056314586', 'navaneethdevanofficial@gmail.com', 'sfasdfsd')
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonButton size="small" onClick={addStudent}>Add Students</IonButton>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">mobilenumber</TableCell>
                <TableCell align="right">email</TableCell>
                <TableCell align="right">profileimage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.mobilenumber}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.profileimage}</TableCell>                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
