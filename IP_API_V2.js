/*
 * Quantumult X - IP API V3
 * Clean & Compact Server Info
 * Data source: ip-api.com
 */

if (!$response || $response.statusCode != 200) {
  $done({
    title: "IP API",
    subtitle: "Request failed",
    ip: "",
    description: "Unable to retrieve server information."
  });
  return;
}

let obj;

try {
  obj = JSON.parse($response.body);
} catch (e) {
  $done({
    title: "IP API",
    subtitle: "Invalid response",
    ip: "",
    description: "Unable to parse IP API response."
  });
  return;
}

/* =========================
   Helpers
========================= */

function val(v, fallback = "N/A") {
  return (
    v !== undefined &&
    v !== null &&
    String(v).trim() !== ""
  ) ? String(v) : fallback;
}

function flag(code) {
  if (!code || String(code).length !== 2) {
    return "🌐";
  }

  return [...String(code).toUpperCase()]
    .map(c => String.fromCodePoint(127397 + c.charCodeAt(0)))
    .join("");
}

/* =========================
   Basic Info
========================= */

const ip = val(obj.query);
const isp = val(obj.isp);
const org = val(obj.org);
const asn = val(obj.as);
const asname = val(obj.asname);

const country = val(obj.country);
const countryCode = val(obj.countryCode);
const city = val(obj.city);
const region = val(obj.regionName);

const timezone = val(obj.timezone);
const reverse = val(obj.reverse);
const zip = val(obj.zip);

const lat = obj.lat;
const lon = obj.lon;

const location =
  lat !== undefined && lon !== undefined
    ? `${lat}, ${lon}`
    : "N/A";

/* =========================
   Network
========================= */

let network = "Standard";

if (obj.mobile === true) {
  network = "Mobile";
}

if (obj.hosting === true) {
  network = "Hosting";
}

if (obj.proxy === true) {
  network = "Proxy";
}

if (obj.mobile === true && obj.proxy === true) {
  network = "Mobile + Proxy";
}

if (obj.hosting === true && obj.proxy === true) {
  network = "Hosting + Proxy";
}

/* =========================
   Security
========================= */

let security = "🟢 Clean";

if (obj.proxy === true && obj.hosting === true) {
  security = "🔴 Proxy + Hosting";
} else if (obj.proxy === true) {
  security = "🟠 Proxy detected";
} else if (obj.hosting === true) {
  security = "🟡 Hosting detected";
} else {
  security = "🟢 Clean";
}

/* =========================
   Title
========================= */

const title =
  flag(countryCode) + " " + countryCode +
  "  |  " + city;

/* =========================
   Subtitle
========================= */

const subtitle =
  org !== "N/A"
    ? org
    : isp;

/* =========================
   Description
========================= */

let description =

  "NETWORK\n" +

  "Service     " + isp + "\n" +
  "Org         " + org + "\n" +
  "ASN         " + asn + "\n" +
  "ASN Name    " + asname + "\n" +
  "Network     " + network + "\n" +
  "Security    " + security +

  "\n\n" +

  "LOCATION\n" +

  "IP          " + ip + "\n" +
  "Area        " + city + " - " + region + "\n" +
  "Location    " + location + "\n" +
  "ZIP         " + zip + "\n" +
  "Timezone    " + timezone +

  "\n\n" +

  "DNS\n" +

  "Reverse     " + reverse;

/* =========================
   Quantumult X
========================= */

$done({
  title: title,
  subtitle: subtitle,
  ip: ip,
  description: description
});
