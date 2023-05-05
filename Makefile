init.dev: app.build app.create_test_db app.load_schema app.stop

app.build:
	docker compose build $(cache)

app.create_test_db:
	docker compose run -e RAILS_ENV=test --rm backend rake db:create

app.load_schema:
	docker compose run -e RAILS_ENV=development --rm backend rake db:schema:load --trace

app.stop:
	docker compose down

app.start:
	docker compose down && docker compose up

# ----------------------------------------------

init_build.prod:
	$(MAKE) app.build_prod app.create_prod_db app.load_prod_schema app.migrate_prod app.stop_prod COMPOSE_FILE=${COMPOSE_FILE}

app.build_prod:
	docker compose -f ${COMPOSE_FILE} build

app.create_prod_db:
	docker compose -f ${COMPOSE_FILE} run -e RAILS_ENV=production --rm backend rake db:create

app.load_prod_schema:
	docker compose -f ${COMPOSE_FILE} run -e RAILS_ENV=production --rm backend rake db:schema:load --trace

app.migrate_prod:
	docker compose -f ${COMPOSE_FILE} run -e RAILS_ENV=production --rm backend rake db:migrate

app.stop_prod:
	docker compose -f ${COMPOSE_FILE} down

app.start_prod:
	docker compose -f ${COMPOSE_FILE} down && docker compose -f ${COMPOSE_FILE} up ; docker compose down