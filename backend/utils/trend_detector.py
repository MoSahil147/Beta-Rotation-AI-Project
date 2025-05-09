from scipy.stats import linregress
import numpy as np

def detect_market_trend(index_series):
    """
    Detects overall market trend using linear regression on index returns.

    Args:
        index_series (pd.Series): Series of index adjusted close prices.

    Returns:
        str: "Bullish", "Bearish", or "Sideways" depending on slope.
    """
    if index_series.isnull().any():
        index_series = index_series.dropna()

    x = np.arange(len(index_series))
    y = index_series.values

    if len(x) < 2:
        return "Sideways"

    slope, _, _, _, _ = linregress(x, y)

    # Threshold can be adjusted for sensitivity
    if slope > 0.01:
        return "Bullish"
    elif slope < -0.01:
        return "Bearish"
    else:
        return "Sideways"