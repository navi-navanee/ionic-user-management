import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth, signInWithGoogle } from '../../Firebase';
import './styles.css';

const Login: React.FC = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="login">
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <IonButton size="small" onClick={signInWithGoogle}>Login</IonButton>
            {error && <span>Wrong email or password!</span>}
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
