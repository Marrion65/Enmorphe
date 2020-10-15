<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  ...
<!-- Add this code block -->
<pre id="logger" style="text-transform:capitalize;
                          background-color: #f5f5f5;
                          margin-bottom: 0;"></pre>
 
<script src="https://rawcdn.githack.com/lmkhwana/consoletodiv/817bdd2100537c7536332ad963a298fa274fe909/static.js"></script>
<script>
  /*
  * INITIALIZE
  */
    consoletodiv('logger')  // Logger is the id of the 'pre'
    
  /*
  * TEST
  */
    console.log('testing')
</script> 
</body>
</html>
