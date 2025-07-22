export function checkIsCurrentPath(
  pathName?: string,
  listName?: string
): boolean {
  if (!pathName || !listName) return false;
  const pathArr = pathName.split("/");
  return pathArr.includes(listName.toLowerCase());
}
