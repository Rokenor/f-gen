export async function addConfig(body: any) {
  const res = await fetch('http://localhost:3012/api/addConfig', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
