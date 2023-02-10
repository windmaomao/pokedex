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

I decided to avoid api thunk for this exercise, instead all API call are considered as pure side effects that sit outside of redux. I did this to save time.
