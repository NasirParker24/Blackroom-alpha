import Link from 'next/link';
import { signals } from '../data';

export default function SignalsPage(){
 return (
  <section className="page-section">
   <p className="eyebrow">Signal Feed</p>
   <h1>Foundational Cultural Signals</h1>
   <p className="lede">Signals are the raw cultural observations that enter the BLACKROOM pipeline.</p>
   <div className="card-grid">
    {signals.map((signal)=>(
     <article key={signal.id} className="card">
      <p class