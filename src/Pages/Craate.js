import React, { useState } from 'react'
import axios from "axios"
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

function Craate() {
    const navigate = useNavigate()
    const url = "https://6362424b7521369cd068e001.mockapi.io/store"
    const [photos, setPhotos] = useState({
        image: ``,
        title: ``,
        desc: ``
    })

    const postData = () => {
        axios.post(url, photos)
    }
    return (
        <Flex direction={"column"} w={"100%"}
            bg={"gray.300"}
            h={500}
            justify={"space-evenly"}
            alignItems={"center"}>

            <Text fontSize={"4xl"} fontFamily={"vendara"}>add to Api</Text>
            <Input placeholder='enter title' bg={""} w={["80%","60%" ,"50%"]} onChange={(e) => {
                setPhotos(prev => (
                    {
                        ...prev,
                        title: e.target.value
                    }
                ))
            }} />
            <Input placeholder='enter desc' bg={""} w={["80%","60%" ,"50%"]} onChange={(e) => {
                setPhotos(prev => (
                    {
                        ...prev,
                        desc: e.target.value
                    }
                ))
            }} />
            <Input placeholder='enter image url' bg={""} w={["80%","60%" ,"50%"]} onChange={(e) => {
                setPhotos(prev => (
                    {
                        ...prev,
                        image: e.target.value
                    }
                ))
            }} />
            <Button bg={"blue.500"} color={"whiteAlpha.800"} w={["80%","60%" ,"50%"]} onClick={postData}>Post</Button>
            <Button bg={"blue.500"} color={"whiteAlpha.800"} w={["80%","60%" ,"50%"]} onClick={() => {
                navigate(`/`)
            }}>Back Home</Button>
        </Flex>
    )
}

export default Craate