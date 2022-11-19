"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStatus = void 0;
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["pending"] = "pending";
    TransactionStatus["authorized"] = "authorized";
    TransactionStatus["settled"] = "settled";
    TransactionStatus["canceled"] = "canceled";
    TransactionStatus["error"] = "error";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
