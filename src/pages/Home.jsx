
import { Canvas } from "@react-three/fiber"
import { Suspense, useState , useEffect, useRef} from "react"
import Loader from "../components/Loader"

import Sky from "../models/Sky"
import Island from "../models/Island"
import Bird from "../models/Bird"
import Plane from "../models/Plane"
import HomeInfo from "../components/HomeInfo"
import sakuraSchool from '../assets/sakuraSchool.mp3'
import { soundoff, soundon } from "../assets/icons"


const Home = () => {
  const audioRef = useRef(new Audio(sakuraSchool));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [ currentStage , setCurrentStage ] = useState(1)
  const [isPlayingMusic, setPlayingMusic] = useState(false)

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPostion = [0, -6.5, -43];
    let rotation = [ 0.1, 4.7, 0 ]

    if (window.innerWidth <= 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPostion, rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale ,  screenPostion  ;


    if (window.innerWidth <= 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPostion = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPostion = [0, -4, -4];
    }

    return [screenScale, screenPostion];
  }

  const [ screenScale, islandPosition, islandRotation ] = adjustIslandForScreenSize();
  const [ planeScale, planePosition ] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
     {/*  <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
      </div> */}
      <Canvas 
      className={`w-full h-screen bg-transparent ${ isRotating ? "cursor-grabbing" : "cursor-grab"}`}
      camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,10]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
          position={islandPosition}
          scale={screenScale}
          rotation={islandRotation}
          isRotating={setIsRotating}
          setIsRotating={setIsRotating}
          setCurrentStage={setCurrentStage}
          />
          <Plane
          isRotating={isRotating}
          scale={planeScale}
          position={planePosition}
          rotation={[ 0, 20, 0 ]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img 
        src={!isPlayingMusic ? soundoff : soundon}
        alt='jukebox'
        onClick={() => setPlayingMusic(!isPlayingMusic)}
        className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  )
}

export default Home

