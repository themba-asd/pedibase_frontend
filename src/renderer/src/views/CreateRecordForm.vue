<script setup></script>

<template>
  <div class="main">
    <div>
      <input type="button" value="Create New Pedibase Form">
    </div>
    <form action method="post">
      <div>
        <label>
          identifier
          <input type="number">
        </label>
        <label>
          name
          <input type="text">
        </label>
        <label>
          sire
          <input type="number">
        </label>
        <label>
          dam
          <input type="number">
        </label>
      </div>
      <div>
        <label>
          kind
          <input type="text">
        </label>
        <label>
          breeder
          <input type="number">
        </label>
        <label>
          description
          <input type="text">
        </label>
        <label>
          dna registration
          <input type="text">
        </label>
      </div>
      <div>
        <label>
          identifier
          <input type="number">
        </label>
        <label>
          name
          <input type="text">
        </label>
        <label>
          sire
          <input type="number">
        </label>
        <label>
          dam
          <input type="number">
        </label>
      </div>
      <div>
        <label>
          birthdate
          <input type="date">
        </label>
        <label>
          <div>
            <input type="radio">
            female
          </div>
          <div>
            <input type="radio">
            male
          </div>
        </label>
        <label>
          <div>
            <input type="radio">
            offspring
          </div>
        <div>
            <input type="radio">
            no-offspring
        </div>
        </label>
      </div>
    </form>
    <div>
        <button type="button">Creat Record</button>
    </div>   
  </div>
</template>


<style scoped>
.main {
    display: grid;
    height: 100%;
    align-content: space-between;
    padding: .5rem;
}

form {
    display: flex;
    font-size: 18px;
}
form div,
form div label {
    display: grid;
    width: 100%;
    padding-right: 1rem;
}
form div label div {
    display: flex;
    align-items: center;
    gap: .5rem;
}
input[type='button'] {
    font-size: 20px;
}
</style>