// InviteAFriend.tsx
'use client'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useClipboard,
} from '@chakra-ui/react'
import { useState } from 'react'
import { CopyIcon } from '@chakra-ui/icons'
import { FiSend } from 'react-icons/fi'

const InviteAFriend = () => {
  const [email, setEmail] = useState('')
  const [invitationCode] = useState('79084740284765782')
  const { hasCopied, onCopy } = useClipboard(invitationCode)

  const handleSendInvite = () => {
    // Add functionality to send invitation
    console.log('Send invitation to:', email)
  }

  return (
    <Box className='p-4 lg:p-8 bg-white rounded-2xl shadow-md'>
      <Heading fontSize='xl' borderBottom='2px solid #F1F1F9' py={4}>
        Invite a Friend
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
          Invite friends who have not used the app to join, and earn rewards.
          Send them your Invitation Code or enter their email address to send
          them an invitation.
        </Text>
        <Box display={{ base: 'grid', md: 'flex' }} justifyContent='center'>
          <FormLabel fontSize='lg'>Invitation Code</FormLabel>
          <Box display='flex' gap={0} alignItems='center'>
            <Input
              value={invitationCode}
              isReadOnly
              border='1px solid #171717'
              color='#414158'
              borderRight={0}
              maxW={200}
            />
            <Button
              onClick={onCopy}
              bg='#171717'
              color='#FFFFFF'
              fontSize={14}
              fontWeight={500}
              px={8}
              borderLeft={0}
            >
              {hasCopied ? 'Copied' : 'Copy code'}
              <CopyIcon ml={1} />
            </Button>
          </Box>
        </Box>

        {/* Email Invite */}
        <Box display={{ base: 'grid', md: 'flex' }} mt={6}>
          <FormControl>
            <Input
              placeholder='Enter email address'
              value={email}
              bg='#DBDCF0'
              onChange={(e) => setEmail(e.target.value)}
              className='border-gray-300 rounded-lg'
              color='#414158'
              _placeholder={{ color: '#414158' }}
            />
          </FormControl>
          <Button
            mt={{ base: 4, md: 0 }}
            bg='#3198F5'
            color='white'
            borderRadius='full'
            onClick={handleSendInvite}
            rightIcon={<FiSend />}
            px={8}
          >
            Send Invitation
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default InviteAFriend
