

import React, { useState } from 'react'
import { Table,TableHead,TableCell, TableBody, TableRow ,styled,Button} from "@mui/material"


const Tabledata = ({data}) => {

    const StyledTable = styled(Table)`
    width:90%;
    margin: 50px auto  0 auto;
    
`
const THead = styled(TableRow)`
    background:#000000;
    & > th {
        color : #ffff;
       font-size:20px;
    }
`
 const TBody = styled(TableRow)`
  &> td {
    font-size:20px;
  }
  `
  return (
<>
<StyledTable>
    <TableHead>
   <THead>
       <TableCell>name</TableCell>
       <TableCell>Age</TableCell>
      
    
       <TableCell>Gender</TableCell>
      
       <TableCell>City</TableCell>
          
       <TableCell>State</TableCell>
       <TableCell>Country</TableCell>
   </THead>
   </TableHead>
   <TableBody>
       { data && 
           data.map((elem,index) =>(
               <TBody  key={elem.id}>
                     
        <TableCell>
              {elem.name}
        </TableCell>
      
      
       <TableCell>{elem.age}</TableCell>
       <TableCell>{elem.gender}</TableCell>
       <TableCell>{elem.city}</TableCell>
       <TableCell>{elem.state}</TableCell>
       <TableCell>{elem.country}</TableCell>
       
               </TBody>
           ))
       }
   </TableBody>
</StyledTable>
</>
  )
}

export default Tabledata