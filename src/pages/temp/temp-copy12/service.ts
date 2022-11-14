import request from '@/utils/request';

// 查询采购结算管理列表
export async function queryBillingList1(params: any) {
  return request(`/ae/billing/list`, { method: 'POST', data: params }).then((data: any) => data);
}

// 供应商列表
export async function querySupplierList1() {
  return request(`/ae/supplier/listSupplierActive`, {}).then((data: any) => data);
}
