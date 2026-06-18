const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export type ApiEnvelope<T> = {
  success: boolean;
  message: string;
  data: T;
  meta?: Record<string, unknown>;
};

export function unwrapApiResponse<T>(payload: T | ApiEnvelope<T>): T {
  if (
    payload &&
    typeof payload === "object" &&
    "success" in payload &&
    "data" in payload
  ) {
    return (payload as ApiEnvelope<T>).data;
  }

  return payload as T;
}

export function unwrapApiMeta<T>(
  payload: T | ApiEnvelope<T>
): Record<string, unknown> | undefined {
  if (payload && typeof payload === "object" && "meta" in payload) {
    return (payload as ApiEnvelope<T>).meta;
  }

  return undefined;
}

export async function apiGet<T>(endpoint: string): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured");
  }

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Không thể tải dữ liệu");
  }

  return unwrapApiResponse(await res.json());
}

export async function apiPost<T, U>(endpoint: string, data: U): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error("API base URL is not configured");
  }

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Không thể gửi dữ liệu");
  }

  return unwrapApiResponse(await res.json());
}
