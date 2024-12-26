import Preloader from "#/components/Preloader/Preloader";

function LoadingSection() {
  return (
    <section className="container flex flex-col gap-6 items-center py-20 bg-background">

          <Preloader />
          <p className="text-text-muted text-lg leading-6">
            Searching for news...
          </p>
    </section>
  );
}

export default LoadingSection;
