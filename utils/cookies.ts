"use client";

export function getThemeCookie(name: string) {
  const value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : "light";
}

export function setThemeCookie(theme: string) {
  document.cookie = `theme=${theme}; max-age=${3600 * 24 * 400}`;
}
