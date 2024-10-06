import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonRow,
  IonText,
} from "@ionic/react";
import Character from "../../../../interfaces/Character";
import StatusIconComponent from "./StatusIconComponent";

interface CardProps {
  character: Character;
}

const CharacterCardComponent: React.FC<CardProps> = ({ character }) => {
  return (
    <IonCard style={{ width: "300px" }}>
      <img alt={character.name} src={character.image} />
      <IonCardHeader>
        <IonCardTitle>{character.name}</IonCardTitle>
        <IonCardSubtitle>
          <IonRow class="ion-align-items-center">
            <StatusIconComponent
              status={character.status}
            ></StatusIconComponent>
            {character.status} - {character.species}
          </IonRow>
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonRow>
          <IonText>{"Origin: " + character.origin.name}</IonText>
        </IonRow>
        <IonRow>
          <IonText>{"Gender: " + character.gender}</IonText>
        </IonRow>
      </IonCardContent>
    </IonCard>
  );
};

export default CharacterCardComponent;
