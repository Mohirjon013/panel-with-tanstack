import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'

function Single() {
  const {id} = useParams()

  const {data:singleData = {}} = useQuery({
    queryKey:['singleStudents'],
    queryFn:() => useAxios().get(`/students/${id}`).then(res => res.data)
  })
  return (
    <div>
      <p>Name: {singleData.name}</p>
      <p>Surname: {singleData.surname}</p>
    </div>
  )
}

export default Single
