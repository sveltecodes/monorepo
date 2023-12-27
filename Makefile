MODULES=$(shell find . -type d -depth 2 -not -path "./node_modules/*")

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
			cd $$module && git commit -am "$(MESSAGE)" || true && git push -u origin && cd ../..; \
		fi \
	done
	@git commit -am "$(MESSAGE)" || true && git push -u origin
