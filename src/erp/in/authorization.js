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
        "path": "/merchant-manage/deliveryCpy-manage",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "快递公司管理接口权限（必选）",
            "key": "MERCHANT_MANAGE:DELIVERYCPY_MANAGE_APIS",
            "type": "api",
            "authority": [],
            "path": "/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/admin-api/delivery/api/ae/deliveryInfo/allMap,/api/erp/ae/gift/warehouse/saveGiftWarehouse,/api/erp/ae/delivery/rule/create,/admin-api/delivery/api/ae/deliveryInfo/insert,/api/erp/ae/statementExpenseItem/saveItem,/admin-api/delivery/api/ae/deliveryInfo/update,/api/erp/ae/return-order/item/update-quantity,/admin-api/delivery/api/ae/deliveryInfo/validateDuplicate"
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
        "path": "/order/order-manage",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "订单管理接口权限（必选）",
            "key": "ORDER:ORDER_MANAGE_APIS",
            "type": "api",
            "authority": [],
            "path": "/admin-api/delivery/api/ae/deliveryInfo/allMap,/api/erp/ae/order/bulkDelivery,/api/erp/ae/return-order/delete,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/api/erp/ae/order/cancelHandle,/api/erp/ae/return-order/cancel,/api/erp/ae/reissueOrder/createReissue,/api/erp/ae/order/exportOrder,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/order/showTask,/api/ae/common/showTask,/admin-api/delivery/api/ae/deliveryQuery/queryDeliveryTracesNew,/api/erp/ae/order/mergeOrder,/api/erp/ae/order/getOrderDetail,/api/erp/ae/order/listOrder,/api/erp/ae/reissueOrder/list,/api/erp/ae/return-order/search,/api/erp/ae/reissueOrder/getGoods,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/order/reSyncOrderToWarehouse,/api/erp/ae/order/switchWarehouse,/api/erp/ae/phone/queryPhone,/api/erp/ae/specialOrder/getAddress,/api/erp/ae/specialOrder/getAddressInfo,/api/erp/ae/goods/detail,/api/erp/ae/course-goods/class-list,/api/erp/ae/gift/listGift,/api/erp/ae/course-goods/course-list,/api/erp/ae/course-goods/class-delivery-periods"
          }
        ]
      },
      {
        "name": "补发单管理",
        "key": "ORDER:REISSUE",
        "type": "route",
        "path": "/order/reissue",
        "authority": [],
        "ext": "{\"index\":1}",
        "children": [
          {
            "name": "补发单管理接口权限（必选）",
            "key": "ORDER:REISSUE_APIS",
            "type": "api",
            "authority": [],
            "path": "/admin-api/delivery/api/ae/deliveryInfo/allMap,/api/erp/ae/reissueOrder/getReissueOrder,/api/erp/ae/return-order/delete,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/reissueOrder/batchCreateReissueOrder,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/api/erp/ae/reissueOrder/closeReissueOrder,/api/erp/ae/return-order/cancel,/api/erp/ae/reissueOrder/createOldReissueOrder,/api/erp/ae/order/listOrder,/api/erp/ae/reissueOrder/list,/api/erp/ae/return-order/search,/api/erp/ae/reissueOrder/exportAddress,/api/erp/ae/reissueOrder/getReissueOrderTemplate,/api/erp/ae/reissueOrder/reSyncReissueOrder,/api/erp/ae/phone/queryPhone"
          }
        ]
      },
      {
        "name": "异常订单管理",
        "key": "ORDER:ANNORMALORDER_MANAGE",
        "type": "route",
        "path": "/order/annormalOrder-manage",
        "authority": [],
        "ext": "{\"index\":2}",
        "children": [
          {
            "name": "异常订单管理接口权限（必选）",
            "key": "ORDER:ANNORMALORDER_MANAGE_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/specialOrder/updateAddress,/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/return-order/detail,/api/erp/ae/price-adjust-result/export,/api/ae/common/showTask,/api/erp/ae/billing/detail,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/specialOrder/exportOrder,/api/erp/ae/specialOrder/getAddress,/api/erp/ae/specialOrder/retry,/api/erp/ae/specialOrder/getSpecialOrderDetail,/api/erp/ae/specialOrder/listSpecialOrder,/api/erp/ae/specialOrder/getAddressInfo,/api/erp/ae/course-goods/class-list,/api/erp/ae/gift/listGift,/api/erp/ae/course-goods/course-list,/api/erp/ae/course-goods/class-delivery-periods"
          }
        ]
      },
      {
        "name": "特殊发货申请",
        "key": "ORDER:SPSHIPAPP",
        "type": "route",
        "path": "/order/spShipApp",
        "authority": [],
        "ext": "{\"index\":3}",
        "children": [
          {
            "name": "特殊发货申请接口权限（必选）",
            "key": "ORDER:SPSHIPAPP_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/apply/delivery/listDeliveryApply,/api/erp/ae/apply/delivery/create,/api/erp/ae/apply/delivery/deliveryApplySwitch"
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
        "name": "货品信息管理",
        "key": "PRODUCT:PRODUCT_MANAGE",
        "type": "route",
        "path": "/product/product-manage",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "货品信息管理接口权限（必选）",
            "key": "PRODUCT:PRODUCT_MANAGE_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/return-order/detail,/api/erp/ae/price-adjust-result/export,/api/erp/ae/goods/exportGoods,/api/ae/common/showTask,/api/erp/ae/billing/detail,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/goods/detail,/api/erp/ae/goods/delete,/api/erp/ae/goods/disable,/api/erp/ae/goods/enable,/api/erp/ae/goods/sync,/api/erp/ae/category/list,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list"
          },
          {
            "name": "商品编辑",
            "key": "PRODUCT-ENABLE:EDIT",
            "type": "component",
            "authority": []
          }
        ]
      },
      {
        "name": "新增商品",
        "key": "PRODUCT:PRODUCT_MANAGE:NEW",
        "type": "route",
        "path": "/product/product-manage/new",
        "authority": [],
        "ext": "{\"index\":1}",
        "hidden": true,
        "children": [
          {
            "name": "新增商品接口权限（必选）",
            "key": "PRODUCT:PRODUCT_MANAGE:NEW_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/category/add,/api/erp/ae/goods/detail,/api/erp/ae/goods/add,/api/erp/ae/category/edit,/api/erp/ae/goods/edit,/api/erp/ae/category/list,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/purchase-order/listDetail,/api/erp/ae/goods/search-goods,/api/erp/ae/goods/list"
          }
        ]
      },
      {
        "name": "虚拟组套",
        "key": "PRODUCT:PRODUCT_MANAGE:VIRTUALSUIT",
        "type": "route",
        "path": "/product/product-manage/virtualSuit",
        "authority": [],
        "ext": "{\"index\":2}",
        "children": [
          {
            "name": "虚拟组套接口权限（必选）",
            "key": "PRODUCT:PRODUCT_MANAGE:VIRTUALSUIT_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/goods/disable,/api/erp/ae/goods/detail,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/erp/ae/goods/add,/api/erp/ae/goods/audit,/api/erp/ae/goods/delete,/api/erp/ae/goods/edit,/api/erp/ae/course-goods/course-list,/api/erp/ae/category/list,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/purchase-order/listDetail,/api/erp/ae/goods/search-goods"
          }
        ]
      },
      {
        "name": "内容包映射",
        "key": "PRODUCT:PRODUCT_MANAGE:SUBJECTMAP",
        "type": "route",
        "path": "/product/product-manage/subjectMap",
        "authority": [],
        "ext": "{\"index\":3}",
        "children": [
          {
            "name": "内容包映射接口权限（必选）",
            "key": "PRODUCT:PRODUCT_MANAGE:SUBJECTMAP_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/gift/good/save,/api/erp/ae/course-goods/add,/api/erp/ae/return-order/delete,/api/erp/ae/gift/good/delete,/api/erp/ae/course-goods/delete,/api/erp/ae/gift/good/stopGiftGoods,/api/erp/ae/course-goods/disable,/api/erp/ae/course-goods/studySegment,/api/erp/ae/course-goods/list,/api/erp/ae/gift/good/auditGiftGoods,/api/erp/ae/course-goods/confirm,/api/erp/ae/course-goods/reject,/api/erp/ae/course-goods/detail,/api/erp/ae/course-goods/edit,/api/erp/ae/course-goods/synToWms,/api/erp/ae/category/list,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/purchase-order/listDetail,/api/erp/ae/goods/search-goods,/api/erp/ae/goods/list,/api/erp/ae/course-goods/class-list,/api/erp/ae/course-goods/course-list,/api/erp/ae/course-goods/class-delivery-periods,/api/erp/ae/gift/listGift"
          }
        ]
      },
      {
        "name": "礼包实物映射",
        "key": "PRODUCT:PRODUCT_MANAGE:GIFTENTITYMAP",
        "type": "route",
        "path": "/product/product-manage/giftEntityMap",
        "authority": [],
        "ext": "{\"index\":4}",
        "children": [
          {
            "name": "礼包实物映射接口权限（必选）",
            "key": "PRODUCT:PRODUCT_MANAGE:GIFTENTITYMAP_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/gift/good/save,/api/erp/ae/course-goods/add,/api/erp/ae/return-order/delete,/api/erp/ae/gift/good/delete,/api/erp/ae/course-goods/delete,/api/erp/ae/gift/good/stopGiftGoods,/api/erp/ae/course-goods/disable,/api/erp/ae/course-goods/studySegment,/api/erp/ae/gift/good/getGiftGoodsInfoById,/api/erp/ae/gift/good/list,/api/erp/ae/gift/good/auditGiftGoods,/api/erp/ae/course-goods/confirm,/api/erp/ae/course-goods/reject,/api/erp/ae/course-goods/edit,/api/erp/ae/price-adjust/submit,/api/erp/ae/return-order/submit,/api/erp/ae/gift/good/submitGiftGoods,/api/erp/ae/statement/audit,/api/erp/ae/billing/submit,/api/erp/ae/category/list,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/purchase-order/listDetail,/api/erp/ae/goods/search-goods,/api/erp/ae/goods/list,/api/erp/ae/course-goods/class-list,/api/erp/ae/course-goods/course-list,/api/erp/ae/gift/listGift,/api/erp/ae/course-goods/class-delivery-periods"
          },
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
        "path": "/product/product-manage/category",
        "authority": [],
        "ext": "{\"index\":5}",
        "children": [
          {
            "name": "品类分类接口权限（必选）",
            "key": "PRODUCT:PRODUCT_MANAGE:CATEGORY_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/category/list,/api/erp/ae/category/add,/api/erp/ae/goods/add,/api/erp/ae/category/edit,/api/erp/ae/goods/edit"
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
        "path": "/stock-manage/product",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "货品库存管理接口权限（必选）",
            "key": "STOCK_MANAGE:PRODUCT_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/inventory/product/listGoodsInventory,/api/erp/ae/category/list,/api/erp/ae/order/exportOrder,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/ae/common/showTask,/api/erp/ae/inventory/product/exportGoodsInventory"
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
        "path": "/logistics-manage/user",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "按用户指定快递接口权限（必选）",
            "key": "LOGISTICS_MANAGE:USER_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/delivery/rule/createGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/insert,/admin-api/delivery/api/ae/deliveryInfo/allMap,/api/erp/ae/return-order/delete,/api/erp/ae/category/add,/api/erp/ae/goods/add,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/erp/ae/delivery/rule/editGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/update,/admin-api/delivery/api/ae/deliveryInfo/update,/api/erp/ae/return-order/item/update-quantity"
          }
        ]
      },
      {
        "name": "按内容包指定快递",
        "key": "LOGISTICS_MANAGE:COURSE",
        "type": "route",
        "path": "/logistics-manage/course",
        "authority": [],
        "ext": "{\"index\":1}",
        "children": [
          {
            "name": "按内容包指定快递接口权限（必选）",
            "key": "LOGISTICS_MANAGE:COURSE_APIS",
            "type": "api",
            "authority": [],
            "path": "/admin-api/delivery/api/ae/deliveryCourseAssign/stop,/admin-api/delivery/api/ae/deliveryInfo/allMap,/api/erp/ae/return-order/delete,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/admin-api/delivery/api/ae/deliveryCourseAssign/start,/admin-api/delivery/api/ae/deliveryCourseAssign/getCourseAssignById,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/admin-api/delivery/api/ae/deliveryCourseAssign/save,/api/erp/ae/goodsCodeAssign/save,/api/erp/ae/specialOrder/getAddress,/api/erp/ae/specialOrder/getAddressInfo,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/course-goods/class-list,/api/erp/ae/course-goods/course-list,/api/erp/ae/course-goods/class-delivery-periods,/api/erp/ae/gift/listGift"
          }
        ]
      },
      {
        "name": "按内容包指定仓库",
        "key": "LOGISTICS_MANAGE:WAREHOUSE",
        "type": "route",
        "path": "/logistics-manage/wareHouse",
        "authority": [],
        "ext": "{\"index\":2}",
        "children": [
          {
            "name": "按内容包指定仓库接口权限（必选）",
            "key": "LOGISTICS_MANAGE:WAREHOUSE_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/gift/warehouse/saveGiftWarehouse,/api/erp/ae/delivery/rule/create,/admin-api/delivery/api/ae/deliveryInfo/insert,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/statementExpenseItem/saveItem,/api/erp/ae/gift/warehouse/getInfoById,/api/erp/ae/delivery/rule/detail,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/api/erp/ae/delivery/rule/update,/api/erp/ae/gift/warehouse/list,/api/erp/ae/delivery/rule/list,/api/erp/ae/gift/warehouse/stopGiftWarehouse,/api/erp/ae/delivery/rule/disable,/api/erp/ae/gift/warehouse/startGiftWarehouse,/api/erp/ae/delivery/rule/enable,/api/erp/ae/course-goods/class-list,/api/erp/ae/course-goods/course-list,/api/erp/ae/course-goods/class-delivery-periods,/api/erp/ae/gift/listGift"
          }
        ]
      },
      {
        "name": "按货品指定仓库",
        "key": "LOGISTICS_MANAGE:GOODS",
        "type": "route",
        "path": "/logistics-manage/goods",
        "authority": [],
        "ext": "{\"index\":3}",
        "children": [
          {
            "name": "按货品指定仓库接口权限（必选）",
            "key": "LOGISTICS_MANAGE:GOODS_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/warehouse/getWarehouseList,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/erp/ae/delivery/rule/createGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/insert,/api/erp/ae/category/add,/api/erp/ae/goods/add,/api/erp/ae/delivery/rule/editGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/update,/admin-api/delivery/api/ae/deliveryInfo/update,/api/erp/ae/return-order/item/update-quantity,/api/erp/ae/delivery/rule/goodsRuleDetail"
          }
        ]
      },
      {
        "name": "按礼包指定仓库",
        "key": "LOGISTICS_MANAGE:GIFTSPECIFYWAREHOUSE",
        "type": "route",
        "path": "/logistics-manage/giftSpecifyWarehouse",
        "authority": [],
        "ext": "{\"index\":4}",
        "children": [
          {
            "name": "按礼包指定仓库接口权限（必选）",
            "key": "LOGISTICS_MANAGE:GIFTSPECIFYWAREHOUSE_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/gift/warehouse/saveGiftWarehouse,/api/erp/ae/delivery/rule/create,/admin-api/delivery/api/ae/deliveryInfo/insert,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/statementExpenseItem/saveItem,/api/erp/ae/gift/warehouse/getInfoById,/api/erp/ae/delivery/rule/detail,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/api/erp/ae/gift/warehouse/list,/api/erp/ae/delivery/rule/list,/api/erp/ae/gift/warehouse/stopGiftWarehouse,/api/erp/ae/delivery/rule/disable,/api/erp/ae/gift/warehouse/startGiftWarehouse,/api/erp/ae/delivery/rule/enable,/api/erp/ae/course-goods/course-list,/api/erp/ae/gift/listGift,/api/erp/ae/course-goods/class-list,/api/erp/ae/course-goods/class-delivery-periods"
          },
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
        "path": "/logistics-manage/productCode",
        "authority": [],
        "ext": "{\"index\":5}",
        "children": [
          {
            "name": "按商品编码指定快递接口权限（必选）",
            "key": "LOGISTICS_MANAGE:PRODUCTCODE_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/specialOrder/getAddress,/api/erp/ae/specialOrder/getAddressInfo,/api/erp/ae/goodsCodeAssign/save,/admin-api/delivery/api/ae/deliveryInfo/allMap,/api/erp/ae/return-order/delete,/api/erp/ae/goodsCodeAssign/validCode,/api/erp/ae/goodsCodeAssign/list,/api/erp/ae/goodsCodeAssign/delById,/api/erp/ae/goodsCodeAssign/start,/api/erp/ae/goodsCodeAssign/stop"
          },
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
        "path": "/procurement/supplier",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "供应商管理接口权限（必选）",
            "key": "PROCUREMENT:SUPPLIER_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/api/erp/ae/supplier/submit,/api/erp/ae/billing/audit,/api/erp/ae/supplier/create,/api/erp/ae/supplier/financeDecline,/api/erp/ae/supplier/financeSubmit,/api/erp/ae/supplier/purchaseDecline,/api/erp/ae/supplier/purchaseSubmit,/api/erp/ae/asn/getViewById,/api/erp/ae/price-adjust/getInfoById,/api/erp/ae/supplier/detail,/api/erp/ae/price-adjust-result/findById,/api/erp/ae/price-adjust/listAuditLog,/api/erp/ae/supplier/logDetail,/api/erp/ae/supplier/listSupplier,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/supplier/list,/api/erp/ae/goodsCodeAssign/stop,/api/erp/ae/supplier/stopCooperation,/api/erp/ae/supplier/delete,/api/erp/ae/supplier/edit,/api/erp/ae/supplier/synToWms,/api/erp/ae/supplier/findManager"
          }
        ]
      },
      {
        "name": "供应商货品管理",
        "key": "PROCUREMENT:SUPPLIERGOODS",
        "type": "route",
        "path": "/procurement/supplierGoods",
        "authority": [],
        "ext": "{\"index\":1}",
        "children": [
          {
            "name": "供应商货品管理接口权限（必选）",
            "key": "PROCUREMENT:SUPPLIERGOODS_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/ae/common/showTask,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/price-adjust/list,/api/erp/ae/price-adjust-result/list,/api/erp/ae/price-adjust-result/import,/api/erp/ae/asn/getViewById,/api/erp/ae/price-adjust/getInfoById,/api/erp/ae/supplier/detail,/api/erp/ae/price-adjust-result/findById,/api/erp/ae/price-adjust-result/cycleEdit,/api/erp/ae/purchase-order/getImportTemplateAddr,/api/erp/ae/price-adjust-result/getImportTemplateAddr,/api/erp/ae/price-adjust-result/exportSku,/api/erp/ae/price-adjust-result/histroy,/api/erp/ae/price-adjust-result/exportGoodsWeightedAveragePrice,/api/erp/ae/supplier/listSupplier,/api/erp/ae/supplier/findManager"
          }
        ]
      },
      {
        "name": "价格调整单管理",
        "key": "PROCUREMENT:PRICEADJUSTMENT",
        "type": "route",
        "path": "/procurement/priceAdjustment",
        "authority": [],
        "ext": "{\"index\":2}",
        "children": [
          {
            "name": "价格调整单管理接口权限（必选）",
            "key": "PROCUREMENT:PRICEADJUSTMENT_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/billing/audit,/api/erp/ae/price-adjust/list,/api/erp/ae/price-adjust-result/list,/api/erp/ae/price-adjust/submit,/api/erp/ae/return-order/submit,/api/erp/ae/gift/good/submitGiftGoods,/api/erp/ae/statement/audit,/api/erp/ae/billing/submit,/api/erp/ae/price-adjust/listAuditLog,/api/erp/ae/asn/getViewById,/api/erp/ae/price-adjust/getInfoById,/api/erp/ae/supplier/detail,/api/erp/ae/price-adjust-result/findById,/api/erp/ae/goodsCodeAssign/save,/api/erp/ae/price-adjust/saveBase,/api/erp/ae/purchase-order/saveBase,/api/erp/ae/price-adjust/getAdjustLetterUrl,/api/erp/ae/price-adjust/delPriceAdjust,/api/erp/ae/supplier/listSupplier,/api/erp/ae/price-adjust/listDetailV2,/api/erp/ae/price-adjust/compare,/api/erp/ae/price-adjust/supplierGoodsInfo,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/price-adjust/saveDetail,/api/erp/ae/price-adjust/delAllDetail,/api/erp/ae/price-adjust/delDetail,/api/erp/ae/return-order/delete,/api/erp/ae/price-adjust/editPrice,/api/erp/ae/price-adjust/importDetail,/api/erp/ae/price-adjust/getImportTemplateAddr,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/supplier/findManager"
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
        "path": "/procurement/purchaseOrder",
        "authority": [],
        "ext": "{\"index\":3}",
        "children": [
          {
            "name": "采购单管理接口权限（必选）",
            "key": "PROCUREMENT:PURCHASEORDER_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/ae/common/showTask,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/purchase-order/cancelOrder,/api/erp/ae/return-order/cancel,/api/erp/ae/return-order/detail,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/billing/detail,/api/erp/ae/purchase-order/closeOrder,/api/erp/ae/purchase-order/confirmOrder,/api/erp/ae/purchase-order/delOrder,/api/erp/ae/return-order/delete,/api/erp/ae/statement/delete,/api/erp/ae/purchase-order/getInfoById,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/purchase-order/listDetail,/api/erp/ae/goods/search-goods,/api/erp/ae/goods/list,/api/erp/ae/purchase-order/list,/api/erp/ae/goodsCodeAssign/save,/api/erp/ae/price-adjust/saveBase,/api/erp/ae/purchase-order/saveBase,/api/erp/ae/price-adjust-result/findByGoodId,/api/erp/ae/price-adjust/delDetail,/api/erp/ae/purchase-order/delOneDetail,/api/erp/ae/purchase-order/editPurchaseCount,/api/erp/ae/purchase-order/importDetail,/api/erp/ae/purchase-order/addGoods,/api/erp/ae/purchase-order/getImportTemplateAddr,/api/erp/ae/purchase-order/validateParentOrderNo"
          }
        ]
      },
      {
        "name": "到货单管理",
        "key": "PROCUREMENT:DELIVERYORDER",
        "type": "route",
        "path": "/procurement/deliveryOrder",
        "authority": [],
        "ext": "{\"index\":4}",
        "children": [
          {
            "name": "到货单管理接口权限（必选）",
            "key": "PROCUREMENT:DELIVERYORDER_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/asn/differenceConfirm,/api/erp/ae/return-order/detail,/api/erp/ae/supplier/listSupplier,/api/erp/ae/billing/detail,/api/erp/ae/asn/listDifferenceConfirm,/api/erp/ae/asn/list,/api/erp/ae/asn/getViewById,/api/erp/ae/price-adjust/getInfoById,/api/erp/ae/supplier/detail,/api/erp/ae/price-adjust-result/findById"
          }
        ]
      },
      {
        "name": "采购退货管理",
        "key": "PROCUREMENT:PURCHASERETURN",
        "type": "route",
        "path": "/procurement/purchaseReturn",
        "authority": [],
        "ext": "{\"index\":5}",
        "children": [
          {
            "name": "采购退货管理接口权限（必选）",
            "key": "PROCUREMENT:PURCHASERETURN_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/return-order/item/append,/api/erp/ae/purchase-order/getGoods,/api/erp/ae/purchase-order/listDetail,/api/erp/ae/goods/search-goods,/api/erp/ae/goods/list,/api/erp/ae/return-order/create,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/return-order/item/search,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/supplier/list,/api/erp/ae/supplier/listSupplier,/api/erp/ae/return-order/item/remove,/api/erp/ae/return-order/submit,/api/erp/ae/billing/submit,/api/erp/ae/return-order/item/update-quantity,/api/erp/ae/return-order/update,/api/erp/ae/return-order/cancel,/api/erp/ae/return-order/delete,/api/erp/ae/order/listOrder,/api/erp/ae/reissueOrder/list,/api/erp/ae/return-order/search,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail"
          },
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
        "path": "/settlement/deliverCountRuleManage",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "物流费用规则管理接口权限（必选）",
            "key": "SETTLEMENT:DELIVERCOUNTRULEMANAGE_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/return-order/delete,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/admin-api/delivery/api/ae/cost/copy,/admin-api/delivery/api/ae/cost/showDetail,/api/erp/ae/warehouse/getWarehouseList,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/erp/ae/goodsCodeAssign/stop,/admin-api/delivery/api/ae/cost/disable,/api/erp/ae/return-order/submit,/admin-api/delivery/api/ae/cost/submit,/api/erp/ae/billing/submit,/admin-api/delivery/api/ae/cost/createCost,/admin-api/delivery/api/ae/cost/create,/admin-api/delivery/api/ae/cost/deleteCost,/admin-api/delivery/api/ae/cost/modifyCost,/admin-api/delivery/api/ae/cost/modify,/admin-api/delivery/api/ae/cost/listCost,/admin-api/delivery/api/ae/deliveryInfo/allMap,/admin-api/order/api/ae/address/get-province,/admin-api/delivery/api/ae/cost/showOperationLog"
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
        "path": "/settlement/deliverBillManage",
        "authority": [],
        "ext": "{\"index\":1}",
        "children": [
          {
            "name": "物流对账单管理接口权限（必选）",
            "key": "SETTLEMENT:DELIVERBILLMANAGE_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/return-order/delete,/api/erp/ae/return-order/detail,/api/erp/ae/statement/create,/api/erp/ae/billing/detail,/api/erp/ae/purchase-order/delOrder,/api/erp/ae/statement/delete,/api/erp/ae/statement/printBill,/api/erp/ae/billing/print,/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/erp/ae/statement/reCompute,/api/erp/ae/price-adjust/submit,/api/erp/ae/return-order/submit,/api/erp/ae/gift/good/submitGiftGoods,/api/erp/ae/statement/audit,/api/erp/ae/billing/submit,/api/erp/ae/statementExpenseItem/allExpenseItem,/api/erp/ae/statement/getViewById,/admin-api/delivery/api/ae/deliveryCourseAssign/getCourseAssignById,/api/erp/ae/statement/listAllExpenseOnHand,/admin-api/delivery/api/ae/deliveryInfo/update,/api/erp/ae/return-order/item/update-quantity,/api/erp/ae/statement/saveExpenseOnHand,/api/erp/ae/statement/deleteExpenseOnHand,/api/erp/ae/statement/submit,/api/erp/ae/statement/exportByExpenseId,/api/erp/ae/statement/listAuditLog,/api/erp/ae/statement/payCallBack,/api/erp/ae/billing/payCallBack"
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
        "path": "/settlement/purchaseBillManage",
        "authority": [],
        "ext": "{\"index\":2}",
        "children": [
          {
            "name": "采购对账单管理接口权限（必选）",
            "key": "SETTLEMENT:PURCHASEBILLMANAGE_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/billing/feeDetail,/api/erp/ae/statement/payCallBack,/api/erp/ae/billing/payCallBack,/api/erp/ae/statement/printBill,/api/erp/ae/billing/print,/api/erp/ae/billing/list,/api/erp/ae/billing/addMulFee,/api/erp/ae/billing/audit,/api/erp/ae/return-order/delete,/api/erp/ae/billing/deleteMulFee,/api/erp/ae/return-order/detail,/api/erp/ae/billing/detail,/api/erp/ae/billing/downloadFeeDetail,/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/ae/common/showTask,/api/erp/ae/inventory/product/exportGoodsInventory,/api/erp/ae/billing/modifyMulFee,/api/erp/ae/return-order/submit,/api/erp/ae/billing/submit,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/supplier/list,/api/erp/ae/supplier/listSupplier"
          },
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
        "path": "/settlement/handCostManage",
        "authority": [],
        "ext": "{\"index\":3}",
        "children": [
          {
            "name": "手工费用项管理接口权限（必选）",
            "key": "SETTLEMENT:HANDCOSTMANAGE_APIS",
            "type": "api",
            "authority": [],
            "path": "/admin-api/delivery/api/ae/deliveryCourseAssign/list,/api/erp/ae/delivery/rule/listGoodsRule,/admin-api/delivery/api/ae/deliveryUserAssign/list,/admin-api/delivery/api/ae/deliveryInfo/list,/api/erp/ae/goods/list,/api/erp/ae/statement/list,/admin-api/delivery/api/ae/cost/list,/api/erp/ae/statementExpenseItem/list,/api/erp/ae/gift/warehouse/saveGiftWarehouse,/api/erp/ae/delivery/rule/create,/admin-api/delivery/api/ae/deliveryInfo/insert,/api/erp/ae/statementExpenseItem/saveItem,/api/erp/ae/statementExpenseItem/deleteItem"
          }
        ]
      },
      {
        "name": "待结算订单管理",
        "key": "SETTLEMENT:PENDINGBILLMANAGE",
        "type": "route",
        "path": "/settlement/pendingBillManage",
        "authority": [],
        "ext": "{\"index\":4}",
        "children": [
          {
            "name": "待结算订单管理接口权限（必选）",
            "key": "SETTLEMENT:PENDINGBILLMANAGE_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/waitSettleBilling/billedMoney,/api/erp/ae/waitSettleBilling/billingMoney,/api/erp/ae/waitSettleBilling/list,/api/erp/ae/waitSettleBilling/countData,/api/erp/ae/waitSettleBilling/createBilling,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/supplier/list,/api/erp/ae/supplier/listSupplier"
          },
          {
            "name": "查询",
            "key": "PENDING_BILL_MANAGE:SEARCH",
            "type": "component",
            "authority": []
          },
          {
            "name": "创建账单",
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
        "path": "/settlement/transferDetailsConsignment",
        "authority": [],
        "ext": "{\"index\":5}",
        "children": [
          {
            "name": "调拨明细-寄售接口权限（必选）",
            "key": "SETTLEMENT:TRANSFERDETAILSCONSIGNMENT_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/billing/transfer/list,/api/erp/ae/billing/transfer/statistics,/api/erp/ae/supplier/listSupplierActive,/api/erp/ae/supplier/list,/api/erp/ae/supplier/listSupplier,/api/erp/ae/warehouse/getWarehouseList"
          }
        ]
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
        "path": "/crs-message-manage/crs-message-log",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "客户信息日志查询接口权限（必选）",
            "key": "CRS_MESSAGE_MANAGE:CRS_MESSAGE_LOG_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/phoneView/listAllDept,/api/erp/ae/goodsCodeAssign/list,/api/erp/ae/phoneView/listViewDetail,/api/erp/ae/phoneView/listPhoneView"
          },
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
        "path": "/report-manage/remitDeposit",
        "authority": [],
        "ext": "{\"index\":0}",
        "children": [
          {
            "name": "进销汇存总表接口权限（必选）",
            "key": "REPORT_MANAGE:REMITDEPOSIT_APIS",
            "type": "api",
            "authority": [],
            "path": "/api/erp/ae/goodsCodeAssign/list,/api/erp/ae/invoicing/list,/api/erp/ae/warehouse/getWarehouseList,/api/erp/ae/invoicing/export,/api/erp/ae/order/exportOrder,/api/erp/ae/order/showTask,/api/erp/ae/purchase-order/export,/api/erp/ae/price-adjust-result/export,/api/ae/common/showTask,/api/erp/ae/inventory/product/exportGoodsInventory"
          },
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
];