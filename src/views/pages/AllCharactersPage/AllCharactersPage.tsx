import { IonContent } from "@ionic/react";
import { useEffect, useState } from "react";
import ResponseAPI from "../../../interfaces/ResponseAPI";
import { CharacterService } from "../../../services/characters/characterService";
import LoadingComponent from "../../shared/components/LoadingComponent/LoadingComponent";

function AllCharacterPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<ResponseAPI<CharacterData> | null>(
    null
  );
  const [data, setData] = useState<CharacterData[]>([]);

  useEffect(() => {
    CharacterService.getAll().then((response) => {
      setResponse(response);
      setData(data.concat(response.results));
    });
  }, [data]);

  if (loading) return <LoadingComponent></LoadingComponent>;
  return <IonContent></IonContent>;
}

export default AllCharacterPage;
