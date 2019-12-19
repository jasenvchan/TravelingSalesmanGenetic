import urllib2
import re

req = urllib2.Request("https://www.latlong.net/category/cities-236-15.html", headers={"User-Agent": "Mozilla/5.0"})

cityData = urllib2.urlopen(req).read()

latAndLong = re.findall("(?<=<td>)-?\d{1,3}.\d{1,6}(?=</td>)", cityData)

longLatFormatted = ['[' + latAndLong[i] + ',' + latAndLong[i+1] + ']' for i in range(0,len(latAndLong) - 1,2)]

print longLatFormatted

file = open("./public/citiesList.js", 'w')


writeString = "module.exports = [" + ",".join(longLatFormatted) + "]"

file.write(writeString)

file.close()