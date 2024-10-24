import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'

const Homepage = () => {

  const { fetchProducts, products } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text fontSize={'30'} fontWeight={'bold'} bgGradient={'linear(to-r), cyan.400, blue.500'} textAlign={'center'} > 
          Current Products 
        </Text>
        { products.length > 0 ?  
          <SimpleGrid 
            columns={{ base:1, md:2, lg:3 }} 
            spacing={10} 
            w={'full'}>
              { products.map(product => ( <ProductCard key={product._id} product={product} /> )) }
          </SimpleGrid>
          :
          <Text>
            No products found - { ' ' }
            <Link to={'/create'}>
              <Text as={'span'} color={'blue.500'} _hover={{ textDecoration: 'underline' }}>
                Create Product
              </Text>
            </Link>
          </Text>
        }
      </VStack>
    </Container>
  )
}

export default Homepage