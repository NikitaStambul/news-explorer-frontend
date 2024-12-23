function SavedNewsHeader() {
  return (
    <div className="container flex flex-col gap-4 xl:gap-8 py-2 md:py-6 xl:py-10">
      <p className="text-sm leading-6 opacity-50">Saved articles</p>
      <h2 className="font-robotoSlab text-3xl max-w-[336px]">
        Elise, you have 5 saved articles
      </h2>
      <p className="text-lg leading-6">
        By keywords:{" "}
        <span className="font-bold">Nature, Yellowstone, and 2 other</span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
