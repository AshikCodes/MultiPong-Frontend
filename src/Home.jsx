import { motion } from "framer-motion";

const Home = () => {
    return ( 
        <>
            <div className="home-container">
                <div className="main-container">
                    <motion.h1 className="title" initial={{x: -1200, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.9, type: 'spring'}}>MultiPong</motion.h1>
                    <motion.button className="play-now-btn" initial={{x: 1200, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.9, type: 'spring'}}>PLAY NOW</motion.button>
                </div>
                <motion.button className="sign-up-btn" initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.9, type: 'spring'}}>SIGN UP</motion.button>
            </div>
        </>
     );
}
 
export default Home;