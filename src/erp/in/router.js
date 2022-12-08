module.exports = [
  {
    name: 'merchant-manage',
    path: '/merchant-manage',
    title: '商家管理',
    icon: 'shop',
    routes: [
      {
        name: 'deliveryCpy-manage',
        path: '/merchant-manage/deliveryCpy-manage',
        component: 'merchant-manage/deliveryCpy-manage/index',
        title: '快递公司管理'
      }
    ]
  },
  {
    name: 'order',
    path: '/order',
    title: '销售管理',
    icon: 'container',
    routes: [
      {
        name: 'order-manage',
        path: '/order/order-manage',
        component: 'order/order-manage/index',
        title: '订单管理'
      },
      {
        name: 'reissue',
        path: '/order/reissue',
        component: 'order/order-manage-reissue/index',
        title: '补发单管理'
      },
      {
        name: 'annormalOrder-manage',
        path: '/order/annormalOrder-manage',
        component: 'order/abnormalOrder-manage/index',
        title: '异常订单管理'
      },
      {
        name: 'spShipApp',
        path: '/order/spShipApp',
        component: 'order/spShipApp/index',
        title: '特殊发货申请'
      }
    ]
  },
  {
    name: 'product',
    path: '/product',
    title: '货品管理',
    icon: 'apartment',
    routes: [
      {
        name: 'product-manage',
        path: '/product/product-manage',
        component: 'product/product-manage/index',
        title: '货品信息管理'
      },
      {
        name: 'product-new',
        path: '/product/product-manage/new',
        component: 'product/product-new/index',
        title: '新增商品',
        hideInMenu: true
      },
      {
        name: 'product-virtualSuit',
        path: '/product/product-manage/virtualSuit',
        component: 'product/product-virtualSuit/index',
        title: '虚拟组套'
      },
      {
        name: 'product-subjectMap',
        path: '/product/product-manage/subjectMap',
        component: 'product/product-subjectMap/index',
        title: '内容包映射'
      },
      {
        name: 'gift-entity-map',
        path: '/product/product-manage/giftEntityMap',
        component: 'product/gift-entity-subjectMap/index',
        title: '礼包实物映射'
      },
      {
        name: 'product-category',
        path: '/product/product-manage/category',
        component: 'product/product-category/index',
        title: '品类分类'
      }
    ]
  },
  {
    name: 'stock-manage',
    path: '/stock-manage',
    title: '库存管理',
    icon: 'bank',
    routes: [
      {
        name: 'stock-product',
        path: '/stock-manage/product',
        component: 'stock/stock-product/index',
        title: '货品库存管理'
      }
    ]
  },
  {
    name: 'logistics-manage',
    path: '/logistics-manage',
    title: '物流管理',
    icon: 'car',
    routes: [
      {
        name: 'logistics-manage-user',
        path: '/logistics-manage/user',
        component: 'logistics-manage/userSpecifyExpress/index',
        title: '按用户指定快递'
      },
      {
        name: 'logistics-course',
        path: '/logistics-manage/course',
        component: 'logistics-manage/courseSpecifyExpress/index',
        title: '按内容包指定快递'
      },
      {
        name: 'logistics-wareHouse',
        path: '/logistics-manage/wareHouse',
        component: 'logistics-manage/wareHouse/index',
        title: '按内容包指定仓库'
      },
      {
        name: 'logistics-goods',
        path: '/logistics-manage/goods',
        component: 'logistics-manage/productSpecifyExpress/index',
        title: '按货品指定仓库'
      },
      {
        name: 'logistics-giftSpecifyWarehouse',
        path: '/logistics-manage/giftSpecifyWarehouse',
        component: 'logistics-manage/giftSpecifyWarehouse/index',
        title: '按礼包指定仓库'
      },
      {
        name: 'logistics-productCode',
        path: '/logistics-manage/productCode',
        component: 'logistics-manage/productCode/index',
        title: '按商品编码指定快递'
      }
    ]
  },
  {
    name: 'procurement',
    path: '/procurement',
    title: '采购管理',
    icon: 'shop',
    routes: [
      {
        name: 'supplier',
        path: '/procurement/supplier',
        component: 'procurement/supplier/index',
        title: '供应商管理'
      },
      {
        name: 'supplierGoods',
        path: '/procurement/supplierGoods',
        component: 'procurement/supplierGoods/index',
        title: '供应商货品管理'
      },
      {
        name: 'priceAdjustment',
        path: '/procurement/priceAdjustment',
        component: 'procurement/priceAdjustment/index',
        title: '价格调整单管理'
      },
      {
        name: 'purchaseOrder',
        path: '/procurement/purchaseOrder',
        component: 'procurement/purchaseOrder/index',
        title: '采购单管理'
      },
      {
        name: 'deliveryOrder',
        path: '/procurement/deliveryOrder',
        component: 'procurement/deliveryOrder/index',
        title: '到货单管理'
      },
      {
        name: 'purchaseReturn',
        path: '/procurement/purchaseReturn',
        component: 'procurement/purchaseReturn/index',
        title: '采购退货管理'
      }
    ]
  },
  {
    name: 'settlement',
    path: '/settlement',
    title: '结算管理',
    icon: 'shop',
    routes: [
      {
        name: 'deliverCountRuleManage',
        path: '/settlement/deliverCountRuleManage',
        component: 'settlement/deliverCountRuleManage/index',
        title: '物流费用规则管理'
      },
      {
        name: 'deliverBillManage',
        path: '/settlement/deliverBillManage',
        component: 'settlement/deliverBillManage/index',
        title: '物流对账单管理'
      },
      {
        name: 'purchaseBillManage',
        path: '/settlement/purchaseBillManage',
        component: 'settlement/purchaseBillManage/index',
        title: '采购对账单管理'
      },
      {
        name: 'handCostManage',
        path: '/settlement/handCostManage',
        component: 'settlement/handCostManage/index',
        title: '手工费用项管理'
      },
      {
        name: 'pendingBillManage',
        path: '/settlement/pendingBillManage',
        component: 'settlement/pendingBillManage/index',
        title: '待结算订单管理'
      },
      {
        name: 'transferDetailsConsignment',
        path: '/settlement/transferDetailsConsignment',
        component: 'settlement/transferDetailsConsignment/index',
        title: '调拨明细-寄售'
      }
    ]
  },
  {
    name: 'crs-message-manage',
    path: '/crs-message-manage',
    title: '客户信息管理',
    icon: 'bank',
    routes: [
      {
        name: 'crs-message-log',
        path: '/crs-message-manage/crs-message-log',
        component: 'crs-message-manage/crs-message-log/index',
        title: '客户信息日志查询'
      }
    ]
  },
  {
    name: 'report-manage',
    path: '/report-manage',
    title: '报表管理',
    icon: 'bank',
    routes: [
      {
        name: 'remitDeposit',
        path: '/report-manage/remitDeposit',
        component: 'report-manage/remitDeposit/index',
        title: '进销汇存总表'
      }
    ]
  }
];