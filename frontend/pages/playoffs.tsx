import React, { useEffect, useState } from 'react'

export default function Playoffs(){
  const [playoffs, setPlayoffs] = useState<any[]>([])
  useEffect(()=>{ fetch('/api/playoffs').then(r=>r.json()).then(d=>setPlayoffs(d.playoffs || [])) },[])
  return (
    <div style={{padding:20}}>
      <h1>Playoffs (Preview)</h1>
      {playoffs.map((round,ri)=>(
        <div key={ri} style={{marginBottom:20}}>
          <h2>Round {ri+1}</h2>
          <ul>
            {round.map((m:any,mi:number)=> (
              <li key={mi}>{m.legs ? m.legs.map((l:any,i:number)=> <span key={i}>[{l.home} vs {l.away}] </span>) : m.home + ' vs ' + m.away} {m.aggregate ? `(agg:${m.aggregate})` : ''}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
