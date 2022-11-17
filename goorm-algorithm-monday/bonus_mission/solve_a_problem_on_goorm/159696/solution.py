# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys


summer_days, needed_date, slots, price = list(map(int, sys.stdin.readline().split()))
cultivated_fruits = int(summer_days / needed_date) - 1 if summer_days % needed_date == 0 else summer_days // needed_date

print(cultivated_fruits * slots * price)

