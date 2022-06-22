import { message } from 'antd';
import { history } from 'umi';
import moment from 'moment';

/**
 * 面包屑通用itemRender方法
 * @param route
 * @returns
 */
export function itemRender(route: { path: string; breadcrumbName: string }) {
  const { path, breadcrumbName } = route;
  if (path) {
    return <a onClick={() => history.push(path)}>{breadcrumbName}</a>;
  }
  return <a>{breadcrumbName}</a>;
};

/**
 * table组件sort参数转化
 * @param sort
 * @returns
 */
export function convertSort(sort: object) {
  if (!sort) return {};

  const key = Object.keys(sort)[0];

  const newSort: { order?: string; sort?: 'asc' | 'desc' } = { order: key };
  if (sort[key] === 'ascend') {
    newSort.sort = 'asc';
  } else if (sort[key] === 'descend') {
    newSort.sort = 'desc';
  }
  return newSort;
}

/**
 * 成功回调提示
 */
export function callbackSuccess() {
  message.success('操作成功');
}

/**
 * 文件名后缀不带.
 * @param fileName
 * @returns
 */
export function fileSuffix(fileName: string) {
  return fileName?.substring(fileName?.lastIndexOf('.') + 1) || '';
}

/**
 * 格式化为YYYY-MM-DD
 * @param date
 * @returns
 */
export function formatDate(date?: string | number) {
  return moment(date).format('YYYY-MM-DD');
};

/**
 * 格式化为YYYY-MM-DD HH:mm
 * @param date
 * @returns
 */
export function formatDateTime(date?: string | number) {
  return moment(date).format('YYYY-MM-DD HH:mm');
};

/**
 * 解决带%格式地址报错问题
 * @param uri
 * @returns
 */
export function formatUri(uri: string) {
  if (uri.includes('%')) {
    return uri.replace(/%/g, '%25');
  }
  return uri;
};

/**
 * 模拟延时Promise
 * @param time
 * @returns
 */
export function waitTime(time: number = 100) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};