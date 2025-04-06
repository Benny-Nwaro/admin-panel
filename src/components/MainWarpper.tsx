import {
  Box,
  ChakraProvider,
  Drawer,
  DrawerContent,
  Grid,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainWrapperProps {
  children: ReactNode;
}

const MainWrapper = ({ children }: MainWrapperProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Grid
        templateAreas={{
          base: `"header" "main"`,
          md: `"nav header" "nav main"`,
        }}
        templateRows={{ base: 'auto 1fr', md: '60px 1fr' }}
        templateColumns={{ base: '1fr', md: 'auto 1fr' }}
        minH="100vh"
        gap={1}
      >
        <Box position="sticky" top={0} zIndex={10} w="full">
          <Header onOpen={onOpen} />
        </Box>

        <Box
          gridArea="nav"
          display={{ base: 'none', md: 'block' }}
          h="full"
          width={{ md: '1rem' }}
          transition="width 0.3s ease"
          _hover={{
            width: '16rem',
            transition: 'width 0.3s ease',
          }}
        >
          <Sidebar />
        </Box>

        <Box gridArea="main" p={{ base: 2, md: 4 }} w="full">
          {children}
        </Box>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerContent>
            <Sidebar />
          </DrawerContent>
        </Drawer>
      </Grid>
    </ChakraProvider>
  );
};

export default MainWrapper;