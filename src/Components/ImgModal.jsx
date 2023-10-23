import React, { useContext, useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Box,
  Text,
  Flex,
  IconButton,
  Stack,
  Button,
  Avatar,
  AspectRatio,
} from "@chakra-ui/react";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { QueryContext } from "../Context/context";
import ProgressiveImage from "react-progressive-graceful-image";

const ImgModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setOpen, imgId } = props;
  const context = useContext(QueryContext);
  const { imageSearch, imgData } = context;

  useEffect(() => {
    if (imgId) {
      console.log(isOpen);
      imageSearch(imgId);
      setIsOpen(true);
    }
  }, [imgId]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {imgData && (
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          isCentered
          size={"5xl"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody
              display={{ base: "block", md: "flex" }}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {/* Image */}
              <Box width="5xl" height="2xl" mt={"-2"}>
                <ProgressiveImage
                  src={imgData.urls.raw}
                  placeholder={imgData.urls.small}
                  rootMargin="0% 0% 0%"
                  threshold={[1]}
                  key={imgData.id}
                  alt={imgData.alt_description}
                >
                  {(src, loading) => (
                    <Image
                      style={{ filter: loading ? "blur(10px)" : "none" }}
                      src={imgData.urls.raw}
                      alt="an image"
                      width="100%"
                      height="100%"
                      objectFit="cover"
                    />
                    )}

                </ProgressiveImage>
              </Box>
              <Flex justifyContent={"space-between"} w={"5xl"} mt={"-20"}>
                <Box ml={4}>
                  <Button
                    p={2}
                    bg="transparent"
                    borderRadius={5}
                    _hover={{ backgroundColor: "transparent" }}
                    color={"whiteAlpha.800"}
                    leftIcon={<ExternalLinkIcon color={"white"} />}
                  >
                    Share
                  </Button>
                  <Button
                    p={2}
                    bgColor={"transparent"}
                    _hover={{ backgroundColor: "transparent" }}
                    borderRadius={5}
                    color={"whiteAlpha.800"}
                    leftIcon={<InfoOutlineIcon />}
                  >
                    Info
                  </Button>
                </Box>
                <Button colorScheme="teal" variant={'outline'} mr={4}>
                  Download Image
                </Button>
              </Flex>
            </ModalBody>
            <ModalFooter mt={10} color={"gray.600"} fontWeight={"bold"}>
              <Flex
                direction={"row"}
                w={"5xl"}
                justifyContent={"space-between"}
              >
                <Stack direction={"row"} spacing={3}>
                  <Avatar src={imgData.user.profile_image.small}></Avatar>
                  <Stack spacing={0}>
                    <Text>{imgData.user.name}</Text>
                    <Text>@{imgData.user.username}</Text>
                  </Stack>
                  </Stack>
                  <Stack  spacing={0}>
                      <Text
                      align={'center'} 
                      bgGradient="linear(to-r, #1DA1F2, #1DA1F2 30%, #FFFFFF 30%, #FFFFFF)"
                      bgClip="text"
                      fontWeight="bold"
                      display={
                        imgData.user.social.twitter_username ? true : "none"}
                    >              
                    {imgData.user.social.twitter_username}</Text>
                    <Text
                    align={'center'}
                      bgGradient="linear(to-r, #FCAF45, #FF5A5F, #C13584, #352D39)"
                      bgClip="text"
                      fontWeight="bold"
                      display={
                        imgData.user.social.instagram_username ? true : "none"}
                        >
                      {imgData.user.social.instagram_username}
                    </Text>
                      </Stack>
                <Stack direction={"row"}>
                  <Text>{imgData.downloads} downloads</Text>
                  <Box>
                    <Button
                      bg={"transparent"}
                      _hover={{ backgroundColor: "transparent" }}
                      borderRadius={5}
                      mt={-2}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-100 h-100"
                        width={20}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                        />
                      </svg>
                      {imgData.likes}
                    </Button>
                  </Box>
                </Stack>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default ImgModal;
