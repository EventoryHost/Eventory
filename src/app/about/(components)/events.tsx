import React from 'react'
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";



type Props = {};

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    imageUrl: "/aboutus/e2.png",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    imageUrl: "/aboutus/e3.png",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    imageUrl: "/aboutus/e1.png",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    imageUrl: "/aboutus/e2.png",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    imageUrl: "/aboutus/e3.png",
  },
];


const Events = (props: Props) => {
  return (
    <>
      <div className="mt-[450px] max-sm:mt-[100px]  justify-between items-center items-center lg:py-5 md:py-5 sm:py-5 lg:mx-16 sm:mx-10 sm:gap-0 lg:gap-40 md:gap-20 2">

        <div className="justify-center">
          <h2 className="font-semibold text-4xl text-[rgba(0,0,0,1)] lg:mb-14 sm:mb-10">Our Successful Events</h2>
        </div>

        <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />


      </div>
    </>

  )
}

export default Events