export async function bugMine<T>(
  label: string,
  fn: () => Promise<T>
): Promise<T> {
  try {
    return await fn();
  } catch (error: any) {
    console.error(`\n================ 💣 BUG MINE DETONATED ================`);
    console.error(`📍 LOCATION: ${label}`);
    console.error(`⚠️ ERROR TYPE: ${error.constructor.name}`);
    console.error(`💬 MESSAGE: ${error.message}`);
    console.error(`📜 STACK TRACE:\n${error.stack}`);
    console.error(`========================================================\n`);
    throw error; // Re-throw after logging
  }
}
