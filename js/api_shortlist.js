window.apiMetaData = [


{
	"apiVersion": "0.6.1.0",
	"swaggerVersion": "2.0",
	"basePath": "http://localhost/MXM.API.Services",
	"resourcePath": "Payment",
	"description": "Payment Controller Summary",
	"apis": [{
		"path": "/Payment/{id}",
		"description": "Gets a payment",
		"operations": [{
			"httpMethod": "GET",
			"nickname": "Get",
			"responseClass": "Payment",
			"summary": "Gets a payment",
			"notes": "Returns a payment",
			"parameters": [{
				"paramType": "path",
				"name": "id",
				"description": "Id of the payment (Guid) Sample: CBF65B02-18CE-4D3C-94EE-DBA0CD478CC0",
				"dataType": "Guid",
				"required": true,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}, {
		"path": "/Payment?merchantId={merchantId}&limit={limit}&offset={offset}",
		"description": "Gets all payments",
		"operations": [{
			"httpMethod": "GET",
			"nickname": "Get_All",
			"responseClass": "Payment",
			"summary": "Gets all payments",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "path",
				"name": "merchantId",
				"description": "Id of the merchant",
				"dataType": "Integer?",
				"required": false,
				"allowMultiple": false
			}, {
				"paramType": "path",
				"name": "limit",
				"description": "Maximum number of rows to return. Defaults to 10.",
				"dataType": "Integer?",
				"required": false,
				"allowMultiple": false
			}, {
				"paramType": "path",
				"name": "offset",
				"description": "Starting record number. Defaults to 0.",
				"dataType": "Integer?",
				"required": false,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}, {
		"path": "/Payment?merchantId={merchantId}",
		"description": "Creates a new payment.",
		"operations": [{
			"httpMethod": "POST",
			"nickname": "Create",
			"responseClass": "HttpResponseMessage",
			"summary": "Creates a new payment.",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "path",
				"name": "merchantId",
				"description": "Id of the merchant",
				"dataType": "Integer",
				"required": true,
				"allowMultiple": false
			}, {
				"paramType": "body",
				"name": "payment",
				"description": "object.",
				"dataType": "Payment",
				"required": true,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}, {
		"path": "/Payment/{id}",
		"description": "Updates an existing payment.",
		"operations": [{
			"httpMethod": "PUT",
			"nickname": "Put",
			"responseClass": "HttpResponseMessage",
			"summary": "Updates an existing payment.",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "path",
				"name": "id",
				"description": "Id of the payment object.",
				"dataType": "Guid",
				"required": true,
				"allowMultiple": false
			}, {
				"paramType": "body",
				"name": "payment",
				"description": "object.",
				"dataType": "Payment",
				"required": true,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}, {
		"path": "/Payment/{id}",
		"description": "Voids a payment.",
		"operations": [{
			"httpMethod": "DELETE",
			"nickname": "Delete",
			"responseClass": "HttpResponseMessage",
			"summary": "Voids a payment.",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "path",
				"name": "id",
				"description": "Id of the payment object to delete.",
				"dataType": "Guid",
				"required": true,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}],
	"models": {
		"Payment": {
			"id": "Payment",
			"description": "Payment",
			"properties": {
				"id": {
					"type": "Guid?",
					"description": "Id of the payment"
				},
				"entryMode": {
					"type": "Core.Structure.Enumeration.EntryType?",
					"description": "Entry mode"
				},
				"totalAmount": {
					"type": "Decimal",
					"description": "Total amount"
				},
				"currency": {
					"type": "String",
					"description": "Authorization currency"
				},
				"taxAmount": {
					"type": "Decimal?",
					"description": "Tax amount"
				},
				"tipAmount": {
					"type": "Decimal?",
					"description": "Tip amount"
				},
				"tenderedAmount": {
					"type": "Decimal?",
					"description": "Tendered amount"
				},
				"authorizationCode": {
					"type": "String",
					"description": "Authorization code"
				},
				"authorizationAmount": {
					"type": "String",
					"description": "Authorized amount"
				},
				"authOnly": {
					"type": "Boolean?",
					"description": "Whether payment was authorization only or not. Default value: false"
				},
				"referenceNumber": {
					"type": "String",
					"description": "Reference number"
				},
				"avsResponseCode": {
					"type": "String",
					"description": "AVS check response"
				},
				"cvvResponseCode": {
					"type": "String",
					"description": "CVV check response"
				},
				"created": {
					"type": "DateTime?",
					"description": "Date/time the payment was created"
				},
				"isSignatureRequired": {
					"type": "Boolean?",
					"description": "Whether signature was required or not"
				},
				"hasSignature": {
					"type": "Boolean?",
					"description": "Whether signature was available or not"
				},
				"isSettled": {
					"type": "Boolean?",
					"description": "Whether the payment was settled or not"
				},
				"isReversed": {
					"type": "Boolean?",
					"description": "Whether the payment was reversed or not"
				},
				"paymentCard": {
					"type": "PaymentCard",
					"description": "Card used to make the payment"
				},
				"paymentCheck": {
					"type": "PaymentCheck",
					"description": "Check used to make the payment"
				},
				"paymentPlan": {
					"type": "Plan",
					"description": "Payment plan"
				},
				"paymentTokenId": {
					"type": "Guid?",
					"description": "Token for payment"
				},
				"currencyConversion": {
					"type": "CurrencyConversion",
					"description": "The currency conversion"
				}
			}
		}
	}
},


{
	"apiVersion": "0.6.1.0",
	"swaggerVersion": "2.0",
	"basePath": "http://localhost/MXM.API.Services",
	"resourcePath": "Customer",
	"description": "Use to manage information about customers",
	"apis": [{
		"path": "/Customer/{id}",
		"description": "Get a customer by their customer id.",
		"operations": [{
			"httpMethod": "GET",
			"nickname": "Get",
			"responseClass": "Customer",
			"summary": "Get a customer by their customer id.",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "path",
				"name": "id",
				"description": "Guid primary key",
				"dataType": "Guid",
				"required": true,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}, {
		"path": "/Customer?value={value}&limit={limit}&offset={offset}&sortField={sortField}&ascending={ascending}",
		"description": "Search the customers.",
		"operations": [{
			"httpMethod": "GET",
			"nickname": "Search",
			"responseClass": "Customer",
			"summary": "Search the customers.",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "path",
				"name": "value",
				"description": "Target value to use in the search. Query will try to match on alias, first name, last fame, email, phone number, receipts and payment tokens.",
				"dataType": "String",
				"required": false,
				"allowMultiple": true
			}, {
				"paramType": "path",
				"name": "limit",
				"description": "Maximum number of rows to return. Defaults to 10.",
				"dataType": "Integer",
				"required": false,
				"allowMultiple": false
			}, {
				"paramType": "path",
				"name": "offset",
				"description": "Starting record number. Defaults to 0.",
				"dataType": "Integer",
				"required": false,
				"allowMultiple": false
			}, {
				"paramType": "path",
				"name": "sortField",
				"description": "No Documentation Found.",
				"dataType": "String",
				"required": false,
				"allowMultiple": true
			}, {
				"paramType": "path",
				"name": "ascending",
				"description": "No Documentation Found.",
				"dataType": "Boolean",
				"required": false,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}, {
		"path": "/Customer",
		"description": "Creates a customer.",
		"operations": [{
			"httpMethod": "POST",
			"nickname": "Create",
			"responseClass": "HttpResponseMessage",
			"summary": "Creates a customer.",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "body",
				"name": "customer",
				"description": "The  information.",
				"dataType": "Customer",
				"required": true,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}, {
		"path": "/Customer/{id}",
		"description": "Update an existing customer",
		"operations": [{
			"httpMethod": "PUT",
			"nickname": "Update",
			"responseClass": "Customer",
			"summary": "Update an existing customer",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "path",
				"name": "id",
				"description": "Id of the customer",
				"dataType": "Guid",
				"required": true,
				"allowMultiple": false
			}, {
				"paramType": "body",
				"name": "customer",
				"description": "information",
				"dataType": "Customer",
				"required": true,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}, {
		"path": "/Customer/{id}",
		"description": "Deletes a specific record.",
		"operations": [{
			"httpMethod": "DELETE",
			"nickname": "Delete",
			"responseClass": "HttpResponseMessage",
			"summary": "Deletes a specific record.",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "path",
				"name": "id",
				"description": "Id of the record to delete.",
				"dataType": "Guid",
				"required": true,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}],
	"models": {
		"Customer": {
			"id": "Customer",
			"description": "",
			"properties": {
				"id": {
					"type": "Guid?",
					"description": "Gets or sets the id."
				},
				"alias": {
					"type": "String",
					"description": "Gets or sets the alias."
				},
				"number": {
					"type": "String",
					"description": "Gets or sets the number."
				},
				"taxId": {
					"type": "String",
					"description": "Gets or sets the tax id."
				},
				"note": {
					"type": "String",
					"description": "Gets or sets the note."
				},
				"email": {
					"type": "String",
					"description": "Gets or sets the email."
				},
				"cellPhone": {
					"type": "String",
					"description": "Gets or sets the cell phone."
				},
				"homePhone": {
					"type": "String",
					"description": "Gets or sets the home phone."
				},
				"loyaltyEnrollment": {
					"allowableValues": {
						"values": ["Unknown", "OptedIn", "OptedOut"],
						"max": 0,
						"min": 0,
						"valueType": "LIST"
					},
					"description": "Gets or sets the loyalty enrollment.",
					"type": "string"
				},
				"tokens": {
					"type": "PaymentToken[]",
					"items": {
						"Sref": "PaymentToken"
					},
					"description": "Gets or sets the tokens."
				},
				"addresses": {
					"type": "Address[]",
					"items": {
						"Sref": "Address"
					},
					"description": "Gets or sets the addresses."
				},
				"orderCount": {
					"type": "Integer?",
					"description": "Gets or sets the sale count."
				},
				"orderAmount": {
					"type": "Decimal?",
					"description": "Gets or sets the sale amount."
				},
				"lastOrderDate": {
					"type": "DateTime?",
					"description": "Gets or sets the last order date."
				},
				"lastOrderAmount": {
					"type": "Decimal?",
					"description": "Gets or sets the last order amount."
				},
				"lastPaymentMethod": {
					"type": "String",
					"description": "Gets or sets the last payment method."
				},
				"receiveEmailPromotions": {
					"type": "Boolean",
					"description": "Gets or sets a value indicating whether [receive email promotions]."
				},
				"receiveCellPhonePromotions": {
					"type": "Boolean",
					"description": "Gets or sets a value indicating whether [receive cell phone promotions]."
				},
				"recordCount": {
					"type": "Integer",
					"description": "Gets or sets the record count."
				}
			}
		}
	}
},


{
	"apiVersion": "0.6.1.0",
	"swaggerVersion": "2.0",
	"basePath": "http://localhost/MXM.API.Services",
	"resourcePath": "Order",
	"description": "No Documentation Found.",
	"apis": [{
		"path": "/Order?merchantId={merchantId}&limit={limit}&offset={offset}",
		"description": "Provides a list of transactions for the specified merchant.",
		"operations": [{
			"httpMethod": "GET",
			"nickname": "GetByMerchantId",
			"responseClass": "Order",
			"summary": "Provides a list of transactions for the specified merchant.",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "path",
				"name": "merchantId",
				"description": "Id of the Merchant",
				"dataType": "Integer",
				"required": true,
				"allowMultiple": false
			}, {
				"paramType": "path",
				"name": "limit",
				"description": "Maximum number of rows to return. Defaults to 10.",
				"dataType": "Integer",
				"required": false,
				"allowMultiple": false
			}, {
				"paramType": "path",
				"name": "offset",
				"description": "Starting record number. Defaults to 0.",
				"dataType": "Integer",
				"required": false,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}, {
		"path": "/Order/{id}",
		"description": "Returns a transaction.",
		"operations": [{
			"httpMethod": "GET",
			"nickname": "Get",
			"responseClass": "Order",
			"summary": "Returns a transaction.",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "path",
				"name": "id",
				"description": "Id of the order",
				"dataType": "Guid",
				"required": true,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}, {
		"path": "/Order?searchValue={searchValue}&startDate={startDate}&endDate={endDate}&limit={limit}&offset={offset}",
		"description": "Provides a list of transactions for the specified merchant.",
		"operations": [{
			"httpMethod": "GET",
			"nickname": "Search",
			"responseClass": "OrderSummary",
			"summary": "Provides a list of transactions for the specified merchant.",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "query",
				"name": "searchType",
				"description": "Value the search is based on",
				"dataType": "Core.Structure.Enumeration.SearchCriteriaType?",
				"required": false,
				"allowMultiple": false
			}, {
				"paramType": "path",
				"name": "searchValue",
				"description": "Search value",
				"dataType": "String",
				"required": false,
				"allowMultiple": true
			}, {
				"paramType": "path",
				"name": "startDate",
				"description": "Start date",
				"dataType": "DateTime?",
				"required": false,
				"allowMultiple": false
			}, {
				"paramType": "path",
				"name": "endDate",
				"description": "End date",
				"dataType": "DateTime?",
				"required": false,
				"allowMultiple": false
			}, {
				"paramType": "path",
				"name": "limit",
				"description": "Maximum number of rows to return. Defaults to 10.",
				"dataType": "Integer",
				"required": false,
				"allowMultiple": false
			}, {
				"paramType": "path",
				"name": "offset",
				"description": "Starting record number. Defaults to 0.",
				"dataType": "Integer",
				"required": false,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}, {
		"path": "/Order/{id}",
		"description": "Update an existing transaction",
		"operations": [{
			"httpMethod": "PUT",
			"nickname": "Update",
			"responseClass": "HttpResponseMessage",
			"summary": "Update an existing transaction",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "path",
				"name": "id",
				"description": "Id of the order",
				"dataType": "Guid",
				"required": true,
				"allowMultiple": false
			}, {
				"paramType": "body",
				"name": "order",
				"description": "Order information",
				"dataType": "Order",
				"required": true,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}, {
		"path": "/Order?merchantId={merchantId}",
		"description": "Creates a transaction.",
		"operations": [{
			"httpMethod": "POST",
			"nickname": "Create",
			"responseClass": "HttpResponseMessage",
			"summary": "Creates a transaction.",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "path",
				"name": "merchantId",
				"description": "Id of the Merchant",
				"dataType": "Integer",
				"required": true,
				"allowMultiple": false
			}, {
				"paramType": "body",
				"name": "order",
				"description": "The Order",
				"dataType": "Order",
				"required": true,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}, {
		"path": "/Order/{id}",
		"description": "Deletes a specific order record.",
		"operations": [{
			"httpMethod": "DELETE",
			"nickname": "Delete",
			"responseClass": "HttpResponseMessage",
			"summary": "Deletes a specific order record.",
			"notes": "No Documentation Found.",
			"parameters": [{
				"paramType": "path",
				"name": "id",
				"description": "Id of the order to delete.",
				"dataType": "Guid",
				"required": true,
				"allowMultiple": false
			}],
			"errorResponses": []
		}]
	}],
	"models": {
		"Order": {
			"id": "Order",
			"description": "",
			"properties": {
				"recordCount": {
					"type": "Integer",
					"description": "No Documentation Found."
				},
				"id": {
					"type": "Guid?",
					"description": "Gets or sets the id."
				},
				"merchantId": {
					"type": "Integer",
					"description": "No Documentation Found."
				},
				"type": {
					"allowableValues": {
						"values": ["Sale", "Return"],
						"max": 0,
						"min": 0,
						"valueType": "LIST"
					},
					"description": "Gets or sets the type.",
					"type": "string"
				},
				"receiptNumber": {
					"type": "String",
					"description": "Gets or sets the receipt number."
				},
				"accessCode": {
					"type": "String",
					"description": "Gets or sets the access code"
				},
				"invoiceNumber": {
					"type": "Integer?",
					"description": "Gets or sets the invoice number."
				},
				"isTaxExempt": {
					"type": "Boolean?",
					"description": "Gets or sets the is tax exempt."
				},
				"returnReason": {
					"type": "String",
					"description": "Gets or sets the return reason."
				},
				"memo": {
					"type": "String",
					"description": "Gets or sets the memo."
				},
				"isVoided": {
					"type": "Boolean?",
					"description": "Gets or sets the is voided."
				},
				"isVoidable": {
					"type": "Boolean?",
					"description": "Gets or sets the is voidable."
				},
				"quantity": {
					"type": "Integer?",
					"description": "Gets or sets the quantity."
				},
				"totalAmount": {
					"type": "Decimal?",
					"description": "Gets or sets the total amount."
				},
				"taxAmount": {
					"type": "Decimal?",
					"description": "Gets or sets the tax amount."
				},
				"subTotalAmount": {
					"type": "Decimal?",
					"description": "Gets or sets the sub total amount."
				},
				"tipAmount": {
					"type": "Decimal?",
					"description": "Gets or sets the tip amount."
				},
				"shipAmount": {
					"type": "Decimal?",
					"description": "Gets or sets the ship amount."
				},
				"discountAmount": {
					"type": "Decimal?",
					"description": "Gets or sets the discount amount."
				},
				"balance": {
					"type": "Decimal?",
					"description": "Gets or sets the balance."
				},
				"dueDate": {
					"type": "DateTime?",
					"description": "Gets or sets the due date."
				},
				"created": {
					"type": "DateTime?",
					"description": "Gets or sets the created."
				},
				"purchaseOrderNumber": {
					"type": "String",
					"description": "Gets or sets the purchase order number."
				},
				"invoiceDate": {
					"type": "DateTime?",
					"description": "Gets or sets the invoice date."
				},
				"isClick2PayEnabled": {
					"type": "Boolean?",
					"description": "Gets or sets the is click2 pay enabled."
				},
				"sourceType": {
					"type": "Core.Structure.Enumeration.OrderSourceType?",
					"description": "Gets or sets the type of the source."
				},
				"paymentType": {
					"type": "Core.Structure.Enumeration.PaymentType?",
					"description": "Gets or sets the type of the payment."
				},
				"purchases": {
					"type": "Purchase[]",
					"items": {
						"Sref": "Purchase"
					},
					"description": "Gets or sets the purchases."
				},
				"discounts": {
					"type": "Discount[]",
					"items": {
						"Sref": "Discount"
					},
					"description": "Gets or sets the discounts."
				},
				"customer": {
					"type": "Customer",
					"description": "Gets or sets the customer."
				},
				"billingAddress": {
					"type": "Address",
					"description": "No Documentation Found."
				},
				"shiipingAddress": {
					"type": "Address",
					"description": "No Documentation Found."
				}
			}
		},
		"OrderSummary": {
			"id": "OrderSummary",
			"description": "No Documentation Found.",
			"properties": {
				"id": {
					"type": "Guid?",
					"description": "No Documentation Found."
				},
				"merchantId": {
					"type": "Integer",
					"description": "No Documentation Found."
				},
				"type": {
					"allowableValues": {
						"values": ["Sale", "Return"],
						"max": 0,
						"min": 0,
						"valueType": "LIST"
					},
					"description": "No Documentation Found.",
					"type": "string"
				},
				"receiptNumber": {
					"type": "String",
					"description": "No Documentation Found."
				},
				"invoiceNumber": {
					"type": "Integer?",
					"description": "No Documentation Found."
				},
				"customerName": {
					"type": "String",
					"description": "No Documentation Found."
				},
				"customerNumber": {
					"type": "String",
					"description": "No Documentation Found."
				},
				"isTaxExempt": {
					"type": "Boolean?",
					"description": "No Documentation Found."
				},
				"returnReason": {
					"type": "String",
					"description": "No Documentation Found."
				},
				"memo": {
					"type": "String",
					"description": "No Documentation Found."
				},
				"isVoided": {
					"type": "Boolean?",
					"description": "No Documentation Found."
				},
				"isVoidable": {
					"type": "Boolean?",
					"description": "No Documentation Found."
				},
				"quantity": {
					"type": "Integer?",
					"description": "No Documentation Found."
				},
				"totalAmount": {
					"type": "Decimal?",
					"description": "No Documentation Found."
				},
				"taxAmount": {
					"type": "Decimal?",
					"description": "No Documentation Found."
				},
				"subTotalAmount": {
					"type": "Decimal?",
					"description": "No Documentation Found."
				},
				"tipAmount": {
					"type": "Decimal?",
					"description": "No Documentation Found."
				},
				"shipAmount": {
					"type": "Decimal?",
					"description": "No Documentation Found."
				},
				"discountAmount": {
					"type": "Decimal?",
					"description": "No Documentation Found."
				},
				"balance": {
					"type": "Decimal?",
					"description": "No Documentation Found."
				},
				"dueDate": {
					"type": "DateTime?",
					"description": "No Documentation Found."
				},
				"created": {
					"type": "DateTime?",
					"description": "No Documentation Found."
				},
				"purchaseOrderNumber": {
					"type": "String",
					"description": "No Documentation Found."
				},
				"invoiceDate": {
					"type": "DateTime?",
					"description": "No Documentation Found."
				},
				"isClick2PayEnabled": {
					"type": "Boolean?",
					"description": "No Documentation Found."
				},
				"sourceType": {
					"type": "Core.Structure.Enumeration.OrderSourceType?",
					"description": "No Documentation Found."
				},
				"paymentType": {
					"type": "Core.Structure.Enumeration.PaymentType?",
					"description": "No Documentation Found."
				}
			}
		},
		"SearchCriteriaType": {
			"id": "SearchCriteriaType",
			"description": "No Documentation Found.",
			"properties": {
				"PossibleValues": {
					"allowableValues": {
						"values": ["Account", "Email", "Receipt", "Customer", "Invoices", "Recent", "InvoiceNumber", "PhoneNumber", "PurchaseOrderNumber", "CustomerId"],
						"max": 0,
						"min": 0,
						"valueType": "LIST"
					},
					"description": "No Documentation Found.",
					"type": "string"
				}
			}
		}
	}
}

];