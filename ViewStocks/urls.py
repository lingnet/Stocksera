from django.urls import path

from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('ticker/', views.stock_price, name='ticker'),
    path('earnings_calendar/', views.earnings_calendar, name='earnings_calendar'),
    path('ticker/financial/', views.financial, name='financial'),
    path('ticker/options/', views.options, name='options'),
    path('ticker/short_volume/', views.short_volume, name='short_volume'),
    path('reddit_analysis/', views.reddit_analysis, name='reddit_analysis'),
    path('top_movers/', views.top_movers, name='top_movers'),
    path('short_interest/', views.short_interest, name='short_interest'),
    path('low_float/', views.low_float, name='low_float'),
    path('penny_stocks/', views.penny_stocks, name='penny_stocks'),
    path('ark_trades/', views.ark_trades, name='ark_trades'),
    path('sub_news/', views.sub_news, name='sub_news'),
    path('latest_news/', views.latest_news, name='latest_news'),
    path('recommendations/', views.ticker_recommendations, name='recommendations'),
    path('major_holders/', views.ticker_major_holders, name='major_holders'),
    path('institutional_holders/', views.ticker_institutional_holders, name='institutional_holders'),
    path('subreddit_count/', views.subreddit_count, name='subreddit_count'),
    path('industry/', views.industries_analysis, name='industry_analysis'),
    path('reddit_etf/', views.reddit_etf, name='reddit_etf'),
    path('opinion/', views.opinion, name='opinion'),
    path('contact/', views.contact, name='contact'),
]