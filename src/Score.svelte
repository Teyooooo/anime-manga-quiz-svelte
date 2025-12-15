<script>
    import {total_question, totalCorrect} from "./store.js"
</script>

<div>
    <p class="text-body">Your score is {$totalCorrect} out of {$total_question}</p>
</div>

<style>
  div {
    width: 18rem;
    padding: 20px;
  }

  p{
    padding: 0;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
  }

</style>