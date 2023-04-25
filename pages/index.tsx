import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import GradientLayout from "../components/gradientLayout";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  const { user } = useMe();

  return (
    <GradientLayout
      roundImage
      color="pink"
      subtitle="profile"
      title={`${user?.firstName} ${user?.lastName}`}
      description="22 public playlists"
      image="https://i.scdn.co/image/ab6775700000ee85bf7c8e762a94ef76e1c8650d"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="https://i1.sndcdn.com/avatars-hXCegvaYMoJX7AUW-1EjExg-t500x500.jpg"
                  borderRadius="100%"
                />
                <Box marginTop="10px">
                  <Text fontSize="2xl" fontWeight="bold">
                    {artist.name}
                  </Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};
// when you export this from a page, nextjs will pre-render this page on each request using the data returned by getServerSideProps
export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: { artists },
  };
};

export default Home;
