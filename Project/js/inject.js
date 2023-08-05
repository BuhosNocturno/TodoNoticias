const injectHTML = async (injectPath, element) => {
    try {
      const response = await fetch(injectPath);
      if (!response.ok) return
      const text = await response.text()
      element.innerHTML += text
    } catch (error) {
      console.log(error)
    }
  }