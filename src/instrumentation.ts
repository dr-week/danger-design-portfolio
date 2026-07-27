export async function register() {
  // Executed on server startup
}

export async function onRequestError(
  err: { digest?: string } & Error,
  request: { path: string; method: string },
  context: { routerKind: 'AppRouter' | 'PagesRouter' }
) {
  console.error(`💣 [BUG MINE TRIGGERED] Path: ${request.path} [${request.method}]`);
  console.error(`💥 Error Message:`, err.message);
  console.error(`📍 Stack Trace:\n`, err.stack);
}
