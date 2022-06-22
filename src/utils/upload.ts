import { message, Upload, UploadProps } from 'antd';
import { RcFile } from 'antd/lib/upload';

export const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export const showUploadList = {
  showDownloadIcon: false,
  showPreviewIcon: false,
  showRemoveIcon: true,
};

export const uploadOptions: UploadProps & {
  maxCountMsg?: string;
  transform?: boolean;
  forcePathStyle?: string;
} = {
  multiple: true,
  transform: true,
  forcePathStyle: '1',
  accept: '.doc, .docx, .ppt, .pptx, .xls, .xlsx, .pdf, .jpg, .jpeg, .png, .mp4',
  beforeUpload: (file: RcFile) => {
    const isLt2G = file.size / 1024 / 1024 < 2 * 1024;
    if (!isLt2G) {
      message.error('附件上传仅支持2Gb以内的文件');
    }
    return isLt2G ? true : Upload.LIST_IGNORE;
  },
};
