import { Box, styled, Typography } from '@mui/material'
import React from 'react'
const CustomLabel = styled(Typography)`
color:white;
font-size:2rem;
width:100%;
text-align:center;
`;
function EducationBlock() {
  return (
    <Box
    id="education"
      sx={{
        height:'100%',
        pt:'40vh'
      }}
    >
      <CustomLabel>
        EducationBlock
      </CustomLabel>
    </Box>
  )
}

export default EducationBlock