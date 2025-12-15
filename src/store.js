  import {writable} from "svelte/store"

  export let total_question = writable(10);
  export let difficulty = writable("Easy");
  export let isItStarted = writable(false);
  export let currentQuestionIndex = writable(0)
  export let totalCorrect = writable(0)