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
import { Link } from "react-router-dom";

const MenuComponent = () => {
  return (
    <IonMenu contentId="main-content">
      <IonContent className="ion-padding">
        <IonRow class="ion-padding ion-justify-content-center">
          <img src={Logo}></img>
        </IonRow>
        <IonList className="ion-padding">
          <Link to={"/"}>
            <IonItem>
              <IonLabel>Characters</IonLabel>
            </IonItem>
          </Link>
          <Link to={"/favorites"}>
            <IonItem>
              <IonLabel>Favorites</IonLabel>
            </IonItem>
          </Link>
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
