import { IonContent } from "@ionic/react";
import Portal from "../../../../assets/portal.svg";
import "./LoadingComponent.css";

const LoadingComponent = () => {
  return (
    <IonContent>
      <div className="wrapper_loading">
        <img className="loading_portal" src={Portal}></img>;
      </div>
    </IonContent>
  );
};

export default LoadingComponent;
