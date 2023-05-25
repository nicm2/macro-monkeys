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

    <Card title="2018 FRQ 3A" text="Run code for this FRQ" link="2018A" level="0"/>

    <Card title="2018 FRQ 3B" text="Run code for this FRQ" link="2018B" level="1"/>

    <Card title="2017 FRQ 4A" text="Run code for this FRQ" link="2017A" level="2"/>

    <Card title="2017 FRQ 4B" text="Run code for this FRQ" link="2017B" level="3"/>

    <Card title="2016 FRQ A" text="Run code for this FRQ" link="2016A" level="4"/>

    <Card title="2016 FRQ B" text="Run code for this FRQ" link="2016B" level="5"/>

    <Card title="Extra Credit" text="Run code for this FRQ" link="extra" level="6"/>

</div>
