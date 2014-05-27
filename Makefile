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

connect:
	@cd ~/Dropbox/Projects/IED/siga-app && NODE_ENV=production gulp

serve:
	@ngrok $(MALACO_PORT)

.PHONY: help
