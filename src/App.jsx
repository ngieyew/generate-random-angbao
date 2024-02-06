import { useState, useEffect } from "react";
import angpowImageS from "./assets/angpow_s.png";
import angpowImageM from "./assets/angpow_m.png";
import angpowImageL from "./assets/angpow_l.png";
import Angpow from "./Angpow";

function App() {
  const [angpows, setAngpows] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const angpowSettings = [
    { image: angpowImageL, speed: { minimum: 15, maximum: 18 }, width: "80px" },
    { image: angpowImageM, speed: { minimum: 19, maximum: 22 }, width: "60px" },
    { image: angpowImageS, speed: { minimum: 23, maximum: 27 }, width: "50px" },
  ];

  const generateAngpows = () => {
    const angpowPerPx = 1; // Adjust this value to change the density of angpows
    const numAngpows = Math.floor(window.innerWidth / 35) * angpowPerPx;
    
    const newAngpows = Array.from({ length: numAngpows }, (_, i) => {
      const setting = angpowSettings[Math.floor(Math.random() * angpowSettings.length)];
      const left = Math.random() * (window.innerWidth - parseInt(setting.width, 10));
      const speed = Math.random() * (setting.speed.maximum - setting.speed.minimum) + setting.speed.minimum;
      const delay = isFirstLoad ? i * 0.5 : Math.random() * 5; // Delay each angpow by 0.5s on first load
      return { id: i, left, delay, speed, image: setting.image, width: setting.width };
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
