import Portal from "../../../../assets/portal.svg";
import "./LoadingComponent.css";

const LoadingComponent = () => {
  return (
    <div className="wrapper_loading">
      <img className="loading_portal" src={Portal}></img>
    </div>
  );
};

export default LoadingComponent;
