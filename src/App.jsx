// import Ending from './components/Ending';

// function App() {
//   return <Ending />;
// }

// export default App;


// import { useState } from "react";

// import Welcome from "./components/Welcome";
// import Memories from "./components/Memories";
// import Gallery from "./components/Gallery";
// import Surprise from "./components/Surprise";
// import Ending from "./components/Ending";

// function App() {
//   const [currentScreen, setCurrentScreen] = useState("welcome");

//   // Welcome → Memories
//   if (currentScreen === "welcome") {
//     return <Welcome onStart={() => setCurrentScreen("memories")} />;
//   }

//   // Memories → Gallery
//   if (currentScreen === "memories") {
//     return (
//       <Memories
//         onNext={() => setCurrentScreen("gallery")}
//         onBack={() => setCurrentScreen("welcome")}
//       />
//     );
//   }

//   // Gallery → Surprise
//   if (currentScreen === "gallery") {
//     return (
//       <Gallery
//         onNext={() => setCurrentScreen("surprise")}
//         onBack={() => setCurrentScreen("memories")}
//       />
//     );
//   }

//   // Surprise → Ending
//   if (currentScreen === "surprise") {
//     return (
//       <Surprise
//         onBack={() => setCurrentScreen("gallery")}
//         onNext={() => setCurrentScreen("ending")}
//       />
//     );
//   }

//   // Ending (final screen)
//   return <Ending onBack={() => setCurrentScreen("surprise")} />;
// }

// export default App;

// import { useState, useRef, useEffect } from "react";

// import Welcome from "./components/Welcome";
// import Memories from "./components/Memories";
// import Gallery from "./components/Gallery";
// import Surprise from "./components/Surprise";
// import Ending from "./components/Ending";

// // Import music files
// import song1 from "./assets/music/01 Mera Mann.mp3";
// import song2 from "./assets/music/02 Samajavaragamana.mp3";
// import song3 from "./assets/music/03 Mere Liye Tum Kaafi Ho.mp3";
// import song4 from "./assets/music/04 INKEM INKEM INKEM KAVALE.mp3";

// function App() {
//   const [currentScreen, setCurrentScreen] = useState("welcome");
//   const [musicStarted, setMusicStarted] = useState(false);

//   // Playlist
//   const playlist = [song1, song2, song3, song4];

//   // Persistent audio + index
//   const audioRef = useRef(null);
//   const currentTrackIndex = useRef(0);

//   // Initialize audio once
//   useEffect(() => {
//     audioRef.current = new Audio(playlist[0]);

//     audioRef.current.addEventListener("ended", () => {
//       currentTrackIndex.current += 1;

//       if (currentTrackIndex.current < playlist.length) {
//         audioRef.current.src = playlist[currentTrackIndex.current];
//         audioRef.current.play();
//       }
//     });

//     return () => {
//       audioRef.current.pause();
//       audioRef.current = null;
//     };
//   }, []);

//   // Pause / resume music on screen change
//   useEffect(() => {
//     if (!musicStarted || !audioRef.current) return;

//     audioRef.current.pause();

//     // Resume after screen render
//     const resumeTimeout = setTimeout(() => {
//       audioRef.current.play();
//     }, 150);

//     return () => clearTimeout(resumeTimeout);
//   }, [currentScreen, musicStarted]);

//   // Start music (called only once from Welcome)
//   const startMusic = () => {
//     if (!musicStarted && audioRef.current) {
//       audioRef.current.play();
//       setMusicStarted(true);
//     }
//   };

//   // ---------- SCREEN FLOW ----------

//   if (currentScreen === "welcome") {
//     return (
//       <Welcome
//         onStart={() => {
//           startMusic();
//           setCurrentScreen("memories");
//         }}
//       />
//     );
//   }

//   if (currentScreen === "memories") {
//     return (
//       <Memories
//         onNext={() => setCurrentScreen("gallery")}
//         onBack={() => setCurrentScreen("welcome")}
//       />
//     );
//   }

//   if (currentScreen === "gallery") {
//     return (
//       <Gallery
//         onNext={() => setCurrentScreen("surprise")}
//         onBack={() => setCurrentScreen("memories")}
//       />
//     );
//   }

//   if (currentScreen === "surprise") {
//     return (
//       <Surprise
//         onNext={() => setCurrentScreen("ending")}
//         onBack={() => setCurrentScreen("gallery")}
//       />
//     );
//   }

//   return <Ending onBack={() => setCurrentScreen("surprise")} />;
// }

// export default App;


import { useState, useRef, useEffect } from "react";

import Welcome from "./components/Welcome";
import Memories from "./components/Memories";
import Gallery from "./components/Gallery";
import Surprise from "./components/Surprise";
import Ending from "./components/Ending";

// Import music files
import song1 from "./assets/music/01 Mera Mann.mp3";
import song2 from "./assets/music/02 Kadhi Tu.mp3";
import song6 from "./assets/music/03 Samajavaragamana.mp3";
import song3 from "./assets/music/04 Hosanna.mp3";
import song4 from "./assets/music/05 Inkem Inkem Inkem Kaavaale.mp3";
import song5 from "./assets/music/06 Ranjha.mp3";

function App() {
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [musicStarted, setMusicStarted] = useState(false);

  const playlist = [song1, song2, song3, song4, song5, song6];

  const audioRef = useRef(null);
  const currentTrackIndex = useRef(0);

  // Initialize audio once
  useEffect(() => {
    audioRef.current = new Audio(playlist[0]);

    audioRef.current.addEventListener("ended", () => {
      currentTrackIndex.current =
        (currentTrackIndex.current + 1) % playlist.length;

      audioRef.current.src = playlist[currentTrackIndex.current];
      audioRef.current.play();
    });

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  // Pause & resume music on screen change
  useEffect(() => {
    if (!musicStarted || !audioRef.current) return;

    audioRef.current.pause();

    const resumeTimeout = setTimeout(() => {
      audioRef.current.play();
    }, 120);

    return () => clearTimeout(resumeTimeout);
  }, [currentScreen, musicStarted]);

  // Start music (called from Welcome)
  const startMusic = () => {
    if (!musicStarted && audioRef.current) {
      audioRef.current.play();
      setMusicStarted(true);
    }
  };

  // ⏭️ Play next song manually
  const playNextSong = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();

    currentTrackIndex.current =
      (currentTrackIndex.current + 1) % playlist.length;

    audioRef.current.src = playlist[currentTrackIndex.current];
    audioRef.current.play();

    setMusicStarted(true);
  };

  // Wrapper to show floating music button on all screens
  const ScreenWrapper = ({ children }) => (
    <div>
      {children}

      {musicStarted && (
        <button
          onClick={playNextSong}
          title="Next song"
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            border: "none",
            background: "#ffb6c1",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
        ⏭️
        </button>
      )}
    </div>
  );

  // ---------- SCREEN FLOW ----------

  if (currentScreen === "welcome") {
    return (
      <ScreenWrapper>
        <Welcome
          onStart={() => {
            startMusic();
            setCurrentScreen("memories");
          }}
        />
      </ScreenWrapper>
    );
  }

  if (currentScreen === "memories") {
    return (
      <ScreenWrapper>
        <Memories
          onNext={() => setCurrentScreen("gallery")}
          onBack={() => setCurrentScreen("welcome")}
        />
      </ScreenWrapper>
    );
  }

  if (currentScreen === "gallery") {
    return (
      <ScreenWrapper>
        <Gallery
          onNext={() => setCurrentScreen("surprise")}
          onBack={() => setCurrentScreen("memories")}
        />
      </ScreenWrapper>
    );
  }

  if (currentScreen === "surprise") {
    return (
      <ScreenWrapper>
        <Surprise
          onNext={() => setCurrentScreen("ending")}
          onBack={() => setCurrentScreen("gallery")}
        />
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper>
      <Ending onBack={() => setCurrentScreen("surprise")} />
    </ScreenWrapper>
  );
}

export default App;
