import { Avatar, Box } from '@chakra-ui/react'
import React from 'react'

export default function UserIcon({src, size, name}:any) {
  return (
    <Box>
        <Avatar name={name} size={size} src={src} />
    </Box>
  )
}
