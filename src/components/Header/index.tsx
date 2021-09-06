import { Flex, Icon, useBreakpointValue, IconButton } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';


export function Header() {
  const { onOpen } = useSidebarDrawer()

  // responsive
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return(
    <Flex 
      as="header"
      width="100%"
      maxWidth={1480} 
      height="20" 
      marginX="auto" 
      marginTop="4"
      paddingX="6" 
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          marginRight="2"
       />
      )}
       
      <Logo />
      { isWideVersion && <SearchBox /> }

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
      
    </Flex>
  );
} 