import "expect-puppeteer";

describe("Test for page Authorization", () => {
  beforeEach(async () => {
    await page.goto("http://localhost:8080");
  });

  it("should redirect to auth-page if name is empty", async () => {
    await page.click("button[type=submit]");

    const url = await page.evaluate("location.href");
    expect(url).toBe("http://localhost:8080/auth");
  });

  it("should redirect to page-todo if name is full", async () => {
    await page.type("input", "Irina");
    await page.click("button[type=submit]");

    const url = await page.evaluate("location.href");
    expect(url).toBe("http://localhost:8080/todo");
  });

  it("user must be authorized and logged out", async () => {
    await expect(page).toMatch("Логин");
    await expect(page).toFill("input", "Irina");
    await expect(page).toClick("button", { text: "Вход" });
    await expect(page).toMatch("Список дел");
    await expect(page).toMatch("Irina", { timeout: 10000 });
    await expect(page).toClick("button", { text: "Выход" });
    await expect(page).toMatch("Логин");
  });
});
