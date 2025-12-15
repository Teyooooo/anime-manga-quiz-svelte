<script>
  import {
    total_question,
    difficulty,
    isItStarted,
    currentQuestionIndex,
    totalCorrect,
  } from "./store.js";

  function retry() {
    $totalCorrect = 0;
    $total_question = 10;
    $difficulty = "Easy";
    $isItStarted = false;
    $currentQuestionIndex = 0;
  }
</script>

<button class="btn" on:click={retry}>
  <i class="bi bi-arrow-clockwise fs-1 fw-medium "></i>
</button>
