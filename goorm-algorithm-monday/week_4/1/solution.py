# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys
from enum import Enum


class TransactionCases(Enum):
    DEPOSIT = 0
    PAY = 1
    RESERVATION = 2


class Transaction:
    def __init__(
            self,
            transaction_case: TransactionCases,
            amount: int
    ):
        self.transaction_case = transaction_case
        self.amount = amount


class AccountManager:
    def __init__(
            self,
            starting_balance: int,
            transactions: list[Transaction]
    ):
        self.__balance = starting_balance
        self.__transaction_list = transactions
        self.__pending_transactions: list[Transaction] = []

    def __manage_reservation(self) -> None:
        while self.__pending_transactions:
            if self.__balance >= self.__pending_transactions[0].amount:
                latest = self.__pending_transactions.pop(0)
                self.__balance -= latest.amount
                continue
            else:
                break

    def handling_transaction(self) -> None:
        self.__manage_reservation()

        while self.__transaction_list:
            current_transaction = self.__transaction_list.pop(0)

            if current_transaction.transaction_case is TransactionCases.DEPOSIT:
                self.__balance += current_transaction.amount

            if current_transaction.transaction_case is TransactionCases.PAY and self.__balance >= current_transaction.amount:
                self.__balance -= current_transaction.amount

            if current_transaction.transaction_case is TransactionCases.RESERVATION:
                if self.__balance >= current_transaction.amount:
                    self.__balance -= current_transaction.amount
                else:
                    self.__pending_transactions.append(current_transaction)

            self.handling_transaction()

        while self.__pending_transactions:
            latest = self.__pending_transactions.pop(0)

            if self.__balance >= latest.amount:
                self.__balance -= latest.amount
            else:
                continue

    def get_balance(self) -> int:
        return self.__balance


def convert_input_to_transaction(raw_input: str) -> Transaction:
    transaction_type, amount = raw_input.split(' ')

    if transaction_type == 'deposit':
        transaction_type = TransactionCases.DEPOSIT
    if transaction_type == 'pay':
        transaction_type = TransactionCases.PAY
    if transaction_type == 'reservation':
        transaction_type = TransactionCases.RESERVATION

    return Transaction(transaction_type, int(amount))


[balance, num_of_transactions] = list(map(int, sys.stdin.readline().split()))
list_of_transaction: list[Transaction] = list(map(convert_input_to_transaction, sys.stdin.read().splitlines()))

account = AccountManager(balance, list_of_transaction)
account.handling_transaction()

print(account.get_balance())