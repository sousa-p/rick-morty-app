import { IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import SlidesComponent from "./components/SlidesComponent/SlidesComponent";

function AboutPage() {
  return (
    <IonContent>
      <IonGrid>
        <IonCol size="12">
          <SlidesComponent></SlidesComponent>
        </IonCol>
      </IonGrid>
    </IonContent>
  );
}

export default AboutPage;
