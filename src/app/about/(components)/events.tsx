import React from "react";
import "../../globals.css";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Cards2 } from "@/components/ui/cards2_v2";

type Props = {};

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    imageUrl:
      "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/events_01.png",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    imageUrl:
      "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/events_02.png",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    imageUrl:
      "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/events_03.png",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    imageUrl:
      "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/events_01.png",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    imageUrl:
      "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/events_02.png",
  },
];

const Events = (props: Props) => {
  return (
    <>
      <div className="2 mt-9 items-center justify-between sm:mx-10 sm:gap-0 sm:py-5 md:gap-20 md:py-5 lg:mx-16 lg:gap-40 lg:py-5 ">
        <div className="justify-center mt-9">
          <h2 className="mx-5 text-center text-2xl font-semibold text-[rgba(0,0,0,1)] md:mb-14 md:text-left md:text-4xl">
            Our Successful Events
          </h2>
        </div>
        <Cards2/>
      </div>
    </>
  );
};

export default Events;
