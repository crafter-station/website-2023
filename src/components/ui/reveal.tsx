import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface Props {
  children: React.ReactNode
  animationOrder?: number
}

const Reveal = ({ children, animationOrder = 1 }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      className="flex w-full"
      animate={mainControls}
      variants={{
        visible: { opacity: 1, translateX: 0, translateY: 0 },
        hidden: { opacity: 0, translateX: -50, translateY: -50 },
      }}
      transition={{ duration: 0.7, delay: 0.1 * (animationOrder + 1) }}
    >
      {children}
    </motion.section>
  )
}
export default Reveal
