// MainWrapper.tsx

import {
  Box,
  ChakraProvider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  extendTheme,
  Grid,
  useDisclosure,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

// Optionally extend Chakra's theme if you need to customize it
const theme = extendTheme({
  // Add any theme customizations here
})

interface MainWrapperProps {
  children: ReactNode
}

export default function MainWrapper({ children }: MainWrapperProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <ChakraProvider theme={theme}>
        {/* Header Area */}
        <Grid
          templateAreas={{
            base: `"header" "main"`, // On mobile, stack header and main vertically
            md: `"nav header" "nav main"`, // On larger screens, use sidebar and grid layout
          }}
          gridTemplateRows={{ base: 'auto 1fr', md: '60px 1fr' }}
          gridTemplateColumns={{ base: '1fr', md: '280px 1fr' }}
          minH='100vh'
          gap='1'
        >
          <Box position='sticky' top={0} zIndex={10}>
            <Header onOpen={onOpen} />
          </Box>
          <Box gridArea='nav' display={{ base: 'none', md: 'block' }} h='100vh'>
            <Sidebar />
          </Box>

          <Box gridArea='main' bg='gray.100' p={{ base: 2, md: 4 }}>
            {children}
          </Box>
          {/* Drawer for Mobile Sidebar */}
          <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody className='bg-navbar-bg'>
                  <Sidebar />
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Grid>
      </ChakraProvider>
    </>
  )
}
