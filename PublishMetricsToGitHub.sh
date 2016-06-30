#!/bin/bash
cd d:
cd gegdc/SV40298/GIT-Repositories/csv-to-html-table/data/
curl --user 502437115:AP218X3SywtAdgFJLmbnKwwa4LS -O https://devcloud.swcoe.ge.com/artifactory/SXZZG/Applications/PLM-BUILD-METRICS/PLM_BUILD_METRICS.CSV
git add .
git commit -m "New Metrics File at $(date +"%m-%d-%Y") $(date +"%T")" .
git push origin master
git push origin master:gh-pages