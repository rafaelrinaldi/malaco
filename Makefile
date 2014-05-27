MALACO_PORT=9000
VERSION=v.0.2.3 (beta)
LICENSE=MIT license

help:
	@sh help.sh
	@echo "Malaco $(VERSION) released under $(LICENSE)."
	@echo ""

status:
	@DEBUG=* node index.js

import:
	@DEBUG=* node lib/importer.js

connect: refresh
	@cd ../siga-app && NODE_ENV=production gulp

serve:
	@ngrok $(MALACO_PORT)

refresh:
	@node index.js # Will silently grab latest status data

	@echo 'define(' `cat ./stations.json` ');' | sed -e 's/^[ \t]*//' | tr -d '\n' > ../siga-app/app/assets/javascripts/data/stations.js

	@echo 'define(' `cat ./status.json` ');' | sed -e 's/^[ \t]*//' | tr -d '\n' > ../siga-app/app/assets/javascripts/data/status.js

.PHONY: help
