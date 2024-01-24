import React from "react";
import PropTypes from "prop-types";

const Angbao = React.memo(function Angbao({
  image,
  speed,
  left,
  width,
  onEnd,
  openModal,
}) {
  return (
    <div>
      <img
        onAnimationEnd={onEnd}
        src={image}
        alt="Angbao"
        onClick={openModal}
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
  openModal: PropTypes.func.isRequired,
};

export default Angbao;
