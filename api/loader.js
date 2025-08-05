export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send(`loadstring(game:HttpGet("https://raw.githubusercontent.com/businessmanalex88-stack/BypassWhoAmI/main/Radiant.lua"))()`);
}
