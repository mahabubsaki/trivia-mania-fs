import { DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Input } from '@chakra-ui/react';
import React from 'react';

const Drawer = ({onClose,btnRef,isOpen}) => {
    return (
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    );
};

export default Drawer;