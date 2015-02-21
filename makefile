
bin = ./node_modules/.bin

test:
	@$(bin)/mocha \
		--timeout 5s \
		--reporter dot

.PHONY: test