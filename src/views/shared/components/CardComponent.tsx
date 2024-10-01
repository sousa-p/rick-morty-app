import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

function CardComponent(title: string, subtitle: string, content: string, imgSrc: string ) {
  return (
    <IonCard>
      <img alt="Card visual" src={imgSrc} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{content}</IonCardContent>
    </IonCard>
  );
}

export default CardComponent;
