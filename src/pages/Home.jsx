import { EditOutlined, MoreOutlined } from '@ant-design/icons'
import {  useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import CustomTable from '../components/CustomTable'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../hooks/useAxios'

function Home() {

    const navigate = useNavigate()
    const queryClient = useQueryClient()

    function handleMoreBtnClick(id){
        navigate(`${id}`)
        queryClient.invalidateQueries(["singleStudents"])
    }

    function getAllProducts() {
        return useAxios().get(`/students`).then(res => (
            res.data.map((item, index) => {
                item.key = index + 1
                item.action = <div className='flex items-center gap-3'>
                    <MoreOutlined onClick={() => handleMoreBtnClick(item.id)} className='cursor-pointer rotate-[90deg]' />
                    <EditOutlined className='cursor-pointer ' />
                </div>
                return item
            })
        ))
    }

    const {data:studentsData = [] } = useQuery({
        queryKey: ['students'],
        queryFn: getAllProducts
    })
    return (
        <div className='p-5'>
            <CustomTable data={studentsData} />
        </div>
    )
}

export default Home
