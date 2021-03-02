import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchDashboardData } from './dashboardSlice'

const Dashboard = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchDashboardData())
  }, [])

  return <div></div>
}

export default Dashboard
