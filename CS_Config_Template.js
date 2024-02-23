#🆅🆄 🅳🅸🅽🅷 🆃🆁🅸
#Date: 01.01.2024
#Author: Tri + Ae Viefast

[general]
udp_whitelist=53, 1024-65535
profile_img_url =https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/SSID.png
server_check_url =http://www.google.com/generate_204
geo_location_checker=http://ip-api.com/json/?lang=EN, https://gist.githubusercontent.com/Drstrangevn01/f376f6e9bd645945a078b23868dacd26/raw/30f0247f7faec6a84d2c031513a9f09588654d8c/IP_API.js
icmp_auto_reply=false
doh_user_agent=Chrome
server_check_user_agent=Go-http-client/1.1
server_check_timeout=3000
udp_drop_list=443
resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js
[dns]
no-system
server=8.8.8.8
server=8.8.4.4
server=45.90.28.0
server=45.90.30.0
no-ipv6
server=114.114.114.114
server=202.141.176.93 
server=202.141.178.13
server=117.50.10.10
server=223.5.5.5
server=119.29.29.29:53
server=119.28.28.28
# > Viettel
server=203.113.131.2
server=203.113.131.1
server=203.113.181.1
server=203.119.36.106
server=203.190.163.13
server=203.162.57.108
server=208.190.163.10
server=203.113.131.5
server=203.113.131.6



[policy]
ssid=🅸🅽🆃🅴🆁🅽🅴🆃, 🆅🅿🅽 🆅🅸🅴🅵🅰🆂🆃, 🆆🅸🅵🅸, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Back.png
static=🆆🅸🅵🅸, direct, 🆅🅿🅽 🆅🅸🅴🅵🅰🆂🆃, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/WiFi.png
static=🆅🅿🅽 🆅🅸🅴🅵🅰🆂🆃, ⒷⒶⓁⒶⓃⒸⒺ 🅐🅛🅛, ⒷⒶⓁⒶⓃⒸⒺ 🅥🅝🅐🅜, ⒶⓊⓉⓄ 🅥🅝🅐🅜, ⒷⒶⓁⒶⓃⒸⒺ 🅗🅚🅞🅝🅖, ⒷⒶⓁⒶⓃⒸⒺ 🅢🅘🅝🅖, ⒷⒶⓁⒶⓃⒸⒺ 🅙🅐🅟🅐🅝, server-tag-regex=viefast, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Cellular.png
dest-hash=ⒷⒶⓁⒶⓃⒸⒺ 🅐🅛🅛, server-tag-regex=viefast, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Proxy.png
dest-hash=ⒷⒶⓁⒶⓃⒸⒺ 🅥🅝🅐🅜, server-tag-regex=🇻🇳, img-url=https://raw.githubusercontent.com/Semporia/Hand-Painted-icon/master/Rounded_Rectangle/Vietnam.png
url-latency-benchmark=ⒶⓊⓉⓄ 🅥🅝🅐🅜, server-tag-regex=🇻🇳, check-interval=600, tolerance=0, alive-checking=false, img-url=https://raw.githubusercontent.com/Semporia/Hand-Painted-icon/master/Rounded_Rectangle/Vietnam.png
dest-hash=ⒷⒶⓁⒶⓃⒸⒺ 🅗🅚🅞🅝🅖, server-tag-regex=🇭🇰, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/HK.png
dest-hash=ⒷⒶⓁⒶⓃⒸⒺ 🅢🅘🅝🅖, server-tag-regex=🇸🇬, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/SG.png
dest-hash=ⒷⒶⓁⒶⓃⒸⒺ 🅙🅐🅟🅐🅝, server-tag-regex=🇯🇵, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/JP.png

#dest-hash=🅱︎🅰︎🅻🅰︎🅽🅲🅴, resource-tag-regex=VIEFAST, img-url=calendar.day.timeline.leading.system
#static=Ads, direct, reject, img-url=bolt.batteryblock.fill.system
[server_remote]
xxxx, tag=🆅🅸🅴 🅵🅰🆂🆃, img-url=link.circle.fill.system, update-interval=172800, opt-parser=false, enabled=true


[filter_remote]



[rewrite_remote]
https://raw.githubusercontent.com/lonely0811/olsd/main/nicegram.conf, tag=Nicegram, update-interval=172800, opt-parser=false, enabled=true
https://whatshub.top/rewrite/grammarly.conf, tag=Gramarly, update-interval=172800, opt-parser=false, enabled=true
https://whatshub.top/rewrite/meituxx.conf, tag=Meitu, update-interval=172800, opt-parser=false, enabled=true
https://whatshub.top/rewrite/nicegram.conf, tag=Nice gram, update-interval=172800, opt-parser=false, enabled=false
https://raw.githubusercontent.com/Maasea/sgmodule/master/YoutubeAds.sgmodule, tag=youtube, update-interval=172800, opt-parser=true, enabled=false




[server_local]

[filter_local]
FINAL,🅸🅽🆃🅴🆁🅽🅴🆃

[rewrite_local]
^http://www\.baidu\.com url reject-200

#^https:\/\/(www.)?(example1.com|example2.com) -url script-response-body IP_API.js

[mitm]
skip_validating_cert = true

#hostname = www.example1.com, www.example2.com


