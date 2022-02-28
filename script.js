const data = [
      {
          name: "Deepak",
          regno: "1",
          Science:"95",
          Chemistry:"55.9",
          Physics: "75",
          Algebra: "45"
      },
      {
          name: "Rohan",
          regno: "2",
          Science:"75",
          Chemistry:"65",
          Physics: "65.88",
          Algebra: "85"
      },
      {
          name: "Vishal",
          regno: "3",
          Science:"76",
          Chemistry:"55",
          Physics: "82.88",
          Algebra: "75"
      }
  ]
  const results = document.getElementById('res')
  const smBtn = document.getElementById('button')
  smBtn.addEventListener("click", function() {
      const name = document.getElementById('text').value;
      for(let i = 0; i < data.length; i++){
          if(data[i].name.toLowerCase() == name.toLowerCase()){
              console.log(data[i].marks)
              results.innerHTML ="<h3>" + "Science : " + data[i].Science +"</h3>" + "<h3>" + "Chemistry : " 
              + data[i].Chemistry +"</h3>" +"<h3>" + "Physics : " + data[i].Physics +"</h3>"+
              "Algebra : " +data[i].Algebra + "</h3>"
              return;
          }
      }
      results.innerHTML = "<h1>" + "Not available" + "</h1>" 
  })
  