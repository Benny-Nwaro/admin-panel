// InviteAndPromoTabs.tsx

'use client'
import InviteAFriend from '@/components/InviteAFriend'
import MainWrapper from '@/components/MainWarpper'
import PromoCodes from '@/components/PromoCodes'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'

export default function InviteAndPromoTabs() {
  return (
    <>
      <MainWrapper>
        <Box className='p-4 lg:p8 py4'>
          <Tabs variant='unstyled'>
            <TabList bg='white'>
              <Tab
                color='#9193A5'
                _selected={{
                  color: '#171717',
                  borderBottom: '1px solid #171717',
                }}
                py={4}
              >
                Invite a Friend
              </Tab>
              <Tab
                color='#9193A5'
                _selected={{
                  color: '#171717',
                  borderBottom: '1px solid #171717',
                }}
                py={4}
              >
                Promo Codes
              </Tab>
            </TabList>

            <TabPanels mt={4}>
              <TabPanel>
                <InviteAFriend />
              </TabPanel>
              <TabPanel>
                <PromoCodes />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </MainWrapper>
    </>
  )
}
