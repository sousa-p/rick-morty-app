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
import { FilterOutline } from "react-ionicons";

function FilterComponent() {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  return (
    <>
      <IonButton id="open-modal" expand="block" color={"primary"}>
        <FilterOutline color={"00000"} title={""} height="35px" width="35px" />
      </IonButton>
      <IonModal ref={modal} trigger="open-modal">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>
                Cancel
              </IonButton>
            </IonButtons>
            <IonTitle>Filter Your Search</IonTitle>
            <IonButtons slot="end">
              <IonButton strong={true} onClick={() => confirm()}>
                Confirm
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
