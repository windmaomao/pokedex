# Pokedex clone

A website similar to [pokedex](pokemon.com/us/pokedex).

```
  npm start
  npm test
```

## Notes

Since there's requirement for redux+typescript, I started with the following template.

```
npx create-react-app my-app --template redux-typescript
```

I decided to avoid api thunk for this test, instead all API call are considered as pure side effect that sits outside of redux. I chose this solely to control the time spent on this project.
