export default async function handler(req, res) {
  const userAgent = req.headers['user-agent']?.toLowerCase() || "";

  // Blokir akses jika bukan dari Roblox Executor
  if (!userAgent.includes("roblox")) {
    return res.status(403).send("Access Denied");
  }

  // Ambil script dari GitHub
  const response = await fetch("https://raw.githubusercontent.com/businessmanalex88-stack/BypassWhoAmI/refs/heads/main/Launcher%20Bypass%20All");
  const code = await response.text();

  res.setHeader("Content-Type", "text/plain");
  res.send(code);
}
