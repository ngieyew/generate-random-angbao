import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal"; // replace with the path to your angbao image

const Angbao = React.memo(function Angbao({
  image,
  speed,
  left,
  width,
  onEnd,
}) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  useEffect(() => {
    Modal.setAppElement("#root"); // replace '#root' with the id of your app's root element
  }, []);

  const handleClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <img
        onAnimationEnd={onEnd}
        src={image}
        alt="Angbao"
        onClick={handleClick}
        style={{
          position: "absolute",
          top: 0,
          left: `${left}vw`,
          animation: `fall ${speed}s linear forwards`,
          cursor: "pointer",
          width: width, // adjust the width as needed
          height: "auto", // adjust the height as needed
        }}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Angbao Modal"
      >
        <h2>You've clicked an angbao!</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
      <style>{`
       @keyframes fall {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(calc(100vh + 100%)); display: none; } // make the angbao fall further and disappear
      }
      body { overflow: hidden; } // hide scrollbar
      `}</style>
    </div>
  );
});

Angbao.propTypes = {
  image: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  onEnd: PropTypes.func.isRequired,
};

export default Angbao;
