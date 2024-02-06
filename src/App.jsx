import { useState, useEffect } from "react";
import angpowImageS from "./assets/angpow_s.png";
import angpowImageM from "./assets/angpow_m.png";
import angpowImageL from "./assets/angpow_l.png";
import Angpow from "./Angpow";

function App() {
  const [angpows, setAngpows] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const angpowSettings = [
    { image: angpowImageL, speed: { min: 2, max: 4 }, width: "80px" },
    { image: angpowImageM, speed: { min: 5, max: 8 }, width: "60px" },
    { image: angpowImageS, speed: { min: 9, max: 11 }, width: "50px" },
  ];

  const generateAngpows = () => {
    const angpowPer100px = 1; // Adjust this value to change the density of angpows
    const numAngpows = Math.floor(window.innerWidth / 100) * angpowPer100px;

    const newAngpows = Array.from({ length: numAngpows }, (_, i) => {
      const setting =
        angpowSettings[Math.floor(Math.random() * angpowSettings.length)];
      const left =
        Math.random() * (window.innerWidth - parseInt(setting.width, 10));
      const speed =
        Math.random() * (setting.speed.max - setting.speed.min) +
        setting.speed.min;
      const delay = isFirstLoad ? 0 : Math.random() * 5;
      return {
        id: i,
        left,
        delay,
        speed,
        image: setting.image,
        width: setting.width,
      };
    });

    setAngpows(newAngpows);
    setIsFirstLoad(false);
  };

  useEffect(() => {
    generateAngpows();
    const handleResize = () => {
      generateAngpows();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {angpows.map((angpow) => (
        <Angpow
          key={angpow.id}
          image={angpow.image}
          speed={angpow.speed}
          left={angpow.left}
          width={angpow.width}
          delay={angpow.delay}
        />
      ))}
    </div>
  );
}

export default App;
