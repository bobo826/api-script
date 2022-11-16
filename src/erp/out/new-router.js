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
				"apiPath": "/api/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/api/ae/deliveryUserAssign/list,/api/ae/deliveryInfo/list,/ae/goods/list,/api/erp/ae/statement/list,/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/ae/deliveryInfo/allMap,/ae/gift/warehouse/saveGiftWarehouse,/ae/delivery/rule/create,/api/ae/deliveryInfo/insert,/api/erp/ae/statementExpenseItem/saveItem,/api/ae/deliveryInfo/update,/ae/return-order/item/update-quantity,/api/ae/deliveryInfo/validateDuplicate"
			}
		]
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
				"apiPath": "/api/ae/deliveryInfo/allMap,/ae/order/bulkDelivery,/ae/return-order/delete,/ae/return-order/detail,/ae/billing/detail,/ae/order/cancelHandle,/ae/return-order/cancel,/ae/reissueOrder/createReissue,/ae/order/exportOrder,/ae/purchase-order/export,/ae/price-adjust-result/export,/ae/inventory/product/exportGoodsInventory,/ae/order/showTask,/api/ae/common/showTask,/api/ae/deliveryQuery/queryDeliveryTracesNew,/ae/order/mergeOrder,/ae/order/getOrderDetail,/ae/order/listOrder,/ae/reissueOrder/list,/ae/return-order/search,/ae/reissueOrder/getGoods,/ae/warehouse/getWarehouseList,ae/order/reSyncOrderToWarehouse,/ae/order/switchWarehouse,/ae/phone/queryPhone,ae/specialOrder/getAddress,/ae/specialOrder/getAddressInfo,/ae/goods/detail,/ae/course-goods/class-list,/ae/gift/listGift,/ae/course-goods/course-list,/ae/course-goods/class-delivery-periods"
			},
			{
				"name": "reissue",
				"path": "/order/reissue",
				"component": "order/order-manage-reissue/index",
				"title": "补发单管理",
				"apiPath": "/api/ae/deliveryInfo/allMap,/ae/reissueOrder/getReissueOrder,/ae/return-order/delete,/ae/warehouse/getWarehouseList,/ae/reissueOrder/batchCreateReissueOrder,/ae/return-order/detail,/ae/billing/detail,/ae/reissueOrder/closeReissueOrder,/ae/return-order/cancel,/ae/reissueOrder/createOldReissueOrder,/ae/order/listOrder,/ae/reissueOrder/list,/ae/return-order/search,/ae/reissueOrder/exportAddress,/ae/reissueOrder/getReissueOrderTemplate,ae/reissueOrder/reSyncReissueOrder,/ae/phone/queryPhone"
			},
			{
				"name": "annormalOrder-manage",
				"path": "/order/annormalOrder-manage",
				"component": "order/abnormalOrder-manage/index",
				"title": "异常订单管理",
				"apiPath": "ae/specialOrder/updateAddress,/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/return-order/detail,/ae/price-adjust-result/export,/api/ae/common/showTask,/ae/billing/detail,/ae/inventory/product/exportGoodsInventory,ae/specialOrder/exportOrder,ae/specialOrder/getAddress,/ae/specialOrder/retry,/ae/specialOrder/getSpecialOrderDetail,/ae/specialOrder/listSpecialOrder,/ae/specialOrder/getAddressInfo,/ae/course-goods/class-list,/ae/gift/listGift,/ae/course-goods/course-list,/ae/course-goods/class-delivery-periods"
			},
			{
				"name": "spShipApp",
				"path": "/order/spShipApp",
				"component": "order/spShipApp/index",
				"title": "特殊发货申请",
				"apiPath": "/ae/apply/delivery/listDeliveryApply,ae/apply/delivery/create,ae/apply/delivery/deliveryApplySwitch"
			}
		]
	},
	{
		"name": "product",
		"path": "/product",
		"title": "货品管理",
		"icon": "apartment",
		"routes": [
			{
				"name": "product-manage",
				"path": "/product/product-manage/list",
				"component": "product/product-manage/list",
				"title": "货品管理",
				"apiPath": "/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/return-order/detail,/ae/price-adjust-result/export,/ae/goods/exportGoods,/api/ae/common/showTask,/ae/billing/detail,/ae/inventory/product/exportGoodsInventory,/ae/goods/detail,/ae/goods/delete,/ae/goods/disable,/ae/goods/enable,/ae/goods/sync,/ae/category/list,/api/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/api/ae/deliveryUserAssign/list,/api/ae/deliveryInfo/list,/ae/goods/list,/api/erp/ae/statement/list,/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list"
			},
			{
				"name": "product-new",
				"path": "/product/product-manage/new",
				"component": "product/product-new/index",
				"title": "新增商品",
				"hideInMenu": true,
				"apiPath": "/ae/category/add,/ae/goods/detail,/ae/goods/add,/ae/category/edit,/ae/goods/edit,/ae/category/list,/ae/purchase-order/getGoods,/ae/purchase-order/listDetail,/ae/goods/search-goods,/ae/goods/list"
			},
			{
				"name": "product-virtualSuit",
				"path": "/product/product-manage/virtualSuit",
				"component": "product/product-virtualSuit/index",
				"title": "虚拟组套",
				"apiPath": "/ae/goods/disable,/ae/goods/detail,/api/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/api/ae/deliveryUserAssign/list,/api/ae/deliveryInfo/list,/ae/goods/list,/api/erp/ae/statement/list,/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/ae/goods/add,/ae/goods/audit,/ae/goods/delete,/ae/goods/edit,/ae/course-goods/course-list,/ae/category/list,/ae/purchase-order/getGoods,/ae/purchase-order/listDetail,/ae/goods/search-goods"
			},
			{
				"name": "product-subjectMap",
				"path": "/product/product-manage/subjectMap",
				"component": "product/product-subjectMap/index",
				"title": "内容包映射",
				"apiPath": "/ae/gift/good/save,/ae/course-goods/add,/ae/return-order/delete,/ae/gift/good/delete,/ae/course-goods/delete,/ae/gift/good/stopGiftGoods,/ae/course-goods/disable,/ae/course-goods/studySegment,/ae/course-goods/list,/ae/gift/good/auditGiftGoods,/ae/course-goods/confirm,/ae/course-goods/reject,/ae/course-goods/detail,/ae/course-goods/edit,/ae/course-goods/synToWms,/ae/category/list,/ae/purchase-order/getGoods,/ae/purchase-order/listDetail,/ae/goods/search-goods,/ae/goods/list,/ae/course-goods/class-list,/ae/course-goods/course-list,/ae/course-goods/class-delivery-periods,/ae/gift/listGift"
			},
			{
				"name": "gift-entity-map",
				"path": "/product/product-manage/giftEntityMap",
				"component": "product/gift-entity-subjectMap/index",
				"title": "礼包实物映射",
				"apiPath": "/ae/gift/good/save,/ae/course-goods/add,/ae/return-order/delete,/ae/gift/good/delete,/ae/course-goods/delete,/ae/gift/good/stopGiftGoods,/ae/course-goods/disable,/ae/course-goods/studySegment,/ae/gift/good/getGiftGoodsInfoById,/ae/gift/good/list,/ae/gift/good/auditGiftGoods,/ae/course-goods/confirm,/ae/course-goods/reject,/ae/course-goods/edit,/ae/price-adjust/submit,/ae/return-order/submit,/ae/gift/good/submitGiftGoods,/ae/statement/audit,ae/billing/submit,/ae/category/list,/ae/purchase-order/getGoods,/ae/purchase-order/listDetail,/ae/goods/search-goods,/ae/goods/list,/ae/course-goods/class-list,/ae/course-goods/course-list,/ae/gift/listGift,/ae/course-goods/class-delivery-periods"
			},
			{
				"name": "product-category",
				"path": "/product/product-manage/category",
				"component": "product/product-category/index",
				"title": "品类分类",
				"apiPath": "/ae/category/list,/ae/category/add,/ae/goods/add,/ae/category/edit,/ae/goods/edit"
			}
		]
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
				"apiPath": "/ae/inventory/product/listGoodsInventory,/ae/category/list,/ae/order/exportOrder,/ae/purchase-order/export,/ae/price-adjust-result/export,/ae/inventory/product/exportGoodsInventory,/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/price-adjust-result/export,/api/ae/common/showTask,/ae/inventory/product/exportGoodsInventory"
			}
		]
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
				"component": "logistics-manage/userSpecifyExpress/list",
				"title": "按用户指定快递",
				"apiPath": "/api/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/api/ae/deliveryUserAssign/list,/api/ae/deliveryInfo/list,/api/ae/deliveryInfo/allMap,/ae/return-order/delete,/ae/goods/list,/api/erp/ae/statement/list,/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/ae/delivery/rule/createGoodsRule,/api/ae/deliveryUserAssign/insert,/ae/category/add,/ae/goods/add,/ae/delivery/rule/editGoodsRule,/api/ae/deliveryUserAssign/update,/api/ae/deliveryInfo/update,/ae/return-order/item/update-quantity"
			},
			{
				"name": "logistics-course",
				"path": "/logistics-manage/course",
				"component": "logistics-manage/courseSpecifyExpress/index",
				"title": "按内容包指定快递",
				"apiPath": "/api/ae/deliveryCourseAssign/stop,/api/ae/deliveryInfo/allMap,/ae/return-order/delete,/ae/return-order/detail,/ae/billing/detail,/api/ae/deliveryCourseAssign/start,/api/ae/deliveryCourseAssign/getCourseAssignById,/api/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/api/ae/deliveryUserAssign/list,/api/ae/deliveryInfo/list,/ae/goods/list,/api/erp/ae/statement/list,/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/ae/deliveryCourseAssign/save,/ae/goodsCodeAssign/save,ae/specialOrder/getAddress,/ae/specialOrder/getAddressInfo,/ae/warehouse/getWarehouseList,/ae/course-goods/class-list,/ae/course-goods/course-list,/ae/course-goods/class-delivery-periods,/ae/gift/listGift"
			},
			{
				"name": "logistics-wareHouse",
				"path": "/logistics-manage/wareHouse",
				"component": "logistics-manage/wareHouse/index",
				"title": "按内容包指定仓库",
				"apiPath": "/ae/gift/warehouse/saveGiftWarehouse,/ae/delivery/rule/create,/api/ae/deliveryInfo/insert,/ae/warehouse/getWarehouseList,/api/erp/ae/statementExpenseItem/saveItem,/ae/gift/warehouse/getInfoById,/ae/delivery/rule/detail,/ae/return-order/detail,/ae/billing/detail,/ae/delivery/rule/update,/ae/gift/warehouse/list,/ae/delivery/rule/list,/ae/gift/warehouse/stopGiftWarehouse,/ae/delivery/rule/disable,/ae/gift/warehouse/startGiftWarehouse,/ae/delivery/rule/enable,/ae/course-goods/class-list,/ae/course-goods/course-list,/ae/course-goods/class-delivery-periods,/ae/gift/listGift"
			},
			{
				"name": "logistics-goods",
				"path": "/logistics-manage/goods",
				"component": "logistics-manage/productSpecifyExpress/index",
				"title": "按货品指定仓库",
				"apiPath": "/ae/warehouse/getWarehouseList,/api/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/api/ae/deliveryUserAssign/list,/api/ae/deliveryInfo/list,/ae/goods/list,/api/erp/ae/statement/list,/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/ae/delivery/rule/createGoodsRule,/api/ae/deliveryUserAssign/insert,/ae/category/add,/ae/goods/add,/ae/delivery/rule/editGoodsRule,/api/ae/deliveryUserAssign/update,/api/ae/deliveryInfo/update,/ae/return-order/item/update-quantity,/ae/delivery/rule/goodsRuleDetail"
			},
			{
				"name": "logistics-giftSpecifyWarehouse",
				"path": "/logistics-manage/giftSpecifyWarehouse",
				"component": "logistics-manage/giftSpecifyWarehouse/index",
				"title": "按礼包指定仓库",
				"apiPath": "/ae/gift/warehouse/saveGiftWarehouse,/ae/delivery/rule/create,/api/ae/deliveryInfo/insert,/ae/warehouse/getWarehouseList,/api/erp/ae/statementExpenseItem/saveItem,/ae/gift/warehouse/getInfoById,/ae/delivery/rule/detail,/ae/return-order/detail,/ae/billing/detail,/ae/gift/warehouse/list,/ae/delivery/rule/list,/ae/gift/warehouse/stopGiftWarehouse,/ae/delivery/rule/disable,/ae/gift/warehouse/startGiftWarehouse,/ae/delivery/rule/enable,/ae/course-goods/course-list,/ae/gift/listGift,/ae/course-goods/class-list,/ae/course-goods/class-delivery-periods"
			},
			{
				"name": "logistics-productCode",
				"path": "/logistics-manage/productCode",
				"component": "logistics-manage/productCode/index",
				"title": "按商品编码指定快递",
				"apiPath": "ae/specialOrder/getAddress,/ae/specialOrder/getAddressInfo,/ae/goodsCodeAssign/save,/api/ae/deliveryInfo/allMap,/ae/return-order/delete,/ae/goodsCodeAssign/validCode,/ae/goodsCodeAssign/list,/ae/goodsCodeAssign/delById,/ae/goodsCodeAssign/start,/ae/goodsCodeAssign/stop"
			}
		]
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
				"apiPath": "/ae/return-order/detail,/ae/billing/detail,/ae/supplier/submit,ae/billing/audit,/ae/supplier/create,/ae/supplier/financeDecline,/ae/supplier/financeSubmit,/ae/supplier/purchaseDecline,/ae/supplier/purchaseSubmit,/ae/asn/getViewById,/ae/price-adjust/getInfoById,/ae/supplier/detail,/ae/price-adjust-result/findById,/ae/price-adjust/listAuditLog,/ae/supplier/logDetail,/ae/supplier/listSupplier,/ae/supplier/listSupplierActive,/ae/supplier/list,/ae/goodsCodeAssign/stop,/ae/supplier/stopCooperation,/ae/supplier/delete,/ae/supplier/edit,/ae/supplier/synToWms,/ae/supplier/findManager"
			},
			{
				"name": "supplierGoods",
				"path": "/procurement/supplierGoods",
				"component": "procurement/supplierGoods/index",
				"title": "供应商货品管理",
				"apiPath": "/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/price-adjust-result/export,/api/ae/common/showTask,/ae/inventory/product/exportGoodsInventory,/ae/price-adjust/list,/ae/price-adjust-result/list,/ae/price-adjust-result/import,/ae/asn/getViewById,/ae/price-adjust/getInfoById,/ae/supplier/detail,/ae/price-adjust-result/findById,/ae/price-adjust-result/cycleEdit,/ae/purchase-order/getImportTemplateAddr,/ae/price-adjust-result/getImportTemplateAddr,/ae/price-adjust-result/exportSku,/ae/price-adjust-result/histroy,/ae/price-adjust-result/exportGoodsWeightedAveragePrice,/ae/supplier/listSupplier,/ae/supplier/findManager"
			},
			{
				"name": "priceAdjustment",
				"path": "/procurement/priceAdjustment",
				"component": "procurement/priceAdjustment/index",
				"title": "价格调整单管理",
				"apiPath": "ae/billing/audit,/ae/price-adjust/list,/ae/price-adjust-result/list,/ae/price-adjust/submit,/ae/return-order/submit,/ae/gift/good/submitGiftGoods,/ae/statement/audit,ae/billing/submit,/ae/price-adjust/listAuditLog,/ae/asn/getViewById,/ae/price-adjust/getInfoById,/ae/supplier/detail,/ae/price-adjust-result/findById,/ae/goodsCodeAssign/save,/ae/price-adjust/saveBase,/ae/purchase-order/saveBase,/ae/price-adjust/getAdjustLetterUrl,/ae/price-adjust/delPriceAdjust,/ae/supplier/listSupplier,/ae/price-adjust/compare', param,/ae/price-adjust/supplierGoodsInfo,/ae/purchase-order/getGoods,/ae/price-adjust/listDetailV2,/ae/price-adjust/saveDetail,/ae/price-adjust/delAllDetail,/ae/price-adjust/delDetail,/ae/return-order/delete,/ae/price-adjust/editPrice,/ae/price-adjust/importDetail,/ae/price-adjust/getImportTemplateAddr,/ae/supplier/listSupplierActive,/ae/supplier/findManager"
			},
			{
				"name": "purchaseOrder",
				"path": "/procurement/purchaseOrder",
				"component": "procurement/purchaseOrder/index",
				"title": "采购单管理",
				"apiPath": "/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/price-adjust-result/export,/api/ae/common/showTask,/ae/inventory/product/exportGoodsInventory,/ae/warehouse/getWarehouseList,/ae/purchase-order/cancelOrder,/ae/return-order/cancel,/ae/return-order/detail,/ae/supplier/listSupplierActive,/ae/billing/detail,/ae/purchase-order/closeOrder,/ae/purchase-order/confirmOrder,/ae/purchase-order/delOrder,/ae/return-order/delete,/ae/statement/delete,/ae/purchase-order/getInfoById,/ae/purchase-order/getGoods,/ae/purchase-order/listDetail,/ae/goods/search-goods,/ae/goods/list,/ae/purchase-order/list,/ae/goodsCodeAssign/save,/ae/price-adjust/saveBase,/ae/purchase-order/saveBase,/ae/price-adjust-result/findByGoodId,/ae/price-adjust/delDetail,/ae/purchase-order/delOneDetail,/ae/purchase-order/editPurchaseCount,/ae/purchase-order/importDetail,/ae/purchase-order/addGoods,/ae/purchase-order/getImportTemplateAddr,/ae/purchase-order/validateParentOrderNo"
			},
			{
				"name": "deliveryOrder",
				"path": "/procurement/deliveryOrder",
				"component": "procurement/deliveryOrder/index",
				"title": "到货单管理",
				"apiPath": "/ae/warehouse/getWarehouseList,/ae/asn/differenceConfirm,/ae/return-order/detail,/ae/supplier/listSupplier,/ae/billing/detail,/ae/asn/listDifferenceConfirm,/ae/asn/list,/ae/asn/getViewById,/ae/price-adjust/getInfoById,/ae/supplier/detail,/ae/price-adjust-result/findById"
			},
			{
				"name": "purchaseReturn",
				"path": "/procurement/purchaseReturn",
				"component": "procurement/purchaseReturn/index",
				"title": "采购退货管理",
				"apiPath": "/ae/return-order/create,/ae/warehouse/getWarehouseList,/api/erp/ae/warehouse/getWarehouseList,/ae/return-order/item/search,/ae/supplier/listSupplierActive,/ae/supplier/list,/ae/supplier/listSupplier,/ae/return-order/item/remove,/ae/return-order/submit,ae/billing/submit,/ae/return-order/item/update-quantity,/ae/return-order/update,/ae/return-order/item/append,/ae/purchase-order/getGoods,/ae/purchase-order/listDetail,/ae/goods/search-goods,/ae/goods/list,/ae/return-order/cancel,/ae/return-order/delete,/ae/order/listOrder,/ae/reissueOrder/list,/ae/return-order/search,/ae/return-order/detail,/ae/billing/detail"
			}
		]
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
				"apiPath": "/ae/return-order/delete,/ae/return-order/detail,/ae/billing/detail,/api/ae/cost/copy,/api/ae/cost/showDetail,/ae/warehouse/getWarehouseList,/api/erp/ae/warehouse/getWarehouseList,/api/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/api/ae/deliveryUserAssign/list,/api/ae/deliveryInfo/list,/ae/goods/list,/api/erp/ae/statement/list,/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/ae/goodsCodeAssign/stop,/api/ae/cost/disable,/ae/return-order/submit,/api/ae/cost/submit,ae/billing/submit,/api/ae/cost/createCost,/api/ae/cost/create,/api/ae/cost/deleteCost,/api/ae/cost/modifyCost,/api/ae/cost/modify,/api/ae/cost/listCost,/api/ae/deliveryInfo/allMap,/api/ae/address/get-province,/api/ae/cost/showOperationLog"
			},
			{
				"name": "deliverBillManage",
				"path": "/settlement/deliverBillManage",
				"component": "settlement/deliverBillManage/index",
				"title": "物流对账单管理",
				"apiPath": "/ae/warehouse/getWarehouseList,/ae/return-order/delete,/ae/return-order/detail,/ae/statement/create,/ae/billing/detail,/ae/purchase-order/delOrder,/ae/statement/delete,/ae/statement/printBill,/ae/billing/print,/api/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/api/ae/deliveryUserAssign/list,/api/ae/deliveryInfo/list,/ae/goods/list,/api/erp/ae/statement/list,/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/ae/statement/reCompute,/ae/price-adjust/submit,/ae/return-order/submit,/ae/gift/good/submitGiftGoods,/ae/statement/audit,ae/billing/submit,/ae/statementExpenseItem/allExpenseItem,/ae/statement/getViewById,/api/ae/deliveryCourseAssign/getCourseAssignById,/ae/statement/listAllExpenseOnHand,/api/ae/deliveryInfo/update,/ae/return-order/item/update-quantity,/ae/statement/saveExpenseOnHand,/ae/statement/deleteExpenseOnHand,/ae/statement/submit,/ae/statement/exportByExpenseId,/ae/statement/listAuditLog,/ae/statement/payCallBack,/ae/billing/payCallBack"
			},
			{
				"name": "purchaseBillManage",
				"path": "/settlement/purchaseBillManage",
				"component": "settlement/purchaseBillManage/index",
				"title": "采购对账单管理",
				"apiPath": "/ae/billing/feeDetail,/ae/statement/payCallBack,/ae/billing/payCallBack,/ae/statement/printBill,/ae/billing/print,/ae/billing/list,ae/billing/addMulFee,ae/billing/audit,/ae/return-order/delete,ae/billing/deleteMulFee,/ae/return-order/detail,/ae/billing/detail,/ae/billing/downloadFeeDetail,/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/price-adjust-result/export,/api/ae/common/showTask,/ae/inventory/product/exportGoodsInventory,ae/billing/modifyMulFee,/ae/return-order/submit,ae/billing/submit,/ae/supplier/listSupplierActive,/ae/supplier/list,/ae/supplier/listSupplier"
			},
			{
				"name": "handCostManage",
				"path": "/settlement/handCostManage",
				"component": "settlement/handCostManage/index",
				"title": "手工费用项管理",
				"apiPath": "/api/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/api/ae/deliveryUserAssign/list,/api/ae/deliveryInfo/list,/ae/goods/list,/api/erp/ae/statement/list,/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/ae/gift/warehouse/saveGiftWarehouse,/ae/delivery/rule/create,/api/ae/deliveryInfo/insert,/api/erp/ae/statementExpenseItem/saveItem,/api/erp/ae/statementExpenseItem/deleteItem"
			},
			{
				"name": "pendingBillManage",
				"path": "/settlement/pendingBillManage",
				"component": "settlement/pendingBillManage/index",
				"title": "待结算订单管理",
				"apiPath": "/ae/waitSettleBilling/billedMoney,/ae/waitSettleBilling/billingMoney,/ae/waitSettleBilling/list,/ae/waitSettleBilling/countData,/ae/waitSettleBilling/createBilling,/ae/supplier/listSupplierActive,/ae/supplier/list,/ae/supplier/listSupplier"
			},
			{
				"name": "transferDetailsConsignment",
				"path": "/settlement/transferDetailsConsignment",
				"component": "settlement/transferDetailsConsignment/index",
				"title": "调拨明细-寄售",
				"apiPath": "/ae/billing/transfer/list,/ae/billing/transfer/statistics,/ae/supplier/listSupplierActive,/ae/supplier/list,/ae/supplier/listSupplier,/ae/warehouse/getWarehouseList"
			}
		]
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
				"apiPath": "/ae/phoneView/listPhoneView,/ae/goodsCodeAssign/list,/ae/phoneView/listViewDetail,/ae/phoneView/listAllDept"
			}
		]
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
				"apiPath": "/ae/goodsCodeAssign/list,/ae/warehouse/getWarehouseList,/ae/invoicing/list,/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/price-adjust-result/export,/ae/invoicing/export,/api/ae/common/showTask,/ae/inventory/product/exportGoodsInventory"
			}
		]
	}
]