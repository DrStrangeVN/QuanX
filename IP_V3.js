/*
 * Quantumult X
 * IP_API.js V3.1
 * Clean Network Inspector
 *
 * Data source:
 * ip-api.com
 */

(function () {

  /* =========================
     Check Response
  ========================= */

  if (!$response || !$response.body) {
    $done({
      title: "IP CHECK",
      subtitle: "No response",
      ip: "",
      description: "Unable to retrieve network information."
    });
    return;
  }

  let obj;

  try {
    obj = JSON.parse($response.body);
  } catch (e) {
    $done({
      title: "IP CHECK",
      subtitle: "Invalid response",
      ip: "",
      description: "IP API returned invalid JSON."
    });
    return;
  }

  /* =========================
     Helper
  ========================= */

  function val(v, fallback) {
    fallback = fallback || "N/A";

    if (
      v === undefined ||
      v === null ||
      String(v).trim() === ""
    ) {
      return fallback;
    }

    return String(v);
  }

  function flag(code) {
    if (!code || String(code).length !== 2) {
      return "🌐";
    }

    return [...String(code).toUpperCase()]
      .map(function (c) {
        return String.fromCodePoint(
          127397 + c.charCodeAt(0)
        );
      })
      .join("");
  }

  /* =========================
     Basic Information
  ========================= */

  var ip = val(obj.query);
  var country = val(obj.country);
  var countryCode = val(obj.countryCode);
  var continent = val(obj.continent);

  var region = val(obj.regionName);
  var regionCode = val(obj.region);
  var city = val(obj.city);
  var zip = val(obj.zip);

  /* =========================
     Network Information
  ========================= */

  var isp = val(obj.isp);
  var org = val(obj.org);
  var asn = val(obj.as);
  var asname = val(obj.asname);
  var reverse = val(obj.reverse);

  /* =========================
     Location
  ========================= */

  var lat = val(obj.lat);
  var lon = val(obj.lon);

  var coordinates = "N/A";

  if (lat !== "N/A" && lon !== "N/A") {
    coordinates = lat + ", " + lon;
  }

  /* =========================
     Time
  ========================= */

  var timezone = val(obj.timezone);
  var offset = val(obj.offset);

  /* =========================
     Network Type
  ========================= */

  var networkType = "Standard";

  if (obj.mobile === true) {
    networkType = "Mobile";
  }

  if (obj.hosting === true) {
    networkType = "Hosting";
  }

  if (obj.proxy === true) {
    networkType = "Proxy";
  }

  if (
    obj.mobile === true &&
    obj.proxy === true
  ) {
    networkType = "Mobile + Proxy";
  }

  if (
    obj.hosting === true &&
    obj.proxy === true
  ) {
    networkType = "Hosting + Proxy";
  }

  /* =========================
     Security
  ========================= */

  var security = "🟢 Clean";

  if (
    obj.proxy === true &&
    obj.hosting === true
  ) {
    security = "🔴 Proxy + Hosting";
  } else if (obj.proxy === true) {
    security = "🟠 Proxy detected";
  } else if (obj.hosting === true) {
    security = "🟡 Hosting detected";
  } else if (obj.mobile === true) {
    security = "🟢 Mobile network";
  }

  /* =========================
     Connection
  ========================= */

  var mobile =
    obj.mobile === true ? "YES" : "NO";

  var proxy =
    obj.proxy === true ? "YES" : "NO";

  var hosting =
    obj.hosting === true ? "YES" : "NO";

  /* =========================
     Currency
  ========================= */

  var currency = val(obj.currency);

  /* =========================
     IP Version
  ========================= */

  var ipVersion = "IPv4";

  if (ip.indexOf(":") !== -1) {
    ipVersion = "IPv6";
  }

  /* =========================
     Country / Region
  ========================= */

  var countryInfo = country;

  if (countryCode !== "N/A") {
    countryInfo =
      country + " (" + countryCode + ")";
  }

  var regionInfo = region;

  if (regionCode !== "N/A") {
    regionInfo =
      region + " (" + regionCode + ")";
  }

  /* =========================
     Title
  ========================= */

  var title =
    flag(countryCode) +
    " " +
    countryCode +
    " | " +
    city;

  /* =========================
     Subtitle
  ========================= */

  var subtitle =
    org !== "N/A"
      ? org
      : isp;

  /* =========================
     Description
  ========================= */

  var description =
    "NETWORK\n" +

    "ISP         " + isp + "\n" +
    "ORG         " + org + "\n" +
    "ASN         " + asn + "\n" +
    "ASN Name    " + asname + "\n" +
    "Type        " + networkType + "\n" +
    "Security    " + security +

    "\n\n" +

    "IP INFORMATION\n" +

    "IP          " + ip + "\n" +
    "Version     " + ipVersion + "\n" +
    "Reverse     " + reverse +

    "\n\n" +

    "LOCATION\n" +

    "Country     " + countryInfo + "\n" +
    "Region      " + regionInfo + "\n" +
    "City        " + city + "\n" +
    "ZIP         " + zip + "\n" +
    "Coordinates " + coordinates +

    "\n\n" +

    "CONNECTION\n" +

    "Mobile      " + mobile + "\n" +
    "Proxy       " + proxy + "\n" +
    "Hosting     " + hosting +

    "\n\n" +

    "TIME\n" +

    "Timezone    " + timezone + "\n" +
    "UTC Offset  " + offset +

    "\n\n" +

    "OTHER\n" +

    "Continent   " + continent + "\n" +
    "Currency    " + currency;

  /* =========================
     Quantumult X
  ========================= */

  $done({
    title: title,
    subtitle: subtitle,
    ip: ip,
    description: description
  });

})();
