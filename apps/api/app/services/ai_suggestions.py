def suggest_for_signal(title: str):
    normalized = title.lower()

    if 'ai' in normalized or 'technology' in normalized:
        return {
            'signal': title,
            'suggested_contradictions': ['Technology vs Humanity', 'Institutional Trust vs Personal Experience'],
            'suggested_narratives': ['Reinvention'],
            'suggested_ideologies': ['Creator Independence', 'Digital Sovereignty'],
            'suggested_opportunities': ['Independent Operator Tools', 'Human-Centered