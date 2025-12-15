<script>
  import { currentQuestionIndex, totalCorrect } from "./store.js";
  export let data;

  let correct_answer;
  let choices_answers;
  let result = false;
  let wasAnswered = false;

  $: if (data) {
    correct_answer = data?.correct_answer;
    choices_answers = [...data?.incorrect_answers, data?.correct_answer];

    result = false;
    wasAnswered = false;

    randomizeChoices(choices_answers);
    console.log({ choices_answers });
  }

  function checkAnswer(answer) {
    wasAnswered = true;
    result = correct_answer === answer;

    if (result) {
      $totalCorrect++;
    }

    setTimeout(() => {
      $currentQuestionIndex++;
      e.target.blur();
    }, 1500);
  }

  function randomizeChoices(choices) {
    return choices.sort(() => Math.random() - 0.5);
  }
</script>

<div class="card mt-5 mx-auto p-2" style="width: 25rem;">

  <p class="fs-4 fw-semibold m-0 mb-4">{@html data?.question}</p>

  {#if wasAnswered}
    {#if result}
      <p class="fs-5 fw-semibold" style="color: green;">You are CORRECT!</p>
    {:else}
      <p class="fs-5 fw-semibold" style="color: red;">
        You are WRONG! <br />Correct Answer: {@html correct_answer}
      </p>
    {/if}
  {/if}

  {#each choices_answers as answer}
    <button class="btn btn-outline-secondary" on:click={(e) => {checkAnswer(answer, e);}}>{@html answer}</button>
  {/each}
</div>

