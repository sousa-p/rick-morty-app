import { IonContent, IonItem, IonLabel, IonList, IonMenu } from '@ionic/react';

const MenuComponent
 = () => {
  return (
    <IonMenu contentId="main-content">
      <IonContent className="ion-padding">
        <IonList className="ion-padding">
          <IonItem>
            <IonLabel>Pokémon Yellow</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mega Man X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>The Legend of Zelda</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Pac-Man</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Super Mario World</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default MenuComponent
;
