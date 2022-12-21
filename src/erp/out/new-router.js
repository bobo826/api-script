[
	{
		"name": "merchant-manage",
		"path": "/merchant-manage",
		"title": "商家管理",
		"icon": "shop",
		"routes": [
			{
				"name": "deliveryCpy-manage",
				"path": "/merchant-manage/deliveryCpy-manage",
				"component": "merchant-manage/deliveryCpy-manage/index",
				"title": "快递公司管理",
				"apiPath": "/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/admin-api/delivery/api/ae/deliveryInfo/allMap,/api/erp/ae/gift/warehouse/saveGiftWarehouse,/api/erp/ae/delivery/rule/create,/admin-api/delivery/api/ae/deliveryInfo/insert,/api/erp/ae/statementExpenseItem/saveItem,/admin-api/delivery/api/ae/deliveryInfo/update,/api/erp/ae/return-order/item/update-quantity,/admin-api/delivery/api/ae/deliveryInfo/validateDuplicate",
				"authKey": "MERCHANT_MANAGE:DELIVERYCPY_MANAGE"
			}
		],
		"authKey": "MERCHANT_MANAGE"
	},
	{
		"name": "order",
		"path": "/order",
		"title": "销售管理",
		"icon": "container",
		"routes": [
			{
				"name": "order-manage",
				"path": "/order/order-manage",
				"component": "order/order-manage/index",
				"title": "订单管理",
				"apiPath": "/admin-api/delivery/api/ae/deliveryInfo/allMap,/api/erp/ae/order/bulkDelivery,/api/erp/ae/return-order/delete,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/api/erp/ae/order/cancelHandle,/api/erp/ae/return-order/cancel,/api/erp/ae/reissueOrder/createReissue,/api/erp/ae/order/exportOrder,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/order/showTask,/api/ae/common/showTask,/admin-api/delivery/api/ae/deliveryQuery/queryDeliveryTracesNew,/api/erp/ae/order/mergeOrder,/api/erp/ae/order/getOrderDetail,/api/erp/ae/order/listOrder,/api/erp/ae/reissueOrder/list,/api/erp/ae/return-order/search,/api/erp/ae/reissueOrder/getGoods,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/order/reSyncOrderToWarehouse,/api/erp/ae/order/switchWarehouse,/api/erp/ae/phone/queryPhone,/api/erp/ae/specialOrder/getAddress,/api/erp/ae/specialOrder/getAddressInfo,/api/erp/ae/goods/detail,/api/erp/ae/course-goods/class-list,/api/erp/ae/gift/listGift,/api/erp/ae/course-goods/course-list,/api/erp/ae/course-goods/class-delivery-periods",
				"authKey": "ORDER:ORDER_MANAGE"
			},
			{
				"name": "reissue",
				"path": "/order/reissue",
				"component": "order/order-manage-reissue/index",
				"title": "补发单管理",
				"apiPath": "/admin-api/delivery/api/ae/deliveryInfo/allMap,/api/erp/ae/reissueOrder/getReissueOrder,/api/erp/ae/return-order/delete,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/reissueOrder/batchCreateReissueOrder,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/api/erp/ae/reissueOrder/closeReissueOrder,/api/erp/ae/return-order/cancel,/api/erp/ae/reissueOrder/createOldReissueOrder,/api/erp/ae/order/listOrder,/api/erp/ae/reissueOrder/list,/api/erp/ae/return-order/search,/api/erp/ae/reissueOrder/exportAddress,/api/erp/ae/reissueOrder/getReissueOrderTemplate,/api/erp/ae/reissueOrder/reSyncReissueOrder,/api/erp/ae/phone/queryPhone",
				"authKey": "ORDER:REISSUE"
			},
			{
				"name": "annormalOrder-manage",
				"path": "/order/annormalOrder-manage",
				"component": "order/abnormalOrder-manage/index",
				"title": "异常订单管理",
				"apiPath": "/api/erp/ae/specialOrder/updateAddress,/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/return-order/detail,/api/erp/ae/price-adjust-result/export,/api/ae/common/showTask,/api/erp/ae/billing/detail,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/specialOrder/exportOrder,/api/erp/ae/specialOrder/getAddress,/api/erp/ae/specialOrder/retry,/api/erp/ae/specialOrder/getSpecialOrderDetail,/api/erp/ae/specialOrder/listSpecialOrder,/api/erp/ae/specialOrder/getAddressInfo,/api/erp/ae/course-goods/class-list,/api/erp/ae/gift/listGift,/api/erp/ae/course-goods/course-list,/api/erp/ae/course-goods/class-delivery-periods",
				"authKey": "ORDER:ANNORMALORDER_MANAGE"
			},
			{
				"name": "spShipApp",
				"path": "/order/spShipApp",
				"component": "order/spShipApp/index",
				"title": "特殊发货申请",
				"apiPath": "/api/erp/ae/apply/delivery/create,/api/erp/ae/apply/delivery/edit,/api/erp/ae/return-order/delete,/api/erp/ae/apply/delivery/listDeliveryApply,/api/erp/ae/apply/delivery/deliveryApplySwitch,/api/erp/ae/apply/delivery/detail",
				"authKey": "ORDER:SPSHIPAPP"
			}
		],
		"authKey": "ORDER"
	},
	{
		"name": "product",
		"path": "/product",
		"title": "货品管理",
		"icon": "apartment",
		"routes": [
			{
				"name": "product-manage",
				"path": "/product/product-manage",
				"component": "product/product-manage/index",
				"title": "货品信息管理",
				"apiPath": "/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/return-order/detail,/api/erp/ae/price-adjust-result/export,/api/erp/ae/goods/exportGoods,/api/ae/common/showTask,/api/erp/ae/billing/detail,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/goods/detail,/api/erp/ae/goods/delete,/api/erp/ae/goods/disable,/api/erp/ae/goods/enable,/api/erp/ae/goods/sync,/api/erp/ae/category/list,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list",
				"authKey": "PRODUCT:PRODUCT_MANAGE"
			},
			{
				"name": "product-new",
				"path": "/product/product-manage/new",
				"component": "product/product-new/index",
				"title": "新增商品",
				"hideInMenu": true,
				"apiPath": "/api/erp/ae/category/add,/api/erp/ae/goods/detail,/api/erp/ae/goods/add,/api/erp/ae/category/edit,/api/erp/ae/goods/edit,/api/erp/ae/category/list,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/purchase-order/listDetail,/api/erp/ae/goods/search-goods,/api/erp/ae/goods/list",
				"authKey": "PRODUCT:PRODUCT_MANAGE:NEW"
			},
			{
				"name": "product-virtualSuit",
				"path": "/product/product-manage/virtualSuit",
				"component": "product/product-virtualSuit/index",
				"title": "虚拟组套",
				"apiPath": "/api/erp/ae/goods/disable,/api/erp/ae/goods/detail,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/erp/ae/goods/add,/api/erp/ae/goods/audit,/api/erp/ae/goods/delete,/api/erp/ae/goods/edit,/api/erp/ae/course-goods/course-list,/api/erp/ae/category/list,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/purchase-order/listDetail,/api/erp/ae/goods/search-goods",
				"authKey": "PRODUCT:PRODUCT_MANAGE:VIRTUALSUIT"
			},
			{
				"name": "product-subjectMap",
				"path": "/product/product-manage/subjectMap",
				"component": "product/product-subjectMap/index",
				"title": "内容包映射",
				"apiPath": "/api/erp/ae/gift/good/save,/api/erp/ae/course-goods/add,/api/erp/ae/return-order/delete,/api/erp/ae/gift/good/delete,/api/erp/ae/course-goods/delete,/api/erp/ae/gift/good/stopGiftGoods,/api/erp/ae/course-goods/disable,/api/erp/ae/course-goods/studySegment,/api/erp/ae/course-goods/list,/api/erp/ae/gift/good/auditGiftGoods,/api/erp/ae/course-goods/confirm,/api/erp/ae/course-goods/reject,/api/erp/ae/course-goods/detail,/api/erp/ae/course-goods/edit,/api/erp/ae/course-goods/synToWms,/api/erp/ae/gift/listGift,/api/erp/ae/course-goods/class-list,/api/erp/ae/course-goods/course-list,/api/erp/ae/course-goods/class-delivery-periods,/api/erp/ae/category/list,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/purchase-order/listDetail,/api/erp/ae/goods/search-goods,/api/erp/ae/goods/list",
				"authKey": "PRODUCT:PRODUCT_MANAGE:SUBJECTMAP"
			},
			{
				"name": "gift-entity-map",
				"path": "/product/product-manage/giftEntityMap",
				"component": "product/gift-entity-subjectMap/index",
				"title": "礼包实物映射",
				"apiPath": "/api/erp/ae/gift/good/save,/api/erp/ae/course-goods/add,/api/erp/ae/return-order/delete,/api/erp/ae/gift/good/delete,/api/erp/ae/course-goods/delete,/api/erp/ae/gift/good/stopGiftGoods,/api/erp/ae/course-goods/disable,/api/erp/ae/course-goods/studySegment,/api/erp/ae/gift/good/getGiftGoodsInfoById,/api/erp/ae/gift/good/list,/api/erp/ae/gift/good/auditGiftGoods,/api/erp/ae/course-goods/confirm,/api/erp/ae/course-goods/reject,/api/erp/ae/course-goods/edit,/api/erp/ae/price-adjust/submit,/api/erp/ae/return-order/submit,/api/erp/ae/gift/good/submitGiftGoods,/api/erp/ae/statement/audit,/api/erp/ae/billing/submit,/api/erp/ae/category/list,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/purchase-order/listDetail,/api/erp/ae/goods/search-goods,/api/erp/ae/goods/list,/api/erp/ae/course-goods/class-list,/api/erp/ae/course-goods/course-list,/api/erp/ae/gift/listGift,/api/erp/ae/course-goods/class-delivery-periods",
				"authKey": "PRODUCT:PRODUCT_MANAGE:GIFTENTITYMAP"
			},
			{
				"name": "product-category",
				"path": "/product/product-manage/category",
				"component": "product/product-category/index",
				"title": "品类分类",
				"apiPath": "/api/erp/ae/category/list,/api/erp/ae/category/add,/api/erp/ae/goods/add,/api/erp/ae/category/edit,/api/erp/ae/goods/edit",
				"authKey": "PRODUCT:PRODUCT_MANAGE:CATEGORY"
			}
		],
		"authKey": "PRODUCT"
	},
	{
		"name": "stock-manage",
		"path": "/stock-manage",
		"title": "库存管理",
		"icon": "bank",
		"routes": [
			{
				"name": "stock-product",
				"path": "/stock-manage/product",
				"component": "stock/stock-product/index",
				"title": "货品库存管理",
				"apiPath": "/api/erp/ae/inventory/product/listGoodsInventory,/api/erp/ae/category/list,/api/erp/ae/order/exportOrder,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/ae/common/showTask,/api/erp/ae/inventory/product/exportGoodsInventory",
				"authKey": "STOCK_MANAGE:PRODUCT"
			}
		],
		"authKey": "STOCK_MANAGE"
	},
	{
		"name": "logistics-manage",
		"path": "/logistics-manage",
		"title": "物流管理",
		"icon": "car",
		"routes": [
			{
				"name": "logistics-manage-user",
				"path": "/logistics-manage/user",
				"component": "logistics-manage/userSpecifyExpress/index",
				"title": "按用户指定快递",
				"apiPath": "/admin-api/delivery/api/ae/deliveryInfo/allMap,/api/erp/ae/delivery/rule/createGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/insert,/api/erp/ae/return-order/delete,/api/erp/ae/category/add,/api/erp/ae/goods/add,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/erp/ae/delivery/rule/editGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/update,/admin-api/delivery/api/ae/deliveryInfo/update,/api/erp/ae/return-order/item/update-quantity",
				"authKey": "LOGISTICS_MANAGE:USER"
			},
			{
				"name": "logistics-course",
				"path": "/logistics-manage/course",
				"component": "logistics-manage/courseSpecifyExpress/index",
				"title": "按内容包指定快递",
				"apiPath": "/admin-api/delivery/api/ae/deliveryInfo/allMap,/admin-api/delivery/api/ae/deliveryCourseAssign/stop,/api/erp/ae/return-order/delete,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/admin-api/delivery/api/ae/deliveryCourseAssign/start,/admin-api/delivery/api/ae/deliveryCourseAssign/getCourseAssignById,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/admin-api/delivery/api/ae/deliveryCourseAssign/save,/api/erp/ae/goodsCodeAssign/save,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/specialOrder/getAddress,/api/erp/ae/specialOrder/getAddressInfo,/api/erp/ae/course-goods/class-list,/api/erp/ae/course-goods/course-list,/api/erp/ae/course-goods/class-delivery-periods,/api/erp/ae/gift/listGift",
				"authKey": "LOGISTICS_MANAGE:COURSE"
			},
			{
				"name": "logistics-wareHouse",
				"path": "/logistics-manage/wareHouse",
				"component": "logistics-manage/wareHouse/index",
				"title": "按内容包指定仓库",
				"apiPath": "/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/gift/warehouse/saveGiftWarehouse,/api/erp/ae/delivery/rule/create,/admin-api/delivery/api/ae/deliveryInfo/insert,/api/erp/ae/statementExpenseItem/saveItem,/api/erp/ae/gift/warehouse/getInfoById,/api/erp/ae/delivery/rule/detail,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/api/erp/ae/delivery/rule/update,/api/erp/ae/gift/warehouse/list,/api/erp/ae/delivery/rule/list,/api/erp/ae/gift/warehouse/stopGiftWarehouse,/api/erp/ae/delivery/rule/disable,/api/erp/ae/gift/warehouse/startGiftWarehouse,/api/erp/ae/delivery/rule/enable,/api/erp/ae/course-goods/class-list,/api/erp/ae/course-goods/course-list,/api/erp/ae/course-goods/class-delivery-periods,/api/erp/ae/gift/listGift",
				"authKey": "LOGISTICS_MANAGE:WAREHOUSE"
			},
			{
				"name": "logistics-goods",
				"path": "/logistics-manage/goods",
				"component": "logistics-manage/productSpecifyExpress/index",
				"title": "按货品指定仓库",
				"apiPath": "/api/erp/ae/warehouse/getWarehouseList,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/erp/ae/delivery/rule/createGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/insert,/api/erp/ae/category/add,/api/erp/ae/goods/add,/api/erp/ae/delivery/rule/editGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/update,/admin-api/delivery/api/ae/deliveryInfo/update,/api/erp/ae/return-order/item/update-quantity,/api/erp/ae/delivery/rule/goodsRuleDetail",
				"authKey": "LOGISTICS_MANAGE:GOODS"
			},
			{
				"name": "logistics-giftSpecifyWarehouse",
				"path": "/logistics-manage/giftSpecifyWarehouse",
				"component": "logistics-manage/giftSpecifyWarehouse/index",
				"title": "按礼包指定仓库",
				"apiPath": "/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/gift/warehouse/saveGiftWarehouse,/api/erp/ae/delivery/rule/create,/admin-api/delivery/api/ae/deliveryInfo/insert,/api/erp/ae/statementExpenseItem/saveItem,/api/erp/ae/gift/warehouse/getInfoById,/api/erp/ae/delivery/rule/detail,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/api/erp/ae/gift/warehouse/list,/api/erp/ae/delivery/rule/list,/api/erp/ae/gift/warehouse/stopGiftWarehouse,/api/erp/ae/delivery/rule/disable,/api/erp/ae/gift/warehouse/startGiftWarehouse,/api/erp/ae/delivery/rule/enable,/api/erp/ae/course-goods/course-list,/api/erp/ae/gift/listGift,/api/erp/ae/course-goods/class-list,/api/erp/ae/course-goods/class-delivery-periods",
				"authKey": "LOGISTICS_MANAGE:GIFTSPECIFYWAREHOUSE"
			},
			{
				"name": "logistics-productCode",
				"path": "/logistics-manage/productCode",
				"component": "logistics-manage/productCode/index",
				"title": "按商品编码指定快递",
				"apiPath": "/api/erp/ae/specialOrder/getAddress,/api/erp/ae/specialOrder/getAddressInfo,/admin-api/delivery/api/ae/deliveryInfo/allMap,/api/erp/ae/goodsCodeAssign/save,/api/erp/ae/return-order/delete,/api/erp/ae/goodsCodeAssign/validCode,/api/erp/ae/goodsCodeAssign/list,/api/erp/ae/goodsCodeAssign/delById,/api/erp/ae/goodsCodeAssign/start,/api/erp/ae/goodsCodeAssign/stop",
				"authKey": "LOGISTICS_MANAGE:PRODUCTCODE"
			},
			{
				"name": "assign-rules",
				"path": "/logistics-manage/assignRules",
				"component": "logistics-manage/assignRules/index",
				"title": "分配规则审核管理",
				"apiPath": "/api/rainbow/ae/allocationRule/page,/api/rainbow/ae/allocationRule/review,/admin-api/delivery/api/ae/deliveryInfo/allMap,/api/erp/ae/warehouse/getWarehouseList",
				"authKey": "LOGISTICS_MANAGE:ASSIGNRULES"
			}
		],
		"authKey": "LOGISTICS_MANAGE"
	},
	{
		"name": "procurement",
		"path": "/procurement",
		"title": "采购管理",
		"icon": "shop",
		"routes": [
			{
				"name": "supplier",
				"path": "/procurement/supplier",
				"component": "procurement/supplier/index",
				"title": "供应商管理",
				"apiPath": "/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/api/erp/ae/supplier/submit,/api/erp/ae/billing/audit,/api/erp/ae/supplier/create,/api/erp/ae/supplier/financeDecline,/api/erp/ae/supplier/financeSubmit,/api/erp/ae/supplier/purchaseDecline,/api/erp/ae/supplier/purchaseSubmit,/api/erp/ae/asn/getViewById,/api/erp/ae/price-adjust/getInfoById,/api/erp/ae/supplier/detail,/api/erp/ae/price-adjust-result/findById,/api/erp/ae/price-adjust/listAuditLog,/api/erp/ae/supplier/logDetail,/api/erp/ae/supplier/listSupplier,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/supplier/list,/api/erp/ae/goodsCodeAssign/stop,/api/erp/ae/supplier/stopCooperation,/api/erp/ae/supplier/delete,/api/erp/ae/supplier/edit,/api/erp/ae/supplier/synToWms,/api/erp/ae/supplier/findManager",
				"authKey": "PROCUREMENT:SUPPLIER"
			},
			{
				"name": "supplierGoods",
				"path": "/procurement/supplierGoods",
				"component": "procurement/supplierGoods/index",
				"title": "供应商货品管理",
				"apiPath": "/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/ae/common/showTask,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/price-adjust/list,/api/erp/ae/price-adjust-result/list,/api/erp/ae/price-adjust-result/import,/api/erp/ae/asn/getViewById,/api/erp/ae/price-adjust/getInfoById,/api/erp/ae/supplier/detail,/api/erp/ae/price-adjust-result/findById,/api/erp/ae/price-adjust-result/cycleEdit,/api/erp/ae/purchase-order/getImportTemplateAddr,/api/erp/ae/price-adjust-result/getImportTemplateAddr,/api/erp/ae/price-adjust-result/exportSku,/api/erp/ae/price-adjust-result/histroy,/api/erp/ae/price-adjust-result/exportGoodsWeightedAveragePrice,/api/erp/ae/supplier/listSupplier,/api/erp/ae/supplier/findManager",
				"authKey": "PROCUREMENT:SUPPLIERGOODS"
			},
			{
				"name": "priceAdjustment",
				"path": "/procurement/priceAdjustment",
				"component": "procurement/priceAdjustment/index",
				"title": "价格调整单管理",
				"apiPath": "/api/erp/ae/billing/audit,/api/erp/ae/price-adjust/list,/api/erp/ae/price-adjust-result/list,/api/erp/ae/price-adjust/submit,/api/erp/ae/return-order/submit,/api/erp/ae/gift/good/submitGiftGoods,/api/erp/ae/statement/audit,/api/erp/ae/billing/submit,/api/erp/ae/price-adjust/listAuditLog,/api/erp/ae/asn/getViewById,/api/erp/ae/price-adjust/getInfoById,/api/erp/ae/supplier/detail,/api/erp/ae/price-adjust-result/findById,/api/erp/ae/goodsCodeAssign/save,/api/erp/ae/price-adjust/saveBase,/api/erp/ae/purchase-order/saveBase,/api/erp/ae/price-adjust/getAdjustLetterUrl,/api/erp/ae/price-adjust/delPriceAdjust,/api/erp/ae/supplier/listSupplier,/api/erp/ae/price-adjust/listDetailV2,/api/erp/ae/price-adjust/compare,/api/erp/ae/price-adjust/supplierGoodsInfo,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/price-adjust/saveDetail,/api/erp/ae/price-adjust/delAllDetail,/api/erp/ae/price-adjust/delDetail,/api/erp/ae/return-order/delete,/api/erp/ae/price-adjust/editPrice,/api/erp/ae/price-adjust/importDetail,/api/erp/ae/price-adjust/getImportTemplateAddr,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/supplier/findManager",
				"authKey": "PROCUREMENT:PRICEADJUSTMENT"
			},
			{
				"name": "purchaseOrder",
				"path": "/procurement/purchaseOrder",
				"component": "procurement/purchaseOrder/index",
				"title": "采购单管理",
				"apiPath": "/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/ae/common/showTask,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/purchase-order/cancelOrder,/api/erp/ae/return-order/cancel,/api/erp/ae/return-order/detail,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/billing/detail,/api/erp/ae/purchase-order/closeOrder,/api/erp/ae/purchase-order/confirmOrder,/api/erp/ae/purchase-order/delOrder,/api/erp/ae/return-order/delete,/api/erp/ae/statement/delete,/api/erp/ae/goodsCodeAssign/list,/api/erp/ae/purchase-order/list-export,/api/erp/ae/purchase-order/getInfoById,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/purchase-order/listDetail,/api/erp/ae/goods/search-goods,/api/erp/ae/goods/list,/api/erp/ae/purchase-order/list,/api/erp/ae/goodsCodeAssign/save,/api/erp/ae/price-adjust/saveBase,/api/erp/ae/purchase-order/saveBase,/api/erp/ae/price-adjust-result/findByGoodId,/api/erp/ae/price-adjust/delDetail,/api/erp/ae/purchase-order/delOneDetail,/api/erp/ae/purchase-order/editPurchaseCount,/api/erp/ae/purchase-order/importDetail,/api/erp/ae/purchase-order/addGoods,/api/erp/ae/purchase-order/getImportTemplateAddr,/api/erp/ae/purchase-order/validateParentOrderNo",
				"authKey": "PROCUREMENT:PURCHASEORDER"
			},
			{
				"name": "deliveryOrder",
				"path": "/procurement/deliveryOrder",
				"component": "procurement/deliveryOrder/index",
				"title": "到货单管理",
				"apiPath": "/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/asn/differenceConfirm,/api/erp/ae/return-order/detail,/api/erp/ae/supplier/listSupplier,/api/erp/ae/billing/detail,/api/erp/ae/asn/listDifferenceConfirm,/api/erp/ae/asn/list,/api/erp/ae/asn/getViewById,/api/erp/ae/price-adjust/getInfoById,/api/erp/ae/supplier/detail,/api/erp/ae/price-adjust-result/findById",
				"authKey": "PROCUREMENT:DELIVERYORDER"
			},
			{
				"name": "purchaseReturn",
				"path": "/procurement/purchaseReturn",
				"component": "procurement/purchaseReturn/index",
				"title": "采购退货管理",
				"apiPath": "/api/erp/ae/return-order/item/append,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/purchase-order/listDetail,/api/erp/ae/goods/search-goods,/api/erp/ae/goods/list,/api/erp/ae/return-order/create,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/return-order/item/search,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/supplier/list,/api/erp/ae/supplier/listSupplier,/api/erp/ae/return-order/item/remove,/api/erp/ae/return-order/submit,/api/erp/ae/billing/submit,/api/erp/ae/return-order/item/update-quantity,/api/erp/ae/return-order/update,/api/erp/ae/return-order/cancel,/api/erp/ae/return-order/delete,/api/erp/ae/order/listOrder,/api/erp/ae/reissueOrder/list,/api/erp/ae/return-order/search,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail",
				"authKey": "PROCUREMENT:PURCHASERETURN"
			}
		],
		"authKey": "PROCUREMENT"
	},
	{
		"name": "settlement",
		"path": "/settlement",
		"title": "结算管理",
		"icon": "shop",
		"routes": [
			{
				"name": "deliverCountRuleManage",
				"path": "/settlement/deliverCountRuleManage",
				"component": "settlement/deliverCountRuleManage/index",
				"title": "物流费用规则管理",
				"apiPath": "/api/erp/ae/return-order/delete,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/admin-api/delivery/api/ae/cost/copy,/admin-api/delivery/api/ae/cost/showDetail,/api/erp/ae/warehouse/getWarehouseList,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/erp/ae/goodsCodeAssign/stop,/admin-api/delivery/api/ae/cost/disable,/api/erp/ae/return-order/submit,/admin-api/delivery/api/ae/cost/submit,/api/erp/ae/billing/submit,/admin-api/delivery/api/ae/cost/createCost,/admin-api/delivery/api/ae/cost/create,/admin-api/delivery/api/ae/cost/deleteCost,/admin-api/delivery/api/ae/cost/modifyCost,/admin-api/delivery/api/ae/cost/modify,/admin-api/delivery/api/ae/cost/listCost,/admin-api/delivery/api/ae/deliveryInfo/allMap,/admin-api/order/api/ae/address/get-province,/admin-api/delivery/api/ae/cost/showOperationLog",
				"authKey": "SETTLEMENT:DELIVERCOUNTRULEMANAGE"
			},
			{
				"name": "deliverBillManage",
				"path": "/settlement/deliverBillManage",
				"component": "settlement/deliverBillManage/index",
				"title": "物流对账单管理",
				"apiPath": "/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/return-order/delete,/api/erp/ae/return-order/detail,/api/erp/ae/statement/create,/api/erp/ae/billing/detail,/api/erp/ae/purchase-order/delOrder,/api/erp/ae/statement/delete,/api/erp/ae/statement/printBill,/api/erp/ae/billing/print,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/erp/ae/statement/reCompute,/api/erp/ae/price-adjust/submit,/api/erp/ae/return-order/submit,/api/erp/ae/gift/good/submitGiftGoods,/api/erp/ae/statement/audit,/api/erp/ae/billing/submit,/api/erp/ae/statementExpenseItem/allExpenseItem,/api/erp/ae/statement/getViewById,/admin-api/delivery/api/ae/deliveryCourseAssign/getCourseAssignById,/api/erp/ae/statement/listAllExpenseOnHand,/admin-api/delivery/api/ae/deliveryInfo/update,/api/erp/ae/return-order/item/update-quantity,/api/erp/ae/statement/saveExpenseOnHand,/api/erp/ae/statement/deleteExpenseOnHand,/api/erp/ae/statement/submit,/api/erp/ae/statement/exportByExpenseId,/api/erp/ae/statement/listAuditLog,/api/erp/ae/statement/payCallBack,/api/erp/ae/billing/payCallBack",
				"authKey": "SETTLEMENT:DELIVERBILLMANAGE"
			},
			{
				"name": "purchaseBillManage",
				"path": "/settlement/purchaseBillManage",
				"component": "settlement/purchaseBillManage/index",
				"title": "采购对账单管理",
				"apiPath": "/api/erp/ae/billing/feeDetail,/api/erp/ae/statement/payCallBack,/api/erp/ae/billing/payCallBack,/api/erp/ae/statement/printBill,/api/erp/ae/billing/print,/api/erp/ae/billing/list,/api/erp/ae/billing/addMulFee,/api/erp/ae/billing/audit,/api/erp/ae/return-order/delete,/api/erp/ae/billing/deleteMulFee,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/api/erp/ae/billing/downloadFeeDetail,/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/ae/common/showTask,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/billing/modifyMulFee,/api/erp/ae/return-order/submit,/api/erp/ae/billing/submit,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/supplier/list,/api/erp/ae/supplier/listSupplier",
				"authKey": "SETTLEMENT:PURCHASEBILLMANAGE"
			},
			{
				"name": "handCostManage",
				"path": "/settlement/handCostManage",
				"component": "settlement/handCostManage/index",
				"title": "手工费用项管理",
				"apiPath": "/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/erp/ae/gift/warehouse/saveGiftWarehouse,/api/erp/ae/delivery/rule/create,/admin-api/delivery/api/ae/deliveryInfo/insert,/api/erp/ae/statementExpenseItem/saveItem,/api/erp/ae/statementExpenseItem/deleteItem",
				"authKey": "SETTLEMENT:HANDCOSTMANAGE"
			},
			{
				"name": "pendingBillManage",
				"path": "/settlement/pendingBillManage",
				"component": "settlement/pendingBillManage/index",
				"title": "待结算订单管理",
				"apiPath": "/api/erp/ae/waitSettleBilling/billedMoney,/api/erp/ae/waitSettleBilling/billingMoney,/api/erp/ae/waitSettleBilling/list,/api/erp/ae/waitSettleBilling/countData,/api/erp/ae/waitSettleBilling/createBilling,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/supplier/list,/api/erp/ae/supplier/listSupplier",
				"authKey": "SETTLEMENT:PENDINGBILLMANAGE"
			},
			{
				"name": "transferDetailsConsignment",
				"path": "/settlement/transferDetailsConsignment",
				"component": "settlement/transferDetailsConsignment/index",
				"title": "调拨明细-寄售",
				"apiPath": "/api/erp/ae/billing/transfer/list,/api/erp/ae/billing/transfer/statistics,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/supplier/list,/api/erp/ae/supplier/listSupplier,/api/erp/ae/warehouse/getWarehouseList",
				"authKey": "SETTLEMENT:TRANSFERDETAILSCONSIGNMENT"
			}
		],
		"authKey": "SETTLEMENT"
	},
	{
		"name": "crs-message-manage",
		"path": "/crs-message-manage",
		"title": "客户信息管理",
		"icon": "bank",
		"routes": [
			{
				"name": "crs-message-log",
				"path": "/crs-message-manage/crs-message-log",
				"component": "crs-message-manage/crs-message-log/index",
				"title": "客户信息日志查询",
				"apiPath": "/api/erp/ae/phoneView/listViewDetail,/api/erp/ae/goodsCodeAssign/list,/api/erp/ae/phoneView/listPhoneView,/api/erp/ae/phoneView/listAllDept",
				"authKey": "CRS_MESSAGE_MANAGE:CRS_MESSAGE_LOG"
			}
		],
		"authKey": "CRS_MESSAGE_MANAGE"
	},
	{
		"name": "report-manage",
		"path": "/report-manage",
		"title": "报表管理",
		"icon": "bank",
		"routes": [
			{
				"name": "remitDeposit",
				"path": "/report-manage/remitDeposit",
				"component": "report-manage/remitDeposit/index",
				"title": "进销汇存总表",
				"apiPath": "/api/erp/ae/goodsCodeAssign/list,/api/erp/ae/invoicing/list,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/invoicing/export,/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/ae/common/showTask,/api/erp/ae/inventory/product/exportGoodsInventory",
				"authKey": "REPORT_MANAGE:REMITDEPOSIT"
			}
		],
		"authKey": "REPORT_MANAGE"
	}
]