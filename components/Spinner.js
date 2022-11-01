import { Container, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import {useEffect, useState} from "react"

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  
  
  const color = ['#7928CA', '#c1f30d','#ef1136',"#44e812",'#0a68f5']
  const Spinner = ({props}) => {
const [state,setState] = useState(0)
     setTimeout(() => {
    
        setState(Math.floor(Math.random() * 5))
          },[2000])
       return (
        <Container h="50vh" display="flex" alignItems="center" justifyContent="center">
        <ChakraBox
         animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 360, 360, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: 10,
            repeatType: "loop",
          }}
          padding="2"
        backgroundColor={color[state]}
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100px"
          height="100px"
        >
         {props}
        </ChakraBox>
      </Container>
    )
  }
  
  export default Spinner