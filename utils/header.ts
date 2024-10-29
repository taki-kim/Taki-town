export function checkIsCurrentPath(pathName: string, listName: string) {
  const pathArr = pathName.split("/");

  if (pathArr.includes(listName)) return true;
  else return false;
}
