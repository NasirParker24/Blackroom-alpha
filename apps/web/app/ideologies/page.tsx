import { ideologies } from '../data';

export default function IdeologyTracker(){
 return (
  <main>
   <h1>Ideology Tracker</h1>
   <p>Belief systems shaping behavior, aspiration, and cultural demand.</p>
   <section>
    {ideologies.map((ideology)=> (
     <article key={ideology.name}>
      <h2>{ideology.name}</h2>
      <p>{ideology.coreBeliefs}</p>
      <p>Growth Score: {ideology.growthScore}</p>
      <p>Opportunity Score: {ideology.opportunityScore}</p>
     </article>