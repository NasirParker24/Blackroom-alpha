export default function Dashboard(){
 return (
  <main style={{background:'#0a0a0a',color:'white',minHeight:'100vh',padding:'2rem'}}>
   <h1>BLACKROOM</h1>
   <p>Cultural Intelligence Platform</p>

   <h2>Daily Pulse</h2>
   <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'1rem'}}>
    <div><h3>Total Signals</h3><p>25</p></div>
    <div><h3>Avg Signal Score</h3><p>49</p></div>
    <div><h3>Top Contradiction</h3><p>Technology vs Humanity</p></div>
    <div><h3>Top Narrative</h3><p>Reinvention</p></div>
    <div><h3>Top Ideology</h3><p>Creator Independence</p></div>
    <div><h3>Opportunities</h3><p>12</p></div>
   </div>

   <h2>Top Signals</h2>
   <ul>
    <li>AI Job Displacement — 52 • Major Cultural Force</li>
    <li>Black Luxury — 49 • Major Cultural Force</li>
    <li>Dating App Fatigue — 44 • Strategic Trend</li>
   </ul>

   <h2>BLACKROOM Pipeline</h2>
   <p>AI Job Displacement → Technology vs Humanity → Reinvention → Creator Independence → Independent Operator Tools</p>
  </main>
 )
}
