from fastapi import FastAPI

app = FastAPI(title='BLACKROOM API', version='0.1.0')

SIGNALS = [
 {'signal_id':'BR-2026-001','title':'Housing Affordability','total_score':48},
 {'signal_id':'BR-2026-003','title':'AI Job Displacement','total_score':52},
 {'signal_id':'BR-2026-022','title':'Black Luxury','total_score':49}
]

CONTRADICTIONS=[{'name':'Technology vs Humanity','strength_score':9}]
NARRATIVES=[{'name':'Reinvention','strength_score':8}]
IDEOLOGIES=[{'name':'Creator Independence','growth_score':8,'opportunity_score':9}]
OPPORTUNITIES=[{'name':'Independent Operator Tools','priority_score':9}]

@app.get('/health')
def health():
 return {'status':'healthy','product':'BLACKROOM'}

@app.get('/signals')
def get_signals():
 return SIGNALS

@app.get('/contradictions')
def get_contradictions():
 return CONTRADICTIONS

@app.get('/narratives')
def get_narratives():
 return NARRATIVES

@app.get('/ideologies')
def get_ideologies():
 return IDEOLOGIES

@app.get('/opportunities')
def get_opportunities():
 return OPPORTUNITIES
