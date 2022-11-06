import { Box, Text, Image, SimpleGrid, Button, Flex } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Craate from './Craate'
import { useNavigate } from "react-router-dom"
import Card from '../componant/Card'



function Home() {
    const navigate = useNavigate()
    const [photos, setPhotos] = useState([])
    const urlGet = "https://6362424b7521369cd068e001.mockapi.io/store"
    useEffect(() => {
        axios.get(urlGet).then((res) => {
            setPhotos(res.data)
        })
    }, [])

    const DeleteFunc = (id) => {
        axios.delete(`https://6362424b7521369cd068e001.mockapi.io/store/${id}`).then((res) => {
            setPhotos(photos.filter((del) => {
                return del.id != id
            }))
        })
    }

    return (
        <>

            <SimpleGrid p={5}
                bg={"gray.300"}
                columns={[1, 2, 3]}
                gap={5} 
                h={"100%"}
                >
                <Flex justify={"center"} p={1} gridColumn={["1 / 2", "1 / 3", "1 / 4"]} >
                    <Button _hover={{ bg: "green.700" }} bg={"green.400"} color={"white"} onClick={() => navigate("/Craete")} >Add new photo</Button>
                </Flex>
                {photos.map((e) => (
                    <Box key={e.id} w={"100%"}>

                        <Card img={e.image}
                            title={e.title}
                            desc={e.desc}
                            deleteFunc={() => DeleteFunc(e.id)}
                            updateFunc={() => navigate("/Update/" + e.id)}
                            DitailsFunc={() => navigate("/Details/" + e.id)} 
                            />

                    </Box>
                ))}

            </SimpleGrid>
        </>
    )
}

export default Home


{/* <Image w={"100%"} h={"30vh"} src={e.image} />
                        <Text>{e.title}</Text>
                        <Text>{e.desc}</Text>
                        <Button onClick={() => DeleteFunc(e.id)}>Delete</Button>
                        <Button onClick={() => {
                            navigate('/Update/' + e.id)
                        }}>Update</Button> */}