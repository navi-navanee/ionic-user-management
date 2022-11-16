import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { signInWithGoogle } from '../../Firebase';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Admin Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonButton size="small" onClick={signInWithGoogle}>Sign In With Google</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
