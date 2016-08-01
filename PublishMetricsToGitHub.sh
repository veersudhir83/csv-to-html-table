#!/bin/bash
git pull
echo "Changing data directory and downloading latest metrics file from artifactory"
cd ./data/
curl --user 502437115:AP218X3SywtAdgFJLmbnKwwa4LS -O https://devcloud.swcoe.ge.com/artifactory/SXZZG/Applications/PLM-BUILD-METRICS/PLM_BUILD_METRICS.CSV
echo "Downloaded Metrics file..."
cd ../
git add .
git commit -m "New Metrics File at $(date +"%m-%d-%Y") $(date +"%T")" .
echo "Uploading metrics file to github and gh-pages"
git push origin master
git push origin master:gh-pages
echo "Done...."
echo "Open this URL to see the metrics in a web page: http://veersudhir83.github.io/csv-to-html-table/"
