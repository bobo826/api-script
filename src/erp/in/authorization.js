module.exports = [
  {
    "name": "商家管理",
    "key": "MERCHANT_MANAGE",
    "type": "route",
    "path": "/merchant-manage",
    "authority": [],
    "ext": "{\"index\":2}",
    "icon": "shop",
    "children": [
      {
        "name": "快递公司管理",
        "key": "MERCHANT_MANAGE:DELIVERYCPY_MANAGE",
        "type": "route",
        "path": "/merchant-manage/deliveryCpy-manage,/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/ae/deliveryUserAssign/list,/ae/deliveryInfo/list,/ae/goods/list,/ae/statement/list,/ae/cost/list,/ae/statementExpenseItem/list,/ae/deliveryInfo/allMap,/ae/gift/warehouse/saveGiftWarehouse,/ae/delivery/rule/create,/ae/deliveryInfo/insert,/ae/statementExpenseItem/saveItem,/ae/deliveryInfo/update,/ae/return-order/item/update-quantity,/ae/deliveryInfo/validateDuplicate",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "更新物流公司",
            "key": "DELIVERY-MANAGE:UPDATE",
            "type": "api",
            "authority": [],
            "path": "/api/ae/deliveryInfo/update"
          },
          {
            "name": "新增物流公司",
            "key": "DELIVERY-MANAGE:INSERT",
            "type": "api",
            "authority": [],
            "path": "/api/ae/deliveryInfo/insert"
          },
          {
            "name": "物流列表",
            "key": "DELIVERY-MANAGE:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/ae/deliveryInfo/list"
          }
        ]
      }
    ]
  },
  {
    "name": "销售管理",
    "key": "ORDER",
    "type": "route",
    "path": "/order",
    "authority": [],
    "ext": "{\"index\":3}",
    "icon": "container",
    "children": [
      {
        "name": "订单管理",
        "key": "ORDER:ORDER_MANAGE",
        "type": "route",
        "path": "/order/order-manage,/ae/deliveryInfo/allMap,/ae/order/bulkDelivery,/ae/return-order/delete,/ae/return-order/detail,/ae/billing/detail,/ae/order/cancelHandle,/ae/return-order/cancel,/ae/reissueOrder/createReissue,/ae/order/exportOrder,/ae/purchase-order/export,/ae/price-adjust-result/export,/ae/inventory/product/exportGoodsInventory,/ae/order/showTask,/ae/common/showTask,/ae/deliveryQuery/queryDeliveryTracesNew,/ae/order/mergeOrder,/ae/order/getOrderDetail,/ae/order/listOrder,/ae/reissueOrder/list,/ae/return-order/search,/ae/reissueOrder/getGoods,/ae/warehouse/getWarehouseList,/ae/order/reSyncOrderToWarehouse,/ae/order/switchWarehouse,/ae/phone/queryPhone,/ae/specialOrder/getAddress,/ae/specialOrder/getAddressInfo,/ae/goods/detail,/ae/course-goods/class-list,/ae/gift/listGift,/ae/course-goods/course-list,/ae/course-goods/class-delivery-periods",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "订单管理分页列表",
            "key": "ORDER:ORDER_LIST:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/order/listOrder"
          },
          {
            "name": "查询仓库列表",
            "key": "ORDER:WAREHOUSE:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/warehouse/getWarehouseList"
          },
          {
            "name": "查询内容包列表",
            "key": "PRODUCT:COURSE-LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/course-goods/course-list"
          },
          {
            "name": "查询期数列表",
            "key": "PRODUCT:CLASS-LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/course-goods/class-list"
          },
          {
            "name": "查询月数列表",
            "key": "PRODUCT:PERIODS-LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/course-goods/class-delivery-periods"
          },
          {
            "name": "订单详情",
            "key": "ORDER:ORDER_DTETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/order/getOrderDetail"
          },
          {
            "name": "物流轨迹",
            "key": "ORDER:ORDER_TRACES",
            "type": "api",
            "authority": [],
            "path": "/api/ae/deliveryQuery/queryTraces"
          },
          {
            "name": "轮询导出xsl",
            "key": "ORDER:ORDER_LIST:EXPORTXSLData",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/order/showTask"
          },
          {
            "name": "重新同步仓库",
            "key": "ORDER:ORDER_LIST:REWAREHOUSE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/order/reSyncOrderToWarehouse"
          },
          {
            "name": "取消拦截",
            "key": "ORDER:ORDER_LIST:CANCELINTERCEPT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/order/cancelHandle"
          },
          {
            "name": "查询订单货品信息",
            "key": "ORDER_REISSUE:GOODS_DETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/reissueOrder/getGoods"
          },
          {
            "name": "合单",
            "key": "ORDER:ORDER_LIST:MERGEORDER",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/order/mergeOrder"
          },
          {
            "name": "订单导出xsl",
            "key": "ORDER:ORDER_LIST:EXPORTXSL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/order/exportOrder"
          },
          {
            "name": "创建补发单",
            "key": "ORDER:ORDER_LIST:CREATEREISSUE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/reissueOrder/createReissue"
          },
          {
            "name": "批量发货",
            "key": "ORDER:ORDER_LIST:BULKDELIVERY",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/order/bulkDelivery"
          },
          {
            "name": "转仓",
            "key": "ORDER:ORDER_LIST:SWITCHWAREHOUSE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/order/switchWarehouse"
          }
        ]
      },
      {
        "name": "补发单管理",
        "key": "ORDER:REISSUE",
        "type": "route",
        "path": "/order/reissue,/ae/deliveryInfo/allMap,/ae/reissueOrder/getReissueOrder,/ae/return-order/delete,/ae/warehouse/getWarehouseList,/ae/reissueOrder/batchCreateReissueOrder,/ae/return-order/detail,/ae/billing/detail,/ae/reissueOrder/closeReissueOrder,/ae/return-order/cancel,/ae/reissueOrder/createOldReissueOrder,/ae/order/listOrder,/ae/reissueOrder/list,/ae/return-order/search,/ae/reissueOrder/exportAddress,/ae/reissueOrder/getReissueOrderTemplate,/ae/reissueOrder/reSyncReissueOrder,/ae/phone/queryPhone",
        "authority": [],
        "ext": "{\"index\":1}",
        "children": [
          {
            "name": "补发单批量导入",
            "key": "REISSUE_ORDER:BATCH_IMPORT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/reissueOrder/batchCreateReissueOrder"
          },
          {
            "name": "获取补发单列表",
            "key": "ORDER:ORDER-MANAGE-REISSUE:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/reissueOrder/list"
          },
          {
            "name": "补发单详情",
            "key": "ORDER:REISSUE_DETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/reissueOrder/getReissueOrder"
          },
          {
            "name": "补发单重新同步",
            "key": "ORDER:REISSUE_SYNC",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/reissueOrder/reSyncReissueOrder"
          },
          {
            "name": "补发单批量取消",
            "key": "ORDER:REISSUE_CANCEL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/reissueOrder/closeReissueOrder"
          },
          {
            "name": "订单导出xsl",
            "key": "ORDER:REISSUE-ORDER:EXPORTXSL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/reissueOrder/export"
          },
          {
            "name": "创建历史补发单",
            "key": "ORDER:ORDER-MANAGE-REISSUE-OLD:CREATE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/reissueOrder/createOldReissueOrder"
          }
        ]
      },
      {
        "name": "异常订单管理",
        "key": "ORDER:ANNORMALORDER_MANAGE",
        "type": "route",
        "path": "/order/annormalOrder-manage,/ae/specialOrder/updateAddress,/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/return-order/detail,/ae/price-adjust-result/export,/ae/common/showTask,/ae/billing/detail,/ae/inventory/product/exportGoodsInventory,/ae/specialOrder/exportOrder,/ae/specialOrder/getAddress,/ae/specialOrder/retry,/ae/specialOrder/getSpecialOrderDetail,/ae/specialOrder/listSpecialOrder,/ae/specialOrder/getAddressInfo,/ae/course-goods/class-list,/ae/gift/listGift,/ae/course-goods/course-list,/ae/course-goods/class-delivery-periods",
        "authority": [],
        "ext": "{\"index\":2}",
        "children": [
          {
            "name": "异常订单列表",
            "key": "ORDER:ABNORMALORDER:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/specialOrder/listSpecialOrder"
          },
          {
            "name": "异常订单详情",
            "key": "ORDER:ABNORMAL-MANAGE:DETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/specialOrder/getSpecialOrderDetail"
          },
          {
            "name": "异常订单重新执行",
            "key": "ORDER:ORDER-RETRY:API",
            "type": "api",
            "authority": [],
            "path": "/ae/specialOrder/retry"
          },
          {
            "name": "查询订单地址",
            "key": "ORDER:ANNORMAL_ORDER:ADDRESS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/specialOrder/getAddress"
          },
          {
            "name": "异常订单导出xsl",
            "key": "ORDER:EXPORT-ANNORMAL_ORDER:API",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/specialOrder/exportOrder"
          },
          {
            "name": "地址修改",
            "key": "ORDER:UPDATE-ADDRESS:API",
            "type": "api",
            "authority": [],
            "path": "/api/erp/aae/specialOrder/updateAddress"
          }
        ]
      },
      {
        "name": "特殊发货申请",
        "key": "ORDER:SPSHIPAPP",
        "type": "route",
        "path": "/order/spShipApp,/ae/apply/delivery/listDeliveryApply,/ae/apply/delivery/create,/ae/apply/delivery/deliveryApplySwitch",
        "authority": [],
        "ext": "{\"index\":3}",
        "children": [
          {
            "name": "特殊发货申请列表",
            "key": "ORDER:SPDELIVERY:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/apply/delivery/listDeliveryApply"
          },
          {
            "name": "新建特殊发货申请",
            "key": "ORDER:CREATESPAPPLY:API",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/apply/delivery/create"
          }
        ]
      }
    ]
  },
  {
    "name": "货品管理",
    "key": "PRODUCT",
    "type": "route",
    "path": "/product",
    "authority": [],
    "ext": "{\"index\":4}",
    "icon": "apartment",
    "children": [
      {
        "name": "货品管理",
        "key": "PRODUCT:PRODUCT_MANAGE:LIST",
        "type": "route",
        "path": "/product/product-manage/list,/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/return-order/detail,/ae/price-adjust-result/export,/ae/goods/exportGoods,/ae/common/showTask,/ae/billing/detail,/ae/inventory/product/exportGoodsInventory,/ae/goods/detail,/ae/goods/delete,/ae/goods/disable,/ae/goods/enable,/ae/goods/sync,/ae/category/list,/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/ae/deliveryUserAssign/list,/ae/deliveryInfo/list,/ae/goods/list,/ae/statement/list,/ae/cost/list,/ae/statementExpenseItem/list",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": []
      },
      {
        "name": "新增商品",
        "key": "PRODUCT:PRODUCT_MANAGE:NEW",
        "type": "route",
        "path": "/product/product-manage/new,/ae/category/add,/ae/goods/detail,/ae/goods/add,/ae/category/edit,/ae/goods/edit,/ae/category/list,/ae/purchase-order/getGoods,/ae/purchase-order/listDetail,/ae/goods/search-goods,/ae/goods/list",
        "authority": [],
        "ext": "{\"index\":1}",
        "hidden": true,
        "children": [
          {
            "name": "货品详情",
            "key": "PRODUCT-NEW:DETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/goods/detail?goodsId"
          },
          {
            "name": "新建货品",
            "key": "PRODUCT-NEW:CREATE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/goods/add"
          },
          {
            "name": "编辑货品",
            "key": "PRODUCT-NEW:EDIT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/goods/edit?goodsId"
          }
        ]
      },
      {
        "name": "虚拟组套",
        "key": "PRODUCT:PRODUCT_MANAGE:VIRTUALSUIT",
        "type": "route",
        "path": "/product/product-manage/virtualSuit,/ae/goods/disable,/ae/goods/detail,/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/ae/deliveryUserAssign/list,/ae/deliveryInfo/list,/ae/goods/list,/ae/statement/list,/ae/cost/list,/ae/statementExpenseItem/list,/ae/goods/add,/ae/goods/audit,/ae/goods/delete,/ae/goods/edit,/ae/course-goods/course-list,/ae/category/list,/ae/purchase-order/getGoods,/ae/purchase-order/listDetail,/ae/goods/search-goods",
        "authority": [],
        "ext": "{\"index\":2}",
        "children": [
          {
            "name": "虚拟组套列表",
            "key": "PRODUCT-VIRTUALSUIT:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/goods/list"
          },
          {
            "name": "虚拟组套删除",
            "key": "PRODUCT-VIRTUALSUIT:DELETE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/goods/list"
          },
          {
            "name": "虚拟组套停用",
            "key": "PRODUCT-VIRTUALSUIT:DISABLE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/goods/enable"
          },
          {
            "name": "编辑虚拟组套",
            "key": "PRODUCT-VIRTUALSUIT:EDIT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/goods/edit"
          },
          {
            "name": "新建虚拟组套",
            "key": "PRODUCT-VIRTUALSUIT:CREATE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/goods/add"
          },
          {
            "name": "虚拟组套审核",
            "key": "PRODUCT-VIRTUALSUIT:AUDIT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/goods/audit"
          }
        ]
      },
      {
        "name": "内容包映射",
        "key": "PRODUCT:PRODUCT_MANAGE:SUBJECTMAP",
        "type": "route",
        "path": "/product/product-manage/subjectMap,/ae/gift/good/save,/ae/course-goods/add,/ae/return-order/delete,/ae/gift/good/delete,/ae/course-goods/delete,/ae/gift/good/stopGiftGoods,/ae/course-goods/disable,/ae/course-goods/studySegment,/ae/course-goods/list,/ae/gift/good/auditGiftGoods,/ae/course-goods/confirm,/ae/course-goods/reject,/ae/course-goods/detail,/ae/course-goods/edit,/ae/course-goods/synToWms,/ae/category/list,/ae/purchase-order/getGoods,/ae/purchase-order/listDetail,/ae/goods/search-goods,/ae/goods/list,/ae/course-goods/class-list,/ae/course-goods/course-list,/ae/course-goods/class-delivery-periods,/ae/gift/listGift",
        "authority": [],
        "ext": "{\"index\":3}",
        "children": [
          {
            "name": "内容包映射详情",
            "key": "PRODUCT:SUBJECT-DETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/course-goods/detail"
          },
          {
            "name": "删除内容包映射",
            "key": "PRODUCT-COURSE:DEL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/course-goods/delete"
          },
          {
            "name": "停用内容包映射",
            "key": "PRODUCT-COURSE:DISABLED",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/course-goods/disable"
          },
          {
            "name": "内容包映射列表",
            "key": "PRODUCT-COURSE:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/course-goods/list"
          },
          {
            "name": "新增内容包列表",
            "key": "PRODUCT:SUBJECT-ADD",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/course-goods/add"
          },
          {
            "name": "编辑内容包映射",
            "key": "PRODUCT:SUBJECT-EDIT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/course-goods/edit"
          },
          {
            "name": "审核通过",
            "key": "PRODUCT:AUDITCONFIRM-API",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/course-goods/confirm"
          },
          {
            "name": "审核驳回",
            "key": "PRODUCT:AUDITREJECT-API",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/course-goods/reject"
          },
          {
            "name": "同步仓库",
            "key": "PRODUCT:SYNCWMS-API",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/course-goods/synToWms"
          }
        ]
      },
      {
        "name": "礼包实物映射",
        "key": "PRODUCT:PRODUCT_MANAGE:GIFTENTITYMAP",
        "type": "route",
        "path": "/product/product-manage/giftEntityMap,/ae/gift/good/save,/ae/course-goods/add,/ae/return-order/delete,/ae/gift/good/delete,/ae/course-goods/delete,/ae/gift/good/stopGiftGoods,/ae/course-goods/disable,/ae/course-goods/studySegment,/ae/gift/good/getGiftGoodsInfoById,/ae/gift/good/list,/ae/gift/good/auditGiftGoods,/ae/course-goods/confirm,/ae/course-goods/reject,/ae/course-goods/edit,/ae/price-adjust/submit,/ae/return-order/submit,/ae/gift/good/submitGiftGoods,/ae/statement/audit,/ae/billing/submit,/ae/category/list,/ae/purchase-order/getGoods,/ae/purchase-order/listDetail,/ae/goods/search-goods,/ae/goods/list,/ae/course-goods/class-list,/ae/course-goods/course-list,/ae/gift/listGift,/ae/course-goods/class-delivery-periods",
        "authority": [],
        "ext": "{\"index\":4}",
        "children": [
          {
            "name": "新建礼包映射",
            "key": "GIFT-ENTITY-SUBJECT-ENABLE:ADD",
            "type": "component",
            "authority": []
          },
          {
            "name": "复制",
            "key": "GIFT-ENTITY-SUBJECT-ENABLE:COPY",
            "type": "component",
            "authority": []
          },
          {
            "name": "查看",
            "key": "GIFT-ENTITY-SUBJECT-ENABLE:DETAIL",
            "type": "component",
            "authority": []
          },
          {
            "name": "编辑",
            "key": "GIFT-ENTITY-SUBJECT-ENABLE:EDIT",
            "type": "component",
            "authority": []
          },
          {
            "name": "删除",
            "key": "GIFT-ENTITY-SUBJECT-ENABLE:DELETE",
            "type": "component",
            "authority": []
          },
          {
            "name": "审核",
            "key": "GIFT-ENTITY-SUBJECT-ENABLE:AUDIT",
            "type": "component",
            "authority": []
          },
          {
            "name": "停用",
            "key": "GIFT-ENTITY-SUBJECT-ENABLE:DISABLED",
            "type": "component",
            "authority": []
          }
        ]
      },
      {
        "name": "品类分类",
        "key": "PRODUCT:PRODUCT_MANAGE:CATEGORY",
        "type": "route",
        "path": "/product/product-manage/category,/ae/category/list,/ae/category/add,/ae/goods/add,/ae/category/edit,/ae/goods/edit",
        "authority": [],
        "ext": "{\"index\":5}",
        "children": [
          {
            "name": "新建分类",
            "key": "PRODUCT-CATEGORY:CREATE",
            "type": "api",
            "authority": [],
            "path": "/ae/category/add"
          },
          {
            "name": "编辑分类",
            "key": "PRODUCT-CATEGORY:EDIT",
            "type": "api",
            "authority": [],
            "path": "/ae/category/edit"
          }
        ]
      }
    ]
  },
  {
    "name": "库存管理",
    "key": "STOCK_MANAGE",
    "type": "route",
    "path": "/stock-manage",
    "authority": [],
    "ext": "{\"index\":5}",
    "icon": "bank",
    "children": [
      {
        "name": "货品库存管理",
        "key": "STOCK_MANAGE:PRODUCT",
        "type": "route",
        "path": "/stock-manage/product,/ae/inventory/product/listGoodsInventory,/ae/category/list,/ae/order/exportOrder,/ae/purchase-order/export,/ae/price-adjust-result/export,/ae/inventory/product/exportGoodsInventory,/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/price-adjust-result/export,/ae/common/showTask,/ae/inventory/product/exportGoodsInventory",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "货品库存订单列表",
            "key": "ORDER:STOCKPRODUCT:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/inventory/product/listGoodsInventory"
          },
          {
            "name": "货品库存导出xsl",
            "key": "STOCK:STOCK_LIST:EXPORTXSL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/inventory/product/exportGoodsInventory"
          }
        ]
      }
    ]
  },
  {
    "name": "物流管理",
    "key": "LOGISTICS_MANAGE",
    "type": "route",
    "path": "/logistics-manage",
    "authority": [],
    "ext": "{\"index\":6}",
    "icon": "car",
    "children": [
      {
        "name": "按用户指定快递",
        "key": "LOGISTICS_MANAGE:USER",
        "type": "route",
        "path": "/logistics-manage/user,/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/ae/deliveryUserAssign/list,/ae/deliveryInfo/list,/ae/deliveryInfo/allMap,/ae/return-order/delete,/ae/goods/list,/ae/statement/list,/ae/cost/list,/ae/statementExpenseItem/list,/ae/delivery/rule/createGoodsRule,/ae/deliveryUserAssign/insert,/ae/category/add,/ae/goods/add,/ae/delivery/rule/editGoodsRule,/ae/deliveryUserAssign/update,/ae/deliveryInfo/update,/ae/return-order/item/update-quantity",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": []
      },
      {
        "name": "按内容包指定快递",
        "key": "LOGISTICS_MANAGE:COURSE",
        "type": "route",
        "path": "/logistics-manage/course,/ae/deliveryCourseAssign/stop,/ae/deliveryInfo/allMap,/ae/return-order/delete,/ae/return-order/detail,/ae/billing/detail,/ae/deliveryCourseAssign/start,/ae/deliveryCourseAssign/getCourseAssignById,/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/ae/deliveryUserAssign/list,/ae/deliveryInfo/list,/ae/goods/list,/ae/statement/list,/ae/cost/list,/ae/statementExpenseItem/list,/ae/deliveryCourseAssign/save,/ae/goodsCodeAssign/save,/ae/specialOrder/getAddress,/ae/specialOrder/getAddressInfo,/ae/warehouse/getWarehouseList,/ae/course-goods/class-list,/ae/course-goods/course-list,/ae/course-goods/class-delivery-periods,/ae/gift/listGift",
        "authority": [],
        "ext": "{\"index\":1}",
        "children": [
          {
            "name": "获取内容包指定物流详情",
            "key": "LOGISTICS-COURSE-DETAIL:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/deliveryCourseAssign/getCourseAssignById"
          },
          {
            "name": "启用内容包指定物流",
            "key": "LOGISTICS-COURSE-ENABLE:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/deliveryCourseAssign/start"
          },
          {
            "name": "停用内容包指定物流",
            "key": "LOGISTICS-COURSE-DISABLE:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/deliveryCourseAssign/stop"
          },
          {
            "name": "内容包指定物流列表",
            "key": "LOGISTICS-COURSE:FETCH-LIST",
            "type": "api",
            "authority": [],
            "path": "/api/ae/deliveryCourseAssign/list"
          },
          {
            "name": "编辑新增内容包物流规则",
            "key": "LOGISTICS-COURSE-EDIT:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/deliveryCourseAssign/save"
          }
        ]
      },
      {
        "name": "按内容包指定仓库",
        "key": "LOGISTICS_MANAGE:WAREHOUSE",
        "type": "route",
        "path": "/logistics-manage/wareHouse,/ae/gift/warehouse/saveGiftWarehouse,/ae/delivery/rule/create,/ae/deliveryInfo/insert,/ae/warehouse/getWarehouseList,/ae/statementExpenseItem/saveItem,/ae/gift/warehouse/getInfoById,/ae/delivery/rule/detail,/ae/return-order/detail,/ae/billing/detail,/ae/delivery/rule/update,/ae/gift/warehouse/list,/ae/delivery/rule/list,/ae/gift/warehouse/stopGiftWarehouse,/ae/delivery/rule/disable,/ae/gift/warehouse/startGiftWarehouse,/ae/delivery/rule/enable,/ae/course-goods/class-list,/ae/course-goods/course-list,/ae/course-goods/class-delivery-periods,/ae/gift/listGift",
        "authority": [],
        "ext": "{\"index\":2}",
        "children": [
          {
            "name": "内容包指定仓库详情",
            "key": "WAREHOUSE:DETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/delivery/rule/detail"
          },
          {
            "name": "停用",
            "key": "WAREHOUSE:ENABLE",
            "type": "api",
            "authority": [],
            "path": "/api/erp//ae/delivery/rule/enable"
          },
          {
            "name": "停用",
            "key": "WAREHOUSE:DISABLE",
            "type": "api",
            "authority": [],
            "path": "/api/erp//ae/delivery/rule/disable"
          },
          {
            "name": "查询指定仓库列表",
            "key": "COURSE_WAREHOUSE:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/delivery/rule/list"
          },
          {
            "name": "创建指定仓库列表",
            "key": "COURSE_WAREHOUSE:CREATE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/delivery/rule/create"
          },
          {
            "name": "编辑指定仓库列表",
            "key": "COURSE_WAREHOUSE:EDIT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/delivery/rule/update"
          }
        ]
      },
      {
        "name": "按货品指定仓库",
        "key": "LOGISTICS_MANAGE:GOODS",
        "type": "route",
        "path": "/logistics-manage/goods,/ae/warehouse/getWarehouseList,/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/ae/deliveryUserAssign/list,/ae/deliveryInfo/list,/ae/goods/list,/ae/statement/list,/ae/cost/list,/ae/statementExpenseItem/list,/ae/delivery/rule/createGoodsRule,/ae/deliveryUserAssign/insert,/ae/category/add,/ae/goods/add,/ae/delivery/rule/editGoodsRule,/ae/deliveryUserAssign/update,/ae/deliveryInfo/update,/ae/return-order/item/update-quantity,/ae/delivery/rule/goodsRuleDetail",
        "authority": [],
        "ext": "{\"index\":3}",
        "children": [
          {
            "name": "货品指定仓库详情",
            "key": "LOGISTICS-GOODS:DETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/delivery/rule/goodsRuleDetail"
          },
          {
            "name": "货品指定快递列表",
            "key": "LOGISTICS-GOODS:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/delivery/rule/listGoodsRule"
          }
        ]
      },
      {
        "name": "按礼包指定仓库",
        "key": "LOGISTICS_MANAGE:GIFTSPECIFYWAREHOUSE",
        "type": "route",
        "path": "/logistics-manage/giftSpecifyWarehouse,/ae/gift/warehouse/saveGiftWarehouse,/ae/delivery/rule/create,/ae/deliveryInfo/insert,/ae/warehouse/getWarehouseList,/ae/statementExpenseItem/saveItem,/ae/gift/warehouse/getInfoById,/ae/delivery/rule/detail,/ae/return-order/detail,/ae/billing/detail,/ae/gift/warehouse/list,/ae/delivery/rule/list,/ae/gift/warehouse/stopGiftWarehouse,/ae/delivery/rule/disable,/ae/gift/warehouse/startGiftWarehouse,/ae/delivery/rule/enable,/ae/course-goods/course-list,/ae/gift/listGift,/ae/course-goods/class-list,/ae/course-goods/class-delivery-periods",
        "authority": [],
        "ext": "{\"index\":4}",
        "children": [
          {
            "name": "新建规则",
            "key": "GIFT-SPECIFY-WARE-ENABLE:ADD",
            "type": "component",
            "authority": []
          },
          {
            "name": "查看",
            "key": "GIFT-SPECIFY-WARE-ENABLE:DETAIL",
            "type": "component",
            "authority": []
          },
          {
            "name": "编辑",
            "key": "GIFT-SPECIFY-WARE-ENABLE:EDIT",
            "type": "component",
            "authority": []
          },
          {
            "name": "启用",
            "key": "GIFT-SPECIFY-WARE-ENABLE:ENABLE",
            "type": "component",
            "authority": []
          },
          {
            "name": "停用",
            "key": "GIFT-SPECIFY-WARE-ENABLE:DISABLED",
            "type": "component",
            "authority": []
          }
        ]
      },
      {
        "name": "按商品编码指定快递",
        "key": "LOGISTICS_MANAGE:PRODUCTCODE",
        "type": "route",
        "path": "/logistics-manage/productCode,/ae/specialOrder/getAddress,/ae/specialOrder/getAddressInfo,/ae/goodsCodeAssign/save,/ae/deliveryInfo/allMap,/ae/return-order/delete,/ae/goodsCodeAssign/validCode,/ae/goodsCodeAssign/list,/ae/goodsCodeAssign/delById,/ae/goodsCodeAssign/start,/ae/goodsCodeAssign/stop",
        "authority": [],
        "ext": "{\"index\":5}",
        "children": [
          {
            "name": "新建规则",
            "key": "PRODUCT-CODE-ENABLE:ADD",
            "type": "component",
            "authority": []
          },
          {
            "name": "查看",
            "key": "PRODUCT-CODE-ENABLE:DETAIL",
            "type": "component",
            "authority": []
          },
          {
            "name": "编辑",
            "key": "PRODUCT-CODE-ENABLE:EDIT",
            "type": "component",
            "authority": []
          },
          {
            "name": "启用",
            "key": "PRODUCT-CODE-ENABLE:ENABLE",
            "type": "component",
            "authority": []
          },
          {
            "name": "停用",
            "key": "PRODUCT-CODE-ENABLE:DISABLED",
            "type": "component",
            "authority": []
          },
          {
            "name": "复制",
            "key": "PRODUCT-CODE-ENABLE:COPY",
            "type": "component",
            "authority": []
          },
          {
            "name": "删除",
            "key": "PRODUCT-CODE-ENABLE:DEL",
            "type": "component",
            "authority": []
          }
        ]
      }
    ]
  },
  {
    "name": "采购管理",
    "key": "PROCUREMENT",
    "type": "route",
    "path": "/procurement",
    "authority": [],
    "ext": "{\"index\":7}",
    "icon": "shop",
    "children": [
      {
        "name": "供应商管理",
        "key": "PROCUREMENT:SUPPLIER",
        "type": "route",
        "path": "/procurement/supplier,/ae/return-order/detail,/ae/billing/detail,/ae/supplier/submit,/ae/billing/audit,/ae/supplier/create,/ae/supplier/financeDecline,/ae/supplier/financeSubmit,/ae/supplier/purchaseDecline,/ae/supplier/purchaseSubmit,/ae/asn/getViewById,/ae/price-adjust/getInfoById,/ae/supplier/detail,/ae/price-adjust-result/findById,/ae/price-adjust/listAuditLog,/ae/supplier/logDetail,/ae/supplier/listSupplier,/ae/supplier/listSupplierActive,/ae/supplier/list,/ae/goodsCodeAssign/stop,/ae/supplier/stopCooperation,/ae/supplier/delete,/ae/supplier/edit,/ae/supplier/synToWms,/ae/supplier/findManager",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "供应商名称列表",
            "key": "SUPPLIER:LIST_SUPPLIER",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/supplier/listSupplier"
          },
          {
            "name": "供应商详情",
            "key": "SUPPLIER:DETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/supplier/detail"
          },
          {
            "name": "创建供应商",
            "key": "SUPPLIER:CREATE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/supplier/create"
          },
          {
            "name": "编辑供应商",
            "key": "SUPPLIER:EDIT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/supplier/edit"
          },
          {
            "name": "供应商合作终止",
            "key": "SUPPLIER:STOP_COOPER",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/supplier/stopCooperation"
          },
          {
            "name": "供应商提交审核",
            "key": "SUPPLIER:SUBMIT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/supplier/submit"
          },
          {
            "name": "同步供应商仓库",
            "key": "SUPPLIER:SYNCWAREHOUSE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/supplier/synToWms"
          },
          {
            "name": "供应商列表",
            "key": "SUPPLIER:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/supplier/list"
          },
          {
            "name": "采购负责人",
            "key": "SUPPLIER:MANAGER_LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/supplier/findManager"
          },
          {
            "name": "采购审核通过",
            "key": "SUPPLIER:PURCHASE_SUBMIT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/supplier/purchaseSubmit"
          },
          {
            "name": "采购审核驳回",
            "key": "SUPPLIER:PURCHASE_REJECT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/supplier/purchaseDecline"
          },
          {
            "name": "财务审核通过",
            "key": "SUPPLIER:FINANCE_SUBMIT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/supplier/financeSubmit"
          },
          {
            "name": "财务审核驳回",
            "key": "SUPPLIER:FINANCE_REJECT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/supplier/financeDecline"
          }
        ]
      },
      {
        "name": "供应商货品管理",
        "key": "PROCUREMENT:SUPPLIERGOODS",
        "type": "route",
        "path": "/procurement/supplierGoods,/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/price-adjust-result/export,/ae/common/showTask,/ae/inventory/product/exportGoodsInventory,/ae/price-adjust/list,/ae/price-adjust-result/list,/ae/price-adjust-result/import,/ae/asn/getViewById,/ae/price-adjust/getInfoById,/ae/supplier/detail,/ae/price-adjust-result/findById,/ae/price-adjust-result/cycleEdit,/ae/purchase-order/getImportTemplateAddr,/ae/price-adjust-result/getImportTemplateAddr,/ae/price-adjust-result/exportSku,/ae/price-adjust-result/histroy,/ae/price-adjust-result/exportGoodsWeightedAveragePrice,/ae/supplier/listSupplier,/ae/supplier/findManager",
        "authority": [],
        "ext": "{\"index\":1}",
        "children": [
          {
            "name": "导出价格变动历史",
            "key": "SUPPLIER_GOODS:HISTORY_PRICE_EXPORT",
            "type": "api",
            "authority": []
          },
          {
            "name": "编辑",
            "key": "SUPPLIER_GOODS:EDIT",
            "type": "api",
            "authority": []
          },
          {
            "name": "导入模版下载",
            "key": "SUPPLIER_GOODS:TEMPLATE_DOWNLOAD",
            "type": "api",
            "authority": []
          },
          {
            "name": "批量导入",
            "key": "SUPPLIER_GOODS:GOODS_LIST_IMPORT",
            "type": "api",
            "authority": []
          },
          {
            "name": "查看货品工艺",
            "key": "SUPPLIER_GOODS:WATCH_GOODS_TECH",
            "type": "api",
            "authority": []
          },
          {
            "name": "导出（导出供应商货品）",
            "key": "SUPPLIER_GOODS:GOODS_LIST_EXPORT",
            "type": "api",
            "authority": []
          },
          {
            "name": "加权平均价导出",
            "key": "SUPPLIER_GOODS:AVERAGE_PRICE_EXPORT",
            "type": "api",
            "authority": []
          },
          {
            "name": "查看价格调整历史记录",
            "key": "SUPPLIER_GOODS:WATCH_HISTORY_ADJUST_PRICE_RECODE",
            "type": "api",
            "authority": []
          }
        ]
      },
      {
        "name": "价格调整单管理",
        "key": "PROCUREMENT:PRICEADJUSTMENT",
        "type": "route",
        "path": "/procurement/priceAdjustment,/ae/billing/audit,/ae/price-adjust/list,/ae/price-adjust-result/list,/ae/price-adjust/submit,/ae/return-order/submit,/ae/gift/good/submitGiftGoods,/ae/statement/audit,/ae/billing/submit,/ae/price-adjust/listAuditLog,/ae/asn/getViewById,/ae/price-adjust/getInfoById,/ae/supplier/detail,/ae/price-adjust-result/findById,/ae/goodsCodeAssign/save,/ae/price-adjust/saveBase,/ae/purchase-order/saveBase,/ae/price-adjust/getAdjustLetterUrl,/ae/price-adjust/delPriceAdjust,/ae/supplier/listSupplier,/ae/price-adjust/listDetailV2,/ae/price-adjust/compare', param,/ae/price-adjust/supplierGoodsInfo,/ae/purchase-order/getGoods,/ae/price-adjust/saveDetail,/ae/price-adjust/delAllDetail,/ae/price-adjust/delDetail,/ae/return-order/delete,/ae/price-adjust/editPrice,/ae/price-adjust/importDetail,/ae/price-adjust/getImportTemplateAddr,/ae/supplier/listSupplierActive,/ae/supplier/findManager",
        "authority": [],
        "ext": "{\"index\":2}",
        "children": [
          {
            "name": "价格调整单详情",
            "key": "PRICE_ADJUST:DETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/price-adjust/getInfoById"
          },
          {
            "name": "货品信息列表",
            "key": "PRICE_ADJUST_GOODS:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/price-adjust/listDetailV2"
          },
          {
            "name": "调价函下载",
            "key": "PRICE_ADJUST_GOODS:DOWNLOAD",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/price-adjust/getAdjustLetterUrl"
          },
          {
            "name": "价格调整单管理列表",
            "key": "PRICE_ADJUST:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/price-adjust/list"
          },
          {
            "name": "基础信息保存",
            "key": "PRICE_ADJUST:SAVE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/price-adjust/saveBase"
          },
          {
            "name": "价格调整单审核",
            "key": "PRICE_ADJUST:AUDIT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/price-adjust/submit"
          },
          {
            "name": "提交审核",
            "key": "PRICE_ADJUST:SUBMIT_REVIEW",
            "type": "component",
            "authority": []
          },
          {
            "name": "采购经理审批",
            "key": "PRICE_ADJUST:PURCHASE",
            "type": "component",
            "authority": []
          },
          {
            "name": "供应链总监审批",
            "key": "PRICE_ADJUST:DIRECTOR",
            "type": "component",
            "authority": []
          },
          {
            "name": "财务审批",
            "key": "PRICE_ADJUST:FIANCE",
            "type": "component",
            "authority": []
          }
        ]
      },
      {
        "name": "采购单管理",
        "key": "PROCUREMENT:PURCHASEORDER",
        "type": "route",
        "path": "/procurement/purchaseOrder,/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/price-adjust-result/export,/ae/common/showTask,/ae/inventory/product/exportGoodsInventory,/ae/warehouse/getWarehouseList,/ae/purchase-order/cancelOrder,/ae/return-order/cancel,/ae/return-order/detail,/ae/supplier/listSupplierActive,/ae/billing/detail,/ae/purchase-order/closeOrder,/ae/purchase-order/confirmOrder,/ae/purchase-order/delOrder,/ae/return-order/delete,/ae/statement/delete,/ae/purchase-order/getInfoById,/ae/purchase-order/getGoods,/ae/purchase-order/listDetail,/ae/goods/search-goods,/ae/goods/list,/ae/purchase-order/list,/ae/goodsCodeAssign/save,/ae/price-adjust/saveBase,/ae/purchase-order/saveBase,/ae/price-adjust-result/findByGoodId,/ae/price-adjust/delDetail,/ae/purchase-order/delOneDetail,/ae/purchase-order/editPurchaseCount,/ae/purchase-order/importDetail,/ae/purchase-order/addGoods,/ae/purchase-order/getImportTemplateAddr,/ae/purchase-order/validateParentOrderNo",
        "authority": [],
        "ext": "{\"index\":3}",
        "children": [
          {
            "name": "采购单详情",
            "key": "PURCHASE_ORDER_GOODS:DETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/purchase-order/getInfoById"
          },
          {
            "name": "采购单货品列表",
            "key": "PURCHASE_ORDER_GOODS:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/purchase-order/listDetail"
          },
          {
            "name": "采购单管理删除",
            "key": "PURCHASE_ORDER:DEL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/purchase-order/delOrder"
          },
          {
            "name": "采购单作废",
            "key": "PURCHASE_ORDER:CANCEL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/purchase-order/cancelOrder"
          },
          {
            "name": "采购单管理列表",
            "key": "PURCHASE_ORDER:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/purchase-order/list"
          },
          {
            "name": "采购单基础信息保存",
            "key": "PURCHASE_ORDER:SAVE_BASE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/purchase-order/saveBase"
          },
          {
            "name": "采购单确认下单",
            "key": "PURCHASE_ORDER:CONFIRM",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/purchase-order/confirmOrder"
          },
          {
            "name": "校验关联订单",
            "key": "PURCHASE_ORDER:VALIDATE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/purchase-order/validateParentOrderNo"
          }
        ]
      },
      {
        "name": "到货单管理",
        "key": "PROCUREMENT:DELIVERYORDER",
        "type": "route",
        "path": "/procurement/deliveryOrder,/ae/warehouse/getWarehouseList,/ae/asn/differenceConfirm,/ae/return-order/detail,/ae/supplier/listSupplier,/ae/billing/detail,/ae/asn/listDifferenceConfirm,/ae/asn/list,/ae/asn/getViewById,/ae/price-adjust/getInfoById,/ae/supplier/detail,/ae/price-adjust-result/findById",
        "authority": [],
        "ext": "{\"index\":4}",
        "children": [
          {
            "name": "到货单列表",
            "key": "DELIVERY_ORDER:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/asn/list"
          },
          {
            "name": "到货单详情",
            "key": "DELIVERY_ORDER:DETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/asn/getViewById"
          },
          {
            "name": "差异确认列表",
            "key": "DELIVERY_ORDER_DIFF:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/asn/listDifferenceConfirm"
          },
          {
            "name": "差异确认",
            "key": "DELIVERY_ORDER_DIFF:CONFIRM",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/asn/differenceConfirm"
          }
        ]
      },
      {
        "name": "采购退货管理",
        "key": "PROCUREMENT:PURCHASERETURN",
        "type": "route",
        "path": "/procurement/purchaseReturn,/ae/return-order/item/append,/ae/purchase-order/getGoods,/ae/purchase-order/listDetail,/ae/goods/search-goods,/ae/goods/list,/ae/return-order/create,/ae/warehouse/getWarehouseList,/ae/return-order/item/search,/ae/supplier/listSupplierActive,/ae/supplier/list,/ae/supplier/listSupplier,/ae/return-order/item/remove,/ae/return-order/submit,/ae/billing/submit,/ae/return-order/item/update-quantity,/ae/return-order/update,/ae/return-order/cancel,/ae/return-order/delete,/ae/order/listOrder,/ae/reissueOrder/list,/ae/return-order/search,/ae/return-order/detail,/ae/billing/detail",
        "authority": [],
        "ext": "{\"index\":5}",
        "children": [
          {
            "name": "查询",
            "key": "PURCHASE_RETURN:SEARCH",
            "type": "component",
            "authority": []
          },
          {
            "name": "新建采购退货单",
            "key": "PURCHASE_RETURN:ADD",
            "type": "component",
            "authority": []
          },
          {
            "name": "删除",
            "key": "PURCHASE_RETURN:DEL",
            "type": "component",
            "authority": []
          },
          {
            "name": "编辑",
            "key": "PURCHASE_RETURN:EDIT",
            "type": "component",
            "authority": []
          },
          {
            "name": "作废",
            "key": "PURCHASE_RETURN:VOID",
            "type": "component",
            "authority": []
          },
          {
            "name": "查看详情",
            "key": "PURCHASE_RETURN:WATCH",
            "type": "component",
            "authority": []
          }
        ]
      }
    ]
  },
  {
    "name": "结算管理",
    "key": "SETTLEMENT",
    "type": "route",
    "path": "/settlement",
    "authority": [],
    "ext": "{\"index\":8}",
    "icon": "shop",
    "children": [
      {
        "name": "物流费用规则管理",
        "key": "SETTLEMENT:DELIVERCOUNTRULEMANAGE",
        "type": "route",
        "path": "/settlement/deliverCountRuleManage,/ae/return-order/delete,/ae/return-order/detail,/ae/billing/detail,/ae/cost/copy,/ae/cost/showDetail,/ae/warehouse/getWarehouseList,/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/ae/deliveryUserAssign/list,/ae/deliveryInfo/list,/ae/goods/list,/ae/statement/list,/ae/cost/list,/ae/statementExpenseItem/list,/ae/goodsCodeAssign/stop,/ae/cost/disable,/ae/return-order/submit,/ae/cost/submit,/ae/billing/submit,/ae/cost/createCost,/ae/cost/create,/ae/cost/deleteCost,/ae/cost/modifyCost,/ae/cost/modify,/ae/cost/listCost,/ae/deliveryInfo/allMap,/ae/address/get-province,/ae/cost/showOperationLog",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "物流规则列表",
            "key": "DELIVER-COUNT-RULE-LIST:FETCH-LIST",
            "type": "api",
            "authority": [],
            "path": "/api/ae/cost/list"
          },
          {
            "name": "创建物流规则",
            "key": "DELIVER-COUNT-RULE-CREATE:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/cost/create"
          },
          {
            "name": "编辑物流规则",
            "key": "DELIVER-COUNT-RULE-MODIFY:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/cost/modify"
          },
          {
            "name": "复制物流规则",
            "key": "DELIVER-COUNT-RULE-COPY:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/cost/copy"
          },
          {
            "name": "物流花费规则详情",
            "key": "DELIVER-COUNT-RULE-DETAIL:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/cost/showDetail"
          },
          {
            "name": "停用物流规则",
            "key": "DELIVER-COUNT-COST-DISABLE:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/cost/disable"
          },
          {
            "name": "审批物流规则",
            "key": "DELIVER-COUNT-COST-SUBMIT:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/cost/submit"
          },
          {
            "name": "查看物流规则操作日志",
            "key": "DELIVER-COUNT-COST-VIEWLOG:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/cost/showOperationLog"
          },
          {
            "name": "物流操作费用列表",
            "key": "DELIVER-COUNT-COST-LIST:FETCH-LIST",
            "type": "api",
            "authority": [],
            "path": "/api/ae/cost/listCost"
          },
          {
            "name": "创建物流费用",
            "key": "DELIVER-COUNT-COST-CREATE:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/cost/createCost"
          },
          {
            "name": "修改物流费用",
            "key": "DELIVER-COUNT-COST-MODIFY:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/cost/modifyCost"
          },
          {
            "name": "删除物流费用",
            "key": "DELIVER-COUNT-COST-DELETE:API",
            "type": "api",
            "authority": [],
            "path": "/api/ae/cost/deleteCost"
          },
          {
            "name": "查询仓库列表",
            "key": "DELIVER-COUNT-WAREHOUSE:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/warehouse/getWarehouseList"
          },
          {
            "name": "查询省数据列表",
            "key": "DELIVER-COUNT-PROVINCES:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/ae/address/get-province"
          },
          {
            "key": "DELIVER-COUNT-RULE:DELIVER-MANAGER-AUDIT",
            "name": "物流经理审核",
            "authority": [],
            "type": "component"
          },
          {
            "key": "DELIVER-COUNT-RULE:DELIVER-MANAGER-REJECT",
            "name": "物流经理审核驳回",
            "authority": [],
            "type": "component"
          },
          {
            "key": "DELIVER-COUNT-RULE:SUPPLY-CHAIN-DIRECTOR-AUDIT",
            "name": "供应链总监审核",
            "authority": [],
            "type": "component"
          },
          {
            "key": "DELIVER-COUNT-RULE:SUPPLY-CHAIN-DIRECTOR-REJECT",
            "name": "供应链总监审核驳回",
            "authority": [],
            "type": "component"
          },
          {
            "key": "DELIVER-COUNT-RULE:FINANCIAL-FIRST-AUDIT",
            "name": "财务初审",
            "authority": [],
            "type": "component"
          },
          {
            "key": "DELIVER-COUNT-RULE:FINANCIAL-FIRST-REJECT",
            "name": "财务初审驳回",
            "authority": [],
            "type": "component"
          },
          {
            "key": "DELIVER-COUNT-RULE:FINANCIAL-REVIEW-AUDIT",
            "name": "财务复审",
            "authority": [],
            "type": "component"
          },
          {
            "key": "DELIVER-COUNT-RULE:FINANCIAL-REVIEW-REJECT",
            "name": "财务复审驳回",
            "authority": [],
            "type": "component"
          }
        ]
      },
      {
        "name": "物流对账单管理",
        "key": "SETTLEMENT:DELIVERBILLMANAGE",
        "type": "route",
        "path": "/settlement/deliverBillManage,/ae/warehouse/getWarehouseList,/ae/return-order/delete,/ae/return-order/detail,/ae/statement/create,/ae/billing/detail,/ae/purchase-order/delOrder,/ae/statement/delete,/ae/statement/printBill,/ae/billing/print,/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/ae/deliveryUserAssign/list,/ae/deliveryInfo/list,/ae/goods/list,/ae/statement/list,/ae/cost/list,/ae/statementExpenseItem/list,/ae/statement/reCompute,/ae/price-adjust/submit,/ae/return-order/submit,/ae/gift/good/submitGiftGoods,/ae/statement/audit,/ae/billing/submit,/ae/statementExpenseItem/allExpenseItem,/ae/statement/getViewById,/ae/deliveryCourseAssign/getCourseAssignById,/ae/statement/listAllExpenseOnHand,/ae/deliveryInfo/update,/ae/return-order/item/update-quantity,/ae/statement/saveExpenseOnHand,/ae/statement/deleteExpenseOnHand,/ae/statement/submit,/ae/statement/exportByExpenseId,/ae/statement/listAuditLog,/ae/statement/payCallBack,/ae/billing/payCallBack",
        "authority": [],
        "ext": "{\"index\":1}",
        "children": [
          {
            "name": "对账单列表",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:LIST",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statement/list"
          },
          {
            "name": "审批",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:AUTDIT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statement/audit"
          },
          {
            "name": "删除单条手工费用",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:DELETEEXPENSEONHAND",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statement/deleteExpenseOnHand"
          },
          {
            "name": "通过费用id导出费用详情",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:EXPORTBYEXPENSEID",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statement/exportByExpenseId"
          },
          {
            "name": "详情",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:DETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statement/getViewById"
          },
          {
            "name": "查询所有手工费用",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:LISTALLEXPENSEONHAND",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statement/listAllExpenseOnHand"
          },
          {
            "name": "付款回执",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:PAYCALLBACK",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statement/payCallBack"
          },
          {
            "name": "打印付款单",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:PRINTBILL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statement/printBill"
          },
          {
            "name": "重算账单",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:RECOMPUTE",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statement/reCompute"
          },
          {
            "name": "编辑账单手工费用",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:SAVEEXPENSEONHAND",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statement/saveExpenseOnHand"
          },
          {
            "name": "费用提交",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:SUBMIT",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statement/submit"
          },
          {
            "name": "日志",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:LOGDETAIL",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statement/listAuditLog"
          },
          {
            "name": "物流对账单明细导出轮循接口",
            "key": "SETTLEMENT-DELIVER-BILL-DETAIL:EXPORTXSLData",
            "type": "api",
            "authority": [],
            "path": "/api/ae/common/showTask"
          },
          {
            "name": "物流结算组审核",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:DELIVERAUTDIT",
            "type": "component",
            "authority": []
          },
          {
            "name": "供应链总监审核",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:SUPPLYAUTDIT",
            "type": "component",
            "authority": []
          },
          {
            "name": "财务审核",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:FINANCEAUTDIT",
            "type": "component",
            "authority": []
          },
          {
            "name": "创建账单",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:CREATEBILLORDER",
            "type": "component",
            "authority": []
          },
          {
            "name": "删除",
            "key": "SETTLEMENT-DELIVERBILLMANAGEMENT:DEL",
            "type": "component",
            "authority": []
          }
        ]
      },
      {
        "name": "采购对账单管理",
        "key": "SETTLEMENT:PURCHASEBILLMANAGE",
        "type": "route",
        "path": "/settlement/purchaseBillManage,/ae/billing/feeDetail,/ae/statement/payCallBack,/ae/billing/payCallBack,/ae/statement/printBill,/ae/billing/print,/ae/billing/list,/ae/billing/addMulFee,/ae/billing/audit,/ae/return-order/delete,/ae/billing/deleteMulFee,/ae/return-order/detail,/ae/billing/detail,/ae/billing/downloadFeeDetail,/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/price-adjust-result/export,/ae/common/showTask,/ae/inventory/product/exportGoodsInventory,/ae/billing/modifyMulFee,/ae/return-order/submit,/ae/billing/submit,/ae/supplier/listSupplierActive,/ae/supplier/list,/ae/supplier/listSupplier",
        "authority": [],
        "ext": "{\"index\":2}",
        "children": [
          {
            "name": "查询",
            "key": "PURCHASE_BILL_MANAGE:SEARCH",
            "type": "component",
            "authority": []
          },
          {
            "name": "查看详情",
            "key": "PURCHASE_BILL_MANAGE:WATCH",
            "type": "component",
            "authority": []
          },
          {
            "name": "打印付款审批单",
            "key": "PURCHASE_BILL_MANAGE:PRINT",
            "type": "component",
            "authority": []
          },
          {
            "name": "付款回执",
            "key": "PURCHASE_BILL_MANAGE:PAYMENT_RECEIPT",
            "type": "component",
            "authority": []
          }
        ]
      },
      {
        "name": "手工费用项管理",
        "key": "SETTLEMENT:HANDCOSTMANAGE",
        "type": "route",
        "path": "/settlement/handCostManage,/ae/deliveryCourseAssign/list,/ae/delivery/rule/listGoodsRule,/ae/deliveryUserAssign/list,/ae/deliveryInfo/list,/ae/goods/list,/ae/statement/list,/ae/cost/list,/ae/statementExpenseItem/list,/ae/gift/warehouse/saveGiftWarehouse,/ae/delivery/rule/create,/ae/deliveryInfo/insert,/ae/statementExpenseItem/saveItem,/ae/statementExpenseItem/deleteItem",
        "authority": [],
        "ext": "{\"index\":3}",
        "children": [
          {
            "name": "手工费用项列表查询",
            "key": "SETTLEMENT-HANDCOST-LIST:API",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statementExpenseItem/list"
          },
          {
            "name": "手工费用项新增",
            "key": "SETTLEMENT-HANDCOST-ITEM-ADD:API",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statementExpenseItem/saveItem"
          },
          {
            "name": "手工费用项删除",
            "key": "SETTLEMENT-HANDCOST-ITEM-DELETE:API",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/statementExpenseItem/deleteItem"
          }
        ]
      },
      {
        "name": "待结算订单管理",
        "key": "SETTLEMENT:PENDINGBILLMANAGE",
        "type": "route",
        "path": "/settlement/pendingBillManage,/ae/waitSettleBilling/billedMoney,/ae/waitSettleBilling/billingMoney,/ae/waitSettleBilling/list,/ae/waitSettleBilling/countData,/ae/waitSettleBilling/createBilling,/ae/supplier/listSupplierActive,/ae/supplier/list,/ae/supplier/listSupplier",
        "authority": [],
        "ext": "{\"index\":4}",
        "children": [
          {
            "name": "创建预付款账单",
            "key": "PENDING_BILL_MANAGE:CREATE",
            "type": "component",
            "authority": []
          }
        ]
      },
      {
        "name": "调拨明细-寄售",
        "key": "SETTLEMENT:TRANSFERDETAILSCONSIGNMENT",
        "type": "route",
        "path": "/settlement/transferDetailsConsignment,/ae/billing/transfer/list,/ae/billing/transfer/statistics,/ae/supplier/listSupplierActive,/ae/supplier/list,/ae/supplier/listSupplier,/ae/warehouse/getWarehouseList",
        "authority": [],
        "ext": "{\"index\":5}",
        "children": []
      }
    ]
  },
  {
    "name": "客户信息管理",
    "key": "CRS_MESSAGE_MANAGE",
    "type": "route",
    "path": "/crs-message-manage",
    "authority": [],
    "ext": "{\"index\":9}",
    "icon": "bank",
    "children": [
      {
        "name": "客户信息日志查询",
        "key": "CRS_MESSAGE_MANAGE:CRS_MESSAGE_LOG",
        "type": "route",
        "path": "/crs-message-manage/crs-message-log,/ae/phoneView/listPhoneView,/ae/goodsCodeAssign/list,/ae/phoneView/listViewDetail,/ae/phoneView/listAllDept",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "查看",
            "key": "CRS-MESSAGE-LOG:DETAIL",
            "type": "component",
            "authority": []
          }
        ]
      }
    ]
  },
  {
    "name": "报表管理",
    "key": "REPORT_MANAGE",
    "type": "route",
    "path": "/report-manage",
    "authority": [],
    "ext": "{\"index\":10}",
    "icon": "bank",
    "children": [
      {
        "name": "进销汇存总表",
        "key": "REPORT_MANAGE:REMITDEPOSIT",
        "type": "route",
        "path": "/report-manage/remitDeposit,/ae/goodsCodeAssign/list,/ae/invoicing/list,/ae/warehouse/getWarehouseList,/ae/invoicing/export,/ae/order/exportOrder,/ae/order/showTask,/ae/purchase-order/export,/ae/price-adjust-result/export,/ae/common/showTask,/ae/inventory/product/exportGoodsInventory",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "查询",
            "key": "REMIT-DEPOSIT:SEARCH",
            "type": "component",
            "authority": [],
            "path": "/api/erp/ae/invoicing/list"
          },
          {
            "name": "导出",
            "key": "REMIT-DEPOSIT:EXPORT",
            "type": "component",
            "authority": [],
            "path": "/api/erp/ae/invoicing/export,/api/erp/ae/order/showTask"
          },
          {
            "name": "仓库列表",
            "key": "REMIT-DEPOSIT:WARELIST",
            "type": "component",
            "authority": [],
            "path": "/api/erp/ae/warehouse/getWarehouseList"
          }
        ]
      }
    ]
  }
]