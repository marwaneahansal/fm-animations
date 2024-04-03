import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const FadeUp = () => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        className="w-20 h-20 bg-stone-100 rounded-lg"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        className="w-20 h-20 bg-stone-100 rounded-full"
      ></motion.div>
    </motion.div>
  );
};

const ShapeShifting = () => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
    >
      <motion.div
        animate={{
          scale: [1, 2, 2, 1],
          rotate: [0, 90, 90, 0],
          borderRadius: ['10%', '50%', '50%', '10%'],
        }}
        transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
        className="w-1/3 h-1/3 shadow-md bg-rose-400"
      ></motion.div>
    </motion.div>
  );
};

const ButtonAnimation = () => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
    >
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: '#34D399', color: '#111827' }}
        whileTap={{ scale: 0.9, backgroundColor: '#34D399', color: '#111827' }}
        transition={{ bounceDamping: 10, bounceStiffness: 100 }}
        className="px-6 py-3 text-gray-100 text-2xl bg-emerald-600 rounded-lg tracking-wide"
      >
        Hover Me!
      </motion.button>
    </motion.div>
  );
};

const DragAndDrop = () => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
    >
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        dragElastic={0.5}
        className="w-20 h-20 bg-rose-400 rounded-lg cursor-grab"
      ></motion.div>
    </motion.div>
  );
};

const ScrollProgression = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      variants={itemVariants}
      className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
    >
      <div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
        <motion.div className="w-full bg-gray-400 rounded-xl h-full origin-bottom" style={{ scaleY: scrollYProgress }}>
          {' '}
        </motion.div>
      </div>
    </motion.div>
  );
};

const SVGAnimation = () => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
    >
      <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-20 h-20 bg-rose-400 rounded-lg">
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 1, repeat: Infinity, repeatDelay: 1 }}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M5 12l5 5L19 7"
        />
      </motion.svg>
    </motion.div>
  );
};

const SectionAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const paragraphOneValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const paragraphTwoValue = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <section className="flex flex-col gap-10 mb-10" ref={containerRef}>
        <motion.h1
          animate={mainControls}
          initial="hidden"
          variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 }}}
          transition={{ delay: .3 }}
          className="text-3xl font-bold mx-auto tracking-wide text-slate-100"
        >
          Lorem, ipsum.
        </motion.h1>
        <motion.p style={{ translateX: paragraphOneValue }} className="text-lg text-justify text-slate-100  font-light w-1/2 mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium eos quod nobis debitis
          temporibus. Sit pariatur eos unde? Molestias? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consectetur nostrum cum harum asperiores natus explicabo,
        </motion.p>
        <motion.p style={{ translateX: paragraphTwoValue }}  className="text-lg text-justify text-slate-100  font-light w-1/2 mx-auto">
          quibusdam repudiandae officiis. Sint ut unde inventore distinctio architecto earum voluptatibus cum sapiente
          nisi aliquam harum, vero perferendis tenetur, temporibus, id accusantium aperiam mollitia maxime iusto ipsa
          possimus modi? Quis cumque in autem commodi. Modi obcaecati impedit eos mollitia assumenda nisi omnis quisquam
          quaerat molestiae perspiciatis, soluta aperiam dolore voluptas, sit explicabo iure velit natus vero! Eaque
          dignissimos totam ratione fugiat. Amet corporis voluptatum minus iure at, officia sunt repudiandae!
        </motion.p>
        <motion.p style={{ translateX: paragraphOneValue }} className="text-lg text-justify text-slate-100  font-light w-1/2 mx-auto">
          Quos fugiat cumque incidunt facere veniam nostrum quae eveniet assumenda repudiandae, obcaecati asperiores
          alias reiciendis animi. Amet perspiciatis commodi reprehenderit provident sapiente aspernatur tenetur repellat
          sed adipisci, officia fugit ratione dolores dolorem hic. Voluptate cumque dicta dolorum earum placeat corrupti
          est.
        </motion.p>
      </section>
  )
}

export const BasicAnimations = () => {
  

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <h1 className="text-4xl font-bold text-center tracking-wide">Basic Animations</h1>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 p-10 gap-10"
      >
        <FadeUp />
        <ShapeShifting />
        <ButtonAnimation />
        <DragAndDrop />
        <ScrollProgression />
        <SVGAnimation />
      </motion.section>
      <SectionAnimation />
    </div>
  );
};
