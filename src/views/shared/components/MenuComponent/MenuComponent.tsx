import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonRow,
} from "@ionic/react";

import RickAndMortyPortal from "../../../../assets/rickAndMortyPortal.png";
import Logo from "../../../../assets/logo.png";


const MenuComponent = () => {
  return (
    <IonMenu contentId="main-content">
      <IonContent className="ion-padding">
        <IonRow class="ion-padding ion-justify-content-center">
          <img src={Logo}></img>
        </IonRow>
        <IonList className="ion-padding">
          <IonItem>
            <IonLabel>Characters</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Episodes</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Locations</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>About</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonRow class="ion-padding ion-justify-content-center">
        <img src={RickAndMortyPortal} />
      </IonRow>
    </IonMenu>
  );
};

export default MenuComponent;
