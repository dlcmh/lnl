import Katex from 'katex';
import 'katex/dist/contrib/mhchem';

const toKatex = (str: string) => Katex.renderToString(str, { throwOnError: false });

export default function handler(req, res) {
  const { body: { katex } } = req;

  const html = toKatex(katex);

  res.status(200).json({ html });
}
