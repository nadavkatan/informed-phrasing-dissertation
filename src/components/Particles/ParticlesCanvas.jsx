// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// // import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
// import "./styles.css";

// export const ParticalesCanvas = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);
//     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     await loadFull(engine);
//     // await loadSlim(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     // container.canvas.size.width = 1000;
//     await console.log(container);
//   }, []);

//   return (
//     // <div className="particles-container">
//     //   <div style={{ width: "300px", height: "100vh" }}></div>
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       loaded={particlesLoaded}
//       className="particles-wrapper"
//       options={{
//         fullScreen: { enable: false },
//         background: {
//           color: {
//             value: "#0000000",
//           },
//         },
//         fpsLimit: 120,
//         interactivity: {
//           events: {
//             onClick: {
//               enable: true,
//               mode: "push",
//             },
//             onHover: {
//               enable: true,
//               mode: "repulse",
//             },
//             resize: true,
//           },
//           modes: {
//             push: {
//               quantity: 4,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,
//             },
//           },
//         },
//         particles: {
//           color: {
//             value: "#016A70",
//           },
//           links: {
//             color: "#016A70",
//             distance: 150,
//             enable: true,
//             opacity: 0.5,
//             width: 1,
//           },
//           move: {
//             direction: "none",
//             enable: true,
//             outModes: {
//               default: "bounce",
//             },
//             random: false,
//             speed: 1,
//             straight: false,
//           },
//           number: {
//             density: {
//               enable: true,
//               area: 800,
//             },
//             value: 100,
//           },
//           opacity: {
//             value: 0.5,
//           },
//           shape: {
//             type: "circle",
//           },
//           size: {
//             value: { min: 1, max: 5 },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//     // </div>
//   );
// };
