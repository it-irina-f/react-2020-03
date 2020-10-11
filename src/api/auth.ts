export const sleep = (x: number) => new Promise((r) => setTimeout(r, x));

export const login = async (name: string) => {
  await sleep(1000);

  await localStorage.setItem("login", name);
};

export const logout = async () => {
  await sleep(1000);

  await localStorage.removeItem("login");
};

export const getUserSession = async () => {
  await sleep(2000);
  const login = await localStorage.getItem("login");
  return login;
};

export const isLoggedIn = async () => {
  const login = await getUserSession();
  return Boolean(login);
};

export const getToDosSession = async (name: string) => {
  await sleep(1000);
  const todos = await localStorage.getItem(name);
  return todos;
};

export const setToDosSession = async (todos: object, name: string) => {
  await sleep(1000);
  await localStorage.setItem(name, JSON.stringify(todos));
};
