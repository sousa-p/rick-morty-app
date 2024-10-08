import { useEffect, useState } from "react";
import { CharacterService } from "../../../services/characters/characterService";
import LoadingComponent from "../../shared/components/LoadingComponent/LoadingComponent";
import Character from "../../../interfaces/Character";
import Info from "../../../interfaces/Info";
import CharacterCardComponent from "../../shared/components/CharacterCardComponent/CharacterCardComponent";
import FilterComponent from "./components/FilterComponent/FilterComponent";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import Filter from "../../../interfaces/Filter";
import Status from "../../../enums/Status";
import Gender from "../../../enums/Gender";

function AllCharacterPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [info, setInfo] = useState<Info | null>(null);
  const [data, setData] = useState<Character[]>([]);
  const [filter, setFilter] = useState<Filter>({
    query: "",
    species: "",
    status: Status.None,
    gender: Gender.None,
  });

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

  function onSearch(ev: Event) {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();
    setFilter({ ...filter, query: query });
    searchCharacters({ ...filter, query: query });
  }

  function searchCharacters(filter: Filter) {
    setLoading(true);
    CharacterService.search(filter)
      .then((response) => {
        setInfo(response.info);
        setData(response.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getCharacters(info?.next);
  }, []);

  let content;

  if (loading) content = <LoadingComponent></LoadingComponent>;
  else
    content = data.map((character) => {
      return (
        <CharacterCardComponent
          key={character.name}
          character={character}
        ></CharacterCardComponent>
      );
    });

  return (
    <IonContent>
      <IonGrid>
        <IonCol size="12">
          <IonRow class="ion-justify-content-center ion-align-items-center">
            <IonCol size="10" sizeMd="9" sizeLg="6">
              <IonSearchbar
                animated={true}
                debounce={500}
                onIonInput={(ev) => onSearch(ev)}
                placeholder="Search the Character"
              ></IonSearchbar>
            </IonCol>
            <FilterComponent
              filter={filter}
              setFilter={setFilter}
              onClose={searchCharacters}
            ></FilterComponent>
          </IonRow>
        </IonCol>
        <IonCol size="12">
          <IonRow class="ion-justify-content-center">{content}</IonRow>
        </IonCol>
      </IonGrid>
      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          if (info?.next) {
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
