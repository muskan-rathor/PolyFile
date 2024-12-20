import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "../img/Video1.gif";
import Video from "../img/Invoices icons.gif";
export const TextParallaxContentExample = () => {
  return (
    <div>
      <TextParallaxContent
        imgUrl={Video} // Use a direct image URL here
        subheading="Collaborate"
        heading="Built for all of us."
      />
      <ExampleContent />
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading }) => {
  return (
    <div
      className="w-[60%]  mx-auto"
      style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}
    >
      <div className="relative h-[80vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(70vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div className="absolute inset-0 bg-100/70" style={{ opacity }} />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    ></motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-0 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      About our Website
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Poly File is designed to be a powerful, all-in-one platform for file
        manipulation tasks, utilizing a wide array of open-source software. The
        platform will be built with scalability and flexibility in mind,
        allowing it to handle a diverse range of file formats and operations.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        The microservice-based backend will ensure that each file operation is
        handled by a dedicated service, promoting ease of maintenance and
        scalability.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Try Now <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
