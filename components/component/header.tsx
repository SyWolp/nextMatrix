import React from 'react';

import { Box, Flex, useBreakpoint } from '@chakra-ui/react';

function Header() {

  return (
    <Box>
      <Flex
        w={'100%'}
        h={'80px'}
        px={{ base: '16px', md: '50px', lg: '80px', xl: '100px' }}
        align={'center'}
        justify={'space-between'}
        bgColor={'red'}
        backdropFilter={'blur(50px)'}
        zIndex={'zIndices.sticky'}
        >jnjn</Flex>
    </Box>
  );
}

export default Header;
