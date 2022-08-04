# Traefik Errors Middleware 

## Reproduction

* `docker-compose up`
* navigate to `http://localhost/404`

## What you will see

Traefik correctly recognizes the 404 error of app1 and uses service app2 to serve the /test page instead.
But even though it's originally a 404 error, the resulting page has an status code of 200.
