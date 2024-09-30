import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./views/App.tsx";
import "./index.css";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import MenuComponent from "./views/shared/components/MenuComponent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
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
        <App />
      </IonContent>
    </IonPage>
  </StrictMode>
);
