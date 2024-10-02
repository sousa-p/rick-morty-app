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
  
  interface CardProps {
    character: Character;
  }
  
  const CharacterCardComponent: React.FC<CardProps> = ({
    character,
  }) => {
    return (
      <IonCard style={{ width: "300px" }}>
        <img alt={character.name} src={character.image} />
        <IonCardHeader>
          <IonCardTitle>{character.name}</IonCardTitle>
          <IonCardSubtitle>{character.status} - {character.species}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
            <IonRow>
                <IonText>
                    {'Origin: ' + character.origin.name}
                </IonText>
            </IonRow>
            <IonRow>
                <IonText>
                {'Gender: ' + character.gender}
                </IonText>
            </IonRow>
        </IonCardContent>
      </IonCard>
    );
  };
  
  export default CharacterCardComponent;
  