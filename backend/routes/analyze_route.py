from flask import Blueprint, request, jsonify
from utils.data_fetcher import fetch_price_data
from utils.beta_calculator import calculate_betas
from utils.trend_detector import detect_market_trend

analyze_bp = Blueprint('analyze', __name__)

@analyze_bp.route('/', methods=['POST'])
def analyze():
    try:
        data = request.get_json()

        # Extract input fields from frontend request
        start_date = data.get('start_date')
        end_date = data.get('end_date')
        sectors = data.get('sectors', [])
        stocks = data.get('stocks', [])
        market_index = data.get('market_index')

        # Fetch price data for all tickers
        price_df = fetch_price_data(stocks + [market_index], start_date, end_date)

        # Calculate beta values for each stock vs sector index
        betas = calculate_betas(price_df, stocks, market_index)

        # Detect market trend using index returns
        market_trend = detect_market_trend(price_df[market_index])

        # Recommend rotation
        rotate_into = [b['stock'] for b in betas if b['risk_type'] == 'Defensive' and market_trend != 'Bullish']
        avoid = [b['stock'] for b in betas if b['risk_type'] == 'Aggressive' and market_trend == 'Bearish']

        return jsonify({
            "market_trend": market_trend,
            "betas": betas,
            "recommendations": {
                "rotate_into": rotate_into,
                "avoid": avoid
            }
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500