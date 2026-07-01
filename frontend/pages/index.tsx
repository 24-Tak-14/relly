import React, { useEffect, useState } from 'react'

export default function Home(){
  const [schedule, setSchedule] = useState<any[]>([])
  useEffect(()=>{
    fetch('/api/schedule').then(r=>r.json()).then(d=>setSchedule(d.schedule || []))
  },[])
  return (
    <div style={{padding:20}}>
      <h1>HFL Schedule (Preview)</h1>
      <div style={{maxHeight:600,overflow:'auto'}}>
        <table>
          <thead><tr><th>Week</th><th>Home</th><th>Away</th></tr></thead>
          <tbody>
            {schedule.map((s,i)=>(<tr key={i}><td>{s.week}</td><td>{s.home}</td><td>{s.away}</td></tr>))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
