// import Ending from './components/Ending';

// function App() {
//   return <Ending />;
// }

// export default App;


// import { useState } from "react";
// import Welcome from "./components/Welcome";
// import Memories from "./components/Memories";

// function App() {
//   const [currentScreen, setCurrentScreen] = useState("welcome");

//   if (currentScreen === "welcome") {
//     return <Welcome onStart={() => setCurrentScreen("memories")} />;
//   }

//   return <Memories />;
// }

// export default App;


// import { useState } from "react";
// import Welcome from "./components/Welcome";
// import Memories from "./components/Memories";
// import Gallery from "./components/Gallery";

// function App() {
//   const [currentScreen, setCurrentScreen] = useState("welcome");

//   if (currentScreen === "welcome") {
//     return <Welcome onStart={() => setCurrentScreen("memories")} />;
//   }

//   if (currentScreen === "memories") {
//     return <Memories onNext={() => setCurrentScreen("gallery")} />;
//   }

//   return <Gallery />;
// }

// export default App;


// import { useState } from "react";

// import Welcome from "./components/Welcome";
// import Memories from "./components/Memories";
// import Gallery from "./components/Gallery";
// import Surprise from "./components/Surprise";

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

//   // Surprise (back goes to Gallery, next will go to Ending later)
//   return (
//     <Surprise
//       onBack={() => setCurrentScreen("gallery")}
//       onNext={() => setCurrentScreen("ending")} // placeholder for next step
//     />
//   );
// }

// export default App;


import { useState } from "react";

import Welcome from "./components/Welcome";
import Memories from "./components/Memories";
import Gallery from "./components/Gallery";
import Surprise from "./components/Surprise";
import Ending from "./components/Ending";

function App() {
  const [currentScreen, setCurrentScreen] = useState("welcome");

  // Welcome → Memories
  if (currentScreen === "welcome") {
    return <Welcome onStart={() => setCurrentScreen("memories")} />;
  }

  // Memories → Gallery
  if (currentScreen === "memories") {
    return (
      <Memories
        onNext={() => setCurrentScreen("gallery")}
        onBack={() => setCurrentScreen("welcome")}
      />
    );
  }

  // Gallery → Surprise
  if (currentScreen === "gallery") {
    return (
      <Gallery
        onNext={() => setCurrentScreen("surprise")}
        onBack={() => setCurrentScreen("memories")}
      />
    );
  }

  // Surprise → Ending
  if (currentScreen === "surprise") {
    return (
      <Surprise
        onBack={() => setCurrentScreen("gallery")}
        onNext={() => setCurrentScreen("ending")}
      />
    );
  }

  // Ending (final screen)
  return <Ending onBack={() => setCurrentScreen("surprise")} />;
}

export default App;
