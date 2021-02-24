VERSION:=$(shell git rev-parse HEAD)

COLOR_GREEN=$(shell echo "\033[0;32m")
COLOR_NONE=$(shell echo "\033[0m")

# NOTE: by convention, Make assumes that Makefile tasks are one-to-one
# with files produced by the tasks themselves. Since we are using it
# as more of a general task runner, we should tell it to disregard any
# file-based checks it might do. Thus, if you add a new make task,
# ensure it is added here to tell Make not to look for a file named
# after your task. See:
# https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html
.PHONY: help up up-attach down build

help:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

up: ## Bring development environment up
	@echo '$(COLOR_GREEN)==> Bringing development environment up...$(COLOR_NONE)'
	docker-compose up -d
	@echo '$(COLOR_GREEN)==> Showing running Docker containers...$(COLOR_NONE)'
	docker ps --format "table {{.Names}}\t{{.ID}}\t{{.Image}}\t{{.Status}}"

up-attach: ## Bring development environment up and attach stdin/stdout/stderr to the web container
	@echo '$(COLOR_GREEN)==> Bringing development environment up...$(COLOR_NONE)'
	docker-compose up -d
	@echo '$(COLOR_GREEN)==> Showing running Docker containers...$(COLOR_NONE)'
	docker ps --format "table {{.Names}}\t{{.ID}}\t{{.Image}}\t{{.Status}}"
	@echo '$(COLOR_GREEN)==> Attaching stdin/stdout/stderr to web...$(COLOR_NONE)'
	docker attach api


down: ## Take development environment down
	@echo '$(COLOR_GREEN)==> Taking development environment down...$(COLOR_NONE)'
	docker-compose down


build: ## Build dev server
	@echo '$(COLOR_GREEN)==> Building dev server...$(COLOR_NONE)'
	docker-compose build