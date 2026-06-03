def calculate_signal_score(signal: dict) -> int:
    return sum([
        signal.get('heat_score', 0),
        signal.get('velocity_score', 0),
        signal.get('intensity_score', 0),
        signal.get('longevity_score', 0),
        signal.get('commercial_score', 0),
        signal.get('cultural_score', 0),
    ])


def interpretation_band(score: int) -> str:
    if score <= 15:
        return 'Noise'
    if score <= 25:
        return 'Watchlist'
    if score <= 35:
        return