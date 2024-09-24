import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import MenuComponent from "./components/MenuComponent.tsx";

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
