import { useEffect, useState } from "react";
import { CharacterService } from "../../../services/characters/characterService";
import LoadingComponent from "../../shared/components/LoadingComponent/LoadingComponent";
import Character from "../../../interfaces/Character";
import CharacterCardComponent from "../../shared/components/CharacterCardComponent/CharacterCardComponent";
import { IonCol, IonContent, IonGrid, IonRow, IonTitle } from "@ionic/react";
import noFavorites from "../../../assets/noFavorites.png";

function FavoritesCharactersPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Character[]>([]);

  function getFavoritesCharacters(): void {
    const local: string = localStorage.getItem("favorites") ?? "[]";
    const favorites: Array<number> = JSON.parse(local);

    if (!favorites.length) {
      setData([]);
      setLoading(false);
      return;
    }

    CharacterService.getMultiple(favorites)
      .then((response) => {
        setData((prevData) => prevData.concat(response));
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getFavoritesCharacters();
  }, []);

  let content;

  if (loading) content = <LoadingComponent></LoadingComponent>;
  else if (data.length)
    content = data.map((character) => {
      return (
        <CharacterCardComponent
          key={character.name}
          character={character}
        ></CharacterCardComponent>
      );
    });
  else
    content = (
      <IonRow class="ion-justify-content-center">
        <IonCol>
          <IonTitle class="ion-padding">Is Everyone Boring To You?</IonTitle>
          <img src={noFavorites} style={{ height: "22.5rem" }}></img>
        </IonCol>
      </IonRow>
    );

  return (
    <IonContent>
      <IonGrid>
        <IonCol size="12">
          <IonRow class="ion-justify-content-center">{content}</IonRow>
        </IonCol>
      </IonGrid>
    </IonContent>
  );
}

export default FavoritesCharactersPage;
