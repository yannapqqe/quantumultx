[rewrite_local]

^https?:\/\/rwapi.cheeseword\.com\/url script-response-body 
https://raw.githubusercontent.com/yannapqqe/quantumultx/main/cheese.js

[mitm]

hostname = rwapi.cheeseword.com

var ojbk = JSON.parse($response.body);

ojbk = {   "data" : {     "processAppleReceipt" : {       "error" : 0,       "subscription" : {         "productId" : "rwapi.cheeseword.com/v1/Vip/buy",         "originalTransactionId" : "570001184068302",         "tier" : "Vip",         "refundedDate" : null,         "refundedReason" : null,         "isInBillingRetryPeriod" : false,         "expirationDate" : "2999-09-09T09:09:09.000Z",         "gracePeriodExpiresAt" : null,         "overDeviceLimit" : false,         "expirationIntent" : "CUSTOMER_CANCELLED",         "__typename" : "AppStoreSubscription",         "user" : null,         "status" : "canceled",         "originalPurchaseDate" : "2022-09-09T09:09:09.000Z"       },       "__typename" : "SubscriptionResult"     }   } };

$done({body : JSON.stringify(ojbk)});
