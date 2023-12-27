MODULES=packages/form-manager packages/modal-manager test/app

update:
	@git pull
	@for module in $(MODULES); do \
		if [ -f $$module/.git ]; then \
			echo "Updating $$module"; \
			cd $$module && git pull || true && cd ../..; \
		fi \
	done

commit:
	@for module in $(MODULES); do \
		if [ -f $$module/.git ]; then \
			echo "Updating $$module"; \
			cd $$module && git add . && git commit -am "$(MESSAGE)" || true && git push -u origin && cd ../..; \
		fi \
	done
	@git commit -am "$(MESSAGE)" || true && git push -u origin

install: update
	@for module in $(MODULES); do \
		if [ -f $$module/package.json ]; then \
			echo "Installing $$module"; \
			cd $$module && npm install && cd ../..; \
		fi \
	done
