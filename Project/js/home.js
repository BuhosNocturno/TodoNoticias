const executeInjectHome = async () => {
    await injectHTML('./templates/header.html', document.getElementById('bodyInject'));
    await injectHTML('./templates/body.html', document.getElementById('bodyInject'));
    await injectHTML('./templates/publicidad.html', document.getElementById('bodyInject'));
    await injectHTML('./templates/footer.html', document.getElementById('bodyInject'));
  
  }
  executeInjectHome()