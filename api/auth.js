export default async function handler(req, res) {
  const { host } = req.headers;
  
  // Create a GitHub OAuth App and put its Client ID in Vercel Environment Variables
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  
  if (!clientId) {
    return res.status(500).json({ error: "OAUTH_GITHUB_CLIENT_ID is not set in Vercel environment variables." });
  }

  // Redirect to GitHub OAuth login page
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`;
  
  res.redirect(302, url);
}
