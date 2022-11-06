import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [details, setDetails] = useState([])
  const url = `https://6362424b7521369cd068e001.mockapi.io/store/${id}`
  const Higth = window.innerHeight
  useEffect(() => {
    axios.get(url).then((res) => {
      setDetails([res.data])
    })
  }, [id])

  console.log(details)
  const Info = details.map((e) => {
    return (
      <Box bg={""} >
        <Image h={['20vh', "39vh", "30vh"]}
          w={['20vh', "39vh", "30vh"]}
          src={e.image}
          borderRadius={10} />
        <Text fontSize={"6xl"}>{e.title}</Text>
        <Text fontSize={"4xl"}>{e.desc}</Text>
        <Button w={"100%"}
          bg={"blue.500"}
          color={"azure"}
          _hover={{ bg: "blue.800" }} onClick={() => navigate(`/`)}>Back Home</Button>
      </Box>
    )
  })


  return (

    <Flex p={10} bg={""} h={Higth} justify={"center"} >
      {Info}
    </Flex>
  )
}

export default Details