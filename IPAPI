/*
 * Quantumult X - IP API V2
 * Enhanced Server / IP Information
 * Data source: ip-api.com
 */

if (!$response || $response.statusCode != 200) {
  $done(null);
}

let obj;

try {
  obj = JSON.parse($response.body);
} catch (e) {
  $done({
    title: "❌ IP API Error",
    subtitle: "Invalid JSON response",
    ip: "",
    description: "Không thể đọc dữ liệu từ IP API."
  });
}

function val(value, fallback = "N/A") {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }
  return String(value);
}

/* =========================
   Country Flag
========================= */

function countryFlag(code) {
  if (!code || code.length !== 2) {
    return "🌐";
  }

  code = code.toUpperCase();

  return String.fromCodePoint(
    ...[...code].map(c => 127397 + c.charCodeAt(0))
  );
}

/* =========================
   Network Type
========================= */

function networkInfo(data) {

  let types = [];

  if (data.mobile === true) {
    types.push("📱 Mobile");
  }

  if (data.proxy === true) {
    types.push("🛡️ Proxy");
  }

  if (data.hosting === true) {
    types.push("🖥️ Hosting");
  }

  if (types.length === 0) {
    return "🌐 Standard";
  }

  return types.join(" · ");
}

/* =========================
   Security / Risk
========================= */

function securityStatus(data) {

  if (data.proxy === true && data.hosting === true) {
    return "🔴 Proxy + Hosting";
  }

  if (data.proxy === true) {
    return "🟠 Proxy detected";
  }

  if (data.hosting === true) {
    return "🟡 Hosting / VPS";
  }

  if (data.mobile === true) {
    return "🟢 Mobile network";
  }

  return "🟢 No proxy/hosting detected";
}

/* =========================
   Location
========================= */

let flag = countryFlag(obj.countryCode);

let city = val(obj.city);
let region = val(obj.regionName);
let country = val(obj.country);

let location =
  city !== "N/A"
    ? city + " - " + region
    : country;

/* =========================
   IP / ISP
========================= */

let ip = val(obj.query);
let isp = val(obj.isp);
let org = val(obj.org);
let asn = val(obj.as);
let asname = val(obj.asname);
let reverse = val(obj.reverse);

/* =========================
   Coordinates
========================= */

let coordinates = "N/A";

if (
  obj.lat !== undefined &&
  obj.lon !== undefined
) {
  coordinates =
    String(obj.lat) +
    ", " +
    String(obj.lon);
}

/* =========================
   Network
========================= */

let network = networkInfo(obj);
let security = securityStatus(obj);

/* =========================
   Title
========================= */

let title =
  flag +
  " " +
  city;

/* =========================
   Subtitle
========================= */

let subtitle = org !== "N/A"
  ? org
  : isp;

/* =========================
   Server Info
========================= */

let description =
  "📡 𝗦𝗲𝗿𝘃𝗶𝗰𝗲 𝗣𝗿𝗼𝘃𝗶𝗱𝗲𝗿: " +
  isp +

  "\n🏢 𝗢𝗿𝗴𝗮𝗻𝗶𝘇𝗮𝘁𝗶𝗼𝗻: " +
  org +

  "\n🔢 𝗔𝗦𝗡: " +
  asn +

  "\n🏷️ 𝗔𝗦𝗡 𝗡𝗮𝗺𝗲: " +
  asname +

  "\n📍 𝗔𝗿𝗲𝗮: " +
  location +

  "\n🌐 𝗜𝗣: " +
  ip +

  "\n🔎 𝗥𝗲𝘃𝗲𝗿𝘀𝗲 𝗗𝗡𝗦: " +
  reverse +

  "\n📡 𝗡𝗲𝘁𝘄𝗼𝗿𝗸: " +
  network +

  "\n🛡️ 𝗦𝗲𝗰𝘂𝗿𝗶𝘁𝘆: " +
  security +

  "\n🗺️ 𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻: " +
  coordinates +

  "\n📮 𝗭𝗜𝗣: " +
  val(obj.zip) +

  "\n🕐 𝗧𝗶𝗺𝗲 𝗭𝗼𝗻𝗲: " +
  val(obj.timezone);

/* =========================
   Quantumult X
========================= */

$done({
  title: title,
  subtitle: subtitle,
  ip: ip,
  description: description
});
