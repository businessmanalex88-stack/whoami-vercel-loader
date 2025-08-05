export default async function handler(req, res) {
  const scriptUrl = "https://raw.githubusercontent.com/businessmanalex88-stack/BypassWhoAmI/main/Radiant.lua";
  try {
    const response = await fetch(scriptUrl);
    const script = await response.text();
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    res.status(200).send(`loadstring([[${script}]])()`);
  } catch (error) {
    res.status(500).send("-- Error loading script");
  }
}
