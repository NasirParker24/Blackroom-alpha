export function calculateSignalScore(scores:{heat:number;velocity:number;intensity:number;longevity:number;commercial:number;cultural:number}){
 return scores.heat+scores.velocity+scores.intensity+scores.longevity+scores.commercial+scores.cultural;
}

export function interpretationBand(score:number){
 if(score<=15) return 'Noise';
 if(score<=25) return 'Watchlist';
 if(score<=35) return 'Emerging Signal';
 if(score<=45) return 'Strategic Trend';
 if(score<=55) return 'Major Cultural Force';
 return 'Cultural Earthquake';
}
