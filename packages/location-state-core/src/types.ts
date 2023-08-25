/// <reference types="navigation-api-types" />

export type StoreName = "session" | "url";

export type Syncer = {
  key(): string | undefined;
  sync(arg: { listener: (key: string) => void; signal: AbortSignal }): void;
  updateURL(url: string): void;
};
