export function checkIsCurrentPath(pathName: string, listName: string) {
  const pathArr = pathName.split("/");

  if (pathArr.includes(listName.toLocaleLowerCase())) return true;
  else return false;
}
