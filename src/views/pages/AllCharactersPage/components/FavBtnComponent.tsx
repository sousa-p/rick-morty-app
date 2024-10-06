import { IonButton, IonButtons } from "@ionic/react";
import { useState } from "react";
import { Heart, HeartOutline } from "react-ionicons";

interface FavBtnProps {
  id: number;
}

const FavBtnComponent: React.FC<FavBtnProps> = ({ id }) => {
  function getFavorites(): Array<number> {
    const local = localStorage.getItem("favorites") ?? "[]";
    return JSON.parse(local);
  }

  function isIdFavorited(): boolean {
    return getFavorites().indexOf(id) !== -1;
  }

  function toggleFavorites(): void {
    const favorites = getFavorites();

    if (isFavorited) {
      const index = favorites.indexOf(id);
      favorites.splice(index, 1);
    } else {
      favorites.push(id);
      favorites.sort();
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorited(!isFavorited);
  }

  const [isFavorited, setIsFavorited] = useState(isIdFavorited());

  const favIcon = isFavorited ? (
    <Heart color={"#ff5555"} title={""} height="35px" width="35px" />
  ) : (
    <HeartOutline color={"000000"} title={""} height="35px" width="35px" />
  );

  return (
    <IonButtons>
      {" "}
      <IonButton onClick={() => toggleFavorites()}>{favIcon}</IonButton>
    </IonButtons>
  );
};

export default FavBtnComponent;
