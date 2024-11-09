// PromoCodes.tsx
'use client'

import {
  Box,
  Button,
  FormLabel,
  Heading,
  Text,
  useClipboard,
} from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const PromoCodes = () => {
  const [promoCode] = useState('adrub0284765782')
  const { hasCopied, onCopy } = useClipboard(promoCode)

  return (
    <>
      <Box className='p-4 lg:p-8 bg-white rounded-2xl shadow-md'>
        <Heading fontSize='xl' borderBottom='2px solid #F1F1F9' py={4}>
          Promo Codes (1)
        </Heading>

        {/* Invitation Code */}
        <Box className='' maxWidth='600px' my='auto' mx='auto' py={12}>
          <Text
            mb={6}
            color='#414158'
            fontWeight={500}
            fontSize={16}
            textAlign='center'
          >
            You can benefit from these promo codes to get special discount on
            your next private and group lessons purchase.
          </Text>
          <Box display={{ base: 'grid', md: 'flex' }} justifyContent='center'>
            <FormLabel fontSize='lg'>Discount Code</FormLabel>
            <Box display='flex' gap={0} alignItems='center'>
              <Button
                onClick={onCopy}
                bg='#171717'
                color='#FFFFFF'
                fontSize={14}
                fontWeight={500}
                px={8}
              >
                {hasCopied ? 'Copied' : promoCode}
                <CopyIcon ml={1} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default PromoCodes
