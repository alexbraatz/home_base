import { motion } from 'framer-motion';
import {Example} from './Example'

export const Base = () => {

  return (
    <div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
      <h1 className="font-sans font-extrabold text-9xl ubpixel-antialiased text-black"><Example />hi, i'm alex, full stack developer</h1>
      </motion.div>

      <div className="example-container">
        <Example />
      </div>
    </div>
  )
  
}