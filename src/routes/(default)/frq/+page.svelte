<script lang="ts">
  import Card from "../../../components/Card.svelte";
  let categories = ["2D Arrays", "Arrays", "ArrayLists"];

    // Wait for the DOM to be fully loaded
  /*document.addEventListener("DOMContentLoaded", function() {
    
  filterSelection("all");

    function filterSelection(c) {
      let x, i;
      x = document.getElementsByClassName("filterDiv");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
      }
    }

    function w3AddClass(element, name) {
      let i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }

    function w3RemoveClass(element, name) {
      let i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (let i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }

    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  });*/
  
  let levels = [];
  let selectedCategory = null;

  fetchLevels();
  
  async function fetchLevels () {
    fetch("https://monkeybackend.rohanj.dev/api/code/getLevelList", {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response =>
        response.json().then(data => {
          for (let level of data.levels) {
            let passedTestcases = data.status?.[level.number.toString()] !== undefined ? data.status?.[level.number.toString()] : -1;
            let categories = level.categories.map(c => c.name);
            levels.push({ passedTestcases, categories, totalTestcases: level.testcases, title: level.name, level: level.number.toString(), link: level.number.toString(), text: "Run code for this FRQ" });
          }
          levels = [...levels];
        })
        .catch(e => { })
      )
      .catch(error => {
      
      })
   }

   function selectCategory(category) {
     selectedCategory = category;
   }
</script>

<style>
  .categories {
    margin-bottom: 20px;
  }

  .categories button {
    background-color: white;
    padding: 10px 15px;
    border-radius: 4px;
    margin-right: 10px;
    margin-bottom: 10px;
    border: none;
    color: green;
  }
</style>

<div class="flex flex-wrap w-screen h-full min-h-screen py-24 px-8 gap-10 bg-green-600">
  <div class="categories">
    <button on:click={() => selectCategory(null)}>All</button>
    {#each categories as category}
      <button on:click={() => selectCategory(category)}>{category}</button>
    {/each}
  </div>

  {#each levels as level (level.level)}
    {#if !selectedCategory || level.categories.includes(selectedCategory)}
      <Card {...level} />
    {/if}
  {/each}
</div>
