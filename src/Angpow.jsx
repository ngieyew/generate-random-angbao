import PropTypes from "prop-types";

function AngPow({ image, speed, left, width, delay }) {
  const style = {
    animation: `drop ${speed}s linear ${delay}s infinite`,
    animationDelay: `${delay}s`,
    left: `${left}px`,
    width,
    visibility: "hidden", // Set visibility to hidden initially
  };

  return (
    <div>
      <img src={image} className="angpow" style={style} />
      <style>{`
        .angpow {
          position: absolute;
          top: 0;
          background-size: cover;
          animation: drop linear infinite;
        }
        
      
        @keyframes drop {
          0% {
            transform: translateY(-100%);
            visibility: visible; // Change visibility to visible at the start of the animation
          }
          to {
            transform: translateY(100vh);
          }
        }
        
      `}</style>
    </div>
  );
}

AngPow.propTypes = {
  image: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

export default AngPow;
