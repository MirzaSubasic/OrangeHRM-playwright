import { APIRequestContext, expect } from "@playwright/test";

export class ObjectsAPI {
  constructor(private request: APIRequestContext) {}

  async getAll() {
    const response = await this.request.get(
      "https://api.restful-api.dev/objects",
    );
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    return await response.json();
  }

  async getById(id: string) {
    const response = await this.request.get(
      `https://api.restful-api.dev/objects/${id}`,
    );
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    return await response.json();
  }

  async create(objectData: any) {
    const response = await this.request.post(
      "https://api.restful-api.dev/objects",
      {
        data: objectData,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    expect(response.status()).toBe(200);
    return await response.json();
  }
}
