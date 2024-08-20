<template>
  <div class="tic-tac-toe-container">
    <div class="row">
      <Squares :value="squares[0]" @click="handleClick(0)" />
      <Squares :value="squares[1]" @click="handleClick(1)" />
      <Squares :value="squares[2]" @click="handleClick(2)" />
    </div>
    <div class="row">
      <Squares :value="squares[3]" @click="handleClick(3)" />
      <Squares :value="squares[4]" @click="handleClick(4)" />
      <Squares :value="squares[5]" @click="handleClick(5)" />
    </div>
    <div class="row">
      <Squares :value="squares[6]" @click="handleClick(6)" />
      <Squares :value="squares[7]" @click="handleClick(7)" />
      <Squares :value="squares[8]" @click="handleClick(8)" />
    </div>
    <h1>{{ status }}</h1>
    <button @click="handleRestart">Restart</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Squares from "./squares.vue";

const squares = ref(Array(9).fill(""));
const isXTurn = ref(true);
const status=ref("");

const handleRestart=()=>{
    squares.value=Array(9).fill("");
    isXTurn.value=true;
}

const handleClick = (getCurrentSquare) => {
  let cpySquares = [...squares.value];
  if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
  cpySquares[getCurrentSquare] = isXTurn.value ? "X" : "O";
  isXTurn.value = !isXTurn.value;
  squares.value = cpySquares;
};

const getWinner = (squares) => {
  const winnerPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winnerPatterns.length; i++) {
    const [x, y, z] = winnerPatterns[i];
    if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
      console.log("win");
      return squares[x];
    }
  }

  return null;
};

watch([squares,isXTurn],()=>{
    if(!getWinner(squares.value)&&squares.value.every((item)=>item!=="")){
        status.value="This is a draw! Please restart the game"
    }else if(getWinner(squares.value)){
        status.value=`Winner is ${getWinner(squares.value)}. Please restart the game`
    }else{
        status.value=`Next player is ${isXTurn.value?"X":"O"}`
    }
},{immediate:true});
</script>

<style lang="scss" scoped>
.tic-tac-toe-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}
</style>
