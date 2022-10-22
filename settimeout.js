function printNumbers(from, to) {
    let current = from;
  
    function go() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }
  
    go();
    let timerId = setInterval(go, 5000);
  }
  
  setTimeout(() => {
    printNumbers(1, 10);
  }, 10000); 