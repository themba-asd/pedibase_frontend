<script setup>
import SearchHeader from '../components/SearchHeader.vue'

</script>

<template>
  <div class="main">

    <div>
      <SearchHeader title="Add a new dog:" placeholder="Enter the dog's name" />
    </div>
    <hr>
    
    <form action method="post">

      <div>
        <label>
          Call Name:
          <input type="text">
        </label>

        <label>
          RegNo:
          <input type="number">
        </label>

        <label>
          Sire:
          <input type="text">
        </label>

        <label>
          Dam:
          <input type="text">
        </label>

        <label>
          Sex:
          <select>
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label>
          Date of Birth:
          <input type="date">
        </label>

        <label>
          PreTitle:
          <input type="text">
        </label>

        <label>
          PostTitle:
          <input type="text">
        </label>

        <label>
          Cotation:
          <input type="text">
        </label>

        <label>
          Cotation Earned Date:
          <input type="date">
        </label>

        <label>
          Color:
          <select>
            <option value="">Select Color</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="grey">Grey</option>
            <option value="white">White</option>
          </select>
        </label>

        <label>
          height:
          <input type="number">
        </label>

        <label>
          Weight:
          <input type="number">
        </label>

      </div>

      <div>

        <label>
          CHIC:
          <input type="text">
        </label>

        <label>
          OFA:
          <input type="text">
        </label>

        <label>
          Hips:
          <input type="text">
        </label>

        <label>
          Hips Date
          <input type="date">
        </label>

        <label>
          Elbow:
          <input type="text">
        </label>

        <label>
          Elbow Date
          <input type="date">
        </label>

        <label>
          Cardiac:
          <input type="text">
        </label>

        <label>
          Cardiac Date
          <input type="date">
        </label>

        <label>
          Eyes:
          <input type="text">
        </label>

        <label>
          Eye Test Date:
          <input type="date">
        </label>

      </div>

      <div>

        <label>
          Identification No:
          <input type="text">
        </label>

        <label>
          Breeder:
          <input type="text">
        </label>

        <label>
          Owner:
          <input type="text">
        </label>

        <label>
          Country of Origin:
          <input type="text">
        </label>

        <label>
            Breeding Dog:

            <select>
              <option value="">Select Breeding</option>
              <option value="active">Active</option>
              <option value="retired">Retired</option>
              <option value="pet">Pet</option>
            </select>

        </label>

        <label>
          Date of Death:
          <input type="date">
        </label>

        <label>
          DNA Profile:
          <input type="file">
        </label>

        <label>
          Photo:
          <input type="file">
        </label>

      </div>

    </form>
    <hr>

    <div>
      <button type="button">Save and Submit</button>
      <button type="button">Cancel</button>
    </div>

  </div>
</template>


<style scoped>
.main {
  display: grid;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
}

form {
  display: flex;
  justify-content: space-between;
}

form div {
  display: grid;
  height: 100%;
  gap: .2rem;
}

form div label,
form div label div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

form div label,
form div label div {
  gap: 5rem;
}

</style>