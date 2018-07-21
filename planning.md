# Crab Trap Planning

# Scenes

* Entry
* Multiplayer Connect
* Wrong Rotation
* Playing Game
* Game Over

# Components

* Crab
* Game Board
* Sand Castle
* Rock
* Drift Wood
* Multiplayer Connect Form
* Button
  * Start Game
  * Play Multiplayer
  * Pause Game
  * Exit Game

# State

## App State

```
{
  gameStatus
  fullscreen
  rotate
}
```

## Game Board State

```
{
  hidingSpots
  numCrab
  score
  difficulty
}
```

## Crab State

```
{
  action
  walkTime
  direction
  paused
  currentPos
}
```