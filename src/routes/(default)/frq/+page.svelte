<script lang="ts">
    import Card from "../../../components/Card.svelte";
</script>

<div id="myBtnContainer" class="bg-green-700">
    <button class="btn active" onclick="filterSelection('all')"> Show all</button>
    <button class="btn" onclick="filterSelection('mncs')"> Methods and Control Structures</button>
    <button class="btn" onclick="filterSelection('classes')"> Classes</button>
    <button class="btn" onclick="filterSelection('arrays')"> Array/ArrayList</button>
    <button class="btn" onclick="filterSelection('2d')"> 2D Array</button>
  </div>

<div class="flex flex-wrap w-screen h-full min-h-screen py-24 px-8 gap-10 bg-green-600">

    <Card title="2018 FRQ 3A" text="Run code for this FRQ" link="2018A" level="0"/>

    <Card title="2018 FRQ 3B" text="Run code for this FRQ" link="2018B" level="1"/>

    <Card title="2017 FRQ 4A" text="Run code for this FRQ" link="2017A" level="2"/>

    <Card title="2017 FRQ 4B" text="Run code for this FRQ" link="2017B" level="3"/>

    <Card title="2016 FRQ A" text="Run code for this FRQ" link="2016A" level="4"/>

    <Card title="2016 FRQ B" text="Run code for this FRQ" link="2016B" level="5"/>

    <Card title="Extra Credit" text="Run code for this FRQ" link="extra" level="6"/>

</div>