import { IonApp, setupIonicReact } from "@ionic/react";
import "./AppComponent.css";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import MenuComponent from "./shared/components/MenuComponent/MenuComponent";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

setupIonicReact();

function AppComponent({ Page }: { Page: React.ComponentType }) {
  return (
    <IonApp>
      <MenuComponent></MenuComponent>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Rick and Morty API</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Page></Page>
        </IonContent>
      </IonPage>
    </IonApp>
  );
}

export default AppComponent;
