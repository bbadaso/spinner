
let delay = 20;

for (const char of sentence) {
    setTimeout(() => {
    
        process.stdout.write(char);
      }, delay) 
    delay = delay + 200;
}
