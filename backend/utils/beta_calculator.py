import numpy as np

def calculate_betas(price_df, stock_list, index_symbol):
    """
    Calculates beta for each stock in stock_list relative to the given index.

    Args:
        price_df (DataFrame): Adjusted close prices for all stocks and the index.
        stock_list (list): List of stock tickers to calculate beta for.
        index_symbol (str): Market index ticker.

    Returns:
        list: List of dictionaries with stock, beta, and risk classification.
    """
    betas = []
    index_returns = price_df[index_symbol].pct_change().dropna()

    for stock in stock_list:
        stock_returns = price_df[stock].pct_change().dropna()

        # Align index and stock returns by index
        combined = stock_returns.align(index_returns, join='inner')
        if combined[0].empty or combined[1].empty:
            continue

        cov_matrix = np.cov(combined[0], combined[1])
        beta = cov_matrix[0][1] / cov_matrix[1][1]

        # Classify risk type based on beta value
        if beta >= 1.1:
            risk_type = "Aggressive"
        elif beta <= 0.9:
            risk_type = "Defensive"
        else:
            risk_type = "Moderate"

        betas.append({
            "stock": stock,
            "beta": round(beta, 3),
            "risk_type": risk_type
        })

    return betas