<script>
    import {total_question, totalCorrect} from "./store.js"
</script>

<div>
    <p>Your score is {$totalCorrect} out of {$total_question}</p>
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
    margin: 30vh auto 0;
    padding: 0;
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
  }

</style>