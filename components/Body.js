import { motion } from 'framer-motion';

export const Body = () => {

  return (
    <>
      <motion.div 
        animate={{ scale: 2}}
        transtion={{ duration: 0.5}}
      />

      <p>Animate!</p>

    </>
  )
}