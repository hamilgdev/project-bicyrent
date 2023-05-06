init_build.dev:
	$(MAKE) app.build_dev app.create_dev_test_db app.load_dev_schema app.stop_dev COMPOSE_FILE=${COMPOSE_FILE}

app.build_dev:
	docker compose -f ${COMPOSE_FILE} build $(cache)

app.create_dev_test_db:
	docker compose -f ${COMPOSE_FILE} run -e RAILS_ENV=test --rm backend rake db:create

app.load_dev_schema:
	docker compose -f ${COMPOSE_FILE} run -e RAILS_ENV=development --rm backend rake db:schema:load --trace

app.start_dev:
	docker compose -f ${COMPOSE_FILE} down && docker compose -f ${COMPOSE_FILE} up ; docker compose down

app.stop_dev:
	docker compose -f ${COMPOSE_FILE} down

# ----------------------------------------------

frontend.start:
	docker compose run --rm --name bicyrent_frontend_1 \
	--no-deps --service-ports frontend

backend.start:
	docker compose run --rm --name bicyrent_backend_1 \
	--service-ports backend ; docker compose down

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

app.start_prod:
	docker compose -f ${COMPOSE_FILE} down && docker compose -f ${COMPOSE_FILE} up ; docker compose down

app.stop_prod:
	docker compose -f ${COMPOSE_FILE} down
