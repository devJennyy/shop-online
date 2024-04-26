import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const MovingCards = () => {
  return (
    <div className="h-fit w-[1170px] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden mt-10 text-black">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"
      />
    </div>
  );
};

export default MovingCards;

const testimonials = [
  {
    title: "Assistance",
    quote:
      "Lorem ipsum dolor sit amet consectetur in ipsum no secteture augue ipsum tellusultrices.",
  },
  {
    title: "User Guides",
    quote:
      "Lorem ipsum dolor sit amet consectetur in ipsum no secteture augue ipsum tellusultrices.",
  },
  {
    title: "Submit Request",
    quote:
      "Lorem ipsum dolor sit amet consectetur in ipsum no secteture augue ipsum tellusultrices.",
  },
];
