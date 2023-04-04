import ReactModal from "react-modal";
import "./Modal.scss"
export const Modal = (props) => {
  return (
    <ReactModal
      isOpen={modal}
      contentLabel="Example Modal"
      onRequestClose={() => setModal(false)}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(128, 128, 128,0.5)",
        },
        content: {
          position: "absolute",
          top: "150px",
          left: "350px",
          right: "350px",
          bottom: "150px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      {"This is the content of the modal."}
      <div>Login/</div>
      <button onClick={() => setModal(false)}>X</button>1
    </ReactModal>
  );
};
