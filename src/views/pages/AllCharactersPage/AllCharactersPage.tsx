import {
  IonContent,
  IonGrid,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { CharacterService } from "../../../services/characters/characterService";
import LoadingComponent from "../../shared/components/LoadingComponent/LoadingComponent";
import Character from "../../../interfaces/Character";
import "./AllCharactersPage.css";
import Info from "../../../interfaces/Info";
import CharacterCardComponent from "./components/CharacterCardComponent";

function AllCharacterPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [info, setInfo] = useState<Info | null>(null);
  const [data, setData] = useState<Character[]>([]);

  function getCharacters(url?: string) {
    CharacterService.getAll(url)
      .then((response) => {
        setInfo(response.info);
        setData((prevData) => prevData.concat(response.results));
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getCharacters(info?.next);
  }, []);

  if (loading) return <LoadingComponent></LoadingComponent>;
  return (
    <IonContent>
      <IonGrid>
        <div className="wrapper_characters">
          {data.map((character) => {
            return (
              <CharacterCardComponent
                character={character}
              ></CharacterCardComponent>
            );
          })}
        </div>
      </IonGrid>
      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          if (info?.next && !loading && data.length) {
            getCharacters(info.next);
            setTimeout(() => ev.target.complete(), 500);
          } else {
            ev.target.disabled = true;
          }
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>
  );
}

export default AllCharacterPage;
