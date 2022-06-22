export const PREVIEW_URI = 'http://preview.wxjkedu.com/onlinePreview?url=';

export enum UploadSuffix {
  single = '/s3/single_upload',
  shard = '/s3/shard_upload',
}

export enum LevelLabel {
  area = '区级教研',
  piece = '片级教研',
  school = '学校教研',
}

export enum LevelValue {
  area = 1,
  piece = 2,
  school = 3,
}

export const stageOptions = [
  { label: '幼儿园', value: 4 },
  { label: '小学', value: 1 },
  { label: '初中', value: 2 },
  { label: '高中', value: 3 },
];
