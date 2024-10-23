import { Container, VStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={'30'}
          fontWeight={'bold'}
          bgGradient={'linear(to-r), cyan.400, blue.500'}
          textAlign={'center'}
        >
          Current Products
        </Text>

        <Text>
          No products found - { ' ' }
          <Link to={'/create'}>
            <Text as={'span'} color={'blue.500'} _hover={{ textDecoration: 'underline' }}>
              Create Product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default Homepage