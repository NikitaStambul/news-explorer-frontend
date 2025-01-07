import Preloader from "components/Preloader/Preloader";

interface LoadingSectionProps {
  text?: string;
}

function LoadingSection({ text = "Loading..." }: LoadingSectionProps) {
  return (
    <section className="container flex flex-col gap-6 items-center py-20 bg-background">
      <Preloader />
      <p className="text-text-muted text-lg leading-6">{text}</p>
    </section>
  );
}

export default LoadingSection;
