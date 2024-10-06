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
import Filter from "../../../../../interfaces/Filter";
import Status from "../../../../../enums/Status";
import Gender from "../../../../../enums/Gender";

interface FilterComponentProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
  onClose: (filter: Filter) => void;
}

function FilterComponent({ filter, setFilter, onClose }: FilterComponentProps) {
  const modal = useRef<HTMLIonModalElement>(null);

  const updateSpecies = (e: any) => {
    setFilter({ ...filter, species: e.detail.value });
  };

  const updateStatus = (e: any) => {
    setFilter({ ...filter, status: e.detail.value });
  };

  const updateGender = (e: any) => {
    setFilter({ ...filter, gender: e.detail.value });
  };

  return (
    <>
      <IonButton id="open-modal" style={{ height: "42px" }}>
        <FilterOutline color={"000000"} title={""} height="25px" width="25px" />
      </IonButton>
      <IonModal ref={modal} trigger="open-modal">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Filter Your Search</IonTitle>
            <IonButtons slot="end">
              <IonButton
                onClick={() => {
                  modal.current?.dismiss();
                  onClose(filter);
                }}
              >
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
              type="text"
              value={filter.species}
              onIonInput={updateSpecies}
              placeholder="Ex.: Human"
            />
          </IonItem>
          <IonItem>
            <IonSelect
              label="Enter the Status"
              value={filter.status}
              onIonChange={updateStatus}
            >
              <IonSelectOption value={Status.Alive}>Alive</IonSelectOption>
              <IonSelectOption value={Status.Dead}>Dead</IonSelectOption>
              <IonSelectOption value={Status.Unknown}>Unknown</IonSelectOption>
              <IonSelectOption value={Status.None}>None</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonSelect
              label="Enter the Gender"
              value={filter.gender}
              onIonChange={updateGender}
            >
              <IonSelectOption value={Gender.Female}>Female</IonSelectOption>
              <IonSelectOption value={Gender.Male}>Male</IonSelectOption>
              <IonSelectOption value={Gender.Genderless}>
                Genderless
              </IonSelectOption>
              <IonSelectOption value={Gender.Unknown}>Unknown</IonSelectOption>
              <IonSelectOption value={Gender.None}>None</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonContent>
      </IonModal>
    </>
  );
}

export default FilterComponent;
