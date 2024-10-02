import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

interface CardProps {
  title: string;
  subtitle: string;
  content: string;
  imgSrc: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  imgSrc,
}) => {
  return (
    <IonCard style={{ width: "300px" }}>
      <img alt={title} src={imgSrc} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{content}</IonCardContent>
    </IonCard>
  );
};

export default CardComponent;
