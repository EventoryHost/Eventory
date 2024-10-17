"use client";

import React from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export function Horizontal() {
  return (
    <div className="dark:bg-grid-white/[0.05] relative mb-4 flex flex-col items-center justify-center overflow-hidden rounded-md antialiased dark:bg-black">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const images = [
  "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/parallax/Parallax_image_01.png",
  "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/parallax/Parallax_image_02.png",
  "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/parallax/Parallax_image_03.png",
];

const images2 = [
  "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/parallax/Parallax_image_04.png",
  "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/parallax/Parallax_image_05.png",
  //"https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/parallax/Parallax_image_06.png",
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    imageUrl: "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/moving_card_images/Parallax_image_01.png",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    imageUrl: "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/moving_card_images/Parallax_image_02.png",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    imageUrl: "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/moving_card_images/Parallax_image_03.png",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    imageUrl: "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/moving_card_images/Parallax_image_04.png",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    imageUrl: "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/moving_card_images/Parallax_image_05.png",
  },
];
