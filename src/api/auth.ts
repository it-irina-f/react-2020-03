export const sleep = (x: number) => new Promise((r) => setTimeout(r, x));

export const login = async (name: string) => {
  await sleep(1000);

  await localStorage.setItem("login", name);
};

export const logout = async () => {
  await sleep(1000);

  await localStorage.removeItem("login");
};

export const isLoggedIn = async () => {
  await sleep(2000);
  const login = await localStorage.getItem("login");
  return Boolean(login);
};
