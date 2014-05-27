greet:
	@sh greetings.sh

status:
	@DEBUG=* node index.js

import:
	@DEBUG=* node lib/importer.js

.PHONY: greet
