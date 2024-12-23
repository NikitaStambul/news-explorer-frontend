import img from "assets/image.jpeg";
import BookmarkBtn from "../BookmarkBtn/BookmarkBtn";

function NewsCard() {
  return (
    <li className="relative flex flex-col rounded-xl overflow-hidden bg-background-light">
      <img src={img} alt="" className="" />
      <div className="flex flex-col p-4 xl:p-6">
        <p className="text-lg font-inter text-text-muted leading-6 line-clamp-1 mb-3">
          November 4, 2020
        </p>
        <h3 className="font-robotoSlab text-2xl line-clamp-2 h-16 mb-4">
          Everyone Needs a Special 'Sit Spot' in Nature
        </h3>
        <p className="leading-[22px] line-clamp-5 h-[110px] mb-5">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <p className="text-text-muted uppercase line-clamp-1">
          National parks traveler
        </p>
      </div>
      <BookmarkBtn className="absolute top-4 right-4" />
    </li>
  );
}

export default NewsCard;
