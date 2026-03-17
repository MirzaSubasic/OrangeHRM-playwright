import { test, expect } from "@playwright/test";

test.describe("Objects API Tests", () => {
  test("GET /objects/7 returns MacBook Pro details", async ({ request }) => {
    const response = await request.get("https://api.restful-api.dev/objects/7");
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.id).toBe("7");
    expect(body.name).toBe("Apple MacBook Pro 16");
    expect(body.data.year).toBe(2019);
    expect(body.data.price).toBe(1849.99);
    expect(body.data["CPU model"]).toBe("Intel Core i9");
    expect(body.data["Hard disk size"]).toBe("1 TB");
  });

  test("GET /objects returns array of items", async ({ request }) => {
    const response = await request.get("https://api.restful-api.dev/objects");
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0); 
  });
});
