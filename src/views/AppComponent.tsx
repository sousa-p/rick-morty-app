import { setupIonicReact } from "@ionic/react";
import "./AppComponent.css";
import "@ionic/react/css/core.css";
import MenuComponent from "./shared/components/MenuComponent";
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

function AppComponent({ Page }: { Page: React.ComponentType}) {
  return (
    <>
      <MenuComponent></MenuComponent>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Rick and Morty</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Page></Page>
        </IonContent>
      </IonPage>
    </>
  );
}

export default AppComponent;
