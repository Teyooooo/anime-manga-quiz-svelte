<script>
  import { currentQuestionIndex, totalCorrect } from "./store.js";
  export let data;

  let correct_answer;
  let choices_answers;
  let result = false;
  let wasAnswered = false;
  let selectedAnswer;

  $: if (data) {
    correct_answer = data?.correct_answer;
    choices_answers = [...data?.incorrect_answers, data?.correct_answer];

    result = false;
    wasAnswered = false;
    selectedAnswer = null
    randomizeChoices(choices_answers);
    console.log({ choices_answers });
  }

  function checkAnswer(answer) {
    wasAnswered = true;
    selectedAnswer = answer
    result = correct_answer === answer;

    if (result) {
      $totalCorrect++;
    }

    setTimeout(() => {
      $currentQuestionIndex++;
    }, 1500);
  }

  function randomizeChoices(choices) {
    return choices.sort(() => Math.random() - 0.5);
  }
</script>

<div class="card p-2" style="width: 22rem;">

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

  {#key data?.question}
    {#each choices_answers as answer}
      <button
        class="btn m-1
          {selectedAnswer === answer
            ? result ? 'btn-success' : 'btn-danger'
            : 'btn-outline-secondary'}"
        disabled={wasAnswered}
        on:click={(e) => {e.target.blur(); checkAnswer(answer);}}
      >
        {@html answer}
      </button>
    {/each}
  {/key}

</div>
