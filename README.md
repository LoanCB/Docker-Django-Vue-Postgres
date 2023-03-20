# Lyth Project

- Frontend : VueJS on [localhost:3000](http://localhost:3000)
- Backend : Django 4.1 & DRF on [localhost:8000](http://localhost:8000)
- Database : Postgres on port 5432
- Virtualization : docker

## Run project

```shell
docker compose up
```
You can add any options :
- ```--build ``` to build project
- ```-d``` to run it in background

## Django commands
Create migration
```shell
docker compose run backend sh -c "python manage.py createmigration"
```

Migrate your database
```shell
docker compose run backend sh -c "python manage.py migrate" 
```

Create super use
```shell
docker compose run backend sh -c "python manage.py createsuperuser"
```
