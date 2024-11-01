import { useMutation,  useQueryClient } from '@tanstack/react-query'
import { Button, Input } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'

function Add() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  // const HTTP = import.meta.env.VITE_API
  const[name, setName] = useState("")
  const[surname, setSurnamee] = useState("")
  const[age, setAge] = useState("")


  function createStudents(body){
    return useAxios().post(`/students`, body)
  }

  const mutation = useMutation({
    mutationFn:createStudents,
    onSuccess:() => {
      queryClient.invalidateQueries('students')
      navigate(-1)
    }
  })

  function handleSubmit(e){
    e.preventDefault()
    const data ={name, surname, age }
    mutation.mutate(data)
  }


  return (
    <form onSubmit={handleSubmit} className='w-[600px] mx-auto mt-5 space-y-3'>
      <Input value={name} onChange={(e) => setName(e.target.value)} size='large' placeholder='Enter name' allowClear required />
      <Input value={surname} onChange={(e) => setSurnamee(e.target.value)} size='large' placeholder='Enter surname' allowClear required />
      <Input value={age} onChange={(e) => setAge(e.target.value)} size='large' placeholder='Enter age' allowClear required />
      <Button className='w-full'  size='large' type='primary' htmlType='submit' >Submit</Button>
    </form>
  )
}

export default Add
