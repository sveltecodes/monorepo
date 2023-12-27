MODULES=packages/form-manager packages/modal-manager test/app

checkout:
	@git checkout $(BRANCH)
	@for module in $(MODULES); do \
		if [ -f $$module/.git ]; then \
			echo "Checking out $$module"; \
			cd $$module && git checkout $(BRANCH) || true && cd ../..; \
		fi \
	done

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
