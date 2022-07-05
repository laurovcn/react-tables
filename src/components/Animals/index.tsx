
import { useEffect, useState, useMemo } from 'react'
import { api } from '../../lib/api'
import { Table } from '../Table'
import { useTable } from 'react-table';

export function Animals () { 
  const [data, setData] = useState([])

  useEffect(() => {           
    api.get('/facts/random?animal_type=cat&amount=30')     
    .then(response => {         
      setData(response.data)
    })   

}, [])

const columns = useMemo(() => [
  {
    Header: 'Tipo',
    accessor: 'type'
  },  
  {
    Header: 'Texto',
    accessor: 'text'
  },  

], []) as any;

  const {            
  } = useTable({
  columns,
  data
  }); 

  return (
    <Table columns={columns} data={data} />
  )
}