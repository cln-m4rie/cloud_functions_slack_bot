default: | help

init:  ## initialize
	npm init
deploy:  ## deploy to cloud functions
	gcloud functions deploy slackBotEvent --runtime nodejs8 --trigger-http --env-vars-file .env.yml --region asia-northeast1 --allow-unauthenticated

help:  ## Show all of tasks
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

