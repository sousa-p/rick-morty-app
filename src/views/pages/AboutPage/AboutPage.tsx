import {
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import SlidesComponent from "./components/SlidesComponent/SlidesComponent";
import OpenYourEyesMorty from "../../../assets/openYourEyesMorty.png";

function AboutPage() {
  return (
    <IonContent>
      <IonGrid>
        <IonRow class="ion-justify-content-center">
          <IonCol size="12" sizeMd="10" sizeLg="9">
            <IonToolbar>
              <IonTitle size="large">A little about Rick and Morty</IonTitle>
            </IonToolbar>
            <IonRow>
              <IonText class="ion-margin ion-text-justify">
                The show centers on the Smith family: parents Jerry and Beth,
                their children Summer and Morty, and Beth's father, Rick
                Sanchez, who lives with them. According to co-creator Justin
                Roiland, the family resides near Seattle, Washington. However,
                Rick and Morty's adventures span across infinite realities,
                using portals and Rick's flying vehicle to travel to other
                planets and dimensions.
              </IonText>
            </IonRow>
            <SlidesComponent></SlidesComponent>

            <IonRow>
              <IonText class="ion-margin ion-text-justify">
                Rick, an eccentric and alcoholic mad scientist, rejects societal
                norms like school, love, and family. He often takes his
                14-year-old grandson Morty, a well-meaning but easily
                overwhelmed boy, on dangerous and bizarre adventures. Morty's
                moral compass clashes with Rick's selfish behavior. Summer,
                Morty's 17-year-old sister, is a typical teenager focused on
                social status, but occasionally joins their adventures. Beth,
                their mother, balances her professional life as a horse surgeon
                with being a strong, assertive figure at home, though she is
                unsatisfied with her marriage to Jerry, who frequently
                criticizes Rick’s influence on their family.
              </IonText>
            </IonRow>

            <IonRow>
              <IonText class="ion-margin ion-text-justify">
                The characters have alternate versions across the multiverse,
                and their personalities can vary in different realities. Rick
                identifies as "Rick Sanchez of Earth dimension C-137." After an
                experiment goes wrong in the episode "Rick Potion #9," Rick and
                Morty leave their original dimension behind, moving to a
                parallel world and leaving their old family to deal with the
                consequences.
              </IonText>
            </IonRow>

            <img src={OpenYourEyesMorty} style={{ height: "250px" }} />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
}

export default AboutPage;
