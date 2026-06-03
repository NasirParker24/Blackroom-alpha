import { contradictions } from '../data';

export default function ContradictionsPage(){
 return (
  <main>
   <h1>Contradiction Tracker</h1>
   <p>The strategic heart of BLACKROOM: tensions creating cultural motion.</p>
   <section>
    {contradictions.map((item)=> (
     <article key={item.name} style={{border:'1px solid #333',padding:'1rem',margin:'1rem 0'}}>
      <h2>{item.name}</h2>
      <p>Strength Score: {item.strength}</p>
      <p>Status: {item.status}</p>
     </article>
    ))}
   </section>
  </main>
 )
}
