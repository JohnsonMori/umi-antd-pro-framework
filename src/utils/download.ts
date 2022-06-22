/**
 * 前端下载文件方法
 * @param filename
 * @param url
 * @returns
 */
export function download(filename?: string, url?: string) {
  if (filename && url) {
    return fetch(url).then((res) =>
      res.blob().then((blob) => {
        const a = document.createElement('a');
        const urlBlob = window.URL.createObjectURL(blob);
        a.href = urlBlob;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      }),
    );
  }
  return null;
}

/**
 * 下载blob文件方法
 * @param filename
 * @param url
 * @returns
 */
export function downloadBlob(response: BlobPart, type: string, filename: string) {
  const blob = new Blob([response], { type });
  const objectUrl = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(objectUrl);
}
