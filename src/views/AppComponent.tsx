import { IonApp, IonFooter, IonRow, setupIonicReact } from "@ionic/react";
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
  IonToolbar,
} from "@ionic/react";

import PicleRick from "../assets/piclerick.png";
import Logo from "../assets/logo.png";

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
            <img src={Logo}></img>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Page></Page>
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonRow class="ion-justify-content-end">
              <img src={PicleRick}></img>
            </IonRow>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </IonApp>
  );
}

export default AppComponent;
