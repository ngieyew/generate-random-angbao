import Angbao from "./Angbao"; // adjust the import path according to your project structure
import angbaoImageS from "./assets/angpow_s.png"; // replace with the path to your angbao image
import angbaoImageM from "./assets/angpow_m.png";
import angbaoImageL from "./assets/angpow_l.png";
import { useCallback, useEffect, useState, useMemo } from "react";

function App() {
  const [angbaoArray, setAngbaoArray] = useState([]);
  const angbaoSetting = useMemo(
    () => [
      { image: angbaoImageL, speed: { minimum: 1, maximum: 2 }, width: "80px" },
      { image: angbaoImageM, speed: { minimum: 3, maximum: 4 }, width: "60px" },
      { image: angbaoImageS, speed: { minimum: 5, maximum: 6 }, width: "50px" },
    ],
    []
  ); // Add dependencies here if any variables used inside the array are expected to change
  const generateRandomAngbao = useCallback(() => {
    const randomAngbao =
      angbaoSetting[Math.floor(Math.random() * angbaoSetting.length)];
    const randomAngbaoSpeed = Math.floor(
      Math.random() *
        (randomAngbao.speed.maximum - randomAngbao.speed.minimum) +
        randomAngbao.speed.minimum
    );
    const randomId = crypto.randomUUID();

    const randomAngbaoLeft = Math.floor(Math.random() * 100);

    const generatedAngbao = {
      ...randomAngbao,
      id: randomId,
      speed: randomAngbaoSpeed,
      left: randomAngbaoLeft,
    };

    return generatedAngbao;
  }, [angbaoSetting]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAngbaoArray((prevAngbaos) => {
        return [...prevAngbaos, generateRandomAngbao()];
      });
    }, 150); // Adjust the angbao generation interval as need

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [generateRandomAngbao]);

  const filterAngbao = (id) => {
    setAngbaoArray((prevAngbaos) =>
      prevAngbaos.filter((angbao) => angbao.id !== id)
    );
  };

  return (
    <div>
      {angbaoArray.map((angbao) => (
        <Angbao
          key={angbao.id}
          image={angbao.image}
          speed={angbao.speed}
          left={angbao.left}
          width={angbao.width}
          onEnd={() => filterAngbao(angbao.id)} // Remove angbao from array when animation ends
        />
      ))}
    </div>
  );
}

export default App;
