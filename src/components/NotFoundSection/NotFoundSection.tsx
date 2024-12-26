import Icons from "../Icons";

function NotFoundSection() {
  return (
    <section className="container flex flex-col gap-6 items-center py-20 bg-background">
      <Icons.notFound className="w-20 h-20" />
      <h3 className="font-robotoSlab text-2xl">Nothing found</h3>
      <p className="text-text-muted text-lg leading-6">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NotFoundSection;
