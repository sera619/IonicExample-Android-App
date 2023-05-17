import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {logInOutline, personCircleOutline} from 'ionicons/icons'
import LOGO from '../assets/img/icon256.png'

const Register: React.FC = () => {
    const doRegister = (event: any) => {
        event.preventDefault();
        console.log("Do login ");
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'dark'}>
                    <IonTitle color={'danger'}>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color={'dark'} scrollY={false}>
            <div className="ion-text-center ion-padding ion-margin-top">
                <img src={LOGO} width={"50%;"}></img>

                <IonTitle className='ion-margin-top' color={'danger'}>Register a new Account</IonTitle>
            </div>
            <IonCard  color={'dark'}>
                <IonCardContent color='primary'>

                <form onSubmit={doRegister}>

                    <IonInput labelPlacement='floating' label='Email' type="email" fill="outline" color={'primary'} placeholder="example@mail.com">
                    </IonInput>
                    <IonInput className='ion-margin-top' labelPlacement='floating' label='Password' type="password" fill="outline" color={'primary'} placeholder="Enter password..">    
                    </IonInput>
                    <IonButton className='ion-margin-top' type="submit" expand='block'>Register
                    <IonIcon icon={logInOutline} slot='end'/></IonButton>
                </form>
                </IonCardContent>
            </IonCard>
        </IonContent>
        <IonFooter >
            <IonToolbar color={'dark'}>

            </IonToolbar>
        </IonFooter>
    </IonPage>
    );
};

export default Register;