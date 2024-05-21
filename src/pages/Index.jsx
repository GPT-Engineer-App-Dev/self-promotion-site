import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to My Personal Website</Heading>
          <Text fontSize="lg">I'm a web developer passionate about creating beautiful and functional websites.</Text>
        </Box>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
          mb={4}
        />
        <Flex justifyContent="center" width="100%" mb={4}>
          <Button as="a" href="https://github.com" leftIcon={<FaGithub />} colorScheme="teal" variant="outline" mx={2}>
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com" leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline" mx={2}>
            LinkedIn
          </Button>
          <Button as="a" href="mailto:someone@example.com" leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline" mx={2}>
            Email
          </Button>
        </Flex>
        <Button colorScheme="teal" size="lg">Get in Touch</Button>
      </VStack>
    </Container>
  );
};

export default Index;