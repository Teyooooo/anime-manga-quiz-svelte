<script>
  import {
    total_question,
    difficulty,
    isItStarted,
    currentQuestionIndex,
  } from "./store.js";

  import Header from "./Header.svelte";
  import ThemeMode from "./ThemeMode.svelte";
  import DifficultyForm from "./DifficultyForm.svelte";
  import QuestionCard from "./QuestionCard.svelte";
  import Info from "./Info.svelte";
  import Score from "./Score.svelte";

  let questions;
  $: if ($isItStarted) {
    questions = getQuestions();
  }

  async function getQuestions() {
    const url = `https://opentdb.com/api.php?amount=${$total_question}&category=31&difficulty=${$difficulty.toLocaleLowerCase()}&type=multiple`;
    console.log({ url });
    const res = await fetch(url);
    const data = await res.json();
    console.log({ data });
    return data;
  }
</script>

<Header />

{#if !$isItStarted}
  <DifficultyForm />
{:else}
  {#await questions}
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  {:then datas}
    {#if datas.results.length > $currentQuestionIndex}
      <Info />
      <QuestionCard data={datas.results[$currentQuestionIndex]} />
    {:else}
      <Score />
    {/if}
  {/await}
{/if}

<div class="d-flex justify-content-center fixed-bottom mb-3">
  <ThemeMode />
</div>