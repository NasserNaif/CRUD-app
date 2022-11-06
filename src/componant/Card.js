import {  Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"

function Card(props) {
  return (
    <Flex justify={"space-around"}
      direction={"column"}
      textAlign={"start"}
      p={5}
      w={"102%"}
      bg={"white"}
      borderRadius={16} border={"solid 1px"} boxShadow={"-5px 2px black"}>
      <Image
        _hover={{ boxShadow: "0 0 10px" }}
        cursor={"pointer"}
        onClick={props.DitailsFunc}
        h={"37vh"}
        w={"100%"}
        borderRadius={10}
        src={props.img}
        alt='' />
      <Text fontSize={"2xl"} >title :</Text>
      <Text fontSize={"3xl"}>{props.title}</Text>
      <Text>description : </Text>
      <Text fontSize={"2xl"}>{props.desc}</Text>
      <Flex marginTop={10} w={"100%"} justify={"space-around"}>
        <Button onClick={props.updateFunc} _hover={{ bg: "blue.700" }} bg={"blue.400"} color={"white"}>Update <AiOutlineEdit /></Button>
        <Button onClick={props.deleteFunc} _hover={{ bg: "red.700" }} bg={"red.400"} color={"white"}>Delete <AiOutlineDelete /></Button>
      </Flex>
    </Flex>
  )
}

export default Card