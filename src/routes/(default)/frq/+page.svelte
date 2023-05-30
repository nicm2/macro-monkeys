<script lang="ts">
  import Card from "../../../components/Card.svelte";
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
              // reassign the varaible so state is updated
              levels = [...levels];
        }).catch(e => { })
        )
        .catch(error => {
        
        })
   }
</script>

<div id="myBtnContainer" class="bg-green-700">
    <button class="btn active" onclick="filterSelection('all')"> Show all</button>
    <button class="btn" onclick="filterSelection('mncs')"> Methods and Control Structures</button>
    <button class="btn" onclick="filterSelection('classes')"> Classes</button>
    <button class="btn" onclick="filterSelection('arrays')"> Array/ArrayList</button>
    <button class="btn" onclick="filterSelection('2d')"> 2D Array</button>
  </div>

  <style>
    .filterDiv {
      float: left;
      background-color: #2196F3;
      color: #ffffff;
      width: 100px;
      line-height: 100px;
      text-align: center;
      margin: 2px;
      display: none;
    }
    
    .show {
      display: block;
    }
    
    .container {
      margin-top: 20px;
      overflow: hidden;
    }    
    .btn {
      border: none;
      outline: none;
      padding: 12px 16px;
      background-color: #f1f1f1;
      cursor: pointer;
    }
    
    .btn:hover {
      background-color: #ddd;
    }
    
    .btn.active {
      background-color: #666;
      color: white;
    }
    </style>

<div class="flex flex-wrap w-screen h-full min-h-screen py-24 px-8 gap-10 bg-green-600">
    {#each levels as level}
      <Card {...level} />
    {/each}
  
       

</div>
