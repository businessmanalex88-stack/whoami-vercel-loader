export default async function handler(req, res) {
  const response = await fetch("https://raw.githubusercontent.com/businessmanalex88-stack/BypassWhoAmI/refs/heads/main/Launcher%20Bypass%20All");
  const code = await response.text();
  res.setHeader("Content-Type", "text/plain");
  res.send(code);
}
