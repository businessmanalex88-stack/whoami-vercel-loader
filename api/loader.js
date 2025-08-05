export default async function handler(req, res) {
  const scriptUrl = "https://raw.githubusercontent.com/businessmanalex88-stack/BypassWhoAmI/main/Radiant.lua";

  const response = await fetch(scriptUrl);
  const script = await response.text();

  res.setHeader("Content-Type", "text/plain");
  res.send(`loadstring([[${script}]])()`);
}
