import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const MovingCards = () => {
  return (
    <button className="h-fit w-[1170px] rounded-md flex flex-col antialiased bg-white items-start justify-start text-left relative overflow-hidden mt-10 text-black">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </button>
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
