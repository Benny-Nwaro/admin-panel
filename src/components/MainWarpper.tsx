import {
  Box,
  ChakraProvider,
  Drawer,
  // DrawerBody,
  // DrawerCloseButton,
  DrawerContent,
  // DrawerOverlay,
  extendTheme,
  Grid,
  useDisclosure,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

// Extend Chakra's theme for customization (optional)
const theme = extendTheme({})

interface MainWrapperProps {
  children: ReactNode
}

export default function MainWrapper({ children }: MainWrapperProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider theme={theme}>
      {/* Layout Grid */}
      <Grid
        templateAreas={{
          base: `"header" "main"`, // Mobile: stack header and main
          md: `"nav header" "nav main"`, // Desktop: sidebar + content layout
        }}
        gridTemplateRows={{ base: 'auto 1fr', md: '60px 1fr' }}
        gridTemplateColumns={{ base: '1fr', md: 'auto 1fr' }}
        minH="100vh"
        gap="1"
      >
        {/* Sticky Header */}
        <Box position="sticky" top={0} zIndex={10} w="full">
          <Header onOpen={onOpen} />
        </Box>

        {/* Sidebar for Larger Screens */}
        <Box
          gridArea="nav"
          display={{ base: 'none', md: 'block' }} // Hide on mobile, show on desktop
          h="full"
          // bg="black"
          width={{ md: '1rem' }} // Sidebar width
          transition="width 0.3s ease"
          _hover={{
            width: '16rem', // Expand on hover
            transition: 'width 0.3s ease',
          }}
        >
          <Sidebar />
        </Box>

        {/* Main Content */}
        <Box gridArea="main"  p={{ base: 2, md: 4 }} w="full">
          {children}
        </Box>

        {/* Mobile Sidebar Drawer */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          {/* <DrawerOverlay /> */}
          <DrawerContent> 
            {/* <DrawerCloseButton /> */}
            {/* <DrawerBody  h="full">  */}
              <Sidebar />
            {/* </DrawerBody> */}
          </DrawerContent>
        </Drawer>
      </Grid>
    </ChakraProvider>
  )
}
