export default async function handler(req, res) {
  const _0x3f3c = ['roblox', 'user-agent', 'toLowerCase', 'headers', 'includes', 'Access Denied', 'status', 'send', 'https://raw.githubusercontent.com/businessmanalex88-stack/BypassWhoAmI/refs/heads/main/Launcher%20Bypass%20All', 'text/plain', 'Content-Type'];
  const _0x1a2f = function (i) { return _0x3f3c[i]; };

  const ua = req[_0x1a2f(3)][_0x1a2f(1)]?.[_0x1a2f(2)]() || "";
  
  // Check if request is from Roblox
  if (ua[_0x1a2f(4)](_0x1a2f(0))) {
    const gh = await fetch(_0x1a2f(8));
    const sc = await gh.text();

    res.setHeader(_0x1a2f(10), _0x1a2f(9));
    res.send(sc);
  } 
  // If not Roblox, check if it's a browser and redirect
  else if (ua.includes('mozilla') || ua.includes('chrome') || ua.includes('safari')) {
    res.writeHead(302, { 'Location': 'https://whoamibypass.online' });
    res.end();
  }
  // Deny access for other user-agents
  else {
    return res[_0x1a2f(6)](403)[_0x1a2f(7)](_0x1a2f(5));
  }
}
