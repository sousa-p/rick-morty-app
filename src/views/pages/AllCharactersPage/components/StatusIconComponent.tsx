import Status from "../../../../enums/Status";

interface StatusIconProps {
  status: Status;
}

const CharacterCardComponent: React.FC<StatusIconProps> = ({ status }) => {
  const iconStyle: React.CSSProperties = {
    height: "0.5rem",
    width: "0.5rem",
    marginRight: "0.375rem",
    borderRadius: "50%",
  };

  iconStyle.background =
    status == Status.Alive
      ? "rgb(85, 204, 68)"
      : status == Status.Dead
      ? "rgb(214, 61, 46)"
      : "rgb(98, 114, 164)";

  return <div style={iconStyle}></div>;
};

export default CharacterCardComponent;
