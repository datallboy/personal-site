const { GITHUB_API_TOKENS } = require('@/config/index');

const headers = {
  Authorization: GITHUB_API_TOKENS,
};

export default async (req, res) => {
  if (req.method === 'GET') {
    const reposUrl =
      'https://api.github.com/users/datallboy/repos?sort=updated';
    const r = await fetch(reposUrl, { headers });
    const repos = await r.json();
    return res.status(200).json({ repos });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
