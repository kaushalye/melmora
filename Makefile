SHELL:=$(shell /usr/bin/env which bash)
install:
	npm install
start:
	npm start
build:
	npm run build
update: build
	aws s3 sync build/ s3://www.umaav.org.au --profile umaav
.PHONY: install start build update