import { test, expect } from "@playwright/test";
import { ObjectsAPI } from "../../pages/API-page";
import { newObjectData } from "../../constants/API-data";

test.describe("Objects API Tests", () => {
  let objectsApi: ObjectsAPI;

  test.beforeEach(async ({ request }) => {
    objectsApi = new ObjectsAPI(request);
  });

  test("POST new object with laptop data", async ({ request }) => {
    const response = await objectsApi.create(newObjectData);

    expect(response).toHaveProperty("id");
    expect(response.name).toBe("Lenovo ThinkPad X1 Carbon");
    expect(response.data.year).toBe(2019);
    expect(response.data.price).toBe(1849.99);
    expect(response.data["CPU model"]).toBe("Intel Core i9");
    expect(response.data["Hard disk size"]).toBe("1 TB");
  });
});
