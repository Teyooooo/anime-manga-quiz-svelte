<script>
  import {
    total_question,
    difficulty,
    isItStarted,
    currentQuestionIndex, 
  } from "./store.js";

  import Header from "./Header.svelte";
  import ThemeMode from "./ThemeMode.svelte";
  import GithubButton from "./GithubButton.svelte";
  import DifficultyForm from "./DifficultyForm.svelte";
  import QuestionCard from "./QuestionCard.svelte";
  import Info from "./Info.svelte";
  import Score from "./Score.svelte";
  import Retry from "./Retry.svelte";

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

<div class="d-flex flex-column justify-content-center align-items-center h-100" style="">
  <Header />

  <div class="flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    {#if !$isItStarted}
      <DifficultyForm />
    {:else}
      {#await questions}
        <div class="spinner-border text-body" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      {:then datas}
        {#if datas.results.length > $currentQuestionIndex}
          <Info />
          <QuestionCard data={datas.results[$currentQuestionIndex]} />
        {:else}
          <Score />
          <Retry />
        {/if}
      {/await}
    {/if}
  </div>
  <div class="pb-2">
    <GithubButton />
    <ThemeMode />
  </div>
</div>
