import yfinance as yf
import pandas as pd

def fetch_price_data(tickers, start_date, end_date):
    """
    Fetches adjusted closing prices for given tickers and date range.

    Args:
        tickers (list): List of stock/index ticker symbols.
        start_date (str): Start date in 'YYYY-MM-DD'.
        end_date (str): End date in 'YYYY-MM-DD'.

    Returns:
        pd.DataFrame: DataFrame of adjusted closing prices.
    """
    # Download price data from Yahoo Finance
    data = yf.download(tickers, start=start_date, end=end_date)["Adj Close"]

    # Drop rows with any missing values (optional: can be modified)
    data = data.dropna()

    return data