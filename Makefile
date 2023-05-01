init: app.build app.create_test_db app.load_schema app.stop

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