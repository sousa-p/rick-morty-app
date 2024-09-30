import { setupIonicReact } from "@ionic/react";
import "./App.css";
import "@ionic/react/css/core.css";
import { useEffect } from "react";
import { CharacterService } from "../services/characters/characterService";

setupIonicReact();



function App() {
  useEffect(() => {
    CharacterService.getAll();
  }, []);

  return (
    <>
      <h1>Conteúdo</h1>
    </>
  );
}

export default App;
