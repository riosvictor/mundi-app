import React from 'react';
import Image from 'next/image'
import { Box, Avatar } from "@chakra-ui/react"

interface IProps { 
  urlCity: string
  urlCountry: string
  cityName: string
  countryName: string
}

const Card: React.FC<IProps> = ({ urlCity, urlCountry, cityName, countryName }) => {
  return (
    <Box 
      borderWidth="1px" 
      borderStyle="solid" 
      borderRadius="4px" 
      borderColor="#FFBA087F" 
      bg="#FFFFFF"

      margin="3%"
      flex="0 1 auto"
    >
      <Image src={urlCity} alt="City" width="256" height="173" />

      <Box 
        margin="18px 24px 25px" 
        display="flex" 
        flexDirection="row" 
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Box
            as="h3"
            fontFamily="Barlow"
            fontStyle="normal"
            fontWeight="600"
            fontSize="20px"
            lineHeight="25px"
            color="#47585B"
            margin="0px 0px 12px 0px"
          >
            {cityName}
          </Box>

          <Box 
            as="h4"
            fontFamily="Barlow"
            fontStyle="normal"
            fontWeight="500"
            fontSize="16px"
            lineHeight="26px"
            color="#999999"
            margin="0"
          >
            {countryName}
          </Box>
        </Box>
        

        <Avatar 
          borderRadius="50%" 
          height="30px" 
          width="30px" 
          name="Dan Abrahmov" 
          src={urlCountry}
        />
        
      </Box>
    </Box>
  )
}

export default Card;
