import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";

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
import PicleRick from "../assets/piclerick.png";
import Logo from "../assets/logo.png";

import "../views/shared/variables/variables.css";

import { useEffect, useState } from "react";
import { CloudyNightOutline, SunnyOutline } from "react-ionicons";

setupIonicReact();

function AppComponent({ Page }: { Page: React.ComponentType }) {
  const getLocalTheme = (): boolean => {
    const localData: string = localStorage.getItem("isDarkTheme") ?? "false";

    return JSON.parse(localData);
  };

  const [darkMode, setDarkMode] = useState(getLocalTheme());

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-theme", !darkMode);
    localStorage.setItem("isDarkTheme", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  let themeBtnComponent = darkMode ? (
    <CloudyNightOutline
      color={"000000"}
      title={""}
      height="35px"
      width="35px"
    />
  ) : (
    <SunnyOutline color={"000000"} title={""} height="35px" width="35px" />
  );

  return (
    <IonApp>
      <MenuComponent></MenuComponent>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={toggleDarkMode}>
                {themeBtnComponent}
              </IonButton>
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
