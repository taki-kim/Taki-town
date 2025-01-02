export function commentInputVerification({ form }: any) {
  if (
    !form.comment ||
    !form.author ||
    !form.password ||
    form.password.length < 5
  )
    return false;
  else return true;
}
