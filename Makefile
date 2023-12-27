MODULES=$(shell find . -type d -depth 2 -not -path "./node_modules/*")

update:
	@original_pwd=`pwd`
	@for module in $(MODULES); do \
		if [ -f $$module/.git ]; then \
			echo "Updating $$module"; \
			cd $$module && git pull || true && cd ../..; \
		fi \
	done

commit:
	@original_pwd=`pwd`
	@for module in $(MODULES); do \
		if [ -f $$module/.git ]; then \
			echo "Updating $$module"; \
			cd $$module && git commit -am "$(MESSAGE)" || true && git push -u origin && cd ../..; \
		fi \
	done
