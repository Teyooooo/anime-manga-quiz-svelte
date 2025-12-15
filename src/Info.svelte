<script>
    import {total_question, currentQuestionIndex, totalCorrect, difficulty} from "./store.js"
</script>

<div class="text-body">
    <p>Difficulty: {$difficulty}</p>
    <p>{$currentQuestionIndex + 1}/{$total_question}</p>
    <p>Score: {$totalCorrect}</p>
</div>

<style>
  div {
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding: 20px;
  }

  p{
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 800;
  }

</style>