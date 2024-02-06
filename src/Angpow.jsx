import PropTypes from "prop-types";

function AngPow({ image, speed, left, width, delay }) {
  const style = {
    backgroundImage: `url(${image})`,
    animation: `drop ${speed}s linear infinite, appear ${delay}s linear forwards`,
    left: `${left}px`,
    width,
  };

  return (
    <div>
      <img src={image} className="angpow" style={style} />
      <style>{`
        .angpow {
          position: absolute;
          top: 0;
          background-size: cover;
        }
      
        @keyframes drop {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(100vh);
          }
        }
        
        @keyframes appear {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
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
