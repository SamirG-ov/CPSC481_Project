import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = ({ pad }) => {
  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        paddingTop: pad,
      }}
    >
      <button
        style={{
          color: "black",
          border: "none",
          borderRadius: "100px",
          cursor: "pointer",
          fontSize: "30px",
        }}
        type="button"
        onClick={() => window.history.back()}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </div>
  );
};

export default BackButton;
