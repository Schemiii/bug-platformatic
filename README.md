# Platformatic frontend client generation problem

reproducte

```
cp  .env.sample
npm i && npm run start
cd services/frontend-astro/src
platformatic client http://127.0.0.1:3042/documentation/openapi.json --frontend --language typescript
```

now navigate to the frontend and see error message: The symbol "\_fairDbUpdateProduct" has already been declared some stuff is
