import authorImg from "assets/about.png";

function About() {
  return (
    <section className="container flex flex-col md:flex-row gap-y-6 gap-x-8 xl:gap-x-14 py-8 md:py-16 xl:py-20">
      <img
        src={authorImg}
        alt="Author photo"
        className="w-full md:w-[25%] rounded-full aspect-square object-center object-cover"
      />
      <div className="flex flex-col gap-4">
        <h2 className="font-robotoSlab font-normal text-[40px] leading-[46px] line-clamp-1 md:mb-6">
          About the author
        </h2>
        <p>
          Aspiring Frontend Developer with experience in modern JavaScript
          frameworks like React, Next.js, and Vue. My focus is on building
          dynamic and responsive user interfaces using advanced styling tools
          (Tailwind CSS, MUI, Vuetify) and state management libraries (Redux,
          Zustand, Pinia).
        </p>
        <p>
          I have a track record of writing clean, maintainable code, optimizing
          application performance, and working seamlessly with REST and GraphQL
          APIs. In previous projects, I successfully rewrote modules to enhance
          application speed and set up efficient workflows for team
          collaboration.
        </p>
        <p>
          My goal is to craft functional and visually appealing solutions that
          not only improve user experiences but also help businesses achieve
          their objectives.
        </p>
      </div>
    </section>
  );
}

export default About;
