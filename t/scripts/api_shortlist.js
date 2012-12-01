﻿window.apiMetaData = [



{ "apiVersion": "0.6.1.0", "swaggerVersion": "2.0", "basePath": "http://localhost:51696", "resourcePath": "Payment", "description": "", "apis": [{ "path": "/Payment/{id}", "description": "Get a payment", "operations": [{ "httpMethod": "GET", "nickname": "Get", "responseClass": "Payment", "summary": "Get a payment", "notes": "Returns payment information associated with the supplied payment identification number", "parameters": [{ "paramType": "path", "name": "id", "description": "Id of the payment (Guid) -- Sample: CBF65B02-18CE-4D3C-94EE-DBA0CD478CC0", "dataType": "Guid", "required": true, "allowMultiple": false }], "errorResponses": [] }] }, { "path": "/Payment?merchantId={merchantId}&limit={limit}&offset={offset}", "description": "Gets all payments", "operations": [{ "httpMethod": "GET", "nickname": "Get_All", "responseClass": "Payment", "summary": "Gets all payments", "notes": "When a call is successfully made to this route, all the payments associated with the supplied merchant identification number are returned", "parameters": [{ "paramType": "path", "name": "merchantId", "description": "Identification number of the merchant", "dataType": "Int32?", "required": false, "allowMultiple": false }, { "paramType": "path", "name": "limit", "description": "Maximum number of rows to return; the default value being 10.", "dataType": "Int32?", "required": false, "allowMultiple": false }, { "paramType": "path", "name": "offset", "description": "Starting record number; the default value being 0 .", "dataType": "Int32?", "required": false, "allowMultiple": false }], "errorResponses": [] }] }, { "path": "/Payment?merchantId={merchantId}", "description": "Creates a payment or refund.", "operations": [{ "httpMethod": "POST", "nickname": "Create", "responseClass": "HttpResponseMessage", "summary": "Creates a payment or refund.", "notes": "This route can instantitiate a new payment or refund/return. Payments are indicated by positive amounts; refunds/returns by negative.", "parameters": [{ "paramType": "path", "name": "merchantId", "description": "Identification number of the merchant", "dataType": "Int32", "required": true, "allowMultiple": false }, { "paramType": "body", "name": "payment", "description": "object.", "dataType": "Payment", "required": true, "allowMultiple": false }], "errorResponses": [] }] }, { "path": "/Payment/{id}", "description": "Adjust the amount of an existing payment.", "operations": [{ "httpMethod": "PUT", "nickname": "Put", "responseClass": "HttpResponseMessage", "summary": "Adjust the amount of an existing payment.", "notes": "Successfully making a call to this route of our API will update the information of an existing, previously created payment.", "parameters": [{ "paramType": "path", "name": "id", "description": "Id of the payment object.", "dataType": "Guid", "required": true, "allowMultiple": false }, { "paramType": "body", "name": "payment", "description": "object.", "dataType": "Payment", "required": true, "allowMultiple": false }], "errorResponses": [] }] }, { "path": "/Payment/{id}", "description": "Void/remove a payment.", "operations": [{ "httpMethod": "DELETE", "nickname": "Delete", "responseClass": "HttpResponseMessage", "summary": "Void/remove a payment.", "notes": "Use of this route will delete the payment information of the supplied payment identification number", "parameters": [{ "paramType": "path", "name": "id", "description": "Id of the payment object to be deleted.", "dataType": "Guid", "required": true, "allowMultiple": false }], "errorResponses": [] }] }], "models": { "Payment": { "id": "Payment", "description": "Payment", "properties": { "id": { "type": "Guid?", "description": "Id of the payment" }, "merchantId": { "type": "Int32?", "description": "Id of the merchant" }, "entryMode": { "type": "Core.Structure.Enumeration.EntryType?", "description": "Entry mode" }, "paymentType": { "type": "Core.Structure.Enumeration.PaymentType?", "description": "Payment type - (Cash, Card, Check)" }, "totalAmount": { "type": "Decimal", "description": "Total amount" }, "currency": { "type": "String", "description": "Authorization currency" }, "taxAmount": { "type": "Decimal?", "description": "Tax amount" }, "tipAmount": { "type": "Decimal?", "description": "Tip amount" }, "tenderedAmount": { "type": "Decimal?", "description": "Tendered amount" }, "authorizationCode": { "type": "String", "description": "Authorization code" }, "authorizationAmount": { "type": "String", "description": "Authorized amount" }, "authOnly": { "type": "Boolean?", "description": "Whether payment was authorization only or not. Default value: false" }, "referenceNumber": { "type": "String", "description": "Reference number" }, "avsResponseCode": { "type": "String", "description": "AVS check response" }, "cvvResponseCode": { "type": "String", "description": "CVV check response" }, "created": { "type": "DateTime?", "description": "Date/time the payment was created" }, "isSignatureRequired": { "type": "Boolean?", "description": "Whether signature was required or not" }, "hasSignature": { "type": "Boolean?", "description": "Whether signature was available or not" }, "isSettled": { "type": "Boolean?", "description": "Whether the payment was settled or not" }, "isReversed": { "type": "Boolean?", "description": "Whether the payment was reversed or not" }, "paymentCard": { "type": "PaymentCard", "description": "Card used to make the payment" }, "paymentCheck": { "type": "PaymentCheck", "description": "Check used to make the payment" }, "paymentPlan": { "type": "Plan", "description": "Payment plan" }, "paymentTokenId": { "type": "Guid?", "description": "Token for payment" }, "currencyConversion": { "type": "CurrencyConversion", "description": "The currency conversion" } } }, "HttpResponseMessage": { "id": "HttpResponseMessage", "description": "", "properties": { "Version": { "type": "Version", "description": "" }, "Content": { "type": "HttpContent", "description": "" }, "StatusCode": { "allowableValues": { "values": ["Continue", "SwitchingProtocols", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultipleChoices", "Ambiguous", "MovedPermanently", "Moved", "Found", "Redirect", "SeeOther", "RedirectMethod", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "RedirectKeepVerb", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "UpgradeRequired", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported"], "max": 0, "min": 0, "valueType": "LIST" }, "description": "", "type": "string" }, "ReasonPhrase": { "type": "String", "description": "" }, "Headers": { "type": "HttpResponseHeaders", "description": "" }, "RequestMessage": { "type": "HttpRequestMessage", "description": "" }, "IsSuccessStatusCode": { "type": "Boolean", "description": "" } } } } }
,



{ "apiVersion": "0.6.1.0", "swaggerVersion": "2.0", "basePath": "http://localhost:51696", "resourcePath": "Customer", "description": "Use to manage information about customers", "apis": [{ "path": "/Customer/{id}", "description": "", "operations": [{ "httpMethod": "GET", "nickname": "Get", "responseClass": "Customer", "summary": "", "notes": "", "parameters": [{ "paramType": "path", "name": "id", "description": "", "dataType": "Guid", "required": true, "allowMultiple": false }], "errorResponses": [] }] }, { "path": "/Customer?value={value}&limit={limit}&offset={offset}&sortField={sortField}&ascending={ascending}", "description": "Customer Search.", "operations": [{ "httpMethod": "GET", "nickname": "Search", "responseClass": "Customer", "summary": "Customer Search.", "notes": "Using the provided parameters value, limit, offset, sortField and ascending with this call, this route will return customer information that follows the guidlines of the input criteria.", "parameters": [{ "paramType": "path", "name": "value", "description": "Target value to use in the search. Query will try to match based on alias, first name, last name, email address, phone number, receipts and payment tokens.", "dataType": "String", "required": false, "allowMultiple": true }, { "paramType": "path", "name": "limit", "description": "Maximum number of rows to return; Default value being 10.", "dataType": "Int32", "required": false, "allowMultiple": false }, { "paramType": "path", "name": "offset", "description": "Starting record number; Default value being 0.", "dataType": "Int32", "required": false, "allowMultiple": false }, { "paramType": "path", "name": "sortField", "description": "", "dataType": "String", "required": false, "allowMultiple": true }, { "paramType": "path", "name": "ascending", "description": "", "dataType": "Boolean", "required": false, "allowMultiple": false }], "errorResponses": [] }] }, { "path": "/Customer", "description": "Customer Creation.", "operations": [{ "httpMethod": "POST", "nickname": "Create", "responseClass": "HttpResponseMessage", "summary": "Customer Creation.", "notes": "Use this route to create new customers and quantitatively increase your customer base. Be sure to utilize the many available parameters to add quality to the stored information about your clients and customers.", "parameters": [{ "paramType": "body", "name": "customer", "description": "The  information.", "dataType": "Customer", "required": true, "allowMultiple": false }], "errorResponses": [] }] }, { "path": "/Customer/{id}", "description": "Enhance/modify/maintain existing customer information", "operations": [{ "httpMethod": "PUT", "nickname": "Update", "responseClass": "Customer", "summary": "Enhance/modify/maintain existing customer information", "notes": "Successful use of this API route will allow for ease of maintanence of customer information", "parameters": [{ "paramType": "path", "name": "id", "description": "Customer Identification number", "dataType": "Guid", "required": true, "allowMultiple": false }, { "paramType": "body", "name": "customer", "description": "information", "dataType": "Customer", "required": true, "allowMultiple": false }], "errorResponses": [] }] }, { "path": "/Customer/{id}", "description": "Deletes a specific record.", "operations": [{ "httpMethod": "DELETE", "nickname": "Delete", "responseClass": "HttpResponseMessage", "summary": "Deletes a specific record.", "notes": "", "parameters": [{ "paramType": "path", "name": "id", "description": "Id of the record to delete.", "dataType": "Guid", "required": true, "allowMultiple": false }], "errorResponses": [] }] }], "models": { "Customer": { "id": "Customer", "description": "", "properties": { "id": { "type": "Guid?", "description": "Gets or sets the id." }, "alias": { "type": "String", "description": "Gets or sets the alias." }, "number": { "type": "String", "description": "Gets or sets the number." }, "taxId": { "type": "String", "description": "Gets or sets the tax id." }, "note": { "type": "String", "description": "Gets or sets the note." }, "email": { "type": "String", "description": "Gets or sets the email." }, "cellPhone": { "type": "String", "description": "Gets or sets the cell phone." }, "homePhone": { "type": "String", "description": "Gets or sets the home phone." }, "isLoyaltyEnrolled": { "type": "Boolean", "description": "Gets or sets the loyalty enrollment." }, "tokens": { "type": "PaymentMethod[]", "items": { "Sref": "PaymentMethod" }, "description": "Gets or sets the tokens." }, "addresses": { "type": "Address[]", "items": { "Sref": "Address" }, "description": "Gets or sets the addresses." }, "orderCount": { "type": "Int32?", "description": "Gets or sets the sale count." }, "orderAmount": { "type": "Decimal?", "description": "Gets or sets the sale amount." }, "lastOrderDate": { "type": "DateTime?", "description": "Gets or sets the last order date." }, "lastOrderAmount": { "type": "Decimal?", "description": "Gets or sets the last order amount." }, "lastPaymentMethod": { "type": "String", "description": "Gets or sets the last payment method." }, "receiveEmailPromotions": { "type": "Boolean", "description": "Gets or sets a value indicating whether [receive email promotions]." }, "receiveCellPhonePromotions": { "type": "Boolean", "description": "Gets or sets a value indicating whether [receive cell phone promotions]." } } }, "HttpResponseMessage": { "id": "HttpResponseMessage", "description": "", "properties": { "Version": { "type": "Version", "description": "" }, "Content": { "type": "HttpContent", "description": "" }, "StatusCode": { "allowableValues": { "values": ["Continue", "SwitchingProtocols", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultipleChoices", "Ambiguous", "MovedPermanently", "Moved", "Found", "Redirect", "SeeOther", "RedirectMethod", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "RedirectKeepVerb", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "UpgradeRequired", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported"], "max": 0, "min": 0, "valueType": "LIST" }, "description": "", "type": "string" }, "ReasonPhrase": { "type": "String", "description": "" }, "Headers": { "type": "HttpResponseHeaders", "description": "" }, "RequestMessage": { "type": "HttpRequestMessage", "description": "" }, "IsSuccessStatusCode": { "type": "Boolean", "description": "" } } } } }
,



{ "apiVersion": "0.6.1.0", "swaggerVersion": "2.0", "basePath": "http://localhost:51696", "resourcePath": "Order", "description": "", "apis": [{ "path": "/Order/{id}", "description": "", "operations": [{ "httpMethod": "GET", "nickname": "Get", "responseClass": "Order", "summary": "", "notes": "", "parameters": [{ "paramType": "path", "name": "id", "description": "", "dataType": "Guid", "required": true, "allowMultiple": false }], "errorResponses": [] }] }, { "path": "/Order?merchantId={merchantId}&searchValue={searchValue}&startDate={startDate}&endDate={endDate}&limit={limit}&offset={offset}", "description": "A Secondary route to provide a list of transactions for the specified merchant.", "operations": [{ "httpMethod": "GET", "nickname": "Search", "responseClass": "OrderSummary", "summary": "A Secondary route to provide a list of transactions for the specified merchant.", "notes": "This is an alternate route provided to find order information base on keywords/phrases, starting and ending dates.", "parameters": [{ "paramType": "path", "name": "merchantId", "description": "", "dataType": "Int32?", "required": false, "allowMultiple": false }, { "paramType": "query", "name": "searchType", "description": "Value the search is based on", "dataType": "Core.Structure.Enumeration.SearchCriteriaType?", "required": false, "allowMultiple": false }, { "paramType": "path", "name": "searchValue", "description": "Search value", "dataType": "String", "required": false, "allowMultiple": true }, { "paramType": "path", "name": "startDate", "description": "Start date", "dataType": "DateTime?", "required": false, "allowMultiple": false }, { "paramType": "path", "name": "endDate", "description": "End date", "dataType": "DateTime?", "required": false, "allowMultiple": false }, { "paramType": "path", "name": "limit", "description": "Maximum number of rows to return. Defaults to 10.", "dataType": "Int32", "required": false, "allowMultiple": false }, { "paramType": "path", "name": "offset", "description": "Starting record number. Defaults to 0.", "dataType": "Int32", "required": false, "allowMultiple": false }], "errorResponses": [] }] }, { "path": "/Order/{id}", "description": "Update an existing transaction", "operations": [{ "httpMethod": "PUT", "nickname": "Update", "responseClass": "HttpResponseMessage", "summary": "Update an existing transaction", "notes": "Utilize this route to successfully manage your order information to be in the know and be as effective as possible.", "parameters": [{ "paramType": "path", "name": "id", "description": "Order identification number", "dataType": "Guid", "required": true, "allowMultiple": false }, { "paramType": "body", "name": "order", "description": "Order information", "dataType": "Order", "required": true, "allowMultiple": false }], "errorResponses": [] }] }, { "path": "/Order?merchantId={merchantId}", "description": "Creates a transaction.", "operations": [{ "httpMethod": "POST", "nickname": "Create", "responseClass": "HttpResponseMessage", "summary": "Creates a transaction.", "notes": "Use this route to drive your business by creating customer orders quickly, easily and efficiently.", "parameters": [{ "paramType": "path", "name": "merchantId", "description": "Merchant identification number", "dataType": "Int32", "required": true, "allowMultiple": false }, { "paramType": "body", "name": "order", "description": "The Order", "dataType": "Order", "required": true, "allowMultiple": false }], "errorResponses": [] }] }, { "path": "/Order/{id}", "description": "Delete an order record.", "operations": [{ "httpMethod": "DELETE", "nickname": "Delete", "responseClass": "HttpResponseMessage", "summary": "Delete an order record.", "notes": "Use the identification number associated with an order in compliation with this route to delete that respective order.", "parameters": [{ "paramType": "path", "name": "id", "description": "Id of the order to be deleted.", "dataType": "Guid", "required": true, "allowMultiple": false }], "errorResponses": [] }] }], "models": { "Order": { "id": "Order", "description": "", "properties": { "id": { "type": "Guid?", "description": "id of the invoice" }, "merchantId": { "type": "Int32", "description": "Id of the merchant" }, "type": { "type": "Core.Structure.Enumeration.OrderType?", "description": "The type of the invoice (Sale, Return)" }, "receiptNumber": { "type": "String", "description": "Receipt number" }, "accessCode": { "type": "String", "description": "Gets or sets the access code" }, "invoiceNumber": { "type": "Int32?", "description": "Gets or sets the invoice number." }, "isTaxExempt": { "type": "Boolean?", "description": "Gets or sets the is tax exempt." }, "returnReason": { "type": "String", "description": "Gets or sets the return reason." }, "memo": { "type": "String", "description": "Gets or sets the memo." }, "isVoided": { "type": "Boolean?", "description": "Gets or sets the is voided." }, "isVoidable": { "type": "Boolean?", "description": "Gets or sets the is voidable." }, "quantity": { "type": "Int32?", "description": "Gets or sets the quantity." }, "totalAmount": { "type": "Decimal?", "description": "Gets or sets the total amount." }, "taxAmount": { "type": "Decimal?", "description": "Gets or sets the tax amount." }, "subTotalAmount": { "type": "Decimal?", "description": "Gets or sets the sub total amount." }, "tipAmount": { "type": "Decimal?", "description": "Gets or sets the tip amount." }, "shipAmount": { "type": "Decimal?", "description": "Gets or sets the ship amount." }, "discountAmount": { "type": "Decimal?", "description": "Gets or sets the discount amount." }, "balance": { "type": "Decimal?", "description": "Gets or sets the balance." }, "dueDate": { "type": "DateTime?", "description": "Gets or sets the due date." }, "created": { "type": "DateTime?", "description": "Gets or sets the created." }, "purchaseOrderNumber": { "type": "String", "description": "Gets or sets the purchase order number." }, "invoiceDate": { "type": "DateTime?", "description": "Gets or sets the invoice date." }, "isClick2PayEnabled": { "type": "Boolean?", "description": "Gets or sets the is click2 pay enabled." }, "sourceType": { "type": "Core.Structure.Enumeration.OrderSourceType?", "description": "Gets or sets the type of the source." }, "paymentType": { "type": "Core.Structure.Enumeration.PaymentType?", "description": "Gets or sets the type of the payment." }, "purchases": { "type": "Purchase[]", "items": { "Sref": "Purchase" }, "description": "Gets or sets the purchases." }, "discounts": { "type": "Discount[]", "items": { "Sref": "Discount" }, "description": "Gets or sets the discounts." }, "customer": { "type": "Customer", "description": "Gets or sets the customer." }, "billingAddress": { "type": "Address", "description": "" }, "shippingAddress": { "type": "Address", "description": "" } } }, "OrderSummary": { "id": "OrderSummary", "description": "", "properties": { "id": { "type": "Guid?", "description": "" }, "merchantId": { "type": "Int32", "description": "" }, "type": { "allowableValues": { "values": ["Sale", "Return"], "max": 0, "min": 0, "valueType": "LIST" }, "description": "", "type": "string" }, "receiptNumber": { "type": "String", "description": "" }, "invoiceNumber": { "type": "Int32?", "description": "" }, "customerName": { "type": "String", "description": "" }, "customerNumber": { "type": "String", "description": "" }, "isTaxExempt": { "type": "Boolean?", "description": "" }, "returnReason": { "type": "String", "description": "" }, "memo": { "type": "String", "description": "" }, "isVoided": { "type": "Boolean?", "description": "" }, "isVoidable": { "type": "Boolean?", "description": "" }, "quantity": { "type": "Int32?", "description": "" }, "totalAmount": { "type": "Decimal?", "description": "" }, "taxAmount": { "type": "Decimal?", "description": "" }, "subTotalAmount": { "type": "Decimal?", "description": "" }, "tipAmount": { "type": "Decimal?", "description": "" }, "shipAmount": { "type": "Decimal?", "description": "" }, "discountAmount": { "type": "Decimal?", "description": "" }, "balance": { "type": "Decimal?", "description": "" }, "dueDate": { "type": "DateTime?", "description": "" }, "created": { "type": "DateTime?", "description": "" }, "purchaseOrderNumber": { "type": "String", "description": "" }, "invoiceDate": { "type": "DateTime?", "description": "" }, "isClick2PayEnabled": { "type": "Boolean?", "description": "" }, "sourceType": { "type": "Core.Structure.Enumeration.OrderSourceType?", "description": "" }, "paymentType": { "type": "Core.Structure.Enumeration.PaymentType?", "description": "" } } }, "HttpResponseMessage": { "id": "HttpResponseMessage", "description": "", "properties": { "Version": { "type": "Version", "description": "" }, "Content": { "type": "HttpContent", "description": "" }, "StatusCode": { "allowableValues": { "values": ["Continue", "SwitchingProtocols", "OK", "Created", "Accepted", "NonAuthoritativeInformation", "NoContent", "ResetContent", "PartialContent", "MultipleChoices", "Ambiguous", "MovedPermanently", "Moved", "Found", "Redirect", "SeeOther", "RedirectMethod", "NotModified", "UseProxy", "Unused", "TemporaryRedirect", "RedirectKeepVerb", "BadRequest", "Unauthorized", "PaymentRequired", "Forbidden", "NotFound", "MethodNotAllowed", "NotAcceptable", "ProxyAuthenticationRequired", "RequestTimeout", "Conflict", "Gone", "LengthRequired", "PreconditionFailed", "RequestEntityTooLarge", "RequestUriTooLong", "UnsupportedMediaType", "RequestedRangeNotSatisfiable", "ExpectationFailed", "UpgradeRequired", "InternalServerError", "NotImplemented", "BadGateway", "ServiceUnavailable", "GatewayTimeout", "HttpVersionNotSupported"], "max": 0, "min": 0, "valueType": "LIST" }, "description": "", "type": "string" }, "ReasonPhrase": { "type": "String", "description": "" }, "Headers": { "type": "HttpResponseHeaders", "description": "" }, "RequestMessage": { "type": "HttpRequestMessage", "description": "" }, "IsSuccessStatusCode": { "type": "Boolean", "description": "" } } }, "SearchCriteriaType": { "id": "SearchCriteriaType", "description": "", "properties": { "PossibleValues": { "allowableValues": { "values": ["Account", "Email", "Receipt", "Customer", "Invoices", "Recent", "InvoiceNumber", "PhoneNumber", "PurchaseOrderNumber", "CustomerId"], "max": 0, "min": 0, "valueType": "LIST" }, "description": "", "type": "string" } } }, "DateTime": { "id": "DateTime", "description": "", "properties": { "Date": { "type": "DateTime", "description": "" }, "Day": { "type": "Int32", "description": "" }, "DayOfWeek": { "allowableValues": { "values": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "max": 0, "min": 0, "valueType": "LIST" }, "description": "", "type": "string" }, "DayOfYear": { "type": "Int32", "description": "" }, "Hour": { "type": "Int32", "description": "" }, "Kind": { "allowableValues": { "values": ["Unspecified", "Utc", "Local"], "max": 0, "min": 0, "valueType": "LIST" }, "description": "", "type": "string" }, "Millisecond": { "type": "Int32", "description": "" }, "Minute": { "type": "Int32", "description": "" }, "Month": { "type": "Int32", "description": "" }, "Now": { "type": "DateTime", "description": "" }, "UtcNow": { "type": "DateTime", "description": "" }, "Second": { "type": "Int32", "description": "" }, "Ticks": { "type": "Int64", "description": "" }, "TimeOfDay": { "type": "TimeSpan", "description": "" }, "Today": { "type": "DateTime", "description": "" }, "Year": { "type": "Int32", "description": "" } } } } }


];