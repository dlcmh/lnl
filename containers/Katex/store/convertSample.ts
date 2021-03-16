const baseUrl = `${process.env.NEXT_PUBLIC_HOST}/api/katex`;

export async function convertSample(katex: string) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ katex }),
  });

  const { html } = await response.json();

  return html;
}
