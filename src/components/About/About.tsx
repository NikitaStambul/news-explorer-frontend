import authorImg from "assets/about.jpeg";

function About() {
  return (
    <section className="container flex flex-col md:flex-row gap-y-6 gap-x-8 xl:gap-x-14 py-8 md:py-16 xl:py-20">
      <img
        src={authorImg}
        alt="Author photo"
        className="w-full md:w-[45%] rounded-full aspect-square object-center object-cover"
      />
      <div className="flex flex-col gap-4">
        <h3 className="font-robotoSlab font-normal text-[40px] leading-[46px] line-clamp-1 md:mb-6">
          About the author
        </h3>
        <p>
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p>
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
