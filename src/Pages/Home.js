// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { personalDetails } from "../Details";

// function Home() {
//   const { name, tagline, img } = personalDetails;
//   const h11 = useRef();
//   const h12 = useRef();
//   const h13 = useRef();
//   const myimageref = useRef();
//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.from(
//       h11.current,
//       {
//         x: "-100%",
//         delay: 0.8,
//         opacity: 0,
//         duration: 1,
//         ease: "Power3.easeOut",
//       },
//       "<"
//     )
//       .from(
//         h12.current,
//         {
//           x: "-100%",
//           delay: 0.5,
//           opacity: 0,
//           duration: 1,
//           ease: "Power3.easeOut",
//         },
//         "<"
//       )
//       .from(
//         h13.current,
//         {
//           x: "-100%",
//           delay: 0.1,
//           opacity: 0,
//           duration: 1,
//           ease: "Power3.easeOut",
//         },
//         "<"
//       )
//       .from(
//         myimageref.current,
//         {
//           x: "200%",
//           delay: 0.5,
//           opacity: 0,
//           duration: 1,
//           ease: "Power3.easeOut",
//         },
//         "<"
//       );
//   }, []);
//   return (
//     <main className="container mx-auto max-width section md:flex justify-between items-center">
//       <div>
//         <h1
//           ref={h11}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           Hi,👋<br></br>My Name is
//         </h1>
//         <h1
//           ref={h12}
//           className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           {name}
//         </h1>
//         <h2
//           ref={h13}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           {tagline}
//         </h2>
//       </div>
//       <div className="mt-5 md:mt-0">
//         <img ref={myimageref} className="w-1/2 md:ml-auto rounded-full object-cover" src={img} alt="Pavan MG" />
//       </div>
//     </main>
//   );
// }

// export default Home;





// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { personalDetails } from "../Details";

// function Home() {
//   const { name, tagline, img } = personalDetails;

//   const h11 = useRef();
//   const h12 = useRef();
//   const h13 = useRef();
//   const myimageref = useRef();

//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.from(h11.current, {
//       x: "-100%",
//       delay: 0.8,
//       opacity: 0,
//       duration: 1,
//       ease: "Power3.easeOut",
//     })
//       .from(h12.current, {
//         x: "-100%",
//         delay: 0.5,
//         opacity: 0,
//         duration: 1,
//         ease: "Power3.easeOut",
//       })
//       .from(h13.current, {
//         x: "-100%",
//         delay: 0.1,
//         opacity: 0,
//         duration: 1,
//         ease: "Power3.easeOut",
//       })
//       .from(myimageref.current, {
//         x: "200%",
//         delay: 0.5,
//         opacity: 0,
//         duration: 1,
//         ease: "Power3.easeOut",
//       });
//   }, []);

//   return (
//     <main className="container mx-auto max-width section md:flex justify-between items-center">
//       {/* Text Section */}
//       <div>
//         <h1
//           ref={h11}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           Hi, 👋<br /> My Name is
//         </h1>

//         <h1
//           ref={h12}
//           className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           {/* Gradient Text in Dark Mode */}
//           <span
//             className="dark:text-transparent dark:bg-clip-text dark:block"
//             style={{
//               background: "linear-gradient(to right, #00c6ff, #3a7bd5, #004cbf)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             {name}
//           </span>
//           {/* Solid Text in Light Mode */}
//           <span className="hidden dark:hidden block text-dark-heading">
//             {name}
//           </span>
//         </h1>

//         <h2
//           ref={h13}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           {tagline}
//         </h2>
//       </div>

//       {/* Image Section */}
//       <div className="mt-5 md:mt-0">
//         <img
//           ref={myimageref}
//           className="w-1/2 md:ml-auto rounded-full object-cover"
//           src={img}
//           alt="Profile"
//         />
//       </div>
//     </main>
//   );
// }

// export default Home;



// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { personalDetails } from "../Details";

// function Home() {
//   const { name, tagline, img } = personalDetails;

//   const h11 = useRef();
//   const h12 = useRef();
//   const h13 = useRef();
//   const myimageref = useRef();

//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.from(h11.current, {
//       x: "-100%",
//       delay: 0.8,
//       opacity: 0,
//       duration: 1,
//       ease: "Power3.easeOut",
//     })
//       .from(h12.current, {
//         x: "-100%",
//         delay: 0.5,
//         opacity: 0,
//         duration: 1,
//         ease: "Power3.easeOut",
//       })
//       .from(h13.current, {
//         x: "-100%",
//         delay: 0.1,
//         opacity: 0,
//         duration: 1,
//         ease: "Power3.easeOut",
//       })
//       .from(myimageref.current, {
//         opacity: 0,
//         scale: 0.8,
//         duration: 1,
//         ease: "Power3.easeOut",
//       });
//   }, []);

//   return (
//     <main className="container mx-auto max-width section md:flex justify-between items-center">
//       {/* Text Section */}
//       <div>
//         <h1
//           ref={h11}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           Hi, 👋<br /> My Name is
//         </h1>

//         <h1
//           ref={h12}
//           className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           <span
//             className="dark:text-transparent dark:bg-clip-text dark:block"
//             style={{
//               background: "linear-gradient(to right, #00c6ff, #3a7bd5, #004cbf)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             {name}
//           </span>
//           <span className="hidden dark:hidden block text-dark-heading">
//             {name}
//           </span>
//         </h1>

//         <h2
//           ref={h13}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           {tagline}
//         </h2>
//       </div>

//       {/* Image Section */}
//       <div className="mt-5 md:mt-0 relative w-1/2 md:w-3/4 xl:w-1/2 mx-auto md:ml-auto">
//         <div
//           className="rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
//           style={{
//             clipPath: "circle(50% at 50% 50%)",
//           }}
//         >
//           <img
//             ref={myimageref}
//             className="w-full h-full object-cover"
//             src={img}
//             alt="Profile"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Home;


// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { personalDetails } from "../Details";

// function Home() {
//   const { name, tagline, img } = personalDetails;

//   const h11 = useRef();
//   const h12 = useRef();
//   const h13 = useRef();
//   const myimageref = useRef();

//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.from(h11.current, {
//       x: "-100%",
//       delay: 0,
//       opacity: 0,
//       duration: 1,
//       ease: "Power3.easeOut",
//     })
//       .from(h12.current, {
//         x: "-100%",
//         delay: 0.1,
//         opacity: 0,
//         duration: 1,
//         ease: "Power3.easeOut",
//       })
//       .from(h13.current, {
//         x: "-100%",
//         delay: 0.1,
//         opacity: 0,
//         duration: 1,
//         ease: "Power3.easeOut",
//       })
//       .from(myimageref.current, {
//         opacity: 0,
//         scale: 0.8,
//         duration: 1,
//         ease: "Power3.easeOut",
//       });
//   }, []);

//   return (
//     <main className="container mx-auto max-width section md:flex justify-between items-center">
//       {/* Text Section */}
//       <div className="w-full md:w-2/3">
//         <h1
//           ref={h11}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           Hi, 👋<br /> My Name is
//         </h1>

//         <h1
//           ref={h12}
//           className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-2"
//         >
//           <span
//             className="dark:text-transparent dark:bg-clip-text dark:block"
//             style={{
//               background: "linear-gradient(to right, #00c6ff, #3a7bd5, #004cbf)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             {name}
//           </span>
//           <span className="hidden dark:hidden block text-dark-heading">
//             {name}
//           </span>
//         </h1>

//         <h2
//           ref={h13}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-10"
//         >
//           {tagline}
//         </h2>


//       </div>

//       {/* Image Section */}
//       <div className="mt-10 md:mt-0 relative w-2/3 md:w-1/3 xl:w-1/3 mx-auto md:ml-auto">
//         <div
//           className="rounded-full overflow-hidden  shadow-lg hover:scale-105 transition-transform duration-800 ease-in-out"
//           style={{
//             clipPath: "circle(50% at 50% 50%)",
//           }}
//         >
//           <img
//             ref={myimageref}
//             className="w-full h-full object-cover"
//             src={img}
//             alt="Profile"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Home;

// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { personalDetails } from "../Details";

// function Home() {
//   const { name, tagline, img } = personalDetails;

//   const h11 = useRef();
//   const h12 = useRef();
//   const h13 = useRef();
//   const myimageref = useRef();

//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.from(h11.current, {
//       x: "-100%",
//       delay: 0,
//       opacity: 0,
//       duration: 1,
//       ease: "Power3.easeOut",
//     })
//       .from(h12.current, {
//         x: "-100%",
//         delay: 0.1,
//         opacity: 0,
//         duration: 1,
//         ease: "Power3.easeOut",
//       })
//       .from(h13.current, {
//         x: "-100%",
//         delay: 0.1,
//         opacity: 0,
//         duration: 1,
//         ease: "Power3.easeOut",
//       })
//       // Image Animation: Fade-in + Scale
//       .from(myimageref.current, {
//         x: "200%", // Slide in from the right
//         opacity: 0,
//         scale: 0.8, // Slight scale-up animation
//         delay: 0.1,
//         duration: 1,
//         ease: "Power3.easeOut",
//       });
//   }, []);

//   return (
//     <main className="container mx-auto max-width section md:flex justify-between items-center">
//       {/* Text Section */}
//       <div className="w-full md:w-2/3">
//         <h1
//           ref={h11}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
//         >
//           Hi, 👋<br /> My Name is
//         </h1>

//         <h1
//           ref={h12}
//           className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-2"
//         >
//           <span
//             className="dark:text-transparent dark:bg-clip-text dark:block"
//             style={{
//               background: "linear-gradient(to right, #00c6ff, #3a7bd5, #004cbf)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             {name}
//           </span>
//           <span className="hidden dark:hidden block text-dark-heading">
//             {name}
//           </span>
//         </h1>

//         <h2
//           ref={h13}
//           className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-10"
//         >
//           {tagline}
//         </h2>
//       </div>

//       {/* Image Section */}
//       <div className="mt-10 md:mt-0 relative w-2/3 md:w-1/3 xl:w-1/3 mx-auto md:ml-auto">
//         <div
//           className="rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
//           style={{
//             clipPath: "circle(50% at 50% 50%)",
//           }}
//         >
//           <img
//             ref={myimageref}
//             className="w-full h-full object-cover"
//             src={img}
//             alt="Profile"
//             loading="lazy"
//             width="300"
//             height="300"
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Home;

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;

  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    // Start Text Animations
    tl.from(h11.current, {
      x: "-100%",
      opacity: 0,
      duration: 0.7,
      delay: 0.5,
      ease: "back.out(1.7)",
    })
      .from(myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 0.7,
          ease: "expoScale(0.5,7,none)",
        })
      .from(h12.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.7)",
      })
      .from(h13.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.7)",
      });
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      {/* Text Section */}
      <div className="w-full md:w-2/3">
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi, 👋<br /> My Name is
        </h1>

        <h1
          ref={h12}
          className="text-2xl md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-2"
        >
          <span
            className="dark:text-transparent dark:bg-clip-text dark:block"
            style={{
              background: "linear-gradient(to right, #00c6ff, #3a7bd5, #004cbf)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {name}
          </span>
          <span className="hidden dark:hidden block text-dark-heading">
            {name}
          </span>
        </h1>

        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mt-10"
        >
          {tagline}
        </h2>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-0 relative w-2/3 md:w-1/3 xl:w-1/3 mx-auto md:ml-auto">
        <img
          ref={myimageref}
          className="w-full h-full object-cover passi-image"
          src={img}
          alt="Profile"
          loading="eager" // Preload the image early
          width="300"
          height="300"
          style={{
            clipPath: "circle(50% at 50% 50%)",
          }}
        />
      </div>
    </main>
  );
}

export default Home;
