import { signals } from '../data';

export default function SignalsPage(){
 return (
  <main style={{background:'#0a0a0a',color:'white',minHeight:'100vh',padding:'2rem'}}>
   <h1>Signal Feed</h1>
   <p>Foundational cultural signals moving through the BLACKROOM intelligence pipeline.</p>
   <div style={{display:'grid',gap:'1rem',marginTop:'2rem'}}>
    {signals.map((signal)=>(
     <article key={signal.id} style={{border:'1px solid #27272a',borderRadius:'16px',padding:'1rem',background:'#111113'}}>
      <p style={{color:'#a1a1aa'}}>{signal.id} · {signal.category}</p>
