import { useRef } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { CloseOutline, FilterOutline } from "react-ionicons";

function FilterComponent() {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  return (
    <>
      <IonButton
        id="open-modal"
        style={{ "--box-shadow": "none", height: "42px" }}
      >
        <FilterOutline color={"000000"} title={""} height="25px" width="25px" />
      </IonButton>
      <IonModal ref={modal} trigger="open-modal">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Filter Your Search</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => modal.current?.dismiss()}>
                <CloseOutline
                  color={"000000"}
                  title={""}
                  height="35px"
                  width="35px"
                />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonInput
              label="Enter the Species"
              labelPlacement="stacked"
              ref={input}
              type="text"
              placeholder="Ex.: Human"
            />
          </IonItem>
          <IonItem>
            <IonSelect label="Enter the Status" placeholder="">
              <IonSelectOption value="alive">Alive</IonSelectOption>
              <IonSelectOption value="dead">Dead</IonSelectOption>
              <IonSelectOption value="unknown">Unknown</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonSelect label="Enter the Gender" placeholder="">
              <IonSelectOption value="female">Female</IonSelectOption>
              <IonSelectOption value="male">Male</IonSelectOption>
              <IonSelectOption value="genderless">Genderless</IonSelectOption>
              <IonSelectOption value="unknown">Unknown</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonContent>
      </IonModal>
    </>
  );
}

export default FilterComponent;
