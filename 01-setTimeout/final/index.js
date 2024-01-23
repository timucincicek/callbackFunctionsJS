function doSomethingAsync(callback) {
    setTimeout(() => {
      console.log('Asynchronous task is completed');
      callback();
    }, 1000);
  }
  
  function helloWorldWriter() {
    console.log('Hello world');
  }
  
  doSomethingAsync(helloWorldWriter);
  