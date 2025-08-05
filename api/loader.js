export default async function handler(req, res) {
  const _0x3f3c = ['roblox', 'user-agent', 'toLowerCase', 'headers', 'includes', 'Access Denied', 'status', 'send', 'https://raw.githubusercontent.com/businessmanalex88-stack/BypassWhoAmI/refs/heads/main/Launcher%20Bypass%20All', 'text/plain', 'Content-Type'];
  const _0x1a2f = function (i) { return _0x3f3c[i]; };

  const ua = req[_0x1a2f(3)][_0x1a2f(1)]?.[_0x1a2f(2)]() || "";
  if (!ua[_0x1a2f(4)](_0x1a2f(0))) {
    return res [_0x1a2f(7)](_0x1a2f(5));
  }

  const gh = await fetch(_0x1a2f(8));
  const sc = await gh.text();

  res.setHeader(_0x1a2f(10), _0x1a2f(9));
  res.send(sc);
}
