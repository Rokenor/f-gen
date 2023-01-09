export async function getConfigs() {
  const res = await fetch('http://localhost:3012/api/finalConfigs');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
