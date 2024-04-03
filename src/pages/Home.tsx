import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

export const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <div className="flex flex-col space-y-10 items-center">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          className="text-4xl font-bold"
        >
          Some Framer motion animations examples
        </motion.h1>
        <ul className="space-y-4 text-2xl">
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ bounceDamping: 10, bounceStiffness: 100 }}
            className="hover:text-emerald-400"
          >
            <Link to={'/basic-animations'}>Basic Animations</Link>
          </motion.li>
          <motion.li
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ bounceDamping: 10, bounceStiffness: 100 }}
            className="hover:text-emerald-400"
          >
            <Link to={'/page2'}>Page 2</Link>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};
