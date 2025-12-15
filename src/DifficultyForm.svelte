<script>
  import { total_question, difficulty, isItStarted } from "./store.js";
</script>

<div class="card" style="width: 22rem;">
  <div class="card-header">
    <p class="fs-4 fw-semibold m-0">Select Difficulty</p>
  </div>

  <div class="card-body">
    <label for="totalQuestion">Number of Question</label>
    <input
      class="w-100 form-control"
      bind:value={$total_question}
      type="number"
      name="totalQuestion"
    />

    <label for="difficulty">Difficulty</label>
    <select
      class="w-100 form-select mb-3"
      name="difficulty"
      bind:value={$difficulty}
    >
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Hard">Hard</option>
    </select>
    <button
      class="btn btn-secondary w-100"
      on:click={() => {
        $isItStarted = true;
      }}>Start</button
    >
  </div>
</div>