import {
    IonSpinner,
  } from '@ionic/react';

const LoadingComponent
 = () => {
  return (
    <IonSpinner style={{ transform: 'scale(2.5)' }}></IonSpinner>
  );
};

export default LoadingComponent
;
